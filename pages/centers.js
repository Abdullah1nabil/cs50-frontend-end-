import Link from "next/link";
import Cards from "../components/cards";

const Centers = () => {
  return (
    <>
      <div className="container">
        <div className="head-home">
          <h1> the autisum platform</h1>
          <div>
            <ul>
              <li>
                <Link href="/">
                  <p>الرئيسية</p>
                </Link>
              </li>
              <li>
                <Link href="/home">
                  <p>المركز الوطني</p>
                </Link>
              </li>
              <li>
                <Link href="/centers">
                  <p>المراكز</p>
                </Link>
              </li>
              <li>
                <Link href="/singup">
                  <p>تسجيل الدخول </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Cards />
      </div>
    </>
  );
};
export default Centers;
