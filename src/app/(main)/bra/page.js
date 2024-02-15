import ItemsPage from "@/components/ItemsPage";
import { itemsPageStore } from "@/static_store/itemsPage_store";

export default function BraPage() {
  return (
    <ItemsPage
      title="Бюстгальтери"
      base="bra"
      filtr={itemsPageStore[0].filtr}
      endpoint="bra"
      info={itemsPageStore[0].info}
    />
  );
}
