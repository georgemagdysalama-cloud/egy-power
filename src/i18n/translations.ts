export type Lang = "ar" | "en";

export const translations = {
  ar: {
    dir: "rtl" as const,
    brand: "إيجي باور",
    brandSub: "EGY POWER",
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      products: "المنتجات",
      services: "الخدمات",
      contact: "تواصل معنا",
    },
    cta: {
      quote: "اطلب عرض سعر",
      contact: "تواصل معنا",
      explore: "استكشف المنتجات",
      learnMore: "اعرف أكثر",
    },
    switchLang: "EN",
    hero: {
      eyebrow: "توريدات كهربائية للمشروعات والمقاولات",
      title: "شريكك الموثوق في الخامات الكهربائية",
      subtitle:
        "نوفّر مواسير EMT و RSC، الفلكسبل، الأسلاك والكابلات، صناديق التوصيل، والإكسسوارات الكهربائية بجودة عالية وأسعار تنافسية وسرعة توريد.",
      stat1: "+10 سنوات خبرة",
      stat2: "+500 مشروع",
      stat3: "دعم فني 24/7",
    },
    sections: {
      featuresTitle: "لماذا تختار إيجي باور",
      featuresSub: "نلتزم بتقديم أفضل الحلول الكهربائية لشركات المقاولات",
      productsTitle: "فئات منتجاتنا",
      productsSub: "كل ما تحتاجه لتنفيذ أعمالك الكهربائية في مكان واحد",
      ctaTitle: "جاهز لبدء مشروعك القادم؟",
      ctaSub: "تواصل مع فريقنا الآن للحصول على عرض سعر مخصص خلال 24 ساعة.",
    },
    features: [
      { title: "جودة معتمدة", desc: "منتجات مطابقة لأعلى المواصفات العالمية والمحلية." },
      { title: "سرعة التوريد", desc: "شبكة لوجستية تضمن وصول طلبك في الوقت المحدد." },
      { title: "أسعار تنافسية", desc: "تعاملات مباشرة مع المصانع تتيح أفضل الأسعار." },
      { title: "دعم فني", desc: "فريق متخصص لمساعدتك في اختيار المنتج المناسب." },
    ],
    products: [
      { key: "conduit", title: "مواسير كهربائية EMT و RSC", desc: "مواسير معدنية مجلفنة بمقاسات متنوعة لجميع التطبيقات." },
      { key: "flexible", title: "فلكسبل (مواسير مرنة)", desc: "حماية مرنة للأسلاك في الأماكن الضيقة والمعقدة." },
      { key: "cables", title: "أسلاك وكابلات", desc: "كابلات نحاسية بمقاطع وألوان متنوعة لكل الأحمال." },
      { key: "boxes", title: "صناديق توصيل", desc: "علب توصيل معدنية وبلاستيكية بمقاسات قياسية." },
      { key: "accessories", title: "إكسسوارات كهربائية", desc: "وصلات، كلامبات، فيتنجات، ومستلزمات تكميلية." },
      { key: "pvc", title: "مواسير وإكسسوارات PVC", desc: "مواسير PVC كهربائية وأكواع ووصلات وعلب بمقاسات متنوعة." },
      { key: "tray", title: "كابل تراي وإكسسواراته", desc: "حوامل كابلات (Cable Tray) معدنية مع الأكواع والوصلات والأغطية." },
    ],
    about: {
      title: "من نحن",
      sub: "شركة إيجي باور",
      p1: "إيجي باور شركة متخصصة في توريد الخامات والمستلزمات الكهربائية لشركات المقاولات والمشروعات الصناعية والتجارية في جميع أنحاء مصر.",
      p2: "نلتزم بتوفير منتجات عالية الجودة بأسعار تنافسية مع سرعة في التوريد ودعم فني مستمر، ونعتمد على شراكات قوية مع كبرى المصانع المحلية والعالمية.",
      visionTitle: "رؤيتنا",
      vision: "أن نكون الخيار الأول لشركات المقاولات في مصر والشرق الأوسط في مجال التوريدات الكهربائية.",
      missionTitle: "رسالتنا",
      mission: "تقديم منتجات وخدمات كهربائية بأعلى معايير الجودة تلبي احتياجات عملائنا وتساهم في نجاح مشاريعهم.",
      values: [
        { title: "الجودة", desc: "لا تنازل عن جودة المنتج." },
        { title: "الثقة", desc: "علاقات طويلة الأمد مع عملائنا." },
        { title: "السرعة", desc: "نحترم الوقت في كل خطوة." },
        { title: "الاحترافية", desc: "فريق عمل متخصص ومدرب." },
      ],
    },
    services: {
      title: "خدماتنا",
      sub: "حلول متكاملة تدعم نجاح مشروعك",
      list: [
        { title: "التوريد للمشروعات", desc: "توريد كميات كبيرة لمواقع البناء والمقاولات بجداول زمنية دقيقة." },
        { title: "الاستشارات الفنية", desc: "مساعدتك في اختيار المنتجات المناسبة لمواصفات مشروعك." },
        { title: "أسعار الجملة", desc: "أسعار خاصة للمقاولين وأصحاب الكميات الكبيرة." },
        { title: "التوصيل السريع", desc: "خدمة توصيل لجميع محافظات مصر بأسطول لوجستي خاص." },
        { title: "ضمان المنتجات", desc: "كل منتجاتنا أصلية وبضمان رسمي من المُصنّع." },
        { title: "خدمة ما بعد البيع", desc: "متابعة مستمرة بعد التسليم لضمان رضاك الكامل." },
      ],
    },
    contact: {
      title: "تواصل معنا",
      sub: "نحن في انتظار استفسارك",
      name: "الاسم",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      message: "رسالتك",
      send: "إرسال الرسالة",
      addressLabel: "العنوان",
      phoneLabel: "الهاتف",
      emailLabel: "البريد الإلكتروني",
      hoursLabel: "ساعات العمل",
      hours: "السبت - الخميس: 9 صباحاً - 6 مساءً",
      address: "القاهرة، جمهورية مصر العربية",
      success: "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.",
    },
    footer: {
      tag: "توريدات كهربائية موثوقة لمشروعات أفضل.",
      quickLinks: "روابط سريعة",
      contactInfo: "تواصل معنا",
      rights: "جميع الحقوق محفوظة.",
    },
  },
  en: {
    dir: "ltr" as const,
    brand: "Egy Power",
    brandSub: "EGY POWER",
    nav: {
      home: "Home",
      about: "About",
      products: "Products",
      services: "Services",
      contact: "Contact",
    },
    cta: {
      quote: "Request a Quote",
      contact: "Contact Us",
      explore: "Explore Products",
      learnMore: "Learn more",
    },
    switchLang: "ع",
    hero: {
      eyebrow: "Electrical supplies for projects & contractors",
      title: "Your trusted partner in electrical materials",
      subtitle:
        "EMT & RSC conduits, flexible tubing, wires & cables, junction boxes, and electrical accessories — premium quality, competitive prices, and fast delivery.",
      stat1: "10+ Years",
      stat2: "500+ Projects",
      stat3: "24/7 Support",
    },
    sections: {
      featuresTitle: "Why choose Egy Power",
      featuresSub: "We deliver the best electrical solutions for contractors.",
      productsTitle: "Our product categories",
      productsSub: "Everything you need for your electrical work in one place.",
      ctaTitle: "Ready to start your next project?",
      ctaSub: "Contact our team now and get a custom quote within 24 hours.",
    },
    features: [
      { title: "Certified Quality", desc: "Products that meet the highest global and local standards." },
      { title: "Fast Delivery", desc: "A logistics network ensuring your order arrives on time." },
      { title: "Competitive Pricing", desc: "Direct factory deals give you the best prices." },
      { title: "Technical Support", desc: "A dedicated team to help you choose the right product." },
    ],
    products: [
      { key: "conduit", title: "EMT & RSC Conduits", desc: "Galvanized metal conduits in various sizes for every application." },
      { key: "flexible", title: "Flexible Conduits", desc: "Flexible wire protection for tight and complex spaces." },
      { key: "cables", title: "Wires & Cables", desc: "Copper cables in multiple gauges and colors for any load." },
      { key: "boxes", title: "Junction Boxes", desc: "Metal and plastic junction boxes in standard sizes." },
      { key: "accessories", title: "Electrical Accessories", desc: "Connectors, clamps, fittings, and complementary supplies." },
      { key: "pvc", title: "PVC Conduits & Accessories", desc: "PVC electrical conduits, elbows, couplers and boxes in various sizes." },
      { key: "tray", title: "Cable Tray & Accessories", desc: "Metal cable trays with bends, couplers and covers for industrial wiring." },
    ],
    about: {
      title: "About Us",
      sub: "Egy Power Company",
      p1: "Egy Power specializes in supplying electrical materials for contractors and industrial & commercial projects across Egypt.",
      p2: "We provide premium products at competitive prices, with fast delivery and continuous technical support, backed by strong partnerships with leading local and international manufacturers.",
      visionTitle: "Our Vision",
      vision: "To be the first choice for contractors in Egypt and the Middle East in electrical supplies.",
      missionTitle: "Our Mission",
      mission: "Deliver electrical products and services at the highest quality standards to support our customers' project success.",
      values: [
        { title: "Quality", desc: "No compromise on product quality." },
        { title: "Trust", desc: "Long-term relationships with our clients." },
        { title: "Speed", desc: "We respect time at every step." },
        { title: "Professionalism", desc: "A specialized and trained team." },
      ],
    },
    services: {
      title: "Our Services",
      sub: "Integrated solutions to support your project's success",
      list: [
        { title: "Project Supply", desc: "Bulk supply to construction and contracting sites on tight schedules." },
        { title: "Technical Consulting", desc: "Helping you pick the right products for your project's specs." },
        { title: "Wholesale Pricing", desc: "Special pricing for contractors and bulk buyers." },
        { title: "Fast Delivery", desc: "Delivery across all Egyptian governorates with our dedicated fleet." },
        { title: "Product Warranty", desc: "All our products are original with official manufacturer warranty." },
        { title: "After-sales Service", desc: "Continuous follow-up after delivery for your full satisfaction." },
      ],
    },
    contact: {
      title: "Contact Us",
      sub: "We're ready to answer your inquiry",
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Your message",
      send: "Send message",
      addressLabel: "Address",
      phoneLabel: "Phone",
      emailLabel: "Email",
      hoursLabel: "Working hours",
      hours: "Sat - Thu: 9 AM - 6 PM",
      address: "Cairo, Arab Republic of Egypt",
      success: "Your message has been sent! We will be in touch shortly.",
    },
    footer: {
      tag: "Reliable electrical supplies for better projects.",
      quickLinks: "Quick Links",
      contactInfo: "Contact",
      rights: "All rights reserved.",
    },
  },
} as const;

