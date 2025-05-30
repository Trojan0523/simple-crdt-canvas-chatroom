/*
 * @Author: BuXiongYu
 * @Date: 2025-04-11 18:44:43
 * @LastEditors: BuXiongYu
 * @LastEditTime: 2025-04-15 23:10:41
 * @Description: 请填写简介
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import { AuthProvider } from './contexts/AuthContext'
import { TokenProvider } from './contexts/TokenContext'
import { Toaster } from './components/ui/toaster'
import './index.css'
import './assets/ghibli-theme.css'

// 创建路由器实例
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <TokenProvider>
        <RouterProvider router={router} />
        <Toaster />
      </TokenProvider>
    </AuthProvider>
  </React.StrictMode>,
)
