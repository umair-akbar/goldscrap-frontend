var osrsData = dailyData.OSRS.data.sort(function (a, b) {

    let aDate = new Date(a["_id"].year, a["_id"].month, a["_id"].day)
    let bDate = new Date(b["_id"].year, b["_id"].month, b["_id"].day)
    return aDate < bDate
}).slice(0, 30)
var rs3Data = dailyData.RS3.data.sort(function (a, b) {
    let aDate = new Date(a["_id"].year, a["_id"].month, a["_id"].day)
    let bDate = new Date(b["_id"].year, b["_id"].month, b["_id"].day)
    return aDate < bDate
}).slice(0, 30)


var dataStats = {
    average: [],
    maximum: [],
    minimum: [],
    labels: []
}
osrsDataStats = dataStats

for (let i = 0; i < osrsData.length; i++) {
    const tempObj = osrsData[i]
    const label = `${tempObj["_id"].year}/${tempObj["_id"].month}/${tempObj["_id"].day}`
    osrsDataStats.labels.push(label)
    osrsDataStats.average.push(tempObj["averagePrice"])
    osrsDataStats.maximum.push(tempObj["maximumPrice"])
    osrsDataStats.minimum.push(tempObj["minimumPrice"])
}

var ctxOSRS = "dailyAverageChartOSRS"
var osrsDataStatsChart = new Chart(ctxOSRS, {
    type: 'line',
    responsive: true,
    data: {
        labels: osrsDataStats.labels,
        datasets: [{
            label: 'Daily Average #',
            data: osrsDataStats.average,
            lineTension: 0,
            backgroundColor: "rgb(153, 102, 255)",
            borderColor: "rgb(153, 102, 255)",
            fill: false,
        },
            {
                label: 'Daily Minimum #',
                data: osrsDataStats.minimum,
                lineTension: 0,
                backgroundColor: "rgb(75,192,192)",
                borderColor: "rgb(75, 192, 192)",
                fill: false,
            },
            {
                label: 'Daily Maximum #',
                data: osrsDataStats.maximum,
                lineTension: 0,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                fill: false,
            }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }],
        },

    }
});

//There should be a WAYY better way to do this
dataStats.average = []
dataStats.labels = []
dataStats.maximum = []
dataStats.minimum = []
let rs3DataStats = dataStats

for (let i = 0; i < rs3Data.length; i++) {
    const tempObj = rs3Data[i]
    const label = `${tempObj["_id"].year}/${tempObj["_id"].month}/${tempObj["_id"].day}`
    rs3DataStats.labels.push(label)
    rs3DataStats.average.push(tempObj["averagePrice"])
    rs3DataStats.maximum.push(tempObj["maximumPrice"])
    rs3DataStats.minimum.push(tempObj["minimumPrice"])
}

var ctxRS3 = "dailyAverageChartRS3"
var rs3DataStatsChart = new Chart(ctxRS3, {
    type: 'line',
    responsive: true,
    data: {
        labels: rs3DataStats.labels,
        datasets: [{
            label: 'Daily Average #',
            data: rs3DataStats.average,
            lineTension: 0,
            backgroundColor: "rgb(153, 102, 255)",
            borderColor: "rgb(153, 102, 255)",
            fill: false,
        },
            {
                label: 'Daily Minimum #',
                data: rs3DataStats.minimum,
                lineTension: 0,
                backgroundColor: "rgb(75, 192, 192)",
                borderColor: "rgb(75, 192, 192)",
                fill: false,
            },
            {
                label: 'Daily Maximum #',
                data: rs3DataStats.maximum,
                lineTension: 0,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                fill: false,
            }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});

