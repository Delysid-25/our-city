import DefaultLayout from "@/layouts/default";

const About = () => {
  return (
    <DefaultLayout>
      <img
        height={"auto"} // 根据需要设置高度
        src="../../../common/about.webp"
        width={"100%"}
        loading="lazy"
      />
      <img
        height={"auto"} // 根据需要设置高度
        src="../../../common/reward.webp"
        width={"100%"}
        loading="lazy"
      />
    </DefaultLayout>
  );
};

export default About;
