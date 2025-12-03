module.exports=[193695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},270406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},918622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},556704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},832319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},324725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},230056,e=>e.a(async(t,r)=>{try{let t=await e.y("pg");e.n(t),r()}catch(e){r(e)}},!0),843793,e=>e.a(async(t,r)=>{try{var a=e.i(230056),s=t([a]);[a]=s.then?(await s)():s,a.types.setTypeParser(a.types.builtins.DATE,e=>e),a.types.setTypeParser(a.types.builtins.TIMESTAMP,e=>e),a.types.setTypeParser(a.types.builtins.TIMESTAMPTZ,e=>e);let o=new a.Pool({host:process.env.DB_HOST||"n8n.bjhbangkok.com",port:parseInt(process.env.DB_PORT||"5432"),user:process.env.DB_USER||"postgres",password:process.env.DB_PASSWORD||"Bjh12345!!",database:process.env.DB_NAME||"postgres",max:20,idleTimeoutMillis:3e4,connectionTimeoutMillis:3e4,statement_timeout:6e4,query_timeout:6e4,ssl:!1});o.on("connect",()=>{}),o.on("error",e=>{}),e.s(["default",0,o]),r()}catch(e){r(e)}},!1),302225,e=>e.a(async(t,r)=>{try{var a=e.i(89171),s=e.i(843793),o=t([s]);async function n(e){try{let e=`
      CREATE TABLE customers (
        id BIGSERIAL PRIMARY KEY,
        -- ข้อมูลพื้นฐาน
        status TEXT,
        source TEXT,
        interested_product TEXT,
        doctor TEXT,
        contact_staff TEXT,
        customer_name TEXT,
        phone TEXT,
        note TEXT,
        -- วันที่ต่างๆ
        last_followup TEXT,
        next_followup TEXT,
        consult_date TEXT,
        surgery_date TEXT,
        appointment_time TEXT,
        got_contact_date TEXT,
        booked_consult_date TEXT,
        booked_surgery_date TEXT,
        -- ข้อมูลทางการเงินและรหัส
        proposed_amount TEXT,
        customer_code TEXT,
        star_flag TEXT,
        -- ข้อมูลสถานที่
        country TEXT,
        car_call_time TEXT,
        lat DOUBLE PRECISION,
        long DOUBLE PRECISION,
        -- ข้อมูลเพิ่มเติม
        photo_note TEXT,
        gender TEXT,
        age INTEGER,
        occupation TEXT,
        from_province TEXT,
        travel_method TEXT,
        -- ข้อมูลการติดต่อ
        contact_prefer_date TEXT,
        contact_prefer_time TEXT,
        free_program TEXT,
        -- ข้อมูล Google Calendar
        event_id TEXT,
        html_link TEXT,
        ical_uid TEXT,
        log TEXT,
        -- ข้อมูล Doctor Calendar
        doc_calendar TEXT,
        doc_event_id TEXT,
        doc_html_link TEXT,
        doc_ical_uid TEXT,
        -- ข้อมูล LINE
        line_note TEXT,
        line_doctor_note TEXT,
        -- ข้อมูลการโทร
        ivr TEXT,
        transfer_to TEXT,
        status_call TEXT,
        -- Timestamps
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      );
      -- สร้าง index สำหรับการค้นหาที่เร็วขึ้น
      CREATE INDEX idx_customer_status ON customers(status);
      CREATE INDEX idx_customer_contact ON customers(contact_staff);
      CREATE INDEX idx_customer_phone ON customers(phone);
      CREATE INDEX idx_customer_consult_date ON customers(consult_date);
      CREATE INDEX idx_customer_surgery_date ON customers(surgery_date);
      CREATE INDEX idx_customer_next_followup ON customers(next_followup);
      CREATE INDEX idx_customer_name ON customers(customer_name);
      CREATE INDEX idx_customer_code ON customers(customer_code);
    `,t=`
      CREATE OR REPLACE FUNCTION update_updated_at_column()
      RETURNS TRIGGER AS $$
      BEGIN
          NEW.updated_at = NOW();
          RETURN NEW;
      END;
      $$ language 'plpgsql';
    `,r=`
      CREATE TRIGGER update_customers_updated_at BEFORE UPDATE ON customers
      FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    `;return await s.default.query("DROP TABLE IF EXISTS customers CASCADE;"),console.log("✓ Old table dropped successfully"),await s.default.query(e),console.log("✓ New table created successfully"),await s.default.query(t),console.log("✓ Trigger function created successfully"),await s.default.query(r),console.log("✓ Trigger created successfully"),a.NextResponse.json({success:!0,message:"Database recreated successfully",details:{table:"customers",columns:45,indexes:["idx_customer_status","idx_customer_contact","idx_customer_phone","idx_customer_consult_date","idx_customer_surgery_date","idx_customer_next_followup","idx_customer_name","idx_customer_code"],trigger:"update_customers_updated_at"}})}catch(e){return console.error("Database recreate error:",e),a.NextResponse.json({success:!1,error:e.message||"Failed to recreate database",details:e.stack},{status:500})}}async function i(e){return a.NextResponse.json({message:"Use POST method to recreate database",warning:"This will DROP the existing customers table and recreate it",instructions:"Send a POST request to this endpoint to drop and recreate the customers table"})}[s]=o.then?(await o)():o,e.s(["GET",()=>i,"POST",()=>n]),r()}catch(e){r(e)}},!1),268277,e=>e.a(async(t,r)=>{try{var a=e.i(747909),s=e.i(174017),o=e.i(996250),n=e.i(759756),i=e.i(561916),l=e.i(114444),c=e.i(837092),d=e.i(869741),u=e.i(316795),p=e.i(487718),T=e.i(995169),E=e.i(47587),_=e.i(666012),m=e.i(570101),R=e.i(626937),x=e.i(10372),h=e.i(193695);e.i(52474);var g=e.i(600220),f=e.i(302225),y=t([f]);[f]=y.then?(await y)():y;let A=new a.AppRouteRouteModule({definition:{kind:s.RouteKind.APP_ROUTE,page:"/api/recreate-database/route",pathname:"/api/recreate-database",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/recreate-database/route.ts",nextConfigOutput:"",userland:f}),{workAsyncStorage:w,workUnitAsyncStorage:C,serverHooks:X}=A;function v(){return(0,o.patchFetch)({workAsyncStorage:w,workUnitAsyncStorage:C})}async function N(e,t,r){A.isDev&&(0,n.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let a="/api/recreate-database/route";a=a.replace(/\/index$/,"")||"/";let o=await A.prepare(e,t,{srcPage:a,multiZoneDraftMode:!1});if(!o)return t.statusCode=400,t.end("Bad Request"),null==r.waitUntil||r.waitUntil.call(r,Promise.resolve()),null;let{buildId:f,params:y,nextConfig:v,parsedUrl:N,isDraftMode:w,prerenderManifest:C,routerServerContext:X,isOnDemandRevalidate:O,revalidateOnlyGenerated:b,resolvedPathname:I,clientReferenceManifest:P,serverActionsManifest:D}=o,S=(0,d.normalizeAppPath)(a),k=!!(C.dynamicRoutes[S]||C.routes[I]),M=async()=>((null==X?void 0:X.render404)?await X.render404(e,t,N,!1):t.end("This page could not be found"),null);if(k&&!w){let e=!!C.routes[I],t=C.dynamicRoutes[S];if(t&&!1===t.fallback&&!e){if(v.experimental.adapterPath)return await M();throw new h.NoFallbackError}}let U=null;!k||A.isDev||w||(U=I,U="/index"===U?"/":U);let q=!0===A.isDev||!k,j=k&&!q;D&&P&&(0,l.setReferenceManifestsSingleton)({page:a,clientReferenceManifest:P,serverActionsManifest:D,serverModuleMap:(0,c.createServerModuleMap)({serverActionsManifest:D})});let H=e.method||"GET",B=(0,i.getTracer)(),F=B.getActiveScopeSpan(),L={params:y,prerenderManifest:C,renderOpts:{experimental:{authInterrupts:!!v.experimental.authInterrupts},cacheComponents:!!v.cacheComponents,supportsDynamicResponse:q,incrementalCache:(0,n.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:v.cacheLife,waitUntil:r.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,a)=>A.onRequestError(e,t,a,X)},sharedContext:{buildId:f}},$=new u.NodeNextRequest(e),G=new u.NodeNextResponse(t),K=p.NextRequestAdapter.fromNodeNextRequest($,(0,p.signalFromNodeResponse)(t));try{let o=async e=>A.handle(K,L).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=B.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==T.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let s=r.get("next.route");if(s){let t=`${H} ${s}`;e.setAttributes({"next.route":s,"http.route":s,"next.span_name":t}),e.updateName(t)}else e.updateName(`${H} ${a}`)}),l=!!(0,n.getRequestMeta)(e,"minimalMode"),c=async n=>{var i,c;let d=async({previousCacheEntry:s})=>{try{if(!l&&O&&b&&!s)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let a=await o(n);e.fetchMetrics=L.renderOpts.fetchMetrics;let i=L.renderOpts.pendingWaitUntil;i&&r.waitUntil&&(r.waitUntil(i),i=void 0);let c=L.renderOpts.collectedTags;if(!k)return await (0,_.sendResponse)($,G,a,L.renderOpts.pendingWaitUntil),null;{let e=await a.blob(),t=(0,m.toNodeOutgoingHttpHeaders)(a.headers);c&&(t[x.NEXT_CACHE_TAGS_HEADER]=c),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==L.renderOpts.collectedRevalidate&&!(L.renderOpts.collectedRevalidate>=x.INFINITE_CACHE)&&L.renderOpts.collectedRevalidate,s=void 0===L.renderOpts.collectedExpire||L.renderOpts.collectedExpire>=x.INFINITE_CACHE?void 0:L.renderOpts.collectedExpire;return{value:{kind:g.CachedRouteKind.APP_ROUTE,status:a.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:s}}}}catch(t){throw(null==s?void 0:s.isStale)&&await A.onRequestError(e,t,{routerKind:"App Router",routePath:a,routeType:"route",revalidateReason:(0,E.getRevalidateReason)({isStaticGeneration:j,isOnDemandRevalidate:O})},X),t}},u=await A.handleResponse({req:e,nextConfig:v,cacheKey:U,routeKind:s.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:C,isRoutePPREnabled:!1,isOnDemandRevalidate:O,revalidateOnlyGenerated:b,responseGenerator:d,waitUntil:r.waitUntil,isMinimalMode:l});if(!k)return null;if((null==u||null==(i=u.value)?void 0:i.kind)!==g.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==u||null==(c=u.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});l||t.setHeader("x-nextjs-cache",O?"REVALIDATED":u.isMiss?"MISS":u.isStale?"STALE":"HIT"),w&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let p=(0,m.fromNodeOutgoingHttpHeaders)(u.value.headers);return l&&k||p.delete(x.NEXT_CACHE_TAGS_HEADER),!u.cacheControl||t.getHeader("Cache-Control")||p.get("Cache-Control")||p.set("Cache-Control",(0,R.getCacheControlHeader)(u.cacheControl)),await (0,_.sendResponse)($,G,new Response(u.value.body,{headers:p,status:u.value.status||200})),null};F?await c(F):await B.withPropagatedContext(e.headers,()=>B.trace(T.BaseServerSpan.handleRequest,{spanName:`${H} ${a}`,kind:i.SpanKind.SERVER,attributes:{"http.method":H,"http.target":e.url}},c))}catch(t){if(t instanceof h.NoFallbackError||await A.onRequestError(e,t,{routerKind:"App Router",routePath:S,routeType:"route",revalidateReason:(0,E.getRevalidateReason)({isStaticGeneration:j,isOnDemandRevalidate:O})}),k)throw t;return await (0,_.sendResponse)($,G,new Response(null,{status:500})),null}}e.s(["handler",()=>N,"patchFetch",()=>v,"routeModule",()=>A,"serverHooks",()=>X,"workAsyncStorage",()=>w,"workUnitAsyncStorage",()=>C]),r()}catch(e){r(e)}},!1)];

//# sourceMappingURL=%5Broot-of-the-server%5D__8b54382a._.js.map