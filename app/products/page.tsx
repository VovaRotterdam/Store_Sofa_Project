import ProductsContainer from "@/components/products/ProductsContainer";
import React from "react";

interface SearchPageProps {
    searchParams: Promise<{ layout?: string; search?: string }>; // ✅ searchParams as a Promise
}

async function ProductsPage({ searchParams }: SearchPageProps) {
    const { layout, search } = await searchParams;
    const layoutL = layout || "grid";
    const searchS = search || "";

    return <ProductsContainer layout={layoutL} search={searchS} />;
}

export default ProductsPage;
