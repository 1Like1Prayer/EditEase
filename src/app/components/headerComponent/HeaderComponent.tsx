import Image from 'next/image';
interface HeaderComponentProps {
  companyName: string;
}
export const HeaderComponent = ({ companyName }: HeaderComponentProps) => {
  return (
    <div className='sm:gap-10S flex w-full flex-row items-center justify-center gap-5'>
      <Image
        alt='temp'
        className='w-14 sm:w-20'
        width={0}
        height={0}
        src='/logo-no-background.svg'
      />
      <div className='text-2xl capitalize sm:text-4xl'>{companyName}</div>
    </div>
  );
};
