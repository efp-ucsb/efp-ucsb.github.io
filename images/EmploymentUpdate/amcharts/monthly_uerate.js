var chart = AmCharts.makeChart("monthly_uerate" , { 
    "type": "serial", 
    "theme": "light", 
    "dataDateFormat": "YYYY MM",
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
            "xValue": "Jan 1990",
            "yValue0": 4.22,
            "yValue1": 5.27,
            "yValue2": 5.40
        },
        {
            "xValue": "Feb 1990",
            "yValue0": 4.47,
            "yValue1": 5.16,
            "yValue2": 5.30
        },
        {
            "xValue": "Mar 1990",
            "yValue0": 4.60,
            "yValue1": 5.17,
            "yValue2": 5.20
        },
        {
            "xValue": "Apr 1990",
            "yValue0": 4.98,
            "yValue1": 5.48,
            "yValue2": 5.40
        },
        {
            "xValue": "May 1990",
            "yValue0": 4.64,
            "yValue1": 5.42,
            "yValue2": 5.40
        },
        {
            "xValue": "Jun 1990",
            "yValue0": 4.62,
            "yValue1": 5.27,
            "yValue2": 5.20
        },
        {
            "xValue": "Jul 1990",
            "yValue0": 4.99,
            "yValue1": 5.77,
            "yValue2": 5.50
        },
        {
            "xValue": "Aug 1990",
            "yValue0": 5.01,
            "yValue1": 5.90,
            "yValue2": 5.70
        },
        {
            "xValue": "Sep 1990",
            "yValue0": 5.20,
            "yValue1": 6.13,
            "yValue2": 5.90
        },
        {
            "xValue": "Oct 1990",
            "yValue0": 5.14,
            "yValue1": 6.26,
            "yValue2": 5.90
        },
        {
            "xValue": "Nov 1990",
            "yValue0": 5.62,
            "yValue1": 6.62,
            "yValue2": 6.20
        },
        {
            "xValue": "Dec 1990",
            "yValue0": 5.67,
            "yValue1": 6.84,
            "yValue2": 6.30
        },
        {
            "xValue": "Jan 1991",
            "yValue0": 5.68,
            "yValue1": 6.94,
            "yValue2": 6.40
        },
        {
            "xValue": "Feb 1991",
            "yValue0": 5.70,
            "yValue1": 7.29,
            "yValue2": 6.60
        },
        {
            "xValue": "Mar 1991",
            "yValue0": 5.76,
            "yValue1": 7.57,
            "yValue2": 6.80
        },
        {
            "xValue": "Apr 1991",
            "yValue0": 5.82,
            "yValue1": 7.50,
            "yValue2": 6.70
        },
        {
            "xValue": "May 1991",
            "yValue0": 5.80,
            "yValue1": 7.83,
            "yValue2": 6.90
        },
        {
            "xValue": "Jun 1991",
            "yValue0": 5.93,
            "yValue1": 7.67,
            "yValue2": 6.90
        },
        {
            "xValue": "Jul 1991",
            "yValue0": 5.84,
            "yValue1": 7.71,
            "yValue2": 6.80
        },
        {
            "xValue": "Aug 1991",
            "yValue0": 5.54,
            "yValue1": 7.74,
            "yValue2": 6.90
        },
        {
            "xValue": "Sep 1991",
            "yValue0": 6.13,
            "yValue1": 7.78,
            "yValue2": 6.90
        },
        {
            "xValue": "Oct 1991",
            "yValue0": 6.11,
            "yValue1": 8.04,
            "yValue2": 7.00
        },
        {
            "xValue": "Nov 1991",
            "yValue0": 6.21,
            "yValue1": 8.05,
            "yValue2": 7.00
        },
        {
            "xValue": "Dec 1991",
            "yValue0": 6.45,
            "yValue1": 8.32,
            "yValue2": 7.30
        },
        {
            "xValue": "Jan 1992",
            "yValue0": 6.58,
            "yValue1": 8.52,
            "yValue2": 7.30
        },
        {
            "xValue": "Feb 1992",
            "yValue0": 7.29,
            "yValue1": 8.71,
            "yValue2": 7.40
        },
        {
            "xValue": "Mar 1992",
            "yValue0": 6.92,
            "yValue1": 8.83,
            "yValue2": 7.40
        },
        {
            "xValue": "Apr 1992",
            "yValue0": 6.88,
            "yValue1": 8.81,
            "yValue2": 7.40
        },
        {
            "xValue": "May 1992",
            "yValue0": 7.30,
            "yValue1": 9.11,
            "yValue2": 7.60
        },
        {
            "xValue": "Jun 1992",
            "yValue0": 7.36,
            "yValue1": 9.47,
            "yValue2": 7.80
        },
        {
            "xValue": "Jul 1992",
            "yValue0": 7.54,
            "yValue1": 9.44,
            "yValue2": 7.70
        },
        {
            "xValue": "Aug 1992",
            "yValue0": 7.97,
            "yValue1": 9.65,
            "yValue2": 7.60
        },
        {
            "xValue": "Sep 1992",
            "yValue0": 7.79,
            "yValue1": 9.83,
            "yValue2": 7.60
        },
        {
            "xValue": "Oct 1992",
            "yValue0": 7.93,
            "yValue1": 9.70,
            "yValue2": 7.30
        },
        {
            "xValue": "Nov 1992",
            "yValue0": 7.80,
            "yValue1": 9.89,
            "yValue2": 7.40
        },
        {
            "xValue": "Dec 1992",
            "yValue0": 7.82,
            "yValue1": 9.94,
            "yValue2": 7.40
        },
        {
            "xValue": "Jan 1993",
            "yValue0": 7.79,
            "yValue1": 9.52,
            "yValue2": 7.30
        },
        {
            "xValue": "Feb 1993",
            "yValue0": 7.64,
            "yValue1": 9.60,
            "yValue2": 7.10
        },
        {
            "xValue": "Mar 1993",
            "yValue0": 7.29,
            "yValue1": 9.51,
            "yValue2": 7.00
        },
        {
            "xValue": "Apr 1993",
            "yValue0": 7.71,
            "yValue1": 9.59,
            "yValue2": 7.10
        },
        {
            "xValue": "May 1993",
            "yValue0": 8.00,
            "yValue1": 9.55,
            "yValue2": 7.10
        },
        {
            "xValue": "Jun 1993",
            "yValue0": 7.97,
            "yValue1": 9.51,
            "yValue2": 7.00
        },
        {
            "xValue": "Jul 1993",
            "yValue0": 7.87,
            "yValue1": 9.39,
            "yValue2": 6.90
        },
        {
            "xValue": "Aug 1993",
            "yValue0": 7.88,
            "yValue1": 9.41,
            "yValue2": 6.80
        },
        {
            "xValue": "Sep 1993",
            "yValue0": 7.69,
            "yValue1": 9.39,
            "yValue2": 6.70
        },
        {
            "xValue": "Oct 1993",
            "yValue0": 8.03,
            "yValue1": 9.67,
            "yValue2": 6.80
        },
        {
            "xValue": "Nov 1993",
            "yValue0": 7.58,
            "yValue1": 9.27,
            "yValue2": 6.60
        },
        {
            "xValue": "Dec 1993",
            "yValue0": 7.46,
            "yValue1": 9.15,
            "yValue2": 6.50
        },
        {
            "xValue": "Jan 1994",
            "yValue0": 7.35,
            "yValue1": 9.13,
            "yValue2": 6.60
        },
        {
            "xValue": "Feb 1994",
            "yValue0": 7.54,
            "yValue1": 9.10,
            "yValue2": 6.60
        },
        {
            "xValue": "Mar 1994",
            "yValue0": 7.37,
            "yValue1": 9.03,
            "yValue2": 6.50
        },
        {
            "xValue": "Apr 1994",
            "yValue0": 7.38,
            "yValue1": 8.97,
            "yValue2": 6.40
        },
        {
            "xValue": "May 1994",
            "yValue0": 7.23,
            "yValue1": 8.63,
            "yValue2": 6.10
        },
        {
            "xValue": "Jun 1994",
            "yValue0": 7.19,
            "yValue1": 8.65,
            "yValue2": 6.10
        },
        {
            "xValue": "Jul 1994",
            "yValue0": 7.36,
            "yValue1": 8.57,
            "yValue2": 6.10
        },
        {
            "xValue": "Aug 1994",
            "yValue0": 7.16,
            "yValue1": 8.57,
            "yValue2": 6.00
        },
        {
            "xValue": "Sep 1994",
            "yValue0": 7.20,
            "yValue1": 8.33,
            "yValue2": 5.90
        },
        {
            "xValue": "Oct 1994",
            "yValue0": 6.95,
            "yValue1": 8.28,
            "yValue2": 5.80
        },
        {
            "xValue": "Nov 1994",
            "yValue0": 6.85,
            "yValue1": 7.95,
            "yValue2": 5.60
        },
        {
            "xValue": "Dec 1994",
            "yValue0": 6.88,
            "yValue1": 7.72,
            "yValue2": 5.50
        },
        {
            "xValue": "Jan 1995",
            "yValue0": 6.93,
            "yValue1": 7.81,
            "yValue2": 5.60
        },
        {
            "xValue": "Feb 1995",
            "yValue0": 6.62,
            "yValue1": 7.64,
            "yValue2": 5.40
        },
        {
            "xValue": "Mar 1995",
            "yValue0": 6.45,
            "yValue1": 7.66,
            "yValue2": 5.40
        },
        {
            "xValue": "Apr 1995",
            "yValue0": 6.95,
            "yValue1": 8.06,
            "yValue2": 5.80
        },
        {
            "xValue": "May 1995",
            "yValue0": 7.09,
            "yValue1": 8.04,
            "yValue2": 5.60
        },
        {
            "xValue": "Jun 1995",
            "yValue0": 6.97,
            "yValue1": 7.88,
            "yValue2": 5.60
        },
        {
            "xValue": "Jul 1995",
            "yValue0": 6.76,
            "yValue1": 7.96,
            "yValue2": 5.70
        },
        {
            "xValue": "Aug 1995",
            "yValue0": 6.78,
            "yValue1": 7.95,
            "yValue2": 5.70
        },
        {
            "xValue": "Sep 1995",
            "yValue0": 6.60,
            "yValue1": 7.91,
            "yValue2": 5.60
        },
        {
            "xValue": "Oct 1995",
            "yValue0": 6.53,
            "yValue1": 7.85,
            "yValue2": 5.50
        },
        {
            "xValue": "Nov 1995",
            "yValue0": 6.42,
            "yValue1": 7.86,
            "yValue2": 5.60
        },
        {
            "xValue": "Dec 1995",
            "yValue0": 6.27,
            "yValue1": 7.74,
            "yValue2": 5.60
        },
        {
            "xValue": "Jan 1996",
            "yValue0": 6.20,
            "yValue1": 7.78,
            "yValue2": 5.60
        },
        {
            "xValue": "Feb 1996",
            "yValue0": 5.96,
            "yValue1": 7.65,
            "yValue2": 5.50
        },
        {
            "xValue": "Mar 1996",
            "yValue0": 5.89,
            "yValue1": 7.63,
            "yValue2": 5.50
        },
        {
            "xValue": "Apr 1996",
            "yValue0": 5.88,
            "yValue1": 7.56,
            "yValue2": 5.60
        },
        {
            "xValue": "May 1996",
            "yValue0": 5.89,
            "yValue1": 7.55,
            "yValue2": 5.60
        },
        {
            "xValue": "Jun 1996",
            "yValue0": 5.68,
            "yValue1": 7.19,
            "yValue2": 5.30
        },
        {
            "xValue": "Jul 1996",
            "yValue0": 5.74,
            "yValue1": 7.27,
            "yValue2": 5.50
        },
        {
            "xValue": "Aug 1996",
            "yValue0": 5.64,
            "yValue1": 6.93,
            "yValue2": 5.10
        },
        {
            "xValue": "Sep 1996",
            "yValue0": 5.68,
            "yValue1": 6.87,
            "yValue2": 5.20
        },
        {
            "xValue": "Oct 1996",
            "yValue0": 5.70,
            "yValue1": 6.89,
            "yValue2": 5.20
        },
        {
            "xValue": "Nov 1996",
            "yValue0": 5.80,
            "yValue1": 7.06,
            "yValue2": 5.40
        },
        {
            "xValue": "Dec 1996",
            "yValue0": 5.47,
            "yValue1": 6.90,
            "yValue2": 5.40
        },
        {
            "xValue": "Jan 1997",
            "yValue0": 5.58,
            "yValue1": 6.86,
            "yValue2": 5.30
        },
        {
            "xValue": "Feb 1997",
            "yValue0": 5.48,
            "yValue1": 6.80,
            "yValue2": 5.20
        },
        {
            "xValue": "Mar 1997",
            "yValue0": 5.32,
            "yValue1": 6.64,
            "yValue2": 5.20
        },
        {
            "xValue": "Apr 1997",
            "yValue0": 5.14,
            "yValue1": 6.46,
            "yValue2": 5.10
        },
        {
            "xValue": "May 1997",
            "yValue0": 4.86,
            "yValue1": 6.32,
            "yValue2": 4.90
        },
        {
            "xValue": "Jun 1997",
            "yValue0": 4.81,
            "yValue1": 6.38,
            "yValue2": 5.00
        },
        {
            "xValue": "Jul 1997",
            "yValue0": 4.90,
            "yValue1": 6.20,
            "yValue2": 4.90
        },
        {
            "xValue": "Aug 1997",
            "yValue0": 4.79,
            "yValue1": 6.21,
            "yValue2": 4.80
        },
        {
            "xValue": "Sep 1997",
            "yValue0": 4.75,
            "yValue1": 6.26,
            "yValue2": 4.90
        },
        {
            "xValue": "Oct 1997",
            "yValue0": 4.97,
            "yValue1": 6.05,
            "yValue2": 4.70
        },
        {
            "xValue": "Nov 1997",
            "yValue0": 4.90,
            "yValue1": 5.93,
            "yValue2": 4.60
        },
        {
            "xValue": "Dec 1997",
            "yValue0": 4.89,
            "yValue1": 6.16,
            "yValue2": 4.70
        },
        {
            "xValue": "Jan 1998",
            "yValue0": 4.68,
            "yValue1": 6.04,
            "yValue2": 4.60
        },
        {
            "xValue": "Feb 1998",
            "yValue0": 4.69,
            "yValue1": 5.95,
            "yValue2": 4.60
        },
        {
            "xValue": "Mar 1998",
            "yValue0": 4.86,
            "yValue1": 6.14,
            "yValue2": 4.70
        },
        {
            "xValue": "Apr 1998",
            "yValue0": 4.40,
            "yValue1": 5.77,
            "yValue2": 4.30
        },
        {
            "xValue": "May 1998",
            "yValue0": 4.30,
            "yValue1": 5.93,
            "yValue2": 4.40
        },
        {
            "xValue": "Jun 1998",
            "yValue0": 4.34,
            "yValue1": 5.96,
            "yValue2": 4.50
        },
        {
            "xValue": "Jul 1998",
            "yValue0": 4.14,
            "yValue1": 5.92,
            "yValue2": 4.50
        },
        {
            "xValue": "Aug 1998",
            "yValue0": 4.33,
            "yValue1": 5.99,
            "yValue2": 4.50
        },
        {
            "xValue": "Sep 1998",
            "yValue0": 4.46,
            "yValue1": 5.97,
            "yValue2": 4.60
        },
        {
            "xValue": "Oct 1998",
            "yValue0": 4.23,
            "yValue1": 6.05,
            "yValue2": 4.50
        },
        {
            "xValue": "Nov 1998",
            "yValue0": 4.21,
            "yValue1": 5.82,
            "yValue2": 4.40
        },
        {
            "xValue": "Dec 1998",
            "yValue0": 4.40,
            "yValue1": 5.73,
            "yValue2": 4.40
        },
        {
            "xValue": "Jan 1999",
            "yValue0": 4.30,
            "yValue1": 5.60,
            "yValue2": 4.30
        },
        {
            "xValue": "Feb 1999",
            "yValue0": 4.28,
            "yValue1": 5.57,
            "yValue2": 4.40
        },
        {
            "xValue": "Mar 1999",
            "yValue0": 4.16,
            "yValue1": 5.37,
            "yValue2": 4.20
        },
        {
            "xValue": "Apr 1999",
            "yValue0": 4.19,
            "yValue1": 5.37,
            "yValue2": 4.30
        },
        {
            "xValue": "May 1999",
            "yValue0": 3.94,
            "yValue1": 5.09,
            "yValue2": 4.20
        },
        {
            "xValue": "Jun 1999",
            "yValue0": 3.85,
            "yValue1": 5.24,
            "yValue2": 4.30
        },
        {
            "xValue": "Jul 1999",
            "yValue0": 3.69,
            "yValue1": 5.26,
            "yValue2": 4.30
        },
        {
            "xValue": "Aug 1999",
            "yValue0": 3.65,
            "yValue1": 5.04,
            "yValue2": 4.20
        },
        {
            "xValue": "Sep 1999",
            "yValue0": 3.94,
            "yValue1": 5.18,
            "yValue2": 4.20
        },
        {
            "xValue": "Oct 1999",
            "yValue0": 3.69,
            "yValue1": 5.10,
            "yValue2": 4.10
        },
        {
            "xValue": "Nov 1999",
            "yValue0": 3.53,
            "yValue1": 4.99,
            "yValue2": 4.10
        },
        {
            "xValue": "Dec 1999",
            "yValue0": 3.82,
            "yValue1": 4.98,
            "yValue2": 4.00
        },
        {
            "xValue": "Jan 2000",
            "yValue0": 4.20,
            "yValue1": 4.96,
            "yValue2": 4.00
        },
        {
            "xValue": "Feb 2000",
            "yValue0": 4.33,
            "yValue1": 5.11,
            "yValue2": 4.10
        },
        {
            "xValue": "Mar 2000",
            "yValue0": 4.43,
            "yValue1": 5.09,
            "yValue2": 4.00
        },
        {
            "xValue": "Apr 2000",
            "yValue0": 4.30,
            "yValue1": 4.86,
            "yValue2": 3.80
        },
        {
            "xValue": "May 2000",
            "yValue0": 4.66,
            "yValue1": 5.21,
            "yValue2": 4.00
        },
        {
            "xValue": "Jun 2000",
            "yValue0": 4.56,
            "yValue1": 5.02,
            "yValue2": 4.00
        },
        {
            "xValue": "Jul 2000",
            "yValue0": 4.74,
            "yValue1": 5.09,
            "yValue2": 4.00
        },
        {
            "xValue": "Aug 2000",
            "yValue0": 4.56,
            "yValue1": 5.01,
            "yValue2": 4.10
        },
        {
            "xValue": "Sep 2000",
            "yValue0": 4.17,
            "yValue1": 4.79,
            "yValue2": 3.90
        },
        {
            "xValue": "Oct 2000",
            "yValue0": 4.21,
            "yValue1": 4.69,
            "yValue2": 3.90
        },
        {
            "xValue": "Nov 2000",
            "yValue0": 4.27,
            "yValue1": 4.76,
            "yValue2": 3.90
        },
        {
            "xValue": "Dec 2000",
            "yValue0": 4.10,
            "yValue1": 4.65,
            "yValue2": 3.90
        },
        {
            "xValue": "Jan 2001",
            "yValue0": 4.18,
            "yValue1": 4.88,
            "yValue2": 4.20
        },
        {
            "xValue": "Feb 2001",
            "yValue0": 4.13,
            "yValue1": 4.84,
            "yValue2": 4.20
        },
        {
            "xValue": "Mar 2001",
            "yValue0": 4.46,
            "yValue1": 5.00,
            "yValue2": 4.30
        },
        {
            "xValue": "Apr 2001",
            "yValue0": 4.33,
            "yValue1": 4.96,
            "yValue2": 4.40
        },
        {
            "xValue": "May 2001",
            "yValue0": 4.13,
            "yValue1": 4.98,
            "yValue2": 4.30
        },
        {
            "xValue": "Jun 2001",
            "yValue0": 4.26,
            "yValue1": 5.20,
            "yValue2": 4.50
        },
        {
            "xValue": "Jul 2001",
            "yValue0": 4.26,
            "yValue1": 5.29,
            "yValue2": 4.60
        },
        {
            "xValue": "Aug 2001",
            "yValue0": 4.53,
            "yValue1": 5.70,
            "yValue2": 4.90
        },
        {
            "xValue": "Sep 2001",
            "yValue0": 4.40,
            "yValue1": 5.77,
            "yValue2": 5.00
        },
        {
            "xValue": "Oct 2001",
            "yValue0": 4.59,
            "yValue1": 6.05,
            "yValue2": 5.30
        },
        {
            "xValue": "Nov 2001",
            "yValue0": 4.64,
            "yValue1": 6.23,
            "yValue2": 5.50
        },
        {
            "xValue": "Dec 2001",
            "yValue0": 4.85,
            "yValue1": 6.43,
            "yValue2": 5.70
        },
        {
            "xValue": "Jan 2002",
            "yValue0": 4.76,
            "yValue1": 6.46,
            "yValue2": 5.70
        },
        {
            "xValue": "Feb 2002",
            "yValue0": 4.80,
            "yValue1": 6.47,
            "yValue2": 5.70
        },
        {
            "xValue": "Mar 2002",
            "yValue0": 4.95,
            "yValue1": 6.52,
            "yValue2": 5.70
        },
        {
            "xValue": "Apr 2002",
            "yValue0": 5.22,
            "yValue1": 6.69,
            "yValue2": 5.90
        },
        {
            "xValue": "May 2002",
            "yValue0": 5.07,
            "yValue1": 6.70,
            "yValue2": 5.80
        },
        {
            "xValue": "Jun 2002",
            "yValue0": 5.15,
            "yValue1": 6.67,
            "yValue2": 5.80
        },
        {
            "xValue": "Jul 2002",
            "yValue0": 5.15,
            "yValue1": 6.65,
            "yValue2": 5.80
        },
        {
            "xValue": "Aug 2002",
            "yValue0": 5.26,
            "yValue1": 6.71,
            "yValue2": 5.70
        },
        {
            "xValue": "Sep 2002",
            "yValue0": 5.27,
            "yValue1": 6.63,
            "yValue2": 5.70
        },
        {
            "xValue": "Oct 2002",
            "yValue0": 5.26,
            "yValue1": 6.68,
            "yValue2": 5.70
        },
        {
            "xValue": "Nov 2002",
            "yValue0": 5.30,
            "yValue1": 6.80,
            "yValue2": 5.90
        },
        {
            "xValue": "Dec 2002",
            "yValue0": 5.32,
            "yValue1": 7.03,
            "yValue2": 6.00
        },
        {
            "xValue": "Jan 2003",
            "yValue0": 5.00,
            "yValue1": 6.76,
            "yValue2": 5.80
        },
        {
            "xValue": "Feb 2003",
            "yValue0": 5.02,
            "yValue1": 6.76,
            "yValue2": 5.90
        },
        {
            "xValue": "Mar 2003",
            "yValue0": 4.91,
            "yValue1": 6.72,
            "yValue2": 5.90
        },
        {
            "xValue": "Apr 2003",
            "yValue0": 4.97,
            "yValue1": 6.81,
            "yValue2": 6.00
        },
        {
            "xValue": "May 2003",
            "yValue0": 5.16,
            "yValue1": 6.91,
            "yValue2": 6.10
        },
        {
            "xValue": "Jun 2003",
            "yValue0": 5.29,
            "yValue1": 7.14,
            "yValue2": 6.30
        },
        {
            "xValue": "Jul 2003",
            "yValue0": 5.08,
            "yValue1": 6.85,
            "yValue2": 6.20
        },
        {
            "xValue": "Aug 2003",
            "yValue0": 5.05,
            "yValue1": 6.83,
            "yValue2": 6.10
        },
        {
            "xValue": "Sep 2003",
            "yValue0": 4.93,
            "yValue1": 6.85,
            "yValue2": 6.10
        },
        {
            "xValue": "Oct 2003",
            "yValue0": 5.10,
            "yValue1": 6.78,
            "yValue2": 6.00
        },
        {
            "xValue": "Nov 2003",
            "yValue0": 4.96,
            "yValue1": 6.69,
            "yValue2": 5.80
        },
        {
            "xValue": "Dec 2003",
            "yValue0": 4.75,
            "yValue1": 6.47,
            "yValue2": 5.70
        },
        {
            "xValue": "Jan 2004",
            "yValue0": 4.78,
            "yValue1": 6.51,
            "yValue2": 5.70
        },
        {
            "xValue": "Feb 2004",
            "yValue0": 4.76,
            "yValue1": 6.36,
            "yValue2": 5.60
        },
        {
            "xValue": "Mar 2004",
            "yValue0": 4.97,
            "yValue1": 6.65,
            "yValue2": 5.80
        },
        {
            "xValue": "Apr 2004",
            "yValue0": 4.80,
            "yValue1": 6.42,
            "yValue2": 5.60
        },
        {
            "xValue": "May 2004",
            "yValue0": 4.90,
            "yValue1": 6.37,
            "yValue2": 5.60
        },
        {
            "xValue": "Jun 2004",
            "yValue0": 4.81,
            "yValue1": 6.34,
            "yValue2": 5.60
        },
        {
            "xValue": "Jul 2004",
            "yValue0": 4.71,
            "yValue1": 6.15,
            "yValue2": 5.50
        },
        {
            "xValue": "Aug 2004",
            "yValue0": 4.53,
            "yValue1": 5.95,
            "yValue2": 5.40
        },
        {
            "xValue": "Sep 2004",
            "yValue0": 4.58,
            "yValue1": 5.88,
            "yValue2": 5.40
        },
        {
            "xValue": "Oct 2004",
            "yValue0": 4.66,
            "yValue1": 5.94,
            "yValue2": 5.50
        },
        {
            "xValue": "Nov 2004",
            "yValue0": 4.63,
            "yValue1": 5.90,
            "yValue2": 5.40
        },
        {
            "xValue": "Dec 2004",
            "yValue0": 4.66,
            "yValue1": 5.93,
            "yValue2": 5.40
        },
        {
            "xValue": "Jan 2005",
            "yValue0": 4.69,
            "yValue1": 5.79,
            "yValue2": 5.30
        },
        {
            "xValue": "Feb 2005",
            "yValue0": 4.67,
            "yValue1": 5.78,
            "yValue2": 5.40
        },
        {
            "xValue": "Mar 2005",
            "yValue0": 4.47,
            "yValue1": 5.62,
            "yValue2": 5.20
        },
        {
            "xValue": "Apr 2005",
            "yValue0": 4.28,
            "yValue1": 5.41,
            "yValue2": 5.20
        },
        {
            "xValue": "May 2005",
            "yValue0": 4.27,
            "yValue1": 5.39,
            "yValue2": 5.10
        },
        {
            "xValue": "Jun 2005",
            "yValue0": 4.26,
            "yValue1": 5.35,
            "yValue2": 5.00
        },
        {
            "xValue": "Jul 2005",
            "yValue0": 4.25,
            "yValue1": 5.26,
            "yValue2": 5.00
        },
        {
            "xValue": "Aug 2005",
            "yValue0": 4.11,
            "yValue1": 5.14,
            "yValue2": 4.90
        },
        {
            "xValue": "Sep 2005",
            "yValue0": 4.35,
            "yValue1": 5.34,
            "yValue2": 5.00
        },
        {
            "xValue": "Oct 2005",
            "yValue0": 4.26,
            "yValue1": 5.21,
            "yValue2": 5.00
        },
        {
            "xValue": "Nov 2005",
            "yValue0": 4.40,
            "yValue1": 5.33,
            "yValue2": 5.00
        },
        {
            "xValue": "Dec 2005",
            "yValue0": 4.11,
            "yValue1": 5.08,
            "yValue2": 4.90
        },
        {
            "xValue": "Jan 2006",
            "yValue0": 3.99,
            "yValue1": 4.96,
            "yValue2": 4.70
        },
        {
            "xValue": "Feb 2006",
            "yValue0": 4.03,
            "yValue1": 5.01,
            "yValue2": 4.80
        },
        {
            "xValue": "Mar 2006",
            "yValue0": 4.04,
            "yValue1": 4.97,
            "yValue2": 4.70
        },
        {
            "xValue": "Apr 2006",
            "yValue0": 4.29,
            "yValue1": 5.02,
            "yValue2": 4.70
        },
        {
            "xValue": "May 2006",
            "yValue0": 3.99,
            "yValue1": 4.84,
            "yValue2": 4.60
        },
        {
            "xValue": "Jun 2006",
            "yValue0": 4.03,
            "yValue1": 4.86,
            "yValue2": 4.60
        },
        {
            "xValue": "Jul 2006",
            "yValue0": 4.12,
            "yValue1": 4.96,
            "yValue2": 4.70
        },
        {
            "xValue": "Aug 2006",
            "yValue0": 4.10,
            "yValue1": 4.93,
            "yValue2": 4.70
        },
        {
            "xValue": "Sep 2006",
            "yValue0": 4.01,
            "yValue1": 4.80,
            "yValue2": 4.50
        },
        {
            "xValue": "Oct 2006",
            "yValue0": 3.85,
            "yValue1": 4.69,
            "yValue2": 4.40
        },
        {
            "xValue": "Nov 2006",
            "yValue0": 3.98,
            "yValue1": 4.86,
            "yValue2": 4.50
        },
        {
            "xValue": "Dec 2006",
            "yValue0": 4.03,
            "yValue1": 4.85,
            "yValue2": 4.40
        },
        {
            "xValue": "Jan 2007",
            "yValue0": 4.24,
            "yValue1": 5.16,
            "yValue2": 4.60
        },
        {
            "xValue": "Feb 2007",
            "yValue0": 4.30,
            "yValue1": 5.12,
            "yValue2": 4.50
        },
        {
            "xValue": "Mar 2007",
            "yValue0": 4.16,
            "yValue1": 4.98,
            "yValue2": 4.40
        },
        {
            "xValue": "Apr 2007",
            "yValue0": 4.26,
            "yValue1": 5.13,
            "yValue2": 4.50
        },
        {
            "xValue": "May 2007",
            "yValue0": 4.18,
            "yValue1": 5.13,
            "yValue2": 4.40
        },
        {
            "xValue": "Jun 2007",
            "yValue0": 4.34,
            "yValue1": 5.27,
            "yValue2": 4.60
        },
        {
            "xValue": "Jul 2007",
            "yValue0": 4.40,
            "yValue1": 5.45,
            "yValue2": 4.70
        },
        {
            "xValue": "Aug 2007",
            "yValue0": 4.38,
            "yValue1": 5.40,
            "yValue2": 4.60
        },
        {
            "xValue": "Sep 2007",
            "yValue0": 4.42,
            "yValue1": 5.51,
            "yValue2": 4.70
        },
        {
            "xValue": "Oct 2007",
            "yValue0": 4.50,
            "yValue1": 5.61,
            "yValue2": 4.70
        },
        {
            "xValue": "Nov 2007",
            "yValue0": 4.54,
            "yValue1": 5.71,
            "yValue2": 4.70
        },
        {
            "xValue": "Dec 2007",
            "yValue0": 4.70,
            "yValue1": 6.06,
            "yValue2": 5.00
        },
        {
            "xValue": "Jan 2008",
            "yValue0": 4.67,
            "yValue1": 6.03,
            "yValue2": 5.00
        },
        {
            "xValue": "Feb 2008",
            "yValue0": 4.68,
            "yValue1": 5.99,
            "yValue2": 4.90
        },
        {
            "xValue": "Mar 2008",
            "yValue0": 4.83,
            "yValue1": 6.34,
            "yValue2": 5.10
        },
        {
            "xValue": "Apr 2008",
            "yValue0": 4.76,
            "yValue1": 6.27,
            "yValue2": 5.00
        },
        {
            "xValue": "May 2008",
            "yValue0": 5.16,
            "yValue1": 6.79,
            "yValue2": 5.40
        },
        {
            "xValue": "Jun 2008",
            "yValue0": 5.27,
            "yValue1": 6.97,
            "yValue2": 5.60
        },
        {
            "xValue": "Jul 2008",
            "yValue0": 5.51,
            "yValue1": 7.28,
            "yValue2": 5.80
        },
        {
            "xValue": "Aug 2008",
            "yValue0": 5.82,
            "yValue1": 7.78,
            "yValue2": 6.10
        },
        {
            "xValue": "Sep 2008",
            "yValue0": 5.88,
            "yValue1": 7.97,
            "yValue2": 6.10
        },
        {
            "xValue": "Oct 2008",
            "yValue0": 6.06,
            "yValue1": 8.28,
            "yValue2": 6.50
        },
        {
            "xValue": "Nov 2008",
            "yValue0": 6.42,
            "yValue1": 8.60,
            "yValue2": 6.80
        },
        {
            "xValue": "Dec 2008",
            "yValue0": 6.73,
            "yValue1": 9.19,
            "yValue2": 7.30
        },
        {
            "xValue": "Jan 2009",
            "yValue0": 7.01,
            "yValue1": 9.64,
            "yValue2": 7.80
        },
        {
            "xValue": "Feb 2009",
            "yValue0": 7.44,
            "yValue1": 10.14,
            "yValue2": 8.30
        },
        {
            "xValue": "Mar 2009",
            "yValue0": 7.65,
            "yValue1": 10.52,
            "yValue2": 8.70
        },
        {
            "xValue": "Apr 2009",
            "yValue0": 7.95,
            "yValue1": 10.71,
            "yValue2": 9.00
        },
        {
            "xValue": "May 2009",
            "yValue0": 8.28,
            "yValue1": 11.17,
            "yValue2": 9.40
        },
        {
            "xValue": "Jun 2009",
            "yValue0": 8.36,
            "yValue1": 11.25,
            "yValue2": 9.50
        },
        {
            "xValue": "Jul 2009",
            "yValue0": 8.32,
            "yValue1": 11.25,
            "yValue2": 9.50
        },
        {
            "xValue": "Aug 2009",
            "yValue0": 8.49,
            "yValue1": 11.41,
            "yValue2": 9.60
        },
        {
            "xValue": "Sep 2009",
            "yValue0": 8.82,
            "yValue1": 11.78,
            "yValue2": 9.80
        },
        {
            "xValue": "Oct 2009",
            "yValue0": 8.97,
            "yValue1": 11.95,
            "yValue2": 10.00
        },
        {
            "xValue": "Nov 2009",
            "yValue0": 8.91,
            "yValue1": 12.01,
            "yValue2": 9.90
        },
        {
            "xValue": "Dec 2009",
            "yValue0": 9.04,
            "yValue1": 12.00,
            "yValue2": 9.90
        },
        {
            "xValue": "Jan 2010",
            "yValue0": 9.36,
            "yValue1": 12.04,
            "yValue2": 9.80
        },
        {
            "xValue": "Feb 2010",
            "yValue0": 9.49,
            "yValue1": 12.11,
            "yValue2": 9.80
        },
        {
            "xValue": "Mar 2010",
            "yValue0": 9.84,
            "yValue1": 12.24,
            "yValue2": 9.90
        },
        {
            "xValue": "Apr 2010",
            "yValue0": 9.75,
            "yValue1": 12.41,
            "yValue2": 9.90
        },
        {
            "xValue": "May 2010",
            "yValue0": 9.69,
            "yValue1": 12.27,
            "yValue2": 9.60
        },
        {
            "xValue": "Jun 2010",
            "yValue0": 9.47,
            "yValue1": 11.91,
            "yValue2": 9.40
        },
        {
            "xValue": "Jul 2010",
            "yValue0": 9.62,
            "yValue1": 12.12,
            "yValue2": 9.40
        },
        {
            "xValue": "Aug 2010",
            "yValue0": 9.71,
            "yValue1": 12.17,
            "yValue2": 9.50
        },
        {
            "xValue": "Sep 2010",
            "yValue0": 9.88,
            "yValue1": 12.26,
            "yValue2": 9.50
        },
        {
            "xValue": "Oct 2010",
            "yValue0": 9.74,
            "yValue1": 12.18,
            "yValue2": 9.40
        },
        {
            "xValue": "Nov 2010",
            "yValue0": 10.15,
            "yValue1": 12.63,
            "yValue2": 9.80
        },
        {
            "xValue": "Dec 2010",
            "yValue0": 9.82,
            "yValue1": 12.28,
            "yValue2": 9.30
        },
        {
            "xValue": "Jan 2011",
            "yValue0": 9.30,
            "yValue1": 12.00,
            "yValue2": 9.10
        },
        {
            "xValue": "Feb 2011",
            "yValue0": 9.43,
            "yValue1": 11.77,
            "yValue2": 9.00
        },
        {
            "xValue": "Mar 2011",
            "yValue0": 9.50,
            "yValue1": 11.81,
            "yValue2": 9.00
        },
        {
            "xValue": "Apr 2011",
            "yValue0": 9.66,
            "yValue1": 11.95,
            "yValue2": 9.10
        },
        {
            "xValue": "May 2011",
            "yValue0": 9.55,
            "yValue1": 11.85,
            "yValue2": 9.00
        },
        {
            "xValue": "Jun 2011",
            "yValue0": 9.57,
            "yValue1": 11.89,
            "yValue2": 9.10
        },
        {
            "xValue": "Jul 2011",
            "yValue0": 9.39,
            "yValue1": 11.69,
            "yValue2": 9.00
        },
        {
            "xValue": "Aug 2011",
            "yValue0": 9.36,
            "yValue1": 11.73,
            "yValue2": 9.00
        },
        {
            "xValue": "Sep 2011",
            "yValue0": 9.50,
            "yValue1": 11.84,
            "yValue2": 9.00
        },
        {
            "xValue": "Oct 2011",
            "yValue0": 9.41,
            "yValue1": 11.53,
            "yValue2": 8.80
        },
        {
            "xValue": "Nov 2011",
            "yValue0": 9.11,
            "yValue1": 11.28,
            "yValue2": 8.60
        },
        {
            "xValue": "Dec 2011",
            "yValue0": 8.95,
            "yValue1": 11.17,
            "yValue2": 8.50
        },
        {
            "xValue": "Jan 2012",
            "yValue0": 8.43,
            "yValue1": 10.87,
            "yValue2": 8.30
        },
        {
            "xValue": "Feb 2012",
            "yValue0": 8.67,
            "yValue1": 10.92,
            "yValue2": 8.30
        },
        {
            "xValue": "Mar 2012",
            "yValue0": 8.69,
            "yValue1": 10.79,
            "yValue2": 8.20
        },
        {
            "xValue": "Apr 2012",
            "yValue0": 8.85,
            "yValue1": 10.75,
            "yValue2": 8.20
        },
        {
            "xValue": "May 2012",
            "yValue0": 8.79,
            "yValue1": 10.72,
            "yValue2": 8.20
        },
        {
            "xValue": "Jun 2012",
            "yValue0": 8.64,
            "yValue1": 10.49,
            "yValue2": 8.20
        },
        {
            "xValue": "Jul 2012",
            "yValue0": 8.44,
            "yValue1": 10.38,
            "yValue2": 8.20
        },
        {
            "xValue": "Aug 2012",
            "yValue0": 8.32,
            "yValue1": 10.22,
            "yValue2": 8.10
        },
        {
            "xValue": "Sep 2012",
            "yValue0": 7.98,
            "yValue1": 9.88,
            "yValue2": 7.80
        },
        {
            "xValue": "Oct 2012",
            "yValue0": 7.96,
            "yValue1": 9.88,
            "yValue2": 7.80
        },
        {
            "xValue": "Nov 2012",
            "yValue0": 7.88,
            "yValue1": 9.72,
            "yValue2": 7.70
        },
        {
            "xValue": "Dec 2012",
            "yValue0": 7.86,
            "yValue1": 9.78,
            "yValue2": 7.90
        },
        {
            "xValue": "Jan 2013",
            "yValue0": 7.71,
            "yValue1": 9.73,
            "yValue2": 8.00
        },
        {
            "xValue": "Feb 2013",
            "yValue0": 7.52,
            "yValue1": 9.39,
            "yValue2": 7.70
        },
        {
            "xValue": "Mar 2013",
            "yValue0": 7.36,
            "yValue1": 9.13,
            "yValue2": 7.50
        },
        {
            "xValue": "Apr 2013",
            "yValue0": 7.27,
            "yValue1": 9.13,
            "yValue2": 7.60
        },
        {
            "xValue": "May 2013",
            "yValue0": 7.26,
            "yValue1": 9.09,
            "yValue2": 7.50
        },
        {
            "xValue": "Jun 2013",
            "yValue0": 7.42,
            "yValue1": 9.09,
            "yValue2": 7.50
        },
        {
            "xValue": "Jul 2013",
            "yValue0": 7.33,
            "yValue1": 8.89,
            "yValue2": 7.30
        },
        {
            "xValue": "Aug 2013",
            "yValue0": 7.18,
            "yValue1": 8.71,
            "yValue2": 7.20
        },
        {
            "xValue": "Sep 2013",
            "yValue0": 7.11,
            "yValue1": 8.76,
            "yValue2": 7.20
        },
        {
            "xValue": "Oct 2013",
            "yValue0": 7.07,
            "yValue1": 8.66,
            "yValue2": 7.20
        },
        {
            "xValue": "Nov 2013",
            "yValue0": 6.88,
            "yValue1": 8.39,
            "yValue2": 6.90
        },
        {
            "xValue": "Dec 2013",
            "yValue0": 6.49,
            "yValue1": 8.18,
            "yValue2": 6.70
        },
        {
            "xValue": "Jan 2014",
            "yValue0": 6.35,
            "yValue1": 7.98,
            "yValue2": 6.60
        },
        {
            "xValue": "Feb 2014",
            "yValue0": 6.53,
            "yValue1": 8.12,
            "yValue2": 6.70
        },
        {
            "xValue": "Mar 2014",
            "yValue0": 6.38,
            "yValue1": 8.05,
            "yValue2": 6.70
        },
        {
            "xValue": "Apr 2014",
            "yValue0": 6.00,
            "yValue1": 7.69,
            "yValue2": 6.20
        },
        {
            "xValue": "May 2014",
            "yValue0": 6.18,
            "yValue1": 7.67,
            "yValue2": 6.30
        },
        {
            "xValue": "Jun 2014",
            "yValue0": 5.98,
            "yValue1": 7.39,
            "yValue2": 6.10
        },
        {
            "xValue": "Jul 2014",
            "yValue0": 6.13,
            "yValue1": 7.52,
            "yValue2": 6.20
        },
        {
            "xValue": "Aug 2014",
            "yValue0": 6.17,
            "yValue1": 7.40,
            "yValue2": 6.10
        },
        {
            "xValue": "Sep 2014",
            "yValue0": 6.12,
            "yValue1": 7.22,
            "yValue2": 5.90
        },
        {
            "xValue": "Oct 2014",
            "yValue0": 5.89,
            "yValue1": 7.06,
            "yValue2": 5.70
        },
        {
            "xValue": "Nov 2014",
            "yValue0": 6.10,
            "yValue1": 7.08,
            "yValue2": 5.80
        },
        {
            "xValue": "Dec 2014",
            "yValue0": 5.71,
            "yValue1": 6.79,
            "yValue2": 5.60
        },
        {
            "xValue": "Jan 2015",
            "yValue0": 5.59,
            "yValue1": 6.84,
            "yValue2": 5.70
        },
        {
            "xValue": "Feb 2015",
            "yValue0": 5.46,
            "yValue1": 6.56,
            "yValue2": 5.50
        },
        {
            "xValue": "Mar 2015",
            "yValue0": 5.19,
            "yValue1": 6.45,
            "yValue2": 5.40
        },
        {
            "xValue": "Apr 2015",
            "yValue0": 5.35,
            "yValue1": 6.43,
            "yValue2": 5.40
        },
        {
            "xValue": "May 2015",
            "yValue0": 5.44,
            "yValue1": 6.56,
            "yValue2": 5.60
        },
        {
            "xValue": "Jun 2015",
            "yValue0": 5.14,
            "yValue1": 6.16,
            "yValue2": 5.30
        },
        {
            "xValue": "Jul 2015",
            "yValue0": 5.13,
            "yValue1": 6.06,
            "yValue2": 5.20
        },
        {
            "xValue": "Aug 2015",
            "yValue0": 5.05,
            "yValue1": 5.89,
            "yValue2": 5.10
        },
        {
            "xValue": "Sep 2015",
            "yValue0": 4.99,
            "yValue1": 5.90,
            "yValue2": 5.00
        },
        {
            "xValue": "Oct 2015",
            "yValue0": 5.27,
            "yValue1": 5.88,
            "yValue2": 5.00
        },
        {
            "xValue": "Nov 2015",
            "yValue0": 5.57,
            "yValue1": 5.91,
            "yValue2": 5.10
        },
        {
            "xValue": "Dec 2015",
            "yValue0": 5.36,
            "yValue1": 5.82,
            "yValue2": 5.00
        },
        {
            "xValue": "Jan 2016",
            "yValue0": 5.09,
            "yValue1": 5.60,
            "yValue2": 4.90
        },
        {
            "xValue": "Feb 2016",
            "yValue0": 5.04,
            "yValue1": 5.60,
            "yValue2": 4.90
        },
        {
            "xValue": "Mar 2016",
            "yValue0": 5.09,
            "yValue1": 5.64,
            "yValue2": 5.00
        },
        {
            "xValue": "Apr 2016",
            "yValue0": 5.10,
            "yValue1": 5.56,
            "yValue2": 5.00
        },
        {
            "xValue": "May 2016",
            "yValue0": 4.89,
            "yValue1": 5.40,
            "yValue2": 4.80
        },
        {
            "xValue": "Jun 2016",
            "yValue0": 4.99,
            "yValue1": 5.39,
            "yValue2": 4.90
        },
        {
            "xValue": "Jul 2016",
            "yValue0": 4.90,
            "yValue1": 5.33,
            "yValue2": 4.80
        },
        {
            "xValue": "Aug 2016",
            "yValue0": 4.94,
            "yValue1": 5.33,
            "yValue2": 4.90
        },
        {
            "xValue": "Sep 2016",
            "yValue0": 5.19,
            "yValue1": 5.52,
            "yValue2": 5.00
        },
        {
            "xValue": "Oct 2016",
            "yValue0": 5.18,
            "yValue1": 5.54,
            "yValue2": 4.90
        },
        {
            "xValue": "Nov 2016",
            "yValue0": 5.19,
            "yValue1": 5.39,
            "yValue2": 4.70
        },
        {
            "xValue": "Dec 2016",
            "yValue0": 5.47,
            "yValue1": 5.42,
            "yValue2": 4.70
        },
        {
            "xValue": "Jan 2017",
            "yValue0": 5.15,
            "yValue1": 5.38,
            "yValue2": 4.70
        },
        {
            "xValue": "Feb 2017",
            "yValue0": 5.10,
            "yValue1": 5.25,
            "yValue2": 4.60
        },
        {
            "xValue": "Mar 2017",
            "yValue0": 4.71,
            "yValue1": 4.92,
            "yValue2": 4.40
        },
        {
            "xValue": "Apr 2017",
            "yValue0": 4.46,
            "yValue1": 4.87,
            "yValue2": 4.40
        },
        {
            "xValue": "May 2017",
            "yValue0": 4.39,
            "yValue1": 4.71,
            "yValue2": 4.40
        },
        {
            "xValue": "Jun 2017",
            "yValue0": 4.26,
            "yValue1": 4.57,
            "yValue2": 4.30
        },
        {
            "xValue": "Jul 2017",
            "yValue0": 4.35,
            "yValue1": 4.59,
            "yValue2": 4.30
        },
        {
            "xValue": "Aug 2017",
            "yValue0": 4.41,
            "yValue1": 4.70,
            "yValue2": 4.40
        },
        {
            "xValue": "Sep 2017",
            "yValue0": 4.35,
            "yValue1": 4.61,
            "yValue2": 4.20
        },
        {
            "xValue": "Oct 2017",
            "yValue0": 4.33,
            "yValue1": 4.58,
            "yValue2": 4.10
        },
        {
            "xValue": "Nov 2017",
            "yValue0": 4.50,
            "yValue1": 4.70,
            "yValue2": 4.20
        },
        {
            "xValue": "Dec 2017",
            "yValue0": 4.45,
            "yValue1": 4.73,
            "yValue2": 4.10
        },
        {
            "xValue": "Jan 2018",
            "yValue0": 4.42,
            "yValue1": 4.60,
            "yValue2": 4.10
        },
        {
            "xValue": "Feb 2018",
            "yValue0": 4.24,
            "yValue1": 4.53,
            "yValue2": 4.10
        },
        {
            "xValue": "Mar 2018",
            "yValue0": 4.09,
            "yValue1": 4.32,
            "yValue2": 4.00
        },
        {
            "xValue": "Apr 2018",
            "yValue0": 3.91,
            "yValue1": 4.06,
            "yValue2": 4.00
        },
        {
            "xValue": "May 2018",
            "yValue0": 3.49,
            "yValue1": 3.87,
            "yValue2": 3.80
        },
        {
            "xValue": "Jun 2018",
            "yValue0": 3.73,
            "yValue1": 3.94,
            "yValue2": 4.00
        },
        {
            "xValue": "Jul 2018",
            "yValue0": 3.70,
            "yValue1": 3.95,
            "yValue2": 3.80
        },
        {
            "xValue": "Aug 2018",
            "yValue0": 3.78,
            "yValue1": 4.09,
            "yValue2": 3.80
        },
        {
            "xValue": "Sep 2018",
            "yValue0": 3.83,
            "yValue1": 4.11,
            "yValue2": 3.70
        },
        {
            "xValue": "Oct 2018",
            "yValue0": 4.01,
            "yValue1": 4.37,
            "yValue2": 3.80
        },
        {
            "xValue": "Nov 2018",
            "yValue0": 4.12,
            "yValue1": 4.56,
            "yValue2": 3.70
        },
        {
            "xValue": "Dec 2018",
            "yValue0": 4.43,
            "yValue1": 4.81,
            "yValue2": 3.90
        },
        {
            "xValue": "Jan 2019",
            "yValue0": 4.49,
            "yValue1": 4.82,
            "yValue2": 4.00
        },
        {
            "xValue": "Feb 2019",
            "yValue0": 4.18,
            "yValue1": 4.49,
            "yValue2": 3.80
        },
        {
            "xValue": "Mar 2019",
            "yValue0": 4.03,
            "yValue1": 4.29,
            "yValue2": 3.80
        },
        {
            "xValue": "Apr 2019",
            "yValue0": 3.38,
            "yValue1": 3.76,
            "yValue2": 3.60
        },
        {
            "xValue": "May 2019",
            "yValue0": 3.16,
            "yValue1": 3.66,
            "yValue2": 3.60
        },
        {
            "xValue": "Jun 2019",
            "yValue0": 3.13,
            "yValue1": 3.53,
            "yValue2": 3.70
        },
        {
            "xValue": "Jul 2019",
            "yValue0": 3.35,
            "yValue1": 3.78,
            "yValue2": 3.70
        },
        {
            "xValue": "Aug 2019",
            "yValue0": 3.47,
            "yValue1": 3.89,
            "yValue2": 3.70
        },
        {
            "xValue": "Sep 2019",
            "yValue0": 3.51,
            "yValue1": 3.81,
            "yValue2": 3.50
        },
        {
            "xValue": "Oct 2019",
            "yValue0": 3.79,
            "yValue1": 4.15,
            "yValue2": 3.60
        },
        {
            "xValue": "Nov 2019",
            "yValue0": 3.94,
            "yValue1": 4.40,
            "yValue2": 3.50
        },
        {
            "xValue": "Dec 2019",
            "yValue0": 3.93,
            "yValue1": 4.37,
            "yValue2": 3.50
        },
        {
            "xValue": "Jan 2020",
            "yValue0": 4.04,
            "yValue1": 4.40,
            "yValue2": 3.60
        },
        {
            "xValue": "Feb 2020",
            "yValue0": 4.04,
            "yValue1": 4.35,
            "yValue2": 3.50
        },
        {
            "xValue": "Mar 2020",
            "yValue0": 4.83,
            "yValue1": 5.50,
            "yValue2": 4.40
        },
        {
            "xValue": "Apr 2020",
            "yValue0": 13.48,
            "yValue1": 15.68,
            "yValue2": 14.70
        },
        {
            "xValue": "May 2020",
            "yValue0": 13.63,
            "yValue1": 15.89,
            "yValue2": 13.30
        },
        {
            "xValue": "Jun 2020",
            "yValue0": 10.32,
            "yValue1": 12.64,
            "yValue2": 11.10
        },
        {
            "xValue": "Jul 2020",
            "yValue0": 9.45,
            "yValue1": 11.72,
            "yValue2": 10.20
        },
        {
            "xValue": "Aug 2020",
            "yValue0": 7.77,
            "yValue1": 10.44,
            "yValue2": 8.40
        },
        {
            "xValue": "Sep 2020",
            "yValue0": 8.63,
            "yValue1": 11.38,
            "yValue2": 7.90
        },
        {
            "xValue": "Oct 2020",
            "yValue0": 7.63,
            "yValue1": 9.96,
            "yValue2": 6.90
        },
        {
            "xValue": "Nov 2020",
            "yValue0": 7.39,
            "yValue1": 9.69,
            "yValue2": 6.70
        }
    ],
});