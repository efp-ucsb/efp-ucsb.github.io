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
            "yValue0": 4.23,
            "yValue1": 5.27,
            "yValue2": 5.42
        },
        {
            "xValue": "Feb 1990",
            "yValue0": 4.48,
            "yValue1": 5.16,
            "yValue2": 5.37
        },
        {
            "xValue": "Mar 1990",
            "yValue0": 4.59,
            "yValue1": 5.17,
            "yValue2": 5.26
        },
        {
            "xValue": "Apr 1990",
            "yValue0": 4.98,
            "yValue1": 5.48,
            "yValue2": 5.46
        },
        {
            "xValue": "May 1990",
            "yValue0": 4.65,
            "yValue1": 5.42,
            "yValue2": 5.36
        },
        {
            "xValue": "Jun 1990",
            "yValue0": 4.63,
            "yValue1": 5.27,
            "yValue2": 5.22
        },
        {
            "xValue": "Jul 1990",
            "yValue0": 5.00,
            "yValue1": 5.77,
            "yValue2": 5.57
        },
        {
            "xValue": "Aug 1990",
            "yValue0": 5.00,
            "yValue1": 5.90,
            "yValue2": 5.70
        },
        {
            "xValue": "Sep 1990",
            "yValue0": 5.19,
            "yValue1": 6.13,
            "yValue2": 5.85
        },
        {
            "xValue": "Oct 1990",
            "yValue0": 5.14,
            "yValue1": 6.26,
            "yValue2": 5.92
        },
        {
            "xValue": "Nov 1990",
            "yValue0": 5.62,
            "yValue1": 6.62,
            "yValue2": 6.14
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
            "yValue2": 6.64
        },
        {
            "xValue": "Mar 1991",
            "yValue0": 5.74,
            "yValue1": 7.57,
            "yValue2": 6.89
        },
        {
            "xValue": "Apr 1991",
            "yValue0": 5.82,
            "yValue1": 7.50,
            "yValue2": 6.69
        },
        {
            "xValue": "May 1991",
            "yValue0": 5.81,
            "yValue1": 7.83,
            "yValue2": 6.92
        },
        {
            "xValue": "Jun 1991",
            "yValue0": 5.93,
            "yValue1": 7.67,
            "yValue2": 6.76
        },
        {
            "xValue": "Jul 1991",
            "yValue0": 5.84,
            "yValue1": 7.71,
            "yValue2": 6.74
        },
        {
            "xValue": "Aug 1991",
            "yValue0": 5.53,
            "yValue1": 7.74,
            "yValue2": 6.81
        },
        {
            "xValue": "Sep 1991",
            "yValue0": 6.12,
            "yValue1": 7.78,
            "yValue2": 6.80
        },
        {
            "xValue": "Oct 1991",
            "yValue0": 6.10,
            "yValue1": 8.04,
            "yValue2": 7.01
        },
        {
            "xValue": "Nov 1991",
            "yValue0": 6.21,
            "yValue1": 8.05,
            "yValue2": 7.02
        },
        {
            "xValue": "Dec 1991",
            "yValue0": 6.45,
            "yValue1": 8.32,
            "yValue2": 7.26
        },
        {
            "xValue": "Jan 1992",
            "yValue0": 6.59,
            "yValue1": 8.52,
            "yValue2": 7.29
        },
        {
            "xValue": "Feb 1992",
            "yValue0": 7.30,
            "yValue1": 8.71,
            "yValue2": 7.46
        },
        {
            "xValue": "Mar 1992",
            "yValue0": 6.91,
            "yValue1": 8.83,
            "yValue2": 7.46
        },
        {
            "xValue": "Apr 1992",
            "yValue0": 6.88,
            "yValue1": 8.81,
            "yValue2": 7.40
        },
        {
            "xValue": "May 1992",
            "yValue0": 7.31,
            "yValue1": 9.11,
            "yValue2": 7.54
        },
        {
            "xValue": "Jun 1992",
            "yValue0": 7.36,
            "yValue1": 9.47,
            "yValue2": 7.73
        },
        {
            "xValue": "Jul 1992",
            "yValue0": 7.54,
            "yValue1": 9.44,
            "yValue2": 7.59
        },
        {
            "xValue": "Aug 1992",
            "yValue0": 7.97,
            "yValue1": 9.65,
            "yValue2": 7.60
        },
        {
            "xValue": "Sep 1992",
            "yValue0": 7.78,
            "yValue1": 9.83,
            "yValue2": 7.64
        },
        {
            "xValue": "Oct 1992",
            "yValue0": 7.92,
            "yValue1": 9.70,
            "yValue2": 7.44
        },
        {
            "xValue": "Nov 1992",
            "yValue0": 7.80,
            "yValue1": 9.89,
            "yValue2": 7.48
        },
        {
            "xValue": "Dec 1992",
            "yValue0": 7.82,
            "yValue1": 9.94,
            "yValue2": 7.51
        },
        {
            "xValue": "Jan 1993",
            "yValue0": 7.79,
            "yValue1": 9.52,
            "yValue2": 7.18
        },
        {
            "xValue": "Feb 1993",
            "yValue0": 7.65,
            "yValue1": 9.60,
            "yValue2": 7.12
        },
        {
            "xValue": "Mar 1993",
            "yValue0": 7.28,
            "yValue1": 9.51,
            "yValue2": 7.07
        },
        {
            "xValue": "Apr 1993",
            "yValue0": 7.72,
            "yValue1": 9.59,
            "yValue2": 7.09
        },
        {
            "xValue": "May 1993",
            "yValue0": 8.01,
            "yValue1": 9.55,
            "yValue2": 7.03
        },
        {
            "xValue": "Jun 1993",
            "yValue0": 7.98,
            "yValue1": 9.51,
            "yValue2": 6.98
        },
        {
            "xValue": "Jul 1993",
            "yValue0": 7.87,
            "yValue1": 9.39,
            "yValue2": 6.85
        },
        {
            "xValue": "Aug 1993",
            "yValue0": 7.87,
            "yValue1": 9.41,
            "yValue2": 6.75
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
            "yValue2": 6.90
        },
        {
            "xValue": "Nov 1993",
            "yValue0": 7.58,
            "yValue1": 9.27,
            "yValue2": 6.56
        },
        {
            "xValue": "Dec 1993",
            "yValue0": 7.46,
            "yValue1": 9.15,
            "yValue2": 6.48
        },
        {
            "xValue": "Jan 1994",
            "yValue0": 7.35,
            "yValue1": 9.13,
            "yValue2": 6.54
        },
        {
            "xValue": "Feb 1994",
            "yValue0": 7.55,
            "yValue1": 9.10,
            "yValue2": 6.51
        },
        {
            "xValue": "Mar 1994",
            "yValue0": 7.36,
            "yValue1": 9.03,
            "yValue2": 6.49
        },
        {
            "xValue": "Apr 1994",
            "yValue0": 7.38,
            "yValue1": 8.97,
            "yValue2": 6.37
        },
        {
            "xValue": "May 1994",
            "yValue0": 7.24,
            "yValue1": 8.63,
            "yValue2": 6.12
        },
        {
            "xValue": "Jun 1994",
            "yValue0": 7.19,
            "yValue1": 8.65,
            "yValue2": 6.01
        },
        {
            "xValue": "Jul 1994",
            "yValue0": 7.36,
            "yValue1": 8.57,
            "yValue2": 6.03
        },
        {
            "xValue": "Aug 1994",
            "yValue0": 7.16,
            "yValue1": 8.57,
            "yValue2": 6.01
        },
        {
            "xValue": "Sep 1994",
            "yValue0": 7.20,
            "yValue1": 8.33,
            "yValue2": 5.85
        },
        {
            "xValue": "Oct 1994",
            "yValue0": 6.95,
            "yValue1": 8.28,
            "yValue2": 5.82
        },
        {
            "xValue": "Nov 1994",
            "yValue0": 6.84,
            "yValue1": 7.95,
            "yValue2": 5.63
        },
        {
            "xValue": "Dec 1994",
            "yValue0": 6.88,
            "yValue1": 7.72,
            "yValue2": 5.44
        },
        {
            "xValue": "Jan 1995",
            "yValue0": 6.93,
            "yValue1": 7.81,
            "yValue2": 5.53
        },
        {
            "xValue": "Feb 1995",
            "yValue0": 6.62,
            "yValue1": 7.64,
            "yValue2": 5.43
        },
        {
            "xValue": "Mar 1995",
            "yValue0": 6.45,
            "yValue1": 7.66,
            "yValue2": 5.43
        },
        {
            "xValue": "Apr 1995",
            "yValue0": 6.95,
            "yValue1": 8.06,
            "yValue2": 5.76
        },
        {
            "xValue": "May 1995",
            "yValue0": 7.10,
            "yValue1": 8.04,
            "yValue2": 5.75
        },
        {
            "xValue": "Jun 1995",
            "yValue0": 6.97,
            "yValue1": 7.88,
            "yValue2": 5.62
        },
        {
            "xValue": "Jul 1995",
            "yValue0": 6.77,
            "yValue1": 7.96,
            "yValue2": 5.70
        },
        {
            "xValue": "Aug 1995",
            "yValue0": 6.78,
            "yValue1": 7.95,
            "yValue2": 5.69
        },
        {
            "xValue": "Sep 1995",
            "yValue0": 6.60,
            "yValue1": 7.91,
            "yValue2": 5.63
        },
        {
            "xValue": "Oct 1995",
            "yValue0": 6.53,
            "yValue1": 7.85,
            "yValue2": 5.59
        },
        {
            "xValue": "Nov 1995",
            "yValue0": 6.40,
            "yValue1": 7.86,
            "yValue2": 5.65
        },
        {
            "xValue": "Dec 1995",
            "yValue0": 6.27,
            "yValue1": 7.74,
            "yValue2": 5.56
        },
        {
            "xValue": "Jan 1996",
            "yValue0": 6.20,
            "yValue1": 7.78,
            "yValue2": 5.62
        },
        {
            "xValue": "Feb 1996",
            "yValue0": 5.96,
            "yValue1": 7.65,
            "yValue2": 5.53
        },
        {
            "xValue": "Mar 1996",
            "yValue0": 5.88,
            "yValue1": 7.63,
            "yValue2": 5.52
        },
        {
            "xValue": "Apr 1996",
            "yValue0": 5.88,
            "yValue1": 7.56,
            "yValue2": 5.58
        },
        {
            "xValue": "May 1996",
            "yValue0": 5.89,
            "yValue1": 7.55,
            "yValue2": 5.68
        },
        {
            "xValue": "Jun 1996",
            "yValue0": 5.68,
            "yValue1": 7.19,
            "yValue2": 5.32
        },
        {
            "xValue": "Jul 1996",
            "yValue0": 5.75,
            "yValue1": 7.27,
            "yValue2": 5.39
        },
        {
            "xValue": "Aug 1996",
            "yValue0": 5.64,
            "yValue1": 6.93,
            "yValue2": 5.16
        },
        {
            "xValue": "Sep 1996",
            "yValue0": 5.68,
            "yValue1": 6.87,
            "yValue2": 5.19
        },
        {
            "xValue": "Oct 1996",
            "yValue0": 5.70,
            "yValue1": 6.89,
            "yValue2": 5.27
        },
        {
            "xValue": "Nov 1996",
            "yValue0": 5.78,
            "yValue1": 7.06,
            "yValue2": 5.35
        },
        {
            "xValue": "Dec 1996",
            "yValue0": 5.47,
            "yValue1": 6.90,
            "yValue2": 5.36
        },
        {
            "xValue": "Jan 1997",
            "yValue0": 5.58,
            "yValue1": 6.86,
            "yValue2": 5.26
        },
        {
            "xValue": "Feb 1997",
            "yValue0": 5.48,
            "yValue1": 6.80,
            "yValue2": 5.24
        },
        {
            "xValue": "Mar 1997",
            "yValue0": 5.32,
            "yValue1": 6.64,
            "yValue2": 5.23
        },
        {
            "xValue": "Apr 1997",
            "yValue0": 5.14,
            "yValue1": 6.46,
            "yValue2": 4.98
        },
        {
            "xValue": "May 1997",
            "yValue0": 4.87,
            "yValue1": 6.32,
            "yValue2": 4.97
        },
        {
            "xValue": "Jun 1997",
            "yValue0": 4.81,
            "yValue1": 6.38,
            "yValue2": 5.02
        },
        {
            "xValue": "Jul 1997",
            "yValue0": 4.91,
            "yValue1": 6.20,
            "yValue2": 4.80
        },
        {
            "xValue": "Aug 1997",
            "yValue0": 4.79,
            "yValue1": 6.21,
            "yValue2": 4.84
        },
        {
            "xValue": "Sep 1997",
            "yValue0": 4.74,
            "yValue1": 6.26,
            "yValue2": 4.85
        },
        {
            "xValue": "Oct 1997",
            "yValue0": 4.98,
            "yValue1": 6.05,
            "yValue2": 4.74
        },
        {
            "xValue": "Nov 1997",
            "yValue0": 4.89,
            "yValue1": 5.93,
            "yValue2": 4.61
        },
        {
            "xValue": "Dec 1997",
            "yValue0": 4.89,
            "yValue1": 6.16,
            "yValue2": 4.73
        },
        {
            "xValue": "Jan 1998",
            "yValue0": 4.68,
            "yValue1": 6.04,
            "yValue2": 4.64
        },
        {
            "xValue": "Feb 1998",
            "yValue0": 4.69,
            "yValue1": 5.95,
            "yValue2": 4.59
        },
        {
            "xValue": "Mar 1998",
            "yValue0": 4.86,
            "yValue1": 6.14,
            "yValue2": 4.75
        },
        {
            "xValue": "Apr 1998",
            "yValue0": 4.40,
            "yValue1": 5.77,
            "yValue2": 4.27
        },
        {
            "xValue": "May 1998",
            "yValue0": 4.30,
            "yValue1": 5.93,
            "yValue2": 4.46
        },
        {
            "xValue": "Jun 1998",
            "yValue0": 4.35,
            "yValue1": 5.96,
            "yValue2": 4.52
        },
        {
            "xValue": "Jul 1998",
            "yValue0": 4.16,
            "yValue1": 5.92,
            "yValue2": 4.51
        },
        {
            "xValue": "Aug 1998",
            "yValue0": 4.33,
            "yValue1": 5.99,
            "yValue2": 4.53
        },
        {
            "xValue": "Sep 1998",
            "yValue0": 4.45,
            "yValue1": 5.97,
            "yValue2": 4.53
        },
        {
            "xValue": "Oct 1998",
            "yValue0": 4.23,
            "yValue1": 6.05,
            "yValue2": 4.53
        },
        {
            "xValue": "Nov 1998",
            "yValue0": 4.20,
            "yValue1": 5.82,
            "yValue2": 4.39
        },
        {
            "xValue": "Dec 1998",
            "yValue0": 4.40,
            "yValue1": 5.73,
            "yValue2": 4.30
        },
        {
            "xValue": "Jan 1999",
            "yValue0": 4.30,
            "yValue1": 5.60,
            "yValue2": 4.29
        },
        {
            "xValue": "Feb 1999",
            "yValue0": 4.27,
            "yValue1": 5.57,
            "yValue2": 4.31
        },
        {
            "xValue": "Mar 1999",
            "yValue0": 4.16,
            "yValue1": 5.37,
            "yValue2": 4.17
        },
        {
            "xValue": "Apr 1999",
            "yValue0": 4.19,
            "yValue1": 5.37,
            "yValue2": 4.26
        },
        {
            "xValue": "May 1999",
            "yValue0": 3.94,
            "yValue1": 5.09,
            "yValue2": 4.26
        },
        {
            "xValue": "Jun 1999",
            "yValue0": 3.85,
            "yValue1": 5.24,
            "yValue2": 4.33
        },
        {
            "xValue": "Jul 1999",
            "yValue0": 3.70,
            "yValue1": 5.26,
            "yValue2": 4.33
        },
        {
            "xValue": "Aug 1999",
            "yValue0": 3.65,
            "yValue1": 5.04,
            "yValue2": 4.21
        },
        {
            "xValue": "Sep 1999",
            "yValue0": 3.93,
            "yValue1": 5.18,
            "yValue2": 4.23
        },
        {
            "xValue": "Oct 1999",
            "yValue0": 3.70,
            "yValue1": 5.10,
            "yValue2": 4.10
        },
        {
            "xValue": "Nov 1999",
            "yValue0": 3.53,
            "yValue1": 4.99,
            "yValue2": 4.06
        },
        {
            "xValue": "Dec 1999",
            "yValue0": 3.82,
            "yValue1": 4.98,
            "yValue2": 3.98
        },
        {
            "xValue": "Jan 2000",
            "yValue0": 4.19,
            "yValue1": 4.96,
            "yValue2": 4.03
        },
        {
            "xValue": "Feb 2000",
            "yValue0": 4.32,
            "yValue1": 5.11,
            "yValue2": 4.04
        },
        {
            "xValue": "Mar 2000",
            "yValue0": 4.43,
            "yValue1": 5.09,
            "yValue2": 4.08
        },
        {
            "xValue": "Apr 2000",
            "yValue0": 4.30,
            "yValue1": 4.86,
            "yValue2": 3.84
        },
        {
            "xValue": "May 2000",
            "yValue0": 4.67,
            "yValue1": 5.21,
            "yValue2": 4.05
        },
        {
            "xValue": "Jun 2000",
            "yValue0": 4.57,
            "yValue1": 5.02,
            "yValue2": 3.94
        },
        {
            "xValue": "Jul 2000",
            "yValue0": 4.76,
            "yValue1": 5.09,
            "yValue2": 4.05
        },
        {
            "xValue": "Aug 2000",
            "yValue0": 4.56,
            "yValue1": 5.01,
            "yValue2": 4.11
        },
        {
            "xValue": "Sep 2000",
            "yValue0": 4.17,
            "yValue1": 4.79,
            "yValue2": 3.93
        },
        {
            "xValue": "Oct 2000",
            "yValue0": 4.21,
            "yValue1": 4.69,
            "yValue2": 3.88
        },
        {
            "xValue": "Nov 2000",
            "yValue0": 4.27,
            "yValue1": 4.76,
            "yValue2": 3.92
        },
        {
            "xValue": "Dec 2000",
            "yValue0": 4.10,
            "yValue1": 4.65,
            "yValue2": 3.97
        },
        {
            "xValue": "Jan 2001",
            "yValue0": 4.18,
            "yValue1": 4.88,
            "yValue2": 4.22
        },
        {
            "xValue": "Feb 2001",
            "yValue0": 4.13,
            "yValue1": 4.84,
            "yValue2": 4.25
        },
        {
            "xValue": "Mar 2001",
            "yValue0": 4.46,
            "yValue1": 5.00,
            "yValue2": 4.27
        },
        {
            "xValue": "Apr 2001",
            "yValue0": 4.32,
            "yValue1": 4.96,
            "yValue2": 4.34
        },
        {
            "xValue": "May 2001",
            "yValue0": 4.13,
            "yValue1": 4.98,
            "yValue2": 4.35
        },
        {
            "xValue": "Jun 2001",
            "yValue0": 4.26,
            "yValue1": 5.20,
            "yValue2": 4.52
        },
        {
            "xValue": "Jul 2001",
            "yValue0": 4.27,
            "yValue1": 5.29,
            "yValue2": 4.54
        },
        {
            "xValue": "Aug 2001",
            "yValue0": 4.53,
            "yValue1": 5.70,
            "yValue2": 4.91
        },
        {
            "xValue": "Sep 2001",
            "yValue0": 4.40,
            "yValue1": 5.77,
            "yValue2": 4.90
        },
        {
            "xValue": "Oct 2001",
            "yValue0": 4.59,
            "yValue1": 6.05,
            "yValue2": 5.38
        },
        {
            "xValue": "Nov 2001",
            "yValue0": 4.64,
            "yValue1": 6.23,
            "yValue2": 5.58
        },
        {
            "xValue": "Dec 2001",
            "yValue0": 4.85,
            "yValue1": 6.43,
            "yValue2": 5.76
        },
        {
            "xValue": "Jan 2002",
            "yValue0": 4.76,
            "yValue1": 6.46,
            "yValue2": 5.68
        },
        {
            "xValue": "Feb 2002",
            "yValue0": 4.80,
            "yValue1": 6.47,
            "yValue2": 5.64
        },
        {
            "xValue": "Mar 2002",
            "yValue0": 4.95,
            "yValue1": 6.52,
            "yValue2": 5.80
        },
        {
            "xValue": "Apr 2002",
            "yValue0": 5.22,
            "yValue1": 6.69,
            "yValue2": 5.90
        },
        {
            "xValue": "May 2002",
            "yValue0": 5.06,
            "yValue1": 6.70,
            "yValue2": 5.82
        },
        {
            "xValue": "Jun 2002",
            "yValue0": 5.15,
            "yValue1": 6.67,
            "yValue2": 5.76
        },
        {
            "xValue": "Jul 2002",
            "yValue0": 5.16,
            "yValue1": 6.65,
            "yValue2": 5.72
        },
        {
            "xValue": "Aug 2002",
            "yValue0": 5.26,
            "yValue1": 6.71,
            "yValue2": 5.73
        },
        {
            "xValue": "Sep 2002",
            "yValue0": 5.27,
            "yValue1": 6.63,
            "yValue2": 5.65
        },
        {
            "xValue": "Oct 2002",
            "yValue0": 5.26,
            "yValue1": 6.68,
            "yValue2": 5.69
        },
        {
            "xValue": "Nov 2002",
            "yValue0": 5.30,
            "yValue1": 6.80,
            "yValue2": 5.85
        },
        {
            "xValue": "Dec 2002",
            "yValue0": 5.32,
            "yValue1": 7.03,
            "yValue2": 6.04
        },
        {
            "xValue": "Jan 2003",
            "yValue0": 5.00,
            "yValue1": 6.76,
            "yValue2": 5.89
        },
        {
            "xValue": "Feb 2003",
            "yValue0": 5.02,
            "yValue1": 6.76,
            "yValue2": 5.94
        },
        {
            "xValue": "Mar 2003",
            "yValue0": 4.91,
            "yValue1": 6.72,
            "yValue2": 5.91
        },
        {
            "xValue": "Apr 2003",
            "yValue0": 4.96,
            "yValue1": 6.81,
            "yValue2": 6.01
        },
        {
            "xValue": "May 2003",
            "yValue0": 5.15,
            "yValue1": 6.91,
            "yValue2": 6.12
        },
        {
            "xValue": "Jun 2003",
            "yValue0": 5.29,
            "yValue1": 7.14,
            "yValue2": 6.24
        },
        {
            "xValue": "Jul 2003",
            "yValue0": 5.08,
            "yValue1": 6.85,
            "yValue2": 6.10
        },
        {
            "xValue": "Aug 2003",
            "yValue0": 5.06,
            "yValue1": 6.83,
            "yValue2": 6.04
        },
        {
            "xValue": "Sep 2003",
            "yValue0": 4.93,
            "yValue1": 6.85,
            "yValue2": 6.07
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
            "yValue2": 5.83
        },
        {
            "xValue": "Dec 2003",
            "yValue0": 4.74,
            "yValue1": 6.47,
            "yValue2": 5.69
        },
        {
            "xValue": "Jan 2004",
            "yValue0": 4.78,
            "yValue1": 6.51,
            "yValue2": 5.73
        },
        {
            "xValue": "Feb 2004",
            "yValue0": 4.76,
            "yValue1": 6.36,
            "yValue2": 5.56
        },
        {
            "xValue": "Mar 2004",
            "yValue0": 4.97,
            "yValue1": 6.65,
            "yValue2": 5.76
        },
        {
            "xValue": "Apr 2004",
            "yValue0": 4.79,
            "yValue1": 6.42,
            "yValue2": 5.62
        },
        {
            "xValue": "May 2004",
            "yValue0": 4.89,
            "yValue1": 6.37,
            "yValue2": 5.58
        },
        {
            "xValue": "Jun 2004",
            "yValue0": 4.81,
            "yValue1": 6.34,
            "yValue2": 5.57
        },
        {
            "xValue": "Jul 2004",
            "yValue0": 4.71,
            "yValue1": 6.15,
            "yValue2": 5.50
        },
        {
            "xValue": "Aug 2004",
            "yValue0": 4.54,
            "yValue1": 5.95,
            "yValue2": 5.45
        },
        {
            "xValue": "Sep 2004",
            "yValue0": 4.58,
            "yValue1": 5.88,
            "yValue2": 5.33
        },
        {
            "xValue": "Oct 2004",
            "yValue0": 4.65,
            "yValue1": 5.94,
            "yValue2": 5.45
        },
        {
            "xValue": "Nov 2004",
            "yValue0": 4.63,
            "yValue1": 5.90,
            "yValue2": 5.41
        },
        {
            "xValue": "Dec 2004",
            "yValue0": 4.66,
            "yValue1": 5.93,
            "yValue2": 5.35
        },
        {
            "xValue": "Jan 2005",
            "yValue0": 4.69,
            "yValue1": 5.79,
            "yValue2": 5.20
        },
        {
            "xValue": "Feb 2005",
            "yValue0": 4.67,
            "yValue1": 5.78,
            "yValue2": 5.38
        },
        {
            "xValue": "Mar 2005",
            "yValue0": 4.46,
            "yValue1": 5.62,
            "yValue2": 5.21
        },
        {
            "xValue": "Apr 2005",
            "yValue0": 4.28,
            "yValue1": 5.41,
            "yValue2": 5.12
        },
        {
            "xValue": "May 2005",
            "yValue0": 4.27,
            "yValue1": 5.39,
            "yValue2": 5.14
        },
        {
            "xValue": "Jun 2005",
            "yValue0": 4.26,
            "yValue1": 5.35,
            "yValue2": 5.00
        },
        {
            "xValue": "Jul 2005",
            "yValue0": 4.24,
            "yValue1": 5.26,
            "yValue2": 4.99
        },
        {
            "xValue": "Aug 2005",
            "yValue0": 4.12,
            "yValue1": 5.14,
            "yValue2": 4.93
        },
        {
            "xValue": "Sep 2005",
            "yValue0": 4.35,
            "yValue1": 5.34,
            "yValue2": 5.01
        },
        {
            "xValue": "Oct 2005",
            "yValue0": 4.25,
            "yValue1": 5.21,
            "yValue2": 4.92
        },
        {
            "xValue": "Nov 2005",
            "yValue0": 4.41,
            "yValue1": 5.33,
            "yValue2": 5.01
        },
        {
            "xValue": "Dec 2005",
            "yValue0": 4.11,
            "yValue1": 5.08,
            "yValue2": 4.81
        },
        {
            "xValue": "Jan 2006",
            "yValue0": 3.99,
            "yValue1": 4.96,
            "yValue2": 4.66
        },
        {
            "xValue": "Feb 2006",
            "yValue0": 4.03,
            "yValue1": 5.01,
            "yValue2": 4.73
        },
        {
            "xValue": "Mar 2006",
            "yValue0": 4.04,
            "yValue1": 4.97,
            "yValue2": 4.65
        },
        {
            "xValue": "Apr 2006",
            "yValue0": 4.29,
            "yValue1": 5.02,
            "yValue2": 4.72
        },
        {
            "xValue": "May 2006",
            "yValue0": 4.00,
            "yValue1": 4.84,
            "yValue2": 4.60
        },
        {
            "xValue": "Jun 2006",
            "yValue0": 4.03,
            "yValue1": 4.86,
            "yValue2": 4.64
        },
        {
            "xValue": "Jul 2006",
            "yValue0": 4.11,
            "yValue1": 4.96,
            "yValue2": 4.78
        },
        {
            "xValue": "Aug 2006",
            "yValue0": 4.10,
            "yValue1": 4.93,
            "yValue2": 4.62
        },
        {
            "xValue": "Sep 2006",
            "yValue0": 4.01,
            "yValue1": 4.80,
            "yValue2": 4.58
        },
        {
            "xValue": "Oct 2006",
            "yValue0": 3.85,
            "yValue1": 4.69,
            "yValue2": 4.38
        },
        {
            "xValue": "Nov 2006",
            "yValue0": 3.98,
            "yValue1": 4.86,
            "yValue2": 4.51
        },
        {
            "xValue": "Dec 2006",
            "yValue0": 4.02,
            "yValue1": 4.85,
            "yValue2": 4.47
        },
        {
            "xValue": "Jan 2007",
            "yValue0": 4.24,
            "yValue1": 5.16,
            "yValue2": 4.57
        },
        {
            "xValue": "Feb 2007",
            "yValue0": 4.30,
            "yValue1": 5.12,
            "yValue2": 4.56
        },
        {
            "xValue": "Mar 2007",
            "yValue0": 4.15,
            "yValue1": 4.98,
            "yValue2": 4.36
        },
        {
            "xValue": "Apr 2007",
            "yValue0": 4.26,
            "yValue1": 5.13,
            "yValue2": 4.51
        },
        {
            "xValue": "May 2007",
            "yValue0": 4.19,
            "yValue1": 5.13,
            "yValue2": 4.47
        },
        {
            "xValue": "Jun 2007",
            "yValue0": 4.34,
            "yValue1": 5.27,
            "yValue2": 4.56
        },
        {
            "xValue": "Jul 2007",
            "yValue0": 4.40,
            "yValue1": 5.45,
            "yValue2": 4.69
        },
        {
            "xValue": "Aug 2007",
            "yValue0": 4.39,
            "yValue1": 5.40,
            "yValue2": 4.61
        },
        {
            "xValue": "Sep 2007",
            "yValue0": 4.42,
            "yValue1": 5.51,
            "yValue2": 4.67
        },
        {
            "xValue": "Oct 2007",
            "yValue0": 4.49,
            "yValue1": 5.61,
            "yValue2": 4.70
        },
        {
            "xValue": "Nov 2007",
            "yValue0": 4.55,
            "yValue1": 5.71,
            "yValue2": 4.74
        },
        {
            "xValue": "Dec 2007",
            "yValue0": 4.70,
            "yValue1": 6.06,
            "yValue2": 4.97
        },
        {
            "xValue": "Jan 2008",
            "yValue0": 4.67,
            "yValue1": 6.03,
            "yValue2": 4.95
        },
        {
            "xValue": "Feb 2008",
            "yValue0": 4.68,
            "yValue1": 5.99,
            "yValue2": 4.86
        },
        {
            "xValue": "Mar 2008",
            "yValue0": 4.83,
            "yValue1": 6.34,
            "yValue2": 5.04
        },
        {
            "xValue": "Apr 2008",
            "yValue0": 4.76,
            "yValue1": 6.27,
            "yValue2": 5.04
        },
        {
            "xValue": "May 2008",
            "yValue0": 5.17,
            "yValue1": 6.79,
            "yValue2": 5.39
        },
        {
            "xValue": "Jun 2008",
            "yValue0": 5.27,
            "yValue1": 6.97,
            "yValue2": 5.54
        },
        {
            "xValue": "Jul 2008",
            "yValue0": 5.51,
            "yValue1": 7.28,
            "yValue2": 5.75
        },
        {
            "xValue": "Aug 2008",
            "yValue0": 5.82,
            "yValue1": 7.78,
            "yValue2": 6.10
        },
        {
            "xValue": "Sep 2008",
            "yValue0": 5.87,
            "yValue1": 7.97,
            "yValue2": 6.20
        },
        {
            "xValue": "Oct 2008",
            "yValue0": 6.05,
            "yValue1": 8.28,
            "yValue2": 6.48
        },
        {
            "xValue": "Nov 2008",
            "yValue0": 6.42,
            "yValue1": 8.60,
            "yValue2": 6.87
        },
        {
            "xValue": "Dec 2008",
            "yValue0": 6.73,
            "yValue1": 9.20,
            "yValue2": 7.31
        },
        {
            "xValue": "Jan 2009",
            "yValue0": 7.01,
            "yValue1": 9.64,
            "yValue2": 7.83
        },
        {
            "xValue": "Feb 2009",
            "yValue0": 7.44,
            "yValue1": 10.14,
            "yValue2": 8.37
        },
        {
            "xValue": "Mar 2009",
            "yValue0": 7.65,
            "yValue1": 10.52,
            "yValue2": 8.73
        },
        {
            "xValue": "Apr 2009",
            "yValue0": 7.95,
            "yValue1": 10.71,
            "yValue2": 9.02
        },
        {
            "xValue": "May 2009",
            "yValue0": 8.28,
            "yValue1": 11.17,
            "yValue2": 9.41
        },
        {
            "xValue": "Jun 2009",
            "yValue0": 8.36,
            "yValue1": 11.25,
            "yValue2": 9.44
        },
        {
            "xValue": "Jul 2009",
            "yValue0": 8.32,
            "yValue1": 11.25,
            "yValue2": 9.32
        },
        {
            "xValue": "Aug 2009",
            "yValue0": 8.49,
            "yValue1": 11.41,
            "yValue2": 9.55
        },
        {
            "xValue": "Sep 2009",
            "yValue0": 8.82,
            "yValue1": 11.78,
            "yValue2": 9.80
        },
        {
            "xValue": "Oct 2009",
            "yValue0": 8.96,
            "yValue1": 11.95,
            "yValue2": 10.02
        },
        {
            "xValue": "Nov 2009",
            "yValue0": 8.91,
            "yValue1": 12.01,
            "yValue2": 9.95
        },
        {
            "xValue": "Dec 2009",
            "yValue0": 9.04,
            "yValue1": 12.00,
            "yValue2": 9.96
        },
        {
            "xValue": "Jan 2010",
            "yValue0": 9.36,
            "yValue1": 12.04,
            "yValue2": 9.82
        },
        {
            "xValue": "Feb 2010",
            "yValue0": 9.50,
            "yValue1": 12.11,
            "yValue2": 9.84
        },
        {
            "xValue": "Mar 2010",
            "yValue0": 9.85,
            "yValue1": 12.23,
            "yValue2": 9.92
        },
        {
            "xValue": "Apr 2010",
            "yValue0": 9.75,
            "yValue1": 12.41,
            "yValue2": 9.98
        },
        {
            "xValue": "May 2010",
            "yValue0": 9.68,
            "yValue1": 12.27,
            "yValue2": 9.60
        },
        {
            "xValue": "Jun 2010",
            "yValue0": 9.47,
            "yValue1": 11.91,
            "yValue2": 9.33
        },
        {
            "xValue": "Jul 2010",
            "yValue0": 9.63,
            "yValue1": 12.12,
            "yValue2": 9.32
        },
        {
            "xValue": "Aug 2010",
            "yValue0": 9.71,
            "yValue1": 12.18,
            "yValue2": 9.42
        },
        {
            "xValue": "Sep 2010",
            "yValue0": 9.87,
            "yValue1": 12.25,
            "yValue2": 9.46
        },
        {
            "xValue": "Oct 2010",
            "yValue0": 9.73,
            "yValue1": 12.18,
            "yValue2": 9.43
        },
        {
            "xValue": "Nov 2010",
            "yValue0": 10.15,
            "yValue1": 12.63,
            "yValue2": 9.83
        },
        {
            "xValue": "Dec 2010",
            "yValue0": 9.82,
            "yValue1": 12.28,
            "yValue2": 9.34
        },
        {
            "xValue": "Jan 2011",
            "yValue0": 9.30,
            "yValue1": 12.00,
            "yValue2": 9.14
        },
        {
            "xValue": "Feb 2011",
            "yValue0": 9.43,
            "yValue1": 11.77,
            "yValue2": 9.02
        },
        {
            "xValue": "Mar 2011",
            "yValue0": 9.51,
            "yValue1": 11.80,
            "yValue2": 8.95
        },
        {
            "xValue": "Apr 2011",
            "yValue0": 9.65,
            "yValue1": 11.95,
            "yValue2": 9.18
        },
        {
            "xValue": "May 2011",
            "yValue0": 9.55,
            "yValue1": 11.85,
            "yValue2": 8.98
        },
        {
            "xValue": "Jun 2011",
            "yValue0": 9.57,
            "yValue1": 11.89,
            "yValue2": 9.03
        },
        {
            "xValue": "Jul 2011",
            "yValue0": 9.39,
            "yValue1": 11.69,
            "yValue2": 8.91
        },
        {
            "xValue": "Aug 2011",
            "yValue0": 9.36,
            "yValue1": 11.73,
            "yValue2": 8.98
        },
        {
            "xValue": "Sep 2011",
            "yValue0": 9.49,
            "yValue1": 11.83,
            "yValue2": 9.04
        },
        {
            "xValue": "Oct 2011",
            "yValue0": 9.41,
            "yValue1": 11.53,
            "yValue2": 8.89
        },
        {
            "xValue": "Nov 2011",
            "yValue0": 9.10,
            "yValue1": 11.28,
            "yValue2": 8.65
        },
        {
            "xValue": "Dec 2011",
            "yValue0": 8.95,
            "yValue1": 11.17,
            "yValue2": 8.55
        },
        {
            "xValue": "Jan 2012",
            "yValue0": 8.43,
            "yValue1": 10.86,
            "yValue2": 8.23
        },
        {
            "xValue": "Feb 2012",
            "yValue0": 8.68,
            "yValue1": 10.93,
            "yValue2": 8.29
        },
        {
            "xValue": "Mar 2012",
            "yValue0": 8.70,
            "yValue1": 10.78,
            "yValue2": 8.19
        },
        {
            "xValue": "Apr 2012",
            "yValue0": 8.84,
            "yValue1": 10.76,
            "yValue2": 8.16
        },
        {
            "xValue": "May 2012",
            "yValue0": 8.79,
            "yValue1": 10.74,
            "yValue2": 8.16
        },
        {
            "xValue": "Jun 2012",
            "yValue0": 8.64,
            "yValue1": 10.48,
            "yValue2": 8.14
        },
        {
            "xValue": "Jul 2012",
            "yValue0": 8.45,
            "yValue1": 10.38,
            "yValue2": 8.20
        },
        {
            "xValue": "Aug 2012",
            "yValue0": 8.32,
            "yValue1": 10.22,
            "yValue2": 8.06
        },
        {
            "xValue": "Sep 2012",
            "yValue0": 7.98,
            "yValue1": 9.88,
            "yValue2": 7.81
        },
        {
            "xValue": "Oct 2012",
            "yValue0": 7.95,
            "yValue1": 9.88,
            "yValue2": 7.84
        },
        {
            "xValue": "Nov 2012",
            "yValue0": 7.87,
            "yValue1": 9.72,
            "yValue2": 7.79
        },
        {
            "xValue": "Dec 2012",
            "yValue0": 7.86,
            "yValue1": 9.78,
            "yValue2": 7.86
        },
        {
            "xValue": "Jan 2013",
            "yValue0": 7.71,
            "yValue1": 9.72,
            "yValue2": 7.95
        },
        {
            "xValue": "Feb 2013",
            "yValue0": 7.53,
            "yValue1": 9.39,
            "yValue2": 7.72
        },
        {
            "xValue": "Mar 2013",
            "yValue0": 7.37,
            "yValue1": 9.11,
            "yValue2": 7.41
        },
        {
            "xValue": "Apr 2013",
            "yValue0": 7.27,
            "yValue1": 9.13,
            "yValue2": 7.55
        },
        {
            "xValue": "May 2013",
            "yValue0": 7.26,
            "yValue1": 9.11,
            "yValue2": 7.55
        },
        {
            "xValue": "Jun 2013",
            "yValue0": 7.42,
            "yValue1": 9.09,
            "yValue2": 7.55
        },
        {
            "xValue": "Jul 2013",
            "yValue0": 7.33,
            "yValue1": 8.89,
            "yValue2": 7.30
        },
        {
            "xValue": "Aug 2013",
            "yValue0": 7.19,
            "yValue1": 8.71,
            "yValue2": 7.15
        },
        {
            "xValue": "Sep 2013",
            "yValue0": 7.11,
            "yValue1": 8.76,
            "yValue2": 7.21
        },
        {
            "xValue": "Oct 2013",
            "yValue0": 7.07,
            "yValue1": 8.66,
            "yValue2": 7.33
        },
        {
            "xValue": "Nov 2013",
            "yValue0": 6.85,
            "yValue1": 8.39,
            "yValue2": 6.96
        },
        {
            "xValue": "Dec 2013",
            "yValue0": 6.47,
            "yValue1": 8.18,
            "yValue2": 6.76
        },
        {
            "xValue": "Jan 2014",
            "yValue0": 6.35,
            "yValue1": 7.98,
            "yValue2": 6.53
        },
        {
            "xValue": "Feb 2014",
            "yValue0": 6.54,
            "yValue1": 8.12,
            "yValue2": 6.66
        },
        {
            "xValue": "Mar 2014",
            "yValue0": 6.39,
            "yValue1": 8.04,
            "yValue2": 6.63
        },
        {
            "xValue": "Apr 2014",
            "yValue0": 6.00,
            "yValue1": 7.69,
            "yValue2": 6.30
        },
        {
            "xValue": "May 2014",
            "yValue0": 6.19,
            "yValue1": 7.70,
            "yValue2": 6.33
        },
        {
            "xValue": "Jun 2014",
            "yValue0": 5.99,
            "yValue1": 7.39,
            "yValue2": 6.08
        },
        {
            "xValue": "Jul 2014",
            "yValue0": 6.13,
            "yValue1": 7.52,
            "yValue2": 6.13
        },
        {
            "xValue": "Aug 2014",
            "yValue0": 6.18,
            "yValue1": 7.40,
            "yValue2": 6.16
        },
        {
            "xValue": "Sep 2014",
            "yValue0": 6.12,
            "yValue1": 7.22,
            "yValue2": 5.88
        },
        {
            "xValue": "Oct 2014",
            "yValue0": 5.89,
            "yValue1": 7.05,
            "yValue2": 5.78
        },
        {
            "xValue": "Nov 2014",
            "yValue0": 6.08,
            "yValue1": 7.08,
            "yValue2": 5.82
        },
        {
            "xValue": "Dec 2014",
            "yValue0": 5.69,
            "yValue1": 6.78,
            "yValue2": 5.65
        },
        {
            "xValue": "Jan 2015",
            "yValue0": 5.59,
            "yValue1": 6.82,
            "yValue2": 5.67
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
            "yValue2": 5.45
        },
        {
            "xValue": "Apr 2015",
            "yValue0": 5.35,
            "yValue1": 6.44,
            "yValue2": 5.45
        },
        {
            "xValue": "May 2015",
            "yValue0": 5.47,
            "yValue1": 6.60,
            "yValue2": 5.54
        },
        {
            "xValue": "Jun 2015",
            "yValue0": 5.16,
            "yValue1": 6.18,
            "yValue2": 5.27
        },
        {
            "xValue": "Jul 2015",
            "yValue0": 5.14,
            "yValue1": 6.07,
            "yValue2": 5.25
        },
        {
            "xValue": "Aug 2015",
            "yValue0": 5.05,
            "yValue1": 5.88,
            "yValue2": 5.05
        },
        {
            "xValue": "Sep 2015",
            "yValue0": 4.99,
            "yValue1": 5.89,
            "yValue2": 5.05
        },
        {
            "xValue": "Oct 2015",
            "yValue0": 5.25,
            "yValue1": 5.86,
            "yValue2": 5.07
        },
        {
            "xValue": "Nov 2015",
            "yValue0": 5.54,
            "yValue1": 5.89,
            "yValue2": 5.12
        },
        {
            "xValue": "Dec 2015",
            "yValue0": 5.31,
            "yValue1": 5.79,
            "yValue2": 5.06
        },
        {
            "xValue": "Jan 2016",
            "yValue0": 5.08,
            "yValue1": 5.58,
            "yValue2": 4.92
        },
        {
            "xValue": "Feb 2016",
            "yValue0": 5.03,
            "yValue1": 5.60,
            "yValue2": 4.93
        },
        {
            "xValue": "Mar 2016",
            "yValue0": 5.12,
            "yValue1": 5.65,
            "yValue2": 4.98
        },
        {
            "xValue": "Apr 2016",
            "yValue0": 5.12,
            "yValue1": 5.60,
            "yValue2": 5.03
        },
        {
            "xValue": "May 2016",
            "yValue0": 4.96,
            "yValue1": 5.46,
            "yValue2": 4.72
        },
        {
            "xValue": "Jun 2016",
            "yValue0": 5.03,
            "yValue1": 5.44,
            "yValue2": 4.84
        },
        {
            "xValue": "Jul 2016",
            "yValue0": 4.91,
            "yValue1": 5.35,
            "yValue2": 4.73
        },
        {
            "xValue": "Aug 2016",
            "yValue0": 4.93,
            "yValue1": 5.33,
            "yValue2": 4.80
        },
        {
            "xValue": "Sep 2016",
            "yValue0": 5.16,
            "yValue1": 5.49,
            "yValue2": 4.95
        },
        {
            "xValue": "Oct 2016",
            "yValue0": 5.13,
            "yValue1": 5.47,
            "yValue2": 4.98
        },
        {
            "xValue": "Nov 2016",
            "yValue0": 5.13,
            "yValue1": 5.33,
            "yValue2": 4.76
        },
        {
            "xValue": "Dec 2016",
            "yValue0": 5.39,
            "yValue1": 5.32,
            "yValue2": 4.81
        },
        {
            "xValue": "Jan 2017",
            "yValue0": 5.12,
            "yValue1": 5.34,
            "yValue2": 4.77
        },
        {
            "xValue": "Feb 2017",
            "yValue0": 5.08,
            "yValue1": 5.24,
            "yValue2": 4.68
        },
        {
            "xValue": "Mar 2017",
            "yValue0": 4.78,
            "yValue1": 4.96,
            "yValue2": 4.51
        },
        {
            "xValue": "Apr 2017",
            "yValue0": 4.50,
            "yValue1": 4.94,
            "yValue2": 4.36
        },
        {
            "xValue": "May 2017",
            "yValue0": 4.52,
            "yValue1": 4.80,
            "yValue2": 4.28
        },
        {
            "xValue": "Jun 2017",
            "yValue0": 4.33,
            "yValue1": 4.68,
            "yValue2": 4.18
        },
        {
            "xValue": "Jul 2017",
            "yValue0": 4.37,
            "yValue1": 4.63,
            "yValue2": 4.19
        },
        {
            "xValue": "Aug 2017",
            "yValue0": 4.40,
            "yValue1": 4.69,
            "yValue2": 4.27
        },
        {
            "xValue": "Sep 2017",
            "yValue0": 4.31,
            "yValue1": 4.59,
            "yValue2": 4.23
        },
        {
            "xValue": "Oct 2017",
            "yValue0": 4.24,
            "yValue1": 4.47,
            "yValue2": 4.15
        },
        {
            "xValue": "Nov 2017",
            "yValue0": 4.39,
            "yValue1": 4.59,
            "yValue2": 4.31
        },
        {
            "xValue": "Dec 2017",
            "yValue0": 4.33,
            "yValue1": 4.54,
            "yValue2": 4.24
        },
        {
            "xValue": "Jan 2018",
            "yValue0": 4.38,
            "yValue1": 4.53,
            "yValue2": 4.25
        },
        {
            "xValue": "Feb 2018",
            "yValue0": 4.23,
            "yValue1": 4.50,
            "yValue2": 4.26
        },
        {
            "xValue": "Mar 2018",
            "yValue0": 4.22,
            "yValue1": 4.40,
            "yValue2": 4.06
        },
        {
            "xValue": "Apr 2018",
            "yValue0": 3.98,
            "yValue1": 4.15,
            "yValue2": 3.90
        },
        {
            "xValue": "May 2018",
            "yValue0": 3.65,
            "yValue1": 4.00,
            "yValue2": 3.70
        },
        {
            "xValue": "Jun 2018",
            "yValue0": 3.85,
            "yValue1": 4.14,
            "yValue2": 3.83
        },
        {
            "xValue": "Jul 2018",
            "yValue0": 3.72,
            "yValue1": 4.02,
            "yValue2": 3.67
        },
        {
            "xValue": "Aug 2018",
            "yValue0": 3.75,
            "yValue1": 4.08,
            "yValue2": 3.65
        },
        {
            "xValue": "Sep 2018",
            "yValue0": 3.77,
            "yValue1": 4.10,
            "yValue2": 3.71
        },
        {
            "xValue": "Oct 2018",
            "yValue0": 3.85,
            "yValue1": 4.19,
            "yValue2": 3.75
        },
        {
            "xValue": "Nov 2018",
            "yValue0": 3.93,
            "yValue1": 4.35,
            "yValue2": 3.95
        },
        {
            "xValue": "Dec 2018",
            "yValue0": 4.25,
            "yValue1": 4.49,
            "yValue2": 4.10
        },
        {
            "xValue": "Jan 2019",
            "yValue0": 4.41,
            "yValue1": 4.70,
            "yValue2": 4.23
        },
        {
            "xValue": "Feb 2019",
            "yValue0": 4.18,
            "yValue1": 4.45,
            "yValue2": 4.02
        },
        {
            "xValue": "Mar 2019",
            "yValue0": 4.21,
            "yValue1": 4.42,
            "yValue2": 3.90
        },
        {
            "xValue": "Apr 2019",
            "yValue0": 3.45,
            "yValue1": 3.88,
            "yValue2": 3.44
        },
        {
            "xValue": "May 2019",
            "yValue0": 3.35,
            "yValue1": 3.83,
            "yValue2": 3.43
        },
        {
            "xValue": "Jun 2019",
            "yValue0": 3.28,
            "yValue1": 3.80,
            "yValue2": 3.41
        },
        {
            "xValue": "Jul 2019",
            "yValue0": 3.39,
            "yValue1": 3.87,
            "yValue2": 3.53
        },
        {
            "xValue": "Aug 2019",
            "yValue0": 3.43,
            "yValue1": 3.86,
            "yValue2": 3.52
        },
        {
            "xValue": "Sep 2019",
            "yValue0": 3.45,
            "yValue1": 3.81,
            "yValue2": 3.41
        },
        {
            "xValue": "Oct 2019",
            "yValue0": 3.57,
            "yValue1": 3.91,
            "yValue2": 3.57
        },
        {
            "xValue": "Nov 2019",
            "yValue0": 3.66,
            "yValue1": 4.08,
            "yValue2": 3.79
        },
        {
            "xValue": "Dec 2019",
            "yValue0": 3.72,
            "yValue1": 4.00,
            "yValue2": 3.83
        },
        {
            "xValue": "Jan 2020",
            "yValue0": 3.95,
            "yValue1": 4.25,
            "yValue2": 3.88
        },
        {
            "xValue": "Feb 2020",
            "yValue0": 4.05,
            "yValue1": 4.29,
            "yValue2": 3.78
        },
        {
            "xValue": "Mar 2020",
            "yValue0": 5.12,
            "yValue1": 5.72,
            "yValue2": 4.53
        },
        {
            "xValue": "Apr 2020",
            "yValue0": 13.78,
            "yValue1": 16.29,
            "yValue2": 14.83
        },
        {
            "xValue": "May 2020",
            "yValue0": 14.60,
            "yValue1": 16.73,
            "yValue2": 12.88
        }
    ],
});