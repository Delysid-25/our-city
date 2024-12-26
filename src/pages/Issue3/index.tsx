import DefaultLayout from "@/layouts/default";
import HTMLFlipBook from "react-pageflip";
import { useObserver } from "mobx-react";
import { store } from "../../store/store";
import styles from "./index.module.css";
import { title, subtitle } from "@/components/primitives";

export default function Issue6() {
  const images = [
    "/issue3/01.webp",
    "/issue3/02.webp",
    "/issue3/03.webp",
    "/issue3/04.webp",
  ];
console.log(store.nextUiTheme,store.showState );

  return useObserver(() => (
    <DefaultLayout>
      {store.showState === "flat" && (
        <>
          <span className={title()}>在燕郊&nbsp;OUR&nbsp;</span>
          <span className={title({ color: "blue" })}>CITY&nbsp;</span>
          <span className={subtitle()}>第三期</span>
          <section className="flex flex-col items-center justify-center py-3 md:py-8">
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
      {store.showState === "book" && (
        <section className="flex flex-col items-center py-1 md:py-5">
          {/* @ts-ignore */}
          <HTMLFlipBook
            width={537}
            height={877}
            size="stretch"
            minWidth={396}
            maxWidth={1073}
            maxShadowOpacity={0.2}
            showCover
            autoSize
            className={styles.book}
            mobileScrollSupport
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
          </HTMLFlipBook>
        </section>
      )}
    </DefaultLayout>
  ));
}
