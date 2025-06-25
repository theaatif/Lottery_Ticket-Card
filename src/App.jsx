import './App.css'
import { sum } from './helper'
import Lottery from './Lottery'


function App() {
  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  }

  return (
  <> 
    <Lottery n={3} winCondition={winCondition}/> {/* here we passing function as a props i,e winCondition */}
  </> 
   
  )
} 
 
export default App
