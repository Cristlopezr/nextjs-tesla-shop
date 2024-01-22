import { ProductGrid } from '@/components/products';
import { Title } from '@/components/ui';
import { initialData } from '@/seed/seed';
import { notFound } from 'next/navigation';

interface Props {
    params: {
        id: string;
    };
}

export default function CategoryPage({ params }: Props) {
    const { id } = params;
    const products = initialData.products.filter(product => product.gender === id);

    if (products.length === 0) {
        notFound();
    }

    return (
        <>
            <Title title={`${id} Products`} subtitle='All Products' className='mb-2' />
            <ProductGrid products={products} />
        </>
    );
}
