<template>
  <section class="content">
    <div class="row center-block">
      <h1 class="text-center">Data Mahasiswa</h1>
      <div id="app" ref="spreadsheet"></div>
    </div>
  </section>
</template>

<script>
import jexcel from 'jexcel'
import 'jexcel/dist/jexcel.css'
import axios from 'axios'
var data = []
var update = function (obj, cel, y, x, val) {
  var tmpData = data[x]
  tmpData[y] = val
  axios({
    method: 'put',
    url: 'https://dog.ceo/api/breeds/list/all',
    data: {
      id: tmpData[0],
      nrp: tmpData[1],
      nama: tmpData[2],
      angkatan: tmpData[3],
      tgl_lahir: tmpData[4],
      photo: tmpData[5],
      aktif: tmpData[6]
    //   manfaat: tmpData[7],
    //   waktu: tmpData[8],
    //   bukti: tmpData[9],
    //   tahun: tmpData[10]
    }
  })
  .then((response) => {
    console.log(response.data)
  })
}
var deleterow = function(obj, x, y) {
  axios({
    method: 'delete',
    url: 'https://dog.ceo/api/breeds/list/all' + (data[x][0])}).then((response) => {
      console.log(response.data)
    })
  data.splice(x, 1)
}
var insertrow = function(obj, x, y, val) {
  data.push(['', '', '', '', '', ''])
  axios({
    method: 'post',
    url: 'https://dog.ceo/api/breeds/list/all',
    data: {
    }
  })
  .then((response) => {
    console.log(response.data)
    x = x + 1
    console.log(x)
    data[x][0] = response.data.id
  })
}
var options = {
  data: data,
  onchange: update,
  oninsertrow: insertrow,
  ondeleterow: deleterow,
  defaultColWidth: 100,
  tableOverflow: true,
  tableWidth: '500px',
  allowToolbar: false,
  allowInsertRow: true,
  allowDeleteRow: true,
  columns: [
    { type: 'hidden', title: 'ID', width: '100px' },
    { type: 'text', title: 'NRP', width: '150px' },
    { type: 'text', title: 'Nama', width: '300px' },
    { type: 'text', title: 'Angkatan', width: '100px' },
    { type: 'text', title: 'Tanggal Lahir', width: '150px' },
    { type: 'image', title: 'Photo', width: '300px' },
    { type: 'checkbox', title: 'Aktif', width: '50px' }
  ]
}
export default {
  name: 'App',
  methods: {
    readData () {
      axios.get('https://dog.ceo/api/breeds/list/all')
      .then((response) => {
        var objectArray = (response.data.data)
        objectArray.forEach(element => {
          data.push(Object.values(element))
        })
        console.log(objectArray)
        let spreadsheet = jexcel(this.$el, options)//error
        Object.assign(this, { spreadsheet })
      })
    }
  },
  mounted: function () {
    this.readData()
  }
}
</script>
