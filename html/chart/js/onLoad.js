
window.onload = function() {
	var ctx = document.getElementById('canvas_1').getContext('2d');
	window.verticalBar = new Chart(ctx, {
		type: 'bar',
		data: barChartData_1,
		options: {
			responsive: true,
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: 'Chart.js Bar Chart'
			}
		}
	});

	var ctx = document.getElementById('canvas_2').getContext('2d');
    window.myHorizontalBar = new Chart(ctx, {
        type: 'horizontalBar',
        data: horizontalBarChartData,
        options: {
            // Elements options apply to all of the options unless overridden in a dataset
            // In this case, we are setting the border of each horizontal bar to be 2px wide
            elements: {
                rectangle: {
                    borderWidth: 2,
                }
            },
            responsive: true,
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Chart.js Horizontal Bar Chart'
            }
        }
    });

    var ctx = document.getElementById('canvas_3').getContext('2d');
    window.multiAxis = new Chart(ctx, {
        type: 'bar',
        data: barChartData_3,
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Chart.js Bar Chart - Multi Axis'
            },
            tooltips: {
                mode: 'index',
                intersect: true
            },
            scales: {
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: {
                        drawOnChartArea: false
                    }
                }],
            }
        }
    });

    var ctx = document.getElementById('canvas_4').getContext('2d');
    window.stockedBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData_4,
        options: {
            title: {
                display: true,
                text: 'Chart.js Bar Chart - Stacked'
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });


    var ctx = document.getElementById('canvas_5').getContext('2d');
    window.stockedBarWithGroup = new Chart(ctx, {
        type: 'bar',
        data: barChartData_5,
        options: {
            title: {
                display: true,
                text: 'Chart.js Bar Chart - Stacked'
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });
};
