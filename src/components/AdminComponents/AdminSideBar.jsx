"use client";

import { setTitle, setType } from "@/redux/slices/adminSlice";
import { links } from "@/static_store/adminpanel_store";
import Link from "next/link";
import { useDispatch } from "react-redux";

export default function AdminSideBar() {
  const dispatch = useDispatch();
  const handleClick = (title, type) => {
    dispatch(setType(type));
    dispatch(setTitle(title));
  };
  return (
    <aside className="admin-aside">
      <h1>Admin Panel</h1>
      <article className="admin-links">
        {links.map((link) => {
          return (
            <p onClick={() => handleClick(link.title, link.to)} key={link.to}>
              {link.title}
            </p>
          );
        })}
      </article>
      <Link href="/">На головну</Link>
    </aside>
  );
}
