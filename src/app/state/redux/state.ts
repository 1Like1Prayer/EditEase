import { configureStore } from '@reduxjs/toolkit';
import { transcriptionSlice } from '@/app/state/redux/transcriptionSlice';
import {videosSlice} from '@/app/state/redux/videoSlice';

export const store = configureStore({

  reducer: {
    transcription: transcriptionSlice.reducer,
      video:videosSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredPaths: ['transcription.lines'],
        },
      }),
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
