module.exports = {
  version: 2,
  snapshot: {
    widths: [
      375, //mobile
      768, //tablet
      1440, //laptop
      1920 //desktop
    ],
    minHeight: 1024,
    percyCSS: '',
    enableJavaScript: true,
    cliEnableJavaScript: true,
    disableShadowDOM: false
  },
  discovery: {
    allowedHostnames: [],
    disallowedHostnames: [],
    networkIdleTimeout: 100
  },
  upload: {
    files: '**/*.{png,jpg,jpeg}',
    ignore: '',
    stripExtensions: false
  }
}
