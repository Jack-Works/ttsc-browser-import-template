import type { Configuration, ConfigurationFactory } from 'webpack'
import type {} from 'webpack-dev-server'
export default (...[argvEnv, argv]: Parameters<ConfigurationFactory>): Configuration => {
    const mode = argv.mode
    const config: Configuration = {
        mode,
        entry: './dependencies.js',
        output: {
            path: __dirname + '/es',
            filename: 'dependencies.js',
            library: '__deps__',
            libraryTarget: 'global',
            globalObject: 'globalThis'
        },
        externals: [
            {
                // react: 'React',
                // 'react-dom': 'ReactDOM'
            }
        ],
        watch: mode === 'development',
        devServer: {
            open: true,
            liveReload: true,
            watchContentBase: true,
            contentBase: './es/',
            historyApiFallback: true,
            http2: true
        }
    }
    return config
}
