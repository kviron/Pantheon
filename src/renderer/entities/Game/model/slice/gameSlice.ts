import { GameSchema } from '@/entities/Game';
import { createSlice } from '@reduxjs/toolkit';

const initialState: GameSchema = {
  _inited: false,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  selectors: undefined,
});

// Action creators are generated for each case reducer function
export const { actions: gameActions } = gameSlice;
export const { reducer: gameReducer } = gameSlice;
