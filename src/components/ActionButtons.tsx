import React from "react";
import {  Button, Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InfoIcon from "@mui/icons-material/Info";
import { InlineContainer } from "./styled";
import { Coins } from "../Types/Coins";
import { useState } from "react";


interface ActionButtonsProps {
  addFavorites: () => void;
  goToDetails: () => void;
  coin: Coins;
}
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const ActionButtons = (props: ActionButtonsProps) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <InlineContainer style={{margin:"1px"}}>
      <Button
        variant="contained"
        onClick={() => {
          props.addFavorites()
          setOpen(true);
        }}
      >
        <StarBorderIcon />
        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
          <Alert
            severity="success"
            sx={{ width: "100%" }}
          >
           Agregado a favoritos!
          </Alert>
        </Snackbar>
      </Button>
      <Button variant="contained" onClick={props.goToDetails}>
        <InfoIcon />
      </Button>
    </InlineContainer>
  );
};

export default ActionButtons;
