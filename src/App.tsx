import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { LanguageProvider } from '@/hooks/use-language'
import { AchievementProvider } from '@/hooks/use-achievements'

import Index from './pages/Index'
import ProjectDetail from './pages/ProjectDetail'
import GamesPage from './pages/GamesPage'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'

const App = () => (
  <BrowserRouter>
    <TooltipProvider>
      <LanguageProvider>
        <AchievementProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/project/:slug" element={<ProjectDetail />} />
              <Route path="/games" element={<GamesPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AchievementProvider>
      </LanguageProvider>
    </TooltipProvider>
  </BrowserRouter>
)

export default App
