// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    var samplesArray = data.samples;

    // Create a variable that filters the samples for the object with the desired sample number.
    var sampleNumber = samplesArray.filter(sampleID => sampleID.id == sample);

    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metaArray = data.metadata;
    console.log(metaArray);
    var metaNumber = metaArray.filter(metaObj => metaObj.id == sample);
    console.log(metaNumber);

    // Create a variable that holds the first sample in the array.
  
    var sampleResult = sampleNumber[0];
    console.log(sampleResult.otu_ids);
  

    // 2. Create a variable that holds the first sample in the metadata array.
    var metaResult = metaNumber[0];
    console.log(metaResult);

    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_id = sampleResult.otu_ids;
    var otu_label = sampleResult.otu_labels;
    var sample_value = sampleResult.sample_values;


    // 3. Create a variable that holds the washing frequency.
    var metaFreq = parseFloat(metaResult.wfreq);
    console.log(metaFreq);

   
    // Create the yticks for the bar chart.
    var yticks = otu_id.slice(0, 10).reverse().map(x => "OTU " + x);
    console.log(yticks);


    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot('bar', barData, barLayout);
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot('bubble', bubbleData, bubbleLayout); 
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [
     
      {
        value: metaFreq,
        type: "indicator",
        mode: "gauge+number",
        title: {text: "Scrubs per Week"},
        gauge:{
          axis: {range: [null, 10], tick0: 0, dtick: 2},
          bar: { color: "black"},
          steps: [
            {range: [0,2], color: "red" },
            {range: [2,4], color: "orange"},
            {range: [4,6], color: "yellow"},
            {range: [6,8], color: "lightgreen"},
            {range: [8,10], color: "green"}
          ]
        }
      }
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      title: {
        text:"<b>Belly Button Washing Frequency</b>"}
 };
    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot(gauge, gaugeData, gaugeLayout);


    
  });
}

init();
