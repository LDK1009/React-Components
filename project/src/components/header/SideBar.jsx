import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SideBar = ({ items, onClick }) => {
  // 네비게이션 메뉴 항목 리스트
  const navigate = useNavigate();
  return (
    <div>
      <Container onClick={onClick}>
        <Typography variant="h6" sx={{ my: 2 }}>
          MUI
        </Typography>
        <Divider />
        <List>
          {items?.map((el, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }} onClick={() => navigate(el.router)}>
                <ListItemText primary={el.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Container>
    </div>
  );
};

export default SideBar;

const Container = styled(Box)`
    text-align:center;
`

