Handles GRBL and controller state

See https://github.com/cncjs/cncjs-pendant-tinyweb/blob/master/src/app.js
See: https://github.com/cncjs/cncjs-pendant-tinyweb/blob/master/src/controller.js
See: https://github.com/cncjs/cncjs/blob/feature/redux/src/app/reducers/controller.js

{
  controller: {
    controllerType: ['GRBL', 'MARLIN', 'TINYG', 'SMOOTHIE'] // Currently only GRBL is supported2
    workflowState: [IDLE, SLEEP, RUN, HOLD, ALARM],
    units: [METRIC, IMPERIAL], // only metric for now
    connected: [TRUE, FALSE]
    boudrate: 115200,
    settings: {} 
  }
}
