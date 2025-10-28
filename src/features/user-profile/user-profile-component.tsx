import { RootState } from "@/redux";
import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { logout } from "../user-authentication";
import { fetchUserProfileRequest } from "./user-profile-reducer";

const mapStateToProps = (state: RootState) => ({ ...state.userProfile });

const mapDispatchToProps = { fetchUserProfileRequest, logout };

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

export function UserProfile_({
  fetchUserProfileRequest,
  logout,
  isLoading,
  data,
}: Props) {
  useEffect(() => {
    fetchUserProfileRequest();
  }, [fetchUserProfileRequest]);

  if (isLoading) return "Loading...";

  return (
    <div className="max-w-2xl mx-auto text-center text-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {[
          { label: "Name", value: data?.name },
          { label: "Phone", value: data?.phone },
          { label: "Address", value: data?.address.city },
          { label: "Username", value: data?.username },
          { label: "Website", value: data?.website },
          { label: "Company", value: data?.company?.name },
        ].map(({ label, value }) => (
          <div key={label}>
            <p className="text-black/50">{label}:</p>
            <p>{value ?? "-"}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => logout()}
        className="bg-red-400 mt-20 text-white rounded-sm py-1 px-3 cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}

export const UserProfile = connector(UserProfile_);
