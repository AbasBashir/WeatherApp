import React from 'react'

function getCurrentDay(timestamp) {

    const originalDateTime = timestamp;

    // e.g. date = new Date(2024-04-10 15:38) ----> date object now stores Wed Apr 10 2024 15:38:00 GMT+0200 (Central European Summer Time)
    const date = new Date(originalDateTime);

    // the .toLocalDateString() is a method that converts a date object into a string
    // The method accepts 2 arguements. Onne is a string representing language and the other argument is that particular country's way of presenting the date
    // However, with this method we can now display it in a certain way but still adhering to the country's format
    const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' }); 
    const formattedTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

    const formattedDateTime = `${formattedDate} ${formattedTime}`;
  
    return formattedDateTime;
}

export default getCurrentDay
