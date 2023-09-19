import Access from './pages/notLogged/access';
import './index.css';
import Home from './pages/logged/home.js';

function App() {
  return (
    <>
      {true? <Access/> : <Home/>}
    </>
  );
}

export default App;
