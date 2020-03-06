




window.onload = function() {

// var ref_indoor = firebase.database().ref().child("peasbhmsr").child("devicetype").child("powermeter");
// var ref_kW_Lighting_1 = ref_indoor.child("floor1light")
// var ref_kW_Outlet_1 = ref_indoor.child("floor1plug")
// var ref_kW_Aircon_1 = ref_indoor.child("floor1air")
//
// ref_kW_Lighting_1.on("value", function(snapshot) {
//     console.log("Get kW_Lighting_1 from firebase")
//     //  console.log(snapshot.val());
//     var kW_Lighting_1 = snapshot.val();
//     console.log(kW_Lighting_1);
//     // var kW_Lighting_1 = parseInt(kW_Lighting_1)*-1;
//     var kW_Lighting_1 = parseFloat(kW_Lighting_1)*-1;
//     document.getElementById("kW_Lighting_1").innerHTML = kW_Lighting_1;
//     localStorage.setItem("kW_Lighting_1_local", kW_Lighting_1)
//   });
//
//   ref_kW_Outlet_1.on("value", function(snapshot) {
//       console.log("Get kW_Outlet_1 from firebase")
//       //  console.log(snapshot.val());
//       var kW_Outlet_1 = snapshot.val();
//       var kW_Outlet_1 = parseFloat(kW_Outlet_1)*-1;
//       // console.log("Temp is " + temp_server);
//       document.getElementById("kW_Outlet_1").innerHTML = kW_Outlet_1;
//       localStorage.setItem("kW_Outlet_1_local", kW_Outlet_1)
//   });
//
//   ref_kW_Aircon_1.on("value", function(snapshot) {
//       console.log("Get kW_Aircon_1 from firebase")
//       //  console.log(snapshot.val());
//       var kW_Aircon_1 = snapshot.val();
//       var kW_Aircon_1 = parseFloat(kW_Aircon_1)*-1;
//       // console.log("Temp is " + temp_server);
//       document.getElementById("kW_Aircon_1").innerHTML = kW_Aircon_1;
//       localStorage.setItem("kW_Aircon_1_local", kW_Aircon_1)
//   });
//
//   var cal_kW_Lighting_1_local= parseFloat(localStorage.getItem("kW_Lighting_1_local"));
//   var cal_kW_Outlet_1_local = parseFloat(localStorage.getItem("kW_Outlet_1_local"));
//   var cal_kW_Aircon_1_local = parseFloat(localStorage.getItem("kW_Aircon_1_local"));



    var chart = new CanvasJS.Chart("myChart", {
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: ""

        },

        data: [{

            type: "pie",
            // Type line,area,column,bar,pie,funnel,financial
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}kW",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label}  {y}kW",
            dataPoints: [
                { y: cal_kW_Lighting_1_local, label: "Grid" },
                { y: cal_kW_Outlet_1_local, label: "PV" },
                { y: cal_kW_Aircon_1_local, label: "Battery" },
                // { y: 5.02, label: "Load" },
                // { y: 4.07, label: "Safari" },
                // { y: 1.22, label: "Opera" },
                // { y: 0.44, label: "Others" }
            ]
        }]
    });
    chart.render();

    }
