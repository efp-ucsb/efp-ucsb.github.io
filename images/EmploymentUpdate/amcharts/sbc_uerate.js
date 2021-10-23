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
            "yValue2": 4.27
        },
        {
            "xValue": "Feb 1990",
            "yValue0": 5.00,
            "yValue1": 4.38,
            "yValue2": 4.36
        },
        {
            "xValue": "Mar 1990",
            "yValue0": 5.10,
            "yValue1": 4.52,
            "yValue2": 4.46
        },
        {
            "xValue": "Apr 1990",
            "yValue0": 4.60,
            "yValue1": 4.89,
            "yValue2": 4.55
        },
        {
            "xValue": "May 1990",
            "yValue0": 4.00,
            "yValue1": 4.59,
            "yValue2": 4.65
        },
        {
            "xValue": "Jun 1990",
            "yValue0": 4.30,
            "yValue1": 4.68,
            "yValue2": 4.75
        },
        {
            "xValue": "Jul 1990",
            "yValue0": 4.70,
            "yValue1": 4.95,
            "yValue2": 4.89
        },
        {
            "xValue": "Aug 1990",
            "yValue0": 4.70,
            "yValue1": 5.01,
            "yValue2": 5.05
        },
        {
            "xValue": "Sep 1990",
            "yValue0": 5.00,
            "yValue1": 5.20,
            "yValue2": 5.21
        },
        {
            "xValue": "Oct 1990",
            "yValue0": 4.80,
            "yValue1": 5.09,
            "yValue2": 5.37
        },
        {
            "xValue": "Nov 1990",
            "yValue0": 5.60,
            "yValue1": 5.56,
            "yValue2": 5.51
        },
        {
            "xValue": "Dec 1990",
            "yValue0": 5.90,
            "yValue1": 5.68,
            "yValue2": 5.62
        },
        {
            "xValue": "Jan 1991",
            "yValue0": 6.50,
            "yValue1": 5.59,
            "yValue2": 5.70
        },
        {
            "xValue": "Feb 1991",
            "yValue0": 6.60,
            "yValue1": 5.79,
            "yValue2": 5.77
        },
        {
            "xValue": "Mar 1991",
            "yValue0": 6.60,
            "yValue1": 5.86,
            "yValue2": 5.80
        },
        {
            "xValue": "Apr 1991",
            "yValue0": 5.50,
            "yValue1": 5.84,
            "yValue2": 5.83
        },
        {
            "xValue": "May 1991",
            "yValue0": 5.10,
            "yValue1": 5.85,
            "yValue2": 5.87
        },
        {
            "xValue": "Jun 1991",
            "yValue0": 5.70,
            "yValue1": 6.20,
            "yValue2": 5.91
        },
        {
            "xValue": "Jul 1991",
            "yValue0": 5.60,
            "yValue1": 5.90,
            "yValue2": 5.98
        },
        {
            "xValue": "Aug 1991",
            "yValue0": 5.40,
            "yValue1": 5.75,
            "yValue2": 6.05
        },
        {
            "xValue": "Sep 1991",
            "yValue0": 6.00,
            "yValue1": 6.24,
            "yValue2": 6.16
        },
        {
            "xValue": "Oct 1991",
            "yValue0": 5.90,
            "yValue1": 6.25,
            "yValue2": 6.28
        },
        {
            "xValue": "Nov 1991",
            "yValue0": 6.40,
            "yValue1": 6.35,
            "yValue2": 6.42
        },
        {
            "xValue": "Dec 1991",
            "yValue0": 6.80,
            "yValue1": 6.55,
            "yValue2": 6.56
        },
        {
            "xValue": "Jan 1992",
            "yValue0": 7.90,
            "yValue1": 6.75,
            "yValue2": 6.72
        },
        {
            "xValue": "Feb 1992",
            "yValue0": 8.30,
            "yValue1": 7.29,
            "yValue2": 6.88
        },
        {
            "xValue": "Mar 1992",
            "yValue0": 7.90,
            "yValue1": 7.04,
            "yValue2": 7.04
        },
        {
            "xValue": "Apr 1992",
            "yValue0": 6.50,
            "yValue1": 6.90,
            "yValue2": 7.20
        },
        {
            "xValue": "May 1992",
            "yValue0": 6.40,
            "yValue1": 7.35,
            "yValue2": 7.35
        },
        {
            "xValue": "Jun 1992",
            "yValue0": 6.90,
            "yValue1": 7.52,
            "yValue2": 7.50
        },
        {
            "xValue": "Jul 1992",
            "yValue0": 7.20,
            "yValue1": 7.60,
            "yValue2": 7.62
        },
        {
            "xValue": "Aug 1992",
            "yValue0": 7.60,
            "yValue1": 8.08,
            "yValue2": 7.73
        },
        {
            "xValue": "Sep 1992",
            "yValue0": 7.50,
            "yValue1": 7.81,
            "yValue2": 7.80
        },
        {
            "xValue": "Oct 1992",
            "yValue0": 7.40,
            "yValue1": 7.85,
            "yValue2": 7.84
        },
        {
            "xValue": "Nov 1992",
            "yValue0": 7.90,
            "yValue1": 7.84,
            "yValue2": 7.83
        },
        {
            "xValue": "Dec 1992",
            "yValue0": 8.10,
            "yValue1": 7.82,
            "yValue2": 7.78
        },
        {
            "xValue": "Jan 1993",
            "yValue0": 9.20,
            "yValue1": 7.79,
            "yValue2": 7.74
        },
        {
            "xValue": "Feb 1993",
            "yValue0": 8.70,
            "yValue1": 7.65,
            "yValue2": 7.73
        },
        {
            "xValue": "Mar 1993",
            "yValue0": 8.40,
            "yValue1": 7.50,
            "yValue2": 7.76
        },
        {
            "xValue": "Apr 1993",
            "yValue0": 7.30,
            "yValue1": 7.74,
            "yValue2": 7.83
        },
        {
            "xValue": "May 1993",
            "yValue0": 7.00,
            "yValue1": 8.07,
            "yValue2": 7.90
        },
        {
            "xValue": "Jun 1993",
            "yValue0": 7.40,
            "yValue1": 8.11,
            "yValue2": 7.95
        },
        {
            "xValue": "Jul 1993",
            "yValue0": 7.50,
            "yValue1": 7.93,
            "yValue2": 7.96
        },
        {
            "xValue": "Aug 1993",
            "yValue0": 7.40,
            "yValue1": 7.87,
            "yValue2": 7.91
        },
        {
            "xValue": "Sep 1993",
            "yValue0": 7.40,
            "yValue1": 7.71,
            "yValue2": 7.82
        },
        {
            "xValue": "Oct 1993",
            "yValue0": 7.40,
            "yValue1": 7.88,
            "yValue2": 7.72
        },
        {
            "xValue": "Nov 1993",
            "yValue0": 7.70,
            "yValue1": 7.60,
            "yValue2": 7.66
        },
        {
            "xValue": "Dec 1993",
            "yValue0": 7.80,
            "yValue1": 7.54,
            "yValue2": 7.62
        },
        {
            "xValue": "Jan 1994",
            "yValue0": 9.00,
            "yValue1": 7.52,
            "yValue2": 7.59
        },
        {
            "xValue": "Feb 1994",
            "yValue0": 8.70,
            "yValue1": 7.65,
            "yValue2": 7.55
        },
        {
            "xValue": "Mar 1994",
            "yValue0": 8.50,
            "yValue1": 7.58,
            "yValue2": 7.52
        },
        {
            "xValue": "Apr 1994",
            "yValue0": 7.10,
            "yValue1": 7.51,
            "yValue2": 7.47
        },
        {
            "xValue": "May 1994",
            "yValue0": 6.30,
            "yValue1": 7.32,
            "yValue2": 7.43
        },
        {
            "xValue": "Jun 1994",
            "yValue0": 6.60,
            "yValue1": 7.29,
            "yValue2": 7.38
        },
        {
            "xValue": "Jul 1994",
            "yValue0": 7.00,
            "yValue1": 7.43,
            "yValue2": 7.32
        },
        {
            "xValue": "Aug 1994",
            "yValue0": 6.80,
            "yValue1": 7.26,
            "yValue2": 7.26
        },
        {
            "xValue": "Sep 1994",
            "yValue0": 7.00,
            "yValue1": 7.32,
            "yValue2": 7.20
        },
        {
            "xValue": "Oct 1994",
            "yValue0": 6.60,
            "yValue1": 7.05,
            "yValue2": 7.11
        },
        {
            "xValue": "Nov 1994",
            "yValue0": 7.10,
            "yValue1": 6.96,
            "yValue2": 7.01
        },
        {
            "xValue": "Dec 1994",
            "yValue0": 7.20,
            "yValue1": 6.95,
            "yValue2": 6.93
        },
        {
            "xValue": "Jan 1995",
            "yValue0": 8.40,
            "yValue1": 6.94,
            "yValue2": 6.89
        },
        {
            "xValue": "Feb 1995",
            "yValue0": 7.60,
            "yValue1": 6.64,
            "yValue2": 6.87
        },
        {
            "xValue": "Mar 1995",
            "yValue0": 7.30,
            "yValue1": 6.48,
            "yValue2": 6.87
        },
        {
            "xValue": "Apr 1995",
            "yValue0": 6.60,
            "yValue1": 6.98,
            "yValue2": 6.88
        },
        {
            "xValue": "May 1995",
            "yValue0": 5.90,
            "yValue1": 6.94,
            "yValue2": 6.88
        },
        {
            "xValue": "Jun 1995",
            "yValue0": 6.10,
            "yValue1": 6.82,
            "yValue2": 6.86
        },
        {
            "xValue": "Jul 1995",
            "yValue0": 6.30,
            "yValue1": 6.72,
            "yValue2": 6.81
        },
        {
            "xValue": "Aug 1995",
            "yValue0": 6.40,
            "yValue1": 6.87,
            "yValue2": 6.74
        },
        {
            "xValue": "Sep 1995",
            "yValue0": 6.30,
            "yValue1": 6.60,
            "yValue2": 6.66
        },
        {
            "xValue": "Oct 1995",
            "yValue0": 6.10,
            "yValue1": 6.55,
            "yValue2": 6.57
        },
        {
            "xValue": "Nov 1995",
            "yValue0": 6.70,
            "yValue1": 6.52,
            "yValue2": 6.47
        },
        {
            "xValue": "Dec 1995",
            "yValue0": 6.60,
            "yValue1": 6.33,
            "yValue2": 6.35
        },
        {
            "xValue": "Jan 1996",
            "yValue0": 7.70,
            "yValue1": 6.31,
            "yValue2": 6.24
        },
        {
            "xValue": "Feb 1996",
            "yValue0": 7.00,
            "yValue1": 6.07,
            "yValue2": 6.13
        },
        {
            "xValue": "Mar 1996",
            "yValue0": 6.80,
            "yValue1": 6.00,
            "yValue2": 6.04
        },
        {
            "xValue": "Apr 1996",
            "yValue0": 5.60,
            "yValue1": 5.91,
            "yValue2": 5.96
        },
        {
            "xValue": "May 1996",
            "yValue0": 5.00,
            "yValue1": 5.97,
            "yValue2": 5.90
        },
        {
            "xValue": "Jun 1996",
            "yValue0": 5.20,
            "yValue1": 5.88,
            "yValue2": 5.85
        },
        {
            "xValue": "Jul 1996",
            "yValue0": 5.40,
            "yValue1": 5.80,
            "yValue2": 5.82
        },
        {
            "xValue": "Aug 1996",
            "yValue0": 5.30,
            "yValue1": 5.72,
            "yValue2": 5.79
        },
        {
            "xValue": "Sep 1996",
            "yValue0": 5.50,
            "yValue1": 5.77,
            "yValue2": 5.76
        },
        {
            "xValue": "Oct 1996",
            "yValue0": 5.30,
            "yValue1": 5.73,
            "yValue2": 5.73
        },
        {
            "xValue": "Nov 1996",
            "yValue0": 6.00,
            "yValue1": 5.81,
            "yValue2": 5.70
        },
        {
            "xValue": "Dec 1996",
            "yValue0": 5.80,
            "yValue1": 5.53,
            "yValue2": 5.65
        },
        {
            "xValue": "Jan 1997",
            "yValue0": 6.90,
            "yValue1": 5.62,
            "yValue2": 5.57
        },
        {
            "xValue": "Feb 1997",
            "yValue0": 6.40,
            "yValue1": 5.50,
            "yValue2": 5.45
        },
        {
            "xValue": "Mar 1997",
            "yValue0": 6.10,
            "yValue1": 5.35,
            "yValue2": 5.32
        },
        {
            "xValue": "Apr 1997",
            "yValue0": 4.90,
            "yValue1": 5.18,
            "yValue2": 5.18
        },
        {
            "xValue": "May 1997",
            "yValue0": 4.10,
            "yValue1": 4.96,
            "yValue2": 5.04
        },
        {
            "xValue": "Jun 1997",
            "yValue0": 4.30,
            "yValue1": 4.89,
            "yValue2": 4.93
        },
        {
            "xValue": "Jul 1997",
            "yValue0": 4.60,
            "yValue1": 4.96,
            "yValue2": 4.86
        },
        {
            "xValue": "Aug 1997",
            "yValue0": 4.40,
            "yValue1": 4.76,
            "yValue2": 4.83
        },
        {
            "xValue": "Sep 1997",
            "yValue0": 4.50,
            "yValue1": 4.72,
            "yValue2": 4.82
        },
        {
            "xValue": "Oct 1997",
            "yValue0": 4.60,
            "yValue1": 5.02,
            "yValue2": 4.82
        },
        {
            "xValue": "Nov 1997",
            "yValue0": 5.00,
            "yValue1": 4.82,
            "yValue2": 4.81
        },
        {
            "xValue": "Dec 1997",
            "yValue0": 5.10,
            "yValue1": 4.85,
            "yValue2": 4.78
        },
        {
            "xValue": "Jan 1998",
            "yValue0": 5.70,
            "yValue1": 4.64,
            "yValue2": 4.72
        },
        {
            "xValue": "Feb 1998",
            "yValue0": 5.50,
            "yValue1": 4.71,
            "yValue2": 4.65
        },
        {
            "xValue": "Mar 1998",
            "yValue0": 5.70,
            "yValue1": 4.97,
            "yValue2": 4.56
        },
        {
            "xValue": "Apr 1998",
            "yValue0": 4.20,
            "yValue1": 4.43,
            "yValue2": 4.47
        },
        {
            "xValue": "May 1998",
            "yValue0": 3.60,
            "yValue1": 4.39,
            "yValue2": 4.41
        },
        {
            "xValue": "Jun 1998",
            "yValue0": 3.80,
            "yValue1": 4.31,
            "yValue2": 4.36
        },
        {
            "xValue": "Jul 1998",
            "yValue0": 3.80,
            "yValue1": 4.11,
            "yValue2": 4.33
        },
        {
            "xValue": "Aug 1998",
            "yValue0": 4.00,
            "yValue1": 4.31,
            "yValue2": 4.32
        },
        {
            "xValue": "Sep 1998",
            "yValue0": 4.20,
            "yValue1": 4.42,
            "yValue2": 4.33
        },
        {
            "xValue": "Oct 1998",
            "yValue0": 3.90,
            "yValue1": 4.27,
            "yValue2": 4.34
        },
        {
            "xValue": "Nov 1998",
            "yValue0": 4.40,
            "yValue1": 4.23,
            "yValue2": 4.34
        },
        {
            "xValue": "Dec 1998",
            "yValue0": 4.70,
            "yValue1": 4.46,
            "yValue2": 4.35
        },
        {
            "xValue": "Jan 1999",
            "yValue0": 5.30,
            "yValue1": 4.34,
            "yValue2": 4.33
        },
        {
            "xValue": "Feb 1999",
            "yValue0": 5.00,
            "yValue1": 4.30,
            "yValue2": 4.29
        },
        {
            "xValue": "Mar 1999",
            "yValue0": 4.80,
            "yValue1": 4.17,
            "yValue2": 4.20
        },
        {
            "xValue": "Apr 1999",
            "yValue0": 4.00,
            "yValue1": 4.22,
            "yValue2": 4.08
        },
        {
            "xValue": "May 1999",
            "yValue0": 3.20,
            "yValue1": 3.91,
            "yValue2": 3.96
        },
        {
            "xValue": "Jun 1999",
            "yValue0": 3.40,
            "yValue1": 3.82,
            "yValue2": 3.85
        },
        {
            "xValue": "Jul 1999",
            "yValue0": 3.40,
            "yValue1": 3.66,
            "yValue2": 3.78
        },
        {
            "xValue": "Aug 1999",
            "yValue0": 3.50,
            "yValue1": 3.73,
            "yValue2": 3.74
        },
        {
            "xValue": "Sep 1999",
            "yValue0": 3.70,
            "yValue1": 3.92,
            "yValue2": 3.74
        },
        {
            "xValue": "Oct 1999",
            "yValue0": 3.40,
            "yValue1": 3.73,
            "yValue2": 3.78
        },
        {
            "xValue": "Nov 1999",
            "yValue0": 3.70,
            "yValue1": 3.55,
            "yValue2": 3.85
        },
        {
            "xValue": "Dec 1999",
            "yValue0": 4.00,
            "yValue1": 3.79,
            "yValue2": 3.94
        },
        {
            "xValue": "Jan 2000",
            "yValue0": 5.10,
            "yValue1": 4.22,
            "yValue2": 4.04
        },
        {
            "xValue": "Feb 2000",
            "yValue0": 5.00,
            "yValue1": 4.35,
            "yValue2": 4.16
        },
        {
            "xValue": "Mar 2000",
            "yValue0": 5.00,
            "yValue1": 4.36,
            "yValue2": 4.28
        },
        {
            "xValue": "Apr 2000",
            "yValue0": 4.00,
            "yValue1": 4.21,
            "yValue2": 4.40
        },
        {
            "xValue": "May 2000",
            "yValue0": 3.70,
            "yValue1": 4.51,
            "yValue2": 4.47
        },
        {
            "xValue": "Jun 2000",
            "yValue0": 4.10,
            "yValue1": 4.53,
            "yValue2": 4.51
        },
        {
            "xValue": "Jul 2000",
            "yValue0": 4.30,
            "yValue1": 4.60,
            "yValue2": 4.49
        },
        {
            "xValue": "Aug 2000",
            "yValue0": 4.30,
            "yValue1": 4.53,
            "yValue2": 4.43
        },
        {
            "xValue": "Sep 2000",
            "yValue0": 3.90,
            "yValue1": 4.15,
            "yValue2": 4.34
        },
        {
            "xValue": "Oct 2000",
            "yValue0": 3.80,
            "yValue1": 4.15,
            "yValue2": 4.24
        },
        {
            "xValue": "Nov 2000",
            "yValue0": 4.40,
            "yValue1": 4.20,
            "yValue2": 4.17
        },
        {
            "xValue": "Dec 2000",
            "yValue0": 4.30,
            "yValue1": 4.07,
            "yValue2": 4.14
        },
        {
            "xValue": "Jan 2001",
            "yValue0": 5.00,
            "yValue1": 4.20,
            "yValue2": 4.15
        },
        {
            "xValue": "Feb 2001",
            "yValue0": 4.70,
            "yValue1": 4.15,
            "yValue2": 4.17
        },
        {
            "xValue": "Mar 2001",
            "yValue0": 5.10,
            "yValue1": 4.48,
            "yValue2": 4.19
        },
        {
            "xValue": "Apr 2001",
            "yValue0": 4.10,
            "yValue1": 4.34,
            "yValue2": 4.21
        },
        {
            "xValue": "May 2001",
            "yValue0": 3.40,
            "yValue1": 4.11,
            "yValue2": 4.23
        },
        {
            "xValue": "Jun 2001",
            "yValue0": 3.90,
            "yValue1": 4.23,
            "yValue2": 4.27
        },
        {
            "xValue": "Jul 2001",
            "yValue0": 4.10,
            "yValue1": 4.34,
            "yValue2": 4.34
        },
        {
            "xValue": "Aug 2001",
            "yValue0": 4.30,
            "yValue1": 4.50,
            "yValue2": 4.44
        },
        {
            "xValue": "Sep 2001",
            "yValue0": 4.20,
            "yValue1": 4.50,
            "yValue2": 4.55
        },
        {
            "xValue": "Oct 2001",
            "yValue0": 4.30,
            "yValue1": 4.65,
            "yValue2": 4.65
        },
        {
            "xValue": "Nov 2001",
            "yValue0": 5.00,
            "yValue1": 4.77,
            "yValue2": 4.74
        },
        {
            "xValue": "Dec 2001",
            "yValue0": 5.20,
            "yValue1": 4.92,
            "yValue2": 4.83
        },
        {
            "xValue": "Jan 2002",
            "yValue0": 5.70,
            "yValue1": 4.86,
            "yValue2": 4.92
        },
        {
            "xValue": "Feb 2002",
            "yValue0": 5.50,
            "yValue1": 4.92,
            "yValue2": 5.01
        },
        {
            "xValue": "Mar 2002",
            "yValue0": 5.70,
            "yValue1": 5.04,
            "yValue2": 5.11
        },
        {
            "xValue": "Apr 2002",
            "yValue0": 5.00,
            "yValue1": 5.34,
            "yValue2": 5.19
        },
        {
            "xValue": "May 2002",
            "yValue0": 4.40,
            "yValue1": 5.27,
            "yValue2": 5.25
        },
        {
            "xValue": "Jun 2002",
            "yValue0": 5.00,
            "yValue1": 5.33,
            "yValue2": 5.29
        },
        {
            "xValue": "Jul 2002",
            "yValue0": 5.00,
            "yValue1": 5.21,
            "yValue2": 5.31
        },
        {
            "xValue": "Aug 2002",
            "yValue0": 5.10,
            "yValue1": 5.34,
            "yValue2": 5.32
        },
        {
            "xValue": "Sep 2002",
            "yValue0": 4.90,
            "yValue1": 5.26,
            "yValue2": 5.33
        },
        {
            "xValue": "Oct 2002",
            "yValue0": 5.00,
            "yValue1": 5.34,
            "yValue2": 5.33
        },
        {
            "xValue": "Nov 2002",
            "yValue0": 5.60,
            "yValue1": 5.35,
            "yValue2": 5.30
        },
        {
            "xValue": "Dec 2002",
            "yValue0": 5.70,
            "yValue1": 5.39,
            "yValue2": 5.24
        },
        {
            "xValue": "Jan 2003",
            "yValue0": 5.90,
            "yValue1": 5.09,
            "yValue2": 5.16
        },
        {
            "xValue": "Feb 2003",
            "yValue0": 5.60,
            "yValue1": 5.04,
            "yValue2": 5.10
        },
        {
            "xValue": "Mar 2003",
            "yValue0": 5.60,
            "yValue1": 5.00,
            "yValue2": 5.07
        },
        {
            "xValue": "Apr 2003",
            "yValue0": 4.60,
            "yValue1": 4.97,
            "yValue2": 5.08
        },
        {
            "xValue": "May 2003",
            "yValue0": 4.40,
            "yValue1": 5.22,
            "yValue2": 5.11
        },
        {
            "xValue": "Jun 2003",
            "yValue0": 5.10,
            "yValue1": 5.36,
            "yValue2": 5.15
        },
        {
            "xValue": "Jul 2003",
            "yValue0": 5.00,
            "yValue1": 5.14,
            "yValue2": 5.16
        },
        {
            "xValue": "Aug 2003",
            "yValue0": 4.90,
            "yValue1": 5.15,
            "yValue2": 5.14
        },
        {
            "xValue": "Sep 2003",
            "yValue0": 4.70,
            "yValue1": 5.05,
            "yValue2": 5.08
        },
        {
            "xValue": "Oct 2003",
            "yValue0": 5.00,
            "yValue1": 5.29,
            "yValue2": 5.01
        },
        {
            "xValue": "Nov 2003",
            "yValue0": 5.20,
            "yValue1": 5.01,
            "yValue2": 4.93
        },
        {
            "xValue": "Dec 2003",
            "yValue0": 5.10,
            "yValue1": 4.83,
            "yValue2": 4.88
        },
        {
            "xValue": "Jan 2004",
            "yValue0": 5.50,
            "yValue1": 4.77,
            "yValue2": 4.85
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
            "yValue2": 4.83
        },
        {
            "xValue": "Apr 2004",
            "yValue0": 4.40,
            "yValue1": 4.79,
            "yValue2": 4.83
        },
        {
            "xValue": "May 2004",
            "yValue0": 4.10,
            "yValue1": 4.83,
            "yValue2": 4.81
        },
        {
            "xValue": "Jun 2004",
            "yValue0": 4.60,
            "yValue1": 4.79,
            "yValue2": 4.77
        },
        {
            "xValue": "Jul 2004",
            "yValue0": 4.70,
            "yValue1": 4.77,
            "yValue2": 4.71
        },
        {
            "xValue": "Aug 2004",
            "yValue0": 4.30,
            "yValue1": 4.53,
            "yValue2": 4.67
        },
        {
            "xValue": "Sep 2004",
            "yValue0": 4.30,
            "yValue1": 4.59,
            "yValue2": 4.64
        },
        {
            "xValue": "Oct 2004",
            "yValue0": 4.50,
            "yValue1": 4.74,
            "yValue2": 4.64
        },
        {
            "xValue": "Nov 2004",
            "yValue0": 4.70,
            "yValue1": 4.57,
            "yValue2": 4.65
        },
        {
            "xValue": "Dec 2004",
            "yValue0": 4.90,
            "yValue1": 4.66,
            "yValue2": 4.65
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
            "yValue1": 4.66,
            "yValue2": 4.57
        },
        {
            "xValue": "Mar 2005",
            "yValue0": 4.90,
            "yValue1": 4.46,
            "yValue2": 4.48
        },
        {
            "xValue": "Apr 2005",
            "yValue0": 3.90,
            "yValue1": 4.27,
            "yValue2": 4.39
        },
        {
            "xValue": "May 2005",
            "yValue0": 3.70,
            "yValue1": 4.32,
            "yValue2": 4.31
        },
        {
            "xValue": "Jun 2005",
            "yValue0": 4.10,
            "yValue1": 4.25,
            "yValue2": 4.25
        },
        {
            "xValue": "Jul 2005",
            "yValue0": 4.20,
            "yValue1": 4.22,
            "yValue2": 4.21
        },
        {
            "xValue": "Aug 2005",
            "yValue0": 3.90,
            "yValue1": 4.11,
            "yValue2": 4.20
        },
        {
            "xValue": "Sep 2005",
            "yValue0": 4.00,
            "yValue1": 4.25,
            "yValue2": 4.19
        },
        {
            "xValue": "Oct 2005",
            "yValue0": 4.00,
            "yValue1": 4.21,
            "yValue2": 4.18
        },
        {
            "xValue": "Nov 2005",
            "yValue0": 4.40,
            "yValue1": 4.34,
            "yValue2": 4.15
        },
        {
            "xValue": "Dec 2005",
            "yValue0": 4.30,
            "yValue1": 4.12,
            "yValue2": 4.13
        },
        {
            "xValue": "Jan 2006",
            "yValue0": 4.60,
            "yValue1": 3.98,
            "yValue2": 4.09
        },
        {
            "xValue": "Feb 2006",
            "yValue0": 4.60,
            "yValue1": 4.11,
            "yValue2": 4.06
        },
        {
            "xValue": "Mar 2006",
            "yValue0": 4.40,
            "yValue1": 4.03,
            "yValue2": 4.05
        },
        {
            "xValue": "Apr 2006",
            "yValue0": 3.90,
            "yValue1": 4.27,
            "yValue2": 4.05
        },
        {
            "xValue": "May 2006",
            "yValue0": 3.40,
            "yValue1": 3.94,
            "yValue2": 4.05
        },
        {
            "xValue": "Jun 2006",
            "yValue0": 3.90,
            "yValue1": 4.04,
            "yValue2": 4.06
        },
        {
            "xValue": "Jul 2006",
            "yValue0": 4.10,
            "yValue1": 4.11,
            "yValue2": 4.05
        },
        {
            "xValue": "Aug 2006",
            "yValue0": 3.90,
            "yValue1": 4.09,
            "yValue2": 4.03
        },
        {
            "xValue": "Sep 2006",
            "yValue0": 3.80,
            "yValue1": 4.02,
            "yValue2": 4.01
        },
        {
            "xValue": "Oct 2006",
            "yValue0": 3.70,
            "yValue1": 3.90,
            "yValue2": 3.99
        },
        {
            "xValue": "Nov 2006",
            "yValue0": 4.00,
            "yValue1": 4.01,
            "yValue2": 4.00
        },
        {
            "xValue": "Dec 2006",
            "yValue0": 4.10,
            "yValue1": 3.95,
            "yValue2": 4.03
        },
        {
            "xValue": "Jan 2007",
            "yValue0": 4.80,
            "yValue1": 4.14,
            "yValue2": 4.08
        },
        {
            "xValue": "Feb 2007",
            "yValue0": 4.70,
            "yValue1": 4.20,
            "yValue2": 4.13
        },
        {
            "xValue": "Mar 2007",
            "yValue0": 4.50,
            "yValue1": 4.13,
            "yValue2": 4.17
        },
        {
            "xValue": "Apr 2007",
            "yValue0": 3.90,
            "yValue1": 4.25,
            "yValue2": 4.19
        },
        {
            "xValue": "May 2007",
            "yValue0": 3.60,
            "yValue1": 4.14,
            "yValue2": 4.22
        },
        {
            "xValue": "Jun 2007",
            "yValue0": 4.10,
            "yValue1": 4.25,
            "yValue2": 4.25
        },
        {
            "xValue": "Jul 2007",
            "yValue0": 4.30,
            "yValue1": 4.30,
            "yValue2": 4.30
        },
        {
            "xValue": "Aug 2007",
            "yValue0": 4.20,
            "yValue1": 4.38,
            "yValue2": 4.35
        },
        {
            "xValue": "Sep 2007",
            "yValue0": 4.20,
            "yValue1": 4.43,
            "yValue2": 4.40
        },
        {
            "xValue": "Oct 2007",
            "yValue0": 4.20,
            "yValue1": 4.43,
            "yValue2": 4.45
        },
        {
            "xValue": "Nov 2007",
            "yValue0": 4.40,
            "yValue1": 4.46,
            "yValue2": 4.50
        },
        {
            "xValue": "Dec 2007",
            "yValue0": 4.90,
            "yValue1": 4.73,
            "yValue2": 4.54
        },
        {
            "xValue": "Jan 2008",
            "yValue0": 5.40,
            "yValue1": 4.66,
            "yValue2": 4.60
        },
        {
            "xValue": "Feb 2008",
            "yValue0": 5.10,
            "yValue1": 4.58,
            "yValue2": 4.67
        },
        {
            "xValue": "Mar 2008",
            "yValue0": 5.20,
            "yValue1": 4.80,
            "yValue2": 4.77
        },
        {
            "xValue": "Apr 2008",
            "yValue0": 4.40,
            "yValue1": 4.75,
            "yValue2": 4.91
        },
        {
            "xValue": "May 2008",
            "yValue0": 4.50,
            "yValue1": 5.12,
            "yValue2": 5.08
        },
        {
            "xValue": "Jun 2008",
            "yValue0": 5.10,
            "yValue1": 5.27,
            "yValue2": 5.27
        },
        {
            "xValue": "Jul 2008",
            "yValue0": 5.50,
            "yValue1": 5.52,
            "yValue2": 5.49
        },
        {
            "xValue": "Aug 2008",
            "yValue0": 5.60,
            "yValue1": 5.81,
            "yValue2": 5.72
        },
        {
            "xValue": "Sep 2008",
            "yValue0": 5.60,
            "yValue1": 5.88,
            "yValue2": 5.97
        },
        {
            "xValue": "Oct 2008",
            "yValue0": 5.90,
            "yValue1": 6.20,
            "yValue2": 6.26
        },
        {
            "xValue": "Nov 2008",
            "yValue0": 6.40,
            "yValue1": 6.55,
            "yValue2": 6.57
        },
        {
            "xValue": "Dec 2008",
            "yValue0": 7.20,
            "yValue1": 6.96,
            "yValue2": 6.92
        },
        {
            "xValue": "Jan 2009",
            "yValue0": 8.40,
            "yValue1": 7.28,
            "yValue2": 7.29
        },
        {
            "xValue": "Feb 2009",
            "yValue0": 8.50,
            "yValue1": 7.70,
            "yValue2": 7.66
        },
        {
            "xValue": "Mar 2009",
            "yValue0": 8.60,
            "yValue1": 7.96,
            "yValue2": 8.00
        },
        {
            "xValue": "Apr 2009",
            "yValue0": 7.70,
            "yValue1": 8.27,
            "yValue2": 8.29
        },
        {
            "xValue": "May 2009",
            "yValue0": 7.70,
            "yValue1": 8.68,
            "yValue2": 8.52
        },
        {
            "xValue": "Jun 2009",
            "yValue0": 8.50,
            "yValue1": 8.77,
            "yValue2": 8.72
        },
        {
            "xValue": "Jul 2009",
            "yValue0": 8.60,
            "yValue1": 8.64,
            "yValue2": 8.88
        },
        {
            "xValue": "Aug 2009",
            "yValue0": 8.60,
            "yValue1": 8.88,
            "yValue2": 9.01
        },
        {
            "xValue": "Sep 2009",
            "yValue0": 8.80,
            "yValue1": 9.23,
            "yValue2": 9.13
        },
        {
            "xValue": "Oct 2009",
            "yValue0": 9.00,
            "yValue1": 9.41,
            "yValue2": 9.25
        },
        {
            "xValue": "Nov 2009",
            "yValue0": 9.00,
            "yValue1": 9.27,
            "yValue2": 9.39
        },
        {
            "xValue": "Dec 2009",
            "yValue0": 9.80,
            "yValue1": 9.45,
            "yValue2": 9.55
        },
        {
            "xValue": "Jan 2010",
            "yValue0": 11.10,
            "yValue1": 9.65,
            "yValue2": 9.70
        },
        {
            "xValue": "Feb 2010",
            "yValue0": 10.80,
            "yValue1": 9.85,
            "yValue2": 9.83
        },
        {
            "xValue": "Mar 2010",
            "yValue0": 10.80,
            "yValue1": 10.05,
            "yValue2": 9.90
        },
        {
            "xValue": "Apr 2010",
            "yValue0": 9.40,
            "yValue1": 10.09,
            "yValue2": 9.93
        },
        {
            "xValue": "May 2010",
            "yValue0": 8.80,
            "yValue1": 9.86,
            "yValue2": 9.91
        },
        {
            "xValue": "Jun 2010",
            "yValue0": 9.40,
            "yValue1": 9.66,
            "yValue2": 9.88
        },
        {
            "xValue": "Jul 2010",
            "yValue0": 9.80,
            "yValue1": 9.85,
            "yValue2": 9.88
        },
        {
            "xValue": "Aug 2010",
            "yValue0": 9.60,
            "yValue1": 9.89,
            "yValue2": 9.91
        },
        {
            "xValue": "Sep 2010",
            "yValue0": 9.60,
            "yValue1": 10.07,
            "yValue2": 9.95
        },
        {
            "xValue": "Oct 2010",
            "yValue0": 9.60,
            "yValue1": 9.97,
            "yValue2": 9.96
        },
        {
            "xValue": "Nov 2010",
            "yValue0": 10.10,
            "yValue1": 10.41,
            "yValue2": 9.92
        },
        {
            "xValue": "Dec 2010",
            "yValue0": 10.30,
            "yValue1": 9.92,
            "yValue2": 9.84
        },
        {
            "xValue": "Jan 2011",
            "yValue0": 10.90,
            "yValue1": 9.51,
            "yValue2": 9.76
        },
        {
            "xValue": "Feb 2011",
            "yValue0": 10.40,
            "yValue1": 9.51,
            "yValue2": 9.70
        },
        {
            "xValue": "Mar 2011",
            "yValue0": 10.30,
            "yValue1": 9.64,
            "yValue2": 9.68
        },
        {
            "xValue": "Apr 2011",
            "yValue0": 9.10,
            "yValue1": 9.79,
            "yValue2": 9.68
        },
        {
            "xValue": "May 2011",
            "yValue0": 8.70,
            "yValue1": 9.75,
            "yValue2": 9.69
        },
        {
            "xValue": "Jun 2011",
            "yValue0": 9.50,
            "yValue1": 9.75,
            "yValue2": 9.68
        },
        {
            "xValue": "Jul 2011",
            "yValue0": 9.50,
            "yValue1": 9.50,
            "yValue2": 9.66
        },
        {
            "xValue": "Aug 2011",
            "yValue0": 9.30,
            "yValue1": 9.54,
            "yValue2": 9.61
        },
        {
            "xValue": "Sep 2011",
            "yValue0": 9.20,
            "yValue1": 9.69,
            "yValue2": 9.54
        },
        {
            "xValue": "Oct 2011",
            "yValue0": 9.20,
            "yValue1": 9.55,
            "yValue2": 9.43
        },
        {
            "xValue": "Nov 2011",
            "yValue0": 9.00,
            "yValue1": 9.25,
            "yValue2": 9.30
        },
        {
            "xValue": "Dec 2011",
            "yValue0": 9.50,
            "yValue1": 9.14,
            "yValue2": 9.16
        },
        {
            "xValue": "Jan 2012",
            "yValue0": 9.90,
            "yValue1": 8.63,
            "yValue2": 9.03
        },
        {
            "xValue": "Feb 2012",
            "yValue0": 9.70,
            "yValue1": 8.84,
            "yValue2": 8.95
        },
        {
            "xValue": "Mar 2012",
            "yValue0": 9.40,
            "yValue1": 8.83,
            "yValue2": 8.93
        },
        {
            "xValue": "Apr 2012",
            "yValue0": 8.30,
            "yValue1": 8.98,
            "yValue2": 8.91
        },
        {
            "xValue": "May 2012",
            "yValue0": 8.00,
            "yValue1": 9.02,
            "yValue2": 8.88
        },
        {
            "xValue": "Jun 2012",
            "yValue0": 8.60,
            "yValue1": 8.81,
            "yValue2": 8.79
        },
        {
            "xValue": "Jul 2012",
            "yValue0": 8.70,
            "yValue1": 8.67,
            "yValue2": 8.65
        },
        {
            "xValue": "Aug 2012",
            "yValue0": 8.30,
            "yValue1": 8.49,
            "yValue2": 8.47
        },
        {
            "xValue": "Sep 2012",
            "yValue0": 7.70,
            "yValue1": 8.17,
            "yValue2": 8.30
        },
        {
            "xValue": "Oct 2012",
            "yValue0": 7.80,
            "yValue1": 8.11,
            "yValue2": 8.14
        },
        {
            "xValue": "Nov 2012",
            "yValue0": 7.80,
            "yValue1": 8.01,
            "yValue2": 8.01
        },
        {
            "xValue": "Dec 2012",
            "yValue0": 8.30,
            "yValue1": 7.97,
            "yValue2": 7.87
        },
        {
            "xValue": "Jan 2013",
            "yValue0": 9.00,
            "yValue1": 7.80,
            "yValue2": 7.74
        },
        {
            "xValue": "Feb 2013",
            "yValue0": 8.40,
            "yValue1": 7.60,
            "yValue2": 7.62
        },
        {
            "xValue": "Mar 2013",
            "yValue0": 7.90,
            "yValue1": 7.40,
            "yValue2": 7.52
        },
        {
            "xValue": "Apr 2013",
            "yValue0": 6.80,
            "yValue1": 7.41,
            "yValue2": 7.45
        },
        {
            "xValue": "May 2013",
            "yValue0": 6.50,
            "yValue1": 7.41,
            "yValue2": 7.41
        },
        {
            "xValue": "Jun 2013",
            "yValue0": 7.30,
            "yValue1": 7.48,
            "yValue2": 7.38
        },
        {
            "xValue": "Jul 2013",
            "yValue0": 7.40,
            "yValue1": 7.34,
            "yValue2": 7.35
        },
        {
            "xValue": "Aug 2013",
            "yValue0": 7.10,
            "yValue1": 7.25,
            "yValue2": 7.29
        },
        {
            "xValue": "Sep 2013",
            "yValue0": 6.70,
            "yValue1": 7.20,
            "yValue2": 7.19
        },
        {
            "xValue": "Oct 2013",
            "yValue0": 6.80,
            "yValue1": 7.12,
            "yValue2": 7.06
        },
        {
            "xValue": "Nov 2013",
            "yValue0": 6.80,
            "yValue1": 6.99,
            "yValue2": 6.91
        },
        {
            "xValue": "Dec 2013",
            "yValue0": 6.90,
            "yValue1": 6.59,
            "yValue2": 6.76
        },
        {
            "xValue": "Jan 2014",
            "yValue0": 7.60,
            "yValue1": 6.52,
            "yValue2": 6.61
        },
        {
            "xValue": "Feb 2014",
            "yValue0": 7.40,
            "yValue1": 6.61,
            "yValue2": 6.47
        },
        {
            "xValue": "Mar 2014",
            "yValue0": 6.90,
            "yValue1": 6.41,
            "yValue2": 6.36
        },
        {
            "xValue": "Apr 2014",
            "yValue0": 5.60,
            "yValue1": 6.13,
            "yValue2": 6.28
        },
        {
            "xValue": "May 2014",
            "yValue0": 5.40,
            "yValue1": 6.25,
            "yValue2": 6.22
        },
        {
            "xValue": "Jun 2014",
            "yValue0": 5.90,
            "yValue1": 6.05,
            "yValue2": 6.19
        },
        {
            "xValue": "Jul 2014",
            "yValue0": 6.30,
            "yValue1": 6.25,
            "yValue2": 6.17
        },
        {
            "xValue": "Aug 2014",
            "yValue0": 6.10,
            "yValue1": 6.24,
            "yValue2": 6.14
        },
        {
            "xValue": "Sep 2014",
            "yValue0": 5.60,
            "yValue1": 6.11,
            "yValue2": 6.10
        },
        {
            "xValue": "Oct 2014",
            "yValue0": 5.60,
            "yValue1": 5.94,
            "yValue2": 6.01
        },
        {
            "xValue": "Nov 2014",
            "yValue0": 5.90,
            "yValue1": 6.11,
            "yValue2": 5.89
        },
        {
            "xValue": "Dec 2014",
            "yValue0": 6.00,
            "yValue1": 5.72,
            "yValue2": 5.76
        },
        {
            "xValue": "Jan 2015",
            "yValue0": 6.70,
            "yValue1": 5.67,
            "yValue2": 5.63
        },
        {
            "xValue": "Feb 2015",
            "yValue0": 6.20,
            "yValue1": 5.44,
            "yValue2": 5.52
        },
        {
            "xValue": "Mar 2015",
            "yValue0": 5.70,
            "yValue1": 5.21,
            "yValue2": 5.42
        },
        {
            "xValue": "Apr 2015",
            "yValue0": 4.90,
            "yValue1": 5.35,
            "yValue2": 5.34
        },
        {
            "xValue": "May 2015",
            "yValue0": 4.80,
            "yValue1": 5.66,
            "yValue2": 5.28
        },
        {
            "xValue": "Jun 2015",
            "yValue0": 5.10,
            "yValue1": 5.23,
            "yValue2": 5.22
        },
        {
            "xValue": "Jul 2015",
            "yValue0": 5.20,
            "yValue1": 5.16,
            "yValue2": 5.19
        },
        {
            "xValue": "Aug 2015",
            "yValue0": 5.00,
            "yValue1": 5.13,
            "yValue2": 5.18
        },
        {
            "xValue": "Sep 2015",
            "yValue0": 4.60,
            "yValue1": 5.10,
            "yValue2": 5.18
        },
        {
            "xValue": "Oct 2015",
            "yValue0": 4.90,
            "yValue1": 5.29,
            "yValue2": 5.20
        },
        {
            "xValue": "Nov 2015",
            "yValue0": 5.30,
            "yValue1": 5.57,
            "yValue2": 5.21
        },
        {
            "xValue": "Dec 2015",
            "yValue0": 5.60,
            "yValue1": 5.35,
            "yValue2": 5.21
        },
        {
            "xValue": "Jan 2016",
            "yValue0": 6.10,
            "yValue1": 5.08,
            "yValue2": 5.18
        },
        {
            "xValue": "Feb 2016",
            "yValue0": 5.90,
            "yValue1": 5.11,
            "yValue2": 5.14
        },
        {
            "xValue": "Mar 2016",
            "yValue0": 5.70,
            "yValue1": 5.11,
            "yValue2": 5.08
        },
        {
            "xValue": "Apr 2016",
            "yValue0": 4.70,
            "yValue1": 5.10,
            "yValue2": 5.02
        },
        {
            "xValue": "May 2016",
            "yValue0": 4.10,
            "yValue1": 4.88,
            "yValue2": 4.98
        },
        {
            "xValue": "Jun 2016",
            "yValue0": 4.90,
            "yValue1": 5.00,
            "yValue2": 4.97
        },
        {
            "xValue": "Jul 2016",
            "yValue0": 5.00,
            "yValue1": 4.94,
            "yValue2": 4.99
        },
        {
            "xValue": "Aug 2016",
            "yValue0": 4.80,
            "yValue1": 4.94,
            "yValue2": 5.03
        },
        {
            "xValue": "Sep 2016",
            "yValue0": 4.60,
            "yValue1": 5.18,
            "yValue2": 5.09
        },
        {
            "xValue": "Oct 2016",
            "yValue0": 4.70,
            "yValue1": 5.18,
            "yValue2": 5.15
        },
        {
            "xValue": "Nov 2016",
            "yValue0": 4.80,
            "yValue1": 5.15,
            "yValue2": 5.18
        },
        {
            "xValue": "Dec 2016",
            "yValue0": 5.60,
            "yValue1": 5.43,
            "yValue2": 5.17
        },
        {
            "xValue": "Jan 2017",
            "yValue0": 6.20,
            "yValue1": 5.14,
            "yValue2": 5.10
        },
        {
            "xValue": "Feb 2017",
            "yValue0": 5.90,
            "yValue1": 5.07,
            "yValue2": 4.98
        },
        {
            "xValue": "Mar 2017",
            "yValue0": 5.50,
            "yValue1": 4.84,
            "yValue2": 4.82
        },
        {
            "xValue": "Apr 2017",
            "yValue0": 4.30,
            "yValue1": 4.58,
            "yValue2": 4.67
        },
        {
            "xValue": "May 2017",
            "yValue0": 3.80,
            "yValue1": 4.50,
            "yValue2": 4.53
        },
        {
            "xValue": "Jun 2017",
            "yValue0": 4.30,
            "yValue1": 4.31,
            "yValue2": 4.44
        },
        {
            "xValue": "Jul 2017",
            "yValue0": 4.50,
            "yValue1": 4.41,
            "yValue2": 4.38
        },
        {
            "xValue": "Aug 2017",
            "yValue0": 4.30,
            "yValue1": 4.45,
            "yValue2": 4.36
        },
        {
            "xValue": "Sep 2017",
            "yValue0": 3.80,
            "yValue1": 4.33,
            "yValue2": 4.36
        },
        {
            "xValue": "Oct 2017",
            "yValue0": 3.80,
            "yValue1": 4.29,
            "yValue2": 4.37
        },
        {
            "xValue": "Nov 2017",
            "yValue0": 4.00,
            "yValue1": 4.42,
            "yValue2": 4.39
        },
        {
            "xValue": "Dec 2017",
            "yValue0": 4.40,
            "yValue1": 4.36,
            "yValue2": 4.38
        },
        {
            "xValue": "Jan 2018",
            "yValue0": 5.30,
            "yValue1": 4.41,
            "yValue2": 4.32
        },
        {
            "xValue": "Feb 2018",
            "yValue0": 5.00,
            "yValue1": 4.30,
            "yValue2": 4.22
        },
        {
            "xValue": "Mar 2018",
            "yValue0": 4.70,
            "yValue1": 4.09,
            "yValue2": 4.07
        },
        {
            "xValue": "Apr 2018",
            "yValue0": 3.80,
            "yValue1": 3.95,
            "yValue2": 3.91
        },
        {
            "xValue": "May 2018",
            "yValue0": 3.10,
            "yValue1": 3.58,
            "yValue2": 3.78
        },
        {
            "xValue": "Jun 2018",
            "yValue0": 3.80,
            "yValue1": 3.71,
            "yValue2": 3.71
        },
        {
            "xValue": "Jul 2018",
            "yValue0": 3.80,
            "yValue1": 3.68,
            "yValue2": 3.69
        },
        {
            "xValue": "Aug 2018",
            "yValue0": 3.70,
            "yValue1": 3.82,
            "yValue2": 3.74
        },
        {
            "xValue": "Sep 2018",
            "yValue0": 3.30,
            "yValue1": 3.79,
            "yValue2": 3.84
        },
        {
            "xValue": "Oct 2018",
            "yValue0": 3.40,
            "yValue1": 3.93,
            "yValue2": 3.98
        },
        {
            "xValue": "Nov 2018",
            "yValue0": 3.50,
            "yValue1": 3.97,
            "yValue2": 4.11
        },
        {
            "xValue": "Dec 2018",
            "yValue0": 4.20,
            "yValue1": 4.28,
            "yValue2": 4.18
        },
        {
            "xValue": "Jan 2019",
            "yValue0": 5.20,
            "yValue1": 4.40,
            "yValue2": 4.15
        },
        {
            "xValue": "Feb 2019",
            "yValue0": 4.70,
            "yValue1": 4.07,
            "yValue2": 4.01
        },
        {
            "xValue": "Mar 2019",
            "yValue0": 4.60,
            "yValue1": 4.01,
            "yValue2": 3.79
        },
        {
            "xValue": "Apr 2019",
            "yValue0": 3.30,
            "yValue1": 3.32,
            "yValue2": 3.56
        },
        {
            "xValue": "May 2019",
            "yValue0": 2.90,
            "yValue1": 3.22,
            "yValue2": 3.38
        },
        {
            "xValue": "Jun 2019",
            "yValue0": 3.40,
            "yValue1": 3.23,
            "yValue2": 3.29
        },
        {
            "xValue": "Jul 2019",
            "yValue0": 3.60,
            "yValue1": 3.44,
            "yValue2": 3.29
        },
        {
            "xValue": "Aug 2019",
            "yValue0": 3.30,
            "yValue1": 3.40,
            "yValue2": 3.33
        },
        {
            "xValue": "Sep 2019",
            "yValue0": 3.00,
            "yValue1": 3.46,
            "yValue2": 3.39
        },
        {
            "xValue": "Oct 2019",
            "yValue0": 3.10,
            "yValue1": 3.66,
            "yValue2": 3.51
        },
        {
            "xValue": "Nov 2019",
            "yValue0": 3.30,
            "yValue1": 3.84,
            "yValue2": 3.78
        },
        {
            "xValue": "Dec 2019",
            "yValue0": 3.70,
            "yValue1": 3.85,
            "yValue2": 4.33
        },
        {
            "xValue": "Jan 2020",
            "yValue0": 4.60,
            "yValue1": 3.96,
            "yValue2": 5.20
        },
        {
            "xValue": "Feb 2020",
            "yValue0": 4.40,
            "yValue1": 3.87,
            "yValue2": 6.34
        },
        {
            "xValue": "Mar 2020",
            "yValue0": 4.90,
            "yValue1": 4.29,
            "yValue2": 7.54
        },
        {
            "xValue": "Apr 2020",
            "yValue0": 14.00,
            "yValue1": 13.75,
            "yValue2": 8.58
        },
        {
            "xValue": "May 2020",
            "yValue0": 12.40,
            "yValue1": 13.25,
            "yValue2": 9.27
        },
        {
            "xValue": "Jun 2020",
            "yValue0": 10.70,
            "yValue1": 9.94,
            "yValue2": 9.50
        },
        {
            "xValue": "Jul 2020",
            "yValue0": 9.60,
            "yValue1": 9.08,
            "yValue2": 9.36
        },
        {
            "xValue": "Aug 2020",
            "yValue0": 8.30,
            "yValue1": 8.51,
            "yValue2": 9.00
        },
        {
            "xValue": "Sep 2020",
            "yValue0": 7.50,
            "yValue1": 8.69,
            "yValue2": 8.57
        },
        {
            "xValue": "Oct 2020",
            "yValue0": 6.60,
            "yValue1": 7.90,
            "yValue2": 8.15
        },
        {
            "xValue": "Nov 2020",
            "yValue0": 5.70,
            "yValue1": 6.74,
            "yValue2": 7.75
        },
        {
            "xValue": "Dec 2020",
            "yValue0": 7.30,
            "yValue1": 7.72,
            "yValue2": 7.34
        },
        {
            "xValue": "Jan 2021",
            "yValue0": 7.80,
            "yValue1": 6.85,
            "yValue2": 6.90
        },
        {
            "xValue": "Feb 2021",
            "yValue0": 7.20,
            "yValue1": 6.42,
            "yValue2": 6.44
        },
        {
            "xValue": "Mar 2021",
            "yValue0": 6.60,
            "yValue1": 5.83,
            "yValue2": 6.03
        },
        {
            "xValue": "Apr 2021",
            "yValue0": 5.90,
            "yValue1": 5.67,
            "yValue2": 5.72
        },
        {
            "xValue": "May 2021",
            "yValue0": 5.40,
            "yValue1": 5.60,
            "yValue2": 5.52
        },
        {
            "xValue": "Jun 2021",
            "yValue0": 5.90,
            "yValue1": 5.39,
            "yValue2": 5.44
        },
        {
            "xValue": "Jul 2021",
            "yValue0": 5.70,
            "yValue1": 5.36,
            "yValue2": 5.44
        },
        {
            "xValue": "Aug 2021",
            "yValue0": 5.50,
            "yValue1": 5.63,
            "yValue2": 5.48
        },
        {
            "xValue": "Sep 2021",
            "yValue0": 4.70,
            "yValue1": 5.44,
            "yValue2": 5.54
        }
    ],
});