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
            "xValue": "Jan 1997",
            "yValue0": 1.09,
            "yValue1": -0.31,
            "yValue2": 1.94
        },
        {
            "xValue": "Feb 1997",
            "yValue0": 1.74,
            "yValue1": -0.12,
            "yValue2": 2.13
        },
        {
            "xValue": "Mar 1997",
            "yValue0": 1.74,
            "yValue1": 0.08,
            "yValue2": 2.31
        },
        {
            "xValue": "Apr 1997",
            "yValue0": 2.62,
            "yValue1": 0.55,
            "yValue2": 2.50
        },
        {
            "xValue": "May 1997",
            "yValue0": 3.19,
            "yValue1": 1.02,
            "yValue2": 2.67
        },
        {
            "xValue": "Jun 1997",
            "yValue0": 3.83,
            "yValue1": 1.48,
            "yValue2": 2.80
        },
        {
            "xValue": "Jul 1997",
            "yValue0": 4.86,
            "yValue1": 1.99,
            "yValue2": 2.95
        },
        {
            "xValue": "Aug 1997",
            "yValue0": 5.15,
            "yValue1": 2.48,
            "yValue2": 3.02
        },
        {
            "xValue": "Sep 1997",
            "yValue0": 5.38,
            "yValue1": 3.00,
            "yValue2": 3.10
        },
        {
            "xValue": "Oct 1997",
            "yValue0": 4.20,
            "yValue1": 3.38,
            "yValue2": 3.12
        },
        {
            "xValue": "Nov 1997",
            "yValue0": 4.26,
            "yValue1": 3.83,
            "yValue2": 3.20
        },
        {
            "xValue": "Dec 1997",
            "yValue0": 3.37,
            "yValue1": 4.30,
            "yValue2": 3.30
        },
        {
            "xValue": "Jan 1998",
            "yValue0": 4.86,
            "yValue1": 5.17,
            "yValue2": 3.66
        },
        {
            "xValue": "Feb 1998",
            "yValue0": 5.84,
            "yValue1": 6.10,
            "yValue2": 3.92
        },
        {
            "xValue": "Mar 1998",
            "yValue0": 7.97,
            "yValue1": 6.92,
            "yValue2": 4.15
        },
        {
            "xValue": "Apr 1998",
            "yValue0": 8.51,
            "yValue1": 7.40,
            "yValue2": 4.15
        },
        {
            "xValue": "May 1998",
            "yValue0": 8.94,
            "yValue1": 7.75,
            "yValue2": 4.18
        },
        {
            "xValue": "Jun 1998",
            "yValue0": 9.30,
            "yValue1": 8.09,
            "yValue2": 4.23
        },
        {
            "xValue": "Jul 1998",
            "yValue0": 9.21,
            "yValue1": 8.28,
            "yValue2": 4.29
        },
        {
            "xValue": "Aug 1998",
            "yValue0": 9.61,
            "yValue1": 8.50,
            "yValue2": 4.43
        },
        {
            "xValue": "Sep 1998",
            "yValue0": 10.07,
            "yValue1": 8.72,
            "yValue2": 4.60
        },
        {
            "xValue": "Oct 1998",
            "yValue0": 11.79,
            "yValue1": 9.04,
            "yValue2": 4.85
        },
        {
            "xValue": "Nov 1998",
            "yValue0": 12.54,
            "yValue1": 9.21,
            "yValue2": 4.95
        },
        {
            "xValue": "Dec 1998",
            "yValue0": 13.88,
            "yValue1": 9.19,
            "yValue2": 4.97
        },
        {
            "xValue": "Jan 1999",
            "yValue0": 12.84,
            "yValue1": 9.03,
            "yValue2": 4.76
        },
        {
            "xValue": "Feb 1999",
            "yValue0": 12.26,
            "yValue1": 8.81,
            "yValue2": 4.69
        },
        {
            "xValue": "Mar 1999",
            "yValue0": 10.82,
            "yValue1": 8.68,
            "yValue2": 4.68
        },
        {
            "xValue": "Apr 1999",
            "yValue0": 10.91,
            "yValue1": 8.61,
            "yValue2": 4.91
        },
        {
            "xValue": "May 1999",
            "yValue0": 11.35,
            "yValue1": 8.64,
            "yValue2": 5.09
        },
        {
            "xValue": "Jun 1999",
            "yValue0": 11.82,
            "yValue1": 8.78,
            "yValue2": 5.33
        },
        {
            "xValue": "Jul 1999",
            "yValue0": 12.24,
            "yValue1": 9.05,
            "yValue2": 5.55
        },
        {
            "xValue": "Aug 1999",
            "yValue0": 12.35,
            "yValue1": 9.15,
            "yValue2": 5.66
        },
        {
            "xValue": "Sep 1999",
            "yValue0": 12.42,
            "yValue1": 9.09,
            "yValue2": 5.67
        },
        {
            "xValue": "Oct 1999",
            "yValue0": 12.33,
            "yValue1": 9.11,
            "yValue2": 5.64
        },
        {
            "xValue": "Nov 1999",
            "yValue0": 12.57,
            "yValue1": 9.38,
            "yValue2": 5.77
        },
        {
            "xValue": "Dec 1999",
            "yValue0": 12.88,
            "yValue1": 9.86,
            "yValue2": 5.98
        },
        {
            "xValue": "Jan 2000",
            "yValue0": 13.90,
            "yValue1": 10.18,
            "yValue2": 6.26
        },
        {
            "xValue": "Feb 2000",
            "yValue0": 14.47,
            "yValue1": 10.41,
            "yValue2": 6.44
        },
        {
            "xValue": "Mar 2000",
            "yValue0": 15.17,
            "yValue1": 10.63,
            "yValue2": 6.58
        },
        {
            "xValue": "Apr 2000",
            "yValue0": 14.71,
            "yValue1": 11.02,
            "yValue2": 6.64
        },
        {
            "xValue": "May 2000",
            "yValue0": 14.14,
            "yValue1": 11.48,
            "yValue2": 6.72
        },
        {
            "xValue": "Jun 2000",
            "yValue0": 13.51,
            "yValue1": 11.84,
            "yValue2": 6.72
        },
        {
            "xValue": "Jul 2000",
            "yValue0": 13.46,
            "yValue1": 12.17,
            "yValue2": 6.70
        },
        {
            "xValue": "Aug 2000",
            "yValue0": 13.70,
            "yValue1": 12.69,
            "yValue2": 6.77
        },
        {
            "xValue": "Sep 2000",
            "yValue0": 13.86,
            "yValue1": 13.34,
            "yValue2": 6.93
        },
        {
            "xValue": "Oct 2000",
            "yValue0": 13.80,
            "yValue1": 13.80,
            "yValue2": 7.10
        },
        {
            "xValue": "Nov 2000",
            "yValue0": 13.71,
            "yValue1": 14.06,
            "yValue2": 7.19
        },
        {
            "xValue": "Dec 2000",
            "yValue0": 13.60,
            "yValue1": 14.22,
            "yValue2": 7.27
        },
        {
            "xValue": "Jan 2001",
            "yValue0": 13.32,
            "yValue1": 14.35,
            "yValue2": 7.33
        },
        {
            "xValue": "Feb 2001",
            "yValue0": 13.28,
            "yValue1": 14.58,
            "yValue2": 7.34
        },
        {
            "xValue": "Mar 2001",
            "yValue0": 13.32,
            "yValue1": 14.83,
            "yValue2": 7.34
        },
        {
            "xValue": "Apr 2001",
            "yValue0": 14.41,
            "yValue1": 15.05,
            "yValue2": 7.34
        },
        {
            "xValue": "May 2001",
            "yValue0": 15.51,
            "yValue1": 15.03,
            "yValue2": 7.34
        },
        {
            "xValue": "Jun 2001",
            "yValue0": 16.67,
            "yValue1": 14.80,
            "yValue2": 7.35
        },
        {
            "xValue": "Jul 2001",
            "yValue0": 17.30,
            "yValue1": 14.42,
            "yValue2": 7.34
        },
        {
            "xValue": "Aug 2001",
            "yValue0": 17.93,
            "yValue1": 13.94,
            "yValue2": 7.30
        },
        {
            "xValue": "Sep 2001",
            "yValue0": 18.53,
            "yValue1": 13.46,
            "yValue2": 7.24
        },
        {
            "xValue": "Oct 2001",
            "yValue0": 19.04,
            "yValue1": 13.07,
            "yValue2": 7.18
        },
        {
            "xValue": "Nov 2001",
            "yValue0": 18.90,
            "yValue1": 12.68,
            "yValue2": 7.08
        },
        {
            "xValue": "Dec 2001",
            "yValue0": 18.88,
            "yValue1": 12.29,
            "yValue2": 6.95
        },
        {
            "xValue": "Jan 2002",
            "yValue0": 18.81,
            "yValue1": 11.97,
            "yValue2": 6.83
        },
        {
            "xValue": "Feb 2002",
            "yValue0": 18.87,
            "yValue1": 11.70,
            "yValue2": 6.78
        },
        {
            "xValue": "Mar 2002",
            "yValue0": 18.61,
            "yValue1": 11.42,
            "yValue2": 6.75
        },
        {
            "xValue": "Apr 2002",
            "yValue0": 17.97,
            "yValue1": 11.14,
            "yValue2": 6.71
        },
        {
            "xValue": "May 2002",
            "yValue0": 17.23,
            "yValue1": 11.09,
            "yValue2": 6.67
        },
        {
            "xValue": "Jun 2002",
            "yValue0": 16.53,
            "yValue1": 11.39,
            "yValue2": 6.68
        },
        {
            "xValue": "Jul 2002",
            "yValue0": 15.85,
            "yValue1": 11.97,
            "yValue2": 6.74
        },
        {
            "xValue": "Aug 2002",
            "yValue0": 15.26,
            "yValue1": 12.64,
            "yValue2": 6.80
        },
        {
            "xValue": "Sep 2002",
            "yValue0": 14.84,
            "yValue1": 13.26,
            "yValue2": 6.85
        },
        {
            "xValue": "Oct 2002",
            "yValue0": 14.79,
            "yValue1": 13.83,
            "yValue2": 6.91
        },
        {
            "xValue": "Nov 2002",
            "yValue0": 15.57,
            "yValue1": 14.50,
            "yValue2": 7.01
        },
        {
            "xValue": "Dec 2002",
            "yValue0": 16.05,
            "yValue1": 15.21,
            "yValue2": 7.15
        },
        {
            "xValue": "Jan 2003",
            "yValue0": 16.80,
            "yValue1": 15.83,
            "yValue2": 7.28
        },
        {
            "xValue": "Feb 2003",
            "yValue0": 17.14,
            "yValue1": 16.22,
            "yValue2": 7.36
        },
        {
            "xValue": "Mar 2003",
            "yValue0": 17.98,
            "yValue1": 16.58,
            "yValue2": 7.43
        },
        {
            "xValue": "Apr 2003",
            "yValue0": 18.57,
            "yValue1": 16.84,
            "yValue2": 7.49
        },
        {
            "xValue": "May 2003",
            "yValue0": 19.45,
            "yValue1": 17.07,
            "yValue2": 7.56
        },
        {
            "xValue": "Jun 2003",
            "yValue0": 20.04,
            "yValue1": 16.89,
            "yValue2": 7.57
        },
        {
            "xValue": "Jul 2003",
            "yValue0": 20.73,
            "yValue1": 16.66,
            "yValue2": 7.56
        },
        {
            "xValue": "Aug 2003",
            "yValue0": 21.04,
            "yValue1": 16.48,
            "yValue2": 7.58
        },
        {
            "xValue": "Sep 2003",
            "yValue0": 21.20,
            "yValue1": 16.58,
            "yValue2": 7.66
        },
        {
            "xValue": "Oct 2003",
            "yValue0": 20.70,
            "yValue1": 16.66,
            "yValue2": 7.76
        },
        {
            "xValue": "Nov 2003",
            "yValue0": 19.56,
            "yValue1": 16.76,
            "yValue2": 7.83
        },
        {
            "xValue": "Dec 2003",
            "yValue0": 18.46,
            "yValue1": 16.81,
            "yValue2": 7.88
        },
        {
            "xValue": "Jan 2004",
            "yValue0": 18.03,
            "yValue1": 17.18,
            "yValue2": 7.98
        },
        {
            "xValue": "Feb 2004",
            "yValue0": 18.09,
            "yValue1": 17.81,
            "yValue2": 8.16
        },
        {
            "xValue": "Mar 2004",
            "yValue0": 17.72,
            "yValue1": 18.53,
            "yValue2": 8.40
        },
        {
            "xValue": "Apr 2004",
            "yValue0": 17.13,
            "yValue1": 19.29,
            "yValue2": 8.63
        },
        {
            "xValue": "May 2004",
            "yValue0": 16.31,
            "yValue1": 20.25,
            "yValue2": 8.91
        },
        {
            "xValue": "Jun 2004",
            "yValue0": 16.03,
            "yValue1": 21.72,
            "yValue2": 9.25
        },
        {
            "xValue": "Jul 2004",
            "yValue0": 16.09,
            "yValue1": 22.96,
            "yValue2": 9.64
        },
        {
            "xValue": "Aug 2004",
            "yValue0": 16.48,
            "yValue1": 23.84,
            "yValue2": 9.96
        },
        {
            "xValue": "Sep 2004",
            "yValue0": 17.18,
            "yValue1": 24.32,
            "yValue2": 10.21
        },
        {
            "xValue": "Oct 2004",
            "yValue0": 18.59,
            "yValue1": 24.79,
            "yValue2": 10.42
        },
        {
            "xValue": "Nov 2004",
            "yValue0": 20.36,
            "yValue1": 24.99,
            "yValue2": 10.63
        },
        {
            "xValue": "Dec 2004",
            "yValue0": 21.86,
            "yValue1": 25.22,
            "yValue2": 10.89
        },
        {
            "xValue": "Jan 2005",
            "yValue0": 21.44,
            "yValue1": 25.00,
            "yValue2": 11.13
        },
        {
            "xValue": "Feb 2005",
            "yValue0": 20.91,
            "yValue1": 24.82,
            "yValue2": 11.30
        },
        {
            "xValue": "Mar 2005",
            "yValue0": 20.67,
            "yValue1": 24.46,
            "yValue2": 11.39
        },
        {
            "xValue": "Apr 2005",
            "yValue0": 21.52,
            "yValue1": 24.17,
            "yValue2": 11.53
        },
        {
            "xValue": "May 2005",
            "yValue0": 22.14,
            "yValue1": 23.38,
            "yValue2": 11.62
        },
        {
            "xValue": "Jun 2005",
            "yValue0": 22.37,
            "yValue1": 22.17,
            "yValue2": 11.71
        },
        {
            "xValue": "Jul 2005",
            "yValue0": 21.59,
            "yValue1": 21.10,
            "yValue2": 11.75
        },
        {
            "xValue": "Aug 2005",
            "yValue0": 20.71,
            "yValue1": 20.32,
            "yValue2": 11.82
        },
        {
            "xValue": "Sep 2005",
            "yValue0": 19.51,
            "yValue1": 19.74,
            "yValue2": 11.89
        },
        {
            "xValue": "Oct 2005",
            "yValue0": 18.12,
            "yValue1": 19.10,
            "yValue2": 11.91
        },
        {
            "xValue": "Nov 2005",
            "yValue0": 16.44,
            "yValue1": 18.33,
            "yValue2": 11.87
        },
        {
            "xValue": "Dec 2005",
            "yValue0": 14.95,
            "yValue1": 17.41,
            "yValue2": 11.70
        },
        {
            "xValue": "Jan 2006",
            "yValue0": 14.59,
            "yValue1": 16.51,
            "yValue2": 11.41
        },
        {
            "xValue": "Feb 2006",
            "yValue0": 13.88,
            "yValue1": 15.35,
            "yValue2": 11.06
        },
        {
            "xValue": "Mar 2006",
            "yValue0": 13.03,
            "yValue1": 14.23,
            "yValue2": 10.71
        },
        {
            "xValue": "Apr 2006",
            "yValue0": 10.88,
            "yValue1": 12.88,
            "yValue2": 10.29
        },
        {
            "xValue": "May 2006",
            "yValue0": 9.13,
            "yValue1": 11.85,
            "yValue2": 9.82
        },
        {
            "xValue": "Jun 2006",
            "yValue0": 7.27,
            "yValue1": 10.71,
            "yValue2": 9.21
        },
        {
            "xValue": "Jul 2006",
            "yValue0": 6.10,
            "yValue1": 9.38,
            "yValue2": 8.51
        },
        {
            "xValue": "Aug 2006",
            "yValue0": 4.33,
            "yValue1": 7.86,
            "yValue2": 7.72
        },
        {
            "xValue": "Sep 2006",
            "yValue0": 2.31,
            "yValue1": 6.11,
            "yValue2": 6.85
        },
        {
            "xValue": "Oct 2006",
            "yValue0": -0.47,
            "yValue1": 4.44,
            "yValue2": 6.00
        },
        {
            "xValue": "Nov 2006",
            "yValue0": -2.88,
            "yValue1": 3.09,
            "yValue2": 5.17
        },
        {
            "xValue": "Dec 2006",
            "yValue0": -4.82,
            "yValue1": 1.90,
            "yValue2": 4.40
        },
        {
            "xValue": "Jan 2007",
            "yValue0": -5.87,
            "yValue1": 0.87,
            "yValue2": 3.73
        },
        {
            "xValue": "Feb 2007",
            "yValue0": -6.60,
            "yValue1": -0.12,
            "yValue2": 3.10
        },
        {
            "xValue": "Mar 2007",
            "yValue0": -7.49,
            "yValue1": -1.12,
            "yValue2": 2.48
        },
        {
            "xValue": "Apr 2007",
            "yValue0": -7.95,
            "yValue1": -1.96,
            "yValue2": 1.84
        },
        {
            "xValue": "May 2007",
            "yValue0": -8.92,
            "yValue1": -3.07,
            "yValue2": 1.17
        },
        {
            "xValue": "Jun 2007",
            "yValue0": -9.91,
            "yValue1": -4.01,
            "yValue2": 0.53
        },
        {
            "xValue": "Jul 2007",
            "yValue0": -11.07,
            "yValue1": -4.93,
            "yValue2": -0.09
        },
        {
            "xValue": "Aug 2007",
            "yValue0": -11.16,
            "yValue1": -5.75,
            "yValue2": -0.61
        },
        {
            "xValue": "Sep 2007",
            "yValue0": -11.48,
            "yValue1": -6.54,
            "yValue2": -1.09
        },
        {
            "xValue": "Oct 2007",
            "yValue0": -10.79,
            "yValue1": -7.47,
            "yValue2": -1.56
        },
        {
            "xValue": "Nov 2007",
            "yValue0": -10.25,
            "yValue1": -8.46,
            "yValue2": -2.08
        },
        {
            "xValue": "Dec 2007",
            "yValue0": -10.07,
            "yValue1": -9.61,
            "yValue2": -2.60
        },
        {
            "xValue": "Jan 2008",
            "yValue0": -11.81,
            "yValue1": -10.77,
            "yValue2": -3.19
        },
        {
            "xValue": "Feb 2008",
            "yValue0": -14.00,
            "yValue1": -12.20,
            "yValue2": -3.87
        },
        {
            "xValue": "Mar 2008",
            "yValue0": -15.59,
            "yValue1": -13.85,
            "yValue2": -4.60
        },
        {
            "xValue": "Apr 2008",
            "yValue0": -16.71,
            "yValue1": -15.67,
            "yValue2": -5.36
        },
        {
            "xValue": "May 2008",
            "yValue0": -17.51,
            "yValue1": -17.29,
            "yValue2": -6.02
        },
        {
            "xValue": "Jun 2008",
            "yValue0": -18.06,
            "yValue1": -18.70,
            "yValue2": -6.62
        },
        {
            "xValue": "Jul 2008",
            "yValue0": -18.17,
            "yValue1": -20.02,
            "yValue2": -7.16
        },
        {
            "xValue": "Aug 2008",
            "yValue0": -19.23,
            "yValue1": -21.19,
            "yValue2": -7.77
        },
        {
            "xValue": "Sep 2008",
            "yValue0": -19.47,
            "yValue1": -22.07,
            "yValue2": -8.30
        },
        {
            "xValue": "Oct 2008",
            "yValue0": -20.69,
            "yValue1": -22.64,
            "yValue2": -8.80
        },
        {
            "xValue": "Nov 2008",
            "yValue0": -21.89,
            "yValue1": -23.40,
            "yValue2": -9.25
        },
        {
            "xValue": "Dec 2008",
            "yValue0": -22.75,
            "yValue1": -24.03,
            "yValue2": -9.71
        },
        {
            "xValue": "Jan 2009",
            "yValue0": -22.13,
            "yValue1": -24.55,
            "yValue2": -10.08
        },
        {
            "xValue": "Feb 2009",
            "yValue0": -20.72,
            "yValue1": -24.11,
            "yValue2": -10.21
        },
        {
            "xValue": "Mar 2009",
            "yValue0": -20.28,
            "yValue1": -23.30,
            "yValue2": -10.23
        },
        {
            "xValue": "Apr 2009",
            "yValue0": -20.30,
            "yValue1": -22.22,
            "yValue2": -10.17
        },
        {
            "xValue": "May 2009",
            "yValue0": -20.20,
            "yValue1": -21.03,
            "yValue2": -10.12
        },
        {
            "xValue": "Jun 2009",
            "yValue0": -19.59,
            "yValue1": -19.70,
            "yValue2": -9.95
        },
        {
            "xValue": "Jul 2009",
            "yValue0": -19.35,
            "yValue1": -17.97,
            "yValue2": -9.65
        },
        {
            "xValue": "Aug 2009",
            "yValue0": -18.12,
            "yValue1": -16.19,
            "yValue2": -9.20
        },
        {
            "xValue": "Sep 2009",
            "yValue0": -16.89,
            "yValue1": -14.43,
            "yValue2": -8.72
        },
        {
            "xValue": "Oct 2009",
            "yValue0": -13.78,
            "yValue1": -12.64,
            "yValue2": -8.15
        },
        {
            "xValue": "Nov 2009",
            "yValue0": -10.33,
            "yValue1": -10.15,
            "yValue2": -7.37
        },
        {
            "xValue": "Dec 2009",
            "yValue0": -7.72,
            "yValue1": -7.44,
            "yValue2": -6.49
        },
        {
            "xValue": "Jan 2010",
            "yValue0": -6.47,
            "yValue1": -4.91,
            "yValue2": -5.60
        },
        {
            "xValue": "Feb 2010",
            "yValue0": -5.72,
            "yValue1": -3.62,
            "yValue2": -4.92
        },
        {
            "xValue": "Mar 2010",
            "yValue0": -3.27,
            "yValue1": -2.17,
            "yValue2": -4.22
        },
        {
            "xValue": "Apr 2010",
            "yValue0": -0.03,
            "yValue1": -0.66,
            "yValue2": -3.48
        },
        {
            "xValue": "May 2010",
            "yValue0": 3.50,
            "yValue1": 0.93,
            "yValue2": -2.76
        },
        {
            "xValue": "Jun 2010",
            "yValue0": 5.22,
            "yValue1": 1.58,
            "yValue2": -2.26
        },
        {
            "xValue": "Jul 2010",
            "yValue0": 6.30,
            "yValue1": 1.59,
            "yValue2": -2.13
        },
        {
            "xValue": "Aug 2010",
            "yValue0": 6.64,
            "yValue1": 1.35,
            "yValue2": -2.16
        },
        {
            "xValue": "Sep 2010",
            "yValue0": 5.99,
            "yValue1": 1.13,
            "yValue2": -2.32
        },
        {
            "xValue": "Oct 2010",
            "yValue0": 3.12,
            "yValue1": 0.60,
            "yValue2": -2.55
        },
        {
            "xValue": "Nov 2010",
            "yValue0": -0.16,
            "yValue1": -0.57,
            "yValue2": -3.02
        },
        {
            "xValue": "Dec 2010",
            "yValue0": -1.97,
            "yValue1": -1.78,
            "yValue2": -3.52
        },
        {
            "xValue": "Jan 2011",
            "yValue0": -2.22,
            "yValue1": -2.73,
            "yValue2": -4.03
        },
        {
            "xValue": "Feb 2011",
            "yValue0": -2.89,
            "yValue1": -3.11,
            "yValue2": -4.44
        },
        {
            "xValue": "Mar 2011",
            "yValue0": -4.87,
            "yValue1": -4.00,
            "yValue2": -4.91
        },
        {
            "xValue": "Apr 2011",
            "yValue0": -7.96,
            "yValue1": -5.01,
            "yValue2": -5.48
        },
        {
            "xValue": "May 2011",
            "yValue0": -11.37,
            "yValue1": -6.41,
            "yValue2": -6.02
        },
        {
            "xValue": "Jun 2011",
            "yValue0": -12.77,
            "yValue1": -6.82,
            "yValue2": -6.38
        },
        {
            "xValue": "Jul 2011",
            "yValue0": -13.14,
            "yValue1": -6.89,
            "yValue2": -6.36
        },
        {
            "xValue": "Aug 2011",
            "yValue0": -13.93,
            "yValue1": -6.85,
            "yValue2": -6.18
        },
        {
            "xValue": "Sep 2011",
            "yValue0": -14.50,
            "yValue1": -6.99,
            "yValue2": -5.86
        },
        {
            "xValue": "Oct 2011",
            "yValue0": -14.54,
            "yValue1": -7.06,
            "yValue2": -5.56
        },
        {
            "xValue": "Nov 2011",
            "yValue0": -13.57,
            "yValue1": -6.62,
            "yValue2": -5.18
        },
        {
            "xValue": "Dec 2011",
            "yValue0": -13.01,
            "yValue1": -6.40,
            "yValue2": -4.82
        },
        {
            "xValue": "Jan 2012",
            "yValue0": -13.23,
            "yValue1": -6.13,
            "yValue2": -4.40
        },
        {
            "xValue": "Feb 2012",
            "yValue0": -12.62,
            "yValue1": -5.87,
            "yValue2": -3.96
        },
        {
            "xValue": "Mar 2012",
            "yValue0": -11.62,
            "yValue1": -5.17,
            "yValue2": -3.36
        },
        {
            "xValue": "Apr 2012",
            "yValue0": -9.33,
            "yValue1": -4.28,
            "yValue2": -2.62
        },
        {
            "xValue": "May 2012",
            "yValue0": -6.67,
            "yValue1": -2.86,
            "yValue2": -1.77
        },
        {
            "xValue": "Jun 2012",
            "yValue0": -5.57,
            "yValue1": -1.68,
            "yValue2": -0.99
        },
        {
            "xValue": "Jul 2012",
            "yValue0": -5.02,
            "yValue1": -0.48,
            "yValue2": -0.33
        },
        {
            "xValue": "Aug 2012",
            "yValue0": -3.50,
            "yValue1": 0.91,
            "yValue2": 0.26
        },
        {
            "xValue": "Sep 2012",
            "yValue0": -0.99,
            "yValue1": 2.55,
            "yValue2": 0.83
        },
        {
            "xValue": "Oct 2012",
            "yValue0": 2.38,
            "yValue1": 4.52,
            "yValue2": 1.48
        },
        {
            "xValue": "Nov 2012",
            "yValue0": 4.42,
            "yValue1": 6.03,
            "yValue2": 2.17
        },
        {
            "xValue": "Dec 2012",
            "yValue0": 6.46,
            "yValue1": 8.10,
            "yValue2": 2.91
        },
        {
            "xValue": "Jan 2013",
            "yValue0": 9.06,
            "yValue1": 10.01,
            "yValue2": 3.65
        },
        {
            "xValue": "Feb 2013",
            "yValue0": 11.15,
            "yValue1": 12.17,
            "yValue2": 4.36
        },
        {
            "xValue": "Mar 2013",
            "yValue0": 13.33,
            "yValue1": 14.27,
            "yValue2": 5.02
        },
        {
            "xValue": "Apr 2013",
            "yValue0": 14.09,
            "yValue1": 16.43,
            "yValue2": 5.59
        },
        {
            "xValue": "May 2013",
            "yValue0": 14.92,
            "yValue1": 18.31,
            "yValue2": 6.10
        },
        {
            "xValue": "Jun 2013",
            "yValue0": 16.83,
            "yValue1": 20.04,
            "yValue2": 6.63
        },
        {
            "xValue": "Jul 2013",
            "yValue0": 19.49,
            "yValue1": 21.54,
            "yValue2": 7.14
        },
        {
            "xValue": "Aug 2013",
            "yValue0": 22.20,
            "yValue1": 22.73,
            "yValue2": 7.62
        },
        {
            "xValue": "Sep 2013",
            "yValue0": 23.55,
            "yValue1": 23.45,
            "yValue2": 8.01
        },
        {
            "xValue": "Oct 2013",
            "yValue0": 22.85,
            "yValue1": 23.58,
            "yValue2": 8.30
        },
        {
            "xValue": "Nov 2013",
            "yValue0": 22.96,
            "yValue1": 23.69,
            "yValue2": 8.45
        },
        {
            "xValue": "Dec 2013",
            "yValue0": 22.28,
            "yValue1": 23.14,
            "yValue2": 8.49
        },
        {
            "xValue": "Jan 2014",
            "yValue0": 21.72,
            "yValue1": 22.64,
            "yValue2": 8.43
        },
        {
            "xValue": "Feb 2014",
            "yValue0": 20.61,
            "yValue1": 21.58,
            "yValue2": 8.32
        },
        {
            "xValue": "Mar 2014",
            "yValue0": 19.56,
            "yValue1": 19.91,
            "yValue2": 8.03
        },
        {
            "xValue": "Apr 2014",
            "yValue0": 18.60,
            "yValue1": 17.72,
            "yValue2": 7.63
        },
        {
            "xValue": "May 2014",
            "yValue0": 17.10,
            "yValue1": 15.44,
            "yValue2": 7.17
        },
        {
            "xValue": "Jun 2014",
            "yValue0": 15.72,
            "yValue1": 13.29,
            "yValue2": 6.72
        },
        {
            "xValue": "Jul 2014",
            "yValue0": 13.83,
            "yValue1": 11.40,
            "yValue2": 6.24
        },
        {
            "xValue": "Aug 2014",
            "yValue0": 10.69,
            "yValue1": 9.48,
            "yValue2": 5.73
        },
        {
            "xValue": "Sep 2014",
            "yValue0": 8.12,
            "yValue1": 8.00,
            "yValue2": 5.24
        },
        {
            "xValue": "Oct 2014",
            "yValue0": 6.89,
            "yValue1": 6.82,
            "yValue2": 4.85
        },
        {
            "xValue": "Nov 2014",
            "yValue0": 5.85,
            "yValue1": 6.08,
            "yValue2": 4.60
        },
        {
            "xValue": "Dec 2014",
            "yValue0": 5.70,
            "yValue1": 5.37,
            "yValue2": 4.43
        },
        {
            "xValue": "Jan 2015",
            "yValue0": 4.19,
            "yValue1": 4.68,
            "yValue2": 4.27
        },
        {
            "xValue": "Feb 2015",
            "yValue0": 3.67,
            "yValue1": 4.26,
            "yValue2": 4.15
        },
        {
            "xValue": "Mar 2015",
            "yValue0": 2.95,
            "yValue1": 4.51,
            "yValue2": 4.21
        },
        {
            "xValue": "Apr 2015",
            "yValue0": 3.76,
            "yValue1": 4.90,
            "yValue2": 4.36
        },
        {
            "xValue": "May 2015",
            "yValue0": 4.91,
            "yValue1": 5.43,
            "yValue2": 4.54
        },
        {
            "xValue": "Jun 2015",
            "yValue0": 5.03,
            "yValue1": 5.74,
            "yValue2": 4.64
        },
        {
            "xValue": "Jul 2015",
            "yValue0": 4.45,
            "yValue1": 5.93,
            "yValue2": 4.74
        },
        {
            "xValue": "Aug 2015",
            "yValue0": 4.72,
            "yValue1": 6.36,
            "yValue2": 4.91
        },
        {
            "xValue": "Sep 2015",
            "yValue0": 4.98,
            "yValue1": 6.75,
            "yValue2": 5.10
        },
        {
            "xValue": "Oct 2015",
            "yValue0": 5.47,
            "yValue1": 7.16,
            "yValue2": 5.23
        },
        {
            "xValue": "Nov 2015",
            "yValue0": 5.28,
            "yValue1": 7.13,
            "yValue2": 5.24
        },
        {
            "xValue": "Dec 2015",
            "yValue0": 4.80,
            "yValue1": 7.50,
            "yValue2": 5.28
        },
        {
            "xValue": "Jan 2016",
            "yValue0": 5.67,
            "yValue1": 7.74,
            "yValue2": 5.38
        },
        {
            "xValue": "Feb 2016",
            "yValue0": 6.07,
            "yValue1": 7.81,
            "yValue2": 5.47
        },
        {
            "xValue": "Mar 2016",
            "yValue0": 6.37,
            "yValue1": 7.39,
            "yValue2": 5.44
        },
        {
            "xValue": "Apr 2016",
            "yValue0": 4.80,
            "yValue1": 7.33,
            "yValue2": 5.41
        },
        {
            "xValue": "May 2016",
            "yValue0": 3.04,
            "yValue1": 7.21,
            "yValue2": 5.39
        },
        {
            "xValue": "Jun 2016",
            "yValue0": 2.37,
            "yValue1": 7.29,
            "yValue2": 5.45
        },
        {
            "xValue": "Jul 2016",
            "yValue0": 2.55,
            "yValue1": 7.29,
            "yValue2": 5.53
        },
        {
            "xValue": "Aug 2016",
            "yValue0": 3.12,
            "yValue1": 7.33,
            "yValue2": 5.59
        },
        {
            "xValue": "Sep 2016",
            "yValue0": 3.55,
            "yValue1": 7.23,
            "yValue2": 5.64
        },
        {
            "xValue": "Oct 2016",
            "yValue0": 3.53,
            "yValue1": 7.13,
            "yValue2": 5.70
        },
        {
            "xValue": "Nov 2016",
            "yValue0": 4.03,
            "yValue1": 7.09,
            "yValue2": 5.83
        },
        {
            "xValue": "Dec 2016",
            "yValue0": 4.01,
            "yValue1": 6.75,
            "yValue2": 5.92
        },
        {
            "xValue": "Jan 2017",
            "yValue0": 3.27,
            "yValue1": 6.56,
            "yValue2": 5.95
        },
        {
            "xValue": "Feb 2017",
            "yValue0": 2.04,
            "yValue1": 6.51,
            "yValue2": 5.95
        },
        {
            "xValue": "Mar 2017",
            "yValue0": 1.50,
            "yValue1": 6.80,
            "yValue2": 6.06
        },
        {
            "xValue": "Apr 2017",
            "yValue0": 2.27,
            "yValue1": 6.81,
            "yValue2": 6.17
        },
        {
            "xValue": "May 2017",
            "yValue0": 3.68,
            "yValue1": 6.92,
            "yValue2": 6.26
        },
        {
            "xValue": "Jun 2017",
            "yValue0": 4.38,
            "yValue1": 7.04,
            "yValue2": 6.32
        },
        {
            "xValue": "Jul 2017",
            "yValue0": 4.60,
            "yValue1": 7.15,
            "yValue2": 6.34
        },
        {
            "xValue": "Aug 2017",
            "yValue0": 3.94,
            "yValue1": 7.05,
            "yValue2": 6.37
        },
        {
            "xValue": "Sep 2017",
            "yValue0": 3.66,
            "yValue1": 7.07,
            "yValue2": 6.41
        },
        {
            "xValue": "Oct 2017",
            "yValue0": 3.52,
            "yValue1": 7.09,
            "yValue2": 6.47
        },
        {
            "xValue": "Nov 2017",
            "yValue0": 3.00,
            "yValue1": 7.35,
            "yValue2": 6.51
        },
        {
            "xValue": "Dec 2017",
            "yValue0": 3.13,
            "yValue1": 7.72,
            "yValue2": 6.55
        },
        {
            "xValue": "Jan 2018",
            "yValue0": 3.43,
            "yValue1": 8.07,
            "yValue2": 6.58
        },
        {
            "xValue": "Feb 2018",
            "yValue0": 4.74,
            "yValue1": 8.37,
            "yValue2": 6.65
        },
        {
            "xValue": "Mar 2018",
            "yValue0": 5.67,
            "yValue1": 8.42,
            "yValue2": 6.68
        },
        {
            "xValue": "Apr 2018",
            "yValue0": 5.68,
            "yValue1": 8.41,
            "yValue2": 6.69
        },
        {
            "xValue": "May 2018",
            "yValue0": 5.06,
            "yValue1": 8.30,
            "yValue2": 6.72
        },
        {
            "xValue": "Jun 2018",
            "yValue0": 4.51,
            "yValue1": 8.17,
            "yValue2": 6.73
        },
        {
            "xValue": "Jul 2018",
            "yValue0": 4.69,
            "yValue1": 8.03,
            "yValue2": 6.72
        },
        {
            "xValue": "Aug 2018",
            "yValue0": 5.13,
            "yValue1": 7.69,
            "yValue2": 6.63
        },
        {
            "xValue": "Sep 2018",
            "yValue0": 4.98,
            "yValue1": 7.11,
            "yValue2": 6.46
        },
        {
            "xValue": "Oct 2018",
            "yValue0": 4.08,
            "yValue1": 6.46,
            "yValue2": 6.23
        },
        {
            "xValue": "Nov 2018",
            "yValue0": 3.77,
            "yValue1": 5.69,
            "yValue2": 5.98
        },
        {
            "xValue": "Dec 2018",
            "yValue0": 3.58,
            "yValue1": 4.76,
            "yValue2": 5.76
        },
        {
            "xValue": "Jan 2019",
            "yValue0": 4.02,
            "yValue1": 3.75,
            "yValue2": 5.56
        },
        {
            "xValue": "Feb 2019",
            "yValue0": 3.48,
            "yValue1": 2.65,
            "yValue2": 5.32
        },
        {
            "xValue": "Mar 2019",
            "yValue0": 2.35,
            "yValue1": 1.76,
            "yValue2": 5.04
        },
        {
            "xValue": "Apr 2019",
            "yValue0": 1.41,
            "yValue1": 1.31,
            "yValue2": 4.74
        },
        {
            "xValue": "May 2019",
            "yValue0": 0.83,
            "yValue1": 1.22,
            "yValue2": 4.54
        },
        {
            "xValue": "Jun 2019",
            "yValue0": 1.23,
            "yValue1": 1.24,
            "yValue2": 4.41
        },
        {
            "xValue": "Jul 2019",
            "yValue0": 1.11,
            "yValue1": 1.07,
            "yValue2": 4.29
        },
        {
            "xValue": "Aug 2019",
            "yValue0": 0.89,
            "yValue1": 0.91,
            "yValue2": 4.14
        },
        {
            "xValue": "Sep 2019",
            "yValue0": 0.55,
            "yValue1": 0.90,
            "yValue2": 3.99
        },
        {
            "xValue": "Oct 2019",
            "yValue0": 1.12,
            "yValue1": 1.02,
            "yValue2": 3.87
        },
        {
            "xValue": "Nov 2019",
            "yValue0": 1.50,
            "yValue1": 1.18,
            "yValue2": 3.76
        },
        {
            "xValue": "Dec 2019",
            "yValue0": 1.74,
            "yValue1": 1.68,
            "yValue2": 3.70
        },
        {
            "xValue": "Jan 2020",
            "yValue0": 1.42,
            "yValue1": 2.38,
            "yValue2": 3.69
        },
        {
            "xValue": "Feb 2020",
            "yValue0": 1.71,
            "yValue1": 3.30,
            "yValue2": 3.79
        },
        {
            "xValue": "Mar 2020",
            "yValue0": 2.56,
            "yValue1": 4.14,
            "yValue2": 3.98
        },
        {
            "xValue": "Apr 2020",
            "yValue0": 3.87,
            "yValue1": 4.58,
            "yValue2": 4.20
        },
        {
            "xValue": "May 2020",
            "yValue0": 4.93,
            "yValue1": 4.44,
            "yValue2": 4.31
        },
        {
            "xValue": "Jun 2020",
            "yValue0": 4.77,
            "yValue1": 4.17,
            "yValue2": 4.40
        },
        {
            "xValue": "Jul 2020",
            "yValue0": 4.57,
            "yValue1": 4.55,
            "yValue2": 4.62
        },
        {
            "xValue": "Aug 2020",
            "yValue0": 5.05,
            "yValue1": 5.57,
            "yValue2": 5.14
        },
        {
            "xValue": "Sep 2020",
            "yValue0": 6.38,
            "yValue1": 6.81,
            "yValue2": 5.84
        },
        {
            "xValue": "Oct 2020",
            "yValue0": 7.49,
            "yValue1": 7.93,
            "yValue2": 6.64
        },
        {
            "xValue": "Nov 2020",
            "yValue0": 8.24,
            "yValue1": 9.01,
            "yValue2": 7.52
        },
        {
            "xValue": "Dec 2020",
            "yValue0": 8.69,
            "yValue1": 9.87,
            "yValue2": 8.39
        }
    ],
});