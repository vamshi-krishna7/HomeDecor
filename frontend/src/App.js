import './App.css';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import About from './components/pages/about';
import Home from './components/pages/home';
import Cart from './components/pages/cart';
import Login from './components/pages/login';
import Profile from './components/pages/profile';
import Shipping from './components/pages/shipping';
import PlaceOrder from './components/pages/placeOrder';
import Register from './components/pages/register';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductInfo from './components/pages/productInfo';

const App = () => {
  return (
    <Router>
        <Header />
        <main>
            <Switch>
              <Route path='/' component={Home} exact/>
              <Route path='/about' component={About} exact/>
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/profile' component={Profile} />
              <Route path='/shipping' component={Shipping} />
              <Route path='/placeorder' component={PlaceOrder}/>
              <Route path='/product/:id' component={ProductInfo} />
              <Route path='/cart/:id?' component={Cart} />
            </Switch> 
        </main>
        <Footer />
    </Router>
  );
}

export default App;


