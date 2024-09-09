'use client';

import {
    MagnifyingGlassIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link';
import {
    Tabs
} from '@radix-ui/themes'
import { useRouter, useSearchParams, usePathname} from 'next/navigation';
import path from 'path';
import { useDebounceCallback } from 'usehooks-ts';

interface ProductSearchProps {
    currentFilterParams?: string;
}

export default function ProductSearch({ currentFilterParams }: ProductSearchProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const debounce = useDebounceCallback(handleSearchTitle, 500);
    const title = searchParams.get('title') ?? '';

    if (currentFilterParams != 'highestPrice' && currentFilterParams != 'ratingAscending') {
        currentFilterParams = 'newest';
    }

    function handleSearchTitle(value:string){
        const sp = new URLSearchParams(searchParams);

        if (value.trim() === '') {
            sp.delete('title');
        } else {
            sp.set('title', value);
        }

        router.push(`${pathname}?${sp.toString()}`)
    }

    function convertSearchParamsToObject(searchParams: URLSearchParams) {
        const params: { [key: string]: string } = {};
        searchParams.forEach((value, key) => {
          params[key] = value;
        });
        return params;
      }
    
      const searchParamsObject = convertSearchParamsToObject(searchParams);
    

    return (
        <div className="flex flex-col md:flex-row items-center justify-between text-base">
            <Tabs.Root defaultValue={currentFilterParams} className='px-2' asChild>
                <Tabs.List className='flex'>
                    <Tabs.Trigger value="newest">
                        <Link
                        href={
                            {query: { ...searchParamsObject, filter: 'newest'}} 
                        }
                        >
                            Newest
                        </Link>
                    </Tabs.Trigger>
                    <Tabs.Trigger value="highestPrice">
                        <Link
                        href={
                            {query: { ...searchParamsObject, filter: 'highestPrice'}} 
                        }
                        >
                            Highest Price
                        </Link>
                    </Tabs.Trigger>
                    <Tabs.Trigger value="ratingAscending">
                        <Link
                        href={
                            {query: {...searchParamsObject, filter: 'ratingAscending'}} 
                        }
                        >
                            Rating Ascending
                        </Link>
                    </Tabs.Trigger>
                </Tabs.List>
            </Tabs.Root>
            {/* Add a simple search bar */}
            <div className="relative mx-2 my-2">
                <input
                    type="text"
                    placeholder="Search..."
                    className="border rounded-lg px-2 py-1 pl-8"
                    onChange={e => debounce(e.target.value)}
                    defaultValue={title}
                />
                <MagnifyingGlassIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
        </div>
    )
}