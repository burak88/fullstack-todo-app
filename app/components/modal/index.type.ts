export interface IModalProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  onAction?: () => void;
  actionName?: string;
  isCloseButton?: boolean;
}
