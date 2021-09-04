import { createSlice } from '@reduxjs/toolkit';

import { initRace } from './functions/InitRace';
import { initUmaState } from './functions/InitUma';
import { progressRace } from './functions/ProgressRace';
import { roundNumbers } from './functions/Common';

import { RaceOption, RaceState, UmaState, Uma, UmaParams } from './types';

interface RaceSimulatorState {
  umaList: Uma[];
  raceOption: RaceOption;
  umaStateList: UmaState[];
  raceFrameResult: UmaState[][];
}

// const initParams:

const initialState: RaceSimulatorState = {
  umaList: [],
  raceOption: {
    raceTrackId: '10009',
    raceId: '10903',
    groundCond: '0',
    weather: '1',
    season: '3',
  },
  umaStateList: [],
  raceFrameResult: [],
};

const raceSimulatorSlice = createSlice({
  name: 'raceSimulator',
  initialState,
  reducers: {
    saveRace: (state, action) => ({
      ...state,
      raceOption: action.payload,
    }),
    simulateStart: (state, action) => {
      const raceParams = initRace(state.raceOption);
      const momentResult: Record<string, number>[] = [];
      const initUmaStateList = action.payload.map((uma: Uma, index: number) => {
        momentResult.push({
          order: 1,
          pos: 0,
        });
        return initUmaState(uma, index, raceParams);
      });

      const raceFrameResult = [[...initUmaStateList]];
      let raceState = {
        index: 0,
        umaStateList: [...initUmaStateList],
        momentResult,
        goalCount: 0,
      };

      for (
        raceState.index = 0;
        raceState.umaStateList.length !== raceState.goalCount;
        raceState.index += 1
      ) {
        raceState = progressRace(raceState);
        raceFrameResult.push(raceState.umaStateList);
      }
      state.raceFrameResult = raceFrameResult;
    },
    reset: (state) => initialState,
  },
});

export const { saveRace, simulateStart, reset } = raceSimulatorSlice.actions;

export default raceSimulatorSlice.reducer;
