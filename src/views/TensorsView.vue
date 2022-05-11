<template>
  <div class="tensor">
    <v-row justify="start">
      <v-col
        lg="3"
        md="6"
        sm="12"
        v-for="tensor in tensors"
        :key="tensor.name"
        class="ml-5 mt-5"
      >
        <tension-chart :title="tensor.name" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TensionChart from '@/components/TensionChart.vue'
export default {
  components: { TensionChart },
  name: 'TensorsView',
  data () {
    return {
      tensors: [
        { name: 'Tensor 1' },
        { name: 'Tensor 2' },
        { name: 'Tensor 3' },
        { name: 'Tensor 4' },
        { name: 'Tensor 5' },
        { name: 'Tensor 6' },
        { name: 'Tensor 7' },
        { name: 'Tensor 8' },
        { name: 'Tensor 9' }]
    }
  }
}
</script>

<style>
</style>
