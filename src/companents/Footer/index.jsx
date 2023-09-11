import "./index.scss";
import Puma from "../../assets/images/puma.png";
import Rasm from "../../assets/images/group4.png";
const index = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__div">
            <div className="footer__div_weap">
              <span className="footer__div_weap--img">
                <img src={Puma} alt="" />
              </span>
              <p className="footer__div_weap--text">
                10 New Town Street, V2 5NW, Newstate. USA
              </p>
              <p className="footer__div_weap--gmail">
                lochinquvondiqov31@gmail.com
              </p>
              <div className="footer__div_weap--img">
                <img src={Rasm} alt="" />
              </div>
            </div>

            <ul className="footer__div_ul">
              <li className="footer__div_ul--list">
                <h3 className="footer__div_ul--list-title">Our services</h3>
              </li>
              <li className="footer__div_ul--list">
                <p className="footer__div_ul--list-text">About Us</p>
              </li>
              <li className="footer__div_ul--list">
                <p className="footer__div_ul--list-text">Feature</p>
              </li>
              <li className="footer__div_ul--list">
                <p className="footer__div_ul--list-text">Gallary</p>
              </li>
            </ul>

            <ul className="footer__div_ul">
              <li className="footer__div_ul--list">
                <h3 className="footer__div_ul--list-title">Support</h3>
              </li>
              <li className="footer__div_ul--list">
                <p className="footer__div_ul--list-text">About Us</p>
              </li>
              <li className="footer__div_ul--list">
                <p className="footer__div_ul--list-text">Feature</p>
              </li>
              <li className="footer__div_ul--list">
                <p className="footer__div_ul--list-text">Gallary</p>
              </li>
            </ul>

            <div className="footer__div_end">
              <h3 className="footer__div_end--title">Contact Us</h3>
              <p className="footer__div_end--text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <p className="footer__text">
            Copyright 2021 The PUMA All rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default index;
