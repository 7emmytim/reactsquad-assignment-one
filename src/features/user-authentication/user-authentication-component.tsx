import { Input } from "@/components";
import { RootState } from "@/redux";
import { FormEvent, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { login } from "./user-authentication-reducer";

const mapStateToProps = (state: RootState) => ({ ...state });

const mapDispatchToProps = { login };

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

function SignIn_({ login }: Props) {
  const [{ email, password }, setValue] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(email);
  };

  return (
    <div className="w-full max-w-lg px-8">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Sign in</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, email: e.target.value }))
            }
            placeholder="you@example.com"
          />

          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, password: e.target.value }))
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

export const SignIn = connector(SignIn_);
