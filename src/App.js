import HomePage from "./screen/home-screen";
import Paginated from "./screen/paginated-screen";
import Checkout from "./screen/checkout-screen";
import { Router } from "@reach/router";

function App() {
  return (
    <Router>
      <HomePage path="/" />
      <Checkout path="/checkout" />
      <Paginated path="/photo/:page" />
    </Router>
  );
}

export default App;
