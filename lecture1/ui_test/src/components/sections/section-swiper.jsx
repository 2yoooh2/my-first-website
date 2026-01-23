import { useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

/**
 * SectionSwiper 컴포넌트
 *
 * 순수 React로 구현한 Swiper/캐러셀 섹션
 * - 이미지 슬라이더
 * - 자동 재생
 * - 이전/다음 버튼
 * - 인디케이터
 */
function SectionSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    { id: 1, title: 'Slide 1', color: 'primary.main', subtitle: '첫 번째 슬라이드입니다' },
    { id: 2, title: 'Slide 2', color: 'secondary.main', subtitle: '두 번째 슬라이드입니다' },
    { id: 3, title: 'Slide 3', color: 'success.main', subtitle: '세 번째 슬라이드입니다' },
    { id: 4, title: 'Slide 4', color: 'warning.main', subtitle: '네 번째 슬라이드입니다' },
    { id: 5, title: 'Slide 5', color: 'info.main', subtitle: '다섯 번째 슬라이드입니다' }
  ];

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // 자동 재생
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, [isPlaying, goToNext]);

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
        Swiper / Carousel
      </Typography>

      <Grid container spacing={4}>
        {/* 메인 슬라이더 */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            이미지 슬라이더
          </Typography>
          <Paper
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 2
            }}
          >
            {/* 슬라이드 컨테이너 */}
            <Box
              sx={{
                display: 'flex',
                transition: 'transform 0.5s ease',
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {slides.map((slide) => (
                <Box
                  key={slide.id}
                  sx={{
                    minWidth: '100%',
                    height: 250,
                    bgcolor: slide.color,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    {slide.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1, opacity: 0.9 }}>
                    {slide.subtitle}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* 이전/다음 버튼 */}
            <IconButton
              onClick={goToPrev}
              sx={{
                position: 'absolute',
                left: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(255,255,255,0.8)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.95)' }
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
            <IconButton
              onClick={goToNext}
              sx={{
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(255,255,255,0.8)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.95)' }
              }}
            >
              <ChevronRightIcon />
            </IconButton>

            {/* 인디케이터 */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 16,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: 1
              }}
            >
              {slides.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => goToSlide(index)}
                  sx={{
                    width: currentIndex === index ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    bgcolor: currentIndex === index ? 'white' : 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                />
              ))}
            </Box>
          </Paper>

          {/* 컨트롤 */}
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              variant="outlined"
              size="small"
              startIcon={isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? '일시정지' : '재생'}
            </Button>
            <Typography variant="body2" color="text.secondary">
              {currentIndex + 1} / {slides.length}
            </Typography>
          </Box>
        </Grid>

        {/* 썸네일 슬라이더 */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            썸네일
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {slides.map((slide, index) => (
              <Paper
                key={slide.id}
                onClick={() => goToSlide(index)}
                sx={{
                  p: 2,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  border: 2,
                  borderColor: currentIndex === index ? 'primary.main' : 'transparent',
                  transition: 'all 0.2s',
                  '&:hover': {
                    bgcolor: 'grey.100'
                  }
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 32,
                    bgcolor: slide.color,
                    borderRadius: 1
                  }}
                />
                <Box>
                  <Typography variant="body2" fontWeight={500}>
                    {slide.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {slide.subtitle}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SectionSwiper;
