import { Section, ProductCard, ProductList, Thumb, Image, ProductName } from './MenuSection.styled';

export const MenuSection = ({ restaurants = [] }) => {
   return (
      <Section>
         <p>Menu</p>
         <ProductList>
            {restaurants.map(element => {
               return (
                  <li key={element.id}>
                     <ProductCard>
                        <Thumb>
                           <Image src={element.avatar} alt={element.name} />
                        </Thumb>
                        <ProductName>{element.restaurant}</ProductName>
                        <button type="button">Add to cart</button>
                     </ProductCard>
                  </li>
               );
            })}
         </ProductList>
      </Section>
   );
};
