import React from "react";

function Calendar() {
  const [date] = React.useState(new Date());

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysInMonth = [];

  for (
    let i = 1;
    i <= getDaysInMonth(date.getMonth(), date.getFullYear());
    i++
  ) {
    daysInMonth.push(i);
  }

  function getDaysInMonth(month: number, year: number) {
    return new Date(year, month + 1, 0).getDate();
  }

  return (
    <div>
      <h2>
        {/* {date.toLocaleDateString{" "} */}
        {date.getMonth()}
        {date.getFullYear()}
      </h2>
      <table>
        <thead>
          <tr>
            {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {daysInMonth.map((day) => (
            <tr key={day}>
              <td>{day}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Calendar;
