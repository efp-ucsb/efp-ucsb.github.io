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
        "title": "Index (Dec 2007 = 100)"
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
            "yValue0": 92.98,
            "yValue1": 92.72,
            "yValue2": 94.65
        },
        {
            "xValue": "Feb 2000",
            "yValue0": 93.10,
            "yValue1": 92.99,
            "yValue2": 94.72
        },
        {
            "xValue": "Mar 2000",
            "yValue0": 93.53,
            "yValue1": 93.27,
            "yValue2": 95.07
        },
        {
            "xValue": "Apr 2000",
            "yValue0": 93.28,
            "yValue1": 93.54,
            "yValue2": 95.27
        },
        {
            "xValue": "May 2000",
            "yValue0": 94.14,
            "yValue1": 93.93,
            "yValue2": 95.41
        },
        {
            "xValue": "Jun 2000",
            "yValue0": 94.47,
            "yValue1": 94.21,
            "yValue2": 95.40
        },
        {
            "xValue": "Jul 2000",
            "yValue0": 94.51,
            "yValue1": 94.44,
            "yValue2": 95.51
        },
        {
            "xValue": "Aug 2000",
            "yValue0": 94.14,
            "yValue1": 94.71,
            "yValue2": 95.54
        },
        {
            "xValue": "Sep 2000",
            "yValue0": 94.69,
            "yValue1": 95.04,
            "yValue2": 95.66
        },
        {
            "xValue": "Oct 2000",
            "yValue0": 94.64,
            "yValue1": 95.01,
            "yValue2": 95.64
        },
        {
            "xValue": "Nov 2000",
            "yValue0": 94.97,
            "yValue1": 95.38,
            "yValue2": 95.80
        },
        {
            "xValue": "Dec 2000",
            "yValue0": 95.31,
            "yValue1": 95.64,
            "yValue2": 95.88
        },
        {
            "xValue": "Jan 2001",
            "yValue0": 95.16,
            "yValue1": 95.86,
            "yValue2": 95.87
        },
        {
            "xValue": "Feb 2001",
            "yValue0": 95.23,
            "yValue1": 95.83,
            "yValue2": 95.91
        },
        {
            "xValue": "Mar 2001",
            "yValue0": 95.21,
            "yValue1": 95.85,
            "yValue2": 95.89
        },
        {
            "xValue": "Apr 2001",
            "yValue0": 95.51,
            "yValue1": 95.55,
            "yValue2": 95.69
        },
        {
            "xValue": "May 2001",
            "yValue0": 94.99,
            "yValue1": 95.37,
            "yValue2": 95.63
        },
        {
            "xValue": "Jun 2001",
            "yValue0": 95.10,
            "yValue1": 95.30,
            "yValue2": 95.56
        },
        {
            "xValue": "Jul 2001",
            "yValue0": 94.78,
            "yValue1": 94.90,
            "yValue2": 95.47
        },
        {
            "xValue": "Aug 2001",
            "yValue0": 94.96,
            "yValue1": 94.97,
            "yValue2": 95.41
        },
        {
            "xValue": "Sep 2001",
            "yValue0": 94.42,
            "yValue1": 94.68,
            "yValue2": 95.23
        },
        {
            "xValue": "Oct 2001",
            "yValue0": 94.32,
            "yValue1": 94.51,
            "yValue2": 94.99
        },
        {
            "xValue": "Nov 2001",
            "yValue0": 94.03,
            "yValue1": 94.32,
            "yValue2": 94.78
        },
        {
            "xValue": "Dec 2001",
            "yValue0": 94.36,
            "yValue1": 94.19,
            "yValue2": 94.65
        },
        {
            "xValue": "Jan 2002",
            "yValue0": 94.26,
            "yValue1": 94.16,
            "yValue2": 94.54
        },
        {
            "xValue": "Feb 2002",
            "yValue0": 94.55,
            "yValue1": 94.21,
            "yValue2": 94.43
        },
        {
            "xValue": "Mar 2002",
            "yValue0": 94.82,
            "yValue1": 94.35,
            "yValue2": 94.42
        },
        {
            "xValue": "Apr 2002",
            "yValue0": 94.35,
            "yValue1": 94.38,
            "yValue2": 94.36
        },
        {
            "xValue": "May 2002",
            "yValue0": 94.69,
            "yValue1": 94.45,
            "yValue2": 94.34
        },
        {
            "xValue": "Jun 2002",
            "yValue0": 94.42,
            "yValue1": 94.40,
            "yValue2": 94.39
        },
        {
            "xValue": "Jul 2002",
            "yValue0": 94.77,
            "yValue1": 94.17,
            "yValue2": 94.33
        },
        {
            "xValue": "Aug 2002",
            "yValue0": 94.42,
            "yValue1": 94.33,
            "yValue2": 94.36
        },
        {
            "xValue": "Sep 2002",
            "yValue0": 94.58,
            "yValue1": 94.35,
            "yValue2": 94.32
        },
        {
            "xValue": "Oct 2002",
            "yValue0": 94.08,
            "yValue1": 94.36,
            "yValue2": 94.38
        },
        {
            "xValue": "Nov 2002",
            "yValue0": 94.07,
            "yValue1": 94.49,
            "yValue2": 94.40
        },
        {
            "xValue": "Dec 2002",
            "yValue0": 94.02,
            "yValue1": 94.42,
            "yValue2": 94.30
        },
        {
            "xValue": "Jan 2003",
            "yValue0": 94.14,
            "yValue1": 94.31,
            "yValue2": 94.35
        },
        {
            "xValue": "Feb 2003",
            "yValue0": 94.26,
            "yValue1": 94.21,
            "yValue2": 94.23
        },
        {
            "xValue": "Mar 2003",
            "yValue0": 93.83,
            "yValue1": 94.09,
            "yValue2": 94.09
        },
        {
            "xValue": "Apr 2003",
            "yValue0": 94.67,
            "yValue1": 94.13,
            "yValue2": 94.05
        },
        {
            "xValue": "May 2003",
            "yValue0": 94.62,
            "yValue1": 94.14,
            "yValue2": 94.02
        },
        {
            "xValue": "Jun 2003",
            "yValue0": 94.31,
            "yValue1": 94.13,
            "yValue2": 94.03
        },
        {
            "xValue": "Jul 2003",
            "yValue0": 94.39,
            "yValue1": 94.00,
            "yValue2": 94.05
        },
        {
            "xValue": "Aug 2003",
            "yValue0": 94.70,
            "yValue1": 94.13,
            "yValue2": 94.04
        },
        {
            "xValue": "Sep 2003",
            "yValue0": 95.13,
            "yValue1": 94.13,
            "yValue2": 94.14
        },
        {
            "xValue": "Oct 2003",
            "yValue0": 95.57,
            "yValue1": 94.27,
            "yValue2": 94.26
        },
        {
            "xValue": "Nov 2003",
            "yValue0": 95.64,
            "yValue1": 94.20,
            "yValue2": 94.28
        },
        {
            "xValue": "Dec 2003",
            "yValue0": 95.73,
            "yValue1": 94.32,
            "yValue2": 94.39
        },
        {
            "xValue": "Jan 2004",
            "yValue0": 96.45,
            "yValue1": 94.56,
            "yValue2": 94.48
        },
        {
            "xValue": "Feb 2004",
            "yValue0": 96.02,
            "yValue1": 94.64,
            "yValue2": 94.51
        },
        {
            "xValue": "Mar 2004",
            "yValue0": 96.04,
            "yValue1": 94.80,
            "yValue2": 94.75
        },
        {
            "xValue": "Apr 2004",
            "yValue0": 96.22,
            "yValue1": 94.88,
            "yValue2": 94.92
        },
        {
            "xValue": "May 2004",
            "yValue0": 95.82,
            "yValue1": 95.06,
            "yValue2": 95.12
        },
        {
            "xValue": "Jun 2004",
            "yValue0": 96.48,
            "yValue1": 95.07,
            "yValue2": 95.19
        },
        {
            "xValue": "Jul 2004",
            "yValue0": 96.37,
            "yValue1": 95.56,
            "yValue2": 95.22
        },
        {
            "xValue": "Aug 2004",
            "yValue0": 96.62,
            "yValue1": 95.47,
            "yValue2": 95.32
        },
        {
            "xValue": "Sep 2004",
            "yValue0": 96.60,
            "yValue1": 95.52,
            "yValue2": 95.46
        },
        {
            "xValue": "Oct 2004",
            "yValue0": 96.87,
            "yValue1": 95.85,
            "yValue2": 95.68
        },
        {
            "xValue": "Nov 2004",
            "yValue0": 96.75,
            "yValue1": 96.00,
            "yValue2": 95.75
        },
        {
            "xValue": "Dec 2004",
            "yValue0": 96.68,
            "yValue1": 96.05,
            "yValue2": 95.86
        },
        {
            "xValue": "Jan 2005",
            "yValue0": 96.69,
            "yValue1": 96.18,
            "yValue2": 95.94
        },
        {
            "xValue": "Feb 2005",
            "yValue0": 97.13,
            "yValue1": 96.36,
            "yValue2": 96.11
        },
        {
            "xValue": "Mar 2005",
            "yValue0": 97.66,
            "yValue1": 96.51,
            "yValue2": 96.21
        },
        {
            "xValue": "Apr 2005",
            "yValue0": 98.14,
            "yValue1": 96.79,
            "yValue2": 96.45
        },
        {
            "xValue": "May 2005",
            "yValue0": 98.08,
            "yValue1": 96.85,
            "yValue2": 96.56
        },
        {
            "xValue": "Jun 2005",
            "yValue0": 98.26,
            "yValue1": 96.89,
            "yValue2": 96.75
        },
        {
            "xValue": "Jul 2005",
            "yValue0": 98.59,
            "yValue1": 97.33,
            "yValue2": 97.02
        },
        {
            "xValue": "Aug 2005",
            "yValue0": 98.43,
            "yValue1": 97.52,
            "yValue2": 97.18
        },
        {
            "xValue": "Sep 2005",
            "yValue0": 98.54,
            "yValue1": 97.79,
            "yValue2": 97.24
        },
        {
            "xValue": "Oct 2005",
            "yValue0": 98.57,
            "yValue1": 97.86,
            "yValue2": 97.29
        },
        {
            "xValue": "Nov 2005",
            "yValue0": 98.56,
            "yValue1": 98.08,
            "yValue2": 97.54
        },
        {
            "xValue": "Dec 2005",
            "yValue0": 98.77,
            "yValue1": 98.31,
            "yValue2": 97.67
        },
        {
            "xValue": "Jan 2006",
            "yValue0": 98.46,
            "yValue1": 98.38,
            "yValue2": 97.85
        },
        {
            "xValue": "Feb 2006",
            "yValue0": 98.61,
            "yValue1": 98.57,
            "yValue2": 98.07
        },
        {
            "xValue": "Mar 2006",
            "yValue0": 98.24,
            "yValue1": 98.63,
            "yValue2": 98.29
        },
        {
            "xValue": "Apr 2006",
            "yValue0": 98.24,
            "yValue1": 98.55,
            "yValue2": 98.40
        },
        {
            "xValue": "May 2006",
            "yValue0": 98.83,
            "yValue1": 98.95,
            "yValue2": 98.42
        },
        {
            "xValue": "Jun 2006",
            "yValue0": 98.81,
            "yValue1": 99.10,
            "yValue2": 98.48
        },
        {
            "xValue": "Jul 2006",
            "yValue0": 98.36,
            "yValue1": 99.17,
            "yValue2": 98.62
        },
        {
            "xValue": "Aug 2006",
            "yValue0": 98.23,
            "yValue1": 99.29,
            "yValue2": 98.76
        },
        {
            "xValue": "Sep 2006",
            "yValue0": 98.53,
            "yValue1": 99.37,
            "yValue2": 98.88
        },
        {
            "xValue": "Oct 2006",
            "yValue0": 97.95,
            "yValue1": 99.37,
            "yValue2": 98.88
        },
        {
            "xValue": "Nov 2006",
            "yValue0": 98.31,
            "yValue1": 99.41,
            "yValue2": 99.04
        },
        {
            "xValue": "Dec 2006",
            "yValue0": 98.09,
            "yValue1": 99.45,
            "yValue2": 99.18
        },
        {
            "xValue": "Jan 2007",
            "yValue0": 98.67,
            "yValue1": 99.66,
            "yValue2": 99.33
        },
        {
            "xValue": "Feb 2007",
            "yValue0": 98.93,
            "yValue1": 99.78,
            "yValue2": 99.39
        },
        {
            "xValue": "Mar 2007",
            "yValue0": 99.18,
            "yValue1": 99.97,
            "yValue2": 99.55
        },
        {
            "xValue": "Apr 2007",
            "yValue0": 98.81,
            "yValue1": 99.54,
            "yValue2": 99.59
        },
        {
            "xValue": "May 2007",
            "yValue0": 99.11,
            "yValue1": 99.78,
            "yValue2": 99.69
        },
        {
            "xValue": "Jun 2007",
            "yValue0": 98.97,
            "yValue1": 99.85,
            "yValue2": 99.74
        },
        {
            "xValue": "Jul 2007",
            "yValue0": 99.29,
            "yValue1": 100.24,
            "yValue2": 99.71
        },
        {
            "xValue": "Aug 2007",
            "yValue0": 99.63,
            "yValue1": 100.05,
            "yValue2": 99.69
        },
        {
            "xValue": "Sep 2007",
            "yValue0": 99.31,
            "yValue1": 99.98,
            "yValue2": 99.77
        },
        {
            "xValue": "Oct 2007",
            "yValue0": 99.50,
            "yValue1": 99.92,
            "yValue2": 99.83
        },
        {
            "xValue": "Nov 2007",
            "yValue0": 99.83,
            "yValue1": 99.99,
            "yValue2": 99.90
        },
        {
            "xValue": "Dec 2007",
            "yValue0": 100.00,
            "yValue1": 100.00,
            "yValue2": 100.00
        },
        {
            "xValue": "Jan 2008",
            "yValue0": 99.67,
            "yValue1": 99.81,
            "yValue2": 100.01
        },
        {
            "xValue": "Feb 2008",
            "yValue0": 99.87,
            "yValue1": 99.86,
            "yValue2": 99.94
        },
        {
            "xValue": "Mar 2008",
            "yValue0": 99.69,
            "yValue1": 99.71,
            "yValue2": 99.91
        },
        {
            "xValue": "Apr 2008",
            "yValue0": 99.64,
            "yValue1": 99.62,
            "yValue2": 99.75
        },
        {
            "xValue": "May 2008",
            "yValue0": 99.28,
            "yValue1": 99.45,
            "yValue2": 99.59
        },
        {
            "xValue": "Jun 2008",
            "yValue0": 99.02,
            "yValue1": 99.26,
            "yValue2": 99.47
        },
        {
            "xValue": "Jul 2008",
            "yValue0": 98.71,
            "yValue1": 99.18,
            "yValue2": 99.32
        },
        {
            "xValue": "Aug 2008",
            "yValue0": 97.89,
            "yValue1": 98.87,
            "yValue2": 99.11
        },
        {
            "xValue": "Sep 2008",
            "yValue0": 98.69,
            "yValue1": 98.61,
            "yValue2": 98.79
        },
        {
            "xValue": "Oct 2008",
            "yValue0": 98.58,
            "yValue1": 97.96,
            "yValue2": 98.46
        },
        {
            "xValue": "Nov 2008",
            "yValue0": 97.67,
            "yValue1": 97.26,
            "yValue2": 97.91
        },
        {
            "xValue": "Dec 2008",
            "yValue0": 97.55,
            "yValue1": 96.77,
            "yValue2": 97.42
        },
        {
            "xValue": "Jan 2009",
            "yValue0": 96.78,
            "yValue1": 96.11,
            "yValue2": 96.86
        },
        {
            "xValue": "Feb 2009",
            "yValue0": 95.83,
            "yValue1": 95.24,
            "yValue2": 96.35
        },
        {
            "xValue": "Mar 2009",
            "yValue0": 95.61,
            "yValue1": 94.62,
            "yValue2": 95.77
        },
        {
            "xValue": "Apr 2009",
            "yValue0": 94.75,
            "yValue1": 93.98,
            "yValue2": 95.27
        },
        {
            "xValue": "May 2009",
            "yValue0": 94.07,
            "yValue1": 93.64,
            "yValue2": 94.98
        },
        {
            "xValue": "Jun 2009",
            "yValue0": 94.12,
            "yValue1": 93.16,
            "yValue2": 94.62
        },
        {
            "xValue": "Jul 2009",
            "yValue0": 93.92,
            "yValue1": 92.55,
            "yValue2": 94.39
        },
        {
            "xValue": "Aug 2009",
            "yValue0": 93.61,
            "yValue1": 92.23,
            "yValue2": 94.25
        },
        {
            "xValue": "Sep 2009",
            "yValue0": 93.36,
            "yValue1": 91.96,
            "yValue2": 94.07
        },
        {
            "xValue": "Oct 2009",
            "yValue0": 93.66,
            "yValue1": 92.22,
            "yValue2": 93.93
        },
        {
            "xValue": "Nov 2009",
            "yValue0": 93.50,
            "yValue1": 92.05,
            "yValue2": 93.94
        },
        {
            "xValue": "Dec 2009",
            "yValue0": 92.78,
            "yValue1": 91.94,
            "yValue2": 93.77
        },
        {
            "xValue": "Jan 2010",
            "yValue0": 93.29,
            "yValue1": 91.87,
            "yValue2": 93.79
        },
        {
            "xValue": "Feb 2010",
            "yValue0": 92.86,
            "yValue1": 91.72,
            "yValue2": 93.73
        },
        {
            "xValue": "Mar 2010",
            "yValue0": 92.80,
            "yValue1": 91.74,
            "yValue2": 93.87
        },
        {
            "xValue": "Apr 2010",
            "yValue0": 93.30,
            "yValue1": 92.35,
            "yValue2": 94.04
        },
        {
            "xValue": "May 2010",
            "yValue0": 93.62,
            "yValue1": 92.57,
            "yValue2": 94.37
        },
        {
            "xValue": "Jun 2010",
            "yValue0": 93.43,
            "yValue1": 92.43,
            "yValue2": 94.25
        },
        {
            "xValue": "Jul 2010",
            "yValue0": 93.57,
            "yValue1": 92.35,
            "yValue2": 94.22
        },
        {
            "xValue": "Aug 2010",
            "yValue0": 93.43,
            "yValue1": 92.33,
            "yValue2": 94.21
        },
        {
            "xValue": "Sep 2010",
            "yValue0": 93.05,
            "yValue1": 92.34,
            "yValue2": 94.16
        },
        {
            "xValue": "Oct 2010",
            "yValue0": 93.16,
            "yValue1": 92.60,
            "yValue2": 94.36
        },
        {
            "xValue": "Nov 2010",
            "yValue0": 93.35,
            "yValue1": 92.60,
            "yValue2": 94.46
        },
        {
            "xValue": "Dec 2010",
            "yValue0": 93.39,
            "yValue1": 92.70,
            "yValue2": 94.54
        },
        {
            "xValue": "Jan 2011",
            "yValue0": 93.28,
            "yValue1": 92.77,
            "yValue2": 94.57
        },
        {
            "xValue": "Feb 2011",
            "yValue0": 93.63,
            "yValue1": 92.88,
            "yValue2": 94.68
        },
        {
            "xValue": "Mar 2011",
            "yValue0": 93.42,
            "yValue1": 92.89,
            "yValue2": 94.87
        },
        {
            "xValue": "Apr 2011",
            "yValue0": 93.58,
            "yValue1": 93.06,
            "yValue2": 95.10
        },
        {
            "xValue": "May 2011",
            "yValue0": 93.71,
            "yValue1": 93.02,
            "yValue2": 95.12
        },
        {
            "xValue": "Jun 2011",
            "yValue0": 93.93,
            "yValue1": 92.99,
            "yValue2": 95.28
        },
        {
            "xValue": "Jul 2011",
            "yValue0": 94.16,
            "yValue1": 93.27,
            "yValue2": 95.37
        },
        {
            "xValue": "Aug 2011",
            "yValue0": 94.36,
            "yValue1": 93.36,
            "yValue2": 95.46
        },
        {
            "xValue": "Sep 2011",
            "yValue0": 94.53,
            "yValue1": 93.66,
            "yValue2": 95.62
        },
        {
            "xValue": "Oct 2011",
            "yValue0": 93.87,
            "yValue1": 93.67,
            "yValue2": 95.77
        },
        {
            "xValue": "Nov 2011",
            "yValue0": 94.29,
            "yValue1": 93.77,
            "yValue2": 95.88
        },
        {
            "xValue": "Dec 2011",
            "yValue0": 94.49,
            "yValue1": 93.91,
            "yValue2": 96.05
        },
        {
            "xValue": "Jan 2012",
            "yValue0": 94.81,
            "yValue1": 94.28,
            "yValue2": 96.30
        },
        {
            "xValue": "Feb 2012",
            "yValue0": 95.27,
            "yValue1": 94.45,
            "yValue2": 96.44
        },
        {
            "xValue": "Mar 2012",
            "yValue0": 95.31,
            "yValue1": 94.71,
            "yValue2": 96.64
        },
        {
            "xValue": "Apr 2012",
            "yValue0": 95.76,
            "yValue1": 94.75,
            "yValue2": 96.68
        },
        {
            "xValue": "May 2012",
            "yValue0": 96.24,
            "yValue1": 95.05,
            "yValue2": 96.73
        },
        {
            "xValue": "Jun 2012",
            "yValue0": 96.47,
            "yValue1": 95.37,
            "yValue2": 96.78
        },
        {
            "xValue": "Jul 2012",
            "yValue0": 96.42,
            "yValue1": 95.47,
            "yValue2": 96.94
        },
        {
            "xValue": "Aug 2012",
            "yValue0": 96.75,
            "yValue1": 95.68,
            "yValue2": 97.07
        },
        {
            "xValue": "Sep 2012",
            "yValue0": 96.95,
            "yValue1": 95.83,
            "yValue2": 97.20
        },
        {
            "xValue": "Oct 2012",
            "yValue0": 97.57,
            "yValue1": 96.05,
            "yValue2": 97.31
        },
        {
            "xValue": "Nov 2012",
            "yValue0": 97.82,
            "yValue1": 96.31,
            "yValue2": 97.40
        },
        {
            "xValue": "Dec 2012",
            "yValue0": 98.09,
            "yValue1": 96.50,
            "yValue2": 97.60
        },
        {
            "xValue": "Jan 2013",
            "yValue0": 98.31,
            "yValue1": 96.60,
            "yValue2": 97.74
        },
        {
            "xValue": "Feb 2013",
            "yValue0": 98.50,
            "yValue1": 96.95,
            "yValue2": 97.91
        },
        {
            "xValue": "Mar 2013",
            "yValue0": 98.98,
            "yValue1": 97.13,
            "yValue2": 98.03
        },
        {
            "xValue": "Apr 2013",
            "yValue0": 98.93,
            "yValue1": 97.37,
            "yValue2": 98.15
        },
        {
            "xValue": "May 2013",
            "yValue0": 98.73,
            "yValue1": 97.57,
            "yValue2": 98.30
        },
        {
            "xValue": "Jun 2013",
            "yValue0": 99.11,
            "yValue1": 97.71,
            "yValue2": 98.42
        },
        {
            "xValue": "Jul 2013",
            "yValue0": 98.65,
            "yValue1": 97.91,
            "yValue2": 98.53
        },
        {
            "xValue": "Aug 2013",
            "yValue0": 99.19,
            "yValue1": 98.26,
            "yValue2": 98.73
        },
        {
            "xValue": "Sep 2013",
            "yValue0": 99.62,
            "yValue1": 98.40,
            "yValue2": 98.87
        },
        {
            "xValue": "Oct 2013",
            "yValue0": 99.90,
            "yValue1": 98.62,
            "yValue2": 99.02
        },
        {
            "xValue": "Nov 2013",
            "yValue0": 100.13,
            "yValue1": 98.95,
            "yValue2": 99.17
        },
        {
            "xValue": "Dec 2013",
            "yValue0": 100.22,
            "yValue1": 99.14,
            "yValue2": 99.25
        },
        {
            "xValue": "Jan 2014",
            "yValue0": 100.23,
            "yValue1": 99.41,
            "yValue2": 99.38
        },
        {
            "xValue": "Feb 2014",
            "yValue0": 100.22,
            "yValue1": 99.59,
            "yValue2": 99.49
        },
        {
            "xValue": "Mar 2014",
            "yValue0": 100.78,
            "yValue1": 99.82,
            "yValue2": 99.68
        },
        {
            "xValue": "Apr 2014",
            "yValue0": 100.59,
            "yValue1": 100.06,
            "yValue2": 99.91
        },
        {
            "xValue": "May 2014",
            "yValue0": 100.69,
            "yValue1": 100.30,
            "yValue2": 100.07
        },
        {
            "xValue": "Jun 2014",
            "yValue0": 100.43,
            "yValue1": 100.45,
            "yValue2": 100.30
        },
        {
            "xValue": "Jul 2014",
            "yValue0": 100.07,
            "yValue1": 100.50,
            "yValue2": 100.46
        },
        {
            "xValue": "Aug 2014",
            "yValue0": 100.76,
            "yValue1": 100.98,
            "yValue2": 100.63
        },
        {
            "xValue": "Sep 2014",
            "yValue0": 101.01,
            "yValue1": 101.25,
            "yValue2": 100.83
        },
        {
            "xValue": "Oct 2014",
            "yValue0": 101.00,
            "yValue1": 101.50,
            "yValue2": 101.01
        },
        {
            "xValue": "Nov 2014",
            "yValue0": 101.31,
            "yValue1": 101.70,
            "yValue2": 101.22
        },
        {
            "xValue": "Dec 2014",
            "yValue0": 101.69,
            "yValue1": 101.95,
            "yValue2": 101.41
        },
        {
            "xValue": "Jan 2015",
            "yValue0": 101.69,
            "yValue1": 102.22,
            "yValue2": 101.58
        },
        {
            "xValue": "Feb 2015",
            "yValue0": 102.14,
            "yValue1": 102.39,
            "yValue2": 101.74
        },
        {
            "xValue": "Mar 2015",
            "yValue0": 102.11,
            "yValue1": 102.66,
            "yValue2": 101.81
        },
        {
            "xValue": "Apr 2015",
            "yValue0": 102.47,
            "yValue1": 102.93,
            "yValue2": 102.02
        },
        {
            "xValue": "May 2015",
            "yValue0": 102.50,
            "yValue1": 103.14,
            "yValue2": 102.24
        },
        {
            "xValue": "Jun 2015",
            "yValue0": 102.14,
            "yValue1": 103.33,
            "yValue2": 102.39
        },
        {
            "xValue": "Jul 2015",
            "yValue0": 102.90,
            "yValue1": 103.98,
            "yValue2": 102.57
        },
        {
            "xValue": "Aug 2015",
            "yValue0": 103.25,
            "yValue1": 104.23,
            "yValue2": 102.69
        },
        {
            "xValue": "Sep 2015",
            "yValue0": 103.50,
            "yValue1": 104.44,
            "yValue2": 102.76
        },
        {
            "xValue": "Oct 2015",
            "yValue0": 102.37,
            "yValue1": 104.88,
            "yValue2": 103.01
        },
        {
            "xValue": "Nov 2015",
            "yValue0": 102.53,
            "yValue1": 104.97,
            "yValue2": 103.19
        },
        {
            "xValue": "Dec 2015",
            "yValue0": 102.57,
            "yValue1": 105.22,
            "yValue2": 103.36
        },
        {
            "xValue": "Jan 2016",
            "yValue0": 102.89,
            "yValue1": 105.40,
            "yValue2": 103.46
        },
        {
            "xValue": "Feb 2016",
            "yValue0": 102.73,
            "yValue1": 105.67,
            "yValue2": 103.61
        },
        {
            "xValue": "Mar 2016",
            "yValue0": 102.79,
            "yValue1": 105.51,
            "yValue2": 103.80
        },
        {
            "xValue": "Apr 2016",
            "yValue0": 102.65,
            "yValue1": 106.25,
            "yValue2": 103.94
        },
        {
            "xValue": "May 2016",
            "yValue0": 102.75,
            "yValue1": 106.25,
            "yValue2": 103.95
        },
        {
            "xValue": "Jun 2016",
            "yValue0": 102.86,
            "yValue1": 106.08,
            "yValue2": 104.16
        },
        {
            "xValue": "Jul 2016",
            "yValue0": 103.61,
            "yValue1": 106.61,
            "yValue2": 104.38
        },
        {
            "xValue": "Aug 2016",
            "yValue0": 103.39,
            "yValue1": 106.75,
            "yValue2": 104.51
        },
        {
            "xValue": "Sep 2016",
            "yValue0": 103.25,
            "yValue1": 107.04,
            "yValue2": 104.72
        },
        {
            "xValue": "Oct 2016",
            "yValue0": 103.09,
            "yValue1": 107.18,
            "yValue2": 104.81
        },
        {
            "xValue": "Nov 2016",
            "yValue0": 103.30,
            "yValue1": 107.28,
            "yValue2": 104.92
        },
        {
            "xValue": "Dec 2016",
            "yValue0": 103.19,
            "yValue1": 107.41,
            "yValue2": 105.06
        },
        {
            "xValue": "Jan 2017",
            "yValue0": 103.48,
            "yValue1": 107.39,
            "yValue2": 105.27
        },
        {
            "xValue": "Feb 2017",
            "yValue0": 103.21,
            "yValue1": 107.69,
            "yValue2": 105.37
        },
        {
            "xValue": "Mar 2017",
            "yValue0": 103.29,
            "yValue1": 107.98,
            "yValue2": 105.45
        },
        {
            "xValue": "Apr 2017",
            "yValue0": 103.71,
            "yValue1": 108.14,
            "yValue2": 105.59
        },
        {
            "xValue": "May 2017",
            "yValue0": 103.71,
            "yValue1": 108.44,
            "yValue2": 105.69
        },
        {
            "xValue": "Jun 2017",
            "yValue0": 104.00,
            "yValue1": 108.63,
            "yValue2": 105.86
        },
        {
            "xValue": "Jul 2017",
            "yValue0": 104.22,
            "yValue1": 108.73,
            "yValue2": 105.99
        },
        {
            "xValue": "Aug 2017",
            "yValue0": 104.29,
            "yValue1": 108.88,
            "yValue2": 106.14
        },
        {
            "xValue": "Sep 2017",
            "yValue0": 104.72,
            "yValue1": 109.03,
            "yValue2": 106.17
        },
        {
            "xValue": "Oct 2017",
            "yValue0": 105.45,
            "yValue1": 109.24,
            "yValue2": 106.36
        },
        {
            "xValue": "Nov 2017",
            "yValue0": 105.26,
            "yValue1": 109.46,
            "yValue2": 106.51
        },
        {
            "xValue": "Dec 2017",
            "yValue0": 105.40,
            "yValue1": 109.68,
            "yValue2": 106.64
        },
        {
            "xValue": "Jan 2018",
            "yValue0": 105.23,
            "yValue1": 110.09,
            "yValue2": 106.78
        },
        {
            "xValue": "Feb 2018",
            "yValue0": 105.65,
            "yValue1": 110.21,
            "yValue2": 106.98
        },
        {
            "xValue": "Mar 2018",
            "yValue0": 105.49,
            "yValue1": 110.27,
            "yValue2": 107.12
        },
        {
            "xValue": "Apr 2018",
            "yValue0": 105.44,
            "yValue1": 110.43,
            "yValue2": 107.26
        },
        {
            "xValue": "May 2018",
            "yValue0": 105.65,
            "yValue1": 110.47,
            "yValue2": 107.44
        },
        {
            "xValue": "Jun 2018",
            "yValue0": 105.53,
            "yValue1": 110.65,
            "yValue2": 107.59
        },
        {
            "xValue": "Jul 2018",
            "yValue0": 104.93,
            "yValue1": 110.87,
            "yValue2": 107.70
        },
        {
            "xValue": "Aug 2018",
            "yValue0": 105.08,
            "yValue1": 111.04,
            "yValue2": 107.89
        },
        {
            "xValue": "Sep 2018",
            "yValue0": 105.24,
            "yValue1": 111.17,
            "yValue2": 108.01
        },
        {
            "xValue": "Oct 2018",
            "yValue0": 105.48,
            "yValue1": 111.29,
            "yValue2": 108.18
        }
    ],
});