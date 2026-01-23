import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

/**
 * SectionSlider 컴포넌트
 *
 * MUI Slider의 다양한 스타일을 보여주는 섹션
 * - 기본 슬라이더
 * - 범위 슬라이더
 * - 단계별 슬라이더
 * - 색상별 슬라이더
 */
function SectionSlider() {
  const [basicValue, setBasicValue] = useState(30);
  const [rangeValue, setRangeValue] = useState([20, 60]);
  const [stepValue, setStepValue] = useState(50);
  const [colorValues, setColorValues] = useState({
    primary: 40,
    secondary: 60,
    error: 80
  });

  const handleColorChange = (color) => (event, newValue) => {
    setColorValues((prev) => ({
      ...prev,
      [color]: newValue
    }));
  };

  const stepMarks = [
    { value: 0, label: '0' },
    { value: 25, label: '25' },
    { value: 50, label: '50' },
    { value: 75, label: '75' },
    { value: 100, label: '100' }
  ];

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
        Slider
      </Typography>

      <Grid container spacing={4}>
        {/* 기본 슬라이더 */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            기본 슬라이더
          </Typography>
          <Box sx={{ px: 1 }}>
            <Slider
              value={basicValue}
              onChange={(e, newValue) => setBasicValue(newValue)}
              valueLabelDisplay="auto"
            />
          </Box>
          <Box sx={{ mt: 1, p: 1, bgcolor: 'grey.100', borderRadius: 1 }}>
            <Typography variant="caption" color="text.secondary">
              값: {basicValue}
            </Typography>
          </Box>
        </Grid>

        {/* 범위 슬라이더 */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            범위 슬라이더
          </Typography>
          <Box sx={{ px: 1 }}>
            <Slider
              value={rangeValue}
              onChange={(e, newValue) => setRangeValue(newValue)}
              valueLabelDisplay="auto"
            />
          </Box>
          <Box sx={{ mt: 1, p: 1, bgcolor: 'grey.100', borderRadius: 1 }}>
            <Typography variant="caption" color="text.secondary">
              범위: {rangeValue[0]} ~ {rangeValue[1]}
            </Typography>
          </Box>
        </Grid>

        {/* 단계별 슬라이더 */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            단계별 슬라이더
          </Typography>
          <Box sx={{ px: 1 }}>
            <Slider
              value={stepValue}
              onChange={(e, newValue) => setStepValue(newValue)}
              step={25}
              marks={stepMarks}
              valueLabelDisplay="auto"
            />
          </Box>
          <Box sx={{ mt: 1, p: 1, bgcolor: 'grey.100', borderRadius: 1 }}>
            <Typography variant="caption" color="text.secondary">
              값: {stepValue}
            </Typography>
          </Box>
        </Grid>

        {/* 색상별 슬라이더 */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            색상 슬라이더
          </Typography>
          <Box sx={{ px: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box>
              <Typography variant="caption" color="text.secondary">
                Primary
              </Typography>
              <Slider
                color="primary"
                value={colorValues.primary}
                onChange={handleColorChange('primary')}
              />
            </Box>
            <Box>
              <Typography variant="caption" color="text.secondary">
                Secondary
              </Typography>
              <Slider
                color="secondary"
                value={colorValues.secondary}
                onChange={handleColorChange('secondary')}
              />
            </Box>
            <Box>
              <Typography variant="caption" color="text.secondary">
                Error
              </Typography>
              <Slider
                color="error"
                value={colorValues.error}
                onChange={handleColorChange('error')}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SectionSlider;
