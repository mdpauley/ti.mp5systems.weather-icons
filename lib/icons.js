/**
 * @file icons.js 
 * @namespace icons.js
 * @summary /lib/icons/icons.js
 * @since v1.0.0
 * @author Matthew McFarland
 * @desc 
 * Copy this file and make sure it has the same members/methods.
 */

/**
 * @public
 * @name fontFamily
 * @since v1.2.0
 * @type {String}
 * @memberOf icons.js#
 * @default 'FontAwesome'
 */
exports.fontFamily = 'WeatherIcons-Regular';

/**
 * @public
 * @name prefix
 * @since v1.2.0
 * @memberOf icons.js#
 * 
 * @type {String}
 * 
 * @default '.wi'
 */
exports.prefix = 'wi';

/**
 * @public 
 * @name defaultSize
 * @since v1.2.0
 * @memberOf icons.js#
 * 
 * @type {String}
 * 
 * @default '16dp'
 */
exports.defaultSize = '16dp';

/**
 * @public 
 * @name charMap
 * @memberOf icons.js#
 * @since v1.2.0
 * @type {Array}
 * 
 * @summary Icon Character Map in an Array.
 * 
 * @default 'see icons.js'
 * 
 * @desc
 * An array of 2 celled arrays that contain the icon name and its character value.
 *   
 * @example
 * [
 *   ["wi-fa-glass"], 0xf000],
 *   ["wi-fa-music"], 61441],
 * ...]
 * 
 * ].forEach(function (e) {
 *	exports.charMap[e[0]] = String.fromCharCode(e[1]);
 *});
 * 
 */
exports.charMap = new Array;

[
  ["wi-dayCloudyGusts", "f000"],
  ["wi-dayCloudyWindy", "f001"],
  ["wi-dayCloudy", "f002"],
  ["wi-dayFog", "f003"],
  ["wi-dayHail", "f004"],
  ["wi-dayLightning", "f005"],
  ["wi-dayRainMix", "f006"],
  ["wi-dayRainWind", "f007"],
  ["wi-dayRain", "f008"],
  ["wi-dayShowers", "f009"],
  ["wi-daySnow", "f00a"],
  ["wi-daySprinkle", "f00b"],
  ["wi-daySunnyOvercast", "f00c"],
  ["wi-daySunny", "f00d"],
  ["wi-dayStormShowers", "f00e"],
  ["wi-dayThunderstorm", "f010"],
  ["wi-cloudyGusts", "f011"],
  ["wi-cloudyWindy", "f012"],
  ["wi-cloudy", "f013"],
  ["wi-fog", "f014"],
  ["wi-hail", "f015"],
  ["wi-lightning", "f016"],
  ["wi-rainMix", "f017"],
  ["wi-rainWind", "f018"],
  ["wi-rain", "f019"],
  ["wi-showers", "f01a"],
  ["wi-snow", "f01b"],
  ["wi-sprinkle", "f01c"],
  ["wi-stormShowers", "f01d"],
  ["wi-thunderstorm", "f01e"],
  ["wi-windy", "f021"],
  ["wi-nightAltCloudyGusts", "f022"],
  ["wi-nightAltCloudyWindy", "f023"],
  ["wi-nightAltHail", "f024"],
  ["wi-nightAltLightning", "f025"],
  ["wi-nightAltRainMix", "f026"],
  ["wi-nightAltRainWind", "f027"],
  ["wi-nightAltRain", "f028"],
  ["wi-nightAltShowers", "f029"],
  ["wi-nightAltSnow", "f02a"],
  ["wi-nightAltSprinkle", "f02b"],
  ["wi-nightAltStormShowers", "f02c"],
  ["wi-nightAltThunderstorm", "f02d"],
  ["wi-nightClear", "f02e"],
  ["wi-nightCloudyGusts", "f02f"],
  ["wi-nightCloudyWindy", "f030"],
  ["wi-nightCloudy", "f031"],
  ["wi-nightHail", "f032"],
  ["wi-nightLightning", "f033"],
  ["wi-nightRainMix", "f034"],
  ["wi-nightRainWind", "f035"],
  ["wi-nightRain", "f036"],
  ["wi-nightShowers", "f037"],
  ["wi-nightSnow", "f038"],
  ["wi-nightSprinkle", "f039"],
  ["wi-nightStormShowers", "f03a"],
  ["wi-nightThunderstorm", "f03b"],
  ["wi-celsius", "f03c"],
  ["wi-cloudDown", "f03d"],
  ["wi-cloudRefresh", "f03e"],
  ["wi-cloudUp", "f040"],
  ["wi-cloud", "f041"],
  ["wi-degrees", "f042"],
  ["wi-downLeft", "f043"],
  ["wi-down", "f044"],
  ["wi-fahrenheit", "f045"],
  ["wi-horizonAlt", "f046"],
  ["wi-horizon", "f047"],
  ["wi-left", "f048"],
  ["wi-nightFog", "f04a"],
  ["wi-refreshAlt", "f04b"],
  ["wi-refresh", "f04c"],
  ["wi-right", "f04d"],
  ["wi-sprinkles", "f04e"],
  ["wi-strongWind", "f050"],
  ["wi-sunrise", "f051"],
  ["wi-sunset", "f052"],
  ["wi-thermometerExterior", "f053"],
  ["wi-thermometerInternal", "f054"],
  ["wi-thermometer", "f055"],
  ["wi-tornado", "f056"],
  ["wi-upRight", "f057"],
  ["wi-up", "f058"],
  ["wi-windWest", "f059"],
  ["wi-windSouthWest", "f05a"],
  ["wi-windSouthEast", "f05b"],
  ["wi-windSouth", "f05c"],
  ["wi-windNorthWest", "f05d"],
  ["wi-windNorthEast", "f05e"],
  ["wi-windNorth", "f060"],
  ["wi-windEast", "f061"],
  ["wi-smoke", "f062"],
  ["wi-dust", "f063"],
  ["wi-snowWind", "f064"],
  ["wi-daySnowWind", "f065"],
  ["wi-nightSnowWind", "f066"],
  ["wi-nightAltSnowWind", "f067"],
  ["wi-daySleetStorm", "f068"],
  ["wi-nightSleetStorm", "f069"],
  ["wi-nightAltSleetStorm", "f06a"],
  ["wi-daySnowThunderstorm", "f06b"],
  ["wi-nightSnowThunderstorm", "f06c"],
  ["wi-nightAltSnowThunderstorm", "f06d"],
  ["wi-solarEclipse", "f06e"],
  ["wi-lunarEclipse", "f070"],
  ["wi-meteor", "f071"],
  ["wi-hot", "f072"],
  ["wi-hurricane", "f073"],
  ["wi-smog", "f074"],
  ["wi-alien", "f075"],
  ["wi-snowflakeCold", "f076"],
  ["wi-stars", "f077"],
  ["wi-moonFull", "f078"],
  ["wi-moonWaxingGibbous", "f079"],
  ["wi-moonWaxingQuarter", "f07a"],
  ["wi-moonWaxingCrescent", "f07b"],
  ["wi-moonYoung", "f07c"],
  ["wi-moonNew", "f07d"],
  ["wi-moonOld", "f07e"],
  ["wi-moonWaningCrescent", "f080"],
  ["wi-moonWaningQuarter", "f081"],
  ["wi-moonWaningGibbous", "f082"],
  ["wi-nightPartlyCloudy", "f083"]
].forEach(function (e) {
    exports.charMap[e[0]] = String.fromCharCode(parseInt(e[1], 16));
});

