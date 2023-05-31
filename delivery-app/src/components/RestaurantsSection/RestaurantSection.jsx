import {
   Section,
   Thumb,
   Image,
   RestaurantCard,
   RestaurantItem,
   RestaurantList,
   RestaurantName,
} from './RestaurantSection.styled';

export const RestaurantSection = ({ restaurants = [] }) => {
   console.log(restaurants);
   return (
      <Section>
         <p>Restaurants List</p>
         <RestaurantList>
            {restaurants.map(element => {
               return (
                  <RestaurantItem key={element.id}>
                     <RestaurantCard>
                        <Thumb>
                           <Image src={element.avatar} alt={element.name} />
                        </Thumb>
                        <RestaurantName>{element.restaurant}</RestaurantName>
                     </RestaurantCard>
                  </RestaurantItem>
               );
            })}
         </RestaurantList>
      </Section>
   );
};
