import { FC, ReactNode } from "react";

interface TButtonProps {
  children: ReactNode;
  onClick: () => void;
  title: string;
  phone: number;
}

export const Button: FC<TButtonProps> = ({ onClick, title }) => {
  return <button onClick={onClick}>{title}</button>;
};
