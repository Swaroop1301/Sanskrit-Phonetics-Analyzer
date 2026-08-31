/* ═══════════════════════════════════════════════════
   Sanskrit Phonetics Database
   ═══════════════════════════════════════════════════ */
const DB = {
  // ─── Vowels (स्वर) ───
  'अ': { type:'स्वर', sub:'हृस्व',  place:'कण्ठ',      placeEn:'Guttural',          roman:'a',   desc:'Short guttural vowel' },
  'आ': { type:'स्वर', sub:'दीर्घ',  place:'कण्ठ',      placeEn:'Guttural',          roman:'ā',   desc:'Long guttural vowel' },
  'इ': { type:'स्वर', sub:'हृस्व',  place:'तालु',      placeEn:'Palatal',           roman:'i',   desc:'Short palatal vowel' },
  'ई': { type:'स्वर', sub:'दीर्घ',  place:'तालु',      placeEn:'Palatal',           roman:'ī',   desc:'Long palatal vowel' },
  'उ': { type:'स्वर', sub:'हृस्व',  place:'ओष्ठ',      placeEn:'Labial',            roman:'u',   desc:'Short labial vowel' },
  'ऊ': { type:'स्वर', sub:'दीर्घ',  place:'ओष्ठ',      placeEn:'Labial',            roman:'ū',   desc:'Long labial vowel' },
  'ऋ': { type:'स्वर', sub:'हृस्व',  place:'मूर्धा',    placeEn:'Retroflex',         roman:'ṛ',   desc:'Short retroflex vowel' },
  'ॠ': { type:'स्वर', sub:'दीर्घ',  place:'मूर्धा',    placeEn:'Retroflex',         roman:'ṝ',   desc:'Long retroflex vowel' },
  'ऌ': { type:'स्वर', sub:'हृस्व',  place:'दन्त',      placeEn:'Dental',            roman:'ḷ',   desc:'Short dental vowel' },
  'ॡ': { type:'स्वर', sub:'दीर्घ',  place:'दन्त',      placeEn:'Dental',            roman:'ḹ',   desc:'Long dental vowel' },
  'ए': { type:'स्वर', sub:'दीर्घ',  place:'कण्ठतालु',  placeEn:'Guttural-Palatal',  roman:'e',   desc:'Guttural-palatal diphthong' },
  'ऐ': { type:'स्वर', sub:'दीर्घ',  place:'कण्ठतालु',  placeEn:'Guttural-Palatal',  roman:'ai',  desc:'Guttural-palatal diphthong' },
  'ओ': { type:'स्वर', sub:'दीर्घ',  place:'कण्ठोष्ठ',  placeEn:'Guttural-Labial',   roman:'o',   desc:'Guttural-labial diphthong' },
  'औ': { type:'स्वर', sub:'दीर्घ',  place:'कण्ठोष्ठ',  placeEn:'Guttural-Labial',   roman:'au',  desc:'Guttural-labial diphthong' },

  // ─── Consonants (व्यञ्जन) — Kavarga ───
  'क': { type:'व्यञ्जन', sub:'स्पर्श', place:'कण्ठ',   placeEn:'Guttural',  effort:'अल्पप्राण', voice:'अघोष', roman:'ka',  desc:'Voiceless unaspirated guttural stop' },
  'ख': { type:'व्यञ्जन', sub:'स्पर्श', place:'कण्ठ',   placeEn:'Guttural',  effort:'महाप्राण',  voice:'अघोष', roman:'kha', desc:'Voiceless aspirated guttural stop' },
  'ग': { type:'व्यञ्जन', sub:'स्पर्श', place:'कण्ठ',   placeEn:'Guttural',  effort:'अल्पप्राण', voice:'घोष',  roman:'ga',  desc:'Voiced unaspirated guttural stop' },
  'घ': { type:'व्यञ्जन', sub:'स्पर्श', place:'कण्ठ',   placeEn:'Guttural',  effort:'महाप्राण',  voice:'घोष',  roman:'gha', desc:'Voiced aspirated guttural stop' },
  'ङ': { type:'व्यञ्जन', sub:'स्पर्श', place:'कण्ठ',   placeEn:'Guttural',  effort:'अल्पप्राण', voice:'घोष',  nasal:true, roman:'ṅa', desc:'Guttural nasal' },

  // ─── Chavarga ───
  'च': { type:'व्यञ्जन', sub:'स्पर्श', place:'तालु',   placeEn:'Palatal',   effort:'अल्पप्राण', voice:'अघोष', roman:'ca',  desc:'Voiceless unaspirated palatal stop' },
  'छ': { type:'व्यञ्जन', sub:'स्पर्श', place:'तालु',   placeEn:'Palatal',   effort:'महाप्राण',  voice:'अघोष', roman:'cha', desc:'Voiceless aspirated palatal stop' },
  'ज': { type:'व्यञ्जन', sub:'स्पर्श', place:'तालु',   placeEn:'Palatal',   effort:'अल्पप्राण', voice:'घोष',  roman:'ja',  desc:'Voiced unaspirated palatal stop' },
  'झ': { type:'व्यञ्जन', sub:'स्पर्श', place:'तालु',   placeEn:'Palatal',   effort:'महाप्राण',  voice:'घोष',  roman:'jha', desc:'Voiced aspirated palatal stop' },
  'ञ': { type:'व्यञ्जन', sub:'स्पर्श', place:'तालु',   placeEn:'Palatal',   effort:'अल्पप्राण', voice:'घोष',  nasal:true, roman:'ña', desc:'Palatal nasal' },

  // ─── Retroflex (मूर्धन्य) ───
  'ट': { type:'व्यञ्जन', sub:'स्पर्श', place:'मूर्धा', placeEn:'Retroflex', effort:'अल्पप्राण', voice:'अघोष', roman:'ṭa',  desc:'Voiceless unaspirated retroflex stop' },
  'ठ': { type:'व्यञ्जन', sub:'स्पर्श', place:'मूर्धा', placeEn:'Retroflex', effort:'महाप्राण',  voice:'अघोष', roman:'ṭha', desc:'Voiceless aspirated retroflex stop' },
  'ड': { type:'व्यञ्जन', sub:'स्पर्श', place:'मूर्धा', placeEn:'Retroflex', effort:'अल्पप्राण', voice:'घोष',  roman:'ḍa',  desc:'Voiced unaspirated retroflex stop' },
  'ढ': { type:'व्यञ्जन', sub:'स्पर्श', place:'मूर्धा', placeEn:'Retroflex', effort:'महाप्राण',  voice:'घोष',  roman:'ḍha', desc:'Voiced aspirated retroflex stop' },
  'ण': { type:'व्यञ्जन', sub:'स्पर्श', place:'मूर्धा', placeEn:'Retroflex', effort:'अल्पप्राण', voice:'घोष',  nasal:true, roman:'ṇa', desc:'Retroflex nasal' },

  // ─── Dental (दन्त्य) ───
  'त': { type:'व्यञ्जन', sub:'स्पर्श', place:'दन्त',   placeEn:'Dental',    effort:'अल्पप्राण', voice:'अघोष', roman:'ta',  desc:'Voiceless unaspirated dental stop' },
  'थ': { type:'व्यञ्जन', sub:'स्पर्श', place:'दन्त',   placeEn:'Dental',    effort:'महाप्राण',  voice:'अघोष', roman:'tha', desc:'Voiceless aspirated dental stop' },
  'द': { type:'व्यञ्जन', sub:'स्पर्श', place:'दन्त',   placeEn:'Dental',    effort:'अल्पप्राण', voice:'घोष',  roman:'da',  desc:'Voiced unaspirated dental stop' },
  'ध': { type:'व्यञ्जन', sub:'स्पर्श', place:'दन्त',   placeEn:'Dental',    effort:'महाप्राण',  voice:'घोष',  roman:'dha', desc:'Voiced aspirated dental stop' },
  'न': { type:'व्यञ्जन', sub:'स्पर्श', place:'दन्त',   placeEn:'Dental',    effort:'अल्पप्राण', voice:'घोष',  nasal:true, roman:'na', desc:'Dental nasal' },

  // ─── Labial (ओष्ठ्य) ───
  'प': { type:'व्यञ्जन', sub:'स्पर्श', place:'ओष्ठ',   placeEn:'Labial',    effort:'अल्पप्राण', voice:'अघोष', roman:'pa',  desc:'Voiceless unaspirated labial stop' },
  'फ': { type:'व्यञ्जन', sub:'स्पर्श', place:'ओष्ठ',   placeEn:'Labial',    effort:'महाप्राण',  voice:'अघोष', roman:'pha', desc:'Voiceless aspirated labial stop' },
  'ब': { type:'व्यञ्जन', sub:'स्पर्श', place:'ओष्ठ',   placeEn:'Labial',    effort:'अल्पप्राण', voice:'घोष',  roman:'ba',  desc:'Voiced unaspirated labial stop' },
  'भ': { type:'व्यञ्जन', sub:'स्पर्श', place:'ओष्ठ',   placeEn:'Labial',    effort:'महाप्राण',  voice:'घोष',  roman:'bha', desc:'Voiced aspirated labial stop' },
  'म': { type:'व्यञ्जन', sub:'स्पर्श', place:'ओष्ठ',   placeEn:'Labial',    effort:'अल्पप्राण', voice:'घोष',  nasal:true, roman:'ma', desc:'Labial nasal' },

  // ─── Semi-vowels (अन्तस्थ) ───
  'य': { type:'व्यञ्जन', sub:'अन्तस्थ', place:'तालु',      placeEn:'Palatal',        roman:'ya', desc:'Palatal semi-vowel (glide)' },
  'र': { type:'व्यञ्जन', sub:'अन्तस्थ', place:'मूर्धा',    placeEn:'Retroflex',      roman:'ra', desc:'Retroflex semi-vowel (tap/trill)' },
  'ल': { type:'व्यञ्जन', sub:'अन्तस्थ', place:'दन्त',      placeEn:'Dental',         roman:'la', desc:'Dental lateral approximant' },
  'व': { type:'व्यञ्जन', sub:'अन्तस्थ', place:'दन्तोष्ठ',  placeEn:'Dental-Labial',  roman:'va', desc:'Dental-labial semi-vowel' },

  // ─── Sibilants / Fricatives (ऊष्म) ───
  'श': { type:'व्यञ्जन', sub:'ऊष्म', place:'तालु',   placeEn:'Palatal',   roman:'śa', desc:'Palatal sibilant' },
  'ष': { type:'व्यञ्जन', sub:'ऊष्म', place:'मूर्धा', placeEn:'Retroflex', roman:'ṣa', desc:'Retroflex sibilant' },
  'स': { type:'व्यञ्जन', sub:'ऊष्म', place:'दन्त',   placeEn:'Dental',    roman:'sa', desc:'Dental sibilant' },
  'ह': { type:'व्यञ्जन', sub:'ऊष्म', place:'कण्ठ',   placeEn:'Guttural',  roman:'ha', desc:'Guttural fricative' },

  // ─── Matras (मात्रा) ───
  'ा': { type:'मात्रा', vowel:'आ', place:'कण्ठ',      placeEn:'Guttural',          roman:'ā',  desc:'Matra of आ' },
  'ि': { type:'मात्रा', vowel:'इ', place:'तालु',      placeEn:'Palatal',           roman:'i',  desc:'Matra of इ' },
  'ी': { type:'मात्रा', vowel:'ई', place:'तालु',      placeEn:'Palatal',           roman:'ī',  desc:'Matra of ई' },
  'ु': { type:'मात्रा', vowel:'उ', place:'ओष्ठ',      placeEn:'Labial',            roman:'u',  desc:'Matra of उ' },
  'ू': { type:'मात्रा', vowel:'ऊ', place:'ओष्ठ',      placeEn:'Labial',            roman:'ū',  desc:'Matra of ऊ' },
  'ृ': { type:'मात्रा', vowel:'ऋ', place:'मूर्धा',    placeEn:'Retroflex',         roman:'ṛ',  desc:'Matra of ऋ' },
  'े': { type:'मात्रा', vowel:'ए', place:'कण्ठतालु',  placeEn:'Guttural-Palatal',  roman:'e',  desc:'Matra of ए' },
  'ै': { type:'मात्रा', vowel:'ऐ', place:'कण्ठतालु',  placeEn:'Guttural-Palatal',  roman:'ai', desc:'Matra of ऐ' },
  'ो': { type:'मात्रा', vowel:'ओ', place:'कण्ठोष्ठ',  placeEn:'Guttural-Labial',   roman:'o',  desc:'Matra of ओ' },
  'ौ': { type:'मात्रा', vowel:'औ', place:'कण्ठोष्ठ',  placeEn:'Guttural-Labial',   roman:'au', desc:'Matra of औ' },

  // ─── Special marks ───
  'ं': { type:'अनुस्वार',    place:'नासिक्य',  placeEn:'Nasal',    roman:'ṃ',  desc:'Nasal after-sound (Anusvāra)' },
  'ः': { type:'विसर्ग',      place:'कण्ठ',     placeEn:'Guttural', roman:'ḥ',  desc:'Aspirated release (Visarga)' },
  'ँ': { type:'चन्द्रबिन्दु', place:'नासिक्य',  placeEn:'Nasal',    roman:'n̐',  desc:'Nasalisation marker (Chandrabindu)' },
  '्': { type:'हलन्त',       place:'—',        placeEn:'—',        roman:'',   desc:'Halant — suppresses inherent अ' },
};

