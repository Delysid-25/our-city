// import { Image } from "@nextui-org/react";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import HTMLFlipBook from "react-pageflip";
import { useObserver } from "mobx-react";
import { store } from "../../store/store";

export default function Issue6() {
  const images = [
    "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/1.JPG",
    "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/2.JPG",
    "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/3.JPG",
    "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/4.JPG",
    "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/5.JPG",
    "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/6.JPG",
    "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/7.JPG",
    "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/8.JPG",
    "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/9.JPG",
    "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/10.JPG",
  ];
  return useObserver(() => (
    <DefaultLayout>
      {store.showState === "book" && (
        <section className="flex justify-center py-8 md:py-10">
          {/* @ts-ignore */}
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
                src={image}
                width={"100%"}
                loading="lazy"
              />
            ))}
          </HTMLFlipBook>
        </section>
      )}
      {store.showState === "flat" && (
        <>
          <span className={title()}>在燕郊&nbsp;OUR&nbsp;</span>
          <span className={title({ color: "blue" })}>CITY&nbsp;</span>
          <span className={subtitle()}>第六期</span>
          <section className="flex flex-col items-center justify-center py-8 md:py-10">
            {images.map((image, index) => (
              <img
                key={index} // 使用key属性，以便React能够追踪每个元素
                height={"auto"} // 根据需要设置高度
                src={image}
                width={"100%"}
                loading="lazy"
              />
            ))}
          </section>
        </>
      )}
    </DefaultLayout>
  ));
}
