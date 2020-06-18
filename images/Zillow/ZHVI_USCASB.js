var chart = AmCharts.makeChart("ZHVI_USCASB" , { 
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
        "title": "Index (100 = Pre-Recession Maximum Value)"
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
            "xValue": "Jan 1996",
            "yValue0": 28.14,
            "yValue1": 30.62,
            "yValue2": 49.84
        },
        {
            "xValue": "Feb 1996",
            "yValue0": 28.05,
            "yValue1": 30.58,
            "yValue2": 49.85
        },
        {
            "xValue": "Mar 1996",
            "yValue0": 28.01,
            "yValue1": 30.55,
            "yValue2": 49.87
        },
        {
            "xValue": "Apr 1996",
            "yValue0": 27.92,
            "yValue1": 30.49,
            "yValue2": 49.93
        },
        {
            "xValue": "May 1996",
            "yValue0": 27.88,
            "yValue1": 30.46,
            "yValue2": 50.00
        },
        {
            "xValue": "Jun 1996",
            "yValue0": 27.85,
            "yValue1": 30.43,
            "yValue2": 50.08
        },
        {
            "xValue": "Jul 1996",
            "yValue0": 27.80,
            "yValue1": 30.41,
            "yValue2": 50.16
        },
        {
            "xValue": "Aug 1996",
            "yValue0": 27.85,
            "yValue1": 30.41,
            "yValue2": 50.25
        },
        {
            "xValue": "Sep 1996",
            "yValue0": 27.92,
            "yValue1": 30.41,
            "yValue2": 50.35
        },
        {
            "xValue": "Oct 1996",
            "yValue0": 28.13,
            "yValue1": 30.44,
            "yValue2": 50.47
        },
        {
            "xValue": "Nov 1996",
            "yValue0": 28.23,
            "yValue1": 30.48,
            "yValue2": 50.59
        },
        {
            "xValue": "Dec 1996",
            "yValue0": 28.45,
            "yValue1": 30.52,
            "yValue2": 50.72
        },
        {
            "xValue": "Jan 1997",
            "yValue0": 28.45,
            "yValue1": 30.53,
            "yValue2": 50.80
        },
        {
            "xValue": "Feb 1997",
            "yValue0": 28.54,
            "yValue1": 30.54,
            "yValue2": 50.91
        },
        {
            "xValue": "Mar 1997",
            "yValue0": 28.50,
            "yValue1": 30.57,
            "yValue2": 51.03
        },
        {
            "xValue": "Apr 1997",
            "yValue0": 28.65,
            "yValue1": 30.66,
            "yValue2": 51.18
        },
        {
            "xValue": "May 1997",
            "yValue0": 28.77,
            "yValue1": 30.77,
            "yValue2": 51.33
        },
        {
            "xValue": "Jun 1997",
            "yValue0": 28.92,
            "yValue1": 30.88,
            "yValue2": 51.48
        },
        {
            "xValue": "Jul 1997",
            "yValue0": 29.15,
            "yValue1": 31.02,
            "yValue2": 51.63
        },
        {
            "xValue": "Aug 1997",
            "yValue0": 29.28,
            "yValue1": 31.16,
            "yValue2": 51.77
        },
        {
            "xValue": "Sep 1997",
            "yValue0": 29.42,
            "yValue1": 31.32,
            "yValue2": 51.92
        },
        {
            "xValue": "Oct 1997",
            "yValue0": 29.32,
            "yValue1": 31.47,
            "yValue2": 52.05
        },
        {
            "xValue": "Nov 1997",
            "yValue0": 29.43,
            "yValue1": 31.64,
            "yValue2": 52.21
        },
        {
            "xValue": "Dec 1997",
            "yValue0": 29.41,
            "yValue1": 31.84,
            "yValue2": 52.39
        },
        {
            "xValue": "Jan 1998",
            "yValue0": 29.83,
            "yValue1": 32.11,
            "yValue2": 52.66
        },
        {
            "xValue": "Feb 1998",
            "yValue0": 30.20,
            "yValue1": 32.40,
            "yValue2": 52.91
        },
        {
            "xValue": "Mar 1998",
            "yValue0": 30.77,
            "yValue1": 32.69,
            "yValue2": 53.14
        },
        {
            "xValue": "Apr 1998",
            "yValue0": 31.09,
            "yValue1": 32.93,
            "yValue2": 53.31
        },
        {
            "xValue": "May 1998",
            "yValue0": 31.34,
            "yValue1": 33.15,
            "yValue2": 53.48
        },
        {
            "xValue": "Jun 1998",
            "yValue0": 31.60,
            "yValue1": 33.38,
            "yValue2": 53.66
        },
        {
            "xValue": "Jul 1998",
            "yValue0": 31.84,
            "yValue1": 33.58,
            "yValue2": 53.85
        },
        {
            "xValue": "Aug 1998",
            "yValue0": 32.10,
            "yValue1": 33.81,
            "yValue2": 54.06
        },
        {
            "xValue": "Sep 1998",
            "yValue0": 32.38,
            "yValue1": 34.06,
            "yValue2": 54.31
        },
        {
            "xValue": "Oct 1998",
            "yValue0": 32.77,
            "yValue1": 34.32,
            "yValue2": 54.57
        },
        {
            "xValue": "Nov 1998",
            "yValue0": 33.12,
            "yValue1": 34.56,
            "yValue2": 54.79
        },
        {
            "xValue": "Dec 1998",
            "yValue0": 33.49,
            "yValue1": 34.76,
            "yValue2": 54.99
        },
        {
            "xValue": "Jan 1999",
            "yValue0": 33.66,
            "yValue1": 35.00,
            "yValue2": 55.17
        },
        {
            "xValue": "Feb 1999",
            "yValue0": 33.91,
            "yValue1": 35.26,
            "yValue2": 55.39
        },
        {
            "xValue": "Mar 1999",
            "yValue0": 34.10,
            "yValue1": 35.53,
            "yValue2": 55.63
        },
        {
            "xValue": "Apr 1999",
            "yValue0": 34.48,
            "yValue1": 35.77,
            "yValue2": 55.92
        },
        {
            "xValue": "May 1999",
            "yValue0": 34.90,
            "yValue1": 36.02,
            "yValue2": 56.20
        },
        {
            "xValue": "Jun 1999",
            "yValue0": 35.34,
            "yValue1": 36.31,
            "yValue2": 56.52
        },
        {
            "xValue": "Jul 1999",
            "yValue0": 35.73,
            "yValue1": 36.62,
            "yValue2": 56.84
        },
        {
            "xValue": "Aug 1999",
            "yValue0": 36.06,
            "yValue1": 36.90,
            "yValue2": 57.13
        },
        {
            "xValue": "Sep 1999",
            "yValue0": 36.40,
            "yValue1": 37.15,
            "yValue2": 57.39
        },
        {
            "xValue": "Oct 1999",
            "yValue0": 36.81,
            "yValue1": 37.44,
            "yValue2": 57.65
        },
        {
            "xValue": "Nov 1999",
            "yValue0": 37.29,
            "yValue1": 37.80,
            "yValue2": 57.96
        },
        {
            "xValue": "Dec 1999",
            "yValue0": 37.80,
            "yValue1": 38.19,
            "yValue2": 58.28
        },
        {
            "xValue": "Jan 2000",
            "yValue0": 38.34,
            "yValue1": 38.57,
            "yValue2": 58.62
        },
        {
            "xValue": "Feb 2000",
            "yValue0": 38.81,
            "yValue1": 38.93,
            "yValue2": 58.96
        },
        {
            "xValue": "Mar 2000",
            "yValue0": 39.27,
            "yValue1": 39.30,
            "yValue2": 59.29
        },
        {
            "xValue": "Apr 2000",
            "yValue0": 39.55,
            "yValue1": 39.71,
            "yValue2": 59.64
        },
        {
            "xValue": "May 2000",
            "yValue0": 39.84,
            "yValue1": 40.15,
            "yValue2": 59.98
        },
        {
            "xValue": "Jun 2000",
            "yValue0": 40.11,
            "yValue1": 40.61,
            "yValue2": 60.31
        },
        {
            "xValue": "Jul 2000",
            "yValue0": 40.54,
            "yValue1": 41.08,
            "yValue2": 60.64
        },
        {
            "xValue": "Aug 2000",
            "yValue0": 41.00,
            "yValue1": 41.59,
            "yValue2": 61.00
        },
        {
            "xValue": "Sep 2000",
            "yValue0": 41.45,
            "yValue1": 42.11,
            "yValue2": 61.37
        },
        {
            "xValue": "Oct 2000",
            "yValue0": 41.89,
            "yValue1": 42.61,
            "yValue2": 61.74
        },
        {
            "xValue": "Nov 2000",
            "yValue0": 42.40,
            "yValue1": 43.11,
            "yValue2": 62.13
        },
        {
            "xValue": "Dec 2000",
            "yValue0": 42.94,
            "yValue1": 43.62,
            "yValue2": 62.52
        },
        {
            "xValue": "Jan 2001",
            "yValue0": 43.45,
            "yValue1": 44.10,
            "yValue2": 62.92
        },
        {
            "xValue": "Feb 2001",
            "yValue0": 43.97,
            "yValue1": 44.61,
            "yValue2": 63.28
        },
        {
            "xValue": "Mar 2001",
            "yValue0": 44.51,
            "yValue1": 45.13,
            "yValue2": 63.64
        },
        {
            "xValue": "Apr 2001",
            "yValue0": 45.25,
            "yValue1": 45.69,
            "yValue2": 64.01
        },
        {
            "xValue": "May 2001",
            "yValue0": 46.01,
            "yValue1": 46.18,
            "yValue2": 64.38
        },
        {
            "xValue": "Jun 2001",
            "yValue0": 46.80,
            "yValue1": 46.62,
            "yValue2": 64.74
        },
        {
            "xValue": "Jul 2001",
            "yValue0": 47.55,
            "yValue1": 47.00,
            "yValue2": 65.09
        },
        {
            "xValue": "Aug 2001",
            "yValue0": 48.35,
            "yValue1": 47.38,
            "yValue2": 65.45
        },
        {
            "xValue": "Sep 2001",
            "yValue0": 49.13,
            "yValue1": 47.77,
            "yValue2": 65.81
        },
        {
            "xValue": "Oct 2001",
            "yValue0": 49.87,
            "yValue1": 48.18,
            "yValue2": 66.17
        },
        {
            "xValue": "Nov 2001",
            "yValue0": 50.41,
            "yValue1": 48.58,
            "yValue2": 66.53
        },
        {
            "xValue": "Dec 2001",
            "yValue0": 51.05,
            "yValue1": 48.98,
            "yValue2": 66.87
        },
        {
            "xValue": "Jan 2002",
            "yValue0": 51.62,
            "yValue1": 49.39,
            "yValue2": 67.21
        },
        {
            "xValue": "Feb 2002",
            "yValue0": 52.26,
            "yValue1": 49.83,
            "yValue2": 67.57
        },
        {
            "xValue": "Mar 2002",
            "yValue0": 52.79,
            "yValue1": 50.28,
            "yValue2": 67.94
        },
        {
            "xValue": "Apr 2002",
            "yValue0": 53.38,
            "yValue1": 50.78,
            "yValue2": 68.31
        },
        {
            "xValue": "May 2002",
            "yValue0": 53.94,
            "yValue1": 51.31,
            "yValue2": 68.68
        },
        {
            "xValue": "Jun 2002",
            "yValue0": 54.54,
            "yValue1": 51.93,
            "yValue2": 69.07
        },
        {
            "xValue": "Jul 2002",
            "yValue0": 55.09,
            "yValue1": 52.63,
            "yValue2": 69.48
        },
        {
            "xValue": "Aug 2002",
            "yValue0": 55.73,
            "yValue1": 53.37,
            "yValue2": 69.90
        },
        {
            "xValue": "Sep 2002",
            "yValue0": 56.42,
            "yValue1": 54.10,
            "yValue2": 70.32
        },
        {
            "xValue": "Oct 2002",
            "yValue0": 57.24,
            "yValue1": 54.84,
            "yValue2": 70.75
        },
        {
            "xValue": "Nov 2002",
            "yValue0": 58.26,
            "yValue1": 55.62,
            "yValue2": 71.19
        },
        {
            "xValue": "Dec 2002",
            "yValue0": 59.25,
            "yValue1": 56.43,
            "yValue2": 71.65
        },
        {
            "xValue": "Jan 2003",
            "yValue0": 60.30,
            "yValue1": 57.20,
            "yValue2": 72.10
        },
        {
            "xValue": "Feb 2003",
            "yValue0": 61.22,
            "yValue1": 57.91,
            "yValue2": 72.55
        },
        {
            "xValue": "Mar 2003",
            "yValue0": 62.28,
            "yValue1": 58.62,
            "yValue2": 72.99
        },
        {
            "xValue": "Apr 2003",
            "yValue0": 63.29,
            "yValue1": 59.33,
            "yValue2": 73.43
        },
        {
            "xValue": "May 2003",
            "yValue0": 64.44,
            "yValue1": 60.07,
            "yValue2": 73.87
        },
        {
            "xValue": "Jun 2003",
            "yValue0": 65.46,
            "yValue1": 60.70,
            "yValue2": 74.30
        },
        {
            "xValue": "Jul 2003",
            "yValue0": 66.51,
            "yValue1": 61.40,
            "yValue2": 74.74
        },
        {
            "xValue": "Aug 2003",
            "yValue0": 67.45,
            "yValue1": 62.17,
            "yValue2": 75.20
        },
        {
            "xValue": "Sep 2003",
            "yValue0": 68.38,
            "yValue1": 63.07,
            "yValue2": 75.71
        },
        {
            "xValue": "Oct 2003",
            "yValue0": 69.09,
            "yValue1": 63.98,
            "yValue2": 76.24
        },
        {
            "xValue": "Nov 2003",
            "yValue0": 69.65,
            "yValue1": 64.95,
            "yValue2": 76.77
        },
        {
            "xValue": "Dec 2003",
            "yValue0": 70.18,
            "yValue1": 65.91,
            "yValue2": 77.30
        },
        {
            "xValue": "Jan 2004",
            "yValue0": 71.17,
            "yValue1": 67.03,
            "yValue2": 77.86
        },
        {
            "xValue": "Feb 2004",
            "yValue0": 72.29,
            "yValue1": 68.22,
            "yValue2": 78.47
        },
        {
            "xValue": "Mar 2004",
            "yValue0": 73.32,
            "yValue1": 69.48,
            "yValue2": 79.11
        },
        {
            "xValue": "Apr 2004",
            "yValue0": 74.13,
            "yValue1": 70.78,
            "yValue2": 79.76
        },
        {
            "xValue": "May 2004",
            "yValue0": 74.95,
            "yValue1": 72.23,
            "yValue2": 80.45
        },
        {
            "xValue": "Jun 2004",
            "yValue0": 75.96,
            "yValue1": 73.88,
            "yValue2": 81.17
        },
        {
            "xValue": "Jul 2004",
            "yValue0": 77.21,
            "yValue1": 75.49,
            "yValue2": 81.94
        },
        {
            "xValue": "Aug 2004",
            "yValue0": 78.57,
            "yValue1": 76.99,
            "yValue2": 82.69
        },
        {
            "xValue": "Sep 2004",
            "yValue0": 80.13,
            "yValue1": 78.42,
            "yValue2": 83.44
        },
        {
            "xValue": "Oct 2004",
            "yValue0": 81.94,
            "yValue1": 79.84,
            "yValue2": 84.18
        },
        {
            "xValue": "Nov 2004",
            "yValue0": 83.84,
            "yValue1": 81.17,
            "yValue2": 84.93
        },
        {
            "xValue": "Dec 2004",
            "yValue0": 85.53,
            "yValue1": 82.53,
            "yValue2": 85.72
        },
        {
            "xValue": "Jan 2005",
            "yValue0": 86.43,
            "yValue1": 83.79,
            "yValue2": 86.52
        },
        {
            "xValue": "Feb 2005",
            "yValue0": 87.41,
            "yValue1": 85.15,
            "yValue2": 87.33
        },
        {
            "xValue": "Mar 2005",
            "yValue0": 88.47,
            "yValue1": 86.48,
            "yValue2": 88.13
        },
        {
            "xValue": "Apr 2005",
            "yValue0": 90.08,
            "yValue1": 87.89,
            "yValue2": 88.96
        },
        {
            "xValue": "May 2005",
            "yValue0": 91.54,
            "yValue1": 89.12,
            "yValue2": 89.80
        },
        {
            "xValue": "Jun 2005",
            "yValue0": 92.95,
            "yValue1": 90.26,
            "yValue2": 90.68
        },
        {
            "xValue": "Jul 2005",
            "yValue0": 93.88,
            "yValue1": 91.43,
            "yValue2": 91.56
        },
        {
            "xValue": "Aug 2005",
            "yValue0": 94.84,
            "yValue1": 92.64,
            "yValue2": 92.46
        },
        {
            "xValue": "Sep 2005",
            "yValue0": 95.76,
            "yValue1": 93.90,
            "yValue2": 93.36
        },
        {
            "xValue": "Oct 2005",
            "yValue0": 96.79,
            "yValue1": 95.08,
            "yValue2": 94.20
        },
        {
            "xValue": "Nov 2005",
            "yValue0": 97.62,
            "yValue1": 96.05,
            "yValue2": 95.01
        },
        {
            "xValue": "Dec 2005",
            "yValue0": 98.32,
            "yValue1": 96.91,
            "yValue2": 95.74
        },
        {
            "xValue": "Jan 2006",
            "yValue0": 99.04,
            "yValue1": 97.62,
            "yValue2": 96.40
        },
        {
            "xValue": "Feb 2006",
            "yValue0": 99.54,
            "yValue1": 98.22,
            "yValue2": 96.99
        },
        {
            "xValue": "Mar 2006",
            "yValue0": 100.00,
            "yValue1": 98.79,
            "yValue2": 97.57
        },
        {
            "xValue": "Apr 2006",
            "yValue0": 99.88,
            "yValue1": 99.21,
            "yValue2": 98.11
        },
        {
            "xValue": "May 2006",
            "yValue0": 99.89,
            "yValue1": 99.68,
            "yValue2": 98.62
        },
        {
            "xValue": "Jun 2006",
            "yValue0": 99.71,
            "yValue1": 99.92,
            "yValue2": 99.03
        },
        {
            "xValue": "Jul 2006",
            "yValue0": 99.61,
            "yValue1": 100.00,
            "yValue2": 99.36
        },
        {
            "xValue": "Aug 2006",
            "yValue0": 98.94,
            "yValue1": 99.92,
            "yValue2": 99.60
        },
        {
            "xValue": "Sep 2006",
            "yValue0": 97.97,
            "yValue1": 99.64,
            "yValue2": 99.75
        },
        {
            "xValue": "Oct 2006",
            "yValue0": 96.33,
            "yValue1": 99.31,
            "yValue2": 99.86
        },
        {
            "xValue": "Nov 2006",
            "yValue0": 94.81,
            "yValue1": 99.02,
            "yValue2": 99.92
        },
        {
            "xValue": "Dec 2006",
            "yValue0": 93.58,
            "yValue1": 98.75,
            "yValue2": 99.96
        },
        {
            "xValue": "Jan 2007",
            "yValue0": 93.22,
            "yValue1": 98.47,
            "yValue2": 99.99
        },
        {
            "xValue": "Feb 2007",
            "yValue0": 92.97,
            "yValue1": 98.10,
            "yValue2": 100.00
        },
        {
            "xValue": "Mar 2007",
            "yValue0": 92.51,
            "yValue1": 97.68,
            "yValue2": 99.98
        },
        {
            "xValue": "Apr 2007",
            "yValue0": 91.94,
            "yValue1": 97.26,
            "yValue2": 99.92
        },
        {
            "xValue": "May 2007",
            "yValue0": 90.98,
            "yValue1": 96.62,
            "yValue2": 99.77
        },
        {
            "xValue": "Jun 2007",
            "yValue0": 89.84,
            "yValue1": 95.92,
            "yValue2": 99.56
        },
        {
            "xValue": "Jul 2007",
            "yValue0": 88.59,
            "yValue1": 95.07,
            "yValue2": 99.27
        },
        {
            "xValue": "Aug 2007",
            "yValue0": 87.89,
            "yValue1": 94.18,
            "yValue2": 98.99
        },
        {
            "xValue": "Sep 2007",
            "yValue0": 86.72,
            "yValue1": 93.12,
            "yValue2": 98.67
        },
        {
            "xValue": "Oct 2007",
            "yValue0": 85.94,
            "yValue1": 91.89,
            "yValue2": 98.30
        },
        {
            "xValue": "Nov 2007",
            "yValue0": 85.10,
            "yValue1": 90.65,
            "yValue2": 97.84
        },
        {
            "xValue": "Dec 2007",
            "yValue0": 84.15,
            "yValue1": 89.26,
            "yValue2": 97.36
        },
        {
            "xValue": "Jan 2008",
            "yValue0": 82.21,
            "yValue1": 87.87,
            "yValue2": 96.80
        },
        {
            "xValue": "Feb 2008",
            "yValue0": 79.96,
            "yValue1": 86.13,
            "yValue2": 96.13
        },
        {
            "xValue": "Mar 2008",
            "yValue0": 78.09,
            "yValue1": 84.16,
            "yValue2": 95.38
        },
        {
            "xValue": "Apr 2008",
            "yValue0": 76.57,
            "yValue1": 82.02,
            "yValue2": 94.56
        },
        {
            "xValue": "May 2008",
            "yValue0": 75.05,
            "yValue1": 79.92,
            "yValue2": 93.77
        },
        {
            "xValue": "Jun 2008",
            "yValue0": 73.61,
            "yValue1": 77.98,
            "yValue2": 92.97
        },
        {
            "xValue": "Jul 2008",
            "yValue0": 72.49,
            "yValue1": 76.04,
            "yValue2": 92.17
        },
        {
            "xValue": "Aug 2008",
            "yValue0": 70.99,
            "yValue1": 74.23,
            "yValue2": 91.30
        },
        {
            "xValue": "Sep 2008",
            "yValue0": 69.84,
            "yValue1": 72.57,
            "yValue2": 90.48
        },
        {
            "xValue": "Oct 2008",
            "yValue0": 68.16,
            "yValue1": 71.09,
            "yValue2": 89.65
        },
        {
            "xValue": "Nov 2008",
            "yValue0": 66.47,
            "yValue1": 69.44,
            "yValue2": 88.79
        },
        {
            "xValue": "Dec 2008",
            "yValue0": 65.00,
            "yValue1": 67.81,
            "yValue2": 87.91
        },
        {
            "xValue": "Jan 2009",
            "yValue0": 64.02,
            "yValue1": 66.30,
            "yValue2": 87.04
        },
        {
            "xValue": "Feb 2009",
            "yValue0": 63.39,
            "yValue1": 65.37,
            "yValue2": 86.32
        },
        {
            "xValue": "Mar 2009",
            "yValue0": 62.25,
            "yValue1": 64.55,
            "yValue2": 85.62
        },
        {
            "xValue": "Apr 2009",
            "yValue0": 61.03,
            "yValue1": 63.79,
            "yValue2": 84.95
        },
        {
            "xValue": "May 2009",
            "yValue0": 59.89,
            "yValue1": 63.11,
            "yValue2": 84.28
        },
        {
            "xValue": "Jun 2009",
            "yValue0": 59.19,
            "yValue1": 62.62,
            "yValue2": 83.71
        },
        {
            "xValue": "Jul 2009",
            "yValue0": 58.47,
            "yValue1": 62.38,
            "yValue2": 83.27
        },
        {
            "xValue": "Aug 2009",
            "yValue0": 58.13,
            "yValue1": 62.21,
            "yValue2": 82.91
        },
        {
            "xValue": "Sep 2009",
            "yValue0": 58.04,
            "yValue1": 62.10,
            "yValue2": 82.59
        },
        {
            "xValue": "Oct 2009",
            "yValue0": 58.77,
            "yValue1": 62.10,
            "yValue2": 82.35
        },
        {
            "xValue": "Nov 2009",
            "yValue0": 59.60,
            "yValue1": 62.39,
            "yValue2": 82.24
        },
        {
            "xValue": "Dec 2009",
            "yValue0": 59.98,
            "yValue1": 62.76,
            "yValue2": 82.20
        },
        {
            "xValue": "Jan 2010",
            "yValue0": 59.88,
            "yValue1": 63.04,
            "yValue2": 82.17
        },
        {
            "xValue": "Feb 2010",
            "yValue0": 59.76,
            "yValue1": 63.00,
            "yValue2": 82.08
        },
        {
            "xValue": "Mar 2010",
            "yValue0": 60.21,
            "yValue1": 63.15,
            "yValue2": 82.01
        },
        {
            "xValue": "Apr 2010",
            "yValue0": 61.01,
            "yValue1": 63.37,
            "yValue2": 81.99
        },
        {
            "xValue": "May 2010",
            "yValue0": 61.99,
            "yValue1": 63.70,
            "yValue2": 81.95
        },
        {
            "xValue": "Jun 2010",
            "yValue0": 62.27,
            "yValue1": 63.61,
            "yValue2": 81.82
        },
        {
            "xValue": "Jul 2010",
            "yValue0": 62.16,
            "yValue1": 63.37,
            "yValue2": 81.50
        },
        {
            "xValue": "Aug 2010",
            "yValue0": 61.99,
            "yValue1": 63.05,
            "yValue2": 81.12
        },
        {
            "xValue": "Sep 2010",
            "yValue0": 61.51,
            "yValue1": 62.80,
            "yValue2": 80.68
        },
        {
            "xValue": "Oct 2010",
            "yValue0": 60.60,
            "yValue1": 62.48,
            "yValue2": 80.24
        },
        {
            "xValue": "Nov 2010",
            "yValue0": 59.51,
            "yValue1": 62.03,
            "yValue2": 79.76
        },
        {
            "xValue": "Dec 2010",
            "yValue0": 58.80,
            "yValue1": 61.65,
            "yValue2": 79.31
        },
        {
            "xValue": "Jan 2011",
            "yValue0": 58.55,
            "yValue1": 61.32,
            "yValue2": 78.86
        },
        {
            "xValue": "Feb 2011",
            "yValue0": 58.03,
            "yValue1": 61.04,
            "yValue2": 78.43
        },
        {
            "xValue": "Mar 2011",
            "yValue0": 57.29,
            "yValue1": 60.62,
            "yValue2": 77.98
        },
        {
            "xValue": "Apr 2011",
            "yValue0": 56.15,
            "yValue1": 60.20,
            "yValue2": 77.50
        },
        {
            "xValue": "May 2011",
            "yValue0": 54.94,
            "yValue1": 59.61,
            "yValue2": 77.02
        },
        {
            "xValue": "Jun 2011",
            "yValue0": 54.32,
            "yValue1": 59.27,
            "yValue2": 76.60
        },
        {
            "xValue": "Jul 2011",
            "yValue0": 53.99,
            "yValue1": 59.00,
            "yValue2": 76.32
        },
        {
            "xValue": "Aug 2011",
            "yValue0": 53.35,
            "yValue1": 58.73,
            "yValue2": 76.11
        },
        {
            "xValue": "Sep 2011",
            "yValue0": 52.59,
            "yValue1": 58.41,
            "yValue2": 75.95
        },
        {
            "xValue": "Oct 2011",
            "yValue0": 51.79,
            "yValue1": 58.06,
            "yValue2": 75.78
        },
        {
            "xValue": "Nov 2011",
            "yValue0": 51.43,
            "yValue1": 57.92,
            "yValue2": 75.63
        },
        {
            "xValue": "Dec 2011",
            "yValue0": 51.15,
            "yValue1": 57.70,
            "yValue2": 75.49
        },
        {
            "xValue": "Jan 2012",
            "yValue0": 50.80,
            "yValue1": 57.56,
            "yValue2": 75.39
        },
        {
            "xValue": "Feb 2012",
            "yValue0": 50.71,
            "yValue1": 57.46,
            "yValue2": 75.33
        },
        {
            "xValue": "Mar 2012",
            "yValue0": 50.63,
            "yValue1": 57.49,
            "yValue2": 75.36
        },
        {
            "xValue": "Apr 2012",
            "yValue0": 50.92,
            "yValue1": 57.62,
            "yValue2": 75.47
        },
        {
            "xValue": "May 2012",
            "yValue0": 51.28,
            "yValue1": 57.91,
            "yValue2": 75.65
        },
        {
            "xValue": "Jun 2012",
            "yValue0": 51.30,
            "yValue1": 58.27,
            "yValue2": 75.85
        },
        {
            "xValue": "Jul 2012",
            "yValue0": 51.28,
            "yValue1": 58.71,
            "yValue2": 76.06
        },
        {
            "xValue": "Aug 2012",
            "yValue0": 51.48,
            "yValue1": 59.26,
            "yValue2": 76.30
        },
        {
            "xValue": "Sep 2012",
            "yValue0": 52.07,
            "yValue1": 59.90,
            "yValue2": 76.58
        },
        {
            "xValue": "Oct 2012",
            "yValue0": 53.03,
            "yValue1": 60.69,
            "yValue2": 76.91
        },
        {
            "xValue": "Nov 2012",
            "yValue0": 53.70,
            "yValue1": 61.42,
            "yValue2": 77.28
        },
        {
            "xValue": "Dec 2012",
            "yValue0": 54.46,
            "yValue1": 62.38,
            "yValue2": 77.68
        },
        {
            "xValue": "Jan 2013",
            "yValue0": 55.41,
            "yValue1": 63.33,
            "yValue2": 78.14
        },
        {
            "xValue": "Feb 2013",
            "yValue0": 56.37,
            "yValue1": 64.45,
            "yValue2": 78.61
        },
        {
            "xValue": "Mar 2013",
            "yValue0": 57.38,
            "yValue1": 65.69,
            "yValue2": 79.14
        },
        {
            "xValue": "Apr 2013",
            "yValue0": 58.09,
            "yValue1": 67.09,
            "yValue2": 79.69
        },
        {
            "xValue": "May 2013",
            "yValue0": 58.93,
            "yValue1": 68.51,
            "yValue2": 80.27
        },
        {
            "xValue": "Jun 2013",
            "yValue0": 59.93,
            "yValue1": 69.95,
            "yValue2": 80.87
        },
        {
            "xValue": "Jul 2013",
            "yValue0": 61.27,
            "yValue1": 71.36,
            "yValue2": 81.49
        },
        {
            "xValue": "Aug 2013",
            "yValue0": 62.91,
            "yValue1": 72.73,
            "yValue2": 82.12
        },
        {
            "xValue": "Sep 2013",
            "yValue0": 64.34,
            "yValue1": 73.95,
            "yValue2": 82.72
        },
        {
            "xValue": "Oct 2013",
            "yValue0": 65.14,
            "yValue1": 75.00,
            "yValue2": 83.29
        },
        {
            "xValue": "Nov 2013",
            "yValue0": 66.03,
            "yValue1": 75.97,
            "yValue2": 83.80
        },
        {
            "xValue": "Dec 2013",
            "yValue0": 66.59,
            "yValue1": 76.81,
            "yValue2": 84.28
        },
        {
            "xValue": "Jan 2014",
            "yValue0": 67.44,
            "yValue1": 77.66,
            "yValue2": 84.73
        },
        {
            "xValue": "Feb 2014",
            "yValue0": 67.98,
            "yValue1": 78.36,
            "yValue2": 85.15
        },
        {
            "xValue": "Mar 2014",
            "yValue0": 68.60,
            "yValue1": 78.77,
            "yValue2": 85.49
        },
        {
            "xValue": "Apr 2014",
            "yValue0": 68.90,
            "yValue1": 78.97,
            "yValue2": 85.77
        },
        {
            "xValue": "May 2014",
            "yValue0": 69.00,
            "yValue1": 79.09,
            "yValue2": 86.03
        },
        {
            "xValue": "Jun 2014",
            "yValue0": 69.36,
            "yValue1": 79.25,
            "yValue2": 86.31
        },
        {
            "xValue": "Jul 2014",
            "yValue0": 69.75,
            "yValue1": 79.49,
            "yValue2": 86.58
        },
        {
            "xValue": "Aug 2014",
            "yValue0": 69.64,
            "yValue1": 79.63,
            "yValue2": 86.82
        },
        {
            "xValue": "Sep 2014",
            "yValue0": 69.56,
            "yValue1": 79.86,
            "yValue2": 87.05
        },
        {
            "xValue": "Oct 2014",
            "yValue0": 69.63,
            "yValue1": 80.12,
            "yValue2": 87.33
        },
        {
            "xValue": "Nov 2014",
            "yValue0": 69.90,
            "yValue1": 80.58,
            "yValue2": 87.66
        },
        {
            "xValue": "Dec 2014",
            "yValue0": 70.38,
            "yValue1": 80.93,
            "yValue2": 88.01
        },
        {
            "xValue": "Jan 2015",
            "yValue0": 70.26,
            "yValue1": 81.29,
            "yValue2": 88.35
        },
        {
            "xValue": "Feb 2015",
            "yValue0": 70.48,
            "yValue1": 81.70,
            "yValue2": 88.69
        },
        {
            "xValue": "Mar 2015",
            "yValue0": 70.62,
            "yValue1": 82.32,
            "yValue2": 89.09
        },
        {
            "xValue": "Apr 2015",
            "yValue0": 71.49,
            "yValue1": 82.84,
            "yValue2": 89.51
        },
        {
            "xValue": "May 2015",
            "yValue0": 72.39,
            "yValue1": 83.38,
            "yValue2": 89.93
        },
        {
            "xValue": "Jun 2015",
            "yValue0": 72.85,
            "yValue1": 83.80,
            "yValue2": 90.31
        },
        {
            "xValue": "Jul 2015",
            "yValue0": 72.86,
            "yValue1": 84.21,
            "yValue2": 90.68
        },
        {
            "xValue": "Aug 2015",
            "yValue0": 72.92,
            "yValue1": 84.69,
            "yValue2": 91.08
        },
        {
            "xValue": "Sep 2015",
            "yValue0": 73.03,
            "yValue1": 85.25,
            "yValue2": 91.49
        },
        {
            "xValue": "Oct 2015",
            "yValue0": 73.44,
            "yValue1": 85.86,
            "yValue2": 91.89
        },
        {
            "xValue": "Nov 2015",
            "yValue0": 73.59,
            "yValue1": 86.34,
            "yValue2": 92.26
        },
        {
            "xValue": "Dec 2015",
            "yValue0": 73.76,
            "yValue1": 87.00,
            "yValue2": 92.66
        },
        {
            "xValue": "Jan 2016",
            "yValue0": 74.25,
            "yValue1": 87.58,
            "yValue2": 93.09
        },
        {
            "xValue": "Feb 2016",
            "yValue0": 74.76,
            "yValue1": 88.09,
            "yValue2": 93.54
        },
        {
            "xValue": "Mar 2016",
            "yValue0": 75.12,
            "yValue1": 88.40,
            "yValue2": 93.94
        },
        {
            "xValue": "Apr 2016",
            "yValue0": 74.92,
            "yValue1": 88.90,
            "yValue2": 94.35
        },
        {
            "xValue": "May 2016",
            "yValue0": 74.59,
            "yValue1": 89.39,
            "yValue2": 94.77
        },
        {
            "xValue": "Jun 2016",
            "yValue0": 74.57,
            "yValue1": 89.90,
            "yValue2": 95.23
        },
        {
            "xValue": "Jul 2016",
            "yValue0": 74.71,
            "yValue1": 90.34,
            "yValue2": 95.70
        },
        {
            "xValue": "Aug 2016",
            "yValue0": 75.20,
            "yValue1": 90.90,
            "yValue2": 96.17
        },
        {
            "xValue": "Sep 2016",
            "yValue0": 75.62,
            "yValue1": 91.42,
            "yValue2": 96.65
        },
        {
            "xValue": "Oct 2016",
            "yValue0": 76.03,
            "yValue1": 91.99,
            "yValue2": 97.13
        },
        {
            "xValue": "Nov 2016",
            "yValue0": 76.56,
            "yValue1": 92.47,
            "yValue2": 97.64
        },
        {
            "xValue": "Dec 2016",
            "yValue0": 76.73,
            "yValue1": 92.88,
            "yValue2": 98.14
        },
        {
            "xValue": "Jan 2017",
            "yValue0": 76.68,
            "yValue1": 93.33,
            "yValue2": 98.63
        },
        {
            "xValue": "Feb 2017",
            "yValue0": 76.28,
            "yValue1": 93.82,
            "yValue2": 99.11
        },
        {
            "xValue": "Mar 2017",
            "yValue0": 76.25,
            "yValue1": 94.41,
            "yValue2": 99.62
        },
        {
            "xValue": "Apr 2017",
            "yValue0": 76.61,
            "yValue1": 94.94,
            "yValue2": 100.16
        },
        {
            "xValue": "May 2017",
            "yValue0": 77.31,
            "yValue1": 95.55,
            "yValue2": 100.70
        },
        {
            "xValue": "Jun 2017",
            "yValue0": 77.81,
            "yValue1": 96.22,
            "yValue2": 101.25
        },
        {
            "xValue": "Jul 2017",
            "yValue0": 78.12,
            "yValue1": 96.77,
            "yValue2": 101.76
        },
        {
            "xValue": "Aug 2017",
            "yValue0": 78.14,
            "yValue1": 97.29,
            "yValue2": 102.29
        },
        {
            "xValue": "Sep 2017",
            "yValue0": 78.40,
            "yValue1": 97.86,
            "yValue2": 102.84
        },
        {
            "xValue": "Oct 2017",
            "yValue0": 78.72,
            "yValue1": 98.51,
            "yValue2": 103.43
        },
        {
            "xValue": "Nov 2017",
            "yValue0": 78.88,
            "yValue1": 99.30,
            "yValue2": 104.02
        },
        {
            "xValue": "Dec 2017",
            "yValue0": 79.13,
            "yValue1": 100.10,
            "yValue2": 104.61
        },
        {
            "xValue": "Jan 2018",
            "yValue0": 79.32,
            "yValue1": 100.95,
            "yValue2": 105.17
        },
        {
            "xValue": "Feb 2018",
            "yValue0": 79.90,
            "yValue1": 101.78,
            "yValue2": 105.75
        },
        {
            "xValue": "Mar 2018",
            "yValue0": 80.57,
            "yValue1": 102.51,
            "yValue2": 106.32
        },
        {
            "xValue": "Apr 2018",
            "yValue0": 81.04,
            "yValue1": 103.05,
            "yValue2": 106.90
        },
        {
            "xValue": "May 2018",
            "yValue0": 81.33,
            "yValue1": 103.45,
            "yValue2": 107.46
        },
        {
            "xValue": "Jun 2018",
            "yValue0": 81.33,
            "yValue1": 103.82,
            "yValue2": 107.98
        },
        {
            "xValue": "Jul 2018",
            "yValue0": 81.65,
            "yValue1": 104.24,
            "yValue2": 108.49
        },
        {
            "xValue": "Aug 2018",
            "yValue0": 81.97,
            "yValue1": 104.55,
            "yValue2": 108.98
        },
        {
            "xValue": "Sep 2018",
            "yValue0": 82.21,
            "yValue1": 104.74,
            "yValue2": 109.44
        },
        {
            "xValue": "Oct 2018",
            "yValue0": 81.98,
            "yValue1": 104.88,
            "yValue2": 109.87
        },
        {
            "xValue": "Nov 2018",
            "yValue0": 81.95,
            "yValue1": 105.02,
            "yValue2": 110.29
        },
        {
            "xValue": "Dec 2018",
            "yValue0": 82.07,
            "yValue1": 104.99,
            "yValue2": 110.70
        },
        {
            "xValue": "Jan 2019",
            "yValue0": 82.54,
            "yValue1": 104.88,
            "yValue2": 111.11
        },
        {
            "xValue": "Feb 2019",
            "yValue0": 82.67,
            "yValue1": 104.66,
            "yValue2": 111.46
        },
        {
            "xValue": "Mar 2019",
            "yValue0": 82.46,
            "yValue1": 104.55,
            "yValue2": 111.75
        },
        {
            "xValue": "Apr 2019",
            "yValue0": 82.29,
            "yValue1": 104.59,
            "yValue2": 112.03
        },
        {
            "xValue": "May 2019",
            "yValue0": 82.14,
            "yValue1": 104.69,
            "yValue2": 112.32
        },
        {
            "xValue": "Jun 2019",
            "yValue0": 82.33,
            "yValue1": 104.81,
            "yValue2": 112.65
        },
        {
            "xValue": "Jul 2019",
            "yValue0": 82.35,
            "yValue1": 104.98,
            "yValue2": 113.00
        },
        {
            "xValue": "Aug 2019",
            "yValue0": 82.47,
            "yValue1": 105.24,
            "yValue2": 113.36
        },
        {
            "xValue": "Sep 2019",
            "yValue0": 82.55,
            "yValue1": 105.60,
            "yValue2": 113.73
        },
        {
            "xValue": "Oct 2019",
            "yValue0": 82.98,
            "yValue1": 105.98,
            "yValue2": 114.11
        },
        {
            "xValue": "Nov 2019",
            "yValue0": 83.33,
            "yValue1": 106.36,
            "yValue2": 114.49
        },
        {
            "xValue": "Dec 2019",
            "yValue0": 83.64,
            "yValue1": 106.91,
            "yValue2": 114.89
        },
        {
            "xValue": "Jan 2020",
            "yValue0": 83.76,
            "yValue1": 107.55,
            "yValue2": 115.31
        },
        {
            "xValue": "Feb 2020",
            "yValue0": 84.07,
            "yValue1": 108.33,
            "yValue2": 115.77
        },
        {
            "xValue": "Mar 2020",
            "yValue0": 84.56,
            "yValue1": 109.14,
            "yValue2": 116.29
        }
    ],
});