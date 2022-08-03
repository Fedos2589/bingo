import React, { MouseEvent, useCallback, useEffect, useState } from 'react';
import { checkWinner } from '../../helpers';
import { Cell } from '../cell';
import './bingo.scss';
import { getInitialState, data } from './mock';

export const Bingo = () => {
  const [state, setState] = useState(getInitialState(data));
  const [isWinner, setWinner] = useState(false);

  const handleClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    setState(state => state.map(row => row.map(item => item.id === target.id ? {...item, isActive: true} : item)))
  },[])

  useEffect(() => {
    if(checkWinner(state)) {
      setWinner(true)
    }
  }, [state])

  return (
    <div className="bingo" onClick={handleClick}>
      {state.map((row, rowIndex) =>
        row.map((item, colIndex) =>
          <Cell
            key={item.id}
            index={(rowIndex + 1) * (colIndex + 1)}
            {...item}
          />
        )
      )}
      <div className={`win ${isWinner ? 'visible' : ''}`}>You won!</div>
    </div>
  );
}
