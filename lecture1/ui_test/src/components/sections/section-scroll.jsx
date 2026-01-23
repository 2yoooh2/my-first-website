import { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

/**
 * SectionScroll 컴포넌트
 *
 * 스크롤 관련 UI를 보여주는 섹션
 * - 세로 스크롤 영역
 * - 가로 스크롤 영역
 * - 스크롤 위치 감지
 * - 스크롤 탑/바텀 버튼
 */
function SectionScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const verticalScrollRef = useRef(null);

  const verticalItems = Array.from({ length: 20 }, (_, i) => `아이템 ${i + 1}`);
  const horizontalItems = Array.from({ length: 10 }, (_, i) => `카드 ${i + 1}`);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const position = Math.round((scrollTop / (scrollHeight - clientHeight)) * 100);
    setScrollPosition(position);
  };

  const scrollToTop = () => {
    if (verticalScrollRef.current) {
      verticalScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToBottom = () => {
    if (verticalScrollRef.current) {
      verticalScrollRef.current.scrollTo({
        top: verticalScrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
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
        Scroll
      </Typography>

      <Grid container spacing={4}>
        {/* 세로 스크롤 + 위치 감지 */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            세로 스크롤 (위치 감지)
          </Typography>
          <Box sx={{ position: 'relative' }}>
            <Paper
              ref={verticalScrollRef}
              onScroll={handleScroll}
              sx={{
                height: 250,
                overflow: 'auto',
                p: 2
              }}
            >
              {verticalItems.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    p: 2,
                    mb: 1,
                    bgcolor: 'grey.100',
                    borderRadius: 1
                  }}
                >
                  <Typography>{item}</Typography>
                </Box>
              ))}
            </Paper>

            {/* 스크롤 컨트롤 버튼 */}
            <Box
              sx={{
                position: 'absolute',
                right: 16,
                bottom: 16,
                display: 'flex',
                flexDirection: 'column',
                gap: 1
              }}
            >
              <Fab
                size="small"
                color="primary"
                onClick={scrollToTop}
                aria-label="맨 위로"
              >
                <KeyboardArrowUpIcon />
              </Fab>
              <Fab
                size="small"
                color="primary"
                onClick={scrollToBottom}
                aria-label="맨 아래로"
              >
                <KeyboardArrowDownIcon />
              </Fab>
            </Box>
          </Box>

          {/* 스크롤 위치 표시 */}
          <Box sx={{ mt: 2 }}>
            <Typography variant="caption" color="text.secondary">
              스크롤 위치: {scrollPosition}%
            </Typography>
            <Box
              sx={{
                mt: 1,
                height: 8,
                bgcolor: 'grey.200',
                borderRadius: 1,
                overflow: 'hidden'
              }}
            >
              <Box
                sx={{
                  width: `${scrollPosition}%`,
                  height: '100%',
                  bgcolor: 'primary.main',
                  transition: 'width 0.1s'
                }}
              />
            </Box>
          </Box>
        </Grid>

        {/* 가로 스크롤 */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            가로 스크롤
          </Typography>
          <Paper
            sx={{
              p: 2,
              overflow: 'auto',
              whiteSpace: 'nowrap',
              '&::-webkit-scrollbar': {
                height: 8
              },
              '&::-webkit-scrollbar-track': {
                bgcolor: 'grey.200',
                borderRadius: 1
              },
              '&::-webkit-scrollbar-thumb': {
                bgcolor: 'grey.400',
                borderRadius: 1,
                '&:hover': {
                  bgcolor: 'grey.500'
                }
              }
            }}
          >
            <Box sx={{ display: 'inline-flex', gap: 2 }}>
              {horizontalItems.map((item, index) => (
                <Paper
                  key={index}
                  elevation={2}
                  sx={{
                    minWidth: 150,
                    height: 120,
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: `primary.${(index % 3 + 1) * 100}`
                  }}
                >
                  <Typography
                    sx={{
                      color: index % 3 === 2 ? 'white' : 'text.primary',
                      fontWeight: 500
                    }}
                  >
                    {item}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Paper>

          {/* 스크롤 안내 */}
          <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
            <Typography variant="body2" color="text.secondary">
              좌우로 스크롤하여 더 많은 카드를 확인하세요.
              커스텀 스크롤바가 적용되어 있습니다.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SectionScroll;
