import { Container, Grid } from '@mui/material'
import { Products, getProductsObject } from 'Utils/ProductsArrey'
import { useParams } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'

type Props = {}

type ProductsObject = {
    [id: number]: Products
}

const UniquePage = (props: Props) => {
    const { id } = useParams()

    const productsArrey = useAppSelector((state) => state.products) // приймаэмо масив з сховища
    const productsObject: ProductsObject = getProductsObject(productsArrey)

    return (
        <div className="UniquePage">
            <Container sx={{ padding: '20px 0' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <h3 className="UniquePage__title">
                            {productsObject[parseInt(id!)].title}
                        </h3>
                        <p className="UniquePage__description">
                            {productsObject[parseInt(id!)].description}
                        </p>
                        <h6 className="UniquePage__category">
                            Категорія: {productsObject[parseInt(id!)].category}
                        </h6>

                        <div className="cookingBlock">
                            <ol>
                                <li>
                                    <div className="cookingBlock__steps">
                                        {
                                            productsObject[parseInt(id!)]
                                                .ingridients.name1
                                        }
                                        <p>
                                            {
                                                productsObject[parseInt(id!)]
                                                    .extraDesc1
                                            }
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="cookingBlock__steps">
                                        {
                                            productsObject[parseInt(id!)]
                                                .ingridients.name2
                                        }
                                        <p>
                                            {
                                                productsObject[parseInt(id!)]
                                                    .extraDesc2
                                            }
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="cookingBlock__steps">
                                        {
                                            productsObject[parseInt(id!)]
                                                .ingridients.name3
                                        }
                                        <p>
                                            Lorem ipsum dolor sit, amet
                                            consectetur adipisicing elit.
                                            Architecto obcaecati pariatur ipsum
                                            alias aspernatur aut magnam. Sit
                                            fugit totam cumque debitis hic amet
                                            minima officiis, voluptatem facilis
                                            earum ullam laboriosam!
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="cookingBlock__steps">
                                        {
                                            productsObject[parseInt(id!)]
                                                .ingridients.name4
                                        }
                                        <p>
                                            {
                                                productsObject[parseInt(id!)]
                                                    .extraDesc3
                                            }
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="cookingBlock__steps">
                                        {
                                            productsObject[parseInt(id!)]
                                                .ingridients.name5
                                        }
                                        <p>
                                            {
                                                productsObject[parseInt(id!)]
                                                    .extraDesc1
                                            }
                                        </p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} key={id}>
                        <img
                            className="UniquePage__image"
                            src={productsObject[parseInt(id!)].images}
                            alt="UniquePage__image"
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default UniquePage
