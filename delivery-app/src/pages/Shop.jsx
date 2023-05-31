import { getRestaurants } from '../utils/fetch-functions';
import { useEffect, useState } from 'react';

import { RestaurantSection } from '../components/RestaurantsSection/RestaurantSection';
import { MenuSection } from '../components/MenuSection/MenuSection';

import { Wrapper } from '../components/Wrapper.styled';

export const Shop = () => {
   const [restaurantsList, setRestaurantList] = useState([]);

   useEffect(() => {
      getRestaurants().then(response => setRestaurantList(response.data));
   }, []);

   return (
      <>
         <div>This is Shop</div>
         <Wrapper>
            <RestaurantSection restaurants={restaurantsList}></RestaurantSection>
            <MenuSection restaurants={restaurantsList}></MenuSection>
         </Wrapper>
      </>
   );
};
