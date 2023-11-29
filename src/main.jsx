import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HawkinsProvider } from '@hawkins/components';

export const WrappedApp = () => (
  <>
    {/* Theme can be "light" or "dark", default to "light" */}
    <React.StrictMode>
      <HawkinsProvider theme='dark'>
        <App />
      </HawkinsProvider>
    </React.StrictMode>  
  </>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <WrappedApp />,
)
