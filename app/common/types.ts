export interface ITask {
  title: string;
  description: string;
  label: string;
  assignee: string[];
  dueDate: Date;
}

export interface IUser {
  email: string;
  password: string;
  name: string;
  lastName: string;
  avatar: any;
}

export interface ILabel {
  type: string;
  detail: string;
  color: any;
}
