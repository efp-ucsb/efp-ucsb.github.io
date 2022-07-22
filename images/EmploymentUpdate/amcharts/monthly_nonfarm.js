var chart = AmCharts.makeChart("monthly_nonfarm" , { 
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
        "text": "Total Nonfarm Payrolls, Seasonally Adjusted",
        "size": 20 
    }],
    "gridAboveGraphs": true, 
    "startDuration": 1, 
    "valueAxes": [{
        "gridAlpha": 0.07,
        "axisAlpha": 1,
        "position": "left",
        "title": "Index (Dec 2007 = \ 100)"
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
            "xValue": "Jan 00",
            "yValue0": 92.92,
            "yValue1": 92.73,
            "yValue2": 94.66
        },
        {
            "xValue": "Feb 00",
            "yValue0": 93.03,
            "yValue1": 93.00,
            "yValue2": 94.75
        },
        {
            "xValue": "Mar 00",
            "yValue0": 93.46,
            "yValue1": 93.28,
            "yValue2": 95.09
        },
        {
            "xValue": "Apr 00",
            "yValue0": 93.30,
            "yValue1": 93.55,
            "yValue2": 95.30
        },
        {
            "xValue": "May 00",
            "yValue0": 94.12,
            "yValue1": 93.94,
            "yValue2": 95.46
        },
        {
            "xValue": "Jun 00",
            "yValue0": 94.37,
            "yValue1": 94.22,
            "yValue2": 95.43
        },
        {
            "xValue": "Jul 00",
            "yValue0": 94.49,
            "yValue1": 94.45,
            "yValue2": 95.55
        },
        {
            "xValue": "Aug 00",
            "yValue0": 94.16,
            "yValue1": 94.72,
            "yValue2": 95.55
        },
        {
            "xValue": "Sep 00",
            "yValue0": 94.69,
            "yValue1": 95.05,
            "yValue2": 95.64
        },
        {
            "xValue": "Oct 00",
            "yValue0": 94.60,
            "yValue1": 95.02,
            "yValue2": 95.63
        },
        {
            "xValue": "Nov 00",
            "yValue0": 94.93,
            "yValue1": 95.39,
            "yValue2": 95.78
        },
        {
            "xValue": "Dec 00",
            "yValue0": 95.26,
            "yValue1": 95.65,
            "yValue2": 95.89
        },
        {
            "xValue": "Jan 01",
            "yValue0": 95.17,
            "yValue1": 95.87,
            "yValue2": 95.89
        },
        {
            "xValue": "Feb 01",
            "yValue0": 95.24,
            "yValue1": 95.85,
            "yValue2": 95.95
        },
        {
            "xValue": "Mar 01",
            "yValue0": 95.20,
            "yValue1": 95.86,
            "yValue2": 95.92
        },
        {
            "xValue": "Apr 01",
            "yValue0": 95.54,
            "yValue1": 95.56,
            "yValue2": 95.72
        },
        {
            "xValue": "May 01",
            "yValue0": 94.97,
            "yValue1": 95.38,
            "yValue2": 95.68
        },
        {
            "xValue": "Jun 01",
            "yValue0": 95.06,
            "yValue1": 95.31,
            "yValue2": 95.60
        },
        {
            "xValue": "Jul 01",
            "yValue0": 94.76,
            "yValue1": 94.91,
            "yValue2": 95.51
        },
        {
            "xValue": "Aug 01",
            "yValue0": 94.97,
            "yValue1": 94.97,
            "yValue2": 95.40
        },
        {
            "xValue": "Sep 01",
            "yValue0": 94.35,
            "yValue1": 94.69,
            "yValue2": 95.22
        },
        {
            "xValue": "Oct 01",
            "yValue0": 94.24,
            "yValue1": 94.51,
            "yValue2": 94.99
        },
        {
            "xValue": "Nov 01",
            "yValue0": 93.94,
            "yValue1": 94.32,
            "yValue2": 94.76
        },
        {
            "xValue": "Dec 01",
            "yValue0": 94.27,
            "yValue1": 94.19,
            "yValue2": 94.65
        },
        {
            "xValue": "Jan 02",
            "yValue0": 94.17,
            "yValue1": 94.16,
            "yValue2": 94.55
        },
        {
            "xValue": "Feb 02",
            "yValue0": 94.48,
            "yValue1": 94.21,
            "yValue2": 94.47
        },
        {
            "xValue": "Mar 02",
            "yValue0": 94.74,
            "yValue1": 94.35,
            "yValue2": 94.45
        },
        {
            "xValue": "Apr 02",
            "yValue0": 94.32,
            "yValue1": 94.38,
            "yValue2": 94.39
        },
        {
            "xValue": "May 02",
            "yValue0": 94.63,
            "yValue1": 94.45,
            "yValue2": 94.39
        },
        {
            "xValue": "Jun 02",
            "yValue0": 94.35,
            "yValue1": 94.40,
            "yValue2": 94.43
        },
        {
            "xValue": "Jul 02",
            "yValue0": 94.68,
            "yValue1": 94.17,
            "yValue2": 94.36
        },
        {
            "xValue": "Aug 02",
            "yValue0": 94.35,
            "yValue1": 94.33,
            "yValue2": 94.36
        },
        {
            "xValue": "Sep 02",
            "yValue0": 94.51,
            "yValue1": 94.35,
            "yValue2": 94.30
        },
        {
            "xValue": "Oct 02",
            "yValue0": 94.02,
            "yValue1": 94.36,
            "yValue2": 94.39
        },
        {
            "xValue": "Nov 02",
            "yValue0": 94.00,
            "yValue1": 94.49,
            "yValue2": 94.38
        },
        {
            "xValue": "Dec 02",
            "yValue0": 93.95,
            "yValue1": 94.42,
            "yValue2": 94.28
        },
        {
            "xValue": "Jan 03",
            "yValue0": 94.03,
            "yValue1": 94.32,
            "yValue2": 94.36
        },
        {
            "xValue": "Feb 03",
            "yValue0": 94.18,
            "yValue1": 94.21,
            "yValue2": 94.26
        },
        {
            "xValue": "Mar 03",
            "yValue0": 93.75,
            "yValue1": 94.09,
            "yValue2": 94.10
        },
        {
            "xValue": "Apr 03",
            "yValue0": 94.63,
            "yValue1": 94.13,
            "yValue2": 94.06
        },
        {
            "xValue": "May 03",
            "yValue0": 94.57,
            "yValue1": 94.14,
            "yValue2": 94.08
        },
        {
            "xValue": "Jun 03",
            "yValue0": 94.26,
            "yValue1": 94.14,
            "yValue2": 94.08
        },
        {
            "xValue": "Jul 03",
            "yValue0": 94.30,
            "yValue1": 93.99,
            "yValue2": 94.07
        },
        {
            "xValue": "Aug 03",
            "yValue0": 94.63,
            "yValue1": 94.13,
            "yValue2": 94.04
        },
        {
            "xValue": "Sep 03",
            "yValue0": 95.06,
            "yValue1": 94.14,
            "yValue2": 94.12
        },
        {
            "xValue": "Oct 03",
            "yValue0": 95.51,
            "yValue1": 94.26,
            "yValue2": 94.26
        },
        {
            "xValue": "Nov 03",
            "yValue0": 95.62,
            "yValue1": 94.20,
            "yValue2": 94.28
        },
        {
            "xValue": "Dec 03",
            "yValue0": 95.70,
            "yValue1": 94.32,
            "yValue2": 94.36
        },
        {
            "xValue": "Jan 04",
            "yValue0": 96.38,
            "yValue1": 94.55,
            "yValue2": 94.49
        },
        {
            "xValue": "Feb 04",
            "yValue0": 95.95,
            "yValue1": 94.64,
            "yValue2": 94.53
        },
        {
            "xValue": "Mar 04",
            "yValue0": 95.95,
            "yValue1": 94.80,
            "yValue2": 94.76
        },
        {
            "xValue": "Apr 04",
            "yValue0": 96.16,
            "yValue1": 94.88,
            "yValue2": 94.96
        },
        {
            "xValue": "May 04",
            "yValue0": 95.77,
            "yValue1": 95.05,
            "yValue2": 95.16
        },
        {
            "xValue": "Jun 04",
            "yValue0": 96.41,
            "yValue1": 95.07,
            "yValue2": 95.23
        },
        {
            "xValue": "Jul 04",
            "yValue0": 96.34,
            "yValue1": 95.56,
            "yValue2": 95.27
        },
        {
            "xValue": "Aug 04",
            "yValue0": 96.61,
            "yValue1": 95.46,
            "yValue2": 95.34
        },
        {
            "xValue": "Sep 04",
            "yValue0": 96.59,
            "yValue1": 95.52,
            "yValue2": 95.45
        },
        {
            "xValue": "Oct 04",
            "yValue0": 96.82,
            "yValue1": 95.85,
            "yValue2": 95.70
        },
        {
            "xValue": "Nov 04",
            "yValue0": 96.72,
            "yValue1": 96.00,
            "yValue2": 95.74
        },
        {
            "xValue": "Dec 04",
            "yValue0": 96.61,
            "yValue1": 96.04,
            "yValue2": 95.83
        },
        {
            "xValue": "Jan 05",
            "yValue0": 96.67,
            "yValue1": 96.18,
            "yValue2": 95.94
        },
        {
            "xValue": "Feb 05",
            "yValue0": 97.11,
            "yValue1": 96.35,
            "yValue2": 96.13
        },
        {
            "xValue": "Mar 05",
            "yValue0": 97.63,
            "yValue1": 96.51,
            "yValue2": 96.22
        },
        {
            "xValue": "Apr 05",
            "yValue0": 98.12,
            "yValue1": 96.79,
            "yValue2": 96.48
        },
        {
            "xValue": "May 05",
            "yValue0": 98.07,
            "yValue1": 96.85,
            "yValue2": 96.60
        },
        {
            "xValue": "Jun 05",
            "yValue0": 98.23,
            "yValue1": 96.89,
            "yValue2": 96.78
        },
        {
            "xValue": "Jul 05",
            "yValue0": 98.57,
            "yValue1": 97.33,
            "yValue2": 97.04
        },
        {
            "xValue": "Aug 05",
            "yValue0": 98.42,
            "yValue1": 97.51,
            "yValue2": 97.19
        },
        {
            "xValue": "Sep 05",
            "yValue0": 98.52,
            "yValue1": 97.79,
            "yValue2": 97.24
        },
        {
            "xValue": "Oct 05",
            "yValue0": 98.58,
            "yValue1": 97.85,
            "yValue2": 97.30
        },
        {
            "xValue": "Nov 05",
            "yValue0": 98.52,
            "yValue1": 98.08,
            "yValue2": 97.54
        },
        {
            "xValue": "Dec 05",
            "yValue0": 98.75,
            "yValue1": 98.31,
            "yValue2": 97.66
        },
        {
            "xValue": "Jan 06",
            "yValue0": 98.47,
            "yValue1": 98.38,
            "yValue2": 97.86
        },
        {
            "xValue": "Feb 06",
            "yValue0": 98.60,
            "yValue1": 98.57,
            "yValue2": 98.08
        },
        {
            "xValue": "Mar 06",
            "yValue0": 98.21,
            "yValue1": 98.63,
            "yValue2": 98.31
        },
        {
            "xValue": "Apr 06",
            "yValue0": 98.22,
            "yValue1": 98.55,
            "yValue2": 98.42
        },
        {
            "xValue": "May 06",
            "yValue0": 98.81,
            "yValue1": 98.95,
            "yValue2": 98.45
        },
        {
            "xValue": "Jun 06",
            "yValue0": 98.78,
            "yValue1": 99.10,
            "yValue2": 98.51
        },
        {
            "xValue": "Jul 06",
            "yValue0": 98.27,
            "yValue1": 99.17,
            "yValue2": 98.65
        },
        {
            "xValue": "Aug 06",
            "yValue0": 98.15,
            "yValue1": 99.29,
            "yValue2": 98.77
        },
        {
            "xValue": "Sep 06",
            "yValue0": 98.44,
            "yValue1": 99.37,
            "yValue2": 98.88
        },
        {
            "xValue": "Oct 06",
            "yValue0": 97.95,
            "yValue1": 99.37,
            "yValue2": 98.89
        },
        {
            "xValue": "Nov 06",
            "yValue0": 98.22,
            "yValue1": 99.41,
            "yValue2": 99.04
        },
        {
            "xValue": "Dec 06",
            "yValue0": 98.01,
            "yValue1": 99.45,
            "yValue2": 99.17
        },
        {
            "xValue": "Jan 07",
            "yValue0": 98.62,
            "yValue1": 99.66,
            "yValue2": 99.34
        },
        {
            "xValue": "Feb 07",
            "yValue0": 98.84,
            "yValue1": 99.78,
            "yValue2": 99.40
        },
        {
            "xValue": "Mar 07",
            "yValue0": 99.16,
            "yValue1": 99.97,
            "yValue2": 99.57
        },
        {
            "xValue": "Apr 07",
            "yValue0": 98.78,
            "yValue1": 99.54,
            "yValue2": 99.60
        },
        {
            "xValue": "May 07",
            "yValue0": 99.09,
            "yValue1": 99.78,
            "yValue2": 99.71
        },
        {
            "xValue": "Jun 07",
            "yValue0": 98.93,
            "yValue1": 99.85,
            "yValue2": 99.77
        },
        {
            "xValue": "Jul 07",
            "yValue0": 99.32,
            "yValue1": 100.24,
            "yValue2": 99.74
        },
        {
            "xValue": "Aug 07",
            "yValue0": 99.62,
            "yValue1": 100.05,
            "yValue2": 99.73
        },
        {
            "xValue": "Sep 07",
            "yValue0": 99.34,
            "yValue1": 99.98,
            "yValue2": 99.79
        },
        {
            "xValue": "Oct 07",
            "yValue0": 99.65,
            "yValue1": 99.92,
            "yValue2": 99.84
        },
        {
            "xValue": "Nov 07",
            "yValue0": 99.84,
            "yValue1": 100.00,
            "yValue2": 99.92
        },
        {
            "xValue": "Dec 07",
            "yValue0": 100.00,
            "yValue1": 100.00,
            "yValue2": 100.00
        },
        {
            "xValue": "Jan 08",
            "yValue0": 99.76,
            "yValue1": 99.81,
            "yValue2": 100.01
        },
        {
            "xValue": "Feb 08",
            "yValue0": 99.96,
            "yValue1": 99.86,
            "yValue2": 99.95
        },
        {
            "xValue": "Mar 08",
            "yValue0": 99.79,
            "yValue1": 99.70,
            "yValue2": 99.92
        },
        {
            "xValue": "Apr 08",
            "yValue0": 99.71,
            "yValue1": 99.62,
            "yValue2": 99.74
        },
        {
            "xValue": "May 08",
            "yValue0": 99.36,
            "yValue1": 99.45,
            "yValue2": 99.61
        },
        {
            "xValue": "Jun 08",
            "yValue0": 99.13,
            "yValue1": 99.26,
            "yValue2": 99.49
        },
        {
            "xValue": "Jul 08",
            "yValue0": 98.86,
            "yValue1": 99.18,
            "yValue2": 99.35
        },
        {
            "xValue": "Aug 08",
            "yValue0": 98.09,
            "yValue1": 98.87,
            "yValue2": 99.15
        },
        {
            "xValue": "Sep 08",
            "yValue0": 98.89,
            "yValue1": 98.61,
            "yValue2": 98.82
        },
        {
            "xValue": "Oct 08",
            "yValue0": 99.00,
            "yValue1": 97.96,
            "yValue2": 98.47
        },
        {
            "xValue": "Nov 08",
            "yValue0": 97.81,
            "yValue1": 97.26,
            "yValue2": 97.94
        },
        {
            "xValue": "Dec 08",
            "yValue0": 97.66,
            "yValue1": 96.77,
            "yValue2": 97.43
        },
        {
            "xValue": "Jan 09",
            "yValue0": 96.94,
            "yValue1": 96.11,
            "yValue2": 96.87
        },
        {
            "xValue": "Feb 09",
            "yValue0": 96.07,
            "yValue1": 95.24,
            "yValue2": 96.33
        },
        {
            "xValue": "Mar 09",
            "yValue0": 95.83,
            "yValue1": 94.62,
            "yValue2": 95.75
        },
        {
            "xValue": "Apr 09",
            "yValue0": 94.94,
            "yValue1": 93.98,
            "yValue2": 95.25
        },
        {
            "xValue": "May 09",
            "yValue0": 94.31,
            "yValue1": 93.64,
            "yValue2": 95.00
        },
        {
            "xValue": "Jun 09",
            "yValue0": 94.34,
            "yValue1": 93.16,
            "yValue2": 94.66
        },
        {
            "xValue": "Jul 09",
            "yValue0": 94.11,
            "yValue1": 92.54,
            "yValue2": 94.42
        },
        {
            "xValue": "Aug 09",
            "yValue0": 93.91,
            "yValue1": 92.22,
            "yValue2": 94.29
        },
        {
            "xValue": "Sep 09",
            "yValue0": 93.53,
            "yValue1": 91.95,
            "yValue2": 94.11
        },
        {
            "xValue": "Oct 09",
            "yValue0": 94.25,
            "yValue1": 92.21,
            "yValue2": 93.97
        },
        {
            "xValue": "Nov 09",
            "yValue0": 93.79,
            "yValue1": 92.04,
            "yValue2": 93.98
        },
        {
            "xValue": "Dec 09",
            "yValue0": 92.96,
            "yValue1": 91.93,
            "yValue2": 93.78
        },
        {
            "xValue": "Jan 10",
            "yValue0": 93.55,
            "yValue1": 91.86,
            "yValue2": 93.78
        },
        {
            "xValue": "Feb 10",
            "yValue0": 93.13,
            "yValue1": 91.72,
            "yValue2": 93.72
        },
        {
            "xValue": "Mar 10",
            "yValue0": 93.21,
            "yValue1": 91.74,
            "yValue2": 93.85
        },
        {
            "xValue": "Apr 10",
            "yValue0": 93.55,
            "yValue1": 92.33,
            "yValue2": 94.02
        },
        {
            "xValue": "May 10",
            "yValue0": 94.09,
            "yValue1": 92.56,
            "yValue2": 94.41
        },
        {
            "xValue": "Jun 10",
            "yValue0": 93.82,
            "yValue1": 92.42,
            "yValue2": 94.31
        },
        {
            "xValue": "Jul 10",
            "yValue0": 93.90,
            "yValue1": 92.35,
            "yValue2": 94.24
        },
        {
            "xValue": "Aug 10",
            "yValue0": 93.65,
            "yValue1": 92.32,
            "yValue2": 94.24
        },
        {
            "xValue": "Sep 10",
            "yValue0": 93.45,
            "yValue1": 92.33,
            "yValue2": 94.19
        },
        {
            "xValue": "Oct 10",
            "yValue0": 93.77,
            "yValue1": 92.59,
            "yValue2": 94.39
        },
        {
            "xValue": "Nov 10",
            "yValue0": 93.81,
            "yValue1": 92.59,
            "yValue2": 94.48
        },
        {
            "xValue": "Dec 10",
            "yValue0": 93.84,
            "yValue1": 92.69,
            "yValue2": 94.53
        },
        {
            "xValue": "Jan 11",
            "yValue0": 93.71,
            "yValue1": 92.77,
            "yValue2": 94.54
        },
        {
            "xValue": "Feb 11",
            "yValue0": 94.00,
            "yValue1": 92.88,
            "yValue2": 94.70
        },
        {
            "xValue": "Mar 11",
            "yValue0": 93.83,
            "yValue1": 92.88,
            "yValue2": 94.87
        },
        {
            "xValue": "Apr 11",
            "yValue0": 94.06,
            "yValue1": 93.05,
            "yValue2": 95.09
        },
        {
            "xValue": "May 11",
            "yValue0": 94.17,
            "yValue1": 93.01,
            "yValue2": 95.17
        },
        {
            "xValue": "Jun 11",
            "yValue0": 94.44,
            "yValue1": 92.99,
            "yValue2": 95.34
        },
        {
            "xValue": "Jul 11",
            "yValue0": 94.71,
            "yValue1": 93.27,
            "yValue2": 95.38
        },
        {
            "xValue": "Aug 11",
            "yValue0": 94.92,
            "yValue1": 93.36,
            "yValue2": 95.47
        },
        {
            "xValue": "Sep 11",
            "yValue0": 95.00,
            "yValue1": 93.66,
            "yValue2": 95.64
        },
        {
            "xValue": "Oct 11",
            "yValue0": 94.55,
            "yValue1": 93.66,
            "yValue2": 95.79
        },
        {
            "xValue": "Nov 11",
            "yValue0": 94.81,
            "yValue1": 93.76,
            "yValue2": 95.88
        },
        {
            "xValue": "Dec 11",
            "yValue0": 94.95,
            "yValue1": 93.91,
            "yValue2": 96.03
        },
        {
            "xValue": "Jan 12",
            "yValue0": 95.30,
            "yValue1": 94.27,
            "yValue2": 96.28
        },
        {
            "xValue": "Feb 12",
            "yValue0": 95.76,
            "yValue1": 94.44,
            "yValue2": 96.47
        },
        {
            "xValue": "Mar 12",
            "yValue0": 95.90,
            "yValue1": 94.70,
            "yValue2": 96.65
        },
        {
            "xValue": "Apr 12",
            "yValue0": 96.34,
            "yValue1": 94.75,
            "yValue2": 96.71
        },
        {
            "xValue": "May 12",
            "yValue0": 96.83,
            "yValue1": 95.05,
            "yValue2": 96.78
        },
        {
            "xValue": "Jun 12",
            "yValue0": 97.04,
            "yValue1": 95.38,
            "yValue2": 96.83
        },
        {
            "xValue": "Jul 12",
            "yValue0": 97.14,
            "yValue1": 95.50,
            "yValue2": 96.94
        },
        {
            "xValue": "Aug 12",
            "yValue0": 97.36,
            "yValue1": 95.69,
            "yValue2": 97.07
        },
        {
            "xValue": "Sep 12",
            "yValue0": 97.60,
            "yValue1": 95.84,
            "yValue2": 97.20
        },
        {
            "xValue": "Oct 12",
            "yValue0": 98.33,
            "yValue1": 96.06,
            "yValue2": 97.32
        },
        {
            "xValue": "Nov 12",
            "yValue0": 98.40,
            "yValue1": 96.31,
            "yValue2": 97.43
        },
        {
            "xValue": "Dec 12",
            "yValue0": 98.77,
            "yValue1": 96.50,
            "yValue2": 97.60
        },
        {
            "xValue": "Jan 13",
            "yValue0": 98.95,
            "yValue1": 96.59,
            "yValue2": 97.74
        },
        {
            "xValue": "Feb 13",
            "yValue0": 99.24,
            "yValue1": 96.93,
            "yValue2": 97.94
        },
        {
            "xValue": "Mar 13",
            "yValue0": 99.75,
            "yValue1": 97.12,
            "yValue2": 98.04
        },
        {
            "xValue": "Apr 13",
            "yValue0": 99.66,
            "yValue1": 97.36,
            "yValue2": 98.18
        },
        {
            "xValue": "May 13",
            "yValue0": 99.50,
            "yValue1": 97.57,
            "yValue2": 98.34
        },
        {
            "xValue": "Jun 13",
            "yValue0": 99.84,
            "yValue1": 97.74,
            "yValue2": 98.47
        },
        {
            "xValue": "Jul 13",
            "yValue0": 99.64,
            "yValue1": 97.96,
            "yValue2": 98.55
        },
        {
            "xValue": "Aug 13",
            "yValue0": 99.86,
            "yValue1": 98.26,
            "yValue2": 98.73
        },
        {
            "xValue": "Sep 13",
            "yValue0": 100.26,
            "yValue1": 98.40,
            "yValue2": 98.86
        },
        {
            "xValue": "Oct 13",
            "yValue0": 100.74,
            "yValue1": 98.60,
            "yValue2": 99.02
        },
        {
            "xValue": "Nov 13",
            "yValue0": 100.98,
            "yValue1": 98.95,
            "yValue2": 99.21
        },
        {
            "xValue": "Dec 13",
            "yValue0": 100.92,
            "yValue1": 99.13,
            "yValue2": 99.26
        },
        {
            "xValue": "Jan 14",
            "yValue0": 101.00,
            "yValue1": 99.39,
            "yValue2": 99.39
        },
        {
            "xValue": "Feb 14",
            "yValue0": 101.02,
            "yValue1": 99.56,
            "yValue2": 99.51
        },
        {
            "xValue": "Mar 14",
            "yValue0": 101.66,
            "yValue1": 99.79,
            "yValue2": 99.69
        },
        {
            "xValue": "Apr 14",
            "yValue0": 101.37,
            "yValue1": 100.04,
            "yValue2": 99.93
        },
        {
            "xValue": "May 14",
            "yValue0": 101.42,
            "yValue1": 100.31,
            "yValue2": 100.09
        },
        {
            "xValue": "Jun 14",
            "yValue0": 101.24,
            "yValue1": 100.54,
            "yValue2": 100.32
        },
        {
            "xValue": "Jul 14",
            "yValue0": 101.25,
            "yValue1": 100.59,
            "yValue2": 100.49
        },
        {
            "xValue": "Aug 14",
            "yValue0": 101.55,
            "yValue1": 100.98,
            "yValue2": 100.63
        },
        {
            "xValue": "Sep 14",
            "yValue0": 101.81,
            "yValue1": 101.25,
            "yValue2": 100.85
        },
        {
            "xValue": "Oct 14",
            "yValue0": 101.98,
            "yValue1": 101.47,
            "yValue2": 101.03
        },
        {
            "xValue": "Nov 14",
            "yValue0": 102.09,
            "yValue1": 101.70,
            "yValue2": 101.24
        },
        {
            "xValue": "Dec 14",
            "yValue0": 102.59,
            "yValue1": 101.94,
            "yValue2": 101.43
        },
        {
            "xValue": "Jan 15",
            "yValue0": 102.56,
            "yValue1": 102.17,
            "yValue2": 101.57
        },
        {
            "xValue": "Feb 15",
            "yValue0": 103.04,
            "yValue1": 102.36,
            "yValue2": 101.77
        },
        {
            "xValue": "Mar 15",
            "yValue0": 103.12,
            "yValue1": 102.63,
            "yValue2": 101.82
        },
        {
            "xValue": "Apr 15",
            "yValue0": 103.36,
            "yValue1": 102.89,
            "yValue2": 102.02
        },
        {
            "xValue": "May 15",
            "yValue0": 103.45,
            "yValue1": 103.19,
            "yValue2": 102.26
        },
        {
            "xValue": "Jun 15",
            "yValue0": 103.23,
            "yValue1": 103.53,
            "yValue2": 102.39
        },
        {
            "xValue": "Jul 15",
            "yValue0": 104.08,
            "yValue1": 104.09,
            "yValue2": 102.61
        },
        {
            "xValue": "Aug 15",
            "yValue0": 104.25,
            "yValue1": 104.25,
            "yValue2": 102.70
        },
        {
            "xValue": "Sep 15",
            "yValue0": 104.48,
            "yValue1": 104.45,
            "yValue2": 102.81
        },
        {
            "xValue": "Oct 15",
            "yValue0": 103.57,
            "yValue1": 104.83,
            "yValue2": 103.03
        },
        {
            "xValue": "Nov 15",
            "yValue0": 103.60,
            "yValue1": 104.95,
            "yValue2": 103.20
        },
        {
            "xValue": "Dec 15",
            "yValue0": 103.48,
            "yValue1": 105.16,
            "yValue2": 103.40
        },
        {
            "xValue": "Jan 16",
            "yValue0": 104.03,
            "yValue1": 105.28,
            "yValue2": 103.48
        },
        {
            "xValue": "Feb 16",
            "yValue0": 103.72,
            "yValue1": 105.57,
            "yValue2": 103.63
        },
        {
            "xValue": "Mar 16",
            "yValue0": 103.85,
            "yValue1": 105.46,
            "yValue2": 103.80
        },
        {
            "xValue": "Apr 16",
            "yValue0": 103.75,
            "yValue1": 106.22,
            "yValue2": 103.94
        },
        {
            "xValue": "May 16",
            "yValue0": 103.89,
            "yValue1": 106.41,
            "yValue2": 103.97
        },
        {
            "xValue": "Jun 16",
            "yValue0": 104.17,
            "yValue1": 106.42,
            "yValue2": 104.16
        },
        {
            "xValue": "Jul 16",
            "yValue0": 105.01,
            "yValue1": 106.81,
            "yValue2": 104.43
        },
        {
            "xValue": "Aug 16",
            "yValue0": 104.53,
            "yValue1": 106.86,
            "yValue2": 104.53
        },
        {
            "xValue": "Sep 16",
            "yValue0": 104.41,
            "yValue1": 107.10,
            "yValue2": 104.74
        },
        {
            "xValue": "Oct 16",
            "yValue0": 104.37,
            "yValue1": 107.12,
            "yValue2": 104.83
        },
        {
            "xValue": "Nov 16",
            "yValue0": 104.25,
            "yValue1": 107.19,
            "yValue2": 104.92
        },
        {
            "xValue": "Dec 16",
            "yValue0": 103.96,
            "yValue1": 107.25,
            "yValue2": 105.07
        },
        {
            "xValue": "Jan 17",
            "yValue0": 104.30,
            "yValue1": 107.17,
            "yValue2": 105.23
        },
        {
            "xValue": "Feb 17",
            "yValue0": 104.33,
            "yValue1": 107.52,
            "yValue2": 105.37
        },
        {
            "xValue": "Mar 17",
            "yValue0": 104.53,
            "yValue1": 107.96,
            "yValue2": 105.47
        },
        {
            "xValue": "Apr 17",
            "yValue0": 105.15,
            "yValue1": 108.26,
            "yValue2": 105.62
        },
        {
            "xValue": "May 17",
            "yValue0": 105.57,
            "yValue1": 108.83,
            "yValue2": 105.78
        },
        {
            "xValue": "Jun 17",
            "yValue0": 105.86,
            "yValue1": 109.20,
            "yValue2": 105.92
        },
        {
            "xValue": "Jul 17",
            "yValue0": 105.73,
            "yValue1": 109.07,
            "yValue2": 106.05
        },
        {
            "xValue": "Aug 17",
            "yValue0": 105.58,
            "yValue1": 109.13,
            "yValue2": 106.16
        },
        {
            "xValue": "Sep 17",
            "yValue0": 105.83,
            "yValue1": 109.32,
            "yValue2": 106.23
        },
        {
            "xValue": "Oct 17",
            "yValue0": 105.21,
            "yValue1": 109.31,
            "yValue2": 106.33
        },
        {
            "xValue": "Nov 17",
            "yValue0": 105.55,
            "yValue1": 109.34,
            "yValue2": 106.48
        },
        {
            "xValue": "Dec 17",
            "yValue0": 104.56,
            "yValue1": 109.44,
            "yValue2": 106.60
        },
        {
            "xValue": "Jan 18",
            "yValue0": 105.32,
            "yValue1": 109.54,
            "yValue2": 106.70
        },
        {
            "xValue": "Feb 18",
            "yValue0": 106.63,
            "yValue1": 109.93,
            "yValue2": 106.99
        },
        {
            "xValue": "Mar 18",
            "yValue0": 106.70,
            "yValue1": 110.35,
            "yValue2": 107.15
        },
        {
            "xValue": "Apr 18",
            "yValue0": 107.59,
            "yValue1": 110.84,
            "yValue2": 107.28
        },
        {
            "xValue": "May 18",
            "yValue0": 108.55,
            "yValue1": 111.33,
            "yValue2": 107.52
        },
        {
            "xValue": "Jun 18",
            "yValue0": 108.61,
            "yValue1": 111.58,
            "yValue2": 107.65
        },
        {
            "xValue": "Jul 18",
            "yValue0": 108.66,
            "yValue1": 111.35,
            "yValue2": 107.70
        },
        {
            "xValue": "Aug 18",
            "yValue0": 108.71,
            "yValue1": 111.45,
            "yValue2": 107.86
        },
        {
            "xValue": "Sep 18",
            "yValue0": 108.65,
            "yValue1": 111.35,
            "yValue2": 107.90
        },
        {
            "xValue": "Oct 18",
            "yValue0": 108.98,
            "yValue1": 111.23,
            "yValue2": 108.01
        },
        {
            "xValue": "Nov 18",
            "yValue0": 108.79,
            "yValue1": 111.10,
            "yValue2": 108.08
        },
        {
            "xValue": "Dec 18",
            "yValue0": 109.30,
            "yValue1": 111.18,
            "yValue2": 108.26
        },
        {
            "xValue": "Jan 19",
            "yValue0": 109.38,
            "yValue1": 111.18,
            "yValue2": 108.46
        },
        {
            "xValue": "Feb 19",
            "yValue0": 109.77,
            "yValue1": 111.35,
            "yValue2": 108.48
        },
        {
            "xValue": "Mar 19",
            "yValue0": 110.61,
            "yValue1": 112.04,
            "yValue2": 108.64
        },
        {
            "xValue": "Apr 19",
            "yValue0": 110.76,
            "yValue1": 112.75,
            "yValue2": 108.85
        },
        {
            "xValue": "May 19",
            "yValue0": 110.43,
            "yValue1": 113.39,
            "yValue2": 108.90
        },
        {
            "xValue": "Jun 19",
            "yValue0": 111.40,
            "yValue1": 113.48,
            "yValue2": 109.00
        },
        {
            "xValue": "Jul 19",
            "yValue0": 110.38,
            "yValue1": 113.21,
            "yValue2": 109.05
        },
        {
            "xValue": "Aug 19",
            "yValue0": 110.39,
            "yValue1": 113.14,
            "yValue2": 109.17
        },
        {
            "xValue": "Sep 19",
            "yValue0": 110.09,
            "yValue1": 112.90,
            "yValue2": 109.29
        },
        {
            "xValue": "Oct 19",
            "yValue0": 110.86,
            "yValue1": 112.56,
            "yValue2": 109.35
        },
        {
            "xValue": "Nov 19",
            "yValue0": 111.22,
            "yValue1": 112.66,
            "yValue2": 109.54
        },
        {
            "xValue": "Dec 19",
            "yValue0": 112.36,
            "yValue1": 112.65,
            "yValue2": 109.68
        },
        {
            "xValue": "Jan 20",
            "yValue0": 112.39,
            "yValue1": 113.39,
            "yValue2": 109.93
        },
        {
            "xValue": "Feb 20",
            "yValue0": 112.91,
            "yValue1": 113.52,
            "yValue2": 110.20
        },
        {
            "xValue": "Mar 20",
            "yValue0": 112.08,
            "yValue1": 112.91,
            "yValue2": 109.11
        },
        {
            "xValue": "Apr 20",
            "yValue0": 94.59,
            "yValue1": 97.13,
            "yValue2": 94.31
        },
        {
            "xValue": "May 20",
            "yValue0": 96.62,
            "yValue1": 98.76,
            "yValue2": 96.22
        },
        {
            "xValue": "Jun 20",
            "yValue0": 99.26,
            "yValue1": 101.84,
            "yValue2": 99.47
        },
        {
            "xValue": "Jul 20",
            "yValue0": 101.39,
            "yValue1": 101.75,
            "yValue2": 100.47
        },
        {
            "xValue": "Aug 20",
            "yValue0": 101.81,
            "yValue1": 101.97,
            "yValue2": 101.68
        },
        {
            "xValue": "Sep 20",
            "yValue0": 102.75,
            "yValue1": 102.69,
            "yValue2": 102.34
        },
        {
            "xValue": "Oct 20",
            "yValue0": 103.14,
            "yValue1": 103.65,
            "yValue2": 102.81
        },
        {
            "xValue": "Nov 20",
            "yValue0": 103.22,
            "yValue1": 103.86,
            "yValue2": 103.05
        },
        {
            "xValue": "Dec 20",
            "yValue0": 102.05,
            "yValue1": 103.37,
            "yValue2": 102.97
        },
        {
            "xValue": "Jan 21",
            "yValue0": 100.10,
            "yValue1": 103.01,
            "yValue2": 103.34
        },
        {
            "xValue": "Feb 21",
            "yValue0": 102.46,
            "yValue1": 104.26,
            "yValue2": 103.85
        },
        {
            "xValue": "Mar 21",
            "yValue0": 103.91,
            "yValue1": 105.49,
            "yValue2": 104.36
        },
        {
            "xValue": "Apr 21",
            "yValue0": 106.00,
            "yValue1": 107.42,
            "yValue2": 104.55
        },
        {
            "xValue": "May 21",
            "yValue0": 107.29,
            "yValue1": 108.51,
            "yValue2": 104.88
        },
        {
            "xValue": "Jun 21",
            "yValue0": 107.70,
            "yValue1": 108.66,
            "yValue2": 105.28
        },
        {
            "xValue": "Jul 21",
            "yValue0": 108.30,
            "yValue1": 109.56,
            "yValue2": 105.78
        },
        {
            "xValue": "Aug 21",
            "yValue0": 107.97,
            "yValue1": 109.73,
            "yValue2": 106.15
        },
        {
            "xValue": "Sep 21",
            "yValue0": 108.26,
            "yValue1": 109.40,
            "yValue2": 106.46
        },
        {
            "xValue": "Oct 21",
            "yValue0": 108.15,
            "yValue1": 109.48,
            "yValue2": 106.95
        },
        {
            "xValue": "Nov 21",
            "yValue0": 108.04,
            "yValue1": 109.63,
            "yValue2": 107.41
        },
        {
            "xValue": "Dec 21",
            "yValue0": 108.36,
            "yValue1": 110.25,
            "yValue2": 107.84
        },
        {
            "xValue": "Jan 22",
            "yValue0": 109.12,
            "yValue1": 110.97,
            "yValue2": 108.20
        },
        {
            "xValue": "Feb 22",
            "yValue0": 110.08,
            "yValue1": 111.50,
            "yValue2": 108.72
        },
        {
            "xValue": "Mar 22",
            "yValue0": 110.86,
            "yValue1": 112.33,
            "yValue2": 109.01
        },
        {
            "xValue": "Apr 22",
            "yValue0": 111.45,
            "yValue1": 113.38,
            "yValue2": 109.27
        },
        {
            "xValue": "May 22",
            "yValue0": 111.72,
            "yValue1": 113.86,
            "yValue2": 109.55
        },
        {
            "xValue": "Jun 22",
            "yValue0": 112.42,
            "yValue1": 114.12,
            "yValue2": 109.82
        }
    ],
});