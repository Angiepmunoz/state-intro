import { useState } from "react";
import "./App.css";

const App = () => {
  // when initializing a state variable it should always be at the top of your component. You do not want it to be inside of some codeblock
  const [cartCount, setCartCount] = useState(0);
  let itemsInCart = 0;
  // here we are initializing state with a value of 0.
  // state returns an array that we are destructuring
  // the first variable is the initial value of state
  // the second variable is the function we will use to update state

  const handleClick = () => {
    // event handler
    // itemsInCart++;  // with a regular variable, react does not know to re-render the component
    // console.log(itemsInCart)
    // cartCount++
    setCartCount(cartCount + 1); //we cannot update state using the state variable we MUST use the set Function
  };

  const handleItemRemoval = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };
  return (
    <div className="app">
      <div>{cartCount} items in the cart </div>
      <button onClick={handleClick}>Add to Cart</button>
      <button onClick={handleItemRemoval}>Remove an Item</button>
    </div>
  );
};

export default App;
