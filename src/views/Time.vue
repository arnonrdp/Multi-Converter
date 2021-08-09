<template>
	<table>
		<tr>
			<td><input id="years" type="number" v-model="Years" /></td>
			<td><label for="years">Years</label></td>
		</tr>
		<tr>
			<td><input id="months" type="number" v-model="Months" /></td>
			<td><label for="months">Months</label></td>
		</tr>
		<tr>
			<td><input id="weeks" type="number" v-model="Weeks" /></td>
			<td><label for="weeks">Weeks</label></td>
		</tr>
		<tr>
			<td><input id="days" type="number" min="0" v-model="Days" /></td>
			<td><label for="days">Days</label></td>
		</tr>
		<tr>
			<td><input id="hours" type="number" v-model="Hours" /></td>
			<td><label for="hours">Hours</label></td>
		</tr>
		<tr>
			<td><input id="minutes" type="number" v-model="Minutes" /></td>
			<td><label for="minutes">Minutes</label></td>
		</tr>
		<tr>
			<td><input id="seconds" type="number" v-model="Seconds" /></td>
			<td><label for="seconds">Seconds (s)</label></td>
		</tr>
		<tr>
			<td>
				<input id="milliseconds" type="number" v-model="Milliseconds" />
			</td>
			<td><label for="milliseconds">Milliseconds (ms)</label></td>
		</tr>
		<tr>
			<td>
				<input id="microseconds" type="number" v-model="Microseconds" />
			</td>
			<td><label for="microseconds">Microseconds (µs)</label></td>
		</tr>
		<tr>
			<td>
				<input id="nanoseconds" type="number" v-model="Nanoseconds" />
			</td>
			<td><label for="nanoseconds">Nanoseconds (ns)</label></td>
		</tr>
		<tr>
			<td colspan="2"><h2>Historical</h2></td>
		</tr>
		<tr>
			<td><input id="era" type="number" v-model="Era" /></td>
			<td><label for="era">Era</label></td>
		</tr>
		<tr>
			<td><input id="millennia" type="number" v-model="Millennia" /></td>
			<td><label for="millennia">Millennia</label></td>
		</tr>
		<tr>
			<td><input id="centuries" type="number" v-model="Centuries" /></td>
			<td><label for="centuries">Centuries</label></td>
		</tr>
		<tr>
			<td><input id="decades" type="number" v-model="Decades" /></td>
			<td><label for="decades">Decades</label></td>
		</tr>
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
export default {
	name: "Time",
	data: () => ({
		decimal: 0,
		baseInDays: 30,
	}),
	computed: {
		Days: {
			get: function () {
				return this.baseInDays.toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInDays = +newVal;
			},
		},
		Years: {
			get: function () {
				return this.fromDays().Years(this.baseInDays).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInDays = this.toDays().Years(+newVal);
			},
		},
		Months: {
			get: function () {
				return this.fromDays().Months(this.baseInDays).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInDays = this.toDays().Months(+newVal);
			},
		},
		Weeks: {
			get: function () {
				return this.fromDays().Weeks(this.baseInDays).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInDays = this.toDays().Weeks(+newVal);
			},
		},
		Hours: {
			get: function () {
				return this.fromDays().Hours(this.baseInDays).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInDays = this.toDays().Hours(+newVal);
			},
		},
		Minutes: {
			get: function () {
				return this.fromDays().Minutes(this.baseInDays).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInDays = this.toDays().Minutes(+newVal);
			},
		},
		Seconds: {
			get: function () {
				return this.fromDays().Seconds(this.baseInDays).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInDays = this.toDays().Seconds(+newVal);
			},
		},
		Milliseconds: {
			get: function () {
				return this.fromDays()
					.Milliseconds(this.baseInDays)
					.toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInDays = this.toDays().Milliseconds(+newVal);
			},
		},
		Microseconds: {
			get: function () {
				return this.fromDays()
					.Microseconds(this.baseInDays)
					.toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInDays = this.toDays().Microseconds(+newVal);
			},
		},
		Nanoseconds: {
			get: function () {
				return this.fromDays()
					.Nanoseconds(this.baseInDays)
					.toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInDays = this.toDays().Nanoseconds(+newVal);
			},
		},
		Era: {
			get: function () {
				return this.fromDays().Era(this.baseInDays).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInDays = this.toDays().Era(+newVal);
			},
		},
		Millennia: {
			get: function () {
				return this.fromDays().Millennia(this.baseInDays).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInDays = this.toDays().Millennia(+newVal);
			},
		},
		Centuries: {
			get: function () {
				return this.fromDays().Centuries(this.baseInDays).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInDays = this.toDays().Centuries(+newVal);
			},
		},
		Decades: {
			get: function () {
				return this.fromDays().Decades(this.baseInDays).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInDays = this.toDays().Decades(+newVal);
			},
		},
	},
	methods: {
		fromDays: () => ({
			Years: (t) => t / 365.25,
			Months: (t) => t / 30.417,
			Weeks: (t) => t / 7,
			Hours: (t) => t * 24,
			Minutes: (t) => t * 1440,
			Seconds: (t) => t * 86400,
			Milliseconds: (t) => t * 86400000,
			Microseconds: (t) => t * 864e10,
			Nanoseconds: (t) => t * 8.64e13,
			Era: (t) => t / 3650000,
			Millennia: (t) => t / 365000,
			Centuries: (t) => t / 36500,
			Decades: (t) => t / 3650,
		}),
		toDays: () => ({
			Years: (t) => t * 365.25,
			Months: (t) => t * 30.417,
			Weeks: (t) => t * 7,
			Hours: (t) => t / 24,
			Minutes: (t) => t / 1440,
			Seconds: (t) => t / 86400,
			Milliseconds: (t) => t / 86400000,
			Microseconds: (t) => t / 864e10,
			Nanoseconds: (t) => t / 8.64e13,
			Era: (t) => t * 3650000,
			Millennia: (t) => t * 365000,
			Centuries: (t) => t * 36500,
			Decades: (t) => t * 3650,
		}),
	},
};
</script>