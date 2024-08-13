import { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import rootReducer from "../../redux/root-reducer";
import { userLogin, userLogout } from "../../redux/user/slice";
import { selectProductsCount } from "../../redux/cart/cart.selectors";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer)
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer)

  const productsCount = useSelector(selectProductsCount)

  const dispatch = useDispatch()

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
      dispatch(userLogin({name: 'tiago', email: 'tiago@gmail.com'}))
  }


  const handleLogoutClick = () => {
    dispatch(userLogout())
  }


  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        { currentUser ? <div onClick={handleLogoutClick}>Sair</div> : (
          <div onClick={handleLoginClick}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
