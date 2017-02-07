var myConfig = {
  type: "hbar",
  backgroundColor : "#ffd44a",

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
    labels: ['1er Décile','Médian'],
    item: {
      fontFamily: "Roboto",
      fontSize: 14,
      margin : "dynamic"

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

    values: "0:2000:200"

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

  id : 'mine', 
  data : myConfig, 
  height: 500, 
  width: 900 
});