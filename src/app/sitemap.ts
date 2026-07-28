import { MetadataRoute } from "next";
import { products } from "@/data/products";
import { industries } from "@/data/industries";
import { caseStudies } from "@/data/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ixarrobotics.com";

  const productUrls = products.map((prod) => ({
    url: `${baseUrl}/products/${prod.slug}`,
    lastModified: new Date(),
  }));

  const industryUrls = industries.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: new Date(),
  }));

  const caseStudyUrls = caseStudies.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/company/about`, lastModified: new Date() },
    { url: `${baseUrl}/company/careers`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    ...productUrls,
    ...industryUrls,
    ...caseStudyUrls,
  ];
}
