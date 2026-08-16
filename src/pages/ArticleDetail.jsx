import { Link, useParams } from "react-router-dom";
import articles from "../data/articles";

function ArticleDetail() {

  const { slug } = useParams();

  const article = articles.find(
    (item) => item.slug === slug
  );

  if (!article) {

    return (
      <main className="not-found">

        <div>
          <span>404</span>

          <h1>
            ไม่พบบทความ
          </h1>

          <p>
            ขออภัย ไม่พบบทความที่คุณกำลังค้นหา
          </p>

          <Link
            to="/articles"
            className="primary-button"
          >
            กลับไปหน้าบทความ
          </Link>
        </div>

      </main>
    );
  }

  return (
    <main>

      <article className="article-detail">

        <Link
          to="/articles"
          className="back-link"
        >
          ← กลับไปบทความทั้งหมด
        </Link>

        <div className="detail-header">

          <div className="detail-icon">
            {article.icon}
          </div>

          <div className="detail-category">
            {article.category}
          </div>

          <h1>
            {article.title}
          </h1>

          <p>
            {article.description}
          </p>

          <div className="detail-meta">

            <span>
              📅 {article.date}
            </span>

            <span>
              ⏱ ใช้เวลาอ่าน {article.readTime}
            </span>

          </div>

        </div>

        <div className="article-body">

          {article.content.map(
            (section, index) => (

              <section
                key={index}
                className="content-section"
              >

                <h2>
                  {section.heading}
                </h2>

                {section.paragraphs.map(
                  (paragraph, i) => (

                    <p key={i}>
                      {paragraph}
                    </p>

                  )
                )}

              </section>

            )
          )}

        </div>

        <div className="article-footer">

          <Link
            to="/"
            className="secondary-button"
          >
            ← กลับหน้าแรก
          </Link>

          <Link
            to="/articles"
            className="primary-button"
          >
            อ่านบทความอื่น →
          </Link>

        </div>

      </article>

    </main>
  );
}

export default ArticleDetail;