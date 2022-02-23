<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: white">
      <img
        src="../../assets/img/bj3.jpg"
        alt="无"
        style="width: 200px"
        height="60"
      />
      <el-menu :default-active="$route.path" router>
        <el-submenu index="">
          <template slot="title"
            ><i class="el-icon-user-solid"></i>用户管理</template
          >
          <el-menu-item-group>
            <el-menu-item index="/usermanagement" @click="changeUser(2)"
              >用户明细</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="">
          <template slot="title"
            ><i class="el-icon-s-open"></i>用水管理</template
          >
          <el-menu-item-group>
            <el-menu-item index="/watermanagement" @click="useWater(1)">
              用水明细
            </el-menu-item>
            <el-menu-item index="">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title"
            ><i class="el-icon-s-data"></i>报表管理</template
          >
          <el-menu-item-group>
            <el-menu-item index="/reportmanagement" @click="sumwater(3)"
              >月总用水量</el-menu-item
            >
            <el-menu-item index="">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item index="">选项3</el-menu-item>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title"><i class="el-icon-setting"></i>设置</template>
          <el-menu-item-group>
            <el-menu-item index="/changepassword" @click="turnpassword(4)"
              >安全中心</el-menu-item
            >
            <el-menu-item index="">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px; background: white"
        ><img
          src="../../assets/img/bj.jpg"
          alt="wu"
          style="width: 100%; height: 60px"
        />
        <!-- <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>阿三</span> -->
      </el-header>

      <el-main>
        <!-- <el-table :data="tableData" border="">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table> -->
        <UserManagement v-if="userText == 2"></UserManagement>
        <water-management v-if="waterText == 1"></water-management>
        <report-management v-if="sumText == 3"></report-management>
        <change-password v-if="chText == 4"></change-password>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import WaterManagement from "../watermanagement/index.vue";
import UserManagement from "../usermanagement/index.vue";
import ReportManagement from "..//reportmanagement/index.vue";
import ChangePassword from "../setup/changepassword/index.vue";
export default {
  components: {
    WaterManagement,
    UserManagement,
    ReportManagement,
    ChangePassword,
  },
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      tableData: Array(20).fill(item),
      waterText: "",
      userText: 2,
      sumText: "",
      chText: "",
    };
  },
  methods: {
    useWater(val) {
      this.userText = null;
      this.sumText = null;
      this.chText = null;
      this.waterText = val;
    },
    changeUser(val2) {
      this.waterText = null;
      this.sumText = null;
      this.chText = null;
      this.userText = val2;
    },
    sumwater(val3) {
      this.userText = null;
      this.waterText = null;
      this.chText = null;
      this.sumText = val3;
    },
    turnpassword(val4) {
      this.userText = null;
      this.sumText = null;
      this.waterText = null;
      this.chText = val4;
    },
  },
};
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>