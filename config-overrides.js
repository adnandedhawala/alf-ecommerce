const {
  useBabelRc,
  override,
  fixBabelImports,
  addPostcssPlugins,
  addWebpackAlias
} = require('customize-cra')
const path = require('path')

// Import your eslint configuration here
const eslintConfig = require('./.eslintrc.js')

const useEslintConfig = configRules => config => {
  const updatedRules = config.module.rules.map(rule => {
    // Only target rules that have defined a `useEslintrc` parameter in their options
    if (
      rule.use &&
      rule.use.some(use => use.options && use.options.useEslintrc !== void 0)
    ) {
      const ruleUse = rule.use[0]
      const baseOptions = ruleUse.options
      const baseConfig = baseOptions.baseConfig || {}
      const newOptions = {
        useEslintrc: false,
        ignore: true,
        baseConfig: { ...baseConfig, ...configRules }
      }
      ruleUse.options = newOptions
      return rule

      // Rule not using eslint. Do not modify.
    } else {
      return rule
    }
  })

  config.module.rules = updatedRules
  return config
}

module.exports = override(
  // useEslintConfig(eslintConfig), // Use your imported .eslintrc.js file here
  useBabelRc(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    cmp: path.resolve(__dirname, 'src/components'),
    pages: path.resolve(__dirname, 'src/pages')
  }),
  addPostcssPlugins([
    require('tailwindcss')({
      important: true,
      purge: false,
      future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
      },
      theme: {
        screens: {
          xs: '480px',
          sm: '576px',
          md: '768px',
          lg: '992px',
          xl: '1200px',
          xxl: '1600px'
        },
      }
    })
  ])
)
