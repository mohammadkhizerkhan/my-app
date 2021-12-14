import { useState } from 'react';
import './App.css';
import Forms from './components/Forms';
import ImageGrid from './components/imageGrid';
import Modal from './components/Modal';

function App() {
  const [selectedImg, setselectedImg] = useState(null)
  return (
    <div className="App">
      <header id="head">welcome to photo gallery</header>
      <Forms />
      <ImageGrid setselectedImg={setselectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setselectedImg={setselectedImg}/>}
    </div>
  );
}

export default App;
