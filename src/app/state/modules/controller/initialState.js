export default ({
  baudrate: 115200,
  baudrates: [1200, 115200, 1250600],
  connected: false, // Controller connected to serial
  connecting: false,
  controllerType: 'GRBL', // ['GRBL', 'MARLIN', 'TINYG', 'SMOOTHIE'] // Currently only GRBL is supported
  controllerTypes: ['GRBL', 'TinyG', 'Marlin', 'Smoothie'],
  ports: ['dev/null', 'dev/ttyAMA0'],
  settings: {}, // Propably need a normalizer to handle different firmwares
  units: 'metric', // only metric for now
  userCommands: [],
  workflowState: null, // [IDLE, SLEEP, RUN, HOLD, ALARM],
});
