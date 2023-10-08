import { useEffect, useState } from "react";

import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MainLayout from "../layouts/MainLayout";
import { Sidebar } from "../components/sidebar";
import PagesContainer from "./PagesContainer";
import { Page } from "../components/pages";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import { DrawerActionButton } from "../components/drawer";
import SwipeableViews from "react-swipeable-views";
import { About, Contact, Home, Resume } from "../pages";

function AppContainer() {
  const [pageNumber, setPageNumber] = useState(0);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp]);

  const handlePageNumber = (event, newPage) => {
    setPageNumber(newPage);
  };

  return (
    <MainContext.Provider
      value={{ pageNumber, handlePageNumber, drawerOpen, setDrawerOpen }}
    >
      <MainLayout>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <DrawerActionButton />
        <PagesContainer>
          <SwipeableViews
            // axis="y"
            index={pageNumber}
            onChangeIndex={handlePageNumber}
          >
            <Page pageNumber={pageNumber} index={0}>
              <Home />
            </Page>
            <Page pageNumber={pageNumber} index={1}>
              {/* About */}
              <About />
            </Page>
            {/* <Page pageNumber={pageNumber} index={2}>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                <Resume />
              </Typography>
            </Page> */}
            {/* <Page pageNumber={pageNumber} index={3}>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                نمونه کارها
              </Typography>
            </Page>
            <Page pageNumber={pageNumber} index={4}>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                نظرات دانشجویان
              </Typography>
            </Page> */}
            <Page pageNumber={pageNumber} index={2}>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                <Contact />
              </Typography>
            </Page>
          </SwipeableViews>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainer;
