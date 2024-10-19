// import { Image } from "@nextui-org/react";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import HTMLFlipBook from "react-pageflip";
import { useObserver } from "mobx-react";
import { store } from "../../store/store";

export default function Issue6() {
  // const images = [
  //   {
  //     src: "/our-city/issue6/1.JPG",
  //     alt: "OUR CITY",
  //   },
  //   {
  //     src: "/our-city/issue6/2.JPG",
  //     alt: "OUR CITY",
  //   },
  //   {
  //     src: "/our-city/issue6/3.JPG",
  //     alt: "OUR CITY",
  //   },
  //   {
  //     src: "/issue6/4.JPG",
  //     alt: "OUR CITY",
  //   },
  //   {
  //     src: "/issue6/5.JPG",
  //     alt: "OUR CITY",
  //   },
  //   {
  //     src: "/issue6/6.JPG",
  //     alt: "OUR CITY",
  //   },
  //   {
  //     src: "/issue6/7.JPG",
  //     alt: "OUR CITY",
  //   },
  //   {
  //     src: "/issue6/8.JPG",
  //     alt: "OUR CITY",
  //   },
  //   {
  //     src: "/issue6/9.JPG",
  //     alt: "OUR CITY",
  //   },
  //   {
  //     src: "/issue6/10.JPG",
  //     alt: "OUR CITY",
  //   },
  // ];
    const images = [
      {
        src: "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/1.JPG",
        alt: "OUR CITY",
      },
      {
        src: "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/2.JPG",
        alt: "OUR CITY",
      },
      {
        src: "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/3.JPG",
        alt: "OUR CITY",
      },
      {
        src: "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/4.JPG",
        alt: "OUR CITY",
      },
      {
        src: "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/5.JPG",
        alt: "OUR CITY",
      },
      {
        src: "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/6.JPG",
        alt: "OUR CITY",
      },
      {
        src: "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/7.JPG",
        alt: "OUR CITY",
      },
      {
        src: "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/8.JPG",
        alt: "OUR CITY",
      },
      {
        src: "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/9.JPG",
        alt: "OUR CITY",
      },
      {
        src: "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/10.JPG",
        alt: "OUR CITY",
      },
  ];
  return useObserver(() => (
    <DefaultLayout>
      {store.showState === "book" && (
        /* @ts-ignore */
        <HTMLFlipBook
          width={537}
          height={877}
          size="stretch"
          minWidth={396}
          maxWidth={1073}
          // minHeight={877}
          maxHeight={1754}
          maxShadowOpacity={0.2}
          showCover={true}
          autoSize
          showPageCorners
          mobileScrollSupport={true}
        >
          {images.slice(0, -1).map((image, index) => (
            <img
              key={index} // 使用key属性，以便React能够追踪每个元素
              height={"auto"} // 根据需要设置高度
              src={image.src}
              width={"100%"}
            />
          ))}
        </HTMLFlipBook>
      )}
      {store.showState === "flat" && (
        <>
          <span className={title()}>在燕郊&nbsp;OUR&nbsp;</span>
          <span className={title({ color: "blue" })}>CITY&nbsp;</span>
          <span className={subtitle()}>第六期</span>
          <section className="flex flex-col items-center justify-center py-8 md:py-10">
            {images.map((image, index) => (
              // <Image
              //   key={index} // 使用key属性，以便React能够追踪每个元素
              //   isBlurred
              //   alt={image.alt}
              //   height={"auto"} // 根据需要设置高度
              //   radius="none"
              //   shadow="lg"
              //   src={image.src}
              //   width={"100%"}
              // />
              <img
                key={index} // 使用key属性，以便React能够追踪每个元素
                height={"auto"} // 根据需要设置高度
                src={image.src}
                width={"100%"}
              />
            ))}
          </section>
        </>
      )}
    </DefaultLayout>
  ));
}
