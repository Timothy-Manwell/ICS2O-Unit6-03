// Copyright (c) 2022 Timothy Manwell All rights reserved
//
// Created by: Timothy Manwell
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

/**
 * This function displays an alert.
 */
function start() {
  const getImage = async (URLAddress) => {
    try {
      const result = await fetch(URLAddress)
      const jsonData = await result.json()
      console.log(jsonData)
      document.getElementById("api-image").innerHTML =
      '<img src="' + 
        jsonData.url + 
        '" alt="API image" class="center" ' +
        '>'
    } catch (err) {
      console.log(err)
    }
  }
  getImage("http://openweathermap.org/img/wn/10d@2x.png")

  const getWeather = async (URLAddress) => {
  
  }
  getWeather("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}")
}
