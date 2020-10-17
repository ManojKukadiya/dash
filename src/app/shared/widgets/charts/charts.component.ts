import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
chartOptions2 = {};
  chartOptions = {};
  lineOptions = {};
  Highcharts = Highcharts;
  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
          text: ''
      },
      subtitle: {
          text: ''
      },
      xAxis: {
          type: 'category',
          labels: {
              rotation: -45,
              style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
              }
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: ''
          }
      },
      legend: {
          enabled: false
      },
      tooltip: {
          pointFormat: 'Search Summary'
      },
      series: [{
          name: 'Search',
          data: [
              ['Blue', 24.2],
              ['Orange', 14.9],
              ['Red', 13.7]
          ],
          dataLabels: {
              enabled: true,
              rotation: -90,
              color: '#FFFFFF',
              align: 'right',
              format: '{point.y:.1f}', // one decimal
              y: 15, // 10 pixels down from the top
              style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
              }
          }
      }]
    };
  
    this.lineOptions = {   
        chart: {
           type: "spline"
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        legend: {
            enabled: false
        },
        xAxis:{
           categories:["Jan", "Feb", "Mar"]
        },
        yAxis: {          
           title:{
              text:"Temperature"
           } 
        },
        tooltip: {
           valueSuffix:" °C"
        },
        series: [{
           name: 'Tokyo',
           data: [7.0, 6.9, 9.5]
        }],
     };

//2nd chart
// this.chartOptions2 = {   
//     chart : {
//        plotBorderWidth: null,
//        plotShadow: false
//     },
//     title : {
//        text: ''   
//     },
//     tooltip : {
//        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//     },
//     plotOptions : {
//        pie: {
//           allowPointSelect: true,
//           cursor: 'pointer',
    
//           dataLabels: {
//              enabled: false           
//           },
    
//           showInLegend: true
//        }
//     },
//     series : [{
//        type: 'pie',
//        name: 'Browser share',
//        data: [
//           ['Firefox',   45.0],
//           ['IE',       26.8],
//           {
//              name: 'Chrome',
//              y: 12.8,
//              sliced: true,
//              selected: true
//           },
//           ['Safari',    8.5],
//           ['Opera',     6.2],
//           ['Others',      0.7]
//        ]
//     }]
//  };
this.chartOptions2 = {
    chart: {
      type: 'pie'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '9px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Search Summary'
    },
    series: [{
        name: 'Search',
        data: [
            ['Blue', 24.2],
            ['Orange', 14.9],
            ['Red', 13.7]
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '9px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
  };
  }
}
