import { Outlet } from 'react-router-dom';

import { NavLink } from './SharedLayout.styled';
import { Header, NavigationMenu, NavigationItem } from './SharedLayout.styled';

export const SharedLayout = () => {
   return (
      <div>
         <Header>
            <nav>
               <NavigationMenu>
                  <NavigationItem>
                     <NavLink to="/">Shop</NavLink>
                  </NavigationItem>
                  <NavigationItem>
                     <NavLink to="shoppingCart">ShoppingCart</NavLink>
                  </NavigationItem>
               </NavigationMenu>
            </nav>
         </Header>
         <main>
            <Outlet />
         </main>
         <footer></footer>
      </div>
   );
};
