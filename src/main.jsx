import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { store } from './redux/store.js';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
<BrowserRouter>
  <ThemeProvider>
    <App />
  </ThemeProvider>
</BrowserRouter>
</Provider>
)
