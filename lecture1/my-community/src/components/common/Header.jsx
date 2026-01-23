import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RestaurantIcon from '@mui/icons-material/Restaurant';

/**
 * Header 컴포넌트 - 상단 네비게이션 바
 *
 * Props:
 * @param {object} user - 로그인한 사용자 정보 [Optional]
 * @param {function} onLogout - 로그아웃 핸들러 함수 [Optional]
 * @param {boolean} hasBackButton - 뒤로가기 버튼 표시 여부 [Optional, 기본값: false]
 * @param {string} title - 헤더 타이틀 [Optional, 기본값: '냠냠지도']
 *
 * Example usage:
 * <Header user={user} onLogout={handleLogout} />
 * <Header hasBackButton title="게시물 작성" />
 */
function Header({ user = null, onLogout = null, hasBackButton = false, title = '냠냠지도' }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: 'primary.main',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Toolbar>
        {hasBackButton && (
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            <ArrowBackIcon />
          </IconButton>
        )}

        <RestaurantIcon sx={{ mr: 1 }} />
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 700,
            cursor: user ? 'pointer' : 'default',
          }}
          onClick={() => user && navigate('/posts')}
        >
          {title}
        </Typography>

        {user && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography
              variant="body2"
              sx={{
                color: 'inherit',
                display: { xs: 'none', sm: 'block' },
              }}
            >
              {user.username}님 환영합니다
            </Typography>
            <Button
              color="inherit"
              variant="outlined"
              size="small"
              onClick={onLogout}
              sx={{
                borderColor: 'rgba(255, 255, 255, 0.5)',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              로그아웃
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
