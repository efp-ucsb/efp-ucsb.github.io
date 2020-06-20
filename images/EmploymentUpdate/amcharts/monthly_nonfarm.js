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
            "yValue1": 91.74,
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
            "yValue0": 93.57,
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
            "yValue0": 95.29,
            "yValue1": 94.70,
            "yValue2": 96.65
        },
        {
            "xValue": "Apr 2012",
            "yValue0": 95.74,
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
            "yValue1": 95.49,
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
            "yValue0": 96.94,
            "yValue1": 95.84,
            "yValue2": 97.21
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
            "yValue2": 97.42
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
            "yValue0": 98.52,
            "yValue1": 96.94,
            "yValue2": 97.92
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
            "yValue2": 98.15
        },
        {
            "xValue": "May 2013",
            "yValue0": 98.75,
            "yValue1": 97.57,
            "yValue2": 98.31
        },
        {
            "xValue": "Jun 2013",
            "yValue0": 99.06,
            "yValue1": 97.74,
            "yValue2": 98.43
        },
        {
            "xValue": "Jul 2013",
            "yValue0": 98.82,
            "yValue1": 97.95,
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
            "yValue0": 99.43,
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
            "yValue2": 99.25
        },
        {
            "xValue": "Jan 2014",
            "yValue0": 100.19,
            "yValue1": 99.39,
            "yValue2": 99.38
        },
        {
            "xValue": "Feb 2014",
            "yValue0": 100.19,
            "yValue1": 99.57,
            "yValue2": 99.46
        },
        {
            "xValue": "Mar 2014",
            "yValue0": 100.76,
            "yValue1": 99.81,
            "yValue2": 99.68
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
            "yValue1": 100.31,
            "yValue2": 100.07
        },
        {
            "xValue": "Jun 2014",
            "yValue0": 100.35,
            "yValue1": 100.54,
            "yValue2": 100.30
        },
        {
            "xValue": "Jul 2014",
            "yValue0": 100.31,
            "yValue1": 100.57,
            "yValue2": 100.48
        },
        {
            "xValue": "Aug 2014",
            "yValue0": 100.61,
            "yValue1": 100.99,
            "yValue2": 100.65
        },
        {
            "xValue": "Sep 2014",
            "yValue0": 100.90,
            "yValue1": 101.25,
            "yValue2": 100.88
        },
        {
            "xValue": "Oct 2014",
            "yValue0": 100.99,
            "yValue1": 101.47,
            "yValue2": 101.03
        },
        {
            "xValue": "Nov 2014",
            "yValue0": 101.16,
            "yValue1": 101.70,
            "yValue2": 101.22
        },
        {
            "xValue": "Dec 2014",
            "yValue0": 101.72,
            "yValue1": 101.94,
            "yValue2": 101.40
        },
        {
            "xValue": "Jan 2015",
            "yValue0": 101.62,
            "yValue1": 102.17,
            "yValue2": 101.53
        },
        {
            "xValue": "Feb 2015",
            "yValue0": 102.04,
            "yValue1": 102.35,
            "yValue2": 101.67
        },
        {
            "xValue": "Mar 2015",
            "yValue0": 102.10,
            "yValue1": 102.66,
            "yValue2": 101.79
        },
        {
            "xValue": "Apr 2015",
            "yValue0": 102.41,
            "yValue1": 102.89,
            "yValue2": 102.00
        },
        {
            "xValue": "May 2015",
            "yValue0": 102.44,
            "yValue1": 103.17,
            "yValue2": 102.27
        },
        {
            "xValue": "Jun 2015",
            "yValue0": 102.13,
            "yValue1": 103.53,
            "yValue2": 102.41
        },
        {
            "xValue": "Jul 2015",
            "yValue0": 103.02,
            "yValue1": 104.05,
            "yValue2": 102.63
        },
        {
            "xValue": "Aug 2015",
            "yValue0": 103.18,
            "yValue1": 104.26,
            "yValue2": 102.76
        },
        {
            "xValue": "Sep 2015",
            "yValue0": 103.38,
            "yValue1": 104.46,
            "yValue2": 102.89
        },
        {
            "xValue": "Oct 2015",
            "yValue0": 102.46,
            "yValue1": 104.84,
            "yValue2": 103.06
        },
        {
            "xValue": "Nov 2015",
            "yValue0": 102.47,
            "yValue1": 104.96,
            "yValue2": 103.18
        },
        {
            "xValue": "Dec 2015",
            "yValue0": 102.51,
            "yValue1": 105.17,
            "yValue2": 103.32
        },
        {
            "xValue": "Jan 2016",
            "yValue0": 102.93,
            "yValue1": 105.29,
            "yValue2": 103.32
        },
        {
            "xValue": "Feb 2016",
            "yValue0": 102.60,
            "yValue1": 105.54,
            "yValue2": 103.43
        },
        {
            "xValue": "Mar 2016",
            "yValue0": 102.72,
            "yValue1": 105.50,
            "yValue2": 103.72
        },
        {
            "xValue": "Apr 2016",
            "yValue0": 102.71,
            "yValue1": 106.22,
            "yValue2": 103.91
        },
        {
            "xValue": "May 2016",
            "yValue0": 102.77,
            "yValue1": 106.36,
            "yValue2": 104.02
        },
        {
            "xValue": "Jun 2016",
            "yValue0": 102.90,
            "yValue1": 106.42,
            "yValue2": 104.26
        },
        {
            "xValue": "Jul 2016",
            "yValue0": 103.80,
            "yValue1": 106.78,
            "yValue2": 104.55
        },
        {
            "xValue": "Aug 2016",
            "yValue0": 103.27,
            "yValue1": 106.89,
            "yValue2": 104.70
        },
        {
            "xValue": "Sep 2016",
            "yValue0": 103.16,
            "yValue1": 107.14,
            "yValue2": 104.90
        },
        {
            "xValue": "Oct 2016",
            "yValue0": 103.16,
            "yValue1": 107.17,
            "yValue2": 104.91
        },
        {
            "xValue": "Nov 2016",
            "yValue0": 103.05,
            "yValue1": 107.22,
            "yValue2": 104.90
        },
        {
            "xValue": "Dec 2016",
            "yValue0": 102.93,
            "yValue1": 107.25,
            "yValue2": 104.90
        },
        {
            "xValue": "Jan 2017",
            "yValue0": 103.01,
            "yValue1": 107.15,
            "yValue2": 104.86
        },
        {
            "xValue": "Feb 2017",
            "yValue0": 102.92,
            "yValue1": 107.43,
            "yValue2": 104.94
        },
        {
            "xValue": "Mar 2017",
            "yValue0": 103.14,
            "yValue1": 107.94,
            "yValue2": 105.22
        },
        {
            "xValue": "Apr 2017",
            "yValue0": 103.89,
            "yValue1": 108.23,
            "yValue2": 105.55
        },
        {
            "xValue": "May 2017",
            "yValue0": 104.17,
            "yValue1": 108.76,
            "yValue2": 105.85
        },
        {
            "xValue": "Jun 2017",
            "yValue0": 104.24,
            "yValue1": 109.22,
            "yValue2": 106.14
        },
        {
            "xValue": "Jul 2017",
            "yValue0": 104.60,
            "yValue1": 109.12,
            "yValue2": 106.35
        },
        {
            "xValue": "Aug 2017",
            "yValue0": 104.27,
            "yValue1": 109.21,
            "yValue2": 106.52
        },
        {
            "xValue": "Sep 2017",
            "yValue0": 104.61,
            "yValue1": 109.43,
            "yValue2": 106.51
        },
        {
            "xValue": "Oct 2017",
            "yValue0": 104.55,
            "yValue1": 109.41,
            "yValue2": 106.54
        },
        {
            "xValue": "Nov 2017",
            "yValue0": 104.44,
            "yValue1": 109.42,
            "yValue2": 106.47
        },
        {
            "xValue": "Dec 2017",
            "yValue0": 103.47,
            "yValue1": 109.41,
            "yValue2": 106.27
        },
        {
            "xValue": "Jan 2018",
            "yValue0": 103.26,
            "yValue1": 109.35,
            "yValue2": 106.02
        },
        {
            "xValue": "Feb 2018",
            "yValue0": 104.15,
            "yValue1": 109.72,
            "yValue2": 106.30
        },
        {
            "xValue": "Mar 2018",
            "yValue0": 104.30,
            "yValue1": 110.23,
            "yValue2": 106.71
        },
        {
            "xValue": "Apr 2018",
            "yValue0": 104.75,
            "yValue1": 110.76,
            "yValue2": 107.15
        },
        {
            "xValue": "May 2018",
            "yValue0": 105.46,
            "yValue1": 111.28,
            "yValue2": 107.67
        },
        {
            "xValue": "Jun 2018",
            "yValue0": 105.71,
            "yValue1": 111.72,
            "yValue2": 108.08
        },
        {
            "xValue": "Jul 2018",
            "yValue0": 105.78,
            "yValue1": 111.57,
            "yValue2": 108.24
        },
        {
            "xValue": "Aug 2018",
            "yValue0": 105.72,
            "yValue1": 111.63,
            "yValue2": 108.44
        },
        {
            "xValue": "Sep 2018",
            "yValue0": 105.85,
            "yValue1": 111.54,
            "yValue2": 108.43
        },
        {
            "xValue": "Oct 2018",
            "yValue0": 105.62,
            "yValue1": 111.47,
            "yValue2": 108.33
        },
        {
            "xValue": "Nov 2018",
            "yValue0": 105.40,
            "yValue1": 111.27,
            "yValue2": 108.07
        },
        {
            "xValue": "Dec 2018",
            "yValue0": 105.88,
            "yValue1": 111.05,
            "yValue2": 107.76
        },
        {
            "xValue": "Jan 2019",
            "yValue0": 105.63,
            "yValue1": 110.55,
            "yValue2": 107.47
        },
        {
            "xValue": "Feb 2019",
            "yValue0": 105.49,
            "yValue1": 110.88,
            "yValue2": 107.51
        },
        {
            "xValue": "Mar 2019",
            "yValue0": 106.43,
            "yValue1": 111.76,
            "yValue2": 107.99
        },
        {
            "xValue": "Apr 2019",
            "yValue0": 107.53,
            "yValue1": 112.74,
            "yValue2": 108.64
        },
        {
            "xValue": "May 2019",
            "yValue0": 107.94,
            "yValue1": 113.67,
            "yValue2": 109.18
        },
        {
            "xValue": "Jun 2019",
            "yValue0": 108.17,
            "yValue1": 113.82,
            "yValue2": 109.65
        },
        {
            "xValue": "Jul 2019",
            "yValue0": 108.14,
            "yValue1": 113.68,
            "yValue2": 109.86
        },
        {
            "xValue": "Aug 2019",
            "yValue0": 108.07,
            "yValue1": 113.54,
            "yValue2": 109.99
        },
        {
            "xValue": "Sep 2019",
            "yValue0": 107.46,
            "yValue1": 113.15,
            "yValue2": 110.03
        },
        {
            "xValue": "Oct 2019",
            "yValue0": 107.48,
            "yValue1": 112.80,
            "yValue2": 109.84
        },
        {
            "xValue": "Nov 2019",
            "yValue0": 107.30,
            "yValue1": 112.50,
            "yValue2": 109.57
        },
        {
            "xValue": "Dec 2019",
            "yValue0": 106.89,
            "yValue1": 112.18,
            "yValue2": 109.14
        },
        {
            "xValue": "Jan 2020",
            "yValue0": 107.33,
            "yValue1": 111.94,
            "yValue2": 108.72
        },
        {
            "xValue": "Feb 2020",
            "yValue0": 107.24,
            "yValue1": 112.30,
            "yValue2": 109.00
        },
        {
            "xValue": "Mar 2020",
            "yValue0": 106.50,
            "yValue1": 111.88,
            "yValue2": 108.46
        },
        {
            "xValue": "Apr 2020",
            "yValue0": 92.28,
            "yValue1": 97.59,
            "yValue2": 94.13
        },
        {
            "xValue": "May 2020",
            "yValue0": 91.88,
            "yValue1": 99.42,
            "yValue2": 96.46
        }
    ],
});