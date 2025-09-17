"use strict";
const path = require("path");
const cp = require("child_process");
const fetch = require("node-fetch")
const options = {stdio: "inherit"}
const server = cp.spawn("node", ["./simple.js"], options)

(async () => {
  setTimeout(() => {
    try {
        await check()
    } finally {
        console.log('1 try')
    }
  }, 4000);

  setTimeout(() => {
    try {
        await check()
    } finally {
        console.log('1 try')
    }
  }, 8000);

  setTimeout(() => {
    try {
        await check()
    } finally {
        console.log('1 try')
    }
  }, 16000);

  setTimeout(() => {
    try {
        await check()
    } finally {
        console.log('1 try')
    }
  }, 32000);  

  
})();


async function check() {
  try {
        const hostnameCheckResponse = await fetch(`http://test-windows-host:8080`)
        console.log(`Hostname check request to http://test-windows-host:8080 - Status: ${hostnameCheckResponse.status}`)
        const hostnameCheckBody = await hostnameCheckResponse.text()
        console.log(`Hostname check response body: ${hostnameCheckBody}`)
        } catch (error) {
        console.log(`Hostname check request failed: ${error.message}`)
    }
}






