import React from "react";

function App() {
  const maindiv = {
    backgroundColor: "#F6EEE3",
    fontFamily: "Arial",
    textAlign: "center",
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
    boxSizing: "border-box",
  };
  return (
    <div style={maindiv}>
      <header>
        <h1>
          <i>The Lorem Ipsum</i>
        </h1>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales
        lacus ac nulla blandit, non pellentesque orci hendrerit. Quisque at
        massa a leo convallis pulvinar tincidunt a magna. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed
        scelerisque dolor vitae lectus sollicitudin ullamcorper ac nec arcu.
        Vestibulum iaculis mi ac sem ultrices efficitur. Sed euismod pulvinar
        magna, vel semper turpis. Fusce dapibus, ipsum sit amet imperdiet
        bibendum, enim velit aliquet purus, scelerisque venenatis tellus orci et
        dui. Fusce condimentum nunc mattis, placerat lacus ac, cursus erat.
        Donec fermentum rhoncus tincidunt. Nam dui mauris, molestie at nisi ac,
        vehicula tincidunt mi. Interdum et malesuada fames ac ante ipsum primis
        in faucibus. Nullam vitae nisi orci. Integer ultrices erat ac sapien
        lacinia ullamcorper. Fusce scelerisque placerat tempor.
      </p>
    </div>
  );
}

export default App;
