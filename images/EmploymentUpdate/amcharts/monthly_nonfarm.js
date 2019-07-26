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
            "yValue0": 92.99,
            "yValue1": 92.70,
            "yValue2": 94.66
        },
        {
            "xValue": "Feb 2000",
            "yValue0": 93.12,
            "yValue1": 92.97,
            "yValue2": 94.71
        },
        {
            "xValue": "Mar 2000",
            "yValue0": 93.56,
            "yValue1": 93.27,
            "yValue2": 95.07
        },
        {
            "xValue": "Apr 2000",
            "yValue0": 93.39,
            "yValue1": 93.51,
            "yValue2": 95.28
        },
        {
            "xValue": "May 2000",
            "yValue0": 94.22,
            "yValue1": 93.92,
            "yValue2": 95.41
        },
        {
            "xValue": "Jun 2000",
            "yValue0": 94.52,
            "yValue1": 94.21,
            "yValue2": 95.40
        },
        {
            "xValue": "Jul 2000",
            "yValue0": 94.56,
            "yValue1": 94.43,
            "yValue2": 95.51
        },
        {
            "xValue": "Aug 2000",
            "yValue0": 94.21,
            "yValue1": 94.71,
            "yValue2": 95.55
        },
        {
            "xValue": "Sep 2000",
            "yValue0": 94.78,
            "yValue1": 95.03,
            "yValue2": 95.65
        },
        {
            "xValue": "Oct 2000",
            "yValue0": 94.72,
            "yValue1": 94.98,
            "yValue2": 95.65
        },
        {
            "xValue": "Nov 2000",
            "yValue0": 95.04,
            "yValue1": 95.36,
            "yValue2": 95.80
        },
        {
            "xValue": "Dec 2000",
            "yValue0": 95.39,
            "yValue1": 95.64,
            "yValue2": 95.88
        },
        {
            "xValue": "Jan 2001",
            "yValue0": 95.23,
            "yValue1": 95.85,
            "yValue2": 95.88
        },
        {
            "xValue": "Feb 2001",
            "yValue0": 95.31,
            "yValue1": 95.82,
            "yValue2": 95.92
        },
        {
            "xValue": "Mar 2001",
            "yValue0": 95.29,
            "yValue1": 95.87,
            "yValue2": 95.90
        },
        {
            "xValue": "Apr 2001",
            "yValue0": 95.62,
            "yValue1": 95.54,
            "yValue2": 95.70
        },
        {
            "xValue": "May 2001",
            "yValue0": 95.06,
            "yValue1": 95.36,
            "yValue2": 95.63
        },
        {
            "xValue": "Jun 2001",
            "yValue0": 95.19,
            "yValue1": 95.32,
            "yValue2": 95.56
        },
        {
            "xValue": "Jul 2001",
            "yValue0": 94.85,
            "yValue1": 94.88,
            "yValue2": 95.47
        },
        {
            "xValue": "Aug 2001",
            "yValue0": 95.03,
            "yValue1": 94.96,
            "yValue2": 95.41
        },
        {
            "xValue": "Sep 2001",
            "yValue0": 94.45,
            "yValue1": 94.65,
            "yValue2": 95.23
        },
        {
            "xValue": "Oct 2001",
            "yValue0": 94.35,
            "yValue1": 94.47,
            "yValue2": 94.98
        },
        {
            "xValue": "Nov 2001",
            "yValue0": 94.04,
            "yValue1": 94.28,
            "yValue2": 94.78
        },
        {
            "xValue": "Dec 2001",
            "yValue0": 94.38,
            "yValue1": 94.16,
            "yValue2": 94.65
        },
        {
            "xValue": "Jan 2002",
            "yValue0": 94.27,
            "yValue1": 94.15,
            "yValue2": 94.55
        },
        {
            "xValue": "Feb 2002",
            "yValue0": 94.57,
            "yValue1": 94.19,
            "yValue2": 94.44
        },
        {
            "xValue": "Mar 2002",
            "yValue0": 94.84,
            "yValue1": 94.37,
            "yValue2": 94.44
        },
        {
            "xValue": "Apr 2002",
            "yValue0": 94.40,
            "yValue1": 94.36,
            "yValue2": 94.37
        },
        {
            "xValue": "May 2002",
            "yValue0": 94.70,
            "yValue1": 94.46,
            "yValue2": 94.35
        },
        {
            "xValue": "Jun 2002",
            "yValue0": 94.45,
            "yValue1": 94.39,
            "yValue2": 94.39
        },
        {
            "xValue": "Jul 2002",
            "yValue0": 94.78,
            "yValue1": 94.14,
            "yValue2": 94.33
        },
        {
            "xValue": "Aug 2002",
            "yValue0": 94.43,
            "yValue1": 94.30,
            "yValue2": 94.36
        },
        {
            "xValue": "Sep 2002",
            "yValue0": 94.61,
            "yValue1": 94.30,
            "yValue2": 94.32
        },
        {
            "xValue": "Oct 2002",
            "yValue0": 94.11,
            "yValue1": 94.33,
            "yValue2": 94.37
        },
        {
            "xValue": "Nov 2002",
            "yValue0": 94.08,
            "yValue1": 94.46,
            "yValue2": 94.39
        },
        {
            "xValue": "Dec 2002",
            "yValue0": 94.04,
            "yValue1": 94.38,
            "yValue2": 94.30
        },
        {
            "xValue": "Jan 2003",
            "yValue0": 94.15,
            "yValue1": 94.31,
            "yValue2": 94.35
        },
        {
            "xValue": "Feb 2003",
            "yValue0": 94.28,
            "yValue1": 94.18,
            "yValue2": 94.23
        },
        {
            "xValue": "Mar 2003",
            "yValue0": 93.86,
            "yValue1": 94.08,
            "yValue2": 94.09
        },
        {
            "xValue": "Apr 2003",
            "yValue0": 94.71,
            "yValue1": 94.14,
            "yValue2": 94.05
        },
        {
            "xValue": "May 2003",
            "yValue0": 94.64,
            "yValue1": 94.13,
            "yValue2": 94.03
        },
        {
            "xValue": "Jun 2003",
            "yValue0": 94.35,
            "yValue1": 94.12,
            "yValue2": 94.04
        },
        {
            "xValue": "Jul 2003",
            "yValue0": 94.40,
            "yValue1": 93.97,
            "yValue2": 94.05
        },
        {
            "xValue": "Aug 2003",
            "yValue0": 94.72,
            "yValue1": 94.10,
            "yValue2": 94.04
        },
        {
            "xValue": "Sep 2003",
            "yValue0": 95.15,
            "yValue1": 94.08,
            "yValue2": 94.15
        },
        {
            "xValue": "Oct 2003",
            "yValue0": 95.61,
            "yValue1": 94.26,
            "yValue2": 94.23
        },
        {
            "xValue": "Nov 2003",
            "yValue0": 95.71,
            "yValue1": 94.18,
            "yValue2": 94.29
        },
        {
            "xValue": "Dec 2003",
            "yValue0": 95.81,
            "yValue1": 94.29,
            "yValue2": 94.39
        },
        {
            "xValue": "Jan 2004",
            "yValue0": 96.46,
            "yValue1": 94.55,
            "yValue2": 94.49
        },
        {
            "xValue": "Feb 2004",
            "yValue0": 96.05,
            "yValue1": 94.62,
            "yValue2": 94.51
        },
        {
            "xValue": "Mar 2004",
            "yValue0": 96.06,
            "yValue1": 94.77,
            "yValue2": 94.76
        },
        {
            "xValue": "Apr 2004",
            "yValue0": 96.25,
            "yValue1": 94.90,
            "yValue2": 94.93
        },
        {
            "xValue": "May 2004",
            "yValue0": 95.84,
            "yValue1": 95.04,
            "yValue2": 95.12
        },
        {
            "xValue": "Jun 2004",
            "yValue0": 96.53,
            "yValue1": 95.04,
            "yValue2": 95.20
        },
        {
            "xValue": "Jul 2004",
            "yValue0": 96.44,
            "yValue1": 95.54,
            "yValue2": 95.24
        },
        {
            "xValue": "Aug 2004",
            "yValue0": 96.70,
            "yValue1": 95.43,
            "yValue2": 95.33
        },
        {
            "xValue": "Sep 2004",
            "yValue0": 96.68,
            "yValue1": 95.49,
            "yValue2": 95.47
        },
        {
            "xValue": "Oct 2004",
            "yValue0": 96.91,
            "yValue1": 95.85,
            "yValue2": 95.66
        },
        {
            "xValue": "Nov 2004",
            "yValue0": 96.82,
            "yValue1": 95.99,
            "yValue2": 95.76
        },
        {
            "xValue": "Dec 2004",
            "yValue0": 96.70,
            "yValue1": 96.01,
            "yValue2": 95.86
        },
        {
            "xValue": "Jan 2005",
            "yValue0": 96.76,
            "yValue1": 96.17,
            "yValue2": 95.94
        },
        {
            "xValue": "Feb 2005",
            "yValue0": 97.21,
            "yValue1": 96.34,
            "yValue2": 96.11
        },
        {
            "xValue": "Mar 2005",
            "yValue0": 97.74,
            "yValue1": 96.48,
            "yValue2": 96.21
        },
        {
            "xValue": "Apr 2005",
            "yValue0": 98.22,
            "yValue1": 96.81,
            "yValue2": 96.45
        },
        {
            "xValue": "May 2005",
            "yValue0": 98.16,
            "yValue1": 96.80,
            "yValue2": 96.57
        },
        {
            "xValue": "Jun 2005",
            "yValue0": 98.37,
            "yValue1": 96.86,
            "yValue2": 96.76
        },
        {
            "xValue": "Jul 2005",
            "yValue0": 98.67,
            "yValue1": 97.31,
            "yValue2": 97.01
        },
        {
            "xValue": "Aug 2005",
            "yValue0": 98.51,
            "yValue1": 97.50,
            "yValue2": 97.18
        },
        {
            "xValue": "Sep 2005",
            "yValue0": 98.61,
            "yValue1": 97.79,
            "yValue2": 97.25
        },
        {
            "xValue": "Oct 2005",
            "yValue0": 98.69,
            "yValue1": 97.82,
            "yValue2": 97.25
        },
        {
            "xValue": "Nov 2005",
            "yValue0": 98.63,
            "yValue1": 98.06,
            "yValue2": 97.55
        },
        {
            "xValue": "Dec 2005",
            "yValue0": 98.85,
            "yValue1": 98.29,
            "yValue2": 97.68
        },
        {
            "xValue": "Jan 2006",
            "yValue0": 98.53,
            "yValue1": 98.34,
            "yValue2": 97.85
        },
        {
            "xValue": "Feb 2006",
            "yValue0": 98.68,
            "yValue1": 98.57,
            "yValue2": 98.07
        },
        {
            "xValue": "Mar 2006",
            "yValue0": 98.31,
            "yValue1": 98.60,
            "yValue2": 98.30
        },
        {
            "xValue": "Apr 2006",
            "yValue0": 98.32,
            "yValue1": 98.56,
            "yValue2": 98.40
        },
        {
            "xValue": "May 2006",
            "yValue0": 98.92,
            "yValue1": 98.90,
            "yValue2": 98.42
        },
        {
            "xValue": "Jun 2006",
            "yValue0": 98.92,
            "yValue1": 99.06,
            "yValue2": 98.49
        },
        {
            "xValue": "Jul 2006",
            "yValue0": 98.37,
            "yValue1": 99.16,
            "yValue2": 98.62
        },
        {
            "xValue": "Aug 2006",
            "yValue0": 98.24,
            "yValue1": 99.29,
            "yValue2": 98.76
        },
        {
            "xValue": "Sep 2006",
            "yValue0": 98.54,
            "yValue1": 99.39,
            "yValue2": 98.88
        },
        {
            "xValue": "Oct 2006",
            "yValue0": 98.05,
            "yValue1": 99.32,
            "yValue2": 98.84
        },
        {
            "xValue": "Nov 2006",
            "yValue0": 98.32,
            "yValue1": 99.38,
            "yValue2": 99.04
        },
        {
            "xValue": "Dec 2006",
            "yValue0": 98.10,
            "yValue1": 99.42,
            "yValue2": 99.18
        },
        {
            "xValue": "Jan 2007",
            "yValue0": 98.69,
            "yValue1": 99.62,
            "yValue2": 99.33
        },
        {
            "xValue": "Feb 2007",
            "yValue0": 98.93,
            "yValue1": 99.76,
            "yValue2": 99.39
        },
        {
            "xValue": "Mar 2007",
            "yValue0": 99.20,
            "yValue1": 99.94,
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
            "yValue0": 99.14,
            "yValue1": 99.73,
            "yValue2": 99.69
        },
        {
            "xValue": "Jun 2007",
            "yValue0": 99.01,
            "yValue1": 99.81,
            "yValue2": 99.75
        },
        {
            "xValue": "Jul 2007",
            "yValue0": 99.30,
            "yValue1": 100.22,
            "yValue2": 99.72
        },
        {
            "xValue": "Aug 2007",
            "yValue0": 99.64,
            "yValue1": 100.07,
            "yValue2": 99.70
        },
        {
            "xValue": "Sep 2007",
            "yValue0": 99.32,
            "yValue1": 100.00,
            "yValue2": 99.78
        },
        {
            "xValue": "Oct 2007",
            "yValue0": 99.65,
            "yValue1": 99.88,
            "yValue2": 99.80
        },
        {
            "xValue": "Nov 2007",
            "yValue0": 99.85,
            "yValue1": 99.97,
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
            "yValue0": 99.68,
            "yValue1": 99.77,
            "yValue2": 100.01
        },
        {
            "xValue": "Feb 2008",
            "yValue0": 99.87,
            "yValue1": 99.83,
            "yValue2": 99.95
        },
        {
            "xValue": "Mar 2008",
            "yValue0": 99.71,
            "yValue1": 99.67,
            "yValue2": 99.93
        },
        {
            "xValue": "Apr 2008",
            "yValue0": 99.66,
            "yValue1": 99.60,
            "yValue2": 99.76
        },
        {
            "xValue": "May 2008",
            "yValue0": 99.30,
            "yValue1": 99.42,
            "yValue2": 99.59
        },
        {
            "xValue": "Jun 2008",
            "yValue0": 99.05,
            "yValue1": 99.24,
            "yValue2": 99.46
        },
        {
            "xValue": "Jul 2008",
            "yValue0": 98.78,
            "yValue1": 99.16,
            "yValue2": 99.33
        },
        {
            "xValue": "Aug 2008",
            "yValue0": 97.94,
            "yValue1": 98.86,
            "yValue2": 99.12
        },
        {
            "xValue": "Sep 2008",
            "yValue0": 98.75,
            "yValue1": 98.60,
            "yValue2": 98.80
        },
        {
            "xValue": "Oct 2008",
            "yValue0": 98.83,
            "yValue1": 97.94,
            "yValue2": 98.43
        },
        {
            "xValue": "Nov 2008",
            "yValue0": 97.69,
            "yValue1": 97.23,
            "yValue2": 97.92
        },
        {
            "xValue": "Dec 2008",
            "yValue0": 97.53,
            "yValue1": 96.77,
            "yValue2": 97.44
        },
        {
            "xValue": "Jan 2009",
            "yValue0": 96.79,
            "yValue1": 96.09,
            "yValue2": 96.87
        },
        {
            "xValue": "Feb 2009",
            "yValue0": 95.88,
            "yValue1": 95.18,
            "yValue2": 96.34
        },
        {
            "xValue": "Mar 2009",
            "yValue0": 95.65,
            "yValue1": 94.58,
            "yValue2": 95.77
        },
        {
            "xValue": "Apr 2009",
            "yValue0": 94.77,
            "yValue1": 93.98,
            "yValue2": 95.27
        },
        {
            "xValue": "May 2009",
            "yValue0": 94.09,
            "yValue1": 93.64,
            "yValue2": 94.98
        },
        {
            "xValue": "Jun 2009",
            "yValue0": 94.13,
            "yValue1": 93.17,
            "yValue2": 94.62
        },
        {
            "xValue": "Jul 2009",
            "yValue0": 93.88,
            "yValue1": 92.51,
            "yValue2": 94.40
        },
        {
            "xValue": "Aug 2009",
            "yValue0": 93.66,
            "yValue1": 92.18,
            "yValue2": 94.26
        },
        {
            "xValue": "Sep 2009",
            "yValue0": 93.30,
            "yValue1": 91.91,
            "yValue2": 94.09
        },
        {
            "xValue": "Oct 2009",
            "yValue0": 93.93,
            "yValue1": 92.21,
            "yValue2": 93.93
        },
        {
            "xValue": "Nov 2009",
            "yValue0": 93.46,
            "yValue1": 92.03,
            "yValue2": 93.95
        },
        {
            "xValue": "Dec 2009",
            "yValue0": 92.70,
            "yValue1": 91.93,
            "yValue2": 93.79
        },
        {
            "xValue": "Jan 2010",
            "yValue0": 93.29,
            "yValue1": 91.84,
            "yValue2": 93.79
        },
        {
            "xValue": "Feb 2010",
            "yValue0": 92.84,
            "yValue1": 91.67,
            "yValue2": 93.72
        },
        {
            "xValue": "Mar 2010",
            "yValue0": 92.85,
            "yValue1": 91.70,
            "yValue2": 93.86
        },
        {
            "xValue": "Apr 2010",
            "yValue0": 93.19,
            "yValue1": 92.34,
            "yValue2": 94.03
        },
        {
            "xValue": "May 2010",
            "yValue0": 93.69,
            "yValue1": 92.57,
            "yValue2": 94.37
        },
        {
            "xValue": "Jun 2010",
            "yValue0": 93.42,
            "yValue1": 92.44,
            "yValue2": 94.26
        },
        {
            "xValue": "Jul 2010",
            "yValue0": 93.55,
            "yValue1": 92.32,
            "yValue2": 94.23
        },
        {
            "xValue": "Aug 2010",
            "yValue0": 93.29,
            "yValue1": 92.26,
            "yValue2": 94.22
        },
        {
            "xValue": "Sep 2010",
            "yValue0": 93.06,
            "yValue1": 92.27,
            "yValue2": 94.18
        },
        {
            "xValue": "Oct 2010",
            "yValue0": 93.33,
            "yValue1": 92.59,
            "yValue2": 94.36
        },
        {
            "xValue": "Nov 2010",
            "yValue0": 93.36,
            "yValue1": 92.56,
            "yValue2": 94.46
        },
        {
            "xValue": "Dec 2010",
            "yValue0": 93.43,
            "yValue1": 92.67,
            "yValue2": 94.55
        },
        {
            "xValue": "Jan 2011",
            "yValue0": 93.28,
            "yValue1": 92.76,
            "yValue2": 94.55
        },
        {
            "xValue": "Feb 2011",
            "yValue0": 93.60,
            "yValue1": 92.87,
            "yValue2": 94.69
        },
        {
            "xValue": "Mar 2011",
            "yValue0": 93.36,
            "yValue1": 92.86,
            "yValue2": 94.87
        },
        {
            "xValue": "Apr 2011",
            "yValue0": 93.58,
            "yValue1": 93.07,
            "yValue2": 95.09
        },
        {
            "xValue": "May 2011",
            "yValue0": 93.66,
            "yValue1": 93.01,
            "yValue2": 95.13
        },
        {
            "xValue": "Jun 2011",
            "yValue0": 93.93,
            "yValue1": 92.97,
            "yValue2": 95.28
        },
        {
            "xValue": "Jul 2011",
            "yValue0": 94.17,
            "yValue1": 93.26,
            "yValue2": 95.37
        },
        {
            "xValue": "Aug 2011",
            "yValue0": 94.40,
            "yValue1": 93.31,
            "yValue2": 95.46
        },
        {
            "xValue": "Sep 2011",
            "yValue0": 94.49,
            "yValue1": 93.62,
            "yValue2": 95.64
        },
        {
            "xValue": "Oct 2011",
            "yValue0": 94.00,
            "yValue1": 93.63,
            "yValue2": 95.77
        },
        {
            "xValue": "Nov 2011",
            "yValue0": 94.19,
            "yValue1": 93.74,
            "yValue2": 95.87
        },
        {
            "xValue": "Dec 2011",
            "yValue0": 94.37,
            "yValue1": 93.86,
            "yValue2": 96.05
        },
        {
            "xValue": "Jan 2012",
            "yValue0": 94.75,
            "yValue1": 94.26,
            "yValue2": 96.29
        },
        {
            "xValue": "Feb 2012",
            "yValue0": 95.18,
            "yValue1": 94.45,
            "yValue2": 96.46
        },
        {
            "xValue": "Mar 2012",
            "yValue0": 95.32,
            "yValue1": 94.71,
            "yValue2": 96.64
        },
        {
            "xValue": "Apr 2012",
            "yValue0": 95.75,
            "yValue1": 94.74,
            "yValue2": 96.69
        },
        {
            "xValue": "May 2012",
            "yValue0": 96.18,
            "yValue1": 95.04,
            "yValue2": 96.74
        },
        {
            "xValue": "Jun 2012",
            "yValue0": 96.42,
            "yValue1": 95.35,
            "yValue2": 96.78
        },
        {
            "xValue": "Jul 2012",
            "yValue0": 96.45,
            "yValue1": 95.47,
            "yValue2": 96.93
        },
        {
            "xValue": "Aug 2012",
            "yValue0": 96.74,
            "yValue1": 95.65,
            "yValue2": 97.07
        },
        {
            "xValue": "Sep 2012",
            "yValue0": 96.97,
            "yValue1": 95.81,
            "yValue2": 97.21
        },
        {
            "xValue": "Oct 2012",
            "yValue0": 97.67,
            "yValue1": 96.01,
            "yValue2": 97.31
        },
        {
            "xValue": "Nov 2012",
            "yValue0": 97.77,
            "yValue1": 96.30,
            "yValue2": 97.42
        },
        {
            "xValue": "Dec 2012",
            "yValue0": 98.09,
            "yValue1": 96.48,
            "yValue2": 97.61
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
            "yValue1": 96.95,
            "yValue2": 97.92
        },
        {
            "xValue": "Mar 2013",
            "yValue0": 99.00,
            "yValue1": 97.12,
            "yValue2": 98.03
        },
        {
            "xValue": "Apr 2013",
            "yValue0": 98.91,
            "yValue1": 97.34,
            "yValue2": 98.15
        },
        {
            "xValue": "May 2013",
            "yValue0": 98.77,
            "yValue1": 97.55,
            "yValue2": 98.30
        },
        {
            "xValue": "Jun 2013",
            "yValue0": 99.06,
            "yValue1": 97.66,
            "yValue2": 98.43
        },
        {
            "xValue": "Jul 2013",
            "yValue0": 98.76,
            "yValue1": 97.92,
            "yValue2": 98.53
        },
        {
            "xValue": "Aug 2013",
            "yValue0": 99.13,
            "yValue1": 98.25,
            "yValue2": 98.74
        },
        {
            "xValue": "Sep 2013",
            "yValue0": 99.46,
            "yValue1": 98.36,
            "yValue2": 98.87
        },
        {
            "xValue": "Oct 2013",
            "yValue0": 99.97,
            "yValue1": 98.57,
            "yValue2": 99.02
        },
        {
            "xValue": "Nov 2013",
            "yValue0": 100.19,
            "yValue1": 98.95,
            "yValue2": 99.21
        },
        {
            "xValue": "Dec 2013",
            "yValue0": 100.13,
            "yValue1": 99.13,
            "yValue2": 99.26
        },
        {
            "xValue": "Jan 2014",
            "yValue0": 100.18,
            "yValue1": 99.40,
            "yValue2": 99.38
        },
        {
            "xValue": "Feb 2014",
            "yValue0": 100.21,
            "yValue1": 99.57,
            "yValue2": 99.49
        },
        {
            "xValue": "Mar 2014",
            "yValue0": 100.81,
            "yValue1": 99.80,
            "yValue2": 99.68
        },
        {
            "xValue": "Apr 2014",
            "yValue0": 100.52,
            "yValue1": 100.03,
            "yValue2": 99.90
        },
        {
            "xValue": "May 2014",
            "yValue0": 100.59,
            "yValue1": 100.27,
            "yValue2": 100.06
        },
        {
            "xValue": "Jun 2014",
            "yValue0": 100.32,
            "yValue1": 100.39,
            "yValue2": 100.30
        },
        {
            "xValue": "Jul 2014",
            "yValue0": 100.23,
            "yValue1": 100.55,
            "yValue2": 100.47
        },
        {
            "xValue": "Aug 2014",
            "yValue0": 100.64,
            "yValue1": 100.98,
            "yValue2": 100.63
        },
        {
            "xValue": "Sep 2014",
            "yValue0": 100.95,
            "yValue1": 101.22,
            "yValue2": 100.87
        },
        {
            "xValue": "Oct 2014",
            "yValue0": 100.99,
            "yValue1": 101.48,
            "yValue2": 101.03
        },
        {
            "xValue": "Nov 2014",
            "yValue0": 101.21,
            "yValue1": 101.69,
            "yValue2": 101.22
        },
        {
            "xValue": "Dec 2014",
            "yValue0": 101.73,
            "yValue1": 101.94,
            "yValue2": 101.42
        },
        {
            "xValue": "Jan 2015",
            "yValue0": 101.63,
            "yValue1": 102.23,
            "yValue2": 101.58
        },
        {
            "xValue": "Feb 2015",
            "yValue0": 102.08,
            "yValue1": 102.36,
            "yValue2": 101.75
        },
        {
            "xValue": "Mar 2015",
            "yValue0": 102.15,
            "yValue1": 102.63,
            "yValue2": 101.81
        },
        {
            "xValue": "Apr 2015",
            "yValue0": 102.42,
            "yValue1": 102.90,
            "yValue2": 102.02
        },
        {
            "xValue": "May 2015",
            "yValue0": 102.44,
            "yValue1": 103.10,
            "yValue2": 102.25
        },
        {
            "xValue": "Jun 2015",
            "yValue0": 102.07,
            "yValue1": 103.27,
            "yValue2": 102.38
        },
        {
            "xValue": "Jul 2015",
            "yValue0": 102.89,
            "yValue1": 104.10,
            "yValue2": 102.58
        },
        {
            "xValue": "Aug 2015",
            "yValue0": 103.18,
            "yValue1": 104.22,
            "yValue2": 102.69
        },
        {
            "xValue": "Sep 2015",
            "yValue0": 103.43,
            "yValue1": 104.41,
            "yValue2": 102.82
        },
        {
            "xValue": "Oct 2015",
            "yValue0": 102.48,
            "yValue1": 104.86,
            "yValue2": 103.03
        },
        {
            "xValue": "Nov 2015",
            "yValue0": 102.57,
            "yValue1": 104.96,
            "yValue2": 103.18
        },
        {
            "xValue": "Dec 2015",
            "yValue0": 102.57,
            "yValue1": 105.20,
            "yValue2": 103.39
        },
        {
            "xValue": "Jan 2016",
            "yValue0": 102.98,
            "yValue1": 105.43,
            "yValue2": 103.46
        },
        {
            "xValue": "Feb 2016",
            "yValue0": 102.68,
            "yValue1": 105.64,
            "yValue2": 103.62
        },
        {
            "xValue": "Mar 2016",
            "yValue0": 102.77,
            "yValue1": 105.49,
            "yValue2": 103.80
        },
        {
            "xValue": "Apr 2016",
            "yValue0": 102.69,
            "yValue1": 106.21,
            "yValue2": 103.95
        },
        {
            "xValue": "May 2016",
            "yValue0": 102.70,
            "yValue1": 106.23,
            "yValue2": 103.96
        },
        {
            "xValue": "Jun 2016",
            "yValue0": 102.76,
            "yValue1": 106.04,
            "yValue2": 104.16
        },
        {
            "xValue": "Jul 2016",
            "yValue0": 103.58,
            "yValue1": 106.76,
            "yValue2": 104.38
        },
        {
            "xValue": "Aug 2016",
            "yValue0": 103.20,
            "yValue1": 106.76,
            "yValue2": 104.50
        },
        {
            "xValue": "Sep 2016",
            "yValue0": 103.17,
            "yValue1": 107.05,
            "yValue2": 104.74
        },
        {
            "xValue": "Oct 2016",
            "yValue0": 103.17,
            "yValue1": 107.18,
            "yValue2": 104.79
        },
        {
            "xValue": "Nov 2016",
            "yValue0": 103.25,
            "yValue1": 107.29,
            "yValue2": 104.91
        },
        {
            "xValue": "Dec 2016",
            "yValue0": 103.13,
            "yValue1": 107.42,
            "yValue2": 105.06
        },
        {
            "xValue": "Jan 2017",
            "yValue0": 103.25,
            "yValue1": 107.47,
            "yValue2": 105.25
        },
        {
            "xValue": "Feb 2017",
            "yValue0": 103.16,
            "yValue1": 107.72,
            "yValue2": 105.34
        },
        {
            "xValue": "Mar 2017",
            "yValue0": 103.26,
            "yValue1": 108.01,
            "yValue2": 105.45
        },
        {
            "xValue": "Apr 2017",
            "yValue0": 103.79,
            "yValue1": 108.22,
            "yValue2": 105.60
        },
        {
            "xValue": "May 2017",
            "yValue0": 103.91,
            "yValue1": 108.54,
            "yValue2": 105.70
        },
        {
            "xValue": "Jun 2017",
            "yValue0": 103.94,
            "yValue1": 108.70,
            "yValue2": 105.86
        },
        {
            "xValue": "Jul 2017",
            "yValue0": 104.17,
            "yValue1": 108.92,
            "yValue2": 105.98
        },
        {
            "xValue": "Aug 2017",
            "yValue0": 104.08,
            "yValue1": 109.02,
            "yValue2": 106.13
        },
        {
            "xValue": "Sep 2017",
            "yValue0": 104.54,
            "yValue1": 109.31,
            "yValue2": 106.19
        },
        {
            "xValue": "Oct 2017",
            "yValue0": 104.60,
            "yValue1": 109.49,
            "yValue2": 106.34
        },
        {
            "xValue": "Nov 2017",
            "yValue0": 104.78,
            "yValue1": 109.73,
            "yValue2": 106.50
        },
        {
            "xValue": "Dec 2017",
            "yValue0": 103.91,
            "yValue1": 109.96,
            "yValue2": 106.62
        },
        {
            "xValue": "Jan 2018",
            "yValue0": 103.78,
            "yValue1": 110.21,
            "yValue2": 106.74
        },
        {
            "xValue": "Feb 2018",
            "yValue0": 104.67,
            "yValue1": 110.48,
            "yValue2": 106.97
        },
        {
            "xValue": "Mar 2018",
            "yValue0": 104.52,
            "yValue1": 110.52,
            "yValue2": 107.12
        },
        {
            "xValue": "Apr 2018",
            "yValue0": 104.47,
            "yValue1": 110.63,
            "yValue2": 107.26
        },
        {
            "xValue": "May 2018",
            "yValue0": 104.84,
            "yValue1": 110.75,
            "yValue2": 107.47
        },
        {
            "xValue": "Jun 2018",
            "yValue0": 105.12,
            "yValue1": 110.89,
            "yValue2": 107.64
        },
        {
            "xValue": "Jul 2018",
            "yValue0": 104.87,
            "yValue1": 110.98,
            "yValue2": 107.75
        },
        {
            "xValue": "Aug 2018",
            "yValue0": 105.10,
            "yValue1": 111.20,
            "yValue2": 107.96
        },
        {
            "xValue": "Sep 2018",
            "yValue0": 105.23,
            "yValue1": 111.18,
            "yValue2": 108.09
        },
        {
            "xValue": "Oct 2018",
            "yValue0": 105.67,
            "yValue1": 111.36,
            "yValue2": 108.26
        },
        {
            "xValue": "Nov 2018",
            "yValue0": 106.07,
            "yValue1": 111.51,
            "yValue2": 108.40
        },
        {
            "xValue": "Dec 2018",
            "yValue0": 106.82,
            "yValue1": 111.63,
            "yValue2": 108.56
        },
        {
            "xValue": "Jan 2019",
            "yValue0": 107.20,
            "yValue1": 111.87,
            "yValue2": 108.78
        },
        {
            "xValue": "Feb 2019",
            "yValue0": 107.10,
            "yValue1": 112.00,
            "yValue2": 108.81
        },
        {
            "xValue": "Mar 2019",
            "yValue0": 107.31,
            "yValue1": 112.17,
            "yValue2": 108.94
        },
        {
            "xValue": "Apr 2019",
            "yValue0": 107.24,
            "yValue1": 112.44,
            "yValue2": 109.09
        },
        {
            "xValue": "May 2019",
            "yValue0": 107.30,
            "yValue1": 112.44,
            "yValue2": 109.16
        },
        {
            "xValue": "Jun 2019",
            "yValue0": 107.50,
            "yValue1": 112.81,
            "yValue2": 109.30
        }
    ],
});