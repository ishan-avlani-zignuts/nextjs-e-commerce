"use client";

import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const items = useSelector((state) => state.cart);
  console.log(items);
  console.log(
    "Cart state:",
    useSelector((state) => state.cart)
  );
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="#">Avlani Mall</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/cart">Cart {items.length}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
