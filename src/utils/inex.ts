import { Like } from 'typeorm';

export const arrToTree = (arr, id?: string) => {
  const filterArr = arr.filter((item) => {
    return id ? item.parentId === id : item.parentId === 0;
  });

  filterArr.map((item) => {
    item.children = arrToTree(arr, item.id);
  });
  return filterArr;
};

//模糊查询
export const createLikeParams = <T>(fields: string[], target: T) => {
  fields.forEach((item) => {
    target[item] && (target[item] = Like(`%${target[item]}%`));
  });
  return target;
};
