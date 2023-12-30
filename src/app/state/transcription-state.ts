import { StateCreator } from 'zustand';
import { RussianRuble } from 'lucide-react';

const enum TranscriptionStyle {
  NONE = 'None',
  CLOSED = 'Closed Caption',
  BIG = 'Big Title',
  SINGLE = 'Word By Word',
}

const enum Languages {
  HEBREW = 'Hebrew',
  ENGLISH = 'English',
  RUSSIAN = 'Russian',
  ARABIC = 'Arabic',
}

const enum ZoomStyle {
  EASE = 'ease',
  SURPRISE = 'surprise',
  INSTANT = 'instant',
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

interface DubConfig {
  voices: Voices;
  isDubbed: boolean;
}

interface ZoomConfig {
  intensity: number;
  style: ZoomStyle;
}

interface LineConfig {
  backgroundColor: string;
  textColor: string;
  startTime: number;
  length: number;
  Font: FontConfig;
  alignment: alignment;
  dubbing: DubConfig;
  gif?: GifConfig;
  sound?: string;
  zoom?: ZoomConfig;
}

const initLineConfig: LineConfig = {
  backgroundColor: '#ffffff',
  textColor: '#000000FF',
  startTime: 0,
  length: 5,
  Font: { fontName: 'Arial', bold: true, italic: false },
  alignment: 'left',
  dubbing: { voices: Voices.BENJ, isDubbed: true },
};

interface Line {
  text: string;
  config: LineConfig;
}

export type Paragraph = Line[];

interface Transcription {
  style: TranscriptionStyle;
  subLanguage: Languages;
  dubLanguage: Languages[];
  backgroundMusic: string;
  lines: Map<number, Line>;
}

export interface TranscriptionState {
  transcription: Transcription;
  addLine: (line: string) => void;
  removeLine: (index: number) => void;
  //todo add change config for each field + subfield (maybe use Generics)
}

const initTranscriptionState: Omit<
  TranscriptionState,
  'addLine' | 'removeLine'
> = {
  transcription: {
    style: TranscriptionStyle.NONE,
    subLanguage: Languages.ENGLISH,
    dubLanguage: [Languages.ENGLISH],
    backgroundMusic: '',
    lines: new Map<number, Line>(),
  },
};
export const createTranscriptionSlice: StateCreator<TranscriptionState> = (
  set,
) => ({
  ...initTranscriptionState,
  addLine: (line: string) =>
    set((state) => ({
      transcription: {
        ...state.transcription,
        lines: state.transcription.lines.set(
          state.transcription.lines.size + 1,
          convertToLine(line),
        ),
      },
    })),
  removeLine: (index: number) =>
    set((state) => {
      const newLines = new Map(state.transcription.lines);
      newLines.delete(index);
      return {
        transcription: {
          ...state.transcription,
          lines: newLines,
        },
      };
    }),
});

const convertToLine = (sentence: string) => ({
  text: sentence,
  config: initLineConfig,
});

const convertToParagraph = (sentence: string) =>
  sentence
    .split('.')
    .map((line: string) => ({ text: line, config: initLineConfig }));
