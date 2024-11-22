"use client";

import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ITEM = [
  {
    name: "Botulinum Toxin",
    code: "20012622",
    amount: "652",
  },
  {
    name: "Amino Acid Infusions",
    code: "20006452",
    amount: "6",
  },
  {
    name: "Botulinum Toxin",
    code: "20012622",
    amount: "652",
  },
  {
    name: "Amino Acid Infusions",
    code: "20006452",
    amount: "6",
  },
];

export default function ProductPage() {
  return (
    <Container sx={{ padding: 4, height: "100%" }}>
      <Grid container spacing={2}>
        <Grid
          size={12}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          mb={{ sm: 2, xs: 1 }}
        >
          <Typography sx={{ typography: { sm: "h5", xs: "h6" } }}>
            รายการยา
          </Typography>
          <Button variant="contained">ส่งไปตรวจสอบ</Button>
        </Grid>
        <Grid size={12}>
          <Typography variant="subtitle1">
            เลขพัสดุจัดส่ง: 4912070388
          </Typography>
          <Typography variant="subtitle1">จำนวนชนิดยา: 6</Typography>
        </Grid>
        <Grid container size={12} pb={2}>
          <Grid size={12} display={"flex"} flexWrap={"wrap"}>
            {ITEM.map((item, index) => (
              <Box
                key={index}
                sx={{
                  flexBasis: { lg: "33%", md: "50%", sm: "100%", xs: "100%" },
                  padding: 1.25,
                }}
              >
                <Paper
                  key={index}
                  sx={{
                    backgroundColor: "white",
                    padding: 2,
                    cursor: "pointer",
                    flexBasis: { lg: "33%", md: "50%", sm: "100%", xs: "100%" },
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Stack>
                    <Typography>ชื่อ : {item.name}</Typography>
                    <Typography>รหัส : {item.code}</Typography>
                    <Typography>จำนวนที่ต้องการ : {item.amount} TAB</Typography>
                  </Stack>
                  <ChevronRightIcon sx={{ ml: "auto" }} />
                </Paper>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
