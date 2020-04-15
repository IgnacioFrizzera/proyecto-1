// Incorpore JQuery para obtener el JSON de la URL

var brazil_info, spain_info, usa_info;

// Todos los arrays van a tener el mismo len, ya que la informacion se toma desde el 22 de enero en adelante
var arrs_len

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
        arrs_len = Object.keys(brazil_info).length;

        spain_info = data.Spain;

        usa_info = data.US;

        // Logeos de testeo para ver bien lo de JSON
        console.log(brazil_info[0], "Brazil day 0");
        console.log(spain_info[0], "Spain day 0");
        console.log(usa_info[0], "USA day 0");

        console.log(brazil_info[0].date, "Brazil day 0 date");
        console.log(spain_info[0].date, "Spain day 0 date");
        console.log(usa_info[0].date, "USA day 0 date");

        // Test print en parrafo
        var par = document.getElementById("json_plot");
        par.innerHTML = JSON.stringify(usa_info[0]) + " US day 0";

    });

    // Faltaria graficar con la informacion obtenida
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

