import React from "react";

export function withLayout<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const Layout: React.FC<P> = (props) => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-black">
        <WrappedComponent {...props} />
      </div>
    );
  };

  return Layout;
}
