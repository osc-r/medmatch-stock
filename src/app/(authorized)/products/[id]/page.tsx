"use client";

import { Container, Grid2 as Grid, Paper, Typography } from "@mui/material";

const ITEM = {
  name: "Botulinum Toxin",
  code: "20012622",
  latestLocation: "คลังยา 1 01-1-1",
  latestImportedDate: "2024/08/14 22:28",
  total: "3297359",
};

const LOCATIONS = [
  {
    name: "คลังยา 1",
    palletNumber: "01",
    floorNumber: "1",
    position: "5",
    total: "18000",
  },
  {
    name: "คลังยา 1",
    palletNumber: "01",
    floorNumber: "2",
    position: "1",
    total: "3000",
  },
  {
    name: "คลังยา 1",
    palletNumber: "01",
    floorNumber: "2",
    position: "6",
    total: "30000",
  },
];

export default function ProductPage() {
  return (
    <Container sx={{ padding: 4, height: "100%" }}>
      <Grid container spacing={2} sx={{ height: "100%" }}>
        <Grid size={12}>
          <Typography
            sx={{ typography: { sm: "h5", xs: "h6" } }}
            mb={{ sm: 2, xs: 1 }}
          >
            รายละเอียดยาและเวชภัณฑ์
          </Typography>
        </Grid>
        <Grid
          container
          size={12}
          height={"100%"}
          pb={2}
          flexWrap={{ md: "wrap", xs: "nowrap" }}
          flexDirection={{ md: "row", xs: "column" }}
        >
          <Grid size={{ md: 6, xs: 12 }}>
            <Paper
              sx={{
                backgroundColor: "white",
                padding: 2,
                cursor: "pointer",
              }}
            >
              <Typography>ชื่อ : {ITEM.name}</Typography>
              <Typography>รหัส : {ITEM.code}</Typography>
              <Typography>สถานที่เก็บล่าสุด : {ITEM.latestLocation}</Typography>
              <Typography>
                วันฝากยาล่าสุด : {ITEM.latestImportedDate}
              </Typography>
              <Typography>จำนวนทั้งหมด : {ITEM.total} TAB</Typography>
            </Paper>
          </Grid>
          <Grid size={{ md: 6, xs: 12 }}>
            <Paper
              sx={{
                backgroundColor: "white",
                padding: 2,
                cursor: "pointer",
                height: "100%",
              }}
            >
              <Typography
                sx={{ typography: { sm: "h6", xs: "subtitle1" } }}
                mb={2}
              >
                สถานที่เก็บยาและเวชภัณฑ์
              </Typography>
              {LOCATIONS.map((item, index) => (
                <Paper
                  key={index}
                  sx={{
                    backgroundColor: "#f1f1f1",
                    padding: 2,
                    cursor: "pointer",
                    marginBottom: 2,
                  }}
                >
                  <Typography>สถานที่ : {item.name}</Typography>
                  <Typography>ชั้นวาง : {item.palletNumber}</Typography>
                  <Typography>ชั้น : {item.floorNumber}</Typography>
                  <Typography>ตำแหน่ง : {item.position}</Typography>
                  <Typography>จำนวน : {item.total} TAB</Typography>
                </Paper>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
