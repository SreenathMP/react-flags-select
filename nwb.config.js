module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactFlagsSelect1',
      externals: {
        react: 'React'
      }
    }
  }
}
