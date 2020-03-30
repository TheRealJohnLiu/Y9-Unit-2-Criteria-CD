var myChart = null;
function renderChart(data, labels) {
    if (myChart != null) {
        myChart.destroy();
    }
    var ctx = document.getElementById("myChart").getContext('2d');
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Percentage Porportion',
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        },
    });
}

$("#searchBtn").click(
    function () {
        var name = $("#searchInput").val();
        var year = $("#yearInput").val();
        var labels = [];
        let values = [];
        if (name != null && name != '') {
            for (var i = 0; i < chartdata.length; i++) {
                var e = chartdata[i];
                if (e.GeoAreaName.toLowerCase().includes(name.toLowerCase()) && (year == '' || e.TimePeriod == year)) {
                    labels.push(e.GeoAreaName + '-' + e.TimePeriod);
                    values.push(e.Value);
                }
            }
        }
        renderChart(values, labels);
    }
);

var availableYears = [];
var availableAreas = [];
chartdata.map(function (e) {
    if (!availableAreas.includes(e.GeoAreaName)) {
        availableAreas.push(e.GeoAreaName);
    }
    if (!availableYears.includes(e.TimePeriod.toString())) {
        availableYears.push(e.TimePeriod.toString());
    }
});

$("#yearInput").autocomplete({
    source: availableYears
});
$("#searchInput").autocomplete({
    source: availableAreas,
    select: function (event, ui) {
        if (ui.item.value != null && ui.item.value != '') {
            var newAvailableYears = [];
            chartdata.map(function (e) {
                if (e.GeoAreaName.includes(ui.item.value) && !newAvailableYears.includes(e.TimePeriod.toString())) {
                    newAvailableYears.push(e.TimePeriod.toString());
                }
            });
            $("#yearInput").autocomplete('option', 'source', newAvailableYears)
        } else {
            $("#yearInput").autocomplete('option', 'source', availableYears)
        }
    }
});




function reset() {

    $('#yeet').empty()
    document.getElementById('yeet').innerHTML = '<canvas class="animated slow hinge" id="myCanvas" width="1300" height="600"></canvas>'
    drawChallenge()

    window.setTimeout(function () {
        document.getElementById('yeet').innerHTML = '<canvas class="animated fadeIn" id="myCanvas" width="1300" height="600"></canvas>'
        drawChallenge()
    }, 6000)


}



drawChallenge();

function drawChallenge() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    ctx.font = "20px Arial";

    // 8x4 lines of code - wasteful! we need a loop algorithm here
    // can anyone figure this out?


    mynums = [1374, 1156, 902, 700, 338, 575, 460, 347, 158];
    counter = 0

    mynums.forEach(element => {
        counter++

        random = Math.floor(Math.random() * 382);
        random2 = Math.floor(Math.random() * 382);

        var grd = ctx.createLinearGradient(0, 0, data[element]['Value'] * 40, 0);
        grd.addColorStop(0, gradients[random].colors[0]);
        grd.addColorStop(1, gradients[random].colors[1]);

        var grd1 = ctx.createLinearGradient(0, 0, counter * 80, 0);
        grd1.addColorStop(0, gradients[random2].colors[0]);
        grd1.addColorStop(1, gradients[random2].colors[1]);


        ctx.fillStyle = grd
        ctx.fillRect(10, counter * 60, data[element]['Value'] * 19, 50);
        ctx.fillStyle = grd1
        ctx.fillText(data[element]['TimePeriod'] + ": " + data[element]['Value'] + "%", 15, counter * 60 + 30)



    });
}
;


