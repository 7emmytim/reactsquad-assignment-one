import { RootState } from "@/redux";
import { useRouter } from "next/router";
import {
  DetailedHTMLProps,
  FormEvent,
  InputHTMLAttributes,
  useState,
} from "react";
import { connect } from "react-redux";
import { login } from "./user-authentication-reducer";

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = { login };

const connector = connect(mapStateToProps, mapDispatchToProps);

function SignIn_() {
  const [{ email, password }, setValue] = useState({
    email: "",
    password: "",
  });

  const { push } = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(email);
    push("/user-profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
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
    </div>
  );
}

function Input(
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return (
    <div>
      <label
        htmlFor={props.id}
        className="block text-sm font-medium text-gray-700 mb-1 capitalize"
      >
        {props.id}
      </label>

      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder:text-black/40 text-black"
        required
        {...props}
      />
    </div>
  );
}

export const SignIn = connector(SignIn_);
