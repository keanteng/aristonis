'use client';
import { Tabs } from '@radix-ui/themes';
import {MagnifyingGlassIcon, PlusCircleIcon} from '@heroicons/react/24/outline';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useDebounceCallback } from 'usehooks-ts';
import Link from 'next/link';

interface OrderSearchProps {
    currentFilterParams?: string;
}

export default function OrderSearch({currentFilterParams}: OrderSearchProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const debounce = useDebounceCallback(handleSearchTitle, 500);
    const title = searchParams.get('title') ?? '';

    if (currentFilterParams != 'today' && currentFilterParams != 'this-week') {
        currentFilterParams = 'all';
    }

    function handleSearchTitle(value: string) {
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
        <div className="flex flex-col md:flex-row items-center justify-between text-base mb-2">
            <div className='flex flex-col lg:flex-row gap-2 items-center'>
                <Tabs.Root defaultValue='newest' className='px-2' asChild>
                    <Tabs.List className='flex'>
                        <Tabs.Trigger value="all">
                            <Link
                                href={{
                                    query: { ...searchParamsObject, filter: 'all' }
                                }}
                            >
                                All
                            </Link>
                        </Tabs.Trigger>
                        <Tabs.Trigger value="today">
                            <Link
                                href={{
                                    query: { ...searchParamsObject, filter: 'today' }
                                }}
                            >
                                Today
                            </Link>
                        </Tabs.Trigger>
                        <Tabs.Trigger value="this-week">
                            <Link
                                href={{
                                    query: { ...searchParamsObject, filter: 'this-week' }
                                }}
                            >
                                This Week
                            </Link>
                        </Tabs.Trigger>
                    </Tabs.List>
                </Tabs.Root>
                <div>
                    <Link href="/home/orders/create">
                        <div className="flex items-center gap-1 bg-primary-500 px-2 py-1 rounded-lg text-sm text-gray-500">
                            <span className='hidden lg:visible'>| &nbsp;</span>
                            <PlusCircleIcon className="w-5 h-5" />
                            New
                        </div>
                    </Link>
                </div>
            </div>
            {/* Add a simple search bar */}
            <div className="relative">
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