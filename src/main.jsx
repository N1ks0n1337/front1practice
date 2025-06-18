// src/main.jsx — точка входа приложения
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Патч для корректной работы Ant Design с React 19
import '@ant-design/v5-patch-for-react-19'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Оборачиваем в StrictMode для выявления потенциальных проблем */}
    <App />
  </StrictMode>
)
