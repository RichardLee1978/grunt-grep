//@grep dev:s
var years = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
var days = [1,5,3];
//@grep dev:e
//@grep prod:s
var years = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
var days = [1,5,3];
//@grep prod:s
try {
  console.log(years.0);
}
catch (ex) {
  console.log(years[0]);//@grep second
}