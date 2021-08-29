import React, { useState } from 'react';

// import BaseForm from './components/BaseForm'

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import UmaForm from './forms/UmaForm';
import RaceForm from './forms/RaceForm';

// import './styles.css';

const RaceSimulator = () => {
  const [no, setNo] = useState('');
  return (
    <>
      <UmaForm />
      <RaceForm />
      <br />

      { /* <Button type="submit" variant="contained" color="primary" /> */ }
    </>
  );
};

export default RaceSimulator;
