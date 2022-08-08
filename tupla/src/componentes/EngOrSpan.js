import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import iconEngland from "../media/reino-unido.png"
import iconSpanish from "../media/espana.png"
const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
  ({ theme, checked }) => ({
    '.MuiFormControlLabel-label': checked && {
      color: theme.palette.secondary.main,
    },
  }),
);


const sx={
    color: "white",
    '&.Mui-checked': {
      color: "secondary.main",
    },
  };

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
  /**
   * The value of the component.
   */
  value: PropTypes.any,
};

export default function UseRadioGroup() {
  return (
    <RadioGroup name="use-radio-group" defaultValue="first">
      <MyFormControlLabel value="first" label={<img style={{width:"32px"}} src={iconEngland}></img>} control={<Radio sx={sx}/>} />
      <MyFormControlLabel value="second" label={<img style={{width:"32px"}} src={iconSpanish}></img>} control={<Radio sx={sx}/>} />
    </RadioGroup>
  );
}
