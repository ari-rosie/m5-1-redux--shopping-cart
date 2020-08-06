import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { removeItem } from '../../actions';

const CartItem = ({item}) => {
    const dispatch = useDispatch();
    return (
        <Wrapper>
            <p>{item.title}</p><button onClick={() => dispatch(removeItem(item))}>X</button>
            <label>Quantity:</label>
            <input type='number'/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    border: grey dashed 1px;
`;

export default CartItem;