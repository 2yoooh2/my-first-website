import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

/**
 * SectionDragDrop 컴포넌트
 *
 * HTML5 Drag & Drop API를 사용한 드래그 앤 드롭 섹션
 * - 리스트 아이템 순서 변경
 * - 영역 간 아이템 이동
 */
function SectionDragDrop() {
  const [listItems, setListItems] = useState([
    { id: 1, text: '아이템 1' },
    { id: 2, text: '아이템 2' },
    { id: 3, text: '아이템 3' },
    { id: 4, text: '아이템 4' }
  ]);

  const [leftItems, setLeftItems] = useState([
    { id: 'a', text: '사과' },
    { id: 'b', text: '바나나' },
    { id: 'c', text: '오렌지' }
  ]);

  const [rightItems, setRightItems] = useState([]);

  const [draggedItem, setDraggedItem] = useState(null);
  const [draggedIndex, setDraggedIndex] = useState(null);

  // 리스트 순서 변경 핸들러
  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const newItems = [...listItems];
    const draggedItemData = newItems[draggedIndex];
    newItems.splice(draggedIndex, 1);
    newItems.splice(index, 0, draggedItemData);
    setListItems(newItems);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  // 영역 간 이동 핸들러
  const handleItemDragStart = (item, source) => {
    setDraggedItem({ item, source });
  };

  const handleDropToRight = (e) => {
    e.preventDefault();
    if (!draggedItem || draggedItem.source !== 'left') return;

    setLeftItems(leftItems.filter((i) => i.id !== draggedItem.item.id));
    setRightItems([...rightItems, draggedItem.item]);
    setDraggedItem(null);
  };

  const handleDropToLeft = (e) => {
    e.preventDefault();
    if (!draggedItem || draggedItem.source !== 'right') return;

    setRightItems(rightItems.filter((i) => i.id !== draggedItem.item.id));
    setLeftItems([...leftItems, draggedItem.item]);
    setDraggedItem(null);
  };

  const handleItemDragEnd = () => {
    setDraggedItem(null);
  };

  const allowDrop = (e) => {
    e.preventDefault();
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
        Drag & Drop
      </Typography>

      <Grid container spacing={4}>
        {/* 리스트 순서 변경 */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            순서 변경
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {listItems.map((item, index) => (
              <Paper
                key={item.id}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragEnd={handleDragEnd}
                sx={{
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  cursor: 'grab',
                  bgcolor: draggedIndex === index ? 'primary.light' : 'background.paper',
                  color: draggedIndex === index ? 'white' : 'text.primary',
                  transition: 'all 0.2s',
                  '&:hover': {
                    bgcolor: 'grey.100'
                  },
                  '&:active': {
                    cursor: 'grabbing'
                  }
                }}
              >
                <DragIndicatorIcon sx={{ color: 'grey.500' }} />
                <Typography>{item.text}</Typography>
              </Paper>
            ))}
          </Box>
        </Grid>

        {/* 영역 간 이동 */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            영역 간 이동
          </Typography>
          <Grid container spacing={2}>
            {/* 왼쪽 영역 */}
            <Grid size={{ xs: 6 }}>
              <Box
                onDrop={handleDropToLeft}
                onDragOver={allowDrop}
                sx={{
                  p: 2,
                  minHeight: 200,
                  border: '2px dashed',
                  borderColor: 'grey.300',
                  borderRadius: 1,
                  bgcolor: 'grey.50'
                }}
              >
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: 'block', mb: 1 }}
                >
                  왼쪽 영역
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {leftItems.map((item) => (
                    <Paper
                      key={item.id}
                      draggable
                      onDragStart={() => handleItemDragStart(item, 'left')}
                      onDragEnd={handleItemDragEnd}
                      sx={{
                        p: 1.5,
                        cursor: 'grab',
                        textAlign: 'center',
                        '&:active': { cursor: 'grabbing' }
                      }}
                    >
                      {item.text}
                    </Paper>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* 오른쪽 영역 */}
            <Grid size={{ xs: 6 }}>
              <Box
                onDrop={handleDropToRight}
                onDragOver={allowDrop}
                sx={{
                  p: 2,
                  minHeight: 200,
                  border: '2px dashed',
                  borderColor: 'primary.main',
                  borderRadius: 1,
                  bgcolor: 'primary.50'
                }}
              >
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: 'block', mb: 1 }}
                >
                  오른쪽 영역
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {rightItems.map((item) => (
                    <Paper
                      key={item.id}
                      draggable
                      onDragStart={() => handleItemDragStart(item, 'right')}
                      onDragEnd={handleItemDragEnd}
                      sx={{
                        p: 1.5,
                        cursor: 'grab',
                        textAlign: 'center',
                        bgcolor: 'primary.light',
                        color: 'white',
                        '&:active': { cursor: 'grabbing' }
                      }}
                    >
                      {item.text}
                    </Paper>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SectionDragDrop;
