import React from "react";
import styled, {css} from "styled-components";
import {MdDone, MdDelete} from "react-icons/md";

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #81C6E8;
    }
    display: none;
`;

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover {
        ${Remove} {
            display: initial;
        }
    }
`;

const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 20px;
    border: 2px solid #81CFFF;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props => 
        props.done && 
        css`
            border: 2px solid #81CFFF;
            color: #81CFFF;
        `}
`;

const Text = styled.div`
    flex: 1;
    font-size: 21px;
    font-weight: 500;
    color: #495057;
    ${props =>
        props.done &&
        css`
            color: #B2B2B2;
        `}
`;

function TodoItem({id, done, text}) {
    return (
        <TodoItemBlock>
            <CheckCircle done={done}>
                {done && <MdDone />}
            </CheckCircle>
            <Text done={done}>
                {text}
            </Text>
            <Remove>
                <MdDelete></MdDelete>
            </Remove>
        </TodoItemBlock>
    );
}

export default TodoItem;