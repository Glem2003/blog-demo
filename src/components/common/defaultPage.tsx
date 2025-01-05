import BlogNavBar from "../NavBar/BlogNavBar"
import BlogFooter from "../Footer/BlogFooter"

//type
import { defaultPageProps } from "../../types/DefaultPageProps"

const DefaultPage: React.FC<defaultPageProps> = (props) => {

    const { children } = props

    return (
        <>
            <BlogNavBar />
            {children}
            <BlogFooter />
        </>
    )
}

export default DefaultPage