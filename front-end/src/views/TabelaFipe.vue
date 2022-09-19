<template>
  <div class="fipe">
    <div class="container is-max-desktop">
      <article v-if="!allData" class="message is-danger">
        <div class="message-header">
          <p>Não foi possível obter dados.</p>
          <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
          Não foi localizado nenhuma tabela no Banco de Dados. Certifique-se de
          realizar upload do arquivo por meio do formulário.
        </div>
      </article>
      <div v-else>
        <div class="card" v-for="el in allData" :key="el.id">
          <div class="columns">
            <h5>Incluído por: {{ el.name }}</h5>
            <div class="creator column is-one-quarter"></div>
            <div class="column">
              <h5>Tipo de veículo: {{ el.type }}</h5>
            </div>
            <div class="column">
              <button>Ver veículo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      allData: {},
    }
  },
  methods: {},
  computed: {
    hasData() {
      console.log(this.allData)
      return this.allData
    },
  },
  beforeCreate() {
    axios
      .get('http://localhost:3000/tabela-fipe')
      .then((response) => {
        this.allData = { ...response.data }
      })
      .catch((err) => console.log(err))
  },
}
</script>
