import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
// import "./custom-date-styles.css"; 
import { useState } from "react";

function MyDatePicker({ highlightToday }) {
    const [selected, setSelected] = useState(null);

    return (
        <div className="day-picker">
            <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                classNames={{
                    day: "custom-day",
                    selected: "custom-selected",
                    today: highlightToday ? "custom-today-highlighted" : "custom-today",
                }}
            />
        </div>
    );
}

export default MyDatePicker;