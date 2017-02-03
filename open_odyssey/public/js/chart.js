anychart.onDocumentReady(function() {

  // data
  var data = anychart.data.set([
    ["Department Stores", 637166],
    ["Discount Stores", 721630],
    ["Men's/Women's Specialty Stores", 148662],
    ["All other outlets", 90000]
  ]);

  // chart type
  chart = anychart.bar();

  // set data
  chart.bar(data);

  // set title
  chart.title("Bar Chart");

  // set axes titles
  chart.xAxis().title("Retail Channel");
  chart.yAxis().title("Sales");

  // draw chart
  chart.container("container");
  chart.draw();
});