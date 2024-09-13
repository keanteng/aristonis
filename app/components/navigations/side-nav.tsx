import { 
  HomeIcon,
  ShoppingBagIcon,
  ArchiveBoxIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/react/24/outline';
import {
  GitHubLogoIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const menuItems = [
  {
    icons: <HomeIcon className='h-5 w-5' />,
    label: 'Home',
    href: '/home'
  },
  {
    icons: <ShoppingBagIcon className='h-5 w-5' />,
    label: 'Products',
    href: '/home/products'
  },
  {
    icons: <ArchiveBoxIcon className='h-5 w-5' />,
    label: 'Orders',
    href: '/home/orders'
  },
  {
    icons: <ClipboardDocumentListIcon className='h-5 w-5' />,
    label: 'Tasks',
    href: '/home/tasks'
  },
];

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const pathname = usePathname();

  return (
    <nav className={`shadow-lg h-[calc(100vh-40px)] bg-neutral-200 text-black p-2 flex flex-col duration-50 fixed top-10 left-0 ${isOpen ? 'translate-x-0 md:w-60 w-52' : '-translate-x-full md:translate-x-0 md:w-14'} z-10`}>
      <div className="mt-1 flex flex-col h-full">
        <ul className='flex-1'>
          {menuItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.href} 
              className={clsx(`px-3 my-1 hover:bg-neutral-400 rounded-md duration-300 cursor-pointer flex ${isOpen ? 'gap-2' : 'justify-center'} items-center relative group`,
                {
                  'bg-neutral-400': pathname === item.href,
                }
              )} 
              style={{ height: '2.5rem' }}
            >
              <div className="flex items-center justify-center">{item.icons}</div>
              <p className={`${!isOpen && 'w-0'} overflow-hidden`}>{item.label}</p>
              <p className={`${isOpen && 'hidden'} absolute left-32 shadow-md rounded-md w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16`}>{item.label}</p>
            </Link>
          ))}
        </ul>
        {/* Hidden div to push footer to the bottom */}
        <div className='flex-grow'></div>
        {/* footer */}
        <div className={`flex items-center gap-2 px-3 py-2 ${isOpen ? 'justify-start' : 'justify-center'}`}>
          <div className="flex items-center justify-center">
            <GitHubLogoIcon className='w-5 h-5' />
          </div>
          {isOpen && (
            <div className={`leading-5 duration-500 overflow-hidden`}>
              <p>GitHub</p>
              <Link href="https://github.com/keanteng/aristonis" className='text-xs underline'>keanteng/aristonis</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;