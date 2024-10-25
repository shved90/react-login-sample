import { PasswordRecoverPage } from "../pages/passwordRecovery";
import { LoginPage } from "../pages/homeLogin";
import { RegistrationPage } from "../pages/registration";
import { Lang } from '../locales/languagePicker'

interface routerType {
    title: string;
    path: string;
    element: JSX.Element;
}

const pagesData: routerType[] = [
    {
        path: "/",
        element: <LoginPage />,
        title: "Login page"
    },
    {
        path: "/passwordrecover",
        element: <PasswordRecoverPage />,
        title: "Password recovery"
    },
    {
        path: "/registration",
        element: <RegistrationPage />,
        title: "Register"
    }
];

export { pagesData, routerType };
