import './App.css';
import { useState } from 'react';

let gridData = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

function App() {
  // Creating a array to get a check on what is been clicked.
  const [ selectedFields, setSelectedFields ] = useState([]);

  /*
    On clicking any div
    Step 1: Check if it's already been clicked
      If Yes -> Do nothing.
      If No -> Go to step 2.

    Step 2: Check the length of selectedFields
      If Less than 2 -> Just add another id to array.
      If Greater than 2 -> First remove 1 element from starting then add one to end.
  */
  const handleClick = (e) => {
    if(!selectedFields.includes(e.target.id)) {
      if(selectedFields.length < 2) {
        setSelectedFields([ ...selectedFields, e.target.id ]);
      } else {
        selectedFields.shift();
        setSelectedFields([...selectedFields, e.target.id]);
      }
    }
  }

  return (
    /* Implemented a single event handler.
       Technique used => Event bubbling & Delegation.
       Benefit => Reduce memory usage as event handler on each div or grid block is going to take a lot of memory.
    */
    <div className='grid-container' onClick={handleClick}>
      {gridData.map((data, index) => (
        <div
          className='grid-item'
          key={index}
          id={data}
          style={{ backgroundColor: selectedFields.includes(data.toString()) && 'red' }}
        >
          {data}
        </div>
      ))}
    </div>
  );
}

export default App;
