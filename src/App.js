import './App.css';
import Slider from './Slider';
import defaultSlides from './defaultSlides';

function App() {
  return (
    <div className="App">
      <Slider slides={defaultSlides} />
    </div>
  );
}

export default App;
