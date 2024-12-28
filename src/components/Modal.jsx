import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { modalClose } from '../features/modal/modalSlice'


const Modal = () => {
  const dispatch = useDispatch()
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button className="btn confirm-btn" onClick={() => {
            dispatch(clearCart());
            dispatch(modalClose());
            }}>
            Confirm
            </button>
              
          <button className="btn clear-btn" onClick={() => dispatch(modalClose())}>Cancel</button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
