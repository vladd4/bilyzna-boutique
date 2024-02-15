import ItemsPage from "@/components/ItemsPage";
import { itemsPageStore } from "@/static_store/itemsPage_store";

export default function ManPijamaPage() {
  return (
    <ItemsPage
      title="Чоловічі піжами"
      base="manpijamas"
      filtr={itemsPageStore[7].filtr}
      endpoint="manpijamas"
      info={itemsPageStore[7].info}
    />
  );
}
