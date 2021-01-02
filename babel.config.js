module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            "tests": ["./src/__tests__"],
            "@assets": "./src/assets",
            "@actions": "./src/actions",
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@navigation": "./src/services/navigation",
            "@reducers": "./src/reducers",
            "@sagas": "./src/sagas",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@store": "./src/store",
            "@styles": "./src/styles",
            "@types": "./src/types",
            "@utils": "./src/utils",
          }
        }
      ]
    ]
  };
};
