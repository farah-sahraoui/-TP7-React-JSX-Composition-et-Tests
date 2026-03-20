function withTracker(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log(`[Tracker] Composant rendu avec :`, props);
    return <WrappedComponent {...props} />;
  };
}

export default withTracker;