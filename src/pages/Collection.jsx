import CategoryTabs from "../components/collection/CategoryTabs";
import CollectionCTA from "../components/collection/CollectionCTA";
import CollectionHero from "../components/collection/CollectionHero";
import CollectionToolbar from "../components/collection/CollectionToolbar";
import ProductGrid from "../components/collection/ProductGrid";

import useCollection from "../hooks/useCollection";


const Collection = () => {


  const {
    totalProducts
  } = useCollection();



  return (

    <main className="overflow-hidden bg-white">


      <CollectionHero
        totalProducts={totalProducts}
      />


      <CategoryTabs />


      <CollectionToolbar />


      <ProductGrid />


      <CollectionCTA />


    </main>

  );

};


export default Collection;