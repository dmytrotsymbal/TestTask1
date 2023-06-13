import { Button, Container, Grid } from '@mui/material'
import { Products, getProductsObject } from 'Utils/ProductsArrey'
import { useParams } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'
import './UniquePage.scss'
import { useState } from 'react'

type Props = {}

type ProductsObject = {
    [id: number]: Products
}

type CheckboxState = {
    checkbox1: boolean
    checkbox2: boolean
    checkbox3: boolean
    checkbox4: boolean
    checkbox5: boolean
}

const UniquePage = (props: Props) => {
    const { id } = useParams<{ id: string }>()

    const [checkboxes, setCheckboxes] = useState<CheckboxState>({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
    })

    const handleButtonClick = () => {
        setCheckboxes({
            checkbox1: false,
            checkbox2: false,
            checkbox3: false,
            checkbox4: false,
            checkbox5: false,
        })
    }

    const handleCheckboxChange = (checkboxName: keyof CheckboxState) => {
        setCheckboxes((prevCheckboxes) => ({
            ...prevCheckboxes,
            [checkboxName]: !prevCheckboxes[checkboxName],
        }))
    }

    const productsArrey = useAppSelector((state) => state.products) // приймаэмо масив з сховища
    const productsObject: ProductsObject = getProductsObject(productsArrey)

    const product = productsObject[parseInt(id!)]

    return (
        <div className="UniquePage">
            <Container sx={{ padding: '20px 0' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <h3 className="UniquePage__title">{product.title}</h3>
                        <p className="UniquePage__description">
                            {product.description}
                        </p>
                        <h6 className="UniquePage__category">
                            Категорія: {product.category}
                        </h6>

                        <div className="cookingBlock">
                            <h3 className="cookingBlock__title">
                                Процес готування:
                            </h3>
                            <ol>
                                <li>
                                    <div className="cookingBlock__steps">
                                        <input
                                            type="checkbox"
                                            checked={checkboxes.checkbox1}
                                            onChange={() =>
                                                handleCheckboxChange(
                                                    'checkbox1'
                                                )
                                            }
                                        />
                                        {product.ingridients.name1}
                                        <p>{product.extraDesc1}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="cookingBlock__steps">
                                        <input
                                            type="checkbox"
                                            checked={checkboxes.checkbox2}
                                            onChange={() =>
                                                handleCheckboxChange(
                                                    'checkbox2'
                                                )
                                            }
                                        />
                                        {product.ingridients.name2}
                                        <p>{product.extraDesc2}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="cookingBlock__steps">
                                        <input
                                            type="checkbox"
                                            checked={checkboxes.checkbox3}
                                            onChange={() =>
                                                handleCheckboxChange(
                                                    'checkbox3'
                                                )
                                            }
                                        />
                                        {product.ingridients.name3}
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
                                        <input
                                            type="checkbox"
                                            checked={checkboxes.checkbox4}
                                            onChange={() =>
                                                handleCheckboxChange(
                                                    'checkbox4'
                                                )
                                            }
                                        />
                                        {product.ingridients.name4}
                                        <p>{product.extraDesc3}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="cookingBlock__steps">
                                        <input
                                            type="checkbox"
                                            checked={checkboxes.checkbox5}
                                            onChange={() =>
                                                handleCheckboxChange(
                                                    'checkbox5'
                                                )
                                            }
                                        />
                                        {product.ingridients.name5}
                                        <p>{product.extraDesc1}</p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} key={id}>
                        <img
                            className="UniquePage__image"
                            src={product.images}
                            alt="UniquePage__image"
                        />

                        <div className="buttonsBlock">
                            <Button
                                onClick={handleButtonClick}
                                className="buttonsBlock__button"
                                variant="outlined"
                            >
                                Reset
                            </Button>
                            <Button
                                className="buttonsBlock__button"
                                variant="outlined"
                            >
                                Stop cooking
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default UniquePage
