import './App.css';
import Header from './modules/shared/layout/Header';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header></Header>
      <main>
        <Container>
          <div className="content">
            <h1>Welcome!</h1>
          </div>
      </Container>
      </main>
    </BrowserRouter>
  </>
  );
}

export default App;
