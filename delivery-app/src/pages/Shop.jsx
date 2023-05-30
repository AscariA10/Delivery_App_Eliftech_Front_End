import { getRestaurants } from '../utils/fetch-functions';
import { useEffect, useState } from 'react';

export const Shop = () => {
   const [restaurantsList, setRestaurantList] = useState([]);

   useEffect(() => {
      setRestaurantList(getRestaurants().then(response => setRestaurantList(response.data)));
   }, []);
   console.log(restaurantsList);
   return <div>This is Shop</div>;
};
