import image from "../assets/mos8.jfif";
import classes from "../styles/aboutUs.module.css";

import schoolEntrance from "../assets/mos13.jfif";
import schoolEntrance2 from "../assets/mos15.jfif";
import schoolEntrance3 from "../assets/mos16.jfif";
import conferenceRoom from "../assets/mos17.jfif";
import mos10 from '../assets/mos11.jfif'

import { useEffect } from "react";
const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.aboutUs}>
      <div>
        <img src={image} />
        <div></div>
        <div>
          <h2> حول </h2>
          <p>
               نسعى دائما لتعليم أبناءنا كتاب و دين اللّه عزّ وجلّ سائلين المولى الرضا والقبول 
          </p>
        </div>
      </div>
      <div>
      تعليم وتحفيظ القرآن الكريم في بيئة مناسبة من خلال متخصصين مؤهلين قادرين على تخريج طلبة بكفاءة وجودة عالية من خلال بناء جيل قرآني متقن لكتاب الله، ملم بأحكام التجويد، ويمتلك المهارة في تلاوته.
      </div>
      <div>
        <div>
          <img src={mos10}/>
          {/* <Video video={schoolVid} width="100%" height="600px" /> */}
          {/* <Slider/> */}
        </div>
        <div>
          <h2>لماذا نحن ؟</h2>
          <div>
            <p>
            تعليم وتحفيظ القرآن الكريم في بيئة مناسبة من خلال متخصصين مؤهلين قادرين على تخريج طلبة بكفاءة وجودة عالية 
            </p>
            <p>
            بناء جيل قرآني متقن لكتاب الله، ملم بأحكام التجويد، ويمتلك المهارة في تلاوته.            </p>
            <p>
            الاهتمام بكتاب الله عز وجل تلاوةً وحفظاً وتعلمه والعمل به تلبيةً لما جاء في حديث النبي صلى الله عليه وسلم “خيركم من تعلم القرآن وعلمه”.
            </p>
            <p>
            مجانية التعليم بشكل كامل، الالتزام بالقيم الاسلامية، التطوير المستمر، الجودة والكفاءة في التعليم، الصدق والإخلاص لوجه الله تعالى.            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img src={schoolEntrance} />
        </div>
        <div>
          <img src={schoolEntrance2} />
        </div>
        <div>
          <img src={schoolEntrance3} />
        </div>
      </div>
      <div>
        <div>
          <h3>20</h3>
          <p> مدرس ومدرسة</p>
        </div>
        <div>
          <h3>+15</h3>
          <p>أكثر من 15 سنة في تدريس القرآن</p>
        </div>
        <div>
          <h3>50</h3>
          <p> أكثر من 50 حافظ وحافظة للقرآن سنويا</p>
        </div>
      </div>
      <div>
        <div>
          <h3>رسالتنا  </h3>
          <p>
            {" "}
            الاهتمام بكتاب الله عز وجل تلاوةً وحفظاً وتعلمه والعمل به تلبيةً لما جاء في حديث النبي صلى الله عليه وسلم “خيركم من تعلم القرآن وعلمه”.
          </p>
        </div>
        <div>
          <img src={conferenceRoom} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
