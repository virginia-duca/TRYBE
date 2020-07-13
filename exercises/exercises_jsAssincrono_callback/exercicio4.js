const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

sendMarsTemperature = (temperature) => {
    console.log(`Mars temperature is: ${temperature} degree celsius`) 
}

setTimeout(() => (sendMarsTemperature(getMarsTemperature())), messageDelay())
