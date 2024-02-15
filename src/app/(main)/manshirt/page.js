import ItemsPage from "@/components/ItemsPage";
import { itemsPageStore } from "@/static_store/itemsPage_store";

export default function ManShirtPage() {
  return (
    <ItemsPage
      title="Чоловічі майки"
      base="manshirt"
      filtr={itemsPageStore[9].filtr}
      endpoint="manshirt"
      info={itemsPageStore[9].info}
    />
  );
}
