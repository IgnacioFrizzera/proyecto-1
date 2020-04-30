
var brazil_info, spain_info, usa_info, china_info, italy_info, russia_info;

// All countries dates are from 1-22 to present
var dates = [];

// All arrays have the same length
var arrs_len;

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
toggleSwitch.addEventListener('change', switchTheme, false);

// On page launch, loads data and makes the graph
window.onload = load_data();

/** 
 * Loads and plots all the data on page launch
 * https://raw.githubusercontent.com/pomber/covid19/master/docs/timeseries.json github repo file
 * */
function load_data() {

    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }


    const url = "https://raw.githubusercontent.com/pomber/covid19/master/docs/timeseries.jso";

    /** JSON
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
        russia_info = data.Russia;

        arrs_len = Object.keys(brazil_info).length;

        // All dates are the same for each country
        for (var i = 0; i < arrs_len; i++) {
            dates.push(brazil_info[i].date);
        }

        // Store last version of data in case the API doesn't work in the future

        var today = new Date();
        today = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        // Information updates daily, so if the last update was today, there's no need to save all the data again
        if (today != localStorage.getItem("last_update")) {
            localStorage.clear();

            localStorage.setItem("brazil", JSON.stringify(brazil_info));
            localStorage.setItem("spain", JSON.stringify(spain_info));
            localStorage.setItem("italy", JSON.stringify(italy_info));
            localStorage.setItem("usa", JSON.stringify(usa_info));
            localStorage.setItem("china", JSON.stringify(china_info));
            localStorage.setItem("russia", JSON.stringify(russia_info));

            localStorage.setItem("dates", JSON.stringify(dates));

            localStorage.setItem("len", arrs_len.toString());

            localStorage.setItem("last_update", today);
        }

        show_cases();
    })
        // In case it fails to get the data from the URL, loads last saved data
        .fail(function () {

            const storage_length = localStorage.length;

            if (3 > 5) {   // Case the local storage has API information stored.

                brazil_info = JSON.parse(localStorage.getItem("brazil"));
                spain_info = JSON.parse(localStorage.getItem("spain"));
                italy_info = JSON.parse(localStorage.getItem("italy"));
                usa_info = JSON.parse(localStorage.getItem("usa"));
                china_info = JSON.parse(localStorage.getItem("china"));
                russia_info = JSON.parse(localStorage.getItem("russia"));

                dates = JSON.parse(localStorage.getItem("dates"));

                arrs_len = parseInt(localStorage.getItem("len"));

                date = localStorage.getItem("last_update");

                alert("Server error, using data from: " + date);
            }
            else {  // Case API failed, local storage is empty, get information from local file

                // Get local JSON arrays for each country
                brazil_info = brazil_local_data;
                spain_info = spain_local_data;
                usa_info = usa_local_data;
                china_info = china_local_data;
                italy_info = italy_local_data;
                russia_info = russia_local_data;

                arrs_len = Object.keys(brazil_info).length;

                // All dates are the same for each country
                for (var i = 0; i < arrs_len; i++) {
                    dates.push(brazil_info[i].date);
                }
            }
            show_cases();
        });
}


function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

/**
 * Gets active cases data and then plots it
 * */
function show_cases() {

    var spain_confirmed = [];
    var brazil_confirmed = [];
    var usa_confirmed = [];
    var china_confirmed = [];
    var italy_confirmed = [];
    var russia_confirmed = [];

    for (i = 0; i < arrs_len; i++) {
        brazil_confirmed.push(brazil_info[i].confirmed);
        usa_confirmed.push(usa_info[i].confirmed);
        spain_confirmed.push(spain_info[i].confirmed);
        china_confirmed.push(china_info[i].confirmed);
        italy_confirmed.push(italy_info[i].confirmed);
        russia_confirmed.push(russia_info[i].confirmed);
    }

    var countries = [brazil_confirmed, spain_confirmed, usa_confirmed, china_confirmed, italy_confirmed, russia_confirmed];
    make_graph(dates, countries, "Active cases", "Active cases");
}

/**
 * Gets deaths data and then plots it
 * */
