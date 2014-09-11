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
 * @default '.fa'
 */
exports.prefix = 'wi-';

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
 *   ["fa-glass"], 0xf000],
 *   ["fa-music"], 61441],
 * ...]
 * 
 * ].forEach(function (e) {
 *	exports.charMap[e[0]] = String.fromCharCode(e[1]);
 *});
 * 
 */
exports.charMap = new Array;

[
  [dayCloudyGusts: "\uf000"],
  [dayCloudyWindy: "\uf001"],
  [dayCloudy: "\uf002"],
  [dayFog: "\uf003"],
  [dayHail: "\uf004"],
  [dayLightning: "\uf005"],
  [dayRainMix: "\uf006"],
  [dayRainWind: "\uf007"],
  [dayRain: "\uf008"],
  [dayShowers: "\uf009"],
  [daySnow: "\uf00a"],
  [daySprinkle: "\uf00b"],
  [daySunnyOvercast: "\uf00c"],
  [daySunny: "\uf00d"],
  [dayStormShowers: "\uf00e"],
  [dayThunderstorm: "\uf010"],
  [cloudyGusts: "\uf011"],
  [cloudyWindy: "\uf012"],
  [cloudy: "\uf013"],
  [fog: "\uf014"],
  [hail: "\uf015"],
  [lightning: "\uf016"],
  [rainMix: "\uf017"],
  [rainWind: "\uf018"],
  [rain: "\uf019"],
  [showers: "\uf01a"],
  [snow: "\uf01b"],
  [sprinkle: "\uf01c"],
  [stormShowers: "\uf01d"],
  [thunderstorm: "\uf01e"],
  [windy: "\uf021"],
  [nightAltCloudyGusts: "\uf022"],
  [nightAltCloudyWindy: "\uf023"],
  [nightAltHail: "\uf024"],
  [nightAltLightning: "\uf025"],
  [nightAltRainMix: "\uf026"],
  [nightAltRainWind: "\uf027"],
  [nightAltRain: "\uf028"],
  [nightAltShowers: "\uf029"],
  [nightAltSnow: "\uf02a"],
  [nightAltSprinkle: "\uf02b"],
  [nightAltStormShowers: "\uf02c"],
  [nightAltThunderstorm: "\uf02d"],
  [nightClear: "\uf02e"],
  [nightCloudyGusts: "\uf02f"],
  [nightCloudyWindy: "\uf030"],
  [nightCloudy: "\uf031"],
  [nightHail: "\uf032"],
  [nightLightning: "\uf033"],
  [nightRainMix: "\uf034"],
  [nightRainWind: "\uf035"],
  [nightRain: "\uf036"],
  [nightShowers: "\uf037"],
  [nightSnow: "\uf038"],
  [nightSprinkle: "\uf039"],
  [nightStormShowers: "\uf03a"],
  [nightThunderstorm: "\uf03b"],
  [celsius: "\uf03c"],
  [cloudDown: "\uf03d"],
  [cloudRefresh: "\uf03e"],
  [cloudUp: "\uf040"],
  [cloud: "\uf041"],
  [degrees: "\uf042"],
  [downLeft: "\uf043"],
  [down: "\uf044"],
  [fahrenheit: "\uf045"],
  [horizonAlt: "\uf046"],
  [horizon: "\uf047"],
  [left: "\uf048"],
  [nightFog: "\uf04a"],
  [refreshAlt: "\uf04b"],
  [refresh: "\uf04c"],
  [right: "\uf04d"],
  [sprinkles: "\uf04e"],
  [strongWind: "\uf050"],
  [sunrise: "\uf051"],
  [sunset: "\uf052"],
  [thermometerExterior: "\uf053"],
  [thermometerInternal: "\uf054"],
  [thermometer: "\uf055"],
  [tornado: "\uf056"],
  [upRight: "\uf057"],
  [up: "\uf058"],
  [windWest: "\uf059"],
  [windSouthWest: "\uf05a"],
  [windSouthEast: "\uf05b"],
  [windSouth: "\uf05c"],
  [windNorthWest: "\uf05d"],
  [windNorthEast: "\uf05e"],
  [windNorth: "\uf060"],
  [windEast: "\uf061"],
  [smoke: "\uf062"],
  [dust: "\uf063"],
  [snowWind: "\uf064"],
  [daySnowWind: "\uf065"],
  [nightSnowWind: "\uf066"],
  [nightAltSnowWind: "\uf067"],
  [daySleetStorm: "\uf068"],
  [nightSleetStorm: "\uf069"],
  [nightAltSleetStorm: "\uf06a"],
  [daySnowThunderstorm: "\uf06b"],
  [nightSnowThunderstorm: "\uf06c"],
  [nightAltSnowThunderstorm: "\uf06d"],
  [solarEclipse: "\uf06e"],
  [lunarEclipse: "\uf070"],
  [meteor: "\uf071"],
  [hot: "\uf072"],
  [hurricane: "\uf073"],
  [smog: "\uf074"],
  [alien: "\uf075"],
  [snowflakeCold: "\uf076"],
  [stars: "\uf077"],
  [moonFull: "\uf078"],
  [moonWaxingGibbous: "\uf079"],
  [moonWaxingQuarter: "\uf07a"],
  [moonWaxingCrescent: "\uf07b"],
  [moonYoung: "\uf07c"],
  [moonNew: "\uf07d"],
  [moonOld: "\uf07e"],
  [moonWaningCrescent: "\uf080"],
  [moonWaningQuarter: "\uf081"],
  [moonWaningGibbous: "\uf082"],
  [nightPartlyCloudy: "\uf083"]
].forEach(function (e) {
    exports.charMap[e[0]] = String.fromCharCode(parseInt(e[1].replace("\u", ""), 16));
});
