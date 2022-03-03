import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Fun from "./components/Cart/Fun";
function App() {
  const [isCartShown, setIsCartShown] = useState(false);
  const [isOrderClicked, setIsOrderClicked] = useState(false);

  const showCartHandler = () => {
    setIsCartShown(true);
  };

  const hideCartHandler = () => {
    setIsCartShown(false);
    // setIsOrderClicked(false);
  };

  const showFun = () => {
    setIsOrderClicked(true);
    setIsCartShown(false);
  };

  return (
    <CartProvider>
      {isCartShown && <Cart onClose={hideCartHandler} onOrder={showFun}></Cart>}
      {isOrderClicked && <Fun></Fun>}
      {!isOrderClicked && <Header onCartClick={showCartHandler} />}
      {!isOrderClicked && (
        <main>
          <Meals />
        </main>
      )}
    </CartProvider>
  );
}

export default App;
