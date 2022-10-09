import { useEffect, useState } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import FormInput from "./../../components/form-input/form-input.component";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserProfileDocument,
  createUserDocumentFromAuth,
  getUserByEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import Button from "../../components/button/button.component";

const defaultFormFields = {
  email: "a@a.com",
  password: "123456",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { password, email } = formFields;

  useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
        console.log(userDocRef);
      }
    })();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    createUserDocumentFromAuth(user);
  };

  const logGoogleUserRedirect = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log(user);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <FormInput
        label="email"
        type="email"
        required
        onChange={handleChange}
        name="email"
        value={email}
      />
      <FormInput
        label="password"
        type="text"
        required
        onChange={handleChange}
        name="password"
        value={password}
      ></FormInput>
      <Button
        onClick={async (event) => {
          const user = await getUserByEmailAndPassword(email, password);
          console.log(
            "🚀 ~ file: sign-in.component.jsx ~ line 72 ~ onClick={async ~ user",
            user
          );
        }}
      >
        Sign in
      </Button>
      <Button buttonType="google" onClick={logGoogleUser}>
        Sign in with Google Popup
      </Button>
      {/* <Button buttonType="google" onClick={logGoogleUserRedirect}>
        Sign in with Google redirect
      </Button> */}
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default SignIn;
