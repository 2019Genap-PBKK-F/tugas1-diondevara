<template>
  <section class="content">
    <div class="container">
      <div class="row">
        <div>
          <div id="app" ref="spreadsheet"></div>
          <div class="col-md-11">
            <input type="button" class="btn btn-primary" value="Add" @click="() => spreadsheet.insertRow()" />
            <input type="button" class="btn btn-primary" value="Delete" @click="() => spreadsheet.deleteRow()" />
            <!-- <input v-on:keyup.46 = spreadsheet.deleteRow()> -->
          </div>
          <hr>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import jexcel from 'jexcel'
import 'jexcel/dist/jexcel.css'
export default {
  mounted () {
    let spreadsheet = jexcel(this.$el, this.jexcelOptions)
    console.log(this.$el)
    Object.assign(this, { spreadsheet })
  },
  methods: {
    add () {
      axios.post('http://10.199.14.46:8015/api/unit/').then(res => {
        console.log('adding data in new row')
      })
    },
    update (instance, cell, columns, row, value) {
      axios.get('http://10.199.14.46:8015/api/unit/').then(res => {
        var index = Object.values(res.data[row])
        index[columns] = value
        console.log(index)
        axios.put('http://10.199.14.46:8015/api/unit/', {
          id: index[0],
          kategoriunit_id: index[1],
          nama: index[2]
        })
      })
    },
    delete (instance, row) {
      axios.get('http://10.199.14.46:8015/api/unit/').then(res => {
        var index = Object.values(res.data[row])
        axios.delete('http://10.199.14.46:8015/api/unit/' + index[0])
        console.log('delete : row', row, res.data[row])
      })
    }
  },
  computed: {
    jexcelOptions () {
      return {
        allowToolbar: true,
        url: 'http://10.199.14.46:8015/api/unit/',
        oninsertrow: this.add,
        onchange: this.update,
        ondeleterow: this.delete,
        csvHeaders: true,
        responsive: true,
        columns: [
          { type: 'hidden', title: 'id', width: '120px' },
          { type: 'numeric', title: 'kategoriunit_id', width: '120px' },
          { type: 'text', title: 'nama', width: '120px' }
        ]
      }
    }
  }
}
</script>
