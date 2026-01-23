import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Header from '../components/common/Header.jsx';
import { supabase } from '../utils/supabase.js';

/**
 * PostCreatePage 컴포넌트 - 게시물 작성 페이지
 *
 * Props:
 * @param {object} user - 로그인한 사용자 정보 [Required]
 * @param {function} onLogout - 로그아웃 핸들러 함수 [Required]
 *
 * Example usage:
 * <PostCreatePage user={user} onLogout={handleLogout} />
 */
function PostCreatePage({ user, onLogout }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!title.trim()) {
      setError('제목을 입력해주세요.');
      return;
    }

    if (!content.trim()) {
      setError('내용을 입력해주세요.');
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error: insertError } = await supabase
        .from('posts')
        .insert([{
          title: title.trim(),
          content: content.trim(),
          author_id: user.id,
          author_name: user.username,
          likes_count: 0,
          comments_count: 0,
        }])
        .select()
        .single();

      if (insertError) {
        console.error('Error creating post:', insertError);
        setError('게시물 작성 중 오류가 발생했습니다.');
        return;
      }

      navigate(`/posts/${data.id}`);
    } catch (err) {
      console.error('Error:', err);
      setError('게시물 작성 중 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box sx={{ width: '100%', minHeight: '100vh' }}>
      <Header user={user} onLogout={onLogout} hasBackButton title="글쓰기" />

      <Container maxWidth="md" sx={{ py: { xs: 2, md: 4 } }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, md: 4 },
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography
            variant="h5"
            component="h1"
            sx={{ fontWeight: 700, mb: 3 }}
          >
            새 게시물 작성
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="맛집 이름이나 제목을 입력하세요"
              sx={{ mb: 3 }}
              autoFocus
            />
            <TextField
              fullWidth
              label="내용"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="맛집 후기를 자유롭게 작성해주세요"
              multiline
              minRows={10}
              maxRows={20}
              sx={{ mb: 4 }}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: 2,
              }}
            >
              <Button
                variant="outlined"
                onClick={() => navigate(-1)}
                sx={{ minWidth: 100 }}
              >
                취소
              </Button>
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                sx={{ minWidth: 100 }}
              >
                {isSubmitting ? '업로드 중...' : '업로드'}
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default PostCreatePage;
