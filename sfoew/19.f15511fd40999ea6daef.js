(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{EgSJ:function(n,t,o){"use strict";o.r(t),o.d(t,"ShowFormsModule",(function(){return N}));var e=o("ofXK"),i=o("tyNb"),c=o("fXoL"),r=o("0+vP"),a=o("4/Mx"),d=o("bSwM"),s=o("EsRS"),g=o("QibW");function l(n,t){if(1&n&&(c.bc(0,"div",6),c.bc(1,"h1",7),c.Nc(2),c.ac(),c.bc(3,"p",8),c.Nc(4),c.ac(),c.ac()),2&n){const n=c.mc(2);c.Jb(2),c.Oc(n.form.title),c.Jb(2),c.Oc(n.form.description)}}function p(n,t){if(1&n){const n=c.cc();c.bc(0,"div",20),c.bc(1,"input",21),c.ic("ngModelChange",(function(t){return c.Cc(n),c.mc(4).textcourt=t})),c.ac(),c.ac()}if(2&n){const n=c.mc(4);c.Jb(1),c.sc("ngModel",n.textcourt)}}function b(n,t){if(1&n){const n=c.cc();c.bc(0,"div",20),c.bc(1,"input",22),c.ic("ngModelChange",(function(t){return c.Cc(n),c.mc(4).Nomberdejours=t})),c.ac(),c.ac()}if(2&n){const n=c.mc(4);c.Jb(1),c.sc("ngModel",n.Nomberdejours)}}function m(n,t){if(1&n&&(c.bc(0,"div",25),c.bc(1,"div",26),c.bc(2,"div",27),c.bc(3,"mat-checkbox",28),c.bc(4,"h1",29),c.Nc(5),c.ac(),c.ac(),c.ac(),c.ac(),c.ac()),2&n){const n=t.index,o=c.mc(2).index,e=c.mc().$implicit;c.Jb(5),c.Oc(e.questions[o].optioncm[n].text)}}function u(n,t){if(1&n&&(c.bc(0,"div",23),c.Lc(1,m,6,1,"div",24),c.ac()),2&n){const n=c.mc().index,t=c.mc().$implicit;c.Jb(1),c.sc("ngForOf",t.questions[n].optioncm)}}function f(n,t){if(1&n&&(c.bc(0,"div"),c.bc(1,"div",30),c.bc(2,"div",31),c.bc(3,"div",32),c.Wb(4,"ng5-slider",33),c.ac(),c.ac(),c.ac(),c.ac()),2&n){const n=c.mc(2).index,t=c.mc().$implicit,o=c.mc(2);c.Jb(4),c.sc("options",o.sliderMakeOptions(t.questions[n]))}}function x(n,t){if(1&n&&(c.bc(0,"div",23),c.Lc(1,f,5,1,"div",5),c.ac()),2&n){const n=c.mc().index,t=c.mc().$implicit;c.Jb(1),c.sc("ngForOf",t.questions[n].options)}}function h(n,t){1&n&&(c.bc(0,"div",23),c.bc(1,"div",30),c.bc(2,"div",31),c.bc(3,"div",32),c.bc(4,"div",26),c.bc(5,"div",34),c.Wb(6,"img",35),c.Wb(7,"input",36),c.ac(),c.ac(),c.ac(),c.ac(),c.ac(),c.ac())}function O(n,t){if(1&n&&(c.bc(0,"div"),c.bc(1,"div",30),c.bc(2,"div",1),c.bc(3,"div",26),c.Nc(4),c.bc(5,"div",27),c.bc(6,"div",37),c.bc(7,"div",38),c.Wb(8,"input",39),c.ac(),c.bc(9,"div",38),c.Wb(10,"input",40),c.ac(),c.bc(11,"div",38),c.Wb(12,"input",41),c.ac(),c.bc(13,"div",38),c.Wb(14,"input",42),c.ac(),c.bc(15,"div",38),c.Wb(16,"input",43),c.ac(),c.ac(),c.ac(),c.ac(),c.ac(),c.ac(),c.ac()),2&n){const n=t.$implicit;c.Jb(4),c.Pc(" ",n.text,": ")}}function M(n,t){if(1&n&&(c.bc(0,"div",23),c.Lc(1,O,17,1,"div",5),c.ac()),2&n){const n=c.mc().index,t=c.mc().$implicit;c.Jb(1),c.sc("ngForOf",t.questions[n].optionsSaint)}}function C(n,t){if(1&n&&(c.bc(0,"h1",29),c.Nc(1),c.ac()),2&n){const n=c.mc().index,t=c.mc(2).index,o=c.mc().$implicit;c.Jb(1),c.Pc(" ",o.questions[t].options[n].text,"")}}function P(n,t){if(1&n){const n=c.cc();c.bc(0,"mat-radio-button",47),c.ic("change",(function(o){c.Cc(n);const e=t.index,i=c.mc(2).index,r=c.mc(),a=r.$implicit,d=r.index,s=c.mc(2);return s.caseCoher(a.questions[i].options[e],o,d,"question"+e+","+d+","+i,"Q ("+d+","+i+")"),s.getdataCaseCoher(a.questions[i].options[e],a.questions[i],i,e,d)})),c.Lc(1,C,2,1,"h1",48),c.bc(2,"div",49),c.Wb(3,"img",50),c.ac(),c.ac()}if(2&n){const n=t.$implicit,o=t.index,e=c.mc(2).index,i=c.mc().$implicit;c.sc("value",n.text),c.Jb(1),c.sc("ngIf",i.questions[e].options[o].text.length>0),c.Jb(2),c.sc("src",i.questions[e].options[o].image,c.Ec)}}function _(n,t){if(1&n){const n=c.cc();c.bc(0,"div",23),c.bc(1,"div",25),c.bc(2,"div",26),c.bc(3,"div",27),c.bc(4,"mat-radio-group",44),c.ic("ngModelChange",(function(t){return c.Cc(n),c.mc(4).favoriteSeason=t})),c.Lc(5,P,4,3,"mat-radio-button",45),c.ac(),c.ac(),c.Wb(6,"div",46),c.ac(),c.ac(),c.ac()}if(2&n){const n=c.mc().index,t=c.mc().$implicit,o=c.mc(2);c.Jb(4),c.sc("ngModel",o.favoriteSeason),c.Jb(1),c.sc("ngForOf",t.questions[n].options)}}function w(n,t){if(1&n&&(c.bc(0,"th",52),c.Nc(1),c.ac()),2&n){const n=t.$implicit;c.Jb(1),c.Qc("",n.title," || ",n.score,"")}}function v(n,t){1&n&&(c.bc(0,"td"),c.Wb(1,"mat-checkbox",55),c.ac())}function k(n,t){if(1&n&&(c.bc(0,"tr"),c.bc(1,"th",54),c.Nc(2),c.ac(),c.Lc(3,v,2,0,"td",5),c.ac()),2&n){const n=t.$implicit,o=c.mc(2).index,e=c.mc().$implicit;c.Jb(2),c.Oc(n.title),c.Jb(1),c.sc("ngForOf",e.questions[o].grille.scoreS)}}function y(n,t){if(1&n&&(c.bc(0,"div",23),c.bc(1,"table",51),c.bc(2,"thead"),c.bc(3,"tr"),c.bc(4,"th",52),c.Nc(5,"#"),c.ac(),c.Lc(6,w,2,2,"th",53),c.ac(),c.ac(),c.bc(7,"tbody"),c.Lc(8,k,4,2,"tr",5),c.ac(),c.ac(),c.ac()),2&n){const n=c.mc().index,t=c.mc().$implicit;c.Jb(6),c.sc("ngForOf",t.questions[n].grille.scoreS),c.Jb(2),c.sc("ngForOf",t.questions[n].grille.options)}}function q(n,t){if(1&n&&(c.bc(0,"div",11),c.bc(1,"div",12),c.bc(2,"div",13),c.bc(3,"div",14),c.bc(4,"div",15),c.bc(5,"h2",16),c.Nc(6),c.ac(),c.ac(),c.ac(),c.bc(7,"div",17),c.Lc(8,p,2,1,"div",18),c.Lc(9,b,2,1,"div",18),c.Lc(10,u,2,1,"div",19),c.Lc(11,x,2,1,"div",19),c.Lc(12,h,8,0,"div",19),c.Lc(13,M,2,1,"div",19),c.Lc(14,_,7,2,"div",19),c.Lc(15,y,9,2,"div",19),c.ac(),c.ac(),c.ac(),c.ac()),2&n){const n=t.index,o=c.mc().$implicit;c.Jb(6),c.Pc(" ",o.questions[n].title," "),c.Jb(2),c.sc("ngIf","Text court"==o.questions[n].type),c.Jb(1),c.sc("ngIf","Nomber de jours"==o.questions[n].type),c.Jb(1),c.sc("ngIf","Choix multiples"==o.questions[n].type),c.Jb(1),c.sc("ngIf","Range Bar"==o.questions[n].type),c.Jb(1),c.sc("ngIf","VISUELLE ANALOGIQUE"==o.questions[n].type),c.Jb(1),c.sc("ngIf","Grille de cases \xe0 cocher"==o.questions[n].type),c.Jb(1),c.sc("ngIf","Cases \xe0 cocher"==o.questions[n].type),c.Jb(1),c.sc("ngIf","Grille de cases \xe0 cocher 2"==o.questions[n].type)}}function J(n,t){if(1&n&&(c.bc(0,"div"),c.bc(1,"div"),c.bc(2,"h3",9),c.Nc(3),c.ac(),c.ac(),c.Lc(4,q,16,9,"div",10),c.ac()),2&n){const n=t.$implicit,o=t.index;c.Jb(3),c.Qc(" section : ",n.title," ",o," "),c.Jb(1),c.sc("ngForOf",n.questions)}}function L(n,t){if(1&n&&(c.bc(0,"div",1),c.bc(1,"div",2),c.bc(2,"div",3),c.Lc(3,l,5,2,"div",4),c.ac(),c.ac(),c.Lc(4,J,5,3,"div",5),c.ac()),2&n){const n=c.mc();c.Jb(3),c.sc("ngIf",n.form),c.Jb(1),c.sc("ngForOf",n.form.sections)}}const F=[{path:"",component:(()=>{class n{constructor(n,t,o){this.PatForms=n,this.data=t,this.router=o,this.idForm2=this.router.snapshot.paramMap.get("id"),this.PatForms.getFormsDoctById(this.idForm2).subscribe(n=>{this.form=n,console.log(this.form)})}sliderMakeOptions(n){return console.log(n.dataRange),{floor:10,ceil:100,step:10,showTicks:!0,stepsArray:n.dataRange}}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)(c.Vb(r.a),c.Vb(a.a),c.Vb(i.a))},n.\u0275cmp=c.Pb({type:n,selectors:[["app-show-forms"]],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"col-12","col-md-12","col-lg-11","mx-auto"],[1,"card"],["class","card-header",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"card-header"],[1,"form-title"],[1,"fdescr"],[1,"section-title",2,"color","#093b84","font-size","25px"],["class","col-sm-12 col-md-12 col-lg-11 mx-auto",4,"ngFor","ngForOf"],[1,"col-sm-12","col-md-12","col-lg-11","mx-auto"],[1,"card","quesiton-look"],[1,"row","card-body","col-12"],[1,"row","w-100"],[1,"col-lg-12"],[1,"question-title"],[1,"row","w-100","mt-1"],["class","col-lg-8 col-sm-12",4,"ngIf"],["style","width: 100%;","class","col-lg-12 col-sm-12 w-100",4,"ngIf"],[1,"col-lg-8","col-sm-12"],["disabled","",1,"question-short-input-response",3,"ngModel","ngModelChange"],["value","nb jours","disabled","",1,"question-short-input-response",3,"ngModel","ngModelChange"],[1,"col-lg-12","col-sm-12","w-100",2,"width","100%"],["style","width: 100%;",4,"ngFor","ngForOf"],[2,"width","100%"],[1,"row"],[1,"col"],["disabled","",1,"m-2","w-100",2,"width","100%"],[1,"textt"],[1,"row","m-2"],[1,"col-lg-8","col-sm-12",2,"padding-left","3%"],[1,"simple-slider"],[3,"options"],[1,"container23",2,"width","600px"],["src","../../../../../assets/Douleurgraph1.png","alt","",1,"img-thumbnail"],["type","range","min","0","max","10","value","5","name","slider","id","slider",1,"slider"],[1,"form-check"],[1,"form-check","form-check-inline"],["input","","type","radio","ngmodel","check1","disabled","",1,"form-check-input"],["input","","type","radio","ngmodel","check2","disabled","",1,"form-check-input"],["input","","type","radio","ngmodel","check3","disabled","",1,"form-check-input"],["input","","type","radio","ngmodel","check4","disabled","",1,"form-check-input"],["input","","type","radio","ngmodel","check5",1,"form-check-input"],["aria-labelledby","example-radio-group-label",1,"example-radio-group",3,"ngModel","ngModelChange"],["class","m-2 w-100","style","width: 100%;",3,"value","change",4,"ngFor","ngForOf"],[1,"col-2"],[1,"m-2","w-100",2,"width","100%",3,"value","change"],["class","textt",4,"ngIf"],[2,"width","100%","margin-left","44px","margin-top","-16px"],["alt","",1,"img-thumbnail",2,"width","250px",3,"src"],[1,"table","table-borderless"],["scope","col"],["scope","col",4,"ngFor","ngForOf"],["scope","row"],["disabled","",1,"inp","col-md-7","col-lg-7","col-sm-9","col-xs-9","col-9"]],template:function(n,t){1&n&&c.Lc(0,L,5,2,"div",0),2&n&&c.sc("ngIf",t.form)},directives:[e.m,e.l,d.a,s.b,g.b,g.a],styles:[".card[_ngcontent-%COMP%]:hover{transform:scale(1.02)}.card[_ngcontent-%COMP%]{cursor:pointer;box-shadow:5px 5px 5px #828181}.box[_ngcontent-%COMP%]{width:200px;height:50px;background-color:#fff;border-radius:3px;display:flex;align-items:center;padding:20px}.box[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{font-size:20px;color:#777}.box[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{flex:1;width:200px;height:40px;background-color:initial;border:none;outline:none;font-size:15px;padding-left:10px}h3[_ngcontent-%COMP%]{color:#414549;font-family:Google Sans,Roboto,Arial,sans-serif;font-size:14px;font-weight:500;letter-spacing:.15px;line-height:18px;margin-left:2px;vertical-align:top}h3[_ngcontent-%COMP%], span[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}span[_ngcontent-%COMP%]{color:#80868b;font-size:12px;letter-spacing:.3px;line-height:24px;margin-left:5px;vertical-align:middle}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current{background:#153d77}div.displayed[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto}.container-login100-form-btn[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-wrap:wrap;justify-content:center;padding-top:20px}.login100-form-btn[_ngcontent-%COMP%]{font-family:Montserrat-Bold;font-size:15px;line-height:1.5;color:#fff;text-transform:uppercase;width:100%;height:50px;border-radius:25px;background:#153d77;display:flex;justify-content:center;align-items:center;padding:0 25px;transition:all .4s}.login100-form-btn[_ngcontent-%COMP%]:hover{background:#333}@media (max-width:992px){.wrap-login100[_ngcontent-%COMP%]{padding:177px 90px 33px 85px}.login100-pic[_ngcontent-%COMP%]{width:35%}.login100-form[_ngcontent-%COMP%]{width:50%}}@media (max-width:768px){.wrap-login100[_ngcontent-%COMP%]{padding:100px 80px 33px}.login100-pic[_ngcontent-%COMP%]{display:none}.login100-form[_ngcontent-%COMP%]{width:100%}}@media (max-width:576px){.wrap-login100[_ngcontent-%COMP%]{padding:100px 15px 33px}}.carrd-page[_ngcontent-%COMP%]{height:auto;top:0;margin:0;padding:0;width:auto;height:1200px;display:block;background-color:#fff;background-position:50%;background-repeat:no-repeat;background-size:cover}mat-dialog-content[_ngcontent-%COMP%]{display:block;overflow:hidden}[_ngcontent-%COMP%]::-webkit-scrollbar{width:0}.btn[_ngcontent-%COMP%]{margin-right:20px}.mat-dialog-container[_ngcontent-%COMP%]{height:50px}.mat-card-content-reg[_ngcontent-%COMP%]{width:500px}.float-container[_ngcontent-%COMP%]{border:3px solid #fff;padding:20px}.float-child[_ngcontent-%COMP%]{width:50%;float:left}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{font-family:Cambria,Cochin,Georgia,Times,Times New Roman,serif}.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%]{width:50px}.parent[_ngcontent-%COMP%]{height:auto;display:flex;align-items:center;justify-content:center}.child[_ngcontent-%COMP%]{font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif}.ex1[_ngcontent-%COMP%]{width:auto;height:250px;overflow:scroll}mat-icon[_ngcontent-%COMP%]:hover{cursor:pointer}.mat-radio-button[_ngcontent-%COMP%]{border-radius:60px}.choix[_ngcontent-%COMP%]{margin-top:20px}.yassine[_ngcontent-%COMP%]{height:inherit}.form-title[_ngcontent-%COMP%]{width:100%;font-size:40px;font-weight:500;padding:4px;color:#093b84;border:0}textarea[_ngcontent-%COMP%]{line-height:1;white-space:pre-wrap;word-wrap:break-word}.mat-look[_ngcontent-%COMP%]{margin-left:12px;margin-top:-8px;color:#ff957d}.form-title[_ngcontent-%COMP%]:focus{outline:none;border-bottom:2px solid #093b84}.fdescr[_ngcontent-%COMP%]{margin-top:24px;width:100%;font-size:22px;padding:4px;color:#49505a;border:0}.fdescr[_ngcontent-%COMP%]:focus{outline:none;border-bottom:2px solid #093b84}button[_ngcontent-%COMP%]{outline:none}.question-title[_ngcontent-%COMP%]{width:96%;font-size:30px;font-weight:400;padding:8px;color:#093b84;border:0;outline:none;margin:8px}.form-control[_ngcontent-%COMP%]{height:55px;padding:8px;font-size:24px}.card[_ngcontent-%COMP%], .quesiton-look[_ngcontent-%COMP%]{border-top:8px solid #093b84}.quesiton-look[_ngcontent-%COMP%]{border-radius:8px}.select-type[_ngcontent-%COMP%]{background-color:hsla(0,0%,83.9%,.1450980392156863);padding:16px 8px 8px;height:55px;margin-top:8px;border:1px solid #000;border-radius:3px}.question-short-input-response[_ngcontent-%COMP%]{width:96%;border:0;border-bottom:1px solid rgba(49,49,49,.7450980392156863)}.question-short-input-response[_ngcontent-%COMP%], .textt[_ngcontent-%COMP%]{font-size:18px;font-weight:300;padding:8px;color:rgba(49,49,49,.7450980392156863);outline:none;margin:8px}.textt[_ngcontent-%COMP%]{width:150%;border:0}.question-score[_ngcontent-%COMP%]{width:40px;font-size:18px;font-weight:300;padding:8px;color:rgba(49,49,49,.7450980392156863);border:0;outline:none;border-bottom:1px solid rgba(49,49,49,.7450980392156863);margin:8px 8px 8px auto}.card-to-add[_ngcontent-%COMP%]{border:10px dashed #ddd;border-radius:7px;background-color:initial;transform:scale(1.02)}.card-to-add[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.correct[_ngcontent-%COMP%]{background-color:rgba(168,226,172,.712);margin:8px;border-left:3px solid green;padding-top:4px;color:green}mat-icon[_ngcontent-%COMP%]{cursor:pointer}.score[_ngcontent-%COMP%]{margin-left:auto}@media only screen and (max-width:1100px){.textt[_ngcontent-%COMP%]{width:120%}.score[_ngcontent-%COMP%]{margin-left:auto}}@media only screen and (max-width:1000px){.textt[_ngcontent-%COMP%]{width:150%}.score[_ngcontent-%COMP%]{margin-left:auto}}@media only screen and (max-width:800px){.textt[_ngcontent-%COMP%]{width:120%}.score[_ngcontent-%COMP%]{margin-left:auto}}@media only screen and (max-width:600px){.textt[_ngcontent-%COMP%]{width:90%}.score[_ngcontent-%COMP%]{margin-left:auto}}img[_ngcontent-%COMP%]{object-fit:cover}  .simple-slider .ng5-slider .ng5-slider-bar{background:#000;height:2px}  .simple-slider .ng5-slider .ng5-slider-selection{background:#000}  .simple-slider .ng5-slider .ng5-slider-tick-legend{font-size:10px;background-color:#ff4500;color:#fff;width:9000%}  .simple-slider .ng5-slider .ng5-slider-pointer{width:8px;height:10px;top:auto;bottom:0;background-color:#ff4500;border-top-left-radius:3px;border-top-right-radius:3px}  .simple-slider .ng5-slider .ng5-slider-pointer:after{display:none}  .simple-slider .ng5-slider .ng5-slider-bubble{bottom:14px}  .simple-slider .ng5-slider .ng5-slider-limit{font-weight:700;color:#000}  .simple-slider .ng5-slider .ng5-slider-tick{width:2px;height:10px;margin-left:4px;border-radius:0;background:#000;top:-1px}  .simple-slider .ng5-slider .ng5-slider-tick.ng5-slider-selected{background:#000}.slider[_ngcontent-%COMP%]{width:100%}.slider[_ngcontent-%COMP%]::-webkit-slider-thumb{background-image:url(https://res.cloudinary.com/med-in-outlook/image/upload/v1645025469/graph_fix22_uva8kd.png)}.xyz[_ngcontent-%COMP%]{background-size:auto;text-align:center;padding-top:100px}.btn-circle.btn-sm[_ngcontent-%COMP%]{width:30px;height:30px;padding:6px 0;border-radius:15px;font-size:8px;text-align:center}.btn-circle.btn-md[_ngcontent-%COMP%]{width:50px;height:50px;padding:7px 10px;border-radius:25px;font-size:10px;text-align:center}.btn-circle.btn-xl[_ngcontent-%COMP%]{width:70px;height:70px;padding:10px 16px;border-radius:35px;font-size:12px;text-align:center}.button[_ngcontent-%COMP%]{background-color:#e84927;border:none;color:#fff;padding:20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:4px 2px}.button1[_ngcontent-%COMP%]{border-radius:2px}.button2[_ngcontent-%COMP%]{border-radius:4px}.button3[_ngcontent-%COMP%]{border-radius:8px}.button4[_ngcontent-%COMP%]{border-radius:12px}.button5[_ngcontent-%COMP%]{border-radius:50%}.houta[_ngcontent-%COMP%]{height:15}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:auto;width:100%}.example-full-width[_ngcontent-%COMP%]{width:auto}.login-page[_ngcontent-%COMP%]{height:auto}.login-page[_ngcontent-%COMP%], .register-page[_ngcontent-%COMP%]{top:0;margin:0;padding:0;width:auto;display:block;background-color:#fff;background-position:50%;background-repeat:no-repeat;background-size:cover}.register-page[_ngcontent-%COMP%]{height:1200px}mat-card[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%]{width:100%;margin:10% auto;border-radius:8px}mat-checkbox[_ngcontent-%COMP%], mat-form-field[_ngcontent-%COMP%]{width:80%;display:block;margin:auto}mat-card-content[_ngcontent-%COMP%]{margin-top:20px;width:400px}.login-button[_ngcontent-%COMP%]{display:block;width:80%;margin:20px auto;background-color:#ff4500}mat-button-toggle-group[_ngcontent-%COMP%]{display:flex;margin-left:120px;margin-right:120px;border-radius:30px}.mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:#ff4500;color:#fff}mat-slider[_ngcontent-%COMP%]{width:300px}.card-section[_ngcontent-%COMP%]{border-radius:8px;border-bottom:8px solid #ff4500}.card[_ngcontent-%COMP%]{margin-bottom:10px}.card[_ngcontent-%COMP%], .question-card[_ngcontent-%COMP%]{border-radius:8px;border-top:8px solid #ff4500}.simple-slider[_ngcontent-%COMP%]{padding-bottom:20px;width:89%;padding-left:4%}img.douleur[_ngcontent-%COMP%]{width:100%;height:100%}.buttonContainer[_ngcontent-%COMP%]{height:150px;position:relative}.vertical-center[_ngcontent-%COMP%]{top:50%;left:50%;transform:translate(-50%,-50%)}.slider[_ngcontent-%COMP%], .vertical-center[_ngcontent-%COMP%]{margin:0;position:absolute}.slider[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;-webkit-appearance:none;appearance:none;width:92%;height:100%;outline:none;transition:all .2s}.slider[_ngcontent-%COMP%], .slider[_ngcontent-%COMP%]:hover{background:hsla(0,0%,100%,0)}.slider[_ngcontent-%COMP%]::-webkit-slider-thumb{border:none;height:170px;width:180px;background-color:initial;background-image:url(https://res.cloudinary.com/med-in-outlook/image/upload/v1660637198/Douleurgraph2_hevgyr.png);background-position:0 0;background-size:cover;transform:scale(.55) rotate(var(--thumb-rotate,0deg));cursor:pointer;margin-top:-184px;-webkit-appearance:none}.container23[_ngcontent-%COMP%]{position:relative;width:500px;height:100px;border:2px solid #fff;margin-top:1%}.example-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:15px 0;align-items:flex-start}.example-radio-button[_ngcontent-%COMP%]{margin:5px}.mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}"]}),n})()}];let z=(()=>{class n{}return n.\u0275mod=c.Tb({type:n}),n.\u0275inj=c.Sb({factory:function(t){return new(t||n)},imports:[[i.d.forChild(F)],i.d]}),n})();var I=o("d3UM"),$=o("5eHb");let N=(()=>{class n{}return n.\u0275mod=c.Tb({type:n}),n.\u0275inj=c.Sb({factory:function(t){return new(t||n)},imports:[[e.c,z,g.c,I.b,s.a,d.b,$.a.forRoot()]]}),n})()}}]);