import { Loader } from "@/components";
import { RootState } from "@/redux";
import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { logout } from "../user-authentication/user-authentication-reducer";
import { UserProfileComponent } from "./user-profile-component";
import { fetchUserProfileRequest } from "./user-profile-reducer";

const mapStateToProps = (state: RootState) => ({ ...state.userProfile });

const mapDispatchToProps = { fetchUserProfileRequest, logout };

const connector = connect(mapStateToProps, mapDispatchToProps);

export type UserProfileProps = ConnectedProps<typeof connector>;

export const UserProfile = connector(
  ({ fetchUserProfileRequest, isLoading, ...props }: UserProfileProps) => {
    useEffect(() => {
      fetchUserProfileRequest();
    }, [fetchUserProfileRequest]);

    if (isLoading) return <Loader />;

    return <UserProfileComponent {...props} />;
  }
);
