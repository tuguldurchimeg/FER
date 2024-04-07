import React from "react";
import "./Help.css";
import Header from "./Header";
import logo1 from "./assets/image 5.svg";
import logo2 from "./assets/Rectangle 4.svg";
import logo3 from "./assets/image 6.svg";
const Help = () => {
  return (
    <div>
      <Header />
      <div className="body">
        <div className="main-help">
          <h3>
            Эдгээр санал болгож буй төвүүдийг мэргэжлийн болон ёс зүйн талаас нь
            үнэлэлт өгч санал болгож буй болно.
          </h3>
          <div className="comment">
            <p>
              Эерэг ДАДАЛ сэтгэл зүйн төв:
              <br />
              <a href="https://www.facebook.com/PositiveDadal">
                Цахим хаяг: https://www.facebook.com/PositiveDadal
              </a>
            </p>
            <img src={logo1} alt="any" />
          </div>
          <div className="comment">
            <p>
              Гэр бүлийн сургууль:
              <br />{" "}
              <a href="https://www.familycollege.mn">
                Цахим хаяг: https://www.familycollege.mn/
              </a>
            </p>
            <img src={logo2} alt="any" className="sondgoi" />
          </div>
          <div className="comment">
            <p>
              Сэтгэл заслын хөгжлийн хүрээлэн:
              <br />{" "}
              <a href="https://www.facebook.com/p/%D0%A1%D1%8D%D1%82%D0%B3%D1%8D%D0%BB-%D0%B7%D0%B0%D1%81%D0%BB%D1%8B%D0%BD-%D1%85%D3%A9%D0%B3%D0%B6%D0%BB%D0%B8%D0%B9%D0%BD-%D1%85%D2%AF%D1%80%D1%8D%D1%8D%D0%BB%D1%8D%D0%BD-100078635236945/?paipv=0&eav=Afbw7NBBiKwN9TNV5KDT2VvgkZdbt6yI1aI_ZikPRoqrL5JX4eQ3aYfYDFDGFBJBF64&_rdr">
                Цахим хаяг: shorturl.at/brCIZ
              </a>
            </p>
            <img src={logo3} alt="any" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
