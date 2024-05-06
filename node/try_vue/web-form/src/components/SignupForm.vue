<template>
  <form @submit.prevent="handleSubmit">
    <label :class="emailIsTrue() ? 'check' : ''">Email:</label>
    <input type="email" v-model="email" required />
    <label :class="passwordIsTrue() ? 'check' : ''">Password:</label>
    <input type="password" v-model="password" required />
    <label class="skills">
      <span>Skills:</span>
      <span v-if="skills.length != 0">
        <span
          @click="removeSkill(skill)"
          class="skill-item"
          v-for="skill in skills"
          :key="skill"
          >{{ skill }}<span class="botao-delete">❌</span></span
        >
      </span>
    </label>
    <input @keyup.enter="addSkill" type="text" v-model="typedSkills" />
    <label>Role:</label>
    <br />
    <select v-model="role">
      <option value="developer">developer</option>
      <option value="designer">designer</option>
      <option value="contractor">contractor</option>
    </select>

    <div class="terms">
      <input type="checkbox" v-model="terms" required />
      <label>accept terms and conditions</label>
    </div>
    <div class="submit">
      <button type="button" @click="handleSubmit">Create Account</button>
    </div>
  </form>
  <div v-show="errors.length != 0" class="errors">
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "",
      terms: false,
      typedSkills: "",
      skills: [],
      errors: [],
    };
  },
  methods: {
    emailIsTrue() {
      if (this.email.includes("@")) {
        const [beforeAt, afterAt] = this.email.split("@");
        if (beforeAt && afterAt && afterAt.includes(".")) {
          const [domain, tld] = afterAt.split(".");
          if (domain && tld) {
            return true;
          }
        }
      }
      return false;
    },
    passwordIsTrue() {
      if (this.password) {
        return this.password.length >= 7;
      }
    },
    addSkill() {
      if (this.skills.includes(this.typedSkills)) {
        return;
      }
      if (!this.typedSkills) {
        return;
      }
      this.skills.push(this.typedSkills);
      this.typedSkills = "";
    },
    removeSkill(skill) {
      this.skills = this.skills.filter((s) => s !== skill);
    },
    handleSubmit() {
      this.errors = [];
      if (!this.emailIsTrue()) {
        this.errors.push("Invalid email");
      }
      if (!this.passwordIsTrue()) {
        this.errors.push("Password must be at least 7 characters long");
      }
      if (!this.terms) {
        this.errors.push("You must accept the terms and conditions");
      }
      if (this.errors.length === 0) {
        alert(`EMAIL CREATED WITH INFO: 
          email: ${this.email}
          password: 🤫🤫🤫
          role: ${this.role}
          skills: ${this.skills}
        `);
      }
    },
  },
};
</script>

<style scoped>
button {
  background: #aaf;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  color: #111;
  border-radius: 20px;
}
button:hover {
  cursor: pointer;
  background: rgb(130, 130, 243);
}
select {
  border: none;
  outline: none;
  padding: 10px 0;
  border: 1px solid white;
  border-bottom: 1px solid #ddd;
  width: 100%;
  color: #555;
}

form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

label.skills {
  width: 100%;
}

input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input[type="checkbox"] {
  display: inline-block;
  width: auto;
  margin: 0;
  margin-right: 10px;
  position: relative;
  top: 2px;
  left: 0px;
}

.skill-item {
  color: #555;
  background: #ddd;
  border: 1px solid #aaa;
  border-radius: 4px;
  margin-left: 4px;
  margin-bottom: 4px;
  display: inline-block;
  width: auto;
  padding: 2px;
  word-break: break-all;
  position: relative;
}

.botao-delete {
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: -57%;
  transform: translateX(-50%);
  font-size: 23px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.skill-item:hover .botao-delete {
  visibility: visible;
  opacity: 1;
}

.terms {
  display: flexbox;
}

.check::after {
  content: "✅";
  display: inline-block;
  margin-left: 5px;
}

.errors {
  margin: auto;
  width: 40%;
  margin-top: 1em;
  border: 1px solid rgb(146, 0, 0);
  border-radius: 5px;
  background: white;
  overflow: hidden; /* Garante que a altura extra seja oculta quando não estiver expandida */
}

.errors li {
  text-align: left;
  margin-bottom: 0.5em;
  color: #555;
  list-style: none;
  position: relative;
}

.errors li::before {
  content: "❗";
  position: absolute;
  left: -1em;
  top: -0.2em;
}

.errors ul {
  margin: 10px auto;
}
</style>
