import React from "react";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { caseStudies } from "@/data/caseStudies";
import ProductDetailView from "@/components/Product/ProductDetailView";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((prod) => ({
    slug: prod.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Get related case studies
  const relatedCaseStudies = caseStudies.filter((cs) => {
    const robotWords = cs.robotUsed.toLowerCase();
    const productWords = product.name.toLowerCase().replace("rov ", "").replace("ixar ", "");
    return robotWords.includes(productWords);
  });

  return (
    <ProductDetailView 
      product={product} 
      relatedCaseStudies={relatedCaseStudies} 
    />
  );
}
