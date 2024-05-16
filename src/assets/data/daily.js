const dailyList = [
  {
    date: "2023-11-26",
    msg: `和小鱼看的第一场电影，黄渤周迅演的《涉过愤怒的海》，在李村和谐广场。看完电影回家路上聊了会儿，约好下次请她吃饭。`,
  },
  {
    date: "2023-12-01",
    msg: `和小鱼一起吃午饭，她打车从城阳来我这边，苗岭路。吃的东镇火锅，聊得很开心。她走了后想她。`,
  },
  {
    date: "2023-12-02",
    msg: `我去黄岛吃饭，她在黄岛看李上安live，想见她，非常疯狂的一晚。`,
  },
  {
    date: "2023-12-03",
    msg: `她把小兔子送我了。我们去台东看脱口秀，她第一次看，笑的很开心，但我才是全场最开心的那一个。`,
  },
  {
    date: "2023-12-05",
    msg: `我们知道了彼此的名字，她说这是正式认识。`,
  },
  {
    date: "2023-12-09",
    msg: `我回栖霞参加婚礼，临走有点发烧，她随后坐高铁去栖霞要帮我开车，感动不已。傍晚偷跑出去见她，想她。`,
  },
  {
    date: "2023-12-10",
    msg: `回青路上小鱼开车，事后坦白这是第一次跑高速，很稳，我路上睡得很香。晚上一起去跨海大桥那走了会儿，旁边就是列车轨道，我要当面对她表白：<span style="font-weight: bold;">我要跟你在一起。</span>`,
  },
  {
    date: "2023-12-15",
    msg: `第一次去她家，晚上下了点小雪，第一次和她喝酒，干红，聊了好多，说不尽的相思，互诉衷肠。彼此交了个底，经济上的。`,
  },
  {
    date: "2023-12-17",
    msg: `我们去跨海大桥看了日落，超级美。第一次带她去吃楼下的羊汤，她很喜欢。吃完去崂山冰山之角看红楼梦主题的音乐会，路上她对她弟弟出柜了，感动。`,
    imgList: [
      {
        url: new URL("@/assets/images/2023121701.jpg", import.meta.url).href,
        desc: "白泥地公园第一次看日落，超美"
      },
    ]
  },
  {
    date: "2023-12-22",
    msg: `冬至，在她家我们一起包饺子，韭菜肉的，非常好吃，又喝了点酒，第二次喝，干白，报喝。`,
    imgList: [
      {
        url: new URL("@/assets/images/2023122202.jpg", import.meta.url).href,
        desc: "2023年冬至，一起过的",
      },
    ]
  },
  {
    date: "2023-12-24",
    msg: `我们一起看的第二场电影，《三大队》，看完吃的吕氏疙瘩汤，肉末粉条挺好吃。下午回家又看了个电影。早中晚一天做了好多次，我身体累了。`,
  },
  {
    date: "2023-12-30",
    msg: `我们去上海，是她毕业后待了两年的城市。蟹黄面和汤包贼好吃。`,
  },
  {
    date: "2023-12-31",
    msg: `她选的上海菜很好吃。一起在外滩跨年，很喜欢小鱼。`,
    imgList: [
      {
        url: new URL("@/assets/images/2023123101.jpg", import.meta.url).href,
        desc: "2023年外滩跨年",
      },
    ]
  },
  {
    date: "2024-01-02",
    msg: `我说错了话，晚上睡觉她哭了，我心如刀割，不想让她伤心难过，要好好珍惜她。`,
  },
  {
    date: "2024-01-03",
    msg: `她32周岁生日，想当甩手掌柜，我来安排。给她送了鲜花，她说是第一次收到花。吃的波漯油子，我们第三次喝酒，她第一次喝白酒，陪我。`,
  },
  {
    date: "2024-01-05",
    msg: `周五，小鱼回高密了，最早周天晚上见面，是在一起之后分开最久的一次，想她。`,
  },
  {
    date: "2024-01-07",
    msg: `周天，在球馆看到提前回青的小鱼，想给我个惊吓，但被我发现了，哈哈，开心。看她打球时，眼里只有她。<br>晚上我们去吃了我超级喜欢的鲈鱼，她讲了她在银川，以及后面打官司时发生的一些事，倔强的小鱼，摸摸头，希望她事事顺心。`,
  },
  {
    date: "2024-01-11",
    msg: `晚上的飞机去哈尔滨，一起去的第二个地方，开心！`,
  },
  {
    date: "2024-01-12",
    msg: `下午去了冰雪大世界，超级壮观、震撼，真是打造了一座冰雪世界。哈尔滨好冷，不适合我。<br>格瓦斯小鱼很喜欢喝。<br>晚上喝了点白酒，小鱼说牛栏山不辣，第四次喝酒。`,
  },
  {
    date: "2024-01-13",
    msg: `去了松花江，哈尔滨好冷，浑身贴满暖宝宝。小鱼走出汗了⊙ω⊙晚上冻感冒了。<br>第五次喝酒，牛栏山，小鱼酒量日渐增长。<br>晚上我为她准备了礼物——穿着情趣内衣的我自己，她非常喜欢。喜欢小鱼，喜欢和小鱼做。`,
    imgList: [
      {
        url: new URL("@/assets/images/2024011301.jpg", import.meta.url).href,
        desc: "冰雪大世界，贼壮观",
      },
    ]
  },
  {
    date: "2024-01-14",
    msg: `晚上打电话到很晚，怀疑我俩的相处模式。我是个胆小鬼，这些年的惯性让我习惯一个人，时不时会想要逃离，放松放松放松！`,
  },
  {
    date: "2024-01-15",
    msg: `小鱼消化不太好，开始喝益生菌了，但愿会有效果，希望她好。`,
  },
  {
    date: "2024-01-20",
    msg: `我拔智齿，殊不知，万恶的起源……<br>晚上一起去看了小王子话剧，很好看，喜欢小王子，喜欢狐狸，和小鱼一起做什么都好。<br>她感冒了，回家后，没忍住（怪我“循循善诱”），睡一起了。`,
    imgList: [
      {
        url: new URL("@/assets/images/2024012001.jpg", import.meta.url).href,
        desc: "一起看小王子话剧",
      },
    ]
  },
  {
    date: "2024-01-25",
    msg: `拔智齿后第五天，一直发炎，非常疼痛，小鱼陪我去医院，跑前跑后很辛苦。脸一侧肿了，她说我是松鼠牛牛。去了石老人，天气特别好，把她的名字写在沙滩上，喜欢小鱼。晚上带我去喝鸡汤，很好喝，快点好起来⊙∀⊙！<br>担心自己噶掉，写了封遗书，笑鼠。`,
    imgList: [
      {
        url: new URL("@/assets/images/2024012501.jpg", import.meta.url).href,
        desc: "石老人海水浴场",
      },
    ]
  },
  {
    date: "2024-01-26",
    msg: `起床后不太舒服，去了医院，去查血的时候身体愈发虚弱，没绷住哭了，给小鱼打电话，她很着急，急匆匆赶来。相见的那一刻我知道，有人比我自己还希望我好，喜欢小鱼。`,
  },
  {
    date: "2024-01-27",
    msg: `我们去赶了李村大集，买了很多东西，拉着她的小推车。回来路上小推车轱辘掉了，她固执地说要修好继续用的样子很可爱。<br>中午她做的海鲜，我张不开嘴没有口福喽~晚上她炖的鸽子汤给我喝，很好喝，小鱼炒菜很好吃，喜欢小鱼。<br>下午我去输液了，吃药管不住了，身体很弱，小鱼陪我，小鱼真好。<br>晚上睡觉我们分被睡（第一天实行），我俩睡觉都太轻了，效果不错，她去洗手间我都不知道，一觉到天亮！`,
  },
  {
    date: "2024-01-28",
    msg: `小鱼吃益生菌有成效，最近噗噗放屁，哈哈把她整郁闷了，我很开心，希望她好。<br>傍晚去白泥地公园看了日落，时间刚刚好，日落超级美。<br>小鱼做饭真好吃，味道很好，做饭速度还贼快，喜欢小鱼。`,
    imgList: [
      {
        url: new URL("@/assets/images/2024012801.jpg", import.meta.url).href,
        desc: "白泥地公园看日落",
      },
    ]
  },
  {
    date: "2024-01-29",
    msg: `周一，我们腻歪了三天，小鱼一直照顾我，今天各自上班，超级想她。<br>晚上下班，小鱼已经做好饭等我了，家的感觉，喜欢，要对小鱼好。`,
  },
  {
    date: "2024-01-30",
    msg: `小鱼想吃糖葫芦（因为她做梦梦见生孩子，有点恶心，想吃点酸的），我去李村买了糖葫芦和一朵很好看的玫瑰花。到家了把花送到她面前，她很惊喜，她开心我就开心。<br>晚上做了蘑菇炒肉，小鱼做饭真好吃，喜欢小鱼。<br>晚上我在泡脚，一边看书，她趴在床上看手机，我手机震动，拿起一看，是她发的短信：这样的生活真是惬意。`,
  },
  {
    date: "2024-01-31",
    msg: `小鱼洗完澡对着镜子一通翻头发，她在找白头发，前一阵发现了一根她要崩溃了，我在心里默默想：我会陪着你的，用我自己的方式。<br>睡前我们亲了无数遍，湿的一塌糊涂，我姨妈未结束，小鱼说不可以，我知道她说一不二，亲了一会儿发现都半夜了，赶紧入睡！`,
  },
  {
    date: "2024-02-01",
    msg: `昨晚没休息好，整个人脑子都是宕机状态，为了身体考虑，早上我提议先分开睡，她抱着我的手瞬间耷拉了~<br>晚上小鱼睡在气垫床上，睡在地上，哈哈又辛酸又倔强，喜欢。`,
  },
  {
    date: "2024-02-02",
    msg: `今日小年，早上跟小鱼讲可能要去别的项目组了，她悄没声地订了个蛋糕送过来，让我分给同事们一起吃，小鱼心细，喜欢小鱼。<br>我晚上团建完，正好碰上小鱼她们打完球来吃饭，时间刚刚好。第一次线下les聚会，很有趣，都是有趣的人，喜欢小鱼。<br>晚上做到很晚，垫子床单湿了好多好多，喜欢和小鱼做。`,
  },
  {
    date: "2024-02-03",
    msg: `换了个枕头，戴着耳塞，睡得还不错~与小鱼慢慢摸索相处方式，喜欢小鱼。`,
  },
  {
    date: "2024-02-04",
    msg: `晚上大雪，很浪漫，我要去找小鱼，喜欢小鱼，浪漫的事情都想跟她在一起。`,
  },
  {
    date: "2024-02-07",
    msg: `腊月二十八，与小鱼年前吃的最后一顿晚饭，鱼大厨掌勺，小鱼做菜真好吃。开了瓶红酒，口味很好，后劲很大，小鱼半夜给难受醒了，都怪我，喝快了，希望小鱼好。<br>我们给对方准备了红包，金额是一样的，小鱼开玩笑说实现了“收支平衡”~我想把我有的都给她。<br>小鱼给我写了封信，就像她说的她不善表达，就像我说的我能看到她汹涌的内心世界，就像信中所说“<span style="font-weight: bold;">过稀松平常的每一天，安稳度日，共抵风雨</span>”。要好好表现，不能辜负她。`,
  },
  {
    date: "2024-02-08",
    msg: `腊月二十九，今日小鱼要回家过大年了。<br>早上醒来，不知做了多少次，每次都高，一股接着一股的水流涌出……想到要跟小鱼短暂分开，加上身体的高潮迭起，眼泪绷不住了，“哇”地一声嚎啕大哭。喜欢小鱼，喜欢和小鱼做。<br>今天还是个大日子，第一次跟小鱼弟弟见面吃饭，吃的烤羊腿。人很好，性格温和，难怪小鱼老夸他。饭后目送他俩离开，她对于这次见面的评价：<span style="font-weight: bold;">生命中两个最重要的人碰面</span>。要对小鱼好。`,
    imgList: [
      {
        url: new URL("@/assets/images/2024020802.jpg", import.meta.url).href,
        desc: "第一次与小鱼弟弟见面吃饭",
      },
    ]
  },
  {
    date: "2024-02-09",
    msg: `腊月三十，晚睡早起，打扫了卫生，小鱼不在家，非常想念她。今日回家，路上去看奶奶，送上小鱼买的大樱桃，想奶奶，眼泪决堤。`,
  },
  {
    date: "2024-02-10",
    msg: `大年初一，崭新的一年。<span style="font-weight: bold;">人生太有限了，时间匆匆，珍惜当下。</span>`,
  },
  {
    date: "2024-02-12",
    msg: `初三，晚上回青，和小鱼见面，很是想念。`,
  },
  {
    date: "2024-02-13",
    msg: `和小鱼来广州，第三次旅行！冬天从北方过度到南方的感觉不要太好！小鱼对植物很有了解，大多能叫出名字，星星眼(∗❛ั∀❛ั∗)✧*。<br>中午南昌转机，吃了拌粉。晚上吃了粤菜，挺好吃，有点甜，小鱼不太喜欢甜的。<br>凉茶就是中药捏！好苦！`,
    imgList: [
      {
        url: new URL("@/assets/images/2024021302.jpg", import.meta.url).href,
        desc: "飞上天际的比心",
      },
    ]
  },
  {
    date: "2024-02-14",
    msg: `情人节。上午去了陈家祠，岭南风格建筑，工艺之繁复精美，雕梁画栋，小鱼非常喜欢，不住地赞叹。博物馆和特色建筑是小鱼喜欢的，我要慢慢了解学习。<br>晚上一起登上了广州塔，坐了摩天轮，拥有了和小鱼的第一张合照，喜欢小鱼。`,
    imgList: [
      {
        url: new URL("@/assets/images/2024021407.jpg", import.meta.url).href,
        desc: "喜欢小鱼",
      },
    ]
  },
  {
    date: "2024-02-16",
    msg: `在博物馆看到了三星堆文物，古蜀历史说不清道不明，三星堆文化充满了神秘色彩，小鱼非常喜欢，也期待去三星堆遗址一探究竟。<br>晚上和小鱼在海心沙散步，不要太惬意，感受忙碌的城市的另一副面貌。花香树影，晚风飘荡，交谈着，嬉戏着，看着路灯泛着的暖光，<span style="font-weight: bold;">陪伴也是告白，喜欢小鱼。</span>`,
  },
  {
    date: "2024-02-18",
    msg: `出境游噜~澳门香港，累鼠，累瘫。澳门赌场真豪华啊！港澳虽小，但干净有序。喜欢小鱼。`,
  },
  {
    date: "2024-02-19",
    msg: `香港一日游，物价贼贵，离谱！！`,
  },
  {
    date: "2024-02-20",
    msg: `凌晨，做爱，宣示主权，哭泣，我爱小鱼。<br>爱是感性的，什么时候遇到小鱼，我都觉得晚。<br>青岛大暴雪，航班取消，北京落地第二天转高铁回青，和小鱼北上广深都去过噜。`,
  },
  {
    date: "2024-02-21",
    msg: `青岛大雪，高铁延误了七个小时，抵青已是晚上十一点。路上和小鱼探讨了很多，包括相处之道，一段健康的感情需要自律、探索和维系，庆幸我们两个都是有心的人。<br>我想要跟小鱼一起生活，想要天天见到她，天天抱到她，<span style="font-weight: bold;">决定跟小鱼一起住。</span>`,
  },
  {
    date: "2024-02-22",
    msg: `小鱼说要把房子重新装修下，不凑合过日子了，心里有点感动，有种“家”的感觉，要对小鱼好。<br>晚上小鱼做了减脂餐，贼好吃，料汁调得也好，辛苦小鱼。<br>我有一位执行力非常强的女朋友，说干就干，不拖泥带水，我耳濡目染，也有受益，喜欢。`,
    imgList: [
      {
        url: new URL("@/assets/images/2024022201.jpg", import.meta.url).href,
        desc: "小鱼做的真好吃",
      },
    ]
  },
  {
    date: "2024-02-25",
    msg: `和小鱼去看电影《第二十条》，颇有感触，法律不是死的，司法者也不应该是教条主义者。像罗翔老师说的：“我们都是不完美的一般人，因此要身临其境带入防卫人的立场，不要对防卫人过于苛责。”<br>转过头看小鱼，她已泪流满面。小鱼哭过两次，都是在床上，不肯让我看到她哭泣时的样子。我第一次看到泪眼婆娑的小鱼，泪珠在眼底打转，犹如夜空中的星辰，微光闪烁，我相信她是有共鸣的，要保护小鱼的善良和执着。`,
  },
  {
    date: '2024-02-26',
    msg: `小鱼说要自己设计装修，我没搞过，也不太懂，小鱼说自己搞会辛苦一些。自从我们达成一致说要住一起后她一刻没停下，劳心劳力，干劲十足，下班后还要去看方案，小鱼说这是非常有意义的事情，要对小鱼好。<br>小鱼给我带午饭了，开心^_^`
  },
  {
    date: '2024-02-28',
    msg: `喜欢小鱼，冲！<br>凤凰传奇在济南开演唱会，冲！`
  },
  {
    date: '2024-03-01',
    msg: `三月第一天，冲！<br>我太不应该了，自己的胡乱想法，事后越来越发觉自己做错了，伤害了一个那么爱我的人，身在福中不知福。<span style="font-weight: bold;">小鱼应该是我最信任的人啊，我的小鱼应该是我最信任的人</span>，我今天才意识到，要对小鱼好，要好好珍惜她。<br>小鱼打球真的很吸引我，眼睛里完全容不下别人，喜欢。`
  },
  {
    date: '2024-03-02',
    msg: `我们去了家博会，一起看家具，感受体验，逐步确定了想要的床垫和沙发，和小鱼在一起很开心。<br>晚上一起酿了荔枝酒，一起参与互动的感觉不要太好，小鱼很喜欢，我也是。`
  },
  {
    date: '2024-03-03',
    msg: `小鱼带着朋友一起去谈价，专业的小鱼很吸引我，很有魅力，喜欢。共筑爱巢，喜欢，要对小鱼好。辛苦朋友。<br>要好好保护牙齿！<br>小鱼逐渐通畅，希望她一切都好。`
  },
  {
    date: '2024-03-04',
    msg: `周一，上班，好想小鱼，好想好想。变得怕死，怕离开小鱼，一刻也不想和她分开。<br>晚上给小鱼按摩她哭了，应该是幸福地哭吧，还是被我捏痛了=  = 和喜欢的人做爱很舒服，身体和心灵都被小鱼占满，喜欢小鱼。`
  },
  {
    date: '2024-03-05',
    msg: `忙碌又充实的生活，每天最期待的事情就是下班了，下班后奔向小鱼的怀抱，喜欢。小鱼为我熬中药，第一次熬快熬干了，她很自责，摸摸鱼头，感谢小鱼的付出。我的小鱼应该是我最信任的人。`
  },
  {
    date: '2024-03-07',
    msg: `这几天没休息好，晚上下班身体有点难受，到家后倒头大睡，一觉醒来已快十一点。小鱼忙碌了一晚上，在地板上已铺好床褥，正要入睡......感动，要对小鱼好。`
  },
  {
    date: '2024-03-08',
    msg: `三八妇女节，晚上和小鱼去参加酒吧，看女性电影，和群里那些人，每个人都是独一无二的星星，我的小鱼也是独一无二的，喜欢小鱼。`
  },
  {
    date: '2024-03-09',
    msg: `和小鱼去高密放东西，见到了她爸妈和姥姥，以同事的身份，我手足无措，一整个矜持住了=  =`
  },
  {
    date: '2024-03-10',
    msg: `我手指的第一次，奉献给了小鱼，她说体验感不太好=  =同志仍需努力。逛了高密家具厂，眼花缭乱。晚上我们签了装修合同，小鱼说完成一件大事，期待装修完。`
  },
  {
    date: '2024-03-13',
    msg: `这一晚，我差点失去了我的小鱼，我要长记性，劝我自己不要作死，不要亲手葬送我的爱情。赌这一次，丢掉自我，代价无非是不敢碰爱情了，又有什么关系呢，重在这一次。海纳百川，有容乃大，<span style="font-weight: bold;">什么事情与失去小鱼相比，是那么微不足道</span>，还有什么想不开的。劝我自己谨言慎行，不要作死！！！好好的生活不要自己给自己找不痛快，不要犯贱啊！！`
  },
  {
    date: '2024-03-17',
    msg: `晚上我们做了好多次，她身后环抱我，进入我，抽插着，进行着，我好喜欢小鱼。忽然间她把我的手放到了她的禁区，湿漉漉一片，我进入了小鱼，感受她身体的微妙变化，倾听她的呼吸，气息中带着她独有的体香，我们身体贴近，互相爱抚，彼此疼爱，我好喜欢小鱼，床上床下都喜欢。<br>那一晚我湿了好多，小鱼进攻一次我高潮一次，如一波一波的海浪，感受着她对我的爱，我一次次喷了出来。<br>小鱼说我进步很大，喜欢小鱼。`
  },
  {
    date: '2024-03-21',
    msg: `收到了小鱼送的第一束花🌸，在单位楼底下，送的时候她可扭捏了，弄得我也怪尴尬的= =`,
    imgList: [
      {
        url: new URL("@/assets/images/2024032101.jpg", import.meta.url).href,
        desc: "",
      },
    ]
  },
  {
    date: '2024-03-24',
    msg: `白天去十梅庵公园晒太阳，太阳贼好，我们躺在草地上，正值梅花开放的季节，小鱼白白的皮肤给晒伤噜。<br>晚上我穿着小鱼买的白色衬衣，包臀，又纯又欲，迷死她了，做了好多好多回。然后半夜就有点尿路感染了=  =<br>噢，第一次亲小鱼下面，甜甜的，她说我舌头很灵活，喜欢和小鱼做爱。`
  },
  {
    date: '2024-03-31',
    msg: `小鱼去拔智齿，拔完后说话不清楚，怪可爱的~拔完后又黏我了~哈哈开心^_^临近傍晚越来越痛，表现跟我当初拔智齿肿了似的，但小鱼抵抗力好，但愿睡一觉就好了，希望小鱼好！<br>今天小鱼同学去搬家具，搬完后家里空空荡荡，和小鱼说要记录装修的过程，留着以后回味。小鱼搬到我这边来，她睡在地板上，铺床的过程像铺炕哈哈，喜欢小鱼。`
  },
  {
    date: '2024-04-05',
    msg: `和小鱼以及羽毛球群里的小伙伴们一起去黄岛露营，很开心，大家吃吃喝喝。小雅来青岛，晚上我们见了面吃了饭，大约七年没见面了，还是当年貌，希望身边人都能过得好。`
  },
  {
    date: '2024-04-07',
    msg: `今天家里开始搞水电了，小鱼去沟通了下，距离搬进新家又近了一步！开心，喜欢小鱼。`
  },
  {
    date: '2024-04-17',
    msg: `窗户安好啦！新玻璃太干净了，我第一眼没看出来有玻璃。把里外的护栏拆掉后，显得格外通透明亮。`
  },
  {
    date: '2024-04-20',
    msg: `我们来常州了，看凤凰传奇演唱会，2024年巡演首站。<br>中午见到了小鱼的两位室友和她们的对象，胖胖的女生（小八）是小鱼最好的朋友，人很好，看得出来也很喜欢我嘻嘻。<br>凤凰传奇场子贼火热！贼嗨！！我和小鱼的第一场演唱会，超值，和小鱼喊得也非常开心。回去路上小鱼说把喜欢的人介绍给她的好朋友和家人她非常开心，我也很感谢小鱼信任我，要对小鱼好，少作妖哦~`,
    imgList: [
      {
        url: new URL("@/assets/images/2024042001.jpg", import.meta.url).href,
        desc: "凤凰传奇演唱会首站 · 常州",
      },
    ]
  },
  {
    date: '2024-04-29',
    msg: `小鱼明天晚上要回家过五一了，明早分开就是五一前最后一面了，呜呜想起来就好难过(╥_╥)要跟小鱼分开四天五宿，想哭(╥﹏╥)<br>今天柜子设计图出来了，非常重要的柜子，储物！我俩碰了一下想法，说着说着她说感冒了身体不太舒服，先挂了。我心里一紧，希望所有的苦难疾病都离小鱼远远的。喜欢的人遇到困难的时候原来是会怨恨自己无能为力的。<br>好想小鱼，好爱小鱼。`
  },
  {
    date: '2024-05-01',
    msg: `五月第一天，崭新的一月，小鱼说May，代表无数可能，冲！人生太有限了，珍惜当下。`,
  },
  {
    date: '2024-05-02',
    msg: `在一起五个月了，感觉时间嗖的一下就过去了，但想想也经历了不少，去过一些地方，每个周末都很充实。和小鱼分开的第三天，想她。`,
  },
  {
    date: '2024-05-04',
    msg: `和小鱼分开了好几天，今天见面小鱼说见我都陌生了，不好意思抱≦(._.)≧好想小鱼，今天她感冒好多了，假期前三天一直在睡大觉，小鱼体质好，我也要多吃饭！`,
  },
  {
    date: '2024-05-08',
    msg: `小鱼给我买了提高免疫力的益生菌，谢谢小鱼。`,
  },
  {
    date: '2024-05-09',
    msg: `小鱼昨晚睡觉可能落枕了，身体酸痛，希望小鱼好，快快好起来~`,
  },
  {
    date: '2024-05-13',
    msg: `周一，今天我休年假，去城阳的奥林匹克雕塑公园呆了会儿，傍晚接小鱼下班，第一次去她单位。小鱼开玩笑说“我也有今天”，指有人接下班。要对小鱼好，喜欢和她呆在一起。<br>小鱼说单位可能要降薪，对于自己未来的职业生涯有点迷茫，不知要何去何从。切换赛道确实困难，没有头绪。不急不躁，都会有办法的。`,
  },
  {
    date: '2024-05-14',
    msg: `今天依旧休假，下午带翘班的小鱼去了崂山。仰口沙滩的海水很青，挺好看。我们绕着环岛公路一直走，一路的景色很美，工作日车也很少，天时地利人和。`,
    imgList: [
      {
        url: new URL("@/assets/images/2024051401.jpg", import.meta.url).href,
        desc: "青山渔村",
      },
    ]
  },
  {
    date: '2024-05-16',
    msg: `小鱼不开心，不开心了就翻旧账，不喜欢。我本无心做的事好揪着我不放，心累。`,
  },
]

export default dailyList