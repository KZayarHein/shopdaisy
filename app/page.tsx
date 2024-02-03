import FeaturePage from "@/components/feature";
import HeroPage from "@/components/hero";
import MemberShipPage from "@/components/membership";
import NewReleaseProductsPage from "@/components/newreleaseproducts";
import PromoProductsPage from "@/components/promoproducts";
import ShowcasePage from "@/components/showcase";

export default function Home() {
  return (
    <>
      <HeroPage />
      <PromoProductsPage />
      <MemberShipPage />
      <NewReleaseProductsPage />
      <ShowcasePage />
      <FeaturePage />
    </>
  );
}
