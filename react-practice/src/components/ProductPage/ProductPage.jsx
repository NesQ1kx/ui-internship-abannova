import React from 'react';

import styles from './ProductPage.module.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Button from "../Button/Button";
import {ReactComponent as FavoriteSvg} from '../../images/favorite.svg';
import Accordion from "../Accordion/Accordion";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {productsSelector} from "../../store/generalReducer";
import {addToCart, cartSelector, changeAmount} from "../../store/cartReducer";
import {addToFavorites, favoritesSelector, removeFromFavorites} from "../../store/favoritesReducer";
import classNames from "classnames";

const ProductPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const products = useSelector(productsSelector);
  const favorites = useSelector(favoritesSelector);
  const cart = useSelector(cartSelector);
  const id = Number(params.id);
  const product = products.find((product) => product.id === id);
  const cartItem = cart.find((item) => item.id === id);
  const isFavorite = favorites.includes(id);

  const onAddToCart = () => {
    if (cartItem) {
      dispatch(changeAmount({id, count: cartItem.count + 1}))
    } else {
      dispatch(addToCart(id));
    }
  }

  const onAddToFavorites = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites(id));
    }
  }

  return (
    <div className={styles.productPage}>
      <Header transparent={false} />
      <div className={styles.content}>
        <div className={styles.img}>
          {product.sale && <div className={styles.sale}>-{product.sale}%</div>}
          <img src={product.imageUrl} alt="img" />
        </div>
        <div className={styles.info}>
          <div className={styles.category}>{product.category}</div>
          <div className={styles.title}>{product.title}</div>
          <div className={styles.price}>{product.price} per sqft</div>
          <div className={styles.description}>{product.description}</div>
          <div className={styles.actions}>
            <Button full={true} onClick={onAddToCart}>Add to Cart</Button>
            <div onClick={onAddToFavorites} className={styles.favorite}>
              <FavoriteSvg className={classNames({[styles.inFavorites]:isFavorite })} />
            </div>
          </div>
          <Accordion name="Additional information" content={product.info} />
          <Accordion name="Units" content={product.units} />
        </div>
      </div>
      <Footer dark={false} />
    </div>
  );
};

export default ProductPage;
