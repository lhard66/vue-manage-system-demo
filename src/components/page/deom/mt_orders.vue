<template>
  <div class="table" v-if="tableData!=null">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-menu"></i> 样例</el-breadcrumb-item>
        <el-breadcrumb-item>保养列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-table :data="tableData.rows" border stripe fit style="width: 100%">
      <el-table-column prop="appointmentTime" label="预约时间">
      </el-table-column>
      <el-table-column prop="id" label="订单号码">
      </el-table-column>
      <el-table-column prop="createTime" label="下单时间">
      </el-table-column>
      <el-table-column prop="name" label="用户昵称">
      </el-table-column>
      <el-table-column prop="carno" label="保养车辆">
      </el-table-column>
      <el-table-column prop="payChannel" label="支付方式">
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template scope="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :total="tableData.total">
      </el-pagination>
    </div>    
  </div>  
</template>
<script>
// import $axios from '../../../utils/VueFetch';
import vueaxios from '../../../utils/VueFetch';
export default {
  data() {
      return {
        url: '../../../../static/vuetable.json',
        tableData: null,
        rows: null,
        pageNumber: 1,
        pageSize: 10,
      }
    },
    created() {
      this.getData();
    },
    methods: {
      handleCurrentChange(val) {
        this.$message(`当前页: ${val}`);
      },
      getData() {
        let self = this;
        /*if (process.env.NODE_ENV === 'development') {
          self.url = '';
        };
          self.url=*/
        vueaxios(self.url, {
            pageNumber: self.pageNumber,
            pageSize: self.pageSize,
          }).then((res) => {
            console.log(res);
            self.tableData = res.data.data;
          });          
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      handleEdit(index, row) {
        this.$message('编辑第' + (index + 1) + '行');
      },
      handleDelete(index, row) {
        this.$message.error('删除第' + (index + 1) + '行');
      }
    }
}
</script>
