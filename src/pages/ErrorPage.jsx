/* fichier 404.jsx */
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/");
    };

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred. ^^</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <button onClick={handleRedirect}>Retourner à l'accueil</button>
        </div>
    );
}
