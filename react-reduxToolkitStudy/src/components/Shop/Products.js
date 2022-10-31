import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 3,
    title: 'my first book',
    description: '당신에게 아주 유익한 책',
  },
  {
    id: 'p2',
    price: 5,
    title: 'my second book',
    description: '당신에게 아주 아주 유익한 책',
  },
  {
    id: 'p3',
    price: 10,
    title: 'my third book',
    description: '당신에게 아주 아주 아주 유익한 책',
  },
  {
    id: 'p4',
    price: 15,
    title: 'my fourth book',
    description: '당신에게 아주 아주 아주 아주 유익한 책',
  },
  {
    id: 'p5',
    price: 20,
    title: 'my fifth book',
    description: '당신에게 아주 아주 아주 아주 아주 유익한 책',
  },
];

const Products = props => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {/*<ProductItem title="Test" price={6} description="This is a first product - amazing!" />*/}
        {/*dummy data 활용 맵으로 배열 출력*/}
        {DUMMY_PRODUCTS.map(product => (
          <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
