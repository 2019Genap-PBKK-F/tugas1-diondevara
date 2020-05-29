<template>
  <aside class="main-sidebar">

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

      <!-- Sidebar user panel (optional) -->
      <div class="user-panel">
        <div class="pull-left image">
          <img :src="user.avatar" />
        </div>
        <div class="pull-left info">
          <div>
            <p class="white">{{namauser}}</p>
          </div>
          <a href="javascript:;">
            <i class="fa fa-circle text-success"></i> Online
          </a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <sidebar-menu />
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
import SidebarMenu from './SidebarMenu'
export default {
  name: 'Sidebar',
  props: ['user'],
  data: function () {
    return {
      namauser: window.localStorage.getItem('user').substring(0, 25)
    }
  },
  components: { SidebarMenu },
  mounted: function() {
    window
      .jQuery('[data-toggle="hideseek"]')
      .off()
      .hideseek()
  }
}
</script>
<style scope="local">
.user-panel .image img {
  border-radius: 50%;
}
#searchForm {
  padding-left: 0em;
  padding-right: 0em;
}
#searchContainer {
  height: 100%;
  padding-bottom: 0em;
}
#search {
  width: 80%;
  float: right;
}
#search-btn {
  width: 20%;
}
</style>
