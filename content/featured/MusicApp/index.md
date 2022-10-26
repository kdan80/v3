---
date: '1'
title: 'MusicApp'
cover: '/featured/musicapp.webp'
github: 'https://github.com/kdan80/musicapp-webclient'
external: 'https://kdan80-musicapp.herokuapp.com'
tech:
  - Next.js
  - Express.js
  - AWS S3
  - Cloudfront
  - MongoDB
---

A music streaming app built with Next.js on the frontend and Express.js on the backend. Express produces signed URLs for audio streaming via a Cloudfront distribution that sits in front of an S3 Bucket. Metadata is stored in a MongoDB document store.
