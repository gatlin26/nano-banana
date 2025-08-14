import Hero from "@/components/hero";
import ImageGenerator from "@/components/image-generator";
import Features from "@/components/features";

export default function Home() {
  return (
    <div>
      <Hero />
      <div id="generator">
        <ImageGenerator />
      </div>
      <Features />
    </div>
  );
}
