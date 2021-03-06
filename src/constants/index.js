import projectList from './projectList.json'
import { GOOGLE_API_KEY } from '../../api/config'

export const PROJECTS = projectList

// GA
export const READR_GA_ID = 'UA-122455444-1' // deprecated

export const READR_GA_TEST_ID = 'UA-122455444-3' // deprecated

export const MM_GA_ID = 'UA-83609754-1'

export const MM_GA_TEST_ID = 'UA-83609754-2'

// FB
export const READR_FB_APP_ID = '2138298816406811'

export const READR_FB_PAGE_ID = '563994370665617'

export const READR_FB_PAGE_URL = 'https://www.facebook.com/Readr-563994370665617/'

export const MM_FB_APP_ID = '175313259598308'

export const MM_FB_PAGE_ID = '1855418728011324'

export const MM_FB_PAGE_URL = 'https://www.facebook.com/mirrormediamg/'

// Other
export const READR_DOMAIN = 'readr.tw'

export const READR_DOMAIN_PROD = 'www.readr.tw'

export const READR_FAVICON_URL = 'https://www.readr.tw/public/favicon.png'

export const READR_SITE_URL = 'https://www.readr.tw/project/'

export const READR_SITE_ASSETS_URL = 'https://www.readr.tw/proj-assets/'

export const READR_SITE_NAME = '讀＋READr'

export const MM_DOMAIN = 'mirrormedia.mg'

export const MM_FAVICON_URL = 'https://www.mirrormedia.mg/public/favicon-120x120.png'

export const MM_SITE_URL = 'https://projects.mirrormedia.mg/project/'

export const MM_SITE_ASSETS_URL = 'https://projects.mirrormedia.mg/proj-assets/'

export const MM_SITE_NAME = '鏡週刊 Mirror Media'

export const OLD_PROJECTS_SLUGS = [
  'burkinafasogallery',
  'burkinafaso',
  'allenlien',
  'taiwan_diplomatic_relations',
  'legendhou-painting',
  'legendhou-gallery',
  'legendhou',
  'airquality',
  'valentines_day',
  'transport-industry',
  'transport-industry-mrt',
  'lottery',
  'mining',
  'hot-sugar',
  '20170801aboriginal',
  'universiade2017-chenshihchieh',
  'universiade2017-chenchieh',
  'universiade2017-chenyenyu',
  'universiade2017-kungyun',
  'universiade2017',
  'whitecollar',
  'real-name',
  'poetry',
  'rent-king',
  'rent-house',
  'political-contribution',
  'fertility',
]

// include project url path name if we want project to use mirrormedia's meta and GA setting
export const PROJECTS_BELONG_MM = [
  'chenuen'
]

// include project url path name which need google map
export const PROJECTS_NEED_GOOGLE_MAP = {
  required: ['eastern-district-of-taipei', 'farmhouse', 'maskmap'],
  drawing: [ 'eastern-district-of-taipei', 'farmhouse' ],
  geometry: [],
  places: [],
  visualization: [ 'eastern-district-of-taipei', 'farmhouse' ]
}

// include project url path name which need google reCAPTCHA
export const PROJECTS_NEED_GOOGLE_RECAPTCHA = [
  'president-promise',
]

export const PROJECTS_NEED_TYPEKIT = [
  'hotel-hostess',
  'hotel-hostess-series',
  'nanfangao-bridge',
  'election-2020',
  'election-2020-embed'
]

export const PROJECTS_NEED_FB_SDK = [
  'chenuen',
  'disinformation',
  'dollclaw',
  'fake-news',
  'farmhouse',
  'foreign-labour',
  'foreign-labour-ii',
  'foreign-labour-iii',
  'foreign-labour-iv',
  'hotel-hostess-series',
  'marathon',
  'newtype',
  'president-promise',
  'china-company',
  'election-2020'
]

export const PROJECTS_NEED_FB_QUOTE = [
  'nanfangao-bridge',
  'food-delivery',
  'backtoformosa'
]

// include project url path which NOT need to reset scroll position in vue router
export const PROJECTS_PREVENT_SCROLL_BEHAVIOR = [
  'political-contribution',
  'election-news'
]

export const PROJECTS_NOT_NEED_APP_HEADER = [
  '/project/hong-kong-protests-2019',
  '/project/political-contribution',
  '/project/newtype',
  '/project/election-board',
  '/project/marathon',
  '/project/puyuma',
  '/project/disinformation',
  '/project/fake-news',
  '/project/food-delivery',
  '/project/election-2020',
  '/project/maskmap',
  '/project/ncov2019search'
]

export const SCRIPT_GOOGLE_MAP_REQUIRED = `<script src="https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&" async defer></script>`

export const SCRIPT_GOOGLE_RECAPTCHA = `<script src="https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl=zh-TW" async defer></script>`

export const SCRIPT_TYPEKIT = `
<script>
  (function(d) {
    var config = {
      kitId: 'zua0gzf',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
</script>
`
