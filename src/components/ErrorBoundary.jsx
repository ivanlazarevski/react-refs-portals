import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Trigger fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Optional: log somewhere
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Users cannot be rendered.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
