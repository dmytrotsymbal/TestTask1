import { Button, Card, Grid } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import FavoriteIcon from '@mui/icons-material/Favorite'
import './ProductList.scss'
import { addLike } from 'redux/likeReducer'

type Props = {}
const ProductList = (props: Props) => {
    const productsArrey = useAppSelector((state) => state.products) // приймаэмо масив з сховища

    const dispatch = useAppDispatch()

    return (
        <div className="ProductList">
            <h2 style={{ textAlign: 'center' }}>Всі рецети</h2>
            <Grid container spacing={2}>
                {productsArrey.map((product) => {
                    return (
                        <Grid item key={product.id} xs={12} sm={6} md={6}>
                            <Card className="ProductItem">
                                <img
                                    className="ProductItem_img"
                                    src={product.images}
                                    alt={product.title}
                                />

                                <Button
                                    className="ProductItem_button"
                                    onClick={() =>
                                        dispatch(addLike(product.id))
                                    }
                                >
                                    <FavoriteIcon />
                                </Button>
                                <h5 className="ProductItem_title">
                                    {product.title}
                                </h5>

                                <p className="ProductItem_description">
                                    {product.description}
                                </p>

                                <p className="ProductItem_extraDesc1">
                                    {product.extraDesc1}
                                </p>

                                <div className="ProductItem_ingridients">
                                    <ol>
                                        <li>{product.ingridients.name1}</li>
                                        <li>{product.ingridients.name2}</li>
                                        <li>{product.ingridients.name3}</li>
                                        <li>{product.ingridients.name4}</li>
                                        <li>{product.ingridients.name5}</li>
                                    </ol>
                                </div>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}
export default ProductList
