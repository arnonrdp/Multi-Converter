<template>
	<table>
		<ScaleInput v-model="Years" label="Years" />
		<ScaleInput v-model="Months" label="Months" />
		<ScaleInput v-model="Weeks" label="Weeks" />
		<ScaleInput v-model="Days" label="Days" />
		<ScaleInput v-model="Hours" label="Hours" />
		<ScaleInput v-model="Minutes" label="Minutes" />
		<ScaleInput v-model="Seconds" label="Seconds" />
		<ScaleInput v-model="Milliseconds" label="Milliseconds (ms)" />
		<ScaleInput v-model="Microseconds" label="Microseconds (µs)" />
		<ScaleInput v-model="Nanoseconds" label="Nanoseconds (ns)" />
		<tr>
			<td colspan="2"><h2>Historical</h2></td>
		</tr>
		<ScaleInput v-model="Era" label="Era" />
		<ScaleInput v-model="Millennia" label="Millennia" />
		<ScaleInput v-model="Centuries" label="Centuries" />
		<ScaleInput v-model="Decades" label="Decades" />
		<tfoot>
			<tr>
				<td colspan="2">
					<label for="decimal">Decimal Places: </label>
					<input id="decimal" type="number" step="1" v-model="decimal" />
				</td>
			</tr>
		</tfoot>
	</table>
</template>

<script>
import ScaleInput from "@/components/ScaleInput.vue";

export default {
	name: "Time",
	data: () => ({
		decimal: 0,
		baseInYears: 1,
	}),
	components: {
		ScaleInput,
	},
	computed: {
		Years: {
			get: function () {
				return this.baseInYears.toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInYears = +newVal;
			},
		},
		Months: {
			get: function () {
				return this.fromYears().Months(this.baseInYears).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInYears = this.toYears().Months(+newVal);
			},
		},
		Weeks: {
			get: function () {
				return this.fromYears().Weeks(this.baseInYears).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInYears = this.toYears().Weeks(+newVal);
			},
		},
		Days: {
			get: function () {
				return this.fromYears().Days(this.baseInYears).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInYears = this.toYears().Days(+newVal);
			},
		},
		Hours: {
			get: function () {
				return this.fromYears().Hours(this.baseInYears).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInYears = this.toYears().Hours(+newVal);
			},
		},
		Minutes: {
			get: function () {
				return this.fromYears().Minutes(this.baseInYears).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInYears = this.toYears().Minutes(+newVal);
			},
		},
		Seconds: {
			get: function () {
				return this.fromYears().Seconds(this.baseInYears).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInYears = this.toYears().Seconds(+newVal);
			},
		},
		Milliseconds: {
			get: function () {
				return this.fromYears()
					.Milliseconds(this.baseInYears)
					.toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInYears = this.toYears().Milliseconds(+newVal);
			},
		},
		Microseconds: {
			get: function () {
				return this.fromYears()
					.Microseconds(this.baseInYears)
					.toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInYears = this.toYears().Microseconds(+newVal);
			},
		},
		Nanoseconds: {
			get: function () {
				return this.fromYears()
					.Nanoseconds(this.baseInYears)
					.toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInYears = this.toYears().Nanoseconds(+newVal);
			},
		},
		Era: {
			get: function () {
				return this.fromYears().Era(this.baseInYears).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInYears = this.toYears().Era(+newVal);
			},
		},
		Millennia: {
			get: function () {
				return this.fromYears()
					.Millennia(this.baseInYears)
					.toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInYears = this.toYears().Millennia(+newVal);
			},
		},
		Centuries: {
			get: function () {
				return this.fromYears()
					.Centuries(this.baseInYears)
					.toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInYears = this.toYears().Centuries(+newVal);
			},
		},
		Decades: {
			get: function () {
				return this.fromYears().Decades(this.baseInYears).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInYears = this.toYears().Decades(+newVal);
			},
		},
	},
	methods: {
		fromYears: () => ({
			Months: (t) => t * 12,
			Weeks: (t) => t * 52.14285714285714,
			Days: (t) => t * 365.25,
			Hours: (t) => t * 8766,
			Minutes: (t) => t * 526000,
			Seconds: (t) => t * 31557600,
			Milliseconds: (t) => t * 3.154e10,
			Microseconds: (t) => t * 3.154e13,
			Nanoseconds: (t) => t * 3.154e16,
			Era: (t) => t / 10000,
			Millennia: (t) => t / 1000,
			Centuries: (t) => t / 100,
			Decades: (t) => t / 10,
		}),
		toYears: () => ({
			Months: (t) => t / 12,
			Weeks: (t) => t / 52.14285714285714,
			Days: (t) => t / 365.25,
			Hours: (t) => t / 8766,
			Minutes: (t) => t / 526000,
			Seconds: (t) => t / 31557600,
			Milliseconds: (t) => t / 3.154e10,
			Microseconds: (t) => t / 3.154e13,
			Nanoseconds: (t) => t / 3.154e16,
			Era: (t) => t * 10000,
			Millennia: (t) => t * 1000,
			Centuries: (t) => t * 100,
			Decades: (t) => t * 10,
		}),
	},
};
</script>