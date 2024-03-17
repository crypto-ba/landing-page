import { Brand } from "@/types/brand";
import Image from "next/image";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "CEX.ba",
    href: "https://cex.ba",
    image: "/images/brands/cexba.svg",
  },

  {
    id: 2,
    name: "CryptoAdria",
    href: "https://cryptoadria.com/konferencija/",
    image: "/images/brands/ca-konferencija-dark-bg.svg",
  },

  {
    id: 3,
    name: "Kripto.ba",
    href: "https://kripto.ba/",
    image: "/images/brands/kriptoba.svg",
  },
  {
    id: 4,
    name: "ACX.ba",
    href: "https://acx.ba",
    image: "/images/brands/acx.svg",
  },
];

const Brands = () => {
  return (
    <section className="pt-16 mb-10">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
             className="wow fadeInUp flex flex-wrap items-center justify-center rounded-md bg-opacity-52 bg-dark py-8 px-8 dark:bg-opacity-52 sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]"

              data-wow-delay=".1s
              "
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="mx-3 flex w-full h-full sm:max-w-[20px] sm:max-h-[20px]  max-w-[260px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[230px] xl:mx-6 xl:max-w-[160px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full max-w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={image} alt={name} fill />
      </a>
    </div>
  );
};
