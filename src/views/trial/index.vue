<template>
  <div class="Home">
    <Topbar />
    <Tabbar v-model:value="tab" :tabs="tabs" />
    <div class="content news" style="margin-top: 20px; position: relative; z-index: 110">
      <el-carousel class="banner-list">
        <el-carousel-item v-for="item in bannerImg" :key="item">
          <img :src="item.url" :alt="item.alt" class="banner" />
        </el-carousel-item>
      </el-carousel>

      <el-breadcrumb separator-class="el-icon-arrow-right" style="position: relative; z-index: 1000; margin-bottom: 15px">
        <el-breadcrumb-item><a href="/" style="font-weight: 500; font-size: 16px">首页</a></el-breadcrumb-item>
        <el-breadcrumb-item><a style="font-weight: 600; color: rgb(51, 51, 51); font-size: 16px">试听课</a></el-breadcrumb-item>
      </el-breadcrumb>

      <div class="try-search flex-align">
        <div class="flex-align">
          <img src="../../assets/try_class.png" alt="试听课学科类别" class="try-icon" /> <span class="try-name">学科类别：</span>
          <el-select v-model="classvalue" placeholder="请选择" style="width: 200px">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
        <div class="flex-align" style="margin-left: 80px">
          <img src="../../assets/try_class.png" alt="试听课学科" class="try-icon" /> <span class="try-name">学科名称：</span>
          <el-cascader :options="optionsdata" clearable :clear-icon="CloseBold" placeholder="请选择学科" />
        </div>
      </div>
      <div class="">
        <ul class="course-list">
          <li class="course-list-li" v-for="value in courseData">
            <img :src="value.img" alt="佳鑫诺专升本，河北专升本" class="course-list-li-img" />
            <p class="course-list-li-name">{{ value.name }}</p>
            <p class="course-list-foot">
              <span class="course-list-foot-teacher">教师：{{ value.teacher }}</span>
              <button type="button" class="el-button course-list-foot-btn el-button--primary is-round" @click="videodialogVisible = true">
                <span>免费试听</span>
              </button>
            </p>
          </li>
        </ul>
      </div>
      <el-pagination
        class="custom-pagination"
        background
        layout="prev, pager, next"
        :total="15"
        :page-size="8"
        @current-change="handleCurrentChange"
      />
    </div>

    <Bottombar />
  </div>
  <el-dialog v-model="videodialogVisible" width="50%" title="试听课播放">
    <video
      :autoplay="true"
      src="https://qn.jxnedu.cn/zsbguanwang/wuliao-stvideo/video/文史基础-小程_batch_9GY0N-ofwwd6lmKV7SR75.mp4"
      :controls="'controls'"
      class="secondBack"
    ></video>
  </el-dialog>
</template>
<script setup lang="ts">
import Topbar from '../home/topbar.vue'
import Tabbar from '../home/tabbar.vue'
import Bottombar from '../home/bottombar.vue'
import Course from '@/views/course/index.vue'
import Assiasnt from '@/views/assisant/index.vue'
import Contact from '@/views/contact/index.vue'
import index from '@/views/index/index.vue'
import { TABSKEYS } from '../home/data'
import { ref } from 'vue'
import { CloseBold } from '@element-plus/icons-vue'
const tab = ref(TABSKEYS.HOME)
const tabs = [
  { label: '首页', value: TABSKEYS.HOME, component: index },
  { label: '选课程', value: TABSKEYS.COURSE, component: Course },
  { label: '找名师', value: TABSKEYS.TEACHER, component: Course },
  { label: '升本情况', value: TABSKEYS.SCHOOL, component: Course },
  { label: '升本助手', value: TABSKEYS.ASSISSANT, component: Assiasnt },
  { label: '联系我们', value: TABSKEYS.CONTACT, component: Contact },
  { label: '媒体合伙人', value: TABSKEYS.UNIN, component: Course },
]
let bannerImg = [
  {
    url: 'https://qn.jxnedu.cn/zsbguanwang/wuliao-lunbo/教育培训课程宣传推广横板海报banner-副本_bzwiesYEfDYIYZkai8qWg.jpg',
    alt: '佳鑫诺专升本，河北专升本',
  },
  {
    url: 'https://qn.jxnedu.cn/zsbguanwang/wuliao-lunbo/稿定设计-1(1)_glrt1KtSuoRylH4k43l1G.jpg',
    alt: '佳鑫诺专升本，河北专升本',
  },
  {
    url: 'https://qn.jxnedu.cn/zsbguanwang/wuliao-lunbo/暑假招生3D公众号首图_2xa7yWWII9naLOUWkBIhY.jpg',
    alt: '佳鑫诺专升本，河北专升本',
  },
  {
    url: 'https://qn.jxnedu.cn/zsbguanwang/wuliao-lunbo/快来买(3)_2gh1oEYehduxDQQUrqV3j.jpg',
    alt: '佳鑫诺专升本，河北专升本',
  },
  {
    url: 'https://qn.jxnedu.cn/zsbguanwang/test/wuliao-lunbo/89113220_教育培训剪辑技能培训招生公众号首图.jpg',
    alt: '佳鑫诺专升本，河北专升本',
  },
]
const options = [
  {
    value: '1',
    label: '专业课',
  },
  {
    value: '2',
    label: '公共课',
  },
]
let classvalue = ref('')

