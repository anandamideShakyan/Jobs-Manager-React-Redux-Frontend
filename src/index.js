import React from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<Provider store={store}>
		<App tab="home" />
	</Provider>
);