import Image from 'next/image';
interface HeaderComponentProps {
  companyName: string;
}
export const HeaderComponent = ({ companyName }: HeaderComponentProps) => {
  return (
    <div className='flex flex-row justify-center items-center gap-5 sm:gap-10S w-full'>
          <Image alt='temp' className='w-14 sm:w-20' width={0} height={0} src='/logo-no-background.svg' />
      <div className='capitalize text-2xl sm:text-4xl'>{companyName}</div>
    </div>
  );
};
