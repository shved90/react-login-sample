import { PasswordRecoverPage } from "../pages/passwordRecovery"
import { LoginPage } from "../pages/homeLogin"
import { RegistrationPage } from "../pages/registration"

const pagesData = [
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
]

export { pagesData }
