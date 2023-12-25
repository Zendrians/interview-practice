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

  return (
    <>
      <MainCardLayout>
        <MainCard>
          <Carousel />
          <ColorButtonBar />
          <Description />
          <ProviderSelection providers={providers} />
          <AddToCartBtn />
        </MainCard>
      </MainCardLayout>
      <NotificationDialog isOpen={false} />
    </>
  );
};

export default CardModuleContainer;
