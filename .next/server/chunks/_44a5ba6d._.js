module.exports=[249994,e=>e.a(async(t,a)=>{try{var i=e.i(89171),r=e.i(843793),n=t([r]);async function s(e){let t=await r.default.connect();try{let{searchParams:a}=new URL(e.url),r=a.get("type"),n=a.get("category"),s=a.get("favorite"),o=a.get("search"),d=a.get("sortBy")||"created_at",u=a.get("sortOrder")||"desc",c=parseInt(a.get("limit")||"100"),p=parseInt(a.get("offset")||"0");console.log("🔄 Fetching media files from database...");let m=["m.is_active = TRUE"],f=[],R=1;r&&"all"!==r&&(m.push(`m.file_type = $${R}`),f.push(r),R++),n&&"all"!==n&&(m.push(`m.category_name = $${R}`),f.push(n),R++),"true"===s&&m.push("m.is_favorite = TRUE"),o&&(m.push(`(
        m.name ILIKE $${R} OR 
        m.description ILIKE $${R} OR 
        m.category_name ILIKE $${R} OR
        EXISTS (SELECT 1 FROM media_tags t WHERE t.media_id = m.id AND t.tag_name ILIKE $${R})
      )`),f.push(`%${o}%`),R++);let E=["created_at","name","file_size","view_count"].includes(d)?d:"created_at",g="asc"===u.toLowerCase()?"ASC":"DESC",_=`
      SELECT 
        m.id,
        m.name,
        m.description,
        m.file_type,
        m.file_url,
        m.thumbnail_base64,
        m.mime_type,
        m.file_size,
        m.file_size_display,
        m.duration,
        m.duration_seconds,
        m.width,
        m.height,
        m.category_name,
        m.is_favorite,
        m.view_count,
        m.download_count,
        m.like_count,
        m.uploaded_by_name,
        m.created_at,
        m.updated_at,
        COALESCE(
          ARRAY_AGG(t.tag_name) FILTER (WHERE t.tag_name IS NOT NULL), 
          ARRAY[]::VARCHAR[]
        ) as tags
      FROM media_files m
      LEFT JOIN media_tags t ON m.id = t.media_id
      WHERE ${m.join(" AND ")}
      GROUP BY m.id
      ORDER BY m.${E} ${g}
      LIMIT $${R} OFFSET $${R+1}
    `;f.push(c,p),console.log("📝 Executing query:",_),console.log("📝 With params:",f);let h=await t.query(_,f),w=`
      SELECT COUNT(DISTINCT m.id) as total
      FROM media_files m
      LEFT JOIN media_tags t ON m.id = t.media_id
      WHERE ${m.join(" AND ")}
    `,y=await t.query(w,f.slice(0,-2)),v=parseInt(y.rows[0]?.total||"0");console.log(`✅ Found ${h.rows.length} media files (total: ${v})`);let T=h.rows.map(e=>{var t;return{id:e.id,name:e.name||"",description:e.description||"",type:e.file_type,url:e.file_url||"",thumbnail:e.thumbnail_base64||e.file_url||"",size:e.file_size_display||l(e.file_size),date:(t=e.created_at)?"string"==typeof t?t.split("T")[0]:t.toISOString().split("T")[0]:new Date().toISOString().split("T")[0],tags:e.tags||[],favorite:e.is_favorite||!1,views:e.view_count||0,duration:e.duration,category:e.category_name||"Uncategorized"}}),I=`
      SELECT 
        COUNT(*) FILTER (WHERE file_type = 'image') as images,
        COUNT(*) FILTER (WHERE file_type = 'video') as videos,
        COUNT(*) FILTER (WHERE file_type = 'clip') as clips,
        COUNT(*) FILTER (WHERE is_favorite = TRUE) as favorites,
        COALESCE(SUM(view_count), 0) as total_views
      FROM media_files
      WHERE is_active = TRUE
    `,O=(await t.query(I)).rows[0];return i.NextResponse.json({success:!0,data:T,total:v,stats:{total:parseInt(O.images)+parseInt(O.videos)+parseInt(O.clips),images:parseInt(O.images),videos:parseInt(O.videos),clips:parseInt(O.clips),favorites:parseInt(O.favorites),totalViews:parseInt(O.total_views)},pagination:{limit:c,offset:p,hasMore:p+h.rows.length<v},timestamp:new Date().toISOString()})}catch(e){return console.error("❌ Error fetching media files:",e),i.NextResponse.json({success:!1,data:[],total:0,error:e instanceof Error?e.message:"Unknown error",timestamp:new Date().toISOString()},{status:500})}finally{t.release()}}async function o(e){let t=await r.default.connect();try{let{name:a,description:r,file_type:n,file_url:s,thumbnail_base64:o,file_base64:d,mime_type:u,file_size:c,duration:p,duration_seconds:m,width:f,height:R,category_name:E,tags:g,uploaded_by:_,uploaded_by_name:h}=await e.json();if(!a||!n)return i.NextResponse.json({success:!1,error:"Name and file_type are required"},{status:400});if(!["image","video","clip"].includes(n))return i.NextResponse.json({success:!1,error:"file_type must be 'image', 'video', or 'clip'"},{status:400});console.log("📤 Uploading new media file:",a),await t.query("BEGIN");let w=`
      INSERT INTO media_files (
        name,
        description,
        file_type,
        file_url,
        thumbnail_base64,
        file_base64,
        mime_type,
        file_size,
        file_size_display,
        duration,
        duration_seconds,
        width,
        height,
        category_name,
        uploaded_by,
        uploaded_by_name
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
      RETURNING id
    `,y=(await t.query(w,[a,r||null,n,s||null,o||null,d||null,u||null,c||null,l(c),p||null,m||null,f||null,R||null,E||null,_||null,h||null])).rows[0].id;if(g&&Array.isArray(g)&&g.length>0){let e=g.map((e,t)=>`($1, $${t+2})`).join(", "),a=`
        INSERT INTO media_tags (media_id, tag_name)
        VALUES ${e}
        ON CONFLICT (media_id, tag_name) DO NOTHING
      `;await t.query(a,[y,...g])}return await t.query("COMMIT"),console.log(`✅ Media file uploaded successfully with ID: ${y}`),i.NextResponse.json({success:!0,data:{id:y,name:a,file_type:n},message:"Media file uploaded successfully",timestamp:new Date().toISOString()})}catch(e){return await t.query("ROLLBACK"),console.error("❌ Error uploading media file:",e),i.NextResponse.json({success:!1,error:e instanceof Error?e.message:"Unknown error",timestamp:new Date().toISOString()},{status:500})}finally{t.release()}}function l(e){if(!e)return"0 B";let t=["B","KB","MB","GB","TB"],a=0,i=e;for(;i>=1024&&a<t.length-1;)i/=1024,a++;return`${i.toFixed(1)} ${t[a]}`}[r]=n.then?(await n)():n,e.s(["GET",()=>s,"POST",()=>o]),a()}catch(e){a(e)}},!1),679110,e=>e.a(async(t,a)=>{try{var i=e.i(747909),r=e.i(174017),n=e.i(996250),s=e.i(759756),o=e.i(561916),l=e.i(114444),d=e.i(837092),u=e.i(869741),c=e.i(316795),p=e.i(487718),m=e.i(995169),f=e.i(47587),R=e.i(666012),E=e.i(570101),g=e.i(626937),_=e.i(10372),h=e.i(193695);e.i(52474);var w=e.i(600220),y=e.i(249994),v=t([y]);[y]=v.then?(await v)():v;let O=new i.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/media-files/route",pathname:"/api/media-files",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/media-files/route.ts",nextConfigOutput:"",userland:y}),{workAsyncStorage:C,workUnitAsyncStorage:N,serverHooks:$}=O;function T(){return(0,n.patchFetch)({workAsyncStorage:C,workUnitAsyncStorage:N})}async function I(e,t,a){O.isDev&&(0,s.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let i="/api/media-files/route";i=i.replace(/\/index$/,"")||"/";let n=await O.prepare(e,t,{srcPage:i,multiZoneDraftMode:!1});if(!n)return t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:y,params:v,nextConfig:T,parsedUrl:I,isDraftMode:C,prerenderManifest:N,routerServerContext:$,isOnDemandRevalidate:S,revalidateOnlyGenerated:A,resolvedPathname:x,clientReferenceManifest:U,serverActionsManifest:b}=n,L=(0,u.normalizeAppPath)(i),H=!!(N.dynamicRoutes[L]||N.routes[x]),M=async()=>((null==$?void 0:$.render404)?await $.render404(e,t,I,!1):t.end("This page could not be found"),null);if(H&&!C){let e=!!N.routes[x],t=N.dynamicRoutes[L];if(t&&!1===t.fallback&&!e){if(T.experimental.adapterPath)return await M();throw new h.NoFallbackError}}let D=null;!H||O.isDev||C||(D=x,D="/index"===D?"/":D);let F=!0===O.isDev||!H,P=H&&!F;b&&U&&(0,l.setReferenceManifestsSingleton)({page:i,clientReferenceManifest:U,serverActionsManifest:b,serverModuleMap:(0,d.createServerModuleMap)({serverActionsManifest:b})});let q=e.method||"GET",j=(0,o.getTracer)(),k=j.getActiveScopeSpan(),B={params:v,prerenderManifest:N,renderOpts:{experimental:{authInterrupts:!!T.experimental.authInterrupts},cacheComponents:!!T.cacheComponents,supportsDynamicResponse:F,incrementalCache:(0,s.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:T.cacheLife,waitUntil:a.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,a,i)=>O.onRequestError(e,t,i,$)},sharedContext:{buildId:y}},K=new c.NodeNextRequest(e),W=new c.NodeNextResponse(t),G=p.NextRequestAdapter.fromNodeNextRequest(K,(0,p.signalFromNodeResponse)(t));try{let n=async e=>O.handle(G,B).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let a=j.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==m.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let r=a.get("next.route");if(r){let t=`${q} ${r}`;e.setAttributes({"next.route":r,"http.route":r,"next.span_name":t}),e.updateName(t)}else e.updateName(`${q} ${i}`)}),l=!!(0,s.getRequestMeta)(e,"minimalMode"),d=async s=>{var o,d;let u=async({previousCacheEntry:r})=>{try{if(!l&&S&&A&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let i=await n(s);e.fetchMetrics=B.renderOpts.fetchMetrics;let o=B.renderOpts.pendingWaitUntil;o&&a.waitUntil&&(a.waitUntil(o),o=void 0);let d=B.renderOpts.collectedTags;if(!H)return await (0,R.sendResponse)(K,W,i,B.renderOpts.pendingWaitUntil),null;{let e=await i.blob(),t=(0,E.toNodeOutgoingHttpHeaders)(i.headers);d&&(t[_.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let a=void 0!==B.renderOpts.collectedRevalidate&&!(B.renderOpts.collectedRevalidate>=_.INFINITE_CACHE)&&B.renderOpts.collectedRevalidate,r=void 0===B.renderOpts.collectedExpire||B.renderOpts.collectedExpire>=_.INFINITE_CACHE?void 0:B.renderOpts.collectedExpire;return{value:{kind:w.CachedRouteKind.APP_ROUTE,status:i.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:a,expire:r}}}}catch(t){throw(null==r?void 0:r.isStale)&&await O.onRequestError(e,t,{routerKind:"App Router",routePath:i,routeType:"route",revalidateReason:(0,f.getRevalidateReason)({isStaticGeneration:P,isOnDemandRevalidate:S})},$),t}},c=await O.handleResponse({req:e,nextConfig:T,cacheKey:D,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:N,isRoutePPREnabled:!1,isOnDemandRevalidate:S,revalidateOnlyGenerated:A,responseGenerator:u,waitUntil:a.waitUntil,isMinimalMode:l});if(!H)return null;if((null==c||null==(o=c.value)?void 0:o.kind)!==w.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==c||null==(d=c.value)?void 0:d.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});l||t.setHeader("x-nextjs-cache",S?"REVALIDATED":c.isMiss?"MISS":c.isStale?"STALE":"HIT"),C&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let p=(0,E.fromNodeOutgoingHttpHeaders)(c.value.headers);return l&&H||p.delete(_.NEXT_CACHE_TAGS_HEADER),!c.cacheControl||t.getHeader("Cache-Control")||p.get("Cache-Control")||p.set("Cache-Control",(0,g.getCacheControlHeader)(c.cacheControl)),await (0,R.sendResponse)(K,W,new Response(c.value.body,{headers:p,status:c.value.status||200})),null};k?await d(k):await j.withPropagatedContext(e.headers,()=>j.trace(m.BaseServerSpan.handleRequest,{spanName:`${q} ${i}`,kind:o.SpanKind.SERVER,attributes:{"http.method":q,"http.target":e.url}},d))}catch(t){if(t instanceof h.NoFallbackError||await O.onRequestError(e,t,{routerKind:"App Router",routePath:L,routeType:"route",revalidateReason:(0,f.getRevalidateReason)({isStaticGeneration:P,isOnDemandRevalidate:S})}),H)throw t;return await (0,R.sendResponse)(K,W,new Response(null,{status:500})),null}}e.s(["handler",()=>I,"patchFetch",()=>T,"routeModule",()=>O,"serverHooks",()=>$,"workAsyncStorage",()=>C,"workUnitAsyncStorage",()=>N]),a()}catch(e){a(e)}},!1)];

//# sourceMappingURL=_44a5ba6d._.js.map