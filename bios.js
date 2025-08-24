// bios.js – Final Version with Flip Cards + Search
const biosData = [
  // Andhra Pradesh
  { name: "N. T. Rama Rao", bio: "Actor and CM of Andhra Pradesh.", tags: ["politician", "Andhra Pradesh"], profession: "Actor, Politician", awards: "Padma Shri", state: "Andhra Pradesh", img: "ntr.jpeg" },
  { name: "Pingali Venkayya", bio: "Designer of the Indian national flag.", tags: ["freedom fighter", "Andhra Pradesh"], profession: "Freedom Fighter", awards: "-", state: "Andhra Pradesh", img: "pingali.jpeg" },
  { name: "P. V. Narasimha Rao", bio: "Former PM of India.", tags: ["politician", "Andhra Pradesh"], profession: "Politician", awards: "Bharat Ratna (posthumous)", state: "Andhra Pradesh", img: "pv_narasimha.jpeg" },
  { name: "C. N. R. Rao", bio: "Renowned chemist.", tags: ["scientist", "Andhra Pradesh"], profession: "Scientist", awards: "Bharat Ratna", state: "Andhra Pradesh", img: "cnr_rao.jpeg" },
  { name: "Y. S. Rajasekhara Reddy", bio: "Popular CM and reformist.", tags: ["politician", "Andhra Pradesh"], profession: "Politician", awards: "-", state: "Andhra Pradesh", img: "ysr.jpeg" },
  { name: "Alluri Sitarama Raju", bio: "Tribal freedom fighter.", tags: ["freedom fighter", "Andhra Pradesh"], profession: "Revolutionary", awards: "-", state: "Andhra Pradesh", img: "alluri.jpeg" },
 //Kerala
  { name: "E. Sreedharan", profession: "Engineer", awards: "Padma Vibhushan", state: "Kerala", img: "sreedharan.jpeg", bio: "Metro Man of India.", tags: ["scientist", "Kerala"] },
  { name: "M. T. Vasudevan Nair", profession: "Writer", awards: "Jnanpith Award", state: "Kerala", img: "mt_vasudevan.jpeg", bio: "Renowned Malayalam author.", tags: ["artist", "Kerala"] },
  { name: "K. R. Narayanan", profession: "President", awards: "-", state: "Kerala", img: "kr_narayanan.jpeg", bio: "First Dalit President of India.", tags: ["politician", "Kerala"] },
  { name: "Arundhati Roy", profession: "Author", awards: "Booker Prize", state: "Kerala", img: "arundhati.jpeg", bio: "Author of 'God of Small Things'.", tags: ["artist", "Kerala"] },
  { name: "K. J. Yesudas", profession: "Singer", awards: "Padma Vibhushan", state: "Kerala", img: "yesudas.jpeg", bio: "Legendary classical singer.", tags: ["artist", "Kerala"] },
  { name: "S. Sreesanth", profession: "Cricketer", awards: "T20 World Cup Winner", state: "Kerala", img: "sreesanth.jpeg", bio: "Fast bowler for India.", tags: ["sportsperson", "Kerala"] },
  { name: "Mammootty", profession: "Actor", awards: "Padma Shri", state: "Kerala", img: "mammootty.jpeg", bio: "Veteran Malayalam actor.", tags: ["artist", "Kerala"] },
  { name: "Shashi Tharoor", profession: "Politician", awards: "-", state: "Kerala", img: "tharoor.jpeg", bio: "MP and former UN diplomat.", tags: ["politician", "Kerala"] },
  { name: "Boby Chemmanur", profession: "Businessman", awards: "-", state: "Kerala", img: "boby.jpeg", bio: "Gold businessman and philanthropist.", tags: ["entrepreneur", "Kerala"] },
  { name: "V. S. Achuthanandan", profession: "Politician", awards: "-", state: "Kerala", img: "achuthanandan.jpeg", bio: "Senior communist leader.", tags: ["politician", "Kerala"] },

  // Tamil Nadu
  { name: "A. P. J. Abdul Kalam", profession: "Scientist", awards: "Bharat Ratna", state: "Tamil Nadu", img: "abdul_kalam.jpeg", bio: "Missile Man of India.", tags: ["scientist", "Tamil Nadu"] },
  { name: "M. S. Subbulakshmi", profession: "Singer", awards: "Bharat Ratna", state: "Tamil Nadu", img: "ms_subbulakshmi.jpeg", bio: "Carnatic music legend.", tags: ["artist", "Tamil Nadu"] },
  { name: "C. V. Raman", profession: "Physicist", awards: "Nobel Prize", state: "Tamil Nadu", img: "cv_raman.jpeg", bio: "Discovered the Raman Effect.", tags: ["scientist", "Tamil Nadu"] },
  { name: "Kamal Haasan", profession: "Actor", awards: "Padma Bhushan", state: "Tamil Nadu", img: "kamal.jpeg", bio: "Veteran actor and director.", tags: ["artist", "Tamil Nadu"] },
  { name: "Jayalalithaa", profession: "Politician", awards: "-", state: "Tamil Nadu", img: "jayalalithaa.jpeg", bio: "Former CM and AIADMK leader.", tags: ["politician", "Tamil Nadu"] },
  { name: "Ilaiyaraaja", profession: "Music Director", awards: "Padma Vibhushan", state: "Tamil Nadu", img: "ilaiyaraaja.jpeg", bio: "Musical genius of South India.", tags: ["artist", "Tamil Nadu"] },
  { name: "R. Madhavan", profession: "Actor", awards: "-", state: "Tamil Nadu", img: "madhavan.jpg", bio: "Actor and motivational speaker.", tags: ["artist", "Tamil Nadu"] },
  { name: "P. Chidambaram", profession: "Politician", awards: "-", state: "Tamil Nadu", img: "chidambaram.jpg", bio: "Former Finance Minister.", tags: ["politician", "Tamil Nadu"] },
  { name: "Dhanush", profession: "Actor", awards: "National Award", state: "Tamil Nadu", img: "dhanush.jpg", bio: "Popular South Indian actor.", tags: ["artist", "Tamil Nadu"] },
  { name: "Rajinikanth", profession: "Actor", awards: "Padma Vibhushan", state: "Tamil Nadu", img: "rajinikanth.jpg", bio: "Superstar of Tamil cinema.", tags: ["artist", "Tamil Nadu"] },

  // Delhi
  { name: "Arvind Kejriwal", profession: "Politician", awards: "Ramon Magsaysay", state: "Delhi", img: "kejriwal.jpg", bio: "CM and AAP founder.", tags: ["politician", "Delhi"] },
  { name: "Virat Kohli", profession: "Cricketer", awards: "Rajiv Gandhi Khel Ratna", state: "Delhi", img: "kohli.jpg", bio: "Modern-day cricket legend.", tags: ["sportsperson", "Delhi"] },
  { name: "Kapil Dev", profession: "Cricketer", awards: "Padma Bhushan", state: "Delhi", img: "kapil.jpg", bio: "1983 World Cup winning captain.", tags: ["sportsperson", "Delhi"] },
  { name: "Manmohan Singh", profession: "Economist", awards: "-", state: "Delhi", img: "manmohan.jpg", bio: "Ex-PM and economist.", tags: ["politician", "Delhi"] },
  { name: "Sunita Narain", profession: "Environmentalist", awards: "Padma Shri", state: "Delhi", img: "sunita.jpg", bio: "Environmental activist.", tags: ["scientist", "Delhi"] },
  { name: "Kiran Bedi", profession: "IPS Officer", awards: "Ramon Magsaysay", state: "Delhi", img: "kiran.jpg", bio: "India’s first female IPS.", tags: ["politician", "Delhi"] },
  { name: "Meera Sanyal", profession: "Banker", awards: "-", state: "Delhi", img: "meera.jpg", bio: "Banking executive and politician.", tags: ["politician", "Delhi"] },
  { name: "Nandita Das", profession: "Actor", awards: "Chevalier de l'Ordre", state: "Delhi", img: "nandita.jpg", bio: "Renowned indie actress.", tags: ["artist", "Delhi"] },
  { name: "Zakir Khan", profession: "Comedian", awards: "-", state: "Delhi", img: "zakir.jpg", bio: "Popular stand-up comedian.", tags: ["artist", "Delhi"] },
  { name: "Manushi Chhillar", profession: "Model", awards: "Miss World 2017", state: "Delhi", img: "manushi.jpg", bio: "Beauty pageant winner.", tags: ["artist", "Delhi"] },
  { name: "Sir M. Visvesvaraya", profession: "Engineer", awards: "Bharat Ratna", state: "Karnataka", img: "visvesvaraya.jpg", bio: "Legendary civil engineer.", tags: ["scientist", "Karnataka"] },
  { name: "S. Radhakrishnan", profession: "Philosopher", awards: "Bharat Ratna", state: "Karnataka", img: "radhakrishnan.jpg", bio: "2nd President of India.", tags: ["politician", "Karnataka"] },
  { name: "Anil Kumble", profession: "Cricketer", awards: "Padma Shri", state: "Karnataka", img: "kumble.jpg", bio: "Indian spin legend.", tags: ["sportsperson", "Karnataka"] },
  { name: "Ramesh Arvind", profession: "Actor", awards: "Karnataka State Award", state: "Karnataka", img: "ramesh.jpg", bio: "Actor and filmmaker.", tags: ["artist", "Karnataka"] },
  { name: "Sudha Murty", profession: "Writer", awards: "Padma Bhushan", state: "Karnataka", img: "sudha.jpg", bio: "Author and philanthropist.", tags: ["artist", "Karnataka"] },
  { name: "Rahul Dravid", profession: "Cricketer", awards: "Padma Bhushan", state: "Karnataka", img: "dravid.jpg", bio: "The Wall of Indian cricket.", tags: ["sportsperson", "Karnataka"] },
  { name: "Kiran Mazumdar-Shaw", profession: "Entrepreneur", awards: "Padma Bhushan", state: "Karnataka", img: "kiran.jpg", bio: "Biotech pioneer.", tags: ["entrepreneur", "Karnataka"] },
  { name: "U. R. Ananthamurthy", profession: "Writer", awards: "Jnanpith Award", state: "Karnataka", img: "ananthamurthy.jpg", bio: "Kannada novelist.", tags: ["artist", "Karnataka"] },
  { name: "Sudeep", profession: "Actor", awards: "Filmfare Awards", state: "Karnataka", img: "sudeep.jpg", bio: "Popular Kannada actor.", tags: ["artist", "Karnataka"] },
  { name: "Raghavendra Rajkumar", profession: "Actor", awards: "-", state: "Karnataka", img: "rajkumar.jpg", bio: "Son of Dr. Rajkumar.", tags: ["artist", "Karnataka"] },

  // Gujarat
  { name: "Mahatma Gandhi", profession: "Freedom Fighter", awards: "-", state: "Gujarat", img: "gandhi.jpg", bio: "Father of the Nation.", tags: ["freedom fighter", "Gujarat"] },
  { name: "Sardar Vallabhbhai Patel", profession: "Politician", awards: "Bharat Ratna", state: "Gujarat", img: "patel.jpg", bio: "Iron Man of India.", tags: ["politician", "Gujarat"] },
  { name: "Narendra Modi", profession: "Politician", awards: "-", state: "Gujarat", img: "modi.jpg", bio: "Prime Minister of India.", tags: ["politician", "Gujarat"] },
  { name: "Vikram Sarabhai", profession: "Scientist", awards: "Padma Vibhushan", state: "Gujarat", img: "sarabhai.jpg", bio: "Father of ISRO.", tags: ["scientist", "Gujarat"] },
  { name: "Morari Bapu", profession: "Spiritual Leader", awards: "-", state: "Gujarat", img: "morari.jpg", bio: "Ram Katha orator.", tags: ["philosopher", "Gujarat"] },
  { name: "Zarina Hashmi", profession: "Artist", awards: "-", state: "Gujarat", img: "zarina.jpg", bio: "Minimalist printmaker.", tags: ["artist", "Gujarat"] },
  { name: "Dhirubhai Ambani", profession: "Industrialist", awards: "Padma Vibhushan", state: "Gujarat", img: "ambani.jpg", bio: "Founder of Reliance.", tags: ["entrepreneur", "Gujarat"] },
  { name: "Harsha Bhogle", profession: "Commentator", awards: "-", state: "Gujarat", img: "bhogle.jpg", bio: "Cricket analyst.", tags: ["sportsperson", "Gujarat"] },
  { name: "Jaspal Rana", profession: "Shooter", awards: "Arjuna Award", state: "Gujarat", img: "rana.jpg", bio: "Champion pistol shooter.", tags: ["sportsperson", "Gujarat"] },
  { name: "Mallika Sarabhai", profession: "Dancer", awards: "Padma Bhushan", state: "Gujarat", img: "mallika.jpg", bio: "Bharatanatyam exponent.", tags: ["artist", "Gujarat"] },

  // West Bengal
  { name: "Rabindranath Tagore", profession: "Poet", awards: "Nobel Prize", state: "West Bengal", img: "tagore.jpg", bio: "Author of national anthem.", tags: ["artist", "West Bengal"] },
  { name: "Subhas Chandra Bose", profession: "Freedom Fighter", awards: "-", state: "West Bengal", img: "bose.jpg", bio: "INA leader.", tags: ["freedom fighter", "West Bengal"] },
  { name: "Satyajit Ray", profession: "Filmmaker", awards: "Oscar (Honorary)", state: "West Bengal", img: "ray.jpg", bio: "Legendary director.", tags: ["artist", "West Bengal"] },
  { name: "Amartya Sen", profession: "Economist", awards: "Nobel Prize", state: "West Bengal", img: "sen.jpg", bio: "Welfare economist.", tags: ["scientist", "West Bengal"] },
  { name: "Mamata Banerjee", profession: "Politician", awards: "-", state: "West Bengal", img: "mamata.jpg", bio: "Chief Minister of WB.", tags: ["politician", "West Bengal"] },
  { name: "Swami Vivekananda", profession: "Spiritual Leader", awards: "-", state: "West Bengal", img: "vivekananda.jpg", bio: "Youth icon and monk.", tags: ["philosopher", "West Bengal"] },
  { name: "Jyoti Basu", profession: "Politician", awards: "-", state: "West Bengal", img: "jyoti.jpg", bio: "Longest-serving CM.", tags: ["politician", "West Bengal"] },
  { name: "Rituparno Ghosh", profession: "Filmmaker", awards: "National Awards", state: "West Bengal", img: "rituparno.jpg", bio: "Modern Bengali cinema icon.", tags: ["artist", "West Bengal"] },
  { name: "Sourav Ganguly", profession: "Cricketer", awards: "Padma Shri", state: "West Bengal", img: "ganguly.jpg", bio: "Former India cricket captain.", tags: ["sportsperson", "West Bengal"] },
  { name: "Jhumpa Lahiri", profession: "Author", awards: "Pulitzer Prize", state: "West Bengal", img: "lahiri.jpg", bio: "Renowned Indian-American author.", tags: ["artist", "West Bengal"] }

  // Continue with Karnataka, Gujarat, West Bengal in next patch
];

  // Add remaining states similarly...

