import ItemsPage from "@/components/ItemsPage";
import { itemsPageStore } from "@/static_store/itemsPage_store";

export default function ManRobePage() {
  return (
    <ItemsPage
      title="Чоловічі халати"
      base="manrobe"
      filtr={itemsPageStore[8].filtr}
      endpoint="manrobe"
      info={itemsPageStore[8].info}
    />
  );
}
