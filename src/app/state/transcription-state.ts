import { StateCreator } from 'zustand';
import { RussianRuble } from 'lucide-react';
import { Map } from 'immutable';
import { state } from 'sucrase/dist/types/parser/traverser/base';

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
  dubLanguage: Languages[];
  backgroundMusic: string;
  lines: Map<number, Line>;
}

export interface TranscriptionState {
  transcription: Transcription;
  addLine: (line: string) => void;
  removeLine: (index: number) => void;
  changeLineSettings: <T extends keyof LineConfig>(
    index: number,
    field: T,
    value: LineConfig[T],
  ) => void;

  //todo add change config for each field + subfield (maybe use Generics)
}

const initTranscriptionState: Omit<
  TranscriptionState,
  'addLine' | 'removeLine' | 'changeLineSettings'
> = {
  transcription: {
    style: TranscriptionStyle.NONE,
    subLanguage: Languages.ENGLISH,
    dubLanguage: [Languages.ENGLISH],
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
  changeLineSettings: <T extends keyof LineConfig>(
    index: number,
    field: T,
    value: LineConfig[T],
  ) =>
    set((state) => {
      const currLine: Line = state.transcription.lines.get(index) as Line;
      currLine.config[field] = value;
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
});

const convertToLine = (sentence: string) => ({
  text: sentence,
  config: initLineConfig,
});

const convertToParagraph = (sentence: string) =>
  sentence
    .split('.')
    .map((line: string) => ({ text: line, config: initLineConfig }));
