# بدايةٌ على مودة

دعوة زفاف إسلامية عربية تفاعلية مبنية بـNext.js وTypeScript، وتتكون من سبعة فصول بصرية. المشروع Static Export بالكامل: لا يحتاج خادمًا أو قاعدة بيانات، ومهيأ للنشر المباشر على GitHub Pages حتى عند وجوده تحت مسار مستودع.

## التشغيل محليًا

المتطلبات: Node.js 20.19 أو أحدث وnpm (ويستخدم Workflow إصدار Node.js 22).

```bash
npm install
npm run dev
```

افتح `http://localhost:3000`. وللتحقق من نسخة الإنتاج:

```bash
npm run lint
npm run typecheck
npm run build
```

ينتج البناء الثابت في مجلد `out/`.

## تعديل بيانات الدعوة

كل المحتوى القابل للتعديل موجود في ملف واحد فقط:

`src/config/invitation.ts`

غيّر فيه الأسماء، العائلتين، صيغة الدعوة، التاريخ بصيغة ISO، الوقت، القاعة، العنوان، رابط Google Maps، الرسالة، الصور، الصوت، الألوان وخيارات الإظهار. البيانات الحالية تجريبية ومحاطة بأقواس مثل `[اسم العريس]`.

ملاحظات مهمة:

- اكتب `weddingDateISO` مع فرق التوقيت، مثل `2027-05-21T19:00:00+03:00` للأردن.
- يمكن حذف `hijriDate` أو جعله `undefined` لإخفائه.
- عطّل المعرض عبر `showGallery: false`، أو اترك `images: []`؛ لن يظهر قسم فارغ.
- عطّل الرسالة عبر `showPersonalMessage: false`.
- أخفِ الرمز عبر `showMonogram: false`.
- عيّن `siteUrl` إلى الرابط النهائي إن كنت تستخدم نطاقًا مخصصًا. عند GitHub Actions يُستنتج رابط Pages تلقائيًا إن تركته `undefined`.

## الصور والصوت وصورة المشاركة

- ضع صور الذكريات داخل `public/images/` ثم حدّث مصفوفة `images` في ملف الإعدادات. يفضّل WebP أو AVIF بنسبة قريبة من 4:5 وبحجم مناسب للويب.
- الملفات الحالية `memory-1.svg` إلى `memory-3.svg` مجرد Placeholders محلية واضحة ويمكن حذفها بعد وضع الصور الحقيقية.
- ضع ملف الصوت المرخّص للاستخدام داخل `public/audio/`، ثم اكتب مثلًا `audioSrc: "/audio/wedding.mp3"`. اتركه `undefined` لإخفاء التحكم بالصوت تمامًا. يبدأ الموقع دائمًا بلا صوت، ولا يتم التشغيل إلا بعد ضغط الزائر.
- استبدل `public/og-invitation.png` بصورة مشاركة بقياس 1200×630، ثم أبقِ `shareImage: "/og-invitation.png"`. الملف `og-invitation.svg` هو المصدر القابل للتحرير للنسخة التجريبية.
- استبدل `public/favicon.svg` إذا رغبت.

لا تستخدم روابط خارجية للصور أو الصوت؛ المسارات المحلية تُضاف إليها بادئة مستودع GitHub Pages تلقائيًا.

## النشر على GitHub Pages

1. أنشئ Repository جديدًا في GitHub، مثل `wedding-invitation`. لا تضف README من GitHub لأن المشروع يحتوي واحدًا بالفعل.
2. من داخل مجلد المشروع نفّذ:

   ```bash
   git init
   git add .
   git commit -m "Build Arabic wedding invitation"
   git branch -M main
   git remote add origin https://github.com/USERNAME/wedding-invitation.git
   git push -u origin main
   ```

3. في GitHub افتح **Settings → Pages**.
4. تحت **Build and deployment** اختر **Source: GitHub Actions**.
5. افتح تبويب **Actions** وانتظر اكتمال Workflow باسم “Deploy invitation to GitHub Pages”.
6. سيظهر الرابط في نتيجة عملية النشر، ويكون عادة:

   `https://USERNAME.github.io/wedding-invitation/`

ملف `.github/workflows/deploy.yml` يستخرج اسم المستودع تلقائيًا، ويضبط `basePath` و`assetPrefix`، ثم يبني مجلد `out` وينشره. وإذا كان اسم المستودع `USERNAME.github.io` فسيستخدم جذر النطاق بلا مسار إضافي.

## بنية المشروع

- `src/config/invitation.ts`: مصدر بيانات الدعوة الوحيد.
- `src/components/`: الفصول والمكونات المنفصلة للظرف، الآية، البوابة، الإعلان، التاريخ، المكان، الصور والختام.
- `src/hooks/useCountdown.ts`: العد التنازلي وحالات النص الزمنية.
- `src/lib/calendar.ts`: إنشاء ICS ورابط Google Calendar.
- `src/lib/assets.ts`: معالجة مسار GitHub Pages لكل أصل محلي.
- `public/`: الزخارف والأيقونة وصور العرض والصوت الاختياري.
- `.github/workflows/deploy.yml`: البناء والنشر التلقائي عند Push إلى `main`.

## إمكانية الوصول والأداء

التجربة تدعم لوحة المفاتيح، حالات Focus، `aria-label`، اتجاه RTL، Safe Areas، الشاشات الصغيرة بدءًا من 320px، و`prefers-reduced-motion`. الصور المؤجلة لا تُحمّل عند تعطيل المعرض، ولا توجد فيديوهات أو Backend أو مكتبات ثلاثية الأبعاد ثقيلة.
# alaa_wedding_invite
