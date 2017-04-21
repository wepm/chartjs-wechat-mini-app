/**
 * Created by xiabingwu on 2016/11/21.
 */
export default function(canvasConfig,labels,data){

    var randomScalingFactor = function () {
        // return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
        return Math.random() * 9
    }
    var lineChartData = {
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        datasets: [{
            label: "小",
            borderColor: 'cyan',
            backgroundColor: 'cyan',
            fill: false,
            spanGaps: true,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
            yAxisID: "y-axis-pee",
        }, {
            label: "大",
            borderColor: 'pink',
            backgroundColor: 'pink',
            fill: false,
            data: [
                2.9,
                4,
                3.2,
                3.234,
                2.43,
                2.34,
                3.9
            ],
            yAxisID: "y-axis-poo"
        }]
    };
    var chartConfig = {
        type: 'line',
        data: lineChartData,
        options: {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            title:{
                display: true,
                text:'大小便情况'
            },
            scales: {
                yAxes: [{
                    type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: "left",
                    id: "y-axis-poo",
                    ticks: {
                        max: 9,
                        min: 0,
                        stepSize: 1,
                        fontColor: 'pink',
                    },
                    scaleLabel: {
                        display: true,
                        labelString: '次数',
                        fontColor: 'pink',
                        fontSize: '10'
                    }
                }, {
                    type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: false,
                    position: "right",
                    id: "y-axis-pee",

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }],
                xAxes: [{
                    display: true,
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        fontColor: 'pink',
                    },
                    scaleLabel: {
                        display: true,
                        labelString: '日期',
                        fontColor: 'pink',
                        fontSize: '10'
                    }
                }]
            }
        }
    };
    return {
        chartConfig:chartConfig,
        canvasConfig:canvasConfig
    }
}