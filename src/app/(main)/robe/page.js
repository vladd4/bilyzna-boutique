import ItemsPage from "@/components/ItemsPage";
import { itemsPageStore } from "@/static_store/itemsPage_store";

export default function RobePage() {
  return (
    <ItemsPage
      title="Жіночі халати"
      base="robe"
      filtr={itemsPageStore[3].filtr}
      endpoint="robe"
      info={itemsPageStore[3].info}
    />
  );
}
