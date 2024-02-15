import ItemsPage from "@/components/ItemsPage";
import { itemsPageStore } from "@/static_store/itemsPage_store";

export default function PijamaPage() {
  return (
    <ItemsPage
      title="Жіночі піжами"
      base="pijamas"
      filtr={itemsPageStore[2].filtr}
      endpoint="pijamas"
      info={itemsPageStore[2].info}
    />
  );
}
