type TRoute = {
    path: string;
    element: any;
    layout?: any;
    subRoutes?: TRoute[];
    props?: Record<string, any>;
  };
  
  export type { TRoute };
