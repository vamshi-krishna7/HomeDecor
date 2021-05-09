import './App.css';
import { Container } from 'react-bootstrap';

import Header from './components/layout/header';
import Footer from './components/layout/footer';
// import About from './components/pages/about';
import Home from './components/pages/home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductInfo from './components/pages/productInfo';

const App = () => {
  return (
    <Router>
        <Header />
        <main>
          <Container>
          <Switch>
              <Route path='/' component={Home} exact/>
              <Route path='/product/:id' component={ProductInfo} exact/>
            </Switch>
          </Container>
        </main>
        <Footer />
    </Router>
  );
}

export default App;