import Link from 'next/link';
import { useRouter } from 'next/router';

const ProductDetail = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <>
      <Link href='/'>
        <h3>Home</h3>
      </Link>
      <h1>Details about product {productId}</h1>;
    </>
  );
};

export default ProductDetail;
