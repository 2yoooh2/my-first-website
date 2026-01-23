import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Header from '../components/common/Header.jsx';
import { supabase } from '../utils/supabase.js';

/**
 * PostDetailPage 컴포넌트 - 게시물 상세 페이지
 *
 * Props:
 * @param {object} user - 로그인한 사용자 정보 [Required]
 * @param {function} onLogout - 로그아웃 핸들러 함수 [Required]
 *
 * Example usage:
 * <PostDetailPage user={user} onLogout={handleLogout} />
 */
function PostDetailPage({ user, onLogout }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchPost();
    fetchComments();
    checkIfLiked();
  }, [id]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching post:', error);
        navigate('/posts');
        return;
      }

      setPost(data);
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('post_id', id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching comments:', error);
        return;
      }

      setComments(data || []);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  const checkIfLiked = async () => {
    try {
      const { data } = await supabase
        .from('likes')
        .select('id')
        .eq('post_id', id)
        .eq('user_id', user.id)
        .single();

      setIsLiked(!!data);
    } catch (err) {
      setIsLiked(false);
    }
  };

  const handleLike = async () => {
    try {
      if (isLiked) {
        await supabase
          .from('likes')
          .delete()
          .eq('post_id', id)
          .eq('user_id', user.id);

        await supabase
          .from('posts')
          .update({ likes_count: (post.likes_count || 1) - 1 })
          .eq('id', id);

        setPost((prev) => ({
          ...prev,
          likes_count: (prev.likes_count || 1) - 1,
        }));
        setIsLiked(false);
      } else {
        await supabase
          .from('likes')
          .insert([{ post_id: parseInt(id), user_id: user.id }]);

        await supabase
          .from('posts')
          .update({ likes_count: (post.likes_count || 0) + 1 })
          .eq('id', id);

        setPost((prev) => ({
          ...prev,
          likes_count: (prev.likes_count || 0) + 1,
        }));
        setIsLiked(true);
      }
    } catch (err) {
      console.error('Error toggling like:', err);
    }
  };

  const handleCommentSubmit = async () => {
    if (!newComment.trim()) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('comments')
        .insert([{
          content: newComment,
          author_id: user.id,
          author_name: user.username,
          post_id: parseInt(id),
        }]);

      if (error) {
        console.error('Error adding comment:', error);
        return;
      }

      await supabase
        .from('posts')
        .update({ comments_count: (post.comments_count || 0) + 1 })
        .eq('id', id);

      setPost((prev) => ({
        ...prev,
        comments_count: (prev.comments_count || 0) + 1,
      }));

      setNewComment('');
      fetchComments();
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (isLoading) {
    return (
      <Box sx={{ width: '100%', minHeight: '100vh' }}>
        <Header user={user} onLogout={onLogout} hasBackButton />
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography color="text.secondary">로딩 중...</Typography>
        </Box>
      </Box>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', pb: 4 }}>
      <Header user={user} onLogout={onLogout} hasBackButton />

      <Container maxWidth="md" sx={{ py: { xs: 2, md: 4 } }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, md: 4 },
            mb: 3,
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography variant="h5" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
            {post.title}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 3,
              pb: 2,
              borderBottom: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Typography variant="body2" color="text.secondary">
              {post.author_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {formatDate(post.created_at)}
            </Typography>
          </Box>

          <Typography
            variant="body1"
            sx={{
              whiteSpace: 'pre-wrap',
              lineHeight: 1.8,
              mb: 4,
              minHeight: 100,
            }}
          >
            {post.content}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              pt: 2,
              borderTop: '1px solid',
              borderColor: 'divider',
            }}
          >
            <IconButton
              onClick={handleLike}
              sx={{
                color: isLiked ? 'error.main' : 'text.secondary',
              }}
            >
              {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
            <Typography variant="body2" color="text.secondary">
              좋아요 {post.likes_count || 0}개
            </Typography>
          </Box>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, md: 4 },
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
            댓글 {comments.length}개
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
            <TextField
              fullWidth
              placeholder="댓글을 입력하세요"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              multiline
              minRows={2}
              maxRows={4}
            />
            <Button
              variant="contained"
              onClick={handleCommentSubmit}
              disabled={isSubmitting || !newComment.trim()}
              sx={{ alignSelf: 'flex-end', minWidth: 80 }}
            >
              등록
            </Button>
          </Box>

          {comments.length === 0 ? (
            <Typography
              color="text.secondary"
              sx={{ textAlign: 'center', py: 4 }}
            >
              아직 댓글이 없습니다. 첫 댓글을 남겨보세요!
            </Typography>
          ) : (
            <Box>
              {comments.map((comment, index) => (
                <Box key={comment.id}>
                  <Box sx={{ py: 2 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mb: 1,
                      }}
                    >
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {comment.author_name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {formatDate(comment.created_at)}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
                      {comment.content}
                    </Typography>
                  </Box>
                  {index < comments.length - 1 && <Divider />}
                </Box>
              ))}
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
}

export default PostDetailPage;
