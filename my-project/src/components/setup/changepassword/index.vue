<template>
  <div
    style="
      margin-bottom: 10px;
      width: 100%;
      height: 100px;
      border-radius: 15px;
      background-color: #eeeeee;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    "
  >
    <h1>登录密码修改</h1>
    <br />
    <p style="cursor: pointer; color: #409eff" @click="tranformpassword()">
      修改密码
    </p>
    <div>
      <el-dialog
        title="修改密码"
        :visible.sync="changepassword"
        width="30%"
        center
      >
        <el-form label-position="right" label-width="100px">
          <el-form-item label="原始密码:">
            <el-input
              v-model="oldPassword"
              placeholder="请输入原始密码"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="新密码:">
            <el-input
              v-model="newPassword"
              placeholder="请输入新密码"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="再次确认密码:">
            <el-input
              v-model="newPassword2"
              placeholder="请输入密码"
              clearable
            ></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="changepassword = false">取 消</el-button>
          <el-button type="primary" @click="changepassword = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      changepassword: false,
      oldPassword: "",
      newPassword: "",
      newPassword2: "",
    };
  },
  methods: {
    tranformpassword() {
      this.changepassword = true;
    },
  },
};
</script>