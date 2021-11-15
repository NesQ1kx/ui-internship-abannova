import {createSlice} from '@reduxjs/toolkit';

import {BOTTOM_POSTS, CATEGORY_FILTERS, COLOR_FILTERS, PRODUCTS, PRODUCT_FILTERS, TOP_POSTS} from "../mocks";

const filterProducts = ({
  products,
  categoryFilterIds,
  productFilterIds,
  colorFilterIds,
  rangeFilterMinMax,
  sortDirection,
}) => {
  return products.filter(({ categoryId, typeId, colorId, price }) => {
    return (!categoryFilterIds.length || categoryFilterIds.includes(categoryId)) &&
      (!productFilterIds.length || productFilterIds.includes(typeId)) &&
      (!colorFilterIds.length || colorFilterIds.includes(colorId)) &&
      price >= rangeFilterMinMax[0] &&
      price <= rangeFilterMinMax[1]
  }).sort((a, b) => sortDirection === 'asc' ? a.price - b.price : b.price - a.price);
}

const priceMinMax = [Math.min(...PRODUCTS.map(({price}) => price)), Math.max(...PRODUCTS.map(({price}) => price))];

const initialState = {
  products: PRODUCTS,
  filteredProducts: PRODUCTS,
  trendingProducts: PRODUCTS.slice(0, 4),
  topPosts: TOP_POSTS,
  bottomPosts: BOTTOM_POSTS,
  filtersMeta: {
    category: CATEGORY_FILTERS,
    products: PRODUCT_FILTERS,
    color: COLOR_FILTERS,
    priceMinMax,
  },
  categoryFilterIds: [],
  productFilterIds: [],
  colorFilterIds: [],
  rangeFilterMinMax: priceMinMax,
  sortDirection: 'asc'
};

export const productsSelector = (state) => state.generalReducer.products;
export const filteredProductsSelector = (state) => state.generalReducer.filteredProducts;
export const trendingProductsSelector = (state) => state.generalReducer.trendingProducts;
export const topPostsSelector = (state) => state.generalReducer.topPosts;
export const bottomPostsSelector = (state) => state.generalReducer.bottomPosts;
export const filtersMetaSelector = (state) => state.generalReducer.filtersMeta;
export const categoryFilterIdsSelector = (state) => state.generalReducer.categoryFilterIds;
export const productFilterIdsSelector = (state) => state.generalReducer.productFilterIds;
export const rangeFilterMinMaxSelector = (state) => state.generalReducer.rangeFilterMinMax;
export const colorFilterIdsSelector = (state) => state.generalReducer.colorFilterIds;
export const sortDirectionSelector = (state) => state.generalReducer.sortDirection;

export const generalSlice = createSlice({
  name: 'generalReducer',
  initialState,
  reducers: {
    updateCategoryFilterIds: (state, action) => {
      state.categoryFilterIds = action.payload;
      state.filteredProducts = filterProducts(state);
    },
    updateProductFilterIds: (state, action) => {
      state.productFilterIds = action.payload;
      state.filteredProducts = filterProducts(state);
    },
    updateColorFilterIds: (state, action) => {
      state.colorFilterIds = action.payload;
      state.filteredProducts = filterProducts(state);
    },
    updateRangeFilterMinMax: (state, action) => {
      state.rangeFilterMinMax = action.payload;
      state.filteredProducts = filterProducts(state);
    },
    updateSortDirection: (state, action) => {
      state.sortDirection = action.payload;
      state.filteredProducts = filterProducts(state);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateCategoryFilterIds,
  updateProductFilterIds,
  updateColorFilterIds,
  updateRangeFilterMinMax,
  updateSortDirection,
} = generalSlice.actions;

export default generalSlice.reducer;
