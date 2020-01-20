export default ({
  controllerType: 'GRBL', // ['GRBL', 'MARLIN', 'TINYG', 'SMOOTHIE'] // Currently only GRBL is supported
  workflowState: null, // [IDLE, SLEEP, RUN, HOLD, ALARM],
  units: 'metric', // only metric for now
  connected: false, // Controller connected to serial
  boudrate: 115200,
  settings: {}, // Propably need a normalizer to handle different firmwares
});
