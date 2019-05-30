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
            "xValue": "Apr 1996",
            "yValue0": 27.90,
            "yValue1": 30.05,
            "yValue2": 49.88
        },
        {
            "xValue": "May 1996",
            "yValue0": 27.94,
            "yValue1": 30.03,
            "yValue2": 49.93
        },
        {
            "xValue": "Jun 1996",
            "yValue0": 28.02,
            "yValue1": 30.01,
            "yValue2": 50.02
        },
        {
            "xValue": "Jul 1996",
            "yValue0": 28.10,
            "yValue1": 29.99,
            "yValue2": 50.12
        },
        {
            "xValue": "Aug 1996",
            "yValue0": 28.22,
            "yValue1": 29.96,
            "yValue2": 50.27
        },
        {
            "xValue": "Sep 1996",
            "yValue0": 28.35,
            "yValue1": 29.94,
            "yValue2": 50.37
        },
        {
            "xValue": "Oct 1996",
            "yValue0": 28.50,
            "yValue1": 29.94,
            "yValue2": 50.52
        },
        {
            "xValue": "Nov 1996",
            "yValue0": 28.64,
            "yValue1": 29.96,
            "yValue2": 50.62
        },
        {
            "xValue": "Dec 1996",
            "yValue0": 28.83,
            "yValue1": 30.01,
            "yValue2": 50.82
        },
        {
            "xValue": "Jan 1997",
            "yValue0": 29.05,
            "yValue1": 30.09,
            "yValue2": 50.97
        },
        {
            "xValue": "Feb 1997",
            "yValue0": 29.26,
            "yValue1": 30.12,
            "yValue2": 51.12
        },
        {
            "xValue": "Mar 1997",
            "yValue0": 29.46,
            "yValue1": 30.11,
            "yValue2": 51.27
        },
        {
            "xValue": "Apr 1997",
            "yValue0": 29.65,
            "yValue1": 30.11,
            "yValue2": 51.37
        },
        {
            "xValue": "May 1997",
            "yValue0": 29.84,
            "yValue1": 30.12,
            "yValue2": 51.52
        },
        {
            "xValue": "Jun 1997",
            "yValue0": 30.00,
            "yValue1": 30.16,
            "yValue2": 51.67
        },
        {
            "xValue": "Jul 1997",
            "yValue0": 30.14,
            "yValue1": 30.24,
            "yValue2": 51.87
        },
        {
            "xValue": "Aug 1997",
            "yValue0": 30.24,
            "yValue1": 30.33,
            "yValue2": 52.07
        },
        {
            "xValue": "Sep 1997",
            "yValue0": 30.34,
            "yValue1": 30.46,
            "yValue2": 52.22
        },
        {
            "xValue": "Oct 1997",
            "yValue0": 30.46,
            "yValue1": 30.61,
            "yValue2": 52.47
        },
        {
            "xValue": "Nov 1997",
            "yValue0": 30.62,
            "yValue1": 30.81,
            "yValue2": 52.67
        },
        {
            "xValue": "Dec 1997",
            "yValue0": 30.88,
            "yValue1": 31.09,
            "yValue2": 52.92
        },
        {
            "xValue": "Jan 1998",
            "yValue0": 31.22,
            "yValue1": 31.38,
            "yValue2": 53.17
        },
        {
            "xValue": "Feb 1998",
            "yValue0": 31.58,
            "yValue1": 31.68,
            "yValue2": 53.47
        },
        {
            "xValue": "Mar 1998",
            "yValue0": 31.92,
            "yValue1": 31.92,
            "yValue2": 53.72
        },
        {
            "xValue": "Apr 1998",
            "yValue0": 32.26,
            "yValue1": 32.14,
            "yValue2": 53.97
        },
        {
            "xValue": "May 1998",
            "yValue0": 32.55,
            "yValue1": 32.35,
            "yValue2": 54.26
        },
        {
            "xValue": "Jun 1998",
            "yValue0": 32.84,
            "yValue1": 32.53,
            "yValue2": 54.56
        },
        {
            "xValue": "Jul 1998",
            "yValue0": 33.12,
            "yValue1": 32.70,
            "yValue2": 54.86
        },
        {
            "xValue": "Aug 1998",
            "yValue0": 33.38,
            "yValue1": 32.86,
            "yValue2": 55.16
        },
        {
            "xValue": "Sep 1998",
            "yValue0": 33.66,
            "yValue1": 33.03,
            "yValue2": 55.41
        },
        {
            "xValue": "Oct 1998",
            "yValue0": 33.94,
            "yValue1": 33.20,
            "yValue2": 55.71
        },
        {
            "xValue": "Nov 1998",
            "yValue0": 34.24,
            "yValue1": 33.38,
            "yValue2": 56.01
        },
        {
            "xValue": "Dec 1998",
            "yValue0": 34.58,
            "yValue1": 33.60,
            "yValue2": 56.31
        },
        {
            "xValue": "Jan 1999",
            "yValue0": 34.93,
            "yValue1": 33.85,
            "yValue2": 56.61
        },
        {
            "xValue": "Feb 1999",
            "yValue0": 35.30,
            "yValue1": 34.10,
            "yValue2": 56.86
        },
        {
            "xValue": "Mar 1999",
            "yValue0": 35.65,
            "yValue1": 34.33,
            "yValue2": 57.06
        },
        {
            "xValue": "Apr 1999",
            "yValue0": 36.04,
            "yValue1": 34.57,
            "yValue2": 57.31
        },
        {
            "xValue": "May 1999",
            "yValue0": 36.47,
            "yValue1": 34.83,
            "yValue2": 57.56
        },
        {
            "xValue": "Jun 1999",
            "yValue0": 36.92,
            "yValue1": 35.10,
            "yValue2": 57.91
        },
        {
            "xValue": "Jul 1999",
            "yValue0": 37.37,
            "yValue1": 35.38,
            "yValue2": 58.25
        },
        {
            "xValue": "Aug 1999",
            "yValue0": 37.86,
            "yValue1": 35.70,
            "yValue2": 58.60
        },
        {
            "xValue": "Sep 1999",
            "yValue0": 38.34,
            "yValue1": 36.03,
            "yValue2": 59.00
        },
        {
            "xValue": "Oct 1999",
            "yValue0": 38.85,
            "yValue1": 36.44,
            "yValue2": 59.35
        },
        {
            "xValue": "Nov 1999",
            "yValue0": 39.38,
            "yValue1": 36.86,
            "yValue2": 59.70
        },
        {
            "xValue": "Dec 1999",
            "yValue0": 39.96,
            "yValue1": 37.34,
            "yValue2": 60.15
        },
        {
            "xValue": "Jan 2000",
            "yValue0": 40.58,
            "yValue1": 37.88,
            "yValue2": 60.60
        },
        {
            "xValue": "Feb 2000",
            "yValue0": 41.13,
            "yValue1": 38.42,
            "yValue2": 61.00
        },
        {
            "xValue": "Mar 2000",
            "yValue0": 41.64,
            "yValue1": 38.90,
            "yValue2": 61.35
        },
        {
            "xValue": "Apr 2000",
            "yValue0": 42.11,
            "yValue1": 39.40,
            "yValue2": 61.65
        },
        {
            "xValue": "May 2000",
            "yValue0": 42.56,
            "yValue1": 39.92,
            "yValue2": 61.95
        },
        {
            "xValue": "Jun 2000",
            "yValue0": 43.02,
            "yValue1": 40.42,
            "yValue2": 62.24
        },
        {
            "xValue": "Jul 2000",
            "yValue0": 43.47,
            "yValue1": 40.94,
            "yValue2": 62.49
        },
        {
            "xValue": "Aug 2000",
            "yValue0": 43.92,
            "yValue1": 41.44,
            "yValue2": 62.74
        },
        {
            "xValue": "Sep 2000",
            "yValue0": 44.39,
            "yValue1": 41.90,
            "yValue2": 62.94
        },
        {
            "xValue": "Oct 2000",
            "yValue0": 44.90,
            "yValue1": 42.36,
            "yValue2": 63.19
        },
        {
            "xValue": "Nov 2000",
            "yValue0": 45.46,
            "yValue1": 42.83,
            "yValue2": 63.44
        },
        {
            "xValue": "Dec 2000",
            "yValue0": 46.09,
            "yValue1": 43.31,
            "yValue2": 63.79
        },
        {
            "xValue": "Jan 2001",
            "yValue0": 46.75,
            "yValue1": 43.79,
            "yValue2": 64.14
        },
        {
            "xValue": "Feb 2001",
            "yValue0": 47.45,
            "yValue1": 44.25,
            "yValue2": 64.49
        },
        {
            "xValue": "Mar 2001",
            "yValue0": 48.19,
            "yValue1": 44.70,
            "yValue2": 64.79
        },
        {
            "xValue": "Apr 2001",
            "yValue0": 48.98,
            "yValue1": 45.12,
            "yValue2": 65.14
        },
        {
            "xValue": "May 2001",
            "yValue0": 49.82,
            "yValue1": 45.55,
            "yValue2": 65.44
        },
        {
            "xValue": "Jun 2001",
            "yValue0": 50.65,
            "yValue1": 45.97,
            "yValue2": 65.69
        },
        {
            "xValue": "Jul 2001",
            "yValue0": 51.50,
            "yValue1": 46.38,
            "yValue2": 65.94
        },
        {
            "xValue": "Aug 2001",
            "yValue0": 52.33,
            "yValue1": 46.79,
            "yValue2": 66.23
        },
        {
            "xValue": "Sep 2001",
            "yValue0": 53.14,
            "yValue1": 47.19,
            "yValue2": 66.48
        },
        {
            "xValue": "Oct 2001",
            "yValue0": 53.91,
            "yValue1": 47.64,
            "yValue2": 66.78
        },
        {
            "xValue": "Nov 2001",
            "yValue0": 54.64,
            "yValue1": 48.08,
            "yValue2": 67.13
        },
        {
            "xValue": "Dec 2001",
            "yValue0": 55.34,
            "yValue1": 48.58,
            "yValue2": 67.43
        },
        {
            "xValue": "Jan 2002",
            "yValue0": 55.99,
            "yValue1": 49.10,
            "yValue2": 67.83
        },
        {
            "xValue": "Feb 2002",
            "yValue0": 56.59,
            "yValue1": 49.62,
            "yValue2": 68.18
        },
        {
            "xValue": "Mar 2002",
            "yValue0": 57.11,
            "yValue1": 50.16,
            "yValue2": 68.53
        },
        {
            "xValue": "Apr 2002",
            "yValue0": 57.61,
            "yValue1": 50.71,
            "yValue2": 68.88
        },
        {
            "xValue": "May 2002",
            "yValue0": 58.06,
            "yValue1": 51.31,
            "yValue2": 69.23
        },
        {
            "xValue": "Jun 2002",
            "yValue0": 58.52,
            "yValue1": 51.93,
            "yValue2": 69.58
        },
        {
            "xValue": "Jul 2002",
            "yValue0": 59.01,
            "yValue1": 52.60,
            "yValue2": 69.88
        },
        {
            "xValue": "Aug 2002",
            "yValue0": 59.56,
            "yValue1": 53.32,
            "yValue2": 70.22
        },
        {
            "xValue": "Sep 2002",
            "yValue0": 60.15,
            "yValue1": 54.06,
            "yValue2": 70.57
        },
        {
            "xValue": "Oct 2002",
            "yValue0": 60.86,
            "yValue1": 54.86,
            "yValue2": 70.97
        },
        {
            "xValue": "Nov 2002",
            "yValue0": 61.62,
            "yValue1": 55.67,
            "yValue2": 71.42
        },
        {
            "xValue": "Dec 2002",
            "yValue0": 62.45,
            "yValue1": 56.49,
            "yValue2": 71.82
        },
        {
            "xValue": "Jan 2003",
            "yValue0": 63.31,
            "yValue1": 57.27,
            "yValue2": 72.22
        },
        {
            "xValue": "Feb 2003",
            "yValue0": 64.18,
            "yValue1": 58.04,
            "yValue2": 72.57
        },
        {
            "xValue": "Mar 2003",
            "yValue0": 65.10,
            "yValue1": 58.86,
            "yValue2": 72.92
        },
        {
            "xValue": "Apr 2003",
            "yValue0": 66.09,
            "yValue1": 59.69,
            "yValue2": 73.37
        },
        {
            "xValue": "May 2003",
            "yValue0": 67.13,
            "yValue1": 60.56,
            "yValue2": 73.77
        },
        {
            "xValue": "Jun 2003",
            "yValue0": 68.23,
            "yValue1": 61.47,
            "yValue2": 74.21
        },
        {
            "xValue": "Jul 2003",
            "yValue0": 69.35,
            "yValue1": 62.43,
            "yValue2": 74.66
        },
        {
            "xValue": "Aug 2003",
            "yValue0": 70.48,
            "yValue1": 63.45,
            "yValue2": 75.11
        },
        {
            "xValue": "Sep 2003",
            "yValue0": 71.56,
            "yValue1": 64.53,
            "yValue2": 75.61
        },
        {
            "xValue": "Oct 2003",
            "yValue0": 72.61,
            "yValue1": 65.62,
            "yValue2": 76.11
        },
        {
            "xValue": "Nov 2003",
            "yValue0": 73.65,
            "yValue1": 66.73,
            "yValue2": 76.71
        },
        {
            "xValue": "Dec 2003",
            "yValue0": 74.73,
            "yValue1": 67.89,
            "yValue2": 77.26
        },
        {
            "xValue": "Jan 2004",
            "yValue0": 75.90,
            "yValue1": 69.15,
            "yValue2": 77.86
        },
        {
            "xValue": "Feb 2004",
            "yValue0": 77.10,
            "yValue1": 70.49,
            "yValue2": 78.50
        },
        {
            "xValue": "Mar 2004",
            "yValue0": 78.34,
            "yValue1": 71.97,
            "yValue2": 79.15
        },
        {
            "xValue": "Apr 2004",
            "yValue0": 79.65,
            "yValue1": 73.60,
            "yValue2": 79.85
        },
        {
            "xValue": "May 2004",
            "yValue0": 81.04,
            "yValue1": 75.34,
            "yValue2": 80.60
        },
        {
            "xValue": "Jun 2004",
            "yValue0": 82.63,
            "yValue1": 77.12,
            "yValue2": 81.35
        },
        {
            "xValue": "Jul 2004",
            "yValue0": 84.43,
            "yValue1": 78.86,
            "yValue2": 82.19
        },
        {
            "xValue": "Aug 2004",
            "yValue0": 86.39,
            "yValue1": 80.50,
            "yValue2": 82.99
        },
        {
            "xValue": "Sep 2004",
            "yValue0": 88.46,
            "yValue1": 82.04,
            "yValue2": 83.74
        },
        {
            "xValue": "Oct 2004",
            "yValue0": 90.57,
            "yValue1": 83.47,
            "yValue2": 84.44
        },
        {
            "xValue": "Nov 2004",
            "yValue0": 92.48,
            "yValue1": 84.76,
            "yValue2": 85.14
        },
        {
            "xValue": "Dec 2004",
            "yValue0": 94.11,
            "yValue1": 86.04,
            "yValue2": 85.79
        },
        {
            "xValue": "Jan 2005",
            "yValue0": 95.44,
            "yValue1": 87.26,
            "yValue2": 86.38
        },
        {
            "xValue": "Feb 2005",
            "yValue0": 96.52,
            "yValue1": 88.45,
            "yValue2": 86.98
        },
        {
            "xValue": "Mar 2005",
            "yValue0": 97.50,
            "yValue1": 89.65,
            "yValue2": 87.63
        },
        {
            "xValue": "Apr 2005",
            "yValue0": 98.41,
            "yValue1": 90.85,
            "yValue2": 88.33
        },
        {
            "xValue": "May 2005",
            "yValue0": 99.17,
            "yValue1": 92.00,
            "yValue2": 89.13
        },
        {
            "xValue": "Jun 2005",
            "yValue0": 99.72,
            "yValue1": 93.13,
            "yValue2": 89.93
        },
        {
            "xValue": "Jul 2005",
            "yValue0": 100.00,
            "yValue1": 94.17,
            "yValue2": 90.77
        },
        {
            "xValue": "Aug 2005",
            "yValue0": 99.97,
            "yValue1": 95.07,
            "yValue2": 91.62
        },
        {
            "xValue": "Sep 2005",
            "yValue0": 99.80,
            "yValue1": 95.91,
            "yValue2": 92.42
        },
        {
            "xValue": "Oct 2005",
            "yValue0": 99.56,
            "yValue1": 96.69,
            "yValue2": 93.17
        },
        {
            "xValue": "Nov 2005",
            "yValue0": 99.33,
            "yValue1": 97.33,
            "yValue2": 93.87
        },
        {
            "xValue": "Dec 2005",
            "yValue0": 99.09,
            "yValue1": 97.91,
            "yValue2": 94.56
        },
        {
            "xValue": "Jan 2006",
            "yValue0": 98.90,
            "yValue1": 98.43,
            "yValue2": 95.21
        },
        {
            "xValue": "Feb 2006",
            "yValue0": 98.70,
            "yValue1": 98.87,
            "yValue2": 95.81
        },
        {
            "xValue": "Mar 2006",
            "yValue0": 98.36,
            "yValue1": 99.30,
            "yValue2": 96.41
        },
        {
            "xValue": "Apr 2006",
            "yValue0": 97.89,
            "yValue1": 99.67,
            "yValue2": 97.01
        },
        {
            "xValue": "May 2006",
            "yValue0": 97.38,
            "yValue1": 99.89,
            "yValue2": 97.51
        },
        {
            "xValue": "Jun 2006",
            "yValue0": 96.84,
            "yValue1": 100.00,
            "yValue2": 98.05
        },
        {
            "xValue": "Jul 2006",
            "yValue0": 96.10,
            "yValue1": 99.89,
            "yValue2": 98.50
        },
        {
            "xValue": "Aug 2006",
            "yValue0": 95.09,
            "yValue1": 99.52,
            "yValue2": 98.85
        },
        {
            "xValue": "Sep 2006",
            "yValue0": 93.90,
            "yValue1": 99.02,
            "yValue2": 99.10
        },
        {
            "xValue": "Oct 2006",
            "yValue0": 92.69,
            "yValue1": 98.54,
            "yValue2": 99.30
        },
        {
            "xValue": "Nov 2006",
            "yValue0": 91.61,
            "yValue1": 98.04,
            "yValue2": 99.40
        },
        {
            "xValue": "Dec 2006",
            "yValue0": 90.80,
            "yValue1": 97.56,
            "yValue2": 99.50
        },
        {
            "xValue": "Jan 2007",
            "yValue0": 90.33,
            "yValue1": 97.13,
            "yValue2": 99.60
        },
        {
            "xValue": "Feb 2007",
            "yValue0": 90.07,
            "yValue1": 96.65,
            "yValue2": 99.70
        },
        {
            "xValue": "Mar 2007",
            "yValue0": 89.78,
            "yValue1": 96.09,
            "yValue2": 99.80
        },
        {
            "xValue": "Apr 2007",
            "yValue0": 89.38,
            "yValue1": 95.43,
            "yValue2": 99.95
        },
        {
            "xValue": "May 2007",
            "yValue0": 88.89,
            "yValue1": 94.70,
            "yValue2": 100.00
        },
        {
            "xValue": "Jun 2007",
            "yValue0": 88.27,
            "yValue1": 93.93,
            "yValue2": 99.75
        },
        {
            "xValue": "Jul 2007",
            "yValue0": 87.48,
            "yValue1": 92.96,
            "yValue2": 99.35
        },
        {
            "xValue": "Aug 2007",
            "yValue0": 86.52,
            "yValue1": 91.80,
            "yValue2": 98.95
        },
        {
            "xValue": "Sep 2007",
            "yValue0": 85.49,
            "yValue1": 90.54,
            "yValue2": 98.60
        },
        {
            "xValue": "Oct 2007",
            "yValue0": 84.40,
            "yValue1": 89.22,
            "yValue2": 98.10
        },
        {
            "xValue": "Nov 2007",
            "yValue0": 83.11,
            "yValue1": 87.87,
            "yValue2": 97.61
        },
        {
            "xValue": "Dec 2007",
            "yValue0": 81.50,
            "yValue1": 86.41,
            "yValue2": 97.06
        },
        {
            "xValue": "Jan 2008",
            "yValue0": 79.73,
            "yValue1": 84.89,
            "yValue2": 96.41
        },
        {
            "xValue": "Feb 2008",
            "yValue0": 78.01,
            "yValue1": 83.23,
            "yValue2": 95.71
        },
        {
            "xValue": "Mar 2008",
            "yValue0": 76.36,
            "yValue1": 81.37,
            "yValue2": 94.96
        },
        {
            "xValue": "Apr 2008",
            "yValue0": 74.79,
            "yValue1": 79.34,
            "yValue2": 94.16
        },
        {
            "xValue": "May 2008",
            "yValue0": 73.43,
            "yValue1": 77.30,
            "yValue2": 93.27
        },
        {
            "xValue": "Jun 2008",
            "yValue0": 72.22,
            "yValue1": 75.37,
            "yValue2": 92.32
        },
        {
            "xValue": "Jul 2008",
            "yValue0": 71.21,
            "yValue1": 73.76,
            "yValue2": 91.47
        },
        {
            "xValue": "Aug 2008",
            "yValue0": 70.43,
            "yValue1": 72.49,
            "yValue2": 90.62
        },
        {
            "xValue": "Sep 2008",
            "yValue0": 69.86,
            "yValue1": 71.43,
            "yValue2": 89.78
        },
        {
            "xValue": "Oct 2008",
            "yValue0": 69.38,
            "yValue1": 70.39,
            "yValue2": 89.03
        },
        {
            "xValue": "Nov 2008",
            "yValue0": 68.93,
            "yValue1": 69.41,
            "yValue2": 88.28
        },
        {
            "xValue": "Dec 2008",
            "yValue0": 68.47,
            "yValue1": 68.47,
            "yValue2": 87.58
        },
        {
            "xValue": "Jan 2009",
            "yValue0": 68.04,
            "yValue1": 67.58,
            "yValue2": 86.93
        },
        {
            "xValue": "Feb 2009",
            "yValue0": 67.60,
            "yValue1": 66.67,
            "yValue2": 86.28
        },
        {
            "xValue": "Mar 2009",
            "yValue0": 67.03,
            "yValue1": 65.65,
            "yValue2": 85.59
        },
        {
            "xValue": "Apr 2009",
            "yValue0": 66.37,
            "yValue1": 64.56,
            "yValue2": 84.84
        },
        {
            "xValue": "May 2009",
            "yValue0": 65.74,
            "yValue1": 63.41,
            "yValue2": 84.04
        },
        {
            "xValue": "Jun 2009",
            "yValue0": 65.13,
            "yValue1": 62.47,
            "yValue2": 83.19
        },
        {
            "xValue": "Jul 2009",
            "yValue0": 64.54,
            "yValue1": 61.93,
            "yValue2": 82.64
        },
        {
            "xValue": "Aug 2009",
            "yValue0": 64.18,
            "yValue1": 61.67,
            "yValue2": 82.19
        },
        {
            "xValue": "Sep 2009",
            "yValue0": 64.18,
            "yValue1": 61.58,
            "yValue2": 81.80
        },
        {
            "xValue": "Oct 2009",
            "yValue0": 64.44,
            "yValue1": 61.64,
            "yValue2": 81.50
        },
        {
            "xValue": "Nov 2009",
            "yValue0": 64.69,
            "yValue1": 61.73,
            "yValue2": 81.35
        },
        {
            "xValue": "Dec 2009",
            "yValue0": 65.13,
            "yValue1": 61.88,
            "yValue2": 81.30
        },
        {
            "xValue": "Jan 2010",
            "yValue0": 65.45,
            "yValue1": 62.01,
            "yValue2": 81.30
        },
        {
            "xValue": "Feb 2010",
            "yValue0": 65.24,
            "yValue1": 62.10,
            "yValue2": 81.40
        },
        {
            "xValue": "Mar 2010",
            "yValue0": 65.33,
            "yValue1": 62.03,
            "yValue2": 81.20
        },
        {
            "xValue": "Apr 2010",
            "yValue0": 66.15,
            "yValue1": 62.04,
            "yValue2": 80.75
        },
        {
            "xValue": "May 2010",
            "yValue0": 66.82,
            "yValue1": 62.19,
            "yValue2": 80.50
        },
        {
            "xValue": "Jun 2010",
            "yValue0": 66.81,
            "yValue1": 62.17,
            "yValue2": 80.50
        },
        {
            "xValue": "Jul 2010",
            "yValue0": 66.68,
            "yValue1": 61.90,
            "yValue2": 80.25
        },
        {
            "xValue": "Aug 2010",
            "yValue0": 66.62,
            "yValue1": 61.64,
            "yValue2": 79.85
        },
        {
            "xValue": "Sep 2010",
            "yValue0": 66.31,
            "yValue1": 61.32,
            "yValue2": 79.40
        },
        {
            "xValue": "Oct 2010",
            "yValue0": 65.49,
            "yValue1": 60.91,
            "yValue2": 78.95
        },
        {
            "xValue": "Nov 2010",
            "yValue0": 64.44,
            "yValue1": 60.45,
            "yValue2": 78.60
        },
        {
            "xValue": "Dec 2010",
            "yValue0": 63.15,
            "yValue1": 59.97,
            "yValue2": 78.10
        },
        {
            "xValue": "Jan 2011",
            "yValue0": 61.88,
            "yValue1": 59.43,
            "yValue2": 77.46
        },
        {
            "xValue": "Feb 2011",
            "yValue0": 61.22,
            "yValue1": 58.99,
            "yValue2": 76.96
        },
        {
            "xValue": "Mar 2011",
            "yValue0": 60.87,
            "yValue1": 58.66,
            "yValue2": 76.56
        },
        {
            "xValue": "Apr 2011",
            "yValue0": 59.94,
            "yValue1": 58.30,
            "yValue2": 76.21
        },
        {
            "xValue": "May 2011",
            "yValue0": 58.90,
            "yValue1": 57.95,
            "yValue2": 75.91
        },
        {
            "xValue": "Jun 2011",
            "yValue0": 58.55,
            "yValue1": 57.62,
            "yValue2": 75.61
        },
        {
            "xValue": "Jul 2011",
            "yValue0": 58.36,
            "yValue1": 57.27,
            "yValue2": 75.26
        },
        {
            "xValue": "Aug 2011",
            "yValue0": 57.83,
            "yValue1": 56.90,
            "yValue2": 75.01
        },
        {
            "xValue": "Sep 2011",
            "yValue0": 57.00,
            "yValue1": 56.53,
            "yValue2": 74.76
        },
        {
            "xValue": "Oct 2011",
            "yValue0": 56.27,
            "yValue1": 56.21,
            "yValue2": 74.61
        },
        {
            "xValue": "Nov 2011",
            "yValue0": 56.06,
            "yValue1": 55.97,
            "yValue2": 74.51
        },
        {
            "xValue": "Dec 2011",
            "yValue0": 56.13,
            "yValue1": 55.80,
            "yValue2": 74.41
        },
        {
            "xValue": "Jan 2012",
            "yValue0": 55.93,
            "yValue1": 55.69,
            "yValue2": 74.21
        },
        {
            "xValue": "Feb 2012",
            "yValue0": 55.64,
            "yValue1": 55.69,
            "yValue2": 74.16
        },
        {
            "xValue": "Mar 2012",
            "yValue0": 55.46,
            "yValue1": 55.90,
            "yValue2": 74.21
        },
        {
            "xValue": "Apr 2012",
            "yValue0": 55.51,
            "yValue1": 56.25,
            "yValue2": 74.36
        },
        {
            "xValue": "May 2012",
            "yValue0": 55.64,
            "yValue1": 56.69,
            "yValue2": 74.56
        },
        {
            "xValue": "Jun 2012",
            "yValue0": 55.81,
            "yValue1": 57.12,
            "yValue2": 74.76
        },
        {
            "xValue": "Jul 2012",
            "yValue0": 56.10,
            "yValue1": 57.54,
            "yValue2": 74.96
        },
        {
            "xValue": "Aug 2012",
            "yValue0": 56.43,
            "yValue1": 57.95,
            "yValue2": 75.21
        },
        {
            "xValue": "Sep 2012",
            "yValue0": 56.78,
            "yValue1": 58.45,
            "yValue2": 75.51
        },
        {
            "xValue": "Oct 2012",
            "yValue0": 57.41,
            "yValue1": 59.04,
            "yValue2": 75.76
        },
        {
            "xValue": "Nov 2012",
            "yValue0": 57.96,
            "yValue1": 59.77,
            "yValue2": 76.01
        },
        {
            "xValue": "Dec 2012",
            "yValue0": 58.63,
            "yValue1": 60.51,
            "yValue2": 76.36
        },
        {
            "xValue": "Jan 2013",
            "yValue0": 59.72,
            "yValue1": 61.19,
            "yValue2": 76.66
        },
        {
            "xValue": "Feb 2013",
            "yValue0": 60.75,
            "yValue1": 62.04,
            "yValue2": 76.96
        },
        {
            "xValue": "Mar 2013",
            "yValue0": 61.57,
            "yValue1": 63.19,
            "yValue2": 77.41
        },
        {
            "xValue": "Apr 2013",
            "yValue0": 62.73,
            "yValue1": 64.51,
            "yValue2": 77.91
        },
        {
            "xValue": "May 2013",
            "yValue0": 63.90,
            "yValue1": 65.86,
            "yValue2": 78.35
        },
        {
            "xValue": "Jun 2013",
            "yValue0": 64.69,
            "yValue1": 67.25,
            "yValue2": 78.85
        },
        {
            "xValue": "Jul 2013",
            "yValue0": 65.38,
            "yValue1": 68.56,
            "yValue2": 79.45
        },
        {
            "xValue": "Aug 2013",
            "yValue0": 66.30,
            "yValue1": 69.69,
            "yValue2": 79.95
        },
        {
            "xValue": "Sep 2013",
            "yValue0": 67.47,
            "yValue1": 70.58,
            "yValue2": 80.45
        },
        {
            "xValue": "Oct 2013",
            "yValue0": 68.67,
            "yValue1": 71.26,
            "yValue2": 80.90
        },
        {
            "xValue": "Nov 2013",
            "yValue0": 69.57,
            "yValue1": 71.80,
            "yValue2": 81.25
        },
        {
            "xValue": "Dec 2013",
            "yValue0": 70.24,
            "yValue1": 72.32,
            "yValue2": 81.55
        },
        {
            "xValue": "Jan 2014",
            "yValue0": 71.11,
            "yValue1": 72.84,
            "yValue2": 82.00
        },
        {
            "xValue": "Feb 2014",
            "yValue0": 72.12,
            "yValue1": 73.45,
            "yValue2": 82.29
        },
        {
            "xValue": "Mar 2014",
            "yValue0": 72.50,
            "yValue1": 74.04,
            "yValue2": 82.64
        },
        {
            "xValue": "Apr 2014",
            "yValue0": 72.35,
            "yValue1": 74.58,
            "yValue2": 83.04
        },
        {
            "xValue": "May 2014",
            "yValue0": 72.48,
            "yValue1": 75.00,
            "yValue2": 83.44
        },
        {
            "xValue": "Jun 2014",
            "yValue0": 72.96,
            "yValue1": 75.41,
            "yValue2": 83.74
        },
        {
            "xValue": "Jul 2014",
            "yValue0": 73.37,
            "yValue1": 75.80,
            "yValue2": 84.14
        },
        {
            "xValue": "Aug 2014",
            "yValue0": 73.80,
            "yValue1": 76.15,
            "yValue2": 84.54
        },
        {
            "xValue": "Sep 2014",
            "yValue0": 73.94,
            "yValue1": 76.49,
            "yValue2": 84.84
        },
        {
            "xValue": "Oct 2014",
            "yValue0": 73.94,
            "yValue1": 76.86,
            "yValue2": 85.09
        },
        {
            "xValue": "Nov 2014",
            "yValue0": 74.25,
            "yValue1": 77.17,
            "yValue2": 85.39
        },
        {
            "xValue": "Dec 2014",
            "yValue0": 74.79,
            "yValue1": 77.54,
            "yValue2": 85.64
        },
        {
            "xValue": "Jan 2015",
            "yValue0": 75.08,
            "yValue1": 78.00,
            "yValue2": 85.94
        },
        {
            "xValue": "Feb 2015",
            "yValue0": 75.42,
            "yValue1": 78.50,
            "yValue2": 86.28
        },
        {
            "xValue": "Mar 2015",
            "yValue0": 75.93,
            "yValue1": 78.97,
            "yValue2": 86.63
        },
        {
            "xValue": "Apr 2015",
            "yValue0": 76.33,
            "yValue1": 79.39,
            "yValue2": 87.03
        },
        {
            "xValue": "May 2015",
            "yValue0": 76.50,
            "yValue1": 79.86,
            "yValue2": 87.53
        },
        {
            "xValue": "Jun 2015",
            "yValue0": 76.65,
            "yValue1": 80.37,
            "yValue2": 88.03
        },
        {
            "xValue": "Jul 2015",
            "yValue0": 77.00,
            "yValue1": 80.84,
            "yValue2": 88.53
        },
        {
            "xValue": "Aug 2015",
            "yValue0": 77.56,
            "yValue1": 81.26,
            "yValue2": 88.83
        },
        {
            "xValue": "Sep 2015",
            "yValue0": 78.10,
            "yValue1": 81.84,
            "yValue2": 89.18
        },
        {
            "xValue": "Oct 2015",
            "yValue0": 78.18,
            "yValue1": 82.36,
            "yValue2": 89.53
        },
        {
            "xValue": "Nov 2015",
            "yValue0": 78.13,
            "yValue1": 82.80,
            "yValue2": 89.93
        },
        {
            "xValue": "Dec 2015",
            "yValue0": 78.34,
            "yValue1": 83.30,
            "yValue2": 90.32
        },
        {
            "xValue": "Jan 2016",
            "yValue0": 78.92,
            "yValue1": 83.84,
            "yValue2": 90.67
        },
        {
            "xValue": "Feb 2016",
            "yValue0": 79.43,
            "yValue1": 84.21,
            "yValue2": 91.07
        },
        {
            "xValue": "Mar 2016",
            "yValue0": 79.97,
            "yValue1": 84.54,
            "yValue2": 91.52
        },
        {
            "xValue": "Apr 2016",
            "yValue0": 80.39,
            "yValue1": 84.95,
            "yValue2": 92.07
        },
        {
            "xValue": "May 2016",
            "yValue0": 80.79,
            "yValue1": 85.37,
            "yValue2": 92.67
        },
        {
            "xValue": "Jun 2016",
            "yValue0": 81.11,
            "yValue1": 85.78,
            "yValue2": 93.22
        },
        {
            "xValue": "Jul 2016",
            "yValue0": 81.14,
            "yValue1": 86.30,
            "yValue2": 93.82
        },
        {
            "xValue": "Aug 2016",
            "yValue0": 81.02,
            "yValue1": 86.95,
            "yValue2": 94.41
        },
        {
            "xValue": "Sep 2016",
            "yValue0": 81.28,
            "yValue1": 87.67,
            "yValue2": 95.06
        },
        {
            "xValue": "Oct 2016",
            "yValue0": 82.03,
            "yValue1": 88.37,
            "yValue2": 95.71
        },
        {
            "xValue": "Nov 2016",
            "yValue0": 82.66,
            "yValue1": 89.00,
            "yValue2": 96.21
        },
        {
            "xValue": "Dec 2016",
            "yValue0": 82.70,
            "yValue1": 89.59,
            "yValue2": 96.71
        },
        {
            "xValue": "Jan 2017",
            "yValue0": 82.34,
            "yValue1": 90.21,
            "yValue2": 97.26
        },
        {
            "xValue": "Feb 2017",
            "yValue0": 82.22,
            "yValue1": 90.72,
            "yValue2": 97.86
        },
        {
            "xValue": "Mar 2017",
            "yValue0": 82.25,
            "yValue1": 91.22,
            "yValue2": 98.45
        },
        {
            "xValue": "Apr 2017",
            "yValue0": 82.38,
            "yValue1": 91.76,
            "yValue2": 99.15
        },
        {
            "xValue": "May 2017",
            "yValue0": 82.57,
            "yValue1": 92.33,
            "yValue2": 99.85
        },
        {
            "xValue": "Jun 2017",
            "yValue0": 82.82,
            "yValue1": 92.98,
            "yValue2": 100.40
        },
        {
            "xValue": "Jul 2017",
            "yValue0": 83.02,
            "yValue1": 93.61,
            "yValue2": 100.95
        },
        {
            "xValue": "Aug 2017",
            "yValue0": 83.14,
            "yValue1": 94.22,
            "yValue2": 101.65
        },
        {
            "xValue": "Sep 2017",
            "yValue0": 83.45,
            "yValue1": 94.87,
            "yValue2": 102.24
        },
        {
            "xValue": "Oct 2017",
            "yValue0": 83.92,
            "yValue1": 95.52,
            "yValue2": 102.69
        },
        {
            "xValue": "Nov 2017",
            "yValue0": 84.22,
            "yValue1": 96.13,
            "yValue2": 103.19
        },
        {
            "xValue": "Dec 2017",
            "yValue0": 84.34,
            "yValue1": 96.78,
            "yValue2": 103.69
        },
        {
            "xValue": "Jan 2018",
            "yValue0": 84.60,
            "yValue1": 97.59,
            "yValue2": 104.39
        },
        {
            "xValue": "Feb 2018",
            "yValue0": 84.87,
            "yValue1": 98.50,
            "yValue2": 105.19
        },
        {
            "xValue": "Mar 2018",
            "yValue0": 84.97,
            "yValue1": 99.06,
            "yValue2": 105.94
        },
        {
            "xValue": "Apr 2018",
            "yValue0": 84.98,
            "yValue1": 99.31,
            "yValue2": 106.58
        },
        {
            "xValue": "May 2018",
            "yValue0": 85.17,
            "yValue1": 99.69,
            "yValue2": 107.28
        },
        {
            "xValue": "Jun 2018",
            "yValue0": 85.57,
            "yValue1": 100.06,
            "yValue2": 107.98
        },
        {
            "xValue": "Jul 2018",
            "yValue0": 86.05,
            "yValue1": 100.33,
            "yValue2": 108.58
        },
        {
            "xValue": "Aug 2018",
            "yValue0": 86.49,
            "yValue1": 100.70,
            "yValue2": 109.23
        },
        {
            "xValue": "Sep 2018",
            "yValue0": 86.83,
            "yValue1": 101.09,
            "yValue2": 109.88
        },
        {
            "xValue": "Oct 2018",
            "yValue0": 86.96,
            "yValue1": 101.46,
            "yValue2": 110.62
        },
        {
            "xValue": "Nov 2018",
            "yValue0": 87.09,
            "yValue1": 101.70,
            "yValue2": 111.37
        },
        {
            "xValue": "Dec 2018",
            "yValue0": 87.32,
            "yValue1": 101.83,
            "yValue2": 112.07
        },
        {
            "xValue": "Jan 2019",
            "yValue0": 87.67,
            "yValue1": 101.87,
            "yValue2": 112.62
        },
        {
            "xValue": "Feb 2019",
            "yValue0": 87.88,
            "yValue1": 101.81,
            "yValue2": 113.07
        },
        {
            "xValue": "Mar 2019",
            "yValue0": 88.00,
            "yValue1": 101.67,
            "yValue2": 113.22
        },
        {
            "xValue": "Apr 2019",
            "yValue0": 88.11,
            "yValue1": 101.46,
            "yValue2": 113.12
        }
    ],
});