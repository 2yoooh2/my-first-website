import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

/**
 * SectionButton 컴포넌트
 *
 * MUI Button의 다양한 variant와 color 조합을 보여주는 섹션
 * - variant: contained, outlined, text
 * - color: primary, secondary, error
 */
function SectionButton() {
  const handleClick = (variant, color) => {
    alert(`${color} ${variant} 버튼이 클릭되었습니다!`);
  };

  const variants = ['contained', 'outlined', 'text'];
  const colors = ['primary', 'secondary', 'error'];

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
        Button
      </Typography>

      {/* Variant별 버튼 그룹 */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {variants.map((variant) => (
          <Box key={variant}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 500,
                mb: 2,
                color: 'text.secondary',
                textTransform: 'capitalize'
              }}
            >
              {variant}
            </Typography>
            <Grid container spacing={2}>
              {colors.map((color) => (
                <Grid key={color} size={{ xs: 12, sm: 4 }}>
                  <Button
                    variant={variant}
                    color={color}
                    fullWidth
                    onClick={() => handleClick(variant, color)}
                    sx={{ textTransform: 'capitalize' }}
                  >
                    {color}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default SectionButton;
