import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { TerminalContextProvider } from "react-terminal";

createRoot(document.getElementById('root')).render(
  <TerminalContextProvider>
    <StrictMode>
      <App />
    </StrictMode>,
  </TerminalContextProvider>

)
