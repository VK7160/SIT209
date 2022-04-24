// Build the chart
Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'User Time Expenditure on Different Browsers in April, 2022'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Brave',
            y: 47.41,
            sliced: true,
            selected: true
        }, {
            name: 'Internet Explorer',
            y: 3.84
        }, {
            name: 'Microsoft Edge',
            y: 21.85
        }, {
            name: 'Firefox',
            y: 8.67
        }, {
            name: 'Safari',
            y: 6.18
        }, {
            name: 'Other',
            y: 12.05
        }]
    }]
});