/* ═══════════════════════════════════════════════════
   Helpers
   ═══════════════════════════════════════════════════ */

/** Map a type string to a CSS class */
function cssClass(type) {
  if (type === 'स्वर') return 'swar';
  if (type === 'व्यञ्जन') return 'vyanjan';
  if (type === 'मात्रा') return 'matra';
  if (['अनुस्वार','विसर्ग','चन्द्रबिन्दु','हलन्त'].includes(type)) return 'special';
  return 'unrecog';
}

/** Human-readable type label */
function typeLabel(info) {
  if (!info) return 'अज्ञात';
  const labels = {
    'स्वर': 'स्वर (Vowel)',
    'व्यञ्जन': 'व्यञ्जन (Consonant)',
    'मात्रा': 'मात्रा (Matra)',
    'अनुस्वार': 'अनुस्वार',
    'विसर्ग': 'विसर्ग',
    'चन्द्रबिन्दु': 'चन्द्रबिन्दु',
    'हलन्त': 'हलन्त',
  };
  return labels[info.type] || info.type;
}

/** Build extra detail lines */
function extraLines(info) {
  if (!info) return '';
  const parts = [];
  if (info.sub)    parts.push(info.sub);
  if (info.effort) parts.push(info.effort);
  if (info.voice)  parts.push(info.voice);
  if (info.nasal)  parts.push('अनुनासिक');
  if (info.vowel)  parts.push(`↔ ${info.vowel}`);
  return parts.join(' · ');
}

