(()=>{var e={};e.id=135,e.ids=[135],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},55315:e=>{"use strict";e.exports=require("path")},17360:e=>{"use strict";e.exports=require("url")},95254:(e,s,a)=>{"use strict";a.r(s),a.d(s,{GlobalError:()=>l.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>c,routeModule:()=>p,tree:()=>d}),a(80122),a(41878),a(53733),a(59198);var t=a(30170),r=a(45002),i=a(83876),l=a.n(i),n=a(66299),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);a.d(s,o);let d=["",{children:["(root)",{children:["magazine",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,80122)),"E:\\newsWebsite\\nextjs\\src\\app\\(root)\\magazine\\[slug]\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,41878)),"E:\\newsWebsite\\nextjs\\src\\app\\(root)\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,53733)),"E:\\newsWebsite\\nextjs\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(a.bind(a,59198)),"E:\\newsWebsite\\nextjs\\src\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["E:\\newsWebsite\\nextjs\\src\\app\\(root)\\magazine\\[slug]\\page.tsx"],m="/(root)/magazine/[slug]/page",u={require:a,loadChunk:()=>Promise.resolve()},p=new t.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/(root)/magazine/[slug]/page",pathname:"/magazine/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},95331:(e,s,a)=>{Promise.resolve().then(a.t.bind(a,15889,23)),Promise.resolve().then(a.t.bind(a,34080,23)),Promise.resolve().then(a.bind(a,90484))},90484:(e,s,a)=>{"use strict";a.d(s,{default:()=>n});var t=a(97247),r=a(28964),i=a(72411),l=a(89739);let n=()=>{let[e,s]=(0,r.useState)(""),[a,n]=(0,r.useState)(""),[o,d]=(0,r.useState)(""),c=async t=>{t.preventDefault();try{(await fetch("https://api.emailjs.com/api/v1.0/email/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({service_id:"service_2f9u39e",template_id:"template_ck3l8ob",user_id:"VMb3SEnvRjmbHhT_J",template_params:{email:e,name:a,message:o}})})).ok?(s(""),i.ZP.success("Email sent successfully!")):i.ZP.error("Failed to send email.")}catch(e){console.error("Error:",e),i.ZP.error("An unexpected error occurred")}};return t.jsx("div",{className:"contactus shadow-xl border bg-gradient-to-r from-white to-slate-100 py-16 px-4 md:px-10 lg:px-16",children:t.jsx("div",{className:"",children:(0,t.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 pt-4 gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("h1",{className:"font-semibold text-2xl lg:text-3xl text-black",children:["Contact us for our upcoming ",t.jsx("span",{className:"text-red-500",children:"Awards"})]}),(0,t.jsxs)("form",{className:"space-y-4 pt-8 px-6",onSubmit:c,children:[t.jsx("input",{className:"contactField shadow-lg",type:"email",name:"email",onChange:e=>s(e.target.value),value:e,placeholder:"Your email address",required:!0}),t.jsx("input",{className:"contactField shadow-lg",type:"text",name:"name",onChange:e=>n(e.target.value),value:a,placeholder:"Your name",required:!0}),t.jsx("div",{className:"mb-4",children:t.jsx("textarea",{onChange:e=>d(e.target.value),className:"w-full p-4 outline-none resize-none border border-gray-500 min-h-28 shadow-lg   }",placeholder:"Your Message",name:"",id:""})}),t.jsx(l.g,{type:"submit",className:"bg-red-500 w-full h-12 text-lg max-w-sm mx-auto",children:"Submit"})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("h1",{className:"font-semibold text-2xl lg:text-3xl",children:["why us ",t.jsx("span",{className:"text-red-500",children:"?"})]}),t.jsx("p",{className:"pt-8 text-lg",children:"Elevate your understanding of the world of business with Best Business Magazine and news platform. The Executive Headlines genuinely support all top business leaders and the innovative technological ecosystem that surrounds and engages with them. The company ' logo encapsulates our entire idea; it comprises a magazine for influential business leaders and decision-makers. Offering up-to-the-minute, all-encompassing news coverage, market perspectives, and exclusive dialogues with corporate pioneers, we are your ultimate destination for remaining at the vanguard of the business sphere. Enroll with us today and position yourself at the forefront of business acumen with Best News Platform and Business Magazine"})]})]})})})}},80122:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});var t=a(72051),r=a(95265),i=a(40208),l=a(79036),n=a(39812),o=a(59624),d=a(92349),c=a(41288);a(26269);var m=a(12436),u=a(97389);let p=async({params:e})=>{let s=null;try{let a=await fetch((0,n.m)(`${l.A.GetNewsDetail}/magazine/${e.slug}`));s=await a.json()}catch(e){console.log(e)}return s&&s.data||(0,c.redirect)("/magazines"),(0,t.jsxs)("div",{children:[t.jsx(d.default,{href:`/listing/${s.data.magazine.url}`,children:t.jsx(o.default,{src:l.A.ImageUrl+s.data.magazine.issue_logo,alt:"magazines",width:400,height:300,className:"mx-auto mb-4",title:"Know more"})}),(0,t.jsxs)("div",{className:"border-y-2 border-black pb-8 border-dashed",children:[(0,t.jsxs)("h1",{className:"text-3xl md:text-4xl container font-semibold py-4 text-center",children:["On the ",t.jsx("span",{className:"text-red-500",children:"Cover"})]}),t.jsx("div",{className:"bgPattern px-4 sm:px-8 py-10 border-2 ",children:(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-10 p-4 sm:p-8 justify-items-center",children:[t.jsx(d.default,{href:`/cover-story/${s.data.coverstory.url}`,children:t.jsx(o.default,{src:l.A.ImageUrl+s.data.magazine.magazine_cover_image,alt:"Cover story",width:400,height:400,className:"border-2 border-red-500"})}),(0,t.jsxs)("div",{children:[t.jsx("div",{className:"p-2",children:(0,m.ZP)(s.data.coverstory?.content_details.substring(0,1300)+"...")}),(0,t.jsxs)(d.default,{className:"text-red-500 text-center mt-4 inline-block bg-black p-3 font-semibold",href:`/cover-story/${s.data.coverstory.url}`,children:["Read More ",">>"]})]})]})})]}),(0,t.jsxs)("div",{className:"container mt-8",children:[t.jsx(r.Z,{children:"MEET THE LEADERS"}),t.jsx(i.S,{className:"pt-8 md:auto-rows-[16rem]",children:s.data.featuredpeople?.reverse().map((e,s)=>t.jsx(i.x,{title:e.title,image_alt:e.image_alt,url:"/feature"+"/"+e?.url,images:e.images},s))})]}),t.jsx(u.Z,{})]})}},95265:(e,s,a)=>{"use strict";a.d(s,{Z:()=>r});var t=a(72051);a(26269);let r=({children:e})=>(0,t.jsxs)("div",{className:"border-b-[4px] border-black  overflow-hidden relative w-full h-[60px] leading-[50px]",children:[t.jsx("span",{className:"inline-block lg:text-[22px]  uppercase py-[5px] px-5 bg-[#001045] text-white",children:e}),t.jsx("span",{className:"bg-[#001045] w-[85px] h-[32px] rotate-[75deg] inline-block -ml-[40px]"})]})},97389:(e,s,a)=>{"use strict";a.d(s,{Z:()=>c});var t=a(72051);a(26269);var r=a(95265),i=a(79036),l=a(39812);a(56279);var n=a(59624),o=a(92349);let d=(0,a(45347).createProxy)(String.raw`E:\newsWebsite\nextjs\src\components\shared\contactus-form.tsx#default`),c=async()=>{let e=null;try{let s=await fetch((0,l.m)(`${i.A.GetCompanyLogo}`));e=await s.json()}catch(e){console.log(e)}return e&&e.data?(0,t.jsxs)("div",{className:"py-10 container",children:[(0,t.jsxs)("div",{className:"",children:[t.jsx(r.Z,{children:"Featured Companies"}),t.jsx("div",{className:"pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center place-items-center",children:e.data.data.map(e=>t.jsx(o.default,{className:"inline-block",href:"/feature/"+e?.url,children:t.jsx(n.default,{src:i.A.ImageUrl+e.featured_company_logo,width:150,height:150,alt:"logo",className:"hover:scale-110 duration-200 ease-in-out  "})},e.id))})]}),t.jsx("div",{children:t.jsx(d,{})})]}):null}},40208:(e,s,a)=>{"use strict";a.d(s,{S:()=>o,x:()=>d});var t=a(72051),r=a(79036),i=a(90209),l=a(59624),n=a(92349);let o=({className:e,children:s})=>t.jsx("div",{className:(0,i.cn)("grid md:auto-rows-[15rem] grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto ",e),children:s}),d=({className:e,title:s,images:a,image_alt:o,url:d})=>(0,t.jsxs)(n.default,{href:d,className:(0,i.cn)("row-span-1  relative rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4  bg-white border justify-between flex flex-col space-y-4 overflow-hidden hover:scale-105 cursor-pointer max-md:max-w-sm mx-auto",e),children:[t.jsx("div",{className:" overflow-hidden",children:t.jsx(l.default,{src:r.A.ImageUrl+a,alt:o,width:500,height:250,className:"rounded-sm max-h-[170px] "})}),t.jsx("div",{className:"group-hover/bento:translate-x-2 transition duration-200",children:t.jsx("div",{className:" font-bold text-neutral-600  line-clamp-2",children:s})})]})},90209:(e,s,a)=>{"use strict";a.d(s,{cn:()=>i});var t=a(36272),r=a(51472);function i(...e){return(0,r.m6)((0,t.Z)(e))}}};var s=require("../../../../webpack-runtime.js");s.C(e);var a=e=>s(s.s=e),t=s.X(0,[379,996,369,449,181,623],()=>a(95254));module.exports=t})();