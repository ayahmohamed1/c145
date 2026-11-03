/**
 * =========================================================================
 * ملف بيانات وتفاصيل دعوة الزفاف
 * INVITATION CONFIGURATION FILE
 * =========================================================================
 * يمكنك تغيير أي صورة بكل سهولة إما:
 * 1) استبدال ملف الصورة مباشرة في مجلد public (مثل: couple.jpg أو children.png أو gallery2.jpg أو gallery3.jpg)
 * 2) أو تعديل المسار هنا في هذا الملف مباشرة.
 * =========================================================================
 */

export const INVITATION_DATA = {
  // =========================================================================
  // 📸 قسم الصور (جميع الصور موجودة في مجلد public ويمكن استبدالها وتغييرها بسهولة)
  // =========================================================================
  images: {
    // 1. صورة العروسين الرئيسية (الصورة 1 في معرض الصور)
    couple: "/couple.jpg",

    // 2. صور معرض الصور الإضافية (الصورة 2 و 3)
    gallery1: "/couple.jpg",
    gallery2: "/gallery_rings.jpg",
    gallery3: "/gallery_sunset.jpg",

    // 3. صورة الأطفال في أسفل الدعوة
    children: "/children.png",

    // 4. صورة الظرف الملكي (شاشة البداية)
    envelope: "/envelope.png",

    // 5. صورة الستارة المخملية (أعلى البطاقة)
    curtain: "/curtain.png",

    // 6. صورة باقة الورد (أعلى اليمين)
    bouquet: "/bouquet.png",

    // 7. صورة الحمامة الطائرة
    dove: "/dove.png",
  },

  // ترويسة الغلاف والظرف
  envelopeHeader: "We're getting married",

  // الاسمان بالخط الإنجليزي المائل
  scriptNames: "Mina & Mariam",

  // ترويسة الدعوة
  headerTitleEn: "THE WEDDING OF OUR CHILDREN",
  headerTitleAr: "حفل زفاف مبارك",

  // بيانات العريس
  groom: {
    name: "Mina",
    subtitle: "GROOM"
  },

  // بيانات العروس
  bride: {
    name: "Mariam",
    subtitle: "BRIDE"
  },

  // عبارة الدعوة الترحيبية بالإنجليزية
  welcomeMessage: "We would love to have you with us as we celebrate the beginning of our forever.",

  // الصورة والفيديوهات المعروضة في قسم us
  gallery: {
    title: "us",
    photo: "/p1.jpg",
    videos: [
      { id: 1, src: "/video1.mp4" },
      { id: 2, src: "/video2.mp4" },
    ],
  },

  // تفاصيل الموعد والوقت (العد التنازلي)
  schedule: {
    headingEn: "SUNDAY, NOVEMBER 22, 2026",
    dateDayName: "SUNDAY",
    dateDayNumber: "22",
    dateMonthYear: "NOVEMBER 2026",
    events: [
      { id: 1, venue: "CHURCH", time: "6:00 PM" },
      { id: 2, venue: "THE HALL", time: "7:30 PM" },
    ],
    // يبدأ العد التنازلي مع موعد الكنيسة.
    targetDateTime: "2026-11-22T18:00:00"
  },

  // روابط أماكن الكنيسة والقاعة
  location: {
    title: "LOCATION",
    venues: [
      { id: 1, name: "CHURCH", googleMapsUrl: "https://maps.app.goo.gl/QMpj8LLNZ2HvCxUw6?g_st=iw" },
      { id: 2, name: "THE HALL", googleMapsUrl: "https://maps.app.goo.gl/ToFCAnBGrrGgNL6KA?g_st=iw" },
    ]
  },

  // تأكيد الحضور ورسائل التهنئة للعروسين (RSVP)
  rsvp: {
    title: "RSVP",
    subtitle: "PLEASE CONFIRM YOUR ATTENDANCE",
    namePlaceholder: "Name",
    messagePlaceholder: "Leave a message for Mina & Mariam...",
    submitText: "SEND RSVP",
    successHeading: "THANK YOU!",
    successMessage: "Your message has been received with love for Mina & Mariam ❤️"
  },

  // مسار ملف الموسيقى الرومانسية
  audioTrack: "/song.mp3"
};
