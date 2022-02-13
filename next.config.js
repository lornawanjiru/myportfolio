module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(frag|vert|glsl)$/,
      use: [
        { 
          loader: 'glsl-shader-loader',
          options: {}  
        }
      ]
    });

    return config;
}
}

