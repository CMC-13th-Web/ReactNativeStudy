module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.ios.tsx',
          '.android.tsx',
          '.json',
        ],
      },
    ],
  ],
};
