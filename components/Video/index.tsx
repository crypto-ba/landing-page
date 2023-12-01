"use client";

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "../Common/SectionTitle";

const Video = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Adjust this for the desired autoplay speed in milliseconds
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const images = [
    { url: "/images/video/arca2.webp", description: "Toni Dumančić - ARCA 2023 MEĐUNARODNA IZLOŽBA INOVACIJA  - ZLATNA MEDALJA" },

    { url: "/images/video/adria.jpeg", description: "Nedžad Smajić - Cryptoadria 2023" },
    // { url: "/images/video/adria2.jpeg", description: "Nedžad Smajić - Osnivač, CRYPTO.ba & RXCGames.com - Cryptoadria 2023" },
    // { url: "/images/video/arca2.webp", description: "Toni Dumančić - ARCA 2023  MEĐUNARODNA IZLOŽBA INOVACIJA - ZLATNA MEDALJA" },

    // { url: "/images/video/adria3.jpeg", description: "Nedžad Smajić - Osnivač, CRYPTO.ba & RXCGames.com - Cryptoadria 2023" },
    // { url: "/images/video/adria4.jpeg", description: "Nedžad Smajić - Osnivač, CRYPTO.ba & RXCGames.com - Cryptoadria 2023" },

    // Add more image URLs and descriptions as needed
  ];
  
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Team"
          paragraph="Ovdje možete upoznati ljude koji stoje iza naše zajednice, naše osnivače i voditelje tima koji su strastveni prema kripto valutama i posvećeni ostvarivanju naše misije - edukacije i povezivanja kripto zajednice."
          center
          mb="80px"
        />
        <div className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md">
          <Slider {...settings} className="mb-5">
            {images.map((image, index) => (
              <div key={index} className="relative aspect-[77/40] items-center justify-center">
                <div className="w-full h-full overflow-hidden">
                  <img src={image.url} alt={image.description} className="object-cover w-full h-full" />
                </div>
                <p>{image.description}</p>
              </div>
            ))}
          </Slider>
        </div>


      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1]">
        <img src="/images/video/shape.svg" alt="shape" className="w-full" />
      </div>
    </section>
  );
};

export default Video;
