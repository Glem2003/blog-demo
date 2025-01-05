// components
import BlogArticle from "../Articles/BlogArticle"
import { Container } from "react-bootstrap"

// hooks
import useFetchArticle from '../../hooks/useFetchArticle';

const BlogMain = () => {

    const { articles, loading, error } = useFetchArticle()

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <main>
            <Container>
                <BlogArticle Data={articles} />
            </Container>
        </main>
    )
}

export default BlogMain