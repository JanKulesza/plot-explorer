import { Route,  Routes } from 'react-router-dom'
import PlotListingsPage from './pages/PlotListingsPage'
import Layout from './Layout'

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<PlotListingsPage />} />
      </Route>
    </Routes>
  )
}

export default App
