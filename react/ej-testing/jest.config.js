module.exports = {
  setupFiles: ["./jest.setup.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  transform: {
    ".*": "<rootDir>/node_modules/babel-jest"
  },
  moduleFileExtensions: ['js', 'jsx'],
  unmockedModulePathPatterns: ['react'],
  collectCoverage: true
};