"use client";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import DownloadIcon from "@mui/icons-material/Download";
import UploadIcon from "@mui/icons-material/Upload";
// import TocIcon from "@mui/icons-material/Toc";
import InventoryIcon from "@mui/icons-material/Inventory";
import { AppProvider, Navigation } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { createTheme } from "@mui/material";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "เมนู",
  },
  {
    title: "ยาและเวชภัณฑ์",
    icon: <VaccinesIcon />,
    segment: "products",
  },
  {
    title: "ฝากเข้าคลัง",
    icon: <DownloadIcon />,
    segment: "stock-moves/incoming",
  },
  {
    title: "เบิกออกจากคลัง",
    icon: <UploadIcon />,
    segment: "orders",
  },
  //   {
  //     title: "ตรวจรายการออก",
  //     icon: <TocIcon />,
  //     segment: "stock-moves/outgoing",
  //   },
  {
    title: "นับจำนวนในคลัง",
    icon: <InventoryIcon />,
    segment: "stock-availability",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{ logo: <div></div>, title: "MedMatch Stock" }}
      theme={createTheme()}
    >
      <DashboardLayout
        slots={{ toolbarActions: () => null }}
        sx={{ backgroundColor: "#f3f3f3" }}
      >
        {/* <PageContainer breadcrumbs={[]}> */}
        {children}
        {/* <Grid container spacing={1}>
            <Grid size={5} />
          </Grid> */}
        {/* </PageContainer> */}
      </DashboardLayout>
    </AppProvider>
  );
}
