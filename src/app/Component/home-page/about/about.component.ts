import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructionItems:any[]=
 [
  {
    name:'إزالة الصبغ',
    description:'ازالة طبقات الدهان القديمة بسهولة ويسر بمساعدة مقاول إزالة الدهانات القديمة'
  ,image:"../../../../assets/Images/إزالة الصبغ/1.jpg"
  },
  {
    name:'إنشاء مباني',
    description:'وتشمل أعمال الأساسات والجدران والأعمدة والادراج زالكمرات والبلاطات والطوب والتصميم'
  ,image:"../../../../assets/Images/إنشاء مباني/3.jpg"
  },
  {
    name:'إزالة الدهانات',
    description:'إزالت الدهانات باستخدام معدات خاصة، مثل: مكشطة الدهان أو ورقة صنفرة أو مسدس حراري وتعتمد الطريقة المستخدمة على حجم ميزانيتك ونوع الجدار والدهان ومهارتك في استخدام الأدوات'
  ,image:'../../../../assets/Images/ازالة الدهانات/1.jpg'
  },
  {
    name:'تشطيبات',
    description:'خدمات تشطيب الشقق والفيلات والقصور المتكاملة تشمل كافة أعمال التصميم الداخلي والخارجي، الديكورات، اللوحات الهندسية والمخططات، الإشراف علي كافة أعمال التشطيبات طبقاً للكود المعماري ذو الصله، تصنيع الأثاث المنزلي والمطابخ، اللاندسكيب وحمامات السباحة، المنازل الذكية والتأمين، منذ إستلام كافة أنواع الوحدات السكنية وحتى التسليم على المفتاح'
  ,image:"../../../../assets/Images/تشطيبات/1.jpg"
  },
  {
    name:'رصف الطرق',
    description:'هو الطبقة السطحية المتينة الموضوعة في مساحة مخصصة لتتحمل حمولات السير أو المركبات'
  ,image:"../../../../assets/Images/رصف طريق/1.jpg"
  },
  {
    name:'قص الخرسانة',
    description:'متخصصون بقص وتخريم الخرسانة المسلحة بأحدث الأجهزة . . متطورون دائما ومعنا افضل الفنيين المهره وبأفضل الاسعار التي تنافس جميع منافسيينا في السوق بدون إحداث أي إهتزاز او تصدعات للمباني لأعمال'
  ,image:"../../../../assets/Images/قص خرسانة/1.jpg"
  }
]

totalCount: number = 6;
pageNumber: number = 1;
pageSize: number = 6;
pageElement=0;
buttonArray:number[]=[];

ngOnInit(): void {
  this.pageElement=Math.floor(this.totalCount/this.pageSize)+(this.totalCount%this.pageSize>0?1:0);

  this.buttonArray= Array(this.pageElement).fill(0).map((_, index) => index + 1);
  console.log("ButtonToArray",this.buttonArray);
}

previousPage() {
  if (this.pageNumber > 1) {
    this.pageNumber--;
  }
}

nextPage() {
  if (this.pageNumber * this.pageSize < this.totalCount) {
    this.pageNumber++;
  }
}

setPage(pnumber:number){
  this.pageNumber=pnumber;
}
}
