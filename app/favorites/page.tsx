import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";
import { fetchUserFavorite } from "@/utils/actions";
import React from "react";

export default async function FavoritesPage() {
    const favorites = await fetchUserFavorite();
    if (favorites.length === 0)
        return <SectionTitle text="You have no favorites yet" />;
    return (
        <div>
            <SectionTitle text="favorites" />
            <ProductsGrid
                products={favorites.map((favorite) => favorite.product)}
            />
        </div>
    );
}
