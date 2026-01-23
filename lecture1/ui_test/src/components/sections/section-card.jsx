import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

/**
 * SectionCard 컴포넌트
 *
 * MUI Card의 다양한 스타일을 보여주는 섹션
 * - 기본 카드, 이미지 카드, 아웃라인 카드
 */
function SectionCard() {
  const handleClick = (cardName) => {
    alert(`${cardName} 카드의 버튼이 클릭되었습니다!`);
  };

  const cards = [
    {
      title: '기본 카드',
      description: '기본적인 Card 컴포넌트입니다. CardContent와 CardActions를 포함합니다.',
      variant: 'elevation',
      hasImage: false
    },
    {
      title: '이미지 카드',
      description: 'CardMedia를 사용하여 이미지를 포함한 카드입니다.',
      variant: 'elevation',
      hasImage: true
    },
    {
      title: '아웃라인 카드',
      description: 'variant="outlined"를 사용한 테두리 스타일 카드입니다.',
      variant: 'outlined',
      hasImage: false
    }
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
        Card
      </Typography>

      {/* 카드 그리드 */}
      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid key={card.title} size={{ xs: 12, md: 4 }}>
            <Card
              variant={card.variant}
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              {card.hasImage && (
                <CardMedia
                  sx={{
                    height: 140,
                    bgcolor: 'primary.light',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Typography variant="h6" color="white">
                    Image Area
                  </Typography>
                </CardMedia>
              )}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => handleClick(card.title)}
                >
                  자세히 보기
                </Button>
                <Button
                  size="small"
                  color="secondary"
                  onClick={() => handleClick(card.title)}
                >
                  공유
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SectionCard;
