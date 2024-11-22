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

const ITEMS = [
  {
    trackingNumber: "4912070278",
    totalProduct: "16",
  },
  {
    trackingNumber: "4912070388",
    totalProduct: "6",
  },
  {
    trackingNumber: "4912070393",
    totalProduct: "2",
  },
  {
    trackingNumber: "4912070418",
    totalProduct: "6",
  },
  {
    trackingNumber: "4912070547",
    totalProduct: "10",
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

export default function OutgoingPage() {
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
            รายการใบเบิก
          </Typography>
        </Grid>
        <Grid size={12}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="ยังไม่สำเร็จ" {...a11yProps(0)} />
              <Tab label="กำลังตรวจสอบ" {...a11yProps(1)} />
              <Tab label="สำเร็จ" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Grid container spacing={2}>
              <Grid size={{ sm: 8, xs: 12 }}>
                <TextField
                  label="ค้นหา"
                  placeholder="ค้นหาตามเลขพัสดุจัดส่ง"
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
                    onClick={() =>
                      router.push(`/orders/${item.trackingNumber}`)
                    }
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
                        <Typography>
                          เลขพัสดุจัดส่ง : {item.trackingNumber}
                        </Typography>
                        <Typography>
                          จำนวนชนิดผลิตภัณฑ์ : {item.totalProduct}
                        </Typography>
                      </Stack>
                      <ChevronRightIcon sx={{ margin: "auto 0" }} />
                    </Paper>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Grid container spacing={2}>
              <Grid size={{ sm: 8, xs: 12 }}>
                <TextField
                  label="ค้นหา"
                  placeholder="ค้นหาตามเลขพัสดุจัดส่ง"
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
                    onClick={() =>
                      router.push(`/orders/${item.trackingNumber}`)
                    }
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
                        <Typography>
                          เลขพัสดุจัดส่ง : {item.trackingNumber}
                        </Typography>
                        <Typography>
                          จำนวนชนิดผลิตภัณฑ์ : {item.totalProduct}
                        </Typography>
                      </Stack>
                      <ChevronRightIcon sx={{ margin: "auto 0" }} />
                    </Paper>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Grid container spacing={2}>
              <Grid size={{ sm: 8, xs: 12 }}>
                <TextField
                  label="ค้นหา"
                  placeholder="ค้นหาตามเลขพัสดุจัดส่ง"
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
                    onClick={() =>
                      router.push(`/orders/${item.trackingNumber}`)
                    }
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
                        <Typography>
                          เลขพัสดุจัดส่ง : {item.trackingNumber}
                        </Typography>
                        <Typography>
                          จำนวนชนิดผลิตภัณฑ์ : {item.totalProduct}
                        </Typography>
                      </Stack>
                      <ChevronRightIcon sx={{ margin: "auto 0" }} />
                    </Paper>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </CustomTabPanel>
        </Grid>
      </Grid>
    </Container>
  );
}
