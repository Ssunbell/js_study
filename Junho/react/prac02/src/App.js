import {useState,useEffect} from 'react';

function Hello(){
  useEffect(() => {
    console.log('hi')
    return () => console.log('bi')
  },[]) 
  return <h1>Hello</h1>
}

function App() {
  const [showing,setShowing] = useState(false);
  const onClick = () => setShowing(tp => !tp) 
  return (
    <div>
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'show'}</button>
    </div>
  );
}

export default App;