const optionsdata = ref([
  {
    value: '经济学',
    label: '经济学',
    children: [
      {
        value: '经济学',
        label: '经济学',
      },
      {
        value: '金融学',
        label: '金融学',
      },
      {
        value: '金融工程',
        label: '金融工程',
      },
      {
        value: '保险学',
        label: '保险学',
      },
      {
        value: '经济与金融',
        label: '经济与金融',
      },
    ],
  },
  {
    value: '管理学1',
    label: '管理学1',
    children: [
      {
        value: '经济学2',
        label: '经济学',
      },
      {
        value: '金融学3',
        label: '金融学',
      },
      {
        value: '金融工程4',
        label: '金融工程',
      },
      {
        value: '保险学2',
        label: '保险学',
      },
      {
        value: '经济与金融2',
        label: '经济与金融',
      },
    ],
  },
  {
    value: '管理学2',
    label: '管理学2',
    children: [
      {
        value: '经济学4',
        label: '经济学',
      },
      {
        value: '金融学5',
        label: '金融学',
      },
      {
        value: '金融工程6',
        label: '金融工程',
      },
      {
        value: '保险学7',
        label: '保险学',
      },
      {
        value: '经济与金融8',
        label: '经济与金融',
      },
    ],
  },
])
let videodialogVisible = ref(false)
let courseData = ref([
  {
    name: '文史基础-语音',
    teacher: '程晓柳',
    img: 'https://qn.jxnedu.cn/zsbguanwang/wuliao-stvideo/image/23考研课程招生banner横版海报_pht69aYeATx0nPhi2hk3Z.jpg',
  },
  {
    name: '英语-基础先修',
    teacher: '关闪闪',
    img: 'https://qn.jxnedu.cn/zsbguanwang/wuliao-stvideo/image/23%E8%80%83%E7%A0%94%E8%AF%BE%E7%A8%8B%E6%8B%9B%E7%94%9Fbanner%E6%A8%AA%E7%89%88%E6%B5%B7%E6%8A%A5(1)_OrTqDZkUjDwb-YD7hNZ81.jpg',
  },
  {
    name: '政治-马哲基础先修2',
    teacher: '刘晶（马哲）',
    img: 'https://qn.jxnedu.cn/zsbguanwang/wuliao-stvideo/image/23%E8%80%83%E7%A0%94%E8%AF%BE%E7%A8%8B%E6%8B%9B%E7%94%9Fbanner%E6%A8%AA%E7%89%88%E6%B5%B7%E6%8A%A5(2)_H-4oSIpuOv3xOZGjurz1v.jpg',
  },
  {
    name: '马哲-基础先修1',
    teacher: '刘晶（马哲）',
    img: 'https://qn.jxnedu.cn/zsbguanwang/wuliao-stvideo/image/23%E8%80%83%E7%A0%94%E8%AF%BE%E7%A8%8B%E6%8B%9B%E7%94%9Fbanner%E6%A8%AA%E7%89%88%E6%B5%B7%E6%8A%A5(2)_H-4oSIpuOv3xOZGjurz1v.jpg',
  },
  {
    name: '英语',
    teacher: '李月',
    img: 'https://qn.jxnedu.cn/zsbguanwang/wuliao-stvideo/image/23%E8%80%83%E7%A0%94%E8%AF%BE%E7%A8%8B%E6%8B%9B%E7%94%9Fbanner%E6%A8%AA%E7%89%88%E6%B5%B7%E6%8A%A5(1)_OrTqDZkUjDwb-YD7hNZ81.jpg',
  },
  {
    name: '政治-马哲基础',
    teacher: '张旭敏',
    img: 'https://qn.jxnedu.cn/zsbguanwang/wuliao-stvideo/image/23%E8%80%83%E7%A0%94%E8%AF%BE%E7%A8%8B%E6%8B%9B%E7%94%9Fbanner%E6%A8%AA%E7%89%88%E6%B5%B7%E6%8A%A5(2)_H-4oSIpuOv3xOZGjurz1v.jpg',
  },
  {
    name: '极限、导数、积分',
    teacher: '郝亚茹',
    img: 'https://qn.jxnedu.cn/zsbguanwang/wuliao-stvideo/image/23考研课程招生banner横版海报(3)_VDFLOJ2ev-VhF11jm0w4-.jpg',
  },
  {
    name: '高等数学-行列式',
    teacher: '陈玉莹',
    img: 'https://qn.jxnedu.cn/zsbguanwang/wuliao-stvideo/image/23考研课程招生banner横版海报(3)_VDFLOJ2ev-VhF11jm0w4-.jpg',
  },
  {
    name: '高等数学-行列式',
    teacher: '崔云帆',
    img: 'https://qn.jxnedu.cn/zsbguanwang/wuliao-stvideo/image/23考研课程招生banner横版海报(3)_VDFLOJ2ev-VhF11jm0w4-.jpg',
  },
  {
    name: '矩阵的乘法',
    teacher: '张佳音',
    img: 'https://qn.jxnedu.cn/zsbguanwang/wuliao-stvideo/image/23考研课程招生banner横版海报(3)_VDFLOJ2ev-VhF11jm0w4-.jpg',
  },
])

