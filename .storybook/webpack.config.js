const path = require('path');
const _StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = async ({ config }) => {
  // Twig
  config.module.rules.push({
    test: /\.twig$/,
    use: [
      {
        loader: 'twig-loader',
        options: {
          twigOptions: {
            namespaces: {
              tokens: path.resolve(__dirname, '../', 'components/00-tokens'),
              components: path.resolve(
                __dirname,
                '../',
                'components/01-components',
              ),
              pages: path.resolve(__dirname, '../', 'components/02-pages'),
            },
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
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
  });

  config.plugins.push(
    new _StyleLintPlugin({
      configFile: path.resolve(__dirname, '../', 'webpack/.stylelintrc'),
      context: path.resolve(__dirname, '../', 'components'),
      files: '**/*.scss',
      failOnError: false,
      quiet: false,
    }),
  );

  // YAML
  config.module.rules.push({
    test: /\.ya?ml$/,
    loader: 'js-yaml-loader',
  });

  // JS
  config.module.rules.push({
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
    options: {
      cache: true,
    },
  });

  return config;
};
