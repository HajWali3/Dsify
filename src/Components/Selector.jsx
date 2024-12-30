import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Selector({ handleSelect, selectOptions }) {
  const [type, setType] = React.useState("");

  const handleChange = (event) => {
    const selectedType = event.target.value;
    setType(selectedType);
    handleSelect(selectedType);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          className="text-gray-700 font-medium"
        >
          Type
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Type"
          onChange={handleChange}
          className="h-10 w-28"
        >
          {selectOptions.map((option, index) => (
            <MenuItem key={index} value={option.toLowerCase()}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
