import React, {useEffect, useState} from 'react';
import classNames from "classnames";

import styles from './Header.module.scss';
import Logo from "../Logo/Logo";
import { ReactComponent as BurgerSvg } from '../../images/burger.svg';
import { ReactComponent as CartSvg } from '../../images/cart.svg';
import { ReactComponent as FavoritesSvg } from '../../images/favorite.svg';
import Counter from "../Counter/Counter";
import {useDispatch, useSelector} from "react-redux";
import {cartSelector, changeAmount, removeFromCart} from "../../store/cartReducer";
import Modal from "../Modal/Modal";
import {productsSelector} from "../../store/generalReducer";
import {favoritesSelector, removeFromFavorites} from "../../store/favoritesReducer";

const Header = ({transparent = true}) => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);
  const cart = useSelector(cartSelector);
  const favorites = useSelector(favoritesSelector);

  const [isCartModalOpen, setIsCartModalOpen] = useState();
  const [isFavoritesModalOpen, setIsFavoritesModalOpen] = useState();

  const cartProducts = cart.map(({id, count}) => ({ ...products.find((product) => product.id === id), count }));
  const favoriteProducts = favorites.map((id) => products.find((product) => product.id === id));

  const onRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  }

  const onChangeProductCount = (cartItem) => {
    if (cartItem.count) {
      dispatch(changeAmount(cartItem));
    } else {
      onRemoveFromCart(cartItem.id);
    }
  }

  const onRemoveFromFavorites = (id) => {
    dispatch(removeFromFavorites(id));
  }

  useEffect(() => {
    if (cart.length === 0) {
      setIsCartModalOpen(false);
    }
  }, [cart, setIsCartModalOpen]);

  useEffect(() => {
    if (favorites.length === 0) {
      setIsFavoritesModalOpen(false);
    }
  }, [favorites, setIsFavoritesModalOpen]);

  return (
    <div className={classNames({ [styles.header]: true, [styles.header_transparent]: transparent })}>
      <BurgerSvg className={classNames({[styles.burger]: true, [styles.burger_dark]: !transparent})} />
      <Logo big dark={!transparent} />
      <div className={styles.header_icons}>
        <div className={styles.actionWrapper}>
          <FavoritesSvg
            className={classNames({[styles.favorites]: true, [styles.favorites_dark]: !transparent})}
            onClick={() => setIsFavoritesModalOpen(true)}
          />
          <Counter className={styles.actionCounter} count={favorites.length} />
        </div>
        <div className={styles.actionWrapper}>
          <CartSvg
            className={classNames({[styles.cart]: true, [styles.cart_dark]: !transparent})}
            onClick={() => setIsCartModalOpen(true)}
          />
          <Counter className={styles.actionCounter} count={cartProducts.length} />
        </div>
      </div>
      {isCartModalOpen &&
      <Modal
        modalTitle={"Cart"}
        countable={true}
        onClose={() => setIsCartModalOpen(false)}
        products={cartProducts}
        onRemove={onRemoveFromCart}
        onChangeCount={onChangeProductCount}
      />}
      {isFavoritesModalOpen &&
      <Modal
        modalTitle={"Favorites"}
        onClose={() => setIsFavoritesModalOpen(false)}
        products={favoriteProducts}
        onRemove={onRemoveFromFavorites}
      />}
    </div>
  );
};

export default Header;
