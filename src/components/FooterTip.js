import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineFacebook } from "react-icons/ai";

const FooterTip = () => {
  return (
    <div className="footertip">
      <h2 className="contHead">Contact With Me </h2>
      <div className="links">
          <a title={'github'} className="icons" href="https://github.com/gryffindo">
            <FaGithub />
          </a>
          <a title={'linkedin'} className="icons" href="#">
            <FaLinkedin />
          </a>
          <a title={'sakibalhasan17442@gmail.com'} className="icons" href="mailto:sakibalhasan17442@gmail.com">
            <HiOutlineMail />
          </a>
          <a title={'facebook'} className="icons" href="https://www.facebook.com/profile.php?id=100029528390894">
            <AiOutlineFacebook />
          </a>
      </div>
    </div>
  );
};

export default FooterTip;
