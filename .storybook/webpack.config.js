const path = require('path');
const _StyleLintPlugin = require('stylelint-webpack-plugin');
const { namespaces } = require('./setupTwig');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = async ({ config }) => {
  // Twig
  config.module.rules.push({
    test: /\.twig$/,
    use: [
      {
        loader: 'twig-loader',
        options: {
          twigOptions: {
            namespaces,
          },
        },
      },
    ],
  });

  // SCSS
  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
          ],
        },
      },
    ],
  });

  config.plugins.push(
    new _StyleLintPlugin({
      configFile: path.resolve(__dirname, '../', 'webpack/.stylelintrc'),
      context: path.resolve(__dirname, '../', 'components'),
      files: '**/*.css',
      failOnError: false,
      quiet: false,
    }),
    new ESLintPlugin({
      context: path.resolve(__dirname, '../', 'components'),
      extensions: ['js'],
    }),
  );

  // YAML
  config.module.rules.push({
    test: /\.ya?ml$/,
    loader: 'js-yaml-loader',
  });

  return config;
};
