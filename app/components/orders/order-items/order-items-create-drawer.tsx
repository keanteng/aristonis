'use client';

import { useEffect, useRef } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { OrderItemsCreateForm } from './order-items-create-form';

interface ProductDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function OrderItemsCreateDrawer({ isOpen, onClose }: ProductDrawerProps) {
    const drawerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-10 bg-black bg-opacity-50" onClick={onClose}></div>
            )}
            <div
                ref={drawerRef}
                className={`fixed top-0 right-0 z-20 h-screen transition-all duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} bg-white shadow-lg w-full sm:w-80 md:w-96`}
            >
                <div className="relative px-6 py-3 bg-neutral-300 text-black shadow-md">
                    <button onClick={onClose} className="absolute top-4 right-4 text-black hover:text-gray-700">
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                    <div className="flex flex-row gap-1 items-center">
                        <PlusCircleIcon className="h-5 w-5" />
                        <h2 className="text-lg font-semibold">Add Item</h2>
                    </div>
                </div>
                <div className="flex flex-col gap-0.5 w-full px-4 py-3 overflow-y-auto h-[calc(100vh-3rem)]">
                    <OrderItemsCreateForm />
                </div>
            </div>
        </>
    );
}