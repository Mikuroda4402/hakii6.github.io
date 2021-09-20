// types
import { UmaState, RaceObject } from './objects/objectTypes';
import { RaceOption, UmaSetting } from './types';

// constants
import skillPassive from './constants/SkillPassive';

const defaultPassiveSkills = skillPassive.reduce(
  (preVal, curVal) => ({
    ...preVal,
    [curVal.id]: '-1',
  }),
  {}
);

export const defaultRaceOption: RaceOption = {
  raceTrackId: '10009',
  raceId: '10903',
  groundCond: '0',
  weather: '1',
  season: '3',
};

export const defaultUma: UmaSetting = {
  name: '啾星雲',
  status: {
    speed: 1200,
    stamina: 600,
    power: 901,
    guts: 300,
    wisdom: 1200,
  },
  option: {
    style: '1',
    fit: {
      surface: 'A',
      dist: 'S',
      style: 'S',
    },
    motivation: '0',
  },
  skill: {
    passive: defaultPassiveSkills,
  },
};
export const defaultUma2: UmaSetting = {
  name: 'chu星雲',
  status: {
    speed: 1200,
    stamina: 600,
    power: 901,
    guts: 300,
    wisdom: 1200,
  },
  option: {
    style: '1',
    fit: {
      surface: 'A',
      dist: 'S',
      style: 'S',
    },
    motivation: '0',
  },
  skill: {
    passive: defaultPassiveSkills,
  },
};

export default defaultRaceOption;
