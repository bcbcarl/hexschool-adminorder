import React from 'react';
import { hot } from 'react-hot-loader';

const Logo = () => <div>Shoptime</div>;
const Admin = () => <div>Admin</div>;

const Header = () => (
  <header>
    <Logo />
    <ul>
      <li>Home</li>
      <li>Orders</li>
      <li>Product</li>
    </ul>
    <Admin />
  </header>
);

const Main = () => (
  <main>
    <h1>Admin order</h1>
  </main>
);

const App = () => (
  <React.Fragment>
    <Header />
    <Main />
  </React.Fragment>
);

export default hot(module)(App);
