import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const FixtureHead = () => {
    return ( 
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={6}>
            <Grid item  xs={2}>
              <Item>Equipo (logo)</Item>
            </Grid>
            <Grid item xs={1}>
              <Item>vs</Item>
            </Grid>
            <Grid item xs={2}>
              <Item>Equipo (logo)</Item>
            </Grid>
            <Grid item xs={1}>
              <Item>Fecha</Item>
            </Grid>
          </Grid>
        </Box>

     );
}
 
export default FixtureHead;