import { NavLink, Outlet, useSearchParams, } from "react-router-dom";
import { getInvoices } from "../datas/data";//redux로 한번 바꿔보기

export default function Invoices() {
    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams();
    return (
        <div style={{ display: "flex" }}>
            <nav style={{
                borderRight: "solid 1px",
                padding: "1rem",
            }}>
                <input
                value={searchParams.get("filter") || ""}
                onChange={(event) => {
                    let filter = event.target.value;
                    if (filter) {
                        setSearchParams({ filter });
                    } else {
                        setSearchParams({});
                    }
                }}//검색을 위해 추가한 태그
                    //filter라는 name의 URL 옵션을 추출한다.
                    //input의 값이 변경될 경우 이벤트를 호출해 URL에 해당정보를 삽입한다.
            />
                {invoices
                    .filter((invoice) => {
                        let filter = searchParams.get("filter");//filter key 값을 찾아서
                        if (!filter) return true;//key값이 없다면 종료
                        let name = invoice.name.toLowerCase();//있다면 현재 목록의 값들을 소문자로 변경
                        return name.startsWith(filter.toLowerCase());//검색할 것도 소문자로 변경 후 반환
                    })//이 부분은 url 뒤에 검색하는 것을 읽어드리려 추가

                    .map((invoice) => (
            <NavLink
                style={({ isActive }) => {
                    return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : "",
                    };
                }}
                to={`/invoices/${invoice.number}`}
                key={invoice.number}
            >{/*스타일을 사용하면서 주소 지정 및 해당페이지로 key값 전달*/}
                {invoice.name}
            </NavLink>
        ))}{/*기존 Link에서 NavLink로 변경 후 style에 isActive function추가 활성화 중일 때 색상변경 가능*/}
           </nav>
            <Outlet/>
        </div>
    );
}