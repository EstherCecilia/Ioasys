import React from 'react';
import styled from 'styled-components';
import { bool, func } from 'prop-types';

const Burger = ({open, setOpen, ...props}) => {
    const isExpanded = open ? true : false;
    return(
        <StyledBurger 
            aria-expanded={isExpanded} open={open} 
            onClick={() => setOpen(!open)} {...props}>
            <span />
            <span />
            <span />
        </StyledBurger>
    );
}

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

const StyledBurger = styled.button`
    position: fixed;
    top: 5%;
    left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    color: ${({ theme }) => theme.primaryDark};

    &:focus {
        outline: none;
    }
    
    span {
        width: 2rem;
        height: 0.25rem;
        background: ${({ theme, open }) => open ? theme.primaryDark : theme.primaryLight};
        border-radius: 10px;
        transition: all 0s linear;
        position: relative;
        transform-origin: 1px;
        color: ${({ theme }) => theme.primaryDark};

    :first-child {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
      }
  
      :nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
      }
  
      :nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      }
    }
`;

export default Burger;