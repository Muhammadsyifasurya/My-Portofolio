import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Muhammad Syifa Surya Saputra Portfolio",
    short_name: "Syifa Portfolio",
    description: "Frontend Developer Portfolio",
    start_url: "/",
    display: "standalone",
    background_color: "#0a192f",
    theme_color: "#64ffda",
    icons: [
      {
        src: "/assets/logo1.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
