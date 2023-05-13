/** @type {import('next').NextConfig} */
require("dotenv").config(); 
const nextConfig = {
  reactStrictMode: true,
  env:{
    HOST: process.env.BASE_URL,
  }
}

module.exports = nextConfig
