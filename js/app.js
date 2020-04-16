// Incorpore JQuery para obtener el JSON de la URL


var brazil_confirmed = brazil_deaths = brazil_recovered = [];

var spain_confirmed = spain_deaths = spain_recovered = [];

var usa_confirmed = usa_deaths = usa_recovered = [];


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

        var brazil_info = data.Brazil;
        var spain_info = data.Spain;
        var usa_info = data.US;

        arrs_len = Object.keys(brazil_info).length;

        // Test print en parrafo
        var par = document.getElementById("json_plot");
        par.innerHTML = JSON.stringify(usa_info[0].date) + " US day 0";

        // Generar arrays
        for (i = 0; i < arrs_len; i++) {

            brazil_confirmed.push(brazil_info[i].confirmed);
            usa_confirmed.push(usa_info[i].confirmed);
            spain_confirmed.push(spain_info[i].confirmed);

            dates.push(brazil_info[i].date);
        }


        // Graficar la informacion
        grafico = document.getElementById('grafico');

        var brazil_grafico = {
            x: dates,
            y: brazil_confirmed,
            type: 'scatter',
            name: 'Brasil'
        };

        var spain_grafico = {
            x: dates,
            y: spain_confirmed,
            type: 'scatter',
            name: "Espa\361a" //Simbolo de la ñ, no se por qué el UTF-8 no la reconoce
        };

        var usa_grafico = {
            x: dates,
            y: usa_confirmed,
            type: 'scatter',
            name: 'U.S.A'
        };

        var data = [brazil_grafico, spain_grafico, usa_grafico];

        var layout = {
            xaxis: {
                title: 'Fecha',
                showgrid: false,
                zeroline: false
            },
            yaxis: {
                title: 'Casos confirmados',
                showline: false
            }
        };

        Plotly.newPlot(grafico, data, layout);
    });
}


/**
 *  Seria un onClick que desplegaria las 3 opciones: visualizar por infectados, muertos, recuperados
 *  Por defecto esta iniciado en infectados
 * */
function show_options() {

}


/**
 * Cuando se hace un onMouseOver de alguno de los 3 paises, que muestre solo la curva de dicho pais
 * */
function show_country_line() {

}

