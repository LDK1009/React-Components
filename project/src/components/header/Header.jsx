import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";

const Header = (props) => {
  // Drawer 너비 정의
  const drawerWidth = 240;

  // 네비게이션 메뉴 항목 리스트
  const navigate = useNavigate();

  // window 객체 전달받기
  const { window } = props;

  // 모바일 메뉴 열림 상태 관리
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // 모바일 메뉴 토글 핸들러
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState); // 상태값 반전
  };

  // 
  const navItems = [
    {
      text: "Home",
      router: "/",
    },
    {
      text: "About",
      router: "/",
    },
    {
      text: "Home",
      router: "/",
    },
  ];



  // container 정의 (window 객체 기반)
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Container>
        {/* PC 네비게이션 바 */}
        <AppBar component="nav">
          <Toolbar>
            {/* Mobile 메뉴 아이콘 */}
            <MobileMenuIcon color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
              <MenuIcon />
            </MobileMenuIcon>

            {/* PC용 로고 및 제목 */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              SAMSUNG
            </Typography>

            {/* PC 네비게이션 버튼 */}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((el, index) => (
                <>
                  <Button key={index} onClick={() => navigate(el.router)} sx={{ color: "white" }}>
                    {el.text}
                  </Button>
                </>
              ))}
            </Box>
          </Toolbar>
        </AppBar>

        {/* Mobile 메뉴 Drawer */}
        <nav>
          <Drawer
            container={container}
            variant="temporary" // 일시적으로 열리고 닫히는 드로어
            open={mobileOpen}
            onClose={handleDrawerToggle} // 드로어 닫기 핸들러
            ModalProps={{
              keepMounted: true, // 모바일에서 성능 최적화를 위해 유지
            }}
            sx={{
              display: { xs: "block", sm: "none" }, // 모바일에서만 드로어 표시
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
            }}
          >
            <SideBar onClick={handleDrawerToggle} items={navItems}/>
          </Drawer>
        </nav>

        {/* 콘텐츠 영역 */}
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar /> {/* AppBar 높이를 유지하기 위한 공간 */}
        </Box>
      </Container>
    </>
  );
};

export default Header;

// 컨테이너 스타일 정의
const Container = styled(Box)`
  display: flex; /* 전체 레이아웃을 Flexbox로 설정 */
`;

// 모바일 메뉴 아이콘 스타일 정의
const MobileMenuIcon = styled(IconButton)`
  margin-right: 16px; /* Material-UI spacing scale 기반 여백 설정 */

  /* 600px 이상에서는 숨김 */
  @media (min-width: 600px) {
    display: none !important; /* 강제로 숨김 */
  }
`;
