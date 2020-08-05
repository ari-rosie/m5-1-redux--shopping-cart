import React from 'react';
import styled from 'styled-components';

const CartItem = ({item}) => {
    return (
        <Wrapper>
            <p>{item.item}</p><button>X</button>
            <label>Quantity:</label>
            <input type='number'/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    border: grey dashed 1px;
`;

export default CartItem;