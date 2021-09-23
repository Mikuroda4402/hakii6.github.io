import { RaceOption, UmaSetting } from '../features/raceSimulator/types';
import {
  getSingleStorage,
  setSingleStorage,
  getStorage,
  createStorage,
  updateStorage,
} from '../functions/LocalStorage';

import skillPassive from '../features/raceSimulator/constants/SkillPassive';

const defaultUma: UmaSetting = {
  name: '',
  status: {
    speed: 1200,
    stamina: 900,
    power: 1200,
    guts: 300,
    wisdom: 300,
  },
  option: {
    style: '1',
    fit: {
      surface: 'A',
      dist: 'A',
      style: 'A',
    },
    motivation: '0',
  },
  skill: {
    unique: [],
    successionUnique: [],
    healing: [],
    active: [],
    passive: [],
  },
};

export const fetchInitState = () =>
  new Promise<[RaceOption | null, UmaSetting[]]>((resolve) => {
    const raceOption = getSingleStorage('raceOption') as RaceOption | null;
    const umaDataList = getStorage('umaDataList') as UmaSetting[];
    resolve([raceOption, umaDataList]);
  });

export const createUma = (umaName: string) =>
  new Promise<UmaSetting[]>((resolve) => {
    const newUma = { ...defaultUma, name: umaName };
    createStorage('umaDataList', newUma);
    const umaDataList = getStorage('umaDataList') as UmaSetting[];
    resolve(umaDataList), 1;
  });

export const updateUma = ([umaSetting, umaIndex]: [UmaSetting, number]) =>
  new Promise<UmaSetting[]>((resolve) => {
    updateStorage('umaDataList', umaSetting, umaIndex);
    const umaDataList = getStorage('umaDataList') as UmaSetting[];
    resolve(umaDataList);
  });

export const saveRaceOption = (raceOption: RaceOption) =>
  new Promise<RaceOption>((resolve) => {
    setSingleStorage('raceOption', raceOption);
    resolve(raceOption);
  });

export default fetchInitState;
