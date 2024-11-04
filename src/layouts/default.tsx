import { Link } from "@nextui-org/link";

import { Navbar } from "@/components/navbar";
import { useObserver } from "mobx-react";
// import { store } from "../store/store";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return useObserver(() =>  (
    <div className={"relative flex flex-col h-screen"}>
      <Navbar />
      <main className="container mx-auto max-w-7xl px-5 flex-grow">
        {children}
      </main>
     {/* {store.showState === "flat" && <footer className="container mx-auto max-w-7xl px-5 flex-grow">
        <img
          height={"auto"} // 根据需要设置高度
          src="../../common/10.webp"
          width={"100%"}
          loading="lazy"
        />
      </footer>} */}
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          // className="flex items-center gap-1 text-current"
          href="https://beian.miit.gov.cn/"
          title="nextui.org homepage"
        >
          <span className="text-default-400 text-sm">冀ICP备2024089824号-1</span>
          {/* <p className="text-primary">OUR CITY</p> */}
        </Link>
      </footer>
    </div>
  ));
}
