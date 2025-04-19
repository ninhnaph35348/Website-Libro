// src/components/ui/card.tsx
import React from "react";
import classNames from "classnames";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={classNames("bg-white rounded-2xl shadow-md p-4", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={classNames("mt-2", className)} {...props}>
      {children}
    </div>
  );
};
