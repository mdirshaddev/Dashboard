const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.common.js')

const getAddons = (addonsArgs) => {
  /* 
  * we can pass anynumber of arguments
  * Depending on those number of arguments we will create addons file
  * which will be filter according to the options we choose and then the operation will be performed
  */
  let addons = Array.isArray(addonsArgs) ? addonsArgs : [addonsArgs]

  return addons
    .filter(Boolean)
    .map((name) => require(`./addons/webpack.${name}.js`))
}

module.exports = ({ env, addon }) => {
  const envConfig = require(`./webpack.${env}.js`);

  return merge(commonConfig, envConfig, ...getAddons(addon))
}