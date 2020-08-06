import React from 'react';
import styled from 'styled-components';

import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { getStoreItemsArray } from '../../reducers';


const purchaseItems = [
    {item: 'item1', price: 4}, {item: 'item2', price: 2}, {item: 'item3', price: 8}
];

const Cart = () => {
    const storeItems = useSelector(state => getStoreItemsArray(state));
    console.log(storeItems);
    return (
        <>
        {storeItems.length > 0 ? 
        <Wrapper>
            <h1>Your cart:</h1>
            <p><span>{storeItems.length}</span>items</p>
            {storeItems.map(item => {
                return (
                    <>
                        <CartItem item={item}/>
                    </>
                )

            })}
            <p>Total:<span>{storeItems.map(item => item.price).reduce((acc, value) => acc + value)}</span></p>
            <button>Purchase</button>
        </Wrapper>
        : <Wrapper><h1>Your cart is empty!</h1></Wrapper>}   
        </>
    );
};

const Wrapper = styled.div`
    background-color: purple;
    min-height: 80%;
    color: white;
`;

export default Cart;