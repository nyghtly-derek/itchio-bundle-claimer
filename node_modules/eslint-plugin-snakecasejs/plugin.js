/**
 * ESLint: snakecasejs
 * =====================
 * This is to enforce a style of snake_case in your project, rather than just disabling camelCase.
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptkdev.it)
 *                David Buchan-Swanson <david.buchanswanson@gmail.com>
 *                Tomasz Domański [@rozpuszczalny] <github@tomaszdomanski.com> (https://tomaszdomanski.com)
 *
 * @license: This code and contributions have 'MIT License'
 *
 */

// Default list of names allowed to be camel cased
const default_whitelist = [];
// Default list of parent node types, that allows node to be camel cased
const default_filter = ["ClassDeclaration", "NewExpression"];

/**
 * Detect function and variables name
 * =====================
 * Filter code, find functions name and variables
 *
 */
module.exports = {
	rules: {
		snakecasejs: {
			meta: {
				fixable: true,
			},
			create (context) {
				const raw_whitelist = context.settings["snakecasejs/whitelist"];
				const whitelist = Array.isArray(context.settings["snakecasejs/whitelist"]) ? raw_whitelist : default_whitelist;
				const raw_settings = context.settings["snakecasejs/filter"];
				const settings = Array.isArray(context.settings["snakecasejs/filter"]) ? raw_settings : default_filter;

				/**
				 * Indicates if current node should be ignored for error report
				 *
				 * @param {Object} node - eslint node object
				 *
				 * @return {Boolean} true/false - exist type in filter array?
				 *
				 */
				const filter = (node) => settings.includes(node.parent.type);

				return {
					Identifier (node) {
						var name = node.name;

						// ignore javascript language default function
						var array_system_var = ["Array","RegExp","Date","Number","String","Boolean","Error","Global","JSON","Math","Classes","Event","accessKey","activeElement","addEventListener","adoptNode","altKey","animationName","appCodeName","appendChild","appName","appVersion","availHeight","availWidth","baseURI","changeTouches","characterSet","charAt","charCode","charCodeAt","childElementCount","childNodes","classList","className","clearInterval","clearTimeout","clearWatch","clientHeight","clientLeft","clientTop","clientWidth","clientX","clientY","clipboardData","colorDepth","compareDocumentPosition","contentEditable","Statements","cookieEnabled","copyWithin","createAttribute","createComment","createDocumentFragment","createElement","createEvent","createTextNode","ctrlKey","currentTarget","dataTransfer","decodeURI","decodeURIComponent","defaultPrevented","defaultStatus","defaultView","deltaX","deltaY","deltaZ","deltaMode","designMode","documentElement","documentMode","documentURI","domConfig","elapsedTime","encodeURI","encodeURIComponent","endsWith","eventPhase","execCommand","exitFullscreen","findIndex","forEach","frameElement","fromCharCode","fullscreenElement","fullscreenEnabled","getDate","getDay","getAttribute","getAttributeNode","getBoundingClientRect","getComputedStyle","getCurrentPosition","getElementById","getElementsByClassName","getElementsByName","getElementsByTagName","getFullYear","getHours","getItem","getMilliseconds","getMinutes","getModifierState","getMonth","getNamedItem","getSeconds","getSelection","getTargetRanges","getTime","getTimezoneOffset","getUTCDate","getUTCDay","getUTCFullYear","getUTCHours","getUTCMilliseconds","getUTCMinutes","getUTCMonth","getUTCSeconds","getYear","groupCollapsed","groupEnd","hasAttribute","hasAttributes","hasChildNodes","hasFocus","ignoreCase","importNode","indexOf","Infinity","innerHeight","innerHTML","innerText","innerWidth","inputEncoding","inputType","insertAdjacentElement","insertAdjacentHTML","insertAdjacentText","insertBefore","isArray","isComposing","isContentEditable","isDefaultNamespace","isEqualNode","isFinite","isId","isInteger","isNaN","isSafeInteger","isSameNode","isSupported","isTrusted","keyCode","lastChild","lastElementChild","lastIndex","lastIndexOf","lastModified","lengthComputable","LN2","LN10","localeCompare","localStorage","LOG2E","LOG10E","matchMedia","MAX_VALUE","metaKey","MIN_VALUE","moveBy","moveTo","MovementX","MovementY","namedItem","namespaceURI","NaN","NEGATIVE_INFINITY","newURL","newValue","nextSibling","nextElementSibling","nodeName","nodeType","nodeValue","normalizeDocument","Number","offsetHeight","offsetWidth","offsetLeft","offsetParent","offsetTop","offsetX","offsetY","oldURL","oldValue","outerHeight","outerHTML","outerText","outerWidth","ownerDocument","pageX","pageXOffset","pageY","pageYOffset","parentNode","parentElement","parseFloat","parseInt","PI","pixelDepth","positionError","positionOptions","POSITIVE_INFINITY","preventDefault","propertyName","pseudoElement","querySelector","querySelectorAll","readyState","reduceRight","removeAttribute","removeAttributeNode","removeChild","removeEventListener","removeItem","replaceChild","requestAnimationFrame","requestFullscreen","resizeBy","resizeTo","previousSibling","previousElementSibling","prototype","relatedTarget","removeEventListener","removeNamedItem","renameNode","screenLeft","screenTop","screenX","screenY","scrollBy","scrollHeight","scrollIntoView","scrollLeft","scrollTo","scrollTop","scrollWidth","scrollX","scrollY","sessionStorage","setAttribute","setAttributeNode","setDate","setFullYear","setHours","setInterval","setItem","setMilliseconds","setMinutes","setMonth","setNamedItem","setSeconds","setTime","setTimeout","setUTCDate","setUTCFullYear","setUTCHours","setUTCMilliseconds","setUTCMinutes","setUTCMonth","setUTCSeconds","setYear","shiftKey","startsWith","String","stopImmediatePropagation","stopPropagation","SQRT1_2","SQRT2","strictErrorChecking","storageArea","tabIndex","tagName","targetTouches","textContent","timeEnd(","timeStamp","toDateString","toGMTString","toExponential","toFixed","toJSON","toISOString","toLocaleDateString","toLocaleLowerCase","toLocaleString","toLocaleTimeString","toLocaleUpperCase","toLowerCase","toPrecision","toString","toTimeString","toUpperCase","toUTCString","URL","userAgent","UTC","valueOf","watchPosition"];

						var split = name.split(/(?=[A-Z])/);
						var split_az = name.split(/(?=[a-z])/);

						// detect camelCase
						if ((split.length > 1 && split_az.length > 1) && !array_system_var.includes(name) && !whitelist.includes(name)) {
							if (filter(node)) {
								return true;
							}

							// error message on ide
							context.report({
								message: `Identifiers must be snake_case: {{ identifier }} (${node.parent.type})`,
								node: node,
								data: {
									identifier: node.name,
								},

								// --fix eslint parameter: detect camelCase and convert in snake_case
								fix (fixer) {
									return fixer.replaceText(node, node.name.split(/(?=[A-Z])/).join("_").toLowerCase());
								}
							});
						}
					}
				};
			}
		}
	}
};