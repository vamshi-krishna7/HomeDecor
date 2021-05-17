import './App.css';
import { Container } from 'react-bootstrap';

import Header from './components/layout/header';
import Footer from './components/layout/footer';
// import About from './components/pages/about';
import Home from './components/pages/home';
import Cart from './components/pages/cart';
import Login from './components/pages/login';
import Profile from './components/pages/profile';
import Register from './components/pages/register';
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
              <Route path='/login' component={Login} exact/>
              <Route path='/register' component={Register} exact/>
              <Route path='/profile' component={Profile} exact/>
              <Route path='/product/:id' component={ProductInfo} exact/>
              <Route path='/cart/:id?' component={Cart} />
            </Switch>
          </Container>
        </main>
        <Footer />
    </Router>
  );
}

export default App;
