import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "./ModifyPlanet.scss";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import FaceIcon from "@mui/icons-material/Face";
import LanguageIcon from "@mui/icons-material/Language";
import ListIcon from "@mui/icons-material/List";
import store from "../../../store";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 500,
  bgcolor: "background.paper",
  border: 0,
  borderRadius: "15px",
  boxShadow: 24,
  p: 0,
};

export default function BasicModal() {
  let metaData = localStorage.getItem("userInfo");
  let userInfo = JSON.parse(metaData);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(true);

  const handleClick = () => {
    setOpen2(!open2);
  };

  return (
    <div>
      <Button onClick={handleOpen}>환경설정</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modalContainer">
            <div className="modalBox1">환경설정</div>
            <div className="modalBox2">
              <div className="modalBox3">
                <List
                  sx={{
                    height: "100%",
                    width: "100%",
                    maxWidth: 250,
                    bgcolor: "background.paper",
                    borderRadius: "0px 0px 0px 15px",
                  }}
                  component="nav"
                >
                  <ListItemButton>
                    <ListItemIcon
                      style={{
                        justifyContent: "flex-start",
                        minWidth: "10px",
                        width: "2 rem",
                      }}
                    >
                      <FaceIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="프로필"
                      primaryTypographyProps={{
                        color: "#5D5D5D",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        marginLeft: "15px",
                      }}
                    />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon
                      style={{
                        justifyContent: "flex-start",
                        minWidth: "10px",
                        width: "2 rem",
                      }}
                    >
                      <LanguageIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="테마"
                      primaryTypographyProps={{
                        color: "#5D5D5D",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        marginLeft: "15px",
                      }}
                    />
                  </ListItemButton>
                  <ListItemButton onClick={handleClick}>
                    <ListItemIcon
                      style={{
                        justifyContent: "flex-start",
                        minWidth: "10px",
                        width: "2 rem",
                      }}
                    >
                      <ListIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="메뉴카테고리"
                      primaryTypographyProps={{
                        color: "#5D5D5D",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        marginLeft: "15px",
                      }}
                    />
                    {open2 ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open2} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon
                          style={{
                            justifyContent: "flex-start",
                            minWidth: "10px",
                            width: "2 rem",
                          }}
                        >
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText
                          primary="Starred"
                          primaryTypographyProps={{
                            color: "#5D5D5D",
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            marginLeft: "15px",
                          }}
                        />
                      </ListItemButton>
                    </List>
                  </Collapse>
                </List>
              </div>
              <div className="modalBox4">
                <div className="modalInputBox">
                  <div className="modalInputTitle">아이디</div>
                  <input
                    className="modalInput"
                    disabled
                    value={userInfo.userID}
                  ></input>
                </div>
                <div className="modalInputBox">
                  <div className="modalInputTitle">비밀번호</div>
                  <input
                    className="modalInput"
                    disabled
                    value="*****************"
                  ></input>
                </div>
                <div className="modalInputBox">
                  <div className="modalInputTitle">이메일</div>
                  <input
                    className="modalInput"
                    disabled
                    value={userInfo.email}
                  ></input>
                </div>
                <div className="modalModifyBtnBox">
                  <button className="modalModifyBtn">수정하기</button>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
