import { Languages } from '@/app/state/transcription-state';
import { useBoundStore } from '@/app/state/state';

export const SubtitleLanguageCard = () => {
  const setSubtitleLanguage = useBoundStore(
    (state) => state.changeTranscriptionSettings,
  );
  return (
    <div className='card gap-2'>
      <div className='text-center text-black'>Subtitle Language Output</div>
      <div className='flex flex-row justify-center gap-10'>
        {Object.values(Languages).map((language, index) => (
          <button
            key={index}
            className='button'
            onClick={() => setSubtitleLanguage('subLanguage', language)}
          >
            {language}
          </button>
        ))}
      </div>
    </div>
  );
};
