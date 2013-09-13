{
  header: 1432778632,
  droneState:
    {
      flying: 0,
      videoEnabled: 0,
      visionEnabled: 0,
      controlAlgorithm: 0,
      altitudeControlAlgorithm: 1,
      startButtonState: 0,
      controlCommandAck: 1,
      cameraReady: 1,
      travellingEnabled: 0,
      usbReady: 0,
      navdataDemo: 0,
      navdataBootstrap: 0,
      motorProblem: 0,
      communicationLost: 0,
      softwareFault: 0,
      lowBattery: 0,
      userEmergencyLanding: 0,
      timerElapsed: 0,
      MagnometerNeedsCalibration: 0,
      anglesOutOfRange: 0,
      tooMuchWind: 0,
      ultrasonicSensorDeaf: 0,
      cutoutDetected: 0,
      picVersionNumberOk: 1,
      atCodecThreadOn: 1,
      navdataThreadOn: 1,
      videoThreadOn: 1,
      acquisitionThreadOn: 1,
      controlWatchdogDelay: 0,
      adcWatchdogDelay: 0,
      comWatchdogProblem: 1,
      emergencyLanding: 0 },
      sequenceNumber: 12563,
      visionFlag: 1,
      demo:
        { controlState: 'CTRL_LANDED',
          flyState: 'FLYING_OK',
          batteryPercentage: 67,
          rotation:
            { frontBack: -0.074,
              pitch: -0.074,
              theta: -0.074,
              y: -0.074,
              leftRight: 2.011,
              roll: 2.011,
              phi: 2.011,
              x: 2.011,
              clockwise: -0.657,
              yaw: -0.657,
              psi: -0.657,
              z: -0.657 },
              frontBackDegrees: -0.074,
              leftRightDegrees: 2.011,
              clockwiseDegrees: -0.657,
              altitude: 0,
              altitudeMeters: 0,
              velocity: { x: 0, y: 0, z: 0 },
              xVelocity: 0,
              yVelocity: 0,
              zVelocity: 0,
              frameIndex: 0,
              detection: { camera: [Object], tagIndex: 0 },
              drone: { camera: [Object] } },
              time: 967191.558,
              rawMeasures:
                { accelerometers: { x: 2048, y: 2040, z: 2560 },
                  gyroscopes: { x: 15, y: -11, z: 1 },
                  gyrometers: { x: 15, y: -11, z: 1 },
                  gyroscopes110: { x: 0, y: 0 },
                  gyrometers110: [ 0, 0 ],
                  batteryMilliVolt: 11971,
                  us: { echo: [Object], curve: [Object] },
                  usDebutEcho: 0,
                  usFinEcho: 0,
                  usAssociationEcho: 3758,
                  usDistanceEcho: 0,
                  usCourbeTemps: 17137,
                  usCourbeValeur: 0,
                  usCourbeRef: 120,
                  echo: { flagIni: 1, num: 1, sum: 2490446 },
                  flagEchoIni: 1,
                  nbEcho: 1,
                  sumEcho: 2490446,
                  altTemp: 243,
                  altTempRaw: 243 },
                  physMeasures:
                    { temperature: { accelerometer: 25.874191284179688, gyroscope: 50501 },
                      accelerometers: { x: 84.7540054321289, y: -55.48382568359375, z: -991.001953125 },
                      gyroscopes:
                        { x: -0.20279675722122192,
                          y: -0.09362932294607162,
                          z: 0.014267011545598507 },
                          alim3V3: 0,
                          vrefEpson: 0,
                          vrefIDG: 0 },
                          gyrosOffsets: { x: -0.2382582426071167, y: 0.03965304419398308, z: 0 },
                          eulerAngles: { theta: 4880, phi: 3204 },
                          references:
                            { theta: 0,
                              phi: 0,
                              thetaI: 0,
                              phiI: 0,
                              pitch: 0,
                              roll: 0,
                              yaw: 0,
                              psi: 0,
                              vx: 0,
                              vy: 0,
                              thetaMod: 0,
                              phiMod: 0,
                              kVX: 0,
                              kVY: 0,
                              kMode: 0,
                              ui: { time: 0, theta: 0, phi: 0, psi: 0, psiAccuracy: 0, seq: 0 } },
                              trims:
                                { angularRates: { r: 0 },
                                  eulerAngles: { theta: 4893.89892578125, phi: 808.5094604492188 } },
                                  rcReferences: { pitch: 0, roll: 0, yaw: 0, gaz: 0, ag: 0 },
                                  pwm:
                                    { motors: [ 0, 0, 0, 0 ],
                                      satMotors: [ 255, 255, 255, 255 ],
                                      gazFeedForward: 0,
                                      gazAltitude: 0,
                                      altitudeIntegral: 0,
                                      vzRef: 0,
                                      uPitch: 0,
                                      uRoll: 0,
                                      uYaw: 0,
                                      yawUI: 0,
                                      uPitchPlanif: 0,
                                      uRollPlanif: 0,
                                      uYawPlanif: 0,
                                      uGazPlanif: 0,
                                      motorCurrents: [ 0, 0, 0, 0 ],
                                      altitudeProp: 0,
                                      altitudeDer: 0 },
                                      altitude:
                                        { vision: 243,
                                          velocity: 0,
                                          ref: 0,
                                          raw: 243,
                                          observer: { acceleration: 0, altitude: 0, x: [Object], state: 0 },
                                          estimated: { vb: [Object], state: 0 } },
                                          visionRaw: { tx: 2.71901798248291, ty: 1.7456281185150146, tz: 0 },
                                          visionOf: { dx: [ 0, 0, 0, 0, 0 ], dy: [ 0, 0, 0, 0, 0 ] },
                                          vision:
                                            { state: 2,
                                              misc: 0,
                                              phi: { trim: 0, refProp: 0 },
                                              theta: { trim: 0, refProp: 0 },
                                              newRawPicture: 0,
                                              capture:
                                                { theta: -0.0012769157765433192,
                                                  phi: 0.03510051593184471,
                                                  psi: -0.0114898681640625,
                                                  altitude: 243,
                                                  time: 967.179 },
                                                  bodyV: { x: 0, y: 0, z: 0 },
                                                  delta: { phi: 0, theta: 0, psi: 0 },
                                                  gold: { defined: 0, reset: 0, x: 0, y: 0 } },
                                                  visionPerf:
                                                    { szo: 0,
                                                      corners: 0,
                                                      compute: 0,
                                                      tracking: 0,
                                                      trans: 0,
                                                      update: 0,
                                                      custom: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] },
                                                      trackersSend:
                                                        { locked: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                                                          point:
                                                            [ [Object],
                                                              [Object],
                                                              [Object],
                                                              [Object],
                                                              [Object],
                                                              [Object],
                                                              [Object],
                                                              [Object],
                                                              [Object],
                                                              [Object],
                                                              [Object],
                                                              [Object],
                                                              [Object],
                                                              [Object],
                                                              [Object],
                                                              [Object],
                                                              [Object],
                                                              [Object],
                                                              [Object],
                                                              [Object],
                                                              [Object],
                                                              [Object],
                                                              [Object],
                                                              [Object],
                                                              [Object],
                                                              [Object],
                                                              [Object],
                                                              [Object],
                                                              [Object],
                                                              [Object] ] },
                                                              visionDetect:
                                                                { nbDetected: 0,
                                                                  type: [ 0, 0, 0, 0 ],
                                                                  xc: [ 0, 0, 0, 0 ],
                                                                  yc: [ 0, 0, 0, 0 ],
                                                                  width: [ 0, 0, 0, 0 ],
                                                                  height: [ 0, 0, 0, 0 ],
                                                                  dist: [ 0, 0, 0, 0 ],
                                                                  orientationAngle: [ 0, 0, 0, 0 ],
                                                                  rotation: [ [Object], [Object], [Object], [Object] ],
                                                                  translation: [ [Object], [Object], [Object], [Object] ],
                                                                  cameraSource: [ 0, 0, 0, 0 ] },
                                                                  watchdog: 4882,
                                                                  adcDataFrame:
                                                                    { version: 0,
                                                                      dataFrame:
                                                                        [ 0,
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0,
                                                                          0 ] },
                                                                          videoStream:
                                                                            { quant: 0,
                                                                              frame: { size: 3530, number: 1916 },
                                                                              atcmd:
                                                                                { sequence: 88,
                                                                                  meanGap: 0,
                                                                                  varGap: 16.309507369995117,
                                                                                  quality: 0 },
                                                                                  bitrate: { out: 0, desired: 0 },
                                                                                  data: [ 0, 0, 0, 0, 0 ],
                                                                                  tcpQueueLevel: 0,
                                                                                  fifoQueueLevel: 0 },
                                                                                  games: { counters: { doubleTap: 0, finishLine: 0 } },
                                                                                  pressureRaw: { up: 40942, ut: 30057, temperature: 263, pressure: 101362 },
                                                                                  magneto:
                                                                                    { mx: -86,
                                                                                      my: -44,
                                                                                      mz: -46,
                                                                                      raw: { x: 157.78125, y: 310.40625, z: 171.421875 },
                                                                                      rectified:
                                                                                        { x: -27.909503936767578,
                                                                                          y: 262.16204833984375,
                                                                                          z: 180.69992065429688 },
                                                                                          offset: { x: 185.45669555664062, y: 42.0614128112793, z: 0 },
                                                                                          heading:
                                                                                            { unwrapped: 0,
                                                                                              gyroUnwrapped: 0.000055655389587627724,
                                                                                              fusionUnwrapped: -0.6579544544219971 },
                                                                                              ok: 1,
                                                                                              state: 513,
                                                                                              radius: -61135,
                                                                                              error:
                                                                                                { mean: 1.814361230523632e-37,
                                                                                                  variance: -0.0000015199406107058167 } },
                                                                                                  windSpeed:
                                                                                                    { speed: 0,
                                                                                                      angle: 0,
                                                                                                      compensation: { theta: 0, phi: 0 },
                                                                                                      stateX:
                                                                                                        [ 0.7382514476776123,
                                                                                                          0.1678268015384674,
                                                                                                          0,
                                                                                                          0,
                                                                                                          832.8936767578125,
                                                                                                          -170.0524444580078 ],
                                                                                                          debug: [ 0, 0, 0 ] },
                                                                                                          kalmanPressure:
                                                                                                            { offsetPressure: 101359,
                                                                                                              estimated:
                                                                                                                { altitude: 0,
                                                                                                                  velocity: 0,
                                                                                                                  angle: [Object],
                                                                                                                  us: [Object],
                                                                                                                  covariance: [Object],
                                                                                                                  groundEffect: true,
                                                                                                                  sum: 1.401298464324817e-45,
                                                                                                                  reject: false,
                                                                                                                  uMultisinus: 0,
                                                                                                                  gazAltitude: 0,
                                                                                                                  flagMultisinus: false,
                                                                                                                  flagMultisinusStart: false } },
                                                                                                                  hdvideoStream:
                                                                                                                    { hdvideoState: 0,
                                                                                                                      storageFifo: { nbPackets: 0, size: 0 },
                                                                                                                      usbkey: { size: 0, freespace: 0, remainingTime: 0 },
                                                                                                                      frameNumber: 0 },
                                                                                                                      wifi: { linkQuality: 1 },
                                                                                                                      zimmu3000: { vzimmuLSB: 0, vzfind: 0 } }