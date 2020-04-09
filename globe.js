window.addEventListener('load',function(){
  $.ajax({
    url: "http://localhost:8000/stats",
    type: "get",
    dataType: "json",
    success: function (response){
            window.sessionStorage.setItem("CountryData",JSON.stringify(response.result))
         
     }
});
})
var flag=[];
var cname;
var j;
var png ;
//country flag json fetch from local directory
const flagDictionary = {'Afghanistan': 'afg',
'Åland Islands': 'ala',
'Albania': 'alb',
'Algeria': 'dza',
'American Samoa': 'asm',
'Andorra': 'and',
'Angola': 'ago',
'Anguilla': 'aia',
'Antarctica': 'ata',
'Antigua and Barbuda': 'atg',
'Argentina': 'arg',
'Armenia': 'arm',
'Aruba': 'abw',
'Australia': 'aus',
'Austria': 'aut',
'Azerbaijan': 'aze',
'Bahamas': 'bhs',
'Bahrain': 'bhr',
'Bangladesh': 'bgd',
'Barbados': 'brb',
'Belarus': 'blr',
'Belgium': 'bel',
'Belize': 'blz',
'Benin': 'ben',
'Bermuda': 'bmu',
'Bhutan': 'btn',
'Bolivia (Plurinational State of)': 'bol',
'Bonaire, Sint Eustatius and Saba': 'bes',
'Bosnia and Herzegovina': 'bih',
'Botswana': 'bwa',
'Bouvet Island': 'bvt',
'Brazil': 'bra',
'British Indian Ocean Territory': 'iot',
'Brunei Darussalam': 'brn',
'Bulgaria': 'bgr',
'Burkina Faso': 'bfa',
'Burundi': 'bdi',
'Cabo Verde': 'cpv',
'Cambodia': 'khm',
'Cameroon': 'cmr',
'Canada': 'can',
'Cayman Islands': 'cym',
'Central African Republic': 'caf',
'Chad': 'tcd',
'Chile': 'chl',
'China': 'chn',
'Christmas Island': 'cxr',
'Cocos (Keeling) Islands': 'cck',
'Colombia': 'col',
'Comoros': 'com',
'Congo': 'cog',
'Congo, Democratic Republic of the': 'cod',
'Cook Islands': 'cok',
'Costa Rica': 'cri',
"Côte d'Ivoire": 'civ',
'Croatia': 'hrv',
'Cuba': 'cub',
'Curaçao': 'cuw',
'Cyprus': 'cyp',
'Czechia': 'cze',
'Denmark': 'dnk',
'Djibouti': 'dji',
'Dominica': 'dma',
'Dominican Republic': 'dom',
'Ecuador': 'ecu',
'Egypt': 'egy',
'El Salvador': 'slv',
'Equatorial Guinea': 'gnq',
'Eritrea': 'eri',
'Estonia': 'est',
'Eswatini': 'swz',
'Ethiopia': 'eth',
'Falkland Islands (Malvinas)': 'flk',
'Faroe Islands': 'fro',
'Fiji': 'fji',
'Finland': 'fin',
'France': 'fra',
'French Guiana': 'guf',
'French Polynesia': 'pyf',
'French Southern Territories': 'atf',
'Gabon': 'gab',
'Gambia': 'gmb',
'Georgia': 'geo',
'Germany': 'deu',
'Ghana': 'gha',
'Gibraltar': 'gib',
'Greece': 'grc',
'Greenland': 'grl',
'Grenada': 'grd',
'Guadeloupe': 'glp',
'Guam': 'gum',
'Guatemala': 'gtm',
'Guernsey': 'ggy',
'Guinea': 'gin',
'Guinea-Bissau': 'gnb',
'Guyana': 'guy',
'Haiti': 'hti',
'Heard Island and McDonald Islands': 'hmd',
'Holy See': 'vat',
'Honduras': 'hnd',
'Hong Kong': 'hkg',
'Hungary': 'hun',
'Iceland': 'isl',
'India': 'ind',
'Indonesia': 'idn',
'Iran (Islamic Republic of)': 'irn',
'Iraq': 'irq',
'Ireland': 'irl',
'Isle of Man': 'imn',
'Israel': 'isr',
'Italy': 'ita',
'Jamaica': 'jam',
'Japan': 'jpn',
'Jersey': 'jey',
'Jordan': 'jor',
'Kazakhstan': 'kaz',
'Kenya': 'ken',
'Kiribati': 'kir',
"Korea (Democratic People's Republic of)": 'prk',
'Korea, Republic of': 'kor',
'Kuwait': 'kwt',
'Kyrgyzstan': 'kgz',
"Lao People's Democratic Republic": 'lao',
'Latvia': 'lva',
'Lebanon': 'lbn',
'Lesotho': 'lso',
'Liberia': 'lbr',
'Libya': 'lby',
'Liechtenstein': 'lie',
'Lithuania': 'ltu',
'Luxembourg': 'lux',
'Macao': 'mac',
'Madagascar': 'mdg',
'Malawi': 'mwi',
'Malaysia': 'mys',
'Maldives': 'mdv',
'Mali': 'mli',
'Malta': 'mlt',
'Marshall Islands': 'mhl',
'Martinique': 'mtq',
'Mauritania': 'mrt',
'Mauritius': 'mus',
'Mayotte': 'myt',
'Mexico': 'mex',
'Micronesia (Federated States of)': 'fsm',
'Moldova, Republic of': 'mda',
'Monaco': 'mco',
'Mongolia': 'mng',
'Montenegro': 'mne',
'Montserrat': 'msr',
'Morocco': 'mar',
'Mozambique': 'moz',
'Myanmar': 'mmr',
'Namibia': 'nam',
'Nauru': 'nru',
'Nepal': 'npl',
'Netherlands': 'nld',
'New Caledonia': 'ncl',
'New Zealand': 'nzl',
'Nicaragua': 'nic',
'Niger': 'ner',
'Nigeria': 'nga',
'Niue': 'niu',
'Norfolk Island': 'nfk',
'North Macedonia': 'mkd',
'Northern Mariana Islands': 'mnp',
'Norway': 'nor',
'Oman': 'omn',
'Pakistan': 'pak',
'Palau': 'plw',
'Palestine, State of': 'pse',
'Panama': 'pan',
'Papua New Guinea': 'png',
'Paraguay': 'pry',
'Peru': 'per',
'Philippines': 'phl',
'Pitcairn': 'pcn',
'Poland': 'pol',
'Portugal': 'prt',
'Puerto Rico': 'pri',
'Qatar': 'qat',
'Réunion': 'reu',
'Romania': 'rou',
'Russian Federation': 'rus',
'Rwanda': 'rwa',
'Saint Barthélemy': 'blm',
'Saint Helena, Ascension and Tristan da Cunha': 'shn',
'Saint Kitts and Nevis': 'kna',
'Saint Lucia': 'lca',
'Saint Martin (French part)': 'maf',
'Saint Pierre and Miquelon': 'spm',
'Saint Vincent and the Grenadines': 'vct',
'Samoa': 'wsm',
'San Marino': 'smr',
'Sao Tome and Principe': 'stp',
'Saudi Arabia': 'sau',
'Senegal': 'sen',
'Serbia': 'srb',
'Seychelles': 'syc',
'Sierra Leone': 'sle',
'Singapore': 'sgp',
'Sint Maarten (Dutch part)': 'sxm',
'Slovakia': 'svk',
'Slovenia': 'svn',
'Solomon Islands': 'slb',
'Somalia': 'som',
'South Africa': 'zaf',
'South Georgia and the South Sandwich Islands': 'sgs',
'South Sudan': 'ssd',
'Spain': 'esp',
'Sri Lanka': 'lka',
'Sudan': 'sdn',
'Suriname': 'sur',
'Svalbard and Jan Mayen': 'sjm',
'Sweden': 'swe',
'Switzerland': 'che',
'Syrian Arab Republic': 'syr',
'Taiwan, Province of China': 'twn',
'Tajikistan': 'tjk',
'Tanzania, United Republic of': 'tza',
'Thailand': 'tha',
'Timor-Leste': 'tls',
'Togo': 'tgo',
'Tokelau': 'tkl',
'Tonga': 'ton',
'Trinidad and Tobago': 'tto',
'Tunisia': 'tun',
'Turkey': 'tur',
'Turkmenistan': 'tkm',
'Turks and Caicos Islands': 'tca',
'Tuvalu': 'tuv',
'Uganda': 'uga',
'Ukraine': 'ukr',
'United Arab Emirates': 'are',
'United Kingdom of Great Britain and Northern Ireland': 'gbr',
'United States of America': 'usa',
'United States Minor Outlying Islands': 'umi',
'Uruguay': 'ury',
'Uzbekistan': 'uzb',
'Vanuatu': 'vut',
'Venezuela (Bolivarian Republic of)': 'ven',
'Viet Nam': 'vnm',
'Virgin Islands (British)': 'vgb',
'Virgin Islands (U.S.)': 'vir',
'Wallis and Futuna': 'wlf',
'Western Sahara': 'esh',
'Yemen': 'yem',
'Zambia': 'zmb',
'Zimbabwe': 'zwe'};
function search(cname , j) {
  for( var i=0 ; i < flag.length ; i++){
    if( cname === flag[i].Name){
      if (data1[j].newCases == "" && data1[j].newDeaths == ""){
        data1[j].newCases == "0"
        data1[j].newDeaths == "0"
      }
      else if (data1[j].newDeaths == ""){
        data1[j].newDeaths == "0"
      }
      else if (data1[j].newCases == ""){
        data1[j].newCases == "0"
      }
      else {

      }
      // png = flagDictionary[cname];
      console.log(cname)
      document.getElementById('c-name').innerHTML = flag[i].Name
      document.getElementById('t-case').innerHTML = data1[j].totalCases
      document.getElementById('a-case').innerHTML = data1[j].activeCases  
      document.getElementById('d-case').innerHTML = data1[j].totalDeaths
      document.getElementById('r-case').innerHTML = data1[j].totalRecovered
      document.getElementById('n-case').innerHTML = data1[j].newCases
      document.getElementById('nd-case').innerHTML = data1[j].newDeaths
    }
  }
}

