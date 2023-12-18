import { StateCreator } from 'zustand';

const enum TranscriptionStyle {
  NONE = 'None',
  CLOSED = 'Closed Caption',
  BIG = 'Big Title',
  SINGLE = 'Word By Word',
}

const enum Voices {
  BENJ = 'Benjamine, Male',
}

type alignment = 'right' | 'left' | 'center';

interface FontConfig {
  fontName: string;
  bold: boolean;
  italic: boolean;
}

interface GifConfig {
  gif: string;
  alignment: Omit<alignment, 'center'>;
}

interface WordConfig {
  backgroundColor: string;
  textColor: string;
  startTime: number;
  length: number;
  Font: FontConfig;
  alignment: alignment;
  gif?: GifConfig;
  sound?: string;
}

const initWordConfig: WordConfig = {
  backgroundColor: '#ffffff',
  textColor: '#000000FF',
  startTime: 0,
  length: 5,
  Font: { fontName: 'Arial', bold: true, italic: false },
  alignment: 'left',
};
interface Word {
  text: string;
  config: WordConfig;
}

export type line = Word[];

interface Transcription {
  style: TranscriptionStyle;
  voiceOver: boolean;
  voice: Voices;
  lines: line[];
}

export interface TranscriptionState {
  transcription: Transcription;
  addLines: (lines: string) => void;
  //todo add change config for each field + subfield (maybe use Generics)
}

const initTranscriptionState: Omit<TranscriptionState, 'addLines'> = {
  transcription: {
    style: TranscriptionStyle.NONE,
    voiceOver: false,
    voice: Voices.BENJ,
    lines: [],
  },
};
export const createTranscriptionSlice: StateCreator<TranscriptionState> = (
  set,
) => ({
  ...initTranscriptionState,
  addLines: (lines: string) =>
    set((state) => ({
      transcription: {
        ...state.transcription,
        lines: [...state.transcription.lines, convertToLine(lines)],
      },
    })),
});

const convertToLine = (sentence: string) =>
  sentence
    .split(' ')
    .map((word: string) => ({ text: word, config: initWordConfig }));
