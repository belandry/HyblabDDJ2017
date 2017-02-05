var myConfig = {
  type: "hbar",
  title: {
    text: "Une grande précarité",
    fontColor: "#555",
    fontSize: 30,
    fontFamily: "Roboto",
    fontWeight: 'normal',
    offsetX: 10
  },
    subtitle: {
    offsetY: 15,
    text: "Comparaison des revenues entre Bellevue et Nantes",
    fontFamily: "Roboto",
    fontSize: 16,
    fontColor: "#777",
    offsetX: 10
  },
  tooltip:{
    padding: 10,
    fontSize: 14,
    text: "%v€ ",
    backgroundColor: "#fff",
    fontColor: "#444",
    borderRadius: "5px",
    borderColor: "#333",
    borderWidth: 1
  },
 
  legend: {
    backgroundColor: "transparent",
    borderWidth: "0px",
    highlightPlot: true,
    item: {
      fontSize: 18,
      fontColor: "#666",
      fontFamily: "Roboto",
      
    },
    marker:{

      borderRadius: 10,
      borderWidth: "0px",
    },
    cursor: "hand"
  },
  plotarea:{//margin:'dynamic'
  margin: "100 130 70 100"
  
},
  plot:{
    borderRadius: "0 5 5 0",
    hightlightMarker: {
      backgroundColor:"red"
    },
    highlightState: {
      backgroundColor:"red"
    },
     animation:{
      effect: 4,
      method: 0,
      sequence: 1
    }
  },
  source: {
    text: "Source: Insee, RP 2012",
    fontColor: "#666",
    fontFamily: 'Roboto'
  },
  scaleX: {
    labels: ['Premier Décile','Revenue Médian'],
    item: {
      fontFamily: "Roboto",
      fontSize: 14
    },
    lineColor: "#DDD",
    tick:{
      visible: false
    }
  },
  scaleY: {
    label:{
      offsetY: 5,
      text: "Revenue (en €)",
      fontColor: "#777",
      fontSize: 14,
      fontFamily: "Roboto",
    },
    item: {
      // fontColor: "#fff",
      fontFamily: "Roboto",
      fontSize: 14
    },
    lineWidth: 0,
    tick: {
      visible: false
    },
    guide:{
      lineStyle: "solid",
      lineColor: "#DDD"
    },
    values: "0:2000:50"
  },
  series : [
    {
      text: "Bellevue",
      // values: [4820, 8067, 12000, 12100, 12282, 12540],
      values: [163,1002],
      backgroundColor: "#C0392B",
      rules: [
        { rule: '%i==0', backgroundColor: '#C0392B'},
        { rule: '%i==1', backgroundColor: '#C0392B'},
     
      ]
    },
 
    {
      text: "Nantes",
      // values: [2670, 6041, 11400, 11500,9832, 9275],
      values: [679, 1769],
      backgroundColor: "#2471A3",
      rules: [
        { rule: '%i==0', backgroundColor: '#2471A3'},
        { rule: '%i==1', backgroundColor: '#2471A3'},
        
      ]
    },
    
  ]
};
 
zingchart.render({ 
  id : 'myChart', 
  data : myConfig, 
  height: 500, 
  width: 725 
});




/*  return {
    "text": text,
    //"background-color": "#90A23B",
    "font-size": "14px",
    "font-family": "arial",
    "font-weight": "normal",
    "font-color": "#FFFFFF",
    "textAlign":"left",
    "width":100,
    "hook":"scale:name=scale-x;index="+index+";",
    "offsetX":60,
    "shadow": false,
    "flat": true // no event listener
  }
}
 
var myConfig = {
  "type": "hbar", 
    // fond 
 "title": {
                "text": "Revenue ",
                
                "background-color": "#f7f7f7 #e3e3e9",
                "font-family": "Passion One",
                "font-size": "24px",
                "font-color": "#4f4f4f",
                "border-radius-top-left": 10,
                "border-radius-top-right": 10,
                offsetX: 10
            },
 
 
 labels : [
    createLabel('Bellevue', 0,0),
    createLabel('Nantes', 0,1),
    
  ],
  plot: {
    "border-radius-top-left": 10,
                "border-radius-top-right": 10,
                "value-box": {
                    "visible": false,
                    "font-color": "#fff",
                    "placement": "in",
                    "font-angle": -90,
                    "offset-y": "20px",
                    "font-size": "10px",
                    "font-weight": "normal"
                },
    stacked:true,
    animation: {
      effect:3,
      sequence: 1,
      speed: 700,
      delay: 600
    }
  },
  plotarea:{margin:'dynamic'
},
  tooltip:{
    text:'%v€',
    "tooltip":{
              "border-radius":2
            }
  },
  scaleX:{
    visible:false


  },
  scaleY:{
    format:'%v€',
    label:{
      text:'Revenue (en Euros)',
       offsetY : 4
    }
  },
   "scale-y": {
                "values": [
                    "Bellevue",
                    "Nantes",
                   
                ],
     "item": {
                    "font-color": "#fff"
                },
                "line-color": "#fff",
                "line-width": "1px",
                "tick": {
                    "visible": false
                },
                "guide": {
                    "line-width": "1px",
                    "line-color": "#fff",
                    "line-style": "solid",
                    "alpha": 0.2
                },
                "markers": [
                    {
                        "type": "area",
                        "range": [
                            3.5,
                            5
                        ],
                        "background-color": "fff",
                        "alpha": 0.3
                    }
                ]
               
            },
  "scale-x": {
                "label": {
                    "text": "UNITS",
                    "font-color": "#fff",
                    "offset-x": "-10px"
                },
                "multiplier": true,
                "item": {
                    "font-color": "#fff"
                },
                "line-color": "#fff",
                "line-width": "1px",
                "tick": {
                    "visible": false
                },
                "guide": {
                    "line-width": "1px",
                    "line-color": "#fff",
                    "line-style": "solid",
                    "alpha": 0.2
                }

            },
   "legend": {
                "layout": "h",
                "background-color": "#6c6e72",
                "border-width": 0,
                "shadow": 0,
                "y": "46px",
                "toggle-action": "remove",
                "item": {
                    "font-color": "#fff"
                },
                "marker": {
                    "type": "circle",
                    "size": 6
                }
            },
   "series":[
      {
          "text" : "Premier Décile",
          "values":[163,1002],
          "background-color": "#a50617",
          "background-fit": "xy"
        },

        {
          "text" : "Revenue Médian",
          "values" : [679,1769],
          "background-fit": "xy"
        
      }

  ]
};
 
zingchart.render({ 
  id : 'myChart', 
  data : myConfig, 
  height: "100%", 
  width: "100%" 
});
*/