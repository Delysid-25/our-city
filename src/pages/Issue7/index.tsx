import { useObserver } from "mobx-react";
import TitleCard from "@/components/TitleCard";
import { Navbar } from "@/components/navbar";
import { Chip, Image } from "@nextui-org/react";
import { Typography, ConfigProvider, Divider, Space } from "antd";
import { store } from "../../store/store";


export default function Issue7() {
  const images = [
    "/issue7/00.webp",
    "/issue7/cover.webp",
    "/issue7/ppbar.webp",
    "/issue7/pm25.webp",
    "/issue7/table.webp",
    "/issue7/chart.webp",
    "/issue7/image.webp",
    "/issue7/tianzi.webp",
    "/issue7/tianzi2.webp",
    "/issue7/writer.webp",
    "/issue7/10.webp",
    "/issue7/11.webp",
    "/issue7/12.webp",
    "/issue7/13.webp",
    "/issue7/001.webp",
    "/issue7/002.webp",
    "/issue7/003.webp",
    "/issue7/004.webp",
  ];

  const { Title, Paragraph, Link, Text } = Typography;

  return useObserver(() => (
    <>
      <div className={"relative flex flex-col h-screen"}>
        <Navbar />
        <img
          height={"auto"} // 根据需要设置高度
          src={images[0]}
          width={"100%"}
          loading="lazy"
        />
        <img
          height={"auto"} // 根据需要设置高度
          src={images[1]}
          width={"100%"}
          loading="lazy"
        />
        <main className="container mx-auto max-w-7xl px-3 flex-grow">
          <ConfigProvider theme={{ token: {
    // components: {
    //   Typography: {
        colorText: store?.nextUiTheme === "light" ? "rgb(0, 0, 0, 0.88)" : "#fff", // 正文文本颜色
        colorTextSecondary: store?.nextUiTheme === "light" ? "#666" : "#E0E0E0", // 次要文本颜色
        colorLink: store?.nextUiTheme === "light" ? "#6baeff" : "#6baeff", // 链接颜色
        colorLinkHover: store?.nextUiTheme === "light" ? "#40a9ff" : "#91d5ff", // 链接悬停颜色z
      // },
    // },
  } }}>
            <br />
            <Divider />
            <TitleCard>消息发布</TitleCard>
            <Typography>
              <Title level={3}>{`[OURCITY]传单网站上线`}</Title>
              <Paragraph>
                {`[OURCITY]每月传单自从发布以来，其实一直没有找到一个合适的线上发布方式。橘猫是之前一次活动认识的朋友，上个月，在他的大力协助下，我们终于有了自己的小网站，现在你可以在这个网站上方便的查看我们之前每一期的内容！网址是：`}
                <Link href="https://ourcity.ink" className="text-blue-500">
                  https://ourcity.ink
                </Link>
              </Paragraph>
              <Paragraph>欢迎大家访问！最后再次感谢橘猫的帮助！</Paragraph>
              <Divider />
              <div className="flex justify-center items-center my-4">
                <Image
                  src={images[2]} // 替换为传单图片的路径
                  className="rounded"
                />
              </div>
              <Paragraph>
                屁屁吧是屁屁经营的homebar，位于燕郊某小区的楼顶，会在夜晚发出玫红色灯光，屁屁会在这里制作各种好吃的好喝的。
              </Paragraph>
            </Typography>
            <Divider />
            <TitleCard>正在进行</TitleCard>
            <>
              <Title level={3}>燕郊艺术生态调研 OPEN CALL</Title>
              <Paragraph type="secondary">发布人: 白皮书空间</Paragraph>
              <Paragraph>
                白皮书空间现面向所有生活或创作在燕郊及周边的艺术从业者发起公开征集。
              </Paragraph>
              <Paragraph>
                作为燕郊艺术生态调研的一部分，本次公开征集旨在了解和呈现本地区的艺术创作现状，探索本地艺术从业者在这里的生活与创作实践。接下来的一段时间我们会进行采访调查，作为阶段性的工作呈现会在白皮书空间展示。
              </Paragraph>
              <Title level={5}>参与条件:</Title>
              <Paragraph>
                ·
                生活或创作在燕郊及周边的艺术从业者(包括不限于:艺术、电影电视、策展与批评、音乐与戏剧、艺术经理与主理人等)
              </Paragraph>
              <Paragraph>· 愿意分享自己的创作经验和本地生活感受</Paragraph>
              <Paragraph>
                通过此次公开征集，白皮书空间希望与更多的本地艺术从业者建立联系，携手共同推动当地的艺术生态发展。期待您的参与!
              </Paragraph>
              <Paragraph>
                联系微信: <Text code>go9682</Text>、
                <Text code>wbspace2024</Text>
              </Paragraph>
              <Paragraph className="text-right" copyable>
                白皮书空间地址:河北省三河市燕郊镇燕郊九巷二楼
              </Paragraph>
              <Divider />
              <TitleCard>燕郊地图</TitleCard>
              <Title level={3}>亡灵、龙与大酒店</Title>
              <Paragraph type="secondary">2024.12.17 作者：Lily</Paragraph>
              <div className="flex justify-center items-center my-4">
                <img
                  height={"auto"} // 根据需要设置高度
                  src={images[7]}
                  width={"100%"}
                  loading="lazy"
                />
              </div>
            </>
            <>
              <Paragraph>
                “燕郊，唯一为人所熟知的是它作为北京卫星城的身份，很难想象这样一座城市会有属于它自己的，并且是中外瞩目的地标建筑—天子大酒店。天子大酒店作为一栋雕塑建筑，于2011年以‘最大象形建筑’入选了世界吉尼斯纪录。”
              </Paragraph>
              <Paragraph>
                “天子大酒店坐落在天子庄园，于那一众居宅楼中脱颖而出，好像远自天外的来客一样孤然矗立，要说它是天外来客其实也不为过，毕竟它一座由福禄寿三星的形象筑成的酒店大楼。”
              </Paragraph>
              <Paragraph>
                “天子大酒店的传间有很多，一提到它，大多数或知情或不太知情的人，脸上都会忍不住浮现一抹诡秘的笑，说那个酒店是为了辟邪用的。这个‘“邪’是什么邪呢？传言最多的是‘万人坑’，古代刑场、战乱凶地。”
              </Paragraph>
              <Paragraph>......</Paragraph>
              <Paragraph>
                关于天子大酒店的文章，基于现实的或怪力乱神的角度，我设想过许多开头。看起来已经有过太多关于它的报导书写，我并不自信我能讲出任何新意。最早的时候，我甚至不曾期待过这样一栋闻名海内外的“丑建筑”就在燕郊，我的身边。是的，在知晓如此之前，我已从各种报导中见闻过它—“2011年吉尼斯最大象形建筑”、“全国最丑建筑”。3年前，我已在燕郊住了2年不止，有位朋友突然联系我，问我知不知道燕郊的天子大酒店，就是那个福禄寿大酒店，他要在寿桃里的总统套房过生日。我这才晓得这个“丑建筑”就在我身边。{" "}
              </Paragraph>
              <Paragraph>
                我对这栋建筑的兴趣与大部分人无异，始于一种猎奇心理—它如此巨大、如此具象，是中国民俗信仰符号的绝对彰显，是异于日常的奇观。但它就这样直白地被缝合在一个民居的生活场景中，强烈的差异对比张力十足，生出超现实主义的魔幻感，整个小区好似都变成了它的庙宇。我的好奇心逐渐聚焦于，这样一种不可想象的缝合场景，是基于怎样的逻辑产生的？换句话说，作为信仰符号的塑像，如何脱离了它原本所应在的场景庙宇、神龛，并被放大至如此程度的奇观尺寸？这背后的动因是怎样的？我先是线上搜索，后又与身边的人聊，调查到的线索基本上都落脚于“辟邪”、“镇风水”。传言这里曾是“万人坑”，据一些本地人说，自小就从祖辈那里听间这样的说法，于是这样的说法便逐渐传开来，为众人所知。这样一种带有强烈都市传说色彩的说法，引得热爱怪力乱神的我开始忍不住展开想象，激起我继续调查的好奇。不管真相结果是否精彩，这样一种由神秘未知引发的想象力伴随着调查，于我本身就是个迷人的过程。{" "}
              </Paragraph>
              <Paragraph>
                然而，我知道网上搜罗不到更多信息了，便试图继续从身边的朋友那儿搜集到线索。几番辗转寻间之后，一位燕郊本地朋友向我引荐了一位同样来自本地的风水师，据说他阅读了不少县志，对天子大酒店的来龙去脉有所知晓。“县志”、“风水师”，这两个关键词好似能串起许多重要的线索，一幅立体的画卷迅速在我眼前展开，大量历史人物涌现，开始在画面中交汇出各种故事。在朋友的陪同下，我拜访了那位风水师。{" "}
              </Paragraph>
              <Paragraph>
                在他一个下午的讲述中，提及县志、古籍五六本左右，其中的历史、故事、人名、地名更是无计其数，我一边暗自感叹他的阅读量之广、记忆力之强，一边尝试在笔记本上速记线索关键词，但很快我的笔就不知道该抓住哪些词为关键—我迷失在庞杂的信息海洋里。这些历史、故事与天子大酒店从各个层面或强或弱有所关联，但大部分还是属于本地历史，离我想挖掘的线索较远。总得来说，我能从他的讲述里提取出来的有效信息，还是与“万人坑”有关，其次就是所谓的“龙脉”传闻。{" "}
              </Paragraph>
              <Paragraph>
                万人坑，据说这里旧时被视为凶地，因为是古代的乱葬岗与行刑场。有明确史料记载的说法是，抗日战争时期的平津战役中，这里曾是主要战场之一，当时在这里有大量战亡士兵被就地埋葬。至于龙脉，是更加错综复杂的情况，夹杂着民间传说与难以考据的历史资料。据说，燕郊的孤山是燕山的尾脉，而燕山是北京的龙脉，龙脉余气延续到天子大酒店处终结。为压住这股余气，经高人指点，后在此处修建天子大酒店，以镇风水。这两种情况，都涉及大量史料调查，我就风水师给出的线索，进行大量搜索查找，许许多多的线索查到一定程度就会断掉，随着时间的推移，纷乱的线索逐渐在眼前累加交织成团，。。。我对真相的兴趣开始被消磨殆尽，我本身对于具象现实的热情也十分有限，换言之，我对世界的真相与否从来不是那么较真，我的身心总是同时处在幻想与真实的双重维度里，幻与真二者于我，没有轻重之分，都是世界本身
              </Paragraph>
              <Paragraph>
                我坐在电脑面前，决定放弃对真相的刨问。长舒一口气，我合上曾用力抓寻每条线索的眼睛，轻轻放下蒙在天子大酒店面前的都市传说神秘面纱。随着眼帘的闭合，面纱的落下，世界的许多角落又充满了未知的细节，那些角落是故事得以产生的空间。
              </Paragraph>
              <div className="flex justify-center items-center my-4">
                <img
                  height={"auto"} // 根据需要设置高度
                  src={images[8]}
                  width={"100%"}
                  loading="lazy"
                />
              </div>
            </>
            <Divider />
            <Paragraph type="secondary">
              <Paragraph type="secondary">
                为了向大家展示燕郊丰富多彩的生活和有趣的打卡地点，我们推出了“燕郊地图”这一新的板块。{" "}
              </Paragraph>
              <Paragraph type="secondary">
                其他我们尚未探索到的好玩地点，需要大家的推荐和补充！后续我们会将大家推荐的地点整合成一张属于燕郊的生活地图。{" "}
              </Paragraph>
              <Paragraph type="secondary">
                您的故事、照片、推荐都将成为这张地图的重要组成部分。{" "}
              </Paragraph>
              <Paragraph type="secondary">
                投稿方式：请将您的投稿发送至我们的邮箱：medany@163.com邮件标题请注明“燕郊地图投稿”。如有任何疑问或建议，欢迎通过邮件或社交媒体联系我们
              </Paragraph>
            </Paragraph>
            <Divider />
            <Chip radius="md" color="danger" variant="dot">
              诗歌专栏
            </Chip>
            <br />
            <br />
            <>
              <Title level={3}>四月七日的930</Title>
              <Paragraph>
                目光沉着，他留给我
                <br />
                三分之一张颧骨高耸的脸
                <br />
                油、细、灰的头发
                <br />
                使秃顶的讯号自上而下
                <br />
                如同欣赏蚂蚁，正如我们在鸽笼中招摇这里，中年男人眼角凶光不复，面对着桑塔纳，宝马，东风现代，五菱荣光
                <br />
                仿佛看顾后院的几条老狗，面对着皴刺槐，旱柳，黄杨子，驴皮松
                <br />
                他斗士般撅响自己的双手
                <br />
              </Paragraph>
              <Paragraph>
                五点四十，黑暗尚未现身
                <br />
                中年男人凝神而视
                <br />
                口中发出阵阵咒诅，面对着
                <br />
                沃尔玛，国贸，北二外，胸科医院
                <br />
                他努力让普通话字正腔圆，面对着
                <br />
                洗浴中心，售楼处，KTV，塔吊
                <br />
                他低头饮水，保温杯擦的锃亮
                <br />
                用力成为长途车上坐得最笔挺的人
                <br />
              </Paragraph>
              <Paragraph>
                此刻，当我们路过第三个加油站
                <br />
                中年男人手势开合，生情并茂
                <br />
                他将面对通燕高速，北六环，密三路
                <br />
                而周围的乘客都已在尾气的温暖中睡眠
                <br />
                中年男人望向窗外，就地发笑
                <br />
                他将对窗外的一切加以总结
                <br />
                “因此，我要说明这个细节……”
                <br />
                而打断他的地产广告灯光闪耀
                <br />
              </Paragraph>
              <Paragraph>
                当黑暗如期而至，中年男人
                <br />
                就捏紧左耳，陶醉地对着车厢摇头晃脑
                <br />
                他手指灯光，逐一计数，面对着
                <br />
                市政府，法院，第一中学，农机技校
                <br />
                口中喃喃，“大哥，二哥，弟弟，姥姥”
                <br />
                空气中灰尘和烧烤味一同扬起，面对着
                <br />
                水果摊，补胎店，棋牌室，理发馆
                <br />
                他低头瘙痒，发白的衣领淹没在昏光中
                <br />
                “这是我在表达安静，注意，不是吵闹”
                <br />
              </Paragraph>
              <Paragraph>
                七点零三，汽车跨过河北
                <br />
                城界的气味披面而来，面对着
                <br />
                烤烟味，松腥味，汗脚酸，汽油香
                <br />
                他的演讲在两个半小时后和世界休战
                <br />
                中年男人双耳发红，扭过头去
                <br />
                一双老手按住窗户状如擒敌
                <br />
                我便从此不能看到他三分之一的侧脸
                <br />
              </Paragraph>
              <Paragraph>
                美妙的安静中，却听到低语
                <br />
                “请把你们砸在我头上的影子拿掉”
              </Paragraph>
              <Space>
                <Image
                  src={images[9]} // 替换为传单图片的路径
                  className="rounded"
                />
                <Image
                  src={images[10]} // 替换为传单图片的路径
                  className="rounded"
                />
              </Space>
            </>
            <Divider />
            <>
              <Title level={3}>春之斯芬克斯</Title>
              <Paragraph type="secondary">作者：匿名</Paragraph>
              <Paragraph>
                <Text>张开手是夹着雨的雪。</Text>
                <br />
                <Text>十年、二十年……停止过的时间弯下腰</Text>
                <br />
                <Text>刻上无数皱纹</Text>
                <br />
                <Text>在清晨染成了脉搏。</Text>
              </Paragraph>
              <Paragraph>
                <Text>鸟儿越上最高的云，</Text>
                <br />
                <Text>悬挂的面孔融化后碎裂。</Text>
                <br />
                <Text>煮沸了一线光亮。</Text>
                <br />
                <Text>我看见石头溶化，月亮中渗出绛色的天。</Text>
              </Paragraph>
              <Paragraph>
                <Text>剥开薄薄的花瓣吮吸它的清香，</Text>
                <br />
                <Text>缠绵是舌尖的苦涩。</Text>
                <br />
                <Text>熟睡着却睁开双眸</Text>
                <br />
                <Text>没见过黑夜多久了?</Text>
              </Paragraph>
              <Paragraph>
                <Text>照进厅堂的餐室酌饮嘀嗒的钟</Text>
                <br />
                <Text>没见过白昼多久了?</Text>
                <br />
                <Text>绝壁上的荷花木质桌椅守望着家人们已被砍伐</Text>
              </Paragraph>
              <Paragraph>
                <Text>我是最后的难民</Text>
                <br />
                <Text>“睁开眼吧!请你醒醒!</Text>
                <br />
                <Text>送你一颗星</Text>
                <br />
                <Text>为我偷来黎明……”</Text>
              </Paragraph>
            </>

            <Divider />
            <TitleCard>事件调查</TitleCard>
            <>
              <Title level={3} className="text-red-700">
                雾霾又回来了吗?近日燕郊雾霾成因的调查
              </Title>
              <Paragraph type="secondary">编辑: Medany 2024.11.10</Paragraph>
              <Paragraph>
                10月31号，笔者因为一些事情熬了个通宵，回家时候已经是凌晨五六点左右，天还没有大亮，但却着实被眼前的浓雾吓了一条，走到街上没几步身后的楼房就已经有些看不清了，往前看，也只能看到浓雾中依稀的几盏灯光，我有些怀疑这是雾还是霾，搜索实时的空气质量指数，PM2.5已然升高到104μg/m3，是霾没错了。想来之所以如此错愕，莫过于在我的印象里，雾霾已经是过去式了。大概只记得四五年前经常出现雾霾，随后随着北京附近工厂迁离及京津冀地区的一系列的空气治理计划，好像雾霾这个词已经许久不被大家关注，那么这些霾是从哪里来的？为何在空气质量有改善的几年后雾霾又卷土重来了呢？
              </Paragraph>
              <Title level={5} className="mt-4 text-red-700">
                1.从有到无再到有
              </Title>
              <Paragraph>
                查阅空气质量的历史数据我们可以发现，在2018年之后一直到2020年，空气质量一直都呈现一个缓慢下降的趋势，但到了2021春季，空气污染忽然又严峻起来，随后的2022年冬季及2023年春季，空气污染也高居不下。继续查阅今年生态环境部公布的环境空气质量数据显示，2023年北京的细颗粒物(PM2.5)浓度上升了7%，全国范围内则上升了3%，如果我们联系一个时间节点的话，那就是雾霾好像在疫情后卷土重来了。
              </Paragraph>
              <Paragraph>
                <div className="flex justify-center items-center my-4">
                  <img
                    height={"auto"} // 根据需要设置高度
                    src={images[3]}
                    width={"100%"}
                    loading="lazy"
                  />
                </div>
                <Paragraph type="secondary" className="text-center text-xs">
                  表1：北京空气质量指数月变化趋势
                  <Paragraph type="secondary" className="text-center text-xs">
                    图表来源：PM2.5历史数据网站
                  </Paragraph>
                </Paragraph>
              </Paragraph>
              <Title level={5} className="mt-4 text-red-700">
                2.为何卷土重来?
              </Title>
              <Paragraph>
                每年10月至次年3月，都是PM2.5污染和重污染天气的高发季节。为使政策措施更具针对性，自2017年起，每年秋冬季来临之前，生态环境部都会联合相关部委和省市政府发布《秋冬季大气污染综合治理攻坚方案》，将空气质量改善目标分解到各个城市。2022年，该方案并未如期发布。2022-23攻坚方案缺失期间，全国秋冬季PM2.5同比上升了4.7%。特别是在2023年第一季度，北京出现了30.6%的反弹。而在疫情后受房地产行业调整和国际贸易不确定性增加的影响，地方政府面临债务风险、预算承受等经济压力，秋冬季空气治理目标的优先级可能有所下降。
                仔细考察京津冀和汾渭平原的经济工业数据（表2），可以发现，2023-2024年秋冬季虽然水泥、塑料加工等产品的产量普遍有所下降，但在火力发电量、有色金属和化工产品等领域的产量在京津冀及汾渭平原地区却出现了较快增长。具体而言，除北京和山东外，火力发电在其他各个省市均同比大幅增长，陕西、河南和河北的增幅最大；原油加工在北京和河北的同比增长幅度最大；十种有色金属生产在河北的上升幅度尤其明显，在山东和山西等其他省市也皆出现增长；化工相关行业在山西、河北和河南等地同比增长明显，尤其是化学纤维。
                疫情期间，能源消费特别是煤炭消费的增长也拖累了上述能耗、碳排放和空气质量指标的进展。具体到火电部分，2021-2023年，中国核准了约279吉瓦的燃煤发电项目，同比增长130%，如果这些项目全部建成投产，还将显著增加空气污染恶化的风险。
              </Paragraph>
              <div className="flex justify-center items-center my-4">
                <img
                  height={"auto"} // 根据需要设置高度
                  src={images[4]}
                  width={"100%"}
                  loading="lazy"
                />
              </div>
              <Paragraph type="secondary" className="text-center text-xs">
                表2：京津冀地区和汾渭平原各省工业部分主要产品产量的同比变化
                <Paragraph type="secondary" className="text-center text-xs">
                  图表来源：能源与清洁空气研究中心（CREA）
                </Paragraph>
              </Paragraph>
              <Title level={5} className="mt-4 text-red-700">
                3. 京津冀地区的风变小了吗?
              </Title>
              <Paragraph>
                除了以上所说的疫情后工业排放的增长带来的对空气质量的影响之外，京津冀地区风力大小的变化也是我们不可忽视的因素之一。霾不同于雾，霾不会自主消散，而清除霾的最重要方式之一就是一场大风了。从上世纪70年代至今，京津冀地区的风速呈现整体下降趋势，平均每年下降0.014米每秒，其中以冬、春季节尤为明显。另有分析显示，将北京1993-2002年与2003-2012年两个10年间的1月份风力资料进行比对，年均1月风速从2.5米每秒，减至2.3米每秒；相应的，雾霾天日数从2.1天升至4.4天，霾日则从0.8天升至3.9天。
                而风速减小的原因，我们可以参考论文《气候变暖背景下中国地面风速变化研究进展》中所得出的结论：
                地面拖曳力的增加：随着我国工业化和城市化的快速推进，众多城市中高楼大厦的出现导致地面粗糙度的增加成为风速减弱的重要因素之一，中国大中城市地区的城市化对风速减弱的贡献率约为18%。值得注意的是，气候变暖促使全球中高纬度地区植被覆盖率上升，导致地表粗糙度增加，也是造成地面拖曳力增加的重要原因。{" "}
                <div className="flex justify-center items-center my-4">
                  <img
                    height={"auto"} // 根据需要设置高度
                    src={images[5]}
                    width={"100%"}
                    loading="lazy"
                  />
                </div>
                <Paragraph type="secondary" className="text-center text-xs">
                  表3: 1961—2016年中国地面气象站10 m高度年平均风速距平
                  <Paragraph type="secondary" className="text-center text-xs">
                    图表来源：应用气象学报
                  </Paragraph>
                </Paragraph>
                气候变暖对气压/热力梯度力的影响：气压梯度力作为风的主要驱动力，其变化和地面风速存在明显的相关性。而具体到京津冀地区易发生雾霾的秋冬季来看，西伯利亚高压是影响我国大部分北方地区秋冬季风速的主要因素之一，而在全球变暖的背景下，1961-2005年秋季50°N以北的西伯利亚地区气候变暖显著，间接导致了冬季风速的变小。
              </Paragraph>
              <div className="flex justify-center items-center my-4">
                <img
                  height={"auto"} // 根据需要设置高度
                  src={images[6]}
                  width={"100%"}
                  loading="lazy"
                />
              </div>
              <Paragraph type="secondary" className="text-center text-xs">
                10月31日凌晨的燕郊 图片来源：贤大屁
              </Paragraph>

              <Title level={5} className="mt-4 text-red-700">
                4. 任重而道远的未来
              </Title>
              <Paragraph>
                2023、24年全国PM2.5的反弹给空气污染控制任务带来了挑战。为实现2025年目标，全国平均PM2.5浓度需在2024-2025年间下降1.0%，而重点控制区域京津冀、汾渭平原和长三角的PM2.5水平则必须分别下降5.4%、4.9%和4.6%。面对这样的目标在全球变暖的背景下再叠加房地产行业调整和国际贸易不确定性增加，地方政府面临债务风险等经济方面的不利影响，容易导致环境与经济目标出现相互冲突的局面，而面对这个问题，在两者之间如何平衡与取舍需要我们每个人的思考与行动。
              </Paragraph>

              <Paragraph type="secondary">
                参考文章： 丁一汇，李霄，李巧萍.
                气候变暖背景下中国地面风速变化研究进展. 应用气象学报，2020,
                31(1): 1-12. DOI: 10.11898/1001-7313.20200101.
                部分城市PM2.5反弹，意味着什么？23 5月，2024 作者 Chengcheng Qiu
              </Paragraph>
            </>
            <Divider />
            <TitleCard>来自陌生人的消息</TitleCard>
            <Paragraph italic>
              “我们收到了一个匿名的投稿。我们商议之后决定将这个板块命名为来自一位陌生人的消息，每期在此固定呈现。"
            </Paragraph>
            <div className="flex justify-center items-center">
              <img
                src={images[11]} // 替换为传单图片的路径
                className="rounded"
              />
            </div>
            <Paragraph>
              <Paragraph italic type="secondary" className="text-right text-xs">
                河北省三河市燕郊镇星河皓月
              </Paragraph>
              等待时间停止 逐渐开始分不清季节
            </Paragraph>
            <Divider />
            <div className="flex justify-center items-center my-4">
              <img
                height={"auto"} // 根据需要设置高度
                src={images[12]}
                width={"100%"}
                loading="lazy"
                className="rounded"
              />
            </div>
            <Divider />
            <>
              <Title level={4}>关于我们</Title>
              <Paragraph>
                {`[OURCITY]双周报是由什么鬼艺术小组发起面向燕郊居民的小范围自制内容。向大家提供关于燕郊的艺术，生活等方面的信息。我们希望达成一种更加紧密，和谐，互助的社区生活，并以此为目标努力。`}
              </Paragraph>
              <img
                height={"auto"} // 根据需要设置高度
                src={images[13]}
                width={"100%"}
                loading="lazy"
              />
            </>
          </ConfigProvider>
        </main>
        <Divider>纸质原版</Divider>
        <img
          height={"100%"} // 根据需要设置高度
          src={images[14]}
          width={"100%"}
          loading="lazy"
        />
        <img
          height={"auto"} // 根据需要设置高度
          src={images[15]}
          width={"100%"}
          loading="lazy"
        />
        <img
          height={"auto"} // 根据需要设置高度
          src={images[16]}
          width={"100%"}
          loading="lazy"
        />
        <img
          height={"auto"} // 根据需要设置高度
          src={images[17]}
          width={"100%"}
          loading="lazy"
        />

        <footer className="w-full flex items-center justify-center py-3">
          <Link
            isExternal
            href="https://beian.miit.gov.cn/"
            title="nextui.org homepage"
          >
            <span className="text-default-400 text-sm">
              冀ICP备2024089824号-1
            </span>
          </Link>
        </footer>
      </div>
      {/* <DefaultLayout> */}
      {/* </DefaultLayout> */}
    </>
  ));
}
