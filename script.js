// Array of motivational quotes with key words highlighted in red and blue
const motivationalQuotes = [
    "Stay <span style='color: red;'>focused</span> and <span style='color: blue;'>win</span>.",
    "Push <span style='color: red;'>harder</span> for your <span style='color: blue;'>dreams</span>.",
    "Let <span style='color: red;'>success</span> be your <span style='color: blue;'>noise</span>.",
    "Your <span style='color: red;'>future</span> begins <span style='color: blue;'>today</span>.",
    "<span style='color: red;'>Believe</span> in your <span style='color: blue;'>strength</span>.",
    "Rise and <span style='color: red;'>conquer</span> your <span style='color: blue;'>fears</span>.",
    "Turn <span style='color: red;'>challenges</span> into <span style='color: blue;'>opportunities</span>.",
    "Small <span style='color: red;'>steps</span> lead to <span style='color: blue;'>big</span> victories.",
    "Be <span style='color: red;'>brave</span> and stay <span style='color: blue;'>strong</span>.",
    "<span style='color: red;'>Start</span> now, <span style='color: blue;'>win</span> later.",
    "<span style='color: red;'>Focus</span> on your <span style='color: blue;'>goals</span>.",
    "Let <span style='color: red;'>courage</span> be your <span style='color: blue;'>guide</span>.",
    "Trust the <span style='color: red;'>process</span> and enjoy the <span style='color: blue;'>journey</span>.",
    "Turn your <span style='color: red;'>passion</span> into your <span style='color: blue;'>power</span>.",
    "Take the <span style='color: red;'>leap</span> and make it <span style='color: blue;'>count</span>."
];

// Get today's date as an index
const today = new Date();
const index = today.getDate() % motivationalQuotes.length; // Modulus to loop through the array

// Display the quote of the day, allowing inner HTML to support the span styling
document.getElementById('quote').innerHTML = motivationalQuotes[index];

// Set the start and end dates
const startDate = new Date('2024-10-02');
const endDate = new Date('2025-01-01');

// Calculate the difference in time
const differenceInTime = endDate.getTime() - startDate.getTime();

// Convert the difference to days
const daysDifference = Math.ceil(differenceInTime / (1000 * 3600 * 24));

// Display the result on the page
document.getElementById('days').innerText = `${daysDifference} days`;
