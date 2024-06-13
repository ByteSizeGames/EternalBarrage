import { defineConfig } from "vite";

const phasermsg = () => {
  return {
    name: "phasermsg",
    buildStart() {
      process.stdout.write(`Building for production...\n`);
    },
    buildEnd() {
      const msg = `

┏┓         ┓  ┳┓            
┣ ╋┏┓┏┓┏┓┏┓┃  ┣┫┏┓┏┓┏┓┏┓┏┓┏┓
┗┛┗┗ ┛ ┛┗┗┻┗  ┻┛┗┻┛ ┛ ┗┻┗┫┗ 
                         ┛  
`;
      process.stdout.write(`${msg}\n`);
    },
  };
};

export default defineConfig({
  base: "./",
  logLevel: "warning",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          phaser: ["phaser"],
        },
      },
    },
    minify: "terser",
    terserOptions: {
      compress: {
        passes: 2,
      },
      mangle: true,
      format: {
        comments: false,
      },
    },
  },
  plugins: [phasermsg()],
});
