import { Product } from "@prisma/client";
import { formatCurrency } from "../../utils/index";
import Image from "next/image";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border bg-white">
      <div className="relative w-full h-96">
        <Image
          width={400}
          height={500}
          layout="responsive"
          objectFit="cover"
          src={`/products/${product.image}.jpg`}
          alt={`${product.name} product image`}
        />
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-bold">{product.name}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatCurrency(product.price)}
        </p>
        <button
          type="button"
          className="w-full mt-5 p-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 uppercase"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
