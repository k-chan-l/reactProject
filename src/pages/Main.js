import { Outlet, Link } from "react-router-dom";

function Main() {
    return (
        <div className="Main">
            <h1>bookkeeper!</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to={"/invoices"}>Invoices</Link> |{" "}
                <Link to={"/counter"}>Expenses</Link> |{" "}
                <Link to={"/http"}>Http</Link>
            </nav>
            <Outlet />{/*Nested Routes 지정후 페이지 변경시 이곳에 추가*/}
        </div>
    );
}

export default Main;
