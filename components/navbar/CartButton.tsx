import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Button } from "../ui/button";
import Link from "next/link";
// temp
const numItemsInCart = 9;

export default function CartButton() {
    return (
        <Button
            asChild
            variant="outline"
            size="icon"
            className="flex justify-center items-center relative"
        >
            <Link href="/cart">
                <FiShoppingCart />
                <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
                    {numItemsInCart}
                </span>
            </Link>
        </Button>
    );
}
