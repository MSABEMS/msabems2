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

    var chart_2 = new CanvasJS.Chart("chartContainer2", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
            // text: "Gold Medals Won in Olympics"
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
            name: "PCS Container",
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
            name: "Battery Container 01",
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
            name: "Battery Container 02",
            showInLegend: true,
            dataPoints: [
                { label: "Atlanta 1996", y: 20 },
                { label: "Sydney 2000", y: 13 },
                { label: "Athens 2004", y: 13 },
                { label: "Beijing 2008", y: 16 },
                { label: "London 2012", y: 11 },
                { label: "Rio 2016", y: 17 }
            ]
        }]
    });

    chart_2.render();

    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        chart_2.render();
    }


}
