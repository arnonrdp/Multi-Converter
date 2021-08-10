<template>
	<table>
		<tr>
			<td colspan="2"><h2>Metric</h2></td>
		</tr>
		<ScaleInput v-model="Kilometre" label="Kilometre (km)" />
		<ScaleInput v-model="Metre" label="Metre (m)" />
		<ScaleInput v-model="Decimetre" label="Decimetre (dm)" />
		<ScaleInput v-model="Centimetre" label="Centimetre (cm)" />
		<ScaleInput v-model="Millimetre" label="Millimetre (mm)" />
		<ScaleInput v-model="Micrometre" label="Micrometre (µm)" />
		<ScaleInput v-model="Nanometre" label="Nanometre (nm)" />
		<ScaleInput v-model="Angstrom" label="Angstrom (Å)" />
		<tr>
			<td colspan="2"><h2>British / American</h2></td>
		</tr>
		<ScaleInput v-model="League" label="League" />
		<ScaleInput v-model="Mile" label="Mile (mi)" />
		<ScaleInput v-model="Furlong" label="Furlong" />
		<ScaleInput v-model="Chain" label="Chain" />
		<ScaleInput v-model="Rod" label="Rod (rd)" />
		<ScaleInput v-model="Yard" label="Yard (yd)" />
		<ScaleInput v-model="Foot" label="Foot (ft)" />
		<ScaleInput v-model="Link" label="Link" />
		<ScaleInput v-model="Hand" label="Hand" />
		<ScaleInput v-model="Inch" label="Inch (in)" />
		<ScaleInput v-model="Thou" label="Thou (thou)" />
		<tr>
			<td colspan="2"><h2>Nautical</h2></td>
		</tr>
		<ScaleInput v-model="Nautical" label="Nautical Mile" />
		<ScaleInput v-model="Fathom" label="Fathom" />
		<tr>
			<td colspan="2"><h2>Astronomical</h2></td>
		</tr>
		<ScaleInput v-model="Parsec" label="Parsec (pc)" />
		<ScaleInput v-model="LightYear" label="Light Year" />
		<ScaleInput v-model="AstronomicalUnit" label="Astronomical Unit (AE)" />
		<ScaleInput v-model="LightMinute" label="Light Minute" />
		<ScaleInput v-model="LightSecond" label="Light Second" />
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
	name: "Length",
	data: () => ({
		decimal: 0,
		baseInKm: 1000,
	}),
	components: {
		ScaleInput,
	},
	computed: {
		Kilometre: {
			get: function () {
				return this.baseInKm.toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInKm = +newVal;
			},
		},
		Metre: {
			get: function () {
				return this.fromKilometre().Metre(this.baseInKm).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInKm = this.toKilometre().Metre(+newVal);
			},
		},
		Decimetre: {
			get: function () {
				return this.fromKilometre()
					.Decimetre(this.baseInKm)
					.toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInKm = this.toKilometre().Decimetre(+newVal);
			},
		},
		Centimetre: {
			get: function () {
				return this.fromKilometre()
					.Centimetre(this.baseInKm)
					.toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInKm = this.toKilometre().Centimetre(+newVal);
			},
		},
		Millimetre: {
			get: function () {
				return this.fromKilometre()
					.Millimetre(this.baseInKm)
					.toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInKm = this.toKilometre().Millimetre(+newVal);
			},
		},
		Micrometre: {
			get: function () {
				return this.fromKilometre()
					.Micrometre(this.baseInKm)
					.toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInKm = this.toKilometre().Micrometre(+newVal);
			},
		},
		Nanometre: {
			get: function () {
				return this.fromKilometre()
					.Nanometre(this.baseInKm)
					.toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInKm = this.toKilometre().Nanometre(+newVal);
			},
		},
		Angstrom: {
			get: function () {
				return this.fromKilometre()
					.Angstrom(this.baseInKm)
					.toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInKm = this.toKilometre().Angstrom(+newVal);
			},
		},
		League: {
			get: function () {
				return this.fromKilometre().League(this.baseInKm).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInKm = this.toKilometre().League(+newVal);
			},
		},
		Mile: {
			get: function () {
				return this.fromKilometre().Mile(this.baseInKm).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInKm = this.toKilometre().Mile(+newVal);
			},
		},
		Furlong: {
			get: function () {
				return this.fromKilometre()
					.Furlong(this.baseInKm)
					.toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInKm = this.toKilometre().Furlong(+newVal);
			},
		},
		Chain: {
			get: function () {
				return this.fromKilometre().Chain(this.baseInKm).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInKm = this.toKilometre().Chain(+newVal);
			},
		},
		Rod: {
			get: function () {
				return this.fromKilometre().Rod(this.baseInKm).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInKm = this.toKilometre().Rod(+newVal);
			},
		},
		Yard: {
			get: function () {
				return this.fromKilometre().Yard(this.baseInKm).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInKm = this.toKilometre().Yard(+newVal);
			},
		},
		Foot: {
			get: function () {
				return this.fromKilometre().Foot(this.baseInKm).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInKm = this.toKilometre().Foot(+newVal);
			},
		},
		Link: {
			get: function () {
				return this.fromKilometre().Link(this.baseInKm).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInKm = this.toKilometre().Link(+newVal);
			},
		},
		Hand: {
			get: function () {
				return this.fromKilometre().Hand(this.baseInKm).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInKm = this.toKilometre().Hand(+newVal);
			},
		},
		Inch: {
			get: function () {
				return this.fromKilometre().Inch(this.baseInKm).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInKm = this.toKilometre().Inch(+newVal);
			},
		},
		Thou: {
			get: function () {
				return this.fromKilometre().Thou(this.baseInKm).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInKm = this.toKilometre().Thou(+newVal);
			},
		},
		Nautical: {
			get: function () {
				return this.fromKilometre()
					.Nautical(this.baseInKm)
					.toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInKm = this.toKilometre().Nautical(+newVal);
			},
		},
		Fathom: {
			get: function () {
				return this.fromKilometre().Fathom(this.baseInKm).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInKm = this.toKilometre().Fathom(+newVal);
			},
		},
		Parsec: {
			get: function () {
				return this.fromKilometre().Parsec(this.baseInKm).toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInKm = this.toKilometre().Parsec(+newVal);
			},
		},
		LightYear: {
			get: function () {
				return this.fromKilometre()
					.LightYear(this.baseInKm)
					.toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInKm = this.toKilometre().LightYear(+newVal);
			},
		},
		AstronomicalUnit: {
			get: function () {
				return this.fromKilometre()
					.AstronomicalUnit(this.baseInKm)
					.toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInKm = this.toKilometre().AstronomicalUnit(+newVal);
			},
		},
		LightMinute: {
			get: function () {
				return this.fromKilometre()
					.LightMinute(this.baseInKm)
					.toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInKm = this.toKilometre().LightMinute(+newVal);
			},
		},
		LightSecond: {
			get: function () {
				return this.fromKilometre()
					.LightSecond(this.baseInKm)
					.toFixed(this.decimal);
			},
			set: function (newVal) {
				this.baseInKm = this.toKilometre().LightSecond(+newVal);
			},
		},
	},
	methods: {
		fromKilometre: () => ({
			Metre: (l) => l * 1000,
			Decimetre: (l) => l * 10000,
			Centimetre: (l) => l * 100000,
			Millimetre: (l) => l * 1000000,
			Micrometre: (l) => l * 1000000000,
			Nanometre: (l) => l * 1000000000000,
			Angstrom: (l) => l * 10000000000000,
			League: (l) => l / 5.556,
			Mile: (l) => l / 1.609,
			Furlong: (l) => l * 4971,
			Chain: (l) => l * 49.71,
			Rod: (l) => l * 198.838781516,
			Yard: (l) => l * 1093.61,
			Foot: (l) => l * 3280.84,
			Link: (l) => l * 4970.9695379,
			Hand: (l) => l * 9842.52,
			Inch: (l) => l * 39370.1,
			Thou: (l) => l * 3.937,
			Nautical: (l) => l / 1.852,
			Fathom: (l) => l * 546.8066491689,
			Parsec: (l) => l / 3.086e13,
			LightYear: (l) => l / 9.461e12,
			AstronomicalUnit: (l) => l / 1.496e8,
			LightMinute: (l) => l / 1.799e7,
			LightSecond: (l) => l / 299792,
		}),
		toKilometre: () => ({
			Metre: (l) => l / 1000,
			Decimetre: (l) => l / 10000,
			Centimetre: (l) => l / 100000,
			Millimetre: (l) => l / 1000000,
			Micrometre: (l) => l / 1000000000,
			Nanometre: (l) => l / 1000000000000,
			Angstrom: (l) => l / 10000000000000,
			League: (l) => l * 5.556,
			Mile: (l) => l * 1.609,
			Furlong: (l) => l / 4971,
			Chain: (l) => l / 49.71,
			Rod: (l) => l / 198.838781516,
			Yard: (l) => l / 1093.61,
			Foot: (l) => l / 3280.84,
			Link: (l) => l / 4970.9695379,
			Hand: (l) => l / 9842.52,
			Inch: (l) => l / 39370.1,
			Thou: (l) => l / 3.937,
			Nautical: (l) => l * 1.852,
			Fathom: (l) => l / 546.8066491689,
			Parsec: (l) => l * 3.086e13,
			LightYear: (l) => l * 9.461e12,
			AstronomicalUnit: (l) => l * 1.496e8,
			LightMinute: (l) => l * 1.799e7,
			LightSecond: (l) => l * 299792,
		}),
	},
};
</script>