import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import tabs from "./tabs.json";
import Tab from "./components/Tab";
import LazyLoadComponent from "./components/LazyLoadComponent";

const App = () => (
  <div>
    <ul>
      {tabs.map((tab) => (
        <li key={tab.id}>
          <Tab tab={tab} />
        </li>
      ))}
    </ul>

    <Routes>
      {tabs.map((tab) => (
        <Route
          key={tab.id}
          path={tab.id}
          element={<LazyLoadComponent path={tab.path} />}
        />
      ))}

      <Route index element={<Navigate to={tabs[0].id} />} />

      <Route path="*" element={<Navigate to={tabs[0].id} />} />
    </Routes>
  </div>
);

export default App;
