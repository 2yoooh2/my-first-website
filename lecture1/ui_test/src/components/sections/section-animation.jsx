import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import Zoom from '@mui/material/Zoom';

/**
 * SectionAnimation 컴포넌트
 *
 * 다양한 애니메이션 효과를 보여주는 섹션
 * - CSS keyframes 애니메이션
 * - MUI 트랜지션 (Fade, Grow, Slide, Zoom)
 */
function SectionAnimation() {
  const [showTransitions, setShowTransitions] = useState(true);

  const toggleTransitions = () => {
    setShowTransitions((prev) => !prev);
  };

  // CSS Keyframes 정의
  const keyframes = {
    '@keyframes bounce': {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-20px)' }
    },
    '@keyframes pulse': {
      '0%, 100%': { transform: 'scale(1)', opacity: 1 },
      '50%': { transform: 'scale(1.1)', opacity: 0.8 }
    },
    '@keyframes spin': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' }
    },
    '@keyframes shake': {
      '0%, 100%': { transform: 'translateX(0)' },
      '25%': { transform: 'translateX(-5px)' },
      '75%': { transform: 'translateX(5px)' }
    },
    '@keyframes fadeInOut': {
      '0%, 100%': { opacity: 0.3 },
      '50%': { opacity: 1 }
    },
    '@keyframes slideIn': {
      '0%': { transform: 'translateX(-100%)' },
      '100%': { transform: 'translateX(0)' }
    }
  };

  const cssAnimations = [
    { name: 'Bounce', animation: 'bounce 1s ease infinite' },
    { name: 'Pulse', animation: 'pulse 1.5s ease infinite' },
    { name: 'Spin', animation: 'spin 2s linear infinite' },
    { name: 'Shake', animation: 'shake 0.5s ease infinite' },
    { name: 'Fade', animation: 'fadeInOut 2s ease infinite' },
    { name: 'Slide', animation: 'slideIn 1s ease forwards' }
  ];

  return (
    <Box sx={keyframes}>
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
        Animation
      </Typography>

      <Grid container spacing={4}>
        {/* CSS Keyframes 애니메이션 */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            CSS Keyframes
          </Typography>
          <Grid container spacing={2}>
            {cssAnimations.map((item) => (
              <Grid key={item.name} size={{ xs: 4 }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  <Paper
                    sx={{
                      width: 60,
                      height: 60,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'primary.main',
                      color: 'white',
                      animation: item.animation
                    }}
                  >
                    <Typography variant="caption">
                      {item.name.charAt(0)}
                    </Typography>
                  </Paper>
                  <Typography variant="caption" color="text.secondary">
                    {item.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* MUI 트랜지션 */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
              MUI Transitions
            </Typography>
            <Button
              variant="outlined"
              size="small"
              onClick={toggleTransitions}
            >
              {showTransitions ? '숨기기' : '보이기'}
            </Button>
          </Box>

          <Grid container spacing={2}>
            {/* Fade */}
            <Grid size={{ xs: 6 }}>
              <Box sx={{ height: 100, position: 'relative' }}>
                <Fade in={showTransitions} timeout={500}>
                  <Paper
                    sx={{
                      p: 2,
                      textAlign: 'center',
                      bgcolor: 'info.light',
                      color: 'white',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Typography>Fade</Typography>
                  </Paper>
                </Fade>
              </Box>
            </Grid>

            {/* Grow */}
            <Grid size={{ xs: 6 }}>
              <Box sx={{ height: 100, position: 'relative' }}>
                <Grow in={showTransitions} timeout={500}>
                  <Paper
                    sx={{
                      p: 2,
                      textAlign: 'center',
                      bgcolor: 'success.light',
                      color: 'white',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Typography>Grow</Typography>
                  </Paper>
                </Grow>
              </Box>
            </Grid>

            {/* Slide */}
            <Grid size={{ xs: 6 }}>
              <Box sx={{ height: 100, position: 'relative', overflow: 'hidden' }}>
                <Slide
                  direction="right"
                  in={showTransitions}
                  timeout={500}
                  mountOnEnter
                  unmountOnExit
                >
                  <Paper
                    sx={{
                      p: 2,
                      textAlign: 'center',
                      bgcolor: 'warning.light',
                      color: 'white',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Typography>Slide</Typography>
                  </Paper>
                </Slide>
              </Box>
            </Grid>

            {/* Zoom */}
            <Grid size={{ xs: 6 }}>
              <Box sx={{ height: 100, position: 'relative' }}>
                <Zoom in={showTransitions} timeout={500}>
                  <Paper
                    sx={{
                      p: 2,
                      textAlign: 'center',
                      bgcolor: 'error.light',
                      color: 'white',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Typography>Zoom</Typography>
                  </Paper>
                </Zoom>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* 로딩 애니메이션 */}
        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            로딩 애니메이션
          </Typography>
          <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
            {/* Dots */}
            <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
              {[0, 1, 2].map((i) => (
                <Box
                  key={i}
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    animation: 'bounce 0.6s ease infinite',
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
              <Typography variant="caption" sx={{ ml: 1 }}>
                Dots
              </Typography>
            </Box>

            {/* Spinner */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  border: 3,
                  borderColor: 'grey.300',
                  borderTopColor: 'primary.main',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}
              />
              <Typography variant="caption">Spinner</Typography>
            </Box>

            {/* Pulse Ring */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  bgcolor: 'secondary.main',
                  animation: 'pulse 1.5s ease infinite'
                }}
              />
              <Typography variant="caption">Pulse</Typography>
            </Box>

            {/* Bar */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ display: 'flex', gap: 0.3, alignItems: 'end', height: 24 }}>
                {[0, 1, 2, 3].map((i) => (
                  <Box
                    key={i}
                    sx={{
                      width: 4,
                      bgcolor: 'success.main',
                      animation: 'bounce 0.8s ease infinite',
                      animationDelay: `${i * 0.1}s`,
                      height: 16
                    }}
                  />
                ))}
              </Box>
              <Typography variant="caption">Bars</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SectionAnimation;
