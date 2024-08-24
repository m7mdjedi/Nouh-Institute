import image from "../assets/mos13.jfif";
import classes from "../styles/acceptingAndHelping.module.css";
import schoolEntrance from "../assets/mos24.jfif";
import conferenceRoom from "../assets/mos22.jfif";
import { useEffect } from "react";

const AcceptingAndHelping = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className={classes.acceptingAndHelping}>
      <div>
        <img src={image} />
        <div></div>
        <div>
          <h2>التسجيل والمساعدة </h2>
          <p> أهلا وسهلا بك يا طالب العلم في معهدنا و شكرا لك لاخيارنا  </p>
        </div>
      </div>
      <div>
        <p>
        يكون نظام الدراسة في المعهد هو النظام الفصلي بواقع فصلين للسنة الدراسية الواحدة كما يلي        </p>
        <p>
        الفصل الدراسي الاول: يبدأ الفصل الدراسي الاول في 10 سبتمبر وينتهي في 25 ديسمبر من كل عام وفترة الاختبارات تبدأ 1 يناير الى 28 أو 29 فبراير.        </p>
        <p>
        الفصل الدراسي الثاني: يبدأ الفصل الدراسي الثاني في 5 مارس وينتهي في 30 يونيو وفترة الاختبارات تبدأ من 1 يوليو الى 31 آب.
        </p>
      </div>
      <div>
        <div>
          <h2> حقائق </h2>
          <img src={conferenceRoom} />
        </div>
        <div>
          <div>
            <h3>1000</h3>
            <p> أكثر من 1000 طالب وطالبة حفظوا القرآن كاملا   </p>
          </div>
          <div>
            <h3>100+</h3>
            <p>أكثر من مئة مدرّس ومدرّسة </p>
          </div>
          <div>
            <h3>#50</h3>
            <p>أكثر من 50 حافظ وحافظة سنويا  </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img src={schoolEntrance} />
        </div>
        <div>
          <h3>ندعوكم للتسجيل في العام الجديد 2023 -2024  </h3>
          <ul>
            <li>
            التسجيل للدراسة في المعهد يكون مفتوحا طيلة أيام السنة
            </li>
            <li>
            اذا قام الطالب بالتسجيل على فصل دراسي معين بعد بدايه بثلاثة أسابيع لا يحق للطالب الالتحاق بهذا الفصل الدراسي وانما يُسَجَل الطالب في الفصل الدراسي الذي يليه.    
                    </li>

          </ul>
          <h3>متطلبات منح شهادة المعهد
          </h3>
          <ul>
  
            <li>
            جتياز المراحل الاربع.            </li>
            <li>
            اكمال ختم القران كاملا على يد معلم يحدد من قبل المعهد.
            </li>
            <li> 
            حفظ سورتي البقرة وآل عمران.
            </li>
            <li> 
            اجتياز الاختبار الشفوي للجنة منح الاجازة.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AcceptingAndHelping;
