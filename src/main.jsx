import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import App from "./components/App.jsx";
import "./index.css";
import HabitsReducer from "./slice/HabitSlice.jsx";

const store = configureStore({
  reducer: {
	habits: HabitsReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
