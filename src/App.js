import './App.css';
import PatternDivider from './pattern-divider-desktop.svg';
import Icon from './icon-dice.svg'
import  Axios  from 'axios';
import { useState, useEffect } from 'react';
function App() {
  const [advice, setAdvice] = useState('')
  const [id, setId] = useState('')
  const updateAdvice = () => {
    Axios.get(`https://api.adviceslip.com/advice`).then((res) => {
      setAdvice(res.data.slip.advice)
      setId(res.data.slip.id)
      
      
    })
  }
  useEffect(() => {
   updateAdvice()
  
    
  }, [])
  
  return (
    <div className="App">
    <div className='AdviceCon'>
      <span>ADVICE #{id}</span>
    <p>"{advice}" </p>
<img src={PatternDivider} alt=''/>
<div className='smallBox' onClick={updateAdvice}>
  <img src={Icon} alt=''/>
</div>

    </div>
    </div>
  );
}

export default App;
