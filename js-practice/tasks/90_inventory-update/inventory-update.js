export const updateInventory = (arr1, arr2) => {
  const inventoryMap = arr1.reduce((inventory, [count, name]) => {
    // eslint-disable-next-line no-param-reassign
    inventory[name] = count;
    return inventory;
  }, {});

  arr2.forEach(([count, name]) => {
    if (inventoryMap.hasOwnProperty(name)) {
      inventoryMap[name] += count;
    } else {
      inventoryMap[name] = count;
    }
  });

  return Object.entries(inventoryMap)
    .map((item) => item.reverse())
    .sort((a, b) => (a[1] > b[1] ? 1 : -1));
};
