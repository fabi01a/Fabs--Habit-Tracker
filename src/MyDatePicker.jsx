import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { useState } from "react";

function MyDatePicker() {
    const [selected, setSelected] = useState(null);

    return (
        <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            classNames={{
                day: "custom-day",
                selected: "custom-selected",
                today: "custom-today",
            }}
        />
    );
}

export default MyDatePicker;