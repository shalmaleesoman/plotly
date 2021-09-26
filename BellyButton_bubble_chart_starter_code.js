// // Bar and Bubble charts
// // Create the buildCharts function.
// function buildCharts(sample) {
//   // Use d3.json to load and retrieve the samples.json file 
//   d3.json("samples.json").then((data) => {
    

//     // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
//     Plotly.newPlot(); 

//     // 1. Create the trace for the bubble chart.
//     var bubbleData = [
   
//     ];

//     // 2. Create the layout for the bubble chart.
//     var bubbleLayout = {
      
//     };

//     // 3. Use Plotly to plot the data with the layout.
//     Plotly.newPlot(); 
//   });
// }

var bubbleData = [{
    x: otu_id,
    y: sample_value,
    text: otu_label,
    mode: 'markers',
    marker:{
      size: sample_value,
      color: otu_id,
      colorscale: "Earth"

    }

  }
  ];

  // 2. Create the layout for the bubble chart.
  var bubbleLayout = {
    title: "Bacteria Culture Per Sample",
    xaxis: {
      title: {text:"OTU ID"}
    }


  };

  // 3. Use Plotly to plot the data with the layout.
  Plotly.newPlot('bubble', bubbleData, bubbleLayout);