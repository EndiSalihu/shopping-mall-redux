import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import CartList from "./components/CartList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateCartTotals } from "./features/cart/cartSlice";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);


  useEffect(() => {
    dispatch(calculateCartTotals());
  }, [cartItems]);

  return (
    <main>
      <ToastContainer />
      {isOpen && <Modal />}
      <Navbar />
      <CartList />
    </main>
  );
}
export default App;
