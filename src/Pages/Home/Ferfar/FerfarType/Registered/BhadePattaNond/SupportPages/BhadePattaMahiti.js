import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  InputLabel,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import RotateRightRoundedIcon from "@mui/icons-material/RotateRightRounded";
import styles from "../../../../ferfar.module.css";

const BhadePattaMahiti = () => {
  const [bhadepattaDetails, setbhadepattaDetails] = useState({
    tenureYear: "",
    tenureMonth: "",
    fromDate: "",
    toDate: "",
    amount: "",
  });

  const handleDetails = (e) => {
    const { name, value } = e?.target;
    setbhadepattaDetails({ ...bhadepattaDetails, [name]: value });
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Paper elevation={5} sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <h4 style={{ fontSize: "18px", fontWeight: 600 }}>
              भाडेपट्टा माहिती
            </h4>
          </Grid>

          <Grid item md={12}>
            <Grid container spacing={1}>
              <Grid item md={6}>
                <InputLabel
                  // className={styles.inputlabel}
                  sx={{ fontSize: "16px" }}
                >
                  <b>भाडेपट्ट्याचा एकूण कालावधी : </b>
                </InputLabel>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <InputLabel className={styles.inputlabel}>
                      <b>वर्षे </b> <span>*</span>
                    </InputLabel>
                    <TextField
                      fullWidth
                      size="small"
                      name="tenureYear"
                      value={bhadepattaDetails?.tenureYear}
                      onChange={handleDetails}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <InputLabel className={styles.inputlabel}>
                      <b>महिने </b> <span>*</span>
                    </InputLabel>
                    <TextField
                      fullWidth
                      size="small"
                      name="tenureMonth"
                      value={bhadepattaDetails?.tenureMonth}
                      onChange={handleDetails}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={6}>
                <InputLabel
                  // className={styles.inputlabel}
                  sx={{ fontSize: "16px" }}
                >
                  <b>दिनांक : </b>
                </InputLabel>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <InputLabel className={styles.inputlabel}>
                      <b>पासून </b> <span>*</span>
                    </InputLabel>
                    <TextField
                      type="date"
                      fullWidth
                      size="small"
                      name="fromDate"
                      value={bhadepattaDetails?.fromDate}
                      onChange={handleDetails}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <InputLabel className={styles.inputlabel}>
                      <b>पर्यंत </b> <span>*</span>
                    </InputLabel>
                    <TextField
                      type="date"
                      fullWidth
                      size="small"
                      name="toDate"
                      value={bhadepattaDetails?.toDate}
                      onChange={handleDetails}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={12}>
            <Grid container>
              <Grid item md={4}>
                <InputLabel className={styles.inputlabel}>
                  <b>दर शेत सारा भाडेपट्ट्याची रक्कम (रु.) </b> <span>*</span>
                </InputLabel>
                <TextField
                  fullWidth
                  size="small"
                  name="amount"
                  value={bhadepattaDetails?.amount}
                  onChange={handleDetails}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid container justifyContent="end" px={2} mt={2}>
            <Grid item>
              <Button
                variant="outlined"
                startIcon={<RotateRightRoundedIcon />}
                sx={{ mr: 2 }}
              >
                रीसेट करा
              </Button>
              <Button
                variant="contained"
                endIcon={<SaveRoundedIcon />}
                // onClick={() => setActiveStep(1)}
              >
                जतन करा
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Grid item md={12} mt={3}>
        <TableContainer component={Paper} elevation={5}>
          <h3 style={{ marginLeft: 20 }}>भाडेपट्टा माहिती तक्ता</h3>
          <Table>
            <TableHead style={{ backgroundColor: "#F4F4F4" }}>
              <TableRow>
                <TableCell>अ. क्र.</TableCell>
                <TableCell>भाडेपट्टा कालावधी वर्ष</TableCell>
                <TableCell>भाडेपट्टा कालावधी महिने</TableCell>
                <TableCell>भाडेपट्टा दिनांक पासून</TableCell>
                <TableCell>भाडेपट्टा दिनांक पर्यंत</TableCell>
                <TableCell>दर शेत सारा भाडेपट्ट्याची रक्कम (रु.)</TableCell>
                <TableCell>कृती करा</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>2</TableCell>
                <TableCell>24</TableCell>
                <TableCell>20/03/2023</TableCell>
                <TableCell>19/03/2025</TableCell>
                <TableCell>25000</TableCell>
                <TableCell>
                  {/* <IconButton>
                    <EditNoteOutlinedIcon />
                  </IconButton> */}
                  <IconButton>
                    <DeleteForeverOutlinedIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
};

export default BhadePattaMahiti;
