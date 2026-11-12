// data.js — โรงเรียนที่มีตำแหน่งว่าง ครูวิชาเอกคณิตศาสตร์
// สพม.สุราษฎร์ธานี ชุมพร · เรียกบรรจุและแต่งตั้ง 19 พฤศจิกายน 2569
// seq / position_no มาจากประกาศบัญชีตำแหน่งว่าง; ข้อมูลอื่นค้นจากแหล่งสาธารณะ
// (ดู sources ของแต่ละโรงเรียน) — "ไม่ยืนยัน" = ยังตรวจสอบไม่ได้
const SCHOOLS = [
  {
    "id": 1,
    "seq": 3,
    "position_no": "27954",
    "name": "โรงเรียนบางสวรรค์วิทยาคม",
    "tambon": "บางสวรรค์",
    "amphoe": "พระแสง",
    "province": "สุราษฎร์ธานี",
    "address": "หมู่ที่ 2 บ้านบางสวรรค์ ต.บางสวรรค์ อ.พระแสง จ.สุราษฎร์ธานี 84210 (โทร 077-365013, โทรสาร 077-365011)",
    "lower_secondary": true,
    "upper_secondary": true,
    "levels_note": "ม.1-6",
    "google_map": {
      "url": "https://www.google.com/maps/search/?api=1&query=8.621052,98.983027",
      "lat": 8.621052,
      "lng": 98.983027
    },
    "student_count": "1,647 คน",
    "students_num": 1647,
    "students_asof": "10 มิ.ย. 2569",
    "staff_count": "ราว 78 คน ตามรายชื่อบนเว็บโรงเรียน (ไม่ยืนยัน)",
    "math_teachers": "8 คน ตามรายชื่อบนเว็บโรงเรียน (ไม่ยืนยัน)",
    "size": "ใหญ่",
    "distance": "82 กม. ถึงเมืองสุราษฎร์ธานี · ขับรถราว 1 ชม. 5 นาที–1 ชม. 20 นาที (คำนวณเส้นทางโดยประมาณ)",
    "distance_km": 82,
    "distance_short": "82 กม.",
    "distance_note": "ถึงเมืองสุราษฎร์ธานี · ราว 1 ชม. 5 นาที–1 ชม. 20 นาที",
    "special_programs": "ห้องเรียนพิเศษวิทยาศาสตร์-คณิตศาสตร์ (SCI-MATH)",
    "programs_short": "SCI-MATH",
    "awards": [
      "ได้รับโล่รางวัลคุณภาพ OBECQA ประจำปี 2568 (ข่าว 17 ส.ค. 69 บนเว็บโรงเรียน)"
    ],
    "highlights": [
      "จำนวนนักเรียนปี 2565–2569: 1,534 → 1,548 → 1,614 → 1,655 → 1,647",
      "แยกรายชั้น: ม.1 314, ม.2 336, ม.3 305, ม.4 248, ม.5 222, ม.6 222"
    ],
    "teacher_housing": "ไม่พบข้อมูลบ้านพักครู (ไม่ยืนยัน)",
    "rental_houses": "ต.บางสวรรค์เป็นพื้นที่ชนบท/สวนยาง ห้องเช่าน้อย ทางเลือกหลักคือห้องเช่า/หอพักรายเดือนในตัวอำเภอพระแสง (ย่านอิปัน/ตลาดพระแสง) หรือบ้านเช่าในหมู่บ้านใกล้โรงเรียน; ไม่มีคอนโดในพื้นที่ ข้อมูลทั่วไป (ไม่ยืนยัน)",
    "website": "http://bswschool.ac.th",
    "facebook": "https://www.facebook.com/bswschoolst",
    "sources": [
      {
        "url": "https://info.bopp.go.th/school/84032010?area=57",
        "label": "สารสนเทศข้อมูลโรงเรียน สพฐ. (นักเรียน 10 มิ.ย. 2569, พิกัด, ขนาด)"
      },
      {
        "url": "http://bswschool.ac.th/mainpage",
        "label": "เว็บไซต์โรงเรียน หน้าหลัก (ที่อยู่ โทร ข่าว SCI-MATH, OBECQA)"
      },
      {
        "url": "http://bswschool.ac.th/person_3",
        "label": "เว็บโรงเรียน กลุ่มสาระคณิตศาสตร์ (8 รายชื่อ)"
      },
      {
        "url": "http://84100801.thaischool.in.th/th",
        "label": "เว็บโรงเรียน (thaischool) ที่อยู่"
      },
      {
        "url": "https://th.wikipedia.org/wiki/รายชื่อโรงเรียนในจังหวัดสุราษฎร์ธานี",
        "label": "Wikipedia รายชื่อโรงเรียน จ.สุราษฎร์ธานี (ตำบล/อำเภอ/สหวิทยาเขต)"
      },
      {
        "url": "https://router.project-osrm.org",
        "label": "OSRM คำนวณระยะทางขับรถ (ประมาณ)"
      }
    ]
  },
  {
    "id": 2,
    "seq": 4,
    "position_no": "3252",
    "name": "โรงเรียนบ้านนาวิทยาคม",
    "tambon": "บ้านนา",
    "amphoe": "บ้านนาเดิม",
    "province": "สุราษฎร์ธานี",
    "address": "341 หมู่ 2 ต.บ้านนา อ.บ้านนาเดิม จ.สุราษฎร์ธานี 84240 (โทร/โทรสาร 0-7735-9096)",
    "lower_secondary": true,
    "upper_secondary": true,
    "levels_note": "ม.1-6 (ม.ต้นตั้งแต่ 2521, ม.ปลายตั้งแต่ 2533)",
    "google_map": {
      "url": "https://www.google.com/maps/search/?api=1&query=8.88045,99.316189",
      "lat": 8.88045,
      "lng": 99.316189
    },
    "student_count": "705 คน",
    "students_num": 705,
    "students_asof": "10 มิ.ย. 2569",
    "staff_count": "ราว 36 คน ตามรายชื่อบนเว็บโรงเรียน (ไม่ยืนยัน)",
    "math_teachers": "4 คน ตามรายชื่อบนเว็บโรงเรียน (ไม่ยืนยัน)",
    "size": "กลาง",
    "distance": "40 กม. ถึงเมืองสุราษฎร์ธานี · ขับรถราว 40-50 นาที (คำนวณเส้นทางโดยประมาณ)",
    "distance_km": 40,
    "distance_short": "40 กม.",
    "distance_note": "ถึงเมืองสุราษฎร์ธานี · ราว 40-50 นาที",
    "special_programs": "ไม่พบห้องเรียนพิเศษวิทย์-คณิต / EP / MEP (ไม่ยืนยัน)",
    "programs_short": "ไม่มีห้องพิเศษ",
    "awards": [
      "ก่อตั้ง 17 พ.ค. 2499 พื้นที่ราว 50 ไร่",
      "2549 โรงเรียนในฝัน (1 อำเภอ 1 โรงเรียนในฝัน)",
      "2562 โรงเรียนคุณภาพประจำตำบล",
      "2565 โรงเรียนคุณธรรม สพฐ. 3 ดาว",
      "2566 ITA Online ระดับ AA; รางวัลเสมา ป.ป.ส. ระดับเงิน",
      "2568 โรงเรียนสีขาวระดับทอง; 2569 ระดับเพชร และผ่านการประเมินคุณภาพภายนอก"
    ],
    "highlights": [
      "จำนวนนักเรียนปี 2565–2569: 633 → 623 → 644 → 648 → 705",
      "แยกรายชั้น: ม.1 132, ม.2 129, ม.3 135, ม.4 114, ม.5 102, ม.6 93",
      "โรงเรียนสีขาว (DIAMOND Model) · หลักสูตรต้านทุจริตศึกษา · ศูนย์การเรียนรู้เศรษฐกิจพอเพียง"
    ],
    "teacher_housing": "มีบ้านพักครูตามรายการอาคารบนเว็บโรงเรียน จำนวนและสภาพ (ไม่ยืนยัน)",
    "rental_houses": "อำเภอเล็ก ห้องเช่าในตัวอำเภอบ้านนาเดิมมีจำกัด; อยู่ห่างตัวเมืองสุราษฎร์ฯ/บ้านนาสารไม่ไกล (~40 กม.) จึงเลือกเช่าอพาร์ตเมนต์/คอนโดในเมืองสุราษฎร์ธานี หรือห้องเช่าในบ้านนาสาร/บ้านนาเดิมได้ ข้อมูลทั่วไป (ไม่ยืนยัน)",
    "website": "https://bannawittayakhom.com",
    "facebook": "https://www.facebook.com/bannawitSchool",
    "sources": [
      {
        "url": "https://info.bopp.go.th/school/84032003?area=57",
        "label": "สารสนเทศข้อมูลโรงเรียน สพฐ."
      },
      {
        "url": "https://bannawittayakhom.com/datashow_8177",
        "label": "ประวัติโรงเรียน (ที่อยู่ ประวัติ รางวัล)"
      },
      {
        "url": "https://bannawittayakhom.com/mainpage",
        "label": "เว็บโรงเรียน หน้าหลัก (Facebook, โครงการ)"
      },
      {
        "url": "https://bannawittayakhom.com/person_3",
        "label": "เว็บโรงเรียน กลุ่มสาระคณิตศาสตร์"
      },
      {
        "url": "https://bannawittayakhom.com/building",
        "label": "ข้อมูลอาคารสถานที่ (บ้านพักครู)"
      },
      {
        "url": "https://router.project-osrm.org",
        "label": "OSRM ระยะทางขับรถ (ประมาณ)"
      }
    ]
  },
  {
    "id": 3,
    "seq": 5,
    "position_no": "23788",
    "name": "โรงเรียนคลองฉนวนวิทยา",
    "tambon": "คลองฉนวน",
    "amphoe": "เวียงสระ",
    "province": "สุราษฎร์ธานี",
    "address": "125 หมู่ที่ 3 ต.คลองฉนวน อ.เวียงสระ จ.สุราษฎร์ธานี 84190 (มือถือ 092-985-4728)",
    "lower_secondary": true,
    "upper_secondary": true,
    "levels_note": "ม.1-6 (ม.ต้น 6 ห้อง, ม.ปลาย 6 ห้อง = 2 ห้อง/ระดับ)",
    "google_map": {
      "url": "https://www.google.com/maps/search/?api=1&query=8.51390867,99.33088001",
      "lat": 8.51390867,
      "lng": 99.33088001
    },
    "student_count": "323 คน",
    "students_num": 323,
    "students_asof": "10 มิ.ย. 2569",
    "staff_count": "ราว 21 คน ตามรายชื่อบนเว็บโรงเรียน (ไม่ยืนยัน)",
    "math_teachers": "3 คน ตามรายชื่อบนเว็บโรงเรียน (ไม่ยืนยัน)",
    "size": "เล็ก",
    "distance": "82 กม. ถึงเมืองสุราษฎร์ธานี · ขับรถราว 1 ชม. 10 นาที–1 ชม. 25 นาที (คำนวณเส้นทางโดยประมาณ)",
    "distance_km": 82,
    "distance_short": "82 กม.",
    "distance_note": "ถึงเมืองสุราษฎร์ธานี · ราว 1 ชม. 10 นาที–1 ชม. 25 นาที",
    "special_programs": "แผนการเรียนวิทย์-คณิตใน ม.ปลาย (ไม่ใช่ห้องเรียนพิเศษแบบสอบคัดเลือก)",
    "programs_short": "แผนวิทย์-คณิต",
    "awards": [
      "ก่อตั้ง 19 พ.ค. 2524 พื้นที่ 35 ไร่",
      "ข่าว 'สถานศึกษาสีขาว ปลอดยาเสพติดและอบายมุขดีเด่น' (10 ก.ค. 68) บนเว็บ - รายละเอียดไม่ยืนยัน",
      "แผน สพม. 2567 ระบุเป็น '1 ร.ร.คุณภาพ' ((ไม่ยืนยัน))"
    ],
    "highlights": [
      "จำนวนนักเรียนปี 2565–2569: 275 → 294 → 320 → 352 → 323",
      "แยกรายชั้น: ม.1 49, ม.2 74, ม.3 63, ม.4 46, ม.5 46, ม.6 45",
      "ระดับชั้นละ 2 ห้อง"
    ],
    "teacher_housing": "ไม่พบข้อมูลบ้านพักครู (ไม่ยืนยัน)",
    "rental_houses": "ต.คลองฉนวนเป็นพื้นที่ชนบท ห้องเช่า/หอพักรายเดือนหาได้ในตัวอำเภอเวียงสระ (ห่างราว 10-15 กม.) และบ้านนาสาร ข้อมูลทั่วไป (ไม่ยืนยัน)",
    "website": "https://www.kcnvit.ac.th",
    "facebook": "https://www.facebook.com/profile.php?id=100083336951274",
    "sources": [
      {
        "url": "https://info.bopp.go.th/school/84032009?area=57",
        "label": "สารสนเทศข้อมูลโรงเรียน สพฐ."
      },
      {
        "url": "https://th.wikipedia.org/wiki/โรงเรียนคลองฉนวนวิทยา",
        "label": "Wikipedia ภาษาไทย"
      },
      {
        "url": "https://www.kcnvit.ac.th/mainpage",
        "label": "เว็บโรงเรียน หน้าหลัก (โทร, Facebook)"
      },
      {
        "url": "https://www.kcnvit.ac.th/datashow_14308",
        "label": "เว็บโรงเรียน ข้อมูลนักเรียน 2567"
      },
      {
        "url": "https://www.kcnvit.ac.th/person_3",
        "label": "เว็บโรงเรียน กลุ่มสาระคณิตศาสตร์"
      },
      {
        "url": "https://www.spmsnicpn.go.th/th/download/plan/schools/spm_management.pdf",
        "label": "แผนบริหารการศึกษา สพม.สุราษฎร์ธานี ชุมพร ปีงบ 2567"
      },
      {
        "url": "https://router.project-osrm.org",
        "label": "OSRM ระยะทางขับรถ (ประมาณ)"
      }
    ]
  },
  {
    "id": 4,
    "seq": 6,
    "position_no": "18991",
    "name": "โรงเรียนบ้านเสด็จพิทยาคม",
    "tambon": "บ้านเสด็จ",
    "amphoe": "เคียนซา",
    "province": "สุราษฎร์ธานี",
    "address": "1 หมู่ที่ 11 (บ้านราษฎร์พัฒนา) ต.บ้านเสด็จ อ.เคียนซา จ.สุราษฎร์ธานี 84260 (โทร 077-403338)",
    "lower_secondary": true,
    "upper_secondary": true,
    "levels_note": "ม.1-6",
    "google_map": {
      "url": "https://www.google.com/maps/search/?api=1&query=8.7379586,99.0219393",
      "lat": 8.7379586,
      "lng": 99.0219393
    },
    "student_count": "204 คน",
    "students_num": 204,
    "students_asof": "10 มิ.ย. 2569",
    "staff_count": "ราว 16 คน ตามรายชื่อบนเว็บโรงเรียน (ไม่ยืนยัน)",
    "math_teachers": "ไม่มีรายชื่อครูคณิตบนเว็บโรงเรียน (ไม่ยืนยัน)",
    "size": "เล็ก",
    "distance": "67 กม. ถึงเมืองสุราษฎร์ธานี · ขับรถราว 1 ชม.–1 ชม. 15 นาที (คำนวณเส้นทางโดยประมาณ)",
    "distance_km": 67,
    "distance_short": "67 กม.",
    "distance_note": "ถึงเมืองสุราษฎร์ธานี · ราว 1 ชม.–1 ชม. 15 นาที",
    "special_programs": "ไม่พบข้อมูล (ไม่ยืนยัน)",
    "programs_short": "ไม่พบข้อมูล",
    "awards": [],
    "highlights": [
      "จำนวนนักเรียนปี 2565–2569: 184 → 200 → 173 → 202 → 204",
      "แยกรายชั้น: ม.1 23, ม.2 23, ม.3 21, ม.4 41, ม.5 56, ม.6 40",
      "หน้ากลุ่มสาระคณิตบนเว็บโรงเรียนไม่มีรายชื่อครู",
      "ข้อมูลออนไลน์น้อยที่สุดในกลุ่ม"
    ],
    "teacher_housing": "มีบ้านพักครูอย่างน้อย 2 หลังตามเว็บโรงเรียน ว่างหรือไม่ (ไม่ยืนยัน)",
    "rental_houses": "พื้นที่ชนบท ห้องเช่าในหมู่บ้านมีน้อย ทางเลือกคือห้องเช่าในตัวอำเภอเคียนซา หรือพระแสง/บ้านส้อง (อ.เวียงสระ) ข้อมูลทั่วไป (ไม่ยืนยัน)",
    "website": "http://bansadet.ac.th",
    "facebook": "https://www.facebook.com/BPbansadetpit/",
    "sources": [
      {
        "url": "https://info.bopp.go.th/school/84032001?area=57",
        "label": "สารสนเทศข้อมูลโรงเรียน สพฐ."
      },
      {
        "url": "https://data.bopp-obec.info/emis/schooldata-view.php?School_ID=1084640574&Area_CODE=8403",
        "label": "ข้อมูลพื้นฐาน EMIS สพฐ. (จากผลค้นหา; โดเมนเปิดไม่ได้ขณะตรวจ)"
      },
      {
        "url": "http://bansadet.ac.th/th",
        "label": "เว็บโรงเรียน"
      },
      {
        "url": "http://bansadet.ac.th/building",
        "label": "เว็บโรงเรียน ข้อมูลอาคารสถานที่ (บ้านพักครู)"
      },
      {
        "url": "http://bansadet.ac.th/person_3",
        "label": "เว็บโรงเรียน กลุ่มสาระคณิตศาสตร์ (ว่าง)"
      },
      {
        "url": "https://www.facebook.com/BPbansadetpit/",
        "label": "Facebook โรงเรียน (จากผลค้นหา)"
      },
      {
        "url": "https://router.project-osrm.org",
        "label": "OSRM ระยะทางขับรถ (ประมาณ)"
      }
    ]
  },
  {
    "id": 5,
    "seq": 7,
    "position_no": "1422",
    "name": "โรงเรียนชัยบุรีพิทยา",
    "tambon": "สองแพรก",
    "amphoe": "ชัยบุรี",
    "province": "สุราษฎร์ธานี",
    "address": "72 หมู่ที่ 2 บ้านปากศอก (ถ.ควนสว่าง-เหนือคลอง) ต.สองแพรก อ.ชัยบุรี จ.สุราษฎร์ธานี 84350 (โทร 077-367081)",
    "lower_secondary": true,
    "upper_secondary": true,
    "levels_note": "ม.1-6 (ม.ปลายมีแผนวิทย์-คณิต, ศิลป์-คำนวณ, ศิลป์-ทั่วไป)",
    "google_map": {
      "url": "https://www.google.com/maps/search/?api=1&query=8.50111429,99.09071211",
      "lat": 8.50111429,
      "lng": 99.09071211
    },
    "student_count": "1,333 คน",
    "students_num": 1333,
    "students_asof": "10 มิ.ย. 2569",
    "staff_count": "ไม่พบตัวเลข (ไม่ยืนยัน)",
    "math_teachers": null,
    "size": "กลาง",
    "distance": "89 กม. ถึงเมืองสุราษฎร์ธานี · ขับรถราว 1 ชม. 30 นาที–1 ชม. 45 นาที (คำนวณเส้นทางโดยประมาณ)",
    "distance_km": 89,
    "distance_short": "89 กม.",
    "distance_note": "ถึงเมืองสุราษฎร์ธานี · ราว 1 ชม. 30 นาที–1 ชม. 45 นาที",
    "special_programs": "แผนการเรียนวิทย์-คณิตใน ม.ปลาย เป็นห้องเรียนพิเศษหรือไม่ (ไม่ยืนยัน)",
    "programs_short": "แผนวิทย์-คณิต",
    "awards": [
      "เปิดเรียน 7 มิ.ย. 2525 (เดิมเป็นสาขาโรงเรียนพระแสงวิทยา) พื้นที่ 38-2-20 ไร่",
      "รางวัลเสมา ป.ป.ส. ประเภทผลงานดีเด่น รักษามาตรฐานระดับเพชร (2568)",
      "โรงเรียนป้องกันยาเสพติดในสถานศึกษาดีเด่น (2568)"
    ],
    "highlights": [
      "จำนวนนักเรียนปี 2565–2569: 1,161 → 1,138 → 1,224 → 1,292 → 1,333",
      "แยกรายชั้น: ม.1 256, ม.2 256, ม.3 215, ม.4 195, ม.5 223, ม.6 189 (รวมรายชั้น 1,334)",
      "ใกล้ อ.ทุ่งสง จ.นครศรีธรรมราช มากกว่าตัวเมืองสุราษฎร์ธานี"
    ],
    "teacher_housing": "ไม่พบข้อมูลบ้านพักครู (ไม่ยืนยัน)",
    "rental_houses": "ห้องเช่าในตัวอำเภอชัยบุรีมีจำกัด; หลายคนพักใน อ.พระแสง หรือ อ.ทุ่งสง (เมืองใหญ่กว่า มีอพาร์ตเมนต์/หอพักมากกว่า) ข้อมูลทั่วไป (ไม่ยืนยัน)",
    "website": "https://chps.ac.th",
    "facebook": "https://www.facebook.com/Chaiburipittaya",
    "sources": [
      {
        "url": "https://info.bopp.go.th/school/84032013?area=57",
        "label": "สารสนเทศข้อมูลโรงเรียน สพฐ."
      },
      {
        "url": "https://th.wikipedia.org/wiki/โรงเรียนชัยบุรีพิทยา",
        "label": "Wikipedia ภาษาไทย"
      },
      {
        "url": "https://chps.ac.th/home/",
        "label": "เว็บโรงเรียน (ที่อยู่ Facebook รางวัล)"
      },
      {
        "url": "https://chps.ac.th/1967/",
        "label": "เว็บโรงเรียน กลุ่มสาระคณิตศาสตร์"
      },
      {
        "url": "https://router.project-osrm.org",
        "label": "OSRM ระยะทางขับรถ (ประมาณ)"
      }
    ]
  },
  {
    "id": 6,
    "seq": 8,
    "position_no": "23471",
    "name": "โรงเรียนสวนศรีวิทยา",
    "tambon": "หลังสวน",
    "amphoe": "หลังสวน",
    "province": "ชุมพร",
    "address": "280 ถนนหลังสวน ต.หลังสวน อ.หลังสวน จ.ชุมพร 86110 (โทร 077-541050 ตามแหล่งรอง)",
    "lower_secondary": true,
    "upper_secondary": true,
    "levels_note": "ม.1-6",
    "google_map": {
      "url": "https://www.google.com/maps/search/?api=1&query=9.94801359,99.08573179",
      "lat": 9.94801359,
      "lng": 99.08573179
    },
    "student_count": "2,789 คน",
    "students_num": 2789,
    "students_asof": "10 มิ.ย. 2569",
    "staff_count": "ราว 131 คน ตามรายชื่อบนเว็บโรงเรียน (ไม่ยืนยัน)",
    "math_teachers": "18 คน ตามรายชื่อบนเว็บโรงเรียน (ไม่ยืนยัน)",
    "size": "ใหญ่พิเศษ",
    "distance": "73 กม. ถึงเมืองชุมพร · ขับรถราว 1 ชม.–1 ชม. 15 นาที (คำนวณเส้นทางโดยประมาณ)",
    "distance_km": 73,
    "distance_short": "73 กม.",
    "distance_note": "ถึงเมืองชุมพร · ราว 1 ชม.–1 ชม. 15 นาที",
    "special_programs": "ไม่พบข้อมูลห้องเรียนพิเศษ (ไม่ยืนยัน)",
    "programs_short": "ไม่พบข้อมูล",
    "awards": [
      "ก่อตั้ง พ.ศ. 2442 (เดิม 'โรงเรียนอุดมวิทยากร' ที่วัดโตนด) รวมกับโรงเรียนสตรีหลังสวน",
      "มีพิพิธภัณฑ์ภูมิปัญญาชาวบ้าน วัฒนธรรมลุ่มน้ำหลังสวน ในโรงเรียน",
      "แผน สพม. 2567 ระบุเป็น 'ร.ร. 1 อำเภอ 1 ร.ร.คุณภาพ'"
    ],
    "highlights": [
      "จำนวนนักเรียนปี 2565–2569: 2,815 → 2,792 → 2,782 → 2,799 → 2,789",
      "แยกรายชั้น: ม.1 486, ม.2 483, ม.3 466, ม.4 460, ม.5 451, ม.6 443"
    ],
    "teacher_housing": "ไม่พบข้อมูลบ้านพักครู (ไม่ยืนยัน)",
    "rental_houses": "หลังสวนเป็นเทศบาลเมือง มีอพาร์ตเมนต์/หอพัก/บ้านเช่ารายเดือนในตัวเมืองค่อนข้างหาง่าย (ใกล้สถานีรถไฟหลังสวน) ข้อมูลทั่วไป (ไม่ยืนยัน)",
    "website": "http://www.suansri.ac.th",
    "facebook": "https://www.facebook.com/SuansriwittayaChumphon/",
    "sources": [
      {
        "url": "https://info.bopp.go.th/school/86022001?area=57",
        "label": "สารสนเทศข้อมูลโรงเรียน สพฐ."
      },
      {
        "url": "http://www.suansri.ac.th/datashow_461",
        "label": "เว็บโรงเรียน ประวัติโรงเรียน"
      },
      {
        "url": "http://www.suansri.ac.th/mainpage",
        "label": "เว็บโรงเรียน หน้าหลัก (Facebook, รายชื่อบุคลากร)"
      },
      {
        "url": "http://www.suansri.ac.th/person_3",
        "label": "เว็บโรงเรียน กลุ่มสาระคณิตศาสตร์"
      },
      {
        "url": "https://db.sac.or.th/museum/museum-detail/1164",
        "label": "ศมส. พิพิธภัณฑ์ภูมิปัญญาชาวบ้าน โรงเรียนสวนศรีวิทยา"
      },
      {
        "url": "https://www.spmsnicpn.go.th/th/download/plan/schools/spm_management.pdf",
        "label": "แผนบริหารการศึกษา สพม. ปีงบ 2567"
      },
      {
        "url": "https://router.project-osrm.org",
        "label": "OSRM ระยะทางขับรถ (ประมาณ)"
      }
    ]
  },
  {
    "id": 7,
    "seq": 9,
    "position_no": "1871",
    "name": "โรงเรียนศรียาภัย",
    "tambon": "ท่าตะเภา",
    "amphoe": "เมืองชุมพร",
    "province": "ชุมพร",
    "address": "149 ถนนพิศิษฐพยาบาล ต.ท่าตะเภา อ.เมือง จ.ชุมพร 86000 (โทร 077-503376)",
    "lower_secondary": true,
    "upper_secondary": true,
    "levels_note": "ม.1-6",
    "google_map": {
      "url": "https://www.google.com/maps/search/?api=1&query=10.49677491,99.18530156",
      "lat": 10.49677491,
      "lng": 99.18530156
    },
    "student_count": "3,128 คน",
    "students_num": 3128,
    "students_asof": "10 มิ.ย. 2569",
    "staff_count": "ไม่พบตัวเลข (ไม่ยืนยัน)",
    "math_teachers": null,
    "size": "ใหญ่พิเศษ",
    "distance": "อยู่ในเมืองชุมพร ห่างใจกลางเมือง 0.8 กม.",
    "distance_km": 0.8,
    "distance_short": "ในเมือง",
    "distance_note": "อยู่ในเมืองชุมพร",
    "special_programs": "SMTE และ SMT (ม.1, ม.4) · SMEP (ม.4) · IEP และ EIS (ม.1)",
    "programs_short": "SMTE · SMT · SMEP",
    "awards": [
      "ก่อตั้ง พ.ศ. 2440 โรงเรียนประจำจังหวัดชุมพร",
      "รางวัลโรงเรียนพระราชทาน ระดับมัธยมศึกษาขนาดใหญ่ (2544)",
      "โรงเรียนมาตรฐานสากล รุ่นแรก 500 โรง (2553); โรงเรียนต้นแบบการใช้หลักสูตรแกนกลาง (2552)",
      "นักเรียนยุวชนทหารศรียาภัยร่วมรบที่สะพานท่านางสังข์ 8 ธ.ค. 2484"
    ],
    "highlights": [
      "จำนวนนักเรียนปี 2565–2569: 3,320 → 3,255 → 3,170 → 3,142 → 3,128",
      "แยกรายชั้น: ม.1 517, ม.2 526, ม.3 535, ม.4 523, ม.5 520, ม.6 507",
      "เว็บโรงเรียนมีโฆษณาการพนันแทรก อาจถูกเจาะระบบ ควรยืนยันข้อมูลกับโรงเรียนโดยตรง"
    ],
    "teacher_housing": "มีที่ดินบ้านพักครูที่บางหมาก ห่างตัวเมืองราว 2 กม. ตามประวัติโรงเรียน สถานะปัจจุบัน (ไม่ยืนยัน)",
    "rental_houses": "ตัวเมืองชุมพรมีอพาร์ตเมนต์ หอพัก บ้านเช่า และคอนโดขนาดเล็กให้เลือกมาก ข้อมูลทั่วไป (ไม่ยืนยัน)",
    "website": "https://www.sriyapai.ac.th",
    "facebook": "https://www.facebook.com/sriyapaischoolfb",
    "sources": [
      {
        "url": "https://info.bopp.go.th/school/86012001?area=57",
        "label": "สารสนเทศข้อมูลโรงเรียน สพฐ."
      },
      {
        "url": "https://th.wikipedia.org/wiki/โรงเรียนศรียาภัย",
        "label": "Wikipedia ภาษาไทย"
      },
      {
        "url": "https://www.sriyapai.ac.th",
        "label": "เว็บโรงเรียน (ที่อยู่ โทร ห้องเรียนพิเศษ Facebook)"
      },
      {
        "url": "https://sriyapai.ac.th/sphistory/",
        "label": "ประวัติโรงเรียน (รางวัล บ้านพักครู)"
      },
      {
        "url": "https://www.openstreetmap.org/node/6517559786",
        "label": "OpenStreetMap ตำแหน่งโรงเรียน"
      },
      {
        "url": "https://router.project-osrm.org",
        "label": "OSRM ระยะทางขับรถ (ประมาณ)"
      }
    ]
  },
  {
    "id": 8,
    "seq": 10,
    "position_no": "61444",
    "name": "โรงเรียนสวีวิทยา",
    "tambon": "นาโพธิ์",
    "amphoe": "สวี",
    "province": "ชุมพร",
    "address": "597 หมู่ 5 ต.นาโพธิ์ อ.สวี จ.ชุมพร 86130",
    "lower_secondary": true,
    "upper_secondary": true,
    "levels_note": "ม.1-6 (ม.1-3 ระดับละ 10 ห้อง, ม.4-6 ระดับละ 8 ห้อง ตาม DMC 10 พ.ย. 2568)",
    "google_map": {
      "url": "https://www.google.com/maps/search/?api=1&query=10.23690261,99.11043057",
      "lat": 10.23690261,
      "lng": 99.11043057
    },
    "student_count": "2,020 คน",
    "students_num": 2020,
    "students_asof": "10 มิ.ย. 2569",
    "staff_count": "ราว 102 คน ตามรายชื่อบนเว็บโรงเรียน (ไม่ยืนยัน)",
    "math_teachers": "15 คน ตามรายชื่อบนเว็บโรงเรียน (ไม่ยืนยัน)",
    "size": "ใหญ่",
    "distance": "41 กม. ถึงเมืองชุมพร · ขับรถราว 40-50 นาที (คำนวณเส้นทางโดยประมาณ)",
    "distance_km": 41,
    "distance_short": "41 กม.",
    "distance_note": "ถึงเมืองชุมพร · ราว 40-50 นาที",
    "special_programs": "ห้องเรียนพิเศษ พว. (วิทย์-คณิต-เทคโนโลยี-สิ่งแวดล้อม) · Mini English Program (ม.ต้น)",
    "programs_short": "พว. · MEP",
    "awards": [
      "มีพิพิธภัณฑ์โรงเรียนสวีวิทยา (Sawiwittaya School Museum)",
      "เป็นโรงเรียนประธานสหวิทยาเขตชุมพร 2"
    ],
    "highlights": [
      "จำนวนนักเรียนปี 2565–2569: 1,964 → 1,989 → 2,009 → 2,009 → 2,020",
      "แยกรายชั้น: ม.1 377, ม.2 380, ม.3 374, ม.4 309, ม.5 289, ม.6 291"
    ],
    "teacher_housing": "ไม่พบข้อมูลบ้านพักครู (ไม่ยืนยัน)",
    "rental_houses": "ตัวอำเภอสวีมีห้องเช่า/อพาร์ตเมนต์รายเดือนพอสมควร; หรือพักในเมืองชุมพร (~40 กม.) ซึ่งมีตัวเลือกมากกว่า ข้อมูลทั่วไป (ไม่ยืนยัน)",
    "website": "https://www.sawi.ac.th",
    "facebook": "https://www.facebook.com/sawiwittayaSW",
    "sources": [
      {
        "url": "https://info.bopp.go.th/school/86022007?area=57",
        "label": "สารสนเทศข้อมูลโรงเรียน สพฐ."
      },
      {
        "url": "https://www.sawi.ac.th/datashow_4606",
        "label": "เว็บโรงเรียน ข้อมูลจำนวนนักเรียน (DMC 10 พ.ย. 2568)"
      },
      {
        "url": "https://www.sawi.ac.th/datashow_4600",
        "label": "เว็บโรงเรียน หลักสูตรที่เปิดสอน"
      },
      {
        "url": "https://www.sawi.ac.th/mainpage",
        "label": "เว็บโรงเรียน หน้าหลัก (Facebook, บุคลากร)"
      },
      {
        "url": "https://www.sawi.ac.th/person_3",
        "label": "เว็บโรงเรียน กลุ่มสาระคณิตศาสตร์"
      },
      {
        "url": "https://museumthailand.com/en/museum/Sawiwittaya-School-Museum",
        "label": "Museum Thailand: Sawiwittaya School Museum"
      },
      {
        "url": "https://router.project-osrm.org",
        "label": "OSRM ระยะทางขับรถ (ประมาณ)"
      }
    ]
  }
];
