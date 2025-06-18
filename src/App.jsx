// src/App.jsx
import ColorBox from './components/ColorBox'
import './App.css'

function App() {
  return (
    <div style={{ maxWidth: 400, margin: '2rem auto' }}>
      {/* Заголовок демонстрации хуков */}
      <h1 style={{ textAlign: 'center' }}>Пример useState + useEffect</h1>
      {/* Вставляем компонент с цветным блоком */}
      <ColorBox />
    </div>
  )
}

export default App
