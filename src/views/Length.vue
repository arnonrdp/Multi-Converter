<template>
	<table>
		<tr>
			<td colspan="2"><h2>Metric</h2></td>
		</tr>
		<tr>
			<td><input id="Kilometre" type="number" v-model="Kilometre" /></td>
			<td><label for="Kilometre">Kilometre (km)</label></td>
		</tr>
		<tr>
			<td><input id="metreIn" type="number" v-model="Metre" /></td>
			<td><label for="metreIn">Metre (m)</label></td>
		</tr>
		<tr>
			<td><input id="decimetreIn" type="number" v-model="Decimetre" /></td>
			<td><label for="decimetreIn">Decimetre (dm)</label></td>
		</tr>
		<tr>
			<td><input id="centimetreIn" type="number" v-model="Centimetre" /></td>
			<td><label for="centimetreIn">Centimetre (cm)</label></td>
		</tr>
		<tr>
			<td><input id="milimetreIn" type="number" v-model="Millimetre" /></td>
			<td><label for="milimetreIn">Millimetre (mm)</label></td>
		</tr>
		<tr>
			<td><input id="micrometreIn" type="number" v-model="Micrometre" /></td>
			<td><label for="micrometreIn">Micrometre (µm)</label></td>
		</tr>
		<tr>
			<td><input id="nanometreIn" type="number" v-model="Nanometre" /></td>
			<td><label for="nanometreIn">Nanometre (nm)</label></td>
		</tr>
		<tr>
			<td><input id="angstromIn" type="number" v-model="Angstrom" /></td>
			<td><label for="angstromIn">Angstrom (Å)</label></td>
		</tr>

		<tr>
			<td colspan="2"><h2>British / American</h2></td>
		</tr>
		<tr>
			<td><input id="leagueIn" type="number" v-model="League" /></td>
			<td><label for="leagueIn">League</label></td>
		</tr>
		<tr>
			<td><input id="mileIn" type="number" v-model="Mile" /></td>
			<td><label for="mileIn">Mile (mi)</label></td>
		</tr>
		<tr>
			<td><input id="furlongIn" type="number" v-model="Furlong" /></td>
			<td><label for="furlongIn">Furlong</label></td>
		</tr>
		<tr>
			<td><input id="chainIn" type="number" v-model="Chain" /></td>
			<td><label for="chainIn">Chain</label></td>
		</tr>
		<tr>
			<td><input id="rodIn" type="number" v-model="Rod" /></td>
			<td><label for="rodIn">Rod (rd)</label></td>
		</tr>
		<tr>
			<td><input id="yardIn" type="number" v-model="Yard" /></td>
			<td><label for="yardIn">Yard (yd)</label></td>
		</tr>
		<tr>
			<td><input id="footIn" type="number" v-model="Foot" /></td>
			<td><label for="footIn">Foot (ft)</label></td>
		</tr>
		<tr>
			<td><input id="linkIn" type="number" v-model="Link" /></td>
			<td><label for="linkIn">Link</label></td>
		</tr>
		<tr>
			<td><input id="handIn" type="number" v-model="Hand" /></td>
			<td><label for="handIn">Hand</label></td>
		</tr>
		<tr>
			<td><input id="inchIn" type="number" v-model="Inch" /></td>
			<td><label for="inchIn">Inch (in)</label></td>
		</tr>
		<tr>
			<td><input id="thouIn" type="number" v-model="Thou" /></td>
			<td><label for="thouIn">Thou (thou)</label></td>
		</tr>

		<tr>
			<td colspan="2"><h2>Nautical</h2></td>
		</tr>
		<tr>
			<td><input id="nauticalIn" type="number" v-model="Nautical" /></td>
			<td><label for="nauticalIn">Nautical Mile</label></td>
		</tr>
		<tr>
			<td><input id="fathomIn" type="number" v-model="Fathom" /></td>
			<td><label for="fathomIn">Fathom</label></td>
		</tr>

		<tr>
			<td colspan="2"><h2>Astronomical</h2></td>
		</tr>
		<tr>
			<td><input id="parsecIn" type="number" v-model="Parsec" /></td>
			<td><label for="parsecIn">Parsec (pc)</label></td>
		</tr>
		<tr>
			<td><input id="lightYearIn" type="number" v-model="LightYear" /></td>
			<td><label for="lightYearIn">Light Year</label></td>
		</tr>
		<tr>
			<td>
				<input
					id="astronomicalUnitIn"
					type="number"
					v-model="AstronomicalUnit"
				/>
			</td>
			<td><label for="astronomicalUnitIn">Astronomical Unit (AE)</label></td>
		</tr>
		<tr>
			<td>
				<input id="lightMinuteIn" type="number" v-model="LightMinute" />
			</td>
			<td><label for="lightMinuteIn">Light Minute</label></td>
		</tr>
		<tr>
			<td>
				<input id="lightSecondIn" type="number" v-model="LightSecond" />
			</td>
			<td><label for="lightSecondIn">Light Second</label></td>
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
	name: "Length",
	data: () => ({
		decimal: 0,
		baseInKm: 1000,
	}),
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