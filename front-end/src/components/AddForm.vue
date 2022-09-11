<template>
  <div class="fipe">
    <div class="container is-max-desktop">
      <div class="card">
        <div class="content is-divider">
          <section class="hero is-info">
            <div class="hero-body">
              <p class="title">Cadasto de tabela FIPE</p>
              <p class="subtitle">Hero subtitle</p>
            </div>
          </section>
          <div class="mt-4 mr-6 ml-6">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quia
              possimus beatae quam libero est et rem, in veritatis, laboriosam
              ullam dolorem qui quisquam, repudiandae error atque quos
              perferendis architecto?
            </p>
          </div>
        </div>
        <div class="is-divider" data-content="OR"></div>
        <div class="card-content is-center">
          <form method="POST" action="/add-table" @submit.prevent="submitForm">
            <div class="field">
              <h2 class="pb-2">Seu nome</h2>
              <p class="control has-icons-left has-icons-right">
                <input
                  required
                  class="input is-info"
                  type="name"
                  placeholder="Nome"
                  v-model.trim="userName"
                />
                <font-awesome-icon class="user" icon="fa-user" />
              </p>
            </div>
            <div class="field">
              <h2 class="pb-2">Seu e-mail</h2>
              <p class="control has-icons-left has-icons-right">
                <input
                  required
                  class="input is-info"
                  type="email"
                  placeholder="E-mail"
                  v-model.trim="userEmail"
                />
                <font-awesome-icon class="email" icon="fa-envelope" />
              </p>
            </div>
            <div class="columns is-mobile mt-4 mb-4">
              <div class="column">
                <div class="control pb-1">
                  <h2 class="pb-2">Tipo de veículo</h2>
                  <label class="radio" for="type-car">
                    <input
                      type="radio"
                      id="type-car"
                      value="carro"
                      name="type"
                      v-model="selectedType"
                    />
                    <span class="file-icon car">
                      <font-awesome-icon icon="fa-car" />
                    </span>
                    Carro</label
                  >
                </div>
                <div class="control pb-1">
                  <label class="radio" for="type-motorcycle">
                    <input
                      type="radio"
                      id="type-motorcycle"
                      value="moto"
                      name="type"
                      v-model="selectedType"
                    />
                    <span class="file-icon motorcycle">
                      <font-awesome-icon icon="fa-motorcycle" />
                    </span>
                    Moto</label
                  >
                </div>
                <div class="control pb-1">
                  <label class="radio" for="type-truck">
                    <input
                      type="radio"
                      id="type-truck"
                      value="caminhao"
                      name="type"
                      v-model="selectedType"
                    />
                    <span class="file-icon truck">
                      <font-awesome-icon icon="fa-truck" />
                    </span>
                    Caminhão</label
                  >
                </div>
              </div>

              <div class="is-divider-vertical"></div>

              <div class="column is-offset-3">
                <h2 class="pb-2">Upload de tabela</h2>
                <div class="file has-name is-info mb-5">
                  <label class="file-label">
                    <input
                      required
                      class="file-input"
                      type="file"
                      id="file"
                      name="attachment[]"
                      multiple
                      @change="onFileChange($event)"
                      ref="files"
                      accept=".xls, .xlsx"
                    />
                    <span class="file-cta">
                      <span class="file-icon">
                        <font-awesome-icon icon="paperclip" />
                      </span>
                      <span class="file-l3abel"> Inserir tabela… </span>
                    </span>
                    <span class="file-name">{{ fileName }}</span>
                  </label>
                </div>
              </div>
            </div>

            <article v-if="invalidOutput" class="message is-warning">
              <div class="message-header">
                <p>Atenção</p>
                <button class="delete" aria-label="delete"></button>
              </div>
              <div class="message-body">
                Um ou mais campos podem estar apresentando
                <strong>dados inválidos</strong>. Verifique os campos:
                <ul>
                  <li><em>Nome</em></li>
                  <li><em>Tipo de veículo</em></li>
                  <li><em>Arquivo</em></li>
                </ul>
              </div>
            </article>

            <div class="columns is-mobile is-centered p-5">
              <div class="column is-half">
                <button
                  @click="sendForm"
                  class="button is-medium is-center is-info is-fullwidth"
                >
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import FormData from 'form-data'

export default {
  data() {
    return {
      userName: '',
      userEmail: '',
      arquivoExcel: null,
      selectedType: '',
      fileName: 'apenas arquivos .xls ou .xlsx',
      invalidOutput: false,
    }
  },
  name: 'AddForm',

  methods: {
    onFileChange(event) {
      const fileData = event.target.files[0]
      this.fileName = fileData.name
      this.arquivoExcel = this.$refs.files.files[0]
    },
    async sendForm() {
      if (
        this.userName === '' ||
        this.userEmail === '' ||
        !this.selectedType ||
        this.arquivoExcel === null
      ) {
        this.invalidInput = true
        return
      }
      this.invalidInput = false

      const dataForm = new FormData()
      dataForm.append('file', this.arquivoExcel)

      const data = {
        name: this.userName,
        email: this.userEmail,
        type: this.selectedType,
        file: dataForm,
      }
      console.log(data)
      const config = {
        header: {
          'Content-Type': 'multipart/form-data',
        },
      }
      axios
        .post('http://localhost:3000/add-table', data, config)
        .then((response) => {
          console.log(response)
          console.log(response.status)
        })
        .catch((err) => console.log(err))
    },
  },
}
</script>

<style scoped>
.user,
.email {
  pointer-events: none;
  float: left;
  margin-left: 10px;
  margin-top: -28px;
  position: relative;
  z-index: 2;
}
.file-icon {
  pointer-events: none;
  float: left;
  margin-left: 0px;
  margin-right: 10px;
  margin-top: 0px;
  position: relative;
  z-index: 2;
}
.car,
.motorcycle,
.truck,
.user,
.email {
  color: hsl(204, 86%, 53%);
}
.button-width {
  max-width: 80rem;
}
</style>
