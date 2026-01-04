<template>
  <section class="index">
    <div class="content">
      <el-carousel class="banner-list">
        <el-carousel-item v-for="item in bannerImg" :key="item">
          <img :src="item.url" :alt="item.alt" class="banner" />
        </el-carousel-item>
      </el-carousel>
      <div class="active">
        <div class="active-mode" @click="$router.push('/answer')">
          <img src="../../assets/active_exam.png" alt="模拟卷答案查看入口" class="active-icon" />
          <p><span class="active-title">模拟卷答案查看入口</span> <span class="active-desc">模拟卷答案</span></p>
        </div>
        <div class="active-mode active-bg" @click="$router.push('/analysis')">
          <img src="../../assets/active_video.png" alt="模拟卷视频解析" class="active-icon" />
          <p><span class="active-title">模拟卷直播带学课购买入口</span> <span class="active-desc">模拟卷视频解析</span></p>
        </div>
        <div class="active-mode active-bg2" @click="showModel">
          <img src="../../assets/active_other.png" alt="模拟卷直播带学课简介" class="active-icon" />
          <p><span class="active-title">模拟卷直播带学课简介</span> <span class="active-desc">佳鑫诺未来可期</span></p>
        </div>
      </div>
      <h3 class="content-tlt">佳鑫诺专升本免费试听课</h3>
      <p class="content-tlt-desc">开启学习新征程，聆听课堂盛宴</p>
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
      <a title="佳鑫诺专升本，河北专升本" class="course-more-wrap">
        <button type="button" @click="$router.push('/trial')" class="el-button course-more el-button--primary is-round">
          <span>更多试听课</span>
        </button></a
      >
    </div>
    <div class="zixun-wrap">
      <div class="content">
        <h3 class="content-tlt">河北专升本资讯前沿</h3>
        <p class="content-tlt-desc">揭秘升本密码，洞察考试趋势</p>
        <div class="zixun-list-wrap">
          <section class="zixun-list">
            <h4 class="zixun-list-tlt bettween">
              <span><img src="../../assets/index_zx_new_icon.png" alt="佳鑫诺专升本，河北专升本" class="zixun-logo" />最新资讯 </span>
              <a href="newsList.html?menu=最新资讯" title="最新资讯" class="list-more">更多</a>
            </h4>
            <ul class="zixun-list-cont">
              <li class="flex-align">
                <img src="../../assets/index_zx_new_icon22.png" class="zixun-new-ico" />
                <a href="newsListDetail.html?id=547&amp;menu=最新资讯" title="佳鑫诺最新资讯" class="zixun-new-txt">河北专升本线上直播来啦</a>
                <span class="zixun-new-date">2025-12-25</span>
              </li>
              <li class="flex-align">
                <img src="../../assets/index_zx_new_icon22.png" class="zixun-new-ico" />
                <a href="newsListDetail.html?id=509&amp;menu=最新资讯" title="佳鑫诺最新资讯" class="zixun-new-txt">26年专升本最新动态！事关考纲</a>
                <span class="zixun-new-date">2025-11-13</span>
              </li>
              <li class="flex-align">
                <img src="../../assets/index_zx_new_icon22.png" class="zixun-new-ico" />
                <a href="newsListDetail.html?id=461&amp;menu=最新资讯" title="佳鑫诺最新资讯" class="zixun-new-txt">佳鑫诺全程营三期衔接课来啦</a>
                <span class="zixun-new-date">2025-09-25</span>
              </li>
              <li class="flex-align">
                <img src="../../assets/index_zx_new_icon22.png" class="zixun-new-ico" />
                <a href="newsListDetail.html?id=453&amp;menu=最新资讯" title="佳鑫诺最新资讯" class="zixun-new-txt">一站式小程序权限已添加！</a>
                <span class="zixun-new-date">2025-09-22</span>
              </li>
              <li class="flex-align">
                <img src="../../assets/index_zx_new_icon22.png" class="zixun-new-ico" />
                <a href="newsListDetail.html?id=448&amp;menu=最新资讯" title="佳鑫诺最新资讯" class="zixun-new-txt"
                  >26届全程营二期开课！三期火热招生中</a
                >
                <span class="zixun-new-date">2025-09-15</span>
              </li>
            </ul>
            <img src="../../assets/index_zx_new_mark.png" alt="佳鑫诺专升本最新资讯" class="zixun-new-mark" />
          </section>
          <section class="zixun-list zixun-list-red">
            <h4 class="zixun-list-tlt bettween">
              <span><img src="../../assets/index_zx_zc_icon.png" alt="佳鑫诺升本政策" class="zixun-logo" />升本政策 </span>
              <a href="newsList.html?menu=升本政策" title="升本政策" class="list-more">更多</a>
            </h4>
            <ul class="zixun-list-cont">
              <li class="flex-align">
                <img src="../../assets/index_zx_zc_hot.png" alt="佳鑫诺升本政策" class="zixun-zc-ico" />
                <a href="newsListDetail.html?id=487&amp;menu=升本政策" title="佳鑫诺升本政策" id="zhengce" class="zixun-new-txt"
                  >官方：专升本改革后10问10答</a
                >
                <span class="zixun-new-date">2025-10-17</span>
              </li>
              <li class="flex-align">
                <img src="../../assets/index_zx_zc_hot2.png" alt="佳鑫诺升本政策" class="zixun-zc-ico" />
                <a href="newsListDetail.html?id=449&amp;menu=升本政策" title="佳鑫诺升本政策" id="zhengce" class="zixun-new-txt"
                  >专升本未来发展趋势</a
                >
                <span class="zixun-new-date">2025-09-18</span>
              </li>
              <li class="flex-align">
                <img src="../../assets/index_zx_zc_hot3.png" alt="佳鑫诺升本政策" class="zixun-zc-ico" />
                <a href="newsListDetail.html?id=293&amp;menu=升本政策" title="佳鑫诺升本政策" id="zhengce" class="zixun-new-txt"
                  >专升本备考大几开始最合适？</a
                >
                <span class="zixun-new-date">2025-04-23</span>
              </li>
              <li class="flex-align">
                <img src="../../assets/index_zx_zc_hot.png" alt="佳鑫诺升本政策" class="zixun-zc-ico zixun-new-ico-grey" />
                <a href="newsListDetail.html?id=292&amp;menu=升本政策" title="佳鑫诺升本政策" id="zhengce" class="zixun-new-txt"
                  >2025河北专升本艺术专项测试考试安排</a
                >
                <span class="zixun-new-date">2025-04-14</span>
              </li>
              <li class="flex-align">
                <img src="../../assets/index_zx_zc_hot.png" alt="佳鑫诺升本政策" class="zixun-zc-ico zixun-new-ico-grey" />
                <a href="newsListDetail.html?id=288&amp;menu=升本政策" title="佳鑫诺升本政策" id="zhengce" class="zixun-new-txt"
                  >2025河北专升本「报名缴费」常见问题的</a
                >
                <span class="zixun-new-date">2025-03-14</span>
              </li>
            </ul>
            <img src="../../assets/index_zx_zc_mark.png" alt="佳鑫诺升本政策" class="zixun-new-mark" />
          </section>
          <section class="zixun-list">
            <h4 class="zixun-list-tlt bettween">
              <span><img src="../../assets/index_zx_new_icon.png" class="zixun-logo" />考试大纲 </span>
              <a href="newsList.html?menu=考试大纲" title="考试大纲" class="list-more">更多</a>
            </h4>
            <ul class="zixun-list-cont">
              <li class="flex-align">
                <span class="zixun-num">01</span>
                <a href="newsListDetail.html?id=332&amp;menu=考试大纲" title="考试大纲" class="zixun-new-txt">2026年各专业考试大纲</a>
                <span class="zixun-new-date">2025-05-28</span>
              </li>
              <li class="flex-align">
                <span class="zixun-num">02</span>
                <a href="newsListDetail.html?id=280&amp;menu=考试大纲" title="考试大纲" class="zixun-new-txt">2025年河北专升本考试大纲发布时间</a>
                <span class="zixun-new-date">2025-01-02</span>
              </li>
              <li class="flex-align">
                <span class="zixun-num">03</span>
                <a href="newsListDetail.html?id=195&amp;menu=考试大纲" title="考试大纲" class="zixun-new-txt">2024年河北专升本历史学专业考试大纲</a>
                <span class="zixun-new-date">2024-02-04</span>
              </li>
              <li class="flex-align">
                <span class="zixun-num">04</span>
                <a href="newsListDetail.html?id=199&amp;menu=考试大纲" title="考试大纲" class="zixun-new-txt">2024年河北专升本机械联考大纲</a>
                <span class="zixun-new-date">2024-02-04</span>
              </li>
              <li class="flex-align">
                <span class="zixun-num">05</span>
                <a href="newsListDetail.html?id=196&amp;menu=考试大纲" title="考试大纲" class="zixun-new-txt">2024年河北专升本材料成型考试大纲</a>
                <span class="zixun-new-date">2024-02-04</span>
              </li>
            </ul>
            <img src="../../assets/index_zx_new_mark.png" alt="考试大纲" class="zixun-new-mark" />
          </section>
          <section class="zixun-list">
            <h4 class="zixun-list-tlt bettween">
              <span><img src="../../assets/index_zx_new_icon.png" alt="考试科目" class="zixun-logo" />考试科目 </span>
              <a href="newsList.html?menu=考试科目" title="考试科目" class="list-more">更多</a>
            </h4>
            <ul class="zixun-list-cont">
              <li class="flex-align">
                <span class="zixun-num">01</span>
                <a href="newsListDetail.html?id=252&amp;menu=考试科目" title="考试科目" class="zixun-new-txt">2026年河北专升本考试科目是这些！</a>
                <span class="zixun-new-date">2024-06-15</span>
              </li>
              <li class="flex-align">
                <span class="zixun-num">02</span>
                <a href="newsListDetail.html?id=114&amp;menu=考试科目" title="考试科目" class="zixun-new-txt">文史类——考试科目合集</a>
                <span class="zixun-new-date">2023-11-09</span>
              </li>
              <li class="flex-align">
                <span class="zixun-num">03</span>
                <a href="newsListDetail.html?id=115&amp;menu=考试科目" title="考试科目" class="zixun-new-txt">经管类——考试科目合集</a>
                <span class="zixun-new-date">2023-11-09</span>
              </li>
              <li class="flex-align">
                <span class="zixun-num">04</span>
                <a href="newsListDetail.html?id=116&amp;menu=考试科目" title="考试科目" class="zixun-new-txt">医学类——考试科目合集</a>
                <span class="zixun-new-date">2023-11-09</span>
              </li>
              <li class="flex-align">
                <span class="zixun-num">05</span>
                <a href="newsListDetail.html?id=117&amp;menu=考试科目" title="考试科目" class="zixun-new-txt">艺术类——考试科目合集</a>
                <span class="zixun-new-date">2023-11-09</span>
              </li>
            </ul>
            <img src="../../assets/index_zx_new_mark.png" alt="考试科目" class="zixun-new-mark" />
          </section>
          <section class="zixun-list">
            <h4 class="zixun-list-tlt bettween">
              <span><img src="../../assets/index_zx_new_icon.png" class="zixun-logo" />本科院校 </span>
              <a href="newsList.html?menu=本科院校" title="本科院校" class="list-more">更多</a>
            </h4>
            <ul class="zixun-list-cont">
              <li class="flex-align">
                <span class="zixun-num">01</span>
                <a href="newsListDetail.html?id=242&amp;menu=本科院校" title="本科院校" class="zixun-new-txt">2024年河北建筑工程学院录取分数线</a>
                <span class="zixun-new-date">2024-05-29</span>
              </li>
              <li class="flex-align">
                <span class="zixun-num">02</span>
                <a href="newsListDetail.html?id=243&amp;menu=本科院校" title="本科院校" class="zixun-new-txt">2024年张家口学院专升本录取最低分</a>
                <span class="zixun-new-date">2024-05-29</span>
              </li>
              <li class="flex-align">
                <span class="zixun-num">03</span>
                <a href="newsListDetail.html?id=253&amp;menu=本科院校" title="本科院校" class="zixun-new-txt">2023年河北工业职业技术大学最低录取分</a>
                <span class="zixun-new-date">2024-05-17</span>
              </li>
              <li class="flex-align">
                <span class="zixun-num">04</span>
                <a href="newsListDetail.html?id=102&amp;menu=本科院校" title="本科院校" class="zixun-new-txt">河北经贸大学2个专业，多少分能考上？</a>
                <span class="zixun-new-date">2023-11-07</span>
              </li>
              <li class="flex-align">
                <span class="zixun-num">05</span>
                <a href="newsListDetail.html?id=103&amp;menu=本科院校" title="本科院校" class="zixun-new-txt"
                  >招生院校 | 华北理工大学：分并没有很高</a
                >
                <span class="zixun-new-date">2023-11-07</span>
              </li>
            </ul>
            <img src="../../assets/index_zx_new_mark.png" alt="本科院校" class="zixun-new-mark" />
          </section>
          <section class="zixun-list">
            <h4 class="zixun-list-tlt bettween">
              <span><img src="../../assets/index_zx_new_icon.png" alt="专科院校" class="zixun-logo" />专科院校 </span>
              <a href="newsList.html?menu=专科院校" title="专科院校" class="list-more">更多</a>
            </h4>
            <ul class="zixun-list-cont">
              <li class="flex-align">
                <span class="zixun-num">01</span>
                <a href="newsListDetail.html?id=108&amp;menu=专科院校" title="河北专升本_专科院校" class="zixun-new-txt"
                  >河北化工医药：双高院校，实力超棒！</a
                >
                <span class="zixun-new-date">2023-11-08</span>
              </li>
              <li class="flex-align">
                <span class="zixun-num">02</span>
                <a href="newsListDetail.html?id=109&amp;menu=专科院校" title="河北专升本_专科院校" class="zixun-new-txt"
                  >河北政法：省政法委管理，今年必定是热门！</a
                >
                <span class="zixun-new-date">2023-11-08</span>
              </li>
              <li class="flex-align">
                <span class="zixun-num">03</span>
                <a href="newsListDetail.html?id=105&amp;menu=专科院校" title="河北专升本_专科院校" class="zixun-new-txt"
                  >石家庄职业技术学院：要跟四方学院转设哦</a
                >
                <span class="zixun-new-date">2023-11-07</span>
              </li>
              <li class="flex-align">
                <span class="zixun-num">04</span>
                <a href="newsListDetail.html?id=110&amp;menu=专科院校" title="河北专升本_专科院校" class="zixun-new-txt"
                  >秦职：双高院校，位于河北专科第一梯队！</a
                >
                <span class="zixun-new-date">2023-11-07</span>
              </li>
              <li class="flex-align">
                <span class="zixun-num">05</span>
                <a href="newsListDetail.html?id=111&amp;menu=专科院校" title="河北专升本_专科院校" class="zixun-new-txt"
                  >河北石油职业技术大学：录取分接近本科线</a
                >
                <span class="zixun-new-date">2023-11-07</span>
              </li>
            </ul>
            <img src="../../assets/index_zx_new_mark.png" alt="河北专升本_专科院校" class="zixun-new-mark" />
          </section>
        </div>
        <a href="newsList.html" title="河北专升本_更多资讯" class="course-more-wrap"
          ><button type="button" class="el-button course-more el-button--primary is-round"><!----><!----><span>更多资讯</span></button></a
        >
      </div>
    </div>
    <div class="tixi-wrap">
      <div class="content">
        <h3 class="content-tlt">佳鑫诺专升本独创教学四级课程体系</h3>
        <p class="content-tlt-desc">求木之长，必固其根本；欲流之远，必浚其泉源</p>
        <section class="tixi">
          <ul class="tixi-left">
            <li
              class="tixi-left-li"
              v-for="(value, index) in tixiData"
              @click="activeIndex = index"
              :class="activeIndex === index ? 'tixi-active' : ''"
            >
              {{ value.title }} <i class="el-icon-arrow-right"></i>
            </li>
          </ul>
          <div class="tixi-right">
            <section class="tixi-right-desc">
              <img src="../../assets/index_tixi_icon.png" alt="佳鑫诺专升本_课程体系" class="tixi-right-ico" />
              <p class="tixi-r-txt" v-for="value in tixiData[activeIndex].tixiText"><i class="tixi-dot"></i>{{ value }}</p>
            </section>
            <img src="../../assets/index_tixi_img1.png" alt="佳鑫诺专升本_课程体系" class="tixi-right-img" />
          </div>
        </section>
      </div>
    </div>
    <div class="course-center-book">
      <img src="../../assets/index_tixi_bg.png" alt="专升本辅导资料，模拟卷" class="course-center-book-bg" />
      <div class="content">
        <h3 class="content-tlt" style="margin-top: 0px">独家辅导资料 精准把握考点</h3>
        <img src="../../assets/course_center_book.png" alt="资料订购" class="course-center-book-img" />
        <button type="button" class="el-button course-center-book-btn el-button--primary is-round"><!----><!----><span>模拟卷预约订购</span></button>
        <p class="blue-tips">* 除模拟卷资料外，其余均为内部学员资料，呈现仅供示例参考。</p>
      </div>
    </div>
    <div class="shizi">
      <div class="content">
        <div>
          <h3 class="content-tlt">严选优质师资，实力铸就专业</h3>
          <p class="content-tlt-desc">高学历教研团队领衔，课程更专业，学习更有力</p>
        </div>
        <section class="shizi-desc">
          <p><span class="shizi-desc-txt">本科及以上学历</span></p>
          <p><span class="shizi-desc-txt">拥有各类教师资格等认证及任教条件</span></p>
          <p><span class="shizi-desc-txt">拥有授课经验</span></p>
        </section>
      </div>
    </div>
    <div class="fenxiao">
      <div class="content flex-align" style="height: 100%">
        <p class="fenxiao-tlt">想升本就到<br />佳鑫诺！</p>
        <section style="margin-top: 15px">
          <p class="fenxiao-name">全省分校：</p>
          <ul class="fenxiao-list flex-align">
            <li value="100004" class="fenxiao-name">
              <a
                href="./about.html"
                title="保定分校，沧州分校，承德分校，邯郸分校，衡水分校，廊坊分校，秦皇岛分校，石家庄桥西，石家庄盛典，唐山分校，邢台分校，张家口分校"
                >保定</a
              >
            </li>
            <li value="100013" class="fenxiao-name">
              <a
                href="./about.html"
                title="保定分校，沧州分校，承德分校，邯郸分校，衡水分校，廊坊分校，秦皇岛分校，石家庄桥西，石家庄盛典，唐山分校，邢台分校，张家口分校"
                >沧州</a
              >
            </li>
            <li value="100005" class="fenxiao-name">
              <a
                href="./about.html"
                title="保定分校，沧州分校，承德分校，邯郸分校，衡水分校，廊坊分校，秦皇岛分校，石家庄桥西，石家庄盛典，唐山分校，邢台分校，张家口分校"
                >承德</a
              >
            </li>
            <li value="100006" class="fenxiao-name">
              <a
                href="./about.html"
                title="保定分校，沧州分校，承德分校，邯郸分校，衡水分校，廊坊分校，秦皇岛分校，石家庄桥西，石家庄盛典，唐山分校，邢台分校，张家口分校"
                >邯郸</a
              >
            </li>
            <li value="100010" class="fenxiao-name">
              <a
                href="./about.html"
                title="保定分校，沧州分校，承德分校，邯郸分校，衡水分校，廊坊分校，秦皇岛分校，石家庄桥西，石家庄盛典，唐山分校，邢台分校，张家口分校"
                >衡水</a
              >
            </li>
            <li value="100009" class="fenxiao-name">
              <a
                href="./about.html"
                title="保定分校，沧州分校，承德分校，邯郸分校，衡水分校，廊坊分校，秦皇岛分校，石家庄桥西，石家庄盛典，唐山分校，邢台分校，张家口分校"
                >廊坊</a
              >
            </li>
            <li value="100012" class="fenxiao-name">
              <a
                href="./about.html"
                title="保定分校，沧州分校，承德分校，邯郸分校，衡水分校，廊坊分校，秦皇岛分校，石家庄桥西，石家庄盛典，唐山分校，邢台分校，张家口分校"
                >秦皇岛</a
              >
            </li>
            <li value="100002" class="fenxiao-name">
              <a
                href="./about.html"
                title="保定分校，沧州分校，承德分校，邯郸分校，衡水分校，廊坊分校，秦皇岛分校，石家庄桥西，石家庄盛典，唐山分校，邢台分校，张家口分校"
                >石家庄桥西</a
              >
            </li>
            <li value="100001" class="fenxiao-name">
              <a
                href="./about.html"
                title="保定分校，沧州分校，承德分校，邯郸分校，衡水分校，廊坊分校，秦皇岛分校，石家庄桥西，石家庄盛典，唐山分校，邢台分校，张家口分校"
                >石家庄盛典</a
              >
            </li>
            <li value="100008" class="fenxiao-name">
              <a
                href="./about.html"
                title="保定分校，沧州分校，承德分校，邯郸分校，衡水分校，廊坊分校，秦皇岛分校，石家庄桥西，石家庄盛典，唐山分校，邢台分校，张家口分校"
                >唐山</a
              >
            </li>
            <li value="100007" class="fenxiao-name">
              <a
                href="./about.html"
                title="保定分校，沧州分校，承德分校，邯郸分校，衡水分校，廊坊分校，秦皇岛分校，石家庄桥西，石家庄盛典，唐山分校，邢台分校，张家口分校"
                >邢台</a
              >
            </li>
            <li value="100011" class="fenxiao-name">
              <a
                href="./about.html"
                title="保定分校，沧州分校，承德分校，邯郸分校，衡水分校，廊坊分校，秦皇岛分校，石家庄桥西，石家庄盛典，唐山分校，邢台分校，张家口分校"
                >张家口</a
              >
            </li>
          </ul>
        </section>
      </div>
    </div>
  </section>

  <el-dialog v-model="dialogVisible" width="50%" center>
    <img style="width: 100%" src="../../assets/4e4f1dbf0356810f1019807c0de68c43.png" />
  </el-dialog>
  <el-dialog v-model="videodialogVisible" width="50%" title="试听课播放">
    <video
      :autoplay="true"
      src="https://qn.jxnedu.cn/zsbguanwang/wuliao-stvideo/video/文史基础-小程_batch_9GY0N-ofwwd6lmKV7SR75.mp4"
      :controls="'controls'"
      class="secondBack"
    ></video>
  </el-dialog>
