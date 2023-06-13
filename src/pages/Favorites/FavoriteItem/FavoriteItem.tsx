import { Products } from 'Utils/ProductsArrey'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import { removeLike } from 'redux/likeReducer'
import { useAppDispatch } from 'redux/hooks'
import './FavoriteItem.scss'
import BasicRating from 'Components/Rating/Rating'
import { Link } from 'react-router-dom'

type Props = {
    product: Products
}
const FavoriteItem = ({ product }: Props) => {
    const dispatch = useAppDispatch()

    return (
        <>
            <Card id="favoriteCard" variant="outlined">
                <CardContent>
                    <img
                        className="favoriteCard_img"
                        src={product.images}
                        alt={product.images}
                    />

                    <h5 className="favoriteCard_title">{product.title}</h5>

                    <h6 className="favoriteCard_category">
                        Категорія: <span>{product.category}</span>{' '}
                    </h6>

                    <p className="favoriteCard_description">
                        {product.description}
                    </p>

                    <p className="favoriteCard_extraDesc1">
                        {product.extraDesc1}
                    </p>

                    <div className="favoriteCard_ingridients">
                        <ol>
                            <li>{product.ingridients.name1}</li>
                            <li>{product.ingridients.name2}</li>
                            <li>{product.ingridients.name3}</li>
                            <li>{product.ingridients.name4}</li>
                            <li>{product.ingridients.name5}</li>
                        </ol>
                    </div>

                    <div className="favoriteCard_rating">
                        <BasicRating />
                    </div>
                </CardContent>

                <Button
                    onClick={() => dispatch(removeLike(product.id))}
                    className="favoriteCard_button"
                >
                    <DeleteIcon />
                </Button>

                <Link to={`/unique/${product.id}`}>
                    <Button
                        className="favoriteCard_StartCooking_button"
                        variant="contained"
                    >
                        Start Cooking
                    </Button>
                </Link>
            </Card>
        </>
    )
}
export default FavoriteItem
