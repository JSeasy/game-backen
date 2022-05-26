export class CreateMenuDto {
  parentId?: number;
  pathName: string;
  componentName: string;
  menuName: string;
  iconName: string;
}

export class QueryMenuDto {
  parentId?: number;
  pathName?: string;
  componentName?: string;
  menuName?: string;
  iconName?: string;
  limit: number;
  page: number;
}