</template>
<script lang="ts" setup>
import { te } from 'element-plus/es/locale'
import { reactive, watch, computed, ref } from 'vue'

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
let tixiData = ref([
  {
    title: '01 一级基础覆盖',
    tixiText: [
      '课程简介：通过指定教材串讲，熟悉基础知识点',
      '课程内容：对标考试，全面覆盖必备基础知识',
      '适合人群：意向学员/报名二阶段课程学员',
      '课程目标：熟悉基础知识点',
    ],
  },
  {
    title: '02 二级考点精讲',
    tixiText: [
      '课程简介：辅以相应练习，明确考点',
      '课程内容：全面覆盖考点，考什么讲什么',
      '适合人群：基础课结业测合格的学生',
      '课程目标：通过课程梳理，初步提高学员应考能力',
    ],
  },
  {
    title: ' 03 三级专项提高',
    tixiText: [
      '课程简介：重点难点突出，强调做题逻辑，点拨做题思路',
      '课程内容：通过专项考点板块强化辅以大量专项练习',
      '适合人群：报名并完成二级课程的学员',
      '课程目标：提高学员专项解题能力，实现二次提分目标',
    ],
  },
  {
    title: ' 04 四级综合演练',
    tixiText: [
      '课程简介：专深度解析真题，分析答题技巧与规范',
      '课程内容：点拨答题技巧，梳理作答规范',
      '适合人群：临考学员',
      '课程目标：帮助考生实现考前冲刺的目标',
    ],
  },
])
let activeIndex = ref(0)
let dialogVisible = ref(false)
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
function showModel() {
  dialogVisible.value = true
}
</script>
<style lang="scss" scoped>
.omit {
  word-break: break-all;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}

