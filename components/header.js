import Link from "next/link";

const Header = () => {
  return (
    <div className="home-cover">
      <img src="/images/cover2.jpg" alt="" />
      <div className="overlay">
        <div className="container">
          <header>
            <div className="head">
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
                </ul>
              </div>
            </div>
          </header>
          <div className="content">
            <h1>انضم لنا </h1>
            <a href="tel:+96407712055551">
              <input type="submit" value="اتصل بالفريق المختص " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
