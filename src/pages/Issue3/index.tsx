import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@nextui-org/button";
import { useNavigate } from "react-router-dom";

export default function Issue6() {
  let navigate = useNavigate();

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>OUR&nbsp;</span>
          <span className={title({ color: "blue" })}>CITY&nbsp;</span>
          <br />
          <span className={title()}>第3期</span>
          <div className={subtitle({ class: "mt-4" })}>文件整理中</div>
          <Button color="primary" className="mt-20" onClick={() => navigate("/our-city/issue6")} size="lg">
            首页
          </Button>
        </div>
      </section>
    </DefaultLayout>
  );
}
