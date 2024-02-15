import Logo from "@/../public/logo.png";
import Image from "next/image";

export default function Loader() {
  return (
    <div className="loader">
      <Image alt="Bilyzna Boutique" src={Logo} width={1255} height={1300} />
    </div>
  );
}
