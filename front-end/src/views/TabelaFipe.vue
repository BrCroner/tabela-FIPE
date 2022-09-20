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
        <div class="card box" v-for="(el, index) in allData" :key="el.id">
          <div class="columns">
            <div class="creator column is-one-third">
              <button
                class="button is-info is-light"
                v-for="item in allBrands"
                :key="item"
                @:click="getBrandDetails"
              >
                {{ item }}
              </button>
            </div>
            <div class="column">
              <h5>Informações do veículo:</h5>
              <ul v-for="item in theBrandDetails">
                <li class="title is-4 mt-3">{{ item['Modelo'] }}</li>
                <table class="table is-fullwidth is-bordered is-striped mb-5">
                  <thead>
                    <tr>
                      <th>Ano / Modelo</th>
                      <th>Preço</th>
                      <th>Código FIPE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{{ item['Ano modelo'] }}</td>
                      <td>{{ item['Preço médio'] }}</td>
                      <td>{{ item['Código FIPE'] }}</td>
                    </tr>
                  </tbody>
                </table>
              </ul>
            </div>
          </div>
          <div class="card-footer">
            <div class="columns is-centered">
              <div class="column">
                <p class="name subtitle is-7">Criado por {{ el.name }}</p>
              </div>
              <div class="column">
                <h6 class="email subtitle is-7">{{ el.email }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { ref } from 'vue'

export default {
  setup() {
    const allData = ref({})
    const allBrands = ref([])
    const theBrandDetails = ref([])

    return { allData, allBrands, theBrandDetails }
  },
  methods: {
    getBrandDetails(brand) {
      // Obtendo listagem de veículos por marca
      const brandsArray = { ...this.allData[0].file }
      const theBrand = brand.target.innerText
      brandsArray[theBrand].forEach((el) => {
        this.theBrandDetails.push(el)
      })
    },
  },
  beforeCreate() {
    axios
      .get('http://localhost:3000/tabela-fipe')
      .then((response) => {
        // Realizando destructuring dos dados recebidos
        this.allData = { ...response.data }
        // Destructuring das marcas da planilha
        const brandsArray = { ...this.allData[0].file }
        for (let el in brandsArray) {
          this.allBrands.push(el)
        }
      })
      .catch((err) => console.log(err))
  },
}
</script>
