import { useState } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

/**
 * SectionCheckbox 컴포넌트
 *
 * MUI Checkbox의 다양한 스타일을 보여주는 섹션
 * - 기본 체크박스
 * - 색상별 체크박스
 * - 그룹 체크박스
 * - Indeterminate 체크박스
 */
function SectionCheckbox() {
  const [basicChecked, setBasicChecked] = useState([true, false, false]);
  const [colorChecked, setColorChecked] = useState({
    primary: true,
    secondary: false,
    error: false,
    success: true
  });
  const [fruits, setFruits] = useState({
    apple: true,
    banana: true,
    orange: false,
    grape: false
  });

  const handleColorChange = (color) => (event) => {
    setColorChecked((prev) => ({
      ...prev,
      [color]: event.target.checked
    }));
  };

  const handleFruitChange = (fruit) => (event) => {
    setFruits((prev) => ({
      ...prev,
      [fruit]: event.target.checked
    }));
  };

  // Indeterminate 상태 계산
  const checkedFruits = Object.values(fruits).filter(Boolean).length;
  const allChecked = checkedFruits === 4;
  const someChecked = checkedFruits > 0 && checkedFruits < 4;

  const handleSelectAll = (event) => {
    setFruits({
      apple: event.target.checked,
      banana: event.target.checked,
      orange: event.target.checked,
      grape: event.target.checked
    });
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
        Checkbox
      </Typography>

      <Grid container spacing={4}>
        {/* 기본 체크박스 */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            기본 체크박스
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={basicChecked[0]}
                  onChange={(e) => setBasicChecked([e.target.checked, basicChecked[1], basicChecked[2]])}
                />
              }
              label="옵션 1"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={basicChecked[1]}
                  onChange={(e) => setBasicChecked([basicChecked[0], e.target.checked, basicChecked[2]])}
                />
              }
              label="옵션 2"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={basicChecked[2]}
                  onChange={(e) => setBasicChecked([basicChecked[0], basicChecked[1], e.target.checked])}
                  disabled
                />
              }
              label="비활성화"
            />
          </FormGroup>
          <Box sx={{ mt: 1, p: 1, bgcolor: 'grey.100', borderRadius: 1 }}>
            <Typography variant="caption" color="text.secondary">
              선택: {basicChecked.filter(Boolean).length}개
            </Typography>
          </Box>
        </Grid>

        {/* 색상별 체크박스 */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            색상 체크박스
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={colorChecked.primary}
                  onChange={handleColorChange('primary')}
                  color="primary"
                />
              }
              label="Primary"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={colorChecked.secondary}
                  onChange={handleColorChange('secondary')}
                  color="secondary"
                />
              }
              label="Secondary"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={colorChecked.error}
                  onChange={handleColorChange('error')}
                  color="error"
                />
              }
              label="Error"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={colorChecked.success}
                  onChange={handleColorChange('success')}
                  color="success"
                />
              }
              label="Success"
            />
          </FormGroup>
        </Grid>

        {/* Indeterminate 체크박스 */}
        <Grid size={{ xs: 12, md: 4 }}>
          <FormControl component="fieldset">
            <FormLabel component="legend" sx={{ fontWeight: 500, mb: 1 }}>
              전체 선택 (Indeterminate)
            </FormLabel>
            <FormControlLabel
              control={
                <Checkbox
                  checked={allChecked}
                  indeterminate={someChecked}
                  onChange={handleSelectAll}
                />
              }
              label="전체 선택"
              sx={{ borderBottom: 1, borderColor: 'divider', pb: 1, mb: 1 }}
            />
            <Box sx={{ pl: 3 }}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={fruits.apple}
                      onChange={handleFruitChange('apple')}
                      size="small"
                    />
                  }
                  label="사과"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={fruits.banana}
                      onChange={handleFruitChange('banana')}
                      size="small"
                    />
                  }
                  label="바나나"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={fruits.orange}
                      onChange={handleFruitChange('orange')}
                      size="small"
                    />
                  }
                  label="오렌지"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={fruits.grape}
                      onChange={handleFruitChange('grape')}
                      size="small"
                    />
                  }
                  label="포도"
                />
              </FormGroup>
            </Box>
          </FormControl>
          <Box sx={{ mt: 1, p: 1, bgcolor: 'grey.100', borderRadius: 1 }}>
            <Typography variant="caption" color="text.secondary">
              선택: {checkedFruits}/4개
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SectionCheckbox;
