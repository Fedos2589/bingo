import React from 'react';
import './cell.scss';

export interface CellProps {
  text: string;
  index: number;
  isActive?: boolean;
  id: string;
}

export const Cell = ({ text, index, isActive, id }: CellProps) => {
  return (
    <div className={`cell ${isActive ? 'active' : ''} `} id={id}>
      <span className="index">{index}</span>
      {text}
    </div>
  );
}
