import { PhoneIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Banner from '../../public/images/banner.jpg';
import Profile from '../../public/images/profile.png';

const profile = {
  name: 'Muhammad Izhar',
  role: 'Headless CMS Developer',
  companyURL: 'muhammadizhar360@gmail.com',
  companyName: 'Royal Cybers',
  email: 'muhammadizhar360@gmail.com',
  message:
    "Hey there, If you ever need my services on a similar project, I'd love to help!",
  callToActionURL: 'muhammadizhar360@gmail.com',
  callToActionMessage: 'Book a Call With Me',
  profileImage: Profile,
  coverImage: Banner,
};

export default function Header() {
  return (
    <div>
      <div className='mb-8'>
        <div className='relative h-60 w-full lg:h-42'>
          <Image
            className='object-cover scale-105'
            src={profile.coverImage}
            layout='fill'
            alt={`services offered by ${profile.companyName} - Headless Commerce & CMS Experts`}
          />
        </div>
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5'>
            <div className='flex'>
              <div className='relative h-24 w-24 rounded ring-6 ring-slate-200 sm:h-24 sm:w-24'>
                <Image
                  src={profile.profileImage}
                  layout='fill'
                  alt={`profile picture ${profile.name}`}
                />
              </div>
            </div>
            <div className='mt-4 sm:mt-12 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1'>
              <div className='sm:hidden md:block mt-6 min-w-0 flex-1'>
                <h1 className='text-2xl font-bold text-gray-900 truncate'>
                  {profile.name}
                </h1>
                <p className='text-sm font-medium text-gray-500'>
                  {profile.role} at{' '}
                  <a
                    href={profile.companyURL}
                    className='text-gray-900 hover:text-liftedgreen-700'
                  >
                    {profile.companyName}
                  </a>{' '}
                </p>
                <p className='text-sm  font-light text-liftedgreen-600'>
                  {profile.message}
                </p>
              </div>
              <div className='mt-4 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4'>
                <a
                  href="https://api.whatsapp.com/send?phone=+923329488281&text=I need a headless cms developer!" target="_blank" rel="noopener noreferrer"
                  className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-liftedgreen-800 hover:bg-liftedgreen-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-liftedgreen-500'
                >
                  <PhoneIcon
                    className='-ml-1 mr-2 h-5 w-5'
                    aria-hidden='true'
                  />
                  {profile.callToActionMessage}
                </a>
              </div>
            </div>
          </div>

          <div className='hidden sm:block md:hidden mt-6 min-w-0 flex-1'>
            <h1 className='text-2xl font-bold text-gray-900 truncate'>
              {profile.name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
