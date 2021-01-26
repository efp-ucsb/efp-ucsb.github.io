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
            "yValue0": 93.01,
            "yValue1": 92.73,
            "yValue2": 94.66
        },
        {
            "xValue": "Feb 2000",
            "yValue0": 93.13,
            "yValue1": 93.00,
            "yValue2": 94.75
        },
        {
            "xValue": "Mar 2000",
            "yValue0": 93.56,
            "yValue1": 93.28,
            "yValue2": 95.09
        },
        {
            "xValue": "Apr 2000",
            "yValue0": 93.40,
            "yValue1": 93.55,
            "yValue2": 95.30
        },
        {
            "xValue": "May 2000",
            "yValue0": 94.21,
            "yValue1": 93.94,
            "yValue2": 95.46
        },
        {
            "xValue": "Jun 2000",
            "yValue0": 94.47,
            "yValue1": 94.22,
            "yValue2": 95.43
        },
        {
            "xValue": "Jul 2000",
            "yValue0": 94.59,
            "yValue1": 94.45,
            "yValue2": 95.55
        },
        {
            "xValue": "Aug 2000",
            "yValue0": 94.26,
            "yValue1": 94.72,
            "yValue2": 95.55
        },
        {
            "xValue": "Sep 2000",
            "yValue0": 94.78,
            "yValue1": 95.05,
            "yValue2": 95.64
        },
        {
            "xValue": "Oct 2000",
            "yValue0": 94.70,
            "yValue1": 95.02,
            "yValue2": 95.63
        },
        {
            "xValue": "Nov 2000",
            "yValue0": 95.02,
            "yValue1": 95.39,
            "yValue2": 95.78
        },
        {
            "xValue": "Dec 2000",
            "yValue0": 95.36,
            "yValue1": 95.65,
            "yValue2": 95.89
        },
        {
            "xValue": "Jan 2001",
            "yValue0": 95.27,
            "yValue1": 95.87,
            "yValue2": 95.89
        },
        {
            "xValue": "Feb 2001",
            "yValue0": 95.34,
            "yValue1": 95.84,
            "yValue2": 95.95
        },
        {
            "xValue": "Mar 2001",
            "yValue0": 95.29,
            "yValue1": 95.86,
            "yValue2": 95.92
        },
        {
            "xValue": "Apr 2001",
            "yValue0": 95.63,
            "yValue1": 95.56,
            "yValue2": 95.72
        },
        {
            "xValue": "May 2001",
            "yValue0": 95.06,
            "yValue1": 95.38,
            "yValue2": 95.68
        },
        {
            "xValue": "Jun 2001",
            "yValue0": 95.16,
            "yValue1": 95.31,
            "yValue2": 95.60
        },
        {
            "xValue": "Jul 2001",
            "yValue0": 94.85,
            "yValue1": 94.91,
            "yValue2": 95.51
        },
        {
            "xValue": "Aug 2001",
            "yValue0": 95.07,
            "yValue1": 94.97,
            "yValue2": 95.40
        },
        {
            "xValue": "Sep 2001",
            "yValue0": 94.45,
            "yValue1": 94.69,
            "yValue2": 95.22
        },
        {
            "xValue": "Oct 2001",
            "yValue0": 94.34,
            "yValue1": 94.51,
            "yValue2": 94.99
        },
        {
            "xValue": "Nov 2001",
            "yValue0": 94.04,
            "yValue1": 94.32,
            "yValue2": 94.76
        },
        {
            "xValue": "Dec 2001",
            "yValue0": 94.37,
            "yValue1": 94.19,
            "yValue2": 94.65
        },
        {
            "xValue": "Jan 2002",
            "yValue0": 94.27,
            "yValue1": 94.16,
            "yValue2": 94.55
        },
        {
            "xValue": "Feb 2002",
            "yValue0": 94.58,
            "yValue1": 94.21,
            "yValue2": 94.47
        },
        {
            "xValue": "Mar 2002",
            "yValue0": 94.84,
            "yValue1": 94.35,
            "yValue2": 94.45
        },
        {
            "xValue": "Apr 2002",
            "yValue0": 94.42,
            "yValue1": 94.38,
            "yValue2": 94.39
        },
        {
            "xValue": "May 2002",
            "yValue0": 94.72,
            "yValue1": 94.45,
            "yValue2": 94.39
        },
        {
            "xValue": "Jun 2002",
            "yValue0": 94.44,
            "yValue1": 94.40,
            "yValue2": 94.43
        },
        {
            "xValue": "Jul 2002",
            "yValue0": 94.78,
            "yValue1": 94.17,
            "yValue2": 94.36
        },
        {
            "xValue": "Aug 2002",
            "yValue0": 94.45,
            "yValue1": 94.33,
            "yValue2": 94.36
        },
        {
            "xValue": "Sep 2002",
            "yValue0": 94.61,
            "yValue1": 94.35,
            "yValue2": 94.30
        },
        {
            "xValue": "Oct 2002",
            "yValue0": 94.12,
            "yValue1": 94.36,
            "yValue2": 94.39
        },
        {
            "xValue": "Nov 2002",
            "yValue0": 94.09,
            "yValue1": 94.49,
            "yValue2": 94.38
        },
        {
            "xValue": "Dec 2002",
            "yValue0": 94.04,
            "yValue1": 94.42,
            "yValue2": 94.28
        },
        {
            "xValue": "Jan 2003",
            "yValue0": 94.13,
            "yValue1": 94.32,
            "yValue2": 94.36
        },
        {
            "xValue": "Feb 2003",
            "yValue0": 94.28,
            "yValue1": 94.21,
            "yValue2": 94.26
        },
        {
            "xValue": "Mar 2003",
            "yValue0": 93.84,
            "yValue1": 94.09,
            "yValue2": 94.10
        },
        {
            "xValue": "Apr 2003",
            "yValue0": 94.73,
            "yValue1": 94.13,
            "yValue2": 94.06
        },
        {
            "xValue": "May 2003",
            "yValue0": 94.67,
            "yValue1": 94.14,
            "yValue2": 94.08
        },
        {
            "xValue": "Jun 2003",
            "yValue0": 94.35,
            "yValue1": 94.14,
            "yValue2": 94.08
        },
        {
            "xValue": "Jul 2003",
            "yValue0": 94.39,
            "yValue1": 93.99,
            "yValue2": 94.07
        },
        {
            "xValue": "Aug 2003",
            "yValue0": 94.73,
            "yValue1": 94.13,
            "yValue2": 94.04
        },
        {
            "xValue": "Sep 2003",
            "yValue0": 95.16,
            "yValue1": 94.14,
            "yValue2": 94.12
        },
        {
            "xValue": "Oct 2003",
            "yValue0": 95.61,
            "yValue1": 94.26,
            "yValue2": 94.26
        },
        {
            "xValue": "Nov 2003",
            "yValue0": 95.72,
            "yValue1": 94.20,
            "yValue2": 94.28
        },
        {
            "xValue": "Dec 2003",
            "yValue0": 95.81,
            "yValue1": 94.32,
            "yValue2": 94.36
        },
        {
            "xValue": "Jan 2004",
            "yValue0": 96.47,
            "yValue1": 94.55,
            "yValue2": 94.49
        },
        {
            "xValue": "Feb 2004",
            "yValue0": 96.05,
            "yValue1": 94.64,
            "yValue2": 94.53
        },
        {
            "xValue": "Mar 2004",
            "yValue0": 96.05,
            "yValue1": 94.80,
            "yValue2": 94.76
        },
        {
            "xValue": "Apr 2004",
            "yValue0": 96.26,
            "yValue1": 94.88,
            "yValue2": 94.96
        },
        {
            "xValue": "May 2004",
            "yValue0": 95.86,
            "yValue1": 95.05,
            "yValue2": 95.16
        },
        {
            "xValue": "Jun 2004",
            "yValue0": 96.50,
            "yValue1": 95.07,
            "yValue2": 95.23
        },
        {
            "xValue": "Jul 2004",
            "yValue0": 96.44,
            "yValue1": 95.56,
            "yValue2": 95.27
        },
        {
            "xValue": "Aug 2004",
            "yValue0": 96.70,
            "yValue1": 95.46,
            "yValue2": 95.34
        },
        {
            "xValue": "Sep 2004",
            "yValue0": 96.69,
            "yValue1": 95.52,
            "yValue2": 95.45
        },
        {
            "xValue": "Oct 2004",
            "yValue0": 96.92,
            "yValue1": 95.85,
            "yValue2": 95.70
        },
        {
            "xValue": "Nov 2004",
            "yValue0": 96.82,
            "yValue1": 96.00,
            "yValue2": 95.74
        },
        {
            "xValue": "Dec 2004",
            "yValue0": 96.71,
            "yValue1": 96.04,
            "yValue2": 95.83
        },
        {
            "xValue": "Jan 2005",
            "yValue0": 96.76,
            "yValue1": 96.18,
            "yValue2": 95.94
        },
        {
            "xValue": "Feb 2005",
            "yValue0": 97.21,
            "yValue1": 96.35,
            "yValue2": 96.13
        },
        {
            "xValue": "Mar 2005",
            "yValue0": 97.73,
            "yValue1": 96.51,
            "yValue2": 96.22
        },
        {
            "xValue": "Apr 2005",
            "yValue0": 98.23,
            "yValue1": 96.79,
            "yValue2": 96.48
        },
        {
            "xValue": "May 2005",
            "yValue0": 98.16,
            "yValue1": 96.85,
            "yValue2": 96.60
        },
        {
            "xValue": "Jun 2005",
            "yValue0": 98.33,
            "yValue1": 96.89,
            "yValue2": 96.78
        },
        {
            "xValue": "Jul 2005",
            "yValue0": 98.68,
            "yValue1": 97.33,
            "yValue2": 97.04
        },
        {
            "xValue": "Aug 2005",
            "yValue0": 98.52,
            "yValue1": 97.51,
            "yValue2": 97.19
        },
        {
            "xValue": "Sep 2005",
            "yValue0": 98.63,
            "yValue1": 97.79,
            "yValue2": 97.24
        },
        {
            "xValue": "Oct 2005",
            "yValue0": 98.68,
            "yValue1": 97.85,
            "yValue2": 97.30
        },
        {
            "xValue": "Nov 2005",
            "yValue0": 98.63,
            "yValue1": 98.08,
            "yValue2": 97.54
        },
        {
            "xValue": "Dec 2005",
            "yValue0": 98.86,
            "yValue1": 98.31,
            "yValue2": 97.66
        },
        {
            "xValue": "Jan 2006",
            "yValue0": 98.56,
            "yValue1": 98.38,
            "yValue2": 97.86
        },
        {
            "xValue": "Feb 2006",
            "yValue0": 98.70,
            "yValue1": 98.57,
            "yValue2": 98.08
        },
        {
            "xValue": "Mar 2006",
            "yValue0": 98.31,
            "yValue1": 98.63,
            "yValue2": 98.31
        },
        {
            "xValue": "Apr 2006",
            "yValue0": 98.32,
            "yValue1": 98.55,
            "yValue2": 98.42
        },
        {
            "xValue": "May 2006",
            "yValue0": 98.90,
            "yValue1": 98.95,
            "yValue2": 98.45
        },
        {
            "xValue": "Jun 2006",
            "yValue0": 98.88,
            "yValue1": 99.10,
            "yValue2": 98.51
        },
        {
            "xValue": "Jul 2006",
            "yValue0": 98.38,
            "yValue1": 99.17,
            "yValue2": 98.65
        },
        {
            "xValue": "Aug 2006",
            "yValue0": 98.25,
            "yValue1": 99.29,
            "yValue2": 98.77
        },
        {
            "xValue": "Sep 2006",
            "yValue0": 98.55,
            "yValue1": 99.37,
            "yValue2": 98.88
        },
        {
            "xValue": "Oct 2006",
            "yValue0": 98.05,
            "yValue1": 99.37,
            "yValue2": 98.89
        },
        {
            "xValue": "Nov 2006",
            "yValue0": 98.32,
            "yValue1": 99.41,
            "yValue2": 99.04
        },
        {
            "xValue": "Dec 2006",
            "yValue0": 98.11,
            "yValue1": 99.45,
            "yValue2": 99.17
        },
        {
            "xValue": "Jan 2007",
            "yValue0": 98.71,
            "yValue1": 99.66,
            "yValue2": 99.34
        },
        {
            "xValue": "Feb 2007",
            "yValue0": 98.95,
            "yValue1": 99.78,
            "yValue2": 99.40
        },
        {
            "xValue": "Mar 2007",
            "yValue0": 99.21,
            "yValue1": 99.97,
            "yValue2": 99.57
        },
        {
            "xValue": "Apr 2007",
            "yValue0": 98.83,
            "yValue1": 99.54,
            "yValue2": 99.60
        },
        {
            "xValue": "May 2007",
            "yValue0": 99.13,
            "yValue1": 99.78,
            "yValue2": 99.71
        },
        {
            "xValue": "Jun 2007",
            "yValue0": 98.97,
            "yValue1": 99.86,
            "yValue2": 99.77
        },
        {
            "xValue": "Jul 2007",
            "yValue0": 99.31,
            "yValue1": 100.24,
            "yValue2": 99.74
        },
        {
            "xValue": "Aug 2007",
            "yValue0": 99.65,
            "yValue1": 100.05,
            "yValue2": 99.73
        },
        {
            "xValue": "Sep 2007",
            "yValue0": 99.34,
            "yValue1": 99.98,
            "yValue2": 99.79
        },
        {
            "xValue": "Oct 2007",
            "yValue0": 99.63,
            "yValue1": 99.92,
            "yValue2": 99.84
        },
        {
            "xValue": "Nov 2007",
            "yValue0": 99.82,
            "yValue1": 100.00,
            "yValue2": 99.92
        },
        {
            "xValue": "Dec 2007",
            "yValue0": 100.00,
            "yValue1": 100.00,
            "yValue2": 100.00
        },
        {
            "xValue": "Jan 2008",
            "yValue0": 99.74,
            "yValue1": 99.81,
            "yValue2": 100.01
        },
        {
            "xValue": "Feb 2008",
            "yValue0": 99.89,
            "yValue1": 99.86,
            "yValue2": 99.95
        },
        {
            "xValue": "Mar 2008",
            "yValue0": 99.72,
            "yValue1": 99.70,
            "yValue2": 99.92
        },
        {
            "xValue": "Apr 2008",
            "yValue0": 99.65,
            "yValue1": 99.62,
            "yValue2": 99.74
        },
        {
            "xValue": "May 2008",
            "yValue0": 99.29,
            "yValue1": 99.45,
            "yValue2": 99.61
        },
        {
            "xValue": "Jun 2008",
            "yValue0": 99.00,
            "yValue1": 99.26,
            "yValue2": 99.49
        },
        {
            "xValue": "Jul 2008",
            "yValue0": 98.80,
            "yValue1": 99.18,
            "yValue2": 99.35
        },
        {
            "xValue": "Aug 2008",
            "yValue0": 97.96,
            "yValue1": 98.87,
            "yValue2": 99.15
        },
        {
            "xValue": "Sep 2008",
            "yValue0": 98.77,
            "yValue1": 98.61,
            "yValue2": 98.82
        },
        {
            "xValue": "Oct 2008",
            "yValue0": 98.81,
            "yValue1": 97.96,
            "yValue2": 98.47
        },
        {
            "xValue": "Nov 2008",
            "yValue0": 97.68,
            "yValue1": 97.26,
            "yValue2": 97.94
        },
        {
            "xValue": "Dec 2008",
            "yValue0": 97.54,
            "yValue1": 96.77,
            "yValue2": 97.43
        },
        {
            "xValue": "Jan 2009",
            "yValue0": 96.80,
            "yValue1": 96.11,
            "yValue2": 96.87
        },
        {
            "xValue": "Feb 2009",
            "yValue0": 95.87,
            "yValue1": 95.24,
            "yValue2": 96.33
        },
        {
            "xValue": "Mar 2009",
            "yValue0": 95.64,
            "yValue1": 94.62,
            "yValue2": 95.75
        },
        {
            "xValue": "Apr 2009",
            "yValue0": 94.76,
            "yValue1": 93.98,
            "yValue2": 95.25
        },
        {
            "xValue": "May 2009",
            "yValue0": 94.13,
            "yValue1": 93.64,
            "yValue2": 95.00
        },
        {
            "xValue": "Jun 2009",
            "yValue0": 94.14,
            "yValue1": 93.17,
            "yValue2": 94.66
        },
        {
            "xValue": "Jul 2009",
            "yValue0": 93.87,
            "yValue1": 92.54,
            "yValue2": 94.42
        },
        {
            "xValue": "Aug 2009",
            "yValue0": 93.65,
            "yValue1": 92.22,
            "yValue2": 94.29
        },
        {
            "xValue": "Sep 2009",
            "yValue0": 93.28,
            "yValue1": 91.95,
            "yValue2": 94.11
        },
        {
            "xValue": "Oct 2009",
            "yValue0": 93.94,
            "yValue1": 92.21,
            "yValue2": 93.97
        },
        {
            "xValue": "Nov 2009",
            "yValue0": 93.49,
            "yValue1": 92.04,
            "yValue2": 93.98
        },
        {
            "xValue": "Dec 2009",
            "yValue0": 92.73,
            "yValue1": 91.94,
            "yValue2": 93.78
        },
        {
            "xValue": "Jan 2010",
            "yValue0": 93.24,
            "yValue1": 91.86,
            "yValue2": 93.78
        },
        {
            "xValue": "Feb 2010",
            "yValue0": 92.82,
            "yValue1": 91.72,
            "yValue2": 93.72
        },
        {
            "xValue": "Mar 2010",
            "yValue0": 92.84,
            "yValue1": 91.74,
            "yValue2": 93.85
        },
        {
            "xValue": "Apr 2010",
            "yValue0": 93.19,
            "yValue1": 92.33,
            "yValue2": 94.02
        },
        {
            "xValue": "May 2010",
            "yValue0": 93.74,
            "yValue1": 92.57,
            "yValue2": 94.41
        },
        {
            "xValue": "Jun 2010",
            "yValue0": 93.45,
            "yValue1": 92.42,
            "yValue2": 94.31
        },
        {
            "xValue": "Jul 2010",
            "yValue0": 93.55,
            "yValue1": 92.35,
            "yValue2": 94.24
        },
        {
            "xValue": "Aug 2010",
            "yValue0": 93.28,
            "yValue1": 92.32,
            "yValue2": 94.24
        },
        {
            "xValue": "Sep 2010",
            "yValue0": 93.03,
            "yValue1": 92.33,
            "yValue2": 94.19
        },
        {
            "xValue": "Oct 2010",
            "yValue0": 93.34,
            "yValue1": 92.59,
            "yValue2": 94.39
        },
        {
            "xValue": "Nov 2010",
            "yValue0": 93.39,
            "yValue1": 92.59,
            "yValue2": 94.48
        },
        {
            "xValue": "Dec 2010",
            "yValue0": 93.45,
            "yValue1": 92.69,
            "yValue2": 94.53
        },
        {
            "xValue": "Jan 2011",
            "yValue0": 93.23,
            "yValue1": 92.77,
            "yValue2": 94.54
        },
        {
            "xValue": "Feb 2011",
            "yValue0": 93.58,
            "yValue1": 92.88,
            "yValue2": 94.70
        },
        {
            "xValue": "Mar 2011",
            "yValue0": 93.35,
            "yValue1": 92.88,
            "yValue2": 94.87
        },
        {
            "xValue": "Apr 2011",
            "yValue0": 93.59,
            "yValue1": 93.05,
            "yValue2": 95.09
        },
        {
            "xValue": "May 2011",
            "yValue0": 93.71,
            "yValue1": 93.02,
            "yValue2": 95.17
        },
        {
            "xValue": "Jun 2011",
            "yValue0": 93.95,
            "yValue1": 92.99,
            "yValue2": 95.34
        },
        {
            "xValue": "Jul 2011",
            "yValue0": 94.19,
            "yValue1": 93.27,
            "yValue2": 95.38
        },
        {
            "xValue": "Aug 2011",
            "yValue0": 94.38,
            "yValue1": 93.36,
            "yValue2": 95.47
        },
        {
            "xValue": "Sep 2011",
            "yValue0": 94.47,
            "yValue1": 93.66,
            "yValue2": 95.64
        },
        {
            "xValue": "Oct 2011",
            "yValue0": 94.01,
            "yValue1": 93.66,
            "yValue2": 95.79
        },
        {
            "xValue": "Nov 2011",
            "yValue0": 94.22,
            "yValue1": 93.76,
            "yValue2": 95.88
        },
        {
            "xValue": "Dec 2011",
            "yValue0": 94.38,
            "yValue1": 93.90,
            "yValue2": 96.03
        },
        {
            "xValue": "Jan 2012",
            "yValue0": 94.72,
            "yValue1": 94.27,
            "yValue2": 96.28
        },
        {
            "xValue": "Feb 2012",
            "yValue0": 95.16,
            "yValue1": 94.44,
            "yValue2": 96.47
        },
        {
            "xValue": "Mar 2012",
            "yValue0": 95.30,
            "yValue1": 94.70,
            "yValue2": 96.65
        },
        {
            "xValue": "Apr 2012",
            "yValue0": 95.76,
            "yValue1": 94.75,
            "yValue2": 96.71
        },
        {
            "xValue": "May 2012",
            "yValue0": 96.20,
            "yValue1": 95.05,
            "yValue2": 96.78
        },
        {
            "xValue": "Jun 2012",
            "yValue0": 96.44,
            "yValue1": 95.38,
            "yValue2": 96.83
        },
        {
            "xValue": "Jul 2012",
            "yValue0": 96.51,
            "yValue1": 95.49,
            "yValue2": 96.94
        },
        {
            "xValue": "Aug 2012",
            "yValue0": 96.72,
            "yValue1": 95.68,
            "yValue2": 97.07
        },
        {
            "xValue": "Sep 2012",
            "yValue0": 96.94,
            "yValue1": 95.84,
            "yValue2": 97.20
        },
        {
            "xValue": "Oct 2012",
            "yValue0": 97.67,
            "yValue1": 96.06,
            "yValue2": 97.32
        },
        {
            "xValue": "Nov 2012",
            "yValue0": 97.77,
            "yValue1": 96.31,
            "yValue2": 97.43
        },
        {
            "xValue": "Dec 2012",
            "yValue0": 98.09,
            "yValue1": 96.50,
            "yValue2": 97.60
        },
        {
            "xValue": "Jan 2013",
            "yValue0": 98.25,
            "yValue1": 96.59,
            "yValue2": 97.74
        },
        {
            "xValue": "Feb 2013",
            "yValue0": 98.53,
            "yValue1": 96.94,
            "yValue2": 97.94
        },
        {
            "xValue": "Mar 2013",
            "yValue0": 98.98,
            "yValue1": 97.13,
            "yValue2": 98.04
        },
        {
            "xValue": "Apr 2013",
            "yValue0": 98.92,
            "yValue1": 97.37,
            "yValue2": 98.18
        },
        {
            "xValue": "May 2013",
            "yValue0": 98.76,
            "yValue1": 97.58,
            "yValue2": 98.34
        },
        {
            "xValue": "Jun 2013",
            "yValue0": 99.08,
            "yValue1": 97.74,
            "yValue2": 98.47
        },
        {
            "xValue": "Jul 2013",
            "yValue0": 98.85,
            "yValue1": 97.95,
            "yValue2": 98.55
        },
        {
            "xValue": "Aug 2013",
            "yValue0": 99.10,
            "yValue1": 98.26,
            "yValue2": 98.73
        },
        {
            "xValue": "Sep 2013",
            "yValue0": 99.42,
            "yValue1": 98.39,
            "yValue2": 98.86
        },
        {
            "xValue": "Oct 2013",
            "yValue0": 99.97,
            "yValue1": 98.60,
            "yValue2": 99.02
        },
        {
            "xValue": "Nov 2013",
            "yValue0": 100.18,
            "yValue1": 98.95,
            "yValue2": 99.21
        },
        {
            "xValue": "Dec 2013",
            "yValue0": 100.12,
            "yValue1": 99.13,
            "yValue2": 99.26
        },
        {
            "xValue": "Jan 2014",
            "yValue0": 100.19,
            "yValue1": 99.39,
            "yValue2": 99.39
        },
        {
            "xValue": "Feb 2014",
            "yValue0": 100.21,
            "yValue1": 99.57,
            "yValue2": 99.51
        },
        {
            "xValue": "Mar 2014",
            "yValue0": 100.79,
            "yValue1": 99.84,
            "yValue2": 99.69
        },
        {
            "xValue": "Apr 2014",
            "yValue0": 100.52,
            "yValue1": 100.04,
            "yValue2": 99.93
        },
        {
            "xValue": "May 2014",
            "yValue0": 100.58,
            "yValue1": 100.31,
            "yValue2": 100.09
        },
        {
            "xValue": "Jun 2014",
            "yValue0": 100.37,
            "yValue1": 100.54,
            "yValue2": 100.32
        },
        {
            "xValue": "Jul 2014",
            "yValue0": 100.35,
            "yValue1": 100.55,
            "yValue2": 100.49
        },
        {
            "xValue": "Aug 2014",
            "yValue0": 100.62,
            "yValue1": 100.98,
            "yValue2": 100.63
        },
        {
            "xValue": "Sep 2014",
            "yValue0": 100.90,
            "yValue1": 101.25,
            "yValue2": 100.85
        },
        {
            "xValue": "Oct 2014",
            "yValue0": 101.00,
            "yValue1": 101.46,
            "yValue2": 101.03
        },
        {
            "xValue": "Nov 2014",
            "yValue0": 101.17,
            "yValue1": 101.69,
            "yValue2": 101.24
        },
        {
            "xValue": "Dec 2014",
            "yValue0": 101.70,
            "yValue1": 101.93,
            "yValue2": 101.43
        },
        {
            "xValue": "Jan 2015",
            "yValue0": 101.64,
            "yValue1": 102.17,
            "yValue2": 101.57
        },
        {
            "xValue": "Feb 2015",
            "yValue0": 102.05,
            "yValue1": 102.38,
            "yValue2": 101.77
        },
        {
            "xValue": "Mar 2015",
            "yValue0": 102.12,
            "yValue1": 102.71,
            "yValue2": 101.82
        },
        {
            "xValue": "Apr 2015",
            "yValue0": 102.43,
            "yValue1": 102.88,
            "yValue2": 102.02
        },
        {
            "xValue": "May 2015",
            "yValue0": 102.47,
            "yValue1": 103.18,
            "yValue2": 102.26
        },
        {
            "xValue": "Jun 2015",
            "yValue0": 102.16,
            "yValue1": 103.51,
            "yValue2": 102.39
        },
        {
            "xValue": "Jul 2015",
            "yValue0": 103.07,
            "yValue1": 104.03,
            "yValue2": 102.61
        },
        {
            "xValue": "Aug 2015",
            "yValue0": 103.19,
            "yValue1": 104.26,
            "yValue2": 102.70
        },
        {
            "xValue": "Sep 2015",
            "yValue0": 103.37,
            "yValue1": 104.45,
            "yValue2": 102.81
        },
        {
            "xValue": "Oct 2015",
            "yValue0": 102.47,
            "yValue1": 104.82,
            "yValue2": 103.03
        },
        {
            "xValue": "Nov 2015",
            "yValue0": 102.46,
            "yValue1": 104.94,
            "yValue2": 103.20
        },
        {
            "xValue": "Dec 2015",
            "yValue0": 102.45,
            "yValue1": 105.15,
            "yValue2": 103.40
        },
        {
            "xValue": "Jan 2016",
            "yValue0": 102.94,
            "yValue1": 105.28,
            "yValue2": 103.45
        },
        {
            "xValue": "Feb 2016",
            "yValue0": 102.59,
            "yValue1": 105.61,
            "yValue2": 103.64
        },
        {
            "xValue": "Mar 2016",
            "yValue0": 102.74,
            "yValue1": 105.59,
            "yValue2": 103.81
        },
        {
            "xValue": "Apr 2016",
            "yValue0": 102.75,
            "yValue1": 106.21,
            "yValue2": 103.94
        },
        {
            "xValue": "May 2016",
            "yValue0": 102.85,
            "yValue1": 106.38,
            "yValue2": 103.97
        },
        {
            "xValue": "Jun 2016",
            "yValue0": 102.97,
            "yValue1": 106.39,
            "yValue2": 104.17
        },
        {
            "xValue": "Jul 2016",
            "yValue0": 103.87,
            "yValue1": 106.76,
            "yValue2": 104.42
        },
        {
            "xValue": "Aug 2016",
            "yValue0": 103.27,
            "yValue1": 106.87,
            "yValue2": 104.52
        },
        {
            "xValue": "Sep 2016",
            "yValue0": 103.12,
            "yValue1": 107.11,
            "yValue2": 104.71
        },
        {
            "xValue": "Oct 2016",
            "yValue0": 103.12,
            "yValue1": 107.12,
            "yValue2": 104.82
        },
        {
            "xValue": "Nov 2016",
            "yValue0": 103.01,
            "yValue1": 107.17,
            "yValue2": 104.93
        },
        {
            "xValue": "Dec 2016",
            "yValue0": 102.84,
            "yValue1": 107.20,
            "yValue2": 105.09
        },
        {
            "xValue": "Jan 2017",
            "yValue0": 102.94,
            "yValue1": 107.14,
            "yValue2": 105.23
        },
        {
            "xValue": "Feb 2017",
            "yValue0": 102.92,
            "yValue1": 107.55,
            "yValue2": 105.36
        },
        {
            "xValue": "Mar 2017",
            "yValue0": 103.18,
            "yValue1": 108.05,
            "yValue2": 105.46
        },
        {
            "xValue": "Apr 2017",
            "yValue0": 104.01,
            "yValue1": 108.28,
            "yValue2": 105.60
        },
        {
            "xValue": "May 2017",
            "yValue0": 104.33,
            "yValue1": 108.83,
            "yValue2": 105.71
        },
        {
            "xValue": "Jun 2017",
            "yValue0": 104.43,
            "yValue1": 109.19,
            "yValue2": 105.87
        },
        {
            "xValue": "Jul 2017",
            "yValue0": 104.73,
            "yValue1": 109.11,
            "yValue2": 106.02
        },
        {
            "xValue": "Aug 2017",
            "yValue0": 104.26,
            "yValue1": 109.19,
            "yValue2": 106.16
        },
        {
            "xValue": "Sep 2017",
            "yValue0": 104.47,
            "yValue1": 109.36,
            "yValue2": 106.17
        },
        {
            "xValue": "Oct 2017",
            "yValue0": 104.42,
            "yValue1": 109.30,
            "yValue2": 106.36
        },
        {
            "xValue": "Nov 2017",
            "yValue0": 104.33,
            "yValue1": 109.27,
            "yValue2": 106.52
        },
        {
            "xValue": "Dec 2017",
            "yValue0": 103.34,
            "yValue1": 109.24,
            "yValue2": 106.62
        },
        {
            "xValue": "Jan 2018",
            "yValue0": 103.06,
            "yValue1": 109.24,
            "yValue2": 106.71
        },
        {
            "xValue": "Feb 2018",
            "yValue0": 104.17,
            "yValue1": 109.92,
            "yValue2": 107.00
        },
        {
            "xValue": "Mar 2018",
            "yValue0": 104.32,
            "yValue1": 110.48,
            "yValue2": 107.13
        },
        {
            "xValue": "Apr 2018",
            "yValue0": 104.99,
            "yValue1": 110.98,
            "yValue2": 107.23
        },
        {
            "xValue": "May 2018",
            "yValue0": 105.73,
            "yValue1": 111.46,
            "yValue2": 107.43
        },
        {
            "xValue": "Jun 2018",
            "yValue0": 106.16,
            "yValue1": 111.77,
            "yValue2": 107.58
        },
        {
            "xValue": "Jul 2018",
            "yValue0": 106.06,
            "yValue1": 111.60,
            "yValue2": 107.68
        },
        {
            "xValue": "Aug 2018",
            "yValue0": 105.68,
            "yValue1": 111.62,
            "yValue2": 107.86
        },
        {
            "xValue": "Sep 2018",
            "yValue0": 105.57,
            "yValue1": 111.42,
            "yValue2": 107.92
        },
        {
            "xValue": "Oct 2018",
            "yValue0": 105.36,
            "yValue1": 111.22,
            "yValue2": 108.06
        },
        {
            "xValue": "Nov 2018",
            "yValue0": 105.16,
            "yValue1": 110.91,
            "yValue2": 108.16
        },
        {
            "xValue": "Dec 2018",
            "yValue0": 105.64,
            "yValue1": 110.64,
            "yValue2": 108.29
        },
        {
            "xValue": "Jan 2019",
            "yValue0": 105.28,
            "yValue1": 110.13,
            "yValue2": 108.48
        },
        {
            "xValue": "Feb 2019",
            "yValue0": 105.55,
            "yValue1": 111.17,
            "yValue2": 108.49
        },
        {
            "xValue": "Mar 2019",
            "yValue0": 106.43,
            "yValue1": 112.26,
            "yValue2": 108.59
        },
        {
            "xValue": "Apr 2019",
            "yValue0": 107.92,
            "yValue1": 113.27,
            "yValue2": 108.74
        },
        {
            "xValue": "May 2019",
            "yValue0": 108.30,
            "yValue1": 114.01,
            "yValue2": 108.80
        },
        {
            "xValue": "Jun 2019",
            "yValue0": 108.94,
            "yValue1": 114.16,
            "yValue2": 108.94
        },
        {
            "xValue": "Jul 2019",
            "yValue0": 108.61,
            "yValue1": 113.83,
            "yValue2": 109.08
        },
        {
            "xValue": "Aug 2019",
            "yValue0": 108.01,
            "yValue1": 113.58,
            "yValue2": 109.23
        },
        {
            "xValue": "Sep 2019",
            "yValue0": 107.03,
            "yValue1": 112.92,
            "yValue2": 109.38
        },
        {
            "xValue": "Oct 2019",
            "yValue0": 107.07,
            "yValue1": 112.31,
            "yValue2": 109.51
        },
        {
            "xValue": "Nov 2019",
            "yValue0": 106.90,
            "yValue1": 111.82,
            "yValue2": 109.70
        },
        {
            "xValue": "Dec 2019",
            "yValue0": 106.52,
            "yValue1": 111.47,
            "yValue2": 109.83
        },
        {
            "xValue": "Jan 2020",
            "yValue0": 106.87,
            "yValue1": 111.12,
            "yValue2": 109.99
        },
        {
            "xValue": "Feb 2020",
            "yValue0": 107.32,
            "yValue1": 112.70,
            "yValue2": 110.17
        },
        {
            "xValue": "Mar 2020",
            "yValue0": 106.44,
            "yValue1": 112.69,
            "yValue2": 109.18
        },
        {
            "xValue": "Apr 2020",
            "yValue0": 92.72,
            "yValue1": 98.34,
            "yValue2": 94.16
        },
        {
            "xValue": "May 2020",
            "yValue0": 92.65,
            "yValue1": 99.78,
            "yValue2": 96.12
        },
        {
            "xValue": "Jun 2020",
            "yValue0": 96.53,
            "yValue1": 103.28,
            "yValue2": 99.58
        },
        {
            "xValue": "Jul 2020",
            "yValue0": 96.54,
            "yValue1": 103.18,
            "yValue2": 100.85
        },
        {
            "xValue": "Aug 2020",
            "yValue0": 97.86,
            "yValue1": 103.13,
            "yValue2": 101.93
        },
        {
            "xValue": "Sep 2020",
            "yValue0": 99.01,
            "yValue1": 103.29,
            "yValue2": 102.44
        },
        {
            "xValue": "Oct 2020",
            "yValue0": 99.05,
            "yValue1": 103.31,
            "yValue2": 102.92
        },
        {
            "xValue": "Nov 2020",
            "yValue0": 98.79,
            "yValue1": 102.98,
            "yValue2": 103.16
        },
        {
            "xValue": "Dec 2020",
            "yValue0": 98.26,
            "yValue1": 102.22,
            "yValue2": 103.06
        }
    ],
});