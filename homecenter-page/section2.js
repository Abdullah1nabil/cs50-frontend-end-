import Link from "next/link";
const Section2Home = () => {
  return (
    <section>
      <div className="container">
        <div className="section-head-two">
          <div className="element-section2">
            <h1>اشترك في أفضل نشرات الغذائية</h1>
            <p>
              للحول على حياه صحية وبعيده عن الامراض ارسل الايميل الخاص بك
              لارشادك باخر الاخبار والانظمة الصحية
            </p>
          </div>
          <div>
            <Link href="#">
              <a>Add email to the list </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section2Home;
