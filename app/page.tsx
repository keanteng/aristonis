import {
  Text,
  Heading,
} from '@radix-ui/themes';
import Link from 'next/link';
import { 
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';

export default function Home() {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <main className='p-4 min-h-screen flex flex-col'>
      <div className='flex flex-row items-center h-20 px-4 rounded-lg bg-neutral-600 justify-center gap-2'>
        <Text className='text-4xl text-white'>
          Aristonis
        </Text>
      </div>
      <div className='flex flex-col grow md:flex-row mt-4'>
        <div className='flex flex-col rounded-xl grow bg-neutral-300 px-4 pt-16 pb-10 md:px-8 gap-2 items-center text-center'>
          <Text>
            {formatDate(new Date())}
          </Text>
          <Heading className='text-4xl'>
            Simplify Your Sales Process
          </Heading>
          <Text className='text-lg mt-2'>
            Spend less time managing your order on paper and more time on your business.
          </Text>

          <Link
          href='/home'
          className='mt-4 bg-white hover:bg-neutral-600 hover:text-white self-center text-black py-2 px-6 rounded-lg flex flex-row items-center gap-2 shadow-md'
          >
            <span>Try on Aristonis</span> <ArrowTopRightOnSquareIcon className='h-5 w-5' />
          </Link>
          <div className='h-auto grow'></div>
          <Text className='text-sm mt-4 text-center'>
           GPL3 Licensed © Kean Teng 2024 &nbsp; | &nbsp;  Powered by <Link href="https://nextjs.org/" className='underline'>Next.js</Link> & <Link href="https://tailwindcss.com/" className='underline'>Tailwind CSS</Link>
          </Text>
        </div>
        <div>
        </div>
      </div>
    </main>
  );
}
