var chart = AmCharts.makeChart("monthly_nonfarm" , { 
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
            "xValue": "Jan 2000",
            "yValue0": 94.06,
            "yValue1": 93.52,
            "yValue2": 93.23
        },
        {
            "xValue": "Feb 2000",
            "yValue0": 94.18,
            "yValue1": 93.82,
            "yValue2": 93.25
        },
        {
            "xValue": "Mar 2000",
            "yValue0": 94.50,
            "yValue1": 93.97,
            "yValue2": 93.38
        },
        {
            "xValue": "Apr 2000",
            "yValue0": 94.71,
            "yValue1": 94.47,
            "yValue2": 93.83
        },
        {
            "xValue": "May 2000",
            "yValue0": 93.99,
            "yValue1": 94.16,
            "yValue2": 93.40
        },
        {
            "xValue": "Jun 2000",
            "yValue0": 94.70,
            "yValue1": 94.57,
            "yValue2": 93.68
        },
        {
            "xValue": "Jul 2000",
            "yValue0": 94.27,
            "yValue1": 94.54,
            "yValue2": 93.48
        },
        {
            "xValue": "Aug 2000",
            "yValue0": 93.73,
            "yValue1": 94.80,
            "yValue2": 93.61
        },
        {
            "xValue": "Sep 2000",
            "yValue0": 94.44,
            "yValue1": 94.96,
            "yValue2": 93.70
        },
        {
            "xValue": "Oct 2000",
            "yValue0": 94.25,
            "yValue1": 95.24,
            "yValue2": 93.86
        },
        {
            "xValue": "Nov 2000",
            "yValue0": 94.50,
            "yValue1": 95.50,
            "yValue2": 93.98
        },
        {
            "xValue": "Dec 2000",
            "yValue0": 94.85,
            "yValue1": 95.84,
            "yValue2": 94.10
        },
        {
            "xValue": "Jan 2001",
            "yValue0": 94.73,
            "yValue1": 95.99,
            "yValue2": 94.07
        },
        {
            "xValue": "Feb 2001",
            "yValue0": 94.61,
            "yValue1": 96.00,
            "yValue2": 93.94
        },
        {
            "xValue": "Mar 2001",
            "yValue0": 94.42,
            "yValue1": 96.08,
            "yValue2": 94.13
        },
        {
            "xValue": "Apr 2001",
            "yValue0": 94.60,
            "yValue1": 95.86,
            "yValue2": 93.86
        },
        {
            "xValue": "May 2001",
            "yValue0": 94.43,
            "yValue1": 95.73,
            "yValue2": 93.74
        },
        {
            "xValue": "Jun 2001",
            "yValue0": 94.58,
            "yValue1": 95.60,
            "yValue2": 93.61
        },
        {
            "xValue": "Jul 2001",
            "yValue0": 94.48,
            "yValue1": 95.72,
            "yValue2": 93.86
        },
        {
            "xValue": "Aug 2001",
            "yValue0": 93.68,
            "yValue1": 95.11,
            "yValue2": 93.30
        },
        {
            "xValue": "Sep 2001",
            "yValue0": 94.32,
            "yValue1": 95.47,
            "yValue2": 93.67
        },
        {
            "xValue": "Oct 2001",
            "yValue0": 94.63,
            "yValue1": 95.25,
            "yValue2": 93.35
        },
        {
            "xValue": "Nov 2001",
            "yValue0": 94.24,
            "yValue1": 95.12,
            "yValue2": 93.21
        },
        {
            "xValue": "Dec 2001",
            "yValue0": 94.57,
            "yValue1": 95.04,
            "yValue2": 93.04
        },
        {
            "xValue": "Jan 2002",
            "yValue0": 94.37,
            "yValue1": 94.59,
            "yValue2": 92.67
        },
        {
            "xValue": "Feb 2002",
            "yValue0": 94.92,
            "yValue1": 95.23,
            "yValue2": 93.17
        },
        {
            "xValue": "Mar 2002",
            "yValue0": 94.83,
            "yValue1": 95.02,
            "yValue2": 93.07
        },
        {
            "xValue": "Apr 2002",
            "yValue0": 94.64,
            "yValue1": 94.99,
            "yValue2": 93.07
        },
        {
            "xValue": "May 2002",
            "yValue0": 94.96,
            "yValue1": 95.17,
            "yValue2": 93.37
        },
        {
            "xValue": "Jun 2002",
            "yValue0": 94.67,
            "yValue1": 95.03,
            "yValue2": 93.30
        },
        {
            "xValue": "Jul 2002",
            "yValue0": 95.32,
            "yValue1": 95.00,
            "yValue2": 93.39
        },
        {
            "xValue": "Aug 2002",
            "yValue0": 94.87,
            "yValue1": 95.13,
            "yValue2": 93.57
        },
        {
            "xValue": "Sep 2002",
            "yValue0": 95.23,
            "yValue1": 95.51,
            "yValue2": 93.98
        },
        {
            "xValue": "Oct 2002",
            "yValue0": 94.66,
            "yValue1": 95.19,
            "yValue2": 93.74
        },
        {
            "xValue": "Nov 2002",
            "yValue0": 94.22,
            "yValue1": 94.84,
            "yValue2": 93.35
        },
        {
            "xValue": "Dec 2002",
            "yValue0": 94.62,
            "yValue1": 94.87,
            "yValue2": 93.31
        },
        {
            "xValue": "Jan 2003",
            "yValue0": 95.29,
            "yValue1": 94.93,
            "yValue2": 93.89
        },
        {
            "xValue": "Feb 2003",
            "yValue0": 95.58,
            "yValue1": 95.01,
            "yValue2": 93.92
        },
        {
            "xValue": "Mar 2003",
            "yValue0": 95.81,
            "yValue1": 95.00,
            "yValue2": 93.97
        },
        {
            "xValue": "Apr 2003",
            "yValue0": 96.60,
            "yValue1": 95.07,
            "yValue2": 94.12
        },
        {
            "xValue": "May 2003",
            "yValue0": 95.85,
            "yValue1": 94.93,
            "yValue2": 94.05
        },
        {
            "xValue": "Jun 2003",
            "yValue0": 95.77,
            "yValue1": 95.01,
            "yValue2": 94.23
        },
        {
            "xValue": "Jul 2003",
            "yValue0": 95.49,
            "yValue1": 94.75,
            "yValue2": 94.11
        },
        {
            "xValue": "Aug 2003",
            "yValue0": 96.05,
            "yValue1": 94.79,
            "yValue2": 94.11
        },
        {
            "xValue": "Sep 2003",
            "yValue0": 96.18,
            "yValue1": 94.88,
            "yValue2": 94.18
        },
        {
            "xValue": "Oct 2003",
            "yValue0": 96.69,
            "yValue1": 95.05,
            "yValue2": 94.38
        },
        {
            "xValue": "Nov 2003",
            "yValue0": 97.13,
            "yValue1": 95.31,
            "yValue2": 94.61
        },
        {
            "xValue": "Dec 2003",
            "yValue0": 97.39,
            "yValue1": 95.41,
            "yValue2": 94.67
        },
        {
            "xValue": "Jan 2004",
            "yValue0": 98.01,
            "yValue1": 95.61,
            "yValue2": 94.64
        },
        {
            "xValue": "Feb 2004",
            "yValue0": 97.45,
            "yValue1": 95.70,
            "yValue2": 94.70
        },
        {
            "xValue": "Mar 2004",
            "yValue0": 97.41,
            "yValue1": 95.65,
            "yValue2": 94.70
        },
        {
            "xValue": "Apr 2004",
            "yValue0": 97.46,
            "yValue1": 95.72,
            "yValue2": 94.84
        },
        {
            "xValue": "May 2004",
            "yValue0": 96.57,
            "yValue1": 95.86,
            "yValue2": 94.95
        },
        {
            "xValue": "Jun 2004",
            "yValue0": 97.57,
            "yValue1": 96.06,
            "yValue2": 95.17
        },
        {
            "xValue": "Jul 2004",
            "yValue0": 98.00,
            "yValue1": 96.43,
            "yValue2": 95.52
        },
        {
            "xValue": "Aug 2004",
            "yValue0": 98.99,
            "yValue1": 96.45,
            "yValue2": 95.46
        },
        {
            "xValue": "Sep 2004",
            "yValue0": 98.47,
            "yValue1": 96.50,
            "yValue2": 95.46
        },
        {
            "xValue": "Oct 2004",
            "yValue0": 98.61,
            "yValue1": 96.61,
            "yValue2": 95.58
        },
        {
            "xValue": "Nov 2004",
            "yValue0": 98.39,
            "yValue1": 96.88,
            "yValue2": 95.82
        },
        {
            "xValue": "Dec 2004",
            "yValue0": 98.00,
            "yValue1": 96.91,
            "yValue2": 95.83
        },
        {
            "xValue": "Jan 2005",
            "yValue0": 97.82,
            "yValue1": 96.94,
            "yValue2": 95.88
        },
        {
            "xValue": "Feb 2005",
            "yValue0": 97.89,
            "yValue1": 97.06,
            "yValue2": 95.99
        },
        {
            "xValue": "Mar 2005",
            "yValue0": 98.73,
            "yValue1": 97.26,
            "yValue2": 96.22
        },
        {
            "xValue": "Apr 2005",
            "yValue0": 100.15,
            "yValue1": 97.63,
            "yValue2": 96.61
        },
        {
            "xValue": "May 2005",
            "yValue0": 99.88,
            "yValue1": 97.85,
            "yValue2": 96.84
        },
        {
            "xValue": "Jun 2005",
            "yValue0": 100.15,
            "yValue1": 97.88,
            "yValue2": 96.89
        },
        {
            "xValue": "Jul 2005",
            "yValue0": 100.40,
            "yValue1": 98.13,
            "yValue2": 97.22
        },
        {
            "xValue": "Aug 2005",
            "yValue0": 99.94,
            "yValue1": 98.32,
            "yValue2": 97.40
        },
        {
            "xValue": "Sep 2005",
            "yValue0": 99.55,
            "yValue1": 98.30,
            "yValue2": 97.43
        },
        {
            "xValue": "Oct 2005",
            "yValue0": 99.40,
            "yValue1": 98.30,
            "yValue2": 97.51
        },
        {
            "xValue": "Nov 2005",
            "yValue0": 98.87,
            "yValue1": 98.15,
            "yValue2": 97.34
        },
        {
            "xValue": "Dec 2005",
            "yValue0": 99.08,
            "yValue1": 98.32,
            "yValue2": 97.61
        },
        {
            "xValue": "Jan 2006",
            "yValue0": 98.59,
            "yValue1": 98.40,
            "yValue2": 97.88
        },
        {
            "xValue": "Feb 2006",
            "yValue0": 98.81,
            "yValue1": 98.54,
            "yValue2": 98.13
        },
        {
            "xValue": "Mar 2006",
            "yValue0": 98.71,
            "yValue1": 98.69,
            "yValue2": 98.32
        },
        {
            "xValue": "Apr 2006",
            "yValue0": 98.33,
            "yValue1": 98.61,
            "yValue2": 98.32
        },
        {
            "xValue": "May 2006",
            "yValue0": 98.77,
            "yValue1": 98.83,
            "yValue2": 98.56
        },
        {
            "xValue": "Jun 2006",
            "yValue0": 98.66,
            "yValue1": 98.99,
            "yValue2": 98.70
        },
        {
            "xValue": "Jul 2006",
            "yValue0": 97.94,
            "yValue1": 98.99,
            "yValue2": 98.69
        },
        {
            "xValue": "Aug 2006",
            "yValue0": 98.30,
            "yValue1": 99.20,
            "yValue2": 98.89
        },
        {
            "xValue": "Sep 2006",
            "yValue0": 98.36,
            "yValue1": 99.27,
            "yValue2": 99.05
        },
        {
            "xValue": "Oct 2006",
            "yValue0": 98.23,
            "yValue1": 99.58,
            "yValue2": 99.42
        },
        {
            "xValue": "Nov 2006",
            "yValue0": 98.68,
            "yValue1": 99.67,
            "yValue2": 99.40
        },
        {
            "xValue": "Dec 2006",
            "yValue0": 98.92,
            "yValue1": 100.05,
            "yValue2": 99.80
        },
        {
            "xValue": "Jan 2007",
            "yValue0": 99.29,
            "yValue1": 99.88,
            "yValue2": 99.87
        },
        {
            "xValue": "Feb 2007",
            "yValue0": 99.44,
            "yValue1": 99.92,
            "yValue2": 99.93
        },
        {
            "xValue": "Mar 2007",
            "yValue0": 99.81,
            "yValue1": 100.14,
            "yValue2": 100.08
        },
        {
            "xValue": "Apr 2007",
            "yValue0": 99.37,
            "yValue1": 99.61,
            "yValue2": 99.57
        },
        {
            "xValue": "May 2007",
            "yValue0": 99.12,
            "yValue1": 99.84,
            "yValue2": 99.80
        },
        {
            "xValue": "Jun 2007",
            "yValue0": 99.23,
            "yValue1": 99.95,
            "yValue2": 99.88
        },
        {
            "xValue": "Jul 2007",
            "yValue0": 99.15,
            "yValue1": 99.96,
            "yValue2": 99.85
        },
        {
            "xValue": "Aug 2007",
            "yValue0": 99.11,
            "yValue1": 99.79,
            "yValue2": 99.60
        },
        {
            "xValue": "Sep 2007",
            "yValue0": 99.20,
            "yValue1": 99.98,
            "yValue2": 100.00
        },
        {
            "xValue": "Oct 2007",
            "yValue0": 99.15,
            "yValue1": 99.80,
            "yValue2": 99.87
        },
        {
            "xValue": "Nov 2007",
            "yValue0": 100.06,
            "yValue1": 100.09,
            "yValue2": 100.14
        },
        {
            "xValue": "Dec 2007",
            "yValue0": 100.00,
            "yValue1": 100.00,
            "yValue2": 100.00
        },
        {
            "xValue": "Jan 2008",
            "yValue0": 100.39,
            "yValue1": 100.19,
            "yValue2": 100.13
        },
        {
            "xValue": "Feb 2008",
            "yValue0": 100.37,
            "yValue1": 100.04,
            "yValue2": 100.01
        },
        {
            "xValue": "Mar 2008",
            "yValue0": 100.58,
            "yValue1": 100.05,
            "yValue2": 99.92
        },
        {
            "xValue": "Apr 2008",
            "yValue0": 100.98,
            "yValue1": 99.98,
            "yValue2": 99.93
        },
        {
            "xValue": "May 2008",
            "yValue0": 100.76,
            "yValue1": 99.83,
            "yValue2": 99.79
        },
        {
            "xValue": "Jun 2008",
            "yValue0": 100.83,
            "yValue1": 99.72,
            "yValue2": 99.66
        },
        {
            "xValue": "Jul 2008",
            "yValue0": 100.22,
            "yValue1": 99.55,
            "yValue2": 99.59
        },
        {
            "xValue": "Aug 2008",
            "yValue0": 99.42,
            "yValue1": 99.29,
            "yValue2": 99.25
        },
        {
            "xValue": "Sep 2008",
            "yValue0": 100.20,
            "yValue1": 99.19,
            "yValue2": 99.18
        },
        {
            "xValue": "Oct 2008",
            "yValue0": 100.54,
            "yValue1": 99.08,
            "yValue2": 99.11
        },
        {
            "xValue": "Nov 2008",
            "yValue0": 100.15,
            "yValue1": 98.51,
            "yValue2": 98.44
        },
        {
            "xValue": "Dec 2008",
            "yValue0": 100.08,
            "yValue1": 98.10,
            "yValue2": 98.03
        },
        {
            "xValue": "Jan 2009",
            "yValue0": 99.49,
            "yValue1": 97.44,
            "yValue2": 97.25
        },
        {
            "xValue": "Feb 2009",
            "yValue0": 99.09,
            "yValue1": 96.99,
            "yValue2": 96.91
        },
        {
            "xValue": "Mar 2009",
            "yValue0": 99.01,
            "yValue1": 96.43,
            "yValue2": 96.23
        },
        {
            "xValue": "Apr 2009",
            "yValue0": 99.15,
            "yValue1": 96.15,
            "yValue2": 96.18
        },
        {
            "xValue": "May 2009",
            "yValue0": 97.76,
            "yValue1": 95.76,
            "yValue2": 95.91
        },
        {
            "xValue": "Jun 2009",
            "yValue0": 98.07,
            "yValue1": 95.53,
            "yValue2": 95.76
        },
        {
            "xValue": "Jul 2009",
            "yValue0": 98.72,
            "yValue1": 95.35,
            "yValue2": 95.74
        },
        {
            "xValue": "Aug 2009",
            "yValue0": 98.22,
            "yValue1": 95.00,
            "yValue2": 95.34
        },
        {
            "xValue": "Sep 2009",
            "yValue0": 97.59,
            "yValue1": 94.52,
            "yValue2": 94.90
        },
        {
            "xValue": "Oct 2009",
            "yValue0": 97.77,
            "yValue1": 94.36,
            "yValue2": 94.76
        },
        {
            "xValue": "Nov 2009",
            "yValue0": 98.12,
            "yValue1": 94.41,
            "yValue2": 94.74
        },
        {
            "xValue": "Dec 2009",
            "yValue0": 96.72,
            "yValue1": 94.07,
            "yValue2": 94.38
        },
        {
            "xValue": "Jan 2010",
            "yValue0": 92.88,
            "yValue1": 94.44,
            "yValue2": 94.72
        },
        {
            "xValue": "Feb 2010",
            "yValue0": 92.92,
            "yValue1": 94.53,
            "yValue2": 94.81
        },
        {
            "xValue": "Mar 2010",
            "yValue0": 92.68,
            "yValue1": 94.66,
            "yValue2": 94.89
        },
        {
            "xValue": "Apr 2010",
            "yValue0": 93.93,
            "yValue1": 95.28,
            "yValue2": 95.24
        },
        {
            "xValue": "May 2010",
            "yValue0": 93.67,
            "yValue1": 95.16,
            "yValue2": 95.20
        },
        {
            "xValue": "Jun 2010",
            "yValue0": 93.70,
            "yValue1": 95.06,
            "yValue2": 95.17
        },
        {
            "xValue": "Jul 2010",
            "yValue0": 93.85,
            "yValue1": 95.05,
            "yValue2": 95.24
        },
        {
            "xValue": "Aug 2010",
            "yValue0": 93.85,
            "yValue1": 95.15,
            "yValue2": 95.29
        },
        {
            "xValue": "Sep 2010",
            "yValue0": 93.37,
            "yValue1": 95.17,
            "yValue2": 95.30
        },
        {
            "xValue": "Oct 2010",
            "yValue0": 93.09,
            "yValue1": 95.04,
            "yValue2": 95.24
        },
        {
            "xValue": "Nov 2010",
            "yValue0": 93.17,
            "yValue1": 94.86,
            "yValue2": 95.03
        },
        {
            "xValue": "Dec 2010",
            "yValue0": 93.22,
            "yValue1": 95.12,
            "yValue2": 95.28
        },
        {
            "xValue": "Jan 2011",
            "yValue0": 93.31,
            "yValue1": 95.31,
            "yValue2": 95.25
        },
        {
            "xValue": "Feb 2011",
            "yValue0": 93.37,
            "yValue1": 95.37,
            "yValue2": 95.35
        },
        {
            "xValue": "Mar 2011",
            "yValue0": 93.00,
            "yValue1": 95.58,
            "yValue2": 95.48
        },
        {
            "xValue": "Apr 2011",
            "yValue0": 93.37,
            "yValue1": 95.57,
            "yValue2": 95.44
        },
        {
            "xValue": "May 2011",
            "yValue0": 93.96,
            "yValue1": 95.59,
            "yValue2": 95.45
        },
        {
            "xValue": "Jun 2011",
            "yValue0": 93.95,
            "yValue1": 95.55,
            "yValue2": 95.34
        },
        {
            "xValue": "Jul 2011",
            "yValue0": 94.47,
            "yValue1": 95.70,
            "yValue2": 95.48
        },
        {
            "xValue": "Aug 2011",
            "yValue0": 94.66,
            "yValue1": 95.98,
            "yValue2": 95.65
        },
        {
            "xValue": "Sep 2011",
            "yValue0": 94.58,
            "yValue1": 96.27,
            "yValue2": 95.85
        },
        {
            "xValue": "Oct 2011",
            "yValue0": 94.10,
            "yValue1": 96.61,
            "yValue2": 96.10
        },
        {
            "xValue": "Nov 2011",
            "yValue0": 94.84,
            "yValue1": 96.78,
            "yValue2": 96.28
        },
        {
            "xValue": "Dec 2011",
            "yValue0": 94.65,
            "yValue1": 96.98,
            "yValue2": 96.38
        },
        {
            "xValue": "Jan 2012",
            "yValue0": 94.98,
            "yValue1": 96.93,
            "yValue2": 96.82
        },
        {
            "xValue": "Feb 2012",
            "yValue0": 95.43,
            "yValue1": 97.13,
            "yValue2": 97.02
        },
        {
            "xValue": "Mar 2012",
            "yValue0": 95.66,
            "yValue1": 97.26,
            "yValue2": 97.11
        },
        {
            "xValue": "Apr 2012",
            "yValue0": 95.39,
            "yValue1": 97.30,
            "yValue2": 97.03
        },
        {
            "xValue": "May 2012",
            "yValue0": 95.94,
            "yValue1": 97.56,
            "yValue2": 97.21
        },
        {
            "xValue": "Jun 2012",
            "yValue0": 96.39,
            "yValue1": 97.83,
            "yValue2": 97.39
        },
        {
            "xValue": "Jul 2012",
            "yValue0": 96.20,
            "yValue1": 97.93,
            "yValue2": 97.37
        },
        {
            "xValue": "Aug 2012",
            "yValue0": 96.50,
            "yValue1": 97.96,
            "yValue2": 97.27
        },
        {
            "xValue": "Sep 2012",
            "yValue0": 97.15,
            "yValue1": 98.58,
            "yValue2": 97.84
        },
        {
            "xValue": "Oct 2012",
            "yValue0": 97.83,
            "yValue1": 99.06,
            "yValue2": 98.19
        },
        {
            "xValue": "Nov 2012",
            "yValue0": 97.48,
            "yValue1": 98.98,
            "yValue2": 98.03
        },
        {
            "xValue": "Dec 2012",
            "yValue0": 97.98,
            "yValue1": 99.17,
            "yValue2": 98.05
        },
        {
            "xValue": "Jan 2013",
            "yValue0": 98.08,
            "yValue1": 99.33,
            "yValue2": 97.93
        },
        {
            "xValue": "Feb 2013",
            "yValue0": 97.79,
            "yValue1": 99.54,
            "yValue2": 98.02
        },
        {
            "xValue": "Mar 2013",
            "yValue0": 98.35,
            "yValue1": 99.52,
            "yValue2": 97.96
        },
        {
            "xValue": "Apr 2013",
            "yValue0": 98.55,
            "yValue1": 99.87,
            "yValue2": 98.22
        },
        {
            "xValue": "May 2013",
            "yValue0": 98.50,
            "yValue1": 100.03,
            "yValue2": 98.36
        },
        {
            "xValue": "Jun 2013",
            "yValue0": 98.33,
            "yValue1": 100.13,
            "yValue2": 98.48
        },
        {
            "xValue": "Jul 2013",
            "yValue0": 97.84,
            "yValue1": 100.34,
            "yValue2": 98.71
        },
        {
            "xValue": "Aug 2013",
            "yValue0": 97.84,
            "yValue1": 100.36,
            "yValue2": 98.69
        },
        {
            "xValue": "Sep 2013",
            "yValue0": 98.18,
            "yValue1": 100.53,
            "yValue2": 98.80
        },
        {
            "xValue": "Oct 2013",
            "yValue0": 98.17,
            "yValue1": 99.98,
            "yValue2": 98.26
        },
        {
            "xValue": "Nov 2013",
            "yValue0": 98.48,
            "yValue1": 100.58,
            "yValue2": 98.85
        },
        {
            "xValue": "Dec 2013",
            "yValue0": 98.70,
            "yValue1": 100.74,
            "yValue2": 99.03
        },
        {
            "xValue": "Jan 2014",
            "yValue0": 98.73,
            "yValue1": 100.92,
            "yValue2": 99.16
        },
        {
            "xValue": "Feb 2014",
            "yValue0": 99.15,
            "yValue1": 101.08,
            "yValue2": 99.23
        },
        {
            "xValue": "Mar 2014",
            "yValue0": 100.47,
            "yValue1": 101.46,
            "yValue2": 99.55
        },
        {
            "xValue": "Apr 2014",
            "yValue0": 99.69,
            "yValue1": 101.59,
            "yValue2": 99.61
        },
        {
            "xValue": "May 2014",
            "yValue0": 99.24,
            "yValue1": 101.72,
            "yValue2": 99.70
        },
        {
            "xValue": "Jun 2014",
            "yValue0": 99.39,
            "yValue1": 102.08,
            "yValue2": 100.03
        },
        {
            "xValue": "Jul 2014",
            "yValue0": 99.14,
            "yValue1": 102.20,
            "yValue2": 100.17
        },
        {
            "xValue": "Aug 2014",
            "yValue0": 99.42,
            "yValue1": 102.36,
            "yValue2": 100.21
        },
        {
            "xValue": "Sep 2014",
            "yValue0": 99.31,
            "yValue1": 102.71,
            "yValue2": 100.43
        },
        {
            "xValue": "Oct 2014",
            "yValue0": 100.17,
            "yValue1": 103.21,
            "yValue2": 100.92
        },
        {
            "xValue": "Nov 2014",
            "yValue0": 100.05,
            "yValue1": 103.27,
            "yValue2": 100.87
        },
        {
            "xValue": "Dec 2014",
            "yValue0": 100.36,
            "yValue1": 103.31,
            "yValue2": 100.94
        },
        {
            "xValue": "Jan 2015",
            "yValue0": 100.41,
            "yValue1": 103.52,
            "yValue2": 101.17
        },
        {
            "xValue": "Feb 2015",
            "yValue0": 100.72,
            "yValue1": 103.55,
            "yValue2": 101.20
        },
        {
            "xValue": "Mar 2015",
            "yValue0": 100.63,
            "yValue1": 103.60,
            "yValue2": 101.23
        },
        {
            "xValue": "Apr 2015",
            "yValue0": 100.48,
            "yValue1": 103.92,
            "yValue2": 101.58
        },
        {
            "xValue": "May 2015",
            "yValue0": 100.47,
            "yValue1": 104.20,
            "yValue2": 101.80
        },
        {
            "xValue": "Jun 2015",
            "yValue0": 100.10,
            "yValue1": 104.20,
            "yValue2": 101.83
        },
        {
            "xValue": "Jul 2015",
            "yValue0": 100.27,
            "yValue1": 104.26,
            "yValue2": 101.85
        },
        {
            "xValue": "Aug 2015",
            "yValue0": 100.31,
            "yValue1": 104.49,
            "yValue2": 102.07
        },
        {
            "xValue": "Sep 2015",
            "yValue0": 100.09,
            "yValue1": 104.35,
            "yValue2": 101.82
        },
        {
            "xValue": "Oct 2015",
            "yValue0": 99.47,
            "yValue1": 104.62,
            "yValue2": 102.13
        },
        {
            "xValue": "Nov 2015",
            "yValue0": 98.89,
            "yValue1": 104.81,
            "yValue2": 102.24
        },
        {
            "xValue": "Dec 2015",
            "yValue0": 99.89,
            "yValue1": 105.09,
            "yValue2": 102.59
        },
        {
            "xValue": "Jan 2016",
            "yValue0": 100.05,
            "yValue1": 105.34,
            "yValue2": 102.80
        },
        {
            "xValue": "Feb 2016",
            "yValue0": 99.80,
            "yValue1": 105.56,
            "yValue2": 103.10
        },
        {
            "xValue": "Mar 2016",
            "yValue0": 100.18,
            "yValue1": 105.74,
            "yValue2": 103.30
        },
        {
            "xValue": "Apr 2016",
            "yValue0": 99.52,
            "yValue1": 105.81,
            "yValue2": 103.34
        },
        {
            "xValue": "May 2016",
            "yValue0": 99.21,
            "yValue1": 106.01,
            "yValue2": 103.47
        },
        {
            "xValue": "Jun 2016",
            "yValue0": 99.34,
            "yValue1": 106.08,
            "yValue2": 103.57
        },
        {
            "xValue": "Jul 2016",
            "yValue0": 99.78,
            "yValue1": 106.31,
            "yValue2": 103.73
        },
        {
            "xValue": "Aug 2016",
            "yValue0": 99.77,
            "yValue1": 106.50,
            "yValue2": 103.91
        },
        {
            "xValue": "Sep 2016",
            "yValue0": 99.28,
            "yValue1": 106.48,
            "yValue2": 103.86
        },
        {
            "xValue": "Oct 2016",
            "yValue0": 99.05,
            "yValue1": 106.46,
            "yValue2": 103.87
        },
        {
            "xValue": "Nov 2016",
            "yValue0": 99.08,
            "yValue1": 106.47,
            "yValue2": 103.91
        },
        {
            "xValue": "Dec 2016",
            "yValue0": 98.72,
            "yValue1": 106.32,
            "yValue2": 103.82
        },
        {
            "xValue": "Jan 2017",
            "yValue0": 99.13,
            "yValue1": 106.57,
            "yValue2": 103.71
        },
        {
            "xValue": "Feb 2017",
            "yValue0": 98.85,
            "yValue1": 106.72,
            "yValue2": 103.99
        },
        {
            "xValue": "Mar 2017",
            "yValue0": 99.39,
            "yValue1": 107.34,
            "yValue2": 104.56
        },
        {
            "xValue": "Apr 2017",
            "yValue0": 100.75,
            "yValue1": 107.78,
            "yValue2": 105.01
        },
        {
            "xValue": "May 2017",
            "yValue0": 100.19,
            "yValue1": 107.85,
            "yValue2": 104.98
        },
        {
            "xValue": "Jun 2017",
            "yValue0": 100.49,
            "yValue1": 108.10,
            "yValue2": 105.26
        },
        {
            "xValue": "Jul 2017",
            "yValue0": 100.63,
            "yValue1": 108.18,
            "yValue2": 105.26
        },
        {
            "xValue": "Aug 2017",
            "yValue0": 100.35,
            "yValue1": 108.24,
            "yValue2": 105.24
        },
        {
            "xValue": "Sep 2017",
            "yValue0": 100.88,
            "yValue1": 108.52,
            "yValue2": 105.48
        },
        {
            "xValue": "Oct 2017",
            "yValue0": 100.25,
            "yValue1": 108.00,
            "yValue2": 104.97
        },
        {
            "xValue": "Nov 2017",
            "yValue0": 100.14,
            "yValue1": 107.80,
            "yValue2": 104.90
        },
        {
            "xValue": "Dec 2017",
            "yValue0": 99.42,
            "yValue1": 107.49,
            "yValue2": 104.74
        },
        {
            "xValue": "Jan 2018",
            "yValue0": 99.02,
            "yValue1": 107.37,
            "yValue2": 105.16
        },
        {
            "xValue": "Feb 2018",
            "yValue0": 100.63,
            "yValue1": 107.99,
            "yValue2": 105.77
        },
        {
            "xValue": "Mar 2018",
            "yValue0": 100.39,
            "yValue1": 108.61,
            "yValue2": 106.15
        },
        {
            "xValue": "Apr 2018",
            "yValue0": 100.87,
            "yValue1": 109.34,
            "yValue2": 106.65
        },
        {
            "xValue": "May 2018",
            "yValue0": 101.58,
            "yValue1": 109.96,
            "yValue2": 107.11
        },
        {
            "xValue": "Jun 2018",
            "yValue0": 101.65,
            "yValue1": 109.93,
            "yValue2": 107.24
        },
        {
            "xValue": "Jul 2018",
            "yValue0": 101.42,
            "yValue1": 109.86,
            "yValue2": 107.18
        },
        {
            "xValue": "Aug 2018",
            "yValue0": 100.73,
            "yValue1": 109.23,
            "yValue2": 106.68
        },
        {
            "xValue": "Sep 2018",
            "yValue0": 100.67,
            "yValue1": 109.03,
            "yValue2": 106.48
        },
        {
            "xValue": "Oct 2018",
            "yValue0": 100.98,
            "yValue1": 108.96,
            "yValue2": 106.62
        },
        {
            "xValue": "Nov 2018",
            "yValue0": 100.52,
            "yValue1": 108.59,
            "yValue2": 106.60
        },
        {
            "xValue": "Dec 2018",
            "yValue0": 100.46,
            "yValue1": 108.11,
            "yValue2": 106.37
        },
        {
            "xValue": "Jan 2019",
            "yValue0": 100.38,
            "yValue1": 107.77,
            "yValue2": 106.45
        },
        {
            "xValue": "Feb 2019",
            "yValue0": 100.70,
            "yValue1": 108.49,
            "yValue2": 106.82
        },
        {
            "xValue": "Mar 2019",
            "yValue0": 101.19,
            "yValue1": 109.50,
            "yValue2": 107.30
        },
        {
            "xValue": "Apr 2019",
            "yValue0": 102.83,
            "yValue1": 110.50,
            "yValue2": 107.80
        },
        {
            "xValue": "May 2019",
            "yValue0": 103.08,
            "yValue1": 111.28,
            "yValue2": 108.24
        },
        {
            "xValue": "Jun 2019",
            "yValue0": 103.61,
            "yValue1": 111.23,
            "yValue2": 108.50
        },
        {
            "xValue": "Jul 2019",
            "yValue0": 103.28,
            "yValue1": 110.90,
            "yValue2": 108.28
        },
        {
            "xValue": "Aug 2019",
            "yValue0": 102.74,
            "yValue1": 110.54,
            "yValue2": 108.31
        },
        {
            "xValue": "Sep 2019",
            "yValue0": 102.17,
            "yValue1": 110.29,
            "yValue2": 107.88
        },
        {
            "xValue": "Oct 2019",
            "yValue0": 102.36,
            "yValue1": 110.00,
            "yValue2": 107.82
        },
        {
            "xValue": "Nov 2019",
            "yValue0": 101.96,
            "yValue1": 109.47,
            "yValue2": 107.69
        },
        {
            "xValue": "Dec 2019",
            "yValue0": 101.80,
            "yValue1": 108.97,
            "yValue2": 107.47
        },
        {
            "xValue": "Jan 2020",
            "yValue0": 101.44,
            "yValue1": 108.25,
            "yValue2": 107.75
        },
        {
            "xValue": "Feb 2020",
            "yValue0": 100.99,
            "yValue1": 108.78,
            "yValue2": 108.03
        },
        {
            "xValue": "Mar 2020",
            "yValue0": 98.98,
            "yValue1": 107.01,
            "yValue2": 106.72
        },
        {
            "xValue": "Apr 2020",
            "yValue0": 89.39,
            "yValue1": 93.18,
            "yValue2": 91.91
        },
        {
            "xValue": "May 2020",
            "yValue0": 88.73,
            "yValue1": 93.47,
            "yValue2": 94.91
        },
        {
            "xValue": "Jun 2020",
            "yValue0": 91.86,
            "yValue1": 97.04,
            "yValue2": 98.35
        },
        {
            "xValue": "Jul 2020",
            "yValue0": 92.22,
            "yValue1": 97.40,
            "yValue2": 98.89
        },
        {
            "xValue": "Aug 2020",
            "yValue0": 94.07,
            "yValue1": 98.17,
            "yValue2": 101.04
        },
        {
            "xValue": "Sep 2020",
            "yValue0": 94.34,
            "yValue1": 98.10,
            "yValue2": 100.49
        }
    ],
});