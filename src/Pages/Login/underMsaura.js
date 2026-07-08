import React, { useEffect, useState } from "react";
import {
  Alert,
  AlertTitle,
  Grid,
  IconButton,
  Link,
  Paper,
  Tooltip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import UserLogin from "./UserLogin";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../Redux/slices/LanguageSlice";
import Header from "../../ui/Header";
import InfoIcon from "@mui/icons-material/Info";

const UnderMaintain = () => {
  const reduxLang = useSelector(selectLanguage);
  const [lang, setlang] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setlang(reduxLang?.lng);
  }, [reduxLang]);

  return (
    <>
      {" "}
      <Header showSignInBtn={false} />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundImage: "url('/images/Dji_drone.jpg')",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        {/* ------------------------EPSIT Login------------------*/}
        <Grid item md={5} zIndex={2} mt={10}>
          <Paper elevation={2} sx={{ borderRadius: 5, pt: 2, mb: 2, pb: 2 }}>
            <Grid item md={12} mt={2}>
  <img
    src="/images/maintenance_notice.jpeg" // put your image in public/images
    alt="Maintenance Notice"
    style={{
      width: "100%",
      maxHeight: "400px",
      objectFit: "contain",
      borderRadius: "10px",
    }}
  />
</Grid>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item md={12}>
                <img
                  src="/images/epsit.png"
                  alt="GovtMaha_logo"
                  width={160}
                  height={70}
                />
              </Grid>
              <Grid item md={12} px={2}>
                <div>
                  ईप्सित आज्ञावली चा वापर करून मिळकत पत्रिकेवरील फेरफारसाठी
                  ऑनलाइन अर्ज करता येईल
                </div>
              </Grid>
            </Grid>
          </Paper>

          <Paper
            elevation={2}
            sx={{
              borderRadius: 5,
            }}
          >
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              {/*------------------------------SignUp Area */}
              <Grid item md={12}>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  spacing={0.5}
                >
              <Grid item md={12} mt={3}>
  <Alert variant="filled" severity="warning">
    <AlertTitle>देखभाल सूचना</AlertTitle>
    ही वेबसाईट सध्या नियोजित देखभाल व दुरुस्तीच्या कामासाठी <b>2 एप्रिल २०२६ (रात्री 11:59 वाजेपासून)</b> ते <b>५ एप्रिल २०२६ (रात्री 11:59 वाजेपर्यंत)</b> या कालावधीत बंद राहील. या दरम्यान कोणतीही सेवा उपलब्ध राहणार नाही.
  </Alert>
</Grid>

<Grid item md={12} mt={2}>
  <Alert variant="filled" severity="info">
    कृपया देखभाल पूर्ण झाल्यानंतर पुन्हा वेबसाईटला भेट द्यावी. आपल्या सहकार्याबद्दल धन्यवाद.
  </Alert>
</Grid>
                </Grid>
              </Grid>
              {/*------------------------------Footer Area */}
              <Grid item marginTop={2} md={12} px={5}>
                <div style={{ fontSize: "14px" }}>
                  Coyright © 2025 Content of this website is owned, published
                  and managed by Revenue Department, Government of Maharashtra.
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default UnderMaintain;
