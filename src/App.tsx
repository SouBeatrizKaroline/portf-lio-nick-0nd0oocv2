import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { LanguageProvider } from '@/hooks/use-language'
import { AchievementProvider } from '@/hooks/use-achievements'
import { SchemaOrg } from '@/components/SchemaOrg'
import Layout from './components/Layout'

const Index = lazy(() => import('./pages/Index'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const GamesPage = lazy(() => import('./pages/GamesPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#080808]">
    <div className="font-mono text-xs text-purple-400 animate-pulse">LOADING...</div>
  </div>
)

const App = () => (
  <BrowserRouter>
    <TooltipProvider>
      <LanguageProvider>
        <AchievementProvider>
          <SchemaOrg />
          <Toaster />
          <Sonner />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Index />} />
                <Route path="/project/:slug" element={<ProjectDetail />} />
                <Route path="/games" element={<GamesPage />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AchievementProvider>
      </LanguageProvider>
    </TooltipProvider>
  </BrowserRouter>
)

export default App
