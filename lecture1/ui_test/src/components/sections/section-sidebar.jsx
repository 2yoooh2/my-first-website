import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';

/**
 * SectionSidebar 컴포넌트
 *
 * MUI Drawer를 사용한 사이드바 섹션
 * - 왼쪽 사이드바
 * - 오른쪽 사이드바
 * - 메뉴 아이템 클릭 이벤트
 */
function SectionSidebar() {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  const menuItems = [
    { text: '홈', icon: <HomeIcon /> },
    { text: '프로필', icon: <PersonIcon /> },
    { text: '메시지', icon: <MailIcon /> },
    { text: '알림', icon: <NotificationsIcon /> }
  ];

  const bottomItems = [
    { text: '설정', icon: <SettingsIcon /> },
    { text: '도움말', icon: <HelpIcon /> }
  ];

  const handleMenuClick = (text) => {
    alert(`${text} 메뉴가 클릭되었습니다!`);
  };

  const DrawerContent = ({ onClose }) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
      {/* 헤더 */}
      <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          메뉴
        </Typography>
      </Box>

      {/* 메인 메뉴 */}
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => {
                handleMenuClick(item.text);
                onClose();
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      {/* 하단 메뉴 */}
      <List>
        {bottomItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => {
                handleMenuClick(item.text);
                onClose();
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
        Sidebar (Drawer)
      </Typography>

      <Grid container spacing={3}>
        {/* 왼쪽 사이드바 */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            왼쪽 사이드바
          </Typography>
          <Button
            variant="contained"
            onClick={() => setLeftOpen(true)}
            fullWidth
          >
            왼쪽 사이드바 열기
          </Button>
          <Drawer
            anchor="left"
            open={leftOpen}
            onClose={() => setLeftOpen(false)}
          >
            <DrawerContent onClose={() => setLeftOpen(false)} />
          </Drawer>
        </Grid>

        {/* 오른쪽 사이드바 */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            오른쪽 사이드바
          </Typography>
          <Button
            variant="outlined"
            onClick={() => setRightOpen(true)}
            fullWidth
          >
            오른쪽 사이드바 열기
          </Button>
          <Drawer
            anchor="right"
            open={rightOpen}
            onClose={() => setRightOpen(false)}
          >
            <DrawerContent onClose={() => setRightOpen(false)} />
          </Drawer>
        </Grid>
      </Grid>

      {/* 미리보기 */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
          사이드바 미리보기
        </Typography>
        <Box
          sx={{
            border: 1,
            borderColor: 'divider',
            borderRadius: 1,
            overflow: 'hidden'
          }}
        >
          <Box sx={{ p: 1.5, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="subtitle2">메뉴</Typography>
          </Box>
          <List dense>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={() => handleMenuClick(item.text)}>
                  <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
}

export default SectionSidebar;
