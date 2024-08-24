import React, { useEffect, useState } from "react";
import buildingImg from "../assets/mos9.jfif";
import logoImg from "../assets/mos2.png";
import classes from "../styles/home.module.css";
import { useObserver } from "../hooks/useObserver";
import boxingImg from "../assets/mos5.jfif";
import Slider from "../components/Slider";
import TopBottomModal from "../components/TopBottomModal";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [visible, setVisible] = useState(false);

  const ref = React.useRef<HTMLInputElement>(null);
  const ref1 = React.useRef<HTMLInputElement>(null);
  const ref2 = React.useRef<HTMLInputElement>(null);

  const isVisible2 = useObserver(ref2);
  const isVisible1 = useObserver(ref1);
  const isVisible = useObserver(ref) || visible;
  if (isVisible && !visible) {
    setVisible(true);
  }

  return (
    <div className={classes.home}>
      <div>
        <div className={classes.typewriter}>
          <h1> ” خيركم من تعلم القرآن وعلمه ” </h1>
        </div>
      </div>
      <TopBottomModal link="register/login" text="ابدأ الآن" />
      {/* <Video video={shcoolVid} width="100%" height="100%" />  */}
      <Slider />

      <div className={classes.homeAboutUs}>
        <div ref={ref} dir="rtl" className={classes.homeAboutUsTextDiv}>
          <h1 className={`${isVisible ? classes.show : ""}`}>عن المعهد</h1>
          <p>
            معهد نوح لتعليم وتحفيظ القرآن الكريم يعد واحداً من المراكز المتخصصة
            في تعليم القرآن الكريم باستخدام الوسائل التعليمية الحديثة ”أونلاين”
            باللغتين العربية والإنجليزية، مع معلمين مؤهلين وذوي خبرة، وما يميزه
            أيضاً هو مجانية التعليم بشكل كامل، كما يتم منح الخريجين من المعهد
            إجازة متصلة السند إلى النبي (صلى الله عليه وآله وسلم) برواية حفص عن
            عاصم ورواية ورش عن نافع.
          </p>
        </div>
        <div className={classes.homeAboutUsImgDiv}>
          {/* <Video video={logoVid} width="100%" height="100%"/> */}
          <img src={logoImg} />
        </div>
      </div>
      <div className={classes.homeLocation}>
        <div ref={ref1} dir="rtl" className={classes.homeLocationTextDiv}>
          <h1 className={`${isVisible1 ? classes.show : ""}`}> </h1>
        </div>
        <div className={classes.homeLocationImgDev}>
          <img src={boxingImg} />
        </div>
      </div>
      <div className={classes.home_about_school}>
        <div ref={ref2} dir="rtl" className={classes.home_about_school_text}>
          <h1 className={`${isVisible2 ? classes.show : ""}`}>رسالتنا</h1>
          <p>
            الاهتمام بكتاب الله عز وجل تلاوةً وحفظاً وتعلمه والعمل به تلبيةً لما
            جاء في حديث النبي صلى الله عليه وسلم ” خيركم من تعلم القرآن وعلمه ”
          </p>
        </div>
        <div className={classes.home_about_school_img}>
          {/* <Video video={logoVid} width="100%" height="100%"/> */}
          <img src={buildingImg} />
        </div>
      </div>
    </div>
  );
};

export default Home;
