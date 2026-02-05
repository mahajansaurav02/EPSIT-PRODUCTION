import React, { useState } from "react";
import {
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import UserAddressMaharashtra from "./UserAddressMaharashtra";
import UserAddressForeign from "./UserAddressForeign";

const UserAddress = ({
  type,
  isReset,
  hasSignature,
  setIsIndian,
  indiaAddress,
  setIndiaAdress,
  foraighnAddress,
  setForaighnAddress,
  setIsValid,
  isMobileCompulsary,
  setIsMobileNoVerified,
}) => {
  const [radio, setRadio] = useState("india");
  const [sameAddd, setSameAdd] = useState("no");
  const [selectedUserAdd, setSelectedUserAdd] = useState("");

  const handleRadioChange = (e) => {
    setRadio(e?.target?.value);
    setIsIndian(e?.target?.value);
  };
  const handleSameAddress = (e) => {
    setSameAdd(e?.target?.value);
  };
  const handleSelectedUser = (e) => {
    setSelectedUserAdd(e?.target?.value);
  };
  return (
    <>
      <Grid container>
        <Grid item md={12}>
          <Grid container spacing={2} alignItems="center">
            <Grid item md={12}>
              <h4 className="heading">
                {type == "mayatDharak" && "मयत धारकाचा पत्ता"}
                {type == "varas" && "वारसाचा पत्ता"}
                {type == "mryutuPatraDenar" &&
                  "मृत्यूपत्र / इच्छापत्र करून देणाराचा पत्ता"}

                {type == "tabaPavtiDenar" && "ताबा पावती देणाराचा पत्ता"}
                {type == "tabaPavtiGhenar" && "ताबा पावती घेणाराचा पत्ता"}
                {type == "eKuMya" && "ए.कू.मॅ. चा पत्ता"}
                {type == "eKuMyaDharakachivarasNond" && "वारसाचा पत्ता"}
                {type == "hibanamaDenar" && "हिबानामा देणाराचा पत्ता"}
                {type == "hibanamaGhenar" && "हिबानामा घेणाराचा पत्ता"}
                {type == "hibanamaEvidance" && "हिबानामा साक्षीदाराचा पत्ता"}
              </h4>
            </Grid>
            {/* <Grid item md={3}>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <Typography variant="h6" fontSize="14px" fontWeight={600}>
                    पत्ता सारखा आहे का ?
                  </Typography>
                </Grid>
                <Grid item>
                  <RadioGroup row value={sameAddd} onChange={handleSameAddress}>
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="होय"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="नाही"
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
            </Grid>
            {sameAddd == "yes" && (
              <Grid item md={3}>
                <Select
                  className="textfield"
                  value={selectedUserAdd}
                  onChange={handleSelectedUser}
                  fullWidth
                  size="small"
                >
                  <MenuItem value="tushar">तुषार योगेश शिंदे</MenuItem>
                  <MenuItem value="khushal">खुशाल योगेश शिंदे</MenuItem>
                </Select>
              </Grid>
            )} */}
          </Grid>
        </Grid>

        <Grid item md={12}>
          <RadioGroup row value={radio} onChange={handleRadioChange}>
            <FormControlLabel
              value="india"
              control={<Radio />}
              label="भारतीय"
            />
            <FormControlLabel
              value="foreign"
              control={<Radio />}
              label="परदेशात"
            />
          </RadioGroup>
        </Grid>
        <Grid item md={12}>
          {radio == "india" ? (
            <UserAddressMaharashtra
              hasSignature={hasSignature}
              indiaAddress={indiaAddress}
              setIndiaAdress={setIndiaAdress}
              setIsValid={setIsValid}
              isReset={isReset}
              isMobileCompulsary={isMobileCompulsary}
              setIsMobileNoVerified={setIsMobileNoVerified}
            />
          ) : (
            <UserAddressForeign
              foraighnAddress={foraighnAddress}
              setForaighnAddress={setForaighnAddress}
              setIsValid={setIsValid}
              isReset={isReset}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default UserAddress;
