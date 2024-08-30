import ReactDOM from 'react-dom/client'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { BrightProvider } from 'bsdweb'
import './index.css'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { StrictMode } from 'react'

// Create a new router instance
const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <BrightProvider>
        <RouterProvider router={router} />
      </BrightProvider>
    </StrictMode>
  )
}
