import Link from "next/link";
import MainHome from "../homecenter-page/main";
import ArticleHome from "../homecenter-page/article";
import Section1Home from "../homecenter-page/section1";
import Section2Home from "../homecenter-page/section2";
import Section3Home from "../homecenter-page/section3";
import FooterHome from "../homecenter-page/footer";

const Home = () => {
  return (
    <>
      <header>
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
              </ul>
            </div>
          </div>
        </div>
      </header>

      <MainHome />
      <ArticleHome />
      <Section1Home />
      <Section2Home />
      <Section3Home />
      <FooterHome />
    </>
  );
};
export default Home;
