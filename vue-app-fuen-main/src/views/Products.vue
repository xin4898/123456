<template>
          <h2>Product List</h2>
          <div class="row">
            <div class="col-3">
                <div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
   分類一
  </a>
  <a href="#" class="list-group-item list-group-item-action"> 分類一</a>
  <a href="#" class="list-group-item list-group-item-action"> 分類二</a>
  <a href="#" class="list-group-item list-group-item-action"> 分類三</a>
  <a class="list-group-item list-group-item-action disabled"> 分類四</a>
</div>
            </div>
            <div class="col-9">
                <table class="table table-bordered">
<thead><tr><th>產品編號</th><th>產品名稱</th><th>產品價格</th><th>庫存量</th></tr></thead>
<tbody>
<tr><td>001</td><td>產品1</td><td>100</td><td>10</td></tr>
<tr><td>002</td><td>產品2</td><td>200</td><td>20</td></tr>
<tr><td>003</td><td>產品3</td><td>300</td><td>30</td></tr>
</tbody>
</table>
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
            </div>
          </div>
</template>
    
<script setup>
  
</script>
    
<style scoped>
    
</style>