var chart = AmCharts.makeChart("sbc_uerate" , { 
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
        "text": "Unemployment Rate, Santa Barbara County",
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
        "balloonText": "Original Series: <b>[[value]]</b>", 
        "bullet": "none",
        "type": "line", 
        "lineThickness": 2,
        "title": "Original Series",
        "valueField": "yValue0"
    },
    {
        "id": "graph1",
        "balloonText": "Adjusted Series: <b>[[value]]</b>", 
        "bullet": "none",
        "type": "line", 
        "lineThickness": 2,
        "title": "Adjusted Series",
        "valueField": "yValue1"
    },
    {
        "id": "graph2",
        "balloonText": "Trend-Cycle Component: <b>[[value]]</b>", 
        "bullet": "none",
        "type": "line", 
        "lineThickness": 2,
        "title": "Trend-Cycle Component",
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
            "yValue0": 4.90,
            "yValue1": 4.22,
            "yValue2": 4.31
        },
        {
            "xValue": "Feb 1990",
            "yValue0": 5.10,
            "yValue1": 4.47,
            "yValue2": 4.43
        },
        {
            "xValue": "Mar 1990",
            "yValue0": 5.20,
            "yValue1": 4.60,
            "yValue2": 4.53
        },
        {
            "xValue": "Apr 1990",
            "yValue0": 4.70,
            "yValue1": 4.98,
            "yValue2": 4.63
        },
        {
            "xValue": "May 1990",
            "yValue0": 4.00,
            "yValue1": 4.64,
            "yValue2": 4.73
        },
        {
            "xValue": "Jun 1990",
            "yValue0": 4.30,
            "yValue1": 4.62,
            "yValue2": 4.82
        },
        {
            "xValue": "Jul 1990",
            "yValue0": 4.70,
            "yValue1": 4.99,
            "yValue2": 4.94
        },
        {
            "xValue": "Aug 1990",
            "yValue0": 4.70,
            "yValue1": 5.01,
            "yValue2": 5.08
        },
        {
            "xValue": "Sep 1990",
            "yValue0": 5.00,
            "yValue1": 5.20,
            "yValue2": 5.23
        },
        {
            "xValue": "Oct 1990",
            "yValue0": 4.80,
            "yValue1": 5.14,
            "yValue2": 5.39
        },
        {
            "xValue": "Nov 1990",
            "yValue0": 5.70,
            "yValue1": 5.62,
            "yValue2": 5.52
        },
        {
            "xValue": "Dec 1990",
            "yValue0": 5.90,
            "yValue1": 5.67,
            "yValue2": 5.62
        },
        {
            "xValue": "Jan 1991",
            "yValue0": 6.60,
            "yValue1": 5.68,
            "yValue2": 5.70
        },
        {
            "xValue": "Feb 1991",
            "yValue0": 6.50,
            "yValue1": 5.70,
            "yValue2": 5.74
        },
        {
            "xValue": "Mar 1991",
            "yValue0": 6.50,
            "yValue1": 5.76,
            "yValue2": 5.77
        },
        {
            "xValue": "Apr 1991",
            "yValue0": 5.50,
            "yValue1": 5.82,
            "yValue2": 5.79
        },
        {
            "xValue": "May 1991",
            "yValue0": 5.00,
            "yValue1": 5.80,
            "yValue2": 5.82
        },
        {
            "xValue": "Jun 1991",
            "yValue0": 5.50,
            "yValue1": 5.93,
            "yValue2": 5.86
        },
        {
            "xValue": "Jul 1991",
            "yValue0": 5.50,
            "yValue1": 5.84,
            "yValue2": 5.91
        },
        {
            "xValue": "Aug 1991",
            "yValue0": 5.20,
            "yValue1": 5.54,
            "yValue2": 5.97
        },
        {
            "xValue": "Sep 1991",
            "yValue0": 5.90,
            "yValue1": 6.13,
            "yValue2": 6.05
        },
        {
            "xValue": "Oct 1991",
            "yValue0": 5.70,
            "yValue1": 6.11,
            "yValue2": 6.15
        },
        {
            "xValue": "Nov 1991",
            "yValue0": 6.30,
            "yValue1": 6.21,
            "yValue2": 6.28
        },
        {
            "xValue": "Dec 1991",
            "yValue0": 6.70,
            "yValue1": 6.45,
            "yValue2": 6.43
        },
        {
            "xValue": "Jan 1992",
            "yValue0": 7.70,
            "yValue1": 6.58,
            "yValue2": 6.59
        },
        {
            "xValue": "Feb 1992",
            "yValue0": 8.30,
            "yValue1": 7.29,
            "yValue2": 6.75
        },
        {
            "xValue": "Mar 1992",
            "yValue0": 7.80,
            "yValue1": 6.92,
            "yValue2": 6.92
        },
        {
            "xValue": "Apr 1992",
            "yValue0": 6.50,
            "yValue1": 6.88,
            "yValue2": 7.09
        },
        {
            "xValue": "May 1992",
            "yValue0": 6.30,
            "yValue1": 7.30,
            "yValue2": 7.25
        },
        {
            "xValue": "Jun 1992",
            "yValue0": 6.80,
            "yValue1": 7.36,
            "yValue2": 7.42
        },
        {
            "xValue": "Jul 1992",
            "yValue0": 7.10,
            "yValue1": 7.54,
            "yValue2": 7.57
        },
        {
            "xValue": "Aug 1992",
            "yValue0": 7.50,
            "yValue1": 7.97,
            "yValue2": 7.70
        },
        {
            "xValue": "Sep 1992",
            "yValue0": 7.50,
            "yValue1": 7.79,
            "yValue2": 7.80
        },
        {
            "xValue": "Oct 1992",
            "yValue0": 7.40,
            "yValue1": 7.93,
            "yValue2": 7.84
        },
        {
            "xValue": "Nov 1992",
            "yValue0": 7.90,
            "yValue1": 7.80,
            "yValue2": 7.84
        },
        {
            "xValue": "Dec 1992",
            "yValue0": 8.10,
            "yValue1": 7.82,
            "yValue2": 7.80
        },
        {
            "xValue": "Jan 1993",
            "yValue0": 9.20,
            "yValue1": 7.79,
            "yValue2": 7.76
        },
        {
            "xValue": "Feb 1993",
            "yValue0": 8.70,
            "yValue1": 7.64,
            "yValue2": 7.74
        },
        {
            "xValue": "Mar 1993",
            "yValue0": 8.20,
            "yValue1": 7.29,
            "yValue2": 7.76
        },
        {
            "xValue": "Apr 1993",
            "yValue0": 7.30,
            "yValue1": 7.71,
            "yValue2": 7.81
        },
        {
            "xValue": "May 1993",
            "yValue0": 6.90,
            "yValue1": 8.00,
            "yValue2": 7.86
        },
        {
            "xValue": "Jun 1993",
            "yValue0": 7.30,
            "yValue1": 7.97,
            "yValue2": 7.89
        },
        {
            "xValue": "Jul 1993",
            "yValue0": 7.40,
            "yValue1": 7.87,
            "yValue2": 7.89
        },
        {
            "xValue": "Aug 1993",
            "yValue0": 7.40,
            "yValue1": 7.88,
            "yValue2": 7.84
        },
        {
            "xValue": "Sep 1993",
            "yValue0": 7.40,
            "yValue1": 7.69,
            "yValue2": 7.75
        },
        {
            "xValue": "Oct 1993",
            "yValue0": 7.50,
            "yValue1": 8.03,
            "yValue2": 7.65
        },
        {
            "xValue": "Nov 1993",
            "yValue0": 7.70,
            "yValue1": 7.58,
            "yValue2": 7.57
        },
        {
            "xValue": "Dec 1993",
            "yValue0": 7.70,
            "yValue1": 7.46,
            "yValue2": 7.51
        },
        {
            "xValue": "Jan 1994",
            "yValue0": 8.80,
            "yValue1": 7.35,
            "yValue2": 7.46
        },
        {
            "xValue": "Feb 1994",
            "yValue0": 8.60,
            "yValue1": 7.54,
            "yValue2": 7.41
        },
        {
            "xValue": "Mar 1994",
            "yValue0": 8.30,
            "yValue1": 7.37,
            "yValue2": 7.38
        },
        {
            "xValue": "Apr 1994",
            "yValue0": 7.00,
            "yValue1": 7.38,
            "yValue2": 7.34
        },
        {
            "xValue": "May 1994",
            "yValue0": 6.20,
            "yValue1": 7.23,
            "yValue2": 7.31
        },
        {
            "xValue": "Jun 1994",
            "yValue0": 6.50,
            "yValue1": 7.19,
            "yValue2": 7.27
        },
        {
            "xValue": "Jul 1994",
            "yValue0": 6.90,
            "yValue1": 7.36,
            "yValue2": 7.22
        },
        {
            "xValue": "Aug 1994",
            "yValue0": 6.70,
            "yValue1": 7.16,
            "yValue2": 7.17
        },
        {
            "xValue": "Sep 1994",
            "yValue0": 6.90,
            "yValue1": 7.20,
            "yValue2": 7.10
        },
        {
            "xValue": "Oct 1994",
            "yValue0": 6.50,
            "yValue1": 6.95,
            "yValue2": 7.01
        },
        {
            "xValue": "Nov 1994",
            "yValue0": 7.00,
            "yValue1": 6.85,
            "yValue2": 6.93
        },
        {
            "xValue": "Dec 1994",
            "yValue0": 7.10,
            "yValue1": 6.88,
            "yValue2": 6.87
        },
        {
            "xValue": "Jan 1995",
            "yValue0": 8.40,
            "yValue1": 6.93,
            "yValue2": 6.85
        },
        {
            "xValue": "Feb 1995",
            "yValue0": 7.60,
            "yValue1": 6.62,
            "yValue2": 6.86
        },
        {
            "xValue": "Mar 1995",
            "yValue0": 7.30,
            "yValue1": 6.45,
            "yValue2": 6.90
        },
        {
            "xValue": "Apr 1995",
            "yValue0": 6.60,
            "yValue1": 6.95,
            "yValue2": 6.93
        },
        {
            "xValue": "May 1995",
            "yValue0": 6.00,
            "yValue1": 7.09,
            "yValue2": 6.94
        },
        {
            "xValue": "Jun 1995",
            "yValue0": 6.20,
            "yValue1": 6.97,
            "yValue2": 6.91
        },
        {
            "xValue": "Jul 1995",
            "yValue0": 6.30,
            "yValue1": 6.76,
            "yValue2": 6.85
        },
        {
            "xValue": "Aug 1995",
            "yValue0": 6.30,
            "yValue1": 6.78,
            "yValue2": 6.75
        },
        {
            "xValue": "Sep 1995",
            "yValue0": 6.30,
            "yValue1": 6.60,
            "yValue2": 6.64
        },
        {
            "xValue": "Oct 1995",
            "yValue0": 6.10,
            "yValue1": 6.53,
            "yValue2": 6.52
        },
        {
            "xValue": "Nov 1995",
            "yValue0": 6.60,
            "yValue1": 6.42,
            "yValue2": 6.40
        },
        {
            "xValue": "Dec 1995",
            "yValue0": 6.50,
            "yValue1": 6.27,
            "yValue2": 6.27
        },
        {
            "xValue": "Jan 1996",
            "yValue0": 7.60,
            "yValue1": 6.20,
            "yValue2": 6.15
        },
        {
            "xValue": "Feb 1996",
            "yValue0": 6.90,
            "yValue1": 5.96,
            "yValue2": 6.03
        },
        {
            "xValue": "Mar 1996",
            "yValue0": 6.70,
            "yValue1": 5.89,
            "yValue2": 5.94
        },
        {
            "xValue": "Apr 1996",
            "yValue0": 5.60,
            "yValue1": 5.88,
            "yValue2": 5.86
        },
        {
            "xValue": "May 1996",
            "yValue0": 4.90,
            "yValue1": 5.89,
            "yValue2": 5.79
        },
        {
            "xValue": "Jun 1996",
            "yValue0": 5.00,
            "yValue1": 5.68,
            "yValue2": 5.75
        },
        {
            "xValue": "Jul 1996",
            "yValue0": 5.30,
            "yValue1": 5.74,
            "yValue2": 5.72
        },
        {
            "xValue": "Aug 1996",
            "yValue0": 5.20,
            "yValue1": 5.64,
            "yValue2": 5.70
        },
        {
            "xValue": "Sep 1996",
            "yValue0": 5.40,
            "yValue1": 5.68,
            "yValue2": 5.68
        },
        {
            "xValue": "Oct 1996",
            "yValue0": 5.30,
            "yValue1": 5.70,
            "yValue2": 5.66
        },
        {
            "xValue": "Nov 1996",
            "yValue0": 6.00,
            "yValue1": 5.80,
            "yValue2": 5.64
        },
        {
            "xValue": "Dec 1996",
            "yValue0": 5.70,
            "yValue1": 5.47,
            "yValue2": 5.60
        },
        {
            "xValue": "Jan 1997",
            "yValue0": 6.90,
            "yValue1": 5.58,
            "yValue2": 5.52
        },
        {
            "xValue": "Feb 1997",
            "yValue0": 6.40,
            "yValue1": 5.48,
            "yValue2": 5.41
        },
        {
            "xValue": "Mar 1997",
            "yValue0": 6.10,
            "yValue1": 5.32,
            "yValue2": 5.28
        },
        {
            "xValue": "Apr 1997",
            "yValue0": 4.90,
            "yValue1": 5.14,
            "yValue2": 5.13
        },
        {
            "xValue": "May 1997",
            "yValue0": 4.00,
            "yValue1": 4.86,
            "yValue2": 4.99
        },
        {
            "xValue": "Jun 1997",
            "yValue0": 4.20,
            "yValue1": 4.81,
            "yValue2": 4.88
        },
        {
            "xValue": "Jul 1997",
            "yValue0": 4.50,
            "yValue1": 4.90,
            "yValue2": 4.83
        },
        {
            "xValue": "Aug 1997",
            "yValue0": 4.40,
            "yValue1": 4.79,
            "yValue2": 4.82
        },
        {
            "xValue": "Sep 1997",
            "yValue0": 4.50,
            "yValue1": 4.75,
            "yValue2": 4.85
        },
        {
            "xValue": "Oct 1997",
            "yValue0": 4.60,
            "yValue1": 4.97,
            "yValue2": 4.87
        },
        {
            "xValue": "Nov 1997",
            "yValue0": 5.10,
            "yValue1": 4.90,
            "yValue2": 4.87
        },
        {
            "xValue": "Dec 1997",
            "yValue0": 5.10,
            "yValue1": 4.89,
            "yValue2": 4.83
        },
        {
            "xValue": "Jan 1998",
            "yValue0": 5.80,
            "yValue1": 4.68,
            "yValue2": 4.75
        },
        {
            "xValue": "Feb 1998",
            "yValue0": 5.50,
            "yValue1": 4.69,
            "yValue2": 4.65
        },
        {
            "xValue": "Mar 1998",
            "yValue0": 5.60,
            "yValue1": 4.86,
            "yValue2": 4.53
        },
        {
            "xValue": "Apr 1998",
            "yValue0": 4.20,
            "yValue1": 4.40,
            "yValue2": 4.43
        },
        {
            "xValue": "May 1998",
            "yValue0": 3.50,
            "yValue1": 4.30,
            "yValue2": 4.37
        },
        {
            "xValue": "Jun 1998",
            "yValue0": 3.80,
            "yValue1": 4.34,
            "yValue2": 4.33
        },
        {
            "xValue": "Jul 1998",
            "yValue0": 3.80,
            "yValue1": 4.14,
            "yValue2": 4.31
        },
        {
            "xValue": "Aug 1998",
            "yValue0": 4.00,
            "yValue1": 4.33,
            "yValue2": 4.31
        },
        {
            "xValue": "Sep 1998",
            "yValue0": 4.20,
            "yValue1": 4.46,
            "yValue2": 4.31
        },
        {
            "xValue": "Oct 1998",
            "yValue0": 3.90,
            "yValue1": 4.23,
            "yValue2": 4.32
        },
        {
            "xValue": "Nov 1998",
            "yValue0": 4.40,
            "yValue1": 4.21,
            "yValue2": 4.32
        },
        {
            "xValue": "Dec 1998",
            "yValue0": 4.60,
            "yValue1": 4.40,
            "yValue2": 4.31
        },
        {
            "xValue": "Jan 1999",
            "yValue0": 5.30,
            "yValue1": 4.30,
            "yValue2": 4.30
        },
        {
            "xValue": "Feb 1999",
            "yValue0": 5.00,
            "yValue1": 4.28,
            "yValue2": 4.26
        },
        {
            "xValue": "Mar 1999",
            "yValue0": 4.80,
            "yValue1": 4.16,
            "yValue2": 4.19
        },
        {
            "xValue": "Apr 1999",
            "yValue0": 4.00,
            "yValue1": 4.19,
            "yValue2": 4.09
        },
        {
            "xValue": "May 1999",
            "yValue0": 3.20,
            "yValue1": 3.94,
            "yValue2": 3.96
        },
        {
            "xValue": "Jun 1999",
            "yValue0": 3.40,
            "yValue1": 3.85,
            "yValue2": 3.85
        },
        {
            "xValue": "Jul 1999",
            "yValue0": 3.40,
            "yValue1": 3.69,
            "yValue2": 3.75
        },
        {
            "xValue": "Aug 1999",
            "yValue0": 3.40,
            "yValue1": 3.65,
            "yValue2": 3.69
        },
        {
            "xValue": "Sep 1999",
            "yValue0": 3.70,
            "yValue1": 3.94,
            "yValue2": 3.68
        },
        {
            "xValue": "Oct 1999",
            "yValue0": 3.40,
            "yValue1": 3.69,
            "yValue2": 3.73
        },
        {
            "xValue": "Nov 1999",
            "yValue0": 3.70,
            "yValue1": 3.53,
            "yValue2": 3.83
        },
        {
            "xValue": "Dec 1999",
            "yValue0": 4.00,
            "yValue1": 3.82,
            "yValue2": 3.96
        },
        {
            "xValue": "Jan 2000",
            "yValue0": 5.10,
            "yValue1": 4.20,
            "yValue2": 4.10
        },
        {
            "xValue": "Feb 2000",
            "yValue0": 5.00,
            "yValue1": 4.33,
            "yValue2": 4.24
        },
        {
            "xValue": "Mar 2000",
            "yValue0": 5.10,
            "yValue1": 4.43,
            "yValue2": 4.38
        },
        {
            "xValue": "Apr 2000",
            "yValue0": 4.10,
            "yValue1": 4.30,
            "yValue2": 4.50
        },
        {
            "xValue": "May 2000",
            "yValue0": 3.80,
            "yValue1": 4.66,
            "yValue2": 4.57
        },
        {
            "xValue": "Jun 2000",
            "yValue0": 4.10,
            "yValue1": 4.56,
            "yValue2": 4.61
        },
        {
            "xValue": "Jul 2000",
            "yValue0": 4.40,
            "yValue1": 4.74,
            "yValue2": 4.59
        },
        {
            "xValue": "Aug 2000",
            "yValue0": 4.30,
            "yValue1": 4.56,
            "yValue2": 4.53
        },
        {
            "xValue": "Sep 2000",
            "yValue0": 3.90,
            "yValue1": 4.17,
            "yValue2": 4.43
        },
        {
            "xValue": "Oct 2000",
            "yValue0": 3.90,
            "yValue1": 4.21,
            "yValue2": 4.31
        },
        {
            "xValue": "Nov 2000",
            "yValue0": 4.50,
            "yValue1": 4.27,
            "yValue2": 4.22
        },
        {
            "xValue": "Dec 2000",
            "yValue0": 4.30,
            "yValue1": 4.10,
            "yValue2": 4.17
        },
        {
            "xValue": "Jan 2001",
            "yValue0": 5.00,
            "yValue1": 4.18,
            "yValue2": 4.16
        },
        {
            "xValue": "Feb 2001",
            "yValue0": 4.70,
            "yValue1": 4.13,
            "yValue2": 4.17
        },
        {
            "xValue": "Mar 2001",
            "yValue0": 5.10,
            "yValue1": 4.46,
            "yValue2": 4.19
        },
        {
            "xValue": "Apr 2001",
            "yValue0": 4.10,
            "yValue1": 4.33,
            "yValue2": 4.21
        },
        {
            "xValue": "May 2001",
            "yValue0": 3.40,
            "yValue1": 4.13,
            "yValue2": 4.24
        },
        {
            "xValue": "Jun 2001",
            "yValue0": 3.90,
            "yValue1": 4.26,
            "yValue2": 4.27
        },
        {
            "xValue": "Jul 2001",
            "yValue0": 4.00,
            "yValue1": 4.26,
            "yValue2": 4.33
        },
        {
            "xValue": "Aug 2001",
            "yValue0": 4.30,
            "yValue1": 4.53,
            "yValue2": 4.40
        },
        {
            "xValue": "Sep 2001",
            "yValue0": 4.10,
            "yValue1": 4.40,
            "yValue2": 4.49
        },
        {
            "xValue": "Oct 2001",
            "yValue0": 4.30,
            "yValue1": 4.59,
            "yValue2": 4.58
        },
        {
            "xValue": "Nov 2001",
            "yValue0": 4.90,
            "yValue1": 4.64,
            "yValue2": 4.66
        },
        {
            "xValue": "Dec 2001",
            "yValue0": 5.10,
            "yValue1": 4.85,
            "yValue2": 4.73
        },
        {
            "xValue": "Jan 2002",
            "yValue0": 5.60,
            "yValue1": 4.76,
            "yValue2": 4.81
        },
        {
            "xValue": "Feb 2002",
            "yValue0": 5.40,
            "yValue1": 4.80,
            "yValue2": 4.89
        },
        {
            "xValue": "Mar 2002",
            "yValue0": 5.60,
            "yValue1": 4.95,
            "yValue2": 4.97
        },
        {
            "xValue": "Apr 2002",
            "yValue0": 4.90,
            "yValue1": 5.22,
            "yValue2": 5.04
        },
        {
            "xValue": "May 2002",
            "yValue0": 4.20,
            "yValue1": 5.07,
            "yValue2": 5.10
        },
        {
            "xValue": "Jun 2002",
            "yValue0": 4.80,
            "yValue1": 5.15,
            "yValue2": 5.16
        },
        {
            "xValue": "Jul 2002",
            "yValue0": 4.90,
            "yValue1": 5.15,
            "yValue2": 5.20
        },
        {
            "xValue": "Aug 2002",
            "yValue0": 5.00,
            "yValue1": 5.26,
            "yValue2": 5.24
        },
        {
            "xValue": "Sep 2002",
            "yValue0": 4.90,
            "yValue1": 5.27,
            "yValue2": 5.27
        },
        {
            "xValue": "Oct 2002",
            "yValue0": 5.00,
            "yValue1": 5.26,
            "yValue2": 5.28
        },
        {
            "xValue": "Nov 2002",
            "yValue0": 5.60,
            "yValue1": 5.30,
            "yValue2": 5.25
        },
        {
            "xValue": "Dec 2002",
            "yValue0": 5.60,
            "yValue1": 5.32,
            "yValue2": 5.18
        },
        {
            "xValue": "Jan 2003",
            "yValue0": 5.80,
            "yValue1": 5.00,
            "yValue2": 5.10
        },
        {
            "xValue": "Feb 2003",
            "yValue0": 5.60,
            "yValue1": 5.02,
            "yValue2": 5.04
        },
        {
            "xValue": "Mar 2003",
            "yValue0": 5.50,
            "yValue1": 4.91,
            "yValue2": 5.02
        },
        {
            "xValue": "Apr 2003",
            "yValue0": 4.60,
            "yValue1": 4.97,
            "yValue2": 5.03
        },
        {
            "xValue": "May 2003",
            "yValue0": 4.30,
            "yValue1": 5.16,
            "yValue2": 5.06
        },
        {
            "xValue": "Jun 2003",
            "yValue0": 5.00,
            "yValue1": 5.29,
            "yValue2": 5.09
        },
        {
            "xValue": "Jul 2003",
            "yValue0": 4.90,
            "yValue1": 5.08,
            "yValue2": 5.10
        },
        {
            "xValue": "Aug 2003",
            "yValue0": 4.80,
            "yValue1": 5.05,
            "yValue2": 5.07
        },
        {
            "xValue": "Sep 2003",
            "yValue0": 4.60,
            "yValue1": 4.93,
            "yValue2": 5.01
        },
        {
            "xValue": "Oct 2003",
            "yValue0": 4.90,
            "yValue1": 5.10,
            "yValue2": 4.95
        },
        {
            "xValue": "Nov 2003",
            "yValue0": 5.20,
            "yValue1": 4.96,
            "yValue2": 4.89
        },
        {
            "xValue": "Dec 2003",
            "yValue0": 5.00,
            "yValue1": 4.75,
            "yValue2": 4.85
        },
        {
            "xValue": "Jan 2004",
            "yValue0": 5.50,
            "yValue1": 4.78,
            "yValue2": 4.83
        },
        {
            "xValue": "Feb 2004",
            "yValue0": 5.30,
            "yValue1": 4.76,
            "yValue2": 4.83
        },
        {
            "xValue": "Mar 2004",
            "yValue0": 5.50,
            "yValue1": 4.97,
            "yValue2": 4.84
        },
        {
            "xValue": "Apr 2004",
            "yValue0": 4.40,
            "yValue1": 4.80,
            "yValue2": 4.84
        },
        {
            "xValue": "May 2004",
            "yValue0": 4.10,
            "yValue1": 4.90,
            "yValue2": 4.82
        },
        {
            "xValue": "Jun 2004",
            "yValue0": 4.60,
            "yValue1": 4.81,
            "yValue2": 4.77
        },
        {
            "xValue": "Jul 2004",
            "yValue0": 4.60,
            "yValue1": 4.71,
            "yValue2": 4.70
        },
        {
            "xValue": "Aug 2004",
            "yValue0": 4.30,
            "yValue1": 4.53,
            "yValue2": 4.65
        },
        {
            "xValue": "Sep 2004",
            "yValue0": 4.30,
            "yValue1": 4.58,
            "yValue2": 4.62
        },
        {
            "xValue": "Oct 2004",
            "yValue0": 4.50,
            "yValue1": 4.66,
            "yValue2": 4.63
        },
        {
            "xValue": "Nov 2004",
            "yValue0": 4.80,
            "yValue1": 4.63,
            "yValue2": 4.65
        },
        {
            "xValue": "Dec 2004",
            "yValue0": 4.90,
            "yValue1": 4.66,
            "yValue2": 4.66
        },
        {
            "xValue": "Jan 2005",
            "yValue0": 5.40,
            "yValue1": 4.69,
            "yValue2": 4.63
        },
        {
            "xValue": "Feb 2005",
            "yValue0": 5.20,
            "yValue1": 4.67,
            "yValue2": 4.57
        },
        {
            "xValue": "Mar 2005",
            "yValue0": 4.90,
            "yValue1": 4.47,
            "yValue2": 4.48
        },
        {
            "xValue": "Apr 2005",
            "yValue0": 3.90,
            "yValue1": 4.28,
            "yValue2": 4.38
        },
        {
            "xValue": "May 2005",
            "yValue0": 3.60,
            "yValue1": 4.27,
            "yValue2": 4.30
        },
        {
            "xValue": "Jun 2005",
            "yValue0": 4.10,
            "yValue1": 4.26,
            "yValue2": 4.25
        },
        {
            "xValue": "Jul 2005",
            "yValue0": 4.20,
            "yValue1": 4.25,
            "yValue2": 4.24
        },
        {
            "xValue": "Aug 2005",
            "yValue0": 3.90,
            "yValue1": 4.11,
            "yValue2": 4.25
        },
        {
            "xValue": "Sep 2005",
            "yValue0": 4.10,
            "yValue1": 4.35,
            "yValue2": 4.25
        },
        {
            "xValue": "Oct 2005",
            "yValue0": 4.10,
            "yValue1": 4.26,
            "yValue2": 4.22
        },
        {
            "xValue": "Nov 2005",
            "yValue0": 4.50,
            "yValue1": 4.40,
            "yValue2": 4.17
        },
        {
            "xValue": "Dec 2005",
            "yValue0": 4.30,
            "yValue1": 4.11,
            "yValue2": 4.12
        },
        {
            "xValue": "Jan 2006",
            "yValue0": 4.60,
            "yValue1": 3.99,
            "yValue2": 4.07
        },
        {
            "xValue": "Feb 2006",
            "yValue0": 4.50,
            "yValue1": 4.03,
            "yValue2": 4.03
        },
        {
            "xValue": "Mar 2006",
            "yValue0": 4.40,
            "yValue1": 4.04,
            "yValue2": 4.02
        },
        {
            "xValue": "Apr 2006",
            "yValue0": 3.90,
            "yValue1": 4.29,
            "yValue2": 4.03
        },
        {
            "xValue": "May 2006",
            "yValue0": 3.40,
            "yValue1": 3.99,
            "yValue2": 4.05
        },
        {
            "xValue": "Jun 2006",
            "yValue0": 3.90,
            "yValue1": 4.03,
            "yValue2": 4.06
        },
        {
            "xValue": "Jul 2006",
            "yValue0": 4.10,
            "yValue1": 4.12,
            "yValue2": 4.05
        },
        {
            "xValue": "Aug 2006",
            "yValue0": 3.90,
            "yValue1": 4.10,
            "yValue2": 4.03
        },
        {
            "xValue": "Sep 2006",
            "yValue0": 3.80,
            "yValue1": 4.01,
            "yValue2": 4.02
        },
        {
            "xValue": "Oct 2006",
            "yValue0": 3.70,
            "yValue1": 3.85,
            "yValue2": 4.02
        },
        {
            "xValue": "Nov 2006",
            "yValue0": 4.00,
            "yValue1": 3.98,
            "yValue2": 4.04
        },
        {
            "xValue": "Dec 2006",
            "yValue0": 4.20,
            "yValue1": 4.03,
            "yValue2": 4.08
        },
        {
            "xValue": "Jan 2007",
            "yValue0": 4.90,
            "yValue1": 4.24,
            "yValue2": 4.13
        },
        {
            "xValue": "Feb 2007",
            "yValue0": 4.80,
            "yValue1": 4.30,
            "yValue2": 4.18
        },
        {
            "xValue": "Mar 2007",
            "yValue0": 4.50,
            "yValue1": 4.16,
            "yValue2": 4.22
        },
        {
            "xValue": "Apr 2007",
            "yValue0": 3.90,
            "yValue1": 4.26,
            "yValue2": 4.25
        },
        {
            "xValue": "May 2007",
            "yValue0": 3.60,
            "yValue1": 4.18,
            "yValue2": 4.27
        },
        {
            "xValue": "Jun 2007",
            "yValue0": 4.20,
            "yValue1": 4.34,
            "yValue2": 4.30
        },
        {
            "xValue": "Jul 2007",
            "yValue0": 4.40,
            "yValue1": 4.40,
            "yValue2": 4.35
        },
        {
            "xValue": "Aug 2007",
            "yValue0": 4.20,
            "yValue1": 4.38,
            "yValue2": 4.40
        },
        {
            "xValue": "Sep 2007",
            "yValue0": 4.20,
            "yValue1": 4.42,
            "yValue2": 4.45
        },
        {
            "xValue": "Oct 2007",
            "yValue0": 4.30,
            "yValue1": 4.50,
            "yValue2": 4.51
        },
        {
            "xValue": "Nov 2007",
            "yValue0": 4.50,
            "yValue1": 4.54,
            "yValue2": 4.56
        },
        {
            "xValue": "Dec 2007",
            "yValue0": 4.90,
            "yValue1": 4.70,
            "yValue2": 4.61
        },
        {
            "xValue": "Jan 2008",
            "yValue0": 5.40,
            "yValue1": 4.67,
            "yValue2": 4.67
        },
        {
            "xValue": "Feb 2008",
            "yValue0": 5.20,
            "yValue1": 4.68,
            "yValue2": 4.73
        },
        {
            "xValue": "Mar 2008",
            "yValue0": 5.20,
            "yValue1": 4.83,
            "yValue2": 4.82
        },
        {
            "xValue": "Apr 2008",
            "yValue0": 4.40,
            "yValue1": 4.76,
            "yValue2": 4.95
        },
        {
            "xValue": "May 2008",
            "yValue0": 4.50,
            "yValue1": 5.16,
            "yValue2": 5.11
        },
        {
            "xValue": "Jun 2008",
            "yValue0": 5.10,
            "yValue1": 5.27,
            "yValue2": 5.30
        },
        {
            "xValue": "Jul 2008",
            "yValue0": 5.50,
            "yValue1": 5.51,
            "yValue2": 5.50
        },
        {
            "xValue": "Aug 2008",
            "yValue0": 5.60,
            "yValue1": 5.82,
            "yValue2": 5.70
        },
        {
            "xValue": "Sep 2008",
            "yValue0": 5.60,
            "yValue1": 5.88,
            "yValue2": 5.92
        },
        {
            "xValue": "Oct 2008",
            "yValue0": 5.80,
            "yValue1": 6.06,
            "yValue2": 6.16
        },
        {
            "xValue": "Nov 2008",
            "yValue0": 6.30,
            "yValue1": 6.42,
            "yValue2": 6.42
        },
        {
            "xValue": "Dec 2008",
            "yValue0": 7.00,
            "yValue1": 6.73,
            "yValue2": 6.72
        },
        {
            "xValue": "Jan 2009",
            "yValue0": 8.10,
            "yValue1": 7.01,
            "yValue2": 7.05
        },
        {
            "xValue": "Feb 2009",
            "yValue0": 8.20,
            "yValue1": 7.44,
            "yValue2": 7.38
        },
        {
            "xValue": "Mar 2009",
            "yValue0": 8.20,
            "yValue1": 7.65,
            "yValue2": 7.69
        },
        {
            "xValue": "Apr 2009",
            "yValue0": 7.40,
            "yValue1": 7.95,
            "yValue2": 7.94
        },
        {
            "xValue": "May 2009",
            "yValue0": 7.30,
            "yValue1": 8.28,
            "yValue2": 8.15
        },
        {
            "xValue": "Jun 2009",
            "yValue0": 8.10,
            "yValue1": 8.36,
            "yValue2": 8.32
        },
        {
            "xValue": "Jul 2009",
            "yValue0": 8.30,
            "yValue1": 8.32,
            "yValue2": 8.46
        },
        {
            "xValue": "Aug 2009",
            "yValue0": 8.20,
            "yValue1": 8.49,
            "yValue2": 8.59
        },
        {
            "xValue": "Sep 2009",
            "yValue0": 8.40,
            "yValue1": 8.82,
            "yValue2": 8.71
        },
        {
            "xValue": "Oct 2009",
            "yValue0": 8.60,
            "yValue1": 8.97,
            "yValue2": 8.85
        },
        {
            "xValue": "Nov 2009",
            "yValue0": 8.70,
            "yValue1": 8.91,
            "yValue2": 9.00
        },
        {
            "xValue": "Dec 2009",
            "yValue0": 9.40,
            "yValue1": 9.04,
            "yValue2": 9.17
        },
        {
            "xValue": "Jan 2010",
            "yValue0": 10.80,
            "yValue1": 9.36,
            "yValue2": 9.35
        },
        {
            "xValue": "Feb 2010",
            "yValue0": 10.40,
            "yValue1": 9.49,
            "yValue2": 9.49
        },
        {
            "xValue": "Mar 2010",
            "yValue0": 10.50,
            "yValue1": 9.84,
            "yValue2": 9.60
        },
        {
            "xValue": "Apr 2010",
            "yValue0": 9.10,
            "yValue1": 9.76,
            "yValue2": 9.66
        },
        {
            "xValue": "May 2010",
            "yValue0": 8.60,
            "yValue1": 9.69,
            "yValue2": 9.67
        },
        {
            "xValue": "Jun 2010",
            "yValue0": 9.20,
            "yValue1": 9.47,
            "yValue2": 9.66
        },
        {
            "xValue": "Jul 2010",
            "yValue0": 9.60,
            "yValue1": 9.62,
            "yValue2": 9.67
        },
        {
            "xValue": "Aug 2010",
            "yValue0": 9.40,
            "yValue1": 9.71,
            "yValue2": 9.71
        },
        {
            "xValue": "Sep 2010",
            "yValue0": 9.40,
            "yValue1": 9.88,
            "yValue2": 9.76
        },
        {
            "xValue": "Oct 2010",
            "yValue0": 9.40,
            "yValue1": 9.74,
            "yValue2": 9.79
        },
        {
            "xValue": "Nov 2010",
            "yValue0": 9.90,
            "yValue1": 10.15,
            "yValue2": 9.78
        },
        {
            "xValue": "Dec 2010",
            "yValue0": 10.20,
            "yValue1": 9.82,
            "yValue2": 9.72
        },
        {
            "xValue": "Jan 2011",
            "yValue0": 10.70,
            "yValue1": 9.30,
            "yValue2": 9.66
        },
        {
            "xValue": "Feb 2011",
            "yValue0": 10.30,
            "yValue1": 9.43,
            "yValue2": 9.60
        },
        {
            "xValue": "Mar 2011",
            "yValue0": 10.10,
            "yValue1": 9.50,
            "yValue2": 9.57
        },
        {
            "xValue": "Apr 2011",
            "yValue0": 9.00,
            "yValue1": 9.67,
            "yValue2": 9.54
        },
        {
            "xValue": "May 2011",
            "yValue0": 8.50,
            "yValue1": 9.55,
            "yValue2": 9.53
        },
        {
            "xValue": "Jun 2011",
            "yValue0": 9.30,
            "yValue1": 9.57,
            "yValue2": 9.52
        },
        {
            "xValue": "Jul 2011",
            "yValue0": 9.40,
            "yValue1": 9.39,
            "yValue2": 9.50
        },
        {
            "xValue": "Aug 2011",
            "yValue0": 9.10,
            "yValue1": 9.36,
            "yValue2": 9.45
        },
        {
            "xValue": "Sep 2011",
            "yValue0": 9.00,
            "yValue1": 9.50,
            "yValue2": 9.38
        },
        {
            "xValue": "Oct 2011",
            "yValue0": 9.10,
            "yValue1": 9.41,
            "yValue2": 9.27
        },
        {
            "xValue": "Nov 2011",
            "yValue0": 8.90,
            "yValue1": 9.11,
            "yValue2": 9.14
        },
        {
            "xValue": "Dec 2011",
            "yValue0": 9.30,
            "yValue1": 8.95,
            "yValue2": 9.00
        },
        {
            "xValue": "Jan 2012",
            "yValue0": 9.70,
            "yValue1": 8.43,
            "yValue2": 8.87
        },
        {
            "xValue": "Feb 2012",
            "yValue0": 9.50,
            "yValue1": 8.67,
            "yValue2": 8.79
        },
        {
            "xValue": "Mar 2012",
            "yValue0": 9.20,
            "yValue1": 8.69,
            "yValue2": 8.76
        },
        {
            "xValue": "Apr 2012",
            "yValue0": 8.20,
            "yValue1": 8.85,
            "yValue2": 8.74
        },
        {
            "xValue": "May 2012",
            "yValue0": 7.80,
            "yValue1": 8.79,
            "yValue2": 8.70
        },
        {
            "xValue": "Jun 2012",
            "yValue0": 8.40,
            "yValue1": 8.64,
            "yValue2": 8.60
        },
        {
            "xValue": "Jul 2012",
            "yValue0": 8.50,
            "yValue1": 8.44,
            "yValue2": 8.45
        },
        {
            "xValue": "Aug 2012",
            "yValue0": 8.10,
            "yValue1": 8.32,
            "yValue2": 8.28
        },
        {
            "xValue": "Sep 2012",
            "yValue0": 7.50,
            "yValue1": 7.98,
            "yValue2": 8.12
        },
        {
            "xValue": "Oct 2012",
            "yValue0": 7.70,
            "yValue1": 7.96,
            "yValue2": 7.99
        },
        {
            "xValue": "Nov 2012",
            "yValue0": 7.70,
            "yValue1": 7.88,
            "yValue2": 7.88
        },
        {
            "xValue": "Dec 2012",
            "yValue0": 8.20,
            "yValue1": 7.86,
            "yValue2": 7.77
        },
        {
            "xValue": "Jan 2013",
            "yValue0": 8.90,
            "yValue1": 7.71,
            "yValue2": 7.65
        },
        {
            "xValue": "Feb 2013",
            "yValue0": 8.30,
            "yValue1": 7.52,
            "yValue2": 7.53
        },
        {
            "xValue": "Mar 2013",
            "yValue0": 7.80,
            "yValue1": 7.36,
            "yValue2": 7.43
        },
        {
            "xValue": "Apr 2013",
            "yValue0": 6.70,
            "yValue1": 7.27,
            "yValue2": 7.36
        },
        {
            "xValue": "May 2013",
            "yValue0": 6.40,
            "yValue1": 7.25,
            "yValue2": 7.32
        },
        {
            "xValue": "Jun 2013",
            "yValue0": 7.20,
            "yValue1": 7.42,
            "yValue2": 7.30
        },
        {
            "xValue": "Jul 2013",
            "yValue0": 7.40,
            "yValue1": 7.32,
            "yValue2": 7.28
        },
        {
            "xValue": "Aug 2013",
            "yValue0": 7.00,
            "yValue1": 7.18,
            "yValue2": 7.22
        },
        {
            "xValue": "Sep 2013",
            "yValue0": 6.60,
            "yValue1": 7.11,
            "yValue2": 7.12
        },
        {
            "xValue": "Oct 2013",
            "yValue0": 6.80,
            "yValue1": 7.07,
            "yValue2": 6.97
        },
        {
            "xValue": "Nov 2013",
            "yValue0": 6.70,
            "yValue1": 6.88,
            "yValue2": 6.81
        },
        {
            "xValue": "Dec 2013",
            "yValue0": 6.80,
            "yValue1": 6.49,
            "yValue2": 6.65
        },
        {
            "xValue": "Jan 2014",
            "yValue0": 7.40,
            "yValue1": 6.35,
            "yValue2": 6.51
        },
        {
            "xValue": "Feb 2014",
            "yValue0": 7.30,
            "yValue1": 6.53,
            "yValue2": 6.39
        },
        {
            "xValue": "Mar 2014",
            "yValue0": 6.80,
            "yValue1": 6.38,
            "yValue2": 6.28
        },
        {
            "xValue": "Apr 2014",
            "yValue0": 5.50,
            "yValue1": 6.01,
            "yValue2": 6.21
        },
        {
            "xValue": "May 2014",
            "yValue0": 5.40,
            "yValue1": 6.18,
            "yValue2": 6.16
        },
        {
            "xValue": "Jun 2014",
            "yValue0": 5.80,
            "yValue1": 5.98,
            "yValue2": 6.12
        },
        {
            "xValue": "Jul 2014",
            "yValue0": 6.20,
            "yValue1": 6.13,
            "yValue2": 6.10
        },
        {
            "xValue": "Aug 2014",
            "yValue0": 6.00,
            "yValue1": 6.17,
            "yValue2": 6.08
        },
        {
            "xValue": "Sep 2014",
            "yValue0": 5.60,
            "yValue1": 6.12,
            "yValue2": 6.05
        },
        {
            "xValue": "Oct 2014",
            "yValue0": 5.60,
            "yValue1": 5.89,
            "yValue2": 5.97
        },
        {
            "xValue": "Nov 2014",
            "yValue0": 5.90,
            "yValue1": 6.10,
            "yValue2": 5.86
        },
        {
            "xValue": "Dec 2014",
            "yValue0": 6.00,
            "yValue1": 5.72,
            "yValue2": 5.72
        },
        {
            "xValue": "Jan 2015",
            "yValue0": 6.60,
            "yValue1": 5.59,
            "yValue2": 5.60
        },
        {
            "xValue": "Feb 2015",
            "yValue0": 6.20,
            "yValue1": 5.46,
            "yValue2": 5.49
        },
        {
            "xValue": "Mar 2015",
            "yValue0": 5.60,
            "yValue1": 5.18,
            "yValue2": 5.41
        },
        {
            "xValue": "Apr 2015",
            "yValue0": 4.90,
            "yValue1": 5.35,
            "yValue2": 5.33
        },
        {
            "xValue": "May 2015",
            "yValue0": 4.70,
            "yValue1": 5.44,
            "yValue2": 5.26
        },
        {
            "xValue": "Jun 2015",
            "yValue0": 5.00,
            "yValue1": 5.14,
            "yValue2": 5.19
        },
        {
            "xValue": "Jul 2015",
            "yValue0": 5.20,
            "yValue1": 5.13,
            "yValue2": 5.14
        },
        {
            "xValue": "Aug 2015",
            "yValue0": 4.90,
            "yValue1": 5.05,
            "yValue2": 5.12
        },
        {
            "xValue": "Sep 2015",
            "yValue0": 4.50,
            "yValue1": 5.00,
            "yValue2": 5.13
        },
        {
            "xValue": "Oct 2015",
            "yValue0": 4.90,
            "yValue1": 5.27,
            "yValue2": 5.15
        },
        {
            "xValue": "Nov 2015",
            "yValue0": 5.30,
            "yValue1": 5.58,
            "yValue2": 5.18
        },
        {
            "xValue": "Dec 2015",
            "yValue0": 5.60,
            "yValue1": 5.36,
            "yValue2": 5.19
        },
        {
            "xValue": "Jan 2016",
            "yValue0": 6.10,
            "yValue1": 5.09,
            "yValue2": 5.16
        },
        {
            "xValue": "Feb 2016",
            "yValue0": 5.80,
            "yValue1": 5.04,
            "yValue2": 5.12
        },
        {
            "xValue": "Mar 2016",
            "yValue0": 5.60,
            "yValue1": 5.08,
            "yValue2": 5.06
        },
        {
            "xValue": "Apr 2016",
            "yValue0": 4.70,
            "yValue1": 5.10,
            "yValue2": 5.00
        },
        {
            "xValue": "May 2016",
            "yValue0": 4.20,
            "yValue1": 4.89,
            "yValue2": 4.97
        },
        {
            "xValue": "Jun 2016",
            "yValue0": 4.90,
            "yValue1": 4.99,
            "yValue2": 4.96
        },
        {
            "xValue": "Jul 2016",
            "yValue0": 5.00,
            "yValue1": 4.90,
            "yValue2": 4.98
        },
        {
            "xValue": "Aug 2016",
            "yValue0": 4.80,
            "yValue1": 4.95,
            "yValue2": 5.03
        },
        {
            "xValue": "Sep 2016",
            "yValue0": 4.60,
            "yValue1": 5.20,
            "yValue2": 5.10
        },
        {
            "xValue": "Oct 2016",
            "yValue0": 4.70,
            "yValue1": 5.18,
            "yValue2": 5.17
        },
        {
            "xValue": "Nov 2016",
            "yValue0": 4.80,
            "yValue1": 5.19,
            "yValue2": 5.20
        },
        {
            "xValue": "Dec 2016",
            "yValue0": 5.60,
            "yValue1": 5.48,
            "yValue2": 5.18
        },
        {
            "xValue": "Jan 2017",
            "yValue0": 6.20,
            "yValue1": 5.14,
            "yValue2": 5.08
        },
        {
            "xValue": "Feb 2017",
            "yValue0": 5.90,
            "yValue1": 5.09,
            "yValue2": 4.93
        },
        {
            "xValue": "Mar 2017",
            "yValue0": 5.30,
            "yValue1": 4.70,
            "yValue2": 4.74
        },
        {
            "xValue": "Apr 2017",
            "yValue0": 4.20,
            "yValue1": 4.45,
            "yValue2": 4.57
        },
        {
            "xValue": "May 2017",
            "yValue0": 3.80,
            "yValue1": 4.38,
            "yValue2": 4.43
        },
        {
            "xValue": "Jun 2017",
            "yValue0": 4.30,
            "yValue1": 4.26,
            "yValue2": 4.35
        },
        {
            "xValue": "Jul 2017",
            "yValue0": 4.50,
            "yValue1": 4.36,
            "yValue2": 4.33
        },
        {
            "xValue": "Aug 2017",
            "yValue0": 4.30,
            "yValue1": 4.43,
            "yValue2": 4.36
        },
        {
            "xValue": "Sep 2017",
            "yValue0": 3.80,
            "yValue1": 4.37,
            "yValue2": 4.40
        },
        {
            "xValue": "Oct 2017",
            "yValue0": 3.80,
            "yValue1": 4.34,
            "yValue2": 4.43
        },
        {
            "xValue": "Nov 2017",
            "yValue0": 4.00,
            "yValue1": 4.50,
            "yValue2": 4.44
        },
        {
            "xValue": "Dec 2017",
            "yValue0": 4.40,
            "yValue1": 4.45,
            "yValue2": 4.42
        },
        {
            "xValue": "Jan 2018",
            "yValue0": 5.30,
            "yValue1": 4.40,
            "yValue2": 4.34
        },
        {
            "xValue": "Feb 2018",
            "yValue0": 4.90,
            "yValue1": 4.24,
            "yValue2": 4.22
        },
        {
            "xValue": "Mar 2018",
            "yValue0": 4.70,
            "yValue1": 4.08,
            "yValue2": 4.06
        },
        {
            "xValue": "Apr 2018",
            "yValue0": 3.80,
            "yValue1": 3.90,
            "yValue2": 3.91
        },
        {
            "xValue": "May 2018",
            "yValue0": 3.10,
            "yValue1": 3.47,
            "yValue2": 3.79
        },
        {
            "xValue": "Jun 2018",
            "yValue0": 3.90,
            "yValue1": 3.72,
            "yValue2": 3.72
        },
        {
            "xValue": "Jul 2018",
            "yValue0": 3.90,
            "yValue1": 3.71,
            "yValue2": 3.72
        },
        {
            "xValue": "Aug 2018",
            "yValue0": 3.70,
            "yValue1": 3.81,
            "yValue2": 3.79
        },
        {
            "xValue": "Sep 2018",
            "yValue0": 3.30,
            "yValue1": 3.86,
            "yValue2": 3.92
        },
        {
            "xValue": "Oct 2018",
            "yValue0": 3.40,
            "yValue1": 4.04,
            "yValue2": 4.08
        },
        {
            "xValue": "Nov 2018",
            "yValue0": 3.50,
            "yValue1": 4.12,
            "yValue2": 4.23
        },
        {
            "xValue": "Dec 2018",
            "yValue0": 4.20,
            "yValue1": 4.45,
            "yValue2": 4.31
        },
        {
            "xValue": "Jan 2019",
            "yValue0": 5.30,
            "yValue1": 4.44,
            "yValue2": 4.27
        },
        {
            "xValue": "Feb 2019",
            "yValue0": 4.80,
            "yValue1": 4.17,
            "yValue2": 4.10
        },
        {
            "xValue": "Mar 2019",
            "yValue0": 4.70,
            "yValue1": 4.02,
            "yValue2": 3.84
        },
        {
            "xValue": "Apr 2019",
            "yValue0": 3.40,
            "yValue1": 3.37,
            "yValue2": 3.56
        },
        {
            "xValue": "May 2019",
            "yValue0": 2.90,
            "yValue1": 3.13,
            "yValue2": 3.35
        },
        {
            "xValue": "Jun 2019",
            "yValue0": 3.40,
            "yValue1": 3.12,
            "yValue2": 3.25
        },
        {
            "xValue": "Jul 2019",
            "yValue0": 3.60,
            "yValue1": 3.36,
            "yValue2": 3.28
        },
        {
            "xValue": "Aug 2019",
            "yValue0": 3.40,
            "yValue1": 3.51,
            "yValue2": 3.36
        },
        {
            "xValue": "Sep 2019",
            "yValue0": 3.00,
            "yValue1": 3.56,
            "yValue2": 3.48
        },
        {
            "xValue": "Oct 2019",
            "yValue0": 3.10,
            "yValue1": 3.83,
            "yValue2": 3.64
        },
        {
            "xValue": "Nov 2019",
            "yValue0": 3.20,
            "yValue1": 3.94,
            "yValue2": 3.93
        },
        {
            "xValue": "Dec 2019",
            "yValue0": 3.60,
            "yValue1": 3.97,
            "yValue2": 4.45
        },
        {
            "xValue": "Jan 2020",
            "yValue0": 4.70,
            "yValue1": 3.98,
            "yValue2": 5.29
        },
        {
            "xValue": "Feb 2020",
            "yValue0": 4.60,
            "yValue1": 4.02,
            "yValue2": 6.40
        },
        {
            "xValue": "Mar 2020",
            "yValue0": 5.70,
            "yValue1": 4.82,
            "yValue2": 7.61
        },
        {
            "xValue": "Apr 2020",
            "yValue0": 13.90,
            "yValue1": 13.39,
            "yValue2": 8.70
        },
        {
            "xValue": "May 2020",
            "yValue0": 12.90,
            "yValue1": 13.44,
            "yValue2": 9.45
        },
        {
            "xValue": "Jun 2020",
            "yValue0": 11.50,
            "yValue1": 10.27,
            "yValue2": 9.73
        },
        {
            "xValue": "Jul 2020",
            "yValue0": 10.30,
            "yValue1": 9.47,
            "yValue2": 9.61
        },
        {
            "xValue": "Aug 2020",
            "yValue0": 7.60,
            "yValue1": 7.86,
            "yValue2": 9.26
        },
        {
            "xValue": "Sep 2020",
            "yValue0": 7.30,
            "yValue1": 8.77,
            "yValue2": 8.85
        },
        {
            "xValue": "Oct 2020",
            "yValue0": 6.10,
            "yValue1": 7.74,
            "yValue2": 8.51
        },
        {
            "xValue": "Nov 2020",
            "yValue0": 5.80,
            "yValue1": 7.39,
            "yValue2": 8.26
        },
        {
            "xValue": "Dec 2020",
            "yValue0": 7.60,
            "yValue1": 8.66,
            "yValue2": 8.11
        }
    ],
});