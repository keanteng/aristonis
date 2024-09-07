import { HomeIcon } from '@heroicons/react/24/outline';

const menuItems = [
  {
    icons: <HomeIcon className='h-5 w-5' />,
    label: 'Home'
  }
];

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <nav className={`shadow-lg h-screen p-2 flex flex-col duration-500 bg-gradient-to-b from-green-500 to-teal-500 text-white fixed top-0 left-0 ${isOpen ? 'translate-x-0 w-60' : '-translate-x-full md:translate-x-0 md:w-14'} z-10`}>
      <div className="mt-12">
        <ul className='flex-1'>
          {menuItems.map((item, index) => (
            <li key={index} className='px-3 py-2 my-2 hover:bg-teal-800 rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group'>
              <div>{item.icons}</div>
              <p className={`${!isOpen && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>{item.label}</p>
              <p className={`${isOpen && 'hidden'} absolute left-32 shadow-md rounded-md w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16`}>{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;