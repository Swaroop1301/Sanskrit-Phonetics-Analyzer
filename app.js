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

/* ═══════════════════════════════════════════════════
   Sanskrit Mini Dictionary Database — Advanced Words
   ═══════════════════════════════════════════════════ */
const DICT = [
  // ─── Simple / Common Words (10) ───
  {
    word: 'देव',       roman: 'deva',       meaning: 'God, deity, divine being',
    root: 'दिव् (to shine)', pos: 'Noun (नाम)', cat: 'noun',
    gender: 'Masculine (पुल्लिङ्ग)', number: 'Singular (एकवचन)',
    case: 'Nominative (प्रथमा)', grammarNote: 'Derived from root √दिव् meaning "to shine". देवः is the nominative singular form. Plural: देवाः. An अ-stem masculine noun — one of the most common declension patterns.'
  },
  {
    word: 'विद्या',    roman: 'vidyā',      meaning: 'Knowledge, learning, science',
    root: 'विद् (to know)', pos: 'Noun (नाम)', cat: 'noun',
    gender: 'Feminine (स्त्रीलिङ्ग)', number: 'Singular (एकवचन)',
    case: 'Nominative (प्रथमा)', grammarNote: 'From √विद् "to know". An abstract feminine noun ending in -आ. Opposite: अविद्या (ignorance). "विद्या ददाति विनयम्" — Knowledge gives humility.'
  },
  {
    word: 'गुरु',      roman: 'guru',       meaning: 'Teacher, heavy, venerable',
    root: 'गुरु (heavy)', pos: 'Noun / Adjective (नाम/विशेषण)', cat: 'noun',
    gender: 'Masculine (पुल्लिङ्ग)', number: 'Singular (एकवचन)',
    case: 'Nominative (प्रथमा)', grammarNote: 'उ-stem noun. गुरुः (nom. sg.). Literally means "heavy" — one heavy with knowledge. Plural: गुरवः. The guru-disciple tradition (गुरुशिष्य परम्परा) is central to Indian knowledge systems.'
  },
  {
    word: 'नदी',       roman: 'nadī',       meaning: 'River',
    root: 'नद् (to roar)', pos: 'Noun (नाम)', cat: 'noun',
    gender: 'Feminine (स्त्रीलिङ्ग)', number: 'Singular (एकवचन)',
    case: 'Nominative (प्रथमा)', grammarNote: 'A ī-stem feminine noun. Follows the nadī-declension pattern. Plural nominative: नद्यः. From √नद् "to roar/sound" — rivers were named for their sound.'
  },
  {
    word: 'अग्नि',     roman: 'agni',       meaning: 'Fire',
    root: 'अग्नि', pos: 'Noun (नाम)', cat: 'noun',
    gender: 'Masculine (पुल्लिङ्ग)', number: 'Singular (एकवचन)',
    case: 'Nominative (प्रथमा)', grammarNote: 'इ-stem masculine noun. अग्निः (nom. sg.). Agni is the fire deity in Vedic tradition, invoked first in the Ṛgveda: अग्निमीळे पुरोहितम्.'
  },
  {
    word: 'गच्छति',   roman: 'gacchati',   meaning: 'He/she goes',
    root: 'गम् (to go)', pos: 'Verb (क्रिया)', cat: 'verb',
    gender: '—', number: 'Singular (एकवचन)',
    case: '—', grammarNote: 'Present tense (लट् लकार), third person singular (प्रथम पुरुष) of √गम्. Parasmaipada conjugation. The stem गच्छ is formed by reduplication. Dual: गच्छतः, Plural: गच्छन्ति.'
  },
  {
    word: 'फलम्',     roman: 'phalam',     meaning: 'Fruit, result',
    root: 'फल् (to bear fruit)', pos: 'Noun (नाम)', cat: 'noun',
    gender: 'Neuter (नपुंसकलिङ्ग)', number: 'Singular (एकवचन)',
    case: 'Nominative (प्रथमा)', grammarNote: 'Neuter अ-stem noun. Nom. and Acc. are identical in neuter. Plural: फलानि. Also means "result" — कर्मफल = "fruit of action".'
  },
  {
    word: 'माता',      roman: 'mātā',       meaning: 'Mother',
    root: 'मातृ (mother)', pos: 'Noun (नाम)', cat: 'noun',
    gender: 'Feminine (स्त्रीलिङ्ग)', number: 'Singular (एकवचन)',
    case: 'Nominative (प्रथमा)', grammarNote: 'ऋ-stem feminine noun. माता is the nominative singular. Related: पिता (father). "मातृ देवो भव" — May your mother be your god (Taittirīya Upaniṣad).'
  },
  {
    word: 'कर्म',      roman: 'karma',      meaning: 'Action, deed, work',
    root: 'कृ (to do)', pos: 'Noun (नाम)', cat: 'noun',
    gender: 'Neuter (नपुंसकलिङ्ग)', number: 'Singular (एकवचन)',
    case: 'Nominative (प्रथमा)', grammarNote: 'From √कृ "to do/make". Central concept in Bhagavad Gītā: कर्मण्येवाधिकारस्ते. Also used as a grammatical term for "object" in Pāṇini\'s grammar.'
  },
  {
    word: 'सत्यम्',   roman: 'satyam',     meaning: 'Truth, reality',
    root: 'सत् (being, true)', pos: 'Noun / Adjective (नाम/विशेषण)', cat: 'other',
    gender: 'Neuter (नपुंसकलिङ्ग)', number: 'Singular (एकवचन)',
    case: 'Nominative (प्रथमा)', grammarNote: 'Derived from सत् (present participle of √अस् "to be"). "सत्यम् एव जयते" — Truth alone triumphs (national motto of India, from Muṇḍaka Upaniṣad).'
  },
  // ─── Complex / Advanced Words (10) ───
  {
    word: 'प्रत्याहार',     roman: 'pratyāhāra', meaning: 'Withdrawal of senses; technical abbreviation in grammar',
    root: 'प्रति+आ+√हृ (to draw back)', pos: 'Noun (नाम)', cat: 'noun',
    gender: 'Masculine (पुल्लिङ्ग)', number: 'Singular (एकवचन)',
    case: 'Nominative (प्रथमा)', grammarNote: 'In Yoga: the 5th limb (अङ्ग). In Vyākaraṇa: Pāṇini\'s method of abbreviating sound groups using the Māheśvara Sūtras (e.g., अच् = all vowels).'
  },
  {
    word: 'सन्धिविच्छेद',   roman: 'sandhiviccheda', meaning: 'Resolution of sandhi; phonetic decomposition',
    root: 'सन्धि (junction) + विच्छेद (separation)', pos: 'Noun (नाम)', cat: 'noun',
    gender: 'Masculine (पुल्लिङ्ग)', number: 'Singular (एकवचन)',
    case: 'Nominative (प्रथमा)', grammarNote: 'A dvandva-like tatpuruṣa compound. सन्धि from सम्+√धा "to place together". विच्छेद from वि+√छिद् "to cut apart". Fundamental operation in Sanskrit textual analysis.'
  },
  {
    word: 'निर्वाण',         roman: 'nirvāṇa', meaning: 'Extinguishing; liberation; ultimate bliss',
    root: 'निर्+√वा (to blow)', pos: 'Noun / Past Participle (नाम/कृदन्त)', cat: 'noun',
    gender: 'Neuter (नपुंसकलिङ्ग)', number: 'Singular (एकवचन)',
    case: 'Nominative (प्रथमा)', grammarNote: 'From निर् (out/away) + √वा "to blow" with the क्त suffix. Literally "blown out" — like extinguishing a flame. Central goal in Buddhist and Jain soteriology. Also in Bhagavad Gītā (ब्रह्मनिर्वाण).'
  },
  {
    word: 'उपनिषद्',       roman: 'upaniṣad', meaning: 'Esoteric teaching; sitting near the guru',
    root: 'उप+नि+√सद् (to sit)', pos: 'Noun (नाम)', cat: 'noun',
    gender: 'Feminine (स्त्रीलिङ्ग)', number: 'Singular (एकवचन)',
    case: 'Nominative (प्रथमा)', grammarNote: 'Triple prefix compound: उप "near" + नि "down" + √सद् "to sit". A क्विप्-pratyaya formation. Refers to secret doctrines transmitted from guru to disciple. 108 principal Upaniṣads are traditionally recognized.'
  },
  {
    word: 'अभिज्ञानशाकुन्तलम्', roman: 'abhijñānaśākuntalam', meaning: 'The Recognition of Śakuntalā (Kālidāsa\'s play)',
    root: 'अभिज्ञान (recognition) + शाकुन्तल (of Śakuntalā)', pos: 'Noun (नाम)', cat: 'noun',
    gender: 'Neuter (नपुंसकलिङ्ग)', number: 'Singular (एकवचन)',
    case: 'Nominative (प्रथमा)', grammarNote: 'Tatpuruṣa compound. अभिज्ञान from अभि+√ज्ञा "to recognize". शाकुन्तल is a taddhita derivative from शकुन्तला using the अण् suffix. Kālidāsa\'s masterpiece of classical drama.'
  },
  {
    word: 'कारयति',         roman: 'kārayati', meaning: 'He/she causes to do (causative)',
    root: '√कृ (to do) → causal stem कारय', pos: 'Verb (क्रिया)', cat: 'verb',
    gender: '—', number: 'Singular (एकवचन)',
    case: '—', grammarNote: 'Causative (णिजन्त) form of √कृ. The causal stem is formed by adding -अय and strengthening the root vowel (guṇa/vṛddhi): कृ → कार् + अय + ति. Shows the Sanskrit causative mechanism (प्रयोजक क्रिया).'
  },
  {
    word: 'प्रतिपादयति',    roman: 'pratipādayati', meaning: 'He/she explains, establishes, expounds',
    root: 'प्रति+√पद् (to go) → causal', pos: 'Verb (क्रिया)', cat: 'verb',
    gender: '—', number: 'Singular (एकवचन)',
    case: '—', grammarNote: 'Causative (णिजन्त) of प्रति+√पद् (4th gaṇa). Present tense, 3rd person singular. The causal adds -अय: पद् → पाद् + अय + ति. Standard verb in śāstra for "to expound a thesis".'
  },
  {
    word: 'ज्ञानेन्द्रिय',   roman: 'jñānendriya', meaning: 'Organ of perception; sense faculty of knowledge',
    root: 'ज्ञान (knowledge) + इन्द्रिय (sense organ)', pos: 'Noun (नाम)', cat: 'noun',
    gender: 'Neuter (नपुंसकलिङ्ग)', number: 'Singular (एकवचन)',
    case: 'Nominative (प्रथमा)', grammarNote: 'Tatpuruṣa with sandhi: ज्ञान + इन्द्रिय → ज्ञानेन्द्रिय (guṇa sandhi: अ+इ=ए). The five ज्ञानेन्द्रियाणि are: eye, ear, nose, tongue, skin. Contrasts with कर्मेन्द्रिय (organ of action).'
  },
  {
    word: 'अपरिग्रह',      roman: 'aparigraha', meaning: 'Non-possessiveness; non-attachment',
    root: 'अ (not) + परि+√ग्रह् (to seize around)', pos: 'Noun (नाम)', cat: 'noun',
    gender: 'Masculine (पुल्लिङ्ग)', number: 'Singular (एकवचन)',
    case: 'Nominative (प्रथमा)', grammarNote: 'Negative tatpuruṣa (नञ् समास). अ = negation prefix + परिग्रह "grasping/accumulation". One of the five Yamas in Patañjali\'s Yoga Sūtras (2.30). Also a Jain ethical principle.'
  },
  {
    word: 'कृतकृत्य',       roman: 'kṛtakṛtya', meaning: 'One who has accomplished all duties; fulfilled',
    root: 'कृत (done) + कृत्य (duty)', pos: 'Adjective (विशेषण)', cat: 'other',
    gender: 'Masculine (पुल्लिङ्ग)', number: 'Singular (एकवचन)',
    case: 'Nominative (प्रथमा)', grammarNote: 'A bahuvrīhi compound: "one whose duties (कृत्य) are done (कृत)". Both elements derive from √कृ "to do": कृत is the past participle (क्त), कृत्य is the gerundive (potential passive participle). Used in mokṣa-śāstra for the liberated soul.'
  },
];


