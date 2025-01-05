import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from 'react'

// Lazy load
const Home = lazy(() => import('../pages/HomePage'))
const Blog = lazy(() => import("../pages/BlogPage"))
const AboutUs = lazy(() => import('../pages/AboutUsPage'))
const ContactUs = lazy(() => import('../pages/ContactUsPage'))

// Routes Config
const routes = [
    { path: '/', element: <Home />, index: true },
    { path: '/blog', element: <Blog /> },
    { path: '/about_us', element: <AboutUs /> },
    { path: '/contact_us', element: <ContactUs /> }
]

const WebRoute = () => {
    return (
        <BrowserRouter>
            <Suspense>
                <Routes>
                    {routes.map(({ path, element, index }) => (
                        <Route key={path} path={path} element={element} index={index} />
                    ))}
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default WebRoute