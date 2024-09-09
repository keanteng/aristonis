import {
    MagnifyingGlassIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link';
import {
    Tabs
} from '@radix-ui/themes'

interface ProductSearchProps {
    currentFilterParams: string;
}

export default function ProductSearch({ currentFilterParams }: ProductSearchProps) {
    if (currentFilterParams != 'highestPrice' && currentFilterParams != 'ratingAscending') {
        currentFilterParams = 'newest';
    }

    return (
        <div className="flex flex-col md:flex-row items-center justify-between text-base">
            <Tabs.Root defaultValue={currentFilterParams} className='px-2'>
                <Tabs.List className='flex'>
                    <Tabs.Trigger value="newest">
                        <Link
                        href={
                            {query: {filter: 'newest'}} 
                        }
                        >
                            Newest
                        </Link>
                    </Tabs.Trigger>
                    <Tabs.Trigger value="highestPrice">Highest Price</Tabs.Trigger>
                    <Tabs.Trigger value="ratingAscending">Rating Ascending</Tabs.Trigger>
                </Tabs.List>
            </Tabs.Root>
            {/* Add a simple search bar */}
            <div className="relative mx-2 my-2">
                <input
                    type="text"
                    placeholder="Search..."
                    className="border rounded-lg px-2 py-1 pl-8"
                />
                <MagnifyingGlassIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
        </div>
    )
}