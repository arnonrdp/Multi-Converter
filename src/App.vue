<template>
  <div id="nav">
    <router-link to="/">Home</router-link> | <router-link to="/temperature">Temperature</router-link> |
    <router-link to="/length">Length</router-link> | <router-link to="/time">Time</router-link>
  </div>
  <router-view />
</template>

<style>
html {
  font-size: 16px;
}
@media screen and (max-width: 720px) {
  html {
    font-size: 15px;
  }
}
@media screen and (max-width: 640px) {
  html {
    font-size: 14px;
  }
}
@media screen and (max-width: 560px) {
  html {
    font-size: 13px;
  }
}
@media screen and (max-width: 480px) {
  html {
    font-size: 12px;
  }
  table > tr td input {
    width: 110px;
  }
}
@media screen and (max-width: 400px) {
  html {
    font-size: 11px;
  }
  table > tr td input {
    width: 100px;
  }
}
@media screen and (max-width: 320px) {
  html {
    font-size: 10px;
  }
  table > tr td input {
    width: 90px;
  }
}
body {
  background: #3e5151; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #decba4, #3e5151); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #decba4,
    #3e5151
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

#nav {
  padding: 30px;
  margin-bottom: 5vh;
}

a {
  font-size: 1rem;
  font-weight: bold;
  color: #253846;
  text-decoration: none;
}

a.router-link-exact-active {
  color: #0e6eb3;
}

table {
  margin: 0 auto;
  background-color: #17233c;
  padding: 24px;
  border-radius: 12px;
  border-spacing: 8px;
}

table h2 {
  font-size: 1.1rem;
  text-align: center;
}

table tr td {
  text-align: left;
}

input {
  color: #fff;
  font-size: 1rem;
  text-align: right;
  outline: 0;
  border: none;
  border-bottom: 2px solid #253846;
  background-color: transparent;
  transition: 0.3s ease;
}

input:focus {
  border-color: cadetblue;
}

/* Remove arrows from number input */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}

tfoot tr td {
  font-size: 0.9rem;
  padding-top: 10px;
  text-align: right;
}
input#decimal {
  width: 30px;
  text-align: center;
}
</style>
