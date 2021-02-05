import Link from "next/link";
const Cards = () => {
  return (
    <>
      <div className="container">
        <div className="cards">
          <div className="card">
            <img src="images/IMG_739D52364B69-1.jpeg" alt="" />
            <h2>مركز بسمة امل </h2>
            <p className="p">لرعاية التوحد واظطرابات النطق</p>
            <Link href="/homepage">
              <p className="p2">زورو الصفحة</p>
            </Link>
          </div>
          <div className="card">
            <img src="images/IMG_4CAE5231990B-1.jpeg" alt="" />
            <h2>مركز نحله </h2>
            <p className="p">للتوحد واضطرابات التعلم</p>
            <Link href="/homepage2">
              <p className="p2">زورو الصفحة</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
