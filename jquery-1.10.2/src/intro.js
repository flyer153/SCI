/*!
 * jQuery JavaScript Library v@VERSION
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: @DATE
 */

 /*
  * 传window的意义，利于压缩，防止去顶部查找window。
  * undefined为防止在外面被修改。属于window下的一个属性，不是保留字关键字，在外面可以被修改。
  */
(function( window, undefined ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//"use strict";

