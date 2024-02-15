import ItemsPage from "@/components/ItemsPage";
import { itemsPageStore } from "@/static_store/itemsPage_store";

export default function ManSwimPage() {
  return (
    <ItemsPage
      title="Пляжні шорти"
      base="manswimsuit"
      filtr={itemsPageStore[11].filtr}
      endpoint="manswimsuit"
      info={itemsPageStore[11].info}
    />
  );
}
