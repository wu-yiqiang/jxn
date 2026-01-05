export const All = '全部'
export enum STATUS {
  LIST = 'list',
  DETAILS = 'details',
}
export const locations = [
  {
    value: All,
    label: All,
  },
  {
    value: '保定',
    label: '保定',
  },
  {
    value: '承德',
    label: '承德',
  },
  {
    value: '沧州',
    label: '沧州',
  },
  {
    value: '邯郸',
    label: '邯郸',
  },
  {
    value: '衡水',
    label: '衡水',
  },
  {
    value: '廊坊',
    label: '廊坊',
  },
  {
    value: '秦皇岛',
    label: '秦皇岛',
  },
  {
    value: '石家庄桥西',
    label: '石家庄桥西',
  },
  {
    value: '石家庄桥东',
    label: '石家庄桥东',
  },
  {
    value: '石家庄金融',
    label: '石家庄金融',
  },
  {
    value: '唐山',
    label: '唐山',
  },
  {
    value: '邢台',
    label: '邢台',
  },
  {
    value: '张家口',
    label: '张家口',
  },
]

export enum subjectType {
  GGK = '公共课',
  ZYK = '专业课',
}
export const subjects = [
  {
    label: All,
    value: All,
  },
  {
    label: '公共课',
    value: '公共课',
  },
  {
    label: '专业课',
    value: '专业课',
  },
]

