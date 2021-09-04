// top module
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

// UI components
import {
  TextField,
  Button,
  InputLabel,
  FormHelperText,
  FormControl,
  Select,
  NativeSelect,
} from '@material-ui/core';

// redux store
import * as raceSimulatorActions from '../../raceSimulatorSlice';

// other
import { RaceOption } from '../../types';
import CourseDataGeneral from '../../constants/CourseDataGeneral.json';
import CourseData from '../../constants/CourseData.json';
import {
  getStorageObject,
  setStorageObject,
} from '../../functions/LocalStorage';

const defaultOption: RaceOption = {
  raceTrackId: '10009',
  raceId: '10906',
  groundCond: '1',
  weather: '1',
  season: '1',
};

const initOption = (): RaceOption => {
  const raceOption = getStorageObject('raceOption') as RaceOption | null;
  return raceOption !== null ? raceOption : defaultOption;
};

const RaceForm = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [option, setOption] = useState<RaceOption>(initOption());

  const raceTrackList = useMemo(
    () =>
      CourseDataGeneral.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      )),
    []
  );

  const raceList = useMemo(() => {
    const selectedRaceTrack = CourseDataGeneral.find(
      (raceTrack) => raceTrack.id === option.raceTrackId
    );
    if (selectedRaceTrack !== undefined) {
      setOption({
        ...option,
        raceId: selectedRaceTrack.courses[0].id,
      });
      return selectedRaceTrack.courses.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ));
    }
    return <></>;
  }, [option.raceTrackId]);

  const handleChange = (
    e: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setOption({
      ...option,
      [e.target.name as string]: e.target.value,
    });
  };

  const handleClick = (e: React.MouseEvent): void => {
    dispatch(raceSimulatorActions.saveRace(option));
  };

  useEffect(() => {
    setStorageObject('raceOption', option, 'replace');
  }, [handleClick]);

  return (
    <>
      <FormControl required>
        <InputLabel id="raceTrackId-label">
          {t('RaceOption.raceTrackId')}
        </InputLabel>
        <Select
          native
          labelId="raceTrackId-label"
          id="raceTrackId"
          name="raceTrackId"
          value={option.raceTrackId}
          onChange={handleChange}
        >
          {raceTrackList}
        </Select>
      </FormControl>

      <FormControl required>
        <InputLabel id="raceId-label">{t('RaceOption.raceId')}</InputLabel>
        <Select
          native
          labelId="raceId-label"
          id="raceId"
          name="raceId"
          value={option.raceId}
          onChange={handleChange}
        >
          {raceList}
        </Select>
      </FormControl>

      <FormControl required>
        <InputLabel id="season-label">{t('RaceOption.season')}</InputLabel>
        <Select
          native
          labelId="season-label"
          id="season"
          name="season"
          value={option.season}
          onChange={handleChange}
        >
          <option value="1">春</option>
          <option value="2">夏</option>
          <option value="3">秋</option>
          <option value="4">冬</option>
        </Select>
      </FormControl>

      <FormControl required>
        <InputLabel id="weather-label">{t('RaceOption.weather')}</InputLabel>
        <Select
          native
          labelId="weather-label"
          id="weather"
          name="weather"
          value={option.weather}
          onChange={handleChange}
        >
          <option value="0">晴</option>
          <option value="1">陰</option>
          <option value="2">雨</option>
          <option value="3">雪</option>
        </Select>
      </FormControl>

      <FormControl required>
        <InputLabel id="groundCond-label">
          {t('RaceOption.groundCond')}
        </InputLabel>
        <Select
          native
          labelId="groundCond-label"
          id="groundCond"
          name="groundCond"
          value={option.groundCond}
          onChange={handleChange}
        >
          <option value="0">良</option>
          <option value="1">稍重</option>
          <option value="2">重</option>
          <option value="3">不良</option>
        </Select>
      </FormControl>

      <Button variant="contained" color="primary" onClick={handleClick}>
        {t('save')}
      </Button>
    </>
  );
};

export default RaceForm;

// { CourseDataGeneral
// //   && CourseDataGeneral.map((track, index) =>
// <option key={index} value={index}>{track.name}</option>) }
