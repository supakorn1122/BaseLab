import ArticleCard from "../components/ArticleCard";
import articles from "../data/articles";

function Articles() {
  return (
    <main>

      <section className="page-hero">

        <div className="hero-badge">
          KNOWLEDGE BASE
        </div>

        <h1>
          บทความ
          <span>เลขฐาน</span>
        </h1>

        <p>
          เรียนรู้ระบบเลขฐานตั้งแต่พื้นฐาน
          ไปจนถึงการนำไปใช้ใน Programming
        </p>

      </section>

      <section className="articles-page">

        <div className="articles-toolbar">

          <div>
            <strong>
              {articles.length}
            </strong>

            <span>
              บทความ
            </span>
          </div>

          <span>
            อัปเดตล่าสุด · สิงหาคม 2026
          </span>

        </div>

        <div className="article-grid large">

          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
            />
          ))}

        </div>

      </section>

    </main>
  );
}

export default Articles;