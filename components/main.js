import Link from "next/link";

const Main = () => {
  return (
    <main className="index-main">
      <div className="container">
        <div className="index-sec-one">
          <img
            className="index-svg-img"
            src="images/undraw_toy_car_7umw.svg"
            alt=""
          />
          <p>اعتنو باطفالكم من خلال الموقع سنرشدكم الى الطريق الصحيح </p>
        </div>

        <h1 className="index-content">مواضيع قد تهمك</h1>
      </div>
      <div className="index-cards">
        <Link href="card1">
          <img
            className="index-card"
            src="/images/PicsArt_01-06-12.34.12.png"
            alt=""
          />
        </Link>
        <Link href="card2">
          <img
            className="index-card"
            src="images/IMG_20210106_120145_885.png"
            alt=""
          />
        </Link>
        <Link href="card3">
          <img
            className="index-card"
            src="/images/PicsArt_01-07-02.10.04.png"
            alt=""
          />
        </Link>
        <Link href="card4">
          <img className="index-card" src="images/favicon.png" alt="" />
        </Link>
      </div>
    </main>
  );
};
export default Main;
