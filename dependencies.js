'use strict'

// @example:
// In future, you can use syntax: export * as path from 'path'
export const path = require('path')

// ---------------------------------------------------------------------- //
//#region Library code
import * as self from './dependencies.js'
import { queryWellknownUMD } from '@magic-works/ttypescript-browser-like-import-transformer/es/well-known-umd'
/**
 * @description Load the Node style library as UMD
 * @param {string} path
 */
export function load(path) {
    path = queryWellknownUMD(path) || path
    const a = self[path]
    if (a) return a
    const b = globalThis[path]
    if (b) return b
    console.error(`[Missing dependency] ${path}:
It's recommend to add a UMD minified version of the dependency (https://duckduckgo.com/?q=javascript+library+cdn+${encodeURIComponent(
        path
    )} ) to "es/index.html"
You can also add it to /dependencies.js`)
    return undefined
}
//#endregion
