import './App.css'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to Track My Wallet!</h1>
        <div className="header-logo">$</div>
      </header>
      <Dashboard />
    </div>
  )
}

export default App
