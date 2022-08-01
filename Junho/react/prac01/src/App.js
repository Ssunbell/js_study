import {useState,useEffect} from 'react';

function App() {
  const [counter, setValue] = useState(0)
  const [keyword,setKeyword] = useState('')

  const onClick = () => setValue((prev) => prev+1)  
  const onChange = (event) => setKeyword(event.target.value)
  console.log('i run all the time')

  useEffect(() => {
    console.log('Call the api..')
  },[]);

  useEffect(() => {
    if (keyword !== '' && keyword.length > 3){
      console.log({keyword})
    }
  },[keyword]);

  useEffect(() => {
    console.log({counter})
  },[counter]);

  useEffect(() => {
    console.log('counter or keyword change')
  },[counter,keyword]); // 둘중하나만 변해도 로그찍힘.

  return (
    <div>
      <input 
        value={keyword}
        onChange={onChange} 
        type='text' 
        placeholder='Search here'/>
      <h1>{counter}</h1>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
