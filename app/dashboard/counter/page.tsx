
import { CartCounter } from "@/app/shopping-cart";

export const metadata = {
 title: 'shopping cart',
 description: 'Counter',
};

export default function NamePage() {

  

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <span>Productos en el carrito</span>
      <CartCounter value={20}/>

      
    </div>
  );
}