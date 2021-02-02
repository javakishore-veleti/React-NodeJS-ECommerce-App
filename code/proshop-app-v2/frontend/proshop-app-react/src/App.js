import './App.css';
import Header from './modules/shared/layout/Header';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header></Header>
      <div className="content">
        <h1>Welcome!</h1>
      </div>
    </BrowserRouter>
  </>
  );
}

export default App;
