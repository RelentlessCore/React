import { createRoot } from 'react-dom/client';
import App from './App'; // Adjust path if necessary
import './index.css';

// Get the root DOM node
const container = document.getElementById('root');

// Create a root using React 18's `createRoot`
const root = createRoot(container);

// Render the React App
root.render(<App />);