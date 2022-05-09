import App from './app';
import { createRoot } from 'react-dom/client';
const rootElement = document.getElementById("root") as Element | DocumentFragment;
const container = createRoot(rootElement);
  container.render(<App />);