// Loose dict type to support both locales
export type Dict = {
  dir: "rtl" | "ltr";
  brand: string;
  brandSub: string;
  nav: { home: string; about: string; products: string; services: string; contact: string };
  cta: { quote: string; contact: string; explore: string; learnMore: string };
  switchLang: string;
  hero: { eyebrow: string; title: string; subtitle: string; stat1: string; stat2: string; stat3: string };
  sections: {
    featuresTitle: string; featuresSub: string;
    productsTitle: string; productsSub: string;
    ctaTitle: string; ctaSub: string;
  };
  features: ReadonlyArray<{ title: string; desc: string }>;
  products: ReadonlyArray<{ key: string; title: string; desc: string }>;
  about: {
    title: string; sub: string; p1: string; p2: string;
    visionTitle: string; vision: string; missionTitle: string; mission: string;
    values: ReadonlyArray<{ title: string; desc: string }>;
  };
  services: { title: string; sub: string; list: ReadonlyArray<{ title: string; desc: string }> };
  contact: {
    title: string; sub: string; name: string; email: string; phone: string; message: string; send: string;
    addressLabel: string; phoneLabel: string; emailLabel: string; hoursLabel: string;
    hours: string; address: string; success: string;
  };
  footer: { tag: string; quickLinks: string; contactInfo: string; rights: string };
};