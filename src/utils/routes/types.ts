import { RouteNames } from '../constants';

export interface IRoute {
  path: string;
  isAuthenticated: boolean;
  component: (props: any) => JSX.Element;
  exact: boolean;
  icon?: React.FunctionComponent<any>;
  label?: keyof typeof RouteNames;
}
