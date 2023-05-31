import styled from '@emotion/styled';
import { NavLink as Link } from 'react-router-dom';

export const NavLink = styled(Link)`
   color: blue;
`;

export const Header = styled.header`
   padding: 50px;
`;

export const NavigationMenu = styled.ul`
   display: flex;
   align-items: center;
   justify-content: center;

   list-style: none;
`;

export const NavigationItem = styled.li`
   background-color: lightgrey;

   ::after {
      content: '|';
      color: black;
      margin-left: 10px;
   }

   &:last-child {
      margin-left: 10px;
      ::after {
         display: none;
         content: '';
      }
      background-color: pink;
   }
`;
