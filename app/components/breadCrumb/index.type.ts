type BreadcrumbItem = {
    label: string;
    path?: string; 
  };
  
export interface BreadcrumbProps {
    items: BreadcrumbItem[];
    separator?: string; 
  }