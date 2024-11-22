"use client";

import {
  Box,
  Container,
  Grid2 as Grid,
  InputAdornment,
  Paper,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CropFreeIcon from "@mui/icons-material/CropFree";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

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

const HISTORY = [
  {
    poNumber: "1300642408",
    code: "20012622",
    name: "Botulinum Toxin",
    location: "คลังยา 1",
    position: "01-1-1",
    amount: "1000",
    date: "2024/08/14 22:28",
  },
  {
    poNumber: "1300642408",
    code: "20012622",
    name: "Botulinum Toxin",
    location: "คลังยา 1",
    position: "01-1-1",
    amount: "1000",
    date: "2024/08/14 22:18",
  },
  {
    poNumber: "1300642408",
    code: "20012622",
    name: "Botulinum Toxin",
    location: "คลังยา 1",
    position: "01-1-1",
    amount: "360000",
    date: "2024/05/24 10:01",
  },
  {
    poNumber: "1300643115",
    code: "20005753",
    name: "Poly-L-Lactic Acid (Sculptra)",
    location: "คลังยา 1",
    position: "01-3-1",
    amount: "300000",
    date: "2024/05/24 09:55",
  },
];

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

export default function IncomingPage() {
  const router = useRouter();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ padding: 4, height: "100%" }}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography
            sx={{ typography: { sm: "h5", xs: "h6" } }}
            mb={{ sm: 2, xs: 1 }}
          >
            ฝากเข้าคลัง
          </Typography>
        </Grid>
        <Grid size={12}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="เลือกยา" {...a11yProps(0)} />
              <Tab label="ประวัติการฝากยา" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Grid container spacing={2}>
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
                      flexBasis: {
                        lg: "33%",
                        md: "50%",
                        sm: "100%",
                        xs: "100%",
                      },
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
                      </Stack>
                      <ChevronRightIcon sx={{ margin: "auto 0" }} />
                    </Paper>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Grid container spacing={2} px={"10px"} mb={4}>
              <Grid size={12}>
                <Typography sx={{ typography: { sm: "h6", xs: "subtitle1" } }}>
                  ค้นหาตามวันที่
                </Typography>
              </Grid>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Grid size={3}>
                  <MobileDatePicker
                    label="วันเริ่มต้น"
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid size={3}>
                  <MobileDatePicker label="วันสิ้นสุด" sx={{ width: "100%" }} />
                </Grid>
              </LocalizationProvider>
            </Grid>

            {HISTORY.map((item, index) => (
              <Box
                key={index}
                sx={{
                  padding: 1.25,
                }}
              >
                <Paper
                  sx={{
                    backgroundColor: "white",
                    padding: 2,
                  }}
                >
                  <Typography>เลข PO : {item.poNumber}</Typography>
                  <Typography>รหัสผลิตภัณฑ์ : {item.code}</Typography>
                  <Typography>ชื่อ : {item.name}</Typography>
                  <Typography>สถานที่ : {item.location}</Typography>
                  <Typography>ตำแหน่ง : {item.position}</Typography>
                  <Typography>จำนวน : {item.amount}</Typography>
                  <Typography>วันที่ : {item.date}</Typography>
                </Paper>
              </Box>
            ))}
          </CustomTabPanel>
        </Grid>
      </Grid>
    </Container>
  );
}
