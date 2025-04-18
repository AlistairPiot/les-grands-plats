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
            <h1>Page d'erreur</h1>
            <p>Si vous voulez vous amusez, ce n'est pas le bonne endroit. ^^</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <button onClick={handleRedirect}>Retourner à l'accueil</button>
        </div>
    );
}
