// components
import BlogArticle from "../Articles/BlogArticle"
import { Container } from "react-bootstrap"
import Loading from "../common/loading";
import BlogAlert from "../../components/common/blogAlert";

// hooks
import useAlertShow from "../../hooks/useAlertShow";
import { useFetchArticles } from '../../hooks/useFetchArticle';

// config
import { ARTICLES_API_URL } from "../../config";

const BlogMain = () => {

    const { data: article, loading, error } = useFetchArticles(ARTICLES_API_URL)
    const { show, handleClose } = useAlertShow({ isError: error })
    
    if (loading) return <Loading />;

    return (
        <main>
            <Container>
                <BlogAlert
                    title="Error"
                    text={error}
                    error={error}
                    show={show}
                    onHide={handleClose}
                    background="bg-danger"
                />
                <BlogArticle data={article || []} />
            </Container>
        </main>
    )
}

export default BlogMain