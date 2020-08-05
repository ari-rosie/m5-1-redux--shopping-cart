import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

const purchaseItems = [
    {item: 'item1', price: 4}, {item: 'item2', price: 2}, {item: 'item3', price: 8}
];

const Cart = () => {
    return (
        <Wrapper>
            <h1>Your cart:</h1>
            <p><span>{purchaseItems.length}</span>items</p>
            {purchaseItems.map(item => {
                return (
                    <>
                        <CartItem item={item}/>
                    </>
                )

            })}
            <p>Total:<span>{purchaseItems.map(item => item.price).reduce((acc, value) => acc + value)}</span></p>
            <button>Purchase</button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: purple;
    min-height: 80%;
    color: white;
`;

export default Cart;