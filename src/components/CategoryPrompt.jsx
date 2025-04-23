import React from 'react'

export default function CategoryPrompt({onClose}) {
  return (
    <div>
      <div>
        <h2>Choose a Category</h2>
        <select name="" id="">
          <option value="">Select...</option>
          <option value="math">Math</option>
          <option value="science">Science</option>
          <option value="history">History</option>
        </select>
      </div>
      <div>
        <button onClick={onClose}>
          Cancel
        </button>
      </div>
      
    </div>
  )
}
