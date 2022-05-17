import Grid from "@mui/material/Grid";
import {
  FunctionComponent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import AppBar from "../AppBar";
import StyledGrid from "./styles";
import { useLocation } from "react-router-dom";

export const PageGrid: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
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
    <StyledGrid container spacing={0}>
      <Grid xs={12} item component={"main"}>
        <AppBar showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
        {children}
      </Grid>
    </StyledGrid>
  );
};

export default PageGrid;
