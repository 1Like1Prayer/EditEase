import Image from 'next/image';
interface HeaderComponentProps {
  companyName: string;
}
export const HeaderComponent = ({ companyName }: HeaderComponentProps) => {
  return (
    <div className='flex w-full flex-row items-center justify-center gap-5 pb-12'>
      <Image
        alt='logo'
        className='w-14 sm:w-20'
        width={0}
        height={0}
        src='/logo-no-background.svg'
      />
      <div className='text-2xl capitalize sm:text-4xl'>{companyName}</div>
    </div>
  );
};
