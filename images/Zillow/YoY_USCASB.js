var chart = AmCharts.makeChart("YoY_USCASB" , { 
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
        "text": "Zillow Home Value Index (ZHVI)",
        "size": 20 
    }],
    "gridAboveGraphs": true, 
    "startDuration": 1, 
    "valueAxes": [{
        "gridAlpha": 0.07,
        "axisAlpha": 1,
        "position": "left",
        "title": "YoY Growth Rate (%)"
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
            "xValue": "Apr 1997",
            "yValue0": 7.41,
            "yValue1": -0.25,
            "yValue2": 2.39
        },
        {
            "xValue": "May 1997",
            "yValue0": 7.64,
            "yValue1": 0.00,
            "yValue2": 2.68
        },
        {
            "xValue": "Jun 1997",
            "yValue0": 7.66,
            "yValue1": 0.43,
            "yValue2": 2.98
        },
        {
            "xValue": "Jul 1997",
            "yValue0": 7.57,
            "yValue1": 0.86,
            "yValue2": 3.28
        },
        {
            "xValue": "Aug 1997",
            "yValue0": 7.27,
            "yValue1": 1.30,
            "yValue2": 3.67
        },
        {
            "xValue": "Sep 1997",
            "yValue0": 6.91,
            "yValue1": 1.79,
            "yValue2": 3.86
        },
        {
            "xValue": "Oct 1997",
            "yValue0": 6.72,
            "yValue1": 2.35,
            "yValue2": 4.05
        },
        {
            "xValue": "Nov 1997",
            "yValue0": 6.73,
            "yValue1": 2.97,
            "yValue2": 4.24
        },
        {
            "xValue": "Dec 1997",
            "yValue0": 6.94,
            "yValue1": 3.71,
            "yValue2": 4.42
        },
        {
            "xValue": "Jan 1998",
            "yValue0": 7.34,
            "yValue1": 4.50,
            "yValue2": 4.51
        },
        {
            "xValue": "Feb 1998",
            "yValue0": 7.78,
            "yValue1": 5.23,
            "yValue2": 4.69
        },
        {
            "xValue": "Mar 1998",
            "yValue0": 8.28,
            "yValue1": 6.03,
            "yValue2": 4.87
        },
        {
            "xValue": "Apr 1998",
            "yValue0": 8.72,
            "yValue1": 6.70,
            "yValue2": 5.05
        },
        {
            "xValue": "May 1998",
            "yValue0": 9.06,
            "yValue1": 7.38,
            "yValue2": 5.32
        },
        {
            "xValue": "Jun 1998",
            "yValue0": 9.45,
            "yValue1": 7.79,
            "yValue2": 5.60
        },
        {
            "xValue": "Jul 1998",
            "yValue0": 9.90,
            "yValue1": 8.08,
            "yValue2": 5.67
        },
        {
            "xValue": "Aug 1998",
            "yValue0": 10.45,
            "yValue1": 8.30,
            "yValue2": 5.84
        },
        {
            "xValue": "Sep 1998",
            "yValue0": 11.05,
            "yValue1": 8.38,
            "yValue2": 6.01
        },
        {
            "xValue": "Oct 1998",
            "yValue0": 11.53,
            "yValue1": 8.40,
            "yValue2": 6.17
        },
        {
            "xValue": "Nov 1998",
            "yValue0": 11.90,
            "yValue1": 8.23,
            "yValue2": 6.24
        },
        {
            "xValue": "Dec 1998",
            "yValue0": 12.03,
            "yValue1": 8.10,
            "yValue2": 6.31
        },
        {
            "xValue": "Jan 1999",
            "yValue0": 11.94,
            "yValue1": 7.85,
            "yValue2": 6.28
        },
        {
            "xValue": "Feb 1999",
            "yValue0": 11.76,
            "yValue1": 7.72,
            "yValue2": 6.16
        },
        {
            "xValue": "Mar 1999",
            "yValue0": 11.63,
            "yValue1": 7.60,
            "yValue2": 6.13
        },
        {
            "xValue": "Apr 1999",
            "yValue0": 11.74,
            "yValue1": 7.61,
            "yValue2": 6.19
        },
        {
            "xValue": "May 1999",
            "yValue0": 11.99,
            "yValue1": 7.67,
            "yValue2": 6.07
        },
        {
            "xValue": "Jun 1999",
            "yValue0": 12.38,
            "yValue1": 7.91,
            "yValue2": 6.12
        },
        {
            "xValue": "Jul 1999",
            "yValue0": 12.80,
            "yValue1": 8.21,
            "yValue2": 6.28
        },
        {
            "xValue": "Aug 1999",
            "yValue0": 13.32,
            "yValue1": 8.62,
            "yValue2": 6.24
        },
        {
            "xValue": "Sep 1999",
            "yValue0": 13.86,
            "yValue1": 9.14,
            "yValue2": 6.38
        },
        {
            "xValue": "Oct 1999",
            "yValue0": 14.43,
            "yValue1": 9.76,
            "yValue2": 6.44
        },
        {
            "xValue": "Nov 1999",
            "yValue0": 14.99,
            "yValue1": 10.49,
            "yValue2": 6.68
        },
        {
            "xValue": "Dec 1999",
            "yValue0": 15.56,
            "yValue1": 11.18,
            "yValue2": 6.82
        },
        {
            "xValue": "Jan 2000",
            "yValue0": 16.11,
            "yValue1": 11.98,
            "yValue2": 7.05
        },
        {
            "xValue": "Feb 2000",
            "yValue0": 16.57,
            "yValue1": 12.60,
            "yValue2": 7.47
        },
        {
            "xValue": "Mar 2000",
            "yValue0": 16.86,
            "yValue1": 13.32,
            "yValue2": 7.61
        },
        {
            "xValue": "Apr 2000",
            "yValue0": 16.88,
            "yValue1": 13.98,
            "yValue2": 7.57
        },
        {
            "xValue": "May 2000",
            "yValue0": 16.76,
            "yValue1": 14.62,
            "yValue2": 7.63
        },
        {
            "xValue": "Jun 2000",
            "yValue0": 16.60,
            "yValue1": 15.14,
            "yValue2": 7.49
        },
        {
            "xValue": "Jul 2000",
            "yValue0": 16.36,
            "yValue1": 15.70,
            "yValue2": 7.28
        },
        {
            "xValue": "Aug 2000",
            "yValue0": 16.12,
            "yValue1": 16.03,
            "yValue2": 7.06
        },
        {
            "xValue": "Sep 2000",
            "yValue0": 15.87,
            "yValue1": 16.23,
            "yValue2": 6.68
        },
        {
            "xValue": "Oct 2000",
            "yValue0": 15.66,
            "yValue1": 16.26,
            "yValue2": 6.47
        },
        {
            "xValue": "Nov 2000",
            "yValue0": 15.48,
            "yValue1": 16.17,
            "yValue2": 6.18
        },
        {
            "xValue": "Dec 2000",
            "yValue0": 15.33,
            "yValue1": 15.91,
            "yValue2": 6.05
        },
        {
            "xValue": "Jan 2001",
            "yValue0": 15.21,
            "yValue1": 15.53,
            "yValue2": 5.93
        },
        {
            "xValue": "Feb 2001",
            "yValue0": 15.35,
            "yValue1": 15.24,
            "yValue2": 5.72
        },
        {
            "xValue": "Mar 2001",
            "yValue0": 15.72,
            "yValue1": 14.90,
            "yValue2": 5.61
        },
        {
            "xValue": "Apr 2001",
            "yValue0": 16.31,
            "yValue1": 14.52,
            "yValue2": 5.66
        },
        {
            "xValue": "May 2001",
            "yValue0": 17.00,
            "yValue1": 14.10,
            "yValue2": 5.64
        },
        {
            "xValue": "Jun 2001",
            "yValue0": 17.70,
            "yValue1": 13.74,
            "yValue2": 5.53
        },
        {
            "xValue": "Jul 2001",
            "yValue0": 18.47,
            "yValue1": 13.30,
            "yValue2": 5.59
        },
        {
            "xValue": "Aug 2001",
            "yValue0": 19.14,
            "yValue1": 12.96,
            "yValue2": 5.56
        },
        {
            "xValue": "Sep 2001",
            "yValue0": 19.66,
            "yValue1": 12.64,
            "yValue2": 5.63
        },
        {
            "xValue": "Oct 2001",
            "yValue0": 20.02,
            "yValue1": 12.46,
            "yValue2": 5.68
        },
        {
            "xValue": "Nov 2001",
            "yValue0": 20.16,
            "yValue1": 12.32,
            "yValue2": 5.82
        },
        {
            "xValue": "Dec 2001",
            "yValue0": 20.08,
            "yValue1": 12.18,
            "yValue2": 5.79
        },
        {
            "xValue": "Jan 2002",
            "yValue0": 19.77,
            "yValue1": 12.14,
            "yValue2": 5.75
        },
        {
            "xValue": "Feb 2002",
            "yValue0": 19.22,
            "yValue1": 12.13,
            "yValue2": 5.72
        },
        {
            "xValue": "Mar 2002",
            "yValue0": 18.47,
            "yValue1": 12.22,
            "yValue2": 5.85
        },
        {
            "xValue": "Apr 2002",
            "yValue0": 17.58,
            "yValue1": 12.39,
            "yValue2": 5.74
        },
        {
            "xValue": "May 2002",
            "yValue0": 16.55,
            "yValue1": 12.64,
            "yValue2": 5.79
        },
        {
            "xValue": "Jun 2002",
            "yValue0": 15.53,
            "yValue1": 12.97,
            "yValue2": 5.92
        },
        {
            "xValue": "Jul 2002",
            "yValue0": 14.59,
            "yValue1": 13.41,
            "yValue2": 5.90
        },
        {
            "xValue": "Aug 2002",
            "yValue0": 13.80,
            "yValue1": 13.97,
            "yValue2": 6.02
        },
        {
            "xValue": "Sep 2002",
            "yValue0": 13.21,
            "yValue1": 14.55,
            "yValue2": 6.15
        },
        {
            "xValue": "Oct 2002",
            "yValue0": 12.88,
            "yValue1": 15.16,
            "yValue2": 6.27
        },
        {
            "xValue": "Nov 2002",
            "yValue0": 12.76,
            "yValue1": 15.74,
            "yValue2": 6.39
        },
        {
            "xValue": "Dec 2002",
            "yValue0": 12.84,
            "yValue1": 16.27,
            "yValue2": 6.43
        },
        {
            "xValue": "Jan 2003",
            "yValue0": 13.08,
            "yValue1": 16.63,
            "yValue2": 6.47
        },
        {
            "xValue": "Feb 2003",
            "yValue0": 13.41,
            "yValue1": 16.98,
            "yValue2": 6.44
        },
        {
            "xValue": "Mar 2003",
            "yValue0": 13.98,
            "yValue1": 17.35,
            "yValue2": 6.40
        },
        {
            "xValue": "Apr 2003",
            "yValue0": 14.72,
            "yValue1": 17.71,
            "yValue2": 6.52
        },
        {
            "xValue": "May 2003",
            "yValue0": 15.61,
            "yValue1": 18.04,
            "yValue2": 6.56
        },
        {
            "xValue": "Jun 2003",
            "yValue0": 16.59,
            "yValue1": 18.36,
            "yValue2": 6.67
        },
        {
            "xValue": "Jul 2003",
            "yValue0": 17.52,
            "yValue1": 18.73,
            "yValue2": 6.85
        },
        {
            "xValue": "Aug 2003",
            "yValue0": 18.34,
            "yValue1": 18.99,
            "yValue2": 6.96
        },
        {
            "xValue": "Sep 2003",
            "yValue0": 18.96,
            "yValue1": 19.35,
            "yValue2": 7.14
        },
        {
            "xValue": "Oct 2003",
            "yValue0": 19.32,
            "yValue1": 19.61,
            "yValue2": 7.24
        },
        {
            "xValue": "Nov 2003",
            "yValue0": 19.53,
            "yValue1": 19.85,
            "yValue2": 7.40
        },
        {
            "xValue": "Dec 2003",
            "yValue0": 19.67,
            "yValue1": 20.19,
            "yValue2": 7.57
        },
        {
            "xValue": "Jan 2004",
            "yValue0": 19.88,
            "yValue1": 20.76,
            "yValue2": 7.80
        },
        {
            "xValue": "Feb 2004",
            "yValue0": 20.14,
            "yValue1": 21.44,
            "yValue2": 8.18
        },
        {
            "xValue": "Mar 2004",
            "yValue0": 20.35,
            "yValue1": 22.27,
            "yValue2": 8.54
        },
        {
            "xValue": "Apr 2004",
            "yValue0": 20.51,
            "yValue1": 23.29,
            "yValue2": 8.84
        },
        {
            "xValue": "May 2004",
            "yValue0": 20.71,
            "yValue1": 24.40,
            "yValue2": 9.26
        },
        {
            "xValue": "Jun 2004",
            "yValue0": 21.11,
            "yValue1": 25.45,
            "yValue2": 9.61
        },
        {
            "xValue": "Jul 2004",
            "yValue0": 21.74,
            "yValue1": 26.27,
            "yValue2": 10.02
        },
        {
            "xValue": "Aug 2004",
            "yValue0": 22.57,
            "yValue1": 26.87,
            "yValue2": 10.49
        },
        {
            "xValue": "Sep 2004",
            "yValue0": 23.62,
            "yValue1": 27.12,
            "yValue2": 10.75
        },
        {
            "xValue": "Oct 2004",
            "yValue0": 24.73,
            "yValue1": 27.17,
            "yValue2": 10.94
        },
        {
            "xValue": "Nov 2004",
            "yValue0": 25.57,
            "yValue1": 27.03,
            "yValue2": 10.99
        },
        {
            "xValue": "Dec 2004",
            "yValue0": 25.92,
            "yValue1": 26.70,
            "yValue2": 11.04
        },
        {
            "xValue": "Jan 2005",
            "yValue0": 25.74,
            "yValue1": 26.18,
            "yValue2": 10.95
        },
        {
            "xValue": "Feb 2005",
            "yValue0": 25.18,
            "yValue1": 25.48,
            "yValue2": 10.80
        },
        {
            "xValue": "Mar 2005",
            "yValue0": 24.45,
            "yValue1": 24.57,
            "yValue2": 10.64
        },
        {
            "xValue": "Apr 2005",
            "yValue0": 23.55,
            "yValue1": 23.45,
            "yValue2": 10.62
        },
        {
            "xValue": "May 2005",
            "yValue0": 22.37,
            "yValue1": 22.12,
            "yValue2": 10.58
        },
        {
            "xValue": "Jun 2005",
            "yValue0": 20.69,
            "yValue1": 20.77,
            "yValue2": 10.55
        },
        {
            "xValue": "Jul 2005",
            "yValue0": 18.44,
            "yValue1": 19.42,
            "yValue2": 10.50
        },
        {
            "xValue": "Aug 2005",
            "yValue0": 15.74,
            "yValue1": 18.10,
            "yValue2": 10.40
        },
        {
            "xValue": "Sep 2005",
            "yValue0": 12.81,
            "yValue1": 16.93,
            "yValue2": 10.36
        },
        {
            "xValue": "Oct 2005",
            "yValue0": 9.93,
            "yValue1": 15.86,
            "yValue2": 10.34
        },
        {
            "xValue": "Nov 2005",
            "yValue0": 7.40,
            "yValue1": 14.83,
            "yValue2": 10.25
        },
        {
            "xValue": "Dec 2005",
            "yValue0": 5.30,
            "yValue1": 13.82,
            "yValue2": 10.23
        },
        {
            "xValue": "Jan 2006",
            "yValue0": 3.63,
            "yValue1": 12.79,
            "yValue2": 10.22
        },
        {
            "xValue": "Feb 2006",
            "yValue0": 2.24,
            "yValue1": 11.79,
            "yValue2": 10.15
        },
        {
            "xValue": "Mar 2006",
            "yValue0": 0.88,
            "yValue1": 10.76,
            "yValue2": 10.02
        },
        {
            "xValue": "Apr 2006",
            "yValue0": -0.52,
            "yValue1": 9.70,
            "yValue2": 9.82
        },
        {
            "xValue": "May 2006",
            "yValue0": -1.80,
            "yValue1": 8.57,
            "yValue2": 9.40
        },
        {
            "xValue": "Jun 2006",
            "yValue0": -2.89,
            "yValue1": 7.38,
            "yValue2": 9.04
        },
        {
            "xValue": "Jul 2006",
            "yValue0": -3.90,
            "yValue1": 6.08,
            "yValue2": 8.52
        },
        {
            "xValue": "Aug 2006",
            "yValue0": -4.88,
            "yValue1": 4.67,
            "yValue2": 7.89
        },
        {
            "xValue": "Sep 2006",
            "yValue0": -5.90,
            "yValue1": 3.26,
            "yValue2": 7.23
        },
        {
            "xValue": "Oct 2006",
            "yValue0": -6.90,
            "yValue1": 1.91,
            "yValue2": 6.58
        },
        {
            "xValue": "Nov 2006",
            "yValue0": -7.77,
            "yValue1": 0.72,
            "yValue2": 5.90
        },
        {
            "xValue": "Dec 2006",
            "yValue0": -8.37,
            "yValue1": -0.36,
            "yValue2": 5.22
        },
        {
            "xValue": "Jan 2007",
            "yValue0": -8.66,
            "yValue1": -1.32,
            "yValue2": 4.61
        },
        {
            "xValue": "Feb 2007",
            "yValue0": -8.73,
            "yValue1": -2.25,
            "yValue2": 4.06
        },
        {
            "xValue": "Mar 2007",
            "yValue0": -8.73,
            "yValue1": -3.24,
            "yValue2": 3.52
        },
        {
            "xValue": "Apr 2007",
            "yValue0": -8.71,
            "yValue1": -4.25,
            "yValue2": 3.03
        },
        {
            "xValue": "May 2007",
            "yValue0": -8.72,
            "yValue1": -5.19,
            "yValue2": 2.56
        },
        {
            "xValue": "Jun 2007",
            "yValue0": -8.83,
            "yValue1": -6.07,
            "yValue2": 1.73
        },
        {
            "xValue": "Jul 2007",
            "yValue0": -8.96,
            "yValue1": -6.93,
            "yValue2": 0.86
        },
        {
            "xValue": "Aug 2007",
            "yValue0": -9.03,
            "yValue1": -7.76,
            "yValue2": 0.10
        },
        {
            "xValue": "Sep 2007",
            "yValue0": -8.95,
            "yValue1": -8.58,
            "yValue2": -0.50
        },
        {
            "xValue": "Oct 2007",
            "yValue0": -8.93,
            "yValue1": -9.45,
            "yValue2": -1.21
        },
        {
            "xValue": "Nov 2007",
            "yValue0": -9.27,
            "yValue1": -10.37,
            "yValue2": -1.81
        },
        {
            "xValue": "Dec 2007",
            "yValue0": -10.24,
            "yValue1": -11.43,
            "yValue2": -2.46
        },
        {
            "xValue": "Jan 2008",
            "yValue0": -11.74,
            "yValue1": -12.60,
            "yValue2": -3.20
        },
        {
            "xValue": "Feb 2008",
            "yValue0": -13.41,
            "yValue1": -13.89,
            "yValue2": -4.00
        },
        {
            "xValue": "Mar 2008",
            "yValue0": -14.97,
            "yValue1": -15.30,
            "yValue2": -4.85
        },
        {
            "xValue": "Apr 2008",
            "yValue0": -16.31,
            "yValue1": -16.86,
            "yValue2": -5.79
        },
        {
            "xValue": "May 2008",
            "yValue0": -17.39,
            "yValue1": -18.38,
            "yValue2": -6.73
        },
        {
            "xValue": "Jun 2008",
            "yValue0": -18.20,
            "yValue1": -19.75,
            "yValue2": -7.45
        },
        {
            "xValue": "Jul 2008",
            "yValue0": -18.60,
            "yValue1": -20.65,
            "yValue2": -7.93
        },
        {
            "xValue": "Aug 2008",
            "yValue0": -18.57,
            "yValue1": -21.04,
            "yValue2": -8.42
        },
        {
            "xValue": "Sep 2008",
            "yValue0": -18.27,
            "yValue1": -21.10,
            "yValue2": -8.95
        },
        {
            "xValue": "Oct 2008",
            "yValue0": -17.81,
            "yValue1": -21.10,
            "yValue2": -9.25
        },
        {
            "xValue": "Nov 2008",
            "yValue0": -17.07,
            "yValue1": -21.01,
            "yValue2": -9.56
        },
        {
            "xValue": "Dec 2008",
            "yValue0": -15.98,
            "yValue1": -20.76,
            "yValue2": -9.76
        },
        {
            "xValue": "Jan 2009",
            "yValue0": -14.65,
            "yValue1": -20.39,
            "yValue2": -9.83
        },
        {
            "xValue": "Feb 2009",
            "yValue0": -13.33,
            "yValue1": -19.91,
            "yValue2": -9.85
        },
        {
            "xValue": "Mar 2009",
            "yValue0": -12.20,
            "yValue1": -19.32,
            "yValue2": -9.87
        },
        {
            "xValue": "Apr 2009",
            "yValue0": -11.26,
            "yValue1": -18.62,
            "yValue2": -9.90
        },
        {
            "xValue": "May 2009",
            "yValue0": -10.47,
            "yValue1": -17.96,
            "yValue2": -9.89
        },
        {
            "xValue": "Jun 2009",
            "yValue0": -9.82,
            "yValue1": -17.12,
            "yValue2": -9.89
        },
        {
            "xValue": "Jul 2009",
            "yValue0": -9.36,
            "yValue1": -16.04,
            "yValue2": -9.65
        },
        {
            "xValue": "Aug 2009",
            "yValue0": -8.88,
            "yValue1": -14.92,
            "yValue2": -9.36
        },
        {
            "xValue": "Sep 2009",
            "yValue0": -8.14,
            "yValue1": -13.79,
            "yValue2": -8.89
        },
        {
            "xValue": "Oct 2009",
            "yValue0": -7.10,
            "yValue1": -12.44,
            "yValue2": -8.46
        },
        {
            "xValue": "Nov 2009",
            "yValue0": -6.11,
            "yValue1": -11.07,
            "yValue2": -7.85
        },
        {
            "xValue": "Dec 2009",
            "yValue0": -4.83,
            "yValue1": -9.63,
            "yValue2": -7.18
        },
        {
            "xValue": "Jan 2010",
            "yValue0": -3.78,
            "yValue1": -8.22,
            "yValue2": -6.48
        },
        {
            "xValue": "Feb 2010",
            "yValue0": -3.42,
            "yValue1": -6.86,
            "yValue2": -5.66
        },
        {
            "xValue": "Mar 2010",
            "yValue0": -2.44,
            "yValue1": -5.53,
            "yValue2": -5.13
        },
        {
            "xValue": "Apr 2010",
            "yValue0": -0.31,
            "yValue1": -3.90,
            "yValue2": -4.82
        },
        {
            "xValue": "May 2010",
            "yValue0": 1.65,
            "yValue1": -1.96,
            "yValue2": -4.21
        },
        {
            "xValue": "Jun 2010",
            "yValue0": 2.58,
            "yValue1": -0.50,
            "yValue2": -3.24
        },
        {
            "xValue": "Jul 2010",
            "yValue0": 3.33,
            "yValue1": -0.06,
            "yValue2": -2.90
        },
        {
            "xValue": "Aug 2010",
            "yValue0": 3.76,
            "yValue1": -0.06,
            "yValue2": -2.79
        },
        {
            "xValue": "Sep 2010",
            "yValue0": 3.28,
            "yValue1": -0.45,
            "yValue2": -2.93
        },
        {
            "xValue": "Oct 2010",
            "yValue0": 1.59,
            "yValue1": -1.20,
            "yValue2": -3.12
        },
        {
            "xValue": "Nov 2010",
            "yValue0": -0.43,
            "yValue1": -2.07,
            "yValue2": -3.37
        },
        {
            "xValue": "Dec 2010",
            "yValue0": -3.12,
            "yValue1": -3.11,
            "yValue2": -3.93
        },
        {
            "xValue": "Jan 2011",
            "yValue0": -5.58,
            "yValue1": -4.15,
            "yValue2": -4.72
        },
        {
            "xValue": "Feb 2011",
            "yValue0": -6.32,
            "yValue1": -4.92,
            "yValue2": -5.45
        },
        {
            "xValue": "Mar 2011",
            "yValue0": -6.93,
            "yValue1": -5.40,
            "yValue2": -5.71
        },
        {
            "xValue": "Apr 2011",
            "yValue0": -9.41,
            "yValue1": -6.03,
            "yValue2": -5.62
        },
        {
            "xValue": "May 2011",
            "yValue0": -11.86,
            "yValue1": -6.79,
            "yValue2": -5.70
        },
        {
            "xValue": "Jun 2011",
            "yValue0": -12.43,
            "yValue1": -7.30,
            "yValue2": -6.07
        },
        {
            "xValue": "Jul 2011",
            "yValue0": -12.58,
            "yValue1": -7.48,
            "yValue2": -6.22
        },
        {
            "xValue": "Aug 2011",
            "yValue0": -13.26,
            "yValue1": -7.72,
            "yValue2": -6.06
        },
        {
            "xValue": "Sep 2011",
            "yValue0": -14.12,
            "yValue1": -7.79,
            "yValue2": -5.84
        },
        {
            "xValue": "Oct 2011",
            "yValue0": -14.16,
            "yValue1": -7.69,
            "yValue2": -5.50
        },
        {
            "xValue": "Nov 2011",
            "yValue0": -13.09,
            "yValue1": -7.44,
            "yValue2": -5.20
        },
        {
            "xValue": "Dec 2011",
            "yValue0": -11.16,
            "yValue1": -6.92,
            "yValue2": -4.73
        },
        {
            "xValue": "Jan 2012",
            "yValue0": -9.56,
            "yValue1": -6.32,
            "yValue2": -4.19
        },
        {
            "xValue": "Feb 2012",
            "yValue0": -9.04,
            "yValue1": -5.65,
            "yValue2": -3.63
        },
        {
            "xValue": "Mar 2012",
            "yValue0": -8.87,
            "yValue1": -4.73,
            "yValue2": -3.06
        },
        {
            "xValue": "Apr 2012",
            "yValue0": -7.39,
            "yValue1": -3.49,
            "yValue2": -2.42
        },
        {
            "xValue": "May 2012",
            "yValue0": -5.51,
            "yValue1": -2.14,
            "yValue2": -1.77
        },
        {
            "xValue": "Jun 2012",
            "yValue0": -4.60,
            "yValue1": -0.84,
            "yValue2": -1.12
        },
        {
            "xValue": "Jul 2012",
            "yValue0": -3.76,
            "yValue1": 0.42,
            "yValue2": -0.40
        },
        {
            "xValue": "Aug 2012",
            "yValue0": -2.33,
            "yValue1": 1.82,
            "yValue2": 0.27
        },
        {
            "xValue": "Sep 2012",
            "yValue0": -0.26,
            "yValue1": 3.34,
            "yValue2": 1.00
        },
        {
            "xValue": "Oct 2012",
            "yValue0": 2.19,
            "yValue1": 5.01,
            "yValue2": 1.54
        },
        {
            "xValue": "Nov 2012",
            "yValue0": 3.50,
            "yValue1": 6.78,
            "yValue2": 2.01
        },
        {
            "xValue": "Dec 2012",
            "yValue0": 4.51,
            "yValue1": 8.43,
            "yValue2": 2.55
        },
        {
            "xValue": "Jan 2013",
            "yValue0": 6.80,
            "yValue1": 9.87,
            "yValue2": 3.29
        },
        {
            "xValue": "Feb 2013",
            "yValue0": 9.20,
            "yValue1": 11.40,
            "yValue2": 3.70
        },
        {
            "xValue": "Mar 2013",
            "yValue0": 11.02,
            "yValue1": 13.08,
            "yValue2": 4.30
        },
        {
            "xValue": "Apr 2013",
            "yValue0": 13.04,
            "yValue1": 14.68,
            "yValue2": 4.76
        },
        {
            "xValue": "May 2013",
            "yValue0": 14.84,
            "yValue1": 16.16,
            "yValue2": 5.08
        },
        {
            "xValue": "Jun 2013",
            "yValue0": 15.90,
            "yValue1": 17.73,
            "yValue2": 5.47
        },
        {
            "xValue": "Jul 2013",
            "yValue0": 16.52,
            "yValue1": 19.25,
            "yValue2": 5.99
        },
        {
            "xValue": "Aug 2013",
            "yValue0": 17.49,
            "yValue1": 20.33,
            "yValue2": 6.30
        },
        {
            "xValue": "Sep 2013",
            "yValue0": 18.77,
            "yValue1": 20.76,
            "yValue2": 6.54
        },
        {
            "xValue": "Oct 2013",
            "yValue0": 19.50,
            "yValue1": 20.58,
            "yValue2": 6.71
        },
        {
            "xValue": "Nov 2013",
            "yValue0": 19.98,
            "yValue1": 20.08,
            "yValue2": 6.82
        },
        {
            "xValue": "Dec 2013",
            "yValue0": 19.83,
            "yValue1": 19.46,
            "yValue2": 6.86
        },
        {
            "xValue": "Jan 2014",
            "yValue0": 19.12,
            "yValue1": 18.97,
            "yValue2": 6.96
        },
        {
            "xValue": "Feb 2014",
            "yValue0": 18.75,
            "yValue1": 18.35,
            "yValue2": 7.07
        },
        {
            "xValue": "Mar 2014",
            "yValue0": 17.76,
            "yValue1": 17.14,
            "yValue2": 6.83
        },
        {
            "xValue": "Apr 2014",
            "yValue0": 15.36,
            "yValue1": 15.55,
            "yValue2": 6.66
        },
        {
            "xValue": "May 2014",
            "yValue0": 13.48,
            "yValue1": 13.88,
            "yValue2": 6.49
        },
        {
            "xValue": "Jun 2014",
            "yValue0": 12.86,
            "yValue1": 12.17,
            "yValue2": 6.20
        },
        {
            "xValue": "Jul 2014",
            "yValue0": 12.28,
            "yValue1": 10.58,
            "yValue2": 5.90
        },
        {
            "xValue": "Aug 2014",
            "yValue0": 11.29,
            "yValue1": 9.30,
            "yValue2": 5.68
        },
        {
            "xValue": "Sep 2014",
            "yValue0": 9.58,
            "yValue1": 8.37,
            "yValue2": 5.39
        },
        {
            "xValue": "Oct 2014",
            "yValue0": 7.69,
            "yValue1": 7.88,
            "yValue2": 5.18
        },
        {
            "xValue": "Nov 2014",
            "yValue0": 6.79,
            "yValue1": 7.51,
            "yValue2": 5.10
        },
        {
            "xValue": "Dec 2014",
            "yValue0": 6.54,
            "yValue1": 7.25,
            "yValue2": 5.02
        },
        {
            "xValue": "Jan 2015",
            "yValue0": 5.65,
            "yValue1": 7.12,
            "yValue2": 4.87
        },
        {
            "xValue": "Feb 2015",
            "yValue0": 4.66,
            "yValue1": 6.91,
            "yValue2": 4.85
        },
        {
            "xValue": "Mar 2015",
            "yValue0": 4.88,
            "yValue1": 6.68,
            "yValue2": 4.89
        },
        {
            "xValue": "Apr 2015",
            "yValue0": 5.62,
            "yValue1": 6.56,
            "yValue2": 4.80
        },
        {
            "xValue": "May 2015",
            "yValue0": 5.58,
            "yValue1": 6.49,
            "yValue2": 4.90
        },
        {
            "xValue": "Jun 2015",
            "yValue0": 5.03,
            "yValue1": 6.50,
            "yValue2": 5.00
        },
        {
            "xValue": "Jul 2015",
            "yValue0": 4.90,
            "yValue1": 6.57,
            "yValue2": 5.04
        },
        {
            "xValue": "Aug 2015",
            "yValue0": 5.09,
            "yValue1": 6.68,
            "yValue2": 5.02
        },
        {
            "xValue": "Sep 2015",
            "yValue0": 5.60,
            "yValue1": 7.00,
            "yValue2": 5.06
        },
        {
            "xValue": "Oct 2015",
            "yValue0": 5.66,
            "yValue1": 7.16,
            "yValue2": 5.16
        },
        {
            "xValue": "Nov 2015",
            "yValue0": 5.06,
            "yValue1": 7.27,
            "yValue2": 5.32
        },
        {
            "xValue": "Dec 2015",
            "yValue0": 4.59,
            "yValue1": 7.40,
            "yValue2": 5.53
        },
        {
            "xValue": "Jan 2016",
            "yValue0": 5.00,
            "yValue1": 7.48,
            "yValue2": 5.63
        },
        {
            "xValue": "Feb 2016",
            "yValue0": 5.21,
            "yValue1": 7.24,
            "yValue2": 5.72
        },
        {
            "xValue": "Mar 2016",
            "yValue0": 5.19,
            "yValue1": 7.08,
            "yValue2": 5.81
        },
        {
            "xValue": "Apr 2016",
            "yValue0": 5.20,
            "yValue1": 7.01,
            "yValue2": 5.96
        },
        {
            "xValue": "May 2016",
            "yValue0": 5.58,
            "yValue1": 6.95,
            "yValue2": 6.04
        },
        {
            "xValue": "Jun 2016",
            "yValue0": 5.85,
            "yValue1": 6.84,
            "yValue2": 6.18
        },
        {
            "xValue": "Jul 2016",
            "yValue0": 5.39,
            "yValue1": 6.87,
            "yValue2": 6.15
        },
        {
            "xValue": "Aug 2016",
            "yValue0": 4.45,
            "yValue1": 7.02,
            "yValue2": 6.30
        },
        {
            "xValue": "Sep 2016",
            "yValue0": 3.99,
            "yValue1": 7.08,
            "yValue2": 6.49
        },
        {
            "xValue": "Oct 2016",
            "yValue0": 4.89,
            "yValue1": 7.31,
            "yValue2": 6.80
        },
        {
            "xValue": "Nov 2016",
            "yValue0": 5.85,
            "yValue1": 7.52,
            "yValue2": 6.83
        },
        {
            "xValue": "Dec 2016",
            "yValue0": 5.57,
            "yValue1": 7.58,
            "yValue2": 6.84
        },
        {
            "xValue": "Jan 2017",
            "yValue0": 4.32,
            "yValue1": 7.58,
            "yValue2": 7.03
        },
        {
            "xValue": "Feb 2017",
            "yValue0": 3.53,
            "yValue1": 7.76,
            "yValue2": 7.21
        },
        {
            "xValue": "Mar 2017",
            "yValue0": 2.89,
            "yValue1": 7.95,
            "yValue2": 7.28
        },
        {
            "xValue": "Apr 2017",
            "yValue0": 2.55,
            "yValue1": 8.10,
            "yValue2": 7.41
        },
        {
            "xValue": "May 2017",
            "yValue0": 2.24,
            "yValue1": 8.23,
            "yValue2": 7.52
        },
        {
            "xValue": "Jun 2017",
            "yValue0": 2.09,
            "yValue1": 8.41,
            "yValue2": 7.43
        },
        {
            "xValue": "Jul 2017",
            "yValue0": 2.32,
            "yValue1": 8.45,
            "yValue2": 7.44
        },
        {
            "xValue": "Aug 2017",
            "yValue0": 2.64,
            "yValue1": 8.32,
            "yValue2": 7.56
        },
        {
            "xValue": "Sep 2017",
            "yValue0": 2.70,
            "yValue1": 8.16,
            "yValue2": 7.62
        },
        {
            "xValue": "Oct 2017",
            "yValue0": 2.23,
            "yValue1": 8.03,
            "yValue2": 7.42
        },
        {
            "xValue": "Nov 2017",
            "yValue0": 1.77,
            "yValue1": 7.93,
            "yValue2": 7.43
        },
        {
            "xValue": "Dec 2017",
            "yValue0": 1.96,
            "yValue1": 7.92,
            "yValue2": 7.49
        },
        {
            "xValue": "Jan 2018",
            "yValue0": 2.74,
            "yValue1": 8.15,
            "yValue2": 7.54
        },
        {
            "xValue": "Feb 2018",
            "yValue0": 3.15,
            "yValue1": 8.45,
            "yValue2": 7.80
        },
        {
            "xValue": "Mar 2018",
            "yValue0": 3.29,
            "yValue1": 8.42,
            "yValue2": 8.00
        },
        {
            "xValue": "Apr 2018",
            "yValue0": 3.17,
            "yValue1": 8.08,
            "yValue2": 7.90
        },
        {
            "xValue": "May 2018",
            "yValue0": 3.17,
            "yValue1": 7.81,
            "yValue2": 7.75
        },
        {
            "xValue": "Jun 2018",
            "yValue0": 3.34,
            "yValue1": 7.48,
            "yValue2": 7.81
        },
        {
            "xValue": "Jul 2018",
            "yValue0": 3.63,
            "yValue1": 7.08,
            "yValue2": 7.82
        },
        {
            "xValue": "Aug 2018",
            "yValue0": 3.96,
            "yValue1": 6.80,
            "yValue2": 7.72
        },
        {
            "xValue": "Sep 2018",
            "yValue0": 4.05,
            "yValue1": 6.49,
            "yValue2": 7.57
        },
        {
            "xValue": "Oct 2018",
            "yValue0": 3.75,
            "yValue1": 6.02,
            "yValue2": 7.73
        },
        {
            "xValue": "Nov 2018",
            "yValue0": 3.48,
            "yValue1": 5.65,
            "yValue2": 7.74
        }
    ],
});