import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <article className="article-card">

      <div className="article-icon">
        {article.icon}
      </div>

      <div className="article-category">
        {article.category}
      </div>

      <h3>
        {article.title}
      </h3>

      <p>
        {article.description}
      </p>

      <div className="article-meta">

        <span>
          📅 {article.date}
        </span>

        <span>
          ⏱ {article.readTime}
        </span>

      </div>

      <Link
        to={`/articles/${article.slug}`}
        className="read-more"
      >
        อ่านบทความ
        <span>→</span>
      </Link>

    </article>
  );
}

export default ArticleCard;