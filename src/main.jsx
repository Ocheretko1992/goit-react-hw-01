import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hello Oleh+</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Gzgo4hvpbkNQgIIQ2PaCik9zw04n5OEo5eK6l2f27A&s"
        alt="Корабль"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        natus enim totam eius quaerat facilis eum eos, officia provident dolorem
        possimus necessitatibus animi veritatis nulla assumenda, dignissimos
        molestiae debitis accusamus!
      </p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
