import install, { REDUX_DEVTOOLS } from 'electron-devtools-installer';

export const installExtensions = async () => {
  const extensions = [REDUX_DEVTOOLS];
  const results = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const extension of extensions) {
    results.push(
      install(extension, {
        forceDownload: true,
        loadExtensionOptions: {
          allowFileAccess: true,
        },
      }),
    );
  }

  return Promise.all(results);
};
