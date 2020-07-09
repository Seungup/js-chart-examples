var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var color = Chart.helpers.color;
var horizontalBarChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Dataset 1',
        backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
        borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }, {
        label: 'Dataset 2',
        backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
        borderColor: window.chartColors.blue,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }]

};


document.getElementById('randomizeData_2').addEventListener('click', function() {
    var zero = Math.random() < 0.2 ? true : false;
    horizontalBarChartData.datasets.forEach(function(dataset) {
        dataset.data = dataset.data.map(function() {
            return zero ? 0.0 : randomScalingFactor();
        });

    });
    window.myHorizontalBar.update();
});

var colorNames = Object.keys(window.chartColors);

document.getElementById('addDataset_2').addEventListener('click', function() {
    var colorName = colorNames[horizontalBarChartData.datasets.length % colorNames.length];
    var dsColor = window.chartColors[colorName];
    var newDataset = {
        label: 'Dataset ' + (horizontalBarChartData.datasets.length + 1),
        backgroundColor: color(dsColor).alpha(0.5).rgbString(),
        borderColor: dsColor,
        data: []
    };

    for (var index = 0; index < horizontalBarChartData.labels.length; ++index) {
        newDataset.data.push(randomScalingFactor());
    }

    horizontalBarChartData.datasets.push(newDataset);
    window.myHorizontalBar.update();
});

document.getElementById('addData_2').addEventListener('click', function() {
    if (horizontalBarChartData.datasets.length > 0) {
        var month = MONTHS[horizontalBarChartData.labels.length % MONTHS.length];
        horizontalBarChartData.labels.push(month);

        for (var index = 0; index < horizontalBarChartData.datasets.length; ++index) {
            horizontalBarChartData.datasets[index].data.push(randomScalingFactor());
        }

        window.myHorizontalBar.update();
    }
});

document.getElementById('removeDataset_2').addEventListener('click', function() {
    horizontalBarChartData.datasets.pop();
    window.myHorizontalBar.update();
});

document.getElementById('removeData_2').addEventListener('click', function() {
    horizontalBarChartData.labels.splice(-1, 1); // remove the label first

    horizontalBarChartData.datasets.forEach(function(dataset) {
        dataset.data.pop();
    });

    window.myHorizontalBar.update();
});