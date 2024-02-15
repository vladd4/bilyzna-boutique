import ProductPage from "@/components/ProductPage";

export async function generateMetadata({ searchParams }) {
  const productId = searchParams.id;

  const product = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/id/${productId}`
  ).then((res) => res.json());

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [product.images[0].link],
    },
  };
}

export default function ProdPage() {
  return <ProductPage />;
}
