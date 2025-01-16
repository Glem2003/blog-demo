import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';

const BlogNavBar: React.FC = () => {
    return (
        <>
            <Navbar
                expand='md'
            >
                <Container>
                    <Navbar.Brand><Link to={'/'} className="link-dark text-decoration-none">Blog Platform</Link></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link ><Link to={'/'} className="link-secondary text-decoration-none">Home</Link></Nav.Link>
                            <Nav.Link><Link to={'/blog'} className="link-secondary text-decoration-none">Blog</Link></Nav.Link>
                            <Nav.Link><Link to={'/about_us'} className="link-secondary text-decoration-none">About us</Link></Nav.Link>
                            <Nav.Link><Link to={'/contact_us'} className="link-secondary text-decoration-none">Contact us</Link></Nav.Link>
                            <Nav.Link><Link to={'/backstage'} className="link-secondary text-decoration-none">Backstage</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default BlogNavBar