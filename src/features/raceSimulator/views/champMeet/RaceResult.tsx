import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
// import * as racesActions from '../features/races/racesSlice'

// import * as InitRaceFunctions from './InitRaceFunctions';
// import * as InitUmasFunctions from './InitUmasFunctions';
// import * as RaceFunctions from './RaceFunctions';

import { RootState } from '../../../../store';

const RaceResult = (): JSX.Element => {
  const umaStateArr = useSelector(
    (state: RootState) => state.raceSimulator.umaStateArr
  );
  return (
    <div>
      {umaStateArr.map((value) => (
        <div>
          {value.pos} {value.momentSpeed} {value.momentAcc} {value.unusedSp}
        </div>
      ))}
    </div>
  );
};

export default RaceResult;
