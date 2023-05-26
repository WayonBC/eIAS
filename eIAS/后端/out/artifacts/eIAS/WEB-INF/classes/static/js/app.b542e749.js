(function(){"use strict";var e={9798:function(e,t,a){var l=a(9242),r=a(2777),o=(a(4415),a(3396));const n={class:"app"};function u(e,t,a,l,r,u){const i=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o.Wm)(i)])}var i={name:"App",components:{}},s=a(89);const d=(0,s.Z)(i,[["render",u]]);var m=d,c=a(2748),p=a(1020),f=a(2483),w=a(7139);const g={class:"layout"};function h(e,t,a,l,r,n){const u=(0,o.up)("Aside"),i=(0,o.up)("Header"),s=(0,o.up)("el-header"),d=(0,o.up)("router-view"),m=(0,o.up)("el-main"),c=(0,o.up)("el-container");return(0,o.wg)(),(0,o.iD)("div",g,[(0,o.Wm)(c,{ref:"box"},{default:(0,o.w5)((()=>[(0,o._)("div",{class:(0,w.C_)(["aside",{asideCollapse:l.sidebarStoreVar.collapse}]),style:(0,w.j5)(l.style)},[(0,o.Wm)(u)],6),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s,{style:{padding:"0"}},{default:(0,o.w5)((()=>[(0,o.Wm)(i)])),_:1}),(0,o.Wm)(m,{style:{padding:"0"}},{default:(0,o.w5)((()=>[(0,o.Wm)(d)])),_:1})])),_:1})])),_:1},512)])}const y={class:"Aside"},b={key:0},W={key:0},v={key:0},_={key:0};function k(e,t,a,l,r,n){const u=(0,o.up)("Document"),i=(0,o.up)("el-icon"),s=(0,o.up)("DocumentAdd"),d=(0,o.up)("el-menu-item"),m=(0,o.up)("el-menu-item-group"),c=(0,o.up)("DocumentDelete"),p=(0,o.up)("Top"),f=(0,o.up)("el-sub-menu"),w=(0,o.up)("Iphone"),g=(0,o.up)("Monitor"),h=(0,o.up)("Search"),k=(0,o.up)("FolderOpened"),x=(0,o.up)("Printer"),V=(0,o.up)("Reading"),C=(0,o.up)("DocumentCopy"),z=(0,o.up)("DataLine"),j=(0,o.up)("DocumentChecked"),U=(0,o.up)("CopyDocument"),D=(0,o.up)("el-menu");return(0,o.wg)(),(0,o.iD)("div",y,[(0,o.Wm)(D,{"default-active":"2",class:"el-menu-vertical-demo",collapse:l.sidebarStoreVar.collapse,style:{border:"none"}},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{index:"1"},{title:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u)])),_:1}),l.sidebarStoreVar.collapse?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("h4",b,"案例库管理"))])),default:(0,o.w5)((()=>[(0,o.Wm)(m,{title:"新建"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{index:"1-1",onClick:t[0]||(t[0]=e=>l.goToAddCase())},{default:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s)])),_:1}),(0,o.Uk)(" 新建案例项目 ")])),_:1})])),_:1}),(0,o.Wm)(m,{title:"修改",onClick:t[1]||(t[1]=e=>l.goToModifyCase())},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{index:"1-2"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c)])),_:1}),(0,o.Uk)(" 修改项目信息 ")])),_:1})])),_:1}),(0,o.Wm)(m,{title:"上传与下载"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{index:"1-3",onClick:t[2]||(t[2]=e=>l.goToUpload())},{default:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p)])),_:1}),(0,o.Uk)(" 案例资料列表 ")])),_:1})])),_:1})])),_:1}),(0,o.Wm)(f,{index:"2"},{title:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w)])),_:1}),l.sidebarStoreVar.collapse?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("h4",W,"相似度计算"))])),default:(0,o.w5)((()=>[(0,o.Wm)(m,{title:"计算"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{index:"2-1"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(g)])),_:1}),(0,o.Uk)(" 计算案例相似度 ")])),_:1})])),_:1})])),_:1}),(0,o.Wm)(f,{index:"3"},{title:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(h)])),_:1}),l.sidebarStoreVar.collapse?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("h4",v,"文档查询"))])),default:(0,o.w5)((()=>[(0,o.Wm)(m,{title:"查询"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{index:"3-1"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(k)])),_:1}),(0,o.Uk)(" 文档模糊查询 ")])),_:1})])),_:1})])),_:1}),(0,o.Wm)(f,{index:"4"},{title:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(x)])),_:1}),l.sidebarStoreVar.collapse?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("h4",_,"新方案管理"))])),default:(0,o.w5)((()=>[(0,o.Wm)(d,{index:"4-1"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(V)])),_:1}),(0,o.Uk)(" 方案选型分析 ")])),_:1}),(0,o.Wm)(d,{index:"4-2"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(C)])),_:1}),(0,o.Uk)(" 方案生成 ")])),_:1}),(0,o.Wm)(d,{index:"4-3"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(z)])),_:1}),(0,o.Uk)(" 方案调整 ")])),_:1}),(0,o.Wm)(d,{index:"4-4"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(j)])),_:1}),(0,o.Uk)(" 方案保存 ")])),_:1}),(0,o.Wm)(d,{index:"4-5"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(U)])),_:1}),(0,o.Uk)(" 方案导出 ")])),_:1})])),_:1})])),_:1},8,["collapse"])])}a(7658);const x=(0,p.Q_)("sidebar",{state:()=>({collapse:!1}),actions:{change(){this.collapse=!this.collapse}}});var V=a(4870);const C=(0,p.Q_)("userStore",{state:()=>({user:(0,V.qj)({id:"",userName:"",password:"",status:"",token:""})}),actions:{construct(e){this.user=e}},persist:{enabled:!0}});var z={name:"Aside",components:{},setup(e,t){let a=x(),l=C();const r=async()=>{await Ue.push({path:"/index/addCase"})},o=async()=>{await Ue.push({path:"/index/modifyCase"})},n=async()=>{await Ue.push({path:"/index/uploadMaterial"})};return{sidebarStoreVar:a,useStore:l,goToAddCase:r,goToModifyCase:o,goToUpload:n}}};const j=(0,s.Z)(z,[["render",k],["__scopeId","data-v-a18323f0"]]);var U=j;const D=e=>((0,o.dD)("data-v-636b198c"),e=e(),(0,o.Cn)(),e),S={class:"Header"},q={class:"block"},F=D((()=>(0,o._)("div",{style:{"background-color":"rgb(0,0,0,0)",height:"55px",width:"1px",float:"left"}},null,-1))),T=D((()=>(0,o._)("div",{style:{"font-size":"30px",position:"absolute",margin:"auto",top:"8px",left:"50%",right:"0",bottom:"0"}},"文档检索系统",-1))),H={class:"el-dropdown-link",style:{color:"aliceblue"}};function P(e,t,a,l,r,n){const u=(0,o.up)("Fold"),i=(0,o.up)("el-icon"),s=(0,o.up)("el-col"),d=(0,o.up)("arrow-down"),m=(0,o.up)("el-dropdown-item"),c=(0,o.up)("el-dropdown-menu"),p=(0,o.up)("el-dropdown"),f=(0,o.up)("el-row");return(0,o.wg)(),(0,o.iD)("div",S,[(0,o._)("div",q,[(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s,{span:2,style:{position:"relative"},onClick:l.collapse},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{size:"20",style:{position:"absolute",top:"18px",left:"15px",right:"0",bottom:"0"}},{default:(0,o.w5)((()=>[(0,o.Wm)(u)])),_:1})])),_:1},8,["onClick"]),(0,o.Wm)(s,{span:16,style:{position:"relative"}},{default:(0,o.w5)((()=>[F,T])),_:1}),(0,o.Wm)(s,{span:6,style:{position:"relative"}},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{style:{position:"absolute",top:"20px",right:"20px"}},{dropdown:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Uk)("个人中心")])),_:1}),(0,o.Wm)(m,{onClick:l.quit},{default:(0,o.w5)((()=>[(0,o.Uk)("退出登录")])),_:1},8,["onClick"])])),_:1})])),default:(0,o.w5)((()=>[(0,o._)("span",H,[(0,o.Uk)((0,w.zw)(l.userStoreVar.user.userName)+" ",1),(0,o.Wm)(i,{class:"el-icon--right"},{default:(0,o.w5)((()=>[(0,o.Wm)(d)])),_:1})])])),_:1})])),_:1})])),_:1})])])}var O=a(2655),L=a(7178),N={name:"Header",components:{ArrowDown:c.ArrowDown},setup(e,t){let a=(0,V.iH)("http://www.diandianjun.com.cn:8080/resource/blog/dora1.jpg"),l=x(),r=C(),o=()=>{l.change()},n=()=>{O.T.confirm("您确定要退出登录吗","请确认",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{(0,L.z8)({type:"success",message:"退出成功"}),r.user.id="",r.user.userName="",r.user.password="",r.user.status="",await Ue.push({path:"/login"})})).catch((()=>{(0,L.z8)({type:"info",message:"退出取消"})}))};return{circleUrl:a,collapse:o,userStoreVar:r,quit:n}}};const A=(0,s.Z)(N,[["render",P],["__scopeId","data-v-636b198c"]]);var I=A,R={name:"index",components:{Header:I,Aside:U},setup(e,t){let a=x(),l=(0,V.iH)(null),r=(0,V.qj)({});return(0,o.bv)((async()=>{r={height:l.value}})),{sidebarStoreVar:a,style:r}}};const Z=(0,s.Z)(R,[["render",h],["__scopeId","data-v-9594225e"]]);var M=Z;const B={class:"login"},E={class:"box"},K=(0,o._)("h2",{style:{margin:"80px auto",color:"aquamarine"}},"登录",-1);function Q(e,t,a,l,r,n){const u=(0,o.up)("el-input"),i=(0,o.up)("el-form-item"),s=(0,o.up)("el-form"),d=(0,o.up)("el-button");return(0,o.wg)(),(0,o.iD)("div",B,[(0,o._)("div",E,[K,(0,o.Wm)(s,{model:l.form,"label-width":"120px",class:"pos",ref:"formEl",rules:l.rules},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{label:"账号",class:"item"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{modelValue:l.form.userName,"onUpdate:modelValue":t[0]||(t[0]=e=>l.form.userName=e)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(i,{label:"密码",class:"item"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{type:"password",modelValue:l.form.password,"onUpdate:modelValue":t[1]||(t[1]=e=>l.form.password=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"]),(0,o.Wm)(d,{type:"primary",style:{position:"absolute",top:"62%",left:"45%"},onClick:t[2]||(t[2]=e=>l.submit(l.formEl))},{default:(0,o.w5)((()=>[(0,o.Uk)("登录")])),_:1})])])}var Y=a(4161);Y.Z.interceptors.request.use((e=>(""!==C().user.token&&(e.headers.Authorization=`${C().user.token}`),e)),(e=>Promise.reject(e)));var J=Y.Z;function $(e,t){return new Promise(((a,l)=>{J.get(e,{params:t}).then((e=>{a(e.data)})).catch((e=>{l(e.data)}))}))}function G(e,t){return new Promise(((a,l)=>{J.post(e,t).then((e=>{a(e.data)})).catch((e=>{l(e.data)}))}))}var X={name:"Login",setup(){const e="http://localhost:8070";document.querySelector("body").setAttribute("style","background-color: rgb(25,75,129)"),(0,o.Jd)((()=>{document.querySelector("body").removeAttribute("style")}));const t=(0,V.qj)({userName:"",password:""}),a=(0,f.tv)(),l=(0,V.iH)(""),r=(0,V.qj)({userName:{required:!0,message:"请输入账号",trigger:"blur"},password:{required:!0,message:"请输入密码",trigger:"blur"}});let n=C(),u=async l=>{l&&l.validate((async l=>{if(!l)return(0,L.z8)({message:"请填写字段",type:"error"}),!1;{const{data:l,msg:r}=await G(e+"/user/login",t);null===l?(0,L.z8)({message:r,type:"error"}):(n.construct(l),(0,L.z8)({message:"登陆成功",type:"success"}),await a.push({path:"/index/modifyCase"}))}}))};return{form:t,submit:u,formEl:l,rules:r}}};const ee=(0,s.Z)(X,[["render",Q]]);var te=ee;const ae=(0,o._)("h1",{style:{"text-align":"center","font-size":"40px","margin-top":"20px"}},"新建案例项目",-1);function le(e,t,a,r,n,u){const i=(0,o.up)("el-input"),s=(0,o.up)("el-form-item"),d=(0,o.up)("el-button"),m=(0,o.up)("el-form");return(0,o.wg)(),(0,o.iD)(o.HY,null,[ae,(0,o.Wm)(m,{model:r.form,rules:r.rules,ref:"ruleFormRef",style:{position:"relative",height:"600px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{label:"项目名称","label-width":r.formLabelWidth,prop:"name",style:{width:"380px",margin:"40px auto auto"}},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{modelValue:r.form.name,"onUpdate:modelValue":t[0]||(t[0]=e=>r.form.name=e)},null,8,["modelValue"])])),_:1},8,["label-width"]),(0,o.Wm)(s,{label:"项目类型","label-width":r.formLabelWidth,prop:"category",style:{width:"380px",margin:"40px auto auto"}},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{modelValue:r.form.category,"onUpdate:modelValue":t[1]||(t[1]=e=>r.form.category=e)},null,8,["modelValue"])])),_:1},8,["label-width"]),(0,o.Wm)(s,{label:"项目备注","label-width":r.formLabelWidth,prop:"remark",style:{width:"380px",margin:"40px auto auto"}},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":t[2]||(t[2]=e=>r.form.remark=e),style:{width:"380px",height:"100px",padding:"10px","font-size":"15px",resize:"none"}},null,512),[[l.nr,r.form.remark]])])),_:1},8,["label-width"]),(0,o.Wm)(d,{type:"primary",onClick:t[3]||(t[3]=e=>r.submit(r.ruleFormRef)),style:{position:"absolute",left:"50%",top:"280px","margin-left":"-28px"}},{default:(0,o.w5)((()=>[(0,o.Uk)("提交")])),_:1})])),_:1},8,["model","rules"])],64)}var re={name:"AddCase",setup(){const e="http://localhost:8070",t=(0,V.iH)(!0),a=C(),l=(0,V.iH)(""),r=(0,V.qj)({id:"",name:"",category:"",remark:""}),o="80px",n=(0,V.qj)({name:[{required:!0,message:"请输入项目名称",trigger:"blur"}],category:[{required:!0,message:"请输入项目类型",trigger:"blur"}],remark:[{required:!0,message:"请输入项目备注",trigger:"blur"}]}),u=async t=>{t&&t.validate((async t=>{if(!t)return(0,L.z8)({message:"操作失败",type:"error"}),!1;{const{code:t}=await G(e+"/project/add",r);200===t?(0,L.z8)({message:"操作成功",type:"success"}):(0,L.z8)({message:"操作失败",type:"error"})}}))};return{form:r,formLabelWidth:o,rules:n,check:t,userStoreVar:a,ruleFormRef:l,submit:u}}};const oe=(0,s.Z)(re,[["render",le]]);var ne=oe;const ue={class:"ModifyCase"},ie={class:"dialog-footer"};function se(e,t,a,r,n,u){const i=(0,o.up)("el-input"),s=(0,o.up)("el-button"),d=(0,o.up)("el-form-item"),m=(0,o.up)("el-form"),c=(0,o.up)("el-dialog"),p=(0,o.up)("el-table-column"),f=(0,o.up)("el-table"),w=(0,o.up)("el-pagination");return(0,o.wg)(),(0,o.iD)("div",ue,[(0,o._)("div",null,[(0,o.Wm)(i,{"model-value":r.searchValue,"onUpdate:modelValue":t[0]||(t[0]=e=>r.searchValue=e),placeholder:"请输入查询内容","suffix-icon":"Search",style:{width:"200px",margin:"5px"},onKeydown:(0,l.D2)(r.search,["enter"])},null,8,["model-value","onKeydown"]),(0,o.Wm)(s,{onClick:r.search,type:"success"},{default:(0,o.w5)((()=>[(0,o.Uk)("查询")])),_:1},8,["onClick"]),(0,o.Wm)(s,{onClick:r.reset,type:"primary"},{default:(0,o.w5)((()=>[(0,o.Uk)("重置")])),_:1},8,["onClick"]),(0,o.Wm)(c,{modelValue:r.dialogFormVisible,"onUpdate:modelValue":t[7]||(t[7]=e=>r.dialogFormVisible=e),title:"新增员工",width:"500px",onClosed:r.resetForm},{footer:(0,o.w5)((()=>[(0,o._)("span",ie,[(0,o.Wm)(s,{onClick:t[5]||(t[5]=e=>r.dialogFormVisible=!1)},{default:(0,o.w5)((()=>[(0,o.Uk)("取消")])),_:1}),(0,o.Wm)(s,{type:"primary",onClick:t[6]||(t[6]=e=>r.submit(r.ruleFormRef))},{default:(0,o.w5)((()=>[(0,o.Uk)(" 确认 ")])),_:1})])])),default:(0,o.w5)((()=>[(0,o.Wm)(m,{model:r.form,style:{"margin-right":"120px"},ref:"ruleFormRef",rules:r.rules},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{label:"项目Id","label-width":r.formLabelWidth},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{modelValue:r.form.id,"onUpdate:modelValue":t[1]||(t[1]=e=>r.form.id=e),disabled:""},null,8,["modelValue"])])),_:1},8,["label-width"]),(0,o.Wm)(d,{label:"项目名称","label-width":r.formLabelWidth,prop:"account"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{modelValue:r.form.name,"onUpdate:modelValue":t[2]||(t[2]=e=>r.form.name=e)},null,8,["modelValue"])])),_:1},8,["label-width"]),(0,o.Wm)(d,{label:"项目类型","label-width":r.formLabelWidth,prop:"name"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{modelValue:r.form.category,"onUpdate:modelValue":t[3]||(t[3]=e=>r.form.category=e)},null,8,["modelValue"])])),_:1},8,["label-width"]),(0,o.Wm)(d,{label:"项目备注","label-width":r.formLabelWidth,prop:"password"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":t[4]||(t[4]=e=>r.form.remark=e),style:{width:"380px",height:"100px",padding:"10px","font-size":"15px",resize:"none"}},null,512),[[l.nr,r.form.remark]])])),_:1},8,["label-width"])])),_:1},8,["model","rules"])])),_:1},8,["modelValue","onClosed"])]),(0,o.Wm)(f,{data:r.projectData.list,style:{width:"100%"},border:"border"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{fixed:"",prop:"id",label:"项目Id",width:"220px"}),(0,o.Wm)(p,{prop:"name",label:"项目名称"}),(0,o.Wm)(p,{prop:"category",label:"项目类型"}),(0,o.Wm)(p,{prop:"remark",label:"项目简介"}),(0,o.Wm)(p,{fixed:"right",label:"操作",width:"220px"},{default:(0,o.w5)((e=>[(0,o.Wm)(s,{type:"success",size:"small",onClick:t=>r.handleEdit(e.row)},{default:(0,o.w5)((()=>[(0,o.Uk)("编辑")])),_:2},1032,["onClick"]),(0,o.Wm)(s,{type:"danger",size:"small",onClick:t=>r.handleDelete(e.row)},{default:(0,o.w5)((()=>[(0,o.Uk)("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),(0,o.Wm)(w,{background:"","page-size":r.pageSize,layout:"prev, pager, next",total:r.projectData.total,"pager-count":r.navSize,class:"mt-4","current-page":r.currentPage,"onUpdate:currentPage":t[8]||(t[8]=e=>r.currentPage=e),onCurrentChange:r.search,style:{"margin-top":"10px","justify-content":"center"}},null,8,["page-size","total","pager-count","current-page","onCurrentChange"])])}var de={name:"ModifyCase",setup(){const e="http://localhost:8070",t=5,a=5;let l=(0,V.iH)(1),r=(0,V.iH)("");const n=(0,V.iH)(0),u=(0,V.iH)(!1),i=(0,V.iH)(""),s="140px",d=(0,V.qj)({id:"",name:"",category:"",remark:""});(0,o.bv)((async()=>{await c()}));const m=async()=>{const{data:o}=await $(e+"/project/getPaged",{pageSize:t,pageNum:l.value,navSize:a,projectName:r.value,category:r.value,remark:r.value});n.value=o},c=async()=>{const{data:r}=await $(e+"/project/getPaged",{pageSize:t,pageNum:l.value,navSize:a});n.value=r},p=()=>{r.value="",c()},f=async t=>{t&&t.validate((async t=>{if(!t)return(0,L.z8)({message:"操作失败",type:"error"}),!1;{u.value=!1;const{code:t}=await G(e+"/project/update",d);200===t?((0,L.z8)({message:"操作成功",type:"success"}),await c()):(0,L.z8)({message:"操作失败",type:"error"})}}))},w=()=>{d.id="",d.name="",d.category="",d.remark=""},g=(0,V.qj)({name:[{required:!0,message:"请输入项目名称",trigger:"blur"}],category:[{required:!0,message:"请输入项目分类",trigger:"blur"}],remark:[{required:!0,message:"请输入项目备注",trigger:"blur"}]}),h=e=>{u.value=!0,d.id=e.id,d.name=e.name,d.category=e.category,d.remark=e.remark},y=async t=>{O.T.confirm("您确定要删除该项目吗","请确认",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{const{code:a}=await $(e+"/project/delete",{id:t.id});200===a?(0,L.z8)({message:"删除成功",type:"success"}):(0,L.z8)({message:"删除失败",type:"error"}),await c()})).catch((()=>{(0,L.z8)({type:"info",message:"取消删除"})}))};return{searchValue:r,search:m,reset:p,currentPage:l,dialogFormVisible:u,ruleFormRef:i,formLabelWidth:s,form:d,submit:f,resetForm:w,rules:g,projectData:n,handleEdit:h,handleDelete:y,pageSize:t,navSize:a}}};const me=(0,s.Z)(de,[["render",se]]);var ce=me;const pe={class:"ModifyCase"},fe=(0,o._)("input",{id:"materialFile",type:"file"},null,-1),we={class:"dialog-footer"};function ge(e,t,a,r,n,u){const i=(0,o.up)("el-input"),s=(0,o.up)("el-option"),d=(0,o.up)("el-select"),m=(0,o.up)("el-button"),c=(0,o.up)("el-form-item"),p=(0,o.up)("el-form"),f=(0,o.up)("el-dialog"),g=(0,o.up)("el-table-column"),h=(0,o.up)("el-table"),y=(0,o.up)("el-pagination");return(0,o.wg)(),(0,o.iD)("div",pe,[(0,o._)("div",null,[(0,o.Wm)(i,{"model-value":r.searchValue,"onUpdate:modelValue":t[0]||(t[0]=e=>r.searchValue=e),placeholder:"请输入查询内容","suffix-icon":"Search",style:{width:"200px",margin:"5px"},onKeydown:(0,l.D2)(r.search,["enter"])},null,8,["model-value","onKeydown"]),(0,o.Wm)(d,{modelValue:r.project,"onUpdate:modelValue":t[1]||(t[1]=e=>r.project=e),class:"m-2",placeholder:"请选择所属项目"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.projectData,((e,t)=>((0,o.wg)(),(0,o.j4)(s,{key:t,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),(0,o.Wm)(m,{onClick:r.search,type:"success",style:{"margin-left":"10px"}},{default:(0,o.w5)((()=>[(0,o.Uk)("查询")])),_:1},8,["onClick"]),(0,o.Wm)(m,{onClick:r.reset,type:"primary"},{default:(0,o.w5)((()=>[(0,o.Uk)("重置")])),_:1},8,["onClick"]),(0,o.Wm)(m,{onClick:t[2]||(t[2]=e=>{r.dialogFormVisible=!0}),type:"primary"},{default:(0,o.w5)((()=>[(0,o.Uk)("新增")])),_:1}),(0,o.Wm)(f,{modelValue:r.dialogFormVisible,"onUpdate:modelValue":t[7]||(t[7]=e=>r.dialogFormVisible=e),title:"新增案例资料",width:"500px"},{footer:(0,o.w5)((()=>[(0,o._)("span",we,[(0,o.Wm)(m,{onClick:t[5]||(t[5]=e=>r.dialogFormVisible=!1)},{default:(0,o.w5)((()=>[(0,o.Uk)("取消")])),_:1}),(0,o.Wm)(m,{type:"primary",onClick:t[6]||(t[6]=e=>r.submit(r.ruleFormRef))},{default:(0,o.w5)((()=>[(0,o.Uk)(" 确认 ")])),_:1})])])),default:(0,o.w5)((()=>[(0,o.Wm)(p,{model:r.form,style:{"margin-right":"120px"},ref:"ruleFormRef",rules:r.rules},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{label:"资料名","label-width":r.formLabelWidth,prop:"name"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{modelValue:r.form.name,"onUpdate:modelValue":t[3]||(t[3]=e=>r.form.name=e)},null,8,["modelValue"])])),_:1},8,["label-width"]),(0,o.Wm)(c,{label:"所属项目","label-width":r.formLabelWidth,prop:"projectId"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{modelValue:r.form.projectId,"onUpdate:modelValue":t[4]||(t[4]=e=>r.form.projectId=e),class:"m-2",placeholder:"请选择所属项目"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.projectData,((e,t)=>((0,o.wg)(),(0,o.j4)(s,{key:t,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["label-width"]),(0,o.Wm)(c,{label:"资料文件","label-width":r.formLabelWidth,prop:"file"},{default:(0,o.w5)((()=>[fe])),_:1},8,["label-width"])])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])]),(0,o.Wm)(h,{data:r.materialData.list,style:{width:"100%"},border:"border"},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{fixed:"",prop:"id",label:"资料Id",width:"220px"}),(0,o.Wm)(g,{prop:"name",label:"资料名称"}),(0,o.Wm)(g,{prop:"projectName",label:"资料所属项目"}),(0,o.Wm)(g,{label:"资料所属用户"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,w.zw)(r.userStoreVar.user.userName),1)])),_:1}),(0,o.Wm)(g,{fixed:"right",label:"操作",width:"220px"},{default:(0,o.w5)((e=>[(0,o.Wm)(m,{type:"success",size:"small",onClick:t=>r.handleView(e.row)},{default:(0,o.w5)((()=>[(0,o.Uk)("查看")])),_:2},1032,["onClick"]),(0,o.Wm)(m,{type:"primary",size:"small",onClick:t=>r.handleDownload(e.row)},{default:(0,o.w5)((()=>[(0,o.Uk)("下载")])),_:2},1032,["onClick"]),(0,o.Wm)(m,{type:"danger",size:"small",onClick:t=>r.handleDelete(e.row)},{default:(0,o.w5)((()=>[(0,o.Uk)("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),(0,o.Wm)(y,{background:"","page-size":r.pageSize,layout:"prev, pager, next",total:r.materialData.total,"pager-count":r.navSize,class:"mt-4","current-page":r.currentPage,"onUpdate:currentPage":t[8]||(t[8]=e=>r.currentPage=e),onCurrentChange:r.search,style:{"margin-top":"10px","justify-content":"center"}},null,8,["page-size","total","pager-count","current-page","onCurrentChange"])])}const he=(0,p.Q_)("documentStore",{state:()=>({document:(0,V.qj)()}),actions:{construct(e){this.document=e}},persist:{enabled:!0}});var ye={name:"UploadMaterial",setup(){const e="http://localhost:8070",t=10,a=5;let l=(0,V.iH)(1),r=(0,V.iH)("");const n=(0,V.iH)(0),u=(0,V.iH)(0),i=(0,V.iH)(!1),s=(0,V.iH)(""),d=(0,V.iH)(),m="140px",c=C(),p=he(),f=(0,V.qj)({name:"",projectId:"",file:""});(0,o.bv)((async()=>{await g()}));const w=async()=>{const{data:o}=await $(e+"/material/getPaged",{pageSize:t,pageNum:l.value,navSize:a,materialName:r.value,projectName:r.value,projectId:d.value});n.value=o},g=async()=>{{const{data:r}=await $(e+"/material/getPaged",{pageSize:t,pageNum:l.value,navSize:a});n.value=r}{const{data:t}=await $(e+"/project/getAll",{});u.value=t}},h=()=>{r.value="",d.value="",g()},y=async t=>{O.T.confirm("您确定要删除该项目吗","请确认",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{const{code:a}=await $(e+"/material/delete",{id:t.id});200===a?(0,L.z8)({message:"删除成功",type:"success"}):(0,L.z8)({message:"删除失败",type:"error"}),await g()})).catch((()=>{(0,L.z8)({type:"info",message:"取消删除"})}))},b=t=>{J({url:e+"/material/getContent",method:"get",responseType:"arraybuffer",params:{location:t.location}}).then((async e=>{const t=new Blob([e.data]);p.construct(t),await Ue.push({path:"/index/documentPreview"})}))},W=async t=>{J({url:e+"/material/getDownload2",method:"get",responseType:"arraybuffer",params:{location:t.location}}).then((e=>{const a=new Blob([e.data]);let l=document.createElement("a");l.href=URL.createObjectURL(a);const r=t.location.split("/");l.download=r[r.length-1],l.style.display="none",document.body.appendChild(l),l.click(),l.remove()}))},v=async t=>{t&&t.validate((async t=>{if(!t)return(0,L.z8)({message:"操作失败",type:"error"}),!1;{i.value=!1;let t=new FormData;const a=document.querySelector("#materialFile");if(!a.files.length)return void(0,L.z8)({message:"请选择文件",type:"error"});const l=a.files[0];t.append("file",l),t.append("name",f.name),t.append("projectId",f.projectId);const{data:r}=await J.post(e+"/material/add",t,{"Content-Type":"multipart/form-data"}),o=r.code;200===o?((0,L.z8)({message:"操作成功",type:"success"}),await g()):(0,L.z8)({message:"操作失败",type:"error"})}}))},_=(0,V.qj)({name:[{required:!0,message:"请输入名称",trigger:"blur"}],projectId:[{required:!0,message:"请选择项目",trigger:"blur"}]});return{searchValue:r,search:w,reset:h,currentPage:l,dialogFormVisible:i,ruleFormRef:s,formLabelWidth:m,form:f,materialData:n,handleDelete:y,pageSize:t,navSize:a,handleView:b,userStoreVar:c,projectData:u,project:d,httpUrl:e,submit:v,rules:_,handleDownload:W}}};const be=(0,s.Z)(ye,[["render",ge]]);var We=be;const ve={ref:"childRef",class:"doc-preview"};function _e(e,t,a,l,r,n){return(0,o.wg)(),(0,o.iD)("div",ve,null,512)}var ke=a(8485),xe={name:"DocumentPreview",setup(){(0,o.bv)((()=>{const e=he();let t=document.getElementsByClassName("doc-preview");ke.renderAsync(e.document,t[0]).then((e=>{console.log(e)}))}))}};const Ve=(0,s.Z)(xe,[["render",_e],["__scopeId","data-v-a1f79df4"]]);var Ce=Ve;const ze=[{path:"/",redirect:"/login"},{path:"/login",component:te},{path:"/index",component:M,children:[{path:"addCase",component:ne},{path:"modifyCase",component:ce},{path:"uploadMaterial",component:We},{path:"documentPreview",component:Ce}]}],je=(0,f.p7)({history:(0,f.r5)(),routes:ze});var Ue=je,De=a(3282);const Se=(0,l.ri)(m);Se.use(Ue),Se.use(r.Z);for(const[He,Pe]of Object.entries(c))Se.component(He,Pe);const qe=(0,p.WB)();qe.use(De.Z),Se.use(qe),Se.mount("#app");const Fe=(e,t)=>{let a=null;return function(){let l=this,r=arguments;clearTimeout(a),a=setTimeout((function(){e.apply(l,r)}),t)}},Te=window.ResizeObserver;window.ResizeObserver=class extends Te{constructor(e){e=Fe(e,16),super(e)}}}},t={};function a(l){var r=t[l];if(void 0!==r)return r.exports;var o=t[l]={exports:{}};return e[l].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,l,r,o){if(!l){var n=1/0;for(d=0;d<e.length;d++){l=e[d][0],r=e[d][1],o=e[d][2];for(var u=!0,i=0;i<l.length;i++)(!1&o||n>=o)&&Object.keys(a.O).every((function(e){return a.O[e](l[i])}))?l.splice(i--,1):(u=!1,o<n&&(n=o));if(u){e.splice(d--,1);var s=r();void 0!==s&&(t=s)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[l,r,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,l){var r,o,n=l[0],u=l[1],i=l[2],s=0;if(n.some((function(t){return 0!==e[t]}))){for(r in u)a.o(u,r)&&(a.m[r]=u[r]);if(i)var d=i(a)}for(t&&t(l);s<n.length;s++)o=n[s],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},l=self["webpackChunkdocument_retrieval_management_system"]=self["webpackChunkdocument_retrieval_management_system"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=a.O(void 0,[998],(function(){return a(9798)}));l=a.O(l)})();
//# sourceMappingURL=app.b542e749.js.map