//modal code
var modal = document.getElementsByClassName('modal')[0];
var overlay = document.getElementById('overlay');
window.onclick=function(){
  if(event.target== overlay){
      modal.style.display="none"; 
  }}



// Set Modal values
// var imgsrc = document.getElementById('flag-content');

// imgsrc.src = png

const data = sessionStorage.getItem('CountryData');

// ms to wait after dragging before auto-rotating
var rotationDelay = 3000
// scale of the globe (not the canvas element)
var scaleFactor = 0.7
// autorotation speed
var degPerSec = 6
// start angles
var angles = { x: -20, y: 40, z: 0}
// colors
var colorWater = '#000'
var colorLand = '#111'
var colorGraticule = '#ccc'
var colorCountry = '#a00'


//
// Handler
//
const data1 = JSON.parse(data)
function enter(country) {
var country = countryList.find(function(c) {
return c.id === country.id
})

current.text(country && country.name || '')
for( var i=0 ;i <  data1.length ; i++){
  if(data1[i].country == country.name){
    console.log((JSON.stringify(data1[i])))
    search(data1[i].country , i)
    modal.style.display = "block";
  }
  
}}

 //World - Stats


 var d1 = document.getElementById('data-active');
 d1.innerHTML = data1[0].totalCases

 var d2 = document.getElementById('data-deaths');
 d2.innerHTML = data1[0].totalDeaths

 var d32 = document.getElementById('data-recover');
 d32.innerHTML = data1[0].totalRecovered

