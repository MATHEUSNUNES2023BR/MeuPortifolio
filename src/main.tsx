import { createRoot } from 'react-dom/client'
import App from './App.tsx'

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
} else {
    console.error('Target container is not a DOM element.');
}
