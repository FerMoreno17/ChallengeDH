import {createSlice} from '@reduxjs/toolkit';
import {Producto} from '../models/productoModel';

export interface ChallengeState {
  listado: Producto[];
  item: Producto;
}
const initialState = {} as ChallengeState;

export const challengeReducer = createSlice({
  name: 'challenge',
  initialState,
  reducers: {
    setListado: (state, action) => {
      state.listado = action.payload;
    },
    setCurrentItem: (state, action) => {
      state.item = action.payload;
    },
  },
});

export const {setCurrentItem, setListado} = challengeReducer.actions;

export default challengeReducer.reducer;