/* ═══════════════════════════════════════════════════
   Dictionary Rendering
   ═══════════════════════════════════════════════════ */
const dictWordGrid      = document.getElementById('dict-word-grid');
const dictDetail        = document.getElementById('dict-detail');
const dictDetailContent = document.getElementById('dict-detail-content');
const dictCloseBtn      = document.getElementById('dict-close');
const dictFreq          = document.getElementById('dict-freq');
const dictFreqSummary   = document.getElementById('dict-freq-summary');
const dictFreqBars      = document.getElementById('dict-freq-bars');
const dictFreqPlace     = document.getElementById('dict-freq-place');
const dictCategoryPills = document.getElementById('dict-category-pills');

let currentDictFilter = 'all';

function getFilteredDict() {
  if (currentDictFilter === 'all') return DICT;
  if (currentDictFilter === 'noun') return DICT.filter(e => e.cat === 'noun');
  if (currentDictFilter === 'verb') return DICT.filter(e => e.cat === 'verb');
  return DICT.filter(e => e.cat === 'other');
}

function renderDictGrid() {
  dictWordGrid.innerHTML = '';
  const filtered = getFilteredDict();
  filtered.forEach((entry, idx) => {
    const realIdx = DICT.indexOf(entry);
    const chip = document.createElement('div');
    chip.className = 'dict-word-chip';
    chip.style.animationDelay = `${idx * 35}ms`;
    chip.dataset.idx = realIdx;

    // Short POS tag
    let posTag = '';
    if (entry.cat === 'noun') posTag = 'नाम';
    else if (entry.cat === 'verb') posTag = 'क्रिया';
    else posTag = 'विशेषण';

    chip.innerHTML = `
      <span class="dict-word-dev">${entry.word}</span>
      <span class="dict-word-en">${entry.meaning.split(';')[0].split(',')[0]}</span>
      <span class="dict-word-pos-tag">${posTag}</span>
    `;
    chip.addEventListener('click', () => showDictDetail(realIdx));
    dictWordGrid.appendChild(chip);
  });
}

