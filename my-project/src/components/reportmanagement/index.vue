<template>
  <div>
    <el-form> </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column
        prop="year"
        label="年份"
        width="150"
        fixed="left"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="sumwater" label="一月" width="150" align="center">
      </el-table-column>
      <el-table-column prop="sumwater" label="二月" width="110" align="center">
      </el-table-column>
      <el-table-column prop="sumwater" label="三月" width="110" align="center">
      </el-table-column>
      <el-table-column prop="sumwater" label="四月" width="110" align="center">
      </el-table-column>
      <el-table-column prop="sumwater" label="五月" width="110" align="center">
      </el-table-column
      ><el-table-column prop="sumwater" label="六月" width="110" align="center">
      </el-table-column
      ><el-table-column prop="sumwater" label="七月" width="110" align="center">
      </el-table-column
      ><el-table-column prop="sumwater" label="八月" width="110" align="center">
      </el-table-column
      ><el-table-column prop="wheter" label="九月" width="110" align="center">
      </el-table-column
      ><el-table-column prop="sumwater" label="十月" width="110" align="center">
      </el-table-column
      ><el-table-column
        prop="sumwater"
        label="十一月"
        width="110"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="sumwater"
        label="十二月"
        width="110"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="operation"
        label="操作"
        width="110"
        fixed="right"
        align="center"
      >
        <template slot-scope="scope">
          <el-button size="mini" @click="transformUser(scope.$index, scope.row)"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          year: "2018",
          sumwater: "4吨",
          name: "张三",
          moneny: "20",
          wheter: "是",
        },
        {
          year: "2019",
          sumwater: " 8吨",
          name: "王小虎",
          moneny: "40.5",
          wheter: "否",
        },
        {
          year: "2020",
          sumwater: "2吨",
          name: "李四",
          moneny: "18.9",
          wheter: "否",
        },
        {
          year: "2021",
          sumwater: "2.1吨",
          name: "王五",
          moneny: " 20.4",
          wheter: "是",
        },
      ],
    };
  },
  methods: {},
};
</script>