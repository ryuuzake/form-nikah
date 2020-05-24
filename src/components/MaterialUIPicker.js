import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPicker(props) {
  const { name, value, handleChange } = props;

  const handleDateChange = (date) => {
    let e = {};
    e.target = {};
    e.target.name = name;
    e.target.value = date;
    handleChange(e);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          name={name}
          format="MM/dd/yyyy"
          value={value}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          style={{
            width: '100%',
          }}
        />
    </MuiPickersUtilsProvider>
  )
}
