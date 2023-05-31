import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { Routes, Route } from 'react-router-dom';
import { Shop } from './pages/Shop';
import { ShoppingCart } from './pages/ShoppingCart';

function App() {
   return (
      <Routes>
         <Route path="/" element={<SharedLayout />}>
            <Route index element={<Shop />} />
            <Route path="/shoppingCart" element={<ShoppingCart />} />
         </Route>
      </Routes>
   );
}

export default App;

// <SharedLayout>
//    <div>HelloApp</div>
//    <div>HelloApp</div>
//    <div>HelloApp</div>
// </SharedLayout>
