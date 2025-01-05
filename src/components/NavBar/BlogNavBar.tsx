import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const BlogNavBar: React.FC = () => {
    return (
        <>
            <Navbar
                expand='md'
            >
                <Container>
                    <Navbar.Brand href="/">Blog Platform</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                            <Nav.Link href="/about_us">About us</Nav.Link>
                            <Nav.Link href="/contact_us">Contact us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </>
    )
}

export default BlogNavBar