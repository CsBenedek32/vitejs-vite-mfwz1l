import Drawer from "@mui/joy/Drawer";
import Button from "@mui/joy/Button";
import DialogTitle from '@mui/joy/DialogTitle';
import ModalClose from '@mui/joy/ModalClose';
import Box from "@mui/joy/Box";
import { useState } from "react";

export default function OffcanvasComp2({ children, BName ,Title}) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (inOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(inOpen);
  };

  return (
    <>
      <Button variant="outlined" color="neutral" onClick={toggleDrawer(true)}>
        {BName}
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <ModalClose />
        <DialogTitle>{Title}</DialogTitle>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {children}
        </Box>
      </Drawer>
    </>
  );
}
