import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const SharedLayout = () => {
   return (
      <div>
         <header>
            <nav>
               <NavLink to="/">Shop</NavLink>
               <NavLink to="shoppingCart">ShoppingCart</NavLink>
            </nav>
         </header>
         <main>
            <Outlet />
         </main>
         <footer></footer>
      </div>
   );
};
