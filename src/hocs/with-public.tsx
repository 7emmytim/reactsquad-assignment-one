import { RootState } from "@/redux";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";

export const withPublic = (WrappedComponent: React.ElementType) => {
  const mapStateToProps = (state: RootState) => ({
    isAuthenticated: state.userAuthentication.isAuthenticated,
  });

  const connector = connect(mapStateToProps);

  type Props = ConnectedProps<typeof connector>;

  const PublicWrapper = (props: Props) => {
    const router = useRouter();
    const { isAuthenticated } = props;

    useEffect(() => {
      if (isAuthenticated) {
        router.replace("/user-profile");
      }
    }, [isAuthenticated, router]);

    if (isAuthenticated) return null;

    return <WrappedComponent {...props} />;
  };

  return connector(PublicWrapper);
};
