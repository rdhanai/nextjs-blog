import { AppProps, NextWebVitalsMetric } from 'next/app'

import '@styles/global.css'

export function reportWebVitals(metric: NextWebVitalsMetric) {
    console.log(metric)
    if (metric.label === 'web-vital') {
        console.log('web-vital', metric) // The metric object ({ id, name, startTime, value, label }) is logged to the console
    } else {
        console.log('custom vital', metric)
    }
}
  
export default function App({ Component, pageProps }:  AppProps) {
    return <Component {...pageProps} />
}