const path = require('path')
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  plugins: [
    new BundleAnalyzer({
      reportFilename: path.resolve(__dirname, '../../build/report.html'),
      reportTitle: 'React Portfolio | Analysis',
      analyzerMode: 'static',
      generateStatsFile: true,
      logLevel: 'info'
    })
  ]
}