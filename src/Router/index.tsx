import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from 'react'
import Loading from "../components/common/loading";

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
    { path: '/contact_us', element: <ContactUs /> },
    { path: "*", element: <Home /> }
]

const WebRoute = () => {
    return (
        <BrowserRouter basename="/blog-demo">
            <Suspense fallback={<Loading />}>
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