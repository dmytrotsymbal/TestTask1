import { Products } from 'Utils/ProductsArrey'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import './FavoriteItem.scss'

import { removeLike } from 'redux/likeReducer'
import { useAppDispatch } from 'redux/hooks'

type Props = {
    product: Products
}
const FavoriteItem = ({ product }: Props) => {
    const dispatch = useAppDispatch()

    return (
        <>
            <Card className="favoriteCard" variant="outlined">
                <CardContent>
                    <img
                        className="favoriteCard_img"
                        src={product.images}
                        alt={product.images}
                    />
                </CardContent>

                <Button
                    onClick={() => dispatch(removeLike(product.id))}
                    className="deteleFavoriteCard"
                >
                    <DeleteIcon />
                </Button>
            </Card>
        </>
    )
}
export default FavoriteItem
