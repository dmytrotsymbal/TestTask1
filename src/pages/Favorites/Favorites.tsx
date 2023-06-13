import FavoriteItem from './FavoriteItem/FavoriteItem'
import { Container, Grid } from '@mui/material'
import { useAppSelector } from 'redux/hooks'
import './Favorites.scss'
import { Products, getProductsObject } from 'Utils/ProductsArrey'

type ProductsObject = {
    [id: number]: Products
}

type Props = {
    productsObject?: {
        [id: number]: Products
    }
}
const Favorites = (props: Props) => {
    // console.log(Object.keys(productsInFav)) // це наш масив ключів у стрінг

    const productsInFavRedux = useAppSelector(
        (state) => state.productsLikeState
    )

    const productsArrey = useAppSelector((state) => state.products) // приймаэмо масив з сховища
    const productsObject: ProductsObject = getProductsObject(productsArrey)

    return (
        <div className="Favorites">
            <Container sx={{ padding: '20px 0' }}>
                <h2 style={{ textAlign: 'center' }}>Улюблене</h2>

                {Object.keys(productsInFavRedux).length === 0 ? (
                    <h3 style={{ textAlign: 'center' }}>
                        Ви нічого не додали в "Улюблене"
                    </h3>
                ) : (
                    <Grid container spacing={2}>
                        {Object.keys(productsInFavRedux).map((itemId) => (
                            <Grid item xs={12} sm={6} md={6} key={itemId}>
                                <FavoriteItem
                                    key={itemId}
                                    product={productsObject[parseInt(itemId)]}
                                />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
        </div>
    )
}
export default Favorites
