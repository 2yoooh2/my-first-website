import { useState } from 'react';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

/**
 * SectionRadio 컴포넌트
 *
 * MUI Radio의 다양한 스타일을 보여주는 섹션
 * - 기본 라디오 그룹
 * - 색상별 라디오
 * - 가로/세로 배치
 */
function SectionRadio() {
  const [basicValue, setBasicValue] = useState('option1');
  const [colorValue, setColorValue] = useState('primary');
  const [directionValue, setDirectionValue] = useState('react');

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
        Radio
      </Typography>

      <Grid container spacing={4}>
        {/* 기본 라디오 그룹 */}
        <Grid size={{ xs: 12, md: 4 }}>
          <FormControl>
            <FormLabel>기본 라디오</FormLabel>
            <RadioGroup
              value={basicValue}
              onChange={(e) => setBasicValue(e.target.value)}
            >
              <FormControlLabel value="option1" control={<Radio />} label="옵션 1" />
              <FormControlLabel value="option2" control={<Radio />} label="옵션 2" />
              <FormControlLabel value="option3" control={<Radio />} label="옵션 3" />
            </RadioGroup>
            <Box sx={{ mt: 1, p: 1, bgcolor: 'grey.100', borderRadius: 1 }}>
              <Typography variant="caption" color="text.secondary">
                선택값: {basicValue}
              </Typography>
            </Box>
          </FormControl>
        </Grid>

        {/* 색상별 라디오 */}
        <Grid size={{ xs: 12, md: 4 }}>
          <FormControl>
            <FormLabel>색상 라디오</FormLabel>
            <RadioGroup
              value={colorValue}
              onChange={(e) => setColorValue(e.target.value)}
            >
              <FormControlLabel
                value="primary"
                control={<Radio color="primary" />}
                label="Primary"
              />
              <FormControlLabel
                value="secondary"
                control={<Radio color="secondary" />}
                label="Secondary"
              />
              <FormControlLabel
                value="error"
                control={<Radio color="error" />}
                label="Error"
              />
              <FormControlLabel
                value="success"
                control={<Radio color="success" />}
                label="Success"
              />
            </RadioGroup>
            <Box sx={{ mt: 1, p: 1, bgcolor: 'grey.100', borderRadius: 1 }}>
              <Typography variant="caption" color="text.secondary">
                선택값: {colorValue}
              </Typography>
            </Box>
          </FormControl>
        </Grid>

        {/* 가로 배치 라디오 */}
        <Grid size={{ xs: 12, md: 4 }}>
          <FormControl>
            <FormLabel>가로 배치</FormLabel>
            <RadioGroup
              row
              value={directionValue}
              onChange={(e) => setDirectionValue(e.target.value)}
            >
              <FormControlLabel value="react" control={<Radio />} label="React" />
              <FormControlLabel value="vue" control={<Radio />} label="Vue" />
              <FormControlLabel value="angular" control={<Radio />} label="Angular" />
            </RadioGroup>
            <Box sx={{ mt: 1, p: 1, bgcolor: 'grey.100', borderRadius: 1 }}>
              <Typography variant="caption" color="text.secondary">
                선택값: {directionValue}
              </Typography>
            </Box>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SectionRadio;
