import MainCardLayout from "../components/mainCardLayout/MainCardLayout";
import MainCard from "../components/mainCard/MainCard";
import Carousel from "../components/carousel/Carousel";
import ColorButtonBar from "../components/colorButtonBar/ColorButtonBar";
import Description from "../components/description/Description";
import ProviderSelection from "../components/providerSelection/ProviderSelection";
import AddToCartBtn from "../components/addToCartBtn/AddToCartBtn";
import { useEffect, useState } from "react";
import { getProviders } from "../client/getProviders";
import NotificationDialog from "../components/notificationDialog/NotificationDialog";
import Cart from "../components/cart/Cart";
import product from "../../../assets/products.json";

const CardModuleContainer = () => {
  const [providers, setProviders] = useState([]);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    const fetchAndFilterProviders = async () => {
      const fetchedProviders = await getProviders();
      const filteredProviders = fetchedProviders.filter(
        (item) => item.status === "active"
      );
      setProviders(filteredProviders);
    };

    fetchAndFilterProviders();
  }, []);

  const addProductCount = () => {
    setProductCount(productCount + 1);
  };

  return (
    <>
      <MainCardLayout>
        <MainCard>
          <Carousel />
          <Cart productCount={productCount} />
          <ColorButtonBar />
          <Description
            name={product[0].title}
            description={product[0].description}
            price={product[0].price}
          />
          <ProviderSelection providers={providers} />
          <AddToCartBtn addProductCount={addProductCount} />
        </MainCard>
      </MainCardLayout>
      <NotificationDialog isOpen={false} />
    </>
  );
};

export default CardModuleContainer;
