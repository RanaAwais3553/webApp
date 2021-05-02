import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Card from '../../componentFunction/Card/Card.js'
import CardHeader from '../../componentFunction/Card/CardHeader.js'
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function AdmissionForm() {
  const [value, setValue] = React.useState('female');
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChangeClass = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <Card>
            <CardHeader color="success">
              <h1>Amission Form</h1>
            </CardHeader>

    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="First Name" />
      <TextField id="standard-basic" label="Last Name" />
      <TextField id="standard-basic" label="Father Name" />
      <TextField id="standard-basic" label="Address" />
      <InputLabel htmlFor="age-native-simple">Class</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChangeClass}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={4}>4th</option>
          <option value={5}>5th</option>
          <option value={6}>6th</option>
          <option value={7}>7th</option>
          <option value={8}>8th</option>
          <option value={9}>9th</option>
          <option value={10}>10th</option>
          <option value={11}>11th</option>
          <option value={12}>12th</option>

        </Select>
      <TextField id="standard-basic" label="Fee" />

        <FormLabel component="legend">Gender</FormLabel>
  
  <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
       </RadioGroup>
      
      <TextField id="standard-basic" label="Standard" />
      <TextField id="standard-basic" label="Standard" />
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </form>
    </Card>
  );
}
