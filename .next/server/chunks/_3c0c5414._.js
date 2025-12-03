module.exports=[302155,e=>e.a(async(t,a)=>{try{var r=e.i(89171),n=e.i(230056),s=t([n]);[n]=s.then?(await s)():s;let u=new n.Pool({host:process.env.DB_HOST||"n8n.bjhbangkok.com",port:parseInt(process.env.DB_PORT||"5432"),user:process.env.DB_USER||"postgres",password:process.env.DB_PASSWORD||"Bjh12345!!",database:process.env.DB_NAME||"postgres",ssl:!1,max:20,idleTimeoutMillis:3e4,connectionTimeoutMillis:1e4}),c=e=>({...e,work_date:(e=>{if(!e)return"";if(e instanceof Date){let t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${a}-${r}`}return"string"==typeof e?e.split("T")[0]:String(e).split("T")[0]})(e.work_date)});async function o(e){let t;try{let a,{searchParams:n}=new URL(e.url),s=n.get("month"),o=n.get("year"),i=n.get("employee_id"),l=n.get("debug");if(t=await u.connect(),"true"===l&&i){let e=await t.query(`SELECT id, employee_id, work_date, 
                DATE(work_date) as work_date_only,
                to_char(work_date, 'YYYY-MM-DD') as formatted_date,
                time_in, time_out, status
         FROM "BJH-Server".hr_attendance
         WHERE employee_id = $1 
         AND work_date >= '2025-12-01' 
         AND work_date <= '2025-12-31'
         ORDER BY work_date`,[i]);return r.NextResponse.json({success:!0,debug:!0,count:e.rows.length,data:e.rows})}let d=[];if(s&&o){let e=`${o}-${String(s).padStart(2,"0")}-01`,t=new Date(parseInt(o),parseInt(s),0).getDate(),r=`${o}-${String(s).padStart(2,"0")}-${t}`;i?(a=`
          SELECT 
            a.*,
            u.name as employee_name,
            u.status_rank as status_rank
          FROM "BJH-Server".hr_attendance a
          LEFT JOIN "BJH-Server"."user" u ON a.employee_id = u.id
          WHERE a.work_date::date >= $1::date
            AND a.work_date::date <= $2::date
            AND a.employee_id = $3
          ORDER BY a.work_date DESC, a.time_in DESC
        `,d=[e,r,i]):(a=`
          SELECT 
            a.*,
            u.name as employee_name,
            u.status_rank as status_rank
          FROM "BJH-Server".hr_attendance a
          LEFT JOIN "BJH-Server"."user" u ON a.employee_id = u.id
          WHERE a.work_date::date >= $1::date
            AND a.work_date::date <= $2::date
          ORDER BY a.work_date DESC, a.time_in DESC
        `,d=[e,r])}else i?(a=`
        SELECT 
          a.*,
          u.name as employee_name,
          u.status_rank as status_rank
        FROM "BJH-Server".hr_attendance a
        LEFT JOIN "BJH-Server"."user" u ON a.employee_id = u.id
        WHERE a.employee_id = $1
        ORDER BY a.work_date DESC, a.time_in DESC
      `,d=[i]):(a=`
        SELECT 
          a.*,
          u.name as employee_name,
          u.status_rank as status_rank
        FROM "BJH-Server".hr_attendance a
        LEFT JOIN "BJH-Server"."user" u ON a.employee_id = u.id
        ORDER BY a.work_date DESC, a.time_in DESC
        LIMIT 100
      `,d=[]);let p=(await t.query(a,d)).rows.map(c);return r.NextResponse.json({success:!0,data:p})}catch(e){return console.error("Error fetching attendances:",e),r.NextResponse.json({success:!1,error:e.message||"Failed to fetch attendances"},{status:500})}finally{t&&t.release()}}async function i(e){let t;try{let{searchParams:a}=new URL(e.url),n=a.get("id"),{employee_id:s,work_date:o,time_in:i,time_out:l,status:d,work_hours:p,overtime_hours:E,note:_}=await e.json();if(!s||!o)return r.NextResponse.json({success:!1,error:"กรุณาระบุพนักงานและวันที่"},{status:400});if(t=await u.connect(),n){if((await t.query(`SELECT id FROM "BJH-Server".hr_attendance
         WHERE employee_id = $1 
         AND DATE(work_date) = $2::date
         AND id != $3`,[s,o,n])).rows.length>0)return r.NextResponse.json({success:!1,error:"มีข้อมูลการเข้างานของพนักงานคนนี้ในวันนี้แล้ว"},{status:400});let e=await t.query(`UPDATE "BJH-Server".hr_attendance
        SET
          employee_id = $1,
          work_date = $2::date,
          time_in = $3,
          time_out = $4,
          status = $5,
          work_hours = $6,
          overtime_hours = $7,
          note = $8,
          updated_at = NOW()
        WHERE id = $9
        RETURNING *`,[s,o,i||null,l||null,d||"PRESENT",p||0,E||0,_||null,n]);return r.NextResponse.json({success:!0,data:c(e.rows[0]),message:"อัพเดทข้อมูลการเข้างานสำเร็จ"})}{let e=await t.query(`SELECT id, work_date, 
                DATE(work_date) as work_date_only,
                to_char(work_date, 'YYYY-MM-DD') as formatted_date
         FROM "BJH-Server".hr_attendance
         WHERE employee_id = $1 
         AND DATE(work_date) = $2::date`,[s,o]);if(e.rows.length>0)return console.log("Duplicate check found:",{employee_id:s,work_date_input:o,existing_records:e.rows}),r.NextResponse.json({success:!1,error:"มีข้อมูลการเข้างานของพนักงานคนนี้ในวันนี้แล้ว",debug:e.rows},{status:400});let a=await t.query(`INSERT INTO "BJH-Server".hr_attendance (
          employee_id,
          work_date,
          time_in,
          time_out,
          status,
          work_hours,
          overtime_hours,
          note
        ) VALUES ($1, $2::date, $3, $4, $5, $6, $7, $8)
        RETURNING *`,[s,o,i||null,l||null,d||"PRESENT",p||0,E||0,_||null]);return r.NextResponse.json({success:!0,data:c(a.rows[0]),message:"บันทึกข้อมูลการเข้างานสำเร็จ"})}}catch(e){return console.error("Error creating/updating attendance:",e),r.NextResponse.json({success:!1,error:e.message||"Failed to create/update attendance"},{status:500})}finally{t&&t.release()}}async function l(e){let t;try{let{id:a,employee_id:n,work_date:s,time_in:o,time_out:i,status:l,work_hours:d,overtime_hours:p,note:E}=await e.json();if(!a)return r.NextResponse.json({success:!1,error:"กรุณาระบุ ID"},{status:400});t=await u.connect();let _=await t.query(`UPDATE "BJH-Server".hr_attendance
      SET
        employee_id = $1,
        work_date = $2,
        time_in = $3,
        time_out = $4,
        status = $5,
        work_hours = $6,
        overtime_hours = $7,
        note = $8,
        updated_at = NOW()
      WHERE id = $9
      RETURNING *`,[n,s,o||null,i||null,l||"PRESENT",d||0,p||0,E||null,a]);return r.NextResponse.json({success:!0,data:c(_.rows[0]),message:"อัพเดทข้อมูลการเข้างานสำเร็จ"})}catch(e){return console.error("Error updating attendance:",e),r.NextResponse.json({success:!1,error:e.message||"Failed to update attendance"},{status:500})}finally{t&&t.release()}}async function d(e){let t;try{let{searchParams:a}=new URL(e.url),n=a.get("id");if(!n)return r.NextResponse.json({success:!1,error:"กรุณาระบุ ID"},{status:400});return t=await u.connect(),await t.query('DELETE FROM "BJH-Server".hr_attendance WHERE id = $1',[n]),r.NextResponse.json({success:!0,message:"ลบข้อมูลการเข้างานสำเร็จ"})}catch(e){return console.error("Error deleting attendance:",e),r.NextResponse.json({success:!1,error:e.message||"Failed to delete attendance"},{status:500})}finally{t&&t.release()}}e.s(["DELETE",()=>d,"GET",()=>o,"POST",()=>i,"PUT",()=>l,"dynamic",0,"force-dynamic","runtime",0,"nodejs"]),a()}catch(e){a(e)}},!1),492836,e=>e.a(async(t,a)=>{try{var r=e.i(747909),n=e.i(174017),s=e.i(996250),o=e.i(759756),i=e.i(561916),l=e.i(114444),d=e.i(837092),u=e.i(869741),c=e.i(316795),p=e.i(487718),E=e.i(995169),_=e.i(47587),R=e.i(666012),h=e.i(570101),w=e.i(626937),m=e.i(10372),g=e.i(193695);e.i(52474);var y=e.i(600220),S=e.i(302155),v=t([S]);[S]=v.then?(await v)():v;let T=new r.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/hr-attendance/route",pathname:"/api/hr-attendance",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/hr-attendance/route.ts",nextConfigOutput:"",userland:S}),{workAsyncStorage:D,workUnitAsyncStorage:$,serverHooks:k}=T;function N(){return(0,s.patchFetch)({workAsyncStorage:D,workUnitAsyncStorage:$})}async function f(e,t,a){T.isDev&&(0,o.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let r="/api/hr-attendance/route";r=r.replace(/\/index$/,"")||"/";let s=await T.prepare(e,t,{srcPage:r,multiZoneDraftMode:!1});if(!s)return t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:S,params:v,nextConfig:N,parsedUrl:f,isDraftMode:D,prerenderManifest:$,routerServerContext:k,isOnDemandRevalidate:C,revalidateOnlyGenerated:O,resolvedPathname:x,clientReferenceManifest:A,serverActionsManifest:H}=s,M=(0,u.normalizeAppPath)(r),P=!!($.dynamicRoutes[M]||$.routes[x]),B=async()=>((null==k?void 0:k.render404)?await k.render404(e,t,f,!1):t.end("This page could not be found"),null);if(P&&!D){let e=!!$.routes[x],t=$.dynamicRoutes[M];if(t&&!1===t.fallback&&!e){if(N.experimental.adapterPath)return await B();throw new g.NoFallbackError}}let I=null;!P||T.isDev||D||(I=x,I="/index"===I?"/":I);let b=!0===T.isDev||!P,j=P&&!b;H&&A&&(0,l.setReferenceManifestsSingleton)({page:r,clientReferenceManifest:A,serverActionsManifest:H,serverModuleMap:(0,d.createServerModuleMap)({serverActionsManifest:H})});let U=e.method||"GET",F=(0,i.getTracer)(),L=F.getActiveScopeSpan(),q={params:v,prerenderManifest:$,renderOpts:{experimental:{authInterrupts:!!N.experimental.authInterrupts},cacheComponents:!!N.cacheComponents,supportsDynamicResponse:b,incrementalCache:(0,o.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:N.cacheLife,waitUntil:a.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,a,r)=>T.onRequestError(e,t,r,k)},sharedContext:{buildId:S}},J=new c.NodeNextRequest(e),W=new c.NodeNextResponse(t),Y=p.NextRequestAdapter.fromNodeNextRequest(J,(0,p.signalFromNodeResponse)(t));try{let s=async e=>T.handle(Y,q).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let a=F.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==E.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let n=a.get("next.route");if(n){let t=`${U} ${n}`;e.setAttributes({"next.route":n,"http.route":n,"next.span_name":t}),e.updateName(t)}else e.updateName(`${U} ${r}`)}),l=!!(0,o.getRequestMeta)(e,"minimalMode"),d=async o=>{var i,d;let u=async({previousCacheEntry:n})=>{try{if(!l&&C&&O&&!n)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let r=await s(o);e.fetchMetrics=q.renderOpts.fetchMetrics;let i=q.renderOpts.pendingWaitUntil;i&&a.waitUntil&&(a.waitUntil(i),i=void 0);let d=q.renderOpts.collectedTags;if(!P)return await (0,R.sendResponse)(J,W,r,q.renderOpts.pendingWaitUntil),null;{let e=await r.blob(),t=(0,h.toNodeOutgoingHttpHeaders)(r.headers);d&&(t[m.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let a=void 0!==q.renderOpts.collectedRevalidate&&!(q.renderOpts.collectedRevalidate>=m.INFINITE_CACHE)&&q.renderOpts.collectedRevalidate,n=void 0===q.renderOpts.collectedExpire||q.renderOpts.collectedExpire>=m.INFINITE_CACHE?void 0:q.renderOpts.collectedExpire;return{value:{kind:y.CachedRouteKind.APP_ROUTE,status:r.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:a,expire:n}}}}catch(t){throw(null==n?void 0:n.isStale)&&await T.onRequestError(e,t,{routerKind:"App Router",routePath:r,routeType:"route",revalidateReason:(0,_.getRevalidateReason)({isStaticGeneration:j,isOnDemandRevalidate:C})},k),t}},c=await T.handleResponse({req:e,nextConfig:N,cacheKey:I,routeKind:n.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:$,isRoutePPREnabled:!1,isOnDemandRevalidate:C,revalidateOnlyGenerated:O,responseGenerator:u,waitUntil:a.waitUntil,isMinimalMode:l});if(!P)return null;if((null==c||null==(i=c.value)?void 0:i.kind)!==y.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==c||null==(d=c.value)?void 0:d.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});l||t.setHeader("x-nextjs-cache",C?"REVALIDATED":c.isMiss?"MISS":c.isStale?"STALE":"HIT"),D&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let p=(0,h.fromNodeOutgoingHttpHeaders)(c.value.headers);return l&&P||p.delete(m.NEXT_CACHE_TAGS_HEADER),!c.cacheControl||t.getHeader("Cache-Control")||p.get("Cache-Control")||p.set("Cache-Control",(0,w.getCacheControlHeader)(c.cacheControl)),await (0,R.sendResponse)(J,W,new Response(c.value.body,{headers:p,status:c.value.status||200})),null};L?await d(L):await F.withPropagatedContext(e.headers,()=>F.trace(E.BaseServerSpan.handleRequest,{spanName:`${U} ${r}`,kind:i.SpanKind.SERVER,attributes:{"http.method":U,"http.target":e.url}},d))}catch(t){if(t instanceof g.NoFallbackError||await T.onRequestError(e,t,{routerKind:"App Router",routePath:M,routeType:"route",revalidateReason:(0,_.getRevalidateReason)({isStaticGeneration:j,isOnDemandRevalidate:C})}),P)throw t;return await (0,R.sendResponse)(J,W,new Response(null,{status:500})),null}}e.s(["handler",()=>f,"patchFetch",()=>N,"routeModule",()=>T,"serverHooks",()=>k,"workAsyncStorage",()=>D,"workUnitAsyncStorage",()=>$]),a()}catch(e){a(e)}},!1)];

//# sourceMappingURL=_3c0c5414._.js.map