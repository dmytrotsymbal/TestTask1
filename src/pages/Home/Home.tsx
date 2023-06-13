import { Container } from '@mui/material'
import ProductList from 'Components/ProductList/ProductList'

type Props = {}
const Home = (props: Props) => {
    return (
        <div className="Home">
            <Container sx={{ padding: '20px 0' }}>
                <ProductList />
            </Container>
        </div>
    )
}
export default Home
