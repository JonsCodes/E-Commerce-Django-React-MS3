import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './contexts/reportWebVitals';
import { AuthProvider } from './contexts/AuthProvider';
import { ShopProvider } from './contexts/shop-context'; // Adjust the import path

const Root = () => (
  <React.StrictMode>
    <AuthProvider>
      <ShopProvider>
        <App />
      </ShopProvider>
    </AuthProvider>
  </React.StrictMode>
);

const root = createRoot(document.getElementById('root'));
root.render(<Root />);

reportWebVitals();

