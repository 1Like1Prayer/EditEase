import { SubtitleStyle } from '@/app/components/SubscriptionStyle/SubtitleStyle';
import { VoiceOver } from '@/app/components/VoiceOver/VoiceOver';

export const TranscriptionSettings = () => {
  return (
    <div className='flex w-10/12 flex-row justify-evenly '>
      <SubtitleStyle />
      <VoiceOver />
    </div>
  );
};
