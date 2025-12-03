module.exports=[193695,(e,t,a)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},270406,(e,t,a)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},918622,(e,t,a)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},556704,(e,t,a)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},832319,(e,t,a)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},324725,(e,t,a)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},230056,e=>e.a(async(t,a)=>{try{let t=await e.y("pg");e.n(t),a()}catch(e){a(e)}},!0),843793,e=>e.a(async(t,a)=>{try{var r=e.i(230056),s=t([r]);[r]=s.then?(await s)():s,r.types.setTypeParser(r.types.builtins.DATE,e=>e),r.types.setTypeParser(r.types.builtins.TIMESTAMP,e=>e),r.types.setTypeParser(r.types.builtins.TIMESTAMPTZ,e=>e);let n=new r.Pool({host:process.env.DB_HOST||"n8n.bjhbangkok.com",port:parseInt(process.env.DB_PORT||"5432"),user:process.env.DB_USER||"postgres",password:process.env.DB_PASSWORD||"Bjh12345!!",database:process.env.DB_NAME||"postgres",max:20,idleTimeoutMillis:3e4,connectionTimeoutMillis:3e4,statement_timeout:6e4,query_timeout:6e4,ssl:!1});n.on("connect",()=>{}),n.on("error",e=>{}),e.s(["default",0,n]),a()}catch(e){a(e)}},!1),75103,e=>e.a(async(t,a)=>{try{var r=e.i(89171),s=e.i(843793),n=t([s]);async function o(e){let t;try{console.log("📋 Quick setup - Creating basic tables..."),console.log("🔗 Testing database connection..."),t=await s.default.connect();let e=await t.query("SELECT NOW()");return console.log("✅ Database connected:",e.rows[0].now),console.log("📊 Creating surgery_schedule table..."),await t.query(`
      CREATE TABLE IF NOT EXISTS surgery_schedule (
        id BIGSERIAL PRIMARY KEY,
        doctor TEXT,
        contact_person TEXT,
        customer_name TEXT,
        phone TEXT,
        date_surgery_scheduled DATE,
        appointment_time TEXT,
        surgery_date DATE,
        date_consult_scheduled DATE,
        proposed_amount NUMERIC(12, 2),
        status TEXT,
        notes TEXT,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW(),
        data_source TEXT DEFAULT 'database'
      );
    `),console.log("✅ surgery_schedule table created"),console.log("📑 Creating indexes for surgery_schedule..."),await t.query(`
      CREATE INDEX IF NOT EXISTS idx_surgery_contact_person 
        ON surgery_schedule(contact_person);
      CREATE INDEX IF NOT EXISTS idx_surgery_scheduled_date 
        ON surgery_schedule(date_surgery_scheduled);
      CREATE INDEX IF NOT EXISTS idx_surgery_actual_date 
        ON surgery_schedule(surgery_date);
    `),console.log("✅ Indexes created for surgery_schedule"),console.log("💰 Creating sale_incentive table..."),await t.query(`
      CREATE TABLE IF NOT EXISTS sale_incentive (
        id BIGSERIAL PRIMARY KEY,
        sale_person TEXT NOT NULL,
        sale_date DATE NOT NULL,
        income NUMERIC(12, 2) NOT NULL,
        day INTEGER,
        month INTEGER,
        year INTEGER,
        customer_name TEXT,
        notes TEXT,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW(),
        data_source TEXT DEFAULT 'database'
      );
    `),console.log("✅ sale_incentive table created"),console.log("📑 Creating indexes for sale_incentive..."),await t.query(`
      CREATE INDEX IF NOT EXISTS idx_sale_person 
        ON sale_incentive(sale_person);
      CREATE INDEX IF NOT EXISTS idx_sale_date 
        ON sale_incentive(sale_date);
      CREATE INDEX IF NOT EXISTS idx_sale_year_month 
        ON sale_incentive(year, month);
    `),console.log("✅ Indexes created for sale_incentive"),console.log("🔧 Creating triggers..."),await t.query(`
      CREATE OR REPLACE FUNCTION update_updated_at_column()
      RETURNS TRIGGER AS $$
      BEGIN
          NEW.updated_at = NOW();
          RETURN NEW;
      END;
      $$ LANGUAGE 'plpgsql';
    `),await t.query(`
      DROP TRIGGER IF EXISTS trigger_update_surgery_schedule_updated_at 
        ON surgery_schedule;
      CREATE TRIGGER trigger_update_surgery_schedule_updated_at 
        BEFORE UPDATE ON surgery_schedule
        FOR EACH ROW 
        EXECUTE FUNCTION update_updated_at_column();
    `),await t.query(`
      DROP TRIGGER IF EXISTS trigger_update_sale_incentive_updated_at 
        ON sale_incentive;
      CREATE TRIGGER trigger_update_sale_incentive_updated_at 
        BEFORE UPDATE ON sale_incentive
        FOR EACH ROW 
        EXECUTE FUNCTION update_updated_at_column();
    `),await t.query(`
      CREATE OR REPLACE FUNCTION extract_date_parts_sale_incentive()
      RETURNS TRIGGER AS $$
      BEGIN
          NEW.day = EXTRACT(DAY FROM NEW.sale_date);
          NEW.month = EXTRACT(MONTH FROM NEW.sale_date);
          NEW.year = EXTRACT(YEAR FROM NEW.sale_date);
          RETURN NEW;
      END;
      $$ LANGUAGE 'plpgsql';
    `),await t.query(`
      DROP TRIGGER IF EXISTS trigger_extract_date_parts_sale_incentive 
        ON sale_incentive;
      CREATE TRIGGER trigger_extract_date_parts_sale_incentive 
        BEFORE INSERT OR UPDATE ON sale_incentive
        FOR EACH ROW 
        EXECUTE FUNCTION extract_date_parts_sale_incentive();
    `),console.log("✅ Triggers created"),console.log("✅ All tables created successfully!"),r.NextResponse.json({success:!0,message:"Database tables created successfully",tables:[{name:"surgery_schedule",status:"created",indexes:["contact_person","date_surgery_scheduled","surgery_date"]},{name:"sale_incentive",status:"created",indexes:["sale_person","sale_date","year_month"]}],triggers:["update_updated_at_column","extract_date_parts_sale_incentive"],next_steps:["Test connection: http://localhost:3000/api/surgery-schedule-db","Add test data or run migration","View performance page: http://localhost:3000/performance-surgery-schedule"]})}catch(e){if(console.error("❌ Error:",e),"42P07"===e.code)return r.NextResponse.json({success:!0,message:"Tables already exist - this is OK!",note:"Tables were already created previously"});return r.NextResponse.json({success:!1,error:e.message||"Failed to create tables",code:e.code,hint:"If connection timeout: Check DB_HOST, network, or use Supabase instead"},{status:500})}finally{t&&t.release()}}[s]=n.then?(await n)():n,e.s(["GET",()=>o]),a()}catch(e){a(e)}},!1),612405,e=>e.a(async(t,a)=>{try{var r=e.i(747909),s=e.i(174017),n=e.i(996250),o=e.i(759756),i=e.i(561916),l=e.i(114444),d=e.i(837092),c=e.i(869741),u=e.i(316795),p=e.i(487718),E=e.i(995169),T=e.i(47587),_=e.i(666012),R=e.i(570101),g=e.i(626937),h=e.i(10372),y=e.i(193695);e.i(52474);var N=e.i(600220),x=e.i(75103),A=t([x]);[x]=A.then?(await A)():A;let O=new r.AppRouteRouteModule({definition:{kind:s.RouteKind.APP_ROUTE,page:"/api/quick-setup-tables/route",pathname:"/api/quick-setup-tables",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/quick-setup-tables/route.ts",nextConfigOutput:"",userland:x}),{workAsyncStorage:m,workUnitAsyncStorage:C,serverHooks:w}=O;function v(){return(0,n.patchFetch)({workAsyncStorage:m,workUnitAsyncStorage:C})}async function I(e,t,a){O.isDev&&(0,o.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let r="/api/quick-setup-tables/route";r=r.replace(/\/index$/,"")||"/";let n=await O.prepare(e,t,{srcPage:r,multiZoneDraftMode:!1});if(!n)return t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:x,params:A,nextConfig:v,parsedUrl:I,isDraftMode:m,prerenderManifest:C,routerServerContext:w,isOnDemandRevalidate:S,revalidateOnlyGenerated:f,resolvedPathname:b,clientReferenceManifest:D,serverActionsManifest:P}=n,U=(0,c.normalizeAppPath)(r),F=!!(C.dynamicRoutes[U]||C.routes[b]),M=async()=>((null==w?void 0:w.render404)?await w.render404(e,t,I,!1):t.end("This page could not be found"),null);if(F&&!m){let e=!!C.routes[b],t=C.dynamicRoutes[U];if(t&&!1===t.fallback&&!e){if(v.experimental.adapterPath)return await M();throw new y.NoFallbackError}}let X=null;!F||O.isDev||m||(X=b,X="/index"===X?"/":X);let q=!0===O.isDev||!F,G=F&&!q;P&&D&&(0,l.setReferenceManifestsSingleton)({page:r,clientReferenceManifest:D,serverActionsManifest:P,serverModuleMap:(0,d.createServerModuleMap)({serverActionsManifest:P})});let k=e.method||"GET",L=(0,i.getTracer)(),H=L.getActiveScopeSpan(),j={params:A,prerenderManifest:C,renderOpts:{experimental:{authInterrupts:!!v.experimental.authInterrupts},cacheComponents:!!v.cacheComponents,supportsDynamicResponse:q,incrementalCache:(0,o.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:v.cacheLife,waitUntil:a.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,a,r)=>O.onRequestError(e,t,r,w)},sharedContext:{buildId:x}},B=new u.NodeNextRequest(e),W=new u.NodeNextResponse(t),$=p.NextRequestAdapter.fromNodeNextRequest(B,(0,p.signalFromNodeResponse)(t));try{let n=async e=>O.handle($,j).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let a=L.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==E.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let s=a.get("next.route");if(s){let t=`${k} ${s}`;e.setAttributes({"next.route":s,"http.route":s,"next.span_name":t}),e.updateName(t)}else e.updateName(`${k} ${r}`)}),l=!!(0,o.getRequestMeta)(e,"minimalMode"),d=async o=>{var i,d;let c=async({previousCacheEntry:s})=>{try{if(!l&&S&&f&&!s)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let r=await n(o);e.fetchMetrics=j.renderOpts.fetchMetrics;let i=j.renderOpts.pendingWaitUntil;i&&a.waitUntil&&(a.waitUntil(i),i=void 0);let d=j.renderOpts.collectedTags;if(!F)return await (0,_.sendResponse)(B,W,r,j.renderOpts.pendingWaitUntil),null;{let e=await r.blob(),t=(0,R.toNodeOutgoingHttpHeaders)(r.headers);d&&(t[h.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let a=void 0!==j.renderOpts.collectedRevalidate&&!(j.renderOpts.collectedRevalidate>=h.INFINITE_CACHE)&&j.renderOpts.collectedRevalidate,s=void 0===j.renderOpts.collectedExpire||j.renderOpts.collectedExpire>=h.INFINITE_CACHE?void 0:j.renderOpts.collectedExpire;return{value:{kind:N.CachedRouteKind.APP_ROUTE,status:r.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:a,expire:s}}}}catch(t){throw(null==s?void 0:s.isStale)&&await O.onRequestError(e,t,{routerKind:"App Router",routePath:r,routeType:"route",revalidateReason:(0,T.getRevalidateReason)({isStaticGeneration:G,isOnDemandRevalidate:S})},w),t}},u=await O.handleResponse({req:e,nextConfig:v,cacheKey:X,routeKind:s.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:C,isRoutePPREnabled:!1,isOnDemandRevalidate:S,revalidateOnlyGenerated:f,responseGenerator:c,waitUntil:a.waitUntil,isMinimalMode:l});if(!F)return null;if((null==u||null==(i=u.value)?void 0:i.kind)!==N.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==u||null==(d=u.value)?void 0:d.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});l||t.setHeader("x-nextjs-cache",S?"REVALIDATED":u.isMiss?"MISS":u.isStale?"STALE":"HIT"),m&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let p=(0,R.fromNodeOutgoingHttpHeaders)(u.value.headers);return l&&F||p.delete(h.NEXT_CACHE_TAGS_HEADER),!u.cacheControl||t.getHeader("Cache-Control")||p.get("Cache-Control")||p.set("Cache-Control",(0,g.getCacheControlHeader)(u.cacheControl)),await (0,_.sendResponse)(B,W,new Response(u.value.body,{headers:p,status:u.value.status||200})),null};H?await d(H):await L.withPropagatedContext(e.headers,()=>L.trace(E.BaseServerSpan.handleRequest,{spanName:`${k} ${r}`,kind:i.SpanKind.SERVER,attributes:{"http.method":k,"http.target":e.url}},d))}catch(t){if(t instanceof y.NoFallbackError||await O.onRequestError(e,t,{routerKind:"App Router",routePath:U,routeType:"route",revalidateReason:(0,T.getRevalidateReason)({isStaticGeneration:G,isOnDemandRevalidate:S})}),F)throw t;return await (0,_.sendResponse)(B,W,new Response(null,{status:500})),null}}e.s(["handler",()=>I,"patchFetch",()=>v,"routeModule",()=>O,"serverHooks",()=>w,"workAsyncStorage",()=>m,"workUnitAsyncStorage",()=>C]),a()}catch(e){a(e)}},!1)];

//# sourceMappingURL=%5Broot-of-the-server%5D__1303c3dd._.js.map