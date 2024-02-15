import ItemsPage from "@/components/ItemsPage";
import { itemsPageStore } from "@/static_store/itemsPage_store";

export default function WomSwimPage() {
  return (
    <ItemsPage
      title="Купальники"
      base="womswimsuit"
      filtr={itemsPageStore[10].filtr}
      endpoint="womswimsuit"
      info={itemsPageStore[10].info}
    />
  );
}
