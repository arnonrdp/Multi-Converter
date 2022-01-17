<template>
  <table>
    <ScaleInput v-model="Kelvin" label="Kelvin (K)" />
    <ScaleInput v-model="Celsius" label="Celsius (ºC)" />
    <ScaleInput v-model="Fahrenheit" label="Fahrenheit (ºF)" />
    <ScaleInput v-model="Rankine" label="Rankine (ºRa)" />
    <ScaleInput v-model="Romer" label="Rømer (ºRø)" />
    <ScaleInput v-model="Newton" label="Newton (ºN)" />
    <ScaleInput v-model="Delisle" label="Delisle (ºD)" />
    <ScaleInput v-model="Reaumur" label="Reaumur (ºRé)" />
    <tfoot>
      <tr>
        <td colspan="2">
          <label for="decimal">Decimal Places: </label>
          <input id="decimal" type="number" min="0" step="1" v-model="decimal" />
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import ScaleInput from "@/components/ScaleInput.vue";

export default {
  name: "Temperature",
  data: () => ({
    decimal: 0,
    baseInKelvins: 293.15,
  }),
  components: {
    ScaleInput,
  },
  computed: {
    Kelvin: {
      get: function() {
        return this.baseInKelvins.toFixed(this.decimal);
      },
      set: function(newVal) {
        this.baseInKelvins = +newVal;
      },
    },
    Celsius: {
      get: function() {
        return this.fromKelvin()
          .Celsius(this.baseInKelvins)
          .toFixed(this.decimal);
      },
      set: function(newVal) {
        this.baseInKelvins = this.toKelvin().Celsius(+newVal);
      },
    },
    Fahrenheit: {
      get: function() {
        return this.fromKelvin()
          .Fahrenheit(this.baseInKelvins)
          .toFixed(this.decimal);
      },
      set: function(newVal) {
        this.baseInKelvins = this.toKelvin().Fahrenheit(+newVal);
      },
    },
    Rankine: {
      get: function() {
        return this.fromKelvin()
          .Rankine(this.baseInKelvins)
          .toFixed(this.decimal);
      },
      set: function(newVal) {
        this.baseInKelvins = this.toKelvin().Rankine(+newVal);
      },
    },
    Romer: {
      get: function() {
        return this.fromKelvin()
          .Romer(this.baseInKelvins)
          .toFixed(this.decimal);
      },
      set: function(newVal) {
        this.baseInKelvins = this.toKelvin().Romer(+newVal);
      },
    },
    Newton: {
      get: function() {
        return this.fromKelvin()
          .Newton(this.baseInKelvins)
          .toFixed(this.decimal);
      },
      set: function(newVal) {
        this.baseInKelvins = this.toKelvin().Newton(+newVal);
      },
    },
    Delisle: {
      get: function() {
        return this.fromKelvin()
          .Delisle(this.baseInKelvins)
          .toFixed(this.decimal);
      },
      set: function(newVal) {
        this.baseInKelvins = this.toKelvin().Delisle(+newVal);
      },
    },
    Reaumur: {
      get: function() {
        return this.fromKelvin()
          .Reaumur(this.baseInKelvins)
          .toFixed(this.decimal);
      },
      set: function(newVal) {
        this.baseInKelvins = this.toKelvin().Reaumur(+newVal);
      },
    },
  },
  methods: {
    fromKelvin: () => ({
      Celsius: (t) => t - 273.15,
      Fahrenheit: (t) => t * 1.8 - 459.889,
      Rankine: (t) => t * 1.8,
      Romer: (t) => ((t - 273.15) * 21) / 40 + 7.5,
      Newton: (t) => ((t - 273.15) * 33) / 100,
      Delisle: (t) => ((373.15 - t) * 3) / 2,
      Reaumur: (t) => (t - 273.15) * 0.8,
    }),
    toKelvin: () => ({
      Celsius: (t) => t + 273.15,
      Fahrenheit: (t) => (t + 459.67) / 1.8,
      Rankine: (t) => t / 1.8,
      Romer: (t) => ((t - 7.5) * 40) / 21 + 273.15,
      Newton: (t) => (t * 100) / 33 + 273.15,
      Delisle: (t) => 373.15 - (t * 2) / 3,
      Reaumur: (t) => t * 1.25 + 273.15,
    }),
  },
};
</script>
