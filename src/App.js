import Wave from 'react-wavify';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div className='waveContainer'>
      <Wave  className="wave" fill='#dbbff6'
        paused={false}

        options={{
          height: 60,
          amplitude: 20,
          speed: 0.2,
          points: 4
        }}
  />
  <Wave  className="wave" fill='#b87fed'
        paused={false}

        options={{
          height: 90,
          amplitude: 25,
          speed: 0.3,
          points: 5
        }}
  />
  <Wave  className="wave" fill='#8a2be2'
        paused={false}

        options={{
          height: 120,
          amplitude: 30,
          speed: 0.13,
          points: 6
        }}
  />
  <div className='footerContent'>
    <p>Footer content</p>
    <div className='icons'>
      <FontAwesomeIcon icon={faHeart} className='icon' />
      <FontAwesomeIcon icon={faEnvelope} className='icon' />
    </div>
  </div>
      </div>
    </div>
  );
}

export default App;
