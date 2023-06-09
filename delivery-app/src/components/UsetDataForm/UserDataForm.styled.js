import styled from '@emotion/styled';
import { Form as FormikForm, Field as FormikField } from 'formik';

export const Form = styled(FormikForm)`
   flex-basis: 35%;
   display: flex;
   flex-direction: column;

   padding: 20px;

   margin-bottom: 50px;
   box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const Field = styled(FormikField)`
   width: 300px;
   height: 30px;
   box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
   margin-bottom: 15px;
   margin-left: 20px;
   border: 1px solid gold;
`;

export const FieldLabel = styled.label`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 10px;
`;

export const FormButton = styled.button`
   margin-left: auto;
   margin-right: auto;
   width: 90px;
   height: 50px;
   border-radius: 10px;
   box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;
