<template>
  <q-page padding>
    <div class="row">
      <div class="col-xs-12 col-md-4 col-sm-4 q-pa-md">
        <q-card>
          <q-card-section class="text-center text-white bg-info">
            Total de chamados
          </q-card-section>
          <q-card-section class="text-center text-bold">
            10
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-md-4 col-sm-4 q-pa-md">
        <q-card>
          <q-card-section class="text-center text-white bg-positive text-bold">
            Total de chamados concluidos
          </q-card-section>
          <q-card-section class="text-center">
            10
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-md-4 col-sm-4 q-pa-md">
        <q-card>
          <q-card-section class="text-center text-white bg-negative">
            Total de chamados abertos
          </q-card-section>
          <q-card-section class="text-center text-bold">
            10
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row">
      <GChart style="width: 100%; height: 400px;"
              class="col-all"
              type="AreaChart"
              :data="chartData"
              :options="chartOptions.chart"
      />
    </div>
  </q-page>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  name: 'PageIndex',
  components: {
    GChart
  },
  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Chamados', 'Abertos', 'Resolvidos'],
        ['2014', 2, 1],
        ['2015', 8, 6],
        ['2016', 10, 8],
        ['2017', 11, 20]
      ],
      chartOptions: {
        chart: {
          title: 'Estatiscas de chamados',
          colors: ['#C10015', '#21BA45'],
          hAxis: {
            title: 'Chamados'
          },
          vAxis: {
            minValue: 0,
            color: '#333'
          }
        }
      }
    }
  }
}
</script>
