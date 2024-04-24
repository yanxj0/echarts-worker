import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    build: {
        target:'esnext',
        lib: {
            entry: './src/index.ts',
            name: 'ECharts Worker',
            fileName: 'echarts-worker',
            formats:['es','umd','cjs']
        }
    },
    worker: {
        format: 'es'
    },
    plugins: [dts({
        insertTypesEntry: true,
    })]
})
