'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import {
    SunIcon,
    MoonIcon,
} from '@heroicons/react/24/outline';
import {
    IconButton,
} from '@radix-ui/themes';

const ColorMode = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // darkMode state
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null;
    }

    // function handle
    const handleClick = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        setTheme(newDarkMode ? 'dark' : 'light');
    }

    return (
        <div>
            <IconButton onClick={handleClick}>
                {darkMode ? <MoonIcon className='h-5 w-5'/> : <SunIcon className='h-5 w-5' />}
            </IconButton>
        </div>
    )
}

export default ColorMode;