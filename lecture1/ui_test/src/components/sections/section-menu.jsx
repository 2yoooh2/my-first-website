import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

/**
 * SectionMenu 컴포넌트
 *
 * MUI Menu의 다양한 스타일을 보여주는 섹션
 * - 기본 Menu
 * - 아이콘 Menu
 * - 액션 Menu
 * - Context Menu (우클릭)
 */
function SectionMenu() {
  const [basicAnchor, setBasicAnchor] = useState(null);
  const [iconAnchor, setIconAnchor] = useState(null);
  const [actionAnchor, setActionAnchor] = useState(null);
  const [contextMenu, setContextMenu] = useState(null);

  const handleMenuClick = (menuName) => {
    alert(`${menuName} 메뉴가 클릭되었습니다!`);
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? { mouseX: event.clientX + 2, mouseY: event.clientY - 6 }
        : null
    );
  };

  const handleContextClose = () => {
    setContextMenu(null);
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
        Menu
      </Typography>

      <Grid container spacing={4}>
        {/* 기본 Menu */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            기본 Menu
          </Typography>
          <Button
            variant="contained"
            onClick={(e) => setBasicAnchor(e.currentTarget)}
            endIcon={<KeyboardArrowDownIcon />}
            fullWidth
          >
            메뉴 열기
          </Button>
          <Menu
            anchorEl={basicAnchor}
            open={Boolean(basicAnchor)}
            onClose={() => setBasicAnchor(null)}
          >
            <MenuItem onClick={() => {
              handleMenuClick('프로필');
              setBasicAnchor(null);
            }}>
              프로필
            </MenuItem>
            <MenuItem onClick={() => {
              handleMenuClick('내 계정');
              setBasicAnchor(null);
            }}>
              내 계정
            </MenuItem>
            <MenuItem onClick={() => {
              handleMenuClick('로그아웃');
              setBasicAnchor(null);
            }}>
              로그아웃
            </MenuItem>
          </Menu>
        </Grid>

        {/* 아이콘 Menu */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            아이콘 Menu
          </Typography>
          <Button
            variant="outlined"
            onClick={(e) => setIconAnchor(e.currentTarget)}
            endIcon={<KeyboardArrowDownIcon />}
            fullWidth
          >
            편집 메뉴
          </Button>
          <Menu
            anchorEl={iconAnchor}
            open={Boolean(iconAnchor)}
            onClose={() => setIconAnchor(null)}
          >
            <MenuItem onClick={() => {
              handleMenuClick('잘라내기');
              setIconAnchor(null);
            }}>
              <ListItemIcon>
                <ContentCutIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>잘라내기</ListItemText>
              <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
                Ctrl+X
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => {
              handleMenuClick('복사');
              setIconAnchor(null);
            }}>
              <ListItemIcon>
                <ContentCopyIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>복사</ListItemText>
              <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
                Ctrl+C
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => {
              handleMenuClick('붙여넣기');
              setIconAnchor(null);
            }}>
              <ListItemIcon>
                <ContentPasteIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>붙여넣기</ListItemText>
              <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
                Ctrl+V
              </Typography>
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => {
              handleMenuClick('삭제');
              setIconAnchor(null);
            }}>
              <ListItemIcon>
                <DeleteIcon fontSize="small" color="error" />
              </ListItemIcon>
              <ListItemText sx={{ color: 'error.main' }}>삭제</ListItemText>
            </MenuItem>
          </Menu>
        </Grid>

        {/* 액션 Menu (IconButton) */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            액션 Menu
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton
              onClick={(e) => setActionAnchor(e.currentTarget)}
              sx={{ border: 1, borderColor: 'divider' }}
            >
              <MoreVertIcon />
            </IconButton>
          </Box>
          <Menu
            anchorEl={actionAnchor}
            open={Boolean(actionAnchor)}
            onClose={() => setActionAnchor(null)}
          >
            <MenuItem onClick={() => {
              handleMenuClick('수정');
              setActionAnchor(null);
            }}>
              <ListItemIcon>
                <EditIcon fontSize="small" />
              </ListItemIcon>
              수정
            </MenuItem>
            <MenuItem onClick={() => {
              handleMenuClick('공유');
              setActionAnchor(null);
            }}>
              <ListItemIcon>
                <ShareIcon fontSize="small" />
              </ListItemIcon>
              공유
            </MenuItem>
            <MenuItem onClick={() => {
              handleMenuClick('다운로드');
              setActionAnchor(null);
            }}>
              <ListItemIcon>
                <DownloadIcon fontSize="small" />
              </ListItemIcon>
              다운로드
            </MenuItem>
          </Menu>
        </Grid>

        {/* Context Menu (우클릭) */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 2 }}>
            Context Menu
          </Typography>
          <Paper
            onContextMenu={handleContextMenu}
            sx={{
              p: 3,
              textAlign: 'center',
              cursor: 'context-menu',
              bgcolor: 'grey.100',
              border: '2px dashed',
              borderColor: 'grey.300'
            }}
          >
            <Typography variant="body2" color="text.secondary">
              우클릭하세요
            </Typography>
          </Paper>
          <Menu
            open={contextMenu !== null}
            onClose={handleContextClose}
            anchorReference="anchorPosition"
            anchorPosition={
              contextMenu !== null
                ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
                : undefined
            }
          >
            <MenuItem onClick={() => {
              handleMenuClick('복사');
              handleContextClose();
            }}>
              <ListItemIcon>
                <ContentCopyIcon fontSize="small" />
              </ListItemIcon>
              복사
            </MenuItem>
            <MenuItem onClick={() => {
              handleMenuClick('붙여넣기');
              handleContextClose();
            }}>
              <ListItemIcon>
                <ContentPasteIcon fontSize="small" />
              </ListItemIcon>
              붙여넣기
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => {
              handleMenuClick('새로고침');
              handleContextClose();
            }}>
              새로고침
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SectionMenu;
