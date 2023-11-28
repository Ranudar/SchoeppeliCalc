// https://dairyprocessinghandbook.tetrapak.com/de/chapter/waermetauscher
// Dichte Milch = 1020 kg/m^3; Spezifische Wärmekapazität Milch: 3.95 kJ/kg
// 1 m^3 = 1000 Liter

const heatCapacityMilk = 3.95; // kJ/(kg*K)
const relativeDensityMilk = 1.02; // kg/l

function calculateMicrowaveTime(
  volume = 220,
  watt = 800,
  initialTemperature = 7,
  targetTemperature = 45
) {
  // volume in ml, temperatures degrees celsius
  const microwaveEfficiency = 0.75;
  watt = watt * microwaveEfficiency;
  const temperatureDifference = targetTemperature - initialTemperature; // difference celsius corresponds to kelvin
  const mass = (volume / 1000) * relativeDensityMilk;
  const kiloJoule = mass * temperatureDifference * heatCapacityMilk;
  const Joule = kiloJoule * 1000;
  const time = Joule / watt;
  return Math.round(time);
}
// console.log(calculateMicrowaveTime(120))

const result = document.querySelector("#result");
const volume = document.querySelector("#volume");
result.textContent = `${calculateMicrowaveTime(volume.value)} Sekunden`;

const submitButton = document.querySelector("button");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  result.textContent = `${calculateMicrowaveTime(volume.value)} Sekunden`;
});
