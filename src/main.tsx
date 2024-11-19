import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from "./redux/store";
import { store } from './redux/store.ts';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>

      <PersistGate persistor={persistor}>

        <App />

      </PersistGate>

    </Provider>
  </StrictMode>,
)
