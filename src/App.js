
import './App.css';
import { useEffect, useState } from 'react';
import Activities from './Activities';
import image from './background-1000.png';

function App() {

  const [advice, setAdvice] = useState('');

  const getAdviceData = async () => {
    const response = await fetch('https://www.boredapi.com/api/activity/');
    const data = await response.json();
    setAdvice(data);
  };

  useEffect(() => {
    getAdviceData();
  }, []);


  return (
    <div className="App">

      <div className='container'>
        <h1>Looking for a new activity? Here are some ideas for you</h1>
      </div>

      <div className='container'>
        <img src={image} alt='background' />
        <div className='activity'>
          <Activities activity={advice.activity} />
          <button onClick={getAdviceData}>
            Find another activity
          </button>
        </div>
      </div>

    </div>

  );
}

export default App;
