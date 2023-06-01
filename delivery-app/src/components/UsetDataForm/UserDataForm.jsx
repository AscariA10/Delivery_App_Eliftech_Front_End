import { Formik, Form, Field } from 'formik';

export const UserDataForm = () => {
   return (
      <Formik>
         <Form>
            <label>
               Name
               <Field
                  name="name"
                  type="text"
                  value=""
                  // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  // title="Name may contain only letters, apostrophe, dash and spaces."
                  onChange={() => {}}
                  required
               ></Field>
            </label>
         </Form>
      </Formik>
   );
};
