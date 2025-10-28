import { RootState } from "@/redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";

export const withPrivate = (WrappedComponent: React.ElementType) => {
  const mapStateToProps = (state: RootState) => ({
    isAuthenticated: state.userAuthentication.isAuthenticated,
  });

  const connector = connect(mapStateToProps);

  type Props = ConnectedProps<typeof connector>;

  const AuthWrapper = (props: Props) => {
    const router = useRouter();
    const { isAuthenticated } = props;

    useEffect(() => {
      if (!isAuthenticated) {
        router.replace("/sign-in");
      }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) return null;
    return <WrappedComponent {...props} />;
  };

  return connector(AuthWrapper);
};
