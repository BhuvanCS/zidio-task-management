import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // server: {
  //   port: 3000,
  //   proxy: {
  //     "/api": {
  //       target: process.env.NODE_ENV === 'production'? "https://zidio-task-management-eecc.onrender.com": "http://localhost:8800",
  //       changeOrigin: true,
  //       secure: false,
  //       configure: (proxy, options) => {
  //         proxy.on("proxyReq", (proxyReq, req) => {
  //           // Force cookies to be sent with the request
  //           if (req.headers.cookie) {
  //             proxyReq.setHeader("cookie", req.headers.cookie);
  //           }
  //         });
  //       },
  //     },
  //   },
  // },
});
