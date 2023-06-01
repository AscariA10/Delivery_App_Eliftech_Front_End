import { Formik } from 'formik';
import { Form, Field, FieldLabel, FormButton } from './UserDataForm.styled';

export const UserDataForm = () => {
   function formSubmit(event) {
      event.preventDefault();
      console.log(7);
      // if (contactCheck(name)) {
      //    return alert(`${name} alredy in contacts`);
      // }
      // dispatch(addContact({ name, number }));
      // setName('');
      // setNumber('');
   }
   return (
      <Formik>
         <Form onSubmit={formSubmit}>
            <FieldLabel>
               <p>Name</p>
               <Field
                  name="name"
                  type="text"
                  value=""
                  // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  // title="Name may contain only letters, apostrophe, dash and spaces."
                  onChange={() => {}}
                  //   required
               ></Field>
            </FieldLabel>
            <FieldLabel>
               <p>E-mail:</p>
               <Field
                  type="text"
                  name="email"
                  value=""
                  // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  //   required
                  onChange={() => {}}
               />
            </FieldLabel>
            <FieldLabel>
               <p>Tel.Number</p>
               <Field
                  type="tel"
                  name="number"
                  value=""
                  // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  //   required
                  onChange={() => {}}
               />
            </FieldLabel>
            <FieldLabel>
               <p>Addres</p>
               <Field
                  type="addres"
                  name="number"
                  value=""
                  // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  //   required
                  onChange={() => {}}
               />
            </FieldLabel>
            <FormButton type="submit">Submit</FormButton>
         </Form>
      </Formik>
   );
};
