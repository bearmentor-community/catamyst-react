import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import type { Product } from "@prisma/client";
import { prisma } from "~/libs";

export async function loader() {
  const products = await prisma.product.findMany();

  return json(products);
}

export default function Index() {
  const products = useLoaderData<Product[]>();

  return (
    <div>
      <h1>Products</h1>

      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}

      {products.map((product) => {
        return (
          <div key={product.name}>
            <h2>
              {product.name} ({product.price})
            </h2>
          </div>
        );
      })}

      <form method="post">
        <input type="text" name="name" />
        <button type="submit" className="bg-blue-500">
          Add Product
        </button>
      </form>
    </div>
  );
}
