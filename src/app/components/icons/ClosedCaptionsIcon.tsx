import { useBoundStore } from '@/app/state/state';

export interface IconSettings {
  isActive: boolean;
  index: number;
}
export const ClosedCaptionsIcon = ({isActive,index}:IconSettings) => {
  const setIsSubbed = useBoundStore((state) => state.changeLineSettings);
  return(
      <svg
          onClick={() =>
              setIsSubbed<'isSubbed'>(index, 'isSubbed', !isActive)
          }
          xmlns='http://www.w3.org/2000/svg'
          height='36px'
          viewBox='0 0 24 24'
          width='36px'
          fill={isActive ? '#000000' : '#6B7280'}
      >
        <path d='M0 0h24v24H0z' fill='none' />
        <path d='M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z' />
      </svg>
  );
}
