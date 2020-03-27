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
            "yValue1": 92.68,
            "yValue2": 94.67
        },
        {
            "xValue": "Feb 2000",
            "yValue0": 93.10,
            "yValue1": 92.96,
            "yValue2": 94.71
        },
        {
            "xValue": "Mar 2000",
            "yValue0": 93.54,
            "yValue1": 93.25,
            "yValue2": 95.07
        },
        {
            "xValue": "Apr 2000",
            "yValue0": 93.37,
            "yValue1": 93.51,
            "yValue2": 95.28
        },
        {
            "xValue": "May 2000",
            "yValue0": 94.20,
            "yValue1": 93.91,
            "yValue2": 95.41
        },
        {
            "xValue": "Jun 2000",
            "yValue0": 94.50,
            "yValue1": 94.23,
            "yValue2": 95.40
        },
        {
            "xValue": "Jul 2000",
            "yValue0": 94.55,
            "yValue1": 94.47,
            "yValue2": 95.51
        },
        {
            "xValue": "Aug 2000",
            "yValue0": 94.20,
            "yValue1": 94.69,
            "yValue2": 95.55
        },
        {
            "xValue": "Sep 2000",
            "yValue0": 94.76,
            "yValue1": 95.02,
            "yValue2": 95.65
        },
        {
            "xValue": "Oct 2000",
            "yValue0": 94.71,
            "yValue1": 94.99,
            "yValue2": 95.65
        },
        {
            "xValue": "Nov 2000",
            "yValue0": 95.03,
            "yValue1": 95.38,
            "yValue2": 95.80
        },
        {
            "xValue": "Dec 2000",
            "yValue0": 95.37,
            "yValue1": 95.64,
            "yValue2": 95.89
        },
        {
            "xValue": "Jan 2001",
            "yValue0": 95.22,
            "yValue1": 95.80,
            "yValue2": 95.89
        },
        {
            "xValue": "Feb 2001",
            "yValue0": 95.30,
            "yValue1": 95.79,
            "yValue2": 95.92
        },
        {
            "xValue": "Mar 2001",
            "yValue0": 95.28,
            "yValue1": 95.82,
            "yValue2": 95.90
        },
        {
            "xValue": "Apr 2001",
            "yValue0": 95.61,
            "yValue1": 95.52,
            "yValue2": 95.70
        },
        {
            "xValue": "May 2001",
            "yValue0": 95.05,
            "yValue1": 95.34,
            "yValue2": 95.63
        },
        {
            "xValue": "Jun 2001",
            "yValue0": 95.18,
            "yValue1": 95.31,
            "yValue2": 95.56
        },
        {
            "xValue": "Jul 2001",
            "yValue0": 94.83,
            "yValue1": 94.97,
            "yValue2": 95.47
        },
        {
            "xValue": "Aug 2001",
            "yValue0": 95.01,
            "yValue1": 94.93,
            "yValue2": 95.40
        },
        {
            "xValue": "Sep 2001",
            "yValue0": 94.43,
            "yValue1": 94.65,
            "yValue2": 95.23
        },
        {
            "xValue": "Oct 2001",
            "yValue0": 94.33,
            "yValue1": 94.47,
            "yValue2": 94.98
        },
        {
            "xValue": "Nov 2001",
            "yValue0": 94.02,
            "yValue1": 94.29,
            "yValue2": 94.78
        },
        {
            "xValue": "Dec 2001",
            "yValue0": 94.36,
            "yValue1": 94.16,
            "yValue2": 94.65
        },
        {
            "xValue": "Jan 2002",
            "yValue0": 94.26,
            "yValue1": 94.13,
            "yValue2": 94.55
        },
        {
            "xValue": "Feb 2002",
            "yValue0": 94.56,
            "yValue1": 94.18,
            "yValue2": 94.44
        },
        {
            "xValue": "Mar 2002",
            "yValue0": 94.83,
            "yValue1": 94.32,
            "yValue2": 94.44
        },
        {
            "xValue": "Apr 2002",
            "yValue0": 94.39,
            "yValue1": 94.35,
            "yValue2": 94.37
        },
        {
            "xValue": "May 2002",
            "yValue0": 94.69,
            "yValue1": 94.41,
            "yValue2": 94.35
        },
        {
            "xValue": "Jun 2002",
            "yValue0": 94.44,
            "yValue1": 94.37,
            "yValue2": 94.39
        },
        {
            "xValue": "Jul 2002",
            "yValue0": 94.77,
            "yValue1": 94.24,
            "yValue2": 94.33
        },
        {
            "xValue": "Aug 2002",
            "yValue0": 94.41,
            "yValue1": 94.29,
            "yValue2": 94.36
        },
        {
            "xValue": "Sep 2002",
            "yValue0": 94.59,
            "yValue1": 94.31,
            "yValue2": 94.32
        },
        {
            "xValue": "Oct 2002",
            "yValue0": 94.10,
            "yValue1": 94.32,
            "yValue2": 94.36
        },
        {
            "xValue": "Nov 2002",
            "yValue0": 94.07,
            "yValue1": 94.45,
            "yValue2": 94.39
        },
        {
            "xValue": "Dec 2002",
            "yValue0": 94.03,
            "yValue1": 94.38,
            "yValue2": 94.30
        },
        {
            "xValue": "Jan 2003",
            "yValue0": 94.13,
            "yValue1": 94.29,
            "yValue2": 94.36
        },
        {
            "xValue": "Feb 2003",
            "yValue0": 94.27,
            "yValue1": 94.18,
            "yValue2": 94.23
        },
        {
            "xValue": "Mar 2003",
            "yValue0": 93.84,
            "yValue1": 94.07,
            "yValue2": 94.09
        },
        {
            "xValue": "Apr 2003",
            "yValue0": 94.70,
            "yValue1": 94.10,
            "yValue2": 94.05
        },
        {
            "xValue": "May 2003",
            "yValue0": 94.62,
            "yValue1": 94.10,
            "yValue2": 94.03
        },
        {
            "xValue": "Jun 2003",
            "yValue0": 94.33,
            "yValue1": 94.10,
            "yValue2": 94.04
        },
        {
            "xValue": "Jul 2003",
            "yValue0": 94.39,
            "yValue1": 94.06,
            "yValue2": 94.04
        },
        {
            "xValue": "Aug 2003",
            "yValue0": 94.70,
            "yValue1": 94.10,
            "yValue2": 94.04
        },
        {
            "xValue": "Sep 2003",
            "yValue0": 95.14,
            "yValue1": 94.10,
            "yValue2": 94.14
        },
        {
            "xValue": "Oct 2003",
            "yValue0": 95.59,
            "yValue1": 94.22,
            "yValue2": 94.23
        },
        {
            "xValue": "Nov 2003",
            "yValue0": 95.70,
            "yValue1": 94.16,
            "yValue2": 94.29
        },
        {
            "xValue": "Dec 2003",
            "yValue0": 95.80,
            "yValue1": 94.28,
            "yValue2": 94.39
        },
        {
            "xValue": "Jan 2004",
            "yValue0": 96.45,
            "yValue1": 94.53,
            "yValue2": 94.49
        },
        {
            "xValue": "Feb 2004",
            "yValue0": 96.04,
            "yValue1": 94.62,
            "yValue2": 94.51
        },
        {
            "xValue": "Mar 2004",
            "yValue0": 96.04,
            "yValue1": 94.77,
            "yValue2": 94.76
        },
        {
            "xValue": "Apr 2004",
            "yValue0": 96.23,
            "yValue1": 94.85,
            "yValue2": 94.93
        },
        {
            "xValue": "May 2004",
            "yValue0": 95.82,
            "yValue1": 95.03,
            "yValue2": 95.12
        },
        {
            "xValue": "Jun 2004",
            "yValue0": 96.50,
            "yValue1": 95.03,
            "yValue2": 95.19
        },
        {
            "xValue": "Jul 2004",
            "yValue0": 96.43,
            "yValue1": 95.59,
            "yValue2": 95.24
        },
        {
            "xValue": "Aug 2004",
            "yValue0": 96.68,
            "yValue1": 95.44,
            "yValue2": 95.33
        },
        {
            "xValue": "Sep 2004",
            "yValue0": 96.67,
            "yValue1": 95.49,
            "yValue2": 95.47
        },
        {
            "xValue": "Oct 2004",
            "yValue0": 96.90,
            "yValue1": 95.82,
            "yValue2": 95.66
        },
        {
            "xValue": "Nov 2004",
            "yValue0": 96.80,
            "yValue1": 95.97,
            "yValue2": 95.75
        },
        {
            "xValue": "Dec 2004",
            "yValue0": 96.70,
            "yValue1": 96.01,
            "yValue2": 95.86
        },
        {
            "xValue": "Jan 2005",
            "yValue0": 96.75,
            "yValue1": 96.16,
            "yValue2": 95.94
        },
        {
            "xValue": "Feb 2005",
            "yValue0": 97.19,
            "yValue1": 96.33,
            "yValue2": 96.11
        },
        {
            "xValue": "Mar 2005",
            "yValue0": 97.72,
            "yValue1": 96.49,
            "yValue2": 96.21
        },
        {
            "xValue": "Apr 2005",
            "yValue0": 98.21,
            "yValue1": 96.76,
            "yValue2": 96.45
        },
        {
            "xValue": "May 2005",
            "yValue0": 98.14,
            "yValue1": 96.82,
            "yValue2": 96.56
        },
        {
            "xValue": "Jun 2005",
            "yValue0": 98.34,
            "yValue1": 96.85,
            "yValue2": 96.76
        },
        {
            "xValue": "Jul 2005",
            "yValue0": 98.65,
            "yValue1": 97.33,
            "yValue2": 97.01
        },
        {
            "xValue": "Aug 2005",
            "yValue0": 98.49,
            "yValue1": 97.49,
            "yValue2": 97.18
        },
        {
            "xValue": "Sep 2005",
            "yValue0": 98.60,
            "yValue1": 97.76,
            "yValue2": 97.25
        },
        {
            "xValue": "Oct 2005",
            "yValue0": 98.67,
            "yValue1": 97.83,
            "yValue2": 97.25
        },
        {
            "xValue": "Nov 2005",
            "yValue0": 98.62,
            "yValue1": 98.05,
            "yValue2": 97.55
        },
        {
            "xValue": "Dec 2005",
            "yValue0": 98.85,
            "yValue1": 98.29,
            "yValue2": 97.67
        },
        {
            "xValue": "Jan 2006",
            "yValue0": 98.52,
            "yValue1": 98.34,
            "yValue2": 97.86
        },
        {
            "xValue": "Feb 2006",
            "yValue0": 98.67,
            "yValue1": 98.54,
            "yValue2": 98.07
        },
        {
            "xValue": "Mar 2006",
            "yValue0": 98.29,
            "yValue1": 98.60,
            "yValue2": 98.30
        },
        {
            "xValue": "Apr 2006",
            "yValue0": 98.30,
            "yValue1": 98.52,
            "yValue2": 98.40
        },
        {
            "xValue": "May 2006",
            "yValue0": 98.89,
            "yValue1": 98.93,
            "yValue2": 98.42
        },
        {
            "xValue": "Jun 2006",
            "yValue0": 98.90,
            "yValue1": 99.07,
            "yValue2": 98.49
        },
        {
            "xValue": "Jul 2006",
            "yValue0": 98.35,
            "yValue1": 99.15,
            "yValue2": 98.62
        },
        {
            "xValue": "Aug 2006",
            "yValue0": 98.23,
            "yValue1": 99.26,
            "yValue2": 98.75
        },
        {
            "xValue": "Sep 2006",
            "yValue0": 98.53,
            "yValue1": 99.35,
            "yValue2": 98.88
        },
        {
            "xValue": "Oct 2006",
            "yValue0": 98.03,
            "yValue1": 99.35,
            "yValue2": 98.84
        },
        {
            "xValue": "Nov 2006",
            "yValue0": 98.31,
            "yValue1": 99.39,
            "yValue2": 99.03
        },
        {
            "xValue": "Dec 2006",
            "yValue0": 98.10,
            "yValue1": 99.43,
            "yValue2": 99.18
        },
        {
            "xValue": "Jan 2007",
            "yValue0": 98.67,
            "yValue1": 99.60,
            "yValue2": 99.34
        },
        {
            "xValue": "Feb 2007",
            "yValue0": 98.92,
            "yValue1": 99.74,
            "yValue2": 99.39
        },
        {
            "xValue": "Mar 2007",
            "yValue0": 99.19,
            "yValue1": 99.94,
            "yValue2": 99.57
        },
        {
            "xValue": "Apr 2007",
            "yValue0": 98.81,
            "yValue1": 99.51,
            "yValue2": 99.60
        },
        {
            "xValue": "May 2007",
            "yValue0": 99.12,
            "yValue1": 99.76,
            "yValue2": 99.69
        },
        {
            "xValue": "Jun 2007",
            "yValue0": 98.99,
            "yValue1": 99.84,
            "yValue2": 99.75
        },
        {
            "xValue": "Jul 2007",
            "yValue0": 99.28,
            "yValue1": 100.20,
            "yValue2": 99.72
        },
        {
            "xValue": "Aug 2007",
            "yValue0": 99.62,
            "yValue1": 100.02,
            "yValue2": 99.70
        },
        {
            "xValue": "Sep 2007",
            "yValue0": 99.31,
            "yValue1": 99.95,
            "yValue2": 99.77
        },
        {
            "xValue": "Oct 2007",
            "yValue0": 99.62,
            "yValue1": 99.90,
            "yValue2": 99.80
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
            "yValue0": 99.66,
            "yValue1": 99.74,
            "yValue2": 100.01
        },
        {
            "xValue": "Feb 2008",
            "yValue0": 99.85,
            "yValue1": 99.83,
            "yValue2": 99.95
        },
        {
            "xValue": "Mar 2008",
            "yValue0": 99.70,
            "yValue1": 99.68,
            "yValue2": 99.92
        },
        {
            "xValue": "Apr 2008",
            "yValue0": 99.64,
            "yValue1": 99.59,
            "yValue2": 99.76
        },
        {
            "xValue": "May 2008",
            "yValue0": 99.29,
            "yValue1": 99.43,
            "yValue2": 99.60
        },
        {
            "xValue": "Jun 2008",
            "yValue0": 99.02,
            "yValue1": 99.25,
            "yValue2": 99.46
        },
        {
            "xValue": "Jul 2008",
            "yValue0": 98.77,
            "yValue1": 99.14,
            "yValue2": 99.33
        },
        {
            "xValue": "Aug 2008",
            "yValue0": 97.93,
            "yValue1": 98.83,
            "yValue2": 99.12
        },
        {
            "xValue": "Sep 2008",
            "yValue0": 98.73,
            "yValue1": 98.58,
            "yValue2": 98.80
        },
        {
            "xValue": "Oct 2008",
            "yValue0": 98.80,
            "yValue1": 97.93,
            "yValue2": 98.43
        },
        {
            "xValue": "Nov 2008",
            "yValue0": 97.67,
            "yValue1": 97.24,
            "yValue2": 97.92
        },
        {
            "xValue": "Dec 2008",
            "yValue0": 97.54,
            "yValue1": 96.75,
            "yValue2": 97.43
        },
        {
            "xValue": "Jan 2009",
            "yValue0": 96.77,
            "yValue1": 96.07,
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
            "yValue1": 94.61,
            "yValue2": 95.76
        },
        {
            "xValue": "Apr 2009",
            "yValue0": 94.75,
            "yValue1": 93.96,
            "yValue2": 95.27
        },
        {
            "xValue": "May 2009",
            "yValue0": 94.07,
            "yValue1": 93.61,
            "yValue2": 94.98
        },
        {
            "xValue": "Jun 2009",
            "yValue0": 94.11,
            "yValue1": 93.13,
            "yValue2": 94.62
        },
        {
            "xValue": "Jul 2009",
            "yValue0": 93.86,
            "yValue1": 92.53,
            "yValue2": 94.40
        },
        {
            "xValue": "Aug 2009",
            "yValue0": 93.64,
            "yValue1": 92.20,
            "yValue2": 94.26
        },
        {
            "xValue": "Sep 2009",
            "yValue0": 93.29,
            "yValue1": 91.93,
            "yValue2": 94.09
        },
        {
            "xValue": "Oct 2009",
            "yValue0": 93.91,
            "yValue1": 92.15,
            "yValue2": 93.93
        },
        {
            "xValue": "Nov 2009",
            "yValue0": 93.45,
            "yValue1": 91.99,
            "yValue2": 93.95
        },
        {
            "xValue": "Dec 2009",
            "yValue0": 92.70,
            "yValue1": 91.88,
            "yValue2": 93.79
        },
        {
            "xValue": "Jan 2010",
            "yValue0": 93.27,
            "yValue1": 91.86,
            "yValue2": 93.79
        },
        {
            "xValue": "Feb 2010",
            "yValue0": 92.82,
            "yValue1": 91.75,
            "yValue2": 93.72
        },
        {
            "xValue": "Mar 2010",
            "yValue0": 92.84,
            "yValue1": 91.72,
            "yValue2": 93.86
        },
        {
            "xValue": "Apr 2010",
            "yValue0": 93.18,
            "yValue1": 92.31,
            "yValue2": 94.03
        },
        {
            "xValue": "May 2010",
            "yValue0": 93.68,
            "yValue1": 92.53,
            "yValue2": 94.37
        },
        {
            "xValue": "Jun 2010",
            "yValue0": 93.41,
            "yValue1": 92.38,
            "yValue2": 94.25
        },
        {
            "xValue": "Jul 2010",
            "yValue0": 93.53,
            "yValue1": 92.33,
            "yValue2": 94.23
        },
        {
            "xValue": "Aug 2010",
            "yValue0": 93.28,
            "yValue1": 92.30,
            "yValue2": 94.22
        },
        {
            "xValue": "Sep 2010",
            "yValue0": 93.04,
            "yValue1": 92.30,
            "yValue2": 94.18
        },
        {
            "xValue": "Oct 2010",
            "yValue0": 93.30,
            "yValue1": 92.55,
            "yValue2": 94.36
        },
        {
            "xValue": "Nov 2010",
            "yValue0": 93.34,
            "yValue1": 92.55,
            "yValue2": 94.46
        },
        {
            "xValue": "Dec 2010",
            "yValue0": 93.43,
            "yValue1": 92.65,
            "yValue2": 94.55
        },
        {
            "xValue": "Jan 2011",
            "yValue0": 93.26,
            "yValue1": 92.76,
            "yValue2": 94.55
        },
        {
            "xValue": "Feb 2011",
            "yValue0": 93.59,
            "yValue1": 92.89,
            "yValue2": 94.69
        },
        {
            "xValue": "Mar 2011",
            "yValue0": 93.35,
            "yValue1": 92.86,
            "yValue2": 94.87
        },
        {
            "xValue": "Apr 2011",
            "yValue0": 93.57,
            "yValue1": 93.03,
            "yValue2": 95.09
        },
        {
            "xValue": "May 2011",
            "yValue0": 93.64,
            "yValue1": 92.98,
            "yValue2": 95.13
        },
        {
            "xValue": "Jun 2011",
            "yValue0": 93.92,
            "yValue1": 92.96,
            "yValue2": 95.28
        },
        {
            "xValue": "Jul 2011",
            "yValue0": 94.15,
            "yValue1": 93.26,
            "yValue2": 95.37
        },
        {
            "xValue": "Aug 2011",
            "yValue0": 94.39,
            "yValue1": 93.34,
            "yValue2": 95.46
        },
        {
            "xValue": "Sep 2011",
            "yValue0": 94.48,
            "yValue1": 93.64,
            "yValue2": 95.64
        },
        {
            "xValue": "Oct 2011",
            "yValue0": 93.98,
            "yValue1": 93.62,
            "yValue2": 95.77
        },
        {
            "xValue": "Nov 2011",
            "yValue0": 94.18,
            "yValue1": 93.72,
            "yValue2": 95.87
        },
        {
            "xValue": "Dec 2011",
            "yValue0": 94.36,
            "yValue1": 93.86,
            "yValue2": 96.04
        },
        {
            "xValue": "Jan 2012",
            "yValue0": 94.74,
            "yValue1": 94.25,
            "yValue2": 96.29
        },
        {
            "xValue": "Feb 2012",
            "yValue0": 95.17,
            "yValue1": 94.43,
            "yValue2": 96.46
        },
        {
            "xValue": "Mar 2012",
            "yValue0": 95.30,
            "yValue1": 94.68,
            "yValue2": 96.64
        },
        {
            "xValue": "Apr 2012",
            "yValue0": 95.74,
            "yValue1": 94.72,
            "yValue2": 96.69
        },
        {
            "xValue": "May 2012",
            "yValue0": 96.16,
            "yValue1": 95.02,
            "yValue2": 96.74
        },
        {
            "xValue": "Jun 2012",
            "yValue0": 96.41,
            "yValue1": 95.36,
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
            "yValue0": 96.72,
            "yValue1": 95.66,
            "yValue2": 97.07
        },
        {
            "xValue": "Sep 2012",
            "yValue0": 96.95,
            "yValue1": 95.81,
            "yValue2": 97.20
        },
        {
            "xValue": "Oct 2012",
            "yValue0": 97.65,
            "yValue1": 96.03,
            "yValue2": 97.31
        },
        {
            "xValue": "Nov 2012",
            "yValue0": 97.75,
            "yValue1": 96.28,
            "yValue2": 97.42
        },
        {
            "xValue": "Dec 2012",
            "yValue0": 98.08,
            "yValue1": 96.46,
            "yValue2": 97.61
        },
        {
            "xValue": "Jan 2013",
            "yValue0": 98.24,
            "yValue1": 96.57,
            "yValue2": 97.74
        },
        {
            "xValue": "Feb 2013",
            "yValue0": 98.52,
            "yValue1": 96.92,
            "yValue2": 97.92
        },
        {
            "xValue": "Mar 2013",
            "yValue0": 98.98,
            "yValue1": 97.10,
            "yValue2": 98.02
        },
        {
            "xValue": "Apr 2013",
            "yValue0": 98.90,
            "yValue1": 97.34,
            "yValue2": 98.15
        },
        {
            "xValue": "May 2013",
            "yValue0": 98.75,
            "yValue1": 97.55,
            "yValue2": 98.30
        },
        {
            "xValue": "Jun 2013",
            "yValue0": 99.04,
            "yValue1": 97.69,
            "yValue2": 98.43
        },
        {
            "xValue": "Jul 2013",
            "yValue0": 98.75,
            "yValue1": 97.95,
            "yValue2": 98.53
        },
        {
            "xValue": "Aug 2013",
            "yValue0": 99.10,
            "yValue1": 98.22,
            "yValue2": 98.73
        },
        {
            "xValue": "Sep 2013",
            "yValue0": 99.44,
            "yValue1": 98.36,
            "yValue2": 98.87
        },
        {
            "xValue": "Oct 2013",
            "yValue0": 99.95,
            "yValue1": 98.57,
            "yValue2": 99.01
        },
        {
            "xValue": "Nov 2013",
            "yValue0": 100.18,
            "yValue1": 98.92,
            "yValue2": 99.20
        },
        {
            "xValue": "Dec 2013",
            "yValue0": 100.12,
            "yValue1": 99.11,
            "yValue2": 99.26
        },
        {
            "xValue": "Jan 2014",
            "yValue0": 100.17,
            "yValue1": 99.38,
            "yValue2": 99.39
        },
        {
            "xValue": "Feb 2014",
            "yValue0": 100.20,
            "yValue1": 99.55,
            "yValue2": 99.49
        },
        {
            "xValue": "Mar 2014",
            "yValue0": 100.79,
            "yValue1": 99.78,
            "yValue2": 99.68
        },
        {
            "xValue": "Apr 2014",
            "yValue0": 100.51,
            "yValue1": 100.03,
            "yValue2": 99.91
        },
        {
            "xValue": "May 2014",
            "yValue0": 100.58,
            "yValue1": 100.28,
            "yValue2": 100.06
        },
        {
            "xValue": "Jun 2014",
            "yValue0": 100.30,
            "yValue1": 100.43,
            "yValue2": 100.30
        },
        {
            "xValue": "Jul 2014",
            "yValue0": 100.22,
            "yValue1": 100.59,
            "yValue2": 100.47
        },
        {
            "xValue": "Aug 2014",
            "yValue0": 100.60,
            "yValue1": 100.95,
            "yValue2": 100.63
        },
        {
            "xValue": "Sep 2014",
            "yValue0": 100.92,
            "yValue1": 101.21,
            "yValue2": 100.86
        },
        {
            "xValue": "Oct 2014",
            "yValue0": 100.96,
            "yValue1": 101.44,
            "yValue2": 101.02
        },
        {
            "xValue": "Nov 2014",
            "yValue0": 101.20,
            "yValue1": 101.66,
            "yValue2": 101.22
        },
        {
            "xValue": "Dec 2014",
            "yValue0": 101.75,
            "yValue1": 101.91,
            "yValue2": 101.42
        },
        {
            "xValue": "Jan 2015",
            "yValue0": 101.63,
            "yValue1": 102.20,
            "yValue2": 101.57
        },
        {
            "xValue": "Feb 2015",
            "yValue0": 102.10,
            "yValue1": 102.36,
            "yValue2": 101.75
        },
        {
            "xValue": "Mar 2015",
            "yValue0": 102.14,
            "yValue1": 102.62,
            "yValue2": 101.81
        },
        {
            "xValue": "Apr 2015",
            "yValue0": 102.41,
            "yValue1": 102.91,
            "yValue2": 102.01
        },
        {
            "xValue": "May 2015",
            "yValue0": 102.42,
            "yValue1": 103.13,
            "yValue2": 102.25
        },
        {
            "xValue": "Jun 2015",
            "yValue0": 102.04,
            "yValue1": 103.31,
            "yValue2": 102.38
        },
        {
            "xValue": "Jul 2015",
            "yValue0": 102.86,
            "yValue1": 104.09,
            "yValue2": 102.58
        },
        {
            "xValue": "Aug 2015",
            "yValue0": 103.12,
            "yValue1": 104.21,
            "yValue2": 102.69
        },
        {
            "xValue": "Sep 2015",
            "yValue0": 103.36,
            "yValue1": 104.40,
            "yValue2": 102.82
        },
        {
            "xValue": "Oct 2015",
            "yValue0": 102.44,
            "yValue1": 104.82,
            "yValue2": 103.02
        },
        {
            "xValue": "Nov 2015",
            "yValue0": 102.56,
            "yValue1": 104.94,
            "yValue2": 103.18
        },
        {
            "xValue": "Dec 2015",
            "yValue0": 102.63,
            "yValue1": 105.18,
            "yValue2": 103.38
        },
        {
            "xValue": "Jan 2016",
            "yValue0": 102.99,
            "yValue1": 105.40,
            "yValue2": 103.45
        },
        {
            "xValue": "Feb 2016",
            "yValue0": 102.75,
            "yValue1": 105.62,
            "yValue2": 103.62
        },
        {
            "xValue": "Mar 2016",
            "yValue0": 102.77,
            "yValue1": 105.46,
            "yValue2": 103.80
        },
        {
            "xValue": "Apr 2016",
            "yValue0": 102.68,
            "yValue1": 106.25,
            "yValue2": 103.93
        },
        {
            "xValue": "May 2016",
            "yValue0": 102.67,
            "yValue1": 106.26,
            "yValue2": 103.96
        },
        {
            "xValue": "Jun 2016",
            "yValue0": 102.70,
            "yValue1": 106.08,
            "yValue2": 104.16
        },
        {
            "xValue": "Jul 2016",
            "yValue0": 103.55,
            "yValue1": 106.74,
            "yValue2": 104.38
        },
        {
            "xValue": "Aug 2016",
            "yValue0": 103.10,
            "yValue1": 106.77,
            "yValue2": 104.50
        },
        {
            "xValue": "Sep 2016",
            "yValue0": 103.07,
            "yValue1": 107.03,
            "yValue2": 104.72
        },
        {
            "xValue": "Oct 2016",
            "yValue0": 103.13,
            "yValue1": 107.14,
            "yValue2": 104.81
        },
        {
            "xValue": "Nov 2016",
            "yValue0": 103.24,
            "yValue1": 107.26,
            "yValue2": 104.91
        },
        {
            "xValue": "Dec 2016",
            "yValue0": 103.28,
            "yValue1": 107.38,
            "yValue2": 105.08
        },
        {
            "xValue": "Jan 2017",
            "yValue0": 103.26,
            "yValue1": 107.46,
            "yValue2": 105.23
        },
        {
            "xValue": "Feb 2017",
            "yValue0": 103.27,
            "yValue1": 107.68,
            "yValue2": 105.34
        },
        {
            "xValue": "Mar 2017",
            "yValue0": 103.26,
            "yValue1": 107.96,
            "yValue2": 105.44
        },
        {
            "xValue": "Apr 2017",
            "yValue0": 103.75,
            "yValue1": 108.18,
            "yValue2": 105.59
        },
        {
            "xValue": "May 2017",
            "yValue0": 103.87,
            "yValue1": 108.48,
            "yValue2": 105.70
        },
        {
            "xValue": "Jun 2017",
            "yValue0": 103.83,
            "yValue1": 108.68,
            "yValue2": 105.86
        },
        {
            "xValue": "Jul 2017",
            "yValue0": 104.13,
            "yValue1": 108.84,
            "yValue2": 105.99
        },
        {
            "xValue": "Aug 2017",
            "yValue0": 103.96,
            "yValue1": 108.94,
            "yValue2": 106.13
        },
        {
            "xValue": "Sep 2017",
            "yValue0": 104.43,
            "yValue1": 109.23,
            "yValue2": 106.18
        },
        {
            "xValue": "Oct 2017",
            "yValue0": 104.56,
            "yValue1": 109.39,
            "yValue2": 106.35
        },
        {
            "xValue": "Nov 2017",
            "yValue0": 104.77,
            "yValue1": 109.61,
            "yValue2": 106.51
        },
        {
            "xValue": "Dec 2017",
            "yValue0": 104.12,
            "yValue1": 109.84,
            "yValue2": 106.61
        },
        {
            "xValue": "Jan 2018",
            "yValue0": 103.81,
            "yValue1": 110.09,
            "yValue2": 106.70
        },
        {
            "xValue": "Feb 2018",
            "yValue0": 104.80,
            "yValue1": 110.32,
            "yValue2": 106.98
        },
        {
            "xValue": "Mar 2018",
            "yValue0": 104.53,
            "yValue1": 110.40,
            "yValue2": 107.11
        },
        {
            "xValue": "Apr 2018",
            "yValue0": 104.40,
            "yValue1": 110.50,
            "yValue2": 107.21
        },
        {
            "xValue": "May 2018",
            "yValue0": 104.84,
            "yValue1": 110.58,
            "yValue2": 107.41
        },
        {
            "xValue": "Jun 2018",
            "yValue0": 105.08,
            "yValue1": 110.81,
            "yValue2": 107.57
        },
        {
            "xValue": "Jul 2018",
            "yValue0": 105.05,
            "yValue1": 110.90,
            "yValue2": 107.65
        },
        {
            "xValue": "Aug 2018",
            "yValue0": 105.25,
            "yValue1": 111.15,
            "yValue2": 107.83
        },
        {
            "xValue": "Sep 2018",
            "yValue0": 105.59,
            "yValue1": 111.27,
            "yValue2": 107.92
        },
        {
            "xValue": "Oct 2018",
            "yValue0": 105.69,
            "yValue1": 111.53,
            "yValue2": 108.06
        },
        {
            "xValue": "Nov 2018",
            "yValue0": 105.90,
            "yValue1": 111.70,
            "yValue2": 108.15
        },
        {
            "xValue": "Dec 2018",
            "yValue0": 106.84,
            "yValue1": 111.85,
            "yValue2": 108.29
        },
        {
            "xValue": "Jan 2019",
            "yValue0": 106.49,
            "yValue1": 111.86,
            "yValue2": 108.48
        },
        {
            "xValue": "Feb 2019",
            "yValue0": 106.49,
            "yValue1": 111.95,
            "yValue2": 108.46
        },
        {
            "xValue": "Mar 2019",
            "yValue0": 106.81,
            "yValue1": 112.09,
            "yValue2": 108.57
        },
        {
            "xValue": "Apr 2019",
            "yValue0": 106.93,
            "yValue1": 112.20,
            "yValue2": 108.72
        },
        {
            "xValue": "May 2019",
            "yValue0": 106.93,
            "yValue1": 112.33,
            "yValue2": 108.79
        },
        {
            "xValue": "Jun 2019",
            "yValue0": 107.32,
            "yValue1": 112.45,
            "yValue2": 108.92
        },
        {
            "xValue": "Jul 2019",
            "yValue0": 107.13,
            "yValue1": 112.64,
            "yValue2": 109.05
        },
        {
            "xValue": "Aug 2019",
            "yValue0": 107.45,
            "yValue1": 112.91,
            "yValue2": 109.19
        },
        {
            "xValue": "Sep 2019",
            "yValue0": 107.15,
            "yValue1": 112.84,
            "yValue2": 109.38
        },
        {
            "xValue": "Oct 2019",
            "yValue0": 107.64,
            "yValue1": 112.97,
            "yValue2": 109.51
        },
        {
            "xValue": "Nov 2019",
            "yValue0": 107.95,
            "yValue1": 113.14,
            "yValue2": 109.69
        },
        {
            "xValue": "Dec 2019",
            "yValue0": 108.09,
            "yValue1": 113.30,
            "yValue2": 109.83
        },
        {
            "xValue": "Jan 2020",
            "yValue0": 108.44,
            "yValue1": 113.78,
            "yValue2": 110.02
        },
        {
            "xValue": "Feb 2020",
            "yValue0": 108.75,
            "yValue1": 113.82,
            "yValue2": 110.20
        }
    ],
});