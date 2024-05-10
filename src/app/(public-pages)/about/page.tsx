import { Brand } from "@/app/components/brand/Brand";
import { MainMenu } from "@/app/components/main-menu/MainMenu";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Handcrafted Haven",
  description: "SEO Title",
  keywords: ["About Page"],
};

export default function AboutPage() {
  return (
    <>
      <Brand />
      <MainMenu orientation="horizontal" />

      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-50 text-gray-700">
        <h1 className="text-5xl text-center mb-10 font-bold">
          About Handcrafted Haven
        </h1>

        <div className="max-w-4xl space-y-5">
          <p className="text-lg text-center">
            The Handcrafted Haven project is an innovative web application
            designed to serve as a virtual marketplace where artisans can
            display and sell their unique handcrafted products. This platform
            not only helps artisans reach a broader audience but also allows
            consumers to access unique, handmade products that are not available
            in mainstream markets, thereby supporting local talent and
            encouraging more sustainable consumption patterns.
          </p>

          <h3 className="text-3xl mt-10 mb-2 font-semibold text-center">
            Our Mission
          </h3>
          <p className="text-lg text-center">
            Our mission is to empower artisans by providing them with a
            dedicated platform to showcase their creativity and hard work. We
            believe in celebrating the art of handmade crafts, which often carry
            the cultural heritage and the personal stories of the artisans. By
            bringing these products to a global audience, we hope to help
            preserve these traditions and support the communities that rely on
            them.
          </p>

          <h3 className="text-3xl mt-10 mb-2 font-semibold text-center">
            Supporting Local Economies
          </h3>
          <p className="text-lg text-center">
            Handcrafted Haven is committed to supporting local economies. By
            connecting artisans directly with consumers, we help create
            sustainable livelihoods while ensuring that a larger portion of the
            profits goes directly to the creators. This direct connection not
            only helps artisans financially but also fosters a sense of
            community among users who value ethical sourcing and are willing to
            support independent creators.
          </p>

          <h3 className="text-3xl mt-10 mb-2 font-semibold text-center">
            Encouraging Sustainable Practices
          </h3>
          <p className="text-lg text-center">
            We are dedicated to promoting sustainability in every aspect of our
            operation. The platform encourages the use of locally sourced
            materials and eco-friendly production methods, minimizing the
            environmental impact associated with large-scale manufacturing.
            Consumers who shop on Handcrafted Haven are not just purchasing a
            product; they are also contributing to a greener planet.
          </p>

          <h3 className="text-3xl mt-10 mb-2 font-semibold text-center">
            What We Offer
          </h3>
          <p className="text-lg text-center">
            Handcrafted Haven offers a wide range of handcrafted products,
            including but not limited to, pottery, textiles, jewelry, and
            bespoke furniture. Each product listed on our platform is vetted to
            ensure it meets our high standards for quality and sustainability.
            Furthermore, our site offers detailed profiles of each artisan,
            allowing consumers to learn about the person behind the product,
            their crafting techniques, and their artistic philosophy.
          </p>

          <h3 className="text-3xl mt-10 mb-2 font-semibold text-center">
            Join Us
          </h3>
          <p className="text-lg text-center">
            Whether you are an artisan eager to share your work with the world,
            or a consumer looking for authentic and responsibly made products,
            Handcrafted Haven welcomes you. Join our community to explore, shop,
            and support the wonderful world of handcrafted goods. Together, we
            can make a difference—one purchase at a time.
          </p>
        </div>
      </div>
    </>
  );
}
