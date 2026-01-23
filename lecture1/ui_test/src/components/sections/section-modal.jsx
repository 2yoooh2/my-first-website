import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

/**
 * SectionModal 컴포넌트
 *
 * MUI Modal과 Dialog를 보여주는 섹션
 * - 기본 Modal
 * - 기본 Dialog
 * - 확인 Dialog
 * - 커스텀 Dialog
 */
function SectionModal() {
  const [basicModalOpen, setBasicModalOpen] = useState(false);
  const [basicDialogOpen, setBasicDialogOpen] = useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [customDialogOpen, setCustomDialogOpen] = useState(false);

  const handleConfirm = () => {
    alert('확인되었습니다!');
    setConfirmDialogOpen(false);
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', sm: 400 },
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4
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
        Modal & Dialog
      </Typography>

      <Grid container spacing={3}>
        {/* 기본 Modal */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Button
            variant="contained"
            onClick={() => setBasicModalOpen(true)}
            fullWidth
          >
            기본 Modal
          </Button>
          <Modal
            open={basicModalOpen}
            onClose={() => setBasicModalOpen(false)}
            aria-labelledby="basic-modal-title"
          >
            <Box sx={modalStyle}>
              <Typography id="basic-modal-title" variant="h6" component="h2">
                기본 Modal
              </Typography>
              <Typography sx={{ mt: 2 }} color="text.secondary">
                Modal은 기본적인 오버레이 컴포넌트입니다.
                배경을 클릭하면 닫힙니다.
              </Typography>
              <Button
                onClick={() => setBasicModalOpen(false)}
                sx={{ mt: 3 }}
                variant="outlined"
              >
                닫기
              </Button>
            </Box>
          </Modal>
        </Grid>

        {/* 기본 Dialog */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setBasicDialogOpen(true)}
            fullWidth
          >
            기본 Dialog
          </Button>
          <Dialog
            open={basicDialogOpen}
            onClose={() => setBasicDialogOpen(false)}
            aria-labelledby="basic-dialog-title"
          >
            <DialogTitle id="basic-dialog-title">
              기본 Dialog
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Dialog는 사용자에게 정보를 표시하거나
                결정을 요청할 때 사용합니다.
                제목, 내용, 액션 버튼으로 구성됩니다.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setBasicDialogOpen(false)}>
                닫기
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>

        {/* 확인 Dialog */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Button
            variant="contained"
            color="error"
            onClick={() => setConfirmDialogOpen(true)}
            fullWidth
          >
            확인 Dialog
          </Button>
          <Dialog
            open={confirmDialogOpen}
            onClose={() => setConfirmDialogOpen(false)}
            aria-labelledby="confirm-dialog-title"
          >
            <DialogTitle id="confirm-dialog-title">
              삭제 확인
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                정말로 이 항목을 삭제하시겠습니까?
                이 작업은 되돌릴 수 없습니다.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setConfirmDialogOpen(false)}>
                취소
              </Button>
              <Button onClick={handleConfirm} color="error" variant="contained">
                삭제
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>

        {/* 커스텀 Dialog */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Button
            variant="outlined"
            onClick={() => setCustomDialogOpen(true)}
            fullWidth
          >
            커스텀 Dialog
          </Button>
          <Dialog
            open={customDialogOpen}
            onClose={() => setCustomDialogOpen(false)}
            maxWidth="sm"
            fullWidth
          >
            <DialogTitle
              sx={{
                m: 0,
                p: 2,
                bgcolor: 'primary.main',
                color: 'white'
              }}
            >
              커스텀 스타일 Dialog
              <IconButton
                aria-label="close"
                onClick={() => setCustomDialogOpen(false)}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: 'white'
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                DialogTitle, DialogContent, DialogActions를
                커스텀 스타일로 꾸밀 수 있습니다.
              </Typography>
              <Typography gutterBottom color="text.secondary">
                dividers 속성으로 구분선을 추가하고,
                maxWidth와 fullWidth로 크기를 조절합니다.
              </Typography>
            </DialogContent>
            <DialogActions sx={{ p: 2 }}>
              <Button
                onClick={() => setCustomDialogOpen(false)}
                variant="outlined"
              >
                취소
              </Button>
              <Button
                onClick={() => {
                  alert('저장되었습니다!');
                  setCustomDialogOpen(false);
                }}
                variant="contained"
              >
                저장
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>

      {/* 설명 */}
      <Box sx={{ mt: 3, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
        <Typography variant="body2" color="text.secondary">
          <strong>Modal</strong>: 기본 오버레이 컴포넌트, 자유로운 커스터마이징 가능
          <br />
          <strong>Dialog</strong>: 구조화된 모달 (Title, Content, Actions 포함)
        </Typography>
      </Box>
    </Box>
  );
}

export default SectionModal;
