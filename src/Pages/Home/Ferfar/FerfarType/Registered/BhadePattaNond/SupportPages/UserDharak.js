import { Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";

const UserDharak = () => {
  const [aapak, setAapak] = useState("");
  const [gender, setGender] = useState("");
  const [khataType, setKhataType] = useState("");
  const [holderType, setHolderType] = useState("");

  const handleAapak = (e) => {
    setAapak(e?.target?.value);
  };
  const handleGenderType = (e) => {
    setGender(e?.target?.value);
  };
  const handleKhataType = (e) => {
    setKhataType(e?.target?.value);
  };
  const handleHolderType = (e) => {
    setHolderType(e?.target?.value);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <InputLabel className="inputlabel">
            <b>उर्फ नाव</b>
          </InputLabel>
          <TextField
            fullWidth
            className="textfield"
            // value={foraighnAddress?.email}
            placeholder="उर्फ नाव लिहा"
            name="email"
            // onChange={(e) => handleForeignAddressDetails(e)}
            size="small"
          />
        </Grid>
        <Grid item md={4}>
          <InputLabel className="inputlabel">
            <b>धारक प्रकार </b>
            <span>*</span>
          </InputLabel>
          <Select
            value={holderType}
            className="textfield"
            onChange={handleHolderType}
            fullWidth
            size="small"
          >
            <MenuItem value="single">Single Holder</MenuItem>
            <MenuItem value="common">Common Holder</MenuItem>
          </Select>
        </Grid>
        <Grid item md={4}>
          <InputLabel className="inputlabel">
            <b>खाते प्रकार </b>
            <span>*</span>
          </InputLabel>
          <Select
            value={khataType}
            className="textfield"
            onChange={handleKhataType}
            fullWidth
            size="small"
          >
            <MenuItem value="user">व्यक्ति</MenuItem>
            <MenuItem value="multiple">अनेक</MenuItem>
          </Select>
        </Grid>
        <Grid item md={4}>
          <InputLabel className="inputlabel">
            <b>लिंग निवडा </b>
            <span>*</span>
          </InputLabel>
          <Select
            value={gender}
            onChange={handleGenderType}
            className="textfield"
            fullWidth
            size="small"
          >
            <MenuItem value="female">स्त्री</MenuItem>
            <MenuItem value="male">पुरुष</MenuItem>
            <MenuItem value="other">इतर</MenuItem>
          </Select>
        </Grid>
        <Grid item md={4}>
          <InputLabel className="inputlabel">
            <b>जन्म दिनांक </b>
            <span>*</span>
          </InputLabel>
          <TextField
            type="date"
            fullWidth
            className="textfield"
            placeholder="23/05/1986"
            name="email"
            // value={foraighnAddress?.email}
            // onChange={(e) => handleForeignAddressDetails(e)}
            size="small"
          />
        </Grid>
      </Grid>
      <Grid container mt={1}>
        <Grid item md={4}>
          <InputLabel>
            <div>
              <b style={{ fontSize: "14px" }}>आईचे नाव</b>
            </div>
            <span style={{ fontSize: "small" }}>
              जन्म दिनांक १ मे २०२४ नंतर असेल तर आईचे नाव आवश्यक
            </span>
          </InputLabel>
          <TextField
            fullWidth
            placeholder="आईचे नाव"
            className="textfield"
            name="motherName"
            // value={foraighnAddress?.email}
            // onChange={(e) => handleForeignAddressDetails(e)}
            size="small"
          />
          <TextField
            sx={{ mt: 1 }}
            fullWidth
            placeholder="Mother Name"
            name="motherName"
            className="textfield"
            // value={foraighnAddress?.email}
            // onChange={(e) => handleForeignAddressDetails(e)}
            size="small"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={1}>
        <Grid item md={4}>
          <InputLabel className="inputlabel">
            <b>अज्ञान पालन कर्ता / एकत्र कुटुंब मॅनेजर </b>
            <span>*</span>
          </InputLabel>
          <Select
            value={aapak}
            onChange={handleAapak}
            className="textfield"
            fullWidth
            size="small"
          >
            <MenuItem value="aapak-1">अज्ञान पालन कर्ता- 1</MenuItem>
            <MenuItem value="aapak-2">अज्ञान पालन कर्ता- 2</MenuItem>
          </Select>
        </Grid>
        <Grid item md={4}>
          <InputLabel className="inputlabel">
            <b>अज्ञान पालन कर्ता</b>
          </InputLabel>
          <TextField
            fullWidth
            className="textfield"
            placeholder="अज्ञान पालन कर्ता"
            name="email"
            size="small"
          />
        </Grid>
        <Grid item md={4}>
          <InputLabel className="inputlabel">
            <b>भाडेपट्टा क्षेत्र (चौ.मी.) </b>
            <span>*</span>
          </InputLabel>
          <TextField
            fullWidth
            placeholder="20"
            className="textfield"
            name="email"
            size="small"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default UserDharak;
