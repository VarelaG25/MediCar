<template>
  <div class="register-container">

    <div class="card">

      <div class="header">
        <h2><strong>Crea tu cuenta</strong></h2>
        <p>Regístrate para proteger tu auto con el mejor respaldo.</p>
      </div>

      <!-- MENSAJE DE ERROR -->
      <div v-if="errorMessage" class="error">
        {{ errorMessage }}
      </div>

      <div class="profile">
        <div class="photo">
            <span class="upload-text">Subir foto</span>
        </div>
        <p class="photo-text">Foto de Perfil</p>
        <span class="photo-sub">Toca para subir una foto</span>
      </div>

      <form @submit.prevent="register">

        <label>Nombre</label>
        <input v-model="form.nombre" type="text" placeholder="Ingresa tu nombre"/>

        <div class="row">
          <div class="field">
            <label>Apellido Paterno</label>
            <input v-model="form.apellidoP" type="text" placeholder="Apellido paterno"/>
          </div>

          <div class="field">
            <label>Apellido Materno</label>
            <input v-model="form.apellidoM" type="text" placeholder="Apellido materno"/>
          </div>
        </div>

        <div class="row">
          <div class="field">
            <label>Fecha de Nacimiento</label>
            <input v-model="form.fecha" type="date"/>
          </div>

          <div class="field">
            <label>Género</label>
            <select v-model="form.genero">
              <option disabled value="">Selecciona una opción</option>
              <option>Masculino</option>
              <option>Femenino</option>
            </select>
          </div>
        </div>

        <h3>Detalles de la cuenta</h3>

        <label>Alias</label>
        <input v-model="form.alias" type="text" placeholder="Nombre de usuario"/>

        <label>Correo Electrónico</label>
        <input v-model="form.email" type="email" placeholder="correo@ejemplo.com"/>

        <div class="row">
          <div class="field">
            <label>Contraseña</label>
            <input v-model="form.password" type="password" placeholder="******"/>
          </div>

          <div class="field">
            <label>Confirmar Contraseña</label>
            <input v-model="form.confirmPassword" type="password" placeholder="******"/>
          </div>
        </div>

        <label>Póliza</label>
        <input type="text" v-model="form.compania" placeholder="Compañía de seguro" />
        <input type="text" v-model="form.numeroPoliza" placeholder="Número de póliza" />

        <label>Vehículo</label>
        <input type="text" v-model="form.marca" placeholder="Marca del vehículo" />
        <input type="text" v-model="form.modelo" placeholder="Modelo del vehículo" />
        <input type="text" v-model="form.placas" placeholder="Placas" />
        
        <div class="row">
        <label>Dirección</label>
        </div>

        <div class="row">
        <div class="field">
            <label>País</label>
            <input type="text" v-model="form.pais" placeholder="País" />
        </div>

        <div class="field">
            <label>Estado</label>
            <input type="text" v-model="form.estado" placeholder="Estado" />
        </div>
        </div>

        <div class="row">
        <div class="field">
            <label>Ciudad</label>
            <input type="text" v-model="form.ciudad" placeholder="Ciudad" />
        </div>

        <div class="field">
            <label>Código Postal</label>
            <input type="text" v-model="form.codigoPostal" placeholder="Código Postal" />
        </div>
        </div>

        <label>Calle</label>
        <input type="text" v-model="form.calle" placeholder="Calle y número" />
        <button type="submit">Registrarse</button>

        <p class="login">
          ¿Ya tienes una cuenta?
          <a href="#">Inicia sesión</a>
        </p>

      </form>

    </div>

  </div>
</template>

<script>
export default {
  name: "RegisterView",

  data() {
    return {
      errorMessage: "",
      form: {
        nombre: "",
        apellidoP: "",
        apellidoM: "",
        fecha: "",
        genero: "",
        alias: "",
        email: "",
        password: "",
        confirmPassword: "",
        compania: "",
        numeroPoliza: "",
        marca: "",
        modelo: "",
        placas: "",
        direccion: ""
      }
    }
  },

  methods: {
    register() {

      // revisar si hay campos vacíos
      for (let key in this.form) {
        if (!this.form[key]) {
          this.errorMessage = "Por favor llena todos los campos."
          return
        }
      }

      // validar contraseñas
      if (this.form.password !== this.form.confirmPassword) {
        this.errorMessage = "Las contraseñas no coinciden."
        return
      }

      // limpiar error si todo está bien
      this.errorMessage = ""

      console.log("Datos del registro:", this.form)
    }
  }
}
</script>

<style scoped>

.error{
  background:#fee2e2;
  color:#b91c1c;
  padding:10px;
  border-radius:6px;
  margin-bottom:15px;
  text-align:center;
}

</style>
<style scoped>

.register-container{
  background:#f3f4f6;
  min-height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
}

.card{
  background:white;
  padding:40px;
  margin: 15px;
  width:1000px;
  border-radius:12px;
  box-shadow:0 10px 30px rgba(0,0,0,0.1);
}

.header p{
  color:#6b7280;
  margin-bottom:30px;
}

.profile{
  text-align:center;
  margin-bottom:30px;
}

.photo{
  width:110px;
  height:110px;
  background:#f4b183;
  border-radius:50%;
  margin:auto;
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;
  cursor:pointer;
  transition:all 0.3s ease;
}

.photo:hover{
  transform:scale(1.05);
  background:#f29d63;
}

.upload-text{
  opacity:0;
  color:white;
  font-weight:bold;
  font-size:14px;
  transition:opacity 0.3s;
}

.photo:hover .upload-text{
  opacity:1;
}

.photo-text{
  font-weight:bold;
  margin-top:10px;
}

form label{
  display:block;
  margin-top:15px;
  font-weight:600;
}

input, select{
  width:100%;
  padding:10px;
  border-radius:6px;
  border:1px solid #d1d5db;
  margin-top:5px;
}

.row{
  display:flex;
  gap:20px;
}

.field{
  flex:1;
}

button{
  width:100%;
  margin-top:30px;
  padding:12px;
  border:none;
  background:#2563eb;
  color:white;
  border-radius:8px;
  font-size:16px;
  cursor:pointer;
}

button:hover{
  background:#1e4ed8;
}

.login{
  text-align:center;
  margin-top:15px;
}

.login a{
  color:#2563eb;
  text-decoration:none;
}

</style>
