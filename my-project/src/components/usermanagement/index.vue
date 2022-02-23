<template>
  <div>
    <el-form inline style="display: flex">
      <el-form-item>
        <el-input
          v-model="input"
          placeholder="请输入姓名"
          style="width: 300px"
          clearable
        ></el-input>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search">搜索 </el-button>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            icon="el-icon-circle-plus"
            @click="increaseUser()"
          >
            添加用户</el-button
          >
        </el-form-item>
      </el-form-item>
      <!-- <el-popover
        placement="right-end"
        width="200"
        height="200"
        v-model="visible"
      >
        <p>确定删除该用户吗？</p>
        <div style="text-align: right; margin: 0">
          <el-button size="mini" type="text" @click="visible = false"
            >取消</el-button
          >
          <el-button type="primary" size="mini" @click="visible = false"
            >确定</el-button
          >
        </div>
      </el-popover> -->
    </el-form>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180" align="center">
      </el-table-column>
      <el-table-column prop="phone" label="联系方式" width="180" align="center">
      </el-table-column>
      <el-table-column prop="address" label="地址" align="center">
      </el-table-column>
      <el-table-column prop="operation" label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="transformUser(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button size="mini" type="danger" @click="handleDelete()"
            >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 编辑用户弹窗 -->
    <div>
      <el-dialog
        title="提示"
        :visible.sync="centerDialogVisible"
        width="30%"
        center
      >
        <span>需要注意的是内容是默认不居中的</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
      <!-- 删除用户 -->
      <el-dialog title="删除用户" :visible.sync="visible" width="30%" center>
        <span>确定删除该用户吗？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="visible = false">取 消</el-button>
          <el-button type="primary" @click="visible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <!-- 添加用户弹窗 -->
    <div>
      <el-dialog title="添加用户" :visible.sync="addUser" width="30%" center>
        <el-form label-position="top" label-width="80px">
          <el-form-item label="姓名:">
            <el-input
              v-model="userName"
              placeholder="请输入姓名"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="联系方式:">
            <el-input
              v-model="userContact"
              placeholder="请输入联系方式"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="地址:">
            <el-input
              v-model="userAddress"
              placeholder="请输入地址"
              clearable
            ></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addUser = false">取 消</el-button>
          <el-button type="primary" @click="addUser = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      userName: "",
      userContact: "",
      userAddress: "",
      addUser: false,
      centerDialogVisible: false,
      visible: false,
      tableData: [
        {
          phone: "2016-05-02",
          name: "张三",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          phone: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          phone: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          phone: "2016-05-03",
          name: "李四",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    handleEdit() {},
    handleDelete() {
      this.visible = true;
    },
    transformUser() {
      this.centerDialogVisible = true;
    },
    increaseUser() {
      this.addUser = true;
    },
  },
};
</script>
<style scoped>
</style>