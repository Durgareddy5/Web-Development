import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counterapp from './components/CounterApp.jsx'
import Garage from './components/Garage.jsx'
import Car from './components/Car.jsx'
import ReactForm from './components/ReactForm.jsx'
import RouterComp from './components/RouterComp.jsx'
import TablePagination from './components/TablePagination.jsx'
import PasswordStrengthChecker from './components/PasswordStrengthChecker.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TablePagination />
  </StrictMode>,
)
