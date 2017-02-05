function createLabel(text, plot, index) {
  return {
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
  "background-color": "#898d95 #4f4f4f",   // fond 
 "title": {
                "text": "Revenue ",
                "align":"left",
                
                "background-color": "#f7f7f7 #e3e3e9",
                "font-family": "Passion One",
                "font-size": "24px",
                "font-color": "#4f4f4f",
                "border-radius-top-left": 10,
                "border-radius-top-right": 10,
                offsetX: 10
            },
 
 
 labels : [
    createLabel('Premier Décile', 0,0),
    createLabel('Revenue Médian', 0,1),
    
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
  plotarea:{margin:'dynamic',
  "background-color": "#6c6e72"
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
                    "Premier Décile",
                    "Revenue Médian",
                   
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
                "background-color": "none",
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
          "text" : "Bellevue",
          "values":[163,1002],
          "background-color": "#a50617",
          "background-fit": "xy"
        },

        {
          "text" : "Nantes",
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