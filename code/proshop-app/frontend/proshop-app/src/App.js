import './App.css';
import './bootstrap.min.css';
import Header from './shared/components/layout/Header';
import Footer from './shared/components/layout/Footer';
import {Container} from 'react-bootstrap';
import HomeScreen from './screens/components/HomeScreen';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ProductScreen from './screens/components/ProductScreen';

function App() {
  return (
    <Router>
      <Header></Header>
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;

