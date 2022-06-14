import useAuth from "hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { AuthStorage } from "services/storages"

export default function ContentsPage() {
    const { handleLogout } = useAuth();
    return (
        <div>
            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
};
