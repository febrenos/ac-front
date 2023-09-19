import styled from 'styled-components'

export const Button = styled.button`
    color: var(--text-button);
    background-color: var(--button-color);
    padding: 10px;
    width: auto;
    height: auto;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    &:hover{
        opacity:.8;
    }
`