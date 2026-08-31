import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Unhandled React Error Boundary Exception:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md w-full border border-[var(--color-border)] p-8 bg-black/5 dark:bg-white/5 space-y-4">
            <div className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-widest font-semibold">
              SYSTEM RECOVERY
            </div>
            <h1 className="font-heading text-2xl font-bold uppercase tracking-tight">
              APPLICATION ENCOUNTERED AN UNEXPECTED STATE
            </h1>
            <p className="text-xs text-[var(--color-text-muted)] font-mono leading-relaxed overflow-auto max-h-32 border border-[var(--color-border)] p-3 text-left bg-black/10 dark:bg-white/10">
              {this.state.error?.toString() || 'Unknown runtime error'}
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.href = '/industries';
              }}
              className="btn btn-primary text-xs uppercase tracking-wider py-2.5 px-6"
            >
              RELOAD INDUSTRIES CATALOG
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
