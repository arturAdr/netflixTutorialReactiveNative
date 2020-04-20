module.exports = function (api) {
  api.cache(true);

  const plugins = ['babel-plugin-styled-components',
    ['module-resolver', {
      'root': ['./src'],
      "alias": {
        "components": "./components"
      }
    }
    ]
  ];

  const env = {
    'development': {
      'plugins': plugins
    }
  }

  return {
    presets: ['babel-preset-expo'],
    env: env
  };
};
