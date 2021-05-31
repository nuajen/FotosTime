import React from "react";
import ReactDOM from "react-dom";

const fName = "Nuaj";
const lName = "Hassel";
const currentDate = new Date();
const year = currentDate.getFullYear();
import "./styles.css";

const currentTime = new Date().getHours();

let timeOfDay = "noche"; // not used

let timeOfDayColor = "#313131";
let timeOfDayMessage = "¡Buenas noches Escondido!";

if (currentTime < 12 && currentTime >= 0) {
  timeOfDay = "mañana";

  timeOfDayColor = "royalblue";
  timeOfDayMessage = "¡Buenos días Escondido!";
} else if (currentTime >= 12 && currentTime <= 18) {
  timeOfDay = "tarde";

  timeOfDayColor = "purple";
  timeOfDayMessage = "¡Buenas tardes Escondido!";
}

const customStyle = {
  color: "royalblue",
  paddingLeft: 40
};

const img1 = "https://picsum.photos/200/400?random=1a";
const img2 = "https://picsum.photos/200/400?random=2a";
const img3 = "https://picsum.photos/200/400?random=3a";
const img4 = "https://picsum.photos/200/400?random=4a";

//practicing inline styling and css styling in react component

ReactDOM.render(
  <div className="App">
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      <h1
        className="heading"
        style={{ padding: 40, backgroundColor: timeOfDayColor }}
      >
        {timeOfDayMessage}
      </h1>
    </div>

    <h2 style={{ color: "rosybrown", paddingLeft: "40px" }}>
      Fotos al azar cada vez que refrescas la página
    </h2>
    <ul>
      <img alt="A random picture" style={{ marginRight: "20px" }} src={img1} />
      <img alt="A random picture" style={{ marginRight: "20px" }} src={img2} />
      <img alt="A random picture" style={{ marginRight: "20px" }} src={img3} />
      <img alt="A random picture" style={{ marginRight: "20px" }} src={img4} />
    </ul>

    <h3 className="firma" style={{ paddingLeft: 40 }}>
      Created by {fName} {lName}
    </h3>

    <p style={customStyle}>💀Copyright {year}💀 </p>
  </div>,

  document.getElementById("root")
);
