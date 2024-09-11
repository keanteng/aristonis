'use client';
import { Tabs } from '@radix-ui/themes';
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';

export default function OrderSearch() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between text-base mb-2">
            <Tabs.Root defaultValue='newest' className='px-2' asChild>
                <Tabs.List className='flex'>
                    <Tabs.Trigger value="all">
                        All
                    </Tabs.Trigger>
                    <Tabs.Trigger value="today">
                        Today
                    </Tabs.Trigger>
                    <Tabs.Trigger value="this-week">
                        This Week
                    </Tabs.Trigger>
                </Tabs.List>
            </Tabs.Root>
            {/* Add a simple search bar */}
            <div className="relative">
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