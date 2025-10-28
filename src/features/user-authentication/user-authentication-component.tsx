import { Input } from "@/components";
import { FormEvent } from "react";

type Props = {
  value: { email: string; password: string };
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleChange: (_: { name: string; value: string }) => void;
};

export function UserAuthenticationComponent({
  value,
  handleSubmit,
  handleChange,
}: Props) {
  return (
    <div className="w-full max-w-lg px-8">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Sign in</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            id="email"
            type="email"
            value={value.email}
            onChange={(e) =>
              handleChange({ name: "email", value: e.target.value })
            }
            placeholder="you@example.com"
          />

          <Input
            id="password"
            type="password"
            value={value.password}
            onChange={(e) =>
              handleChange({ name: "password", value: e.target.value })
            }
            placeholder="••••••••"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
