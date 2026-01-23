import { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import OutlinedInput from '@mui/material/OutlinedInput';

/**
 * SectionDropdown 컴포넌트
 *
 * MUI Select의 다양한 스타일을 보여주는 섹션
 * - 기본 드롭다운
 * - 다중 선택 드롭다운
 * - variant별 드롭다운
 */
function SectionDropdown() {
  const [basicValue, setBasicValue] = useState('');
  const [multiValue, setMultiValue] = useState([]);
  const [variantValues, setVariantValues] = useState({
    standard: '',
    outlined: '',
    filled: ''
  });

  const fruits = ['사과', '바나나', '오렌지', '포도', '딸기'];
  const languages = ['JavaScript', 'Python', 'Java', 'C++', 'Go', 'Rust'];

  const handleVariantChange = (variant) => (event) => {
    setVariantValues((prev) => ({
      ...prev,
      [variant]: event.target.value
    }));
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
        Dropdown (Select)
      </Typography>

      <Grid container spacing={4}>
        {/* 기본 드롭다운 */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            기본 드롭다운
          </Typography>
          <FormControl fullWidth>
            <InputLabel>과일 선택</InputLabel>
            <Select
              value={basicValue}
              label="과일 선택"
              onChange={(e) => setBasicValue(e.target.value)}
            >
              {fruits.map((fruit) => (
                <MenuItem key={fruit} value={fruit}>
                  {fruit}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box sx={{ mt: 1, p: 1, bgcolor: 'grey.100', borderRadius: 1 }}>
            <Typography variant="caption" color="text.secondary">
              선택값: {basicValue || '(없음)'}
            </Typography>
          </Box>
        </Grid>

        {/* 다중 선택 드롭다운 */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            다중 선택
          </Typography>
          <FormControl fullWidth>
            <InputLabel>언어 선택</InputLabel>
            <Select
              multiple
              value={multiValue}
              onChange={(e) => setMultiValue(e.target.value)}
              input={<OutlinedInput label="언어 선택" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} size="small" />
                  ))}
                </Box>
              )}
            >
              {languages.map((lang) => (
                <MenuItem key={lang} value={lang}>
                  {lang}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box sx={{ mt: 1, p: 1, bgcolor: 'grey.100', borderRadius: 1 }}>
            <Typography variant="caption" color="text.secondary">
              선택값: {multiValue.length > 0 ? multiValue.join(', ') : '(없음)'}
            </Typography>
          </Box>
        </Grid>

        {/* Variant별 드롭다운 */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            Variant 스타일
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {['standard', 'outlined', 'filled'].map((variant) => (
              <FormControl key={variant} fullWidth variant={variant}>
                <InputLabel>{variant}</InputLabel>
                <Select
                  value={variantValues[variant]}
                  label={variant}
                  onChange={handleVariantChange(variant)}
                >
                  {fruits.map((fruit) => (
                    <MenuItem key={fruit} value={fruit}>
                      {fruit}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SectionDropdown;
