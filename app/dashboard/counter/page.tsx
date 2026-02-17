import { Span } from "next/dist/trace";

export default function NamePage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <span className="text-9xl">10</span>

      <div className="flex">
        <button className="">
          +1
        </button>
      </div>
    </div>
  );
}