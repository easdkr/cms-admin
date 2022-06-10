import "./login.css"

export default function Login() {
    return (
        <form>
            <img width="100%" className="app-logo" src={require("../../assets/june.jpg")} />
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                />
            </div>

            <div className="mb-3">
                <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                />
            </div>

            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    login
                </button>
            </div>
        </form>
    )
}
