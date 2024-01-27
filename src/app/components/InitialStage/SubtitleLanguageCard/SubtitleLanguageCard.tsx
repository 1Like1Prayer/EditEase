
import { useAppDispatch } from '@/app/state/redux/hooks';
import {changeTranscriptionSettings, Languages} from '@/app/state/redux/transcriptionSlice';

export const SubtitleLanguageCard = () => {
  const dispatch = useAppDispatch();

  return (
    <div className='card gap-2'>
      <div className='text-center text-black'>Subtitle Language Output</div>
      <div className='flex flex-row justify-center gap-10'>
        {Object.values(Languages).map((language, index) => (
          <button
            key={index}
            className='button'
            onClick={() =>
              dispatch(
                changeTranscriptionSettings({
                  field: 'subLanguage',
                  value: language,
                }),
              )
            }
          >
            {language}
          </button>
        ))}
      </div>
    </div>
  );
};
