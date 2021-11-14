import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './Trending.module.scss';
import Button, {buttonColors} from "../Button/Button";
import ProductCard from "../ProductCard/ProductCard";

const Trending = ({trendingProducts}) => {
  const history = useHistory();

  function openShop() {
    history.push("/shop");
  }

  return (
    <div className={styles.trending}>
      <div className={styles.trending_header}>
        <div className={styles.title}>TRENDING PRODUCTS</div>
        <Button backgroundColor={buttonColors.transparent} onClick={openShop}>See All</Button>
      </div>
      <div className={styles.trending_products}>
        {trendingProducts.map((product) => <ProductCard product={product} saleWhite={true} key={product.id}/>)}
      </div>
    </div>
  );
};

export default Trending;
