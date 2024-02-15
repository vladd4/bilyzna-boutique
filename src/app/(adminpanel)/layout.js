import "@/styles/globals.css";
import "@/styles/admin.css";

export const metadata = {
  title: "Admin Panel | Bilyzna Boutque",

  metadataBase: "https://bilyzna-next.vercel.app/",
};

export default function AdminLayout({ children }) {
  return <section>{children}</section>;
}
