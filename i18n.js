/* Translations. English is whatever the page itself shows (including text edited in /admin),
   so it has no entry here except for strings built in JavaScript. Elements opt in with
   data-i18n="key" (inner HTML) or data-i18n-ph="key" (placeholder). */
(function () {
    'use strict';

    var T = {
        en: {
            night: 'night', nights: 'nights', rate_per: ' / night',
            warn_adjust: 'Minimum stay is {n} nights. Please adjust your dates.',
            warn_longer: 'Minimum stay is {n} nights. Please select a longer stay.'
        },
        fr: {
            nav_home: 'La maison', nav_amen: 'Équipements', nav_contact: 'Contact', nav_book: 'Réserver',
            hero_l1: 'Escapades de luxe', hero_l2: 'face à la mer à Marbella',
            btn_view: 'Voir la maison', scroll: 'Défiler',
            st_pools: 'Piscines', st_beach: 'De la plage', st_amen: 'Services du resort', st_sec: 'Résidence sécurisée',
            story_tag: 'Un lieu à part',
            story_h: 'Là où la Méditerranée<br>devient votre jardin',
            story_body: 'À quelques pas de la plage, au cœur de l’exclusive résidence Dominion Beach. Passez vos matinées au bord de la piscine ou en balade vers la mer, et dînez sous les étoiles au restaurant du resort, face à la plage.',
            b1: 'Directement sur la promenade du front de mer',
            b2: 'Résidence privée sécurisée 24h/24',
            b3: 'Jusqu’à 4 personnes en tout confort',
            b4: 'Finitions haut de gamme, entièrement équipé',
            b5: 'Terrasse privée avec jardin et repas en plein air',
            home_label: 'La maison', home_h: 'Chaque détail,<br>soigneusement pensé',
            home_body: 'Un refuge entièrement meublé, alliant l’élégance méditerranéenne intemporelle à tout le confort moderne.',
            cap_bedroom: 'Suite parentale', cap_living: 'Salon', cap_terrace: 'Terrasse privée &amp; jardin',
            cap_lounge: 'Salon &amp; salle à manger', cap_exterior: 'Jardin', cap_seaview: 'Chambre à lits jumeaux',
            cap_kitchen: 'Cuisine entièrement équipée', cap_bathroom: 'Salle de bains en marbre attenante',
            quote: '« La Méditerranée s’étend à perte de vue — la plage à votre porte, baignée de la lumière dorée de l’Andalousie. »',
            amen_label: 'Inclus', amen_h: 'Tout le confort,<br>toutes les commodités',
            a_beach: 'Accès à la plage', a_pools: '2 piscines', a_gym: 'Salle de sport', a_rest: 'Restaurant en bord de mer',
            a_loungers: 'Transats', a_ac: 'Climatisation', a_kitchen: 'Cuisine équipée', a_terrace: 'Terrasse privée',
            a_washer: 'Lave-linge &amp; sèche-linge', a_wifi: 'Wi-Fi gratuit', a_gated: 'Résidence fermée',
            a_prom: 'Promenade côtière', a_tv: 'Smart TV', a_linen: 'Linge de lit &amp; serviettes', a_checkin: 'Arrivée flexible',
            tab_contact: 'Contact', tab_inquiry: 'Demande',
            book_tag: 'Réservez votre séjour', book_h: 'Votre escapade<br>méditerranéenne vous attend',
            book_body: 'Escapade romantique, vacances en famille ou long séjour au soleil : nous serons ravis de vous faire découvrir Dominion Beach sous son meilleur jour. Contactez-nous, nous répondons sous 24 heures.',
            price_from: 'À partir de', price_note: 'par nuit · réservation directe', min_label: 'nuits minimum',
            pt1: 'Séjour minimum : 6 nuits', pt2: 'Arrivée et départ flexibles', pt3: 'Accueil et présentation personnalisés',
            pt4: 'Réservation directe — sans frais de plateforme', pt5: 'Réponse sous 24 heures',
            form_h: 'Envoyer une demande', form_sub: 'Nous vous répondrons avec les disponibilités et les tarifs sous 24 heures.',
            f_fname: 'Prénom', f_lname: 'Nom', f_email: 'Adresse e-mail', f_phone: 'Téléphone / WhatsApp',
            f_in: 'Arrivée', f_out: 'Départ', f_guests: 'Nombre de personnes', f_msg: 'Message',
            f_msg_ph: 'Parlez-nous de votre voyage, de vos demandes particulières ou de vos questions…',
            g_select: 'Choisir', g1: '1 personne', g2: '2 personnes', g3: '3 personnes', g4: '4 personnes',
            cost_rate: 'Tarif', cost_total: 'Total estimé',
            submit: 'Envoyer via WhatsApp', email_alt: 'Vous préférez l’e-mail ? Envoyer par e-mail',
            contact_label: 'Contactez-nous', contact_h: 'Organisons<br>votre séjour',
            contact_sub: 'Une question sur la maison, les disponibilités ou la région ? Contactez-nous directement, nous serons ravis de vous aider.',
            c_email: 'E-mail', c_wa: 'WhatsApp &amp; téléphone',
            loc: 'Marbella · Estepona<br>Costa del Sol, Espagne', airport: 'À 45 min de l’aéroport de Málaga',
            map_btn: 'Voir Dominion Beach House',
            foot_about: 'À propos', foot_book: 'Réserver', foot_rights: '© 2025 Dominion Beach House. Tous droits réservés.',
            foot_place: 'Marbella, Málaga, Espagne',
            night: 'nuit', nights: 'nuits', rate_per: ' / nuit',
            warn_adjust: 'Le séjour minimum est de {n} nuits. Veuillez modifier vos dates.',
            warn_longer: 'Le séjour minimum est de {n} nuits. Veuillez choisir un séjour plus long.'
        },
        es: {
            nav_home: 'La casa', nav_amen: 'Servicios', nav_contact: 'Contacto', nav_book: 'Reservar',
            hero_l1: 'Escapadas de lujo', hero_l2: 'frente al mar en Marbella',
            btn_view: 'Ver la casa', scroll: 'Desliza',
            st_pools: 'Piscinas', st_beach: 'De la playa', st_amen: 'Servicios del resort', st_sec: 'Urbanización vigilada',
            story_tag: 'Un lugar único',
            story_h: 'Donde el Mediterráneo<br>es tu jardín',
            story_body: 'A pocos pasos de la playa, en el corazón de la exclusiva urbanización Dominion Beach. Pasa las mañanas junto a la piscina o paseando hasta la orilla, y cena bajo las estrellas en el restaurante del resort frente al mar.',
            b1: 'Directamente en el paseo marítimo',
            b2: 'Urbanización privada con seguridad 24/7',
            b3: 'Hasta 4 huéspedes con total comodidad',
            b4: 'Acabados de primera y totalmente equipada',
            b5: 'Terraza privada con jardín y comedor exterior',
            home_label: 'La casa', home_h: 'Cada detalle,<br>pensado con cariño',
            home_body: 'Un refugio totalmente amueblado que combina la elegancia mediterránea atemporal con todas las comodidades modernas.',
            cap_bedroom: 'Suite principal', cap_living: 'Salón', cap_terrace: 'Terraza privada y jardín',
            cap_lounge: 'Salón y comedor', cap_exterior: 'Jardín', cap_seaview: 'Dormitorio con dos camas',
            cap_kitchen: 'Cocina totalmente equipada', cap_bathroom: 'Baño en suite de mármol',
            quote: '«El Mediterráneo se extiende ante ti hasta el horizonte: la playa a tu puerta y la luz dorada de Andalucía a tu alrededor.»',
            amen_label: 'Qué incluye', amen_h: 'Todo el confort,<br>todas las comodidades',
            a_beach: 'Acceso a la playa', a_pools: '2 piscinas', a_gym: 'Gimnasio', a_rest: 'Restaurante frente al mar',
            a_loungers: 'Tumbonas', a_ac: 'Aire acondicionado', a_kitchen: 'Cocina equipada', a_terrace: 'Terraza privada',
            a_washer: 'Lavadora y secadora', a_wifi: 'Wi-Fi gratis', a_gated: 'Urbanización cerrada',
            a_prom: 'Paseo marítimo', a_tv: 'Smart TV', a_linen: 'Ropa de cama y toallas', a_checkin: 'Entrada flexible',
            tab_contact: 'Contacto', tab_inquiry: 'Consulta',
            book_tag: 'Reserva tu estancia', book_h: 'Tu escapada<br>mediterránea te espera',
            book_body: 'Ya sea una escapada romántica, unas vacaciones en familia o una estancia larga al sol, nos encantará ayudarte a disfrutar de Dominion Beach al máximo. Escríbenos y te responderemos en 24 horas.',
            price_from: 'Desde', price_note: 'por noche · reserva directa', min_label: 'noches mínimo',
            pt1: 'Estancia mínima: 6 noches', pt2: 'Entrada y salida flexibles', pt3: 'Bienvenida y orientación personalizadas',
            pt4: 'Reserva directa, sin comisiones de plataformas', pt5: 'Respuesta en 24 horas',
            form_h: 'Enviar una consulta', form_sub: 'Te responderemos con disponibilidad y precios en 24 horas.',
            f_fname: 'Nombre', f_lname: 'Apellidos', f_email: 'Correo electrónico', f_phone: 'Teléfono / WhatsApp',
            f_in: 'Llegada', f_out: 'Salida', f_guests: 'Número de huéspedes', f_msg: 'Mensaje',
            f_msg_ph: 'Cuéntanos sobre tu viaje, peticiones especiales o cualquier pregunta…',
            g_select: 'Selecciona', g1: '1 huésped', g2: '2 huéspedes', g3: '3 huéspedes', g4: '4 huéspedes',
            cost_rate: 'Tarifa', cost_total: 'Total estimado',
            submit: 'Enviar por WhatsApp', email_alt: '¿Prefieres el correo? Enviar por email',
            contact_label: 'Escríbenos', contact_h: 'Planifiquemos<br>tu estancia',
            contact_sub: '¿Preguntas sobre la casa, la disponibilidad o la zona? Escríbenos directamente, estaremos encantados de ayudarte.',
            c_email: 'Correo', c_wa: 'WhatsApp y teléfono',
            loc: 'Marbella · Estepona<br>Costa del Sol, España', airport: 'A 45 min del aeropuerto de Málaga',
            map_btn: 'Ver Dominion Beach House',
            foot_about: 'Sobre nosotros', foot_book: 'Reservar', foot_rights: '© 2025 Dominion Beach House. Todos los derechos reservados.',
            foot_place: 'Marbella, Málaga, España',
            night: 'noche', nights: 'noches', rate_per: ' / noche',
            warn_adjust: 'La estancia mínima es de {n} noches. Ajusta tus fechas, por favor.',
            warn_longer: 'La estancia mínima es de {n} noches. Elige una estancia más larga, por favor.'
        },
        de: {
            nav_home: 'Das Haus', nav_amen: 'Ausstattung', nav_contact: 'Kontakt', nav_book: 'Jetzt buchen',
            hero_l1: 'Luxus-Urlaub', hero_l2: 'direkt am Strand von Marbella',
            btn_view: 'Haus ansehen', scroll: 'Scrollen',
            st_pools: 'Pools', st_beach: 'Zum Strand', st_amen: 'Resort-Ausstattung', st_sec: 'Bewachte Anlage',
            story_tag: 'Ein besonderer Ort',
            story_h: 'Wo das Mittelmeer<br>zu Ihrem Garten wird',
            story_body: 'Nur wenige Schritte vom Strand, mitten in der exklusiven Anlage Dominion Beach. Verbringen Sie den Morgen am Pool oder bei einem Spaziergang ans Meer und speisen Sie unter dem Sternenhimmel im Strandrestaurant des Resorts.',
            b1: 'Direkt an der Strandpromenade',
            b2: 'Exklusive, bewachte Anlage mit 24/7-Sicherheitsdienst',
            b3: 'Bis zu 4 Gäste in vollem Komfort',
            b4: 'Hochwertige Ausstattung bis ins Detail',
            b5: 'Private Terrasse mit Garten und Essbereich im Freien',
            home_label: 'Das Haus', home_h: 'Jedes Detail<br>mit Liebe durchdacht',
            home_body: 'Ein komplett eingerichtetes Refugium, das zeitlose mediterrane Eleganz mit modernem Komfort verbindet.',
            cap_bedroom: 'Hauptschlafzimmer', cap_living: 'Wohnzimmer', cap_terrace: 'Private Terrasse &amp; Garten',
            cap_lounge: 'Lounge &amp; Essbereich', cap_exterior: 'Garten', cap_seaview: 'Zweibettzimmer',
            cap_kitchen: 'Voll ausgestattete Küche', cap_bathroom: 'Marmorbad en suite',
            quote: '„Vor Ihnen erstreckt sich endlos das Mittelmeer – der Strand vor der Tür, ringsum das goldene Licht Andalusiens.“',
            amen_label: 'Inklusive', amen_h: 'Aller Komfort,<br>jede Annehmlichkeit',
            a_beach: 'Strandzugang', a_pools: '2 Pools', a_gym: 'Gym', a_rest: 'Strandrestaurant',
            a_loungers: 'Sonnenliegen', a_ac: 'Klimaanlage', a_kitchen: 'Ausgestattete Küche', a_terrace: 'Private Terrasse',
            a_washer: 'Waschmaschine &amp; Trockner', a_wifi: 'Kostenloses WLAN', a_gated: 'Bewachte Wohnanlage',
            a_prom: 'Küstenpromenade', a_tv: 'Smart-TV', a_linen: 'Bettwäsche &amp; Handtücher', a_checkin: 'Flexibler Check-in',
            tab_contact: 'Kontakt', tab_inquiry: 'Anfrage',
            book_tag: 'Ihr Aufenthalt', book_h: 'Ihr Mittelmeer-Urlaub<br>wartet auf Sie',
            book_body: 'Ob romantischer Kurzurlaub, Familienurlaub oder ein längerer Aufenthalt in der Sonne – wir freuen uns, Ihnen Dominion Beach von seiner schönsten Seite zu zeigen. Schreiben Sie uns, wir antworten innerhalb von 24 Stunden.',
            price_from: 'Ab', price_note: 'pro Nacht · Direktbuchung', min_label: 'Nächte mindestens',
            pt1: 'Mindestaufenthalt: 6 Nächte', pt2: 'Flexibler Check-in &amp; Check-out', pt3: 'Persönlicher Empfang &amp; Einweisung',
            pt4: 'Direkt buchen – ohne Plattformgebühren', pt5: 'Antwort innerhalb von 24 Stunden',
            form_h: 'Anfrage senden', form_sub: 'Wir antworten innerhalb von 24 Stunden mit Verfügbarkeit und Preisen.',
            f_fname: 'Vorname', f_lname: 'Nachname', f_email: 'E-Mail-Adresse', f_phone: 'Telefon / WhatsApp',
            f_in: 'Anreise', f_out: 'Abreise', f_guests: 'Anzahl der Gäste', f_msg: 'Nachricht',
            f_msg_ph: 'Erzählen Sie uns von Ihrer Reise, besonderen Wünschen oder Fragen…',
            g_select: 'Bitte wählen', g1: '1 Gast', g2: '2 Gäste', g3: '3 Gäste', g4: '4 Gäste',
            cost_rate: 'Preis', cost_total: 'Geschätzter Gesamtpreis',
            submit: 'Per WhatsApp senden', email_alt: 'Lieber per E-Mail? Per E-Mail senden',
            contact_label: 'Kontakt', contact_h: 'Planen wir<br>Ihren Aufenthalt',
            contact_sub: 'Fragen zum Haus, zur Verfügbarkeit oder zur Umgebung? Schreiben Sie uns direkt – wir helfen Ihnen gern.',
            c_email: 'E-Mail', c_wa: 'WhatsApp &amp; Telefon',
            loc: 'Marbella · Estepona<br>Costa del Sol, Spanien', airport: '45 Min. vom Flughafen Málaga',
            map_btn: 'Dominion Beach House ansehen',
            foot_about: 'Über uns', foot_book: 'Buchen', foot_rights: '© 2025 Dominion Beach House. Alle Rechte vorbehalten.',
            foot_place: 'Marbella, Málaga, Spanien',
            night: 'Nacht', nights: 'Nächte', rate_per: ' / Nacht',
            warn_adjust: 'Der Mindestaufenthalt beträgt {n} Nächte. Bitte passen Sie Ihre Daten an.',
            warn_longer: 'Der Mindestaufenthalt beträgt {n} Nächte. Bitte wählen Sie einen längeren Aufenthalt.'
        },
        ar: {
            nav_home: 'المنزل', nav_amen: 'المرافق', nav_contact: 'تواصل معنا', nav_book: 'احجز الآن',
            hero_l1: 'عطلات فاخرة', hero_l2: 'على شاطئ ماربيا',
            btn_view: 'شاهد المنزل', scroll: 'مرّر',
            st_pools: 'مسبحان', st_beach: 'من الشاطئ', st_amen: 'مرافق المنتجع', st_sec: 'أمن على مدار الساعة',
            story_tag: 'مكان استثنائي',
            story_h: 'حيث يصبح البحر المتوسط<br>حديقتك الخلفية',
            story_body: 'على بُعد خطوات من الشاطئ، في قلب مجمّع دومينيون بيتش الحصري. اقضِ صباحك بجانب المسبح أو في نزهة إلى الشاطئ، وتناول العشاء تحت النجوم في مطعم المنتجع المطل على البحر.',
            b1: 'مباشرة على ممشى الواجهة البحرية',
            b2: 'منتجع خاص مسوَّر مع أمن على مدار الساعة',
            b3: 'يتسع لما يصل إلى 4 ضيوف براحة تامة',
            b4: 'تشطيبات فاخرة وتجهيز كامل',
            b5: 'تراس خاص مع حديقة ومنطقة طعام خارجية',
            home_label: 'المنزل', home_h: 'كل تفصيلة<br>مدروسة بعناية',
            home_body: 'ملاذ مفروش بالكامل يجمع بين أناقة البحر المتوسط الخالدة وكل وسائل الراحة الحديثة.',
            cap_bedroom: 'الجناح الرئيسي', cap_living: 'غرفة المعيشة', cap_terrace: 'تراس خاص وحديقة',
            cap_lounge: 'صالة وغرفة طعام', cap_exterior: 'الحديقة', cap_seaview: 'غرفة بسريرين',
            cap_kitchen: 'مطبخ مجهز بالكامل', cap_bathroom: 'حمام رخامي داخلي',
            quote: '«يمتد البحر المتوسط أمامك بلا نهاية — الشاطئ على عتبة بابك، وضوء الأندلس الذهبي من حولك.»',
            amen_label: 'ما تشمله الإقامة', amen_h: 'كل الراحة،<br>وكل وسائل الرفاهية',
            a_beach: 'وصول مباشر إلى الشاطئ', a_pools: 'مسبحان', a_gym: 'صالة رياضية', a_rest: 'مطعم على الشاطئ',
            a_loungers: 'كراسي للتشمس', a_ac: 'تكييف هواء', a_kitchen: 'مطبخ مجهز', a_terrace: 'تراس خاص',
            a_washer: 'غسالة ومجفف', a_wifi: 'واي فاي مجاني', a_gated: 'مجمّع مسوَّر',
            a_prom: 'ممشى ساحلي', a_tv: 'تلفزيون ذكي', a_linen: 'بياضات ومناشف', a_checkin: 'تسجيل وصول مرن',
            tab_contact: 'تواصل معنا', tab_inquiry: 'استفسار',
            book_tag: 'احجز إقامتك', book_h: 'عطلتك المتوسطية<br>بانتظارك',
            book_body: 'سواء كنت تخطط لعطلة رومانسية أو عطلة عائلية أو إقامة طويلة تحت الشمس، يسعدنا أن نساعدك على الاستمتاع بدومينيون بيتش في أجمل حالاته. تواصل معنا وسنرد خلال 24 ساعة.',
            price_from: 'ابتداءً من', price_note: 'لليلة · حجز مباشر', min_label: 'ليالٍ كحد أدنى',
            pt1: 'الحد الأدنى للإقامة: 6 ليالٍ', pt2: 'مرونة في مواعيد الوصول والمغادرة', pt3: 'استقبال شخصي وتعريف بالمكان',
            pt4: 'حجز مباشر — دون رسوم منصات', pt5: 'رد خلال 24 ساعة',
            form_h: 'أرسل استفساراً', form_sub: 'سنرد عليك بالتوفر والأسعار خلال 24 ساعة.',
            f_fname: 'الاسم الأول', f_lname: 'اسم العائلة', f_email: 'البريد الإلكتروني', f_phone: 'الهاتف / واتساب',
            f_in: 'تاريخ الوصول', f_out: 'تاريخ المغادرة', f_guests: 'عدد الضيوف', f_msg: 'الرسالة',
            f_msg_ph: 'أخبرنا عن رحلتك أو أي طلبات خاصة أو أسئلة لديك…',
            g_select: 'اختر عدد الضيوف', g1: 'ضيف واحد', g2: 'ضيفان', g3: '3 ضيوف', g4: '4 ضيوف',
            cost_rate: 'السعر', cost_total: 'الإجمالي التقديري',
            submit: 'أرسل عبر واتساب', email_alt: 'تفضّل البريد الإلكتروني؟ أرسل عبر البريد',
            contact_label: 'تواصل معنا', contact_h: 'لنخطط<br>لإقامتك معاً',
            contact_sub: 'هل لديك أسئلة عن المنزل أو التوفر أو المنطقة؟ تواصل معنا مباشرة ويسعدنا مساعدتك.',
            c_email: 'البريد الإلكتروني', c_wa: 'واتساب والهاتف',
            loc: 'ماربيا · إستيبونا<br>كوستا ديل سول، إسبانيا', airport: '45 دقيقة من مطار مالقة',
            map_btn: 'اعرض Dominion Beach House',
            foot_about: 'من نحن', foot_book: 'احجز', foot_rights: '© 2025 Dominion Beach House. جميع الحقوق محفوظة.',
            foot_place: 'ماربيا، مالقة، إسبانيا',
            night: 'ليلة', nights: 'ليالٍ', rate_per: ' / لليلة',
            warn_adjust: 'الحد الأدنى للإقامة {n} ليالٍ. يُرجى تعديل التواريخ.',
            warn_longer: 'الحد الأدنى للإقامة {n} ليالٍ. يُرجى اختيار إقامة أطول.'
        }
    };

    var lang = 'en';
    try { lang = localStorage.getItem('lang') || 'en'; } catch (e) {}
    if (!T[lang]) lang = 'en';

    // Strings used by scripts; falls back to English.
    window.t = function (key, n) {
        var s = (T[lang] && T[lang][key]) || T.en[key] || key;
        return n === undefined ? s : s.replace('{n}', n);
    };

    // Re-reads English from the page, so call it again after /admin content has been applied.
    window.applyLang = function (next) {
        if (next) {
            lang = T[next] ? next : 'en';
            try { localStorage.setItem('lang', lang); } catch (e) {}
        }
        var dict = lang === 'en' ? {} : T[lang];
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            if (el.dataset.en === undefined) el.dataset.en = el.innerHTML;
            el.innerHTML = dict[el.dataset.i18n] || el.dataset.en;
        });
        document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
            if (el.dataset.enPh === undefined) el.dataset.enPh = el.placeholder;
            el.placeholder = dict[el.dataset.i18nPh] || el.dataset.enPh;
        });
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.querySelectorAll('.lang-btn').forEach(function (b) {
            b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false');
        });
        document.dispatchEvent(new Event('langchange'));
    };

    document.querySelectorAll('.lang-btn').forEach(function (b) {
        b.addEventListener('click', function () { window.applyLang(b.dataset.lang); });
    });
    window.applyLang();
}());
