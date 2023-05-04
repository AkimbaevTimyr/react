import React, { type ErrorInfo, type ReactNode, Suspense } from 'react'
import { Error } from 'widgets/Error'

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends
    React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor (props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    // eslint-disable-next-line n/handle-callback-err
    static getDerivedStateFromError (error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch (error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo)
    }

    render () {
        const hasError = this.state.hasError
        const children = this.props.children
        if (hasError) {
            // You can render any custom fallback UI
            return <Suspense fallback="">
                <Error />
            </Suspense>
        }

        return children
    }
}

export default ErrorBoundary
