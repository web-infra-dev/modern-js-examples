export const loader = () => {
  console.log('API in loader: ', process.env.SERVER_API || process.env.API);
  return {
    name: 'modern.js',
  };
};
