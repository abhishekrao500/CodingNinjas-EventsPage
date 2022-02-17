import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  containerdiv: { 
    width: '80%'
  },
  empty: {
    fontWeight: 100,
    textAlign: 'center',
    fontSize: '60px',
    marginTop: '162px'
  }
}))


export default function EmptyScreen () {
  const classes = useStyles()
  return (
    <div className={classes.containerdiv}>
      <p className={classes.empty}>No Events Found</p>
    </div>
  );
}
