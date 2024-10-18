import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function Issue6() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>OUR&nbsp;</span>
          <span className={title({ color: "violet" })}>CITY&nbsp;</span>
          <br />
          <span className={title()}>第二期</span>
          <div className={subtitle({ class: "mt-4" })}>文件整理中</div>
        </div>
      </section>
    </DefaultLayout>
  );
}
