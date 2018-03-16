var t = 22;
var s = 18;
var f = getWindChillFactor(t, s);

document.getElementById("windSpeed").innerHTML = s;
document.getElementById("currentTemp").innerHTML = t + "&deg";
document.getElementById("windChillFactor").innerHTML = f + "&deg";

console.log(f);

function getWindChillFactor(t, s)
{
    var windChillFactor = 35.74 + 0.6215 * t -35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    
    return parseInt(windChillFactor);
}