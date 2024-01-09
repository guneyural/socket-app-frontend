import { useEffect, useState } from "react";
import "./styles/App.css";
import { initializeSocket, socket } from "./socket";

initializeSocket();

function App() {
  /*
      Array of objects
      example object: {value: 1, timestamp: "2024-01-10T08:30:45.123Z"}
  */

  const [StockMarket, setStockMarket] = useState("General");
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const handleStockPrices = (data) => {
      setDatas((prevDatas) => [data, ...prevDatas]);
    };

    socket.on("listen stock prices", handleStockPrices);

    return () => {
      socket.off("listen stock prices", handleStockPrices);
    };
  }, []);

  const listenStockMarket1 = () => {
    setDatas([]);
    socket.emit("join stock market 1");
  };

  const listenStockMarket2 = () => {
    setDatas([]);
    socket.emit("join stock market 2");
  };

  const stopListeningStockMarkets = () => {
    setDatas([]);
    socket.emit("stop listening all stock markets");
  };

  return (
    <div className="App">
      <h1>Socket Connection</h1>
      <button onClick={listenStockMarket1}>Stock Market 1</button>
      <button onClick={listenStockMarket2}>Stock Market 2</button>
      <button onClick={stopListeningStockMarkets}>
        Stop Listening Stock Markets
      </button>

      <h3>{StockMarket}</h3>
      {datas.map((data, index) => {
        return (
          <p key={index}>
            {data.value} {data.timestamp}
          </p>
        );
      })}
    </div>
  );
}

export default App;
