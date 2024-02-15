import ItemsPage from "@/components/ItemsPage";
import { itemsPageStore } from "@/static_store/itemsPage_store";

export default function CorrPage() {
  return (
    <ItemsPage
      title="Корегуюча білизна"
      base="corrunderwear"
      filtr={itemsPageStore[5].filtr}
      endpoint="corrunderwear"
      info={itemsPageStore[5].info}
    />
  );
}
