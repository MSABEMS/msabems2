window.onload = function () {

    var chart_1 = new CanvasJS.Chart("chartContainer1", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
            // text: "MSA Control Building Energy Report"
        },
        axisY: {
            title: "Number of Medals"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "spline",
            name: "Grid",
            showInLegend: true,
            dataPoints: [
                { label: "Atlanta 1996", y: 44 },
                { label: "Sydney 2000", y: 37 },
                { label: "Athens 2004", y: 36 },
                { label: "Beijing 2008", y: 36 },
                { label: "London 2012", y: 46 },
                { label: "Rio 2016", y: 46 }
            ]
        },
        {
            type: "spline",
            name: "PV",
            showInLegend: true,
            dataPoints: [
                { label: "Atlanta 1996", y: 16 },
                { label: "Sydney 2000", y: 28 },
                { label: "Athens 2004", y: 32 },
                { label: "Beijing 2008", y: 48 },
                { label: "London 2012", y: 38 },
                { label: "Rio 2016", y: 26 }
            ]
        },
        {
            type: "spline",
            name: "Total Load",
            showInLegend: true,
            dataPoints: [
                { label: "Atlanta 1996", y: 1 },
                { label: "Sydney 2000", y: 11 },
                { label: "Athens 2004", y: 9 },
                { label: "Beijing 2008", y: 19 },
                { label: "London 2012", y: 29 },
                { label: "Rio 2016", y: 27 }
            ]
        },
        {
            type: "spline",
            name: "1st Floor Load",
            showInLegend: true,
            dataPoints: [
                { label: "Atlanta 1996", y: 26 },
                { label: "Sydney 2000", y: 32 },
                { label: "Athens 2004", y: 28 },
                { label: "Beijing 2008", y: 22 },
                { label: "London 2012", y: 20 },
                { label: "Rio 2016", y: 19 }
            ]
        },
        {
            type: "spline",
            name: "2nd Floor Load",
            showInLegend: true,
            dataPoints: [
                { label: "Atlanta 1996", y: 7 },
                { label: "Sydney 2000", y: 8 },
                { label: "Athens 2004", y: 9 },
                { label: "Beijing 2008", y: 13 },
                { label: "London 2012", y: 13 },
                { label: "Rio 2016", y: 9 }
            ]
        },
        {
            type: "spline",
            name: "EBD Load",
            showInLegend: true,
            dataPoints: [
                { label: "Atlanta 1996", y: 20 },
                { label: "Sydney 2000", y: 13 },
                { label: "Athens 2004", y: 13 },
                { label: "Beijing 2008", y: 16 },
                { label: "London 2012", y: 11 },
                { label: "Rio 2016", y: 17 }
            ]
        },
        {
            type: "spline",
            name: "Precision A/C",
            showInLegend: true,
            dataPoints: [
                { label: "Atlanta 1996", y: 20 },
                { label: "Sydney 2000", y: 21 },
                { label: "Athens 2004", y: 22 },
                { label: "Beijing 2008", y: 23 },
                { label: "London 2012", y: 24 },
                { label: "Rio 2016", y: 28 }
            ]
        },
        {
            type: "spline",
            name: "Battrry",
            showInLegend: true,
            dataPoints: [
                { label: "Atlanta 1996", y: 50 },
                { label: "Sydney 2000", y: 40 },
                { label: "Athens 2004", y: 30 },
                { label: "Beijing 2008", y: 20 },
                { label: "London 2012", y: 10 },
                { label: "Rio 2016", y: 30 }
            ]
        },

        ]
    });

    chart_1.render();

    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        chart_1.render();
    }

    // -------------------------- Get data from Heroku Backend------------------------------ //
     jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msrdatalog.herokuapp.com/energy/api/getenergy",
        type: "GET",
        headers: {
            "Authorization": "Token cefa4dbd91305b2eb26ed7961a44970f5d4cb83f",
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msrdatalog.herokuapp.com/energy/api/getenergy",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",

        },
    })
    .done(function(data, textStatus, jqXHR) {
        console.log("HTTP Request Succeeded: " + jqXHR.status);
        data_prepareation(data)        
        
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("HTTP Request Failed");
    })
    .always(function() {
        /* ... */
    });

    // -------------------------- Call function: data_prepareation ------------------------------ //

    // Data prep:
    function data_prepareation(data) {
        console.log(data)
        console.log("Call function: data_prepareation()")
        var labels = []
        var load_data_test = []
        var solar_data_test =[]
        var solar_data_set = []
        var load_data_set = []
        for (var i = 0; i < data.length; i++) {
            var solar_obj = {label: i, y: data[i]["solar"]}
            var load_obj = {label: i, y: data[i]["load"]}
            solar_data_set.push(solar_obj)
            load_data_set.push(load_obj)

            labels[i] = i
            load_data_test[i] = data[i]["load"]
            solar_data_test[i] = data[i]["solar"]
        }

    // -------------------------- ChartJS --------------------------
    // var ctx = document.getElementById('myChart').getContext('2d');
    // var myChart = new Chart(ctx, {
    //     type: 'line',
    //     data: {
    //         labels: labels,
    //         datasets: [{
    //             label: 'Load Consumption',
    //             data: load_data_test,
    //             borderWidth: 1,
    //             borderColor: 'rgba(75, 192, 192, 1)',
    //             backgroundColor:  'rgba(75, 192, 192, 0.2)',
    //         },
    //         {
    //             label: 'Solar Production',
    //             data: solar_data_test,
    //             borderWidth: 1,
    //             borderColor: 'rgba(255, 159, 64, 1)',
    //             backgroundColor:  'rgba(255, 159, 64, 0.2)',
    //         },            
    //     ]},
    //     options: {
    //         scales: {
    //             yAxes: [{
    //                 ticks: {
    //                     suggestedMin: 0,
    //                     suggestedMax: 10
    //                 }
    //             }]
    //         }
    //     }
    // });

    // -------------------------- END of chart.js --------------------------

    // -------------------------- CANVAS.js --------------------------

        var chart_Test = new CanvasJS.Chart("chartContainerTest", {

        animationEnabled: true,
        exportEnabled: true,
        title: {
            // text: "MSA Control Building Energy Report"
        },
        axisY: {
            title: "Energy"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },

        data: [
            {
                type: "spline",
                name: "Load Consumption",
                showInLegend: true,
                dataPoints: load_data_set,
                borderColor: "#3e95cd",
                fill: false
            },
            {
                type: "spline",
                name: "Solar Production",
                showInLegend: true,
                dataPoints: solar_data_set,
                borderColor: "#8e5ea2",
                fill: false,
            },
            ]
        }
    );
    // -------------------------- END of CANVAS.js --------------------------
            
        console.log("-------Done!!!---------")
    
        chart_Test.render();

        function toggleDataSeries(e) {
            if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            }
            else {
                e.dataSeries.visible = true;
            }
            chart_Test.render();
        }
    
    // -------------------------- End of function: data_prepareation ------------------------------ //
    }


}