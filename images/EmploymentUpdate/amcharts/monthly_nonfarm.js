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
            "yValue0": 92.99,
            "yValue1": 92.73,
            "yValue2": 94.67
        },
        {
            "xValue": "Feb 2000",
            "yValue0": 93.12,
            "yValue1": 93.00,
            "yValue2": 94.71
        },
        {
            "xValue": "Mar 2000",
            "yValue0": 93.55,
            "yValue1": 93.28,
            "yValue2": 95.07
        },
        {
            "xValue": "Apr 2000",
            "yValue0": 93.40,
            "yValue1": 93.55,
            "yValue2": 95.28
        },
        {
            "xValue": "May 2000",
            "yValue0": 94.20,
            "yValue1": 93.94,
            "yValue2": 95.41
        },
        {
            "xValue": "Jun 2000",
            "yValue0": 94.46,
            "yValue1": 94.22,
            "yValue2": 95.40
        },
        {
            "xValue": "Jul 2000",
            "yValue0": 94.57,
            "yValue1": 94.45,
            "yValue2": 95.51
        },
        {
            "xValue": "Aug 2000",
            "yValue0": 94.24,
            "yValue1": 94.72,
            "yValue2": 95.55
        },
        {
            "xValue": "Sep 2000",
            "yValue0": 94.77,
            "yValue1": 95.05,
            "yValue2": 95.65
        },
        {
            "xValue": "Oct 2000",
            "yValue0": 94.69,
            "yValue1": 95.02,
            "yValue2": 95.65
        },
        {
            "xValue": "Nov 2000",
            "yValue0": 95.00,
            "yValue1": 95.39,
            "yValue2": 95.80
        },
        {
            "xValue": "Dec 2000",
            "yValue0": 95.35,
            "yValue1": 95.65,
            "yValue2": 95.89
        },
        {
            "xValue": "Jan 2001",
            "yValue0": 95.25,
            "yValue1": 95.87,
            "yValue2": 95.89
        },
        {
            "xValue": "Feb 2001",
            "yValue0": 95.32,
            "yValue1": 95.84,
            "yValue2": 95.92
        },
        {
            "xValue": "Mar 2001",
            "yValue0": 95.29,
            "yValue1": 95.86,
            "yValue2": 95.90
        },
        {
            "xValue": "Apr 2001",
            "yValue0": 95.64,
            "yValue1": 95.56,
            "yValue2": 95.70
        },
        {
            "xValue": "May 2001",
            "yValue0": 95.05,
            "yValue1": 95.38,
            "yValue2": 95.63
        },
        {
            "xValue": "Jun 2001",
            "yValue0": 95.15,
            "yValue1": 95.31,
            "yValue2": 95.56
        },
        {
            "xValue": "Jul 2001",
            "yValue0": 94.84,
            "yValue1": 94.91,
            "yValue2": 95.47
        },
        {
            "xValue": "Aug 2001",
            "yValue0": 95.05,
            "yValue1": 94.97,
            "yValue2": 95.40
        },
        {
            "xValue": "Sep 2001",
            "yValue0": 94.44,
            "yValue1": 94.69,
            "yValue2": 95.23
        },
        {
            "xValue": "Oct 2001",
            "yValue0": 94.33,
            "yValue1": 94.51,
            "yValue2": 94.98
        },
        {
            "xValue": "Nov 2001",
            "yValue0": 94.02,
            "yValue1": 94.32,
            "yValue2": 94.77
        },
        {
            "xValue": "Dec 2001",
            "yValue0": 94.36,
            "yValue1": 94.19,
            "yValue2": 94.65
        },
        {
            "xValue": "Jan 2002",
            "yValue0": 94.25,
            "yValue1": 94.16,
            "yValue2": 94.56
        },
        {
            "xValue": "Feb 2002",
            "yValue0": 94.56,
            "yValue1": 94.21,
            "yValue2": 94.44
        },
        {
            "xValue": "Mar 2002",
            "yValue0": 94.84,
            "yValue1": 94.35,
            "yValue2": 94.43
        },
        {
            "xValue": "Apr 2002",
            "yValue0": 94.41,
            "yValue1": 94.38,
            "yValue2": 94.37
        },
        {
            "xValue": "May 2002",
            "yValue0": 94.70,
            "yValue1": 94.45,
            "yValue2": 94.35
        },
        {
            "xValue": "Jun 2002",
            "yValue0": 94.43,
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
            "yValue0": 94.43,
            "yValue1": 94.33,
            "yValue2": 94.36
        },
        {
            "xValue": "Sep 2002",
            "yValue0": 94.59,
            "yValue1": 94.35,
            "yValue2": 94.32
        },
        {
            "xValue": "Oct 2002",
            "yValue0": 94.11,
            "yValue1": 94.36,
            "yValue2": 94.37
        },
        {
            "xValue": "Nov 2002",
            "yValue0": 94.08,
            "yValue1": 94.49,
            "yValue2": 94.39
        },
        {
            "xValue": "Dec 2002",
            "yValue0": 94.04,
            "yValue1": 94.42,
            "yValue2": 94.30
        },
        {
            "xValue": "Jan 2003",
            "yValue0": 94.11,
            "yValue1": 94.32,
            "yValue2": 94.36
        },
        {
            "xValue": "Feb 2003",
            "yValue0": 94.26,
            "yValue1": 94.21,
            "yValue2": 94.23
        },
        {
            "xValue": "Mar 2003",
            "yValue0": 93.84,
            "yValue1": 94.09,
            "yValue2": 94.09
        },
        {
            "xValue": "Apr 2003",
            "yValue0": 94.72,
            "yValue1": 94.13,
            "yValue2": 94.05
        },
        {
            "xValue": "May 2003",
            "yValue0": 94.65,
            "yValue1": 94.14,
            "yValue2": 94.03
        },
        {
            "xValue": "Jun 2003",
            "yValue0": 94.35,
            "yValue1": 94.14,
            "yValue2": 94.04
        },
        {
            "xValue": "Jul 2003",
            "yValue0": 94.38,
            "yValue1": 93.99,
            "yValue2": 94.04
        },
        {
            "xValue": "Aug 2003",
            "yValue0": 94.71,
            "yValue1": 94.13,
            "yValue2": 94.04
        },
        {
            "xValue": "Sep 2003",
            "yValue0": 95.14,
            "yValue1": 94.14,
            "yValue2": 94.14
        },
        {
            "xValue": "Oct 2003",
            "yValue0": 95.60,
            "yValue1": 94.26,
            "yValue2": 94.23
        },
        {
            "xValue": "Nov 2003",
            "yValue0": 95.70,
            "yValue1": 94.20,
            "yValue2": 94.29
        },
        {
            "xValue": "Dec 2003",
            "yValue0": 95.80,
            "yValue1": 94.32,
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
            "yValue0": 96.04,
            "yValue1": 94.64,
            "yValue2": 94.51
        },
        {
            "xValue": "Mar 2004",
            "yValue0": 96.05,
            "yValue1": 94.80,
            "yValue2": 94.75
        },
        {
            "xValue": "Apr 2004",
            "yValue0": 96.25,
            "yValue1": 94.88,
            "yValue2": 94.94
        },
        {
            "xValue": "May 2004",
            "yValue0": 95.84,
            "yValue1": 95.05,
            "yValue2": 95.12
        },
        {
            "xValue": "Jun 2004",
            "yValue0": 96.50,
            "yValue1": 95.07,
            "yValue2": 95.19
        },
        {
            "xValue": "Jul 2004",
            "yValue0": 96.43,
            "yValue1": 95.56,
            "yValue2": 95.24
        },
        {
            "xValue": "Aug 2004",
            "yValue0": 96.69,
            "yValue1": 95.46,
            "yValue2": 95.33
        },
        {
            "xValue": "Sep 2004",
            "yValue0": 96.67,
            "yValue1": 95.52,
            "yValue2": 95.47
        },
        {
            "xValue": "Oct 2004",
            "yValue0": 96.90,
            "yValue1": 95.85,
            "yValue2": 95.66
        },
        {
            "xValue": "Nov 2004",
            "yValue0": 96.81,
            "yValue1": 96.00,
            "yValue2": 95.75
        },
        {
            "xValue": "Dec 2004",
            "yValue0": 96.70,
            "yValue1": 96.04,
            "yValue2": 95.86
        },
        {
            "xValue": "Jan 2005",
            "yValue0": 96.74,
            "yValue1": 96.18,
            "yValue2": 95.94
        },
        {
            "xValue": "Feb 2005",
            "yValue0": 97.20,
            "yValue1": 96.35,
            "yValue2": 96.11
        },
        {
            "xValue": "Mar 2005",
            "yValue0": 97.73,
            "yValue1": 96.51,
            "yValue2": 96.21
        },
        {
            "xValue": "Apr 2005",
            "yValue0": 98.22,
            "yValue1": 96.79,
            "yValue2": 96.45
        },
        {
            "xValue": "May 2005",
            "yValue0": 98.14,
            "yValue1": 96.85,
            "yValue2": 96.56
        },
        {
            "xValue": "Jun 2005",
            "yValue0": 98.33,
            "yValue1": 96.89,
            "yValue2": 96.75
        },
        {
            "xValue": "Jul 2005",
            "yValue0": 98.66,
            "yValue1": 97.33,
            "yValue2": 97.01
        },
        {
            "xValue": "Aug 2005",
            "yValue0": 98.51,
            "yValue1": 97.51,
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
            "yValue0": 98.67,
            "yValue1": 97.85,
            "yValue2": 97.25
        },
        {
            "xValue": "Nov 2005",
            "yValue0": 98.62,
            "yValue1": 98.08,
            "yValue2": 97.55
        },
        {
            "xValue": "Dec 2005",
            "yValue0": 98.85,
            "yValue1": 98.31,
            "yValue2": 97.67
        },
        {
            "xValue": "Jan 2006",
            "yValue0": 98.54,
            "yValue1": 98.38,
            "yValue2": 97.86
        },
        {
            "xValue": "Feb 2006",
            "yValue0": 98.69,
            "yValue1": 98.57,
            "yValue2": 98.07
        },
        {
            "xValue": "Mar 2006",
            "yValue0": 98.30,
            "yValue1": 98.63,
            "yValue2": 98.30
        },
        {
            "xValue": "Apr 2006",
            "yValue0": 98.31,
            "yValue1": 98.55,
            "yValue2": 98.41
        },
        {
            "xValue": "May 2006",
            "yValue0": 98.89,
            "yValue1": 98.95,
            "yValue2": 98.42
        },
        {
            "xValue": "Jun 2006",
            "yValue0": 98.88,
            "yValue1": 99.10,
            "yValue2": 98.49
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
            "yValue2": 98.75
        },
        {
            "xValue": "Sep 2006",
            "yValue0": 98.53,
            "yValue1": 99.37,
            "yValue2": 98.88
        },
        {
            "xValue": "Oct 2006",
            "yValue0": 98.04,
            "yValue1": 99.37,
            "yValue2": 98.84
        },
        {
            "xValue": "Nov 2006",
            "yValue0": 98.31,
            "yValue1": 99.41,
            "yValue2": 99.03
        },
        {
            "xValue": "Dec 2006",
            "yValue0": 98.11,
            "yValue1": 99.45,
            "yValue2": 99.18
        },
        {
            "xValue": "Jan 2007",
            "yValue0": 98.69,
            "yValue1": 99.66,
            "yValue2": 99.34
        },
        {
            "xValue": "Feb 2007",
            "yValue0": 98.93,
            "yValue1": 99.78,
            "yValue2": 99.39
        },
        {
            "xValue": "Mar 2007",
            "yValue0": 99.20,
            "yValue1": 99.97,
            "yValue2": 99.57
        },
        {
            "xValue": "Apr 2007",
            "yValue0": 98.82,
            "yValue1": 99.54,
            "yValue2": 99.61
        },
        {
            "xValue": "May 2007",
            "yValue0": 99.12,
            "yValue1": 99.78,
            "yValue2": 99.69
        },
        {
            "xValue": "Jun 2007",
            "yValue0": 98.96,
            "yValue1": 99.86,
            "yValue2": 99.75
        },
        {
            "xValue": "Jul 2007",
            "yValue0": 99.30,
            "yValue1": 100.24,
            "yValue2": 99.72
        },
        {
            "xValue": "Aug 2007",
            "yValue0": 99.63,
            "yValue1": 100.05,
            "yValue2": 99.70
        },
        {
            "xValue": "Sep 2007",
            "yValue0": 99.32,
            "yValue1": 99.98,
            "yValue2": 99.77
        },
        {
            "xValue": "Oct 2007",
            "yValue0": 99.62,
            "yValue1": 99.92,
            "yValue2": 99.80
        },
        {
            "xValue": "Nov 2007",
            "yValue0": 99.81,
            "yValue1": 100.00,
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
            "yValue0": 99.71,
            "yValue1": 99.81,
            "yValue2": 100.01
        },
        {
            "xValue": "Feb 2008",
            "yValue0": 99.87,
            "yValue1": 99.86,
            "yValue2": 99.95
        },
        {
            "xValue": "Mar 2008",
            "yValue0": 99.71,
            "yValue1": 99.70,
            "yValue2": 99.93
        },
        {
            "xValue": "Apr 2008",
            "yValue0": 99.64,
            "yValue1": 99.62,
            "yValue2": 99.76
        },
        {
            "xValue": "May 2008",
            "yValue0": 99.29,
            "yValue1": 99.45,
            "yValue2": 99.60
        },
        {
            "xValue": "Jun 2008",
            "yValue0": 98.99,
            "yValue1": 99.26,
            "yValue2": 99.46
        },
        {
            "xValue": "Jul 2008",
            "yValue0": 98.78,
            "yValue1": 99.18,
            "yValue2": 99.32
        },
        {
            "xValue": "Aug 2008",
            "yValue0": 97.93,
            "yValue1": 98.87,
            "yValue2": 99.11
        },
        {
            "xValue": "Sep 2008",
            "yValue0": 98.75,
            "yValue1": 98.61,
            "yValue2": 98.79
        },
        {
            "xValue": "Oct 2008",
            "yValue0": 98.80,
            "yValue1": 97.96,
            "yValue2": 98.43
        },
        {
            "xValue": "Nov 2008",
            "yValue0": 97.66,
            "yValue1": 97.26,
            "yValue2": 97.92
        },
        {
            "xValue": "Dec 2008",
            "yValue0": 97.55,
            "yValue1": 96.77,
            "yValue2": 97.43
        },
        {
            "xValue": "Jan 2009",
            "yValue0": 96.78,
            "yValue1": 96.11,
            "yValue2": 96.87
        },
        {
            "xValue": "Feb 2009",
            "yValue0": 95.86,
            "yValue1": 95.24,
            "yValue2": 96.34
        },
        {
            "xValue": "Mar 2009",
            "yValue0": 95.64,
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
            "yValue0": 94.13,
            "yValue1": 93.64,
            "yValue2": 94.98
        },
        {
            "xValue": "Jun 2009",
            "yValue0": 94.12,
            "yValue1": 93.17,
            "yValue2": 94.62
        },
        {
            "xValue": "Jul 2009",
            "yValue0": 93.85,
            "yValue1": 92.54,
            "yValue2": 94.40
        },
        {
            "xValue": "Aug 2009",
            "yValue0": 93.63,
            "yValue1": 92.22,
            "yValue2": 94.26
        },
        {
            "xValue": "Sep 2009",
            "yValue0": 93.27,
            "yValue1": 91.95,
            "yValue2": 94.09
        },
        {
            "xValue": "Oct 2009",
            "yValue0": 93.94,
            "yValue1": 92.21,
            "yValue2": 93.93
        },
        {
            "xValue": "Nov 2009",
            "yValue0": 93.47,
            "yValue1": 92.04,
            "yValue2": 93.95
        },
        {
            "xValue": "Dec 2009",
            "yValue0": 92.74,
            "yValue1": 91.94,
            "yValue2": 93.79
        },
        {
            "xValue": "Jan 2010",
            "yValue0": 93.22,
            "yValue1": 91.86,
            "yValue2": 93.79
        },
        {
            "xValue": "Feb 2010",
            "yValue0": 92.80,
            "yValue1": 91.72,
            "yValue2": 93.72
        },
        {
            "xValue": "Mar 2010",
            "yValue0": 92.84,
            "yValue1": 91.73,
            "yValue2": 93.86
        },
        {
            "xValue": "Apr 2010",
            "yValue0": 93.18,
            "yValue1": 92.33,
            "yValue2": 94.03
        },
        {
            "xValue": "May 2010",
            "yValue0": 93.74,
            "yValue1": 92.57,
            "yValue2": 94.37
        },
        {
            "xValue": "Jun 2010",
            "yValue0": 93.43,
            "yValue1": 92.42,
            "yValue2": 94.25
        },
        {
            "xValue": "Jul 2010",
            "yValue0": 93.52,
            "yValue1": 92.35,
            "yValue2": 94.23
        },
        {
            "xValue": "Aug 2010",
            "yValue0": 93.27,
            "yValue1": 92.32,
            "yValue2": 94.22
        },
        {
            "xValue": "Sep 2010",
            "yValue0": 93.02,
            "yValue1": 92.33,
            "yValue2": 94.18
        },
        {
            "xValue": "Oct 2010",
            "yValue0": 93.34,
            "yValue1": 92.59,
            "yValue2": 94.36
        },
        {
            "xValue": "Nov 2010",
            "yValue0": 93.37,
            "yValue1": 92.59,
            "yValue2": 94.46
        },
        {
            "xValue": "Dec 2010",
            "yValue0": 93.46,
            "yValue1": 92.69,
            "yValue2": 94.54
        },
        {
            "xValue": "Jan 2011",
            "yValue0": 93.22,
            "yValue1": 92.77,
            "yValue2": 94.55
        },
        {
            "xValue": "Feb 2011",
            "yValue0": 93.57,
            "yValue1": 92.88,
            "yValue2": 94.69
        },
        {
            "xValue": "Mar 2011",
            "yValue0": 93.34,
            "yValue1": 92.88,
            "yValue2": 94.88
        },
        {
            "xValue": "Apr 2011",
            "yValue0": 93.58,
            "yValue1": 93.05,
            "yValue2": 95.09
        },
        {
            "xValue": "May 2011",
            "yValue0": 93.70,
            "yValue1": 93.02,
            "yValue2": 95.13
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
            "yValue0": 94.38,
            "yValue1": 93.36,
            "yValue2": 95.46
        },
        {
            "xValue": "Sep 2011",
            "yValue0": 94.46,
            "yValue1": 93.66,
            "yValue2": 95.63
        },
        {
            "xValue": "Oct 2011",
            "yValue0": 94.01,
            "yValue1": 93.66,
            "yValue2": 95.77
        },
        {
            "xValue": "Nov 2011",
            "yValue0": 94.20,
            "yValue1": 93.76,
            "yValue2": 95.87
        },
        {
            "xValue": "Dec 2011",
            "yValue0": 94.38,
            "yValue1": 93.90,
            "yValue2": 96.04
        },
        {
            "xValue": "Jan 2012",
            "yValue0": 94.71,
            "yValue1": 94.27,
            "yValue2": 96.29
        },
        {
            "xValue": "Feb 2012",
            "yValue0": 95.16,
            "yValue1": 94.44,
            "yValue2": 96.46
        },
        {
            "xValue": "Mar 2012",
            "yValue0": 95.28,
            "yValue1": 94.70,
            "yValue2": 96.65
        },
        {
            "xValue": "Apr 2012",
            "yValue0": 95.75,
            "yValue1": 94.75,
            "yValue2": 96.69
        },
        {
            "xValue": "May 2012",
            "yValue0": 96.19,
            "yValue1": 95.05,
            "yValue2": 96.74
        },
        {
            "xValue": "Jun 2012",
            "yValue0": 96.42,
            "yValue1": 95.38,
            "yValue2": 96.78
        },
        {
            "xValue": "Jul 2012",
            "yValue0": 96.48,
            "yValue1": 95.50,
            "yValue2": 96.93
        },
        {
            "xValue": "Aug 2012",
            "yValue0": 96.71,
            "yValue1": 95.68,
            "yValue2": 97.07
        },
        {
            "xValue": "Sep 2012",
            "yValue0": 96.93,
            "yValue1": 95.84,
            "yValue2": 97.20
        },
        {
            "xValue": "Oct 2012",
            "yValue0": 97.67,
            "yValue1": 96.06,
            "yValue2": 97.31
        },
        {
            "xValue": "Nov 2012",
            "yValue0": 97.75,
            "yValue1": 96.31,
            "yValue2": 97.41
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
            "yValue2": 97.73
        },
        {
            "xValue": "Feb 2013",
            "yValue0": 98.53,
            "yValue1": 96.94,
            "yValue2": 97.91
        },
        {
            "xValue": "Mar 2013",
            "yValue0": 98.95,
            "yValue1": 97.12,
            "yValue2": 98.03
        },
        {
            "xValue": "Apr 2013",
            "yValue0": 98.90,
            "yValue1": 97.36,
            "yValue2": 98.16
        },
        {
            "xValue": "May 2013",
            "yValue0": 98.75,
            "yValue1": 97.57,
            "yValue2": 98.31
        },
        {
            "xValue": "Jun 2013",
            "yValue0": 99.07,
            "yValue1": 97.74,
            "yValue2": 98.44
        },
        {
            "xValue": "Jul 2013",
            "yValue0": 98.81,
            "yValue1": 97.96,
            "yValue2": 98.54
        },
        {
            "xValue": "Aug 2013",
            "yValue0": 99.10,
            "yValue1": 98.26,
            "yValue2": 98.74
        },
        {
            "xValue": "Sep 2013",
            "yValue0": 99.42,
            "yValue1": 98.40,
            "yValue2": 98.87
        },
        {
            "xValue": "Oct 2013",
            "yValue0": 99.96,
            "yValue1": 98.60,
            "yValue2": 99.02
        },
        {
            "xValue": "Nov 2013",
            "yValue0": 100.17,
            "yValue1": 98.95,
            "yValue2": 99.20
        },
        {
            "xValue": "Dec 2013",
            "yValue0": 100.11,
            "yValue1": 99.13,
            "yValue2": 99.24
        },
        {
            "xValue": "Jan 2014",
            "yValue0": 100.19,
            "yValue1": 99.39,
            "yValue2": 99.37
        },
        {
            "xValue": "Feb 2014",
            "yValue0": 100.21,
            "yValue1": 99.57,
            "yValue2": 99.47
        },
        {
            "xValue": "Mar 2014",
            "yValue0": 100.75,
            "yValue1": 99.82,
            "yValue2": 99.69
        },
        {
            "xValue": "Apr 2014",
            "yValue0": 100.51,
            "yValue1": 100.04,
            "yValue2": 99.91
        },
        {
            "xValue": "May 2014",
            "yValue0": 100.57,
            "yValue1": 100.30,
            "yValue2": 100.09
        },
        {
            "xValue": "Jun 2014",
            "yValue0": 100.36,
            "yValue1": 100.53,
            "yValue2": 100.32
        },
        {
            "xValue": "Jul 2014",
            "yValue0": 100.30,
            "yValue1": 100.57,
            "yValue2": 100.47
        },
        {
            "xValue": "Aug 2014",
            "yValue0": 100.61,
            "yValue1": 100.98,
            "yValue2": 100.64
        },
        {
            "xValue": "Sep 2014",
            "yValue0": 100.88,
            "yValue1": 101.25,
            "yValue2": 100.86
        },
        {
            "xValue": "Oct 2014",
            "yValue0": 100.99,
            "yValue1": 101.47,
            "yValue2": 101.02
        },
        {
            "xValue": "Nov 2014",
            "yValue0": 101.16,
            "yValue1": 101.70,
            "yValue2": 101.21
        },
        {
            "xValue": "Dec 2014",
            "yValue0": 101.72,
            "yValue1": 101.94,
            "yValue2": 101.37
        },
        {
            "xValue": "Jan 2015",
            "yValue0": 101.65,
            "yValue1": 102.18,
            "yValue2": 101.51
        },
        {
            "xValue": "Feb 2015",
            "yValue0": 102.07,
            "yValue1": 102.38,
            "yValue2": 101.70
        },
        {
            "xValue": "Mar 2015",
            "yValue0": 102.10,
            "yValue1": 102.68,
            "yValue2": 101.81
        },
        {
            "xValue": "Apr 2015",
            "yValue0": 102.42,
            "yValue1": 102.89,
            "yValue2": 102.03
        },
        {
            "xValue": "May 2015",
            "yValue0": 102.44,
            "yValue1": 103.18,
            "yValue2": 102.33
        },
        {
            "xValue": "Jun 2015",
            "yValue0": 102.14,
            "yValue1": 103.50,
            "yValue2": 102.44
        },
        {
            "xValue": "Jul 2015",
            "yValue0": 102.99,
            "yValue1": 104.05,
            "yValue2": 102.61
        },
        {
            "xValue": "Aug 2015",
            "yValue0": 103.17,
            "yValue1": 104.26,
            "yValue2": 102.72
        },
        {
            "xValue": "Sep 2015",
            "yValue0": 103.35,
            "yValue1": 104.45,
            "yValue2": 102.84
        },
        {
            "xValue": "Oct 2015",
            "yValue0": 102.44,
            "yValue1": 104.83,
            "yValue2": 103.01
        },
        {
            "xValue": "Nov 2015",
            "yValue0": 102.45,
            "yValue1": 104.95,
            "yValue2": 103.13
        },
        {
            "xValue": "Dec 2015",
            "yValue0": 102.50,
            "yValue1": 105.17,
            "yValue2": 103.26
        },
        {
            "xValue": "Jan 2016",
            "yValue0": 102.99,
            "yValue1": 105.30,
            "yValue2": 103.31
        },
        {
            "xValue": "Feb 2016",
            "yValue0": 102.65,
            "yValue1": 105.61,
            "yValue2": 103.51
        },
        {
            "xValue": "Mar 2016",
            "yValue0": 102.74,
            "yValue1": 105.53,
            "yValue2": 103.80
        },
        {
            "xValue": "Apr 2016",
            "yValue0": 102.74,
            "yValue1": 106.22,
            "yValue2": 104.00
        },
        {
            "xValue": "May 2016",
            "yValue0": 102.79,
            "yValue1": 106.38,
            "yValue2": 104.16
        },
        {
            "xValue": "Jun 2016",
            "yValue0": 102.91,
            "yValue1": 106.35,
            "yValue2": 104.32
        },
        {
            "xValue": "Jul 2016",
            "yValue0": 103.74,
            "yValue1": 106.77,
            "yValue2": 104.49
        },
        {
            "xValue": "Aug 2016",
            "yValue0": 103.22,
            "yValue1": 106.87,
            "yValue2": 104.58
        },
        {
            "xValue": "Sep 2016",
            "yValue0": 103.09,
            "yValue1": 107.12,
            "yValue2": 104.75
        },
        {
            "xValue": "Oct 2016",
            "yValue0": 103.11,
            "yValue1": 107.14,
            "yValue2": 104.77
        },
        {
            "xValue": "Nov 2016",
            "yValue0": 103.02,
            "yValue1": 107.19,
            "yValue2": 104.78
        },
        {
            "xValue": "Dec 2016",
            "yValue0": 102.91,
            "yValue1": 107.24,
            "yValue2": 104.82
        },
        {
            "xValue": "Jan 2017",
            "yValue0": 103.07,
            "yValue1": 107.17,
            "yValue2": 104.87
        },
        {
            "xValue": "Feb 2017",
            "yValue0": 103.02,
            "yValue1": 107.55,
            "yValue2": 105.10
        },
        {
            "xValue": "Mar 2017",
            "yValue0": 103.23,
            "yValue1": 108.01,
            "yValue2": 105.44
        },
        {
            "xValue": "Apr 2017",
            "yValue0": 103.99,
            "yValue1": 108.27,
            "yValue2": 105.81
        },
        {
            "xValue": "May 2017",
            "yValue0": 104.23,
            "yValue1": 108.79,
            "yValue2": 106.13
        },
        {
            "xValue": "Jun 2017",
            "yValue0": 104.34,
            "yValue1": 109.09,
            "yValue2": 106.21
        },
        {
            "xValue": "Jul 2017",
            "yValue0": 104.41,
            "yValue1": 109.08,
            "yValue2": 106.23
        },
        {
            "xValue": "Aug 2017",
            "yValue0": 104.11,
            "yValue1": 109.17,
            "yValue2": 106.23
        },
        {
            "xValue": "Sep 2017",
            "yValue0": 104.48,
            "yValue1": 109.40,
            "yValue2": 106.19
        },
        {
            "xValue": "Oct 2017",
            "yValue0": 104.46,
            "yValue1": 109.37,
            "yValue2": 106.25
        },
        {
            "xValue": "Nov 2017",
            "yValue0": 104.39,
            "yValue1": 109.36,
            "yValue2": 106.25
        },
        {
            "xValue": "Dec 2017",
            "yValue0": 103.46,
            "yValue1": 109.36,
            "yValue2": 106.15
        },
        {
            "xValue": "Jan 2018",
            "yValue0": 103.30,
            "yValue1": 109.35,
            "yValue2": 106.07
        },
        {
            "xValue": "Feb 2018",
            "yValue0": 104.33,
            "yValue1": 109.91,
            "yValue2": 106.58
        },
        {
            "xValue": "Mar 2018",
            "yValue0": 104.42,
            "yValue1": 110.41,
            "yValue2": 107.12
        },
        {
            "xValue": "Apr 2018",
            "yValue0": 104.95,
            "yValue1": 110.89,
            "yValue2": 107.62
        },
        {
            "xValue": "May 2018",
            "yValue0": 105.58,
            "yValue1": 111.33,
            "yValue2": 108.13
        },
        {
            "xValue": "Jun 2018",
            "yValue0": 106.00,
            "yValue1": 111.54,
            "yValue2": 108.18
        },
        {
            "xValue": "Jul 2018",
            "yValue0": 105.42,
            "yValue1": 111.41,
            "yValue2": 108.09
        },
        {
            "xValue": "Aug 2018",
            "yValue0": 105.41,
            "yValue1": 111.57,
            "yValue2": 107.92
        },
        {
            "xValue": "Sep 2018",
            "yValue0": 105.65,
            "yValue1": 111.55,
            "yValue2": 107.90
        },
        {
            "xValue": "Oct 2018",
            "yValue0": 105.49,
            "yValue1": 111.44,
            "yValue2": 107.86
        },
        {
            "xValue": "Nov 2018",
            "yValue0": 105.33,
            "yValue1": 111.16,
            "yValue2": 107.74
        },
        {
            "xValue": "Dec 2018",
            "yValue0": 105.87,
            "yValue1": 110.89,
            "yValue2": 107.61
        },
        {
            "xValue": "Jan 2019",
            "yValue0": 105.66,
            "yValue1": 110.42,
            "yValue2": 107.55
        },
        {
            "xValue": "Feb 2019",
            "yValue0": 105.75,
            "yValue1": 111.14,
            "yValue2": 107.90
        },
        {
            "xValue": "Mar 2019",
            "yValue0": 106.56,
            "yValue1": 112.10,
            "yValue2": 108.59
        },
        {
            "xValue": "Apr 2019",
            "yValue0": 107.84,
            "yValue1": 113.07,
            "yValue2": 109.35
        },
        {
            "xValue": "May 2019",
            "yValue0": 108.12,
            "yValue1": 113.77,
            "yValue2": 109.80
        },
        {
            "xValue": "Jun 2019",
            "yValue0": 108.72,
            "yValue1": 113.59,
            "yValue2": 109.79
        },
        {
            "xValue": "Jul 2019",
            "yValue0": 107.58,
            "yValue1": 113.38,
            "yValue2": 109.69
        },
        {
            "xValue": "Aug 2019",
            "yValue0": 107.58,
            "yValue1": 113.47,
            "yValue2": 109.25
        },
        {
            "xValue": "Sep 2019",
            "yValue0": 107.19,
            "yValue1": 113.21,
            "yValue2": 109.30
        },
        {
            "xValue": "Oct 2019",
            "yValue0": 107.32,
            "yValue1": 112.79,
            "yValue2": 109.22
        },
        {
            "xValue": "Nov 2019",
            "yValue0": 107.21,
            "yValue1": 112.33,
            "yValue2": 109.13
        },
        {
            "xValue": "Dec 2019",
            "yValue0": 106.89,
            "yValue1": 111.90,
            "yValue2": 108.98
        },
        {
            "xValue": "Jan 2020",
            "yValue0": 107.34,
            "yValue1": 111.60,
            "yValue2": 108.84
        },
        {
            "xValue": "Feb 2020",
            "yValue0": 107.55,
            "yValue1": 112.62,
            "yValue2": 109.46
        },
        {
            "xValue": "Mar 2020",
            "yValue0": 106.59,
            "yValue1": 112.37,
            "yValue2": 109.19
        },
        {
            "xValue": "Apr 2020",
            "yValue0": 92.61,
            "yValue1": 98.06,
            "yValue2": 94.80
        },
        {
            "xValue": "May 2020",
            "yValue0": 92.46,
            "yValue1": 99.50,
            "yValue2": 97.17
        },
        {
            "xValue": "Jun 2020",
            "yValue0": 96.24,
            "yValue1": 102.41,
            "yValue2": 100.54
        },
        {
            "xValue": "Jul 2020",
            "yValue0": 98.26,
            "yValue1": 102.68,
            "yValue2": 101.58
        }
    ],
});