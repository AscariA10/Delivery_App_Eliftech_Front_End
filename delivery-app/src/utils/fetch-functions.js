import axios from 'axios';

axios.defaults.baseURL = 'https://647650c3e607ba4797dd92ee.mockapi.io/api/delivery/restaurants';

export function getRestaurants() {
   const result = axios.get('/');
   //    console.log('function', result);
   //    const response = result.json();
   return result;
}