// Category filter pills
dictCategoryPills.addEventListener('click', (e) => {
  const btn = e.target.closest('.dict-pill');
  if (!btn) return;
  dictCategoryPills.querySelectorAll('.dict-pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  currentDictFilter = btn.dataset.cat;
  renderDictGrid();
  // Close detail if open
  dictDetail.hidden = true;
  dictFreq.hidden = true;
});

function showDictDetail(idx) {
  const entry = DICT[idx];

  // Highlight selected chip
  dictWordGrid.querySelectorAll('.dict-word-chip').forEach(c => c.classList.remove('selected'));
  const chip = dictWordGrid.querySelector(`[data-idx="${idx}"]`);
  if (chip) chip.classList.add('selected');

  // Build properties (skip "—" values)
  const props = [
    { label: 'Root (धातु)',           value: entry.root },
    { label: 'Part of Speech',        value: entry.pos },
    { label: 'Gender (लिङ्ग)',         value: entry.gender },
    { label: 'Number (वचन)',          value: entry.number },
    { label: 'Case (विभक्ति)',         value: entry.case },
  ].filter(p => p.value && p.value !== '—');

  const propsHTML = props.map(p => `
    <div class="dict-prop">
      <div class="dict-prop-label">${p.label}</div>
      <div class="dict-prop-value">${p.value}</div>
    </div>
  `).join('');

  dictDetailContent.innerHTML = `
    <div class="dict-detail-header">
      <span class="dict-detail-word">${entry.word}</span>
      <span class="dict-detail-roman">${entry.roman}</span>
    </div>
    <div class="dict-detail-meaning">${entry.meaning}</div>
    <div class="dict-props-grid">${propsHTML}</div>
    <div class="dict-grammar-note">📝 ${entry.grammarNote}</div>
  `;

  dictDetail.hidden = false;

  // Run frequency analysis
  renderFrequencyAnalysis(entry.word);

  dictDetail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

dictCloseBtn.addEventListener('click', () => {
  dictDetail.hidden = true;
  dictFreq.hidden = true;
  dictWordGrid.querySelectorAll('.dict-word-chip').forEach(c => c.classList.remove('selected'));
});

/* ═══════════════════════════════════════════════════
   Phonetic Frequency Analyzer
   ═══════════════════════════════════════════════════ */
function renderFrequencyAnalysis(word) {
  const chars = [...word];
  const analyzed = [];
  for (const ch of chars) {
    if (/\s/.test(ch)) continue;
    const info = DB[ch] || null;
    analyzed.push({ char: ch, info });
  }

  if (analyzed.length === 0) {
    dictFreq.hidden = true;
    return;
  }

  dictFreq.hidden = false;

  // ── Summary counts ──
  const counts = { swar: 0, vyanjan: 0, matra: 0, special: 0 };
  analyzed.forEach(r => {
    if (!r.info) return;
    const cls = cssClass(r.info.type);
    if (counts[cls] !== undefined) counts[cls]++;
  });

  const totalRecognized = counts.swar + counts.vyanjan + counts.matra + counts.special;
  const summaryLabels = [
    ['swar',    'स्वर (Vowels)',     counts.swar],
    ['vyanjan', 'व्यञ्जन (Consonants)', counts.vyanjan],
    ['matra',   'मात्रा (Matras)',   counts.matra],
    ['special', 'विशेष (Special)',   counts.special],
  ];

  dictFreqSummary.innerHTML = summaryLabels
    .filter(([, , c]) => c > 0)
    .map(([cls, label, c]) => `<span class="freq-badge ${cls}">${label}: ${c}</span>`)
    .join('');

  // ── Frequency bars (per unique character) ──
  const charFreq = {};
  analyzed.forEach(r => {
    if (!charFreq[r.char]) charFreq[r.char] = { count: 0, info: r.info };
    charFreq[r.char].count++;
  });

  // Sort by count descending
  const sorted = Object.entries(charFreq).sort((a, b) => b[1].count - a[1].count);
  const maxCount = sorted.length > 0 ? sorted[0][1].count : 1;

  dictFreqBars.innerHTML = sorted.map(([ch, data]) => {
    const cls = data.info ? cssClass(data.info.type) : 'unrecog';
    const pct = Math.max(12, (data.count / maxCount) * 100);
    const label = data.info ? data.info.roman || '' : '?';
    return `
      <div class="freq-bar-row">
        <span class="freq-bar-char" style="color: var(--${cls})">${ch}</span>
        <div class="freq-bar-track">
          <div class="freq-bar-fill ${cls}" style="width: ${pct}%">${label}</div>
        </div>
        <span class="freq-bar-count">${data.count}</span>
      </div>
    `;
  }).join('');

  // ── Place of articulation distribution ──
  const placeFreq = {};
  analyzed.forEach(r => {
    if (!r.info || !r.info.place || r.info.place === '—') return;
    const key = r.info.place;
    if (!placeFreq[key]) placeFreq[key] = { count: 0, en: r.info.placeEn };
    placeFreq[key].count++;
  });

  const placeSorted = Object.entries(placeFreq).sort((a, b) => b[1].count - a[1].count);

  if (placeSorted.length > 0) {
    dictFreqPlace.innerHTML = placeSorted.map(([name, data]) => `
      <div class="freq-place-chip">
        <span class="freq-place-name">${name}</span>
        <span class="freq-place-en">${data.en}</span>
        <span class="freq-place-count">${data.count}</span>
      </div>
    `).join('');
  } else {
    dictFreqPlace.innerHTML = '';
  }
}

// Build grid on load
renderDictGrid();

/* ═══════════════════════════════════════════════════
   Mode Toggle Logic
   ═══════════════════════════════════════════════════ */
const modeToggle       = document.getElementById('mode-toggle');
const phoneticsSections = [
  document.getElementById('input-section'),
  document.getElementById('results-section'),
  document.getElementById('database-section'),
  document.getElementById('education-section'),
];
const dictionarySection = document.getElementById('dictionary-section');

function setMode(mode) {
  // Toggle button states
  modeToggle.querySelectorAll('.mode-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });

  if (mode === 'phonetics') {
    dictionarySection.hidden = true;
    phoneticsSections.forEach(sec => {
      // results-section stays hidden until user analyzes
      if (sec.id === 'results-section' && resultsGrid.innerHTML === '') return;
      sec.hidden = false;
    });
  } else {
    phoneticsSections.forEach(sec => sec.hidden = true);
    dictionarySection.hidden = false;
    dictDetail.hidden = true;
    dictFreq.hidden = true;
    dictWordGrid.querySelectorAll('.dict-word-chip').forEach(c => c.classList.remove('selected'));
  }
}

modeToggle.addEventListener('click', (e) => {
  const btn = e.target.closest('.mode-btn');
  if (!btn || btn.classList.contains('active')) return;
  setMode(btn.dataset.mode);
});
