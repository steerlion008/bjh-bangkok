module.exports=[296153,e=>e.a(async(t,a)=>{try{var s=e.i(89171),n=e.i(843793),r=t([n]);[n]=r.then?(await r)():r;let d=new Map;async function o(e){try{let{searchParams:t}=new URL(e.url),a=t.get("month"),r=t.get("year"),o=t.get("sale_person"),l=`sale-incentive-db-${a||"all"}-${r||"all"}-${o||"all"}`,i=d.get(l),c=Date.now();if(i&&c<i.expiresAt)return console.log(`✅ Returning cached sale incentive from database`),s.NextResponse.json(i.data,{status:200,headers:{"Cache-Control":"public, s-maxage=30, stale-while-revalidate=60","X-Cache-Status":"HIT","X-Data-Source":"PostgreSQL Database (Cached)"}});console.log(`📡 Fetching sale incentive from database...`);let u=`
      WITH sale_data AS (
        SELECT 
          s.sale_code,
          s.item_name,
          FLOOR(s.income) as income,
          n.nickname as sale_person,
          CONCAT(n.name, ' ', n.surname) AS full_name,
          EXTRACT(DAY FROM s.sale_date) as day,
          EXTRACT(MONTH FROM s.sale_date) as month,
          EXTRACT(YEAR FROM s.sale_date) as year,
          s.sale_date,
          '' as customer_name,
          '' as notes,
          'n_saleIncentive' as data_source,
          CURRENT_TIMESTAMP as created_at,
          CURRENT_TIMESTAMP as updated_at
        FROM postgres."BJH-Server"."n_saleIncentive" AS s
        LEFT JOIN postgres."BJH-Server".n_staff AS n
          ON s.emp_code = n.code
      ),
      bjh_data AS (
        SELECT 
          contact_staff as sale_person,
          CASE 
            WHEN surgery_date::text ~ '^[0-9]{1,2}/[0-9]{1,2}/[0-9]{4}$' 
            THEN TO_DATE(surgery_date::text, 'DD/MM/YYYY')::DATE
            WHEN surgery_date::text ~ '^[0-9]+$' AND surgery_date::text::INTEGER BETWEEN 1 AND 100000
            THEN (DATE '1899-12-30' + surgery_date::text::INTEGER)::DATE
            ELSE NULL 
          END as surgery_date,
          CASE 
            WHEN REPLACE(proposed_amount, ',', '') ~ '^[0-9]+.?[0-9]*$' 
            THEN REPLACE(proposed_amount, ',', '')::NUMERIC
            ELSE 0
          END as proposed_amount,
          doctor,
          customer_name,
          phone,
          appointment_time
        FROM postgres."BJH-Server".bjh_all_leads
        WHERE surgery_date IS NOT NULL
      ),
      combined_data AS (
        SELECT 
          COALESCE(s.sale_person, '') as sale_person,
          COALESCE(TO_CHAR(s.sale_date, 'YYYY-MM-DD'), '') as sale_date,
          CASE 
            WHEN COALESCE(b.proposed_amount, 0) > COALESCE(s.income, 0) AND b.proposed_amount IS NOT NULL 
            THEN b.proposed_amount
            ELSE COALESCE(s.income, 0)
          END as income,
          COALESCE(s.day, 0) as day,
          COALESCE(s.month, 0) as month,
          COALESCE(s.year, 0) as year,
          CASE 
            WHEN COALESCE(b.proposed_amount, 0) > COALESCE(s.income, 0) AND b.customer_name IS NOT NULL 
            THEN b.customer_name
            ELSE COALESCE(s.customer_name, '')
          END as customer_name,
          COALESCE(s.notes, '') as notes,
          CASE 
            WHEN COALESCE(b.proposed_amount, 0) > COALESCE(s.income, 0) AND b.proposed_amount IS NOT NULL 
            THEN 'bjh_all_leads'
            ELSE COALESCE(s.data_source, 'n_saleIncentive')
          END as data_source,
          s.created_at,
          s.updated_at,
          CASE 
            WHEN COALESCE(b.proposed_amount, 0) > COALESCE(s.income, 0) AND b.proposed_amount IS NOT NULL 
            THEN 1
            ELSE 0
          END as is_bjh_count
        FROM sale_data s
        LEFT JOIN bjh_data b
          ON s.sale_person = b.sale_person 
          AND s.sale_date::DATE = b.surgery_date
      )
      SELECT 
        sale_person,
        sale_date,
        income::NUMERIC as income,
        day::INTEGER as day,
        month::INTEGER as month,
        year::INTEGER as year,
        customer_name,
        notes,
        data_source,
        created_at,
        updated_at,
        is_bjh_count::INTEGER as is_bjh_count
      FROM combined_data
      WHERE 1=1
    `,E=[],p=1;a&&r?(u+=` AND month = $${p++}`,E.push(parseInt(a)),u+=` AND year = $${p++}`,E.push(parseInt(r))):r&&(u+=` AND year = $${p++}`,E.push(parseInt(r))),o&&"all"!==o&&(u+=` AND sale_person = $${p++}`,E.push(o)),u+=" ORDER BY sale_date DESC, created_at DESC";let R=await n.default.connect();try{let e=await R.query(u,E);console.log(`✅ Successfully fetched ${e.rows.length} sale incentive records from database`);let t={success:!0,data:e.rows,total_records:e.rows.length,timestamp:new Date().toISOString(),source:"PostgreSQL Database",debug:{filters:{month:a||"all",year:r||"all",sale_person:o||"all"}}};for(let[e,a]of(d.set(l,{data:t,timestamp:c,expiresAt:c+3e4}),d.entries()))c>a.expiresAt+6e4&&d.delete(e);return s.NextResponse.json(t,{status:200,headers:{"Cache-Control":"public, s-maxage=30, stale-while-revalidate=60","X-Cache-Status":"MISS","X-Data-Source":"PostgreSQL Database (Fresh)"}})}finally{R.release()}}catch(t){console.error("Error fetching sale incentive from database:",t);let e=d.get("sale-incentive-db");if(e)return console.log("⚠️ Using expired cache due to database error"),s.NextResponse.json(e.data,{status:200,headers:{"X-Cache-Status":"STALE","X-Data-Source":"Database (Error Fallback)"}});return s.NextResponse.json({success:!1,error:t.message||"Failed to fetch data from database",details:{type:t.name,message:t.message,hint:"ตรวจสอบว่า database มีตาราง sale_incentive และ connection ทำงานปกติ"},data:[]},{status:500})}}async function l(e){try{let{sale_person:t,sale_date:a,income:r,customer_name:o,notes:l}=await e.json();if(!t||!a||null==r)return s.NextResponse.json({success:!1,error:"sale_person, sale_date, and income are required"},{status:400});let i=await n.default.connect();try{let e=`
        INSERT INTO sale_incentive (
          sale_person, sale_date, income, customer_name, notes
        ) VALUES ($1, $2, $3, $4, $5)
        RETURNING *
      `,n=await i.query(e,[t,a,r,o||null,l||null]);return d.clear(),s.NextResponse.json({success:!0,data:n.rows[0],message:"Sale incentive created successfully"},{status:201})}finally{i.release()}}catch(e){return console.error("Error creating sale incentive:",e),s.NextResponse.json({success:!1,error:e.message||"Failed to create sale incentive"},{status:500})}}async function i(e){try{let{id:t,...a}=await e.json();if(!t)return s.NextResponse.json({success:!1,error:"id is required"},{status:400});let r=Object.keys(a);if(0===r.length)return s.NextResponse.json({success:!1,error:"No fields to update"},{status:400});let o=r.map((e,t)=>`${e} = $${t+2}`).join(", "),l=[t,...r.map(e=>a[e])],i=await n.default.connect();try{let e=`
        UPDATE sale_incentive
        SET ${o}
        WHERE id = $1
        RETURNING *
      `,t=await i.query(e,l);if(0===t.rows.length)return s.NextResponse.json({success:!1,error:"Sale incentive not found"},{status:404});return d.clear(),s.NextResponse.json({success:!0,data:t.rows[0],message:"Sale incentive updated successfully"})}finally{i.release()}}catch(e){return console.error("Error updating sale incentive:",e),s.NextResponse.json({success:!1,error:e.message||"Failed to update sale incentive"},{status:500})}}async function c(e){try{let{searchParams:t}=new URL(e.url),a=t.get("id");if(!a)return s.NextResponse.json({success:!1,error:"id is required"},{status:400});let r=await n.default.connect();try{let e=await r.query("DELETE FROM sale_incentive WHERE id = $1 RETURNING id",[a]);if(0===e.rows.length)return s.NextResponse.json({success:!1,error:"Sale incentive not found"},{status:404});return d.clear(),s.NextResponse.json({success:!0,message:"Sale incentive deleted successfully"})}finally{r.release()}}catch(e){return console.error("Error deleting sale incentive:",e),s.NextResponse.json({success:!1,error:e.message||"Failed to delete sale incentive"},{status:500})}}async function u(e){return new s.NextResponse(null,{status:200,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS","Access-Control-Allow-Headers":"Content-Type"}})}e.s(["DELETE",()=>c,"GET",()=>o,"OPTIONS",()=>u,"POST",()=>l,"PUT",()=>i]),a()}catch(e){a(e)}},!1),397894,e=>e.a(async(t,a)=>{try{var s=e.i(747909),n=e.i(174017),r=e.i(996250),o=e.i(759756),l=e.i(561916),i=e.i(114444),c=e.i(837092),u=e.i(869741),d=e.i(316795),E=e.i(487718),p=e.i(995169),R=e.i(47587),h=e.i(666012),_=e.i(570101),m=e.i(626937),N=e.i(10372),C=e.i(193695);e.i(52474);var S=e.i(600220),A=e.i(296153),T=t([A]);[A]=T.then?(await T)():T;let v=new s.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/sale-incentive-db/route",pathname:"/api/sale-incentive-db",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/sale-incentive-db/route.ts",nextConfigOutput:"",userland:A}),{workAsyncStorage:y,workUnitAsyncStorage:O,serverHooks:w}=v;function g(){return(0,r.patchFetch)({workAsyncStorage:y,workUnitAsyncStorage:O})}async function f(e,t,a){v.isDev&&(0,o.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let s="/api/sale-incentive-db/route";s=s.replace(/\/index$/,"")||"/";let r=await v.prepare(e,t,{srcPage:s,multiZoneDraftMode:!1});if(!r)return t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:A,params:T,nextConfig:g,parsedUrl:f,isDraftMode:y,prerenderManifest:O,routerServerContext:w,isOnDemandRevalidate:b,revalidateOnlyGenerated:x,resolvedPathname:L,clientReferenceManifest:D,serverActionsManifest:I}=r,H=(0,u.normalizeAppPath)(s),M=!!(O.dynamicRoutes[H]||O.routes[L]),P=async()=>((null==w?void 0:w.render404)?await w.render404(e,t,f,!1):t.end("This page could not be found"),null);if(M&&!y){let e=!!O.routes[L],t=O.dynamicRoutes[H];if(t&&!1===t.fallback&&!e){if(g.experimental.adapterPath)return await P();throw new C.NoFallbackError}}let U=null;!M||v.isDev||y||(U=L,U="/index"===U?"/":U);let $=!0===v.isDev||!M,j=M&&!$;I&&D&&(0,i.setReferenceManifestsSingleton)({page:s,clientReferenceManifest:D,serverActionsManifest:I,serverModuleMap:(0,c.createServerModuleMap)({serverActionsManifest:I})});let F=e.method||"GET",q=(0,l.getTracer)(),k=q.getActiveScopeSpan(),W={params:T,prerenderManifest:O,renderOpts:{experimental:{authInterrupts:!!g.experimental.authInterrupts},cacheComponents:!!g.cacheComponents,supportsDynamicResponse:$,incrementalCache:(0,o.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:g.cacheLife,waitUntil:a.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,a,s)=>v.onRequestError(e,t,s,w)},sharedContext:{buildId:A}},G=new d.NodeNextRequest(e),X=new d.NodeNextResponse(t),Y=E.NextRequestAdapter.fromNodeNextRequest(G,(0,E.signalFromNodeResponse)(t));try{let r=async e=>v.handle(Y,W).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let a=q.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==p.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let n=a.get("next.route");if(n){let t=`${F} ${n}`;e.setAttributes({"next.route":n,"http.route":n,"next.span_name":t}),e.updateName(t)}else e.updateName(`${F} ${s}`)}),i=!!(0,o.getRequestMeta)(e,"minimalMode"),c=async o=>{var l,c;let u=async({previousCacheEntry:n})=>{try{if(!i&&b&&x&&!n)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let s=await r(o);e.fetchMetrics=W.renderOpts.fetchMetrics;let l=W.renderOpts.pendingWaitUntil;l&&a.waitUntil&&(a.waitUntil(l),l=void 0);let c=W.renderOpts.collectedTags;if(!M)return await (0,h.sendResponse)(G,X,s,W.renderOpts.pendingWaitUntil),null;{let e=await s.blob(),t=(0,_.toNodeOutgoingHttpHeaders)(s.headers);c&&(t[N.NEXT_CACHE_TAGS_HEADER]=c),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let a=void 0!==W.renderOpts.collectedRevalidate&&!(W.renderOpts.collectedRevalidate>=N.INFINITE_CACHE)&&W.renderOpts.collectedRevalidate,n=void 0===W.renderOpts.collectedExpire||W.renderOpts.collectedExpire>=N.INFINITE_CACHE?void 0:W.renderOpts.collectedExpire;return{value:{kind:S.CachedRouteKind.APP_ROUTE,status:s.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:a,expire:n}}}}catch(t){throw(null==n?void 0:n.isStale)&&await v.onRequestError(e,t,{routerKind:"App Router",routePath:s,routeType:"route",revalidateReason:(0,R.getRevalidateReason)({isStaticGeneration:j,isOnDemandRevalidate:b})},w),t}},d=await v.handleResponse({req:e,nextConfig:g,cacheKey:U,routeKind:n.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:O,isRoutePPREnabled:!1,isOnDemandRevalidate:b,revalidateOnlyGenerated:x,responseGenerator:u,waitUntil:a.waitUntil,isMinimalMode:i});if(!M)return null;if((null==d||null==(l=d.value)?void 0:l.kind)!==S.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==d||null==(c=d.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});i||t.setHeader("x-nextjs-cache",b?"REVALIDATED":d.isMiss?"MISS":d.isStale?"STALE":"HIT"),y&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let E=(0,_.fromNodeOutgoingHttpHeaders)(d.value.headers);return i&&M||E.delete(N.NEXT_CACHE_TAGS_HEADER),!d.cacheControl||t.getHeader("Cache-Control")||E.get("Cache-Control")||E.set("Cache-Control",(0,m.getCacheControlHeader)(d.cacheControl)),await (0,h.sendResponse)(G,X,new Response(d.value.body,{headers:E,status:d.value.status||200})),null};k?await c(k):await q.withPropagatedContext(e.headers,()=>q.trace(p.BaseServerSpan.handleRequest,{spanName:`${F} ${s}`,kind:l.SpanKind.SERVER,attributes:{"http.method":F,"http.target":e.url}},c))}catch(t){if(t instanceof C.NoFallbackError||await v.onRequestError(e,t,{routerKind:"App Router",routePath:H,routeType:"route",revalidateReason:(0,R.getRevalidateReason)({isStaticGeneration:j,isOnDemandRevalidate:b})}),M)throw t;return await (0,h.sendResponse)(G,X,new Response(null,{status:500})),null}}e.s(["handler",()=>f,"patchFetch",()=>g,"routeModule",()=>v,"serverHooks",()=>w,"workAsyncStorage",()=>y,"workUnitAsyncStorage",()=>O]),a()}catch(e){a(e)}},!1)];

//# sourceMappingURL=_745d1bce._.js.map