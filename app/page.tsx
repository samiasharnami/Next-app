import Link from 'next/link';
import ProductCard from './components/ProductCard';

export default function Home() {
  return (
    <main>
      <h1 className='mb-3'>Hello world</h1>
      <Link href='/users' className='mb-5'>Users</Link>
      <ProductCard />
    </main>
  )
}
