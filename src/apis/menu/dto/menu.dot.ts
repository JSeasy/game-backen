export class CreateMenuDto {
  parentId?: number;
  pathName: string;
  componentName: string;
  menuName: string;
  iconName: string;
}

export class QueryMenuDto {
  menuName?: string;
  current?: number;
  pageSize?: number;
}
