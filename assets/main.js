// ===> TEMPERATURE <====
const toKelvin = {
	Celsius: t => t + 273.15,
	Farenheit: t => (t + 459.67) / 1.8,
	Rankine: t => t / 1.8,
	Rømer: t => (t - 7.5) * 40 / 21 + 273.15,
	Newton: t => t * 100 / 33 + 273.15,
	Delisle: t => 373.15 - t * 2 / 3,
	Reaumur: t => t * 1.25 + 273.15,
	Kelvin: t => t,
};

decimalTemp.addEventListener("input", decimalTempEvent);
temperatureList.addEventListener("input", temperatureEvent);
decimalTempEvent();

function decimalTempEvent() {
	const step = 1 / 10 ** decimalTemp.value;
	celsiusIn.step = step;
	kelvinIn.step = step;
	farenheitIn.step = step;
	rankineIn.step = step;
	romerIn.step = step;
	newtonIn.step = step;
	delisleIn.step = step;
	reaumurIn.step = step;
	temperatureEvent();
}
function temperatureEvent({ target = kelvinIn } = {}) {
	const round = val => val.toFixed(decimalTemp.value);
	const kelvin = Math.max(0, toKelvin[target.dataset.units](Number(target.value)));

	celsiusIn.value = round(kelvin - 273.15);
	kelvinIn.value = round(kelvin);
	farenheitIn.value = round(kelvin * 1.8 - 459.67);
	rankineIn.value = round(kelvin * 1.8);
	romerIn.value = round((kelvin - 273.15) * 21 / 40 + 7.5);
	newtonIn.value = round((kelvin - 273.15) * 33 / 100);
	delisleIn.value = round((373.15 - kelvin) * 3 / 2);
	reaumurIn.value = round((kelvin - 273.15) * 0.8);
}

// ===> LENGTH <===
const toKilometre = {
	Metre: t => t / 1000,
	Decimetre: t => t / 10000,
	Centimetre: t => t / 100000,
	Millimetre: t => t / 1000000,
	Micrometre: t => t / 1000000000,
	Nanometre: t => t / 1000000000000,
	Angstrom: t => t / 10000000000000,
	League: t => t * 5.556,
	Mile: t => t * 1.609,
	Furlong: t => t / 4971,
	Chain: t => t / 49.71,
	Rod: t => t / 198.838781516,
	Yard: t => t / 1093.61,
	Foot: t => t / 3280.84,
	Link: t => t / 4970.9695379,
	Hand: t => t / 9842.52,
	Inch: t => t / 39370.1,
	Thou: t => t / 3.9370000000,
	Nautical: t => t * 1.852,
	Fathom: t => t / 546.8066491689,
	Parsec: t => t * 3.086e+13,
	LightYear: t => t * 9.461e+12,
	AstronomicalUnit: t => t * 1.496e+8,
	LightMinute: t => t * 1.799e+7,
	LightSecond: t => t * 299792,
	Kilometre: t => t,
};

decimalLength.addEventListener("input", decimalLengthEvent);
lengthList.addEventListener("input", lengthEvent);
decimalLengthEvent();

function decimalLengthEvent() {
	const step = 1 / 10 ** decimalLength.value;
	kilometreIn.step = step;
	metreIn.step = step;
	decimetreIn.step = step;
	centimetreIn.step = step;
	milimetreIn.step = step;
	micrometreIn.step = step;
	nanometreIn.step = step;
	angstromIn.step = step;
	leagueIn.step = step;
	mileIn.step = step;
	furlongIn.step = step;
	chainIn.step = step;
	rodIn.step = step;
	yardIn.step = step;
	footIn.step = step;
	linkIn.step = step;
	handIn.step = step;
	inchIn.step = step;
	thouIn.step = step;
	nauticalIn.step = step;
	fathomIn.step = step;
	parsecIn.step = step;
	lightYearIn.step = step;
	astronomicalUnitIn.step = step;
	lightMinuteIn.step = step;
	lightSecondIn.step = step;
	lengthEvent();
}

