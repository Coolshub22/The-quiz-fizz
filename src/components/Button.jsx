import React, {useState} from 'react'
import CategoryPrompt from './CategoryPrompt'

export default function Button() {

  const [showPrompt, setShowPrompt] = useState(false);

  function HandleClick(){
    setShowPrompt(true)
  }
  return (
    <div>
      <button onClick = {HandleClick}> Start Quiz</button>

      {showPrompt && (
        <CategoryPrompt onClose={() => setShowPrompt (false)} />
        )}
      
    </div>
  )
}


