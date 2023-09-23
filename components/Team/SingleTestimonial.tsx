import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>
    );
  }

 return (
    <div className="w-full mb-10">
      <div
        className="wow fadeInUp rounded-md  p-8   lg:px-5 xl:px-8"
        data-wow-delay=".1s"
        style={{ width: "200px", height: "200px" }} // Make it square and set the size
      >
        <div className="mb-5">
          <div className="relative w-full h-full overflow-hidden rounded-full">
            <Image
              src={image}
              alt={name}
              width={200} // Increase the width
              height={200} // Increase the height
              layout="responsive"
            />
          </div>
        </div>
        <h5 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
          {name}
        </h5>
        <p className="text-sm text-body-color">{designation}</p>
      </div>
    </div>
  );
};

export default SingleTestimonial;
