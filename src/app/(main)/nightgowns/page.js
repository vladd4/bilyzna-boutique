import ItemsPage from "@/components/ItemsPage";
import { itemsPageStore } from "@/static_store/itemsPage_store";

export default function NightPage() {
  return (
    <ItemsPage
      title="Нічні сорочки"
      base="nightgowns"
      filtr={itemsPageStore[4].filtr}
      endpoint="nightgowns"
      info={itemsPageStore[4].info}
    />
  );
}
