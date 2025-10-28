import { UserProfileProps } from "./user-profile-container";

export function UserProfileComponent({
  logout,
  data,
}: Omit<UserProfileProps, "fetchUserProfileRequest" | "isLoading">) {
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
        className="bg-red-400 mt-20 text-white rounded-sm text-base py-1 px-3 cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}
