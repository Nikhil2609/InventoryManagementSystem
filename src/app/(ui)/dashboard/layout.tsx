// side bar code

import Header from "@/app/components/header";
import Sidebaar from "@/app/components/sidebar";
import { sideBarWidth } from "@/app/utils/constant";
import { Box, Toolbar } from "@mui/material";
import { Suspense } from "react";
import Loading from "./loading";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //side baar
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidebaar />
        <Header />
        
        <Suspense fallback={<Loading />}>
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: `calc(100% - ${sideBarWidth}px)` }}
          >
            <Toolbar />
              {children}
          </Box>
        </Suspense>
      </Box>
    </>
  );
}

// reder chidlren