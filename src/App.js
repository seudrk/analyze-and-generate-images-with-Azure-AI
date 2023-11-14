import React from 'react';

function ContentAnalysis() {
  return (
    <div>
      <h1>Content Analysis Tool</h1>
      <input type="text" placeholder="Enter a URL" id="User_input"/>
      <button onClick={analyzeButtonClick}>Analyze</button>
      <button onClick={generateButtonClick}>Generate</button>
    </div>
  );
}

const analyzeButtonClick = () => {
  // Code to analyze the entered URL goes here
  console.log("Analyzing...");
  VisionServiceOptions
  VisionSource
};

const generateButtonClick = () => {
  // Code to generate content based on the analysis goes here
  console.log("Generating...");
};

const VisionServiceOptions = () => {
  serviceOptions = new VisionServiceOptions(
  new URL(System.getenv("VISION_ENDPOINT")),
  System.getenv("VISION_KEY"));
}

function othername() {
  var input = document.getElementById("User_input").value;
  alert(input);
}

const VisionSource = () => {
  imageSource = VisionSource.fromUrl(
      new URL(othername()));
}

export default ContentAnalysis;