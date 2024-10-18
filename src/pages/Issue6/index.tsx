import { Image } from "@nextui-org/react";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function Issue6() {
  const images = [
    {
      src: "/public/issue6/1.JPG",
      alt: "OUR CITY",
    },
    {
      src: "/public/issue6/2.JPG",
      alt: "OUR CITY",
    },
    {
      src: "/public/issue6/3.JPG",
      alt: "OUR CITY",
    },
    {
      src: "/public/issue6/4.JPG",
      alt: "OUR CITY",
    },
    {
      src: "/public/issue6/5.JPG",
      alt: "OUR CITY",
    },
    {
      src: "/public/issue6/6.JPG",
      alt: "OUR CITY",
    },
    {
      src: "/public/issue6/7.JPG",
      alt: "OUR CITY",
    },
    {
      src: "/public/issue6/8.JPG",
      alt: "OUR CITY",
    },
    {
      src: "/public/issue6/9.JPG",
      alt: "OUR CITY",
    },
    {
      src: "/public/issue6/10.JPG",
      alt: "OUR CITY",
    },
  ];

  return (
    <DefaultLayout>
      <span className={title()}>在燕郊&nbsp;OUR&nbsp;</span>
      <span className={title({ color: "blue" })}>CITY&nbsp;</span>
      <span className={subtitle()}>第六期</span>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        {images.map((image, index) => (
          <Image
            key={index} // 使用key属性，以便React能够追踪每个元素
            isBlurred
            alt={image.alt}
            height={"auto"} // 根据需要设置高度
            radius="none"
            shadow="lg"
            src={image.src}
            width={"100%"}
          />
        ))}
      </section>
    </DefaultLayout>
  );
}
