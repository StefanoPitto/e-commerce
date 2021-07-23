import React, { useState } from "react";
import { Provider } from "./Context";

const CartContext = () => {
  const [cartItems, setCartItems] = useState();

  return <Provider>{children}</Provider>;
};
