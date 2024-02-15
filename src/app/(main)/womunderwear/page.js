import ItemsPage from "@/components/ItemsPage";
import { itemsPageStore } from "@/static_store/itemsPage_store";

export default function WomunderPage() {
  return (
    <ItemsPage
      title="Трусики"
      base="womunderwear"
      filtr={itemsPageStore[1].filtr}
      endpoint="womunderwear"
      info={itemsPageStore[1].info}
    />
  );
}
