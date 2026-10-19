/**
 * AURA DENTAL STUDIO - INTERACTIVE CLIENT DEMO JAVASCRIPT
 * Smooth Animations, Interactive Cost Calculator, Case Showcase & Booking Modal
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. Sticky Header & Scrollspy
     ========================================================================== */
  const header = document.getElementById('mainHeader');
  const backToTopBtn = document.getElementById('backToTop');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const sections = document.querySelectorAll('section[id], footer[id]');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Header elevation
    if (scrollPos > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to top button
    if (scrollPos > 500) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }

    // Active link highlighting (Scrollspy)
    let currentId = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });

  // Smooth back to top
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================================================
     2. Mobile Drawer Navigation
     ========================================================================== */
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileToggle && mobileNavDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('open');
      mobileNavDrawer.classList.toggle('active');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('open');
        mobileNavDrawer.classList.remove('active');
      });
    });
  }

  /* ==========================================================================
     3. Service Category Filter Tabs
     ========================================================================== */
  const tabBtns = document.querySelectorAll('.service-tabs .tab-btn');
  const serviceItems = document.querySelectorAll('.services-grid .service-item');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-category');

      serviceItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (filter === 'all' || itemCat === filter) {
          item.style.display = 'flex';
          item.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  /* ==========================================================================
     4. Smile Transformation Case Studies Switcher
     ========================================================================== */
  const casePills = document.querySelectorAll('.case-pill');
  const caseData = {
    1: {
      tag: 'Case #4108: Full Smile Makeover',
      time: 'Duration: 2 Visits',
      title: 'Porcelain Veneers & Laser Gum Sculpting',
      desc: 'Patient arrived with discoloration, minor crowding, and uneven gumline. Using digital smile design, we placed 8 hand-layered porcelain veneers with natural translucency.',
      quote: '“I used to hide my smile in every photo. Dr. Vance changed my life in two painless appointments. I can\'t stop smiling!”',
      author: '— Jessica M., Verified Patient',
      metaTime: 'Only 14 Days',
      metaSens: '0% Reported',
      imgBadge1: 'Custom Shade BL2 Enamel',
      imgBadge2: '★ 100% Natural Finish'
    },
    2: {
      tag: 'Case #3842: Deep Bite & Alignment',
      time: 'Duration: 7 Months',
      title: 'Invisalign® Diamond Apex Aligner Series',
      desc: 'Patient wanted straight teeth without traditional metal brackets. Customized 18-stage clear aligner therapy discreetly corrected crowding and corrected midline alignment.',
      quote: '“The aligners were practically invisible. Even my coworkers didn’t notice until they realized my smile had completely transformed!”',
      author: '— Marcus R., Tech Executive',
      metaTime: '7 Months',
      metaSens: 'Gentle Pressure',
      imgBadge1: 'Crystal Clear SmartTrack®',
      imgBadge2: '★ Removable for Meals'
    },
    3: {
      tag: 'Case #5291: Computer-Guided Implant',
      time: 'Duration: 1 Day Placement',
      title: 'Immediate Zirconia Implant & Crown',
      desc: 'Severe fractured molar restored in a single morning. Using 3D CBCT guided surgical splints, Dr. Thorne placed a biocompatible titanium fixture and aesthetic porcelain crown.',
      quote: '“I expected severe pain, but with the Wand anesthesia and laser prep, I was eating dinner that same evening with zero discomfort.”',
      author: '— Robert T., Architect',
      metaTime: 'Single Day',
      metaSens: 'Zero Pain Index',
      imgBadge1: '3D CBCT Guided Surgery',
      imgBadge2: '★ Lifetime Stability'
    }
  };

  casePills.forEach(pill => {
    pill.addEventListener('click', () => {
      casePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const caseNum = pill.getAttribute('data-case');
      const data = caseData[caseNum];

      if (data) {
        const caseTag = document.querySelector('.case-tag');
        const caseTime = document.querySelector('.case-time');
        const caseTitle = document.querySelector('.case-title');
        const caseDesc = document.querySelector('.case-desc');
        const patientQuote = document.querySelector('.patient-quote p');
        const quoteAuthor = document.querySelector('.quote-author');
        const metaValues = document.querySelectorAll('.showcase-meta .meta-value');
        const badge1 = document.querySelector('.badge-top-left span:last-child');
        const badge2 = document.querySelector('.badge-bottom-right span:first-child');

        if (caseTag) caseTag.textContent = data.tag;
        if (caseTime) caseTime.textContent = data.time;
        if (caseTitle) caseTitle.textContent = data.title;
        if (caseDesc) caseDesc.textContent = data.desc;
        if (patientQuote) patientQuote.textContent = data.quote;
        if (quoteAuthor) quoteAuthor.textContent = data.author;
        if (metaValues[0]) metaValues[0].textContent = data.metaTime;
        if (metaValues[1]) metaValues[1].textContent = data.metaSens;
        if (badge1) badge1.textContent = data.imgBadge1;
        if (badge2) badge2.textContent = data.imgBadge2;
      }
    });
  });

  /* ==========================================================================
     5. Interactive Treatment Cost & Duration Calculator
     ========================================================================== */
  const calcTreatment = document.getElementById('calcTreatment');
  const calcCount = document.getElementById('calcCount');
  const teethCountDisplay = document.getElementById('teethCountDisplay');
  const teethCountGroup = document.getElementById('teethCountGroup');
  const sedationRadios = document.querySelectorAll('input[name="sedation"]');
  const insBtns = document.querySelectorAll('.ins-btn');

  const summaryTreatmentName = document.getElementById('summaryTreatmentName');
  const summaryTotal = document.getElementById('summaryTotal');
  const summaryDuration = document.getElementById('summaryDuration');
  const summaryMonthly = document.getElementById('summaryMonthly');
  const summaryDiscountNote = document.getElementById('summaryDiscountNote');

  let currentInsuranceMultiplier = 0.8; // default 20% discount

  // Insurance toggle buttons
  insBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      insBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentInsuranceMultiplier = parseFloat(btn.getAttribute('data-ins'));
      updateCalculator();
    });
  });

  function updateCalculator() {
    if (!calcTreatment) return;

    const selectedOption = calcTreatment.options[calcTreatment.selectedIndex];
    const basePrice = parseFloat(selectedOption.getAttribute('data-price')) || 950;
    const duration = selectedOption.getAttribute('data-time') || '2 Visits';
    const treatmentVal = calcTreatment.value;

    let count = parseInt(calcCount.value) || 1;

    // Adjust behavior for treatments where count doesn't mean single tooth
    if (treatmentVal === 'aligners' || treatmentVal === 'whitening' || treatmentVal === 'hygiene') {
      teethCountGroup.style.display = 'none';
      count = 1;
    } else {
      teethCountGroup.style.display = 'flex';
      teethCountDisplay.textContent = `${count} ${count === 1 ? 'Tooth' : 'Teeth'}`;
    }

    // Sedation fee
    let sedationFee = 0;
    sedationRadios.forEach(radio => {
      if (radio.checked) {
        sedationFee = parseFloat(radio.value) || 0;
      }
    });

    // Calculate subtotal
    const treatmentCost = basePrice * count;
    const subtotal = treatmentCost + sedationFee;
    const finalTotal = Math.round(subtotal * currentInsuranceMultiplier);
    const monthlyEstimate = Math.round(finalTotal / 24);

    // Update UI
    summaryTreatmentName.textContent = selectedOption.text.split('(')[0].trim();
    summaryTotal.textContent = `$${finalTotal.toLocaleString()}`;
    summaryDuration.textContent = duration;
    summaryMonthly.textContent = `As low as $${monthlyEstimate} / mo (0% APR)`;

    if (currentInsuranceMultiplier < 1) {
      summaryDiscountNote.textContent = 'Includes estimated 20% PPO insurance savings';
      summaryDiscountNote.style.color = '#10b981';
    } else {
      summaryDiscountNote.textContent = 'Cash/Self-Pay price • 0% APR financing available';
      summaryDiscountNote.style.color = '#64748b';
    }
  }

  if (calcTreatment && calcCount) {
    calcTreatment.addEventListener('change', updateCalculator);
    calcCount.addEventListener('input', updateCalculator);
    sedationRadios.forEach(r => r.addEventListener('change', updateCalculator));
    updateCalculator(); // initial run
  }

  /* ==========================================================================
     6. Interactive FAQ Accordion
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all items
      faqItems.forEach(i => i.classList.remove('active'));

      // If clicked item wasn't active, open it
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  /* ==========================================================================
     7. Appointment Booking Modal & Toast
     ========================================================================== */
  const bookingModal = document.getElementById('bookingModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const openBookingBtns = document.querySelectorAll('.open-booking-btn');
  const appointmentForm = document.getElementById('appointmentForm');
  const modalServiceSelect = document.getElementById('modalServiceSelect');
  const modalDoctorSelect = document.getElementById('modalDoctorSelect');
  const appointmentDate = document.getElementById('appointmentDate');
  const successToast = document.getElementById('successToast');
  const toastCloseBtn = document.getElementById('toastCloseBtn');
  const toastMessage = document.getElementById('toastMessage');

  // Set default appointment date to tomorrow
  if (appointmentDate) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    appointmentDate.value = `${yyyy}-${mm}-${dd}`;
    appointmentDate.min = `${yyyy}-${mm}-${dd}`;
  }

  // Open modal handlers
  openBookingBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Auto-select service or doctor if triggered from specific button
      const serviceAttr = btn.getAttribute('data-service');
      const doctorAttr = btn.getAttribute('data-doctor');

      if (serviceAttr && modalServiceSelect) {
        for (let i = 0; i < modalServiceSelect.options.length; i++) {
          if (modalServiceSelect.options[i].text.toLowerCase().includes(serviceAttr.toLowerCase())) {
            modalServiceSelect.selectedIndex = i;
            break;
          }
        }
      }

      if (doctorAttr && modalDoctorSelect) {
        for (let i = 0; i < modalDoctorSelect.options.length; i++) {
          if (modalDoctorSelect.options[i].text.toLowerCase().includes(doctorAttr.toLowerCase())) {
            modalDoctorSelect.selectedIndex = i;
            break;
          }
        }
      }

      bookingModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal
  function closeModal() {
    bookingModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) closeModal();
    });
  }

  // Escape key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bookingModal.classList.contains('active')) {
      closeModal();
    }
  });

  // Handle appointment form submission
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('patientName').value.trim() || 'Valued Patient';
      const service = modalServiceSelect.value;
      const date = appointmentDate.value;

      closeModal();

      // Show toast
      if (toastMessage) {
        toastMessage.innerHTML = `Thank you, <strong>${name}</strong>! Your consultation for <strong>${service}</strong> on <strong>${date}</strong> is tentatively booked. A patient concierge will call you within 15 minutes to confirm.`;
      }

      successToast.classList.add('active');

      // Auto-hide toast after 7 seconds
      setTimeout(() => {
        successToast.classList.remove('active');
      }, 7000);

      appointmentForm.reset();
    });
  }

  if (toastCloseBtn) {
    toastCloseBtn.addEventListener('click', () => {
      successToast.classList.remove('active');
    });
  }

});