export const courses = [
  {
    id: 1,
    image: 't1.jpg',
    type: subjectType.ZYK,
    title: '李海英',
    secTitle: '佳鑫诺优秀教师',
    vetifyNumber: 5243,
    desc: '佳鑫诺优秀教师',
    location: ['保定', '唐山', '廊坊', '张家口', '承德', '沧州', '石家庄桥东', '石家庄桥西', '石家庄金融', '秦皇岛', '衡水', '邢台', '邯郸'],
  },
  {
    id: 2,
    image: 't2.jpg',
    type: subjectType.ZYK,
    title: '曹默涵',
    secTitle: '佳鑫诺优秀教师',
    vetifyNumber: 5546,
    desc: '佳鑫诺优秀教师',
    location: ['保定', '唐山', '廊坊', '张家口', '承德', '沧州', '石家庄桥东', '石家庄桥西', '石家庄金融', '秦皇岛', '衡水', '邢台', '邯郸'],
  },
  {
    id: 3,
    image: 't3.jpg',
    type: subjectType.ZYK,
    title: '何依诺',
    secTitle: '佳鑫诺优秀教师',
    vetifyNumber: 2342,
    desc: '佳鑫诺优秀教师',
    location: ['保定', '廊坊', '承德', '沧州', '秦皇岛', '衡水', '邯郸'],
  },
  {
    id: 4,
    image: 't4.png',
    type: subjectType.ZYK,
    title: '张子壮',
    secTitle: '佳鑫诺优秀教师',
    vetifyNumber: 3253,
    desc: '佳鑫诺优秀教师',
    location: ['保定', '承德'],
  },
  {
    id: 5,
    image: 't5.jpg',
    type: subjectType.GGK,
    title: '丁捷',
    secTitle: '政治主讲老师，多年教学经验，上岸学员众多',
    vetifyNumber: 2131,
    desc: '政治主讲老师，多年教学经验，上岸学员众多',
    location: ['衡水'],
  },
  {
    id: 6,
    image: 't6.png',
    typeTitle: 'course_center_qkk.png',
    type: subjectType.GGK,
    title: '李可佳',
    secTitle: '专升本英语授课讲师，从业多年，经验丰富，服务学员多数上岸本科',
    vetifyNumber: 3216,
    desc: '专升本英语授课讲师，从业多年，经验丰富，服务学员多数上岸本科',
    location: ['保定', '廊坊', '张家口', '承德', '沧州', '石家庄桥东', '石家庄桥西', '秦皇岛', '邢台', '邯郸'],
  },
  {
    id: 7,
    image: 't7.png',
    type: subjectType.GGK,
    title: '杨兆璇',
    secTitle: '佳鑫诺多年政治中特讲师，经验丰富，深受学生喜爱',
    vetifyNumber: 3261,
    desc: '佳鑫诺多年政治中特讲师，经验丰富，深受学生喜爱',
    location: ['唐山'],
  },
  {
    id: 8,
    image: 't8.png',
    type: subjectType.ZYK,
    title: '李依真',
    secTitle:
      '佳鑫诺教育集团教育心理学教师 曾获年度“优秀教师”，“名师奖” 从事教育心理学专业科目教学多年，授课经验丰富，对考情和命题规律有全面深入的研究，授课深入浅出、直击要害。多次带出省第一学员',
    vetifyNumber: 6154,
    desc: '佳鑫诺教育集团教育心理学教师 曾获年度“优秀教师”，“名师奖” 从事教育心理学专业科目教学多年，授课经验丰富，对考情和命题规律有全面深入的研究，授课深入浅出、直击要害。多次带出省第一学员',
    location: ['保定'],
  },
  {
    id: 9,
    image: 't9.png',
    type: subjectType.ZYK,
    title: '杨珊',
    secTitle:
      '毕业于河北民族师范学院 教育理念：用心育人，以德树人；传道解惑，教书育人。 熟悉四级课程体系，基础导学班、精讲班、提高班、全程营、临考实战等各类课程',
    vetifyNumber: 4342,
    desc: '毕业于河北民族师范学院 教育理念：用心育人，以德树人；传道解惑，教书育人。 熟悉四级课程体系，基础导学班、精讲班、提高班、全程营、临考实战等各类课程',
    location: ['廊坊', '张家口'],
  },
  {
    id: 10,
    image: 't10.png',
    type: subjectType.ZYK,
    title: '郭雅贺',
    secTitle:
      '文史基础课程教研组核心教师，多次负责大纲解读 获得全日制校区“园丁奖”、1对1项目部—桃李芬芳奖、“优秀教师奖”、公开课大赛“最受欢迎奖”、教师技能大赛二等奖 深耕一线教学5年+，熟悉四级课程体系',
    vetifyNumber: 5243,
    desc: '文史基础课程教研组核心教师，多次负责大纲解读 获得全日制校区“园丁奖”、1对1项目部—桃李芬芳奖、“优秀教师奖”、公开课大赛“最受欢迎奖”、教师技能大赛二等奖 深耕一线教学5年+，熟悉四级课程体系',
    location: ['邯郸'],
  },
  {
    id: 11,
    image: 't11.png',
    type: subjectType.GGK,
    title: '张子豪',
    secTitle:
      '1.带头参与编纂资料包括：政治教材、模拟考试15套卷、教材学案、教学测试套卷。 2.教授课程班型包括精讲提高及超越营等全覆盖。 3.政治教学经验九年，成功帮助6000+学子成功上岸',
    vetifyNumber: 21211,
    desc: '1.带头参与编纂资料包括：政治教材、模拟考试15套卷、教材学案、教学测试套卷。 2.教授课程班型包括精讲提高及超越营等全覆盖。 3.政治教学经验九年，成功帮助6000+学子成功上岸',
    location: ['石家庄桥东'],
  },
  {
    id: 12,
    image: 't12.png',
    type: subjectType.ZYK,
    title: '王琳伟',
    secTitle:
      '佳鑫诺教育集团专升本数学组金牌数学教师 2.多年直播及面授经验，负责佳鑫诺专升本公共数学课各种班型，包括基础衔接课、精讲课、提高课、临考实战及高端课程全程营、超越营、一对一等。 3.教学风格：活泼热情',
    vetifyNumber: 23615,
    desc: '佳鑫诺教育集团专升本数学组金牌数学教师 2.多年直播及面授经验，负责佳鑫诺专升本公共数学课各种班型，包括基础衔接课、精讲课、提高课、临考实战及高端课程全程营、超越营、一对一等。 3.教学风格：活泼热情',
    location: ['秦皇岛'],
  },
  {
    id: 13,
    image: 't13.png',
    type: subjectType.ZYK,
    title: '徐宁',
    secTitle:
      '1. 佳鑫诺教育集团金牌数学教师 2. 从事专升本教学多年时间，服务学员超5000+. 担任佳鑫诺专升本公共课基础班、精讲大班、提高班、临考实战班、超越营、高端特色课程讲师 4. 教学风格：幽默风趣',
    vetifyNumber: 25943,
    desc: '1. 佳鑫诺教育集团金牌数学教师 2. 从事专升本教学多年时间，服务学员超5000+. 担任佳鑫诺专升本公共课基础班、精讲大班、提高班、临考实战班、超越营、高端特色课程讲师 4. 教学风格：幽默风趣',
    location: ['唐山'],
  },
]