function getURLParam(name) {
  return new URLSearchParams(window.location.search).get(name) || "";
}

async function semanticSearch() {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const category = document.getElementById("categoryFilter").value.toLowerCase();
  const region = document.getElementById("regionFilter").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "⏳ Searching...";

  const filteredData = biosData.filter(b => {
    const matchQuery = !query || b.name.toLowerCase().includes(query) || b.bio.toLowerCase().includes(query);
    const matchCategory = !category || b.tags.some(tag => tag.toLowerCase() === category);
    const matchRegion = !region || b.tags.some(tag => tag.toLowerCase() === region);
    return matchQuery && matchCategory && matchRegion;
  });

  resultsDiv.innerHTML = filteredData.length ? renderResults(filteredData) : "❌ No results found.";
}

function renderResults(data) {
  return `<div class="card-grid">` + data.map(b => `
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h3>${b.name}</h3>
          <p><strong>Profession:</strong> ${b.profession}</p>
          <p><strong>Awards:</strong> ${b.awards}</p>
          <p><strong>State:</strong> ${b.state}</p>
        </div>
        <div class="flip-card-back">
          <img src="images/${b.img}" alt="${b.name}" />
        </div>
      </div>
    </div>
  `).join("") + `</div>`;
}

function startVoice() {
  const lang = document.getElementById("voiceLang").value || "en-IN";
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = lang;
  recognition.start();
  recognition.onresult = function(e) {
    document.getElementById("searchInput").value = e.results[0][0].transcript;
    semanticSearch();
  };
}

window.addEventListener("DOMContentLoaded", () => {
  const urlRegion = getURLParam("region");
  if (urlRegion) {
    document.getElementById("regionFilter").value = urlRegion;
    semanticSearch();
  }
});
