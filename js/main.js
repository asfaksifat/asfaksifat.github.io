// Peala — small progressive-enhancement script.
// Everything here is optional: the page is fully readable and usable without it.

(function () {
  "use strict";

  document.getElementById("year").textContent = new Date().getFullYear();

  // --- Scroll reveal -------------------------------------------------
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  }

  // --- Ambient steam lines --------------------------------------------
  if (!reduceMotion) {
    buildSteam(document.getElementById("steamField"), 5);
    buildSteam(document.getElementById("promiseSteam"), 4);
  }

  // --- Landmark detail modal -------------------------------------------
  var landmarkData = {
    museum: {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16M5 20V10M19 20V10M3 10l9-6 9 6M8 20v-6h8v6"/></svg>',
      title: "বরেন্দ্র গবেষণা জাদুঘর",
      body: "১৯১০ সালে নাটোরের দিঘাপাতিয়া রাজপরিবারের শরৎকুমার রায়, আইনজীবী অক্ষয়কুমার মৈত্রেয় আর রাজশাহী কলেজিয়েট স্কুলের শিক্ষক রামপ্রসাদ চন্দ — এই তিনজন মিলে গড়ে তোলেন বরেন্দ্র অনুসন্ধান সমিতি, আর তার হাত ধরেই জন্ম নেয় বরেন্দ্র গবেষণা জাদুঘর। এটা বাংলাদেশের প্রথম জাদুঘর, আর প্রত্নসামগ্রীর সংগ্রহে দক্ষিণ এশিয়ার অন্যতম সমৃদ্ধ সংগ্রহশালা। সিন্ধু সভ্যতার নিদর্শন থেকে শুরু করে পাল-সেন আমলের পাথরের মূর্তি, প্রাচীন পুঁথি আর দুষ্প্রাপ্য মুদ্রা — সব মিলিয়ে দশ হাজারেরও বেশি নিদর্শন সংরক্ষিত আছে এখানে, রাজশাহী নগরীর হেতেম খাঁ এলাকায়। বর্তমানে জাদুঘরটি পরিচালনা করে রাজশাহী বিশ্ববিদ্যালয়।"
    },
    dhopkol: {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3h8M12 3v4M7 7h10l1.2 12.2A2 2 0 0 1 16.2 21H7.8a2 2 0 0 1-2-1.8Z"/><path d="M9 12h6"/></svg>',
      title: "ঢোপকল",
      body: "১৯৩৭ সালে পুঠিয়ার জমিদার মহারাণী হেমন্ত কুমারী দেবীর উদ্যোগে রাজশাহী শহরে বসানো হয় এই ঢোপকলগুলো। তখন কলেরাসহ পানিবাহিত রোগে ভুগছিলেন শহরের মানুষ, আর সেই সংকট থেকে বাঁচাতেই তৈরি হয় বিশুদ্ধ পানি সরবরাহের এই ব্যবস্থা। একসময় শহরজুড়ে ছিল শতাধিক ঢোপকল, এখন টিকে আছে হাতে গোনা কয়েকটি। তবু প্রতিটা মোড়ে দাঁড়িয়ে থাকা এই পুরনো কলগুলো আজও মনে করিয়ে দেয় রাজশাহীর সেই দিনগুলোর কথা।"
    },
    lamp: {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3M8 9h8l-1.4 3H9.4Z"/><path d="M12 12v6M9 21h6"/></svg>',
      title: "নান্দনিক সড়কবাতি",
      body: "দেশের মধ্যে প্রথম নগরী হিসেবে রাজশাহীর প্রধান সড়কগুলোতে বসানো হয়েছে নজরকাড়া ডিজাইনের সড়কবাতি — কোথাও প্রজাপতির ডানার আদলে, কোথাও আবার রাজমুকুটের মতো দেখতে। দিনের বেলা এগুলো নিছক ভাস্কর্যের মতো লাগে, কিন্তু সন্ধ্যা নামলেই একে একে জ্বলে ওঠে, আর পুরো শহরটাকে সাজিয়ে দেয় অন্যরকম এক আলোয়। পরিচ্ছন্ন নগরী আর গ্রিন সিটি হিসেবে পরিচিত রাজশাহীর সৌন্দর্যে এই বাতিগুলো যোগ করেছে বাড়তি মাত্রা।"
    },
    smriti: {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v13M9 6h6M9 9h6"/><path d="M7 21c0-3.5 2-6.5 5-6.5s5 3 5 6.5Z"/></svg>',
      title: "স্মৃতি অম্লান স্মৃতিসৌধ",
      body: "রাজশাহী শহরের ভদ্রা এলাকায়, শহীদ ক্যাপ্টেন বীরশ্রেষ্ঠ জাহাঙ্গীর সড়কের পাশে দাঁড়িয়ে আছে স্মৃতি অম্লান — আমাদের মুক্তিযুদ্ধের স্মৃতিতে গড়া একটি স্মৃতিসৌধ। ১৯৯১ সালের ২৬ মার্চ রাজশাহী উন্নয়ন কর্তৃপক্ষ এটি উদ্বোধন করে; পরিকল্পনায় ছিলেন মুক্তিযোদ্ধা ব্রিগেডিয়ার আব্দুর রব, স্থাপত্য নকশা করেন স্থপতি রাজিউদ্দিন আহমেদ। এই স্মৃতিসৌধ রাজশাহীবাসীর কাছে মুক্তিযুদ্ধে দেশের জন্য জীবন দেওয়া মানুষদের প্রতি একটা নীরব শ্রদ্ধাঞ্জলি।"
    }
  };

  var backdrop = document.getElementById("landmarkBackdrop");
  var modal = document.getElementById("landmarkModal");
  var modalTitle = document.getElementById("modalTitle");
  var modalBody = document.getElementById("modalBody");
  var modalIcon = document.getElementById("modalIcon");
  var modalClose = document.getElementById("modalClose");
  var lastFocused = null;

  function openModal(key) {
    var data = landmarkData[key];
    if (!data || !backdrop) return;
    modalTitle.textContent = data.title;
    modalBody.textContent = data.body;
    modalIcon.innerHTML = data.icon;
    lastFocused = document.activeElement;
    backdrop.hidden = false;
    document.body.style.overflow = "hidden";
    modalClose.focus();
  }

  function closeModal() {
    if (!backdrop) return;
    backdrop.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll("[data-landmark]").forEach(function (card) {
    card.addEventListener("click", function () {
      openModal(card.getAttribute("data-landmark"));
    });
  });

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (backdrop) {
    backdrop.addEventListener("click", function (e) {
      if (e.target === backdrop) closeModal();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && backdrop && !backdrop.hidden) closeModal();
  });

  function buildSteam(container, count) {
    if (!container) return;
    for (var i = 0; i < count; i++) {
      var line = document.createElement("span");
      line.className = "steam-line";
      var left = 8 + Math.random() * 84; // percent across width
      var height = 90 + Math.random() * 140;
      var delay = Math.random() * 6;
      var duration = 6 + Math.random() * 3;
      line.style.left = left + "%";
      line.style.height = height + "px";
      line.style.animationDelay = delay + "s";
      line.style.animationDuration = duration + "s";
      container.appendChild(line);
    }
  }
})();
