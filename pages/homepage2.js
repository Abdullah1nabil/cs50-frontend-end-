import Link from "next/link";

const Homepage2 = () => {
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
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="sections">
          <div className="section1">
            <img
              src="images/IMG_4CAE5231990B-1.jpeg"
              className="img-s1"
              alt=""
            />
          </div>
          <div className="section2">
            <h2>مركز نحلة </h2>
            <p className="p-s2">
              يرحب بالاطفال الاحبة للتسجيل ومشاركة زملائهم التعلم والمرح من
              الاحد الى الخميس من الثامنة صباحا وحتى الثانية بعد الظهر , يقدم
              خدمات مركز نحلة مجموعة من ذوي الاختصاص والخبرة بالاهتمام ورعاية
              أطفال التوحد ،متلازمة داون ،اضطرابات اللغة ،الاضطرابات
            </p>
            <p className="p-s2">
              للاستفسار والتواصل : ٠٧٧٣٩٩١٨٥٦٢ - ٠٧٥٠٥١٩١٤٨٢
            </p>
            <p className="p-s2">المنصور-شارع ١٤ تموز</p>
          </div>
        </div>
      </div>
      <p className="p-post">posts</p>
      <div className="container">
        <div className="posts-p2">
          <div className="post-p2">
            <p className="t-p2">مجموعة من برامجنا التدريبية والتعليمية </p>
            <div className="col-img">
              <img
                className="col-imges"
                src="images/imagecenter/IMG_239731427962-1.jpeg"
                alt=""
              />
              <img
                className="col-imges"
                src="images/imagecenter/IMG_239731427962-2.jpeg"
                alt=""
              />
              <img
                className="col-imges"
                src="images/imagecenter/IMG_239731427962-3.jpeg"
                alt=""
              />
              <img
                className="col-imges"
                src="images/imagecenter/IMG_239731427962-4.jpeg"
                alt=""
              />
              <img
                className="col-imges"
                src="images/imagecenter/IMG_239731427962-5.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Homepage2;
