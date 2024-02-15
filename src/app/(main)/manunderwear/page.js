import ItemsPage from "@/components/ItemsPage";
import { itemsPageStore } from "@/static_store/itemsPage_store";

export default function ManPage() {
  return (
    <ItemsPage
      title="Чоловічі труси"
      base="manunderwear"
      filtr={itemsPageStore[6].filtr}
      endpoint="manunderwear"
      info={itemsPageStore[6].info}
    />
  );
}
