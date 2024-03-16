import React, { useState } from 'react'
import './App.css'

function App() {

  const [text, setText] = useState('Do you Love me.. ?');
  const [showEmoji, setShowEmoji] = useState('');
  const [count, setCount] = useState(1);

  function handleYes(){
    setText('I Love You Too...')
    setShowEmoji('yes');
    setCount(1); 
  }

  function handleNo(){
    if(count == 1){
      setText('Soch lo ek bar fir...');
      setShowEmoji('no1');
      setCount(2);
    }
    if(count == 2){
      setText('last chance de rha hun...');
      setShowEmoji('no2');
      setCount(3);
    }
    if(count == 3){
      setText('bhad me jao tum me bhi ni krta tumse pyar...');
      setShowEmoji('no3');
      setCount(4);
    }
    if(count == 4){
      setText('Do you Love me.. ?')
      setShowEmoji('');
      setCount(1);
    }
    
  }


  return (
    <div className='container'>
      <div className='subCon'>
        <img 
          src={showEmoji === 'no3' ? "https://media.tenor.com/zLZ5mc3liEwAAAAi/angry-bunny.gif" : "https://media.tenor.com/fFpVFqD_4esAAAAi/peluk.gif"} 
          alt="" />
        <p className='text'>
          <span>{text}</span>
        {
          showEmoji === 'yes' ? (
                <span> &#128150; </span>
          ) : showEmoji === 'no1' ? (
                <span> &#129300; </span>
          ): showEmoji === 'no2' ? (
                <span> &#129320; </span>
          ): showEmoji === 'no3' ? (
                <span> &#128545; </span>
          )
          :null
        }
        </p>
        <div className='btnGroup'>
          <button onClick={handleYes}>Yes</button>
          <button onClick={handleNo}>No</button>
        </div>
      </div>
    </div>
  )
}

export default App