import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './ProductCard.module.scss';
import { ReactComponent as CartSvg } from '../../images/cart.svg';
import { ReactComponent as FavoriteSvg } from '../../images/favorite.svg';
import Sale from "../Sale/Sale";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, cartSelector, changeAmount} from "../../store/cartReducer";
import Counter from "../Counter/Counter";
import {addToFavorites, favoritesSelector, removeFromFavorites} from "../../store/favoritesReducer";
import classNames from "classnames";

const ProductCard = ({product, saleWhite}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cartProducts = useSelector(cartSelector);
  const cartItem = cartProducts.find(({id}) => id === product.id);
  const favorites = useSelector(favoritesSelector);
  const isFavorite = favorites.includes(product.id);

  const handleCartClick = () => {
    if (cartItem) {
      dispatch(changeAmount({id: cartItem.id, count: cartItem.count + 1}));
    } else {
      dispatch(addToCart(product.id));
    }
  }

  const handleFavoritesClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(addToFavorites(product.id));
    }
  }
  
  const openProductPage = () => {
    history.push(`/shop/${product.id}`);
  }

  return (
    <div className={styles.productCard}>
      {product.sale && <Sale green={!saleWhite} />}
      <img className={styles.img} src={product.imageUrl} alt="img" onClick={openProductPage}/>
      <div className={styles.title} onClick={openProductPage}>{product.title}</div>
      <div className={styles.product_footer}>
        <div className={styles.price}>${product.price}</div>
        <div className={styles.favorite_wrapper}>
          <FavoriteSvg
            className={classNames(styles.favorite, {[styles.inFavorites]: isFavorite})}
            onClick={handleFavoritesClick}
          />
        </div>
        <div className={styles.cartWrapper}>
          <CartSvg
            className={styles.cartSvg}
            onClick={handleCartClick}
          />
          {cartItem && <Counter count={cartItem.count} className={styles.counter} />}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
