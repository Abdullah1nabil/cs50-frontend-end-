import Link from "next/link";

const Homepage = () => {
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
              src="images/IMG_739D52364B69-1.jpeg"
              className="img-s1"
              alt=""
            />
          </div>
          <div className="section2">
            <h2>مركز بسمة امل</h2>
            <p className="p-s2">
              التخصصي لرعاية التوحد واظطرابات النطق والتخاطب وذوي الاحتياجات
              الخاصة
            </p>
            <p className="p-s2">
              للاستفسار والتواصل : 07716666315 - 07716666311
            </p>
            <p className="p-s2">الصليخ منطقة الـ 600 هاتف</p>
          </div>
        </div>
      </div>
      <p className="p-post">posts</p>
      <div className="container">
        <div className="posts">
          <div className="post">
            <img
              src="images/IMG_281CEB388AA9-1.jpeg"
              className="img-s2"
              alt=""
            />
            <p className="text-post">
              إرشادات لتطوير الذاكرة عند الأطفال 👇👇👇👇👇👇 هناك عدّة طرقٍ
              تساعد الطفل على استرجاع المعلومات التي احتفظ بها مسبقاً وعلى تطوير
              ذاكرته منها: ✍️أن تكون المعلومات التي يُطلب من الطفل تعلّمها سهلةً
              ومألوفةً وذات معنىً له، ✍️أن يتم ربطها بالواقع قدر الإمكان. ✍️أن
              يتم الشرح للطفل عن ما هو المتوقّع منه أن يتذكّره، ✍️أن يُحفّز
              الأهل أو المعلمون الطفل ليكون لديه دافعٌ للتعلم أو الحفظ وبالتالي
              التذكّر. ✍️تنظيم المعلومات بروابط أو رموز يسهل على الطفل تذكّرها،
              مثل تنظيم المعلومات التي تتشارك بروابط بينها معاً. ✍️الابتعاد عن
              كل ما يمكن أن يشتّت انتباه الطفل، وأن يكون الزمان والمكان مناسبين
              لتلقي المعلومات حتى يسهل تذكّرها. ✍️استخدام أسلوب التدريب المستمرّ
              والإعادة والتكرار للمعلومات التي يُطلب من الطفل تذكّرها. ✍️أن يكون
              الطفل بعيداً عن التوتر العاطفيّ، وأن يُعزز الأهل والمعلمون لديه
              الثقة بالنفس. ✍️الانتباه للأسباب التي تؤدّي إلى النسيان، ومحاولة
              علاجها، وتجنّبها أثناء تعليم الطفل.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Homepage;
