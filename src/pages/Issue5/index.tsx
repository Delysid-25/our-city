import DefaultLayout from "@/layouts/default";
import HTMLFlipBook from "react-pageflip";
import { useObserver } from "mobx-react";
import { store } from "../../store/store";
import styles from "./index.module.css";

export default function Issue6() {
  const images = [
    "/issue5/00.webp",
    "/issue5/01.webp",
    "/issue5/02.webp",
    "/issue5/03.webp",
    "/issue5/04.webp",
    "/issue5/05.webp",
    "/issue5/06.webp",
    "/issue5/07.webp",
    "/issue5/08.webp",
    // "/issue6/10.webp",
  ];

  return useObserver(() => (
    <DefaultLayout>
      {store.showState === "flat" && (
        <>
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
            {images.slice(1, images.length).map((image, index) => (
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
