import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import HTMLFlipBook from "react-pageflip";
import { useObserver } from "mobx-react";
import { store } from "../../store/store";
import styles from "./index.module.css";

export default function Issue6() {
  const images = [
    "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/issue6/1.webp",
    "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/issue6/2.webp",
    "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/issue6/3.webp",
    "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/issue6/4.webp",
    "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/issue6/5.webp",
    "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/issue6/6.webp",
    "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/issue6/7.webp",
    "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/issue6/8.webp",
    "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/issue6/9.webp",
    "https://ourcity-issue6.oss-cn-beijing.aliyuncs.com/issue6/issue6/10.webp",
  ];

  return useObserver(() => (
    <DefaultLayout>
      {store.showState === "flat" && (
        <>
          <span className={title()}>在燕郊&nbsp;OUR&nbsp;</span>
          <span className={title({ color: "blue" })}>CITY&nbsp;</span>
          <span className={subtitle()}>第六期</span>
        </>
      )}
      <section
        className="flex flex-col items-center justify-center py-3 md:py-8"
        style={{ display: store.showState === "flat" ? "block" : "none" }}
      >
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
      {/* {store.showState === "book" && ( */}
        <section className="flex flex-col items-center py-1 md:py-5">
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
            showCover
            autoSize
            className={styles.book}
            style={{display:store.showState === "book" ? 'block' :'none'}}
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
      {/* )} */}
    </DefaultLayout>
  ));
}
