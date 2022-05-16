<template>
  <v-row class="Devices">
    <v-col class="mb-5" cols="12">
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        {
          text: '设备名称',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: '分组', value: 'group' },
        { text: '站位', value: 'station' },
        { text: '地址', value: 'address' },
        { text: '数据类型', value: 'type' },
        { text: '长度', value: 'length' }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          group: 'Dairy Products',
          station: 1,
          address: 40001,
          type: 4.0,
          length: '1%'
        },
        {
          name: 'Ice cream sandwich',
          group: 'Dairy Products',
          station: 1,
          address: 40002,
          type: 4.3,
          length: '1%'
        },
        {
          name: 'Eclair',
          group: 'Pastry',
          station: 40004,
          address: 23,
          type: 6.0,
          length: '7%'
        },
        {
          name: 'Cupcake',
          group: 'Pastry',
          station: 1,
          address: 67,
          type: 4.3,
          length: '8%'
        },
        {
          name: 'Gingerbread',
          group: 'Pastry',
          station: 1,
          address: 49,
          type: 3.9,
          length: '16%'
        },
        {
          name: 'Jelly bean',
          group: 'Candy',
          station: 1,
          address: 94,
          type: 0.0,
          length: '0%'
        },
        {
          name: 'Lollipop',
          group: 'Candy',
          station: 1,
          address: 98,
          type: 0,
          length: '2%'
        },
        {
          name: 'Honeycomb',
          group: 'Other',
          station: 1,
          address: 87,
          type: 6.5,
          length: '45%'
        },
        {
          name: 'Donut',
          group: 'Other',
          station: 1,
          address: 51,
          type: 4.9,
          length: '22%'
        },
        {
          name: 'KitKat',
          group: 'Other',
          station: 1,
          address: 65,
          type: 7,
          length: '6%'
        }
      ]
    }
  }
}
</script>
<style scoped>
</style>
