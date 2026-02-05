import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

const TransliterationTextField = ({
  label,
  name,
  value = "",
  onChange,
  onBlur,
  error,
  placeholder,
}) => {
  const [text, setText] = useState(value);

  useEffect(() => {
    setText(typeof value === "string" ? value : "");
  }, [value]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setText(value);
    onChange(event); // Pass the updated value to the parent component
  };

  const handleKeyDown = async (event) => {
    console.log("Key pressed:", event.key); // Debug log for key press
    console.log("Text value:", text, "Type:", typeof text); // Debug log for text

    // Safeguard to ensure `text` is a string
    if (
      (event.key === "Tab" || event.key === " ") &&
      typeof text === "string" &&
      text.trim() !== ""
    ) {
      if (event.key === "Tab") {
        event.preventDefault(); // Prevent default Tab behavior until transliteration completes
      }
      try {
        const response = await fetch(
          `https://inputtools.google.com/request?text=${encodeURIComponent(
            text
          )}&itc=${encodeURIComponent("mr-t-i0-und")}&num=1`
        );
        const data = await response.json();
        const marathiValue = data[1][0][1];

        // Update text with transliterated value
        const updatedValue =
          event.key === " " ? marathiValue + " " : marathiValue;
        setText(updatedValue);
        onChange({ target: { name, value: updatedValue } }); // Notify parent
      } catch (error) {
        console.error("Error fetching transliteration:", error);
      }
    }
  };

  const handleBlur = (event) => {
    // Pass the blur event directly to react-hook-form
    if (onBlur) {
      onBlur(event);
    }
  };

  return (
    <TextField
      fullWidth
      className="textfield"
      variant="outlined"
      size="small"
      label={label}
      placeholder={placeholder}
      name={name}
      value={text}
      // onBlur={onBlur}
      onBlur={handleBlur}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      error={error}
    />
  );
};

export default TransliterationTextField;
