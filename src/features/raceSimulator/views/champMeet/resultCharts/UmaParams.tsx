// top module
import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from 'react';
import { Line, Chart, Scatter } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

// UI components
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Button,
  Slider,
  Typography,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from '@material-ui/core';

// redux store
import * as raceSimulatorActions from '../../../raceSimulatorSlice';
import { RootState } from '../../../../../store';

// other
import { roundNumbers } from '../../../../../functions/Common';
import { UmaObject, RaceObject, UmaState } from '../../../objects/objectTypes';
import { StatusType } from '../../../types';

interface Props {
  umaObject: UmaObject;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // marginTop: theme.spacing(3),
      // marginLeft: theme.spacing(1),
      // marginRight: theme.spacing(3),
    },
    table: {},
  })
);

const UmaParams = ({ umaObject }: Props): JSX.Element => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  // state & selector
  // const frameResultArray = umaObject.getFrameResult();
  // const { name, rawStatus} = umaObject.umaParams;

  // const {
  //   surfaceFit,
  //   distFit,
  //   styleFit,
  //   status,
  //   motivation,
  //   style,
  //   coefParams,
  //   skillActRate,
  //   temptRate,
  //   spMax,
  //   v,
  //   spurtSpeed,
  //   acc,
  //   dec,
  //   temptSection,
  //   spurtSpCoef,
  //   setPosKeepCoef,
  //   frameResult,
  // } = umaObject;
  const statusTypeArray: StatusType[] = [
    'speed',
    'stamina',
    'power',
    'guts',
    'wisdom',
  ];

  return <>adwdwq</>;
};
export default UmaParams;
// <>
//   <hr />
//   <Grid container>
//     <Grid item xs={2} />
//     <Grid item xs={8}>
//       <TableContainer component={Paper}>
//         <Table className={classes.table}>
//           <TableHead>
//             <TableRow>
//               <TableCell style={{ width: 160 }}>??????</TableCell>
//               <TableCell style={{ width: 160 }}>??????</TableCell>
//               <TableCell style={{ width: 160 }}>?????????</TableCell>
//               <TableCell style={{ width: 100 }}>??????</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {statusTypeArray.map((statusType) => (
//               <TableRow key={statusType}>
//                 <TableCell component="th" scope="row">
//                   {t(`Uma.${statusType}`)}
//                 </TableCell>
//                 <TableCell>{rawStatus[statusType]}</TableCell>
//                 <TableCell>{status[statusType]}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Grid>
//     <Grid item xs={2} />
//   </Grid>
//   <hr />
//   <br />
//   <Grid container>
//     <Grid item xs={2} />
//     <Grid item xs={8}>
//       <TableContainer component={Paper}>
//         <Table className={classes.table}>
//           <TableHead>
//             <TableRow>
//               <TableCell style={{ width: 160 }}> </TableCell>
//               <TableCell style={{ width: 100 }}>??????</TableCell>
//               <TableCell style={{ width: 100 }}>??????</TableCell>
//               <TableCell style={{ width: 100 }}>??????</TableCell>
//               <TableCell style={{ width: 100 }}>????????????</TableCell>
//               <TableCell style={{ width: 100 }}>????????????</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             <TableRow>
//               <TableCell component="th" scope="row">
//                 {t('????????????')}
//               </TableCell>
//               <TableCell>{v[0]}</TableCell>
//               <TableCell>{v[1]}</TableCell>
//               <TableCell>{v[2]}</TableCell>
//               <TableCell>{spurtSpeed}</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell component="th" scope="row">
//                 {t('?????????')}
//               </TableCell>
//               <TableCell>{acc[0]}</TableCell>
//               <TableCell>{acc[1]}</TableCell>
//               <TableCell>{acc[2]}</TableCell>
//               <TableCell>{acc[3]}</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell component="th" scope="row">
//                 {t('??????')}
//               </TableCell>
//               <TableCell>{dec[0]}</TableCell>
//               <TableCell>{dec[1]}</TableCell>
//               <TableCell>{dec[2]}</TableCell>
//               <TableCell>{dec[3]}</TableCell>
//               <TableCell>-1.2</TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Grid>
//     <Grid item xs={2} />
//   </Grid>
// </>
