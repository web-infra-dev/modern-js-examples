/** @type {import('@modern-tools/app-tools').UserConfig} */
module.exports = {
  output: {
    assetPrefix: '../../',
  },
  source: {
    moduleScopes: [
      './api'
    ]
  },
  tools: {
    jest: {
      testMatch: [
        '**/__tests__/**/*.test.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)',
      ],
    },
  },
  runtime: {
    state: true,
    router: {
      supportHtml5History: process.env.NODE_ENV === 'development',
    },
  },
  electron: {
    builder: {
      baseConfig: {
        appId: 'com.bytedance.demo',
        artifactName: 'demo_${env.VERSION}.${ext}',
        files: [
          { from: '../assets', to: 'assets' },
          {
            from: '.',
            to: '.',
            filter: ['!**/*.map', '!**/*.d.ts', '!*.log', '!*.lock'],
          },
        ],

        directories: {
          app: 'dist',
          buildResources: 'config/electron',
        },
      },
    },
  },
};
