import React, {useCallback} from 'react';
import Filter from "../Filter/Filter";

import ColorFilter from "../ColorFilter/ColorFilter";
import RangeFilter from "../RangeFilter/RangeFilter";
import {useDispatch, useSelector} from "react-redux";
import {
  categoryFilterIdsSelector,
  colorFilterIdsSelector,
  filtersMetaSelector,
  productFilterIdsSelector,
  updateCategoryFilterIds, updateColorFilterIds,
  updateProductFilterIds,
  updateRangeFilterMinMax
} from "../../store/generalReducer";

const Filters = () => {
  const dispatch = useDispatch();
  const filtersMeta = useSelector(filtersMetaSelector);
  const categoryFilterIds = useSelector(categoryFilterIdsSelector);
  const productFilterIds = useSelector(productFilterIdsSelector);
  const colorFilterIds = useSelector(colorFilterIdsSelector);

  const onRangeChange = useCallback((minMax) => {
    dispatch(updateRangeFilterMinMax(minMax));
  }, [dispatch]);

  const onChangeCategoriesFilter = useCallback((newSelectedIds) => {
    dispatch(updateCategoryFilterIds(newSelectedIds));
  }, [dispatch]);

  const onChangeProductsFilter = useCallback((newSelectedIds) => {
    dispatch(updateProductFilterIds(newSelectedIds));
  }, [dispatch]);

  const onColorsChange = useCallback((newSelectedIds) => {
    dispatch(updateColorFilterIds(newSelectedIds))
  }, [dispatch]);

  return (
    <div>
      <Filter
        name="Category"
        options={filtersMeta.category}
        selectedOptionIds={categoryFilterIds}
        onChange={onChangeCategoriesFilter}
      />
      <Filter
        name="Products"
        options={filtersMeta.products}
        selectedOptionIds={productFilterIds}
        onChange={onChangeProductsFilter}
      />
      <ColorFilter
        name="Colors"
        options={filtersMeta.color}
        onChange={onColorsChange}
        selectedOptionsIds={colorFilterIds}
      />
      <RangeFilter
        min={filtersMeta.priceMinMax[0]}
        max={filtersMeta.priceMinMax[1]}
        onChange={onRangeChange}
      />
    </div>
  );
};

export default Filters;
