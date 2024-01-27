import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RootState} from '@/app/state/redux/state';

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

interface Transcription {
  style: TranscriptionStyle;
  subLanguage: Languages;
  dubLanguage: Languages;
  backgroundMusic: string;
  lines: Map<number, Line>;
}

const initialState: Transcription = {
  style: TranscriptionStyle.NONE,
  subLanguage: Languages.ENGLISH,
  dubLanguage: Languages.ENGLISH,
  backgroundMusic: '',
  lines: new Map<number, Line>(),
};

export const transcriptionSlice = createSlice({
  name: 'transcription',
  initialState,
  reducers: {
    addLine: (state, action: PayloadAction<string>) => {
      state.lines.set(state.lines.size + 1, convertToLine(action.payload));
    },
    removeLine: (state, action: PayloadAction<number>) => {
      state.lines.delete(action.payload);
    },
    changeTranscriptionSettings: <T extends keyof Transcription>(
      state: Transcription,
      action: PayloadAction<{ field: T; value: Transcription[T] }>,
    ) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    changeLineSettings: <T extends keyof LineConfig>(
      state: Transcription,
      action: PayloadAction<{ index: number; field: T; value: LineConfig[T] }>,
    ) => {
      const { index, field, value } = action.payload;
      const line: Line = state.lines.get(index) as Line;
      state.lines.set(index, {
        ...line,
        config: { ...line.config, [field]: value },
      });
    },
    changeAllLineSettings: <T extends keyof LineConfig>(
      state: Transcription,
      action: PayloadAction<{ field: T; value: LineConfig[T] }>,
    ) => {
      const { field, value: configValue } = action.payload;
      state.lines.forEach((value, key, map) => {
        map.set(key, {
          ...value,
          config: { ...value.config, [field]: configValue },
        });
      });
    },
  },
});

const convertToLine = (sentence: string) => ({
  text: sentence,
  config: initLineConfig,
});

export const {
  changeAllLineSettings,
  changeLineSettings,
  addLine,
  removeLine,
  changeTranscriptionSettings,
} = transcriptionSlice.actions;

export const selectLines = (state:RootState)=>state.transcription.lines

const convertToParagraph = (sentence: string) =>
  sentence
    .split('.')
    .map((line: string) => ({ text: line, config: initLineConfig }));
