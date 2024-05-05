<template>
  <form>
    <label :class="emailIsTrue() ? 'check' : ''">Email:</label>
    <input type="email" v-model="email" required />
    <label :class="passwordIsTrue() ? 'check' : ''">Password:</label>
    <input type="password" v-model="password" required />
    <label class="skills">
      <span>Skills:</span>
      <span v-if="skills.length > 0">
        <span class="skill-item" v-for="skill in skills" :key="skill">{{
          skill
        }}</span>
      </span>
    </label>
    <input @keyup="addSkill" type="text" v-model="typedSkills" />
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
  </form>
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
    addSkill(e) {
      if (e.key === "Enter" || e.key === ",") {
        if (e.key === ",") {
          if (!this.typedSkills.slice(0, -1)) {
            this.typedSkills = "";
            return;
          }
          this.skills.push(this.typedSkills.slice(0, -1));
        } else {
          if (!this.typedSkills) {
            return;
          }
          this.skills.push(this.typedSkills);
        }
        this.typedSkills = "";
      }
    },
  },
};
</script>

<style scoped>
select {
  border: none;
  outline: none;
  border: 1px solid white;
  border-bottom: 1px solid #ddd;
  width: 100%;
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

.check::after {
  content: "✅";
  display: inline-block;
  margin-left: 5px;
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
}
label.skills {
  width: 100%;
}
.terms {
  display: flexbox;
}
</style>
