import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

/**
 * SectionInput 컴포넌트
 *
 * MUI TextField의 다양한 variant를 보여주는 섹션
 * - variant: standard, outlined, filled
 * - 입력값 실시간 표시
 */
function SectionInput() {
  const [values, setValues] = useState({
    standard: '',
    outlined: '',
    filled: ''
  });

  const handleChange = (variant) => (event) => {
    setValues((prev) => ({
      ...prev,
      [variant]: event.target.value
    }));
  };

  const variants = [
    { name: 'standard', label: 'Standard', placeholder: '텍스트를 입력하세요' },
    { name: 'outlined', label: 'Outlined', placeholder: '텍스트를 입력하세요' },
    { name: 'filled', label: 'Filled', placeholder: '텍스트를 입력하세요' }
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
        Input (TextField)
      </Typography>

      {/* TextField 그룹 */}
      <Grid container spacing={3}>
        {variants.map((variant) => (
          <Grid key={variant.name} size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                variant={variant.name}
                label={variant.label}
                placeholder={variant.placeholder}
                value={values[variant.name]}
                onChange={handleChange(variant.name)}
                fullWidth
              />
              <Box
                sx={{
                  p: 2,
                  bgcolor: 'grey.100',
                  borderRadius: 1,
                  minHeight: 56
                }}
              >
                <Typography variant="caption" color="text.secondary">
                  입력값:
                </Typography>
                <Typography variant="body2" sx={{ wordBreak: 'break-all' }}>
                  {values[variant.name] || '(없음)'}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SectionInput;
