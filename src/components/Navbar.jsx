import React from 'react'
import styled from 'styled-components';
import Button from './Button';
import logo from '../assets/logo.png';
export default function Navbar() {
  return (
    <Nav>
      <div className="brand">
        <img src={logo} alt="logo" />
      </div>
      <div className="toggle"></div>
      <div className="links">
        <ul>
          <li> <a href="#home">Home</a> </li>
          <li> <a href="#marketplace">Marketplace</a> </li>
          <li> <a href="#sellers">Sellers</a> </li>
          <li> <a href="#create">Create</a> </li>
        </ul>
      </div>
      <Button text="Contact"/>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem;
  .toggle{
    display: none;
  }
  .links{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    background-color: #fff;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
    padding: 2.5rem 8rem;
    ul{
      display: flex;
      justify-content: center;
      align-items: center;
      list-style-type: none;
      gap: 3rem;
      li{
        a{
          color: #002000;
          text-decoration: none;
          transition: .4s easy-in-out;
          &:hover{
            color: #2d69fd;
          }
        }
      }
    }
  }
`;
