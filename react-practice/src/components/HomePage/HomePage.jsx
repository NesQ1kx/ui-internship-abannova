import React from 'react';
import {useSelector} from "react-redux";

import Banner from "../Banner/Banner";
import Posts from "../Posts/Posts";
import Dealer from "../Dealer/Dealer";
import Trending from "../Trending/Trending";
import About from "../About/About";
import Quotes from "../Quotes/Quotes";
import Feedback from "../Feedback/Feedback";
import Footer from "../Footer/Footer";
import {bottomPostsSelector, topPostsSelector, trendingProductsSelector} from "../../store/generalReducer";

const HomePage = () => {
  const topPosts = useSelector(topPostsSelector);
  const bottomPosts = useSelector(bottomPostsSelector);
  const trendingProducts = useSelector(trendingProductsSelector);

  return (
    <div>
      <Banner/>
      <Posts topPosts={topPosts} bottomPosts={bottomPosts}/>
      <Dealer/>
      <Trending trendingProducts={trendingProducts}/>
      <About/>
      <Quotes/>
      <Feedback/>
      <Footer/>
    </div>
  );
};

export default HomePage;
