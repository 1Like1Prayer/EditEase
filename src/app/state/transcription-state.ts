import { StateCreator } from 'zustand';
import { Map } from 'immutable';

export const enum TranscriptionStyle {
  NONE = 'None',
  CLOSED = 'Closed Caption',
  BIG = 'Big Title',
  SINGLE = 'Word By Word',
}

export enum Languages {
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

export interface LineConfig {
  backgroundColor: string;
  textColor: string;
  startTime: number;
  length: number;
  Font: FontConfig;
  alignment: alignment;
  isSubbed: boolean;
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
  isSubbed: true,
  dubbing: { voices: Voices.BENJ, isDubbed: true },
};

export interface Line {
  text: string;
  config: LineConfig;
}

export type Paragraph = Line[];

interface Transcription {
  style: TranscriptionStyle;
  subLanguage: Languages;
  dubLanguage: Languages;
  backgroundMusic: string;
  lines: Map<number, Line>;
}

export interface TranscriptionState {
  transcription: Transcription;
  addLine: (line: string) => void;
  removeLine: (index: number) => void;
  changeTranscriptionSettings: <T extends keyof Transcription>(
    field: T,
    value: Transcription[T],
  ) => void;
  changeLineSettings: <T extends keyof LineConfig>(
    index: number,
    field: T,
    value: LineConfig[T],
  ) => void;
  changeAllLineSettings: <T extends keyof LineConfig>(
    field: T,
    value: LineConfig[T],
  ) => void;
}

const initTranscriptionState: Omit<
  TranscriptionState,
  | 'addLine'
  | 'removeLine'
  | 'changeTranscriptionSettings'
  | 'changeLineSettings'
  | 'changeAllLineSettings'
> = {
  transcription: {
    style: TranscriptionStyle.NONE,
    subLanguage: Languages.ENGLISH,
    dubLanguage: Languages.ENGLISH,
    backgroundMusic: '',
    lines: Map<number, Line>(),
  },
};
export const createTranscriptionSlice: StateCreator<TranscriptionState> = (
  set,
) => ({
  ...initTranscriptionState,
  addLine: (line: string) =>
    set((state) => ({
      ...state,
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
      const newLines = state.transcription.lines.delete(index);
      return {
        transcription: {
          ...state.transcription,
          lines: newLines,
        },
      };
    }),
  changeTranscriptionSettings: <T extends keyof Transcription>(
    field: T,
    value: Transcription[T],
  ) =>
    set((state) => ({
      ...state,
      transcription: { ...state.transcription, [field]: value },
    })),
  changeLineSettings: <T extends keyof LineConfig>(
    index: number,
    field: T,
    value: LineConfig[T],
  ) =>
    set((state) => {
      const updatedLines = state.transcription.lines.update(
        index,
        (line) =>
          ({
            ...line,
            config: { ...(line as Line).config, [field]: value },
          }) as Line,
      );
      return {
        ...state,
        transcription: {
          ...state.transcription,
          lines: updatedLines,
        },
      };
    }),
  changeAllLineSettings: <T extends keyof LineConfig>(
    field: T,
    value: LineConfig[T],
  ) =>
    set((state) => {
      const updatedLines = state.transcription.lines.map((line: Line) => ({
        ...line,
        config: { ...line.config, [field]: value },
      }));
      return {
        ...state,
        transcription: { ...state.transcription, lines: updatedLines },
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