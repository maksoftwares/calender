import React, { useState } from 'react';
import Calendar from 'react-calendar';

const Calendars = () => {
  const [value, onChange] = useState(new Date());
  // console.log(value)
  window.localStorage.setItem(value, "caldate");
  return (
    <div>
      <Calendars
        onChange={onChange}
        value={value}
      />
      {console.log(value)}
    </div>

  );
};

export default Calendar;