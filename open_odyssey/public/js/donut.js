var myConfig = {
  "type":"ring",
  "title":{
    "text":"Bellevue, "
  },
  "subtitle":{
    "text":"quartier prioritaire le plus peuplée de l’agglomération nantaise",
    "font-weight":"normal",
    "font-size":15
  },
  "plot":{
    "value-box":{
      "text":"%pie-total-value",
      "placement":"center",
      "font-color":"black",
      "font-size":35,
      "font-family":"Georgia",
      "font-weight":"normal",
      "rules":[
        {
          "rule":"%p != 0",
          "visible":false
        }
      ]
    },
      "animation": {
      "delay": "80",
      "effect": "4",
      "method": "6",
      "sequence": "1"
    },
      "tooltip":{
      "text":"%t: %v (%npv%)",
      "font-color":"black",
      "font-family":"Georgia",
      "text-alpha":1,
      "background-color":"white",
      "alpha":0.7,
      "border-width":1,
      "border-color":"#cccccc",
      "line-style":"dotted",
      "border-radius":"10px",
      "padding":"10%",
      "placement":"node:center"
    },
    "slice":"50%",
    "border-width":1,
    "border-color":"#cccccc",
    "line-style":"solild"
  },
  "plotarea":{
    "margin-top":"12%"
  },
  "series":[
    {
      "values":[19424],
      "background-color":"#cc0000",
      "text": "Bellevue Nantes St Herblain"
    },
    {
      "values":[4973],
      "background-color":"#ff3300",
      "text":"Dervaillières"
    },
    {
      "values":[3085],
      "background-color":"#ff6600",
      "text":"Malakoff"
    },
    {
      "values":[3932],
      "background-color":"#ff9933",
      "text":"Breil Malville"
    },
    {
      "values":[11594],
      "background-color":"#ffcc00",
      "text":"Quartier Nord"
    },
    {
      "values":[2179],
      "background-color":"#ace600",
      "text":"Port Boyer"
    },
    {
      "values":[5348],
      "background-color":"#88cc00",
      "text":"Bottière pin sec"
    },
    {
      "values":[2498],
      "background-color":"#339933",
      "text":"Clos Toreau"
    },
    {
      "values":[4727],
      "background-color":"#66ccff",
      "text":"La Halveque"
    },
    {
      "values":[1843],
      "background-color":"#3399ff",
      "text":"Sillon de Bretagne"
    },
    {
      "values":[4035],
      "background-color":"#0066ff",
      "text":"Château"
    },
    {
      "values":[2470],
      "background-color":"#3333cc",
      "text":"Plaisance"
    },
    {
      "values":[2664],
      "background-color":"#6600ff",
      "text":"Ranzay grand clos"
    }
  ]
};

zingchart.render({ 
	id : "myChart", 
	data : myConfig, 
	height: 400, 
	width: "100%" 
});