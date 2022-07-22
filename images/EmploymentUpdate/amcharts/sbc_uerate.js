var chart = AmCharts.makeChart("sbc_uerate" , { 
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
            "xValue": "Jan 90",
            "yValue0": 4.90,
            "yValue1": 4.22,
            "yValue2": 4.27
        },
        {
            "xValue": "Feb 90",
            "yValue0": 5.00,
            "yValue1": 4.38,
            "yValue2": 4.36
        },
        {
            "xValue": "Mar 90",
            "yValue0": 5.10,
            "yValue1": 4.52,
            "yValue2": 4.46
        },
        {
            "xValue": "Apr 90",
            "yValue0": 4.60,
            "yValue1": 4.89,
            "yValue2": 4.55
        },
        {
            "xValue": "May 90",
            "yValue0": 4.00,
            "yValue1": 4.59,
            "yValue2": 4.65
        },
        {
            "xValue": "Jun 90",
            "yValue0": 4.30,
            "yValue1": 4.68,
            "yValue2": 4.75
        },
        {
            "xValue": "Jul 90",
            "yValue0": 4.70,
            "yValue1": 4.95,
            "yValue2": 4.89
        },
        {
            "xValue": "Aug 90",
            "yValue0": 4.70,
            "yValue1": 5.01,
            "yValue2": 5.05
        },
        {
            "xValue": "Sep 90",
            "yValue0": 5.00,
            "yValue1": 5.20,
            "yValue2": 5.21
        },
        {
            "xValue": "Oct 90",
            "yValue0": 4.80,
            "yValue1": 5.09,
            "yValue2": 5.37
        },
        {
            "xValue": "Nov 90",
            "yValue0": 5.60,
            "yValue1": 5.56,
            "yValue2": 5.51
        },
        {
            "xValue": "Dec 90",
            "yValue0": 5.90,
            "yValue1": 5.68,
            "yValue2": 5.62
        },
        {
            "xValue": "Jan 91",
            "yValue0": 6.50,
            "yValue1": 5.59,
            "yValue2": 5.70
        },
        {
            "xValue": "Feb 91",
            "yValue0": 6.60,
            "yValue1": 5.79,
            "yValue2": 5.77
        },
        {
            "xValue": "Mar 91",
            "yValue0": 6.60,
            "yValue1": 5.86,
            "yValue2": 5.80
        },
        {
            "xValue": "Apr 91",
            "yValue0": 5.50,
            "yValue1": 5.84,
            "yValue2": 5.83
        },
        {
            "xValue": "May 91",
            "yValue0": 5.10,
            "yValue1": 5.85,
            "yValue2": 5.87
        },
        {
            "xValue": "Jun 91",
            "yValue0": 5.70,
            "yValue1": 6.20,
            "yValue2": 5.91
        },
        {
            "xValue": "Jul 91",
            "yValue0": 5.60,
            "yValue1": 5.90,
            "yValue2": 5.98
        },
        {
            "xValue": "Aug 91",
            "yValue0": 5.40,
            "yValue1": 5.75,
            "yValue2": 6.05
        },
        {
            "xValue": "Sep 91",
            "yValue0": 6.00,
            "yValue1": 6.24,
            "yValue2": 6.16
        },
        {
            "xValue": "Oct 91",
            "yValue0": 5.90,
            "yValue1": 6.25,
            "yValue2": 6.28
        },
        {
            "xValue": "Nov 91",
            "yValue0": 6.40,
            "yValue1": 6.35,
            "yValue2": 6.42
        },
        {
            "xValue": "Dec 91",
            "yValue0": 6.80,
            "yValue1": 6.55,
            "yValue2": 6.56
        },
        {
            "xValue": "Jan 92",
            "yValue0": 7.90,
            "yValue1": 6.75,
            "yValue2": 6.72
        },
        {
            "xValue": "Feb 92",
            "yValue0": 8.30,
            "yValue1": 7.29,
            "yValue2": 6.88
        },
        {
            "xValue": "Mar 92",
            "yValue0": 7.90,
            "yValue1": 7.04,
            "yValue2": 7.04
        },
        {
            "xValue": "Apr 92",
            "yValue0": 6.50,
            "yValue1": 6.90,
            "yValue2": 7.20
        },
        {
            "xValue": "May 92",
            "yValue0": 6.40,
            "yValue1": 7.35,
            "yValue2": 7.35
        },
        {
            "xValue": "Jun 92",
            "yValue0": 6.90,
            "yValue1": 7.52,
            "yValue2": 7.50
        },
        {
            "xValue": "Jul 92",
            "yValue0": 7.20,
            "yValue1": 7.60,
            "yValue2": 7.62
        },
        {
            "xValue": "Aug 92",
            "yValue0": 7.60,
            "yValue1": 8.08,
            "yValue2": 7.73
        },
        {
            "xValue": "Sep 92",
            "yValue0": 7.50,
            "yValue1": 7.81,
            "yValue2": 7.80
        },
        {
            "xValue": "Oct 92",
            "yValue0": 7.40,
            "yValue1": 7.85,
            "yValue2": 7.84
        },
        {
            "xValue": "Nov 92",
            "yValue0": 7.90,
            "yValue1": 7.84,
            "yValue2": 7.83
        },
        {
            "xValue": "Dec 92",
            "yValue0": 8.10,
            "yValue1": 7.82,
            "yValue2": 7.78
        },
        {
            "xValue": "Jan 93",
            "yValue0": 9.20,
            "yValue1": 7.79,
            "yValue2": 7.74
        },
        {
            "xValue": "Feb 93",
            "yValue0": 8.70,
            "yValue1": 7.65,
            "yValue2": 7.73
        },
        {
            "xValue": "Mar 93",
            "yValue0": 8.40,
            "yValue1": 7.50,
            "yValue2": 7.76
        },
        {
            "xValue": "Apr 93",
            "yValue0": 7.30,
            "yValue1": 7.74,
            "yValue2": 7.83
        },
        {
            "xValue": "May 93",
            "yValue0": 7.00,
            "yValue1": 8.07,
            "yValue2": 7.90
        },
        {
            "xValue": "Jun 93",
            "yValue0": 7.40,
            "yValue1": 8.11,
            "yValue2": 7.95
        },
        {
            "xValue": "Jul 93",
            "yValue0": 7.50,
            "yValue1": 7.93,
            "yValue2": 7.96
        },
        {
            "xValue": "Aug 93",
            "yValue0": 7.40,
            "yValue1": 7.87,
            "yValue2": 7.91
        },
        {
            "xValue": "Sep 93",
            "yValue0": 7.40,
            "yValue1": 7.71,
            "yValue2": 7.82
        },
        {
            "xValue": "Oct 93",
            "yValue0": 7.40,
            "yValue1": 7.88,
            "yValue2": 7.72
        },
        {
            "xValue": "Nov 93",
            "yValue0": 7.70,
            "yValue1": 7.60,
            "yValue2": 7.66
        },
        {
            "xValue": "Dec 93",
            "yValue0": 7.80,
            "yValue1": 7.54,
            "yValue2": 7.62
        },
        {
            "xValue": "Jan 94",
            "yValue0": 9.00,
            "yValue1": 7.52,
            "yValue2": 7.59
        },
        {
            "xValue": "Feb 94",
            "yValue0": 8.70,
            "yValue1": 7.65,
            "yValue2": 7.55
        },
        {
            "xValue": "Mar 94",
            "yValue0": 8.50,
            "yValue1": 7.58,
            "yValue2": 7.52
        },
        {
            "xValue": "Apr 94",
            "yValue0": 7.10,
            "yValue1": 7.51,
            "yValue2": 7.47
        },
        {
            "xValue": "May 94",
            "yValue0": 6.30,
            "yValue1": 7.32,
            "yValue2": 7.43
        },
        {
            "xValue": "Jun 94",
            "yValue0": 6.60,
            "yValue1": 7.29,
            "yValue2": 7.38
        },
        {
            "xValue": "Jul 94",
            "yValue0": 7.00,
            "yValue1": 7.43,
            "yValue2": 7.32
        },
        {
            "xValue": "Aug 94",
            "yValue0": 6.80,
            "yValue1": 7.26,
            "yValue2": 7.26
        },
        {
            "xValue": "Sep 94",
            "yValue0": 7.00,
            "yValue1": 7.32,
            "yValue2": 7.20
        },
        {
            "xValue": "Oct 94",
            "yValue0": 6.60,
            "yValue1": 7.05,
            "yValue2": 7.11
        },
        {
            "xValue": "Nov 94",
            "yValue0": 7.10,
            "yValue1": 6.96,
            "yValue2": 7.01
        },
        {
            "xValue": "Dec 94",
            "yValue0": 7.20,
            "yValue1": 6.95,
            "yValue2": 6.93
        },
        {
            "xValue": "Jan 95",
            "yValue0": 8.40,
            "yValue1": 6.94,
            "yValue2": 6.89
        },
        {
            "xValue": "Feb 95",
            "yValue0": 7.60,
            "yValue1": 6.64,
            "yValue2": 6.87
        },
        {
            "xValue": "Mar 95",
            "yValue0": 7.30,
            "yValue1": 6.48,
            "yValue2": 6.87
        },
        {
            "xValue": "Apr 95",
            "yValue0": 6.60,
            "yValue1": 6.98,
            "yValue2": 6.88
        },
        {
            "xValue": "May 95",
            "yValue0": 5.90,
            "yValue1": 6.94,
            "yValue2": 6.88
        },
        {
            "xValue": "Jun 95",
            "yValue0": 6.10,
            "yValue1": 6.82,
            "yValue2": 6.86
        },
        {
            "xValue": "Jul 95",
            "yValue0": 6.30,
            "yValue1": 6.72,
            "yValue2": 6.81
        },
        {
            "xValue": "Aug 95",
            "yValue0": 6.40,
            "yValue1": 6.87,
            "yValue2": 6.74
        },
        {
            "xValue": "Sep 95",
            "yValue0": 6.30,
            "yValue1": 6.60,
            "yValue2": 6.66
        },
        {
            "xValue": "Oct 95",
            "yValue0": 6.10,
            "yValue1": 6.55,
            "yValue2": 6.57
        },
        {
            "xValue": "Nov 95",
            "yValue0": 6.70,
            "yValue1": 6.52,
            "yValue2": 6.47
        },
        {
            "xValue": "Dec 95",
            "yValue0": 6.60,
            "yValue1": 6.33,
            "yValue2": 6.35
        },
        {
            "xValue": "Jan 96",
            "yValue0": 7.70,
            "yValue1": 6.31,
            "yValue2": 6.24
        },
        {
            "xValue": "Feb 96",
            "yValue0": 7.00,
            "yValue1": 6.07,
            "yValue2": 6.13
        },
        {
            "xValue": "Mar 96",
            "yValue0": 6.80,
            "yValue1": 6.00,
            "yValue2": 6.04
        },
        {
            "xValue": "Apr 96",
            "yValue0": 5.60,
            "yValue1": 5.91,
            "yValue2": 5.96
        },
        {
            "xValue": "May 96",
            "yValue0": 5.00,
            "yValue1": 5.97,
            "yValue2": 5.90
        },
        {
            "xValue": "Jun 96",
            "yValue0": 5.20,
            "yValue1": 5.88,
            "yValue2": 5.85
        },
        {
            "xValue": "Jul 96",
            "yValue0": 5.40,
            "yValue1": 5.80,
            "yValue2": 5.82
        },
        {
            "xValue": "Aug 96",
            "yValue0": 5.30,
            "yValue1": 5.72,
            "yValue2": 5.79
        },
        {
            "xValue": "Sep 96",
            "yValue0": 5.50,
            "yValue1": 5.77,
            "yValue2": 5.76
        },
        {
            "xValue": "Oct 96",
            "yValue0": 5.30,
            "yValue1": 5.73,
            "yValue2": 5.73
        },
        {
            "xValue": "Nov 96",
            "yValue0": 6.00,
            "yValue1": 5.81,
            "yValue2": 5.70
        },
        {
            "xValue": "Dec 96",
            "yValue0": 5.80,
            "yValue1": 5.53,
            "yValue2": 5.65
        },
        {
            "xValue": "Jan 97",
            "yValue0": 6.90,
            "yValue1": 5.62,
            "yValue2": 5.57
        },
        {
            "xValue": "Feb 97",
            "yValue0": 6.40,
            "yValue1": 5.50,
            "yValue2": 5.45
        },
        {
            "xValue": "Mar 97",
            "yValue0": 6.10,
            "yValue1": 5.35,
            "yValue2": 5.32
        },
        {
            "xValue": "Apr 97",
            "yValue0": 4.90,
            "yValue1": 5.18,
            "yValue2": 5.18
        },
        {
            "xValue": "May 97",
            "yValue0": 4.10,
            "yValue1": 4.96,
            "yValue2": 5.04
        },
        {
            "xValue": "Jun 97",
            "yValue0": 4.30,
            "yValue1": 4.89,
            "yValue2": 4.93
        },
        {
            "xValue": "Jul 97",
            "yValue0": 4.60,
            "yValue1": 4.96,
            "yValue2": 4.86
        },
        {
            "xValue": "Aug 97",
            "yValue0": 4.40,
            "yValue1": 4.76,
            "yValue2": 4.83
        },
        {
            "xValue": "Sep 97",
            "yValue0": 4.50,
            "yValue1": 4.72,
            "yValue2": 4.82
        },
        {
            "xValue": "Oct 97",
            "yValue0": 4.60,
            "yValue1": 5.02,
            "yValue2": 4.82
        },
        {
            "xValue": "Nov 97",
            "yValue0": 5.00,
            "yValue1": 4.82,
            "yValue2": 4.81
        },
        {
            "xValue": "Dec 97",
            "yValue0": 5.10,
            "yValue1": 4.85,
            "yValue2": 4.78
        },
        {
            "xValue": "Jan 98",
            "yValue0": 5.70,
            "yValue1": 4.64,
            "yValue2": 4.72
        },
        {
            "xValue": "Feb 98",
            "yValue0": 5.50,
            "yValue1": 4.71,
            "yValue2": 4.65
        },
        {
            "xValue": "Mar 98",
            "yValue0": 5.70,
            "yValue1": 4.97,
            "yValue2": 4.56
        },
        {
            "xValue": "Apr 98",
            "yValue0": 4.20,
            "yValue1": 4.43,
            "yValue2": 4.47
        },
        {
            "xValue": "May 98",
            "yValue0": 3.60,
            "yValue1": 4.39,
            "yValue2": 4.41
        },
        {
            "xValue": "Jun 98",
            "yValue0": 3.80,
            "yValue1": 4.31,
            "yValue2": 4.36
        },
        {
            "xValue": "Jul 98",
            "yValue0": 3.80,
            "yValue1": 4.11,
            "yValue2": 4.33
        },
        {
            "xValue": "Aug 98",
            "yValue0": 4.00,
            "yValue1": 4.31,
            "yValue2": 4.32
        },
        {
            "xValue": "Sep 98",
            "yValue0": 4.20,
            "yValue1": 4.42,
            "yValue2": 4.33
        },
        {
            "xValue": "Oct 98",
            "yValue0": 3.90,
            "yValue1": 4.27,
            "yValue2": 4.34
        },
        {
            "xValue": "Nov 98",
            "yValue0": 4.40,
            "yValue1": 4.23,
            "yValue2": 4.34
        },
        {
            "xValue": "Dec 98",
            "yValue0": 4.70,
            "yValue1": 4.46,
            "yValue2": 4.35
        },
        {
            "xValue": "Jan 99",
            "yValue0": 5.30,
            "yValue1": 4.34,
            "yValue2": 4.33
        },
        {
            "xValue": "Feb 99",
            "yValue0": 5.00,
            "yValue1": 4.30,
            "yValue2": 4.29
        },
        {
            "xValue": "Mar 99",
            "yValue0": 4.80,
            "yValue1": 4.17,
            "yValue2": 4.20
        },
        {
            "xValue": "Apr 99",
            "yValue0": 4.00,
            "yValue1": 4.22,
            "yValue2": 4.08
        },
        {
            "xValue": "May 99",
            "yValue0": 3.20,
            "yValue1": 3.91,
            "yValue2": 3.96
        },
        {
            "xValue": "Jun 99",
            "yValue0": 3.40,
            "yValue1": 3.82,
            "yValue2": 3.85
        },
        {
            "xValue": "Jul 99",
            "yValue0": 3.40,
            "yValue1": 3.66,
            "yValue2": 3.78
        },
        {
            "xValue": "Aug 99",
            "yValue0": 3.50,
            "yValue1": 3.73,
            "yValue2": 3.74
        },
        {
            "xValue": "Sep 99",
            "yValue0": 3.70,
            "yValue1": 3.92,
            "yValue2": 3.74
        },
        {
            "xValue": "Oct 99",
            "yValue0": 3.40,
            "yValue1": 3.73,
            "yValue2": 3.78
        },
        {
            "xValue": "Nov 99",
            "yValue0": 3.70,
            "yValue1": 3.55,
            "yValue2": 3.85
        },
        {
            "xValue": "Dec 99",
            "yValue0": 4.00,
            "yValue1": 3.79,
            "yValue2": 3.94
        },
        {
            "xValue": "Jan 00",
            "yValue0": 5.10,
            "yValue1": 4.22,
            "yValue2": 4.04
        },
        {
            "xValue": "Feb 00",
            "yValue0": 5.00,
            "yValue1": 4.35,
            "yValue2": 4.16
        },
        {
            "xValue": "Mar 00",
            "yValue0": 5.00,
            "yValue1": 4.36,
            "yValue2": 4.28
        },
        {
            "xValue": "Apr 00",
            "yValue0": 4.00,
            "yValue1": 4.21,
            "yValue2": 4.40
        },
        {
            "xValue": "May 00",
            "yValue0": 3.70,
            "yValue1": 4.51,
            "yValue2": 4.47
        },
        {
            "xValue": "Jun 00",
            "yValue0": 4.10,
            "yValue1": 4.53,
            "yValue2": 4.51
        },
        {
            "xValue": "Jul 00",
            "yValue0": 4.30,
            "yValue1": 4.60,
            "yValue2": 4.49
        },
        {
            "xValue": "Aug 00",
            "yValue0": 4.30,
            "yValue1": 4.53,
            "yValue2": 4.43
        },
        {
            "xValue": "Sep 00",
            "yValue0": 3.90,
            "yValue1": 4.15,
            "yValue2": 4.34
        },
        {
            "xValue": "Oct 00",
            "yValue0": 3.80,
            "yValue1": 4.15,
            "yValue2": 4.24
        },
        {
            "xValue": "Nov 00",
            "yValue0": 4.40,
            "yValue1": 4.20,
            "yValue2": 4.17
        },
        {
            "xValue": "Dec 00",
            "yValue0": 4.30,
            "yValue1": 4.07,
            "yValue2": 4.14
        },
        {
            "xValue": "Jan 01",
            "yValue0": 5.00,
            "yValue1": 4.20,
            "yValue2": 4.15
        },
        {
            "xValue": "Feb 01",
            "yValue0": 4.70,
            "yValue1": 4.15,
            "yValue2": 4.17
        },
        {
            "xValue": "Mar 01",
            "yValue0": 5.10,
            "yValue1": 4.48,
            "yValue2": 4.19
        },
        {
            "xValue": "Apr 01",
            "yValue0": 4.10,
            "yValue1": 4.34,
            "yValue2": 4.21
        },
        {
            "xValue": "May 01",
            "yValue0": 3.40,
            "yValue1": 4.11,
            "yValue2": 4.23
        },
        {
            "xValue": "Jun 01",
            "yValue0": 3.90,
            "yValue1": 4.23,
            "yValue2": 4.27
        },
        {
            "xValue": "Jul 01",
            "yValue0": 4.10,
            "yValue1": 4.34,
            "yValue2": 4.34
        },
        {
            "xValue": "Aug 01",
            "yValue0": 4.30,
            "yValue1": 4.50,
            "yValue2": 4.44
        },
        {
            "xValue": "Sep 01",
            "yValue0": 4.20,
            "yValue1": 4.50,
            "yValue2": 4.55
        },
        {
            "xValue": "Oct 01",
            "yValue0": 4.30,
            "yValue1": 4.65,
            "yValue2": 4.65
        },
        {
            "xValue": "Nov 01",
            "yValue0": 5.00,
            "yValue1": 4.77,
            "yValue2": 4.74
        },
        {
            "xValue": "Dec 01",
            "yValue0": 5.20,
            "yValue1": 4.92,
            "yValue2": 4.83
        },
        {
            "xValue": "Jan 02",
            "yValue0": 5.70,
            "yValue1": 4.86,
            "yValue2": 4.92
        },
        {
            "xValue": "Feb 02",
            "yValue0": 5.50,
            "yValue1": 4.92,
            "yValue2": 5.01
        },
        {
            "xValue": "Mar 02",
            "yValue0": 5.70,
            "yValue1": 5.04,
            "yValue2": 5.11
        },
        {
            "xValue": "Apr 02",
            "yValue0": 5.00,
            "yValue1": 5.34,
            "yValue2": 5.19
        },
        {
            "xValue": "May 02",
            "yValue0": 4.40,
            "yValue1": 5.27,
            "yValue2": 5.25
        },
        {
            "xValue": "Jun 02",
            "yValue0": 5.00,
            "yValue1": 5.33,
            "yValue2": 5.29
        },
        {
            "xValue": "Jul 02",
            "yValue0": 5.00,
            "yValue1": 5.21,
            "yValue2": 5.31
        },
        {
            "xValue": "Aug 02",
            "yValue0": 5.10,
            "yValue1": 5.34,
            "yValue2": 5.32
        },
        {
            "xValue": "Sep 02",
            "yValue0": 4.90,
            "yValue1": 5.26,
            "yValue2": 5.33
        },
        {
            "xValue": "Oct 02",
            "yValue0": 5.00,
            "yValue1": 5.34,
            "yValue2": 5.33
        },
        {
            "xValue": "Nov 02",
            "yValue0": 5.60,
            "yValue1": 5.35,
            "yValue2": 5.30
        },
        {
            "xValue": "Dec 02",
            "yValue0": 5.70,
            "yValue1": 5.39,
            "yValue2": 5.24
        },
        {
            "xValue": "Jan 03",
            "yValue0": 5.90,
            "yValue1": 5.09,
            "yValue2": 5.16
        },
        {
            "xValue": "Feb 03",
            "yValue0": 5.60,
            "yValue1": 5.04,
            "yValue2": 5.10
        },
        {
            "xValue": "Mar 03",
            "yValue0": 5.60,
            "yValue1": 5.00,
            "yValue2": 5.07
        },
        {
            "xValue": "Apr 03",
            "yValue0": 4.60,
            "yValue1": 4.97,
            "yValue2": 5.08
        },
        {
            "xValue": "May 03",
            "yValue0": 4.40,
            "yValue1": 5.22,
            "yValue2": 5.11
        },
        {
            "xValue": "Jun 03",
            "yValue0": 5.10,
            "yValue1": 5.36,
            "yValue2": 5.15
        },
        {
            "xValue": "Jul 03",
            "yValue0": 5.00,
            "yValue1": 5.14,
            "yValue2": 5.16
        },
        {
            "xValue": "Aug 03",
            "yValue0": 4.90,
            "yValue1": 5.15,
            "yValue2": 5.14
        },
        {
            "xValue": "Sep 03",
            "yValue0": 4.70,
            "yValue1": 5.05,
            "yValue2": 5.08
        },
        {
            "xValue": "Oct 03",
            "yValue0": 5.00,
            "yValue1": 5.29,
            "yValue2": 5.01
        },
        {
            "xValue": "Nov 03",
            "yValue0": 5.20,
            "yValue1": 5.01,
            "yValue2": 4.93
        },
        {
            "xValue": "Dec 03",
            "yValue0": 5.10,
            "yValue1": 4.83,
            "yValue2": 4.88
        },
        {
            "xValue": "Jan 04",
            "yValue0": 5.50,
            "yValue1": 4.77,
            "yValue2": 4.85
        },
        {
            "xValue": "Feb 04",
            "yValue0": 5.30,
            "yValue1": 4.76,
            "yValue2": 4.83
        },
        {
            "xValue": "Mar 04",
            "yValue0": 5.50,
            "yValue1": 4.97,
            "yValue2": 4.83
        },
        {
            "xValue": "Apr 04",
            "yValue0": 4.40,
            "yValue1": 4.79,
            "yValue2": 4.83
        },
        {
            "xValue": "May 04",
            "yValue0": 4.10,
            "yValue1": 4.83,
            "yValue2": 4.81
        },
        {
            "xValue": "Jun 04",
            "yValue0": 4.60,
            "yValue1": 4.79,
            "yValue2": 4.77
        },
        {
            "xValue": "Jul 04",
            "yValue0": 4.70,
            "yValue1": 4.77,
            "yValue2": 4.71
        },
        {
            "xValue": "Aug 04",
            "yValue0": 4.30,
            "yValue1": 4.53,
            "yValue2": 4.67
        },
        {
            "xValue": "Sep 04",
            "yValue0": 4.30,
            "yValue1": 4.59,
            "yValue2": 4.64
        },
        {
            "xValue": "Oct 04",
            "yValue0": 4.50,
            "yValue1": 4.74,
            "yValue2": 4.64
        },
        {
            "xValue": "Nov 04",
            "yValue0": 4.70,
            "yValue1": 4.57,
            "yValue2": 4.65
        },
        {
            "xValue": "Dec 04",
            "yValue0": 4.90,
            "yValue1": 4.66,
            "yValue2": 4.65
        },
        {
            "xValue": "Jan 05",
            "yValue0": 5.40,
            "yValue1": 4.69,
            "yValue2": 4.63
        },
        {
            "xValue": "Feb 05",
            "yValue0": 5.20,
            "yValue1": 4.66,
            "yValue2": 4.57
        },
        {
            "xValue": "Mar 05",
            "yValue0": 4.90,
            "yValue1": 4.46,
            "yValue2": 4.48
        },
        {
            "xValue": "Apr 05",
            "yValue0": 3.90,
            "yValue1": 4.27,
            "yValue2": 4.39
        },
        {
            "xValue": "May 05",
            "yValue0": 3.70,
            "yValue1": 4.32,
            "yValue2": 4.31
        },
        {
            "xValue": "Jun 05",
            "yValue0": 4.10,
            "yValue1": 4.25,
            "yValue2": 4.25
        },
        {
            "xValue": "Jul 05",
            "yValue0": 4.20,
            "yValue1": 4.22,
            "yValue2": 4.21
        },
        {
            "xValue": "Aug 05",
            "yValue0": 3.90,
            "yValue1": 4.11,
            "yValue2": 4.20
        },
        {
            "xValue": "Sep 05",
            "yValue0": 4.00,
            "yValue1": 4.25,
            "yValue2": 4.19
        },
        {
            "xValue": "Oct 05",
            "yValue0": 4.00,
            "yValue1": 4.21,
            "yValue2": 4.18
        },
        {
            "xValue": "Nov 05",
            "yValue0": 4.40,
            "yValue1": 4.34,
            "yValue2": 4.15
        },
        {
            "xValue": "Dec 05",
            "yValue0": 4.30,
            "yValue1": 4.12,
            "yValue2": 4.13
        },
        {
            "xValue": "Jan 06",
            "yValue0": 4.60,
            "yValue1": 3.98,
            "yValue2": 4.09
        },
        {
            "xValue": "Feb 06",
            "yValue0": 4.60,
            "yValue1": 4.11,
            "yValue2": 4.06
        },
        {
            "xValue": "Mar 06",
            "yValue0": 4.40,
            "yValue1": 4.03,
            "yValue2": 4.05
        },
        {
            "xValue": "Apr 06",
            "yValue0": 3.90,
            "yValue1": 4.27,
            "yValue2": 4.05
        },
        {
            "xValue": "May 06",
            "yValue0": 3.40,
            "yValue1": 3.94,
            "yValue2": 4.05
        },
        {
            "xValue": "Jun 06",
            "yValue0": 3.90,
            "yValue1": 4.04,
            "yValue2": 4.06
        },
        {
            "xValue": "Jul 06",
            "yValue0": 4.10,
            "yValue1": 4.11,
            "yValue2": 4.05
        },
        {
            "xValue": "Aug 06",
            "yValue0": 3.90,
            "yValue1": 4.09,
            "yValue2": 4.03
        },
        {
            "xValue": "Sep 06",
            "yValue0": 3.80,
            "yValue1": 4.02,
            "yValue2": 4.01
        },
        {
            "xValue": "Oct 06",
            "yValue0": 3.70,
            "yValue1": 3.90,
            "yValue2": 3.99
        },
        {
            "xValue": "Nov 06",
            "yValue0": 4.00,
            "yValue1": 4.01,
            "yValue2": 4.00
        },
        {
            "xValue": "Dec 06",
            "yValue0": 4.10,
            "yValue1": 3.95,
            "yValue2": 4.03
        },
        {
            "xValue": "Jan 07",
            "yValue0": 4.80,
            "yValue1": 4.14,
            "yValue2": 4.08
        },
        {
            "xValue": "Feb 07",
            "yValue0": 4.70,
            "yValue1": 4.20,
            "yValue2": 4.13
        },
        {
            "xValue": "Mar 07",
            "yValue0": 4.50,
            "yValue1": 4.13,
            "yValue2": 4.17
        },
        {
            "xValue": "Apr 07",
            "yValue0": 3.90,
            "yValue1": 4.25,
            "yValue2": 4.19
        },
        {
            "xValue": "May 07",
            "yValue0": 3.60,
            "yValue1": 4.14,
            "yValue2": 4.22
        },
        {
            "xValue": "Jun 07",
            "yValue0": 4.10,
            "yValue1": 4.25,
            "yValue2": 4.25
        },
        {
            "xValue": "Jul 07",
            "yValue0": 4.30,
            "yValue1": 4.30,
            "yValue2": 4.30
        },
        {
            "xValue": "Aug 07",
            "yValue0": 4.20,
            "yValue1": 4.38,
            "yValue2": 4.35
        },
        {
            "xValue": "Sep 07",
            "yValue0": 4.20,
            "yValue1": 4.43,
            "yValue2": 4.40
        },
        {
            "xValue": "Oct 07",
            "yValue0": 4.20,
            "yValue1": 4.43,
            "yValue2": 4.45
        },
        {
            "xValue": "Nov 07",
            "yValue0": 4.40,
            "yValue1": 4.46,
            "yValue2": 4.50
        },
        {
            "xValue": "Dec 07",
            "yValue0": 4.90,
            "yValue1": 4.73,
            "yValue2": 4.54
        },
        {
            "xValue": "Jan 08",
            "yValue0": 5.40,
            "yValue1": 4.66,
            "yValue2": 4.60
        },
        {
            "xValue": "Feb 08",
            "yValue0": 5.10,
            "yValue1": 4.58,
            "yValue2": 4.67
        },
        {
            "xValue": "Mar 08",
            "yValue0": 5.20,
            "yValue1": 4.80,
            "yValue2": 4.77
        },
        {
            "xValue": "Apr 08",
            "yValue0": 4.40,
            "yValue1": 4.75,
            "yValue2": 4.91
        },
        {
            "xValue": "May 08",
            "yValue0": 4.50,
            "yValue1": 5.12,
            "yValue2": 5.08
        },
        {
            "xValue": "Jun 08",
            "yValue0": 5.10,
            "yValue1": 5.27,
            "yValue2": 5.27
        },
        {
            "xValue": "Jul 08",
            "yValue0": 5.50,
            "yValue1": 5.52,
            "yValue2": 5.49
        },
        {
            "xValue": "Aug 08",
            "yValue0": 5.60,
            "yValue1": 5.81,
            "yValue2": 5.72
        },
        {
            "xValue": "Sep 08",
            "yValue0": 5.60,
            "yValue1": 5.88,
            "yValue2": 5.97
        },
        {
            "xValue": "Oct 08",
            "yValue0": 5.90,
            "yValue1": 6.20,
            "yValue2": 6.26
        },
        {
            "xValue": "Nov 08",
            "yValue0": 6.40,
            "yValue1": 6.55,
            "yValue2": 6.57
        },
        {
            "xValue": "Dec 08",
            "yValue0": 7.20,
            "yValue1": 6.96,
            "yValue2": 6.92
        },
        {
            "xValue": "Jan 09",
            "yValue0": 8.40,
            "yValue1": 7.28,
            "yValue2": 7.29
        },
        {
            "xValue": "Feb 09",
            "yValue0": 8.50,
            "yValue1": 7.70,
            "yValue2": 7.66
        },
        {
            "xValue": "Mar 09",
            "yValue0": 8.60,
            "yValue1": 7.96,
            "yValue2": 8.00
        },
        {
            "xValue": "Apr 09",
            "yValue0": 7.70,
            "yValue1": 8.27,
            "yValue2": 8.29
        },
        {
            "xValue": "May 09",
            "yValue0": 7.70,
            "yValue1": 8.68,
            "yValue2": 8.52
        },
        {
            "xValue": "Jun 09",
            "yValue0": 8.50,
            "yValue1": 8.77,
            "yValue2": 8.72
        },
        {
            "xValue": "Jul 09",
            "yValue0": 8.60,
            "yValue1": 8.64,
            "yValue2": 8.88
        },
        {
            "xValue": "Aug 09",
            "yValue0": 8.60,
            "yValue1": 8.88,
            "yValue2": 9.01
        },
        {
            "xValue": "Sep 09",
            "yValue0": 8.80,
            "yValue1": 9.23,
            "yValue2": 9.13
        },
        {
            "xValue": "Oct 09",
            "yValue0": 9.00,
            "yValue1": 9.41,
            "yValue2": 9.25
        },
        {
            "xValue": "Nov 09",
            "yValue0": 9.00,
            "yValue1": 9.27,
            "yValue2": 9.39
        },
        {
            "xValue": "Dec 09",
            "yValue0": 9.80,
            "yValue1": 9.45,
            "yValue2": 9.55
        },
        {
            "xValue": "Jan 10",
            "yValue0": 11.10,
            "yValue1": 9.65,
            "yValue2": 9.70
        },
        {
            "xValue": "Feb 10",
            "yValue0": 10.80,
            "yValue1": 9.85,
            "yValue2": 9.83
        },
        {
            "xValue": "Mar 10",
            "yValue0": 10.80,
            "yValue1": 10.05,
            "yValue2": 9.90
        },
        {
            "xValue": "Apr 10",
            "yValue0": 9.40,
            "yValue1": 10.09,
            "yValue2": 9.93
        },
        {
            "xValue": "May 10",
            "yValue0": 8.80,
            "yValue1": 9.86,
            "yValue2": 9.91
        },
        {
            "xValue": "Jun 10",
            "yValue0": 9.40,
            "yValue1": 9.66,
            "yValue2": 9.88
        },
        {
            "xValue": "Jul 10",
            "yValue0": 9.80,
            "yValue1": 9.85,
            "yValue2": 9.88
        },
        {
            "xValue": "Aug 10",
            "yValue0": 9.60,
            "yValue1": 9.89,
            "yValue2": 9.91
        },
        {
            "xValue": "Sep 10",
            "yValue0": 9.60,
            "yValue1": 10.07,
            "yValue2": 9.95
        },
        {
            "xValue": "Oct 10",
            "yValue0": 9.60,
            "yValue1": 9.97,
            "yValue2": 9.96
        },
        {
            "xValue": "Nov 10",
            "yValue0": 10.10,
            "yValue1": 10.41,
            "yValue2": 9.92
        },
        {
            "xValue": "Dec 10",
            "yValue0": 10.30,
            "yValue1": 9.92,
            "yValue2": 9.84
        },
        {
            "xValue": "Jan 11",
            "yValue0": 10.90,
            "yValue1": 9.51,
            "yValue2": 9.76
        },
        {
            "xValue": "Feb 11",
            "yValue0": 10.40,
            "yValue1": 9.51,
            "yValue2": 9.70
        },
        {
            "xValue": "Mar 11",
            "yValue0": 10.30,
            "yValue1": 9.64,
            "yValue2": 9.68
        },
        {
            "xValue": "Apr 11",
            "yValue0": 9.10,
            "yValue1": 9.79,
            "yValue2": 9.68
        },
        {
            "xValue": "May 11",
            "yValue0": 8.70,
            "yValue1": 9.75,
            "yValue2": 9.69
        },
        {
            "xValue": "Jun 11",
            "yValue0": 9.50,
            "yValue1": 9.75,
            "yValue2": 9.68
        },
        {
            "xValue": "Jul 11",
            "yValue0": 9.50,
            "yValue1": 9.50,
            "yValue2": 9.66
        },
        {
            "xValue": "Aug 11",
            "yValue0": 9.30,
            "yValue1": 9.54,
            "yValue2": 9.61
        },
        {
            "xValue": "Sep 11",
            "yValue0": 9.20,
            "yValue1": 9.69,
            "yValue2": 9.54
        },
        {
            "xValue": "Oct 11",
            "yValue0": 9.20,
            "yValue1": 9.55,
            "yValue2": 9.43
        },
        {
            "xValue": "Nov 11",
            "yValue0": 9.00,
            "yValue1": 9.25,
            "yValue2": 9.30
        },
        {
            "xValue": "Dec 11",
            "yValue0": 9.50,
            "yValue1": 9.14,
            "yValue2": 9.16
        },
        {
            "xValue": "Jan 12",
            "yValue0": 9.90,
            "yValue1": 8.63,
            "yValue2": 9.03
        },
        {
            "xValue": "Feb 12",
            "yValue0": 9.70,
            "yValue1": 8.85,
            "yValue2": 8.96
        },
        {
            "xValue": "Mar 12",
            "yValue0": 9.40,
            "yValue1": 8.84,
            "yValue2": 8.93
        },
        {
            "xValue": "Apr 12",
            "yValue0": 8.30,
            "yValue1": 8.98,
            "yValue2": 8.91
        },
        {
            "xValue": "May 12",
            "yValue0": 8.00,
            "yValue1": 9.01,
            "yValue2": 8.88
        },
        {
            "xValue": "Jun 12",
            "yValue0": 8.60,
            "yValue1": 8.81,
            "yValue2": 8.79
        },
        {
            "xValue": "Jul 12",
            "yValue0": 8.70,
            "yValue1": 8.66,
            "yValue2": 8.65
        },
        {
            "xValue": "Aug 12",
            "yValue0": 8.30,
            "yValue1": 8.49,
            "yValue2": 8.47
        },
        {
            "xValue": "Sep 12",
            "yValue0": 7.70,
            "yValue1": 8.17,
            "yValue2": 8.30
        },
        {
            "xValue": "Oct 12",
            "yValue0": 7.80,
            "yValue1": 8.11,
            "yValue2": 8.14
        },
        {
            "xValue": "Nov 12",
            "yValue0": 7.80,
            "yValue1": 8.01,
            "yValue2": 8.01
        },
        {
            "xValue": "Dec 12",
            "yValue0": 8.30,
            "yValue1": 7.96,
            "yValue2": 7.87
        },
        {
            "xValue": "Jan 13",
            "yValue0": 9.00,
            "yValue1": 7.80,
            "yValue2": 7.74
        },
        {
            "xValue": "Feb 13",
            "yValue0": 8.40,
            "yValue1": 7.61,
            "yValue2": 7.62
        },
        {
            "xValue": "Mar 13",
            "yValue0": 7.90,
            "yValue1": 7.41,
            "yValue2": 7.52
        },
        {
            "xValue": "Apr 13",
            "yValue0": 6.80,
            "yValue1": 7.41,
            "yValue2": 7.45
        },
        {
            "xValue": "May 13",
            "yValue0": 6.50,
            "yValue1": 7.41,
            "yValue2": 7.41
        },
        {
            "xValue": "Jun 13",
            "yValue0": 7.30,
            "yValue1": 7.48,
            "yValue2": 7.38
        },
        {
            "xValue": "Jul 13",
            "yValue0": 7.40,
            "yValue1": 7.34,
            "yValue2": 7.35
        },
        {
            "xValue": "Aug 13",
            "yValue0": 7.10,
            "yValue1": 7.25,
            "yValue2": 7.29
        },
        {
            "xValue": "Sep 13",
            "yValue0": 6.70,
            "yValue1": 7.20,
            "yValue2": 7.19
        },
        {
            "xValue": "Oct 13",
            "yValue0": 6.80,
            "yValue1": 7.12,
            "yValue2": 7.06
        },
        {
            "xValue": "Nov 13",
            "yValue0": 6.80,
            "yValue1": 6.99,
            "yValue2": 6.91
        },
        {
            "xValue": "Dec 13",
            "yValue0": 6.90,
            "yValue1": 6.59,
            "yValue2": 6.76
        },
        {
            "xValue": "Jan 14",
            "yValue0": 7.60,
            "yValue1": 6.52,
            "yValue2": 6.61
        },
        {
            "xValue": "Feb 14",
            "yValue0": 7.40,
            "yValue1": 6.61,
            "yValue2": 6.47
        },
        {
            "xValue": "Mar 14",
            "yValue0": 6.90,
            "yValue1": 6.43,
            "yValue2": 6.36
        },
        {
            "xValue": "Apr 14",
            "yValue0": 5.60,
            "yValue1": 6.13,
            "yValue2": 6.28
        },
        {
            "xValue": "May 14",
            "yValue0": 5.40,
            "yValue1": 6.24,
            "yValue2": 6.22
        },
        {
            "xValue": "Jun 14",
            "yValue0": 5.90,
            "yValue1": 6.05,
            "yValue2": 6.19
        },
        {
            "xValue": "Jul 14",
            "yValue0": 6.30,
            "yValue1": 6.25,
            "yValue2": 6.17
        },
        {
            "xValue": "Aug 14",
            "yValue0": 6.10,
            "yValue1": 6.24,
            "yValue2": 6.14
        },
        {
            "xValue": "Sep 14",
            "yValue0": 5.60,
            "yValue1": 6.11,
            "yValue2": 6.10
        },
        {
            "xValue": "Oct 14",
            "yValue0": 5.60,
            "yValue1": 5.94,
            "yValue2": 6.01
        },
        {
            "xValue": "Nov 14",
            "yValue0": 5.90,
            "yValue1": 6.11,
            "yValue2": 5.89
        },
        {
            "xValue": "Dec 14",
            "yValue0": 6.00,
            "yValue1": 5.72,
            "yValue2": 5.75
        },
        {
            "xValue": "Jan 15",
            "yValue0": 6.70,
            "yValue1": 5.66,
            "yValue2": 5.62
        },
        {
            "xValue": "Feb 15",
            "yValue0": 6.20,
            "yValue1": 5.44,
            "yValue2": 5.51
        },
        {
            "xValue": "Mar 15",
            "yValue0": 5.70,
            "yValue1": 5.23,
            "yValue2": 5.42
        },
        {
            "xValue": "Apr 15",
            "yValue0": 4.90,
            "yValue1": 5.35,
            "yValue2": 5.34
        },
        {
            "xValue": "May 15",
            "yValue0": 4.80,
            "yValue1": 5.65,
            "yValue2": 5.28
        },
        {
            "xValue": "Jun 15",
            "yValue0": 5.10,
            "yValue1": 5.23,
            "yValue2": 5.23
        },
        {
            "xValue": "Jul 15",
            "yValue0": 5.20,
            "yValue1": 5.16,
            "yValue2": 5.19
        },
        {
            "xValue": "Aug 15",
            "yValue0": 5.00,
            "yValue1": 5.14,
            "yValue2": 5.18
        },
        {
            "xValue": "Sep 15",
            "yValue0": 4.60,
            "yValue1": 5.10,
            "yValue2": 5.18
        },
        {
            "xValue": "Oct 15",
            "yValue0": 4.90,
            "yValue1": 5.30,
            "yValue2": 5.20
        },
        {
            "xValue": "Nov 15",
            "yValue0": 5.30,
            "yValue1": 5.58,
            "yValue2": 5.21
        },
        {
            "xValue": "Dec 15",
            "yValue0": 5.60,
            "yValue1": 5.35,
            "yValue2": 5.21
        },
        {
            "xValue": "Jan 16",
            "yValue0": 6.10,
            "yValue1": 5.07,
            "yValue2": 5.18
        },
        {
            "xValue": "Feb 16",
            "yValue0": 5.90,
            "yValue1": 5.10,
            "yValue2": 5.14
        },
        {
            "xValue": "Mar 16",
            "yValue0": 5.70,
            "yValue1": 5.13,
            "yValue2": 5.08
        },
        {
            "xValue": "Apr 16",
            "yValue0": 4.70,
            "yValue1": 5.09,
            "yValue2": 5.02
        },
        {
            "xValue": "May 16",
            "yValue0": 4.10,
            "yValue1": 4.88,
            "yValue2": 4.99
        },
        {
            "xValue": "Jun 16",
            "yValue0": 4.90,
            "yValue1": 5.00,
            "yValue2": 4.97
        },
        {
            "xValue": "Jul 16",
            "yValue0": 5.00,
            "yValue1": 4.94,
            "yValue2": 4.99
        },
        {
            "xValue": "Aug 16",
            "yValue0": 4.80,
            "yValue1": 4.94,
            "yValue2": 5.03
        },
        {
            "xValue": "Sep 16",
            "yValue0": 4.60,
            "yValue1": 5.18,
            "yValue2": 5.10
        },
        {
            "xValue": "Oct 16",
            "yValue0": 4.70,
            "yValue1": 5.19,
            "yValue2": 5.16
        },
        {
            "xValue": "Nov 16",
            "yValue0": 4.80,
            "yValue1": 5.17,
            "yValue2": 5.18
        },
        {
            "xValue": "Dec 16",
            "yValue0": 5.60,
            "yValue1": 5.42,
            "yValue2": 5.16
        },
        {
            "xValue": "Jan 17",
            "yValue0": 6.20,
            "yValue1": 5.11,
            "yValue2": 5.08
        },
        {
            "xValue": "Feb 17",
            "yValue0": 5.90,
            "yValue1": 5.06,
            "yValue2": 4.95
        },
        {
            "xValue": "Mar 17",
            "yValue0": 5.40,
            "yValue1": 4.76,
            "yValue2": 4.80
        },
        {
            "xValue": "Apr 17",
            "yValue0": 4.30,
            "yValue1": 4.57,
            "yValue2": 4.65
        },
        {
            "xValue": "May 17",
            "yValue0": 3.80,
            "yValue1": 4.52,
            "yValue2": 4.53
        },
        {
            "xValue": "Jun 17",
            "yValue0": 4.30,
            "yValue1": 4.32,
            "yValue2": 4.44
        },
        {
            "xValue": "Jul 17",
            "yValue0": 4.50,
            "yValue1": 4.42,
            "yValue2": 4.39
        },
        {
            "xValue": "Aug 17",
            "yValue0": 4.30,
            "yValue1": 4.42,
            "yValue2": 4.37
        },
        {
            "xValue": "Sep 17",
            "yValue0": 3.80,
            "yValue1": 4.35,
            "yValue2": 4.37
        },
        {
            "xValue": "Oct 17",
            "yValue0": 3.80,
            "yValue1": 4.30,
            "yValue2": 4.38
        },
        {
            "xValue": "Nov 17",
            "yValue0": 4.00,
            "yValue1": 4.44,
            "yValue2": 4.40
        },
        {
            "xValue": "Dec 17",
            "yValue0": 4.40,
            "yValue1": 4.34,
            "yValue2": 4.38
        },
        {
            "xValue": "Jan 18",
            "yValue0": 5.40,
            "yValue1": 4.45,
            "yValue2": 4.33
        },
        {
            "xValue": "Feb 18",
            "yValue0": 5.00,
            "yValue1": 4.27,
            "yValue2": 4.23
        },
        {
            "xValue": "Mar 18",
            "yValue0": 4.70,
            "yValue1": 4.09,
            "yValue2": 4.08
        },
        {
            "xValue": "Apr 18",
            "yValue0": 3.80,
            "yValue1": 3.96,
            "yValue2": 3.93
        },
        {
            "xValue": "May 18",
            "yValue0": 3.10,
            "yValue1": 3.63,
            "yValue2": 3.80
        },
        {
            "xValue": "Jun 18",
            "yValue0": 3.80,
            "yValue1": 3.73,
            "yValue2": 3.72
        },
        {
            "xValue": "Jul 18",
            "yValue0": 3.80,
            "yValue1": 3.70,
            "yValue2": 3.70
        },
        {
            "xValue": "Aug 18",
            "yValue0": 3.70,
            "yValue1": 3.78,
            "yValue2": 3.75
        },
        {
            "xValue": "Sep 18",
            "yValue0": 3.30,
            "yValue1": 3.81,
            "yValue2": 3.85
        },
        {
            "xValue": "Oct 18",
            "yValue0": 3.40,
            "yValue1": 3.92,
            "yValue2": 3.98
        },
        {
            "xValue": "Nov 18",
            "yValue0": 3.50,
            "yValue1": 3.99,
            "yValue2": 4.11
        },
        {
            "xValue": "Dec 18",
            "yValue0": 4.30,
            "yValue1": 4.37,
            "yValue2": 4.18
        },
        {
            "xValue": "Jan 19",
            "yValue0": 5.20,
            "yValue1": 4.32,
            "yValue2": 4.16
        },
        {
            "xValue": "Feb 19",
            "yValue0": 4.70,
            "yValue1": 4.02,
            "yValue2": 4.03
        },
        {
            "xValue": "Mar 19",
            "yValue0": 4.60,
            "yValue1": 3.99,
            "yValue2": 3.84
        },
        {
            "xValue": "Apr 19",
            "yValue0": 3.40,
            "yValue1": 3.48,
            "yValue2": 3.63
        },
        {
            "xValue": "May 19",
            "yValue0": 2.90,
            "yValue1": 3.33,
            "yValue2": 3.46
        },
        {
            "xValue": "Jun 19",
            "yValue0": 3.40,
            "yValue1": 3.27,
            "yValue2": 3.36
        },
        {
            "xValue": "Jul 19",
            "yValue0": 3.60,
            "yValue1": 3.46,
            "yValue2": 3.34
        },
        {
            "xValue": "Aug 19",
            "yValue0": 3.40,
            "yValue1": 3.44,
            "yValue2": 3.34
        },
        {
            "xValue": "Sep 19",
            "yValue0": 3.00,
            "yValue1": 3.47,
            "yValue2": 3.37
        },
        {
            "xValue": "Oct 19",
            "yValue0": 3.10,
            "yValue1": 3.62,
            "yValue2": 3.47
        },
        {
            "xValue": "Nov 19",
            "yValue0": 3.20,
            "yValue1": 3.72,
            "yValue2": 3.76
        },
        {
            "xValue": "Dec 19",
            "yValue0": 3.70,
            "yValue1": 3.84,
            "yValue2": 4.34
        },
        {
            "xValue": "Jan 20",
            "yValue0": 4.60,
            "yValue1": 3.87,
            "yValue2": 5.27
        },
        {
            "xValue": "Feb 20",
            "yValue0": 4.40,
            "yValue1": 3.79,
            "yValue2": 6.48
        },
        {
            "xValue": "Mar 20",
            "yValue0": 6.10,
            "yValue1": 5.33,
            "yValue2": 7.75
        },
        {
            "xValue": "Apr 20",
            "yValue0": 13.80,
            "yValue1": 14.00,
            "yValue2": 8.86
        },
        {
            "xValue": "May 20",
            "yValue0": 13.00,
            "yValue1": 14.61,
            "yValue2": 9.57
        },
        {
            "xValue": "Jun 20",
            "yValue0": 10.80,
            "yValue1": 10.22,
            "yValue2": 9.80
        },
        {
            "xValue": "Jul 20",
            "yValue0": 9.90,
            "yValue1": 9.40,
            "yValue2": 9.60
        },
        {
            "xValue": "Aug 20",
            "yValue0": 8.10,
            "yValue1": 8.11,
            "yValue2": 9.17
        },
        {
            "xValue": "Sep 20",
            "yValue0": 7.40,
            "yValue1": 8.52,
            "yValue2": 8.67
        },
        {
            "xValue": "Oct 20",
            "yValue0": 6.60,
            "yValue1": 7.71,
            "yValue2": 8.22
        },
        {
            "xValue": "Nov 20",
            "yValue0": 6.70,
            "yValue1": 7.85,
            "yValue2": 7.86
        },
        {
            "xValue": "Dec 20",
            "yValue0": 7.60,
            "yValue1": 8.03,
            "yValue2": 7.56
        },
        {
            "xValue": "Jan 21",
            "yValue0": 8.40,
            "yValue1": 7.16,
            "yValue2": 7.27
        },
        {
            "xValue": "Feb 21",
            "yValue0": 8.00,
            "yValue1": 6.94,
            "yValue2": 6.97
        },
        {
            "xValue": "Mar 21",
            "yValue0": 7.30,
            "yValue1": 6.47,
            "yValue2": 6.66
        },
        {
            "xValue": "Apr 21",
            "yValue0": 6.40,
            "yValue1": 6.46,
            "yValue2": 6.35
        },
        {
            "xValue": "May 21",
            "yValue0": 5.60,
            "yValue1": 6.19,
            "yValue2": 6.06
        },
        {
            "xValue": "Jun 21",
            "yValue0": 6.20,
            "yValue1": 5.80,
            "yValue2": 5.81
        },
        {
            "xValue": "Jul 21",
            "yValue0": 5.70,
            "yValue1": 5.36,
            "yValue2": 5.58
        },
        {
            "xValue": "Aug 21",
            "yValue0": 5.40,
            "yValue1": 5.38,
            "yValue2": 5.34
        },
        {
            "xValue": "Sep 21",
            "yValue0": 4.50,
            "yValue1": 5.15,
            "yValue2": 5.11
        },
        {
            "xValue": "Oct 21",
            "yValue0": 4.30,
            "yValue1": 5.01,
            "yValue2": 4.87
        },
        {
            "xValue": "Nov 21",
            "yValue0": 3.90,
            "yValue1": 4.57,
            "yValue2": 4.60
        },
        {
            "xValue": "Dec 21",
            "yValue0": 3.90,
            "yValue1": 4.14,
            "yValue2": 4.29
        },
        {
            "xValue": "Jan 22",
            "yValue0": 4.80,
            "yValue1": 4.13,
            "yValue2": 3.95
        },
        {
            "xValue": "Feb 22",
            "yValue0": 4.30,
            "yValue1": 3.76,
            "yValue2": 3.61
        },
        {
            "xValue": "Mar 22",
            "yValue0": 3.60,
            "yValue1": 3.24,
            "yValue2": 3.33
        },
        {
            "xValue": "Apr 22",
            "yValue0": 2.80,
            "yValue1": 2.82,
            "yValue2": 3.15
        },
        {
            "xValue": "May 22",
            "yValue0": 2.40,
            "yValue1": 2.63,
            "yValue2": 3.08
        },
        {
            "xValue": "Jun 22",
            "yValue0": 3.35,
            "yValue1": 3.12,
            "yValue2": 3.11
        }
    ],
});