import ProductsContainer from "@/components/products/ProductsContainer";
import React from "react";

async function ProductsPage({
    searchParams,
}: {
    searchParams: { layout?: string; search?: string };
}) {
    const { layout, search } = await searchParams;
    const layoutL = layout || "grid";
    const searchS = search || "";

    return <ProductsContainer layout={layoutL} search={searchS} />;
}

export default ProductsPage;
