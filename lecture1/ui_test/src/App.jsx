import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { SectionButton, SectionInput, SectionNavigation, SectionCard, SectionRadio, SectionDragDrop, SectionDropdown, SectionSlider, SectionScroll, SectionSidebar, SectionHover, SectionAnimation, SectionModal, SectionMenu, SectionCheckbox, SectionSwiper } from './components/sections';

/**
 * App 컴포넌트
 *
 * 16개 UI 섹션을 순차적으로 추가할 수 있는 메인 레이아웃
 * 각 섹션은 components/sections 폴더에서 import하여 추가
 */
function App() {
  return (
    <Box sx={{
      width: '100%',
      minHeight: '100vh',
      bgcolor: 'background.default'
    }}>
      <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
        {/* 페이지 헤더 */}
        <Box sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center' }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.75rem', md: '2.5rem' }
            }}
          >
            UI Components Gallery
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 1 }}
          >
            16개 UI 요소 컬렉션
          </Typography>
        </Box>

        {/* 섹션 컨테이너 - 아래에 섹션 컴포넌트를 순차적으로 추가 */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 4, md: 6 }
        }}>
          {/* Section 1: Button */}
          <SectionButton />

          {/* Section 2: Input */}
          <SectionInput />

          {/* Section 3: Navigation */}
          <SectionNavigation />

          {/* Section 4: Card */}
          <SectionCard />

          {/* Section 5: Radio */}
          <SectionRadio />

          {/* Section 6: Drag & Drop */}
          <SectionDragDrop />

          {/* Section 7: Dropdown */}
          <SectionDropdown />

          {/* Section 8: Slider */}
          <SectionSlider />

          {/* Section 9: Scroll */}
          <SectionScroll />

          {/* Section 10: Sidebar */}
          <SectionSidebar />

          {/* Section 11: Hover */}
          <SectionHover />

          {/* Section 12: Animation */}
          <SectionAnimation />

          {/* Section 13: Modal */}
          <SectionModal />

          {/* Section 14: Menu */}
          <SectionMenu />

          {/* Section 15: Checkbox */}
          <SectionCheckbox />

          {/* Section 16: Swiper */}
          <SectionSwiper />
        </Box>
      </Container>
    </Box>
  );
}

export default App;
