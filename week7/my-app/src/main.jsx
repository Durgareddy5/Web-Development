import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counterapp from './components/CounterApp.jsx'
import Garage from './components/Garage.jsx'
import Car from './components/Car.jsx'
import ReactForm from './components/ReactForm.jsx'
import ReactForms from './components/ReactForms.jsx'
import RouterComps from './components/RouterComps.jsx'
import TablePagination from './components/TablePagination.jsx'
import TablePaginations from './components/TablePaginations.jsx'
import PasswordStrengthChecker from './components/PasswordStrengthChecker.jsx'
import Pass from './components/Pass.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pass/>
  </StrictMode>,
)
