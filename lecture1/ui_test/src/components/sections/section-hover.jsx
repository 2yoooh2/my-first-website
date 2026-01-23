import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarIcon from '@mui/icons-material/Star';

/**
 * SectionHover 컴포넌트
 *
 * 다양한 Hover 효과를 보여주는 섹션
 * - 카드 hover (elevation, scale)
 * - 버튼 hover
 * - 이미지 오버레이
 * - 아이콘 hover
 */
function SectionHover() {
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
        Hover Effects
      </Typography>

      <Grid container spacing={4}>
        {/* 카드 Hover 효과 */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            카드 Hover
          </Typography>
          <Grid container spacing={2}>
            {/* Scale 효과 */}
            <Grid size={{ xs: 6 }}>
              <Paper
                sx={{
                  p: 3,
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 6
                  }
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Scale Up
                </Typography>
              </Paper>
            </Grid>

            {/* Elevation 효과 */}
            <Grid size={{ xs: 6 }}>
              <Paper
                sx={{
                  p: 3,
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: 12
                  }
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Elevation
                </Typography>
              </Paper>
            </Grid>

            {/* 배경색 변경 */}
            <Grid size={{ xs: 6 }}>
              <Paper
                sx={{
                  p: 3,
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                  '&:hover': {
                    bgcolor: 'primary.light',
                    color: 'white'
                  }
                }}
              >
                <Typography variant="body2">
                  Background
                </Typography>
              </Paper>
            </Grid>

            {/* Border 효과 */}
            <Grid size={{ xs: 6 }}>
              <Paper
                sx={{
                  p: 3,
                  textAlign: 'center',
                  cursor: 'pointer',
                  border: 2,
                  borderColor: 'transparent',
                  transition: 'border-color 0.3s',
                  '&:hover': {
                    borderColor: 'primary.main'
                  }
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Border
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        {/* 이미지 오버레이 Hover */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            이미지 오버레이
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  height: 120,
                  bgcolor: 'grey.300',
                  borderRadius: 1,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  '&:hover .overlay': {
                    opacity: 1
                  }
                }}
              >
                <Box
                  sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Typography color="text.secondary">Image</Typography>
                </Box>
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: 'rgba(0, 0, 0, 0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s'
                  }}
                >
                  <Typography color="white" fontWeight={500}>
                    Overlay
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  height: 120,
                  bgcolor: 'primary.light',
                  borderRadius: 1,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  '&:hover .content': {
                    bottom: 0
                  }
                }}
              >
                <Box
                  sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Typography color="white">Image</Typography>
                </Box>
                <Box
                  className="content"
                  sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: '-50px',
                    bgcolor: 'white',
                    p: 1.5,
                    transition: 'bottom 0.3s'
                  }}
                >
                  <Typography variant="body2">Slide Up</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* 버튼 Hover */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            버튼 Hover
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: 4
                }
              }}
            >
              Lift Up
            </Button>
            <Button
              variant="outlined"
              sx={{
                transition: 'all 0.3s',
                '&:hover': {
                  bgcolor: 'primary.main',
                  color: 'white'
                }
              }}
            >
              Fill
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'scale(1.1)'
                }
              }}
            >
              Scale
            </Button>
          </Box>
        </Grid>

        {/* 아이콘 Hover */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            아이콘 Hover
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton
              sx={{
                transition: 'all 0.3s',
                '&:hover': {
                  color: 'error.main',
                  transform: 'scale(1.2)'
                }
              }}
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton
              sx={{
                transition: 'all 0.3s',
                '&:hover': {
                  color: 'primary.main',
                  bgcolor: 'primary.light'
                }
              }}
            >
              <ShareIcon />
            </IconButton>
            <IconButton
              sx={{
                transition: 'all 0.3s',
                '&:hover': {
                  color: 'warning.main',
                  transform: 'rotate(15deg)'
                }
              }}
            >
              <BookmarkIcon />
            </IconButton>
            <IconButton
              sx={{
                transition: 'all 0.3s',
                '&:hover': {
                  color: 'warning.main',
                  transform: 'rotate(360deg)'
                }
              }}
            >
              <StarIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SectionHover;
