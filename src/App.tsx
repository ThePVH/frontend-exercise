import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PageLayout from './layouts/PageLayout'

import Homepage from './pages/Homepage'
import ArticleDetail from './pages/ArticleDetail'
import About from './pages/About'

import './styles.css'
import LoginPage from './pages/LoginPage'

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Homepage />} />
          <Route path="article/:id" element={<ArticleDetail />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes>
    </div>
  )
}
