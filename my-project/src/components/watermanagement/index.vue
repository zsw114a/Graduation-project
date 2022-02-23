 <template>
  <div class="btnn">
    <el-form inline style="display: flex">
      <el-form-item>
        <el-input
          v-model="input"
          placeholder="请输入内容"
          style="width: 300px"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search">搜索 </el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-circle-plus">添加</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-arrow-left">返回</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180" align="center">
      </el-table-column>
      <el-table-column
        prop="sumwater"
        label="联系方式"
        width="200"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="sumwater"
        label="本月用水量"
        width="200"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="moneny"
        label="应交多少钱"
        width="200"
        align="center"
      >
        <template slot="" slot-scope="">
          <span
            style="cursor: pointer; color: #409eff"
            @click="changeMoney()"
            >{{ "元" }}</span
          >
        </template>
      </el-table-column>
      <el-table-column
        prop="wheter"
        label="是否已缴纳"
        width="200"
        align="center"
      >
        <template slot-scope="">
          <span style="cursor: pointer; color: #409eff" @click="Pay()">{{
            "是"
          }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="operation" label="操作" width="200" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="transformUser(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <div>
      <el-dialog
        title="删除用户"
        :visible.sync="centerDialogVisible"
        width="30%"
        center
      >
        <span>确定删除该用户吗？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
      <!-- 修改钱 -->
      <el-dialog
        title="修改moneny"
        :visible.sync="tranformmoneny"
        width="30%"
        center
      >
        <el-form label-position="top" label-width="80">
          <el-form-item label="应交多少钱:">
            <el-input
              v-model="input2"
              placeholder="请输入应交的钱数"
              style="width: 300px"
              clearable
            ></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="tranformmoneny = false">取 消</el-button>
          <el-button type="primary" @click="tranformmoneny = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>

      <!-- 是否已缴纳 -->
      <el-dialog title="缴纳" :visible.sync="yesOrno" width="30%" center>
        <el-form label-position="top" label-width="80">
          <el-form-item label="已缴纳？">
            <el-input
              v-model="input3"
              placeholder="请输入'是'or'否'"
              style="width: 300px"
              clearable
            ></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="yesOrno = false">取 消</el-button>
          <el-button type="primary" @click="yesOrno = false">确 定</el-button>
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
      input2: "",
      input3: "",
      centerDialogVisible: false,
      tranformmoneny: false,
      yesOrno: false,
      //   form: this.$form.createForm(this),
      tableData: [
        {
          sumwater: "4吨",
          name: "张三",
          moneny: "20",
          wheter: "是",
        },
        {
          sumwater: " 8吨",
          name: "王小虎",
          moneny: "40.5",
          wheter: "否",
        },
        {
          sumwater: "2吨",
          name: "李四",
          moneny: "18.9",
          wheter: "否",
        },
        {
          sumwater: "2.1吨",
          name: "王五",
          moneny: " 20.4",
          wheter: "是",
        },
      ],
    };
  },
  methods: {
    transformUser() {
      this.centerDialogVisible = true;
    },
    changeMoney() {
      this.tranformmoneny = true;
    },
    Pay() {
      this.yesOrno = true;
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep {
  .el-button {
    margin-left: 40px;
  }
}
</style>
 
 