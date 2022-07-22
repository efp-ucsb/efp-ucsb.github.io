var chart = AmCharts.makeChart("monthly_uerate" , { 
    "type": "serial", 
    "theme": "light", 
    "dataDateFormat": "MM YYYY",
    "legend": {
        "useGraphSettings": "true"
    },
    "chartCursor":{
        "cursorColor": "#000000"
    },
    "titles": [{
        "text": "Unemployment Rate, Seasonally Adjusted",
        "size": 20 
    }],
    "gridAboveGraphs": true, 
    "startDuration": 1, 
    "valueAxes": [{
        "gridAlpha": 0.07,
        "axisAlpha": 1,
        "position": "left",
        "title": "Percent (%)"
    }],
    "graphs": [ 
    {
        "id": "graph0",
        "balloonText": "Santa Barbara: <b>[[value]]</b>", 
        "bullet": "none",
        "type": "line", 
        "lineThickness": 2,
        "title": "Santa Barbara",
        "valueField": "yValue0"
    },
    {
        "id": "graph1",
        "balloonText": "California: <b>[[value]]</b>", 
        "bullet": "none",
        "type": "line", 
        "lineThickness": 2,
        "title": "California",
        "valueField": "yValue1"
    },
    {
        "id": "graph2",
        "balloonText": "United States: <b>[[value]]</b>", 
        "bullet": "none",
        "type": "line", 
        "lineThickness": 2,
        "title": "United States",
        "valueField": "yValue2"
    }],
    "categoryField": "xValue",
    "categoryAxis": {
        "parseDates": false,
        "gridAlpha": 0.07,
        "title": "",
        "axisAlpha": 1
    },
    "export": {
        "enabled": false
    },
    "chartScrollbar": {
        "graph": "graph0",
        "offset": 30,
        "oppositeAxis":false,
        "scrollbarHeight": 80,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount":true,
        "color":"#AAAAAA"
    },
    "dataProvider": [ 
        {
            "xValue": "Jan 90",
            "yValue0": 4.22,
            "yValue1": 9.54,
            "yValue2": 5.40
        },
        {
            "xValue": "Feb 90",
            "yValue0": 4.38,
            "yValue1": 9.27,
            "yValue2": 5.30
        },
        {
            "xValue": "Mar 90",
            "yValue0": 4.52,
            "yValue1": 8.96,
            "yValue2": 5.20
        },
        {
            "xValue": "Apr 90",
            "yValue0": 4.89,
            "yValue1": 9.00,
            "yValue2": 5.40
        },
        {
            "xValue": "May 90",
            "yValue0": 4.59,
            "yValue1": 8.85,
            "yValue2": 5.40
        },
        {
            "xValue": "Jun 90",
            "yValue0": 4.68,
            "yValue1": 8.98,
            "yValue2": 5.20
        },
        {
            "xValue": "Jul 90",
            "yValue0": 4.95,
            "yValue1": 9.12,
            "yValue2": 5.50
        },
        {
            "xValue": "Aug 90",
            "yValue0": 5.01,
            "yValue1": 9.13,
            "yValue2": 5.70
        },
        {
            "xValue": "Sep 90",
            "yValue0": 5.20,
            "yValue1": 9.13,
            "yValue2": 5.90
        },
        {
            "xValue": "Oct 90",
            "yValue0": 5.09,
            "yValue1": 9.32,
            "yValue2": 5.90
        },
        {
            "xValue": "Nov 90",
            "yValue0": 5.56,
            "yValue1": 9.39,
            "yValue2": 6.20
        },
        {
            "xValue": "Dec 90",
            "yValue0": 5.68,
            "yValue1": 9.35,
            "yValue2": 6.30
        },
        {
            "xValue": "Jan 91",
            "yValue0": 5.59,
            "yValue1": 9.09,
            "yValue2": 6.40
        },
        {
            "xValue": "Feb 91",
            "yValue0": 5.79,
            "yValue1": 9.10,
            "yValue2": 6.60
        },
        {
            "xValue": "Mar 91",
            "yValue0": 5.86,
            "yValue1": 8.86,
            "yValue2": 6.80
        },
        {
            "xValue": "Apr 91",
            "yValue0": 5.84,
            "yValue1": 8.69,
            "yValue2": 6.70
        },
        {
            "xValue": "May 91",
            "yValue0": 5.85,
            "yValue1": 8.49,
            "yValue2": 6.90
        },
        {
            "xValue": "Jun 91",
            "yValue0": 6.20,
            "yValue1": 8.58,
            "yValue2": 6.90
        },
        {
            "xValue": "Jul 91",
            "yValue0": 5.90,
            "yValue1": 8.24,
            "yValue2": 6.80
        },
        {
            "xValue": "Aug 91",
            "yValue0": 5.75,
            "yValue1": 8.22,
            "yValue2": 6.90
        },
        {
            "xValue": "Sep 91",
            "yValue0": 6.24,
            "yValue1": 8.11,
            "yValue2": 6.90
        },
        {
            "xValue": "Oct 91",
            "yValue0": 6.25,
            "yValue1": 7.83,
            "yValue2": 7.00
        },
        {
            "xValue": "Nov 91",
            "yValue0": 6.35,
            "yValue1": 7.89,
            "yValue2": 7.00
        },
        {
            "xValue": "Dec 91",
            "yValue0": 6.55,
            "yValue1": 7.39,
            "yValue2": 7.30
        },
        {
            "xValue": "Jan 92",
            "yValue0": 6.75,
            "yValue1": 7.63,
            "yValue2": 7.30
        },
        {
            "xValue": "Feb 92",
            "yValue0": 7.29,
            "yValue1": 7.47,
            "yValue2": 7.40
        },
        {
            "xValue": "Mar 92",
            "yValue0": 7.04,
            "yValue1": 7.52,
            "yValue2": 7.40
        },
        {
            "xValue": "Apr 92",
            "yValue0": 6.90,
            "yValue1": 7.37,
            "yValue2": 7.40
        },
        {
            "xValue": "May 92",
            "yValue0": 7.35,
            "yValue1": 7.32,
            "yValue2": 7.60
        },
        {
            "xValue": "Jun 92",
            "yValue0": 7.52,
            "yValue1": 7.08,
            "yValue2": 7.80
        },
        {
            "xValue": "Jul 92",
            "yValue0": 7.60,
            "yValue1": 7.38,
            "yValue2": 7.70
        },
        {
            "xValue": "Aug 92",
            "yValue0": 8.08,
            "yValue1": 6.92,
            "yValue2": 7.60
        },
        {
            "xValue": "Sep 92",
            "yValue0": 7.81,
            "yValue1": 6.87,
            "yValue2": 7.60
        },
        {
            "xValue": "Oct 92",
            "yValue0": 7.85,
            "yValue1": 6.66,
            "yValue2": 7.30
        },
        {
            "xValue": "Nov 92",
            "yValue0": 7.84,
            "yValue1": 6.59,
            "yValue2": 7.40
        },
        {
            "xValue": "Dec 92",
            "yValue0": 7.82,
            "yValue1": 6.67,
            "yValue2": 7.40
        },
        {
            "xValue": "Jan 93",
            "yValue0": 7.79,
            "yValue1": 6.53,
            "yValue2": 7.30
        },
        {
            "xValue": "Feb 93",
            "yValue0": 7.65,
            "yValue1": 6.47,
            "yValue2": 7.10
        },
        {
            "xValue": "Mar 93",
            "yValue0": 7.50,
            "yValue1": 6.38,
            "yValue2": 7.00
        },
        {
            "xValue": "Apr 93",
            "yValue0": 7.74,
            "yValue1": 6.23,
            "yValue2": 7.10
        },
        {
            "xValue": "May 93",
            "yValue0": 8.07,
            "yValue1": 6.03,
            "yValue2": 7.10
        },
        {
            "xValue": "Jun 93",
            "yValue0": 8.11,
            "yValue1": 6.09,
            "yValue2": 7.00
        },
        {
            "xValue": "Jul 93",
            "yValue0": 7.93,
            "yValue1": 6.13,
            "yValue2": 6.90
        },
        {
            "xValue": "Aug 93",
            "yValue0": 7.87,
            "yValue1": 6.34,
            "yValue2": 6.80
        },
        {
            "xValue": "Sep 93",
            "yValue0": 7.71,
            "yValue1": 6.16,
            "yValue2": 6.70
        },
        {
            "xValue": "Oct 93",
            "yValue0": 7.88,
            "yValue1": 6.22,
            "yValue2": 6.80
        },
        {
            "xValue": "Nov 93",
            "yValue0": 7.60,
            "yValue1": 6.10,
            "yValue2": 6.60
        },
        {
            "xValue": "Dec 93",
            "yValue0": 7.54,
            "yValue1": 6.04,
            "yValue2": 6.50
        },
        {
            "xValue": "Jan 94",
            "yValue0": 7.52,
            "yValue1": 6.26,
            "yValue2": 6.60
        },
        {
            "xValue": "Feb 94",
            "yValue0": 7.65,
            "yValue1": 6.30,
            "yValue2": 6.60
        },
        {
            "xValue": "Mar 94",
            "yValue0": 7.58,
            "yValue1": 6.29,
            "yValue2": 6.50
        },
        {
            "xValue": "Apr 94",
            "yValue0": 7.51,
            "yValue1": 6.72,
            "yValue2": 6.40
        },
        {
            "xValue": "May 94",
            "yValue0": 7.32,
            "yValue1": 7.05,
            "yValue2": 6.10
        },
        {
            "xValue": "Jun 94",
            "yValue0": 7.29,
            "yValue1": 7.19,
            "yValue2": 6.10
        },
        {
            "xValue": "Jul 94",
            "yValue0": 7.43,
            "yValue1": 7.29,
            "yValue2": 6.10
        },
        {
            "xValue": "Aug 94",
            "yValue0": 7.26,
            "yValue1": 7.39,
            "yValue2": 6.00
        },
        {
            "xValue": "Sep 94",
            "yValue0": 7.32,
            "yValue1": 7.12,
            "yValue2": 5.90
        },
        {
            "xValue": "Oct 94",
            "yValue0": 7.05,
            "yValue1": 7.15,
            "yValue2": 5.80
        },
        {
            "xValue": "Nov 94",
            "yValue0": 6.96,
            "yValue1": 7.12,
            "yValue2": 5.60
        },
        {
            "xValue": "Dec 94",
            "yValue0": 6.95,
            "yValue1": 6.76,
            "yValue2": 5.50
        },
        {
            "xValue": "Jan 95",
            "yValue0": 6.94,
            "yValue1": 7.29,
            "yValue2": 5.60
        },
        {
            "xValue": "Feb 95",
            "yValue0": 6.64,
            "yValue1": 7.24,
            "yValue2": 5.40
        },
        {
            "xValue": "Mar 95",
            "yValue0": 6.48,
            "yValue1": 7.07,
            "yValue2": 5.40
        },
        {
            "xValue": "Apr 95",
            "yValue0": 6.98,
            "yValue1": 7.00,
            "yValue2": 5.80
        },
        {
            "xValue": "May 95",
            "yValue0": 6.94,
            "yValue1": 7.09,
            "yValue2": 5.60
        },
        {
            "xValue": "Jun 95",
            "yValue0": 6.82,
            "yValue1": 7.09,
            "yValue2": 5.60
        },
        {
            "xValue": "Jul 95",
            "yValue0": 6.72,
            "yValue1": 7.10,
            "yValue2": 5.70
        },
        {
            "xValue": "Aug 95",
            "yValue0": 6.87,
            "yValue1": 7.22,
            "yValue2": 5.70
        },
        {
            "xValue": "Sep 95",
            "yValue0": 6.60,
            "yValue1": 7.56,
            "yValue2": 5.60
        },
        {
            "xValue": "Oct 95",
            "yValue0": 6.55,
            "yValue1": 7.87,
            "yValue2": 5.50
        },
        {
            "xValue": "Nov 95",
            "yValue0": 6.52,
            "yValue1": 8.26,
            "yValue2": 5.60
        },
        {
            "xValue": "Dec 95",
            "yValue0": 6.33,
            "yValue1": 8.62,
            "yValue2": 5.60
        },
        {
            "xValue": "Jan 96",
            "yValue0": 6.31,
            "yValue1": 8.77,
            "yValue2": 5.60
        },
        {
            "xValue": "Feb 96",
            "yValue0": 6.07,
            "yValue1": 9.02,
            "yValue2": 5.50
        },
        {
            "xValue": "Mar 96",
            "yValue0": 6.00,
            "yValue1": 9.28,
            "yValue2": 5.50
        },
        {
            "xValue": "Apr 96",
            "yValue0": 5.91,
            "yValue1": 9.71,
            "yValue2": 5.60
        },
        {
            "xValue": "May 96",
            "yValue0": 5.97,
            "yValue1": 9.83,
            "yValue2": 5.60
        },
        {
            "xValue": "Jun 96",
            "yValue0": 5.88,
            "yValue1": 9.89,
            "yValue2": 5.30
        },
        {
            "xValue": "Jul 96",
            "yValue0": 5.80,
            "yValue1": 10.18,
            "yValue2": 5.50
        },
        {
            "xValue": "Aug 96",
            "yValue0": 5.72,
            "yValue1": 10.33,
            "yValue2": 5.10
        },
        {
            "xValue": "Sep 96",
            "yValue0": 5.77,
            "yValue1": 10.59,
            "yValue2": 5.20
        },
        {
            "xValue": "Oct 96",
            "yValue0": 5.73,
            "yValue1": 10.89,
            "yValue2": 5.20
        },
        {
            "xValue": "Nov 96",
            "yValue0": 5.81,
            "yValue1": 11.13,
            "yValue2": 5.40
        },
        {
            "xValue": "Dec 96",
            "yValue0": 5.53,
            "yValue1": 11.32,
            "yValue2": 5.40
        },
        {
            "xValue": "Jan 97",
            "yValue0": 5.62,
            "yValue1": 10.81,
            "yValue2": 5.30
        },
        {
            "xValue": "Feb 97",
            "yValue0": 5.50,
            "yValue1": 10.79,
            "yValue2": 5.20
        },
        {
            "xValue": "Mar 97",
            "yValue0": 5.35,
            "yValue1": 10.63,
            "yValue2": 5.20
        },
        {
            "xValue": "Apr 97",
            "yValue0": 5.18,
            "yValue1": 10.49,
            "yValue2": 5.10
        },
        {
            "xValue": "May 97",
            "yValue0": 4.96,
            "yValue1": 10.44,
            "yValue2": 4.90
        },
        {
            "xValue": "Jun 97",
            "yValue0": 4.89,
            "yValue1": 10.20,
            "yValue2": 5.00
        },
        {
            "xValue": "Jul 97",
            "yValue0": 4.96,
            "yValue1": 9.41,
            "yValue2": 4.90
        },
        {
            "xValue": "Aug 97",
            "yValue0": 4.76,
            "yValue1": 9.55,
            "yValue2": 4.80
        },
        {
            "xValue": "Sep 97",
            "yValue0": 4.72,
            "yValue1": 9.20,
            "yValue2": 4.90
        },
        {
            "xValue": "Oct 97",
            "yValue0": 5.02,
            "yValue1": 8.89,
            "yValue2": 4.70
        },
        {
            "xValue": "Nov 97",
            "yValue0": 4.82,
            "yValue1": 8.59,
            "yValue2": 4.60
        },
        {
            "xValue": "Dec 97",
            "yValue0": 4.85,
            "yValue1": 8.55,
            "yValue2": 4.70
        },
        {
            "xValue": "Jan 98",
            "yValue0": 4.64,
            "yValue1": 8.21,
            "yValue2": 4.60
        },
        {
            "xValue": "Feb 98",
            "yValue0": 4.71,
            "yValue1": 8.08,
            "yValue2": 4.60
        },
        {
            "xValue": "Mar 98",
            "yValue0": 4.97,
            "yValue1": 8.04,
            "yValue2": 4.70
        },
        {
            "xValue": "Apr 98",
            "yValue0": 4.43,
            "yValue1": 7.98,
            "yValue2": 4.30
        },
        {
            "xValue": "May 98",
            "yValue0": 4.39,
            "yValue1": 7.76,
            "yValue2": 4.40
        },
        {
            "xValue": "Jun 98",
            "yValue0": 4.31,
            "yValue1": 7.51,
            "yValue2": 4.50
        },
        {
            "xValue": "Jul 98",
            "yValue0": 4.11,
            "yValue1": 7.68,
            "yValue2": 4.50
        },
        {
            "xValue": "Aug 98",
            "yValue0": 4.31,
            "yValue1": 7.82,
            "yValue2": 4.50
        },
        {
            "xValue": "Sep 98",
            "yValue0": 4.42,
            "yValue1": 7.61,
            "yValue2": 4.60
        },
        {
            "xValue": "Oct 98",
            "yValue0": 4.27,
            "yValue1": 7.52,
            "yValue2": 4.50
        },
        {
            "xValue": "Nov 98",
            "yValue0": 4.23,
            "yValue1": 7.37,
            "yValue2": 4.40
        },
        {
            "xValue": "Dec 98",
            "yValue0": 4.46,
            "yValue1": 7.45,
            "yValue2": 4.40
        },
        {
            "xValue": "Jan 99",
            "yValue0": 4.34,
            "yValue1": 7.46,
            "yValue2": 4.30
        },
        {
            "xValue": "Feb 99",
            "yValue0": 4.30,
            "yValue1": 7.23,
            "yValue2": 4.40
        },
        {
            "xValue": "Mar 99",
            "yValue0": 4.17,
            "yValue1": 7.27,
            "yValue2": 4.20
        },
        {
            "xValue": "Apr 99",
            "yValue0": 4.22,
            "yValue1": 7.29,
            "yValue2": 4.30
        },
        {
            "xValue": "May 99",
            "yValue0": 3.91,
            "yValue1": 7.22,
            "yValue2": 4.20
        },
        {
            "xValue": "Jun 99",
            "yValue0": 3.82,
            "yValue1": 7.33,
            "yValue2": 4.30
        },
        {
            "xValue": "Jul 99",
            "yValue0": 3.66,
            "yValue1": 7.29,
            "yValue2": 4.30
        },
        {
            "xValue": "Aug 99",
            "yValue0": 3.73,
            "yValue1": 7.20,
            "yValue2": 4.20
        },
        {
            "xValue": "Sep 99",
            "yValue0": 3.92,
            "yValue1": 7.18,
            "yValue2": 4.20
        },
        {
            "xValue": "Oct 99",
            "yValue0": 3.73,
            "yValue1": 7.09,
            "yValue2": 4.10
        },
        {
            "xValue": "Nov 99",
            "yValue0": 3.55,
            "yValue1": 6.95,
            "yValue2": 4.10
        },
        {
            "xValue": "Dec 99",
            "yValue0": 3.79,
            "yValue1": 6.87,
            "yValue2": 4.00
        },
        {
            "xValue": "Jan 00",
            "yValue0": 4.22,
            "yValue1": 6.51,
            "yValue2": 4.00
        },
        {
            "xValue": "Feb 00",
            "yValue0": 4.35,
            "yValue1": 7.02,
            "yValue2": 4.10
        },
        {
            "xValue": "Mar 00",
            "yValue0": 4.36,
            "yValue1": 6.99,
            "yValue2": 4.00
        },
        {
            "xValue": "Apr 00",
            "yValue0": 4.21,
            "yValue1": 6.90,
            "yValue2": 3.80
        },
        {
            "xValue": "May 00",
            "yValue0": 4.51,
            "yValue1": 6.89,
            "yValue2": 4.00
        },
        {
            "xValue": "Jun 00",
            "yValue0": 4.53,
            "yValue1": 6.84,
            "yValue2": 4.00
        },
        {
            "xValue": "Jul 00",
            "yValue0": 4.60,
            "yValue1": 6.71,
            "yValue2": 4.00
        },
        {
            "xValue": "Aug 00",
            "yValue0": 4.53,
            "yValue1": 6.69,
            "yValue2": 4.10
        },
        {
            "xValue": "Sep 00",
            "yValue0": 4.15,
            "yValue1": 6.76,
            "yValue2": 3.90
        },
        {
            "xValue": "Oct 00",
            "yValue0": 4.15,
            "yValue1": 6.68,
            "yValue2": 3.90
        },
        {
            "xValue": "Nov 00",
            "yValue0": 4.20,
            "yValue1": 6.62,
            "yValue2": 3.90
        },
        {
            "xValue": "Dec 00",
            "yValue0": 4.07,
            "yValue1": 6.47,
            "yValue2": 3.90
        },
        {
            "xValue": "Jan 01",
            "yValue0": 4.20,
            "yValue1": 6.40,
            "yValue2": 4.20
        },
        {
            "xValue": "Feb 01",
            "yValue0": 4.15,
            "yValue1": 6.36,
            "yValue2": 4.20
        },
        {
            "xValue": "Mar 01",
            "yValue0": 4.48,
            "yValue1": 6.24,
            "yValue2": 4.30
        },
        {
            "xValue": "Apr 01",
            "yValue0": 4.34,
            "yValue1": 6.00,
            "yValue2": 4.40
        },
        {
            "xValue": "May 01",
            "yValue0": 4.11,
            "yValue1": 5.93,
            "yValue2": 4.30
        },
        {
            "xValue": "Jun 01",
            "yValue0": 4.23,
            "yValue1": 5.75,
            "yValue2": 4.50
        },
        {
            "xValue": "Jul 01",
            "yValue0": 4.34,
            "yValue1": 5.65,
            "yValue2": 4.60
        },
        {
            "xValue": "Aug 01",
            "yValue0": 4.50,
            "yValue1": 5.66,
            "yValue2": 4.90
        },
        {
            "xValue": "Sep 01",
            "yValue0": 4.50,
            "yValue1": 5.52,
            "yValue2": 5.00
        },
        {
            "xValue": "Oct 01",
            "yValue0": 4.65,
            "yValue1": 5.55,
            "yValue2": 5.30
        },
        {
            "xValue": "Nov 01",
            "yValue0": 4.77,
            "yValue1": 5.48,
            "yValue2": 5.50
        },
        {
            "xValue": "Dec 01",
            "yValue0": 4.92,
            "yValue1": 5.31,
            "yValue2": 5.70
        },
        {
            "xValue": "Jan 02",
            "yValue0": 4.86,
            "yValue1": 5.48,
            "yValue2": 5.70
        },
        {
            "xValue": "Feb 02",
            "yValue0": 4.92,
            "yValue1": 5.43,
            "yValue2": 5.70
        },
        {
            "xValue": "Mar 02",
            "yValue0": 5.04,
            "yValue1": 5.38,
            "yValue2": 5.70
        },
        {
            "xValue": "Apr 02",
            "yValue0": 5.34,
            "yValue1": 5.20,
            "yValue2": 5.90
        },
        {
            "xValue": "May 02",
            "yValue0": 5.27,
            "yValue1": 5.38,
            "yValue2": 5.80
        },
        {
            "xValue": "Jun 02",
            "yValue0": 5.33,
            "yValue1": 5.25,
            "yValue2": 5.80
        },
        {
            "xValue": "Jul 02",
            "yValue0": 5.21,
            "yValue1": 5.36,
            "yValue2": 5.80
        },
        {
            "xValue": "Aug 02",
            "yValue0": 5.34,
            "yValue1": 5.45,
            "yValue2": 5.70
        },
        {
            "xValue": "Sep 02",
            "yValue0": 5.26,
            "yValue1": 5.11,
            "yValue2": 5.70
        },
        {
            "xValue": "Oct 02",
            "yValue0": 5.34,
            "yValue1": 5.15,
            "yValue2": 5.70
        },
        {
            "xValue": "Nov 02",
            "yValue0": 5.35,
            "yValue1": 5.16,
            "yValue2": 5.90
        },
        {
            "xValue": "Dec 02",
            "yValue0": 5.39,
            "yValue1": 5.08,
            "yValue2": 6.00
        },
        {
            "xValue": "Jan 03",
            "yValue0": 5.09,
            "yValue1": 5.21,
            "yValue2": 5.80
        },
        {
            "xValue": "Feb 03",
            "yValue0": 5.04,
            "yValue1": 4.97,
            "yValue2": 5.90
        },
        {
            "xValue": "Mar 03",
            "yValue0": 5.00,
            "yValue1": 4.91,
            "yValue2": 5.90
        },
        {
            "xValue": "Apr 03",
            "yValue0": 4.97,
            "yValue1": 5.11,
            "yValue2": 6.00
        },
        {
            "xValue": "May 03",
            "yValue0": 5.22,
            "yValue1": 4.94,
            "yValue2": 6.10
        },
        {
            "xValue": "Jun 03",
            "yValue0": 5.36,
            "yValue1": 5.15,
            "yValue2": 6.30
        },
        {
            "xValue": "Jul 03",
            "yValue0": 5.14,
            "yValue1": 5.18,
            "yValue2": 6.20
        },
        {
            "xValue": "Aug 03",
            "yValue0": 5.15,
            "yValue1": 5.03,
            "yValue2": 6.10
        },
        {
            "xValue": "Sep 03",
            "yValue0": 5.05,
            "yValue1": 5.10,
            "yValue2": 6.10
        },
        {
            "xValue": "Oct 03",
            "yValue0": 5.29,
            "yValue1": 5.06,
            "yValue2": 6.00
        },
        {
            "xValue": "Nov 03",
            "yValue0": 5.01,
            "yValue1": 5.16,
            "yValue2": 5.80
        },
        {
            "xValue": "Dec 03",
            "yValue0": 4.83,
            "yValue1": 5.15,
            "yValue2": 5.70
        },
        {
            "xValue": "Jan 04",
            "yValue0": 4.77,
            "yValue1": 5.22,
            "yValue2": 5.70
        },
        {
            "xValue": "Feb 04",
            "yValue0": 4.76,
            "yValue1": 5.16,
            "yValue2": 5.60
        },
        {
            "xValue": "Mar 04",
            "yValue0": 4.97,
            "yValue1": 5.21,
            "yValue2": 5.80
        },
        {
            "xValue": "Apr 04",
            "yValue0": 4.79,
            "yValue1": 5.52,
            "yValue2": 5.60
        },
        {
            "xValue": "May 04",
            "yValue0": 4.83,
            "yValue1": 5.35,
            "yValue2": 5.60
        },
        {
            "xValue": "Jun 04",
            "yValue0": 4.79,
            "yValue1": 5.33,
            "yValue2": 5.60
        },
        {
            "xValue": "Jul 04",
            "yValue0": 4.77,
            "yValue1": 5.67,
            "yValue2": 5.50
        },
        {
            "xValue": "Aug 04",
            "yValue0": 4.53,
            "yValue1": 5.94,
            "yValue2": 5.40
        },
        {
            "xValue": "Sep 04",
            "yValue0": 4.59,
            "yValue1": 6.13,
            "yValue2": 5.40
        },
        {
            "xValue": "Oct 04",
            "yValue0": 4.74,
            "yValue1": 6.35,
            "yValue2": 5.50
        },
        {
            "xValue": "Nov 04",
            "yValue0": 4.57,
            "yValue1": 6.60,
            "yValue2": 5.40
        },
        {
            "xValue": "Dec 04",
            "yValue0": 4.66,
            "yValue1": 6.91,
            "yValue2": 5.40
        },
        {
            "xValue": "Jan 05",
            "yValue0": 4.69,
            "yValue1": 6.99,
            "yValue2": 5.30
        },
        {
            "xValue": "Feb 05",
            "yValue0": 4.66,
            "yValue1": 7.39,
            "yValue2": 5.40
        },
        {
            "xValue": "Mar 05",
            "yValue0": 4.46,
            "yValue1": 7.71,
            "yValue2": 5.20
        },
        {
            "xValue": "Apr 05",
            "yValue0": 4.27,
            "yValue1": 7.57,
            "yValue2": 5.20
        },
        {
            "xValue": "May 05",
            "yValue0": 4.32,
            "yValue1": 7.96,
            "yValue2": 5.10
        },
        {
            "xValue": "Jun 05",
            "yValue0": 4.25,
            "yValue1": 7.82,
            "yValue2": 5.00
        },
        {
            "xValue": "Jul 05",
            "yValue0": 4.22,
            "yValue1": 7.81,
            "yValue2": 5.00
        },
        {
            "xValue": "Aug 05",
            "yValue0": 4.11,
            "yValue1": 7.86,
            "yValue2": 4.90
        },
        {
            "xValue": "Sep 05",
            "yValue0": 4.25,
            "yValue1": 7.98,
            "yValue2": 5.00
        },
        {
            "xValue": "Oct 05",
            "yValue0": 4.21,
            "yValue1": 8.14,
            "yValue2": 5.00
        },
        {
            "xValue": "Nov 05",
            "yValue0": 4.34,
            "yValue1": 8.14,
            "yValue2": 5.00
        },
        {
            "xValue": "Dec 05",
            "yValue0": 4.12,
            "yValue1": 8.46,
            "yValue2": 4.90
        },
        {
            "xValue": "Jan 06",
            "yValue0": 3.98,
            "yValue1": 8.60,
            "yValue2": 4.70
        },
        {
            "xValue": "Feb 06",
            "yValue0": 4.11,
            "yValue1": 8.81,
            "yValue2": 4.80
        },
        {
            "xValue": "Mar 06",
            "yValue0": 4.03,
            "yValue1": 8.86,
            "yValue2": 4.70
        },
        {
            "xValue": "Apr 06",
            "yValue0": 4.27,
            "yValue1": 8.89,
            "yValue2": 4.70
        },
        {
            "xValue": "May 06",
            "yValue0": 3.94,
            "yValue1": 9.32,
            "yValue2": 4.60
        },
        {
            "xValue": "Jun 06",
            "yValue0": 4.04,
            "yValue1": 9.60,
            "yValue2": 4.60
        },
        {
            "xValue": "Jul 06",
            "yValue0": 4.11,
            "yValue1": 9.46,
            "yValue2": 4.70
        },
        {
            "xValue": "Aug 06",
            "yValue0": 4.09,
            "yValue1": 9.66,
            "yValue2": 4.70
        },
        {
            "xValue": "Sep 06",
            "yValue0": 4.02,
            "yValue1": 9.81,
            "yValue2": 4.50
        },
        {
            "xValue": "Oct 06",
            "yValue0": 3.90,
            "yValue1": 9.71,
            "yValue2": 4.40
        },
        {
            "xValue": "Nov 06",
            "yValue0": 4.01,
            "yValue1": 9.91,
            "yValue2": 4.50
        },
        {
            "xValue": "Dec 06",
            "yValue0": 3.95,
            "yValue1": 9.95,
            "yValue2": 4.40
        },
        {
            "xValue": "Jan 07",
            "yValue0": 4.14,
            "yValue1": 9.62,
            "yValue2": 4.60
        },
        {
            "xValue": "Feb 07",
            "yValue0": 4.20,
            "yValue1": 9.70,
            "yValue2": 4.50
        },
        {
            "xValue": "Mar 07",
            "yValue0": 4.13,
            "yValue1": 9.63,
            "yValue2": 4.40
        },
        {
            "xValue": "Apr 07",
            "yValue0": 4.25,
            "yValue1": 9.69,
            "yValue2": 4.50
        },
        {
            "xValue": "May 07",
            "yValue0": 4.14,
            "yValue1": 9.63,
            "yValue2": 4.40
        },
        {
            "xValue": "Jun 07",
            "yValue0": 4.25,
            "yValue1": 9.60,
            "yValue2": 4.60
        },
        {
            "xValue": "Jul 07",
            "yValue0": 4.30,
            "yValue1": 9.44,
            "yValue2": 4.70
        },
        {
            "xValue": "Aug 07",
            "yValue0": 4.38,
            "yValue1": 9.41,
            "yValue2": 4.60
        },
        {
            "xValue": "Sep 07",
            "yValue0": 4.43,
            "yValue1": 9.39,
            "yValue2": 4.70
        },
        {
            "xValue": "Oct 07",
            "yValue0": 4.43,
            "yValue1": 9.69,
            "yValue2": 4.70
        },
        {
            "xValue": "Nov 07",
            "yValue0": 4.46,
            "yValue1": 9.31,
            "yValue2": 4.70
        },
        {
            "xValue": "Dec 07",
            "yValue0": 4.73,
            "yValue1": 9.15,
            "yValue2": 5.00
        },
        {
            "xValue": "Jan 08",
            "yValue0": 4.66,
            "yValue1": 9.24,
            "yValue2": 5.00
        },
        {
            "xValue": "Feb 08",
            "yValue0": 4.58,
            "yValue1": 9.20,
            "yValue2": 4.90
        },
        {
            "xValue": "Mar 08",
            "yValue0": 4.80,
            "yValue1": 9.15,
            "yValue2": 5.10
        },
        {
            "xValue": "Apr 08",
            "yValue0": 4.75,
            "yValue1": 9.06,
            "yValue2": 5.00
        },
        {
            "xValue": "May 08",
            "yValue0": 5.12,
            "yValue1": 8.71,
            "yValue2": 5.40
        },
        {
            "xValue": "Jun 08",
            "yValue0": 5.27,
            "yValue1": 8.70,
            "yValue2": 5.60
        },
        {
            "xValue": "Jul 08",
            "yValue0": 5.52,
            "yValue1": 8.64,
            "yValue2": 5.80
        },
        {
            "xValue": "Aug 08",
            "yValue0": 5.81,
            "yValue1": 8.58,
            "yValue2": 6.10
        },
        {
            "xValue": "Sep 08",
            "yValue0": 5.88,
            "yValue1": 8.35,
            "yValue2": 6.10
        },
        {
            "xValue": "Oct 08",
            "yValue0": 6.20,
            "yValue1": 8.31,
            "yValue2": 6.50
        },
        {
            "xValue": "Nov 08",
            "yValue0": 6.55,
            "yValue1": 7.99,
            "yValue2": 6.80
        },
        {
            "xValue": "Dec 08",
            "yValue0": 6.96,
            "yValue1": 7.80,
            "yValue2": 7.30
        },
        {
            "xValue": "Jan 09",
            "yValue0": 7.28,
            "yValue1": 7.83,
            "yValue2": 7.80
        },
        {
            "xValue": "Feb 09",
            "yValue0": 7.70,
            "yValue1": 7.64,
            "yValue2": 8.30
        },
        {
            "xValue": "Mar 09",
            "yValue0": 7.96,
            "yValue1": 7.69,
            "yValue2": 8.70
        },
        {
            "xValue": "Apr 09",
            "yValue0": 8.27,
            "yValue1": 8.13,
            "yValue2": 9.00
        },
        {
            "xValue": "May 09",
            "yValue0": 8.68,
            "yValue1": 8.02,
            "yValue2": 9.40
        },
        {
            "xValue": "Jun 09",
            "yValue0": 8.77,
            "yValue1": 7.92,
            "yValue2": 9.50
        },
        {
            "xValue": "Jul 09",
            "yValue0": 8.64,
            "yValue1": 7.94,
            "yValue2": 9.50
        },
        {
            "xValue": "Aug 09",
            "yValue0": 8.88,
            "yValue1": 7.95,
            "yValue2": 9.60
        },
        {
            "xValue": "Sep 09",
            "yValue0": 9.23,
            "yValue1": 7.93,
            "yValue2": 9.80
        },
        {
            "xValue": "Oct 09",
            "yValue0": 9.41,
            "yValue1": 7.88,
            "yValue2": 10.00
        },
        {
            "xValue": "Nov 09",
            "yValue0": 9.27,
            "yValue1": 7.89,
            "yValue2": 9.90
        },
        {
            "xValue": "Dec 09",
            "yValue0": 9.45,
            "yValue1": 7.82,
            "yValue2": 9.90
        },
        {
            "xValue": "Jan 10",
            "yValue0": 9.66,
            "yValue1": 7.81,
            "yValue2": 9.80
        },
        {
            "xValue": "Feb 10",
            "yValue0": 9.85,
            "yValue1": 7.65,
            "yValue2": 9.80
        },
        {
            "xValue": "Mar 10",
            "yValue0": 10.05,
            "yValue1": 7.68,
            "yValue2": 9.90
        },
        {
            "xValue": "Apr 10",
            "yValue0": 10.09,
            "yValue1": 7.62,
            "yValue2": 9.90
        },
        {
            "xValue": "May 10",
            "yValue0": 9.86,
            "yValue1": 7.65,
            "yValue2": 9.60
        },
        {
            "xValue": "Jun 10",
            "yValue0": 9.66,
            "yValue1": 7.21,
            "yValue2": 9.40
        },
        {
            "xValue": "Jul 10",
            "yValue0": 9.85,
            "yValue1": 7.36,
            "yValue2": 9.40
        },
        {
            "xValue": "Aug 10",
            "yValue0": 9.89,
            "yValue1": 6.93,
            "yValue2": 9.50
        },
        {
            "xValue": "Sep 10",
            "yValue0": 10.07,
            "yValue1": 6.99,
            "yValue2": 9.50
        },
        {
            "xValue": "Oct 10",
            "yValue0": 9.97,
            "yValue1": 7.03,
            "yValue2": 9.40
        },
        {
            "xValue": "Nov 10",
            "yValue0": 10.42,
            "yValue1": 7.08,
            "yValue2": 9.80
        },
        {
            "xValue": "Dec 10",
            "yValue0": 9.92,
            "yValue1": 6.98,
            "yValue2": 9.30
        },
        {
            "xValue": "Jan 11",
            "yValue0": 9.51,
            "yValue1": 6.89,
            "yValue2": 9.10
        },
        {
            "xValue": "Feb 11",
            "yValue0": 9.51,
            "yValue1": 6.80,
            "yValue2": 9.00
        },
        {
            "xValue": "Mar 11",
            "yValue0": 9.64,
            "yValue1": 6.70,
            "yValue2": 9.00
        },
        {
            "xValue": "Apr 11",
            "yValue0": 9.79,
            "yValue1": 6.51,
            "yValue2": 9.10
        },
        {
            "xValue": "May 11",
            "yValue0": 9.74,
            "yValue1": 6.41,
            "yValue2": 9.00
        },
        {
            "xValue": "Jun 11",
            "yValue0": 9.75,
            "yValue1": 6.41,
            "yValue2": 9.10
        },
        {
            "xValue": "Jul 11",
            "yValue0": 9.50,
            "yValue1": 6.30,
            "yValue2": 9.00
        },
        {
            "xValue": "Aug 11",
            "yValue0": 9.54,
            "yValue1": 6.22,
            "yValue2": 9.00
        },
        {
            "xValue": "Sep 11",
            "yValue0": 9.69,
            "yValue1": 6.28,
            "yValue2": 9.00
        },
        {
            "xValue": "Oct 11",
            "yValue0": 9.55,
            "yValue1": 6.09,
            "yValue2": 8.80
        },
        {
            "xValue": "Nov 11",
            "yValue0": 9.25,
            "yValue1": 5.95,
            "yValue2": 8.60
        },
        {
            "xValue": "Dec 11",
            "yValue0": 9.14,
            "yValue1": 6.13,
            "yValue2": 8.50
        },
        {
            "xValue": "Jan 12",
            "yValue0": 8.63,
            "yValue1": 6.07,
            "yValue2": 8.30
        },
        {
            "xValue": "Feb 12",
            "yValue0": 8.85,
            "yValue1": 6.03,
            "yValue2": 8.30
        },
        {
            "xValue": "Mar 12",
            "yValue0": 8.84,
            "yValue1": 6.20,
            "yValue2": 8.20
        },
        {
            "xValue": "Apr 12",
            "yValue0": 8.98,
            "yValue1": 5.71,
            "yValue2": 8.20
        },
        {
            "xValue": "May 12",
            "yValue0": 9.01,
            "yValue1": 5.91,
            "yValue2": 8.20
        },
        {
            "xValue": "Jun 12",
            "yValue0": 8.81,
            "yValue1": 5.99,
            "yValue2": 8.20
        },
        {
            "xValue": "Jul 12",
            "yValue0": 8.66,
            "yValue1": 5.93,
            "yValue2": 8.20
        },
        {
            "xValue": "Aug 12",
            "yValue0": 8.49,
            "yValue1": 6.00,
            "yValue2": 8.10
        },
        {
            "xValue": "Sep 12",
            "yValue0": 8.17,
            "yValue1": 5.98,
            "yValue2": 7.80
        },
        {
            "xValue": "Oct 12",
            "yValue0": 8.11,
            "yValue1": 6.09,
            "yValue2": 7.80
        },
        {
            "xValue": "Nov 12",
            "yValue0": 8.01,
            "yValue1": 5.84,
            "yValue2": 7.70
        },
        {
            "xValue": "Dec 12",
            "yValue0": 7.96,
            "yValue1": 5.70,
            "yValue2": 7.90
        },
        {
            "xValue": "Jan 13",
            "yValue0": 7.81,
            "yValue1": 5.61,
            "yValue2": 8.00
        },
        {
            "xValue": "Feb 13",
            "yValue0": 7.61,
            "yValue1": 5.66,
            "yValue2": 7.70
        },
        {
            "xValue": "Mar 13",
            "yValue0": 7.41,
            "yValue1": 5.42,
            "yValue2": 7.50
        },
        {
            "xValue": "Apr 13",
            "yValue0": 7.41,
            "yValue1": 5.40,
            "yValue2": 7.60
        },
        {
            "xValue": "May 13",
            "yValue0": 7.40,
            "yValue1": 5.18,
            "yValue2": 7.50
        },
        {
            "xValue": "Jun 13",
            "yValue0": 7.48,
            "yValue1": 5.28,
            "yValue2": 7.50
        },
        {
            "xValue": "Jul 13",
            "yValue0": 7.34,
            "yValue1": 5.37,
            "yValue2": 7.30
        },
        {
            "xValue": "Aug 13",
            "yValue0": 7.25,
            "yValue1": 5.08,
            "yValue2": 7.20
        },
        {
            "xValue": "Sep 13",
            "yValue0": 7.20,
            "yValue1": 5.18,
            "yValue2": 7.20
        },
        {
            "xValue": "Oct 13",
            "yValue0": 7.12,
            "yValue1": 5.04,
            "yValue2": 7.20
        },
        {
            "xValue": "Nov 13",
            "yValue0": 6.99,
            "yValue1": 5.00,
            "yValue2": 6.90
        },
        {
            "xValue": "Dec 13",
            "yValue0": 6.59,
            "yValue1": 4.96,
            "yValue2": 6.70
        },
        {
            "xValue": "Jan 14",
            "yValue0": 6.52,
            "yValue1": 4.97,
            "yValue2": 6.60
        },
        {
            "xValue": "Feb 14",
            "yValue0": 6.61,
            "yValue1": 5.01,
            "yValue2": 6.70
        },
        {
            "xValue": "Mar 14",
            "yValue0": 6.42,
            "yValue1": 5.03,
            "yValue2": 6.70
        },
        {
            "xValue": "Apr 14",
            "yValue0": 6.13,
            "yValue1": 4.79,
            "yValue2": 6.20
        },
        {
            "xValue": "May 14",
            "yValue0": 6.24,
            "yValue1": 5.08,
            "yValue2": 6.30
        },
        {
            "xValue": "Jun 14",
            "yValue0": 6.05,
            "yValue1": 4.96,
            "yValue2": 6.10
        },
        {
            "xValue": "Jul 14",
            "yValue0": 6.25,
            "yValue1": 5.00,
            "yValue2": 6.20
        },
        {
            "xValue": "Aug 14",
            "yValue0": 6.24,
            "yValue1": 4.98,
            "yValue2": 6.10
        },
        {
            "xValue": "Sep 14",
            "yValue0": 6.11,
            "yValue1": 4.79,
            "yValue2": 5.90
        },
        {
            "xValue": "Oct 14",
            "yValue0": 5.94,
            "yValue1": 4.71,
            "yValue2": 5.70
        },
        {
            "xValue": "Nov 14",
            "yValue0": 6.11,
            "yValue1": 4.78,
            "yValue2": 5.80
        },
        {
            "xValue": "Dec 14",
            "yValue0": 5.72,
            "yValue1": 4.64,
            "yValue2": 5.60
        },
        {
            "xValue": "Jan 15",
            "yValue0": 5.66,
            "yValue1": 4.89,
            "yValue2": 5.70
        },
        {
            "xValue": "Feb 15",
            "yValue0": 5.44,
            "yValue1": 4.84,
            "yValue2": 5.50
        },
        {
            "xValue": "Mar 15",
            "yValue0": 5.23,
            "yValue1": 5.03,
            "yValue2": 5.40
        },
        {
            "xValue": "Apr 15",
            "yValue0": 5.35,
            "yValue1": 4.99,
            "yValue2": 5.40
        },
        {
            "xValue": "May 15",
            "yValue0": 5.64,
            "yValue1": 4.96,
            "yValue2": 5.60
        },
        {
            "xValue": "Jun 15",
            "yValue0": 5.23,
            "yValue1": 5.25,
            "yValue2": 5.30
        },
        {
            "xValue": "Jul 15",
            "yValue0": 5.16,
            "yValue1": 5.39,
            "yValue2": 5.20
        },
        {
            "xValue": "Aug 15",
            "yValue0": 5.14,
            "yValue1": 5.67,
            "yValue2": 5.10
        },
        {
            "xValue": "Sep 15",
            "yValue0": 5.10,
            "yValue1": 5.77,
            "yValue2": 5.00
        },
        {
            "xValue": "Oct 15",
            "yValue0": 5.30,
            "yValue1": 6.16,
            "yValue2": 5.00
        },
        {
            "xValue": "Nov 15",
            "yValue0": 5.58,
            "yValue1": 6.27,
            "yValue2": 5.10
        },
        {
            "xValue": "Dec 15",
            "yValue0": 5.35,
            "yValue1": 6.52,
            "yValue2": 5.00
        },
        {
            "xValue": "Jan 16",
            "yValue0": 5.07,
            "yValue1": 6.57,
            "yValue2": 4.80
        },
        {
            "xValue": "Feb 16",
            "yValue0": 5.10,
            "yValue1": 6.56,
            "yValue2": 4.90
        },
        {
            "xValue": "Mar 16",
            "yValue0": 5.13,
            "yValue1": 6.64,
            "yValue2": 5.00
        },
        {
            "xValue": "Apr 16",
            "yValue0": 5.09,
            "yValue1": 6.83,
            "yValue2": 5.10
        },
        {
            "xValue": "May 16",
            "yValue0": 4.88,
            "yValue1": 6.79,
            "yValue2": 4.80
        },
        {
            "xValue": "Jun 16",
            "yValue0": 5.00,
            "yValue1": 6.81,
            "yValue2": 4.90
        },
        {
            "xValue": "Jul 16",
            "yValue0": 4.94,
            "yValue1": 6.74,
            "yValue2": 4.80
        },
        {
            "xValue": "Aug 16",
            "yValue0": 4.94,
            "yValue1": 6.79,
            "yValue2": 4.90
        },
        {
            "xValue": "Sep 16",
            "yValue0": 5.19,
            "yValue1": 6.73,
            "yValue2": 5.00
        },
        {
            "xValue": "Oct 16",
            "yValue0": 5.19,
            "yValue1": 6.78,
            "yValue2": 4.90
        },
        {
            "xValue": "Nov 16",
            "yValue0": 5.18,
            "yValue1": 6.87,
            "yValue2": 4.70
        },
        {
            "xValue": "Dec 16",
            "yValue0": 5.42,
            "yValue1": 7.12,
            "yValue2": 4.70
        },
        {
            "xValue": "Jan 17",
            "yValue0": 5.11,
            "yValue1": 6.87,
            "yValue2": 4.70
        },
        {
            "xValue": "Feb 17",
            "yValue0": 5.06,
            "yValue1": 6.85,
            "yValue2": 4.60
        },
        {
            "xValue": "Mar 17",
            "yValue0": 4.75,
            "yValue1": 6.83,
            "yValue2": 4.40
        },
        {
            "xValue": "Apr 17",
            "yValue0": 4.57,
            "yValue1": 6.95,
            "yValue2": 4.40
        },
        {
            "xValue": "May 17",
            "yValue0": 4.51,
            "yValue1": 7.00,
            "yValue2": 4.40
        },
        {
            "xValue": "Jun 17",
            "yValue0": 4.32,
            "yValue1": 7.19,
            "yValue2": 4.30
        },
        {
            "xValue": "Jul 17",
            "yValue0": 4.42,
            "yValue1": 6.91,
            "yValue2": 4.30
        },
        {
            "xValue": "Aug 17",
            "yValue0": 4.42,
            "yValue1": 6.91,
            "yValue2": 4.40
        },
        {
            "xValue": "Sep 17",
            "yValue0": 4.35,
            "yValue1": 6.94,
            "yValue2": 4.30
        },
        {
            "xValue": "Oct 17",
            "yValue0": 4.31,
            "yValue1": 6.88,
            "yValue2": 4.20
        },
        {
            "xValue": "Nov 17",
            "yValue0": 4.45,
            "yValue1": 6.77,
            "yValue2": 4.20
        },
        {
            "xValue": "Dec 17",
            "yValue0": 4.34,
            "yValue1": 6.57,
            "yValue2": 4.10
        },
        {
            "xValue": "Jan 18",
            "yValue0": 4.46,
            "yValue1": 6.53,
            "yValue2": 4.00
        },
        {
            "xValue": "Feb 18",
            "yValue0": 4.27,
            "yValue1": 6.44,
            "yValue2": 4.10
        },
        {
            "xValue": "Mar 18",
            "yValue0": 4.07,
            "yValue1": 6.66,
            "yValue2": 4.00
        },
        {
            "xValue": "Apr 18",
            "yValue0": 3.94,
            "yValue1": 6.35,
            "yValue2": 4.00
        },
        {
            "xValue": "May 18",
            "yValue0": 3.62,
            "yValue1": 6.35,
            "yValue2": 3.80
        },
        {
            "xValue": "Jun 18",
            "yValue0": 3.74,
            "yValue1": 6.30,
            "yValue2": 4.00
        },
        {
            "xValue": "Jul 18",
            "yValue0": 3.71,
            "yValue1": 6.21,
            "yValue2": 3.80
        },
        {
            "xValue": "Aug 18",
            "yValue0": 3.79,
            "yValue1": 6.02,
            "yValue2": 3.80
        },
        {
            "xValue": "Sep 18",
            "yValue0": 3.83,
            "yValue1": 5.98,
            "yValue2": 3.70
        },
        {
            "xValue": "Oct 18",
            "yValue0": 3.93,
            "yValue1": 5.94,
            "yValue2": 3.80
        },
        {
            "xValue": "Nov 18",
            "yValue0": 4.01,
            "yValue1": 5.89,
            "yValue2": 3.80
        },
        {
            "xValue": "Dec 18",
            "yValue0": 4.35,
            "yValue1": 5.81,
            "yValue2": 3.90
        },
        {
            "xValue": "Jan 19",
            "yValue0": 4.33,
            "yValue1": 5.71,
            "yValue2": 4.00
        },
        {
            "xValue": "Feb 19",
            "yValue0": 4.00,
            "yValue1": 5.77,
            "yValue2": 3.80
        },
        {
            "xValue": "Mar 19",
            "yValue0": 3.95,
            "yValue1": 5.63,
            "yValue2": 3.80
        },
        {
            "xValue": "Apr 19",
            "yValue0": 3.45,
            "yValue1": 5.44,
            "yValue2": 3.60
        },
        {
            "xValue": "May 19",
            "yValue0": 3.31,
            "yValue1": 5.37,
            "yValue2": 3.60
        },
        {
            "xValue": "Jun 19",
            "yValue0": 3.29,
            "yValue1": 5.33,
            "yValue2": 3.60
        },
        {
            "xValue": "Jul 19",
            "yValue0": 3.50,
            "yValue1": 5.23,
            "yValue2": 3.70
        },
        {
            "xValue": "Aug 19",
            "yValue0": 3.46,
            "yValue1": 5.22,
            "yValue2": 3.70
        },
        {
            "xValue": "Sep 19",
            "yValue0": 3.49,
            "yValue1": 5.23,
            "yValue2": 3.50
        },
        {
            "xValue": "Oct 19",
            "yValue0": 3.64,
            "yValue1": 5.11,
            "yValue2": 3.60
        },
        {
            "xValue": "Nov 19",
            "yValue0": 3.74,
            "yValue1": 5.31,
            "yValue2": 3.60
        },
        {
            "xValue": "Dec 19",
            "yValue0": 3.81,
            "yValue1": 5.07,
            "yValue2": 3.60
        },
        {
            "xValue": "Jan 20",
            "yValue0": 3.87,
            "yValue1": 4.97,
            "yValue2": 3.50
        },
        {
            "xValue": "Feb 20",
            "yValue0": 3.76,
            "yValue1": 5.00,
            "yValue2": 3.50
        },
        {
            "xValue": "Mar 20",
            "yValue0": 5.26,
            "yValue1": 4.97,
            "yValue2": 4.40
        },
        {
            "xValue": "Apr 20",
            "yValue0": 13.79,
            "yValue1": 4.94,
            "yValue2": 14.70
        },
        {
            "xValue": "May 20",
            "yValue0": 14.52,
            "yValue1": 4.81,
            "yValue2": 13.20
        },
        {
            "xValue": "Jun 20",
            "yValue0": 10.30,
            "yValue1": 4.85,
            "yValue2": 11.00
        },
        {
            "xValue": "Jul 20",
            "yValue0": 9.57,
            "yValue1": 4.94,
            "yValue2": 10.20
        },
        {
            "xValue": "Aug 20",
            "yValue0": 8.20,
            "yValue1": 5.01,
            "yValue2": 8.40
        },
        {
            "xValue": "Sep 20",
            "yValue0": 8.61,
            "yValue1": 4.80,
            "yValue2": 7.90
        },
        {
            "xValue": "Oct 20",
            "yValue0": 7.77,
            "yValue1": 4.59,
            "yValue2": 6.90
        },
        {
            "xValue": "Nov 20",
            "yValue0": 7.92,
            "yValue1": 4.83,
            "yValue2": 6.70
        },
        {
            "xValue": "Dec 20",
            "yValue0": 7.94,
            "yValue1": 4.83,
            "yValue2": 6.70
        },
        {
            "xValue": "Jan 21",
            "yValue0": 7.16,
            "yValue1": 5.07,
            "yValue2": 6.40
        },
        {
            "xValue": "Feb 21",
            "yValue0": 6.88,
            "yValue1": 5.02,
            "yValue2": 6.20
        },
        {
            "xValue": "Mar 21",
            "yValue0": 6.34,
            "yValue1": 4.98,
            "yValue2": 6.00
        },
        {
            "xValue": "Apr 21",
            "yValue0": 6.32,
            "yValue1": 5.15,
            "yValue2": 6.00
        },
        {
            "xValue": "May 21",
            "yValue0": 6.15,
            "yValue1": 5.00,
            "yValue2": 5.80
        },
        {
            "xValue": "Jun 21",
            "yValue0": 5.86,
            "yValue1": 5.26,
            "yValue2": 5.90
        },
        {
            "xValue": "Jul 21",
            "yValue0": 5.50,
            "yValue1": 5.43,
            "yValue2": 5.40
        },
        {
            "xValue": "Aug 21",
            "yValue0": 5.46,
            "yValue1": 5.39,
            "yValue2": 5.20
        },
        {
            "xValue": "Sep 21",
            "yValue0": 5.21,
            "yValue1": 5.51,
            "yValue2": 4.70
        },
        {
            "xValue": "Oct 21",
            "yValue0": 5.05,
            "yValue1": 5.61,
            "yValue2": 4.60
        },
        {
            "xValue": "Nov 21",
            "yValue0": 4.62,
            "yValue1": 5.69,
            "yValue2": 4.20
        },
        {
            "xValue": "Dec 21",
            "yValue0": 4.09,
            "yValue1": 5.94,
            "yValue2": 3.90
        },
        {
            "xValue": "Jan 22",
            "yValue0": 4.12,
            "yValue1": 6.02,
            "yValue2": 4.00
        },
        {
            "xValue": "Feb 22",
            "yValue0": 3.71,
            "yValue1": 5.99,
            "yValue2": 3.80
        },
        {
            "xValue": "Mar 22",
            "yValue0": 3.16,
            "yValue1": 6.25,
            "yValue2": 3.60
        },
        {
            "xValue": "Apr 22",
            "yValue0": 2.75,
            "yValue1": 6.28,
            "yValue2": 3.60
        },
        {
            "xValue": "May 22",
            "yValue0": 2.61,
            "yValue1": 6.76,
            "yValue2": 3.60
        }
    ],
});