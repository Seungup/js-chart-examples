var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var color = Chart.helpers.color;
var barChartData_1 = {
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
	}]

};

document.getElementById('randomizeData_1').addEventListener('click', function() {
	var zero = Math.random() < 0.2 ? true : false;
	barChartData_1.datasets.forEach(function(dataset) {
		dataset.data = dataset.data.map(function() {
			return zero ? 0.0 : randomScalingFactor();
		});

	});
	window.verticalBar.update();
});

var colorNames = Object.keys(window.chartColors);
document.getElementById('addDataset_1').addEventListener('click', function() {
	var colorName = colorNames[barChartData_1.datasets.length % colorNames.length];
	var dsColor = window.chartColors[colorName];
	var newDataset = {
		label: 'Dataset ' + (barChartData_1.datasets.length + 1),
		backgroundColor: color(dsColor).alpha(0.5).rgbString(),
		borderColor: dsColor,
		borderWidth: 1,
		data: []
	};

	for (var index = 0; index < barChartData_1.labels.length; ++index) {
		newDataset.data.push(randomScalingFactor());
	}

	barChartData_1.datasets.push(newDataset);
	window.verticalBar.update();
});

document.getElementById('addData_1').addEventListener('click', function() {
	if (barChartData_1.datasets.length > 0) {
		var month = MONTHS[barChartData_1.labels.length % MONTHS.length];
		barChartData_1.labels.push(month);

		for (var index = 0; index < barChartData_1.datasets.length; ++index) {
			// window.verticalBar.addData(randomScalingFactor(), index);
			barChartData_1.datasets[index].data.push(randomScalingFactor());
		}

		window.verticalBar.update();
	}
});

document.getElementById('removeDataset_1').addEventListener('click', function() {
	barChartData_1.datasets.pop();
	window.verticalBar.update();
});

document.getElementById('removeData_1').addEventListener('click', function() {
	barChartData_1.labels.splice(-1, 1); // remove the label first

	barChartData_1.datasets.forEach(function(dataset) {
		dataset.data.pop();
	});

	window.verticalBar.update();
});