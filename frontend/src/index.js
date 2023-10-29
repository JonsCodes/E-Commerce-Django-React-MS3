import React from 'react';
import { createRoot } from 'react-dom/client'; // Update the import here
import '../src/Styles/index.css';
import App from './App';
import reportWebVitals from '../src/contexts/reportWebVitals';
import { AuthProvider } from '../src/contexts/AuthProvider';


const Root = () => (
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

const root = createRoot(document.getElementById('root')); // Update the createRoot function
root.render(<Root />);

reportWebVitals();
