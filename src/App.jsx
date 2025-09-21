import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Categories from './components/sections/Categories';
import FeaturedProducts from './components/sections/FeaturedProducts';
import SpecialOffers from './components/sections/SpecialOffers';
import CustomerReviews from './components/sections/CustomerReviews';

function App() {
  return (
    <Layout>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <SpecialOffers />
      <CustomerReviews />
    </Layout>
  );
}

export default App;
