import React from "react";

export function withLayout(WrappedComponent: React.ComponentType) {
  const Layout: React.FC = (props) => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-black">
        <WrappedComponent {...props} />
      </div>
    );
  };

  return Layout;
}
