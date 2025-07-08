<script setup lang="ts"></script>

<template>
  <div id="app" class="test-9f">
    <n-flex justify="flex-end"
      ><div style="font-size: 12px; color: #666"><u>2/2</u></div></n-flex
    >
    <div class="title">离职证明（个人联）</div>
    <div style="height: 24px" />
    <p>
      &emsp;&emsp; 兹证明员工
      <u>孙宇鹏</u>，身份证号：<u>370687199510064770</u>：
    </p>
    <div style="height: 4px" />
    <p>
      &emsp;&emsp; 于
      <u>2025年4月21日</u>
      加入<u>上海九方云智能科技有限公司</u>，其最后在本公司单担任的职务是
      <u>前端开发</u
      >，于<u>2025年6月16日</u>与本公司正式解除劳动关系，不再担任我司任何职务。
    </p>
    <div style="height: 16px" />
    <p>&emsp;&emsp; 特此证明。</p>
    <div style="height: 56px" />
    <n-flex justify="flex-end" class="author"
      ><div>
        <p>上海九方云智能科技有限公司</p>
        <p>2025年6月16日</p>
      </div></n-flex
    >
    <div style="height: 48px" />
    <p>
      <span class="warning">&emsp;&emsp;离职事宜告知书</span
      ><span>（请妥善保管此证明，遗失不补）</span>
    </p>
    <div style="height: 5px" />
    <p>&emsp;&emsp;1. 您的上海公积金账号为：<u>331208910205</u>；</p>
    <div style="height: 4px" />
    <p>
      &emsp;&emsp;2.
      您在公司系统平台的福利相关账号于离职一个自然月后自动停用，如有剩余积分请及时处理；
    </p>
    <div style="height: 4px" />
    <p>&emsp;&emsp;3. 联系电话：<u>021-20289006-6013</u>。</p>
  </div>
</template>

<style scoped>
@page {
  size: A4;
  /* margin: 2.54cm 3.17cm; */
}
.test-9f {
  padding: 48px 64px;
  .title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
  .author {
    text-align: right;
  }
  .warning {
    font-weight: bold;
  }
}
</style>
