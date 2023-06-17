module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  // transformIgnorePatterns: ["node_modules/?!(react-icons)"],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};