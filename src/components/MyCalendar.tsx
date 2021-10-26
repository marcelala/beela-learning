import { useState } from "react";

export default function MyCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <section id={"calendar"}>
      <div className={"calendar-content"}>calendar</div>
    </section>
  );
}
