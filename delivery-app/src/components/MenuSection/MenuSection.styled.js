import styled from '@emotion/styled';

export const Section = styled.section`
   width: 65%;
   padding: 20px;
   border: 1px solid gold;
`;

export const ProductList = styled.ul`
   list-style: none;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`;

export const ProductCard = styled.div`
   box-sizing: border-box;
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 200px;
   height: 300px;
   padding: 20px;
   border: 1px dashed red;
   margin: 7px;
`;

export const Thumb = styled.div`
   display: block;
   width: 120px;
   height: 120px;
`;

export const Image = styled.img`
   width: 100%;
   height: 100%;
`;

export const ProductName = styled.p`
   font-size: 16px;
`;
