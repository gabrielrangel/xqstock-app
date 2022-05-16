import Grid from "@mui/material/Grid";
import {
  FunctionComponent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import AppBar from "../AppBar";
import Sidebar from "../Sidebar";
import StyledGrid from "./styles";
import useThemeContext from "../../Hooks/useThemeContext";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import Drawer from "../AppBar/Drawer";
import { useLocation } from "react-router-dom";

export const PageGrid: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const { theme } = useThemeContext();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const location = useLocation();
  const prevLocation = useRef(location);

  useEffect(() => {
    if (location !== prevLocation.current && showDrawer) {
      setShowDrawer(!showDrawer);
    }
    prevLocation.current = location;
  }, [location, showDrawer]);

  return (
    <>
      <Drawer open={showDrawer} setOpen={setShowDrawer} />
      <StyledGrid container spacing={0}>
        {!isXs && (
          <Grid item sm={3} md={2} component={"aside"}>
            <Sidebar />
          </Grid>
        )}
        <Grid item sm={9} md={10} component={"main"}>
          <AppBar showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
          {children}
        </Grid>
      </StyledGrid>
    </>
  );
};

export default PageGrid;