/* ═══════════════════════════════════════════════════
   Analysis Engine
   ═══════════════════════════════════════════════════ */
function analyzeText(text) {
  const chars = [...text];
  const results = [];
  for (const ch of chars) {
    // Skip whitespace and common punctuation
    if (/\s/.test(ch)) continue;
    const info = DB[ch] || null;
    results.push({ char: ch, info });
  }
  return results;
}

/* ═══════════════════════════════════════════════════
   Render Results
   ═══════════════════════════════════════════════════ */
const resultsSection = document.getElementById('results-section');
const summaryBar     = document.getElementById('summary-bar');
const resultsGrid    = document.getElementById('results-grid');

function renderResults(results) {
  if (results.length === 0) {
    resultsSection.hidden = true;
    return;
  }
  resultsSection.hidden = false;

  // Summary counts
  const counts = { swar: 0, vyanjan: 0, matra: 0, special: 0, unrecog: 0 };
  results.forEach(r => {
    const cls = r.info ? cssClass(r.info.type) : 'unrecog';
    counts[cls] = (counts[cls] || 0) + 1;
  });

  summaryBar.innerHTML = '';
  const labels = [
    ['swar',    `स्वर ${counts.swar}`],
    ['vyanjan', `व्यञ्जन ${counts.vyanjan}`],
    ['matra',   `मात्रा ${counts.matra}`],
    ['special', `विशेष ${counts.special}`],
    ['unrecog', `अज्ञात ${counts.unrecog}`],
  ];
  labels.forEach(([cls, text]) => {
    if (counts[cls] > 0) {
      const b = document.createElement('span');
      b.className = `summary-badge ${cls}`;
      b.textContent = text;
      summaryBar.appendChild(b);
    }
  });

  // Character cards
  resultsGrid.innerHTML = '';
  results.forEach((r, i) => {
    const cls = r.info ? cssClass(r.info.type) : 'unrecog';
    const card = document.createElement('div');
    card.className = `char-card ${cls}`;
    card.style.animationDelay = `${i * 40}ms`;

    const roman  = r.info ? r.info.roman : '';
    const label  = r.info ? typeLabel(r.info) : 'अज्ञात (Unknown)';
    const place  = r.info ? `${r.info.place} (${r.info.placeEn})` : '—';
    const extra  = r.info ? extraLines(r.info) : '';
    const desc   = r.info ? r.info.desc : 'Not in database';

    card.innerHTML = `
      <div class="char-big">${r.char}</div>
      <div class="char-roman">${roman}</div>
      <span class="char-type">${label}</span>
      <span class="char-place">${place}</span>
      ${extra ? `<span class="char-extra">${extra}</span>` : ''}
      <span class="char-extra">${desc}</span>
    `;
    resultsGrid.appendChild(card);
  });

  // Smooth scroll to results
  resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ═══════════════════════════════════════════════════
   Sound Database Grid
   ═══════════════════════════════════════════════════ */
const dbGrid    = document.getElementById('db-grid');
const dbFilters = document.getElementById('db-filters');

// Ordered display groups
const DB_ORDER = [
  'अ','आ','इ','ई','उ','ऊ','ऋ','ॠ','ऌ','ॡ','ए','ऐ','ओ','औ',
  'क','ख','ग','घ','ङ',
  'च','छ','ज','झ','ञ',
  'ट','ठ','ड','ढ','ण',
  'त','थ','द','ध','न',
  'प','फ','ब','भ','म',
  'य','र','ल','व',
  'श','ष','स','ह',
  'ा','ि','ी','ु','ू','ृ','े','ै','ो','ौ',
  'ं','ः','ँ','्',
];

function renderDB(filter) {
  dbGrid.innerHTML = '';
  const keys = DB_ORDER.filter(k => {
    if (filter === 'all') return true;
    const info = DB[k];
    if (filter === 'स्वर') return info.type === 'स्वर';
    if (filter === 'व्यञ्जन') return info.type === 'व्यञ्जन';
    if (filter === 'मात्रा') return ['मात्रा','अनुस्वार','विसर्ग','चन्द्रबिन्दु','हलन्त'].includes(info.type);
    return true;
  });

  keys.forEach((k, i) => {
    const info = DB[k];
    const cls = cssClass(info.type);
    const cell = document.createElement('div');
    cell.className = `db-cell ${cls}`;
    cell.style.animationDelay = `${i * 20}ms`;

    const tooltipParts = [
      `${typeLabel(info)}`,
      `${info.place} (${info.placeEn})`,
      info.desc,
    ];

    cell.innerHTML = `
      <span class="db-char">${k}</span>
      <span class="db-roman">${info.roman}</span>
      <div class="db-tooltip">${tooltipParts.join('<br>')}</div>
    `;

    // Click to analyze
    cell.addEventListener('click', () => {
      const input = document.getElementById('text-input');
      input.value += k;
      input.focus();
    });

    dbGrid.appendChild(cell);
  });
}

// Filter buttons
dbFilters.addEventListener('click', (e) => {
  const btn = e.target.closest('.pill');
  if (!btn) return;
  dbFilters.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  renderDB(btn.dataset.filter);
});

// Initial render
renderDB('all');

/* ═══════════════════════════════════════════════════
   Input Handlers
   ═══════════════════════════════════════════════════ */
const textInput  = document.getElementById('text-input');
const analyzeBtn = document.getElementById('analyze-btn');
const clearBtn   = document.getElementById('clear-btn');

analyzeBtn.addEventListener('click', () => {
  const text = textInput.value.trim();
  if (!text) return;
  renderResults(analyzeText(text));
});

// Also analyze on Enter (without Shift)
textInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    analyzeBtn.click();
  }
});

