import { Box, Modal } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  border: "2px solid transparent",
  borderRadius: 7,
};

const AuthModel = ({ handleClose, open }) => {
  const location = useLocation();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className=" px-8 sm:px-0">
        {location.pathname === "/register" ? <Registration /> : <Login />}
      </Box>
    </Modal>
  );
};

export default AuthModel;
