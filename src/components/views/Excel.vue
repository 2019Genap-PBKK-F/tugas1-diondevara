<template>
  <div>
    <div id="app" ref="spreadsheet"></div>
    <h2>DATA MAHASISWA</h2>
  </div>
</template>

<script>
import jexcel from 'jexcel'
import 'jexcel/dist/jexcel.css'
var data = [
  ['05111740000080', 'Help', '2017', '06/09/2069', '', true]
]
var options = {
  data: data,
  allowToolbar: true,
  columns: [
    { type: 'numeric', title: 'NRP', width: '200px' },
    { type: 'text', title: 'Nama', width: '200px' },
    { type: 'numeric', title: 'Angkatan', width: '200px' },
    { type: 'calender', title: 'Tgl Lahir', width: '200px' },
    { type: 'image', title: 'Photo', width: '200px' },
    { type: 'checkbox', title: 'Aktif', width: '80px' }
  ]
}
export default {
  name: 'App',
  mounted: function () {
    let spreadsheet = jexcel(this.$el, options)
    Object.assign(this, { spreadsheet })
  }
}
</script>
