import React from "react";

import { Route, Routes } from "react-router-dom";
import RoutesSetting from "./Router/Routes";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<RoutesSetting />}></Route>
    </Routes>
  );
};

export default App;