function leave(country) {
current.text('')
}

//
// Variables
//

var current = d3.select('#current')
var canvas = d3.select('#globe')
var context = canvas.node().getContext('2d')
var water = {type: 'Sphere'}
var projection = d3.geoOrthographic().precision(0.1)
// var graticule = d3.geoGraticule10()
var path = d3.geoPath(projection).context(context)
var v0 // Mouse position in Cartesian coordinates at start of drag gesture.
var r0 // Projection rotation as Euler angles at start.
var q0 // Projection rotation as versor at start.
var lastTime = d3.now()
var degPerMs = degPerSec / 1000
var width, height
var land, countries
var countryList
var autorotate, now, diff, roation
var currentCountry

//
// Functions
//

function setAngles() {
var rotation = projection.rotate()
rotation[0] = angles.y
rotation[1] = angles.x
rotation[2] = angles.z
projection.rotate(rotation)
}

function scale() {
width = document.documentElement.clientWidth
height = document.documentElement.clientHeight
canvas.attr('width', width).attr('height', height)
projection
.scale((scaleFactor * Math.min(width, height)) / 2)
.translate([width / 2, height / 2])
render()
}

function startRotation(delay) {
autorotate.restart(rotate, delay || 0)
}

function stopRotation() {
autorotate.stop()
}

