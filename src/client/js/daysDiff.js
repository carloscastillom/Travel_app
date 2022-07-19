
function daysDiff(dt)
{

var end = new Date(dt);
var now = new Date();

var difference = end.getTime() - now.getTime();
var TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
return TotalDays;

}

export { daysDiff }