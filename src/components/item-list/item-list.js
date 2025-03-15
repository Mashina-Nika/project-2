import React, { useState, useEffect } from 'react';
import './item-list.css';

const ItemList = ({ getData, onItemSelected, children: renderLabel }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData().then(setData);
    }, [getData]);

    const items = data.map((item) => {
        const { id } = item;
        const label = renderLabel(item);

        return (
            <li className="list-group-item"
                key={id}
                onClick={() => onItemSelected(id)}>
                {label}
            </li>
        );
    });

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
};

export default ItemList;