function dragstarted() {
v0 = versor.cartesian(projection.invert(d3.mouse(this)))
r0 = projection.rotate()
q0 = versor(r0)
stopRotation()
}

function dragged() {
var v1 = versor.cartesian(projection.rotate(r0).invert(d3.mouse(this)))
var q1 = versor.multiply(q0, versor.delta(v0, v1))
var r1 = versor.rotation(q1)
projection.rotate(r1)
render()
}

function dragended() {
startRotation(rotationDelay)
}

function render() {
context.clearRect(0, 0, width, height)
fill(water, colorWater)
// stroke(graticule, colorGraticule)
fill(land, colorLand)
if (currentCountry) {
fill(currentCountry, colorCountry)
}
}

function fill(obj, color) {
context.beginPath()
path(obj)
context.fillStyle = color
context.fill()
}

function stroke(obj, color) {
context.beginPath()
path(obj)
context.strokeStyle = color
context.stroke()
}

function rotate(elapsed) {
now = d3.now()
diff = now - lastTime
if (diff < elapsed) {
rotation = projection.rotate()
rotation[0] += diff * degPerMs
projection.rotate(rotation)
render()
}
lastTime = now
}

function loadData(cb) {
d3.json('https://unpkg.com/world-atlas@1/world/110m.json', function(error, world) {
if (error) throw error
d3.tsv('https://gist.githubusercontent.com/mbostock/4090846/raw/07e73f3c2d21558489604a0bc434b3a5cf41a867/world-country-names.tsv', function(error, countries) {
  if (error) throw error
  cb(world, countries)
})
})
}

// https://github.com/d3/d3-polygon
function polygonContains(polygon, point) {
var n = polygon.length
var p = polygon[n - 1]
var x = point[0], y = point[1]
var x0 = p[0], y0 = p[1]
var x1, y1
var inside = false
for (var i = 0; i < n; ++i) {
p = polygon[i], x1 = p[0], y1 = p[1]
if (((y1 > y) !== (y0 > y)) && (x < (x0 - x1) * (y - y1) / (y0 - y1) + x1)) inside = !inside
x0 = x1, y0 = y1
}
return inside
}

function mousemove() {
var c = getCountry(this)
if (!c) {
if (currentCountry) {
  leave(currentCountry)
  currentCountry = undefined
  render()
}
return
}
if (c === currentCountry) {
return
}
currentCountry = c
render()
enter(c)
}

function getCountry(event) {
var pos = projection.invert(d3.mouse(event))
return countries.features.find(function(f) {
return f.geometry.coordinates.find(function(c1) {
  return polygonContains(c1, pos) || c1.find(function(c2) {
    console.log( )
    return polygonContains(c2, pos)
    
  })
})
})
}

//
// Initialization
//

setAngles()

canvas
.call(d3.drag()
.on('start', dragstarted)
.on('drag', dragged)
.on('end', dragended)
)
.on('click', mousemove)

loadData(function(world, cList) {
land = topojson.feature(world, world.objects.land)
countries = topojson.feature(world, world.objects.countries)
countryList = cList

window.addEventListener('load', scale)
scale()
autorotate = d3.timer(rotate)
})
