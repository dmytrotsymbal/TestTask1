export type Products = {
    id: number
    title: string
    category: string
    description: string
    images: string
    extraDesc1: string
    extraDesc2: string
    extraDesc3: string
    ingridients: {
        name1: string
        name2: string
        name3: string
        name4: string
        name5: string
    }
}

const productsArrey: Products[] = [
    {
        id: 1,
        title: 'Спагетти карбонара со сливками',
        description:
            'Спагетти карбонара — хоть блюдо и итальянское, оно имеет хорошую популярность во всем мире, в том числе и у нас.',
        category: 'Meat',
        images: 'https://eda.ru/img/eda/c651x442/s1.eda.ru/StaticContent/Photos/110810174633/170313205758/p_O.png.webp',
        extraDesc1:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',

        extraDesc3:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',

        ingridients: {
            name1: 'Сливки',
            name2: 'lorem',
            name3: 'ipsum',
            name4: 'ing4',
            name5: 'Water',
        },
    },

    {
        id: 2,
        title: 'Лазанья классическая с мясом',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at.',
        category: 'Meat',
        images: 'https://eda.ru/img/eda/c651x442/s1.eda.ru/StaticContent/Photos/151031004547/151106181119/p_O.jpg.webp',
        extraDesc1:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',

        extraDesc3:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',

        ingridients: {
            name1: 'Сливки',
            name2: 'lorem',
            name3: 'ipsum',
            name4: 'ing4',
            name5: 'Water',
        },
    },

    {
        id: 3,
        title: 'Американский тыквенный пирог с корицей',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at.',
        category: ' Sugar',
        images: 'https://eda.ru/img/eda/c651x442/s1.eda.ru/StaticContent/Photos/110811142241/1703141701390/p_O.png.webp',
        extraDesc1:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',

        extraDesc3:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',

        ingridients: {
            name1: 'Сливки',
            name2: 'lorem',
            name3: 'ipsum',
            name4: 'ing4',
            name5: 'Water',
        },
    },

    {
        id: 4,
        title: 'Пирог «Зебра»',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at.',
        category: ' Sugar',
        images: 'https://eda.ru/img/eda/c651x442/s1.eda.ru/StaticContent/Photos/110811170903/1703141716301/p_O.png.webp',
        extraDesc1:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',

        extraDesc3:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',

        ingridients: {
            name1: 'Сливки',
            name2: 'lorem',
            name3: 'ipsum',
            name4: 'ing4',
            name5: 'Water',
        },
    },

    {
        id: 5,
        title: 'Творожный кекс с яйцами',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at.',
        category: ' Sugar',
        images: 'https://eda.ru/img/eda/c651x442/s1.eda.ru/StaticContent/Photos/110810174633/170313204511/p_O.png.webp',
        extraDesc1:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',

        extraDesc3:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',

        ingridients: {
            name1: 'Сливки',
            name2: 'lorem',
            name3: 'ipsum',
            name4: 'ing4',
            name5: 'Water',
        },
    },

    {
        id: 6,
        title: 'Американские блины',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at.',
        category: ' Sugar',
        images: 'https://eda.ru/img/eda/c930x622/s1.eda.ru/StaticContent/Photos/120131085624/171210104827/p_O.jpg.webp',
        extraDesc1:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',

        extraDesc3:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',

        ingridients: {
            name1: 'Сливки',
            name2: 'lorem',
            name3: 'ipsum',
            name4: 'ing4',
            name5: 'Water',
        },
    },

    {
        id: 7,
        title: 'Маффины с голубикой и мускатным орехом',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at.',
        category: ' Sugar',
        images: 'https://eda.ru/img/eda/c651x442/s1.eda.ru/StaticContent/Photos/110811170903/170314185223/p_O.png.webp',
        extraDesc1:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',

        extraDesc3:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',

        ingridients: {
            name1: 'Сливки',
            name2: 'lorem',
            name3: 'ipsum',
            name4: 'ing4',
            name5: 'Water',
        },
    },

    {
        id: 8,
        title: 'Ароматная свинина в духовке',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at.',
        category: 'Meat',
        images: 'https://eda.ru/img/eda/c651x442/s1.eda.ru/StaticContent/Photos/150206102918/210521225754/p_O.jpg.webp',
        extraDesc1:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',

        extraDesc3:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',

        ingridients: {
            name1: 'Сливки',
            name2: 'lorem',
            name3: 'ipsum',
            name4: 'ing4',
            name5: 'Water',
        },
    },

    {
        id: 9,
        title: 'Свинина с тыквой',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at.',
        category: 'Meat',
        images: 'https://eda.ru/img/eda/c930x622/s1.eda.ru/StaticContent/Photos/120131083524/130910104047/p_O.jpg.webp',
        extraDesc1:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',

        extraDesc3:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',

        ingridients: {
            name1: 'Сливки',
            name2: 'lorem',
            name3: 'ipsum',
            name4: 'ing4',
            name5: 'Water',
        },
    },

    {
        id: 10,
        title: 'Рыба с картошкой в рукаве',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at.',
        category: 'Fish',
        images: 'https://i.obozrevatel.com/food/recipemain/2019/6/13/75bed1e3ad910a2c078faac6f6122cb5.jpg?size=636x424',
        extraDesc1:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',

        extraDesc3:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',

        ingridients: {
            name1: 'Сливки',
            name2: 'lorem',
            name3: 'ipsum',
            name4: 'ing4',
            name5: 'Water',
        },
    },

    {
        id: 11,
        title: 'Рыба в горшочках',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at.',
        category: 'Fish',
        images: 'https://i.obozrevatel.com/food/recipemain/2019/6/13/4390715.jpg?size=636x424',
        extraDesc1:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',

        extraDesc3:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',

        ingridients: {
            name1: 'Сливки',
            name2: 'lorem',
            name3: 'ipsum',
            name4: 'ing4',
            name5: 'Water',
        },
    },

    {
        id: 12,
        title: 'Жареная рыба в кляре',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at.',
        category: 'Fish',
        images: 'https://i.obozrevatel.com/food/recipemain/2019/3/21/screenshot75.jpg?size=636x424',
        extraDesc1:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',

        extraDesc3:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',

        ingridients: {
            name1: 'Сливки',
            name2: 'lorem',
            name3: 'ipsum',
            name4: 'ing4',
            name5: 'Water',
        },
    },

    {
        id: 13,
        title: 'Азу по-татарски',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at.',
        category: 'Meat',
        images: 'https://eda.ru/img/eda/c651x442/s1.eda.ru/StaticContent/Photos/110812141030/170314190144/p_O.png.webp',
        extraDesc1:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',

        extraDesc3:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',

        ingridients: {
            name1: 'Сливки',
            name2: 'lorem',
            name3: 'ipsum',
            name4: 'ing4',
            name5: 'Water',
        },
    },

    {
        id: 14,
        title: 'Курица «Пикассо»',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at.',
        category: 'Meat',
        images: 'https://eda.ru/img/eda/c651x442/s1.eda.ru/StaticContent/Photos/110812141030/170314193620/p_O.png.webp',
        extraDesc1:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',

        extraDesc3:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',

        ingridients: {
            name1: 'Сливки',
            name2: 'lorem',
            name3: 'ipsum',
            name4: 'ing4',
            name5: 'Water',
        },
    },
]

export const getProductsObject = (array: Products[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )

export default productsArrey

// const productsJson = JSON.stringify(productsArrey)
// console.log(productsJson)
