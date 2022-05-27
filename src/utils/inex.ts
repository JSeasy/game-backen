export const arrToTree = (arr, id?: string) => {
  const filterArr = arr.filter((item) => {
    return id ? item.parentId === id : item.parentId === 0;
  });

  filterArr.map((item) => {
    item.children = arrToTree(arr, item.id);
  });
  return filterArr;
};
