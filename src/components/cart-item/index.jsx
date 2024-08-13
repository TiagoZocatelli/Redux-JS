import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";

// Styles
import * as Styles from "./styles";
import { removeProductFromCart } from "../../redux/cart/actions";
import { increaseProductFromCart } from "../../redux/cart/actions";
import { decreaseProductFromCart } from "../../redux/cart/actions";

  const CartItem = ({ product }) => {

  const dispatch = useDispatch()
  
  const handleRemoveClick = () => {
    dispatch(removeProductFromCart(product.id))
  };

  const handleIncreaseClick = () => {
    dispatch(increaseProductFromCart(product.id))
  };

  const handleDecreaseClick = () => {
    dispatch(decreaseProductFromCart(product.id))
  };

  return (
    <Styles.CartItemContainer>
      <Styles.CartItemImage imageUrl={product.imageUrl} />

      <Styles.CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>

        <Styles.CartItemQuantity>
          <AiOutlineMinus
            size={20}
            onClick={handleDecreaseClick}
            aria-label={`Decrease quantity of ${product.name}`}
          />
          <p>{product.quantity}</p>
          <AiOutlinePlus
            size={20}
            onClick={handleIncreaseClick}
            aria-label={`Increase quantity of ${product.name}`}
          />
        </Styles.CartItemQuantity>
      </Styles.CartItemInfo>

      <Styles.RemoveButton
        onClick={handleRemoveClick}
        aria-label={`Remove ${product.name}`}
      >
        <AiOutlineClose size={25} />
      </Styles.RemoveButton>
    </Styles.CartItemContainer>
  );
};

export default CartItem;
