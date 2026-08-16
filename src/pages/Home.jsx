import { useState } from "react";
import { Link } from "react-router-dom";
import articles from "../data/articles";

const BASES = [
  {
    value: 2,
    name: "Binary",
    thai: "ฐาน 2",
    code: "BIN"
  },
  {
    value: 8,
    name: "Octal",
    thai: "ฐาน 8",
    code: "OCT"
  },
  {
    value: 10,
    name: "Decimal",
    thai: "ฐาน 10",
    code: "DEC"
  },
  {
    value: 16,
    name: "Hexadecimal",
    thai: "ฐาน 16",
    code: "HEX"
  }
];

function Home() {

  const [fromBase, setFromBase] = useState(10);
  const [toBase, setToBase] = useState(2);
  const [input, setInput] = useState("42");

  const cleanInput = input.trim().toUpperCase();

  function isValid() {

    if (!cleanInput) return false;

    if (fromBase === 2)
      return /^[01]+$/.test(cleanInput);

    if (fromBase === 8)
      return /^[0-7]+$/.test(cleanInput);

    if (fromBase === 10)
      return /^[0-9]+$/.test(cleanInput);

    if (fromBase === 16)
      return /^[0-9A-F]+$/.test(cleanInput);

    return false;
  }

  const valid = isValid();

  let result = "";

  if (valid) {
    const decimal = parseInt(cleanInput, fromBase);

    result = decimal
      .toString(toBase)
      .toUpperCase();
  }

  function swap() {
    setFromBase(toBase);
    setToBase(fromBase);
  }

  return (
    <main>

      {/* HERO */}

      <section className="home-hero">

        <div className="hero-badge">
          ✦ NUMBER SYSTEM LEARNING
        </div>

        <h1>
          เข้าใจเลขฐาน
          <br />

          <span>
            ง่ายกว่าที่คิด
          </span>
        </h1>

        <p>
          เครื่องมือแปลงเลขฐานพร้อมบทเรียน
          สำหรับนักเรียน นักศึกษา และ Programmer
        </p>

        <div className="hero-actions">

          <a
            href="#converter"
            className="primary-button"
          >
            เริ่มแปลงเลขฐาน →
          </a>

          <Link
            to="/articles"
            className="secondary-button"
          >
            อ่านบทความ
          </Link>

        </div>

      </section>

      {/* BASE CARDS */}

      <section className="base-overview">

        {BASES.map((base) => (

          <div
            className="base-info-card"
            key={base.value}
          >

            <div className="base-number">
              {base.value}
            </div>

            <div>
              <strong>
                {base.name}
              </strong>

              <span>
                {base.thai} · {base.code}
              </span>
            </div>

          </div>

        ))}

      </section>

      {/* CONVERTER */}

      <section
        className="converter-section"
        id="converter"
      >

        <div className="section-heading">

          <div>
            <span>
              CONVERTER
            </span>

            <h2>
              เครื่องมือแปลงเลขฐาน
            </h2>

            <p>
              เลือกฐานต้นทางและฐานปลายทาง
              แล้วใส่ตัวเลขที่ต้องการ
            </p>
          </div>

          <div className="live-badge">
            ● พร้อมใช้งาน
          </div>

        </div>

        <div className="converter">

          <div className="converter-top">

            <div className="converter-field">

              <label>
                ฐานต้นทาง
              </label>

              <select
                value={fromBase}
                onChange={(e) =>
                  setFromBase(
                    Number(e.target.value)
                  )
                }
              >

                {BASES.map((base) => (

                  <option
                    key={base.value}
                    value={base.value}
                  >
                    {base.name} · {base.thai}
                  </option>

                ))}

              </select>

            </div>

            <button
              className="swap"
              onClick={swap}
            >
              ⇄
            </button>

            <div className="converter-field">

              <label>
                ฐานปลายทาง
              </label>

              <select
                value={toBase}
                onChange={(e) =>
                  setToBase(
                    Number(e.target.value)
                  )
                }
              >

                {BASES.map((base) => (

                  <option
                    key={base.value}
                    value={base.value}
                  >
                    {base.name} · {base.thai}
                  </option>

                ))}

              </select>

            </div>

          </div>

          <div className="number-input">

            <label>
              ตัวเลขที่ต้องการแปลง
            </label>

            <input
              value={input}
              onChange={(e) =>
                setInput(
                  e.target.value.toUpperCase()
                )
              }
              placeholder="เช่น 42"
            />

          </div>

          <div className="result">

            <div>
              <span>
                RESULT
              </span>

              <small>
                ผลลัพธ์
              </small>
            </div>

            <strong>
              {valid
                ? result
                : "ข้อมูลไม่ถูกต้อง"}
            </strong>

          </div>

          {valid && (

            <div className="calculation">

              <h3>
                💡 วิธีคิด
              </h3>

              <p>
                ขั้นตอนที่ 1 — แปลง
                {cleanInput}
                จากฐาน {fromBase}
                เป็นเลขฐานสิบ
              </p>

              <p>
                ขั้นตอนที่ 2 — แปลงเลขฐานสิบ
                เป็นฐาน {toBase}
              </p>

              <div className="formula">
                {cleanInput}
                <sub>{fromBase}</sub>
                {" "}
                =
                {" "}
                {result}
                <sub>{toBase}</sub>
              </div>

            </div>

          )}

        </div>

      </section>

      {/* ARTICLES */}

      <section className="home-articles">

        <div className="section-heading">

          <div>
            <span>
              KNOWLEDGE
            </span>

            <h2>
              เรียนรู้เรื่องเลขฐาน
            </h2>
          </div>

          <Link
            to="/articles"
            className="view-all"
          >
            ดูบทความทั้งหมด →
          </Link>

        </div>

        <div className="article-grid">

          {articles
            .slice(0, 3)
            .map((article) => (

              <Link
                key={article.id}
                to={`/articles/${article.slug}`}
                className="home-article"
              >

                <div>
                  {article.icon}
                </div>

                <span>
                  {article.category}
                </span>

                <h3>
                  {article.title}
                </h3>

                <p>
                  {article.description}
                </p>

                <strong>
                  อ่านต่อ →
                </strong>

              </Link>

            ))}

        </div>

      </section>

      {/* CTA */}

      <section className="cta">

        <div>
          <span>
            START LEARNING
          </span>

          <h2>
            อยากเข้าใจเลขฐานมากขึ้น?
          </h2>

          <p>
            อ่านบทความและทดลองแปลงเลขฐาน
            ได้จากที่เดียว
          </p>
        </div>

        <Link
          to="/articles"
          className="primary-button"
        >
          เริ่มเรียนรู้ →
        </Link>

      </section>

    </main>
  );
}

export default Home;