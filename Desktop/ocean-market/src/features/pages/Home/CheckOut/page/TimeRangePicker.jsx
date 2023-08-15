import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { SingleInputTimeRangeField } from "@mui/x-date-pickers-pro/SingleInputTimeRangeField";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { DateTime } from "luxon";

export default function TimeRangePicker({ time, setTime }) {
  const [formattedTime, setFormattedTime] = React.useState("");

  React.useEffect(() => {
    if (time) {
      const formatted = DateTime.fromJSDate(time).toFormat("h:mm");
      setFormattedTime(formatted);
    } else {
      setFormattedTime("");
    }
  }, [time]);

  const handleTimeChange = (newValue) => {
    const formatted = DateTime.fromJSDate(newValue).toFormat("h:mm");
    setFormattedTime(formatted);
    setTime(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <DemoContainer components={["SingleInputTimeRangeField"]}>
        <SingleInputTimeRangeField
          label="From - To"
          value={time}
          onChange={handleTimeChange}
          inputFormat="h:mm"
          InputProps={{
            endAdornment: <AccessTimeIcon sx={{ color: "gray" }} />,
          }}
          inputValue={formattedTime}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
