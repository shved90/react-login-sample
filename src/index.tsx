import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './tailwind.generated.css'
import './index.css'
import App from './App'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement as any)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)