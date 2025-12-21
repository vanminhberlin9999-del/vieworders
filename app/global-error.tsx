'use client'
export default function GlobalError({error, reset}:{
    error: Error & {digest?: string},
    reset: () => void
}) {
    return (
        <html>
            <body>
                <h1>Something is wrong</h1>
                <h2>{error.message}</h2>
                <button onClick={() => {reset()}}>Try again</button>
            </body>
        </html>
    )
}