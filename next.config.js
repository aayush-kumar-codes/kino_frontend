/** @type {import('next').NextConfig} */
require("dotenv").config(); 
const nextConfig = {
  reactStrictMode: true,
  env:{
    HOST: process.env.NEXT_PUBLIC_BASE_API,
  }
}

module.exports = nextConfig
