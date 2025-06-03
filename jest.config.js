module.exports = {
  testEnvironment: 'jsdom', // Simulate a browser environment for React components
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest', // Use babel-jest for .js and .jsx files
  },
  moduleNameMapper: {
    // Mock CSS imports as they are not relevant for unit tests' logic
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Handle tilde path alias for Remix projects
    '^~/(.*)$': '<rootDir>/app/$1',
  },
  moduleDirectories: ['node_modules', '<rootDir>/app'], // Helps resolve 'app' based imports if any
  // setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'] // if you want to use jest-dom matchers globally
  transformIgnorePatterns: [
    // Default: '/node_modules/'
    // Allow transforming @remix-run, uuid, and their dependencies (which might be ESM)
    // and other known ESM packages
    '/node_modules/(?!(@remix-run|uuid|@web3-storage)/)',
  ],
};
