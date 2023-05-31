import { Section } from './MenuSection.styled';

export const MenuSection = ({ restaurants = [] }) => {
   return (
      <Section>
         <p>Menu</p>
         <ul>
            {restaurants.map(element => {
               return <li key={element.id}>{element.restaurant}</li>;
            })}
         </ul>
      </Section>
   );
};