function handleCurrentChange(val) {
  if (val == 2) {
    courseData.value = [
      {
        name: '生理学-先修课',
        teacher: '佳鑫诺名师',
        img: 'https://qn.jxnedu.cn/zsbguanwang/wuliao-stvideo/image/%E4%BA%BA%E5%83%8F%E5%90%B8%E7%9D%9B%E7%BD%91%E6%84%9F%E8%A7%86%E9%A2%91%E5%B0%81%E9%9D%A2%E5%B0%8F%E7%BA%A2%E4%B9%A6%E5%B0%81%E9%9D%A2aigc(2)_SVIUTnbSDyRvnx5S16IYL.jpg',
      },
      {
        name: '人体解剖-先修课',
        teacher: '杜健丽',
        img: 'https://qn.jxnedu.cn/zsbguanwang/wuliao-stvideo/image/%E4%BA%BA%E5%83%8F%E5%90%B8%E7%9D%9B%E7%BD%91%E6%84%9F%E8%A7%86%E9%A2%91%E5%B0%81%E9%9D%A2%E5%B0%8F%E7%BA%A2%E4%B9%A6%E5%B0%81%E9%9D%A2aigc_DOGFNqdFQ3q-sRcdpcZa2.jpg',
      },
      {
        name: '文史基础-鸦片战争前的世界',
        teacher: '于瑞',
        img: 'https://qn.jxnedu.cn/zsbguanwang/wuliao-stvideo/image/%E4%BA%BA%E5%83%8F%E5%90%B8%E7%9D%9B%E7%BD%91%E6%84%9F%E8%A7%86%E9%A2%91%E5%B0%81%E9%9D%A2%E5%B0%8F%E7%BA%A2%E4%B9%A6%E5%B0%81%E9%9D%A2aigc(5)_-AAAHomPfjh1AxTbo21vh.jpg',
      },
    ]
  } else {
    courseData.value = [
      {
        name: '文史基础-语音',
        teacher: '程晓柳',
        img: 'https://qn.jxnedu.cn/zsbguanwang/wuliao-stvideo/image/23考研课程招生banner横版海报_pht69aYeATx0nPhi2hk3Z.jpg',
      },
      {
        name: '英语-基础先修',
        teacher: '关闪闪',
        img: 'https://qn.jxnedu.cn/zsbguanwang/wuliao-stvideo/image/23%E8%80%83%E7%A0%94%E8%AF%BE%E7%A8%8B%E6%8B%9B%E7%94%9Fbanner%E6%A8%AA%E7%89%88%E6%B5%B7%E6%8A%A5(1)_OrTqDZkUjDwb-YD7hNZ81.jpg',
      },
      {
        name: '政治-马哲基础先修2',
        teacher: '刘晶（马哲）',
        img: 'https://qn.jxnedu.cn/zsbguanwang/wuliao-stvideo/image/23%E8%80%83%E7%A0%94%E8%AF%BE%E7%A8%8B%E6%8B%9B%E7%94%9Fbanner%E6%A8%AA%E7%89%88%E6%B5%B7%E6%8A%A5(2)_H-4oSIpuOv3xOZGjurz1v.jpg',
      },
      {
        name: '马哲-基础先修1',
        teacher: '刘晶（马哲）',
        img: 'https://qn.jxnedu.cn/zsbguanwang/wuliao-stvideo/image/23%E8%80%83%E7%A0%94%E8%AF%BE%E7%A8%8B%E6%8B%9B%E7%94%9Fbanner%E6%A8%AA%E7%89%88%E6%B5%B7%E6%8A%A5(2)_H-4oSIpuOv3xOZGjurz1v.jpg',
      },
      {
        name: '英语',
        teacher: '李月',
        img: 'https://qn.jxnedu.cn/zsbguanwang/wuliao-stvideo/image/23%E8%80%83%E7%A0%94%E8%AF%BE%E7%A8%8B%E6%8B%9B%E7%94%9Fbanner%E6%A8%AA%E7%89%88%E6%B5%B7%E6%8A%A5(1)_OrTqDZkUjDwb-YD7hNZ81.jpg',
      },
      {
        name: '政治-马哲基础',
        teacher: '张旭敏',
        img: 'https://qn.jxnedu.cn/zsbguanwang/wuliao-stvideo/image/23%E8%80%83%E7%A0%94%E8%AF%BE%E7%A8%8B%E6%8B%9B%E7%94%9Fbanner%E6%A8%AA%E7%89%88%E6%B5%B7%E6%8A%A5(2)_H-4oSIpuOv3xOZGjurz1v.jpg',
      },
      {
        name: '极限、导数、积分',
        teacher: '郝亚茹',
        img: 'https://qn.jxnedu.cn/zsbguanwang/wuliao-stvideo/image/23考研课程招生banner横版海报(3)_VDFLOJ2ev-VhF11jm0w4-.jpg',
      },
      {
        name: '高等数学-行列式',
        teacher: '陈玉莹',
        img: 'https://qn.jxnedu.cn/zsbguanwang/wuliao-stvideo/image/23考研课程招生banner横版海报(3)_VDFLOJ2ev-VhF11jm0w4-.jpg',
      },
      {
        name: '高等数学-行列式',
        teacher: '崔云帆',
        img: 'https://qn.jxnedu.cn/zsbguanwang/wuliao-stvideo/image/23考研课程招生banner横版海报(3)_VDFLOJ2ev-VhF11jm0w4-.jpg',
      },
      {
        name: '矩阵的乘法',
        teacher: '张佳音',
        img: 'https://qn.jxnedu.cn/zsbguanwang/wuliao-stvideo/image/23考研课程招生banner横版海报(3)_VDFLOJ2ev-VhF11jm0w4-.jpg',
      },
    ]
  }
}
</script>
<style scoped lang="scss">
.Home {
}

