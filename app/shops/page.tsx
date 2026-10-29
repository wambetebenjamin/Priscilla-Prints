import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ShopDirectory } from "@/components/ShopDirectory";
import { Disclaimer } from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "Print shop directory",
  description: "Filter sample community print shop listings by city and service."
};

export default function ShopsPage() {
  return (
    <>
      <PageHero title="Find a local print shop" current="Shops" description="Filter by city and service, compare sample profiles, then confirm every production detail directly with the shop." />
      <div className="container disclaimer-wrap"><Disclaimer /></div>
      <ShopDirectory />
    </>
  );
}
