export default {
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
  testEnvironment: "jest-environment-jsdom", // use the installed package
};
