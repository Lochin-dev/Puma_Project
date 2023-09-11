import Krasof from "../../assets/images/krasofka.png";
import Grup from "../../assets/images/grup.png";
import Video from "../../assets/images/video.png";
import Card from "../../UI/Card";
import List from "../../UI/List";

import Card1 from "../../assets/images/card1.png";
import Card2 from "../../assets/images/card2.png";
import Card3 from "../../assets/images/card3.png";

import Boots1 from "../../assets/images/boots1.png";
import Boots2 from "../../assets/images/boots2.png";
import Boots3 from "../../assets/images/boots3.png";
import Boots4 from "../../assets/images/boots4.png";

import Anna1 from "../../assets/images/anna1.png";
import Anna2 from "../../assets/images/anna2.png";

import End from "../../assets/images/end.png";

import "../scss/layout/_all-layouts.scss";

const index = () => {
  const data = [
    {
      id: 1,
      images: Card1,
      title: "Quality",
      span: "Read More",
    },
    {
      id: 2,
      images: Card2,
      title: "Flexible",
      span: "Read More",
    },
    {
      id: 3,
      images: Card3,
      title: "Long Lasting",
      span: "Read More",
    },
  ];

  const list = [
    {
      id: 1,
      images: Boots1,
      title: "Puma RS-X Bold",
      size: "Dubble-XL",
      narxi: "$200",
    },
    {
      id: 2,
      images: Boots2,
      title: "Puma Sneakers",
      size: "Dubble-XL",
      narxi: "$200",
    },
    {
      id: 3,
      images: Boots3,
      title: "Puma Ferrari",
      size: "Dubble-XL",
      narxi: "$200",
    },
    {
      id: 4,
      images: Boots4,
      title: "Puma Running",
      size: "Dubble-XL",
      narxi: "$200",
    },
  ];

  return (
    <>
      <main>
        <section id="home" className="life">
          <div className="container">
            <div className="life__div">
              <div className="life__div_wrap">
                <h1 className="life__div_wrap--title">
                  Life is better in running shoes.
                </h1>
                <p className="life__div_wrap--text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eu
                  ultrices ut
                </p>
              </div>
              <div className="life__img">
                <img src={Krasof} alt="krasof" />
              </div>
            </div>
            <img className="life__img" src={Grup} alt="rasm" />
          </div>
        </section>

        <section className="video" id="about">
          <div className="container vid">
            <div className="video__wrap">
              <span className="video__wrap_span">VIDEO</span>
              <h1 className="video__wrap_title">
                Desire the feel of satisfaction.
              </h1>
              <p className="video__wrap_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                auctor proin amet sagittis semper ipsum at lectus. At{" "}
              </p>
            </div>
            <div className="">
              <img src={Video} alt="opa" />
            </div>
          </div>
        </section>

        <section className="intro" id="feature">
          <div className="container">
            <span className="intro__span">Feature</span>
            <h1 className="intro__title">We have best feature in Shoes</h1>
            <div className="intro__wrap">
              {data.map((el) => {
                return <Card user={el} key={el.id} />;
              })}
            </div>
          </div>
        </section>

        <section className="gallary" id="gallary">
          <div className="container">
            <span className="gallary__span">GALLARY</span>
            <h1 className="gallery__title">40+YEARS’ EXPRERIENCE</h1>
            <div className="gallary__wrap">
              <ul className="gallery__wrap_ul">
                <li className="gallery__wrap_ul--li">
                  <h3 className="gallery__wrap_ul--li-title">Categories:</h3>
                </li>
                <li className="gallery__wrap_ul--list">All</li>
                <li className="gallery__wrap_ul--list">Maly</li>
                <li className="gallery__wrap_ul--list">Female</li>
                <li className="gallery__wrap_ul--list">Kids</li>
              </ul>
              <span className="gallary__wrap_span">
                <i className="bi bi-chevron-left"></i>
                <i className="bi bi-chevron-right"></i>
              </span>
            </div>
            <div className="gallary__boots">
              {list.map((el) => {
                return <List data={el} key={el.id} />;
              })}
            </div>
          </div>
        </section>

        <section className="anna">
          <div className="container">
            <h1 className="anna__title">Testimonials</h1>
            <div className="flex">
              <div className="anna__img">
                <img src={Anna1} alt="" />
              </div>
              <div className="anna__wrap">
                <ul className="anna__wrap_ul">
                  <li className="anna__wrap_ul--list">
                    <img src={Anna2} alt="" />
                  </li>
                  <li className="anna__wrap_ul--list">
                    {" "}
                    <span className="gallary__wrap_span iconca">
                      <i className="bi bi-chevron-left"></i>
                      <i className="bi bi-chevron-right"></i>
                    </span>
                  </li>
                </ul>
                <h2 className="anna__wrap_one">
                  Their services was best and friendly
                </h2>
                <p className="anna__wrap_text">
                  Lorem ipsum dolor sit amet, consectetur adipis cing elit.
                  Eleifend
                </p>
                <h3 className="anna__wrap_two">Anna Paulwer</h3>
                <p className="anna__wrap_text">Athletic</p>
              </div>
            </div>
          </div>
        </section>

        <section className="end">
          <div className="container">
            <div className="endbg">
              <div className="end__img">
                <img src={End} alt="rasm" />
              </div>
              <div className="end__wrap">
                <h1 className="end__wrap_title">Sign Up to our Newsletter</h1>
                <p className="end__wrap_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque in elementum tempus, vestibulum faucibus tortor
                  odio elit.
                </p>
                <div className="end__wrap_div">
                  <input
                    className="end__wrap_div--input"
                    type="text"
                    placeholder="Enter your email address"
                  />{" "}
                  <button className="end__wrap_div--btn">Send</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default index;
