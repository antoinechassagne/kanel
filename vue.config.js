module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/kanel/' : '/',
  pwa: {
    name: 'Kanel',
    themeColor: '#FFF',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#FFF',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'dev/sw.js'
      // ...other Workbox options...
    }
  }
};
