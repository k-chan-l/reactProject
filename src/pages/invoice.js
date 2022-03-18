import { useParams,
        useLocation,
        useNavigate} from "react-router-dom";
import { getInvoice, deleteInvoice} from "../datas/data";{/*redux로 변경예정*/}

export default function Invoice() {
    let params = useParams();
    let navigate = useNavigate();
    let location = useLocation();

    let invoice = getInvoice(parseInt(params.invoiceId, 10));
    return (
        <main style={{ padding: "1rem" }}>
            <h2>Total Due: {invoice.amount}</h2>
            <p>
                {invoice.name}: {invoice.number}
            </p>
            <p>Due Date: {invoice.due}</p>
            <p>
                <button
                    onClick={() => {
                        deleteInvoice(invoice.number);
                        navigate("/invoices" + location.search);
                    }}
                >
                    Delete
                </button>
            </p>
        </main>
    );
    {/*params.invoiceId <= :invoiceId로 index.js에서 지정한대로 받아짐*/}
}