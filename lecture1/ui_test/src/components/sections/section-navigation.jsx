import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 * SectionNavigation 컴포넌트
 *
 * MUI AppBar와 Toolbar를 사용한 네비게이션 섹션
 * - 데스크톱: 가로 메뉴 버튼
 * - 모바일: 햄버거 메뉴
 */
function SectionNavigation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);

  const menuItems = [
    { label: '홈', key: 'home' },
    { label: '소개', key: 'about' },
    { label: '서비스', key: 'service' },
    { label: '연락처', key: 'contact' }
  ];

  const handleMenuClick = (label) => {
    alert(`${label} 메뉴가 클릭되었습니다!`);
    setAnchorEl(null);
  };

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      {/* 섹션 제목 */}
      <Typography
        variant="h5"
        component="h2"
        sx={{
          fontWeight: 600,
          mb: 3,
          pb: 1,
          borderBottom: 1,
          borderColor: 'divider'
        }}
      >
        Navigation (AppBar)
      </Typography>

      {/* AppBar 데모 */}
      <Box sx={{ borderRadius: 1, overflow: 'hidden' }}>
        <AppBar position="static">
          <Toolbar>
            {/* 로고 */}
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontWeight: 600 }}
            >
              Logo
            </Typography>

            {/* 데스크톱 메뉴 */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.key}
                    color="inherit"
                    onClick={() => handleMenuClick(item.label)}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* 모바일 햄버거 메뉴 */}
            {isMobile && (
              <>
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleOpenMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleCloseMenu}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                >
                  {menuItems.map((item) => (
                    <MenuItem
                      key={item.key}
                      onClick={() => handleMenuClick(item.label)}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>

      {/* 설명 */}
      <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
        <Typography variant="body2" color="text.secondary">
          화면 크기를 조절하여 반응형 동작을 확인하세요.
          (900px 이하에서 햄버거 메뉴로 전환)
        </Typography>
      </Box>
    </Box>
  );
}

export default SectionNavigation;
