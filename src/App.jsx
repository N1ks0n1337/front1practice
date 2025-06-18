import ColorBox from "./components/ColorBox"
import './App.css';

function App() {

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto' }}>
      <h1 style={{ textAlign: 'center' }}>Пример useState + useEffect</h1>
      <ColorBox />
    </div>
  )
}

export default App
