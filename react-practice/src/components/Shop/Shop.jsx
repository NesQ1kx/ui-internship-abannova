import React from 'react';

import styles from './Shop.module.scss';
import Header from "../Header/Header";
import ProductCard from "../ProductCard/ProductCard";
import Footer from "../Footer/Footer";
import Sorter from "../Sorter/Sorter";
import Filters from "../Filters/Filters";
import {useDispatch, useSelector} from "react-redux";
import {
  filteredProductsSelector,
  sortDirectionSelector,
  updateSortDirection
} from "../../store/generalReducer";

const Shop = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(filteredProductsSelector);
  const sortDirection = useSelector(sortDirectionSelector);

  const onSort = () => {
    dispatch(updateSortDirection(sortDirection === 'asc' ? 'desc' : 'asc'));
  };



  return (
    <div className={styles.shop}>
      <Header transparent={false} />
      <div className={styles.content}>
        <Filters />
        <div>
          <Sorter sortDirection={sortDirection} onToggle={onSort}/>
          <div className={styles.products}>
            {!filteredProducts.length && "Not found products based on filters!"}
            {filteredProducts.map((product) => <ProductCard product={product} key={product.id} />)}
          </div>
        </div>
      </div>
      <Footer dark={false} />
    </div>
  );
};

export default Shop;
