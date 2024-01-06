import { Languages } from '@/app/state/transcription-state';
import { useBoundStore } from '@/app/state/state';

export const SubtitleLanguageCard = () => {
  const setSubtitleLanguage = useBoundStore(
    (state) => state.changeTranscriptionSettings,
  );
  return (
    <div className='card gap-4'>
      <div className='p-2 text-center text-black'>Subtitle Language Output</div>
      <div className='flex flex-row justify-start gap-10'>
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