clearBtn.addEventListener('click', () => {
  textInput.value = '';
  resultsSection.hidden = true;
  summaryBar.innerHTML = '';
  resultsGrid.innerHTML = '';
  textInput.focus();
});

/* ═══════════════════════════════════════════════════
   Speech-to-Text (Web Speech API)
   ═══════════════════════════════════════════════════ */
const micBtn    = document.getElementById('mic-btn');
const micStatus = document.getElementById('mic-status');

let recognition    = null;
let isListening    = false;
let wantListening  = false;   // true while user wants mic on
let finalTranscript = '';     // accumulated final results

function showMicStatus(msg, autohide) {
  micStatus.hidden = false;
  micStatus.textContent = msg;
  if (autohide) {
    setTimeout(() => { micStatus.hidden = true; }, autohide);
  }
}

function initSpeech() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    micBtn.title = 'Speech recognition not supported — use Chrome or Edge';
    micBtn.disabled = true;
    micBtn.style.opacity = '0.4';
    showMicStatus('⚠️ Speech API not available — please use Chrome or Edge', 6000);
    return;
  }

  // Warn if opened via file:// (mic won't work)
  if (location.protocol === 'file:') {
    showMicStatus('⚠️ Mic requires HTTP — run a local server (see console)', 8000);
    console.info(
      '%c[Speech] file:// detected. Start a local server:\n' +
      '  npx serve .        (or)       python -m http.server\n' +
      'Then open http://localhost:3000 (or :8000)',
      'color:#f5c542; font-size:13px'
    );
  }

  recognition = new SpeechRecognition();
  recognition.lang            = 'hi-IN';   // Hindi / Devanagari
  recognition.interimResults  = true;
  recognition.continuous      = true;       // keep listening until user stops
  recognition.maxAlternatives = 1;

  recognition.addEventListener('start', () => {
    isListening = true;
    micBtn.classList.add('listening');
    showMicStatus('🎤 Listening… speak in Hindi / Sanskrit');
  });

  recognition.addEventListener('result', (e) => {
    let interim = '';
    // Walk through all result chunks
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const chunk = e.results[i][0].transcript;
      if (e.results[i].isFinal) {
        finalTranscript += chunk;
      } else {
        interim += chunk;
      }
    }
    // Show final + interim together in the textarea
    textInput.value = finalTranscript + interim;
    showMicStatus(`🎤 "${(finalTranscript + interim).slice(-60)}"`);
  });

  recognition.addEventListener('end', () => {
    isListening = false;
    // Auto-restart if user still wants to listen (browser stops after silence)
    if (wantListening) {
      try { recognition.start(); } catch (_) { /* already started */ }
      return;
    }
    micBtn.classList.remove('listening');
    if (textInput.value.trim()) {
      showMicStatus('✅ Done — tap Analyze to see results', 4000);
    } else {
      showMicStatus('⚠️ No speech captured — try again', 4000);
    }
  });

  recognition.addEventListener('error', (e) => {
    const fatal = ['not-allowed', 'audio-capture', 'service-not-allowed'].includes(e.error);
    if (fatal) {
      wantListening = false;
      isListening   = false;
      micBtn.classList.remove('listening');
    }
    const msgs = {
      'no-speech':            '🔇 No speech detected — speak louder or closer to the mic',
      'audio-capture':        '🎙️ No microphone found — check your device',
      'not-allowed':          '🚫 Microphone permission denied — allow it in browser settings',
      'service-not-allowed':  '🚫 Speech service blocked — use HTTPS or localhost',
      'network':              '🌐 Network error — speech API requires internet',
      'aborted':              '🛑 Stopped',
    };
    showMicStatus(msgs[e.error] || `⚠️ Error: ${e.error}`, fatal ? 6000 : 3000);

    // For non-fatal errors (like no-speech), auto-restart if user wants
    if (!fatal && wantListening) {
      try { recognition.start(); } catch (_) {}
    }
  });
}

micBtn.addEventListener('click', () => {
  if (!recognition) {
    showMicStatus('⚠️ Speech not available — use Chrome/Edge on localhost', 5000);
    return;
  }

  if (wantListening) {
    // Stop
    wantListening = false;
    recognition.stop();
  } else {
    // Start fresh
    finalTranscript = '';
    wantListening   = true;
    try {
      recognition.start();
    } catch (err) {
      showMicStatus(`⚠️ Could not start mic: ${err.message}`, 5000);
      wantListening = false;
    }
  }
});

initSpeech();
