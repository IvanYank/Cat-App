import { useEffect, useState } from 'react';

import Button from './Button/button';
import Checkbox from './Checkbox/checkbox';
import Image from './Image/image';

import './App.scss';


function App() {
  const [isEnabled, setEnableStatus] = useState(false);
  const [isRefresh, setRefreshStatus] = useState(false);
  const [image, setImage] = useState("#");

  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "live_KCZKmmgkc459sTpQQalkyNt33cBKmtsW1UIKUq6ThWCGFYlRgnCe98wGj0gQZc4C"
  });

  const requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };

  useEffect(() => {
    let inter: NodeJS.Timer | undefined;

    if (isRefresh) {
      inter = setInterval(() => {
        fetch("https://api.thecatapi.com/v1/images/search", requestOptions as RequestInit)
          .then(response => response.text())
          .then(result => setImage(JSON.parse(result)[0].url))
          .catch(error => console.log('error', error));
      }, 5000)
    }

    return () => clearInterval(inter)
  }, [isRefresh]);

  const onClick = () => {
    fetch("https://api.thecatapi.com/v1/images/search", requestOptions as RequestInit)
      .then(response => response.text())
      .then(result => setImage(JSON.parse(result)[0].url))
      .catch(error => console.log('error', error));
  }

  return (
    <div className="App">
      <Checkbox
        className='App__elements'
        text='Enabled'
        id="enabled"
        value={isEnabled}
        onChange={() => setEnableStatus(!isEnabled)}
      />
      <Checkbox
        className='App__elements'
        text='Auto-refresh every 5 second'
        id="refresh"
        value={isRefresh}
        onChange={() => setRefreshStatus(!isRefresh)}
      />
      <Button
        className='App__elements'
        text='Click'
        onClick={onClick}
        isEnabled={isEnabled}
      />
      <Image image={image} />
    </div>
  );
}

export default App;
