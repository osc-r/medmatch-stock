"use client";

import Select from "@/components/Select";
import {
  Box,
  Container,
  Grid2 as Grid,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CropFreeIcon from "@mui/icons-material/CropFree";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRouter } from "next/navigation";

const ITEMS = [
  {
    name: "Botulinum Toxin",
    code: "20012622",
    latestLocation: "คลังยา 1 01-1-1",
    latestImportedDate: "2024/08/14 22:28",
    total: "3297359",
  },
  {
    name: "hyaluronic Acid Filler",
    code: "20008265",
    latestLocation: "คลังยา 1 01-1-1",
    latestImportedDate: "2024/08/14 22:28",
    total: "3297359",
  },
  {
    name: "Platelet-Rich Plasma (PRP)",
    code: "20009622",
    latestLocation: "คลังยา 1 01-1-1",
    latestImportedDate: "2024/08/14 22:28",
    total: "3297359",
  },
  {
    name: "Poly-L-Lactic Acid (Sculptra)",
    code: "20005753",
    latestLocation: "คลังยา 1 01-1-1",
    latestImportedDate: "2024/08/14 22:28",
    total: "3297359",
  },
  {
    name: "Calcium Hydroxylapatite",
    code: "20012965",
    latestLocation: "คลังยา 1 01-1-1",
    latestImportedDate: "2024/08/14 22:28",
    total: "3297359",
  },
];

export default function ProductsPage() {
  const router = useRouter();

  return (
    <Container sx={{ padding: 4, height: "100%" }}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography
            sx={{ typography: { sm: "h5", xs: "h6" } }}
            mb={{ sm: 2, xs: 1 }}
          >
            ยาและเวชภัณฑ์
          </Typography>
        </Grid>
        {/* <Grid size={12} mt={{ sm: 4, xs: 1 }}>
          <Typography sx={{ typography: { sm: "h6", xs: "subtitle1" } }}>
            เลือกรูปแบบการค้นหา
          </Typography>
        </Grid> */}
        <Grid size={{ md: 6, sm: 6, xs: 12 }}>
          <Select
            label="รูปแบบการค้นหา"
            options={[
              { label: "ตามรายการยาและเวชภัณฑ์", value: 1 },
              { label: "ตามสถานที่เก็บ", value: 2 },
            ]}
            defaultValue={"1"}
          />
        </Grid>
        <Grid
          size={{ md: 6, sm: 6 }}
          display={{ sm: "block", xs: "none" }}
        ></Grid>
        <Grid size={{ sm: 8, xs: 12 }}>
          <TextField
            label="ค้นหา"
            placeholder="ค้นหาตามชื่อ หรือ รหัส"
            variant="outlined"
            fullWidth
            size="small"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <CropFreeIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Grid>
        <Grid size={12} display={"flex"} flexWrap={"wrap"}>
          {ITEMS.map((item, index) => (
            <Box
              key={index}
              sx={{
                flexBasis: { lg: "33%", md: "50%", sm: "100%", xs: "100%" },
                padding: 1.25,
              }}
              onClick={() => router.push(`/products/${item.code}`)}
            >
              <Paper
                sx={{
                  backgroundColor: "white",
                  padding: 2,
                  cursor: "pointer",
                  display: "flex",
                }}
              >
                <Stack flex={1}>
                  <Typography>ชื่อ : {item.name}</Typography>
                  <Typography>รหัส : {item.code}</Typography>
                  <Typography>
                    สถานที่เก็บล่าสุด : {item.latestLocation}
                  </Typography>
                  <Typography>
                    วันฝากยาล่าสุด : {item.latestImportedDate}
                  </Typography>
                  <Typography>จำนวนทั้งหมด : {item.total} TAB</Typography>
                </Stack>
                <ChevronRightIcon sx={{ margin: "auto 0" }} />
              </Paper>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
