import { useEffect, useState } from 'react';
import { UserDataForm } from '../components/UsetDataForm/UserDataForm';
import { Cart } from '../components/Cart/Cart';
import { CartWrapper } from '../components/Wrapper.styled';

export const ShoppingCart = () => {
   return (
      <>
         <div>This is ShoppingCart</div>
         <CartWrapper>
            <UserDataForm></UserDataForm>
            <Cart></Cart>
         </CartWrapper>
      </>
   );
};
