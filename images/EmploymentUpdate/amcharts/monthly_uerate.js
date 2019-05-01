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
            "yValue0": 3.84,
            "yValue1": 5.02,
            "yValue2": 5.31
        },
        {
            "xValue": "Feb 1990",
            "yValue0": 4.21,
            "yValue1": 4.92,
            "yValue2": 5.29
        },
        {
            "xValue": "Mar 1990",
            "yValue0": 4.39,
            "yValue1": 5.01,
            "yValue2": 5.21
        },
        {
            "xValue": "Apr 1990",
            "yValue0": 5.04,
            "yValue1": 5.53,
            "yValue2": 5.49
        },
        {
            "xValue": "May 1990",
            "yValue0": 4.85,
            "yValue1": 5.51,
            "yValue2": 5.38
        },
        {
            "xValue": "Jun 1990",
            "yValue0": 4.81,
            "yValue1": 5.30,
            "yValue2": 5.20
        },
        {
            "xValue": "Jul 1990",
            "yValue0": 5.09,
            "yValue1": 5.73,
            "yValue2": 5.58
        },
        {
            "xValue": "Aug 1990",
            "yValue0": 5.07,
            "yValue1": 5.96,
            "yValue2": 5.72
        },
        {
            "xValue": "Sep 1990",
            "yValue0": 5.23,
            "yValue1": 6.19,
            "yValue2": 5.88
        },
        {
            "xValue": "Oct 1990",
            "yValue0": 5.26,
            "yValue1": 6.36,
            "yValue2": 5.92
        },
        {
            "xValue": "Nov 1990",
            "yValue0": 5.60,
            "yValue1": 6.66,
            "yValue2": 6.16
        },
        {
            "xValue": "Dec 1990",
            "yValue0": 5.63,
            "yValue1": 6.91,
            "yValue2": 6.29
        },
        {
            "xValue": "Jan 1991",
            "yValue0": 5.52,
            "yValue1": 6.83,
            "yValue2": 6.39
        },
        {
            "xValue": "Feb 1991",
            "yValue0": 5.60,
            "yValue1": 7.23,
            "yValue2": 6.68
        },
        {
            "xValue": "Mar 1991",
            "yValue0": 5.69,
            "yValue1": 7.52,
            "yValue2": 6.91
        },
        {
            "xValue": "Apr 1991",
            "yValue0": 5.85,
            "yValue1": 7.53,
            "yValue2": 6.69
        },
        {
            "xValue": "May 1991",
            "yValue0": 5.86,
            "yValue1": 7.83,
            "yValue2": 6.90
        },
        {
            "xValue": "Jun 1991",
            "yValue0": 6.02,
            "yValue1": 7.70,
            "yValue2": 6.80
        },
        {
            "xValue": "Jul 1991",
            "yValue0": 5.88,
            "yValue1": 7.71,
            "yValue2": 6.75
        },
        {
            "xValue": "Aug 1991",
            "yValue0": 5.57,
            "yValue1": 7.74,
            "yValue2": 6.80
        },
        {
            "xValue": "Sep 1991",
            "yValue0": 6.13,
            "yValue1": 7.78,
            "yValue2": 6.79
        },
        {
            "xValue": "Oct 1991",
            "yValue0": 6.15,
            "yValue1": 8.03,
            "yValue2": 6.92
        },
        {
            "xValue": "Nov 1991",
            "yValue0": 6.20,
            "yValue1": 8.06,
            "yValue2": 7.00
        },
        {
            "xValue": "Dec 1991",
            "yValue0": 6.44,
            "yValue1": 8.33,
            "yValue2": 7.21
        },
        {
            "xValue": "Jan 1992",
            "yValue0": 6.57,
            "yValue1": 8.53,
            "yValue2": 7.38
        },
        {
            "xValue": "Feb 1992",
            "yValue0": 7.39,
            "yValue1": 8.76,
            "yValue2": 7.58
        },
        {
            "xValue": "Mar 1992",
            "yValue0": 6.99,
            "yValue1": 8.83,
            "yValue2": 7.50
        },
        {
            "xValue": "Apr 1992",
            "yValue0": 6.85,
            "yValue1": 8.81,
            "yValue2": 7.39
        },
        {
            "xValue": "May 1992",
            "yValue0": 7.19,
            "yValue1": 9.05,
            "yValue2": 7.50
        },
        {
            "xValue": "Jun 1992",
            "yValue0": 7.34,
            "yValue1": 9.51,
            "yValue2": 7.80
        },
        {
            "xValue": "Jul 1992",
            "yValue0": 7.48,
            "yValue1": 9.48,
            "yValue2": 7.61
        },
        {
            "xValue": "Aug 1992",
            "yValue0": 7.87,
            "yValue1": 9.61,
            "yValue2": 7.58
        },
        {
            "xValue": "Sep 1992",
            "yValue0": 7.73,
            "yValue1": 9.77,
            "yValue2": 7.59
        },
        {
            "xValue": "Oct 1992",
            "yValue0": 7.84,
            "yValue1": 9.60,
            "yValue2": 7.31
        },
        {
            "xValue": "Nov 1992",
            "yValue0": 7.81,
            "yValue1": 9.86,
            "yValue2": 7.43
        },
        {
            "xValue": "Dec 1992",
            "yValue0": 7.87,
            "yValue1": 9.88,
            "yValue2": 7.44
        },
        {
            "xValue": "Jan 1993",
            "yValue0": 8.02,
            "yValue1": 9.62,
            "yValue2": 7.27
        },
        {
            "xValue": "Feb 1993",
            "yValue0": 7.79,
            "yValue1": 9.70,
            "yValue2": 7.21
        },
        {
            "xValue": "Mar 1993",
            "yValue0": 7.39,
            "yValue1": 9.55,
            "yValue2": 7.10
        },
        {
            "xValue": "Apr 1993",
            "yValue0": 7.65,
            "yValue1": 9.60,
            "yValue2": 7.08
        },
        {
            "xValue": "May 1993",
            "yValue0": 7.82,
            "yValue1": 9.47,
            "yValue2": 7.01
        },
        {
            "xValue": "Jun 1993",
            "yValue0": 7.88,
            "yValue1": 9.54,
            "yValue2": 7.02
        },
        {
            "xValue": "Jul 1993",
            "yValue0": 7.78,
            "yValue1": 9.43,
            "yValue2": 6.87
        },
        {
            "xValue": "Aug 1993",
            "yValue0": 7.77,
            "yValue1": 9.38,
            "yValue2": 6.75
        },
        {
            "xValue": "Sep 1993",
            "yValue0": 7.63,
            "yValue1": 9.35,
            "yValue2": 6.69
        },
        {
            "xValue": "Oct 1993",
            "yValue0": 7.92,
            "yValue1": 9.57,
            "yValue2": 6.80
        },
        {
            "xValue": "Nov 1993",
            "yValue0": 7.59,
            "yValue1": 9.25,
            "yValue2": 6.55
        },
        {
            "xValue": "Dec 1993",
            "yValue0": 7.49,
            "yValue1": 9.12,
            "yValue2": 6.46
        },
        {
            "xValue": "Jan 1994",
            "yValue0": 7.55,
            "yValue1": 9.22,
            "yValue2": 6.57
        },
        {
            "xValue": "Feb 1994",
            "yValue0": 7.69,
            "yValue1": 9.16,
            "yValue2": 6.55
        },
        {
            "xValue": "Mar 1994",
            "yValue0": 7.50,
            "yValue1": 9.06,
            "yValue2": 6.50
        },
        {
            "xValue": "Apr 1994",
            "yValue0": 7.34,
            "yValue1": 8.98,
            "yValue2": 6.37
        },
        {
            "xValue": "May 1994",
            "yValue0": 7.14,
            "yValue1": 8.59,
            "yValue2": 6.12
        },
        {
            "xValue": "Jun 1994",
            "yValue0": 7.12,
            "yValue1": 8.66,
            "yValue2": 6.03
        },
        {
            "xValue": "Jul 1994",
            "yValue0": 7.28,
            "yValue1": 8.60,
            "yValue2": 6.04
        },
        {
            "xValue": "Aug 1994",
            "yValue0": 7.09,
            "yValue1": 8.56,
            "yValue2": 6.02
        },
        {
            "xValue": "Sep 1994",
            "yValue0": 7.15,
            "yValue1": 8.32,
            "yValue2": 5.87
        },
        {
            "xValue": "Oct 1994",
            "yValue0": 6.89,
            "yValue1": 8.25,
            "yValue2": 5.78
        },
        {
            "xValue": "Nov 1994",
            "yValue0": 6.86,
            "yValue1": 7.94,
            "yValue2": 5.65
        },
        {
            "xValue": "Dec 1994",
            "yValue0": 6.90,
            "yValue1": 7.74,
            "yValue2": 5.46
        },
        {
            "xValue": "Jan 1995",
            "yValue0": 7.11,
            "yValue1": 7.80,
            "yValue2": 5.49
        },
        {
            "xValue": "Feb 1995",
            "yValue0": 6.69,
            "yValue1": 7.61,
            "yValue2": 5.39
        },
        {
            "xValue": "Mar 1995",
            "yValue0": 6.51,
            "yValue1": 7.66,
            "yValue2": 5.40
        },
        {
            "xValue": "Apr 1995",
            "yValue0": 6.93,
            "yValue1": 8.07,
            "yValue2": 5.77
        },
        {
            "xValue": "May 1995",
            "yValue0": 6.95,
            "yValue1": 8.00,
            "yValue2": 5.75
        },
        {
            "xValue": "Jun 1995",
            "yValue0": 6.87,
            "yValue1": 7.88,
            "yValue2": 5.64
        },
        {
            "xValue": "Jul 1995",
            "yValue0": 6.70,
            "yValue1": 7.98,
            "yValue2": 5.71
        },
        {
            "xValue": "Aug 1995",
            "yValue0": 6.70,
            "yValue1": 7.94,
            "yValue2": 5.69
        },
        {
            "xValue": "Sep 1995",
            "yValue0": 6.55,
            "yValue1": 7.90,
            "yValue2": 5.63
        },
        {
            "xValue": "Oct 1995",
            "yValue0": 6.47,
            "yValue1": 7.82,
            "yValue2": 5.57
        },
        {
            "xValue": "Nov 1995",
            "yValue0": 6.42,
            "yValue1": 7.84,
            "yValue2": 5.64
        },
        {
            "xValue": "Dec 1995",
            "yValue0": 6.28,
            "yValue1": 7.74,
            "yValue2": 5.56
        },
        {
            "xValue": "Jan 1996",
            "yValue0": 6.31,
            "yValue1": 7.82,
            "yValue2": 5.63
        },
        {
            "xValue": "Feb 1996",
            "yValue0": 6.01,
            "yValue1": 7.66,
            "yValue2": 5.53
        },
        {
            "xValue": "Mar 1996",
            "yValue0": 5.93,
            "yValue1": 7.66,
            "yValue2": 5.51
        },
        {
            "xValue": "Apr 1996",
            "yValue0": 5.89,
            "yValue1": 7.56,
            "yValue2": 5.58
        },
        {
            "xValue": "May 1996",
            "yValue0": 5.85,
            "yValue1": 7.52,
            "yValue2": 5.66
        },
        {
            "xValue": "Jun 1996",
            "yValue0": 5.68,
            "yValue1": 7.19,
            "yValue2": 5.34
        },
        {
            "xValue": "Jul 1996",
            "yValue0": 5.73,
            "yValue1": 7.28,
            "yValue2": 5.41
        },
        {
            "xValue": "Aug 1996",
            "yValue0": 5.62,
            "yValue1": 6.93,
            "yValue2": 5.17
        },
        {
            "xValue": "Sep 1996",
            "yValue0": 5.64,
            "yValue1": 6.88,
            "yValue2": 5.20
        },
        {
            "xValue": "Oct 1996",
            "yValue0": 5.65,
            "yValue1": 6.89,
            "yValue2": 5.26
        },
        {
            "xValue": "Nov 1996",
            "yValue0": 5.79,
            "yValue1": 7.04,
            "yValue2": 5.33
        },
        {
            "xValue": "Dec 1996",
            "yValue0": 5.47,
            "yValue1": 6.91,
            "yValue2": 5.35
        },
        {
            "xValue": "Jan 1997",
            "yValue0": 5.65,
            "yValue1": 6.85,
            "yValue2": 5.27
        },
        {
            "xValue": "Feb 1997",
            "yValue0": 5.52,
            "yValue1": 6.80,
            "yValue2": 5.25
        },
        {
            "xValue": "Mar 1997",
            "yValue0": 5.35,
            "yValue1": 6.65,
            "yValue2": 5.21
        },
        {
            "xValue": "Apr 1997",
            "yValue0": 5.17,
            "yValue1": 6.46,
            "yValue2": 5.00
        },
        {
            "xValue": "May 1997",
            "yValue0": 4.93,
            "yValue1": 6.34,
            "yValue2": 4.97
        },
        {
            "xValue": "Jun 1997",
            "yValue0": 4.86,
            "yValue1": 6.39,
            "yValue2": 5.04
        },
        {
            "xValue": "Jul 1997",
            "yValue0": 4.94,
            "yValue1": 6.19,
            "yValue2": 4.80
        },
        {
            "xValue": "Aug 1997",
            "yValue0": 4.80,
            "yValue1": 6.22,
            "yValue2": 4.85
        },
        {
            "xValue": "Sep 1997",
            "yValue0": 4.74,
            "yValue1": 6.27,
            "yValue2": 4.87
        },
        {
            "xValue": "Oct 1997",
            "yValue0": 4.95,
            "yValue1": 6.06,
            "yValue2": 4.75
        },
        {
            "xValue": "Nov 1997",
            "yValue0": 4.87,
            "yValue1": 5.93,
            "yValue2": 4.62
        },
        {
            "xValue": "Dec 1997",
            "yValue0": 4.86,
            "yValue1": 6.17,
            "yValue2": 4.73
        },
        {
            "xValue": "Jan 1998",
            "yValue0": 4.62,
            "yValue1": 6.00,
            "yValue2": 4.61
        },
        {
            "xValue": "Feb 1998",
            "yValue0": 4.66,
            "yValue1": 5.92,
            "yValue2": 4.57
        },
        {
            "xValue": "Mar 1998",
            "yValue0": 4.87,
            "yValue1": 6.14,
            "yValue2": 4.71
        },
        {
            "xValue": "Apr 1998",
            "yValue0": 4.44,
            "yValue1": 5.77,
            "yValue2": 4.31
        },
        {
            "xValue": "May 1998",
            "yValue0": 4.40,
            "yValue1": 5.97,
            "yValue2": 4.48
        },
        {
            "xValue": "Jun 1998",
            "yValue0": 4.42,
            "yValue1": 5.97,
            "yValue2": 4.53
        },
        {
            "xValue": "Jul 1998",
            "yValue0": 4.24,
            "yValue1": 5.92,
            "yValue2": 4.51
        },
        {
            "xValue": "Aug 1998",
            "yValue0": 4.36,
            "yValue1": 6.00,
            "yValue2": 4.53
        },
        {
            "xValue": "Sep 1998",
            "yValue0": 4.45,
            "yValue1": 5.96,
            "yValue2": 4.55
        },
        {
            "xValue": "Oct 1998",
            "yValue0": 4.25,
            "yValue1": 6.04,
            "yValue2": 4.54
        },
        {
            "xValue": "Nov 1998",
            "yValue0": 4.16,
            "yValue1": 5.81,
            "yValue2": 4.41
        },
        {
            "xValue": "Dec 1998",
            "yValue0": 4.37,
            "yValue1": 5.74,
            "yValue2": 4.31
        },
        {
            "xValue": "Jan 1999",
            "yValue0": 4.22,
            "yValue1": 5.54,
            "yValue2": 4.24
        },
        {
            "xValue": "Feb 1999",
            "yValue0": 4.22,
            "yValue1": 5.54,
            "yValue2": 4.29
        },
        {
            "xValue": "Mar 1999",
            "yValue0": 4.08,
            "yValue1": 5.34,
            "yValue2": 4.10
        },
        {
            "xValue": "Apr 1999",
            "yValue0": 4.23,
            "yValue1": 5.37,
            "yValue2": 4.31
        },
        {
            "xValue": "May 1999",
            "yValue0": 4.07,
            "yValue1": 5.19,
            "yValue2": 4.29
        },
        {
            "xValue": "Jun 1999",
            "yValue0": 3.95,
            "yValue1": 5.25,
            "yValue2": 4.33
        },
        {
            "xValue": "Jul 1999",
            "yValue0": 3.82,
            "yValue1": 5.24,
            "yValue2": 4.32
        },
        {
            "xValue": "Aug 1999",
            "yValue0": 3.71,
            "yValue1": 5.06,
            "yValue2": 4.22
        },
        {
            "xValue": "Sep 1999",
            "yValue0": 3.97,
            "yValue1": 5.19,
            "yValue2": 4.26
        },
        {
            "xValue": "Oct 1999",
            "yValue0": 3.74,
            "yValue1": 5.13,
            "yValue2": 4.13
        },
        {
            "xValue": "Nov 1999",
            "yValue0": 3.45,
            "yValue1": 4.99,
            "yValue2": 4.09
        },
        {
            "xValue": "Dec 1999",
            "yValue0": 3.75,
            "yValue1": 5.01,
            "yValue2": 4.00
        },
        {
            "xValue": "Jan 2000",
            "yValue0": 4.13,
            "yValue1": 4.87,
            "yValue2": 3.95
        },
        {
            "xValue": "Feb 2000",
            "yValue0": 4.29,
            "yValue1": 5.07,
            "yValue2": 3.99
        },
        {
            "xValue": "Mar 2000",
            "yValue0": 4.42,
            "yValue1": 5.05,
            "yValue2": 4.01
        },
        {
            "xValue": "Apr 2000",
            "yValue0": 4.32,
            "yValue1": 4.87,
            "yValue2": 3.90
        },
        {
            "xValue": "May 2000",
            "yValue0": 4.64,
            "yValue1": 5.30,
            "yValue2": 4.09
        },
        {
            "xValue": "Jun 2000",
            "yValue0": 4.56,
            "yValue1": 5.02,
            "yValue2": 3.93
        },
        {
            "xValue": "Jul 2000",
            "yValue0": 4.78,
            "yValue1": 5.06,
            "yValue2": 4.03
        },
        {
            "xValue": "Aug 2000",
            "yValue0": 4.56,
            "yValue1": 5.04,
            "yValue2": 4.11
        },
        {
            "xValue": "Sep 2000",
            "yValue0": 4.19,
            "yValue1": 4.83,
            "yValue2": 3.98
        },
        {
            "xValue": "Oct 2000",
            "yValue0": 4.22,
            "yValue1": 4.73,
            "yValue2": 3.94
        },
        {
            "xValue": "Nov 2000",
            "yValue0": 4.24,
            "yValue1": 4.76,
            "yValue2": 3.97
        },
        {
            "xValue": "Dec 2000",
            "yValue0": 4.05,
            "yValue1": 4.69,
            "yValue2": 3.99
        },
        {
            "xValue": "Jan 2001",
            "yValue0": 4.13,
            "yValue1": 4.79,
            "yValue2": 4.14
        },
        {
            "xValue": "Feb 2001",
            "yValue0": 4.08,
            "yValue1": 4.79,
            "yValue2": 4.20
        },
        {
            "xValue": "Mar 2001",
            "yValue0": 4.45,
            "yValue1": 4.96,
            "yValue2": 4.23
        },
        {
            "xValue": "Apr 2001",
            "yValue0": 4.35,
            "yValue1": 4.97,
            "yValue2": 4.39
        },
        {
            "xValue": "May 2001",
            "yValue0": 4.21,
            "yValue1": 5.08,
            "yValue2": 4.39
        },
        {
            "xValue": "Jun 2001",
            "yValue0": 4.28,
            "yValue1": 5.20,
            "yValue2": 4.52
        },
        {
            "xValue": "Jul 2001",
            "yValue0": 4.31,
            "yValue1": 5.27,
            "yValue2": 4.53
        },
        {
            "xValue": "Aug 2001",
            "yValue0": 4.53,
            "yValue1": 5.73,
            "yValue2": 4.92
        },
        {
            "xValue": "Sep 2001",
            "yValue0": 4.42,
            "yValue1": 5.78,
            "yValue2": 4.92
        },
        {
            "xValue": "Oct 2001",
            "yValue0": 4.58,
            "yValue1": 6.04,
            "yValue2": 5.34
        },
        {
            "xValue": "Nov 2001",
            "yValue0": 4.63,
            "yValue1": 6.21,
            "yValue2": 5.54
        },
        {
            "xValue": "Dec 2001",
            "yValue0": 4.85,
            "yValue1": 6.36,
            "yValue2": 5.68
        },
        {
            "xValue": "Jan 2002",
            "yValue0": 4.80,
            "yValue1": 6.50,
            "yValue2": 5.73
        },
        {
            "xValue": "Feb 2002",
            "yValue0": 4.83,
            "yValue1": 6.50,
            "yValue2": 5.70
        },
        {
            "xValue": "Mar 2002",
            "yValue0": 4.99,
            "yValue1": 6.57,
            "yValue2": 5.85
        },
        {
            "xValue": "Apr 2002",
            "yValue0": 5.20,
            "yValue1": 6.68,
            "yValue2": 5.89
        },
        {
            "xValue": "May 2002",
            "yValue0": 4.99,
            "yValue1": 6.67,
            "yValue2": 5.78
        },
        {
            "xValue": "Jun 2002",
            "yValue0": 5.11,
            "yValue1": 6.67,
            "yValue2": 5.81
        },
        {
            "xValue": "Jul 2002",
            "yValue0": 5.14,
            "yValue1": 6.68,
            "yValue2": 5.73
        },
        {
            "xValue": "Aug 2002",
            "yValue0": 5.23,
            "yValue1": 6.74,
            "yValue2": 5.73
        },
        {
            "xValue": "Sep 2002",
            "yValue0": 5.23,
            "yValue1": 6.60,
            "yValue2": 5.64
        },
        {
            "xValue": "Oct 2002",
            "yValue0": 5.22,
            "yValue1": 6.64,
            "yValue2": 5.64
        },
        {
            "xValue": "Nov 2002",
            "yValue0": 5.33,
            "yValue1": 6.79,
            "yValue2": 5.82
        },
        {
            "xValue": "Dec 2002",
            "yValue0": 5.35,
            "yValue1": 6.93,
            "yValue2": 5.97
        },
        {
            "xValue": "Jan 2003",
            "yValue0": 5.05,
            "yValue1": 6.80,
            "yValue2": 5.92
        },
        {
            "xValue": "Feb 2003",
            "yValue0": 5.07,
            "yValue1": 6.80,
            "yValue2": 6.00
        },
        {
            "xValue": "Mar 2003",
            "yValue0": 4.94,
            "yValue1": 6.78,
            "yValue2": 5.97
        },
        {
            "xValue": "Apr 2003",
            "yValue0": 4.95,
            "yValue1": 6.80,
            "yValue2": 5.99
        },
        {
            "xValue": "May 2003",
            "yValue0": 5.07,
            "yValue1": 6.85,
            "yValue2": 6.08
        },
        {
            "xValue": "Jun 2003",
            "yValue0": 5.25,
            "yValue1": 7.15,
            "yValue2": 6.31
        },
        {
            "xValue": "Jul 2003",
            "yValue0": 5.07,
            "yValue1": 6.88,
            "yValue2": 6.11
        },
        {
            "xValue": "Aug 2003",
            "yValue0": 5.04,
            "yValue1": 6.85,
            "yValue2": 6.04
        },
        {
            "xValue": "Sep 2003",
            "yValue0": 4.92,
            "yValue1": 6.82,
            "yValue2": 6.05
        },
        {
            "xValue": "Oct 2003",
            "yValue0": 5.08,
            "yValue1": 6.75,
            "yValue2": 5.94
        },
        {
            "xValue": "Nov 2003",
            "yValue0": 4.96,
            "yValue1": 6.69,
            "yValue2": 5.81
        },
        {
            "xValue": "Dec 2003",
            "yValue0": 4.75,
            "yValue1": 6.41,
            "yValue2": 5.66
        },
        {
            "xValue": "Jan 2004",
            "yValue0": 4.76,
            "yValue1": 6.51,
            "yValue2": 5.73
        },
        {
            "xValue": "Feb 2004",
            "yValue0": 4.78,
            "yValue1": 6.39,
            "yValue2": 5.60
        },
        {
            "xValue": "Mar 2004",
            "yValue0": 5.01,
            "yValue1": 6.70,
            "yValue2": 5.80
        },
        {
            "xValue": "Apr 2004",
            "yValue0": 4.80,
            "yValue1": 6.43,
            "yValue2": 5.61
        },
        {
            "xValue": "May 2004",
            "yValue0": 4.85,
            "yValue1": 6.34,
            "yValue2": 5.57
        },
        {
            "xValue": "Jun 2004",
            "yValue0": 4.80,
            "yValue1": 6.34,
            "yValue2": 5.61
        },
        {
            "xValue": "Jul 2004",
            "yValue0": 4.71,
            "yValue1": 6.16,
            "yValue2": 5.48
        },
        {
            "xValue": "Aug 2004",
            "yValue0": 4.55,
            "yValue1": 5.97,
            "yValue2": 5.45
        },
        {
            "xValue": "Sep 2004",
            "yValue0": 4.59,
            "yValue1": 5.90,
            "yValue2": 5.33
        },
        {
            "xValue": "Oct 2004",
            "yValue0": 4.67,
            "yValue1": 5.95,
            "yValue2": 5.44
        },
        {
            "xValue": "Nov 2004",
            "yValue0": 4.62,
            "yValue1": 5.90,
            "yValue2": 5.41
        },
        {
            "xValue": "Dec 2004",
            "yValue0": 4.66,
            "yValue1": 5.89,
            "yValue2": 5.35
        },
        {
            "xValue": "Jan 2005",
            "yValue0": 4.66,
            "yValue1": 5.71,
            "yValue2": 5.14
        },
        {
            "xValue": "Feb 2005",
            "yValue0": 4.67,
            "yValue1": 5.79,
            "yValue2": 5.41
        },
        {
            "xValue": "Mar 2005",
            "yValue0": 4.46,
            "yValue1": 5.60,
            "yValue2": 5.22
        },
        {
            "xValue": "Apr 2005",
            "yValue0": 4.33,
            "yValue1": 5.45,
            "yValue2": 5.12
        },
        {
            "xValue": "May 2005",
            "yValue0": 4.31,
            "yValue1": 5.42,
            "yValue2": 5.14
        },
        {
            "xValue": "Jun 2005",
            "yValue0": 4.27,
            "yValue1": 5.35,
            "yValue2": 5.01
        },
        {
            "xValue": "Jul 2005",
            "yValue0": 4.26,
            "yValue1": 5.24,
            "yValue2": 4.95
        },
        {
            "xValue": "Aug 2005",
            "yValue0": 4.15,
            "yValue1": 5.15,
            "yValue2": 4.94
        },
        {
            "xValue": "Sep 2005",
            "yValue0": 4.38,
            "yValue1": 5.39,
            "yValue2": 5.03
        },
        {
            "xValue": "Oct 2005",
            "yValue0": 4.29,
            "yValue1": 5.27,
            "yValue2": 4.96
        },
        {
            "xValue": "Nov 2005",
            "yValue0": 4.40,
            "yValue1": 5.34,
            "yValue2": 5.03
        },
        {
            "xValue": "Dec 2005",
            "yValue0": 4.07,
            "yValue1": 5.09,
            "yValue2": 4.85
        },
        {
            "xValue": "Jan 2006",
            "yValue0": 3.82,
            "yValue1": 4.81,
            "yValue2": 4.54
        },
        {
            "xValue": "Feb 2006",
            "yValue0": 3.93,
            "yValue1": 4.97,
            "yValue2": 4.71
        },
        {
            "xValue": "Mar 2006",
            "yValue0": 3.98,
            "yValue1": 4.89,
            "yValue2": 4.62
        },
        {
            "xValue": "Apr 2006",
            "yValue0": 4.35,
            "yValue1": 5.09,
            "yValue2": 4.74
        },
        {
            "xValue": "May 2006",
            "yValue0": 4.09,
            "yValue1": 4.91,
            "yValue2": 4.61
        },
        {
            "xValue": "Jun 2006",
            "yValue0": 4.06,
            "yValue1": 4.85,
            "yValue2": 4.61
        },
        {
            "xValue": "Jul 2006",
            "yValue0": 4.13,
            "yValue1": 4.92,
            "yValue2": 4.74
        },
        {
            "xValue": "Aug 2006",
            "yValue0": 4.15,
            "yValue1": 4.94,
            "yValue2": 4.63
        },
        {
            "xValue": "Sep 2006",
            "yValue0": 4.08,
            "yValue1": 4.88,
            "yValue2": 4.62
        },
        {
            "xValue": "Oct 2006",
            "yValue0": 3.93,
            "yValue1": 4.77,
            "yValue2": 4.48
        },
        {
            "xValue": "Nov 2006",
            "yValue0": 3.98,
            "yValue1": 4.89,
            "yValue2": 4.58
        },
        {
            "xValue": "Dec 2006",
            "yValue0": 3.97,
            "yValue1": 4.89,
            "yValue2": 4.54
        },
        {
            "xValue": "Jan 2007",
            "yValue0": 4.07,
            "yValue1": 5.00,
            "yValue2": 4.43
        },
        {
            "xValue": "Feb 2007",
            "yValue0": 4.18,
            "yValue1": 5.07,
            "yValue2": 4.51
        },
        {
            "xValue": "Mar 2007",
            "yValue0": 4.07,
            "yValue1": 4.87,
            "yValue2": 4.30
        },
        {
            "xValue": "Apr 2007",
            "yValue0": 4.35,
            "yValue1": 5.23,
            "yValue2": 4.56
        },
        {
            "xValue": "May 2007",
            "yValue0": 4.30,
            "yValue1": 5.20,
            "yValue2": 4.50
        },
        {
            "xValue": "Jun 2007",
            "yValue0": 4.36,
            "yValue1": 5.26,
            "yValue2": 4.51
        },
        {
            "xValue": "Jul 2007",
            "yValue0": 4.42,
            "yValue1": 5.40,
            "yValue2": 4.64
        },
        {
            "xValue": "Aug 2007",
            "yValue0": 4.44,
            "yValue1": 5.40,
            "yValue2": 4.61
        },
        {
            "xValue": "Sep 2007",
            "yValue0": 4.49,
            "yValue1": 5.58,
            "yValue2": 4.72
        },
        {
            "xValue": "Oct 2007",
            "yValue0": 4.58,
            "yValue1": 5.69,
            "yValue2": 4.79
        },
        {
            "xValue": "Nov 2007",
            "yValue0": 4.55,
            "yValue1": 5.73,
            "yValue2": 4.82
        },
        {
            "xValue": "Dec 2007",
            "yValue0": 4.65,
            "yValue1": 6.08,
            "yValue2": 5.03
        },
        {
            "xValue": "Jan 2008",
            "yValue0": 4.52,
            "yValue1": 5.88,
            "yValue2": 4.81
        },
        {
            "xValue": "Feb 2008",
            "yValue0": 4.53,
            "yValue1": 5.96,
            "yValue2": 4.81
        },
        {
            "xValue": "Mar 2008",
            "yValue0": 4.76,
            "yValue1": 6.27,
            "yValue2": 4.98
        },
        {
            "xValue": "Apr 2008",
            "yValue0": 4.85,
            "yValue1": 6.36,
            "yValue2": 5.08
        },
        {
            "xValue": "May 2008",
            "yValue0": 5.25,
            "yValue1": 6.82,
            "yValue2": 5.41
        },
        {
            "xValue": "Jun 2008",
            "yValue0": 5.26,
            "yValue1": 6.95,
            "yValue2": 5.50
        },
        {
            "xValue": "Jul 2008",
            "yValue0": 5.52,
            "yValue1": 7.28,
            "yValue2": 5.75
        },
        {
            "xValue": "Aug 2008",
            "yValue0": 5.85,
            "yValue1": 7.77,
            "yValue2": 6.09
        },
        {
            "xValue": "Sep 2008",
            "yValue0": 5.90,
            "yValue1": 7.97,
            "yValue2": 6.22
        },
        {
            "xValue": "Oct 2008",
            "yValue0": 6.10,
            "yValue1": 8.28,
            "yValue2": 6.49
        },
        {
            "xValue": "Nov 2008",
            "yValue0": 6.39,
            "yValue1": 8.58,
            "yValue2": 6.87
        },
        {
            "xValue": "Dec 2008",
            "yValue0": 6.72,
            "yValue1": 9.17,
            "yValue2": 7.32
        },
        {
            "xValue": "Jan 2009",
            "yValue0": 7.19,
            "yValue1": 9.68,
            "yValue2": 7.91
        },
        {
            "xValue": "Feb 2009",
            "yValue0": 7.49,
            "yValue1": 10.27,
            "yValue2": 8.50
        },
        {
            "xValue": "Mar 2009",
            "yValue0": 7.73,
            "yValue1": 10.58,
            "yValue2": 8.76
        },
        {
            "xValue": "Apr 2009",
            "yValue0": 7.86,
            "yValue1": 10.70,
            "yValue2": 8.91
        },
        {
            "xValue": "May 2009",
            "yValue0": 8.10,
            "yValue1": 11.04,
            "yValue2": 9.32
        },
        {
            "xValue": "Jun 2009",
            "yValue0": 8.26,
            "yValue1": 11.24,
            "yValue2": 9.48
        },
        {
            "xValue": "Jul 2009",
            "yValue0": 8.32,
            "yValue1": 11.35,
            "yValue2": 9.45
        },
        {
            "xValue": "Aug 2009",
            "yValue0": 8.44,
            "yValue1": 11.43,
            "yValue2": 9.55
        },
        {
            "xValue": "Sep 2009",
            "yValue0": 8.74,
            "yValue1": 11.67,
            "yValue2": 9.72
        },
        {
            "xValue": "Oct 2009",
            "yValue0": 8.90,
            "yValue1": 11.87,
            "yValue2": 9.87
        },
        {
            "xValue": "Nov 2009",
            "yValue0": 8.82,
            "yValue1": 11.91,
            "yValue2": 9.80
        },
        {
            "xValue": "Dec 2009",
            "yValue0": 9.08,
            "yValue1": 11.95,
            "yValue2": 9.91
        },
        {
            "xValue": "Jan 2010",
            "yValue0": 9.85,
            "yValue1": 12.18,
            "yValue2": 10.01
        },
        {
            "xValue": "Feb 2010",
            "yValue0": 9.66,
            "yValue1": 12.27,
            "yValue2": 10.00
        },
        {
            "xValue": "Mar 2010",
            "yValue0": 10.02,
            "yValue1": 12.31,
            "yValue2": 9.96
        },
        {
            "xValue": "Apr 2010",
            "yValue0": 9.60,
            "yValue1": 12.34,
            "yValue2": 9.85
        },
        {
            "xValue": "May 2010",
            "yValue0": 9.45,
            "yValue1": 12.16,
            "yValue2": 9.54
        },
        {
            "xValue": "Jun 2010",
            "yValue0": 9.35,
            "yValue1": 11.91,
            "yValue2": 9.36
        },
        {
            "xValue": "Jul 2010",
            "yValue0": 9.60,
            "yValue1": 12.21,
            "yValue2": 9.44
        },
        {
            "xValue": "Aug 2010",
            "yValue0": 9.64,
            "yValue1": 12.20,
            "yValue2": 9.43
        },
        {
            "xValue": "Sep 2010",
            "yValue0": 9.76,
            "yValue1": 12.16,
            "yValue2": 9.41
        },
        {
            "xValue": "Oct 2010",
            "yValue0": 9.66,
            "yValue1": 12.13,
            "yValue2": 9.34
        },
        {
            "xValue": "Nov 2010",
            "yValue0": 10.03,
            "yValue1": 12.54,
            "yValue2": 9.71
        },
        {
            "xValue": "Dec 2010",
            "yValue0": 9.86,
            "yValue1": 12.25,
            "yValue2": 9.31
        },
        {
            "xValue": "Jan 2011",
            "yValue0": 9.75,
            "yValue1": 12.10,
            "yValue2": 9.25
        },
        {
            "xValue": "Feb 2011",
            "yValue0": 9.55,
            "yValue1": 11.88,
            "yValue2": 9.10
        },
        {
            "xValue": "Mar 2011",
            "yValue0": 9.63,
            "yValue1": 11.85,
            "yValue2": 8.97
        },
        {
            "xValue": "Apr 2011",
            "yValue0": 9.54,
            "yValue1": 11.88,
            "yValue2": 9.09
        },
        {
            "xValue": "May 2011",
            "yValue0": 9.38,
            "yValue1": 11.78,
            "yValue2": 8.95
        },
        {
            "xValue": "Jun 2011",
            "yValue0": 9.46,
            "yValue1": 11.89,
            "yValue2": 9.06
        },
        {
            "xValue": "Jul 2011",
            "yValue0": 9.37,
            "yValue1": 11.77,
            "yValue2": 9.01
        },
        {
            "xValue": "Aug 2011",
            "yValue0": 9.31,
            "yValue1": 11.76,
            "yValue2": 8.99
        },
        {
            "xValue": "Sep 2011",
            "yValue0": 9.39,
            "yValue1": 11.75,
            "yValue2": 9.00
        },
        {
            "xValue": "Oct 2011",
            "yValue0": 9.34,
            "yValue1": 11.50,
            "yValue2": 8.82
        },
        {
            "xValue": "Nov 2011",
            "yValue0": 9.02,
            "yValue1": 11.24,
            "yValue2": 8.60
        },
        {
            "xValue": "Dec 2011",
            "yValue0": 8.95,
            "yValue1": 11.16,
            "yValue2": 8.52
        },
        {
            "xValue": "Jan 2012",
            "yValue0": 8.75,
            "yValue1": 10.92,
            "yValue2": 8.28
        },
        {
            "xValue": "Feb 2012",
            "yValue0": 8.76,
            "yValue1": 10.99,
            "yValue2": 8.31
        },
        {
            "xValue": "Mar 2012",
            "yValue0": 8.75,
            "yValue1": 10.79,
            "yValue2": 8.19
        },
        {
            "xValue": "Apr 2012",
            "yValue0": 8.76,
            "yValue1": 10.71,
            "yValue2": 8.11
        },
        {
            "xValue": "May 2012",
            "yValue0": 8.69,
            "yValue1": 10.69,
            "yValue2": 8.15
        },
        {
            "xValue": "Jun 2012",
            "yValue0": 8.56,
            "yValue1": 10.49,
            "yValue2": 8.16
        },
        {
            "xValue": "Jul 2012",
            "yValue0": 8.43,
            "yValue1": 10.43,
            "yValue2": 8.28
        },
        {
            "xValue": "Aug 2012",
            "yValue0": 8.28,
            "yValue1": 10.24,
            "yValue2": 8.07
        },
        {
            "xValue": "Sep 2012",
            "yValue0": 7.91,
            "yValue1": 9.84,
            "yValue2": 7.79
        },
        {
            "xValue": "Oct 2012",
            "yValue0": 7.91,
            "yValue1": 9.87,
            "yValue2": 7.80
        },
        {
            "xValue": "Nov 2012",
            "yValue0": 7.80,
            "yValue1": 9.72,
            "yValue2": 7.76
        },
        {
            "xValue": "Dec 2012",
            "yValue0": 7.85,
            "yValue1": 9.77,
            "yValue2": 7.83
        },
        {
            "xValue": "Jan 2013",
            "yValue0": 7.96,
            "yValue1": 9.75,
            "yValue2": 8.03
        },
        {
            "xValue": "Feb 2013",
            "yValue0": 7.58,
            "yValue1": 9.42,
            "yValue2": 7.73
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
            "yValue1": 9.11,
            "yValue2": 7.53
        },
        {
            "xValue": "May 2013",
            "yValue0": 7.28,
            "yValue1": 9.08,
            "yValue2": 7.53
        },
        {
            "xValue": "Jun 2013",
            "yValue0": 7.38,
            "yValue1": 9.10,
            "yValue2": 7.58
        },
        {
            "xValue": "Jul 2013",
            "yValue0": 7.31,
            "yValue1": 8.92,
            "yValue2": 7.36
        },
        {
            "xValue": "Aug 2013",
            "yValue0": 7.16,
            "yValue1": 8.72,
            "yValue2": 7.15
        },
        {
            "xValue": "Sep 2013",
            "yValue0": 7.03,
            "yValue1": 8.72,
            "yValue2": 7.18
        },
        {
            "xValue": "Oct 2013",
            "yValue0": 7.02,
            "yValue1": 8.65,
            "yValue2": 7.29
        },
        {
            "xValue": "Nov 2013",
            "yValue0": 6.80,
            "yValue1": 8.40,
            "yValue2": 6.94
        },
        {
            "xValue": "Dec 2013",
            "yValue0": 6.45,
            "yValue1": 8.18,
            "yValue2": 6.73
        },
        {
            "xValue": "Jan 2014",
            "yValue0": 6.45,
            "yValue1": 7.97,
            "yValue2": 6.56
        },
        {
            "xValue": "Feb 2014",
            "yValue0": 6.59,
            "yValue1": 8.14,
            "yValue2": 6.66
        },
        {
            "xValue": "Mar 2014",
            "yValue0": 6.38,
            "yValue1": 8.03,
            "yValue2": 6.62
        },
        {
            "xValue": "Apr 2014",
            "yValue0": 6.06,
            "yValue1": 7.69,
            "yValue2": 6.32
        },
        {
            "xValue": "May 2014",
            "yValue0": 6.26,
            "yValue1": 7.68,
            "yValue2": 6.32
        },
        {
            "xValue": "Jun 2014",
            "yValue0": 5.98,
            "yValue1": 7.40,
            "yValue2": 6.09
        },
        {
            "xValue": "Jul 2014",
            "yValue0": 6.12,
            "yValue1": 7.53,
            "yValue2": 6.16
        },
        {
            "xValue": "Aug 2014",
            "yValue0": 6.15,
            "yValue1": 7.42,
            "yValue2": 6.16
        },
        {
            "xValue": "Sep 2014",
            "yValue0": 6.05,
            "yValue1": 7.21,
            "yValue2": 5.87
        },
        {
            "xValue": "Oct 2014",
            "yValue0": 5.85,
            "yValue1": 7.04,
            "yValue2": 5.78
        },
        {
            "xValue": "Nov 2014",
            "yValue0": 6.01,
            "yValue1": 7.08,
            "yValue2": 5.81
        },
        {
            "xValue": "Dec 2014",
            "yValue0": 5.67,
            "yValue1": 6.79,
            "yValue2": 5.64
        },
        {
            "xValue": "Jan 2015",
            "yValue0": 5.62,
            "yValue1": 6.80,
            "yValue2": 5.67
        },
        {
            "xValue": "Feb 2015",
            "yValue0": 5.36,
            "yValue1": 6.55,
            "yValue2": 5.47
        },
        {
            "xValue": "Mar 2015",
            "yValue0": 5.16,
            "yValue1": 6.44,
            "yValue2": 5.43
        },
        {
            "xValue": "Apr 2015",
            "yValue0": 5.42,
            "yValue1": 6.46,
            "yValue2": 5.50
        },
        {
            "xValue": "May 2015",
            "yValue0": 5.64,
            "yValue1": 6.58,
            "yValue2": 5.53
        },
        {
            "xValue": "Jun 2015",
            "yValue0": 5.19,
            "yValue1": 6.20,
            "yValue2": 5.30
        },
        {
            "xValue": "Jul 2015",
            "yValue0": 5.14,
            "yValue1": 6.06,
            "yValue2": 5.27
        },
        {
            "xValue": "Aug 2015",
            "yValue0": 5.05,
            "yValue1": 5.92,
            "yValue2": 5.06
        },
        {
            "xValue": "Sep 2015",
            "yValue0": 5.06,
            "yValue1": 5.90,
            "yValue2": 5.07
        },
        {
            "xValue": "Oct 2015",
            "yValue0": 5.21,
            "yValue1": 5.85,
            "yValue2": 5.07
        },
        {
            "xValue": "Nov 2015",
            "yValue0": 5.44,
            "yValue1": 5.87,
            "yValue2": 5.10
        },
        {
            "xValue": "Dec 2015",
            "yValue0": 5.30,
            "yValue1": 5.78,
            "yValue2": 5.03
        },
        {
            "xValue": "Jan 2016",
            "yValue0": 4.97,
            "yValue1": 5.51,
            "yValue2": 4.86
        },
        {
            "xValue": "Feb 2016",
            "yValue0": 5.05,
            "yValue1": 5.46,
            "yValue2": 4.88
        },
        {
            "xValue": "Mar 2016",
            "yValue0": 5.12,
            "yValue1": 5.64,
            "yValue2": 4.95
        },
        {
            "xValue": "Apr 2016",
            "yValue0": 5.17,
            "yValue1": 5.61,
            "yValue2": 5.06
        },
        {
            "xValue": "May 2016",
            "yValue0": 5.03,
            "yValue1": 5.48,
            "yValue2": 4.74
        },
        {
            "xValue": "Jun 2016",
            "yValue0": 5.09,
            "yValue1": 5.49,
            "yValue2": 4.90
        },
        {
            "xValue": "Jul 2016",
            "yValue0": 4.97,
            "yValue1": 5.39,
            "yValue2": 4.80
        },
        {
            "xValue": "Aug 2016",
            "yValue0": 4.95,
            "yValue1": 5.43,
            "yValue2": 4.87
        },
        {
            "xValue": "Sep 2016",
            "yValue0": 5.18,
            "yValue1": 5.49,
            "yValue2": 4.96
        },
        {
            "xValue": "Oct 2016",
            "yValue0": 5.06,
            "yValue1": 5.46,
            "yValue2": 4.97
        },
        {
            "xValue": "Nov 2016",
            "yValue0": 4.99,
            "yValue1": 5.28,
            "yValue2": 4.69
        },
        {
            "xValue": "Dec 2016",
            "yValue0": 5.33,
            "yValue1": 5.26,
            "yValue2": 4.71
        },
        {
            "xValue": "Jan 2017",
            "yValue0": 5.13,
            "yValue1": 5.22,
            "yValue2": 4.66
        },
        {
            "xValue": "Feb 2017",
            "yValue0": 5.04,
            "yValue1": 5.16,
            "yValue2": 4.58
        },
        {
            "xValue": "Mar 2017",
            "yValue0": 4.77,
            "yValue1": 4.94,
            "yValue2": 4.46
        },
        {
            "xValue": "Apr 2017",
            "yValue0": 4.61,
            "yValue1": 4.98,
            "yValue2": 4.44
        },
        {
            "xValue": "May 2017",
            "yValue0": 4.62,
            "yValue1": 4.88,
            "yValue2": 4.37
        },
        {
            "xValue": "Jun 2017",
            "yValue0": 4.47,
            "yValue1": 4.77,
            "yValue2": 4.29
        },
        {
            "xValue": "Jul 2017",
            "yValue0": 4.50,
            "yValue1": 4.72,
            "yValue2": 4.32
        },
        {
            "xValue": "Aug 2017",
            "yValue0": 4.46,
            "yValue1": 4.83,
            "yValue2": 4.37
        },
        {
            "xValue": "Sep 2017",
            "yValue0": 4.30,
            "yValue1": 4.60,
            "yValue2": 4.26
        },
        {
            "xValue": "Oct 2017",
            "yValue0": 4.21,
            "yValue1": 4.46,
            "yValue2": 4.16
        },
        {
            "xValue": "Nov 2017",
            "yValue0": 4.25,
            "yValue1": 4.50,
            "yValue2": 4.19
        },
        {
            "xValue": "Dec 2017",
            "yValue0": 4.06,
            "yValue1": 4.45,
            "yValue2": 4.09
        },
        {
            "xValue": "Jan 2018",
            "yValue0": 4.08,
            "yValue1": 4.31,
            "yValue2": 4.04
        },
        {
            "xValue": "Feb 2018",
            "yValue0": 4.12,
            "yValue1": 4.36,
            "yValue2": 4.08
        },
        {
            "xValue": "Mar 2018",
            "yValue0": 4.02,
            "yValue1": 4.24,
            "yValue2": 3.98
        },
        {
            "xValue": "Apr 2018",
            "yValue0": 4.07,
            "yValue1": 4.26,
            "yValue2": 4.02
        },
        {
            "xValue": "May 2018",
            "yValue0": 3.92,
            "yValue1": 4.18,
            "yValue2": 3.89
        },
        {
            "xValue": "Jun 2018",
            "yValue0": 3.96,
            "yValue1": 4.26,
            "yValue2": 3.98
        },
        {
            "xValue": "Jul 2018",
            "yValue0": 3.81,
            "yValue1": 4.14,
            "yValue2": 3.84
        },
        {
            "xValue": "Aug 2018",
            "yValue0": 3.86,
            "yValue1": 4.13,
            "yValue2": 3.78
        },
        {
            "xValue": "Sep 2018",
            "yValue0": 3.72,
            "yValue1": 4.10,
            "yValue2": 3.76
        },
        {
            "xValue": "Oct 2018",
            "yValue0": 3.74,
            "yValue1": 4.17,
            "yValue2": 3.76
        },
        {
            "xValue": "Nov 2018",
            "yValue0": 3.68,
            "yValue1": 4.11,
            "yValue2": 3.79
        },
        {
            "xValue": "Dec 2018",
            "yValue0": 3.79,
            "yValue1": 4.24,
            "yValue2": 3.88
        },
        {
            "xValue": "Jan 2019",
            "yValue0": 4.06,
            "yValue1": 4.41,
            "yValue2": 3.93
        },
        {
            "xValue": "Feb 2019",
            "yValue0": 4.00,
            "yValue1": 4.15,
            "yValue2": 3.77
        },
        {
            "xValue": "Mar 2019",
            "yValue0": 4.29,
            "yValue1": 4.43,
            "yValue2": 3.78
        }
    ],
});