.container-full {
  width: 100%;
  min-width: 1200px;
}

.iframe-wrap {
  display: block;
  width: 100%;
  min-width: 1200px;
  -webkit-transition: height 0.5s ease;
  -o-transition: height 0.5s ease;
  -moz-transition: height 0.5s ease;
  transition: height 0.5s ease;
}

.iframe-box {
  width: 100%;
  min-width: 1200px;
  position: relative;
  z-index: 99;
  -webkit-transition: height 0.5s ease;
  -o-transition: height 0.5s ease;
  -moz-transition: height 0.5s ease;
  transition: height 0.5s ease;
}

.countdown-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: 58px;
  background: url(../static/images/countdown_bj.png);
  -o-background-size: 100% 100%;
  background-size: 100% 100%;
}

.countdown-img {
  width: 64px;
  height: 57px;
  margin-top: 6px;
}

.countdown-info-left {
  width: 201px;
  height: 18px;
}

.countdown-info-right {
  margin-top: 4px;
  width: 450px;
  height: 21px;
}

.countdown-day {
  font-size: 22px;
  font-weight: 800;
  margin: 0 8px;
  color: #ff3c00;
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
}

.banner {
  width: 100%;
  height: 100%;
  display: block;
}

::v-deep .el-carousel__container {
  height: 100%;
}

