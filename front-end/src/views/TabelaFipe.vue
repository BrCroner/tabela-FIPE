<template>
  <div class="fipe">
    <h1>Tabela FIPE</h1>
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
      <div v-else class="card" v-for="(el, index) in allData">
        <div class="columns">
          <div class="creator column is-one-quarter">
            <span>{{ el.id }}</span>
            <h5>Incluído por: {{ el.name }}</h5>
          </div>
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