function show_deaths() {

    var spain_deaths = [];
    var brazil_deaths = [];
    var usa_deaths = [];
    var china_deaths = [];
    var italy_deaths = [];
    var russia_deaths = [];

    for (i = 0; i < arrs_len; i++) {
        brazil_deaths.push(brazil_info[i].deaths);
        usa_deaths.push(usa_info[i].deaths);
        spain_deaths.push(spain_info[i].deaths);
        china_deaths.push(china_info[i].deaths);
        italy_deaths.push(italy_info[i].deaths);
        russia_deaths.push(russia_info[i].deaths);
    }

    var countries = [brazil_deaths, spain_deaths, usa_deaths, china_deaths, italy_deaths, russia_deaths];
    make_graph(dates, countries, "Deaths", "Total deaths");
}

/**
 * Gets recovered cases data and then plots it
 * */
function show_recovered() {

    var spain_recovered = [];
    var brazil_recovered = [];
    var usa_recovered = [];
    var china_recovered = [];
    var italy_recovered = [];
    var russia_recovered = [];

    for (i = 0; i < arrs_len; i++) {
        brazil_recovered.push(brazil_info[i].recovered);
        usa_recovered.push(usa_info[i].recovered);
        spain_recovered.push(spain_info[i].recovered);
        china_recovered.push(china_info[i].recovered);
        italy_recovered.push(italy_info[i].recovered);
        russia_recovered.push(russia_info[i].recovered);
    }

    var countries = [brazil_recovered, spain_recovered, usa_recovered, china_recovered, italy_recovered, russia_recovered];
    make_graph(dates, countries, "Recovered", "Recovered cases");
}

/**
 * Gets active cases in the past 15 days data and then plots it
 * */
function show_lastfif() {
    var spain_confirmed = [];
    var brazil_confirmed = [];
    var usa_confirmed = [];
    var china_confirmed = [];
    var italy_confirmed = [];
    var russia_confirmed = [];

    var i = arrs_len - 15;
    var dates_aux = [];

    for (i; i < arrs_len; i++) {
        brazil_confirmed.push(brazil_info[i].confirmed);
        usa_confirmed.push(usa_info[i].confirmed);
        spain_confirmed.push(spain_info[i].confirmed);
        china_confirmed.push(china_info[i].confirmed);
        italy_confirmed.push(italy_info[i].confirmed);
        russia_confirmed.push(russia_info[i].confirmed);

        dates_aux.push(brazil_info[i].date);
    }

    var countries = [brazil_confirmed, spain_confirmed, usa_confirmed, china_confirmed, italy_confirmed, russia_confirmed];
    make_graph(dates_aux, countries, "Active cases", "Activate cases in the past 15 days");
}


/**
 *  * Makes the graph to show the information
 * @param {dates} x_value
 * @param {array where each index is the information of a country} y_values
 * @param {shows if the graph is showing deaths, active, recovered cases} y_label
 * @param {title of the graph} graph_title
 */
function make_graph(x_value, y_values, y_label, graph_title) {
    const graph = document.getElementById('graphic');

    var brazil_graph = {
        x: x_value,
        y: y_values[0],
        type: 'scatter',
        name: 'Brazil'
    };

    var spain_graph = {
        x: x_value,
        y: y_values[1],
        type: 'scatter',
        name: "Spain"
    };

    var usa_graph = {
        x: x_value,
        y: y_values[2],
        type: 'scatter',
        name: 'U.S.A'
    };

    var china_graph = {
        x: x_value,
        y: y_values[3],
        type: 'scatter',
        name: 'China'
    };

    var italy_graph = {
        x: x_value,
        y: y_values[4],
        type: 'scatter',
        name: 'Italy'
    };

    var russia_graph = {
        x: x_value,
        y: y_values[5],
        type: 'scatter',
        name: 'Russia'
    };

    var data = [brazil_graph, spain_graph, usa_graph, china_graph, italy_graph, russia_graph];

    var layout = {
        title: {
            text: graph_title
        },
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

    Plotly.newPlot(graph, data, layout, { displayModeBar: false });
}
