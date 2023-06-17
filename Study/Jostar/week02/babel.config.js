module.exports = {
  presets: ["module:metro-react-native-babel-preset", '@babel/preset-typescript'],
  plugins: [
    ["babel-plugin-react-docgen-typescript", { exclude: "node_modules" }],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.style.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.test.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
      },
    ],
    ["module:react-native-dotenv", {
      "moduleName": "@env",
      "path": ".env",
      "blacklist": null,
      "whitelist": null,
      "safe": true,
      "allowUndefined": true
    }]
  ],
};
