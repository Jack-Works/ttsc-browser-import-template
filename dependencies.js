'use strict'

/**
 * If you want to let some dependency load by CDN,
 * You should add a rule in tsconfig.json before the "default" (/(.+)/) rule.
 *
 * Like { "react": "umd" }
 */

const throw_ = () => {
    throw new Error('Not init yet... Please wait...')
}
module.exports = (def => {
    try {
        return require('./__deps__generated__.js').default
    } catch (e) {
        return def
    }
})(new Proxy({}, { get: throw_ }))
