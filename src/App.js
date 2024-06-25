import React, { useEffect, useState } from "react";
import axios from "axios";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from './pages/home';
import EmptyPage from './pages/empty';

function App() {
  const [, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<EmptyPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;