.content {
  width: 1200px;
  margin: 0 auto;
}

.banner-list {
  width: 1200px;
  height: 410px;
  margin: 20px auto;
  border-radius: 10px;
  cursor: pointer;

  ::v-deep .el-carousel__container {
    height: 410px;
  }
}

.try-search {
  margin: 20px 0;
}

.flex-align {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.try-icon {
  width: 14px;
  height: 14px;
}

.try-name {
  color: #333;
  font-size: 14px;
  margin: 0 5px;
}

::v-deep .el-input__inner {
  height: 32px;
  line-height: 32px;
}

.course-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: 40px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.course-list-li {
  width: 224px;
  margin-bottom: 20px;
  margin-right: 20px;
  background-color: #fff;
  padding-bottom: 15px;
  border-radius: 10px;
  overflow: hidden;
}

.course-list-li:nth-child(5n) {
  margin-right: 0;
}

.course-list-li-img {
  display: block;
  width: 224px;
  height: 145px;
}

.course-list-li-name {
  padding: 14px 14px 8px;
  font-size: 16px;
  font-weight: 600;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.course-list-foot {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 10px 14px;
  border-top: 1px #eeeeee solid;
}

.course-list-foot-teacher {
  font-size: 14px;
  color: #333;
  max-width: 50%;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.course-list-foot-btn {
  width: 80px;
  height: 26px;
  line-height: 26px;
  padding: 0 !important;
  background: #00baff !important;
  border-radius: 16px;
  font-size: 13px !important;
  color: #fff;
}

.el-pagination {
  white-space: nowrap;
  padding: 2px 5px;
  color: #303133;
  font-weight: 700;
}

.custom-pagination {
  text-align: center;
  margin: 30px 0 50px;
  display: flex;
  justify-content: center;
}

.secondBack {
  width: 800px;
  margin: 0 auto;
  display: block;
}
</style>