.el-carousel__button {
  height: 4px !important;
  border-radius: 2px;
}

.content-tlt {
  text-align: center;
  color: #333;
  font-size: 30px;
  line-height: 42px;
  margin-top: 60px;
  font-weight: bold;
  margin-bottom: 10px;
}

.content-tlt-desc {
  font-size: 20px;
  color: #666666;
  line-height: 28px;
  text-align: center;
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

.teacher-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -moz-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  width: -webkit-calc(100% - var(--padding-width));
  width: -moz-calc(100% - var(--padding-width));
  width: calc(100% - var(--padding-width));
  height: 54px;
  overflow: hidden;
}

.teacher-list-li {
  /* width:42px;
  flex:1; */
  margin-right: 8px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.teacher-list-li img {
  display: block;
  width: 40px;
}

.teacher-list-li span {
  display: block;
  width: 100%;
  text-align: center;
  overflow: hidden;
  height: 14px;
  line-height: 14px;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: #666;
}

.course-more-wrap {
  margin-top: 30px;
  display: block;
  text-align: center;
}

.course-more {
  width: 252px;
  height: 50px;
  line-height: 52px !important;
  padding: 0 !important;
  background: -webkit-gradient(linear, left top, left bottom, from(#87d6f3), to(#00baff)) !important;
  background: -webkit-linear-gradient(top, #87d6f3 0%, #00baff 100%) !important;
  background: -moz-linear-gradient(top, #87d6f3 0%, #00baff 100%) !important;
  background: -o-linear-gradient(top, #87d6f3 0%, #00baff 100%) !important;
  background: linear-gradient(180deg, #87d6f3 0%, #00baff 100%) !important;
  border-radius: 25px !important;
  font-size: 18px !important;
}

.el-button--primary {
  border: 0 none !important;
}

.zixun-wrap {
  width: 100%;
  background: url(../../assets/index_zx_bg.png) no-repeat;
  padding: 10px 0 100px;
  margin-top: 60px;
}

.zixun-list-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
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
  margin-top: 60px;
}

.zixun-list {
  width: 380px;
  height: 300px;
  /* background: -webkit-gradient(linear, left top, left bottom, from(#D9E2FF), color-stop(15%, #FFFFFF)); */
  background: -webkit-gradient(linear, left top, left bottom, from(#ddeff6), color-stop(15%, #ffffff));
  background: -webkit-linear-gradient(top, #ddeff6 0%, #ffffff 15%);
  background: -moz-linear-gradient(top, #ddeff6 0%, #ffffff 15%);
  background: -o-linear-gradient(top, #ddeff6 0%, #ffffff 15%);
  background: linear-gradient(to bottom, #ddeff6 0%, #ffffff 15%);
  border-radius: 10px;
  position: relative;
  margin-bottom: 20px;
}

.zixun-list-red {
  background: -webkit-gradient(linear, left top, left bottom, from(#ffd9d9), color-stop(15%, #ffffff));
  background: -webkit-linear-gradient(top, #ffd9d9 0%, #ffffff 15%);
  background: -moz-linear-gradient(top, #ffd9d9 0%, #ffffff 15%);
  background: -o-linear-gradient(top, #ffd9d9 0%, #ffffff 15%);
  background: linear-gradient(to bottom, #ffd9d9 0%, #ffffff 15%);
}

.zixun-list-tlt {
  margin: 25px 20px 0;
  font-size: 19px;
}

.zixun-logo {
  float: left;
  width: 25px;
  margin: 1px 10px 0 0;
}

.zixun-list-cont {
  margin: 25px 20px 0;
  position: relative;
  z-index: 2;
}

.zixun-new-mark {
  width: 152px;
  position: absolute;
  right: 20px;
  bottom: 20px;
}

.zixun-list-cont li {
  margin-bottom: 25px;
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

.zixun-new-ico {
  width: 20px;
  margin-right: 10px;
}

.zixun-new-txt {
  width: 220px;
  margin-right: 10px;
  font-size: 14px;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #333;
}

.zixun-new-date {
  color: #666;
  font-size: 14px;
}

.el-empty {
  padding: 15px 0 !important;
}

.zixun-zc-ico {
  width: 12px;
  margin-right: 10px;
}

.zixun-new-ico-grey {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  opacity: 0.5;
}

.zixun-num {
  color: #ccc;
  font-size: 14px;
  margin-right: 10px;
}

.tixi-wrap {
  width: 100%;
  height: 1050px;
  background: url(../../assets/index_tixi_bg.png) no-repeat;
  background-position: center;
  padding-top: 70px;
}

.tixi {
  margin-top: 100px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-color: unset;
}

.tixi-left-li {
  width: 330px;
  height: 90px;
  background-color: #fff;
  border-radius: 20px;
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
  padding: 0 40px;
  margin-bottom: 50px;
  font-size: 20px;
  color: #666;
  cursor: pointer;
}

.tixi-left-li:nth-child(1),
.tixi-left-li:nth-child(4) {
  margin-left: 90px;
}

.tixi-left-li .el-icon-arrow-right {
  width: 22px;
  height: 21px;
  line-height: 22px;
  text-align: center;
  font-size: 16px;
  border-radius: 50%;
  border: 1px solid #666;
}

.tixi-active {
  color: #fff;
  background: #00baff;
  -webkit-box-shadow: 0px 2px 20px 0px rgba(14, 66, 156, 0.5);
  box-shadow: 0px 2px 20px 0px rgba(14, 66, 156, 0.5);
  border-radius: 20px;
}

.tixi-active .el-icon-arrow-right {
  border-color: #fff;
}

.tixi-right {
  margin-left: 15px;
  position: relative;
}

.tixi-right-desc {
  margin-left: 160px;
  padding: 40px 25px 16px 90px;
  background-color: #fff;
  position: relative;
  float: right;
}

.tixi-right-ico {
  width: 51px;
  display: block;
  position: absolute;
  left: -26px;
  top: 31px;
}

.tixi-right-img {
  display: block;
  width: 749px;
  position: relative;
  z-index: 2;
  margin-top: -20px;
}

.tixi-r-txt {
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
}

.tixi-dot {
  width: 16px;
  height: 16px;
  float: left;
  background-color: #00baff;
  border-radius: 50%;
  margin: 4px 23px 0 0;
}

.tixi-dot:before {
  content: '';
  display: block;
  width: 16px;
  height: 16px;
  background: #b7fff6;
  border-radius: 50%;
  margin-left: -9px;
}

.shizi {
  width: 100%;
  height: 756px;
  background: url(../../assets/index_teacher.png) no-repeat;
  background-position: center;
  /* padding-top:90px; */
  position: relative;
}

.shizi .content {
  height: 100%;
  padding: 90px 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
}

.shizi .content-tlt,
.shizi .content-tlt-desc {
  color: #fff;
}

.shizi-desc {
  width: 1200px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background-color: unset;
}

.shizi-desc-p {
  width: 274px;
}

.shizi-desc-num {
  font-size: 60px;
  color: #fff;
  display: block;
  margin-bottom: 18px;
  text-align: center;
}

.shizi-desc-txt {
  display: block;
  font-size: 24px;
  width: 100%;
  text-align: center;
  color: #fff;
}

.fenxiao {
  width: 100%;
  height: 200px;
  background: url(../static/images/index_campus_bg.png) no-repeat;
  background-position: center;
  position: relative;

  section {
    background-color: unset;
  }
}

.fenxiao-tlt:before {
  content: '';
  display: block;
  width: 30px;
  height: 4px;
  border-radius: 2px;
  margin-bottom: 15px;
  background: -webkit-gradient(linear, left top, right top, from(#5f97ff), to(#3969ff));
  background: -webkit-linear-gradient(left, #5f97ff, #3969ff);
  background: -moz-linear-gradient(left, #5f97ff, #3969ff);
  background: -o-linear-gradient(left, #5f97ff, #3969ff);
  background: linear-gradient(to right, #5f97ff, #3969ff);
}

.fenxiao-tlt {
  font-size: 24px;
  line-height: 34px;
  color: #333;
  margin-right: 118px;
  font-weight: 600;
  min-width: 120px;
}

.fenxiao-name {
  font-size: 16px;
  margin-bottom: 15px;
  margin-left: 30px;
  width: 130px;
}

.fenxiao-list {
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

/* 侧边 */
.feedback {
  background-color: #fff;
  width: 60px;
  position: fixed;
  right: 40px;
  top: 40%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 199;
  border-radius: 5px;
  border: 1px solid #ededed;
}

.feedback-item {
  height: 70px;
  position: relative;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  /* margin:0 7px; */
  color: #444;
  border-bottom: 1px solid #ededed;
}

.feedback-item:last-child {
  border: 0 none;
}

.hover-icon {
  width: 30px;
  height: 30px;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  margin-bottom: 4px;
}

.hover-name {
  font-size: 13px;
  display: block;
  text-align: center;
}

.feedback-item:hover .hover-icon {
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
}

.feedback-item:hover .hover-name {
  color: #00baff;
}

.feedback-alertbox {
  visibility: hidden;
  position: absolute;
  top: 0;
  right: 60px;
  z-index: 98;
}

.el-backtop {
  position: relative !important;
  right: auto !important;
  bottom: auto !important;
  width: 58px !important;
  height: 70px !important;
  border-radius: 6px !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 0 none;
  background-color: #fff !important;
}

.el-backtop:hover .el-icon-upload2 {
  color: #00baff;
}

.feedback-alertbox-name {
  color: #444;
  display: block;
  margin: 3px 0;
  text-align: center;
}

.hover-box {
  margin-right: 10px;
  background-color: #fff;
  padding: 8px 10px;
  min-height: 60px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
}

.hover-box:after {
  content: '';
  position: absolute;
  right: -10px;
  top: 20px;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-left: 10px solid #fff;
  border-bottom: 8px solid transparent;
}

.foot-wx-img {
  width: 100px;
  height: 100px;
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
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
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.foot-wx-img img {
  width: 100%;
}

.feedback-item:hover .feedback-alertbox {
  visibility: visible;
}

.secondBack {
  width: 800px;
  margin: 0 auto;
  display: block;
}

.el-dialog__body {
  padding-top: 15px !important;
}

/* 试听课详情 */
.try-icon {
  width: 14px;
  height: 14px;
}

.try-name {
  color: #333;
  font-size: 14px;
  margin: 0 5px;
}

.try-search {
  margin: 20px 0;
}

.course-search .try-name {
  margin-left: 0;
  min-width: 80px;
}

.course-detail-time {
  margin: 0 0 6px 14px;
  color: #666;
}

.course-detail-time span:not(:last-child) {
  margin-right: 15px;
}

.custom-pagination {
  text-align: center;
  margin: 30px 0 50px;
}

.custom-pagination.el-pagination button,
.custom-pagination.el-pagination .el-pager li {
  border: 1px #ccc solid;
  margin: 0 4px;
  height: 32px;
  line-height: 32px;
  max-width: 32px;
  border-radius: 2px;
}

.custom-pagination.el-pagination .el-pager li.active {
  background-color: #00baff;
  border-color: #00baff;
  color: #fff;
}

.bettween {
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
}

.list-more {
  color: #999;
  font-size: 14px;
  font-weight: normal;
}

/* 活动模块 */
.active {
  width: 100%;
  height: 100px;
  margin-top: -70px;
  position: relative;
  z-index: 5;
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
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.active-mode {
  width: 348px;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#edf1ff), color-stop(50%, #fff));
  background-image: -webkit-linear-gradient(top, #edf1ff 0%, #fff 50%);
  background-image: -moz-linear-gradient(top, #edf1ff 0%, #fff 50%);
  background-image: -o-linear-gradient(top, #edf1ff 0%, #fff 50%);
  background-image: linear-gradient(180deg, #edf1ff 0%, #fff 50%);
  border-radius: 5px;
  margin: 0 10px;
  padding: 20px 33px;
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
  cursor: pointer;
}

.active-bg {
  background-image: -webkit-gradient(linear, left top, left bottom, from(#eef2ff), color-stop(50%, #fff));
  background-image: -webkit-linear-gradient(top, #eef2ff 0%, #fff 50%);
  background-image: -moz-linear-gradient(top, #eef2ff 0%, #fff 50%);
  background-image: -o-linear-gradient(top, #eef2ff 0%, #fff 50%);
  background-image: linear-gradient(180deg, #eef2ff 0%, #fff 50%);
}

.active-bg2 {
  background-image: -webkit-gradient(linear, left top, left bottom, from(#ffeded), color-stop(50%, #fff));
  background-image: -webkit-linear-gradient(top, #ffeded 0%, #fff 50%);
  background-image: -moz-linear-gradient(top, #ffeded 0%, #fff 50%);
  background-image: -o-linear-gradient(top, #ffeded 0%, #fff 50%);
  background-image: linear-gradient(180deg, #ffeded 0%, #fff 50%);
}

.active-icon {
  width: 60px;
  height: 60rpx;
  margin-right: 15px;
}

.active-title {
  font-size: 18px;
  color: #333;
  font-weight: bold;
  display: block;
}

.active-desc {
  font-size: 14px;
  color: #999;
  margin-top: 5px;
  display: block;
}

.overlay-box {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.overlay-txt {
  margin: 0 auto 15px;
}

.custom-alert {
  width: 50% !important;
}

.course-center-time {
  color: #666;
  margin: -5px 14px 14px;
}

.course-campus {
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
  margin: 0 14px 15px;
}

.course-campus-name {
  line-height: 20px;
  background-color: #e1f7ff;
  color: #00baff;
  padding: 4px 6px;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 600;
  font-family: 'PingFang SC';
}

.course-teach-name {
  background-color: #fff2e2;
  color: #ff6000;
  padding: 4px 8px;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 600;
  font-family: 'PingFang SC';
}

.teacher-detail-foot {
  position: absolute;
  bottom: 30px;
  right: 20px;
  border: 0 none;
}

.course-detail-desc {
  margin: 0 14px 14px;
  font-size: 15px;
  color: #444;
}

.ai-popup {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 10;
  background-image: url('/static/images/qwertfgvcfhgxc34576345.png');
  -o-background-size: contain;
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
}

.ai-popup-inner {
  width: 246px;
  height: 142px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  padding: 0 10px 20px 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -moz-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

.ai-popup-inner h3 {
  font-size: 12px;
  color: #080749;
  margin-bottom: 14px;
  text-align: right;
}

.ai-popup-inner .ai-button {
  width: 100%;
  height: 30px;
  line-height: 30px;
  margin-top: 10px;
  text-align: center;
  border-radius: 50px;
  background: -webkit-gradient(linear, left top, left bottom, from(#90e3ff), to(#0299ff));
  background: -webkit-linear-gradient(top, #90e3ff 0%, #0299ff 100%);
  background: -moz-linear-gradient(top, #90e3ff 0%, #0299ff 100%);
  background: -o-linear-gradient(top, #90e3ff 0%, #0299ff 100%);
  background: linear-gradient(180deg, #90e3ff 0%, #0299ff 100%);
  border: none;
  color: #ffffff;
  font-size: 14px;
}

.ai-popup-tags {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  gap: 3px;
}

.ai-popup-tags .tag {
  height: 20px;
  padding: 0 6px;
  line-height: 20px;
  text-align: center;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  border-radius: 50px;
  background-color: #eff6ff;
  font-size: 11px;
}

.blue-tips {
  font-size: 13px;
  color: #00baff;
  padding: 12px 0 20px;
  text-align: center;
}

.course-center-book-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  filter: grayscale(50%);
}

.course-center-book-btn {
  display: block !important;
  width: 252px;
  height: 50px;
  line-height: 50px !important;
  background: linear-gradient(180deg, #87d6f3 0%, #00baff 100%) !important;
  border-radius: 25px !important;
  margin: 0 auto !important;
  padding: 0 !important;
}

.course-center-book-img {
  display: block;
  width: 1200px;
  height: auto;
  margin: 50px auto;
}

.course-center-book {
  width: 100%;
  position: relative;

  .content {
    position: relative;
    z-index: 5;
    padding: 65px 0;
  }
}

.fenxiao {
  width: 100%;
  height: 200px;
  background: url(../../assets/index_campus_bg.png) no-repeat;
  background-position: center;
  position: relative;
}
</style>