function lengthEvent({ target = kilometreIn } = {}) {
	const round = val => val.toFixed(decimalLength.value);
	const kilometre = Math.max(0, toKilometre[target.dataset.units](Number(target.value)));

	kilometreIn.value = round(kilometre);
	metreIn.value = round(kilometre * 1000);
	decimetreIn.value = round(kilometre * 10000);
	centimetreIn.value = round(kilometre * 100000);
	milimetreIn.value = round(kilometre * 1000000);
	micrometreIn.value = round(kilometre * 1000000000);
	nanometreIn.value = round(kilometre * 1000000000000);
	angstromIn.value = round(kilometre * 10000000000000);
	leagueIn.value = round(kilometre / 5.556);
	mileIn.value = round(kilometre / 1.609);
	furlongIn.value = round(kilometre * 4971);
	chainIn.value = round(kilometre * 49.71);
	rodIn.value = round(kilometre * 198.838781516);
	yardIn.value = round(kilometre * 1093.61);
	footIn.value = round(kilometre * 3280.84);
	linkIn.value = round(kilometre * 4970.9695379);
	handIn.value = round(kilometre * 9842.52);
	inchIn.value = round(kilometre * 39370.1);
	thouIn.value = round(kilometre * 3.9370000000);
	nauticalIn.value = round(kilometre / 1.852);
	fathomIn.value = round(kilometre * 546.8066491689);
	parsecIn.value = round(kilometre / 3.086e+13);
	lightYearIn.value = round(kilometre / 9.461e+12);
	astronomicalUnitIn.value = round(kilometre / 1.496e+8);
	lightMinuteIn.value = round(kilometre / 1.799e+7);
	lightSecondIn.value = round(kilometre / 299792);
}

// ===> TIME <====
const toDays = {
	Years: t => t * 365.25,
	Months: t => t * 30.417,
	Weeks: t => t * 7,
	Hours: t => t / 24,
	Minutes: t=> t / 1440,
	Seconds: t => t / 86400,
	Milliseconds: t => t / 86400000,
	Microseconds: t => t / 864e+10,
	Nanoseconds: t => t / 8.64e+13,
	Era: t => t * 3650000,
	Millennia: t => t * 365000,
	Centuries: t => t * 36500,
	Decades: t => t * 3650,
	Days: t => t,
};

decimalTime.addEventListener("input", decimalTimeEvent);
timeList.addEventListener("input", timeEvent);
decimalTimeEvent();

function decimalTimeEvent() {
	const step = 1 / 10 ** decimalTime.value;
	yearsIn.step = step;
	monthsIn.step = step;
	weeksIn.step = step;
	daysIn.step = step;
	hoursIn.step = step;
	minutesIn.step = step;
	secondsIn.step = step;
	millisecondsIn.step = step;
	microsecondsIn.step = step;
	nanosecondsIn.step = step;
	eraIn.step = step;
	millenniaIn.step = step;
	centuriesIn.step = step;
	decadesIn.step = step;
	timeEvent();
}

function timeEvent({ target = daysIn } = {}) {
	const round = val => val.toFixed(decimalTime.value);
	const days = Math.max(0, toDays[target.dataset.units](Number(target.value)));

	yearsIn.value = round(days / 365.25);
	monthsIn.value = round(days / 30.417);
	weeksIn.value = round(days / 7);
	daysIn.value = round(days);
	hoursIn.value = round(days * 24);
	minutesIn.value = round(days * 1440);
	secondsIn.value = round(days * 86400);
	millisecondsIn.value = round(days * 86400000);
	microsecondsIn.value = round(days * 864e+10);
	nanosecondsIn.value = round(days * 8.64e+13);
	eraIn.value = round(days / 3650000);
	millenniaIn.value = round(days / 365000);
	centuriesIn.value = round(days / 36500);
	decadesIn.value = round(days / 3650);
}