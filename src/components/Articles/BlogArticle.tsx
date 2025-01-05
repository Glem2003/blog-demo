import DOMPurify from "dompurify";
import { Card } from "react-bootstrap"

//type
import { BlogArticleProps } from '../../types/BlogArticleProps';

const BlogArticle: React.FC<BlogArticleProps> = (props) => {

    const { Data } = props

    return (
        <>
            {
                Data && Data.map(item => {

                    const {
                        id,
                        type,
                        title,
                        content,
                        created_at: createdAt,
                        updated_at: updatedAt
                    } = item
                    const sanitizedContent = DOMPurify.sanitize(content)

                    return (
                        <Card className="mb-4" key={id}>
                            <Card.Header>{type}</Card.Header>
                            <Card.Body>
                                <Card.Title className="BlogArticle__title">{title}</Card.Title>
                                <div dangerouslySetInnerHTML={{ __html: sanitizedContent }}></div>
                            </Card.Body>
                            <Card.Footer>
                                Created: {new Date(createdAt).toString().split('GMT')[0]}<br />
                                Updated: {new Date(updatedAt).toString().split('GMT')[0]}
                            </Card.Footer>
                        </Card>
                    )
                })
            }
        </>
    )
}

export default BlogArticle