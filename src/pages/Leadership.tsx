import image from "../assets/mos7.jfif";
import classes from "../styles/leadership.module.css";
import men1 from "../assets/mos19.jfif";
import men2 from '../assets/mos20.jfif'
import men3 from '../assets/mos17.jfif'
import men4 from '../assets/mos21.jfif'
import men5 from '../assets/mos22.jfif'
import men6 from '../assets/mos23.jfif'

import { useEffect } from "react";

const leadershipAr = [
  {
    id: 1,
    name: "تعليم القاعدة النورانية للمبتدئين",
    position: "يتم تعليم المبتدئين من الأبناء والبنات حروفَ الهجاء العربية من خلال كتابِ القاعدة النورانية من تأليف فضيلة الشيخ نور محمد حقاني رحمه اللّه.... ",
    image: men3,
  },
  {
    id: 2,
    name: "تحفيظ القرآن الكريم غيبا",
    position:"وتكون مدة الدراسة فيه خمسة أيام في الأسبوع لمدة ساعتين ونصف يومياً ويتم تقسيمُ الوقت إلى خمسة أقسام رئيسية على النحو التالي: القسم الأول: مدته نصف الساعة مخصصةٌ لتسميع الدرسِ الجديدِ...",
    image: men1,
  },
  {
    id: 3,
    name: "براعم الفرقان",
    position: "و مخصص لتعليم الأطفال المتراوح أعمارهم ما بين ( أربع إلى ما دون ست سنوات – بنين و بنات) حيث يتم إعدادهم للالتحاق مستقبلا بمركز الفرقان.... ",
    image: men2,
  },
  {
    id: 4,
    name: "تعليم التلاوة بالنظر ",
    position: "وهو أن يتعلم الابن أو الابنة قراءة القرآن الكريم القراءة الصحيحة المجودة المرتلة بالنظر، مع حفظ بعض الأجزاء وهو يمثل الشق الواجب على جميع المسلمين تعلمه....",
    image: men4,
  },
  {
    id: 5,
    name: "تعليم الآباء والأمهات",
    position:"هو مخصص لتعليم كبار السن من الآباء و الأمهات لقراءة القرآن الكريم بالنظر ، و حفظ بعض سور القرآن الكريم، والحمد لله هذا القسم في تطور مستمر...." ,
    image: men5,
  },
  {
    id: 6,
    name: "تعليم  الحديث الشريف",
    position: " يتم تحفيظ وتعليم الحديث الشريف من خلال كتب السنة النبويّة من صحيح البخاري وصحيح مسلم وأخرى غيرها....",
    image: men6,
  },

];

const Leadership = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className={classes.leadership}>
      <div>
        <img src={image} />
        <div></div>
        <div>
          <h2> منهاجنا </h2>
          <p>
           تعليم القرآن الكريم والحديث الشريف للكبار والصغار 
            </p>
        </div>
      </div>
  

      <div>
        {leadershipAr.map((ele) => (
          <div>
            <div>
              <img src={ele.image} />
            </div>
            <div>
              <h3>{ele.name}</h3>
              <p>{ele.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;
