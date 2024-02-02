import HeroPage from "@/components/hero";
import MemberShipPage from "@/components/membership";
import NewReleaseProductsPage from "@/components/newreleaseproducts";
import PromoProductsPage from "@/components/promoproducts";

export default function Home() {
  return (
    <>
      <HeroPage />
      <PromoProductsPage />
      <MemberShipPage />
      <NewReleaseProductsPage />
    </>
  );
}
