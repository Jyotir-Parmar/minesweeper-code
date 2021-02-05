import React, { memo, useState, useEffect } from 'react';
import './Cell.css';
import bomb from '../../bomb.png';

const Cell = memo(({ cell, rowIndex, colIndex, callback }: any) => {
    const [isFlipped, setFlipped] = useState(false);

    useEffect(() => {
        if (isFlipped)
            callback(cell);
    }, [isFlipped]);

    const processClick = () => {
        setFlipped(true);
    }
    return (
        <div className="cellContainer" onClick={() => processClick()}>
            <div className="cellContainer-flipper">
                <div className={`front ${isFlipped ? "cellContainer-front--flip" : ""}`}></div>
                <div className={`back ${isFlipped ? "cellContainer-back--flip" : ""}`} key={rowIndex + colIndex}>
                    {cell === -1 ? <img src={bomb} width="50%" height="50%" alt="bomb" /> : cell}
                </div>
            </div>
        </div>
    )
})

export default Cell;