import { ProductGrid } from '@/components/products';
import { Title } from '@/components/ui';
import { initialData } from '@/seed/seed';

const products = initialData.products;

export default function Home() {
    return (
        <>
            <Title title='Shop' subtitle='All Products' className='mb-2' />
            <ProductGrid products={products} />
        </>
    );
}
