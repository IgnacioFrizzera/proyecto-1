// Incorpore JQuery para obtener el JSON de la URL y Plotly para graficar

var brazil_info, spain_info, usa_info, china_info, italy_info;

// Todas van del 22 de Enero al dia actual
var dates = [];

// Todos los arrays van a tener el mismo len, ya que la informacion se toma desde el 22 de Enero en adelante
var arrs_len;

// Al cargarse la pagina que ejecute la generacion del grafico
window.onload = load_data();

/** 
 * Carga y grafica toda la informacion de covid-19 de los paises al abrir la pagina
 * https://raw.githubusercontent.com/pomber/covid19/master/docs/timeseries.json archivo en un repo de github
 * */
function load_data() {
    var url = "https://raw.githubusercontent.com/pomber/covid19/master/docs/timeseries.json";

    /** Forma JSON - esto seria cada index de la info del pais
        date: "2020-2-21",
        confirmed: 0,
        deaths: 0,
        recovered: 0
     * */
    $.getJSON(url, function (data) {

        brazil_info = data.Brazil;
        spain_info = data.Spain;
        usa_info = data.US;
        china_info = data.China;
        italy_info = data.Italy;

        arrs_len = Object.keys(brazil_info).length;

        for (var i = 0; i < arrs_len; i++) {
            dates.push(brazil_info[i].date);
        }

        // Store last version of data in case API doesn't work in the future
        localStorage.clear();

        localStorage.setItem("brazil", JSON.stringify(brazil_info));
        localStorage.setItem("spain", JSON.stringify(spain_info));
        localStorage.setItem("italy", JSON.stringify(italy_info));
        localStorage.setItem("usa", JSON.stringify(usa_info));
        localStorage.setItem("china", JSON.stringify(china_info));

        localStorage.setItem("dates", JSON.stringify(dates));

        localStorage.setItem("len", arrs_len.toString());

        var today = new Date();
        last_updated = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        localStorage.setItem("last_update", last_updated);

        show_cases();
    })
        .fail(function () {

            brazil_info = JSON.parse(localStorage.getItem("brazil"));
            spain_info = JSON.parse(localStorage.getItem("spain"));
            italy_info = JSON.parse(localStorage.getItem("italy"));
            usa_info = JSON.parse(localStorage.getItem("usa"));
            china_info = JSON.parse(localStorage.getItem("china"));

            dates = JSON.parse(localStorage.getItem("dates"));

            arrs_len = parseInt(localStorage.getItem("len"));

            date = localStorage.getItem("last_update");

            console.log(brazil_info[0]);

            alert("Server error, using data from: " + date);

            show_cases();
        });
}


function show_cases() {
    console.log("hola");
    console.log(brazil_info[0]);
    // Generar arrays
    var spain_confirmed = [];
    var brazil_confirmed = [];
    var usa_confirmed = [];
    var china_confirmed = [];
    var italy_confirmed = [];

    for (i = 0; i < arrs_len; i++) {
        brazil_confirmed.push(brazil_info[i].confirmed);
        console.log(brazil_info[i].confirmed);
        usa_confirmed.push(usa_info[i].confirmed);
        spain_confirmed.push(spain_info[i].confirmed);
        china_confirmed.push(china_info[i].confirmed);
        italy_confirmed.push(italy_info[i].confirmed);
    }

    // Graficar la informacion
    var countries = [brazil_confirmed, spain_confirmed, usa_confirmed, china_confirmed, italy_confirmed];
    make_graph(dates, countries, "Active cases");
}

function show_deaths() {
    // Generar arrays
    var spain_deaths = [];
    var brazil_deaths = [];
    var usa_deaths = [];
    var china_deaths = [];
    var italy_deaths = [];

    for (i = 0; i < arrs_len; i++) {
        brazil_deaths.push(brazil_info[i].deaths);
        usa_deaths.push(usa_info[i].deaths);
        spain_deaths.push(spain_info[i].deaths);
        china_deaths.push(china_info[i].deaths);
        italy_deaths.push(italy_info[i].deaths);
    }

    // Graficar la informacion
    var countries = [brazil_deaths, spain_deaths, usa_deaths, china_deaths, italy_deaths];
    make_graph(dates, countries, "Deaths");
}

function show_recovered() {
    // Generar arrays
    var spain_recovered = [];
    var brazil_recovered = [];
    var usa_recovered = [];
    var china_recovered = [];
    var italy_recovered = [];

    for (i = 0; i < arrs_len; i++) {
        brazil_recovered.push(brazil_info[i].recovered);
        usa_recovered.push(usa_info[i].recovered);
        spain_recovered.push(spain_info[i].recovered);
        china_recovered.push(china_info[i].recovered);
        italy_recovered.push(italy_info[i].recovered);
    }

    // Graficar la informacion
    var countries = [brazil_recovered, spain_recovered, usa_recovered, china_recovered, italy_recovered];
    make_graph(dates, countries, "Recovered");
}

function show_lastfif() {
    // Generar arrays
    var spain_confirmed = [];
    var brazil_confirmed = [];
    var usa_confirmed = [];
    var china_confirmed = [];
    var italy_confirmed = [];

    var i = arrs_len - 15;
    var dates_aux = [];

    for (i; i < arrs_len; i++) {
        brazil_confirmed.push(brazil_info[i].confirmed);
        usa_confirmed.push(usa_info[i].confirmed);
        spain_confirmed.push(spain_info[i].confirmed);
        china_confirmed.push(china_info[i].confirmed);
        italy_confirmed.push(italy_info[i].confirmed);

        dates_aux.push(brazil_info[i].date);
    }

    var countries = [brazil_confirmed, spain_confirmed, usa_confirmed, china_confirmed, italy_confirmed];
    make_graph(dates_aux, countries, "Active cases in the past 15 days");
}


/**
 *  * Arma el grafico para plasmar la informacion
 * @param {valores de las fechas a graficar} x_value
 * @param {array que contiene los valores de cada pais} y_values
 * @param {string para armar el grafico, puede ser casos confirmados, muertes, recuperados} y_label
 */
function make_graph(x_value, y_values, y_label) {
    var grafico = document.getElementById('graphic');

    var brazil_grafico = {
        x: x_value,
        y: y_values[0],
        type: 'scatter',
        name: 'Brazil'
    };

    var spain_grafico = {
        x: x_value,
        y: y_values[1],
        type: 'scatter',
        name: "Spain"
    };

    var usa_grafico = {
        x: x_value,
        y: y_values[2],
        type: 'scatter',
        name: 'U.S.A'
    };

    var china_grafico = {
        x: x_value,
        y: y_values[3],
        type: 'scatter',
        name: 'China'
    };

    var italy_grafico = {
        x: x_value,
        y: y_values[4],
        type: 'scatter',
        name: 'Italy'
    };


    var data = [brazil_grafico, spain_grafico, usa_grafico, china_grafico, italy_grafico];

    var layout = {
        xaxis: {
            title: 'Date',
            showgrid: false,
            zeroline: false
        },
        yaxis: {
            title: y_label,
            showline: false
        }
    };

    Plotly.newPlot(grafico, data, layout, { displayModeBar: false });
}

