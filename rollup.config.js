import typescript from "@rollup/plugin-typescript"
import alias from '@rollup/plugin-alias';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
    {
        input: "src/ts/app.tsx",
        output: {
            dir: "public/js",
            format: "esm",
            sourcemap: true
        },
        plugins:[
            typescript({
                tsconfig: "./tsconfig.json"
            }),
            alias({
                entries: [
                    { find: 'react', replacement: 'preact/compat' },
                    { find: 'react-dom/test-utils', replacement: 'preact/test-utils' },
                    { find: 'react-dom', replacement: 'preact/compat' },
                    { find: 'react/jsx-runtime', replacement: 'preact/jsx-runtime' }
                ]
            }),
            nodeResolve()
        ]
        
    }
]