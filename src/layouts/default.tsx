import { Link } from "@nextui-org/link";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={"relative flex flex-col h-screen"}>
      <Navbar />
      <main className="container mx-auto max-w-7xl px-5 flex-grow">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://beian.miit.gov.cn/"
          title="nextui.org homepage"
        >
          <span className="text-default-600">冀ICP备2024089824号-1</span>
          {/* <p className="text-primary">OUR CITY</p> */}
        </Link>
      </footer>
    </div>
  );
}
