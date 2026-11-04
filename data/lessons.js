window.DERSLER = [
  {
    "week": 1,
    "page": 2,
    "id": "h1-s2",
    "section": "Temel kavramlar",
    "topic": "Mimari, organizasyon, yapı ve işlev",
    "title": "Bilgisayar Mimarisi ve Organizasyonu",
    "blocks": [
      {
        "type": "bullet",
        "text": "Mimari, programcının görebildiği özellikleri tanımlar."
      },
      {
        "type": "bullet",
        "text": "Komut kümesi, veri türleri, adresleme ve G/Ç mekanizmaları"
      },
      {
        "type": "bullet",
        "text": "Örnek: İşlemcide çarpma komutunun bulunması"
      },
      {
        "type": "bullet",
        "text": "Organizasyon, bu özelliklerin donanımda nasıl gerçekleştirildiğini açıklar."
      },
      {
        "type": "bullet",
        "text": "Kontrol sinyalleri, veri yolları ve bellek teknolojisi"
      },
      {
        "type": "bullet",
        "text": "Örnek: Çarpmanın özel devreyle veya ardışık işlemlerle yapılması"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 1,
    "page": 3,
    "id": "h1-s3",
    "section": "Temel kavramlar",
    "topic": "Mimari, organizasyon, yapı ve işlev",
    "title": "Yapı ve İşlev",
    "blocks": [
      {
        "type": "bullet",
        "text": "Yapı, bilgisayar bileşenlerinin nasıl bağlandığını gösterir."
      },
      {
        "type": "bullet",
        "text": "İşlev, her bileşenin sistem içinde ne yaptığını açıklar."
      },
      {
        "type": "text",
        "text": "Bilgisayarın dört temel işlevi veri işleme, veri depolama, veri hareketi ve kontroldür."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 1,
    "page": 4,
    "id": "h1-s4",
    "section": "Temel kavramlar",
    "topic": "Bilgisayarın işlevleri ve veri akışı",
    "title": "Bilgisayarın Dört Temel İşlevi",
    "blocks": [],
    "note": "İşleme veriyi değiştirir, depolama veriyi saklar, hareket veriyi bir yere aktarır ve kontrol bu adımların sırasını yönetir.",
    "diagram": [
      "İşleme",
      "Depolama",
      "Veri hareketi",
      "Kontrol"
    ]
  },
  {
    "week": 1,
    "page": 5,
    "id": "h1-s5",
    "section": "Temel kavramlar",
    "topic": "Bilgisayarın işlevleri ve veri akışı",
    "title": "Temel Veri Akışları",
    "blocks": [
      {
        "type": "row",
        "cells": [
          "Veri hareketi",
          "Veri depolama",
          "Veri işleme"
        ]
      },
      {
        "type": "row",
        "cells": [
          "İşlev",
          "Verinin izlediği yol"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Veri hareketi",
          "Çevre → aktarım birimi → çevre"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Veri depolama",
          "Çevre → aktarım birimi → depolama veya ters yön"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Veri işleme",
          "Depolama → işleme birimi → depolama"
        ]
      }
    ],
    "note": "Bir sensör okuması girişten belleğe taşınabilir. CPU bellekteki veriyi işleyebilir, sonucu belleğe geri yazabilir veya doğrudan çıktı birimine gönderebilir. Kontrol birimi aktarımın zamanını ve yönünü belirler.",
    "diagram": [
      "Girdi",
      "Bellek",
      "CPU",
      "Bellek / çıktı"
    ]
  },
  {
    "week": 1,
    "page": 6,
    "id": "h1-s6",
    "section": "Sistem ve işlemci",
    "topic": "Bileşenler ve kontrol",
    "title": "Bilgisayarın Üst Düzey Yapısı",
    "blocks": [
      {
        "type": "bullet",
        "text": "Bilgisayarın üst düzey yapısı dört bileşenden oluşur: Merkezi İşlem"
      },
      {
        "type": "text",
        "text": "Birimi (CPU), ana bellek, Giriş/Çıkış birimleri ve sistem bağlantısı."
      },
      {
        "type": "text",
        "text": "Girdi ve çıktı, G/Ç sisteminin dış dünya ile kurduğu veri alışverişini ifade eder."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 1,
    "page": 7,
    "id": "h1-s7",
    "section": "Sistem ve işlemci",
    "topic": "Bileşenler ve kontrol",
    "title": "Bilgisayar Sistemi ve Dış Çevre",
    "blocks": [
      {
        "type": "text",
        "text": "GİRDİ BİRİMLERİ"
      },
      {
        "type": "text",
        "text": "Klavye, fare, sensör, kamera, ağ arabirimi ve depolama aygıtları gibi kaynaklardan sisteme veri aktarır."
      },
      {
        "type": "text",
        "text": "ÇIKTI BİRİMLERİ"
      },
      {
        "type": "text",
        "text": "İşlem sonuçlarını kullanıcıya, başka bir sisteme veya fiziksel bir aygıta aktarır. Ekran, yazıcı, ağ arabirimi ve denetleyiciler bu gruptadır."
      }
    ],
    "note": "Bir tuşa basıldığında giriş denetleyicisi veriyi sisteme iletir. CPU, ana bellek ve G/Ç birimleri sistem bağlantısı üzerinden haberleşir. Ekrana giden sonuç bir çıktı akışıdır.",
    "diagram": [
      "Dış çevre",
      "G/Ç",
      "Sistem bağlantısı",
      "CPU ve ana bellek"
    ]
  },
  {
    "week": 1,
    "page": 8,
    "id": "h1-s8",
    "section": "Sistem ve işlemci",
    "topic": "Bileşenler ve kontrol",
    "title": "CPU'nun Temel Bileşenleri",
    "blocks": [
      {
        "type": "text",
        "text": "Merkezi İşlem Birimi, komutları yürütür ve sistemin çalışmasını koordine eder."
      },
      {
        "type": "bullet",
        "text": "Aritmetik ve Mantık Birimi (ALU): Hesaplama ve karşılaştırmalar"
      },
      {
        "type": "bullet",
        "text": "Yazmaçlar: İşlemci içindeki çok hızlı geçici depolama alanları"
      },
      {
        "type": "bullet",
        "text": "Kontrol Birimi: Komutların çözülmesi ve veri akışının yönetilmesi"
      },
      {
        "type": "bullet",
        "text": "CPU iç bağlantıları: Bileşenler arasında veri ve kontrol sinyallerinin taşınması"
      }
    ],
    "note": "Bir ADD komutunda kontrol birimi yazmaçları seçer, ALU toplamı üretir, hedef yazmaç sonucu alır.",
    "diagram": [
      "Kontrol birimi",
      "Kaynak yazmaçlar",
      "ALU",
      "Hedef yazmaç"
    ]
  },
  {
    "week": 1,
    "page": 9,
    "id": "h1-s9",
    "section": "Sistem ve işlemci",
    "topic": "Bileşenler ve kontrol",
    "title": "Mikroprogramlı Kontrol Birimi",
    "blocks": [],
    "note": "Komut çözülünce uygun mikrorutinin başlangıç adresi seçilir. Kontrol belleğinden okunan mikrokomut kontrol sinyallerini üretir. Sıralayıcı, komut ve durum bayraklarına göre sıradaki mikrokomutu belirler.",
    "diagram": [
      "Makine komutu",
      "Mikrokomut adresi",
      "Kontrol belleği",
      "Kontrol sinyalleri"
    ]
  },
  {
    "week": 1,
    "page": 10,
    "id": "h1-s10",
    "section": "Bilgisayar tarihi",
    "topic": "Mekanik araçlar ve ilk makineler",
    "title": "İlk Hesap Araçları: Abaküs",
    "blocks": [
      {
        "type": "bullet",
        "text": "Abaküs, farklı uygarlıklarda kullanılan en eski hesap araçlarından biridir. Tek bir mucide veya kesin bir tarihe bağlanamaz."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 1,
    "page": 11,
    "id": "h1-s11",
    "section": "Bilgisayar tarihi",
    "topic": "Mekanik araçlar ve ilk makineler",
    "title": "Pascal'ın Hesap Makinesi",
    "blocks": [
      {
        "type": "bullet",
        "text": "Blaise Pascal, 1642'de toplama ve çıkarma yapabilen mekanik bir hesap makinesi tasarladı."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 1,
    "page": 12,
    "id": "h1-s12",
    "section": "Bilgisayar tarihi",
    "topic": "Mekanik araçlar ve ilk makineler",
    "title": "Leibniz'in Basamaklı Hesaplayıcısı",
    "blocks": [
      {
        "type": "bullet",
        "text": "Gottfried Wilhelm Leibniz, 1670'lerde çarpma ve bölme işlemlerini de destekleyen basamaklı hesaplayıcı üzerinde çalıştı."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 1,
    "page": 13,
    "id": "h1-s13",
    "section": "Bilgisayar tarihi",
    "topic": "Mekanik araçlar ve ilk makineler",
    "title": "Babbage'ın Hesap Makineleri",
    "blocks": [
      {
        "type": "bullet",
        "text": "Charles Babbage, 1820'lerde Fark Makinesi üzerinde çalıştı."
      },
      {
        "type": "text",
        "text": "1830'larda tasarladığı Analitik Makine, genel amaçlı mekanik bilgisayar fikrini geliştirdi."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 1,
    "page": 14,
    "id": "h1-s14",
    "section": "Bilgisayar tarihi",
    "topic": "Mekanik araçlar ve ilk makineler",
    "title": "Alan Turing ve Hesaplama Kavramı",
    "blocks": [
      {
        "type": "text",
        "text": "Alan Turing, 1936 tarihli çalışmasında bugün Turing makinesi olarak adlandırılan soyut hesaplama modelini tanımladı."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 1,
    "page": 15,
    "id": "h1-s15",
    "section": "Bilgisayar tarihi",
    "topic": "Mekanik araçlar ve ilk makineler",
    "title": "Konrad Zuse ve Z3",
    "blocks": [
      {
        "type": "text",
        "text": "Konrad Zuse, 1930'larda hesap makineleri geliştirdi."
      },
      {
        "type": "text",
        "text": "1941'de çalışan Z3, program kontrollü elektromekanik ve ikili sayısal bilgisayarların en erken örneklerinden biridir. Yaklaşık 5,33 Hz frekansla çalışıyordu."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 1,
    "page": 16,
    "id": "h1-s16",
    "section": "Bilgisayar tarihi",
    "topic": "Mekanik araçlar ve ilk makineler",
    "title": "Colossus",
    "blocks": [
      {
        "type": "bullet",
        "text": "Colossus, Tommy Flowers ve ekibi tarafından tasarlandı ve 1944'te kullanıma girdi."
      },
      {
        "type": "text",
        "text": "Vakum tüplü, elektronik ve özel amaçlı sistem, Lorenz şifrelerinin çözümünü hızlandırdı."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 1,
    "page": 17,
    "id": "h1-s17",
    "section": "Bilgisayar tarihi",
    "topic": "Mekanik araçlar ve ilk makineler",
    "title": "Harvard Mark I",
    "blocks": [
      {
        "type": "text",
        "text": "Harvard Mark I, IBM ile Harvard Üniversitesi'nin iş birliğiyle geliştirilen ve 1944'te kullanıma giren elektromekanik bir hesap makinesiydi."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 1,
    "page": 18,
    "id": "h1-s18",
    "section": "Bilgisayar tarihi",
    "topic": "Vakum tüpleri ve saklı program",
    "title": "Birinci Kuşak: Vakum Tüpleri",
    "blocks": [
      {
        "type": "text",
        "text": "Yaklaşık dönem: 1940'ların ortası ile 1950'lerin sonu"
      },
      {
        "type": "text",
        "text": "Elektronik anahtarlama için vakum tüpleri"
      },
      {
        "type": "text",
        "text": "Büyük fiziksel boyut ve yüksek enerji tüketimi"
      },
      {
        "type": "text",
        "text": "Isınma ve güvenilirlik sorunları"
      },
      {
        "type": "text",
        "text": "Makine dili ve erken programlama yöntemleri"
      }
    ],
    "note": "Vakum tüpü yükseltme ve anahtarlama işlevi görür. Binlerce tüp kullanan bir bilgisayarda ısı, güç ve bakım önemli tasarım sınırlarıdır. Kuşak özelliğini saklı program gibi sonradan benimsenen bir mimari fikirle karıştırma.",
    "diagram": []
  },
  {
    "week": 1,
    "page": 19,
    "id": "h1-s19",
    "section": "Bilgisayar tarihi",
    "topic": "Vakum tüpleri ve saklı program",
    "title": "ENIAC",
    "blocks": [
      {
        "type": "text",
        "text": "ENIAC, J. Presper Eckert ve John Mauchly'nin liderliğindeki ekip tarafından geliştirildi ve 1946'da kamuoyuna tanıtıldı."
      },
      {
        "type": "bullet",
        "text": "Genel amaçlı elektronik sayısal bilgisayarların ilk örneklerinden biri"
      },
      {
        "type": "bullet",
        "text": "Yaklaşık 30 ton ağırlık"
      },
      {
        "type": "bullet",
        "text": "Yaklaşık 167 m² alan"
      },
      {
        "type": "bullet",
        "text": "17.468 vakum tüpü"
      },
      {
        "type": "bullet",
        "text": "Saniyede yaklaşık 5.000 toplama işlemi"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 1,
    "page": 20,
    "id": "h1-s20",
    "section": "Bilgisayar tarihi",
    "topic": "Vakum tüpleri ve saklı program",
    "title": "Saklı Program Kavramı ve EDVAC",
    "blocks": [
      {
        "type": "text",
        "text": "Saklı program yaklaşımında komutlar ve veriler aynı elektronik bellekte tutulur."
      },
      {
        "type": "text",
        "text": "1945 EDVAC raporu bu yaklaşımı yaygınlaştırdı."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 1,
    "page": 21,
    "id": "h1-s21",
    "section": "Bilgisayar tarihi",
    "topic": "Vakum tüpleri ve saklı program",
    "title": "UNIVAC I",
    "blocks": [
      {
        "type": "text",
        "text": "UNIVAC I, 1951'de teslim edilen ilk ticari amaçlı genel bilgisayarlardan biriydi. Manyetik teyp tabanlı veri depolama kullanıyordu."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 1,
    "page": 22,
    "id": "h1-s22",
    "section": "Bilgisayar tarihi",
    "topic": "Transistör, entegre devre ve mikroişlemci",
    "title": "İkinci Kuşak: Transistörler",
    "blocks": [
      {
        "type": "text",
        "text": "Yaklaşık dönem: 1950'lerin sonu ile 1960'ların ortası"
      },
      {
        "type": "text",
        "text": "Transistörler bilgisayarları küçülttü, enerji tüketimini azalttı ve güvenilirliği artırdı. Assembly, FORTRAN ve COBOL kullanımı yaygınlaştı."
      }
    ],
    "note": "Aynı anahtarlama işini daha küçük, daha az enerji harcayan ve daha dayanıklı bir bileşenle yapmak sistemin boyutunu ve soğutma gereksinimini düşürdü. Ayırıcı geçiş yönü vakum tüpünden transistöre doğrudur.",
    "diagram": []
  },
  {
    "week": 1,
    "page": 23,
    "id": "h1-s23",
    "section": "Bilgisayar tarihi",
    "topic": "Transistör, entegre devre ve mikroişlemci",
    "title": "Transistörlü Bilgisayarların Özellikleri",
    "blocks": [
      {
        "type": "bullet",
        "text": "Vakum tüplü sistemlere göre daha az enerji tüketimi, daha düşük ısı üretimi, daha küçük boyut ve daha yüksek güvenilirlik sağlandı. Ayrı transistörler baskılı devre kartlarına yerleştiriliyordu."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 1,
    "page": 24,
    "id": "h1-s24",
    "section": "Bilgisayar tarihi",
    "topic": "Transistör, entegre devre ve mikroişlemci",
    "title": "Philco TRANSAC S-2000 ve IBM 1401",
    "blocks": [
      {
        "type": "text",
        "text": "Philco TRANSAC S-2000 ve IBM 1401 aynı bilgisayar değildir. Her ikisi de transistörlü sistemlerin erken örnekleri arasındadır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 1,
    "page": 25,
    "id": "h1-s25",
    "section": "Bilgisayar tarihi",
    "topic": "Transistör, entegre devre ve mikroişlemci",
    "title": "Üçüncü Kuşak: Entegre Devreler",
    "blocks": [
      {
        "type": "text",
        "text": "Yaklaşık dönem: 1960'ların ortası ile 1970'lerin başı"
      },
      {
        "type": "bullet",
        "text": "Entegre devreler, birden fazla transistörü tek parçada birleştirdi. CPU daha önce de vardı; bu dönemde gerçekleştiriminde entegre devreler kullanılmaya başlandı."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 1,
    "page": 26,
    "id": "h1-s26",
    "section": "Bilgisayar tarihi",
    "topic": "Transistör, entegre devre ve mikroişlemci",
    "title": "Entegre Devreli Sistemlerin Özellikleri",
    "blocks": [
      {
        "type": "bullet",
        "text": "İşlem ve kontrol devrelerinde entegre devre kullanımı"
      },
      {
        "type": "bullet",
        "text": "Daha düşük maliyet ve daha yüksek güvenilirlik"
      },
      {
        "type": "bullet",
        "text": "Manyetik disklerin yaygınlaşması"
      },
      {
        "type": "bullet",
        "text": "İşletim sistemleri ve çoklu programlama tekniklerinde gelişme"
      },
      {
        "type": "bullet",
        "text": "Ürün aileleri arasında yazılım uyumluluğuna verilen önemin artması"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 1,
    "page": 27,
    "id": "h1-s27",
    "section": "Bilgisayar tarihi",
    "topic": "Transistör, entegre devre ve mikroişlemci",
    "title": "Dördüncü Kuşak: Mikroişlemciler",
    "blocks": [
      {
        "type": "text",
        "text": "1970'lerin başından itibaren CPU'nun temel işlevleri tek bir çip üzerinde birleştirildi."
      },
      {
        "type": "bullet",
        "text": "LSI ve ardından VLSI teknolojileri"
      },
      {
        "type": "bullet",
        "text": "Kişisel bilgisayarların yaygınlaşması"
      },
      {
        "type": "bullet",
        "text": "Daha büyük bellek ve depolama kapasitesi"
      },
      {
        "type": "bullet",
        "text": "Ağ bağlantıları ve taşınabilir sistemler"
      },
      {
        "type": "bullet",
        "text": "Tek çekirdekten çok çekirdekli ve özel amaçlı işlemcilere geçiş"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 1,
    "page": 28,
    "id": "h1-s28",
    "section": "Bilgisayar tarihi",
    "topic": "Transistör, entegre devre ve mikroişlemci",
    "title": "Beşinci Kuşak ve Yapay Zekâ Sınıflandırması",
    "blocks": [
      {
        "type": "text",
        "text": "Beşinci kuşak bilgisayar ifadesi, 1980'lerde yapay zekâ hedefleriyle ilişkilendirilen tarihsel bir sınıflandırmadır."
      },
      {
        "type": "text",
        "text": "Günümüz sistemleri çok çekirdekli işlemciler, GPU'lar ve özel hızlandırıcılarla açıklanır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 1,
    "page": 29,
    "id": "h1-s29",
    "section": "Bilgisayar tarihi",
    "topic": "Kuşakların karşılaştırılması",
    "title": "Bilgisayarların Boyutundaki Değişim",
    "blocks": [],
    "note": "Vakum tüplü sistemlerde çok sayıda büyük parça, bağlantı ve soğutma gerekir. Transistör ve entegre devreler daha çok işlevi daha küçük hacme toplar. Bir CPU’nun tek yongada birleşmesi kişisel bilgisayarları ve gömülü cihazları mümkün kılan adımlardandır.",
    "diagram": [
      "Salon boyutu",
      "Kabin",
      "Masaüstü",
      "Taşınabilir / gömülü"
    ]
  },
  {
    "week": 1,
    "page": 30,
    "id": "h1-s30",
    "section": "Bilgisayar tarihi",
    "topic": "Kuşakların karşılaştırılması",
    "title": "Bilgisayar Kuşaklarına Genel Bakış",
    "blocks": [
      {
        "type": "row",
        "cells": [
          "Kuşak",
          "Yaklaşık dönem",
          "Teknoloji",
          "Tipik işlem/s"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1",
          "1946–1957",
          "Vakum tüpü",
          "40 000"
        ]
      },
      {
        "type": "row",
        "cells": [
          "2",
          "1958–1964",
          "Transistör",
          "200 000"
        ]
      },
      {
        "type": "row",
        "cells": [
          "3",
          "1965–1971",
          "Küçük ve orta ölçekli entegrasyon",
          "1 000 000"
        ]
      },
      {
        "type": "row",
        "cells": [
          "4",
          "1972–1977",
          "Büyük ölçekli entegrasyon",
          "10 000 000"
        ]
      },
      {
        "type": "row",
        "cells": [
          "5",
          "1978–1991",
          "Çok büyük ölçekli entegrasyon",
          "100 000 000"
        ]
      },
      {
        "type": "row",
        "cells": [
          "6",
          "1991 ve sonrası",
          "Ultra büyük ölçekli entegrasyon",
          "1 000 000 000"
        ]
      }
    ],
    "note": "Kuşakları baskın teknolojiyle ayır. Birinci kuşak vakum tüpü, ikinci transistör, üçüncü entegre devre, dördüncü mikroişlemciyle anılır. Beşinci kuşak, yapay zekâ ve paralel sistemlere yönelik tarihsel bir sınıflandırmadır. Geçişler örtüşebilir.",
    "diagram": [
      "Vakum tüpü",
      "Transistör",
      "Entegre devre",
      "Mikroişlemci"
    ]
  },
  {
    "week": 1,
    "page": 31,
    "id": "h1-s31",
    "section": "Bilgisayar tarihi",
    "topic": "Kuşakların karşılaştırılması",
    "title": "Mikroişlemcilerde transistör sayısının gelişimi",
    "blocks": [
      {
        "type": "bullet",
        "text": "Transistör sayısındaki tarihsel artış"
      },
      {
        "type": "row",
        "cells": [
          "Grafikteki dönem",
          "Örnek işlemci",
          "Yaklaşık mertebe (transistör/yonga)"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1970’lerin başı",
          "Intel 4004",
          "Binler"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1970’lerin sonu",
          "Intel 8086",
          "On binler"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1980’lerin sonu",
          "Intel 486",
          "Bir milyon civarı"
        ]
      },
      {
        "type": "row",
        "cells": [
          "2000’lerin başı",
          "Intel Pentium IV",
          "On milyonlar"
        ]
      }
    ],
    "note": "Aynı yongaya daha fazla transistör sığması, önbellek, yürütme birimi ve çekirdek gibi yapıların artmasına olanak verir. Bu artış tek başına bir programın süresini belirlemez. İkinci haftada güç, gecikme ve bellek sınırları bu ayrımı açıklar.",
    "diagram": []
  },
  {
    "week": 1,
    "page": 32,
    "id": "h1-s32",
    "section": "Pekiştirme",
    "topic": "Uygulama, özet ve ek bilgi",
    "title": "Ders İçi Uygulama",
    "blocks": [
      {
        "type": "bullet",
        "text": "Bir bilgisayarda MUL komutu vardır."
      },
      {
        "type": "text",
        "text": "A işlemcisi çarpma işlemini özel bir donanım birimiyle gerçekleştiriyor."
      },
      {
        "type": "bullet",
        "text": "B işlemcisi aynı işlemi ardışık toplama ve kaydırma adımlarıyla gerçekleştiriyor."
      },
      {
        "type": "text",
        "text": "1. Hangi bilgi mimariyle ilgilidir?"
      },
      {
        "type": "text",
        "text": "2. Hangi bilgi organizasyonla ilgilidir?"
      },
      {
        "type": "text",
        "text": "3. İki işlemci aynı programı çalıştırabilir mi?"
      }
    ],
    "note": "Çözüm. MUL komutunun varlığı ISA’ya, fiziksel çarpan ya da kaydır-topla seçimi organizasyona aittir. Gözlenen komut davranışı ve gereken diğer ISA özellikleri uyumluysa iki işlemci aynı makine programını çalıştırabilir.",
    "diagram": []
  },
  {
    "week": 1,
    "page": 33,
    "id": "h1-s33",
    "section": "Pekiştirme",
    "topic": "Uygulama, özet ve ek bilgi",
    "title": "Haftanın Özeti",
    "blocks": [
      {
        "type": "bullet",
        "text": "Mimari, programcıya görünen özellikleri tanımlar."
      },
      {
        "type": "bullet",
        "text": "Organizasyon, mimarinin donanımda nasıl gerçekleştirildiğini açıklar."
      },
      {
        "type": "bullet",
        "text": "Yapı, bileşenler arasındaki ilişkidir."
      },
      {
        "type": "bullet",
        "text": "İşlev, bileşenlerin yaptığı iştir."
      },
      {
        "type": "bullet",
        "text": "Bilgisayar; işleme, depolama, veri hareketi ve kontrol işlevlerini yerine getirir."
      },
      {
        "type": "bullet",
        "text": "Teknolojik kuşaklar kesin sınırlar değil, baskın eğilimlerdir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 1,
    "page": 34,
    "id": "h1-s34",
    "section": "Pekiştirme",
    "topic": "Uygulama, özet ve ek bilgi",
    "title": "Ek Bilgi: Cep Hesap Makineleri",
    "blocks": [
      {
        "type": "bullet",
        "text": "Bowmar Brain, 1971'de piyasaya çıkan ilk taşınabilir elektronik hesap makinelerinden biridir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 2,
    "id": "h2-s2",
    "section": "Performansın temeli",
    "topic": "İş yükü, program ve veri",
    "title": "Performans: Tek Bir Sayı Değildir",
    "blocks": [
      {
        "type": "text",
        "text": "Bir bilgisayarın “hızlı” olması, hangi işi hangi koşulda yaptığı belirtilmeden anlamlı değildir."
      },
      {
        "type": "bullet",
        "text": "1 · Web sayfasının açılma süresi, büyük bir dosyanın işlenmesi ve aynı anda çok sayıda isteğin karşılanması farklı ölçütler gerektirir."
      },
      {
        "type": "bullet",
        "text": "2 · İşlemci, bellek, depolama, grafik işlemci ve giriş/çıkış sistemi birlikte sonucu belirler."
      },
      {
        "type": "bullet",
        "text": "3 · Bu hafta amaç, bileşenlerin toplam sistem performansını nasıl sınırladığını anlamaktır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 3,
    "id": "h2-s3",
    "section": "Performansın temeli",
    "topic": "İş yükü, program ve veri",
    "title": "Bu Haftanın Kavram Haritası",
    "blocks": [
      {
        "type": "text",
        "text": "Performansı, bileşenleri ayrı ayrı ezberleyerek değil, veri ve komutların izlediği yol üzerinden inceleyeceğiz."
      },
      {
        "type": "bullet",
        "text": "1. adım · İş yükü ve performans ölçütü"
      },
      {
        "type": "bullet",
        "text": "2. adım · CPU, yazmaçlar ve çekirdekler"
      },
      {
        "type": "bullet",
        "text": "3. adım · Önbellek, ana bellek ve depolama"
      },
      {
        "type": "bullet",
        "text": "4. adım · GPU, veri yolları ve giriş/çıkış"
      },
      {
        "type": "bullet",
        "text": "5. adım · Darboğazlar ve performans için tasarım teknikleri"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 4,
    "id": "h2-s4",
    "section": "Performansın temeli",
    "topic": "İş yükü, program ve veri",
    "title": "Önce İş Yükünü Tanımlayalım",
    "blocks": [
      {
        "type": "text",
        "text": "Aynı bilgisayar, farklı işlerde farklı performans gösterebilir."
      },
      {
        "type": "bullet",
        "text": "1 · Ofis uygulaması: kısa etkileşimlere hızlı yanıt önemlidir."
      },
      {
        "type": "bullet",
        "text": "2 · Video kodlama: uzun süre boyunca yüksek hesaplama iş hacmi önemlidir."
      },
      {
        "type": "bullet",
        "text": "3 · Veritabanı: bellek, depolama ve eşzamanlı istekler birlikte önemlidir."
      },
      {
        "type": "bullet",
        "text": "4 · Oyun: CPU, GPU, bellek ve gecikmelerin dengesi önemlidir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 5,
    "id": "h2-s5",
    "section": "Performansın temeli",
    "topic": "İş yükü, program ve veri",
    "title": "Bir bilgisayar, yapabileceği hesaplamayı neden bazen bekletir?",
    "blocks": [
      {
        "type": "bullet",
        "text": "İşlem yapmak için komutun ve verinin hazır olması gerekir."
      },
      {
        "type": "bullet",
        "text": "Veriyi beklemek, doğru komut yolunu beklemek ve önceki sonucu beklemek farklı sorunlardır."
      },
      {
        "type": "bullet",
        "text": "Performans için tasarım, bu beklemeleri azaltırken doğru sonucu korumayı amaçlar."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 6,
    "id": "h2-s6",
    "section": "Performansın temeli",
    "topic": "İş yükü, program ve veri",
    "title": "Program, Komut ve Veri",
    "blocks": [
      {
        "type": "text",
        "text": "Program, bilgisayarın gerçekleştireceği işi komutlarla tarif eder."
      },
      {
        "type": "bullet",
        "text": "Komut: “Bu iki değeri topla” gibi bir işlem isteğidir."
      },
      {
        "type": "bullet",
        "text": "Veri: İşlemin üzerinde çalıştığı sayı veya bilgidir."
      },
      {
        "type": "bullet",
        "text": "Sonuç: Komutun veriler üzerinde yaptığı işlemle üretilir."
      },
      {
        "type": "text",
        "text": "Örnek: 7 + 5 işleminde komut “topla”, veriler 7 ve 5, sonuç 12’dir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 7,
    "id": "h2-s7",
    "section": "Performansın temeli",
    "topic": "İş yükü, program ve veri",
    "title": "İşlemci ve Bellek Birlikte Çalışır",
    "blocks": [
      {
        "type": "text",
        "text": "Hesaplama ile bilginin saklanması farklı görevlerdir."
      },
      {
        "type": "row",
        "cells": [
          "Birim",
          "Temel görevi",
          "Örnekteki rolü"
        ]
      },
      {
        "type": "row",
        "cells": [
          "CPU / işlemci",
          "Komutları yürütmek",
          "7 + 5 hesabını yapmak"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Yazmaç",
          "Az miktarda veriyi CPU içinde tutmak",
          "İşlemde kullanılacak 7 ve 5’i tutmak"
        ]
      },
      {
        "type": "row",
        "cells": [
          "RAM / ana bellek",
          "Programı ve verileri saklamak",
          "İşlenecek sayı dizisini tutmak"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Önbellek / cache",
          "Bellek verilerinin yakın kopyalarını tutmak",
          "Tekrar kullanılacak sayıya hızlı erişmek"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 8,
    "id": "h2-s8",
    "section": "Performansın temeli",
    "topic": "İş yükü, program ve veri",
    "title": "Bir İşin Tamamlanma Adımları",
    "blocks": [
      {
        "type": "text",
        "text": "Bellekteki x = 7 değerine 5 ekleyip sonucu kaydedelim."
      },
      {
        "type": "row",
        "cells": [
          "Adım",
          "Yapılan iş"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1. Komutu edinme",
          "İşlemci “x değerine 5 ekle” işlemini belirler."
        ]
      },
      {
        "type": "row",
        "cells": [
          "2. Veriyi alma",
          "Bellekteki x = 7 değeri kullanılabilir hâle gelir."
        ]
      },
      {
        "type": "row",
        "cells": [
          "3. Hesaplama",
          "7 + 5 = 12 sonucu üretilir."
        ]
      },
      {
        "type": "row",
        "cells": [
          "4. Sonucu kaydetme",
          "12 değeri hedef yazmaca veya belleğe yazılır."
        ]
      },
      {
        "type": "text",
        "text": "Veriyi alma adımı uzun sürüyorsa toplama birimini hızlandırmak o beklemeyi doğrudan ortadan kaldırmaz."
      },
      {
        "type": "text",
        "text": "Sonucu kaydetme ya da komutu getirme de başka bir bekleme oluşturabilir. Bir programın neden yavaş olduğunu araştırırken tamamlanma yolundaki bütün adımlara bakmamızın nedeni budur. Performans için tasarım, bu adımların birlikte nasıl çalıştığıyla ilgilenir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 9,
    "id": "h2-s9",
    "section": "Performansın temeli",
    "topic": "Gecikme, iş hacmi ve darboğaz",
    "title": "Performansın İki Anlamı",
    "blocks": [
      {
        "type": "text",
        "text": "Tek işin süresi ile birim zamanda bitirilen iş sayısı farklıdır."
      },
      {
        "type": "bullet",
        "text": "Yanıt süresi: Bir işin başlamasından bitmesine kadar geçen süre."
      },
      {
        "type": "bullet",
        "text": "İş hacmi: Belirli bir sürede tamamlanan toplam iş sayısı."
      },
      {
        "type": "bullet",
        "text": "Bir sistem bu ölçütlerden birinde daha iyi, diğerinde daha kötü olabilir."
      },
      {
        "type": "text",
        "text": "Bir görüntüyü 2 saniyede işlemek: yanıt süresi. Dakikada 40 görüntü bitirmek: iş hacmi."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 10,
    "id": "h2-s10",
    "section": "Performansın temeli",
    "topic": "Gecikme, iş hacmi ve darboğaz",
    "title": "Hangi sistem daha hızlı? Gecikme ve iş hacmi örneği",
    "blocks": [
      {
        "type": "text",
        "text": "İki sistemi aynı tür görüntüler üzerinde karşılaştıralım."
      },
      {
        "type": "row",
        "cells": [
          "Ölçüt",
          "Sistem A",
          "Sistem B"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bir görüntünün süresi",
          "2 saniye",
          "3 saniye"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Dakikada biten görüntü",
          "30",
          "40"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 11,
    "id": "h2-s11",
    "section": "Performansın temeli",
    "topic": "Gecikme, iş hacmi ve darboğaz",
    "title": "Hangi sistem daha hızlı? Ölçüte göre çözüm",
    "blocks": [
      {
        "type": "text",
        "text": "İki sistemi aynı tür görüntüler üzerinde karşılaştıralım."
      },
      {
        "type": "row",
        "cells": [
          "Ölçüt",
          "Sistem A",
          "Sistem B"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bir görüntünün süresi",
          "2 saniye",
          "3 saniye"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Dakikada biten görüntü",
          "30",
          "40"
        ]
      },
      {
        "type": "text",
        "text": "Sonuç: Tek görüntünün yanıtında A, toplam iş hacminde B öndedir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 12,
    "id": "h2-s12",
    "section": "Performansın temeli",
    "topic": "Gecikme, iş hacmi ve darboğaz",
    "title": "Saat Frekansı Ne Söyler?",
    "blocks": [
      {
        "type": "text",
        "text": "Frekans, saniyedeki saat çevrimi sayısıdır."
      },
      {
        "type": "bullet",
        "text": "1 GHz = saniyede 1 milyar saat çevrimi."
      },
      {
        "type": "bullet",
        "text": "Saat çevrimi, devrelerin çalışmasını zamanlayan bir aralıktır."
      },
      {
        "type": "bullet",
        "text": "Bir komut birden fazla çevrim sürebilir; bir çevrimde birden fazla komut da tamamlanabilir."
      },
      {
        "type": "bullet",
        "text": "Aynı programın süresi, frekansın yanında yapılan işe ve beklemelere bağlıdır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 13,
    "id": "h2-s13",
    "section": "Performansın temeli",
    "topic": "Gecikme, iş hacmi ve darboğaz",
    "title": "Darboğaz Ne Demektir?",
    "blocks": [
      {
        "type": "text",
        "text": "Darboğaz, işin ilerlemesini en fazla sınırlayan aşamadır."
      },
      {
        "type": "bullet",
        "text": "Hızlı bir hesaplama birimi, veriyi beklerken o işi bitiremez."
      },
      {
        "type": "bullet",
        "text": "Kısa süren bir aşamayı iyileştirmek toplam süreyi az değiştirebilir."
      },
      {
        "type": "bullet",
        "text": "İyileştirme kararı, hangi aşamada ne kadar beklendiğine dayanmalıdır."
      },
      {
        "type": "text",
        "text": "Örtüşmeyen örnek: 6 s veri bekleme + 2 s hesaplama + 2 s diğer işler = 10 s."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 14,
    "id": "h2-s14",
    "section": "Performansın temeli",
    "topic": "Gecikme, iş hacmi ve darboğaz",
    "title": "Darboğaz Örneğinin Çözümü",
    "blocks": [
      {
        "type": "text",
        "text": "Yalnızca hesaplama aşamasını iki kat hızlandıralım."
      },
      {
        "type": "row",
        "cells": [
          "Aşama",
          "Önce",
          "Sonra"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Veri bekleme",
          "6s",
          "6s"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Hesaplama",
          "2s",
          "1s"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Diğer işler",
          "2s",
          "2s"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Toplam",
          "10 s",
          "9s"
        ]
      },
      {
        "type": "text",
        "text": "Hesaplama iki kat hızlandı; bütün işin süresi yalnızca 1 saniye azaldı."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 15,
    "id": "h2-s15",
    "section": "Sistem bileşenleri",
    "topic": "CPU, yazmaçlar ve çekirdek",
    "title": "CPU Sistemde Ne Yapar?",
    "blocks": [
      {
        "type": "text",
        "text": "Merkezi işlem birimi, program komutlarını yorumlar ve işlemleri koordine eder."
      },
      {
        "type": "bullet",
        "text": "1. adım · Kontrol birimi, komutun hangi işlemleri gerektirdiğini belirler."
      },
      {
        "type": "bullet",
        "text": "2. adım · Aritmetik ve mantık birimleri sayısal ve mantıksal işlemleri yürütür."
      },
      {
        "type": "bullet",
        "text": "3. adım · Yazmaçlar, o anda kullanılan küçük miktardaki veriyi işlemci içinde tutar."
      },
      {
        "type": "bullet",
        "text": "4. adım · CPU çoğu zaman bellekten veya başka bir birimden veri gelmesini bekleyebilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 16,
    "id": "h2-s16",
    "section": "Sistem bileşenleri",
    "topic": "CPU, yazmaçlar ve çekirdek",
    "title": "Yazmaçlar: İşlemciye En Yakın Depolama",
    "blocks": [
      {
        "type": "text",
        "text": "Yazmaçlar, işlemcinin doğrudan kullandığı çok hızlı ve sınırlı sayıdaki saklama alanlarıdır."
      },
      {
        "type": "bullet",
        "text": "1 · Genel amaçlı yazmaçlar operandları ve ara sonuçları tutabilir."
      },
      {
        "type": "bullet",
        "text": "2 · Program sayacı sıradaki komutun konumunu izler."
      },
      {
        "type": "bullet",
        "text": "3 · Komut yazmacı yürütülmekte olan komutu tutar."
      },
      {
        "type": "bullet",
        "text": "4 · Yazmaç sayısı ve kullanım biçimi komut kümesi mimarisinin parçasıdır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 17,
    "id": "h2-s17",
    "section": "Sistem bileşenleri",
    "topic": "CPU, yazmaçlar ve çekirdek",
    "title": "Çekirdek, İş Parçacığı ve İşlemci",
    "blocks": [
      {
        "type": "text",
        "text": "Bu üç terim aynı şeyi ifade etmez."
      },
      {
        "type": "row",
        "cells": [
          "Terim",
          "Temel anlam",
          "Performans açısından"
        ]
      },
      {
        "type": "text",
        "text": "Bir veya daha çok çekirdek içeren fiziksel"
      },
      {
        "type": "row",
        "cells": [
          "İşlemci / CPU",
          "Sistemin genel yürütme kaynağı"
        ]
      },
      {
        "type": "text",
        "text": "işlemci"
      },
      {
        "type": "row",
        "cells": [
          "Çekirdek",
          "Komut akışını yürütebilen işlem birimi",
          "Bağımsız işler paralel ilerleyebilir"
        ]
      },
      {
        "type": "text",
        "text": "Bir çekirdeğin birden fazla yürütme"
      },
      {
        "type": "row",
        "cells": [
          "Donanımsal iş parçacığı",
          "Boş yürütme kaynaklarından yararlanabilir"
        ]
      },
      {
        "type": "text",
        "text": "bağlamı izlemesi"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 18,
    "id": "h2-s18",
    "section": "Sistem bileşenleri",
    "topic": "CPU, yazmaçlar ve çekirdek",
    "title": "Saat Frekansı Neyi Ölçer?",
    "blocks": [
      {
        "type": "text",
        "text": "Saat frekansı, işlemcideki eşzamanlı devrelerin saniyede kaç zamanlama çevrimi aldığını belirtir."
      },
      {
        "type": "row",
        "cells": [
          "Birinci bakış",
          "Sistem bakışı"
        ]
      },
      {
        "type": "row",
        "cells": [
          "• 1 GHz, saniyede bir milyar saat çevrimi demektir.",
          "• Bir komut birden çok çevrim sürebilir; modern"
        ]
      },
      {
        "type": "text",
        "text": "işlemciler aynı anda birden çok komutu farklı"
      },
      {
        "type": "row",
        "cells": [
          "• Saat çevrimi ile tamamlanan komut sayısı aynı",
          "evrelerde işleyebilir."
        ]
      },
      {
        "type": "text",
        "text": "değildir."
      },
      {
        "type": "bullet",
        "text": "Frekans karşılaştırması ancak mimari ve iş yükü bağlamıyla anlam kazanır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 19,
    "id": "h2-s19",
    "section": "Sistem bileşenleri",
    "topic": "CPU, yazmaçlar ve çekirdek",
    "title": "Neden Yalnızca GHz Karşılaştırılmaz?",
    "blocks": [
      {
        "type": "text",
        "text": "İki işlemci aynı frekansta çalışsa bile aynı sürede farklı miktarda iş tamamlayabilir."
      },
      {
        "type": "bullet",
        "text": "1 · Mikromimari, bir çevrimde yapılabilen yararlı işi değiştirir."
      },
      {
        "type": "bullet",
        "text": "2 · Önbellek başarısı ve bellek gecikmesi bekleme süresini değiştirir."
      },
      {
        "type": "bullet",
        "text": "3 · Komut bağımlılıkları ve dallanmalar yürütme kaynaklarının kullanımını etkiler."
      },
      {
        "type": "bullet",
        "text": "4 · Derleyici ve programın komut karışımı sonucu etkiler."
      }
    ],
    "note": "İki işlemci aynı programı aynı sayıda komutla yürütüyor olsun. A, 4 GHz ve CPI 2 ile saniyede 2 milyar komut işler. B, 3 GHz ve CPI 1 ile saniyede 3 milyar komut işler. Bu örnekte frekansı daha düşük B daha erken bitirir.",
    "diagram": []
  },
  {
    "week": 2,
    "page": 20,
    "id": "h2-s20",
    "section": "Sistem bileşenleri",
    "topic": "CPU, yazmaçlar ve çekirdek",
    "title": "Çok Çekirdek Ne Zaman Yararlıdır?",
    "blocks": [
      {
        "type": "text",
        "text": "Bir işin bağımsız parçalara ayrılabildiği ölçüde birden fazla çekirdekten yararlanılabilir."
      },
      {
        "type": "bullet",
        "text": "1. adım · Birden fazla bağımsız program aynı anda yürütülebilir."
      },
      {
        "type": "bullet",
        "text": "2. adım · Video işleme gibi bazı işler çok sayıda parçaya bölünebilir."
      },
      {
        "type": "bullet",
        "text": "3. adım · Sıralı bağımlılık içeren bölümler tek bir yürütme zincirine bağlı kalır."
      },
      {
        "type": "bullet",
        "text": "4. adım · Çekirdekler önbellek, bellek bant genişliği ve güç bütçesini paylaşabilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 21,
    "id": "h2-s21",
    "section": "Sistem bileşenleri",
    "topic": "Bellek, depolama ve GPU",
    "title": "Bellek Hiyerarşisine İlk Bakış",
    "blocks": [
      {
        "type": "text",
        "text": "Sistem, hız-kapasite-maliyet dengesini farklı depolama katmanlarıyla kurar."
      },
      {
        "type": "row",
        "cells": [
          "Katman",
          "CPU’ya yakınlık",
          "Genel özellik"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Yazmaçlar",
          "En yakın",
          "Çok hızlı, çok küçük"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Önbellek",
          "Çok yakın",
          "Hızlı, sınırlı"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Ana bellek (RAM)",
          "Orta",
          "Daha büyük, daha yüksek gecikme"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Kalıcı depolama",
          "Daha uzak",
          "Çok büyük, kalıcı, daha yavaş"
        ]
      }
    ],
    "note": "ADD R1, R2, R3 komutunun operandları yazmaçtadır. LOAD R1, [100] ise bellek adresine erişir; bu istekte önbellek bloğu tutuyorsa RAM’e gitmeden değer dönebilir.",
    "diagram": [
      "Yazmaçlar",
      "Önbellek",
      "RAM",
      "Kalıcı depolama"
    ]
  },
  {
    "week": 2,
    "page": 22,
    "id": "h2-s22",
    "section": "Sistem bileşenleri",
    "topic": "Bellek, depolama ve GPU",
    "title": "RAM Kapasitesi ve RAM Hızı",
    "blocks": [
      {
        "type": "text",
        "text": "Kapasite ile erişim performansı farklı sorunları çözer."
      },
      {
        "type": "row",
        "cells": [
          "Birinci bakış",
          "Sistem bakışı"
        ]
      },
      {
        "type": "row",
        "cells": [
          "• Yetersiz kapasite, aktif verilerin daha yavaş",
          "• Gecikme, tek bir isteğin yanıt süresini; bant"
        ]
      },
      {
        "type": "row",
        "cells": [
          "depolamaya taşınmasına yol açabilir.",
          "genişliği, birim zamanda taşınan toplam veriyi"
        ]
      },
      {
        "type": "text",
        "text": "etkiler."
      },
      {
        "type": "bullet",
        "text": "Yeterli kapasite, programın çalışma kümesini"
      },
      {
        "type": "row",
        "cells": [
          "bellekte tutar.",
          "• Bellek kanalları ve erişim düzeni de kullanılabilir"
        ]
      },
      {
        "type": "text",
        "text": "bant genişliğini belirler."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 23,
    "id": "h2-s23",
    "section": "Sistem bileşenleri",
    "topic": "Bellek, depolama ve GPU",
    "title": "Depolama: Verinin Kalıcı Adresi",
    "blocks": [
      {
        "type": "text",
        "text": "SSD veya HDD, program ve verileri güç kesildiğinde de saklar; RAM’in doğrudan yerine geçmez."
      },
      {
        "type": "bullet",
        "text": "1. adım · Program çalıştırılırken gerekli kod ve veriler genellikle depolamadan RAM’e getirilir."
      },
      {
        "type": "bullet",
        "text": "2. adım · HDD mekanik hareket içerir ve rastgele erişimde yüksek gecikmelidir."
      },
      {
        "type": "bullet",
        "text": "3. adım · SSD elektronik depolama kullanır; rastgele erişim ve paralel isteklerde belirgin avantaj sağlayabilir."
      },
      {
        "type": "bullet",
        "text": "4. adım · Arayüz ve protokol, aygıtın ulaşabileceği aktarım hızını sınırlayabilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 24,
    "id": "h2-s24",
    "section": "Sistem bileşenleri",
    "topic": "Bellek, depolama ve GPU",
    "title": "HDD, SATA SSD ve NVMe SSD",
    "blocks": [
      {
        "type": "text",
        "text": "Depolama türleri yalnızca en yüksek sıralı aktarım hızıyla karşılaştırılmamalıdır."
      },
      {
        "type": "row",
        "cells": [
          "Özellik",
          "HDD",
          "SATA SSD",
          "NVMe SSD"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Hareketli parça",
          "Var",
          "Yok",
          "Yok"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Rastgele erişim",
          "Görece yavaş",
          "Hızlı",
          "Genellikle daha hızlı ve paralel"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bağlantı/protokol",
          "SATA/SAS vb.",
          "Çoğunlukla SATA/AHCI",
          "PCIe/NVMe"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Uygunluk",
          "Yüksek kapasite, arşiv",
          "Genel yükseltme",
          "Yoğun I/O ve yüksek paralellik"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 25,
    "id": "h2-s25",
    "section": "Sistem bileşenleri",
    "topic": "Bellek, depolama ve GPU",
    "title": "GPU Neden Ayrı Bir İşlemcidir?",
    "blocks": [
      {
        "type": "text",
        "text": "Grafik işlemci, çok sayıda benzer işlemi büyük veri kümeleri üzerinde paralel yürütmeye odaklanır."
      },
      {
        "type": "row",
        "cells": [
          "Birinci bakış",
          "Sistem bakışı"
        ]
      },
      {
        "type": "row",
        "cells": [
          "• Grafik oluşturma, matris işlemleri ve bazı bilimsel",
          "• GPU’ya veri taşıma maliyeti, küçük işler için"
        ]
      },
      {
        "type": "row",
        "cells": [
          "hesaplamalar GPU’ya uygundur.",
          "kazanımı ortadan kaldırabilir."
        ]
      },
      {
        "type": "row",
        "cells": [
          "• CPU az sayıda karmaşık komut akışında ve genel",
          "• Her program GPU üzerinde otomatik olarak"
        ]
      },
      {
        "type": "row",
        "cells": [
          "amaçlı denetimde güçlüdür.",
          "hızlanmaz; uygun algoritma ve yazılım desteği"
        ]
      },
      {
        "type": "text",
        "text": "gerekir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 26,
    "id": "h2-s26",
    "section": "Sistem bileşenleri",
    "topic": "Bellek, depolama ve GPU",
    "title": "Bütünleşik ve Ayrık GPU",
    "blocks": [
      {
        "type": "text",
        "text": "GPU’nun sistemdeki konumu, bellek kullanımını ve veri hareketini etkiler."
      },
      {
        "type": "row",
        "cells": [
          "Yapı",
          "Bellek yaklaşımı",
          "Güç ve kapasite",
          "Tipik kullanım"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Genellikle sistem belleğini",
          "Düşük güç, paylaşılmış",
          "Günlük kullanım,"
        ]
      },
      {
        "type": "text",
        "text": "Bütünleşik GPU"
      },
      {
        "type": "row",
        "cells": [
          "paylaşır",
          "kaynaklar",
          "medya, hafif grafik"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Genellikle kendi grafik",
          "Daha yüksek güç ve",
          "Oyun, üretim, yoğun"
        ]
      },
      {
        "type": "text",
        "text": "Ayrık GPU"
      },
      {
        "type": "row",
        "cells": [
          "belleğine sahiptir",
          "hesaplama kapasitesi",
          "paralel hesaplama"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 27,
    "id": "h2-s27",
    "section": "Sistem bileşenleri",
    "topic": "Bağlantılar ve giriş/çıkış",
    "title": "Veri Yolları ve Bağlantılar",
    "blocks": [
      {
        "type": "text",
        "text": "Bileşenler arasındaki veri hareketi de toplam performansın parçasıdır."
      },
      {
        "type": "bullet",
        "text": "1. adım · Adres bilgisi, hangi konuma erişileceğini belirtir."
      },
      {
        "type": "bullet",
        "text": "2. adım · Veri hatları, taşınan bitleri iletir."
      },
      {
        "type": "bullet",
        "text": "3. adım · Kontrol sinyalleri, okuma- yazma ve zamanlama gibi işlemleri koordine eder."
      },
      {
        "type": "bullet",
        "text": "4. adım · Modern sistemlerde tek bir ortak yol yerine çeşitli nokta- noktaya ve hiyerarşik bağlantılar kullanılabilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 28,
    "id": "h2-s28",
    "section": "Sistem bileşenleri",
    "topic": "Bağlantılar ve giriş/çıkış",
    "title": "Giriş/Çıkış Performansı",
    "blocks": [
      {
        "type": "text",
        "text": "Klavye gibi yavaş insan arayüzleri ile ağ ve depolama gibi yüksek hızlı aygıtlar aynı şekilde yönetilemez."
      },
      {
        "type": "bullet",
        "text": "1. adım · Denetleyiciler, aygıtın fiziksel ayrıntıları ile işlemci arasındaki iletişimi yönetir."
      },
      {
        "type": "bullet",
        "text": "2. adım · Tamponlar hızları farklı olan üretici ve tüketiciler arasındaki geçici veriyi tutar."
      },
      {
        "type": "bullet",
        "text": "3. adım · Kesme, işlemciye bir olayın gerçekleştiğini bildirir."
      },
      {
        "type": "bullet",
        "text": "4. adım · DMA (Direct Memory Access), büyük veri aktarımında işlemcinin her kelimeyi tek tek taşıma yükünü azaltabilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 29,
    "id": "h2-s29",
    "section": "Sistem bileşenleri",
    "topic": "Bağlantılar ve giriş/çıkış",
    "title": "Dengeli Sistem Tasarımı",
    "blocks": [
      {
        "type": "text",
        "text": "Bir bileşeni çok hızlandırmak, diğer bileşenler veriyi yetiştiremiyorsa sınırlı yarar sağlar."
      },
      {
        "type": "bullet",
        "text": "1 · Güçlü CPU + yetersiz RAM: çalışma kümesi sığmayabilir."
      },
      {
        "type": "bullet",
        "text": "2 · Hızlı GPU + yavaş veri besleme: işlem birimleri boş kalabilir."
      },
      {
        "type": "bullet",
        "text": "3 · Hızlı SSD + dar bağlantı: aygıt potansiyeline ulaşılamayabilir."
      },
      {
        "type": "bullet",
        "text": "4 · Çok çekirdek + sıralı yazılım: çekirdeklerin çoğu kullanılamayabilir."
      }
    ],
    "note": "Örneğin video kodlama CPU’ya, büyük dosyanın açılması depolamaya, karmaşık görüntünün çizilmesi GPU’ya daha fazla yük bindirebilir. Sistemi karşılaştırmadan önce hedef işin hangi aşamada beklediğini ölç.",
    "diagram": []
  },
  {
    "week": 2,
    "page": 30,
    "id": "h2-s30",
    "section": "Fiziksel sınırlar",
    "topic": "Ölçekleme, güç, RC ve bellek duvarı",
    "title": "Transistör ve Moore Yasası",
    "blocks": [
      {
        "type": "text",
        "text": "Transistör, dijital devrelerde anahtarlama için kullanılan temel elemandır."
      },
      {
        "type": "bullet",
        "text": "Daha çok transistör, daha fazla devre kurma olanağı sağlar."
      },
      {
        "type": "bullet",
        "text": "Moore Yasası’nın yaygın tarihsel ifadesi: yaklaşık iki yılda iki kat transistör."
      },
      {
        "type": "bullet",
        "text": "Bu eğilim, programların aynı oranda hızlanacağını garanti etmez."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 31,
    "id": "h2-s31",
    "section": "Fiziksel sınırlar",
    "topic": "Ölçekleme, güç, RC ve bellek duvarı",
    "title": "Küçük Devrelerin Sağladığı Olanak",
    "blocks": [
      {
        "type": "text",
        "text": "Bütünleşme, daha fazla bileşenin aynı çip üzerinde yer almasıdır."
      },
      {
        "type": "bullet",
        "text": "Yakın bileşenler arasındaki bazı bağlantılar kısalır."
      },
      {
        "type": "bullet",
        "text": "Önbelleği çipe yerleştirmek veriye erişimi hızlandırabilir."
      },
      {
        "type": "bullet",
        "text": "Ek işlem birimleri bağımsız hesaplamaları birlikte yürütebilir."
      },
      {
        "type": "bullet",
        "text": "Kazanç, güç ve bağlantı sınırlarıyla birlikte değerlendirilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 32,
    "id": "h2-s32",
    "section": "Fiziksel sınırlar",
    "topic": "Ölçekleme, güç, RC ve bellek duvarı",
    "title": "Üç Fiziksel Sınır",
    "blocks": [
      {
        "type": "text",
        "text": "Daha hızlı çalışmanın karşısında yalnızca yazılım engelleri yoktur."
      },
      {
        "type": "row",
        "cells": [
          "Sınır",
          "İşlemciyi nasıl etkiler?"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Güç ve ısı",
          "Sürekli yüksek hızda çalışmayı sınırlar."
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bağlantı gecikmesi",
          "Sinyalin diğer birime ulaşmasını geciktirir."
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bellek duvarı",
          "Hesaplama için gereken veriyi bekletir."
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 33,
    "id": "h2-s33",
    "section": "Fiziksel sınırlar",
    "topic": "Ölçekleme, güç, RC ve bellek duvarı",
    "title": "Güç ve Isı Neden Sınırdır?",
    "blocks": [
      {
        "type": "text",
        "text": "Devrelerin durum değiştirmesi enerji tüketir ve ısı üretir."
      },
      {
        "type": "bullet",
        "text": "Daha sık anahtarlama, dinamik güç tüketimini artırabilir."
      },
      {
        "type": "bullet",
        "text": "Gerilim artırılması da güç tüketimini yükseltir."
      },
      {
        "type": "bullet",
        "text": "Soğutmanın uzaklaştırabildiğinden fazla ısı sürekli üretilemez."
      },
      {
        "type": "bullet",
        "text": "İşlemci güvenli çalışmak için hızını azaltabilir."
      },
      {
        "type": "text",
        "text": "Kısa bir hesapta yüksek hız görülebilir; uzun yük altında ısınma aynı hızın sürmesini engelleyebilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 34,
    "id": "h2-s34",
    "section": "Fiziksel sınırlar",
    "topic": "Ölçekleme, güç, RC ve bellek duvarı",
    "title": "RC Gecikmesini Anlamak",
    "blocks": [
      {
        "type": "text",
        "text": "Bir bağlantı teli ideal ve anında ileten bir yol değildir."
      },
      {
        "type": "bullet",
        "text": "Direnç (R), elektrik akımının geçişine karşı koyar."
      },
      {
        "type": "bullet",
        "text": "Kapasitans (C), elektriksel yükün depolanmasıyla ilgilidir."
      },
      {
        "type": "bullet",
        "text": "Yüklerin dolup boşalması, sinyalin kararlı değere ulaşmasını geciktirir."
      },
      {
        "type": "bullet",
        "text": "Tel uzunluğu, kalınlığı, aralığı ve malzemesi sonucu etkiler."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 35,
    "id": "h2-s35",
    "section": "Fiziksel sınırlar",
    "topic": "Ölçekleme, güç, RC ve bellek duvarı",
    "title": "Bellek Duvarı Nedir?",
    "blocks": [
      {
        "type": "text",
        "text": "İşlemci hazır olsa bile veri zamanında gelmeyebilir."
      },
      {
        "type": "bullet",
        "text": "Hesaplama kapasitesi ile bellek erişimi aynı hızda gelişmez."
      },
      {
        "type": "bullet",
        "text": "Gerekli veri gelmeden o veriye bağlı işlem başlayamaz."
      },
      {
        "type": "bullet",
        "text": "Bağımsız başka işler varsa işlemci bunları ilerletebilir."
      },
      {
        "type": "bullet",
        "text": "Önbellek, iyi erişim düzeni ve güçlü bağlantılar beklemeyi azaltabilir."
      }
    ],
    "note": "CPU bir komutu işlemeye hazır olduğu hâlde ihtiyaç duyduğu veri henüz gelmediyse bekler. Önbellekte isabet, RAM’e gitme gereksinimini ortadan kaldırır. Hızlı CPU tek başına bu beklemeyi gidermez.",
    "diagram": []
  },
  {
    "week": 2,
    "page": 36,
    "id": "h2-s36",
    "section": "Bellek performansı",
    "topic": "Gecikme, bant genişliği ve yerellik",
    "title": "Gecikme ve Bant Genişliği",
    "blocks": [
      {
        "type": "text",
        "text": "Verinin ne zaman geldiği ile ne kadar veri taşındığı farklı sorulardır."
      },
      {
        "type": "row",
        "cells": [
          "Kavram",
          "Sorduğumuz soru",
          "Örnek birim"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Gecikme",
          "İlk veri ne kadar sonra gelir?",
          "ns"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bant genişliği",
          "Bir saniyede ne kadar veri taşınır?",
          "GB/s"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Kapasite",
          "Toplam ne kadar veri tutulur?",
          "GB"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 37,
    "id": "h2-s37",
    "section": "Bellek performansı",
    "topic": "Gecikme, bant genişliği ve yerellik",
    "title": "Veri Yolu Genişliği",
    "blocks": [
      {
        "type": "text",
        "text": "Veri yolu, bileşenler arasında bitlerin taşındığı bağlantıdır."
      },
      {
        "type": "bullet",
        "text": "32 bitlik bir aktarım: 32 ÷ 8 = 4 bayt"
      },
      {
        "type": "bullet",
        "text": "64 bitlik bir aktarım: 64 ÷ 8 = 8 bayt"
      },
      {
        "type": "bullet",
        "text": "Aynı aktarım sıklığında geniş yol daha çok veri taşıyabilir."
      },
      {
        "type": "bullet",
        "text": "Bu fark, programın tamamının iki kat hızlanacağını göstermez."
      },
      {
        "type": "text",
        "text": "İdeal örnek: 128 bayt için 32 bit yolda 32, 64 bit yolda 16 aktarım gerekir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 38,
    "id": "h2-s38",
    "section": "Bellek performansı",
    "topic": "Gecikme, bant genişliği ve yerellik",
    "title": "Önbellek Neden Kullanılır?",
    "blocks": [
      {
        "type": "text",
        "text": "Önbellek, bazı komut ve verilerin kopyalarını CPU’ya yakın tutar."
      },
      {
        "type": "bullet",
        "text": "CPU bir bilgi istediğinde ilgili önbellekte bulunabilir."
      },
      {
        "type": "bullet",
        "text": "Bulunursa “isabet”, bulunmazsa “kaçırma” denir."
      },
      {
        "type": "bullet",
        "text": "Kaçırmada bilgi daha alt bellek düzeyinden getirilir."
      },
      {
        "type": "bullet",
        "text": "Yakında tekrar kullanılan bilgiler, önbellekten yarar sağlar."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 39,
    "id": "h2-s39",
    "section": "Bellek performansı",
    "topic": "Gecikme, bant genişliği ve yerellik",
    "title": "Yerellik: Yakın Bilgiyi Kullanmak",
    "blocks": [
      {
        "type": "text",
        "text": "Yerellik, erişimlerin aynı veya komşu bilgilere yönelme eğilimidir."
      },
      {
        "type": "row",
        "cells": [
          "Yerellik türü",
          "Ne tekrar kullanılır?",
          "Örnek"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Zamansal",
          "Aynı bilgi",
          "toplam değerini her adımda güncellemek"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Mekânsal",
          "Yakın adreslerdeki bilgi",
          "a[0], a[1], a[2] elemanlarını sırayla okumak"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 40,
    "id": "h2-s40",
    "section": "Bellek performansı",
    "topic": "Gecikme, bant genişliği ve yerellik",
    "title": "Örnek: Bir Bloktan Yararlanmak",
    "blocks": [
      {
        "type": "text",
        "text": "Öğretim modeli: Bir blok a[0], a[1], a[2], a[3] elemanlarını birlikte içeriyor."
      },
      {
        "type": "row",
        "cells": [
          "İstek",
          "Önbellekte mi?",
          "Sonuç"
        ]
      },
      {
        "type": "row",
        "cells": [
          "a[0]",
          "Başlangıçta hayır",
          "Kaçırma; dört elemanlık blok getirilir."
        ]
      },
      {
        "type": "row",
        "cells": [
          "a[1]",
          "Evet, getirilen blokta",
          "İsabet"
        ]
      },
      {
        "type": "row",
        "cells": [
          "a[2]",
          "Evet, getirilen blokta",
          "İsabet"
        ]
      },
      {
        "type": "row",
        "cells": [
          "a[3]",
          "Evet, getirilen blokta",
          "İsabet"
        ]
      },
      {
        "type": "text",
        "text": "Aynı bloktaki komşu elemanları kullanmak, mekânsal yerellikten yararlanır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 41,
    "id": "h2-s41",
    "section": "Komut yürütme",
    "topic": "Algoritma, paralellik ve komut akışı",
    "title": "Algoritma da Performansı Etkiler",
    "blocks": [
      {
        "type": "text",
        "text": "Aynı sonucu üretirken gereksiz veri hareketini azaltabiliriz."
      },
      {
        "type": "bullet",
        "text": "Ara sonuçları tekrar hesaplamak veya tekrar getirmek yerine yeniden kullanmak"
      },
      {
        "type": "bullet",
        "text": "Dizileri bellekteki yerleşimine uygun sırada dolaşmak"
      },
      {
        "type": "bullet",
        "text": "Büyük işi, verisi tekrar kullanılabilen küçük parçalara ayırmak"
      },
      {
        "type": "text",
        "text": "Satır sıralı bir matriste aynı satır boyunca ilerlemek, komşu verilerin kullanılmasını kolaylaştırır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 42,
    "id": "h2-s42",
    "section": "Komut yürütme",
    "topic": "Algoritma, paralellik ve komut akışı",
    "title": "Paralel Çalışma Ne Demektir?",
    "blocks": [
      {
        "type": "text",
        "text": "Paralellik, uygun işlerin aynı zaman aralığında ilerlemesidir."
      },
      {
        "type": "row",
        "cells": [
          "Düzey",
          "Birlikte ilerleyen işler"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Tek çekirdek içinde",
          "Birbirinden bağımsız komutlar"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Birden fazla çekirdekte",
          "Programın ayrılabilen görevleri"
        ]
      },
      {
        "type": "row",
        "cells": [
          "GPU veya özel birimde",
          "Uygun yapıdaki çok sayıda benzer hesap"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 43,
    "id": "h2-s43",
    "section": "Komut yürütme",
    "topic": "Algoritma, paralellik ve komut akışı",
    "title": "Komut Akışı Nasıl İlerler?",
    "blocks": [
      {
        "type": "text",
        "text": "İşlemci hem işi hem sıradaki komut adresini takip eder."
      },
      {
        "type": "bullet",
        "text": "Getirme: Sıradaki komutu bellek sisteminden alma."
      },
      {
        "type": "bullet",
        "text": "Çözme: Komutun hangi işlemi ve kaynakları istediğini belirleme."
      },
      {
        "type": "bullet",
        "text": "Yürütme: Hesaplama veya erişim işlemini yapma."
      },
      {
        "type": "bullet",
        "text": "Sonucu kaydetme ve programın uygun noktasından devam etme."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 44,
    "id": "h2-s44",
    "section": "Komut yürütme",
    "topic": "Dallanma tahmini",
    "title": "Koşullu Dallanmayı Anlamak",
    "blocks": [
      {
        "type": "text",
        "text": "Bir koşulun sonucuna göre program farklı komut yollarına gider."
      },
      {
        "type": "bullet",
        "text": "Koşul: x > 0 mı?"
      },
      {
        "type": "bullet",
        "text": "Evet ise: y = 10"
      },
      {
        "type": "bullet",
        "text": "Hayır ise: y = 20"
      },
      {
        "type": "bullet",
        "text": "x henüz bilinmiyorsa doğru komut yolu da kesinleşmemiştir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 45,
    "id": "h2-s45",
    "section": "Komut yürütme",
    "topic": "Dallanma tahmini",
    "title": "Dallanma Tahmini Ne Yapar?",
    "blocks": [
      {
        "type": "text",
        "text": "Tahminci, gerçek koşul çözülmeden olası devam yolunu seçer."
      },
      {
        "type": "bullet",
        "text": "Geçmiş dallanma sonuçları gelecekteki yol için ipucu olabilir."
      },
      {
        "type": "bullet",
        "text": "Tahmin edilen yolun komutları önceden getirilebilir."
      },
      {
        "type": "bullet",
        "text": "Gerçek sonuç belli olduğunda tahmin kontrol edilir."
      },
      {
        "type": "bullet",
        "text": "Yanlışsa işlemci doğru komut yoluna döner."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 46,
    "id": "h2-s46",
    "section": "Komut yürütme",
    "topic": "Dallanma tahmini",
    "title": "Tahmin Örneğinin Kuralları",
    "blocks": [
      {
        "type": "text",
        "text": "Tek bir dallanmanın art arda beş çalışmasını izleyelim."
      },
      {
        "type": "bullet",
        "text": "A: dallanma alındı, hedef adrese gidildi."
      },
      {
        "type": "bullet",
        "text": "D: dallanma alınmadı, ardışık komuta devam edildi."
      },
      {
        "type": "bullet",
        "text": "Tahminci, bir sonraki sonucu son gerçek sonuçla aynı kabul eder."
      },
      {
        "type": "bullet",
        "text": "İlk tahmin A. Gerçek sonuç dizisi: A, A, A, A, D."
      },
      {
        "type": "text",
        "text": "Yapılacak iş: Her çalışmanın tahminini yazın, gerçek sonuçla karşılaştırın ve doğru tahminleri sayın."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 47,
    "id": "h2-s47",
    "section": "Komut yürütme",
    "topic": "Dallanma tahmini",
    "title": "Tahmin Tablosu ve Sonuç",
    "blocks": [
      {
        "type": "text",
        "text": "Her satırda önce tahmin, sonra gerçek sonuç belirlenir."
      },
      {
        "type": "row",
        "cells": [
          "Çalışma",
          "Tahmin",
          "Gerçek",
          "Değerlendirme"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1",
          "A",
          "A",
          "Doğru"
        ]
      },
      {
        "type": "row",
        "cells": [
          "2",
          "A",
          "A",
          "Doğru"
        ]
      },
      {
        "type": "row",
        "cells": [
          "3",
          "A",
          "A",
          "Doğru"
        ]
      },
      {
        "type": "row",
        "cells": [
          "4",
          "A",
          "A",
          "Doğru"
        ]
      },
      {
        "type": "row",
        "cells": [
          "5",
          "A",
          "D",
          "Yanlış"
        ]
      },
      {
        "type": "text",
        "text": "4 doğru / 5 tahmin = %80 doğruluk. Bu, programın hızlanma oranı değildir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 48,
    "id": "h2-s48",
    "section": "Komut yürütme",
    "topic": "Dallanma tahmini",
    "title": "Yanlış Tahminde Ne Olur?",
    "blocks": [
      {
        "type": "text",
        "text": "Program doğru yola döner, fakat yapılan hazırlığın maliyeti vardır."
      },
      {
        "type": "bullet",
        "text": "Yanlış yola ait geçici işler bırakılır."
      },
      {
        "type": "bullet",
        "text": "Doğru adresteki komutlar getirilmeye başlanır."
      },
      {
        "type": "bullet",
        "text": "Harcanan zaman ve enerji geri kazanılamaz."
      },
      {
        "type": "bullet",
        "text": "Gecikmenin büyüklüğü işlemcinin tasarımına bağlıdır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 49,
    "id": "h2-s49",
    "section": "Komut yürütme",
    "topic": "Bağımlılık, sıra dışı yürütme ve spekülasyon",
    "title": "Veri bağımlılığını tanımak",
    "blocks": [
      {
        "type": "text",
        "text": "Operand, bir komutun işlem yapmak için kullandığı değerdir."
      },
      {
        "type": "bullet",
        "text": "I1: a = b + c"
      },
      {
        "type": "bullet",
        "text": "I2: d = a × 2"
      },
      {
        "type": "bullet",
        "text": "I3: e = f + g"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 50,
    "id": "h2-s50",
    "section": "Komut yürütme",
    "topic": "Bağımlılık, sıra dışı yürütme ve spekülasyon",
    "title": "Veri bağımlılığını komut dizisinde izlemek",
    "blocks": [
      {
        "type": "text",
        "text": "Operand, bir komutun işlem yapmak için kullandığı değerdir."
      },
      {
        "type": "bullet",
        "text": "I1: a = b + c"
      },
      {
        "type": "bullet",
        "text": "I2: d = a × 2"
      },
      {
        "type": "bullet",
        "text": "I3: e = f + g"
      },
      {
        "type": "bullet",
        "text": "I2’nin operandı olan a, I1 tarafından üretilir. Bu nedenle I2, I1’i bekler."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 51,
    "id": "h2-s51",
    "section": "Komut yürütme",
    "topic": "Bağımlılık, sıra dışı yürütme ve spekülasyon",
    "title": "Bağımlılık Örneğinin Çözümü",
    "blocks": [
      {
        "type": "text",
        "text": "Başlangıç değerleri: b = 2, c = 3, f = 4, g = 6."
      },
      {
        "type": "row",
        "cells": [
          "Komut",
          "Beklediği değer",
          "Sonuç"
        ]
      },
      {
        "type": "row",
        "cells": [
          "I1: a = b + c",
          "b ve c baştan hazır",
          "a=5"
        ]
      },
      {
        "type": "row",
        "cells": [
          "I2: d = a × 2",
          "I1’in ürettiği a",
          "d = 10"
        ]
      },
      {
        "type": "row",
        "cells": [
          "I3: e = f + g",
          "f ve g baştan hazır",
          "e = 10"
        ]
      },
      {
        "type": "text",
        "text": "I2 beklerken, kaynak uygunsa I3 ilerleyebilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 52,
    "id": "h2-s52",
    "section": "Komut yürütme",
    "topic": "Bağımlılık, sıra dışı yürütme ve spekülasyon",
    "title": "Sıra Dışı Yürütme",
    "blocks": [
      {
        "type": "text",
        "text": "Hazır bir sonraki komut, bekleyen komuttan önce çalışabilir."
      },
      {
        "type": "bullet",
        "text": "Program sırası: I1, I2, I3"
      },
      {
        "type": "bullet",
        "text": "I2 gerekli sonucu bekliyorsa, bağımsız I3 öne alınabilir."
      },
      {
        "type": "bullet",
        "text": "Gerçek bağımlılıklar korunur; sonuçlar keyfî olarak değiştirilemez."
      },
      {
        "type": "bullet",
        "text": "İşlemci hazır operandları ve uygun yürütme birimlerini izler."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 53,
    "id": "h2-s53",
    "section": "Komut yürütme",
    "topic": "Bağımlılık, sıra dışı yürütme ve spekülasyon",
    "title": "Spekülatif Yürütme Nedir?",
    "blocks": [
      {
        "type": "text",
        "text": "Spekülasyon, henüz doğrulanmamış bir varsayıma dayanarak işe başlamaktır."
      },
      {
        "type": "bullet",
        "text": "Varsayım: Tahmin edilen dallanma yolu doğru çıkacak."
      },
      {
        "type": "bullet",
        "text": "İşlemci bu yoldaki uygun komutları önceden çalıştırabilir."
      },
      {
        "type": "bullet",
        "text": "Üretilen sonuçlar, gerekli kontroller tamamlanana kadar geçicidir."
      },
      {
        "type": "bullet",
        "text": "Varsayım yanlışsa ilgili sonuçlar kabul edilmez."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 54,
    "id": "h2-s54",
    "section": "Komut yürütme",
    "topic": "Bağımlılık, sıra dışı yürütme ve spekülasyon",
    "title": "Geçici Sonuç Ne Demektir?",
    "blocks": [
      {
        "type": "text",
        "text": "Hesabın içeride yapılması ile program sonucunun kabul edilmesi farklıdır."
      },
      {
        "type": "bullet",
        "text": "Program: x > 0 ise y = 10, değilse y = 20."
      },
      {
        "type": "bullet",
        "text": "Tahmin: x pozitif çıkacak; y = 10 için geçici iş yapılır."
      },
      {
        "type": "bullet",
        "text": "Kontrol: Gerçek x değeri gelince koşul hesaplanır."
      },
      {
        "type": "bullet",
        "text": "Kesinleştirme: Yalnızca doğru yola ait uygun sonuç kabul edilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 55,
    "id": "h2-s55",
    "section": "Komut yürütme",
    "topic": "Bağımlılık, sıra dışı yürütme ve spekülasyon",
    "title": "Spekülasyon Örneğinin Sonucu",
    "blocks": [
      {
        "type": "text",
        "text": "Aynı tahmin, gerçek koşula göre kabul veya reddedilir."
      },
      {
        "type": "row",
        "cells": [
          "Gerçek x",
          "Koşul",
          "Geçici y = 10",
          "Kabul edilen y"
        ]
      },
      {
        "type": "row",
        "cells": [
          "5",
          "Doğru",
          "Uygunsa kabul",
          "10"
        ]
      },
      {
        "type": "row",
        "cells": [
          "−3",
          "Yanlış",
          "Bırakılır",
          "20"
        ]
      },
      {
        "type": "text",
        "text": "Önceden çalışmak, gerçek koşulu denetleme zorunluluğunu kaldırmaz."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 56,
    "id": "h2-s56",
    "section": "Komut yürütme",
    "topic": "Bağımlılık, sıra dışı yürütme ve spekülasyon",
    "title": "Üç Tekniği Birbirinden Ayırmak",
    "blocks": [
      {
        "type": "text",
        "text": "Her teknik komut akışındaki farklı bir soruya cevap verir."
      },
      {
        "type": "row",
        "cells": [
          "Teknik",
          "Cevap verdiği soru"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Dallanma tahmini",
          "Hangi komut yoluna devam etmeliyiz?"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bağımlılık analizi",
          "Hangi komutun kaynak değerleri hazır?"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Sıra dışı yürütme",
          "Bekleyen işin önüne hangi hazır iş alınabilir?"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Spekülatif yürütme",
          "Varsayım doğrulanmadan hangi işe başlanabilir?"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 57,
    "id": "h2-s57",
    "section": "Sistemleri karşılaştırma",
    "topic": "Ölçüm ve yorum",
    "title": "Performans Karşılaştırması Nasıl Adil Olur?",
    "blocks": [
      {
        "type": "text",
        "text": "Karşılaştırılan sistemler aynı işi, aynı girdiyle ve açıklanmış koşullarda yürütmelidir."
      },
      {
        "type": "bullet",
        "text": "1 · Aynı program ve algoritma kullanılmalıdır."
      },
      {
        "type": "bullet",
        "text": "2 · Isınma, önbellek durumu ve arka plan işleri kontrol edilmelidir."
      },
      {
        "type": "bullet",
        "text": "3 · Tek ölçüm yerine tekrarlı ölçüm ve dağılım incelenmelidir."
      },
      {
        "type": "bullet",
        "text": "4 · Sadece tepe donanım değeri değil, gerçek uygulama sonucu raporlanmalıdır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 58,
    "id": "h2-s58",
    "section": "Sistemleri karşılaştırma",
    "topic": "Ölçüm ve yorum",
    "title": "Yaygın Yanlış Yorumlar",
    "blocks": [
      {
        "type": "text",
        "text": "Donanım etiketleri performansın tamamını anlatmaz."
      },
      {
        "type": "row",
        "cells": [
          "Yanlış yorum",
          "Neden eksik?",
          "Doğru soru"
        ]
      },
      {
        "type": "text",
        "text": "Aynı iş yükündeki tamamlanma süresi"
      },
      {
        "type": "row",
        "cells": [
          "“GHz yüksekse her zaman hızlıdır.”",
          "Çevrim başına iş ve beklemeler değişir."
        ]
      },
      {
        "type": "text",
        "text": "nedir?"
      },
      {
        "type": "text",
        "text": "Paralelleşmeyen bölümler ve paylaşılan"
      },
      {
        "type": "row",
        "cells": [
          "“Çekirdek iki kat, hız iki kat.”",
          "Yazılım kaç işi bağımsız yürütebilir?"
        ]
      },
      {
        "type": "text",
        "text": "kaynaklar vardır."
      },
      {
        "type": "row",
        "cells": [
          "“RAM çoksa bilgisayar hızlıdır.”",
          "Kapasite, gecikme ve bant genişliği farklıdır.",
          "Çalışma kümesi belleğe sığıyor mu?"
        ]
      },
      {
        "type": "row",
        "cells": [
          "SSD veri beklemesini azaltır; hesaplama",
          "Toplam sürenin ne kadarı I/O"
        ]
      },
      {
        "type": "text",
        "text": "“SSD CPU’yu hızlandırır.”"
      },
      {
        "type": "row",
        "cells": [
          "birimi değişmez.",
          "beklemesidir?"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 59,
    "id": "h2-s59",
    "section": "Sistemleri karşılaştırma",
    "topic": "Ölçüm ve yorum",
    "title": "Bütünleşik Örnek: Video Düzenleme",
    "blocks": [
      {
        "type": "text",
        "text": "Bir video projesinin açılması, önizlenmesi ve dışa aktarılması farklı bileşenleri zorlayabilir."
      },
      {
        "type": "bullet",
        "text": "1. adım · Dosyaların açılması: depolama ve dosya erişimi öne çıkabilir."
      },
      {
        "type": "bullet",
        "text": "2. adım · Önizleme: CPU/GPU, bellek kapasitesi ve veri aktarımı birlikte önemlidir."
      },
      {
        "type": "bullet",
        "text": "3. adım · Efektler: algoritmaya göre CPU veya GPU hesaplaması belirleyici olabilir."
      },
      {
        "type": "bullet",
        "text": "4. adım · Dışa aktarma: kodlayıcı, paralellik, bellek ve depolama akışı birlikte sınır oluşturabilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 60,
    "id": "h2-s60",
    "section": "Sistemleri karşılaştırma",
    "topic": "Ölçüm ve yorum",
    "title": "Örnek: Üç Sistemi Yorumlayalım",
    "blocks": [
      {
        "type": "text",
        "text": "Aşağıdaki sistemleri tek bir “en hızlı” sıralamasına koymak yerine, uygun iş yükünü gerekçelendirelim."
      },
      {
        "type": "row",
        "cells": [
          "Sistem",
          "Belirgin özellik",
          "Olası güçlü yön",
          "Olası sınırlama"
        ]
      },
      {
        "type": "text",
        "text": "Yüksek tek çekirdek performansı, az"
      },
      {
        "type": "row",
        "cells": [
          "A",
          "Etkileşimli ve az paralel işler",
          "Yoğun çoklu iş yükü"
        ]
      },
      {
        "type": "text",
        "text": "çekirdek"
      },
      {
        "type": "text",
        "text": "Sıralı bölüm ve bellek"
      },
      {
        "type": "row",
        "cells": [
          "B",
          "Çok çekirdek, orta frekans",
          "Paralel iş hacmi"
        ]
      },
      {
        "type": "text",
        "text": "paylaşımı"
      },
      {
        "type": "row",
        "cells": [
          "C",
          "Güçlü GPU, hızlı depolama",
          "GPU uygun işler ve veri akışı",
          "GPU kullanmayan yazılım"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 61,
    "id": "h2-s61",
    "section": "Sistemleri karşılaştırma",
    "topic": "Ölçüm ve yorum",
    "title": "Örnek Çözüm: Nasıl Gerekçelendiririz?",
    "blocks": [
      {
        "type": "text",
        "text": "Performans yorumu dört adımda kurulabilir."
      },
      {
        "type": "bullet",
        "text": "1. adım · 1. İş yükünü ve başarı ölçütünü belirt."
      },
      {
        "type": "bullet",
        "text": "2. adım · 2. Verinin sistemde izlediği yolu tanımla."
      },
      {
        "type": "bullet",
        "text": "3. adım · 3. En uzun beklemeyi veya doygun kaynağı belirle."
      },
      {
        "type": "bullet",
        "text": "4. adım · 4. Önerilen iyileştirmenin bu sınıra gerçekten etki edip etmediğini açıkla."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 62,
    "id": "h2-s62",
    "section": "Sistemleri karşılaştırma",
    "topic": "Ölçüm ve yorum",
    "title": "Enerji Verimliliği de Performans Kararıdır",
    "blocks": [
      {
        "type": "text",
        "text": "Bir sistemin başarısı yalnızca işi ne kadar çabuk bitirdiğiyle ölçülmeyebilir."
      },
      {
        "type": "bullet",
        "text": "1 · Mobil sistemlerde pil ömrü önemlidir."
      },
      {
        "type": "bullet",
        "text": "2 · Veri merkezlerinde enerji ve soğutma maliyeti büyüktür."
      },
      {
        "type": "bullet",
        "text": "3 · Güç sınırı, işlemcinin sürdürülebilir frekansını etkileyebilir."
      },
      {
        "type": "bullet",
        "text": "4 · Performans/watt, belirli enerji bütçesinde tamamlanan yararlı işi ifade eder."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 63,
    "id": "h2-s63",
    "section": "Sistemleri karşılaştırma",
    "topic": "Ölçüm ve yorum",
    "title": "Doğruluk Performanstan Önce Gelir",
    "blocks": [
      {
        "type": "text",
        "text": "Performans teknikleri yalnızca programın gözlenebilir sonucunu koruduğu sürece geçerlidir."
      },
      {
        "type": "bullet",
        "text": "1 · Sıra dışı yürütme, mimari olarak doğru sonuç sırasını korumalıdır."
      },
      {
        "type": "bullet",
        "text": "2 · Spekülatif sonuçlar doğrulanmadan kalıcı mimari duruma aktarılmaz."
      },
      {
        "type": "bullet",
        "text": "3 · Önbellekler, farklı çekirdeklerin bellek görünümünü kurallarla uyumlu tutmalıdır."
      },
      {
        "type": "bullet",
        "text": "4 · Hata veya veri kaybı oluşturan hızlanma, geçerli bir performans iyileştirmesi değildir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 64,
    "id": "h2-s64",
    "section": "Sistemleri karşılaştırma",
    "topic": "Ölçüm ve yorum",
    "title": "Kavramları Birleştirelim",
    "blocks": [
      {
        "type": "text",
        "text": "Performans, iş yükünün sistem kaynaklarıyla etkileşiminden doğar."
      },
      {
        "type": "bullet",
        "text": "1. adım · CPU hesaplar; fakat komut ve veriyi bekleyebilir."
      },
      {
        "type": "bullet",
        "text": "2. adım · Yazmaç ve önbellek yakın veriyi hızlı sunar; RAM daha büyük çalışma alanı sağlar."
      },
      {
        "type": "bullet",
        "text": "3. adım · Depolama ve I/O, veriyi sisteme getirir ve sonuçları dışarı taşır."
      },
      {
        "type": "bullet",
        "text": "4. adım · Dallanma tahmini, sıra dışı yürütme ve spekülasyon işlem kaynaklarının boş kalmasını azaltmaya çalışır."
      },
      {
        "type": "bullet",
        "text": "5. adım · Güç, ısı, bağlantı ve bellek gecikmesi tasarımı sınırlar."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 2,
    "page": 65,
    "id": "h2-s65",
    "section": "Pekiştirme",
    "topic": "Tartışma soruları",
    "title": "Adil bir performans karşılaştırması kurmak",
    "blocks": [
      {
        "type": "bullet",
        "text": "Bir öğrenci “A bilgisayarı B bilgisayarından daha hızlıdır” diyor."
      },
      {
        "type": "text",
        "text": "Bu cümlenin değerlendirilebilir hale gelmesi için hangi bilgileri istemek gerekir?"
      }
    ],
    "note": "Ölçülebilir bir iddia için aynı iş yükünü, girdiyi, yazılım sürümünü, ölçütü ve çalışma koşullarını iste. Örneğin aynı dosyanın işlenme süresini aynı kalite ayarında karşılaştır.",
    "diagram": []
  },
  {
    "week": 2,
    "page": 66,
    "id": "h2-s66",
    "section": "Pekiştirme",
    "topic": "Tartışma soruları",
    "title": "Rapor örneğinde gecikme ile iş hacmini ayırmak",
    "blocks": [
      {
        "type": "bullet",
        "text": "Bir çağrı merkezi uygulamasında Sistem A tek bir raporu daha çabuk üretirken Sistem B aynı anda daha fazla kullanıcının raporunu tamamlıyor. Hangi sistem daha performanslıdır?"
      }
    ],
    "note": "Tek kullanıcının bekleme süresi öncelikliyse A, birim zamanda tamamlanan toplam rapor öncelikliyse B öne çıkar.",
    "diagram": []
  },
  {
    "week": 2,
    "page": 67,
    "id": "h2-s67",
    "section": "Pekiştirme",
    "topic": "Tartışma soruları",
    "title": "Tek iş parçacığına daha fazla çekirdek eklemek",
    "blocks": [
      {
        "type": "bullet",
        "text": "Tek iş parçacıklı bir programın çalıştığı bilgisayarda çekirdek sayısını iki katına çıkarmak neden programı iki kat hızlandırmayabilir?"
      }
    ],
    "note": "Tek iş parçacığının komut akışı kendiliğinden iki çekirdeğe bölünmez. Ek çekirdek başka işleri çalıştırabilir, fakat aynı işin hızlanması paralelleşebilir bölümlere bağlıdır.",
    "diagram": []
  },
  {
    "week": 2,
    "page": 68,
    "id": "h2-s68",
    "section": "Pekiştirme",
    "topic": "Tartışma soruları",
    "title": "Küçük bir işte GPU kullanmanın maliyeti",
    "blocks": [
      {
        "type": "bullet",
        "text": "Küçük bir dosyadaki yüz sayıyı toplamak için GPU kullanmak neden CPU’dan daha yavaş sonuç verebilir?"
      }
    ],
    "note": "Küçük hesapta veriyi GPU’ya hazırlamak ve işi başlatmak, paralel toplamanın kazancını aşabilir.",
    "diagram": []
  },
  {
    "week": 2,
    "page": 69,
    "id": "h2-s69",
    "section": "Pekiştirme",
    "topic": "Tartışma soruları",
    "title": "Dar bir bağlantıda NVMe SSD kullanmak",
    "blocks": [
      {
        "type": "bullet",
        "text": "Çok hızlı bir NVMe SSD daha dar bir bağlantı üzerinden sisteme bağlanırsa ne beklenir?"
      }
    ],
    "note": "Gerçek aktarım hızı dar bağlantının kapasitesine takılabilir. SSD’nin ilan edilen tepe değeri sistemin uçtan uca hızını tek başına vermez.",
    "diagram": []
  },
  {
    "week": 2,
    "page": 70,
    "id": "h2-s70",
    "section": "Pekiştirme",
    "topic": "Tartışma soruları",
    "title": "Uzun testlerde ısıl sınırları yorumlamak",
    "blocks": [
      {
        "type": "bullet",
        "text": "Bir dizüstü bilgisayar kısa testte hızlıyken uzun testte neden yavaşlayabilir?"
      }
    ],
    "note": "Isı biriktikçe işlemci güç veya sıcaklık sınırına ulaşabilir ve frekansı düşürebilir. Sürdürülebilir performansı uzun testle ölç.",
    "diagram": []
  },
  {
    "week": 2,
    "page": 71,
    "id": "h2-s71",
    "section": "Pekiştirme",
    "topic": "Tartışma soruları",
    "title": "Yanlış spekülasyondan sonra kalıcı durum",
    "blocks": [
      {
        "type": "bullet",
        "text": "İşlemci bir koşulun doğru olacağını tahmin edip sonraki işlemleri geçici olarak yürütüyor. Tahmin yanlışsa hangi sonuçlar kalıcı olmalıdır?"
      }
    ],
    "note": "Doğru yürütme yolunun mimari sonuçları kalıcı olmalıdır. Yanlış yolun geçici sonuçları mimari duruma yazılmadan iptal edilir.",
    "diagram": []
  },
  {
    "week": 3,
    "page": 2,
    "id": "h3-s2",
    "section": "Ölçüm ve birimler",
    "topic": "Ölçüm koşulları ve süre",
    "title": "Bu Haftanın Konusu",
    "blocks": [
      {
        "type": "text",
        "text": "Performansı sayısal olarak ifade etmek için süre, çevrim ve komut kavramlarını birlikte kullanacağız."
      },
      {
        "type": "bullet",
        "text": "Geçen süre ile CPU süresini ayıracağız."
      },
      {
        "type": "bullet",
        "text": "Saat frekansı ile çevrim süresi arasındaki ilişkiyi kuracağız."
      },
      {
        "type": "bullet",
        "text": "Komut sayısı, CPI (Cycles Per Instruction-komut başına ortalama saat çevrimi sayısı) ve"
      },
      {
        "type": "text",
        "text": "CPU zamanı hesaplayacağız."
      },
      {
        "type": "bullet",
        "text": "MIPS ve speedup ölçülerini yorumlayacağız."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 3,
    "id": "h3-s3",
    "section": "Ölçüm ve birimler",
    "topic": "Ölçüm koşulları ve süre",
    "title": "2. Haftadan 3. Haftaya",
    "blocks": [
      {
        "type": "text",
        "text": "Geçen hafta performansı etkileyen bileşenleri belirledik. Bu hafta aynı ilişkileri sayılarla ifade edeceğiz."
      },
      {
        "type": "bullet",
        "text": "CPU, bellek veya giriş/çıkış darboğazını önce ölçümle belirlemek gerekir."
      },
      {
        "type": "bullet",
        "text": "Saat frekansı, komut sayısı ve CPI birlikte CPU süresini oluşturur."
      },
      {
        "type": "bullet",
        "text": "Speedup, yapılan iyileştirmenin toplam süreye etkisini gösterir."
      },
      {
        "type": "bullet",
        "text": "Aynı sayı farklı iş yüklerinde farklı anlam taşıyabilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 4,
    "id": "h3-s4",
    "section": "Ölçüm ve birimler",
    "topic": "Ölçüm koşulları ve süre",
    "title": "Performans Ölçümünde İlk Soru",
    "blocks": [
      {
        "type": "text",
        "text": "“Ne kadar hızlı?” sorusundan önce hangi işin ve hangi sürenin ölçüldüğü belirlenmelidir."
      },
      {
        "type": "row",
        "cells": [
          "Kavram",
          "Tanım",
          "Örnek"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Geçen süre",
          "Başlangıçtan sonuca kadar gerçek bekleme",
          "Programın 8 saniyede bitmesi"
        ]
      },
      {
        "type": "row",
        "cells": [
          "CPU süresi",
          "CPU’nun program için etkin çalıştığı süre",
          "Programın CPU’da 5 saniye kullanması"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Yanıt süresi",
          "Tek bir isteğin tamamlanma süresi",
          "Bir sorgunun 40 ms’de cevaplanması"
        ]
      },
      {
        "type": "row",
        "cells": [
          "İş hacmi",
          "Birim zamanda tamamlanan iş",
          "Saniyede 200 istek"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 5,
    "id": "h3-s5",
    "section": "Ölçüm ve birimler",
    "topic": "Ölçüm koşulları ve süre",
    "title": "Ölçüm Koşulları",
    "blocks": [
      {
        "type": "text",
        "text": "Bir performans hesabı, karşılaştırılan iş ve koşullar aynı olduğunda anlamlıdır."
      },
      {
        "type": "bullet",
        "text": "Programın sürümü ve kullanılan algoritma belirtilir."
      },
      {
        "type": "bullet",
        "text": "Girdi büyüklüğü ve veri kümesi aynı tutulur."
      },
      {
        "type": "bullet",
        "text": "Donanım yapılandırması ile güç modu açıklanır."
      },
      {
        "type": "bullet",
        "text": "Ölçüm birkaç kez tekrarlanır ve sonuçların değişimi kontrol edilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 6,
    "id": "h3-s6",
    "section": "Ölçüm ve birimler",
    "topic": "Ölçüm koşulları ve süre",
    "title": "Geçen Süre ve CPU Süresi",
    "blocks": [
      {
        "type": "text",
        "text": "Kullanıcının beklediği toplam süre ile işlemcinin programa ayırdığı süre aynı olmayabilir."
      },
      {
        "type": "row",
        "cells": [
          "Süre türü",
          "İçerik",
          "Kullanım"
        ]
      },
      {
        "type": "row",
        "cells": [
          "CPU çalışması, bellek ve I/O beklemeleri, işletim",
          "Kullanıcının deneyimlediği"
        ]
      },
      {
        "type": "text",
        "text": "Geçen süre"
      },
      {
        "type": "row",
        "cells": [
          "sistemi etkileri",
          "toplam süre"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Kullanıcı CPU süresi",
          "Programın kullanıcı kodunu yürüttüğü süre",
          "Programın işlemci çalışması"
        ]
      },
      {
        "type": "text",
        "text": "Sistem çağrılarının işlemci"
      },
      {
        "type": "row",
        "cells": [
          "Sistem CPU süresi",
          "İşletim sisteminin program adına çalıştığı süre"
        ]
      },
      {
        "type": "text",
        "text": "maliyeti"
      },
      {
        "type": "row",
        "cells": [
          "Toplam CPU süresi",
          "Kullanıcı CPU süresi + sistem CPU süresi",
          "CPU performans eşitliği"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 7,
    "id": "h3-s7",
    "section": "Ölçüm ve birimler",
    "topic": "Ölçüm koşulları ve süre",
    "title": "Performans ve Yürütme Süresi",
    "blocks": [
      {
        "type": "text",
        "text": "Aynı işi daha kısa sürede tamamlayan sistemin performansı daha yüksektir."
      },
      {
        "type": "bullet",
        "text": "Performans = 1 / yürütme süresi"
      },
      {
        "type": "bullet",
        "text": "Süre azaldığında performans artar."
      },
      {
        "type": "bullet",
        "text": "Aynı program ve aynı iş yükü karşılaştırılmalıdır."
      },
      {
        "type": "bullet",
        "text": "Performans oranı, sürelerin ters oranıdır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 8,
    "id": "h3-s8",
    "section": "Ölçüm ve birimler",
    "topic": "Ölçüm koşulları ve süre",
    "title": "Performans Oranı Örneği",
    "blocks": [
      {
        "type": "text",
        "text": "A sistemi işi 4 saniyede, B sistemi 10 saniyede tamamlıyor."
      },
      {
        "type": "row",
        "cells": [
          "Büyüklük",
          "Hesap",
          "Sonuç"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Performans_A",
          "1/4",
          "0,25 iş/s"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Performans_B",
          "1 / 10",
          "0,10 iş/s"
        ]
      },
      {
        "type": "row",
        "cells": [
          "A’nın B’ye oranı",
          "(1/4) / (1/10) = 10/4",
          "2,5"
        ]
      },
      {
        "type": "text",
        "text": "Sonuç: A sistemi, bu iş yükünde B sisteminden 2,5 kat daha yüksek performans gösterir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 9,
    "id": "h3-s9",
    "section": "Ölçüm ve birimler",
    "topic": "Hızlanma ve süre azalması",
    "title": "Speedup Kavramı",
    "blocks": [
      {
        "type": "text",
        "text": "Speedup, bir iyileştirmeden sonra aynı işin kaç kat hızlandığını gösterir."
      },
      {
        "type": "bullet",
        "text": "Speedup = eski yürütme süresi / yeni yürütme süresi"
      },
      {
        "type": "bullet",
        "text": "Speedup > 1 ise sistem hızlanmıştır."
      },
      {
        "type": "bullet",
        "text": "Speedup = 1 ise süre değişmemiştir."
      },
      {
        "type": "bullet",
        "text": "Speedup < 1 ise yeni durum daha yavaştır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 10,
    "id": "h3-s10",
    "section": "Ölçüm ve birimler",
    "topic": "Hızlanma ve süre azalması",
    "title": "Speedup Örneği",
    "blocks": [
      {
        "type": "text",
        "text": "Bir programın süresi yapılan iyileştirmeyle 15 saniyeden 6 saniyeye düşüyor."
      },
      {
        "type": "row",
        "cells": [
          "İstenen",
          "Hesap",
          "Sonuç"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Speedup",
          "15 / 6",
          "2,5 kat"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Yeni sürenin eskiye oranı",
          "6 / 15",
          "0,40"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Süre azalması",
          "(15 - 6) / 15",
          "%60"
        ]
      },
      {
        "type": "text",
        "text": "Aynı değişim üç farklı biçimde ifade edilebilir; kavramların anlamı birbirine karıştırılmamalıdır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 11,
    "id": "h3-s11",
    "section": "Ölçüm ve birimler",
    "topic": "Hızlanma ve süre azalması",
    "title": "Speedup ve Süre Azalması Farklıdır",
    "blocks": [
      {
        "type": "text",
        "text": "Hızlanma katsayısı ile süredeki yüzde azalma aynı sayı değildir."
      },
      {
        "type": "row",
        "cells": [
          "Büyüklük",
          "Formül",
          "Örnek: 20 s → 8 s"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Speedup",
          "Eski süre / Yeni süre",
          "20 / 8 = 2,5 kat"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Yeni süre oranı",
          "Yeni süre / Eski süre",
          "8 / 20 = %40"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Süre azalması",
          "(Eski - Yeni) / Eski",
          "12 / 20 = %60"
        ]
      },
      {
        "type": "text",
        "text": "2,5 kat hızlanma, sürenin %60 azalması demektir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 12,
    "id": "h3-s12",
    "section": "Ölçüm ve birimler",
    "topic": "Frekans ve çevrim süresi",
    "title": "Birimler: Hz, MHz ve GHz",
    "blocks": [
      {
        "type": "text",
        "text": "Frekans birimi, saniyedeki çevrim sayısını gösterir."
      },
      {
        "type": "row",
        "cells": [
          "Birim",
          "Değer",
          "Anlam"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1 Hz",
          "1 çevrim/s",
          "Saniyede bir çevrim"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1 kHz",
          "10³ Hz",
          "Saniyede bin çevrim"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1 MHz",
          "10⁶ Hz",
          "Saniyede bir milyon çevrim"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1 GHz",
          "10⁹ Hz",
          "Saniyede bir milyar çevrim"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 13,
    "id": "h3-s13",
    "section": "Ölçüm ve birimler",
    "topic": "Frekans ve çevrim süresi",
    "title": "Saat Frekansı",
    "blocks": [
      {
        "type": "text",
        "text": "Saat frekansı, işlemci saatinin bir saniyedeki çevrim sayısıdır."
      },
      {
        "type": "bullet",
        "text": "1 Hz = saniyede 1 çevrim"
      },
      {
        "type": "bullet",
        "text": "1 MHz = saniyede 10⁶ çevrim"
      },
      {
        "type": "bullet",
        "text": "1 GHz = saniyede 10⁹ çevrim"
      },
      {
        "type": "bullet",
        "text": "Frekans, doğrudan saniyedeki komut sayısı değildir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 14,
    "id": "h3-s14",
    "section": "Ölçüm ve birimler",
    "topic": "Frekans ve çevrim süresi",
    "title": "Saat Çevrim Süresi",
    "blocks": [
      {
        "type": "text",
        "text": "Çevrim süresi, tek bir saat çevriminin ne kadar sürdüğünü gösterir."
      },
      {
        "type": "bullet",
        "text": "Çevrim süresi = 1 / frekans"
      },
      {
        "type": "bullet",
        "text": "Frekans arttıkça çevrim süresi azalır."
      },
      {
        "type": "bullet",
        "text": "1 GHz için çevrim süresi 1 ns’dir."
      },
      {
        "type": "bullet",
        "text": "2 GHz için çevrim süresi 0,5 ns’dir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 15,
    "id": "h3-s15",
    "section": "Ölçüm ve birimler",
    "topic": "Frekans ve çevrim süresi",
    "title": "Birim Dönüşümleri",
    "blocks": [
      {
        "type": "text",
        "text": "Hesaplamadan önce frekans ve zaman birimlerini ortak düzene çevirin."
      },
      {
        "type": "row",
        "cells": [
          "Büyüklük",
          "Dönüşüm",
          "Karşılığı"
        ]
      },
      {
        "type": "row",
        "cells": [
          "kHz",
          "10³ Hz",
          "bin çevrim/s"
        ]
      },
      {
        "type": "row",
        "cells": [
          "MHz",
          "10⁶ Hz",
          "milyon çevrim/s"
        ]
      },
      {
        "type": "row",
        "cells": [
          "GHz",
          "10⁹ Hz",
          "milyar çevrim/s"
        ]
      },
      {
        "type": "row",
        "cells": [
          "ms",
          "10⁻³ s",
          "saniyenin binde biri"
        ]
      },
      {
        "type": "row",
        "cells": [
          "µs",
          "10⁻⁶ s",
          "saniyenin milyonda biri"
        ]
      },
      {
        "type": "row",
        "cells": [
          "ns",
          "10⁻⁹ s",
          "saniyenin milyarda biri"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 16,
    "id": "h3-s16",
    "section": "Ölçüm ve birimler",
    "topic": "Frekans ve çevrim süresi",
    "title": "Çevrim Süresi Örneği",
    "blocks": [
      {
        "type": "text",
        "text": "Saat frekansı 2,5 GHz olan işlemcinin çevrim süresini bulunuz."
      },
      {
        "type": "row",
        "cells": [
          "Adım",
          "İşlem"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Frekansı yaz",
          "f = 2,5 × 10⁹ Hz"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Tersini al",
          "Tçevrim = 1 / f"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Hesapla",
          "1 / (2,5 × 10⁹) = 0,4 × 10⁻⁹ s"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Sonucu dönüştür",
          "Tçevrim = 0,4 ns"
        ]
      },
      {
        "type": "text",
        "text": "Kontrol: 2,5 GHz, saniyede 2,5 milyar çevrim olduğuna göre tek çevrim 1 ns’den kısa olmalıdır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 17,
    "id": "h3-s17",
    "section": "Ölçüm ve birimler",
    "topic": "Frekans ve çevrim süresi",
    "title": "Frekans ve Çevrim Süresi İçin Hızlı Kontrol",
    "blocks": [
      {
        "type": "text",
        "text": "Frekans arttığında çevrim süresi azalır. İki büyüklük birbirinin tersidir."
      },
      {
        "type": "row",
        "cells": [
          "Frekans",
          "Çevrim süresi"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1 GHz",
          "1 ns"
        ]
      },
      {
        "type": "row",
        "cells": [
          "2 GHz",
          "0,5 ns"
        ]
      },
      {
        "type": "row",
        "cells": [
          "2,5 GHz",
          "0,4 ns"
        ]
      },
      {
        "type": "row",
        "cells": [
          "4 GHz",
          "0,25 ns"
        ]
      },
      {
        "type": "text",
        "text": "Kontrol: GHz cinsinden frekans × ns cinsinden çevrim süresi = 1"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 18,
    "id": "h3-s18",
    "section": "Ölçüm ve birimler",
    "topic": "Frekans ve çevrim süresi",
    "title": "Birim Dönüşümünde Sık Hata",
    "blocks": [
      {
        "type": "text",
        "text": "Frekans ile süreyi aynı üs sisteminde yazmadan işlem yapmak yanlış sonuç üretir."
      },
      {
        "type": "bullet",
        "text": "3 GHz değeri 3×10⁹ Hz olarak yazılabilir."
      },
      {
        "type": "bullet",
        "text": "0,5 ns değeri 0,5×10⁻⁹ saniyedir."
      },
      {
        "type": "bullet",
        "text": "Milyon komut 10⁶, milyar çevrim 10⁹ ile gösterilir."
      },
      {
        "type": "bullet",
        "text": "Sonuç birimi, işlem tamamlanmadan önce kontrol edilir."
      },
      {
        "type": "text",
        "text": "Çevrim / (çevrim/saniye) = saniye"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 19,
    "id": "h3-s19",
    "section": "CPU performans denklemi",
    "topic": "Komut sayısı, çevrim ve CPU süresi",
    "title": "Komut Sayısı Neyi Gösterir?",
    "blocks": [
      {
        "type": "text",
        "text": "Komut sayısı, programın dinamik olarak yürüttüğü makine komutlarının toplamıdır."
      },
      {
        "type": "bullet",
        "text": "Kaynak kod satırı ile makine komutu aynı değildir."
      },
      {
        "type": "bullet",
        "text": "Algoritma, komut kümesi ve derleyici komut sayısını değiştirebilir."
      },
      {
        "type": "bullet",
        "text": "Döngü tekrarları dinamik komut sayısını artırır."
      },
      {
        "type": "bullet",
        "text": "Daha az komut her zaman daha kısa süre anlamına gelmez, CPI de değişebilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 20,
    "id": "h3-s20",
    "section": "CPU performans denklemi",
    "topic": "Komut sayısı, çevrim ve CPU süresi",
    "title": "Toplam Saat Çevrimi",
    "blocks": [
      {
        "type": "text",
        "text": "Programın kullandığı toplam çevrim sayısı, frekans ile CPU süresinin çarpımıdır."
      },
      {
        "type": "bullet",
        "text": "Toplam çevrim = CPU süresi × saat frekansı"
      },
      {
        "type": "bullet",
        "text": "CPU süresi = toplam çevrim / saat frekansı"
      },
      {
        "type": "bullet",
        "text": "Birim kontrolü: saniye × çevrim/saniye = çevrim"
      },
      {
        "type": "bullet",
        "text": "Bekleme çevrimleri toplam sayıya dahil olabilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 21,
    "id": "h3-s21",
    "section": "CPU performans denklemi",
    "topic": "Komut sayısı, çevrim ve CPU süresi",
    "title": "CPU Performans Eşitliği",
    "blocks": [
      {
        "type": "text",
        "text": "CPU süresi, komut sayısı ve komut başına çevrim sayısıyla hesaplanabilir."
      },
      {
        "type": "bullet",
        "text": "CPU süresi = Komut sayısı × CPI × Çevrim süresi"
      },
      {
        "type": "bullet",
        "text": "CPU süresi = (Komut sayısı × CPI) / Frekans"
      },
      {
        "type": "bullet",
        "text": "Toplam çevrim = Komut sayısı × CPI"
      },
      {
        "type": "bullet",
        "text": "CPI, komut başına ortalama saat çevrimidir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 22,
    "id": "h3-s22",
    "section": "CPU performans denklemi",
    "topic": "Komut sayısı, çevrim ve CPU süresi",
    "title": "CPU Performans Eşitliğinde Boyut Analizi",
    "blocks": [
      {
        "type": "text",
        "text": "Eşitliğin her parçası birimle yazıldığında sonuç kendiliğinden saniyeye dönüşür."
      },
      {
        "type": "row",
        "cells": [
          "Büyüklük",
          "Birim"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Komut sayısı",
          "komut"
        ]
      },
      {
        "type": "row",
        "cells": [
          "CPI",
          "çevrim / komut"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Frekans",
          "çevrim / saniye"
        ]
      },
      {
        "type": "row",
        "cells": [
          "CPU süresi",
          "saniye"
        ]
      },
      {
        "type": "text",
        "text": "komut × (çevrim/komut) ÷ (çevrim/saniye) = saniye"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 23,
    "id": "h3-s23",
    "section": "CPU performans denklemi",
    "topic": "Komut sayısı, çevrim ve CPU süresi",
    "title": "CPU Süresi Örneği",
    "blocks": [
      {
        "type": "text",
        "text": "Bir program 600 milyon komut yürütüyor. CPI = 1,5 ve frekans = 3 GHz."
      },
      {
        "type": "row",
        "cells": [
          "Adım",
          "Hesap",
          "Sonuç"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Toplam çevrim",
          "600×10⁶ × 1,5",
          "900×10⁶ çevrim"
        ]
      },
      {
        "type": "row",
        "cells": [
          "CPU süresi",
          "900×10⁶ / 3×10⁹",
          "0,3 saniye"
        ]
      },
      {
        "type": "text",
        "text": "CPU süresi = (Komut sayısı × CPI) / Frekans = 0,3 s"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 24,
    "id": "h3-s24",
    "section": "CPU performans denklemi",
    "topic": "Komut sayısı, çevrim ve CPU süresi",
    "title": "Frekans Bulma Örneği",
    "blocks": [
      {
        "type": "text",
        "text": "800 milyon komut, CPI = 2 ve hedef CPU süresi = 0,5 saniye."
      },
      {
        "type": "row",
        "cells": [
          "Adım",
          "Hesap",
          "Sonuç"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Toplam çevrim",
          "800×10⁶ × 2",
          "1,6×10⁹ çevrim"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Gerekli frekans",
          "1,6×10⁹ / 0,5",
          "3,2×10⁹ Hz"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Birim dönüşümü",
          "3,2×10⁹ Hz",
          "3,2 GHz"
        ]
      },
      {
        "type": "text",
        "text": "Varsayım: Komut sayısı ve CPI, frekans değiştiğinde aynı kalmaktadır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 25,
    "id": "h3-s25",
    "section": "CPU performans denklemi",
    "topic": "Komut sayısı, çevrim ve CPU süresi",
    "title": "Bilinmeyen Komut Sayısını Bulmak",
    "blocks": [
      {
        "type": "text",
        "text": "CPU performans eşitliği, yalnızca süreyi değil bilinmeyen diğer büyüklükleri de bulmak için düzenlenebilir."
      },
      {
        "type": "bullet",
        "text": "Komut sayısı = CPU süresi × Frekans / CPI"
      },
      {
        "type": "bullet",
        "text": "CPI = CPU süresi × Frekans / Komut sayısı"
      },
      {
        "type": "bullet",
        "text": "Frekans = Komut sayısı × CPI / CPU süresi"
      },
      {
        "type": "bullet",
        "text": "Her düzenlemede birimler ayrıca kontrol edilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 26,
    "id": "h3-s26",
    "section": "CPU performans denklemi",
    "topic": "Komut sayısı, çevrim ve CPU süresi",
    "title": "Örnek: Komut Sayısını Bulma",
    "blocks": [
      {
        "type": "text",
        "text": "CPU süresi 0,4 s, frekans 2,5 GHz ve CPI 1,25’tir."
      },
      {
        "type": "row",
        "cells": [
          "Adım",
          "Hesap",
          "Sonuç"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Toplam çevrim",
          "0,4 × 2,5×10⁹",
          "1,0×10⁹ çevrim"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Komut sayısı",
          "1,0×10⁹ / 1,25",
          "800×10⁶ komut"
        ]
      },
      {
        "type": "text",
        "text": "Program 800 milyon komut yürütmüştür."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 27,
    "id": "h3-s27",
    "section": "CPU performans denklemi",
    "topic": "CPI, komut karışımı ve derleyici",
    "title": "CPI Nedir?",
    "blocks": [
      {
        "type": "text",
        "text": "CPI, yürütülen bir komut için kullanılan ortalama saat çevrimi sayısıdır."
      },
      {
        "type": "bullet",
        "text": "CPI = toplam saat çevrimi / komut sayısı"
      },
      {
        "type": "bullet",
        "text": "CPI yalnızca işlemciye ait sabit bir sayı değildir."
      },
      {
        "type": "bullet",
        "text": "Komut türlerinin dağılımı ortalama CPI’yi değiştirir."
      },
      {
        "type": "bullet",
        "text": "Önbellek kaçırmaları ve beklemeler CPI’yi artırabilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 28,
    "id": "h3-s28",
    "section": "CPU performans denklemi",
    "topic": "CPI, komut karışımı ve derleyici",
    "title": "Ağırlıklı Ortalama CPI",
    "blocks": [
      {
        "type": "text",
        "text": "Farklı komut sınıfları için ortalama CPI, kullanım oranlarıyla ağırlıklandırılır."
      },
      {
        "type": "bullet",
        "text": "CPIortalama = Σ (komut oranıᵢ × CPIᵢ)"
      },
      {
        "type": "bullet",
        "text": "Komut oranlarının toplamı 1 veya %100 olmalıdır."
      },
      {
        "type": "bullet",
        "text": "Yüksek oranlı komut sınıfındaki iyileştirme daha fazla etki yaratır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 29,
    "id": "h3-s29",
    "section": "CPU performans denklemi",
    "topic": "CPI, komut karışımı ve derleyici",
    "title": "Ağırlıklı CPI Örneği",
    "blocks": [
      {
        "type": "text",
        "text": "Komutların %50’si CPI 1, %30’u CPI 2 ve %20’si CPI 4 gerektiriyor."
      },
      {
        "type": "row",
        "cells": [
          "Komut sınıfı",
          "Oran",
          "CPI",
          "Katkı"
        ]
      },
      {
        "type": "row",
        "cells": [
          "A",
          "0,50",
          "1",
          "0,50"
        ]
      },
      {
        "type": "row",
        "cells": [
          "B",
          "0,30",
          "2",
          "0,60"
        ]
      },
      {
        "type": "row",
        "cells": [
          "C",
          "0,20",
          "4",
          "0,80"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Toplam",
          "1,00",
          "-",
          "1,90"
        ]
      },
      {
        "type": "text",
        "text": "Ortalama CPI = 1,90 çevrim/komut"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 30,
    "id": "h3-s30",
    "section": "CPU performans denklemi",
    "topic": "CPI, komut karışımı ve derleyici",
    "title": "Komut Karışımı Değişirse CPI Değişir",
    "blocks": [
      {
        "type": "text",
        "text": "Aynı işlemci, farklı programlarda farklı ortalama CPI gösterebilir."
      },
      {
        "type": "row",
        "cells": [
          "Program",
          "CPI=1 komut oranı",
          "CPI=4 komut oranı",
          "Ortalama CPI"
        ]
      },
      {
        "type": "row",
        "cells": [
          "P",
          "%80",
          "%20",
          "0,8×1 + 0,2×4 = 1,6"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Q",
          "%40",
          "%60",
          "0,4×1 + 0,6×4 = 2,8"
        ]
      },
      {
        "type": "text",
        "text": "Aynı frekansta ve aynı komut sayısında P daha kısa CPU süresine sahiptir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 31,
    "id": "h3-s31",
    "section": "CPU performans denklemi",
    "topic": "CPI, komut karışımı ve derleyici",
    "title": "Komut Sayısı da Değişebilir",
    "blocks": [
      {
        "type": "text",
        "text": "Daha az komut kullanan program, daha yüksek CPI’ye rağmen hızlı olabilir."
      },
      {
        "type": "row",
        "cells": [
          "Sistem",
          "Komut sayısı",
          "CPI",
          "Toplam çevrim"
        ]
      },
      {
        "type": "row",
        "cells": [
          "A",
          "1,0×10⁹",
          "1,2",
          "1,2×10⁹"
        ]
      },
      {
        "type": "row",
        "cells": [
          "B",
          "0,7×10⁹",
          "1,5",
          "1,05×10⁹"
        ]
      },
      {
        "type": "text",
        "text": "Frekanslar eşitse B daha kısa CPU süresine sahiptir; yalnızca CPI’ye bakmak yeterli değildir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 32,
    "id": "h3-s32",
    "section": "CPU performans denklemi",
    "topic": "CPI, komut karışımı ve derleyici",
    "title": "İki İşlemciyi Karşılaştırma",
    "blocks": [
      {
        "type": "text",
        "text": "Aynı program iki işlemcide farklı komut sayısı, CPI ve frekansla çalışabilir."
      },
      {
        "type": "row",
        "cells": [
          "İşlemci",
          "Komut sayısı",
          "CPI",
          "Frekans",
          "CPU süresi"
        ]
      },
      {
        "type": "row",
        "cells": [
          "A",
          "1,0×10⁹",
          "1,2",
          "3 GHz",
          "0,40 s"
        ]
      },
      {
        "type": "row",
        "cells": [
          "B",
          "0,8×10⁹",
          "1,5",
          "2,5 GHz",
          "0,48 s"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 33,
    "id": "h3-s33",
    "section": "CPU performans denklemi",
    "topic": "CPI, komut karışımı ve derleyici",
    "title": "İki İşlemci Örneğinin Çözümü",
    "blocks": [
      {
        "type": "text",
        "text": "A: 1 milyar komut, CPI 1,2, 3 GHz. B: 0,8 milyar komut, CPI 1,5, 2,5 GHz."
      },
      {
        "type": "row",
        "cells": [
          "Sistem",
          "CPU süresi",
          "Sonuç"
        ]
      },
      {
        "type": "row",
        "cells": [
          "A",
          "1×10⁹ × 1,2 / 3×10⁹",
          "0,40 s"
        ]
      },
      {
        "type": "row",
        "cells": [
          "B",
          "0,8×10⁹ × 1,5 / 2,5×10⁹",
          "0,48 s"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Performans oranı",
          "0,48 / 0,40",
          "A, 1,2 kat hızlı"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 34,
    "id": "h3-s34",
    "section": "CPU performans denklemi",
    "topic": "CPI, komut karışımı ve derleyici",
    "title": "Derleyici Performansı Nasıl Değiştirir?",
    "blocks": [
      {
        "type": "text",
        "text": "Derleyici, aynı kaynak program için komut sayısını ve komut karışımını değiştirebilir."
      },
      {
        "type": "bullet",
        "text": "Optimizasyon bazı işlemleri kaldırabilir veya birleştirebilir."
      },
      {
        "type": "bullet",
        "text": "Vektör komutları daha az komutla daha çok veri işleyebilir."
      },
      {
        "type": "bullet",
        "text": "Farklı komut seçimi ortalama CPI değerini değiştirebilir."
      },
      {
        "type": "bullet",
        "text": "Doğru karşılaştırma, oluşan programın gerçek CPU süresine dayanır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 35,
    "id": "h3-s35",
    "section": "Performans ölçütleri",
    "topic": "MIPS, FLOPS ve yürütme süresi",
    "title": "MIPS Ölçütü",
    "blocks": [
      {
        "type": "text",
        "text": "MIPS, saniyede yürütülen milyon komut sayısını ifade eder."
      },
      {
        "type": "bullet",
        "text": "MIPS = Komut sayısı / (CPU süresi × 10⁶)"
      },
      {
        "type": "bullet",
        "text": "MIPS = Frekans / (CPI × 10⁶)"
      },
      {
        "type": "bullet",
        "text": "Büyük MIPS değeri aynı koşullarda daha çok komut/saniye demektir."
      },
      {
        "type": "bullet",
        "text": "Farklı komut setleri ve programlar arasında tek başına güvenilir değildir."
      }
    ],
    "note": "Örnek. Frekans 2 GHz = 2 × 10⁹ çevrim/s ve CPI 1,25 çevrim/komut olsun. (2 × 10⁹ / 1,25) / 10⁶ = 1600 MIPS. Komut sayısı ve frekans bilinse bile süre veya CPI gibi bir ek bilgi gerekir.",
    "diagram": []
  },
  {
    "week": 3,
    "page": 36,
    "id": "h3-s36",
    "section": "Performans ölçütleri",
    "topic": "MIPS, FLOPS ve yürütme süresi",
    "title": "MIPS Örneği",
    "blocks": [
      {
        "type": "text",
        "text": "3 GHz işlemcide bir programın ortalama CPI değeri 1,5’tir."
      },
      {
        "type": "row",
        "cells": [
          "Yöntem",
          "Hesap",
          "Sonuç"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Frekans ve CPI",
          "3×10⁹ / (1,5×10⁶)",
          "2000 MIPS"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Kontrol",
          "Saniyede 2×10⁹ komut",
          "2000 milyon komut/s"
        ]
      },
      {
        "type": "text",
        "text": "Sonuç yalnızca belirtilen CPI ve iş yükü için geçerlidir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 37,
    "id": "h3-s37",
    "section": "Performans ölçütleri",
    "topic": "MIPS, FLOPS ve yürütme süresi",
    "title": "MIPS Neden Yanıltıcı Olabilir?",
    "blocks": [
      {
        "type": "text",
        "text": "Komut sayısı, komutun yaptığı iş miktarını tek başına göstermez."
      },
      {
        "type": "row",
        "cells": [
          "Sorun",
          "Açıklama"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Komut seti farkı",
          "Aynı iş farklı sayıda ve güçte komut gerektirebilir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Program bağımlılığı",
          "Komut karışımı ve CPI programa göre değişir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Derleyici etkisi",
          "Aynı kaynak kod farklı komut dizilerine dönüşebilir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bellek etkisi",
          "Beklemeler gerçek süreyi değiştirir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Yüksek MIPS yanılgısı",
          "Daha çok basit komut, daha kısa süre demek olmayabilir"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 38,
    "id": "h3-s38",
    "section": "Performans ölçütleri",
    "topic": "MIPS, FLOPS ve yürütme süresi",
    "title": "MIPS Karşılaştırmasına Bir Karşı Örnek",
    "blocks": [
      {
        "type": "text",
        "text": "İşlemci X daha yüksek MIPS değerine sahipken programı daha geç bitirebilir."
      },
      {
        "type": "row",
        "cells": [
          "Sistem",
          "Komut sayısı",
          "CPU süresi",
          "MIPS"
        ]
      },
      {
        "type": "row",
        "cells": [
          "X",
          "2 milyar",
          "1s",
          "2000"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Y",
          "0,8 milyar",
          "0,5 s",
          "1600"
        ]
      },
      {
        "type": "text",
        "text": "Y daha düşük MIPS değerine rağmen programı 2 kat daha kısa sürede tamamlar."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 39,
    "id": "h3-s39",
    "section": "Performans ölçütleri",
    "topic": "MIPS, FLOPS ve yürütme süresi",
    "title": "FLOPS ve MFLOPS",
    "blocks": [
      {
        "type": "text",
        "text": "Bilimsel hesaplamalarda kayan noktalı işlem sayısı, komut sayısından daha anlamlı olabilir."
      },
      {
        "type": "bullet",
        "text": "FLOPS, saniyedeki kayan noktalı işlem sayısını ifade eder."
      },
      {
        "type": "bullet",
        "text": "MFLOPS 10⁶, GFLOPS 10⁹ ve TFLOPS 10¹² işlem/saniyedir."
      },
      {
        "type": "bullet",
        "text": "Teorik tepe değer ile uygulamanın sürdürülen değeri farklıdır."
      },
      {
        "type": "bullet",
        "text": "İşlem türü ve hassasiyet belirtilmeden tek FLOPS değeri eksik kalır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 40,
    "id": "h3-s40",
    "section": "Performans ölçütleri",
    "topic": "MIPS, FLOPS ve yürütme süresi",
    "title": "Yürütme Süresi Temel Ölçüttür",
    "blocks": [
      {
        "type": "text",
        "text": "Aynı işi doğru biçimde tamamlayan sistemler için en doğrudan ölçüt tamamlanma süresidir."
      },
      {
        "type": "bullet",
        "text": "Komut sayısı, CPI ve frekans süreyi açıklayan bileşenlerdir."
      },
      {
        "type": "bullet",
        "text": "MIPS ve FLOPS ancak uygun iş yükü bağlamında yorumlanır."
      },
      {
        "type": "bullet",
        "text": "Son kullanıcı açısından geçen süre ayrıca raporlanabilir."
      },
      {
        "type": "bullet",
        "text": "Karşılaştırmanın kapsamı kullanılan programla sınırlıdır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 41,
    "id": "h3-s41",
    "section": "Kısmi iyileştirme",
    "topic": "Amdahl yasası",
    "title": "Amdahl Yasası: Kısmi İyileştirmenin Sınırı",
    "blocks": [
      {
        "type": "text",
        "text": "Programın yalnızca bir bölümü hızlanıyorsa toplam hızlanma, hızlanmayan bölüm tarafından sınırlanır."
      },
      {
        "type": "bullet",
        "text": "P, toplam sürenin iyileştirilen bölüm oranıdır."
      },
      {
        "type": "bullet",
        "text": "S, bu bölümün kendi içindeki hızlanma katsayısıdır."
      },
      {
        "type": "bullet",
        "text": "Toplam speedup = 1 / [(1 - P) + P/S]"
      },
      {
        "type": "bullet",
        "text": "P küçükse bölüm çok hızlansa bile toplam kazanç sınırlı kalır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 42,
    "id": "h3-s42",
    "section": "Kısmi iyileştirme",
    "topic": "Amdahl yasası",
    "title": "Amdahl Örneği",
    "blocks": [
      {
        "type": "text",
        "text": "Program süresinin %40’ı dört kat hızlandırılıyor."
      },
      {
        "type": "row",
        "cells": [
          "Adım",
          "Hesap",
          "Sonuç"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Hızlanmayan bölüm",
          "1 - 0,40",
          "0,60"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Yeni hızlanan bölüm",
          "0,40 / 4",
          "0,10"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Yeni toplam oran",
          "0,60 + 0,10",
          "0,70"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Toplam speedup",
          "1 / 0,70",
          "1,43 kat"
        ]
      },
      {
        "type": "text",
        "text": "Bir bölüm 4 kat hızlansa da bütün program yalnızca yaklaşık 1,43 kat hızlanır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 43,
    "id": "h3-s43",
    "section": "Kısmi iyileştirme",
    "topic": "Amdahl yasası",
    "title": "Amdahl Yasasında Üst Sınır",
    "blocks": [
      {
        "type": "text",
        "text": "İyileştirilen bölüm sonsuz hızlansa bile hızlanmayan bölüm kalır."
      },
      {
        "type": "row",
        "cells": [
          "İyileştirilen oran P",
          "En büyük speedup: 1/(1-P)"
        ]
      },
      {
        "type": "row",
        "cells": [
          "%20",
          "1,25 kat"
        ]
      },
      {
        "type": "row",
        "cells": [
          "%50",
          "2 kat"
        ]
      },
      {
        "type": "row",
        "cells": [
          "%80",
          "5 kat"
        ]
      },
      {
        "type": "row",
        "cells": [
          "%95",
          "20 kat"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 44,
    "id": "h3-s44",
    "section": "Kısmi iyileştirme",
    "topic": "Amdahl yasası",
    "title": "Örnek: Hangi Bölüm İyileştirilmeli?",
    "blocks": [
      {
        "type": "text",
        "text": "Bir programda CPU hesaplama %30, bellek bekleme %50, diğer işlemler %20 paya sahiptir."
      },
      {
        "type": "row",
        "cells": [
          "Seçenek",
          "Bölüm hızlanması",
          "Toplam speedup"
        ]
      },
      {
        "type": "row",
        "cells": [
          "CPU’yu 3 kat hızlandır",
          "P=0,30, S=3",
          "1 / (0,70 + 0,10) = 1,25"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Belleği 2 kat hızlandır",
          "P=0,50, S=2",
          "1 / (0,50 + 0,25) = 1,33"
        ]
      },
      {
        "type": "text",
        "text": "Daha küçük bölümde daha büyük yerel hızlanma, daha düşük toplam kazanç sağlayabilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 45,
    "id": "h3-s45",
    "section": "Karışım ve maliyet",
    "topic": "Gibson ve Grosch",
    "title": "Gibson Karışımı",
    "blocks": [
      {
        "type": "text",
        "text": "Gibson yöntemi, komut türlerini kullanım ağırlıklarıyla birlikte değerlendirir."
      },
      {
        "type": "bullet",
        "text": "Her komut sınıfı için kullanım oranı belirlenir."
      },
      {
        "type": "bullet",
        "text": "Her sınıfın yürütme süresi veya çevrim maliyeti kullanılır."
      },
      {
        "type": "bullet",
        "text": "Ağırlıklı ortalama komut süresi hesaplanır."
      },
      {
        "type": "bullet",
        "text": "Problem alanı değiştiğinde ağırlıklar da değişebilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 46,
    "id": "h3-s46",
    "section": "Karışım ve maliyet",
    "topic": "Gibson ve Grosch",
    "title": "Gibson Yöntemi Eşitliği",
    "blocks": [
      {
        "type": "text",
        "text": "Ağırlıkların toplamı %100 olduğunda ortalama maliyet hesaplanabilir."
      },
      {
        "type": "bullet",
        "text": "tortalama = Σ (gᵢ × tᵢ)"
      },
      {
        "type": "bullet",
        "text": "Ttoplam = n × tortalama"
      },
      {
        "type": "bullet",
        "text": "gᵢ: i. komut sınıfının kullanım oranı"
      },
      {
        "type": "bullet",
        "text": "tᵢ: i. komut sınıfının yürütme süresi"
      },
      {
        "type": "bullet",
        "text": "n: toplam komut sayısı"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 47,
    "id": "h3-s47",
    "section": "Karışım ve maliyet",
    "topic": "Gibson ve Grosch",
    "title": "Gibson Yöntemi Örneği",
    "blocks": [
      {
        "type": "text",
        "text": "Bir iş yükünde üç komut sınıfının oranı ve süreleri verilmiştir."
      },
      {
        "type": "row",
        "cells": [
          "Sınıf",
          "Ağırlık gᵢ",
          "Süre tᵢ",
          "Katkı"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Toplama/çıkarma",
          "0,60",
          "2 ns",
          "1,20 ns"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Çarpma",
          "0,30",
          "5 ns",
          "1,50 ns"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bölme",
          "0,10",
          "10 ns",
          "1,00 ns"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Toplam",
          "1,00",
          "-",
          "3,70 ns"
        ]
      },
      {
        "type": "text",
        "text": "1 milyon komut için tahmini süre: 10⁶ × 3,70 ns = 3,70 ms"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 48,
    "id": "h3-s48",
    "section": "Karışım ve maliyet",
    "topic": "Gibson ve Grosch",
    "title": "Grosch Kanunu",
    "blocks": [
      {
        "type": "text",
        "text": "Grosch kanunu, erken bilgisayar dönemindeki fiyat-performans ilişkisini açıklayan tarihsel bir yaklaşımdır."
      },
      {
        "type": "bullet",
        "text": "Kaynakta hız ve maliyet arasında V = K × cᵐ ilişkisi verilir."
      },
      {
        "type": "bullet",
        "text": "m değeri yaklaşık 1 ile 2 arasında kabul edilmiştir."
      },
      {
        "type": "bullet",
        "text": "Daha pahalı sistemlerin orantısız biçimde daha güçlü olduğu dönemi yansıtır."
      },
      {
        "type": "bullet",
        "text": "Güncel ürünler için evrensel performans tahmin kuralı değildir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 49,
    "id": "h3-s49",
    "section": "Pekiştirme",
    "topic": "Örnekler ve formül seçimi",
    "title": "Örnekler",
    "blocks": [
      {
        "type": "row",
        "cells": [
          "No",
          "Soru"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1",
          "900 milyon komut, CPI 1,4 ve 2,1 GHz için CPU süresi"
        ]
      },
      {
        "type": "row",
        "cells": [
          "2",
          "2,4 GHz ve CPI 1,2 için MIPS değeri"
        ]
      },
      {
        "type": "row",
        "cells": [
          "3",
          "Süre 20 s’den 8 s’ye düştüğünde speedup ve süre azalması"
        ]
      }
    ],
    "note": "Çözümler. (1) (900 × 10⁶ × 1,4) / (2,1 × 10⁹) = 0,60 s. (2) (2,4 × 10⁹) / (1,2 × 10⁶) = 2 000 MIPS. (3) Hızlanma 20 / 8 = 2,5 kat ve süre azalması (20 − 8) / 20 = %60.",
    "diagram": []
  },
  {
    "week": 3,
    "page": 50,
    "id": "h3-s50",
    "section": "Pekiştirme",
    "topic": "Örnekler ve formül seçimi",
    "title": "Örneklerde Beklenen Çözüm Yapısı",
    "blocks": [
      {
        "type": "text",
        "text": "Doğru sonuç, izlenebilir ve birimli bir çözümle gösterilmelidir."
      },
      {
        "type": "row",
        "cells": [
          "Bölüm",
          "Beklenen içerik"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Verilenler",
          "Semboller, değerler ve birimler açık yazılır"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Formül",
          "İstenen büyüklüğe uygun eşitlik seçilir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Dönüşüm",
          "MHz-GHz veya ms-s dönüşümü gösterilir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "İşlem",
          "Ara adımlar izlenebilir biçimde yazılır"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Yorum",
          "Sonuç birimle ve anlamlı cümleyle ifade edilir"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 51,
    "id": "h3-s51",
    "section": "Pekiştirme",
    "topic": "Örnekler ve formül seçimi",
    "title": "Sık Yapılan Hatalar",
    "blocks": [
      {
        "type": "text",
        "text": "Hesaplama hatalarının çoğu formülden önce kavram ve birim seçiminde oluşur."
      },
      {
        "type": "row",
        "cells": [
          "Hata",
          "Doğru yaklaşım"
        ]
      },
      {
        "type": "row",
        "cells": [
          "GHz değerini komut/saniye kabul etmek",
          "GHz yalnızca çevrim/saniyedir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Performans oranında süreleri ters bölmek",
          "Oran = yavaş süre / hızlı süre"
        ]
      },
      {
        "type": "row",
        "cells": [
          "CPI yerine toplam çevrimi kullanmak",
          "Toplam çevrim = komut sayısı × CPI"
        ]
      },
      {
        "type": "row",
        "cells": [
          "MHz ve GHz’yi doğrudan karıştırmak",
          "Önce ortak birime dönüştürmek"
        ]
      },
      {
        "type": "row",
        "cells": [
          "MIPS’i evrensel hız ölçüsü saymak",
          "Program ve komut seti bağlamını belirtmek"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1,25 ve 0,75’i fiziksel yasa saymak",
          "Yalnızca tanımlı sınıf modelinde kullanmak"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 52,
    "id": "h3-s52",
    "section": "Pekiştirme",
    "topic": "Örnekler ve formül seçimi",
    "title": "Formül Seçme Rehberi",
    "blocks": [
      {
        "type": "text",
        "text": "Soruda verilen ve istenen büyüklükler, kullanılacak ilişkiyi belirler."
      },
      {
        "type": "row",
        "cells": [
          "Verilenler",
          "İstenen",
          "Temel ilişki"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Süreler",
          "Performans oranı",
          "T_yavaş / T_hızlı"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Frekans",
          "Çevrim süresi",
          "Tçevrim = 1/f"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Komut, CPI, frekans",
          "CPU süresi",
          "TCPU = IC×CPI/f"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Komut, CPU süresi",
          "MIPS",
          "IC/(T×10⁶)"
        ]
      },
      {
        "type": "row",
        "cells": [
          "İyileştirilen oran ve yerel hızlanma",
          "Toplam speedup",
          "Amdahl yasası"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 53,
    "id": "h3-s53",
    "section": "Pekiştirme",
    "topic": "Örnekler ve formül seçimi",
    "title": "Temel Kavramlar Tablosu",
    "blocks": [
      {
        "type": "text",
        "text": "Aynı sembolün farklı anlamlarda kullanılmasını önlemek için kavramlar açık yazılır."
      },
      {
        "type": "row",
        "cells": [
          "Kavram",
          "Sembol",
          "Birim"
        ]
      },
      {
        "type": "row",
        "cells": [
          "CPU süresi",
          "TCPU",
          "s"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Saat frekansı",
          "f",
          "Hz"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Çevrim süresi",
          "Tçevrim",
          "s/çevrim"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Komut sayısı",
          "IC",
          "komut"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Ortalama CPI",
          "CPI",
          "çevrim/komut"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Hızlanma",
          "Speedup",
          "boyutsuz oran"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 3,
    "page": 54,
    "id": "h3-s54",
    "section": "Pekiştirme",
    "topic": "Örnekler ve formül seçimi",
    "title": "Gelecek hafta…",
    "blocks": [
      {
        "type": "text",
        "text": "Performans eşitliğindeki komut sayısı ve CPI, komut kümesi mimarisiyle doğrudan ilişkilidir."
      },
      {
        "type": "bullet",
        "text": "Komutun hangi işlemi tanımladığı"
      },
      {
        "type": "bullet",
        "text": "Operandların nerede bulunduğu"
      },
      {
        "type": "bullet",
        "text": "Adresleme yöntemlerinin komut sayısına etkisi"
      },
      {
        "type": "bullet",
        "text": "RISC ve CISC yaklaşımlarının performans bileşenleri"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 2,
    "id": "h4-s2",
    "section": "ISA sözleşmesi",
    "topic": "ISA, makine dili ve mikromimari",
    "title": "Bu Hafta…",
    "blocks": [
      {
        "type": "text",
        "text": "Yazılım, işlemciden hangi işleri yapmasını ve veriyi nereden almasını nasıl ister?"
      },
      {
        "type": "bullet",
        "text": "Komut Kümesi Mimarisi (Instruction Set Architecture, ISA) yazılım ile donanım arasındaki sözleşmedir."
      },
      {
        "type": "bullet",
        "text": "Bir komut işlem kodu ve operand bilgileri taşır."
      },
      {
        "type": "bullet",
        "text": "Adresleme yöntemi operandın nerede bulunduğunu açıklar."
      },
      {
        "type": "bullet",
        "text": "Reduced Instruction Set Computer (RISC) ve Complex Instruction Set"
      },
      {
        "type": "text",
        "text": "Computer (CISC) farklı tasarım önceliklerini temsil eder."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 3,
    "id": "h4-s3",
    "section": "ISA sözleşmesi",
    "topic": "ISA, makine dili ve mikromimari",
    "title": "Bu Haftanın Kavram Haritası",
    "blocks": [
      {
        "type": "text",
        "text": "Komut Kümesi Mimarisi, programın işlemciyle kurduğu makine dili düzeyindeki sözleşmedir."
      },
      {
        "type": "bullet",
        "text": "ISA’nın yazılıma gösterdiği özellikler"
      },
      {
        "type": "bullet",
        "text": "Komutun işlem kodu ve operand alanları"
      },
      {
        "type": "bullet",
        "text": "Adresleme yöntemleri ve etkili adres"
      },
      {
        "type": "bullet",
        "text": "Mikro kod ve kontrol birimi"
      },
      {
        "type": "bullet",
        "text": "RISC, CISC ve modern ISA aileleri"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 4,
    "id": "h4-s4",
    "section": "ISA sözleşmesi",
    "topic": "ISA, makine dili ve mikromimari",
    "title": "ISA Açılımı ve Türkçe Karşılığı",
    "blocks": [
      {
        "type": "text",
        "text": "ISA, Instruction Set Architecture ifadesinin kısaltmasıdır."
      },
      {
        "type": "row",
        "cells": [
          "İngilizce",
          "Türkçe",
          "Kısa anlam"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Instruction",
          "Komut",
          "İşlemciye yapılacak işi bildirir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Set",
          "Küme",
          "Desteklenen komutların bütünüdür"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Architecture",
          "Mimari",
          "Yazılıma görünen kuralları tanımlar"
        ]
      },
      {
        "type": "text",
        "text": "ISA = Instruction Set Architecture = Komut Kümesi Mimarisi"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 5,
    "id": "h4-s5",
    "section": "ISA sözleşmesi",
    "topic": "ISA, makine dili ve mikromimari",
    "title": "Komut Kümesi Mimarisi",
    "blocks": [
      {
        "type": "text",
        "text": "ISA, yazılımın işlemciyi kullanırken gördüğü programlama modelidir."
      },
      {
        "type": "row",
        "cells": [
          "ISA’nın tanımladığı alan",
          "Örnek"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Makine komutları",
          "ADD, LOAD, STORE, JUMP"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Programcıya görünen yazmaçlar",
          "Genel amaçlı yazmaçlar, Program Counter (PC), durum yazmacı"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Veri türleri ve genişlikleri",
          "8, 16, 32 veya 64 bit tamsayı"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Adresleme yöntemleri",
          "Immediate, register, base+offset"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bellek ve kesme modeli",
          "Adres alanı, ayrıcalık düzeyi, istisnalar"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 6,
    "id": "h4-s6",
    "section": "ISA sözleşmesi",
    "topic": "ISA, makine dili ve mikromimari",
    "title": "Makine Dili ve Assembly Dili",
    "blocks": [
      {
        "type": "text",
        "text": "İşlemci bitlerden oluşan makine komutlarını yürütür. Assembly dili bu bit örüntülerine okunabilir adlar verir."
      },
      {
        "type": "row",
        "cells": [
          "Düzey",
          "Örnek",
          "Kim kullanır?"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Yüksek seviyeli dil",
          "c=a+b",
          "Programcı ve derleyici"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Assembly dili",
          "ADD R1, R2, R3",
          "Programcı, derleyici, assembler"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Makine kodu",
          "Belirli bit alanları",
          "İşlemci"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 7,
    "id": "h4-s7",
    "section": "ISA sözleşmesi",
    "topic": "ISA, makine dili ve mikromimari",
    "title": "ISA ve Mikro Mimari",
    "blocks": [
      {
        "type": "text",
        "text": "Aynı komut kümesi farklı iç tasarımlarla gerçekleştirilebilir."
      },
      {
        "type": "row",
        "cells": [
          "Düzey",
          "Temel soru",
          "Örnek"
        ]
      },
      {
        "type": "row",
        "cells": [
          "ISA",
          "Programcı ne görebilir?",
          "Komutlar, yazmaçlar, adresleme"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Mikro mimari",
          "Komut içeride nasıl yürütülür?",
          "Pipeline, önbellek, yürütme birimleri"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Devre teknolojisi",
          "Donanım fiziksel olarak nasıl yapılır?",
          "Transistör ve üretim süreci"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 8,
    "id": "h4-s8",
    "section": "ISA sözleşmesi",
    "topic": "ISA, makine dili ve mikromimari",
    "title": "ISA Bir Sözleşme Gibi Çalışır",
    "blocks": [
      {
        "type": "text",
        "text": "Yazılım, ISA’nın tanımladığı davranışa göre makine kodu üretir. İşlemci bu davranışı doğru biçimde uygular."
      },
      {
        "type": "bullet",
        "text": "Derleyici hedef ISA için komut seçer."
      },
      {
        "type": "bullet",
        "text": "Assembler komutları makine koduna dönüştürür."
      },
      {
        "type": "bullet",
        "text": "İşletim sistemi ayrıcalıklı ISA özelliklerini kullanır."
      },
      {
        "type": "bullet",
        "text": "Mikro mimari aynı davranışı farklı iç yapılarla gerçekleştirebilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 9,
    "id": "h4-s9",
    "section": "ISA sözleşmesi",
    "topic": "ISA, makine dili ve mikromimari",
    "title": "ISA Tasarımında Denge",
    "blocks": [
      {
        "type": "text",
        "text": "Komutların kapsamı kod yoğunluğu, donanım ve derleyici üzerinde farklı etkiler oluşturur."
      },
      {
        "type": "row",
        "cells": [
          "Tercih",
          "Olası yarar",
          "Olası maliyet"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Daha karmaşık komut",
          "Daha az komut ve yüksek kod",
          "Çözme ve yürütme karmaşıklığı"
        ]
      },
      {
        "type": "text",
        "text": "yoğunluğu"
      },
      {
        "type": "row",
        "cells": [
          "Daha basit komut",
          "Düzenli çözme ve boru hattı",
          "Aynı iş için daha fazla komut"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Çok adresleme biçimi",
          "Esnek bellek erişimi",
          "Komut kodlaması karmaşıklaşabilir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Az adresleme biçimi",
          "Basit donanım ve derleyici hedefi",
          "Ek adres hesaplama komutları"
        ]
      },
      {
        "type": "text",
        "text": "gerekebilir"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 10,
    "id": "h4-s10",
    "section": "ISA sözleşmesi",
    "topic": "ISA, makine dili ve mikromimari",
    "title": "ISA Tasarımında Temel Kararlar",
    "blocks": [
      {
        "type": "text",
        "text": "Bir ISA tasarımı yalnızca komut adlarını seçmez."
      },
      {
        "type": "row",
        "cells": [
          "Karar alanı",
          "Sorulan soru"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Veri türleri",
          "Hangi sayı ve bit genişlikleri doğal olarak desteklenir?"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Yazmaçlar",
          "Kaç yazmaç vardır ve görevleri nelerdir?"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Komut biçimleri",
          "Opcode ve operand alanları nasıl kodlanır?"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bellek modeli",
          "Adresler, hizalama ve erişim kuralları nasıldır?"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Kontrol akışı",
          "Dallanma, çağrı ve dönüş nasıl ifade edilir?"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Ayrıcalık modeli",
          "İşletim sistemi hangi özel komutları kullanır?"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 11,
    "id": "h4-s11",
    "section": "ISA sözleşmesi",
    "topic": "Veri türleri, yazmaçlar ve ayrıcalık",
    "title": "ISA’nın Desteklediği Veri Türleri",
    "blocks": [
      {
        "type": "text",
        "text": "Komutlar, belirli veri genişlikleri ve yorumları üzerinde çalışır."
      },
      {
        "type": "bullet",
        "text": "İşaretsiz ve işaretli tamsayılar"
      },
      {
        "type": "bullet",
        "text": "Bit dizileri ve mantıksal değerler"
      },
      {
        "type": "bullet",
        "text": "Kayan noktalı sayılar"
      },
      {
        "type": "bullet",
        "text": "Vektör veya SIMD veri grupları"
      },
      {
        "type": "bullet",
        "text": "Adresler ve işaretçiler"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 12,
    "id": "h4-s12",
    "section": "ISA sözleşmesi",
    "topic": "Veri türleri, yazmaçlar ve ayrıcalık",
    "title": "Programcıya Görünen Yazmaçlar",
    "blocks": [
      {
        "type": "text",
        "text": "ISA, yazılımın doğrudan adlandırabildiği yazmaçları tanımlar."
      },
      {
        "type": "row",
        "cells": [
          "Yazmaç türü",
          "Görev"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Genel amaçlı yazmaç",
          "Operand ve ara sonuçları tutar"
        ]
      },
      {
        "type": "row",
        "cells": [
          "PC (Program Counter)",
          "Sıradaki komutun adresini izler"
        ]
      },
      {
        "type": "row",
        "cells": [
          "SP (Stack Pointer)",
          "Yığının güncel konumunu gösterir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Durum/flag yazmacı",
          "Koşul ve işlem durum bitlerini tutar"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Vektör veya kayan nokta yazmacı",
          "Özel veri türlerini işler"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 13,
    "id": "h4-s13",
    "section": "ISA sözleşmesi",
    "topic": "Veri türleri, yazmaçlar ve ayrıcalık",
    "title": "Koşul Bayrakları ve Karşılaştırma",
    "blocks": [
      {
        "type": "text",
        "text": "Bazı ISA’lar aritmetik sonuçları bayraklarla, bazıları ayrı karşılaştırma sonuçlarıyla izler."
      },
      {
        "type": "row",
        "cells": [
          "Bayrak",
          "Genel anlam"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Z - Zero",
          "Sonuç sıfır"
        ]
      },
      {
        "type": "row",
        "cells": [
          "N/S - Negative/Sign",
          "Sonucun işaret biti etkin"
        ]
      },
      {
        "type": "row",
        "cells": [
          "C - Carry",
          "İşaretsiz taşma veya ödünç durumu"
        ]
      },
      {
        "type": "row",
        "cells": [
          "V/O - Overflow",
          "İşaretli sayı taşması"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 14,
    "id": "h4-s14",
    "section": "ISA sözleşmesi",
    "topic": "Veri türleri, yazmaçlar ve ayrıcalık",
    "title": "Ayrıcalıklı Komutlar",
    "blocks": [
      {
        "type": "text",
        "text": "Bazı komutlar yalnızca işletim sistemi çekirdeği gibi ayrıcalıklı yazılımlar tarafından yürütülebilir."
      },
      {
        "type": "bullet",
        "text": "Bellek yönetimi ve sayfa tablolarını denetleyen işlemler"
      },
      {
        "type": "bullet",
        "text": "Kesme durumunu yöneten işlemler"
      },
      {
        "type": "bullet",
        "text": "İşlemci durumuna ait özel yazmaç erişimleri"
      },
      {
        "type": "bullet",
        "text": "Kullanıcı programından çekirdeğe kontrollü geçiş"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 15,
    "id": "h4-s15",
    "section": "Makine komutları",
    "topic": "Opcode, komut biçimi ve operand",
    "title": "Makine Komutunun Yapısı",
    "blocks": [
      {
        "type": "text",
        "text": "Bir komut, yapılacak işlemi ve kullanılacak operandları kodlar."
      },
      {
        "type": "row",
        "cells": [
          "Alan",
          "Görevi",
          "Örnek"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Opcode",
          "Hangi işlemin yapılacağını belirtir",
          "ADD"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Hedef operand",
          "Sonucun yazılacağı yeri gösterir",
          "R1"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Kaynak operandlar",
          "İşlenecek değerleri veya konumları gösterir",
          "R2, R3"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Adresleme bilgisi",
          "Operandın nasıl bulunacağını belirtir",
          "[R2+8]"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Ek alanlar",
          "Boyut, koşul veya işlev ayrıntısı taşıyabilir",
          "32 bit, eşitse dallan"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 16,
    "id": "h4-s16",
    "section": "Makine komutları",
    "topic": "Opcode, komut biçimi ve operand",
    "title": "Opcode Nedir?",
    "blocks": [
      {
        "type": "text",
        "text": "Opcode, Operation Code ifadesinin kısaltmasıdır ve komutun hangi işlemi istediğini belirtir."
      },
      {
        "type": "row",
        "cells": [
          "Komut",
          "Opcode’un temsil ettiği işlem"
        ]
      },
      {
        "type": "row",
        "cells": [
          "ADD",
          "Toplama"
        ]
      },
      {
        "type": "row",
        "cells": [
          "LOAD",
          "Bellekten yazmaca veri alma"
        ]
      },
      {
        "type": "row",
        "cells": [
          "STORE",
          "Yazmaçtan belleğe veri yazma"
        ]
      },
      {
        "type": "row",
        "cells": [
          "JUMP / BRANCH",
          "Komut akışını değiştirme"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 17,
    "id": "h4-s17",
    "section": "Makine komutları",
    "topic": "Opcode, komut biçimi ve operand",
    "title": "Komut Biçimleri",
    "blocks": [
      {
        "type": "text",
        "text": "Komut uzunluğu ve alan sayısı ISA tasarımının önemli seçimlerindendir."
      },
      {
        "type": "row",
        "cells": [
          "Biçim",
          "Özellik",
          "Sonuç"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Sabit uzunluk",
          "Komutlar aynı bit sayısındadır",
          "Getirme ve çözme daha düzenli"
        ]
      },
      {
        "type": "text",
        "text": "olabilir"
      },
      {
        "type": "row",
        "cells": [
          "Değişken uzunluk",
          "Komutlar farklı boyutlarda olabilir",
          "Kod yoğunluğu artabilir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Az operand alanı",
          "Komut daha kısa olabilir",
          "Ek veri taşıma gerekebilir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Çok operand alanı",
          "Kaynak ve hedef açık yazılır",
          "Komut kodu daha fazla bit"
        ]
      },
      {
        "type": "text",
        "text": "gerektirir"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 18,
    "id": "h4-s18",
    "section": "Makine komutları",
    "topic": "Opcode, komut biçimi ve operand",
    "title": "Sıfır, Bir, İki ve Üç Adresli Komutlar",
    "blocks": [
      {
        "type": "text",
        "text": "Komutta açıkça yazılan operand sayısı, ISA’nın programlama modelini etkiler."
      },
      {
        "type": "row",
        "cells": [
          "Biçim",
          "Örnek",
          "Sonuç"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Üç adresli",
          "ADD R1, R2, R3",
          "R1 = R2 + R3"
        ]
      },
      {
        "type": "row",
        "cells": [
          "İki adresli",
          "ADD R1, R2",
          "R1 = R1 + R2"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bir adresli",
          "ADD X",
          "ACC = ACC + M[X]"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Sıfır adresli",
          "ADD",
          "Yığının üst iki elemanını toplar"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 19,
    "id": "h4-s19",
    "section": "Makine komutları",
    "topic": "Opcode, komut biçimi ve operand",
    "title": "Komut Alanları Arasında Bit Paylaşımı",
    "blocks": [
      {
        "type": "text",
        "text": "Sabit uzunluklu komutta her alan için ayrılan bit sayısı diğer alanları sınırlar."
      },
      {
        "type": "bullet",
        "text": "Opcode için daha çok bit, daha fazla temel işlem kodlayabilir."
      },
      {
        "type": "bullet",
        "text": "Yazmaç alanı büyüdükçe daha fazla yazmaç adreslenebilir."
      },
      {
        "type": "bullet",
        "text": "Immediate alanı büyüdükçe daha geniş sabitler taşınabilir."
      },
      {
        "type": "bullet",
        "text": "Ofset alanı büyüdükçe daha uzak hedefler kodlanabilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 20,
    "id": "h4-s20",
    "section": "Makine komutları",
    "topic": "Opcode, komut biçimi ve operand",
    "title": "Örnek: 32 Bitlik Komut Biçimi",
    "blocks": [
      {
        "type": "text",
        "text": "6 bit opcode, üç adet 5 bit yazmaç alanı ve 11 bit ek alan kullanalım."
      },
      {
        "type": "row",
        "cells": [
          "Alan",
          "Bit sayısı",
          "Kodlanabilen seçenek"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Opcode",
          "6",
          "2⁶ = 64 işlem kodu"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Her yazmaç alanı",
          "5",
          "2⁵ = 32 yazmaç"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Ek alan",
          "11",
          "Immediate, ofset veya işlev alanı"
        ]
      },
      {
        "type": "text",
        "text": "Toplam: 6 + 5 + 5 + 5 + 11 = 32 bit"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 21,
    "id": "h4-s21",
    "section": "Makine komutları",
    "topic": "Opcode, komut biçimi ve operand",
    "title": "Operand Nedir?",
    "blocks": [
      {
        "type": "text",
        "text": "Operand, komutun üzerinde işlem yaptığı değer veya değerin bulunduğu konumdur."
      },
      {
        "type": "row",
        "cells": [
          "Operand türü",
          "Örnek",
          "Açıklama"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Sabit değer",
          "5",
          "Komut içinde taşınabilir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Yazmaç",
          "R3",
          "Değer işlemci yazmacındadır"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bellek konumu",
          "[1000]",
          "Değer belirtilen adrestedir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Adres",
          "etiket veya R4",
          "Dallanma ya da veri erişimi için kullanılır"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 22,
    "id": "h4-s22",
    "section": "Makine komutları",
    "topic": "Opcode, komut biçimi ve operand",
    "title": "Operandların Bulunabileceği Yerler",
    "blocks": [
      {
        "type": "text",
        "text": "Operand konumu erişim maliyetini ve komut biçimini etkiler."
      },
      {
        "type": "row",
        "cells": [
          "Konum",
          "Avantaj",
          "Sınırlılık"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Komutun içinde",
          "Ek veri erişimi gerekmez",
          "Sabit alanın bit sayısı sınırlıdır"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Yazmaçta",
          "Çok hızlı erişilir",
          "Yazmaç sayısı sınırlıdır"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Ana bellekte",
          "Büyük veri alanına erişilir",
          "Erişim gecikmesi daha yüksektir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Yığın üzerinde",
          "Prosedür ve geçici veriler için",
          "Push/pop veya adresleme gerekir"
        ]
      },
      {
        "type": "text",
        "text": "düzenlidir"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 23,
    "id": "h4-s23",
    "section": "Makine komutları",
    "topic": "Opcode, komut biçimi ve operand",
    "title": "Kaynak ve Hedef Operand",
    "blocks": [
      {
        "type": "text",
        "text": "Komutun okuduğu değerler kaynak, ürettiği sonucun yazıldığı yer hedef operanddır."
      },
      {
        "type": "row",
        "cells": [
          "Komut",
          "Kaynak",
          "Hedef"
        ]
      },
      {
        "type": "row",
        "cells": [
          "ADD R1, R2, R3",
          "R2 ve R3",
          "R1"
        ]
      },
      {
        "type": "row",
        "cells": [
          "MOV R4, #10",
          "#10",
          "R4"
        ]
      },
      {
        "type": "row",
        "cells": [
          "LOAD R5, [R6+8]",
          "M[R6+8]",
          "R5"
        ]
      },
      {
        "type": "row",
        "cells": [
          "STORE [R7], R8",
          "R8",
          "M[R7]"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 24,
    "id": "h4-s24",
    "section": "Makine komutları",
    "topic": "Komut sınıfları",
    "title": "Komut Sınıfları",
    "blocks": [
      {
        "type": "text",
        "text": "ISA, farklı iş türleri için komut grupları tanımlar."
      },
      {
        "type": "row",
        "cells": [
          "Sınıf",
          "Görev",
          "Örnek"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Veri taşıma",
          "Veriyi yazmaç, bellek veya G/Ç arasında taşır",
          "LOAD, STORE, MOVE"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Aritmetik",
          "Sayısal işlem yapar",
          "ADD, SUB, MUL"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Mantıksal",
          "Bit düzeyinde işlem yapar",
          "AND, OR, XOR, SHIFT"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Kontrol akışı",
          "Yürütme sırasını değiştirir",
          "JUMP, BRANCH, CALL, RETURN"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Sistem",
          "Ayrıcalıklı işlem veya durum yönetir",
          "Kesme kontrolü, sistem çağrısı"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 25,
    "id": "h4-s25",
    "section": "Makine komutları",
    "topic": "Komut sınıfları",
    "title": "Veri Taşıma Komutları",
    "blocks": [
      {
        "type": "text",
        "text": "Veri taşıma komutları değeri bir konumdan başka bir konuma aktarır."
      },
      {
        "type": "bullet",
        "text": "LOAD: bellekten yazmaca"
      },
      {
        "type": "bullet",
        "text": "STORE: yazmaçtan belleğe"
      },
      {
        "type": "bullet",
        "text": "MOV: yazmaçlar veya sabitler arasında"
      },
      {
        "type": "bullet",
        "text": "PUSH ve POP: yığın üzerinden veri taşıma"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 26,
    "id": "h4-s26",
    "section": "Makine komutları",
    "topic": "Komut sınıfları",
    "title": "Aritmetik ve Mantıksal Komutlar",
    "blocks": [
      {
        "type": "text",
        "text": "İşlemci sayısal hesap ve bit düzeyi işlemler için ayrı opcode’lar sunar."
      },
      {
        "type": "row",
        "cells": [
          "Sınıf",
          "Örnekler",
          "Kullanım"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Aritmetik",
          "ADD, SUB, MUL, DIV",
          "Sayısal hesap"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Mantıksal",
          "AND, OR, XOR, NOT",
          "Bit maskeleme ve koşullar"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Kaydırma",
          "SHL/LSL, SHR/LSR",
          "Bit konumu ve hızlı ölçekleme"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Karşılaştırma",
          "CMP veya SLT",
          "Dallanma için koşul üretme"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 27,
    "id": "h4-s27",
    "section": "Makine komutları",
    "topic": "Komut sınıfları",
    "title": "Kontrol Akışı Komutları",
    "blocks": [
      {
        "type": "text",
        "text": "Kontrol akışı komutları sıradaki komut adresini değiştirir."
      },
      {
        "type": "bullet",
        "text": "Koşulsuz atlama yeni bir hedefe gider."
      },
      {
        "type": "bullet",
        "text": "Koşullu dallanma karşılaştırma sonucuna göre karar verir."
      },
      {
        "type": "bullet",
        "text": "CALL/JAL prosedüre gider ve dönüş konumunu saklar."
      },
      {
        "type": "bullet",
        "text": "RETURN saklanan dönüş adresiyle çağıran koda döner."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 28,
    "id": "h4-s28",
    "section": "Makine komutları",
    "topic": "Komut sınıfları",
    "title": "Sistem ve Özel Amaçlı Komutlar",
    "blocks": [
      {
        "type": "text",
        "text": "ISA, normal hesaplamanın yanında sistem yönetimine ait işlemler de tanımlayabilir."
      },
      {
        "type": "bullet",
        "text": "Sistem çağrısı veya trap oluşturma"
      },
      {
        "type": "bullet",
        "text": "Bellek bariyerleri ve atomik işlemler"
      },
      {
        "type": "bullet",
        "text": "Özel durumdan dönüş"
      },
      {
        "type": "bullet",
        "text": "İşlemciye bekleme veya ipucu verme"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 29,
    "id": "h4-s29",
    "section": "Adresleme",
    "topic": "Etkili adres ve temel yöntemler",
    "title": "Adresleme Yöntemi",
    "blocks": [
      {
        "type": "text",
        "text": "Adresleme yöntemi, komutun operandı veya etkili adresi nasıl bulacağını tanımlar."
      },
      {
        "type": "bullet",
        "text": "Komut içindeki alan doğrudan değer olabilir."
      },
      {
        "type": "bullet",
        "text": "Alan bir yazmaç numarasını gösterebilir."
      },
      {
        "type": "bullet",
        "text": "Alan bir bellek adresi veya adres hesabına katılan ofset olabilir."
      },
      {
        "type": "bullet",
        "text": "Aynı işlem farklı adresleme yöntemleriyle kullanılabilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 30,
    "id": "h4-s30",
    "section": "Adresleme",
    "topic": "Etkili adres ve temel yöntemler",
    "title": "Etkili Adres (Effective Address )",
    "blocks": [
      {
        "type": "text",
        "text": "EA, Effective Address ifadesinin kısaltmasıdır ve bellek operandının gerçek adresini belirtir."
      },
      {
        "type": "bullet",
        "text": "Komut adresi doğrudan taşıyabilir."
      },
      {
        "type": "bullet",
        "text": "Bir yazmaç adresi tutabilir."
      },
      {
        "type": "bullet",
        "text": "Taban, indeks, ölçek ve ofset birlikte kullanılabilir."
      },
      {
        "type": "bullet",
        "text": "PC değeri dallanma veya veri adresine katılabilir."
      },
      {
        "type": "text",
        "text": "Önce EA hesaplanır, sonra operand değeri M[EA] konumundan okunur."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 31,
    "id": "h4-s31",
    "section": "Adresleme",
    "topic": "Etkili adres ve temel yöntemler",
    "title": "Immediate Adresleme",
    "blocks": [
      {
        "type": "text",
        "text": "Operand değeri komutun içinde bulunur."
      },
      {
        "type": "row",
        "cells": [
          "Örnek",
          "Anlam"
        ]
      },
      {
        "type": "row",
        "cells": [
          "MOV R1, #5",
          "R1 yazmacına 5 değerini yükle"
        ]
      },
      {
        "type": "row",
        "cells": [
          "ADD R2, R2, #1",
          "R2 değerini 1 artır"
        ]
      },
      {
        "type": "row",
        "cells": [
          "AND R3, R3, #255",
          "Alt 8 biti maskele"
        ]
      },
      {
        "type": "text",
        "text": "Avantaj: ek bellek erişimi yoktur. Sınır: komut alanına sığan değer kullanılabilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 32,
    "id": "h4-s32",
    "section": "Adresleme",
    "topic": "Etkili adres ve temel yöntemler",
    "title": "Register Adresleme",
    "blocks": [
      {
        "type": "text",
        "text": "Operand işlemcinin programcıya görünen yazmacındadır."
      },
      {
        "type": "row",
        "cells": [
          "Örnek",
          "İşlem"
        ]
      },
      {
        "type": "row",
        "cells": [
          "ADD R1, R2, R3",
          "R1 = R2 + R3"
        ]
      },
      {
        "type": "row",
        "cells": [
          "SUB R4, R4, R5",
          "R4 = R4 - R5"
        ]
      },
      {
        "type": "row",
        "cells": [
          "MOV R6, R1",
          "R6 = R1"
        ]
      },
      {
        "type": "text",
        "text": "Yazmaç erişimi hızlıdır; ancak kullanılabilir yazmaç sayısı ISA tarafından sınırlandırılır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 33,
    "id": "h4-s33",
    "section": "Adresleme",
    "topic": "Etkili adres ve temel yöntemler",
    "title": "Doğrudan Adresleme",
    "blocks": [
      {
        "type": "text",
        "text": "Komut alanı bellek operandının adresini doğrudan belirtir."
      },
      {
        "type": "row",
        "cells": [
          "Örnek gösterim",
          "Etkili adres",
          "İşlem"
        ]
      },
      {
        "type": "row",
        "cells": [
          "LOAD R1, [1000]",
          "EA = 1000",
          "M[1000] değeri R1’e yüklenir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "STORE [1200], R2",
          "EA = 1200",
          "R2 değeri M[1200] konumuna yazılır"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 34,
    "id": "h4-s34",
    "section": "Adresleme",
    "topic": "Etkili adres ve temel yöntemler",
    "title": "Bellek Dolaylı (Indirect) Adresleme",
    "blocks": [
      {
        "type": "text",
        "text": "Komuttaki veya belirli bellek konumundaki değer, asıl operandın adresini gösterir."
      },
      {
        "type": "row",
        "cells": [
          "Verilen",
          "İşlem"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Adres alanı A",
          "Önce M[A] okunur"
        ]
      },
      {
        "type": "row",
        "cells": [
          "M[A] = B",
          "B asıl etkili adrestir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Operand",
          "M[B] okunur"
        ]
      },
      {
        "type": "text",
        "text": "EA = M[A], operand = M[EA]"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 35,
    "id": "h4-s35",
    "section": "Adresleme",
    "topic": "Etkili adres ve temel yöntemler",
    "title": "Indirect Adresleme",
    "blocks": [
      {
        "type": "text",
        "text": "Yazmaç operandın değerini değil, bellekteki adresini tutar."
      },
      {
        "type": "row",
        "cells": [
          "Örnek",
          "Adres hesabı",
          "Anlam"
        ]
      },
      {
        "type": "row",
        "cells": [
          "LOAD R1, [R2]",
          "EA = R2",
          "R2’nin gösterdiği bellek değerini R1’e"
        ]
      },
      {
        "type": "text",
        "text": "yükle"
      },
      {
        "type": "row",
        "cells": [
          "STORE [R3], R4",
          "EA = R3",
          "R4’ü R3’ün gösterdiği adrese yaz"
        ]
      },
      {
        "type": "text",
        "text": "Bir pointer değişkeninin tuttuğu adres üzerinden veri erişimi bu yönteme örnektir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 36,
    "id": "h4-s36",
    "section": "Adresleme",
    "topic": "Ofset, indeks, PC, yığın ve örnekler",
    "title": "Base + Offset Adresleme",
    "blocks": [
      {
        "type": "text",
        "text": "Etkili adres, taban yazmacı ile komuttaki sabit ofsetin toplamıdır."
      },
      {
        "type": "row",
        "cells": [
          "Örnek",
          "Etkili adres",
          "Yaygın kullanım"
        ]
      },
      {
        "type": "row",
        "cells": [
          "LOAD R1, [R2+8]",
          "EA = R2 + 8",
          "Yapı alanı veya yerel değişken"
        ]
      },
      {
        "type": "row",
        "cells": [
          "STORE [SP+16], R3",
          "EA = SP + 16",
          "Yığın çerçevesi"
        ]
      },
      {
        "type": "row",
        "cells": [
          "LOAD R4, [FP-4]",
          "EA = FP - 4",
          "Yerel veri"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 37,
    "id": "h4-s37",
    "section": "Adresleme",
    "topic": "Ofset, indeks, PC, yığın ve örnekler",
    "title": "Indexed Adresleme",
    "blocks": [
      {
        "type": "text",
        "text": "Dizi elemanının adresi taban ve indeks bilgileriyle hesaplanır."
      },
      {
        "type": "row",
        "cells": [
          "Bileşen",
          "Görevi"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Taban adres",
          "Dizinin başlangıcını gösterir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "İndeks",
          "Eleman sırasını veya byte ofsetini taşır"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Ölçek",
          "Eleman boyutunu hesaba katar"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Yer değiştirme",
          "Başlangıca sabit ekleme yapar"
        ]
      },
      {
        "type": "text",
        "text": "Örnek: EA = Rbase + Rindex × Scale + Displacement"
      },
      {
        "type": "text",
        "text": "EA = 1000 + 3 × 4 + 8 = 1020"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 38,
    "id": "h4-s38",
    "section": "Adresleme",
    "topic": "Ofset, indeks, PC, yığın ve örnekler",
    "title": "PC Relative Adresleme",
    "blocks": [
      {
        "type": "text",
        "text": "Hedef adres, program sayacı ile işaretli ofsetin toplamından hesaplanır."
      },
      {
        "type": "row",
        "cells": [
          "Kullanım",
          "Neden uygundur"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Koşullu dallanma",
          "Yakın hedefleri küçük ofsetle kodlar"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Döngü",
          "İleri veya geri dallanmayı destekler"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Konumdan bağımsız kod",
          "Program farklı adrese yüklense de göreli uzaklık korunur"
        ]
      },
      {
        "type": "text",
        "text": "Hedef = PC + işaretli ofset"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 39,
    "id": "h4-s39",
    "section": "Adresleme",
    "topic": "Ofset, indeks, PC, yığın ve örnekler",
    "title": "Yığın ve Implied Adresleme",
    "blocks": [
      {
        "type": "text",
        "text": "Bazı komutlarda operand, komut alanında açıkça yazılmaz."
      },
      {
        "type": "row",
        "cells": [
          "Yöntem",
          "Örnek",
          "Operandın kaynağı"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Yığın",
          "PUSH, POP, ADD",
          "SP ile gösterilen yığın üstü"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Implied",
          "CLC veya özel akümülatör",
          "Komut tarafından önceden belirlenmiş konum"
        ]
      },
      {
        "type": "text",
        "text": "işlemi"
      },
      {
        "type": "row",
        "cells": [
          "Accumulator",
          "ADD X",
          "Bir operand ACC yazmacıdır"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 40,
    "id": "h4-s40",
    "section": "Adresleme",
    "topic": "Ofset, indeks, PC, yığın ve örnekler",
    "title": "Etkili Adres Hesaplama Adımları",
    "blocks": [
      {
        "type": "text",
        "text": "Bellek operandı içeren komut, veriye erişmeden önce adresi oluşturur."
      },
      {
        "type": "bullet",
        "text": "Adresleme yöntemi komuttan çözülür."
      },
      {
        "type": "bullet",
        "text": "Gerekli yazmaç değerleri okunur."
      },
      {
        "type": "bullet",
        "text": "Ofset ve ölçek işlemleri uygulanır."
      },
      {
        "type": "bullet",
        "text": "EA elde edilir ve bellek erişimi başlatılır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 41,
    "id": "h4-s41",
    "section": "Adresleme",
    "topic": "Ofset, indeks, PC, yığın ve örnekler",
    "title": "Adresleme Örneği",
    "blocks": [
      {
        "type": "text",
        "text": "R2 = 1000, R3 = 4 ve bellek M[1016] = 25 olsun."
      },
      {
        "type": "row",
        "cells": [
          "Operand",
          "Adresleme",
          "Sonuç"
        ]
      },
      {
        "type": "row",
        "cells": [
          "#8",
          "Immediate",
          "Değer 8"
        ]
      },
      {
        "type": "row",
        "cells": [
          "R3",
          "Register",
          "Değer 4"
        ]
      },
      {
        "type": "row",
        "cells": [
          "[R2]",
          "Register indirect",
          "M[1000]"
        ]
      },
      {
        "type": "row",
        "cells": [
          "[R2+16]",
          "Base + offset",
          "M[1016] = 25"
        ]
      },
      {
        "type": "row",
        "cells": [
          "[R2+R3×4]",
          "Indexed",
          "M[1016] = 25"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 42,
    "id": "h4-s42",
    "section": "Adresleme",
    "topic": "Ofset, indeks, PC, yığın ve örnekler",
    "title": "Örnek: Dizi Elemanına Erişim",
    "blocks": [
      {
        "type": "text",
        "text": "32 bit tamsayı dizisinin başlangıcı R2=1000, indeks R3=6 olsun."
      },
      {
        "type": "row",
        "cells": [
          "Adım",
          "Hesap",
          "Sonuç"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Eleman boyutu",
          "32 bit / 8",
          "4 bayt"
        ]
      },
      {
        "type": "row",
        "cells": [
          "İndeks ofseti",
          "6×4",
          "24 bayt"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Etkili adres",
          "1000 + 24",
          "1024"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Komut örneği",
          "LOAD R1, [R2+R3×4]",
          "R1 = M[1024]"
        ]
      },
      {
        "type": "text",
        "text": "Dizi erişiminde adres = başlangıç adresi + indeks × eleman boyutu şeklinde hesaplanır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 43,
    "id": "h4-s43",
    "section": "Adresleme",
    "topic": "Ofset, indeks, PC, yığın ve örnekler",
    "title": "Örnek: İşaretçi ile Erişim",
    "blocks": [
      {
        "type": "text",
        "text": "R4 bir nesnenin adresini, komuttaki 12 ofseti nesnenin bir alanını göstersin."
      },
      {
        "type": "row",
        "cells": [
          "Komut",
          "LOAD R1, [R4+12]"
        ]
      },
      {
        "type": "row",
        "cells": [
          "R4",
          "2000"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Etkili adres",
          "2000 + 12 = 2012"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Sonuç",
          "R1 = M[2012]"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 44,
    "id": "h4-s44",
    "section": "Adresleme",
    "topic": "Ofset, indeks, PC, yığın ve örnekler",
    "title": "Yığın ve Prosedür Komutları",
    "blocks": [
      {
        "type": "text",
        "text": "Prosedür çağrıları dönüş adresi ve geçici veriler için yığını kullanabilir."
      },
      {
        "type": "row",
        "cells": [
          "Komut / işlem",
          "Temel görev"
        ]
      },
      {
        "type": "row",
        "cells": [
          "CALL",
          "Dönüş adresini kaydedip prosedüre gider"
        ]
      },
      {
        "type": "row",
        "cells": [
          "RETURN",
          "Kaydedilen dönüş adresine döner"
        ]
      },
      {
        "type": "row",
        "cells": [
          "PUSH",
          "Yığın işaretçisini güncelleyip veri saklar"
        ]
      },
      {
        "type": "row",
        "cells": [
          "POP",
          "Yığından veri alıp işaretçiyi günceller"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 45,
    "id": "h4-s45",
    "section": "Kontrol ve uyumluluk",
    "topic": "Mikro kod ve ikili uyumluluk",
    "title": "Mikro Kod",
    "blocks": [
      {
        "type": "text",
        "text": "Mikro kod, bazı işlemcilerde ISA komutlarını iç mikro işlemlere dönüştüren kontrol katmanıdır."
      },
      {
        "type": "bullet",
        "text": "Kontrol belleğinde mikro talimat dizileri bulunabilir."
      },
      {
        "type": "bullet",
        "text": "Karmaşık komutlar birden fazla iç adıma ayrılabilir."
      },
      {
        "type": "bullet",
        "text": "Aynı ISA farklı mikro mimarilerde uygulanabilir."
      },
      {
        "type": "bullet",
        "text": "Her işlemci ve her komut mutlaka mikro kod kullanmaz."
      }
    ],
    "note": "Örneğin bir makine komutunun mikrorutini önce operandı veri yoluna çıkarabilir, sonra ALU’yu seçebilir ve en son hedef yazmaca yazabilir. Bunlar komutun donanım içi kontrol adımlarıdır.",
    "diagram": [
      "Makine komutu",
      "Mikrorutin",
      "Mikrokomutlar",
      "Kontrol sinyalleri"
    ]
  },
  {
    "week": 4,
    "page": 46,
    "id": "h4-s46",
    "section": "Kontrol ve uyumluluk",
    "topic": "Mikro kod ve ikili uyumluluk",
    "title": "Mikro Kodun Tarihsel Rolü",
    "blocks": [
      {
        "type": "text",
        "text": "Maurice Wilkes mikroprogramlı kontrol fikrini 1951’de önerdi. System/360 uyumlu aile yaklaşımında mikro kod önemli rol oynadı."
      },
      {
        "type": "bullet",
        "text": "Kontrol davranışı mikro talimat dizileriyle tanımlanabilir."
      },
      {
        "type": "bullet",
        "text": "Farklı donanım modelleri aynı ISA’yı uygulayabilir."
      },
      {
        "type": "bullet",
        "text": "Karmaşık komutlar küçük iç adımlara ayrılabilir."
      },
      {
        "type": "bullet",
        "text": "Mikro kod, ISA ile aynı şey değildir."
      }
    ],
    "note": "Kontrol belleği, mikrokomut sözcüklerini barındırır. Bir mikrokomut örneğin yazmaç seçimini, ALU işlemini ve sıradaki mikrokomut adresinin nasıl belirleneceğini kodlayabilir.",
    "diagram": [
      "Kontrol belleği",
      "Mikrokomut yazmacı",
      "Sinyal kod çözücü"
    ]
  },
  {
    "week": 4,
    "page": 47,
    "id": "h4-s47",
    "section": "Kontrol ve uyumluluk",
    "topic": "Mikro kod ve ikili uyumluluk",
    "title": "Sabit Mantık ve Mikroprogramlı Kontrol",
    "blocks": [
      {
        "type": "text",
        "text": "Kontrol birimi farklı uygulama teknikleri kullanabilir."
      },
      {
        "type": "row",
        "cells": [
          "Yaklaşım",
          "Güçlü yanı",
          "Sınırlılık"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Sabit mantık",
          "Düşük gecikme ve doğrudan kontrol",
          "Değiştirmek ve doğrulamak zor"
        ]
      },
      {
        "type": "text",
        "text": "olabilir"
      },
      {
        "type": "row",
        "cells": [
          "Mikroprogramlı kontrol",
          "Karmaşık davranışı düzenli mikro",
          "Kontrol belleği ve ek adımlar"
        ]
      },
      {
        "type": "row",
        "cells": [
          "adımlarla tanımlar",
          "gerekebilir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Karma yaklaşım",
          "Sık komutlar hızlı, karmaşık",
          "Tasarım bütünlüğü karmaşıktır"
        ]
      },
      {
        "type": "text",
        "text": "durumlar esnek yürütülür"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 48,
    "id": "h4-s48",
    "section": "Kontrol ve uyumluluk",
    "topic": "Mikro kod ve ikili uyumluluk",
    "title": "ISA Uyumluluğu",
    "blocks": [
      {
        "type": "text",
        "text": "Uyumlu ISA, yazılımın farklı işlemci uygulamalarında çalışabilmesini sağlar."
      },
      {
        "type": "row",
        "cells": [
          "Koşul",
          "Açıklama"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Komut uyumluluğu",
          "Kullanılan komutlar yeni işlemci tarafından desteklenir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Ayrıcalık ve sistem modeli",
          "İşletim sistemi gerekli davranışı görür"
        ]
      },
      {
        "type": "row",
        "cells": [
          "ABI (Application Binary",
          "Çağrı düzeni, veri yerleşimi ve ikili biçim uyumludur"
        ]
      },
      {
        "type": "text",
        "text": "Interface) uyumluluğu"
      },
      {
        "type": "row",
        "cells": [
          "İşletim sistemi desteği",
          "Program yüklenir ve gerekli hizmetleri bulur"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 49,
    "id": "h4-s49",
    "section": "Kontrol ve uyumluluk",
    "topic": "Mikro kod ve ikili uyumluluk",
    "title": "İkili Uyumluluk Ne Sağlar?",
    "blocks": [
      {
        "type": "text",
        "text": "Aynı ISA sürümünü destekleyen işlemciler, aynı makine kodunu yeniden derlemeden yürütebilir."
      },
      {
        "type": "bullet",
        "text": "Komutların davranışı korunur."
      },
      {
        "type": "bullet",
        "text": "Programcıya görünen yazmaç ve veri kuralları korunur."
      },
      {
        "type": "bullet",
        "text": "İşletim sistemi ve kütüphanelerin de uyumlu olması gerekir."
      },
      {
        "type": "bullet",
        "text": "Yeni işlemci eski komutları sürdürürken yeni uzantılar ekleyebilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 50,
    "id": "h4-s50",
    "section": "ISA tasarımları",
    "topic": "CISC ve RISC",
    "title": "CISC Yaklaşımı",
    "blocks": [
      {
        "type": "text",
        "text": "CISC, daha zengin ve farklı karmaşıklıkta komutlar sunmayı hedefleyen tasarım geleneğidir."
      },
      {
        "type": "bullet",
        "text": "Komutlar değişken uzunlukta olabilir."
      },
      {
        "type": "bullet",
        "text": "Bellek operandları ve çeşitli adresleme yöntemleri desteklenebilir."
      },
      {
        "type": "bullet",
        "text": "Tek komut birden fazla alt işi ifade edebilir."
      },
      {
        "type": "bullet",
        "text": "Kod yoğunluğu ve geriye dönük uyumluluk önemli olabilir."
      }
    ],
    "note": "Örneğin bir CISC komutu bellekteki bir operandı kullanıp aritmetik işlemi tek makine komutunda ifade edebilir. İşlemci bu komutu içeride daha küçük adımlara ayırabilir. Komut sayısı ile süreyi ayrı karşılaştır.",
    "diagram": []
  },
  {
    "week": 4,
    "page": 51,
    "id": "h4-s51",
    "section": "ISA tasarımları",
    "topic": "CISC ve RISC",
    "title": "CISC Açılımı",
    "blocks": [
      {
        "type": "text",
        "text": "CISC, Complex Instruction Set Computer ifadesinin kısaltmasıdır."
      },
      {
        "type": "bullet",
        "text": "Türkçesi: Karmaşık Komut Kümeli Bilgisayar"
      },
      {
        "type": "bullet",
        "text": "Komutlar farklı uzunluk ve karmaşıklıkta olabilir."
      },
      {
        "type": "bullet",
        "text": "Bazı komutlar bellek operandlarıyla birden fazla işi ifade eder."
      },
      {
        "type": "bullet",
        "text": "Tarihsel amaçlardan biri yüksek kod yoğunluğudur."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 52,
    "id": "h4-s52",
    "section": "ISA tasarımları",
    "topic": "CISC ve RISC",
    "title": "CISC Tasarımının Değiş Tokuşları",
    "blocks": [
      {
        "type": "text",
        "text": "Zengin komutlar kod boyutunu azaltabilir, fakat çözme ve uygulama yükünü artırabilir."
      },
      {
        "type": "row",
        "cells": [
          "Yarar",
          "Maliyet"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bazı işlemler daha az komutla ifade edilir",
          "Komut çözme ve sınır belirleme karmaşıklaşabilir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Yüksek kod yoğunluğu sağlanabilir",
          "Değişken yürütme süreleri oluşabilir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Uzun süreli yazılım uyumluluğu korunabilir",
          "Eski davranışları sürdürmek tasarım yükü oluşturur"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Zengin adresleme seçenekleri sunulur",
          "Komut kodlaması ve doğrulama karmaşıklaşabilir"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 53,
    "id": "h4-s53",
    "section": "ISA tasarımları",
    "topic": "CISC ve RISC",
    "title": "CISC Hakkında Yanlış Genellemeler",
    "blocks": [
      {
        "type": "text",
        "text": "Tarihsel eğilimler, bütün işlemciler için değişmez kural değildir."
      },
      {
        "type": "row",
        "cells": [
          "Yanlış genelleme",
          "Daha doğru ifade"
        ]
      },
      {
        "type": "row",
        "cells": [
          "CISC pipeline kullanmaz",
          "Modern x86 işlemciler gelişmiş pipeline kullanır."
        ]
      },
      {
        "type": "row",
        "cells": [
          "Her CISC komutu yavaştır",
          "Sık komutlar özel hızlı yollarda yürütülebilir."
        ]
      },
      {
        "type": "row",
        "cells": [
          "CISC her zaman daha çok transistör kullanır",
          "Transistör sayısı mikro mimari ve önbelleklere bağlıdır."
        ]
      },
      {
        "type": "row",
        "cells": [
          "Az komut her zaman kısa süre demektir",
          "CPI ve frekans da CPU süresini belirler."
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 54,
    "id": "h4-s54",
    "section": "ISA tasarımları",
    "topic": "CISC ve RISC",
    "title": "RISC Yaklaşımı",
    "blocks": [
      {
        "type": "text",
        "text": "RISC, düzenli komut biçimleri ve load-store veri yolu ile basit yürütmeyi öne çıkarır."
      },
      {
        "type": "bullet",
        "text": "Aritmetik işlemler çoğunlukla yazmaçlar üzerinde yapılır."
      },
      {
        "type": "bullet",
        "text": "Belleğe LOAD ve STORE komutlarıyla erişilir."
      },
      {
        "type": "bullet",
        "text": "Komut biçimleri genellikle sabit veya az sayıda düzenlidir."
      },
      {
        "type": "bullet",
        "text": "Derleyici, işlemi uygun basit komut dizisine dönüştürür."
      }
    ],
    "note": "Örneğin bellekteki iki değer için LOAD, LOAD, ADD ve STORE adımları kullanılabilir. Aritmetik yazmaçlarda yapılır. Düzenli kodlama çözmeyi kolaylaştırır, ama tüm komutların aynı sürede tamamlanması gerekmez.",
    "diagram": []
  },
  {
    "week": 4,
    "page": 55,
    "id": "h4-s55",
    "section": "ISA tasarımları",
    "topic": "CISC ve RISC",
    "title": "RISC Açılımı",
    "blocks": [
      {
        "type": "text",
        "text": "RISC, Reduced Instruction Set Computer ifadesinin kısaltmasıdır."
      },
      {
        "type": "bullet",
        "text": "Türkçesi: İndirgenmiş Komut Kümeli Bilgisayar"
      },
      {
        "type": "bullet",
        "text": "Amaç yalnızca komut sayısını azaltmak değildir."
      },
      {
        "type": "bullet",
        "text": "Düzenli komutlar ve load-store yaklaşımı öne çıkar."
      },
      {
        "type": "bullet",
        "text": "Derleyicinin kolay hedefleyebileceği işlemler tercih edilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 56,
    "id": "h4-s56",
    "section": "ISA tasarımları",
    "topic": "CISC ve RISC",
    "title": "RISC Tasarımının Değiş Tokuşları",
    "blocks": [
      {
        "type": "text",
        "text": "Düzenli komutlar donanımı kolaylaştırabilir, fakat kod ve derleyici sorumluluğunu artırabilir."
      },
      {
        "type": "row",
        "cells": [
          "Yarar",
          "Maliyet"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Getirme ve çözme düzenli olabilir",
          "Aynı iş için daha fazla komut gerekebilir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Load-store yapısı veri akışını açıklaştırır",
          "Bellek erişimi için ayrı komutlar gerekir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Çok sayıda yazmaç bellek erişimini azaltabilir",
          "Yazmaç alanları komutta yer kaplar"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Pipeline tasarımı kolaylaşabilir",
          "Performans derleyici kalitesinden etkilenir"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 57,
    "id": "h4-s57",
    "section": "ISA tasarımları",
    "topic": "CISC ve RISC",
    "title": "RISC Hakkında Yanlış Genellemeler",
    "blocks": [
      {
        "type": "text",
        "text": "Modern RISC çekirdekleri de karmaşık ve yüksek performanslı mikro mimariler kullanabilir."
      },
      {
        "type": "row",
        "cells": [
          "Yanlış genelleme",
          "Daha doğru ifade"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Her RISC komutu tek çevrimdir",
          "Bellek, çarpma ve vektör işlemleri çok çevrim sürebilir."
        ]
      },
      {
        "type": "row",
        "cells": [
          "RISC mikro kod kullanmaz",
          "Uygulama tekniği ISA sınıfından bağımsızdır."
        ]
      },
      {
        "type": "row",
        "cells": [
          "RISC her zaman az güç tüketir",
          "Güç, mikro mimari ve üretim teknolojisine bağlıdır."
        ]
      },
      {
        "type": "row",
        "cells": [
          "RISC daima daha hızlıdır",
          "Gerçek süre IC, CPI ve frekansla ölçülür."
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 58,
    "id": "h4-s58",
    "section": "ISA tasarımları",
    "topic": "Load-store, karşılaştırma ve mikro işlemler",
    "title": "Load-Store Örneği",
    "blocks": [
      {
        "type": "text",
        "text": "Bellekteki iki sayıyı çarpıp sonucu tekrar belleğe yazalım."
      },
      {
        "type": "row",
        "cells": [
          "Adım",
          "RISC benzeri komut",
          "Görev"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1",
          "LOAD R1, [A]",
          "A değerini yazmaca al"
        ]
      },
      {
        "type": "row",
        "cells": [
          "2",
          "LOAD R2, [B]",
          "B değerini yazmaca al"
        ]
      },
      {
        "type": "row",
        "cells": [
          "3",
          "MUL R3, R1, R2",
          "Yazmaçlardaki değerleri çarp"
        ]
      },
      {
        "type": "row",
        "cells": [
          "4",
          "STORE [A], R3",
          "Sonucu A konumuna yaz"
        ]
      },
      {
        "type": "text",
        "text": "CISC benzeri bir ISA aynı işi bellek operandlı tek bir karmaşık komutla ifade edebilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 59,
    "id": "h4-s59",
    "section": "ISA tasarımları",
    "topic": "Load-store, karşılaştırma ve mikro işlemler",
    "title": "Bellekteki İki Sayının Çarpılması",
    "blocks": [
      {
        "type": "bullet",
        "text": "İki operand bellekte bulunur."
      },
      {
        "type": "bullet",
        "text": "CISC benzeri komut işlemleri tek mimari komutta ifade edebilir."
      },
      {
        "type": "bullet",
        "text": "Load-store yaklaşımı verileri yazmaçlara alır."
      },
      {
        "type": "bullet",
        "text": "Komut sayısı ile yürütme süresi aynı ölçü değildir."
      }
    ],
    "note": "Önce iki bellek konumundan değer alınır. Load-store dizisinde değerler yazmaçlara gelir, yürütme birimi çarpar, gerekiyorsa sonuç belleğe yazılır.",
    "diagram": [
      "Ana bellek",
      "Yazmaçlar",
      "Yürütme birimi",
      "Hedef yazmaç / bellek"
    ]
  },
  {
    "week": 4,
    "page": 60,
    "id": "h4-s60",
    "section": "ISA tasarımları",
    "topic": "Load-store, karşılaştırma ve mikro işlemler",
    "title": "CISC Benzeri Çarpma Komutu",
    "blocks": [
      {
        "type": "text",
        "text": "CISC benzeri komut bellek operandlarını tek satırda ifade edebilir."
      },
      {
        "type": "row",
        "cells": [
          "Komut",
          "MULT [A], [B]"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Olası iç adımlar",
          "A’yı oku, B’yi oku, çarp, sonucu A’ya yaz"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Mimari komut sayısı",
          "1"
        ]
      },
      {
        "type": "row",
        "cells": [
          "İç işlem sayısı",
          "Birden fazla olabilir"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 61,
    "id": "h4-s61",
    "section": "ISA tasarımları",
    "topic": "Load-store, karşılaştırma ve mikro işlemler",
    "title": "Load-Store Çarpma Dizisi",
    "blocks": [
      {
        "type": "text",
        "text": "Aynı işlem, RISC benzeri load-store yapıda açık adımlarla ifade edilir."
      },
      {
        "type": "row",
        "cells": [
          "Sıra",
          "Komut",
          "Görev"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1",
          "LOAD R1, [A]",
          "A değerini al"
        ]
      },
      {
        "type": "row",
        "cells": [
          "2",
          "LOAD R2, [B]",
          "B değerini al"
        ]
      },
      {
        "type": "row",
        "cells": [
          "3",
          "MUL R3, R1, R2",
          "Çarp"
        ]
      },
      {
        "type": "row",
        "cells": [
          "4",
          "STORE [A], R3",
          "Sonucu yaz"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 62,
    "id": "h4-s62",
    "section": "ISA tasarımları",
    "topic": "Load-store, karşılaştırma ve mikro işlemler",
    "title": "RISC ve CISC Karşılaştırması",
    "blocks": [
      {
        "type": "text",
        "text": "Yaklaşımlar farklı öncelikler taşır; güncel işlemciler birçok özelliği birlikte kullanır."
      },
      {
        "type": "row",
        "cells": [
          "Özellik",
          "RISC eğilimi",
          "CISC eğilimi"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Komut biçimi",
          "Düzenli ve çoğu zaman sabit",
          "Değişken ve daha çeşitli"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bellek işlemleri",
          "Ayrı LOAD/STORE",
          "Bazı işlemler bellek operandı kullanabilir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Adresleme",
          "Daha sınırlı ve düzenli",
          "Daha zengin seçenekler"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Kod yoğunluğu",
          "Daha fazla komut gerekebilir",
          "Daha az komut mümkün olabilir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Uygulama",
          "Basit veya karmaşık olabilir",
          "Basit veya karmaşık olabilir"
        ]
      }
    ],
    "note": "Aynı iş için A, 4 komut ve CPI 1 ile 4 çevrim; B, 2 komut ve CPI 3 ile 6 çevrim kullansın. Frekans eşitse A önce biter. ISA ailesinin adı tek başına hangi uygulamanın hızlı olacağını göstermez.",
    "diagram": []
  },
  {
    "week": 4,
    "page": 63,
    "id": "h4-s63",
    "section": "ISA tasarımları",
    "topic": "Load-store, karşılaştırma ve mikro işlemler",
    "title": "Performans Denklemine Bağlantı",
    "blocks": [
      {
        "type": "text",
        "text": "ISA seçimi komut sayısını ve CPI’yi birlikte etkileyebilir."
      },
      {
        "type": "row",
        "cells": [
          "Yaklaşım",
          "Komut sayısı",
          "CPI üzerindeki olası etki"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Karmaşık komut",
          "Aynı iş için azalabilir",
          "Komut başına çevrim artabilir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Basit komut",
          "Aynı iş için artabilir",
          "Daha düzenli yürütme ile azalabilir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Gerçek sonuç",
          "CPU süresi = IC × CPI / f",
          "Bütün terimler birlikte ölçülür"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 64,
    "id": "h4-s64",
    "section": "ISA tasarımları",
    "topic": "Load-store, karşılaştırma ve mikro işlemler",
    "title": "Modern İşlemcilerde Sınırlar Bulanıktır",
    "blocks": [
      {
        "type": "text",
        "text": "ISA sınıflandırması, mikro mimarinin bütün ayrıntılarını açıklamaz."
      },
      {
        "type": "bullet",
        "text": "x86 işlemciler karmaşık komutları mikro işlemlere çevirebilir."
      },
      {
        "type": "bullet",
        "text": "ARM ve RISC-V işlemciler geniş uzantılar ve karmaşık çekirdekler kullanabilir."
      },
      {
        "type": "bullet",
        "text": "Her iki yaklaşımda pipeline ve sıra dışı yürütme bulunabilir."
      },
      {
        "type": "bullet",
        "text": "Uyumluluk, güç ve uygulama alanı tasarım kararlarını etkiler."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 65,
    "id": "h4-s65",
    "section": "ISA tasarımları",
    "topic": "Load-store, karşılaştırma ve mikro işlemler",
    "title": "x86 Komutları ve Mikro İşlemler",
    "blocks": [
      {
        "type": "text",
        "text": "Modern x86 işlemciler bazı mimari komutları bir veya daha fazla mikro işleme dönüştürebilir."
      },
      {
        "type": "bullet",
        "text": "Mikro işlem, işlemcinin iç yürütme birimlerine uygun parçadır."
      },
      {
        "type": "bullet",
        "text": "Mikro işlemler doğrudan programcıya görünen ayrı bir ISA değildir."
      },
      {
        "type": "bullet",
        "text": "Basit komutlar hızlı çözülebilir."
      },
      {
        "type": "bullet",
        "text": "Karmaşık durumlar mikro kod sıralayıcısını kullanabilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 66,
    "id": "h4-s66",
    "section": "Bellek düzeni",
    "topic": "Harvard ve Von Neumann",
    "title": "Von Neumann düzeninde ortak bellek yolu",
    "blocks": [
      {
        "type": "text",
        "text": "Von Neumann ve Harvard, işlemcinin komutları ve verileri bellekte nasıl tuttuğunu ve bunlara nasıl eriştiğini açıklayan iki temel bilgisayar organizasyonu yaklaşımıdır."
      },
      {
        "type": "text",
        "text": "İşlemcinin çalıştıracağı komutlarla, üzerinde işlem yapacağı veriler aynı yerde mi tutulacak, ayrı yerlerde mi?"
      },
      {
        "type": "text",
        "text": "Von Neumann mimarisinde program komutları ile veriler genellikle aynı bellek alanında tutulur ve aynı veri yolu üzerinden işlemciye taşınabilir. Örneğin RAM içinde hem program kodu hem de programın kullandığı sayılar bulunabilir. İşlemci bir anda ya komut getirir ya da veri okur/yazar. Bu yapı daha sade ve genel amaçlıdır; masaüstü ve genel amaçlı bilgisayarların programlama modeli tarihsel olarak büyük ölçüde bu yaklaşımla ilişkilidir."
      },
      {
        "type": "text",
        "text": "Bellek → hem komutlar hem veriler → CPU"
      },
      {
        "type": "text",
        "text": "Komut ve veri aynı yolu paylaşıyorsa ikisi aynı anda bu yolu kullanmak isteyebilir."
      },
      {
        "type": "text",
        "text": "Bu sınırlama genellikle Von Neumann darboğazı olarak adlandırılır."
      }
    ],
    "note": "Örnek. Toplama komutu ve toplanacak sayılar aynı RAM’deyse komut getirme ve veri okuma aynı yolu kullanabilir. Bu yolun kapasitesi sınırlıysa işlemci bekler. Birden çok programın nasıl zamanlandığı işletim sistemi düzeyinde ayrıca belirlenir.",
    "diagram": [
      "Komut ve veri belleği",
      "Ortak aktarım yolu",
      "CPU"
    ]
  },
  {
    "week": 4,
    "page": 67,
    "id": "h4-s67",
    "section": "Bellek düzeni",
    "topic": "Harvard ve Von Neumann",
    "title": "Harvard düzeninde ayrı komut ve veri yolları",
    "blocks": [
      {
        "type": "text",
        "text": "Harvard mimarisinde ise komutlar ve veriler için ayrı bellekler veya ayrı erişim yolları bulunur. İşlemci aynı anda bir sonraki komutu getirirken diğer taraftan veri okuyabilir."
      },
      {
        "type": "text",
        "text": "Komut belleği → CPU ← Veri belleği"
      },
      {
        "type": "text",
        "text": "Bu nedenle paralel erişim açısından avantaj sağlayabilir. Özellikle mikrodenetleyiciler,"
      },
      {
        "type": "text",
        "text": "DSP’ler (Digital Signal Processor-Sayısal Sinyal İşlemcisi) ve gömülü sistemlerde klasik Harvard yaklaşımına daha sık rastlanır. Program belleği ile veri belleğinin özellikleri de farklı seçilebilir."
      },
      {
        "type": "text",
        "text": "C=A+B"
      },
      {
        "type": "text",
        "text": "İşlemcinin önce ADD benzeri komutu getirmesi, sonra A ve B verilerine erişmesi gerekir. Von Neumann yapıda bunlar aynı bellek yolunu paylaşabilir. Harvard yapıda ise komut getirme ile veri erişimi ayrı yollar üzerinden eşzamanlı yapılabilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 68,
    "id": "h4-s68",
    "section": "Bellek düzeni",
    "topic": "Harvard ve Von Neumann",
    "title": "Harvard ve Von Neumann Düzeni",
    "blocks": [
      {
        "type": "text",
        "text": "Komut ve veri yollarının düzeni, ISA’dan ayrı fakat ilişkili bir organizasyon seçimidir."
      },
      {
        "type": "row",
        "cells": [
          "Özellik",
          "Von Neumann",
          "Harvard"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Adres alanı",
          "Komut ve veri ortak olabilir",
          "Komut ve veri ayrıdır"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Yol / bellek",
          "Ortak erişim yolu kullanılabilir",
          "Ayrı yollarla eş zamanlı erişim"
        ]
      },
      {
        "type": "text",
        "text": "mümkün"
      },
      {
        "type": "row",
        "cells": [
          "Güncel kullanım",
          "Genel amaçlı programlama modeli",
          "Mikrodenetleyici veya önbellek düzeyi"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Karma model",
          "Tek adres alanı, ayrı L1 komut/veri",
          "Modified Harvard örneği"
        ]
      },
      {
        "type": "text",
        "text": "önbelleği"
      }
    ],
    "note": "Von Neumann düzeninde komut ve veri aynı bellek düzenini ve aktarım kaynaklarını paylaşabilir. Harvard düzeni bunları ayırır. Modern bir işlemci ayrı L1 komut/veri önbellekleriyle birleşik ana belleği birlikte kullanabilir.",
    "diagram": [
      "Komut ve veri",
      "Bellek / önbellek",
      "İşlemci"
    ]
  },
  {
    "week": 4,
    "page": 69,
    "id": "h4-s69",
    "section": "Bellek düzeni",
    "topic": "Harvard ve Von Neumann",
    "title": "Harvard ve Von Neumann Ayrımının Sınırı",
    "blocks": [
      {
        "type": "text",
        "text": "Bellek düzeni ile RISC-CISC sınıflandırması aynı eksen değildir."
      },
      {
        "type": "row",
        "cells": [
          "Konu",
          "Von Neumann eğilimi",
          "Harvard eğilimi"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Adres alanı",
          "Komut ve veri ortak",
          "Komut ve veri ayrı"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Erişim yolu",
          "Ortak yol kullanılabilir",
          "Ayrı yollar kullanılabilir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Modern uygulama",
          "Birleşik ana bellek, ayrık önbellekler",
          "Değiştirilmiş Harvard yaygındır"
        ]
      },
      {
        "type": "text",
        "text": "olabilir"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 70,
    "id": "h4-s70",
    "section": "ISA tasarımları",
    "topic": "RISC-V, ARM ve x86-64",
    "title": "RISC-V",
    "blocks": [
      {
        "type": "text",
        "text": "RISC-V, açık ve modüler bir komut kümesi standardıdır."
      },
      {
        "type": "bullet",
        "text": "Temel ISA küçük tutulur."
      },
      {
        "type": "bullet",
        "text": "İhtiyaca göre standart uzantılar eklenir."
      },
      {
        "type": "bullet",
        "text": "32 ve 64 bit tabanlar yaygın olarak kullanılır."
      },
      {
        "type": "bullet",
        "text": "Akademik ve ticari işlemci uygulamaları geliştirilebilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 71,
    "id": "h4-s71",
    "section": "ISA tasarımları",
    "topic": "RISC-V, ARM ve x86-64",
    "title": "RISC-V Modüler Yapısı",
    "blocks": [
      {
        "type": "text",
        "text": "Temel komut seti, seçilen standart uzantılarla genişletilir."
      },
      {
        "type": "row",
        "cells": [
          "Parça",
          "Görev örneği"
        ]
      },
      {
        "type": "row",
        "cells": [
          "RV32I / RV64I",
          "Temel tamsayı komutları (32 veya 64 bit)"
        ]
      },
      {
        "type": "row",
        "cells": [
          "M",
          "Tamsayı çarpma ve bölme"
        ]
      },
      {
        "type": "row",
        "cells": [
          "A",
          "Atomik işlemler"
        ]
      },
      {
        "type": "row",
        "cells": [
          "F/D",
          "Tek ve çift duyarlıklı kayan nokta"
        ]
      },
      {
        "type": "row",
        "cells": [
          "C",
          "Sıkıştırılmış komut kodlaması"
        ]
      },
      {
        "type": "row",
        "cells": [
          "V",
          "Vektör işlemleri"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 72,
    "id": "h4-s72",
    "section": "ISA tasarımları",
    "topic": "RISC-V, ARM ve x86-64",
    "title": "RISC-V Açık Standarttır",
    "blocks": [
      {
        "type": "text",
        "text": "RISC-V spesifikasyonları ücretsiz ve kamuya açık bir ISA standardıdır."
      },
      {
        "type": "bullet",
        "text": "RISC-V International standardı geliştirir ve onaylar."
      },
      {
        "type": "bullet",
        "text": "Bir RISC-V çekirdeği açık veya kapalı kaynaklı olabilir."
      },
      {
        "type": "bullet",
        "text": "ISA’nın açık olması üretim ve doğrulama maliyetlerini ortadan kaldırmaz."
      },
      {
        "type": "bullet",
        "text": "Yazılım, hedeflenen uzantı kümesine göre derlenir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 73,
    "id": "h4-s73",
    "section": "ISA tasarımları",
    "topic": "RISC-V, ARM ve x86-64",
    "title": "ARM, x86-64 ve RISC-V",
    "blocks": [
      {
        "type": "text",
        "text": "Üç ISA ailesi farklı uyumluluk ve lisanslama modelleriyle kullanılır."
      },
      {
        "type": "row",
        "cells": [
          "ISA ailesi",
          "Genel özellik",
          "Yaygın alan"
        ]
      },
      {
        "type": "row",
        "cells": [
          "x86-64",
          "Uzun süreli ikili uyumluluk, değişken",
          "Masaüstü ve sunucu"
        ]
      },
      {
        "type": "text",
        "text": "komutlar"
      },
      {
        "type": "row",
        "cells": [
          "ARM",
          "Lisanslanan RISC ISA ve geniş ekosistem",
          "Mobil, gömülü, masaüstü, sunucu"
        ]
      },
      {
        "type": "row",
        "cells": [
          "RISC-V",
          "Açık standart ve modüler uzantılar",
          "Gömülü, eğitim, araştırma ve"
        ]
      },
      {
        "type": "text",
        "text": "gelişen ürünler"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 74,
    "id": "h4-s74",
    "section": "ISA tasarımları",
    "topic": "RISC-V, ARM ve x86-64",
    "title": "ISA Ailelerini Karşılaştırırken Sorulacak Sorular",
    "blocks": [
      {
        "type": "text",
        "text": "Marka veya etiket yerine teknik gereksinim değerlendirilir."
      },
      {
        "type": "bullet",
        "text": "Gerekli ikili yazılım ve işletim sistemi var mı?"
      },
      {
        "type": "bullet",
        "text": "Gerekli komut uzantıları destekleniyor mu?"
      },
      {
        "type": "bullet",
        "text": "Hedef güç, maliyet ve performans sınırı nedir?"
      },
      {
        "type": "bullet",
        "text": "Derleyici ve geliştirme araçları yeterli mi?"
      },
      {
        "type": "bullet",
        "text": "Uzun dönem uyumluluk gereksinimi nedir?"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 75,
    "id": "h4-s75",
    "section": "Pekiştirme",
    "topic": "Alıştırmalar, çözümler ve kavramlar",
    "title": "Komutları sınıflandırma alıştırması",
    "blocks": [
      {
        "type": "text",
        "text": "Komutları işlem sınıfı, operand konumu ve adresleme yöntemi açısından inceleyiniz."
      },
      {
        "type": "row",
        "cells": [
          "Komut",
          "Sınıflandırma"
        ]
      },
      {
        "type": "text",
        "text": "ADD R1, R2, #5"
      },
      {
        "type": "text",
        "text": "LOAD R3, [R4+12]"
      },
      {
        "type": "text",
        "text": "STORE [R5], R6"
      },
      {
        "type": "text",
        "text": "BEQ R1, R2, label"
      },
      {
        "type": "text",
        "text": "MUL [A], [B]"
      },
      {
        "type": "text",
        "text": "Her grup ayrıca aynı işin load-store yaklaşımındaki olası komut dizisini yazacaktır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 76,
    "id": "h4-s76",
    "section": "Pekiştirme",
    "topic": "Alıştırmalar, çözümler ve kavramlar",
    "title": "Adresleme yöntemlerini bulma alıştırması",
    "blocks": [
      {
        "type": "text",
        "text": "Komutları işlem sınıfı, operand konumu ve adresleme yöntemi açısından inceleyiniz."
      },
      {
        "type": "row",
        "cells": [
          "Komut",
          "İstenen sınıflandırma"
        ]
      },
      {
        "type": "row",
        "cells": [
          "ADD R1, R2, #5",
          "İşlem türü, hedef, kaynaklar ve immediate operand"
        ]
      },
      {
        "type": "row",
        "cells": [
          "LOAD R3, [R4+12]",
          "Veri taşıma ve base+offset adresleme"
        ]
      },
      {
        "type": "row",
        "cells": [
          "STORE [R5], R6",
          "Veri taşıma ve register indirect adresleme"
        ]
      },
      {
        "type": "row",
        "cells": [
          "BEQ R1, R2, label",
          "Kontrol akışı ve PC relative hedef"
        ]
      },
      {
        "type": "row",
        "cells": [
          "MUL [A], [B]",
          "Bellek operandlı karmaşık komut tartışması"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 77,
    "id": "h4-s77",
    "section": "Pekiştirme",
    "topic": "Alıştırmalar, çözümler ve kavramlar",
    "title": "Örneklerde Beklenen Yanıt",
    "blocks": [
      {
        "type": "text",
        "text": "Her komut için dört bilgi açıkça verilmelidir."
      },
      {
        "type": "row",
        "cells": [
          "Bölüm",
          "Beklenen açıklama"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Komut sınıfı",
          "Veri taşıma, aritmetik, mantıksal veya kontrol akışı"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Operandlar",
          "Kaynak ve hedeflerin ayrı gösterilmesi"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Adresleme yöntemi",
          "Immediate, register, indirect, base+offset veya PC relative"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Etkili adres",
          "Bellek erişimi varsa adres hesabı"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Alternatif dizi",
          "Aynı işi farklı ISA yaklaşımıyla ifade etme"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 78,
    "id": "h4-s78",
    "section": "Pekiştirme",
    "topic": "Alıştırmalar, çözümler ve kavramlar",
    "title": "Kapsamlı Örnek",
    "blocks": [
      {
        "type": "text",
        "text": "R2=1000, R3=5, M[1020]=40 ve M[40]=7 olsun."
      },
      {
        "type": "row",
        "cells": [
          "Operand",
          "Adresleme",
          "EA veya değer"
        ]
      },
      {
        "type": "text",
        "text": "#12"
      },
      {
        "type": "text",
        "text": "R3"
      },
      {
        "type": "text",
        "text": "[R2]"
      },
      {
        "type": "text",
        "text": "[R2+20]"
      },
      {
        "type": "text",
        "text": "[R2+R3×4]"
      },
      {
        "type": "text",
        "text": "M[M[1020]]"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 79,
    "id": "h4-s79",
    "section": "Pekiştirme",
    "topic": "Alıştırmalar, çözümler ve kavramlar",
    "title": "Kapsamlı Örnek Cevabı",
    "blocks": [
      {
        "type": "text",
        "text": "R2=1000, R3=5, M[1020]=40 ve M[40]=7 olsun."
      },
      {
        "type": "row",
        "cells": [
          "Operand",
          "Adresleme",
          "EA veya değer"
        ]
      },
      {
        "type": "row",
        "cells": [
          "#12",
          "Immediate",
          "12"
        ]
      },
      {
        "type": "row",
        "cells": [
          "R3",
          "Register",
          "5"
        ]
      },
      {
        "type": "row",
        "cells": [
          "[R2]",
          "Register indirect",
          "M[1000]"
        ]
      },
      {
        "type": "row",
        "cells": [
          "[R2+20]",
          "Base+offset",
          "M[1020]=40"
        ]
      },
      {
        "type": "row",
        "cells": [
          "[R2+R3×4]",
          "Indexed",
          "M[1020]=40"
        ]
      },
      {
        "type": "row",
        "cells": [
          "M[M[1020]]",
          "Memory indirect",
          "M[40]=7"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 80,
    "id": "h4-s80",
    "section": "Pekiştirme",
    "topic": "Alıştırmalar, çözümler ve kavramlar",
    "title": "Sık Karıştırılan Noktalar",
    "blocks": [
      {
        "type": "text",
        "text": "ISA terimleri mikro mimari ve performans terimlerinden ayrılmalıdır."
      },
      {
        "type": "row",
        "cells": [
          "Yanlış genelleme",
          "Doğru açıklama"
        ]
      },
      {
        "type": "row",
        "cells": [
          "RISC komutları her zaman tek çevrimdir",
          "Yürütme süresi komuta ve uygulamaya bağlıdır"
        ]
      },
      {
        "type": "row",
        "cells": [
          "CISC pipeline kullanmaz",
          "Modern CISC uygulamalarında gelişmiş pipeline vardır"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Mikro kod yalnızca CISC içindir",
          "Kontrol tekniği ISA etiketinden bağımsızdır"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Az komut her zaman hızlıdır",
          "CPU süresi IC, CPI ve frekansa bağlıdır"
        ]
      },
      {
        "type": "row",
        "cells": [
          "RISC-V işlemcilerin tümü açıktır",
          "Açık olan ISA standardıdır; uygulama lisansı değişebilir"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 81,
    "id": "h4-s81",
    "section": "Pekiştirme",
    "topic": "Alıştırmalar, çözümler ve kavramlar",
    "title": "Kavramlar ve Açılımlar",
    "blocks": [
      {
        "type": "text",
        "text": "Bu haftada kullanılan kısaltmalar verilmiştir."
      },
      {
        "type": "row",
        "cells": [
          "Kısaltma",
          "Açılım",
          "Türkçe anlam"
        ]
      },
      {
        "type": "row",
        "cells": [
          "ISA",
          "Instruction Set Architecture",
          "Komut Kümesi Mimarisi"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Opcode",
          "Operation Code",
          "İşlem kodu"
        ]
      },
      {
        "type": "row",
        "cells": [
          "EA",
          "Effective Address",
          "Etkili adres"
        ]
      },
      {
        "type": "row",
        "cells": [
          "PC",
          "Program Counter",
          "Program sayacı"
        ]
      },
      {
        "type": "row",
        "cells": [
          "SP",
          "Stack Pointer",
          "Yığın işaretçisi"
        ]
      },
      {
        "type": "row",
        "cells": [
          "RISC",
          "Reduced Instruction Set Computer",
          "İndirgenmiş komut kümeli bilgisayar"
        ]
      },
      {
        "type": "row",
        "cells": [
          "CISC",
          "Complex Instruction Set Computer",
          "Karmaşık komut kümeli bilgisayar"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 4,
    "page": 82,
    "id": "h4-s82",
    "section": "Pekiştirme",
    "topic": "Alıştırmalar, çözümler ve kavramlar",
    "title": "Gelecek hafta…",
    "blocks": [
      {
        "type": "text",
        "text": "Komutlar yalnızca işlemi değil, verinin bit düzeyindeki yorumunu da belirler."
      },
      {
        "type": "bullet",
        "text": "İşaretli ve işaretsiz sayı gösterimi"
      },
      {
        "type": "bullet",
        "text": "İkinin tümleyeni"
      },
      {
        "type": "bullet",
        "text": "Toplama ve çıkarma"
      },
      {
        "type": "bullet",
        "text": "Taşma koşulları"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 2,
    "id": "h5-s2",
    "section": "Sayıların gösterimi",
    "topic": "Bit, basamak ve işaretsiz yorum",
    "title": "Bu Haftanın Temel Sorusu",
    "blocks": [
      {
        "type": "text",
        "text": "Aynı bit dizisi hangi koşulda pozitif, hangi koşulda negatif bir sayıyı temsil eder?"
      },
      {
        "type": "bullet",
        "text": "Bitlerin anlamı veri türüne ve kullanılan sayı gösterimine bağlıdır."
      },
      {
        "type": "bullet",
        "text": "İkinin tümleyeni, güncel işlemcilerde işaretli tamsayıların temel gösterimidir."
      },
      {
        "type": "bullet",
        "text": "Toplama ve çıkarma aynı ikili toplayıcı yapısından yararlanabilir."
      },
      {
        "type": "bullet",
        "text": "Taşma, matematiksel sonuç ayrılan bit sayısına sığmadığında ortaya çıkar."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 3,
    "id": "h5-s3",
    "section": "Sayıların gösterimi",
    "topic": "Bit, basamak ve işaretsiz yorum",
    "title": "4. Haftadan 5. Haftaya Bağlantı",
    "blocks": [
      {
        "type": "text",
        "text": "Komut kümesi mimarisi sayıları yalnızca saklamaz; bu bitlerin nasıl yorumlanacağını da tanımlar."
      },
      {
        "type": "row",
        "cells": [
          "4. haftadaki kavram",
          "5. haftadaki karşılığı"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Yazmaç",
          "Sabit genişlikte bit dizisi saklar"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Veri türü",
          "Bit dizisinin işaretli veya işaretsiz yorumunu belirler"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Aritmetik komut",
          "Toplama, çıkarma ve taşma davranışını tanımlar"
        ]
      },
      {
        "type": "row",
        "cells": [
          "ISA",
          "Sonucun ve istisnaların programcıya görünen"
        ]
      },
      {
        "type": "text",
        "text": "kurallarını belirler"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 4,
    "id": "h5-s4",
    "section": "Sayıların gösterimi",
    "topic": "Bit, basamak ve işaretsiz yorum",
    "title": "Kavram Haritası",
    "blocks": [
      {
        "type": "text",
        "text": "Konu, bit örüntüsünden başlayıp aritmetik taşmanın yorumlanmasına ilerler."
      },
      {
        "type": "bullet",
        "text": "İkili sayı ve basamak değeri"
      },
      {
        "type": "bullet",
        "text": "İşaretsiz ve işaretli yorum"
      },
      {
        "type": "bullet",
        "text": "İkinin tümleyeni ile negatif sayılar"
      },
      {
        "type": "bullet",
        "text": "Toplama ve çıkarma"
      },
      {
        "type": "bullet",
        "text": "Taşıma, işaretli taşma ve işlemci davranışı"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 5,
    "id": "h5-s5",
    "section": "Sayıların gösterimi",
    "topic": "Bit, basamak ve işaretsiz yorum",
    "title": "Bit ve İkili Sayı",
    "blocks": [
      {
        "type": "text",
        "text": "Bit, binary digit ifadesinin kısaltmasıdır ve 0 veya 1 değerini alır."
      },
      {
        "type": "row",
        "cells": [
          "Kavram",
          "Anlamı",
          "Örnek"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bit",
          "Tek ikili basamak",
          "0 veya 1"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Nibble",
          "4 bitlik grup",
          "1011"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Byte",
          "8 bitlik grup",
          "1100 0101"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Word",
          "İşlemcinin doğal veri genişliği",
          "MIPS32 için 32 bit"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 6,
    "id": "h5-s6",
    "section": "Sayıların gösterimi",
    "topic": "Bit, basamak ve işaretsiz yorum",
    "title": "İkili Sayıda Basamak Değeri",
    "blocks": [
      {
        "type": "text",
        "text": "Sağdan sola her basamağın ağırlığı ikinin kuvvetleriyle artar."
      },
      {
        "type": "row",
        "cells": [
          "Bit konumu",
          "3",
          "2",
          "1",
          "0"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Ağırlık",
          "2³ = 8",
          "2² = 4",
          "2¹ = 2",
          "2⁰ = 1"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1011 içindeki bit",
          "1",
          "0",
          "1",
          "1"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Katkı",
          "8",
          "0",
          "2",
          "1"
        ]
      },
      {
        "type": "text",
        "text": "1011₂ = 1×8 + 0×4 + 1×2 + 1×1 = 11₁₀"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 7,
    "id": "h5-s7",
    "section": "Sayıların gösterimi",
    "topic": "Bit, basamak ve işaretsiz yorum",
    "title": "İşaretsiz Tamsayı Aralığı",
    "blocks": [
      {
        "type": "text",
        "text": "n bit ile 2ⁿ farklı bit örüntüsü oluşturulur."
      },
      {
        "type": "row",
        "cells": [
          "Bit sayısı",
          "En küçük",
          "En büyük",
          "Farklı değer sayısı"
        ]
      },
      {
        "type": "text",
        "text": "4"
      },
      {
        "type": "text",
        "text": "0"
      },
      {
        "type": "text",
        "text": "15"
      },
      {
        "type": "text",
        "text": "16"
      },
      {
        "type": "text",
        "text": "8"
      },
      {
        "type": "text",
        "text": "0"
      },
      {
        "type": "text",
        "text": "255"
      },
      {
        "type": "text",
        "text": "256"
      },
      {
        "type": "row",
        "cells": [
          "16",
          "0",
          "65.535",
          "65.536"
        ]
      },
      {
        "type": "row",
        "cells": [
          "32",
          "0",
          "4.294.967.295",
          "4.294.967.296"
        ]
      },
      {
        "type": "text",
        "text": "İşaretsiz n bit aralığı: 0 ≤ x ≤ 2ⁿ - 1"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 8,
    "id": "h5-s8",
    "section": "Sayıların gösterimi",
    "topic": "Bit, basamak ve işaretsiz yorum",
    "title": "Negatif Sayılara Neden İhtiyaç Duyulur?",
    "blocks": [
      {
        "type": "text",
        "text": "Programlar yalnızca sıfır ve pozitif değerlerle çalışmaz."
      },
      {
        "type": "bullet",
        "text": "Sıcaklık farkı, konum farkı ve hata değeri negatif olabilir."
      },
      {
        "type": "bullet",
        "text": "Çıkarma işleminin sonucu sıfırın altına inebilir."
      },
      {
        "type": "bullet",
        "text": "Algoritmalar pozitif ve negatif ara sonuçlar üretebilir."
      },
      {
        "type": "bullet",
        "text": "Aynı aritmetik donanımın iki işareti de işlemesi tasarımı sadeleştirir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 9,
    "id": "h5-s9",
    "section": "Sayıların gösterimi",
    "topic": "Bit, basamak ve işaretsiz yorum",
    "title": "Aynı Bit Dizisinin İki Yorumu",
    "blocks": [
      {
        "type": "text",
        "text": "Bit dizisi tek başına veri türünü söylemez."
      },
      {
        "type": "row",
        "cells": [
          "8 bitlik örüntü",
          "İşaretsiz yorum",
          "İkinin tümleyeni yorumu"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0000 0101",
          "5",
          "5"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0111 1111",
          "127",
          "127"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1000 0000",
          "128",
          "-128"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1111 1111",
          "255",
          "-1"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 10,
    "id": "h5-s10",
    "section": "Sayıların gösterimi",
    "topic": "İşaret-büyüklük ve tümleyenler",
    "title": "İşaretli Sayı Gösterimleri",
    "blocks": [
      {
        "type": "text",
        "text": "Tarihsel olarak üç temel yöntem kullanılmıştır."
      },
      {
        "type": "row",
        "cells": [
          "Gösterim",
          "Negatif sayı oluşturma",
          "Sıfır sayısı"
        ]
      },
      {
        "type": "row",
        "cells": [
          "İşaret-büyüklük (sign-magnitude)",
          "İşaret bitini 1 yap",
          "+0 ve -0"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bire tümleyen",
          "Bütün bitleri tersle",
          "+0 ve -0"
        ]
      },
      {
        "type": "row",
        "cells": [
          "İkiye tümleyen",
          "Bitleri tersle ve 1 ekle",
          "Tek sıfır"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 11,
    "id": "h5-s11",
    "section": "Sayıların gösterimi",
    "topic": "İşaret-büyüklük ve tümleyenler",
    "title": "İşaret-Büyüklük Gösterimi",
    "blocks": [
      {
        "type": "text",
        "text": "En soldaki bit işareti, diğer bitler mutlak değeri gösterir."
      },
      {
        "type": "row",
        "cells": [
          "4 bit örüntü",
          "Değer"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0101",
          "+5"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1101",
          "-5"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0000",
          "+0"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1000",
          "-0"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 12,
    "id": "h5-s12",
    "section": "Sayıların gösterimi",
    "topic": "İşaret-büyüklük ve tümleyenler",
    "title": "Bire Tümleyen Gösterimi",
    "blocks": [
      {
        "type": "text",
        "text": "Negatif sayı, pozitif sayının bütün bitleri terslenerek elde edilir."
      },
      {
        "type": "row",
        "cells": [
          "4 bit örüntü",
          "Değer"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0101",
          "+5"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1010",
          "-5"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0000",
          "+0"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1111",
          "-0"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 13,
    "id": "h5-s13",
    "section": "Sayıların gösterimi",
    "topic": "İşaret-büyüklük ve tümleyenler",
    "title": "İkinin Tümleyeni Gösterimi",
    "blocks": [
      {
        "type": "text",
        "text": "Negatif sayı, bitler terslenip bir eklenerek elde edilir."
      },
      {
        "type": "row",
        "cells": [
          "Adım",
          "+5 için 4 bit"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Pozitif gösterim",
          "0101"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bitleri tersle",
          "1010"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bir ekle",
          "1011"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Sonuç",
          "1011 = -5"
        ]
      },
      {
        "type": "text",
        "text": "-x = NOT(x) + 1, işlem n bit içinde yapılır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 14,
    "id": "h5-s14",
    "section": "Sayıların gösterimi",
    "topic": "İşaret-büyüklük ve tümleyenler",
    "title": "Üç Gösterimin Karşılaştırılması",
    "blocks": [
      {
        "type": "text",
        "text": "Dört bitlik örnekte aynı sayılar farklı örüntüler kullanır."
      },
      {
        "type": "row",
        "cells": [
          "Değer",
          "İşaret-büyüklük",
          "Bire tümleyen",
          "İkiye tümleyen"
        ]
      },
      {
        "type": "row",
        "cells": [
          "+5",
          "0101",
          "0101",
          "0101"
        ]
      },
      {
        "type": "row",
        "cells": [
          "-5",
          "1101",
          "1010",
          "1011"
        ]
      },
      {
        "type": "row",
        "cells": [
          "+0",
          "0000",
          "0000",
          "0000"
        ]
      },
      {
        "type": "row",
        "cells": [
          "-0",
          "1000",
          "1111",
          "Yok"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 15,
    "id": "h5-s15",
    "section": "Sayıların gösterimi",
    "topic": "İşaret-büyüklük ve tümleyenler",
    "title": "İkinin Tümleyeni Neden Tercih Edilir?",
    "blocks": [
      {
        "type": "text",
        "text": "Gösterim, aritmetik devresini ve sayı aralığını sadeleştirir."
      },
      {
        "type": "bullet",
        "text": "Sıfırın tek bir bit örüntüsü vardır."
      },
      {
        "type": "bullet",
        "text": "Toplama devresi hem pozitif hem negatif sayılarla aynı bit işlemini yapar."
      },
      {
        "type": "bullet",
        "text": "Çıkarma, çıkan sayının ikinin tümleyeni eklenerek yapılabilir."
      },
      {
        "type": "bullet",
        "text": "En yüksek anlamlı bit negatif ağırlıkla değerlendirilebilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 16,
    "id": "h5-s16",
    "section": "Sayıların gösterimi",
    "topic": "Gösterilebilir sayı aralıkları",
    "title": "n Bitlik İkinin Tümleyeni Aralığı",
    "blocks": [
      {
        "type": "text",
        "text": "Pozitif tarafta bir değer eksik, negatif tarafta bir değer fazladır."
      },
      {
        "type": "row",
        "cells": [
          "Sınır",
          "Formül"
        ]
      },
      {
        "type": "row",
        "cells": [
          "En küçük değer",
          "-2ⁿ⁻¹"
        ]
      },
      {
        "type": "row",
        "cells": [
          "En büyük değer",
          "2ⁿ⁻¹ - 1"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Toplam farklı değer",
          "2ⁿ"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Sıfır gösterimi",
          "Tek"
        ]
      },
      {
        "type": "text",
        "text": "-2ⁿ⁻¹ ≤ x ≤ 2ⁿ⁻¹ - 1"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 17,
    "id": "h5-s17",
    "section": "Sayıların gösterimi",
    "topic": "Gösterilebilir sayı aralıkları",
    "title": "4 Bitlik Değer Tablosu: Pozitif Bölüm",
    "blocks": [
      {
        "type": "text",
        "text": "En soldaki bit 0 olduğunda değer 0 ile 7 arasındadır."
      },
      {
        "type": "row",
        "cells": [
          "Bit örüntüsü",
          "İkinin tümleyeni değeri"
        ]
      },
      {
        "type": "text",
        "text": "0000"
      },
      {
        "type": "text",
        "text": "0"
      },
      {
        "type": "text",
        "text": "0001"
      },
      {
        "type": "text",
        "text": "1"
      },
      {
        "type": "text",
        "text": "0010"
      },
      {
        "type": "text",
        "text": "2"
      },
      {
        "type": "text",
        "text": "0011"
      },
      {
        "type": "text",
        "text": "3"
      },
      {
        "type": "text",
        "text": "0100"
      },
      {
        "type": "text",
        "text": "4"
      },
      {
        "type": "text",
        "text": "0101"
      },
      {
        "type": "text",
        "text": "5"
      },
      {
        "type": "text",
        "text": "0110"
      },
      {
        "type": "text",
        "text": "6"
      },
      {
        "type": "text",
        "text": "0111"
      },
      {
        "type": "text",
        "text": "7"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 18,
    "id": "h5-s18",
    "section": "Sayıların gösterimi",
    "topic": "Gösterilebilir sayı aralıkları",
    "title": "4 Bitlik Değer Tablosu: Negatif Bölüm",
    "blocks": [
      {
        "type": "text",
        "text": "En soldaki bit 1 olduğunda değer -8 ile -1 arasındadır."
      },
      {
        "type": "row",
        "cells": [
          "Bit örüntüsü",
          "İkinin tümleyeni değeri"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1000",
          "-8"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1001",
          "-7"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1010",
          "-6"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1011",
          "-5"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1100",
          "-4"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1101",
          "-3"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1110",
          "-2"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1111",
          "-1"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 19,
    "id": "h5-s19",
    "section": "Sayıların gösterimi",
    "topic": "Gösterilebilir sayı aralıkları",
    "title": "8 Bitlik Temel Değerler",
    "blocks": [
      {
        "type": "text",
        "text": "Sekiz bitlik ikinin tümleyeni aralığı -128 ile 127 arasındadır."
      },
      {
        "type": "row",
        "cells": [
          "Bit örüntüsü",
          "Onluk değer",
          "Açıklama"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0000 0000",
          "0",
          "Sıfır"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0000 0001",
          "1",
          "En küçük pozitif"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0111 1111",
          "127",
          "En büyük pozitif"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1000 0000",
          "-128",
          "En küçük negatif"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1111 1111",
          "-1",
          "Sıfıra en yakın negatif"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 20,
    "id": "h5-s20",
    "section": "Sayıların gösterimi",
    "topic": "Gösterilebilir sayı aralıkları",
    "title": "32 Bitlik İşaretli Tamsayı Aralığı",
    "blocks": [
      {
        "type": "text",
        "text": "MIPS32 yazmaçları 32 bitlik örüntüler saklar."
      },
      {
        "type": "row",
        "cells": [
          "Sınır",
          "Bit örüntüsü",
          "Onluk değer"
        ]
      },
      {
        "type": "row",
        "cells": [
          "En büyük pozitif",
          "0x7FFF FFFF",
          "2.147.483.647"
        ]
      },
      {
        "type": "row",
        "cells": [
          "En küçük negatif",
          "0x8000 0000",
          "-2.147.483.648"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Eksi bir",
          "0xFFFF FFFF",
          "-1"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Sıfır",
          "0x0000 0000",
          "0"
        ]
      },
      {
        "type": "text",
        "text": "-2.147.483.648 ≤ x ≤ 2.147.483.647"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 21,
    "id": "h5-s21",
    "section": "Taban dönüşümleri",
    "topic": "Negatifleme ve bit dizisini okuma",
    "title": "Negatif Sayıyı Elde Etme",
    "blocks": [
      {
        "type": "text",
        "text": "Pozitif örüntü aynı bit genişliğinde terslenir ve bir artırılır."
      },
      {
        "type": "row",
        "cells": [
          "Adım",
          "İşlem"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1",
          "Pozitif değeri n bit ile yaz"
        ]
      },
      {
        "type": "row",
        "cells": [
          "2",
          "Bütün bitleri tersle"
        ]
      },
      {
        "type": "row",
        "cells": [
          "3",
          "En sağdan bir ekle"
        ]
      },
      {
        "type": "row",
        "cells": [
          "4",
          "n bit dışına çıkan taşımayı at"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 22,
    "id": "h5-s22",
    "section": "Taban dönüşümleri",
    "topic": "Negatifleme ve bit dizisini okuma",
    "title": "Negatif sayının bitlerini tersleyip bir eklemek",
    "blocks": [
      {
        "type": "row",
        "cells": [
          "Adım",
          "8 bitlik değer"
        ]
      },
      {
        "type": "row",
        "cells": [
          "+2",
          "0000 0010"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bitleri tersle",
          "1111 1101"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bir ekle",
          "1111 1110"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Kontrol",
          "1111 1110 = -2"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 23,
    "id": "h5-s23",
    "section": "Taban dönüşümleri",
    "topic": "Negatifleme ve bit dizisini okuma",
    "title": "Örnek: -18 Sayısının Gösterimi",
    "blocks": [
      {
        "type": "text",
        "text": "-18 değeri sekiz bitlik ikinin tümleyeniyle kodlanacaktır."
      },
      {
        "type": "row",
        "cells": [
          "Adım",
          "Değer"
        ]
      },
      {
        "type": "row",
        "cells": [
          "+18",
          "0001 0010"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bitleri tersle",
          "1110 1101"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bir ekle",
          "1110 1110"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Sonuç",
          "1110 1110 = -18"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 24,
    "id": "h5-s24",
    "section": "Taban dönüşümleri",
    "topic": "Negatifleme ve bit dizisini okuma",
    "title": "En Küçük Negatif Değerin Özel Durumu",
    "blocks": [
      {
        "type": "text",
        "text": "En küçük negatif değerin pozitif karşılığı aynı bit genişliğine sığmaz."
      },
      {
        "type": "row",
        "cells": [
          "4 bit örnek",
          "Bit örüntüsü"
        ]
      },
      {
        "type": "row",
        "cells": [
          "-8",
          "1000"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bitleri tersle",
          "0111"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bir ekle",
          "1000"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Sonuç",
          "Bit örüntüsü değişmez"
        ]
      }
    ],
    "note": "Dört bitte 1000₂ = −8. Bitleri tersle ve bir ekle: 0111 + 1 = 1000₂. Matematiksel +8, dört bitlik işaretli aralığın dışındadır. Aynı bit deseninin dönmesi taşmanın bir sonucudur.",
    "diagram": []
  },
  {
    "week": 5,
    "page": 25,
    "id": "h5-s25",
    "section": "Taban dönüşümleri",
    "topic": "Negatifleme ve bit dizisini okuma",
    "title": "Bit Ağırlıklarıyla Değer Bulma",
    "blocks": [
      {
        "type": "text",
        "text": "İkinin tümleyeninde en soldaki bit negatif ağırlığa sahiptir."
      },
      {
        "type": "row",
        "cells": [
          "4 bit konumu",
          "3",
          "2",
          "1",
          "0"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Ağırlık",
          "-8",
          "4",
          "2",
          "1"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1011 içindeki bit",
          "1",
          "0",
          "1",
          "1"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Katkı",
          "-8",
          "0",
          "2",
          "1"
        ]
      },
      {
        "type": "text",
        "text": "1011₂ = -8 + 0 + 2 + 1 = -5"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 26,
    "id": "h5-s26",
    "section": "Taban dönüşümleri",
    "topic": "Negatifleme ve bit dizisini okuma",
    "title": "İşaretsiz Değerden İşaretli Değere Geçiş",
    "blocks": [
      {
        "type": "text",
        "text": "En soldaki bit 1 ise işaretsiz değerden 2ⁿ çıkarılabilir."
      },
      {
        "type": "row",
        "cells": [
          "Adım",
          "8 bit 1110 1011"
        ]
      },
      {
        "type": "row",
        "cells": [
          "İşaretsiz değer",
          "235"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bit sayısı",
          "n=8"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Düzeltme",
          "235 - 2⁸"
        ]
      },
      {
        "type": "row",
        "cells": [
          "İşaretli değer",
          "235 - 256 = -21"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 27,
    "id": "h5-s27",
    "section": "Taban dönüşümleri",
    "topic": "Negatifleme ve bit dizisini okuma",
    "title": "Örnek: 1110 1011 Değerini Bulma",
    "blocks": [
      {
        "type": "text",
        "text": "İki doğrulama yöntemi aynı sonuca ulaşmalıdır."
      },
      {
        "type": "row",
        "cells": [
          "Yöntem",
          "Hesap",
          "Sonuç"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Negatif ağırlık",
          "-128+64+32+8+2+1",
          "-21"
        ]
      },
      {
        "type": "row",
        "cells": [
          "İşaretsizden çıkarma",
          "235-256",
          "-21"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Tersle ve bir ekle",
          "0001 0101 = 21",
          "Örüntü -21"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 28,
    "id": "h5-s28",
    "section": "Taban dönüşümleri",
    "topic": "Ondalık, ikili ve onaltılık dönüşümler",
    "title": "Pozitif Ondalık Sayıyı İkiliye Çevirme",
    "blocks": [
      {
        "type": "text",
        "text": "Pozitif sayılar işaretsiz ikili dönüşümle yazılır ve başına sıfırlar eklenir."
      },
      {
        "type": "row",
        "cells": [
          "8 bit örnek",
          "Değer"
        ]
      },
      {
        "type": "row",
        "cells": [
          "45 = 32+8+4+1",
          "0010 1101"
        ]
      },
      {
        "type": "row",
        "cells": [
          "En soldaki bit",
          "0"
        ]
      },
      {
        "type": "row",
        "cells": [
          "İşaretli yorum",
          "+45"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Kontrol",
          "45 ≤ 127"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 29,
    "id": "h5-s29",
    "section": "Taban dönüşümleri",
    "topic": "Ondalık, ikili ve onaltılık dönüşümler",
    "title": "Negatif Ondalık Sayıyı İkiliye Çevirme",
    "blocks": [
      {
        "type": "text",
        "text": "Önce mutlak değer yazılır, sonra ikinin tümleyeni alınır."
      },
      {
        "type": "row",
        "cells": [
          "8 bit örnek",
          "-45"
        ]
      },
      {
        "type": "row",
        "cells": [
          "+45",
          "0010 1101"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Tersle",
          "1101 0010"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bir ekle",
          "1101 0011"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Sonuç",
          "1101 0011 = -45"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 30,
    "id": "h5-s30",
    "section": "Taban dönüşümleri",
    "topic": "Ondalık, ikili ve onaltılık dönüşümler",
    "title": "Onaltılık Gösterim ve Bit Gruplama",
    "blocks": [
      {
        "type": "text",
        "text": "Her onaltılık basamak dört biti temsil eder."
      },
      {
        "type": "row",
        "cells": [
          "İkili",
          "Onaltılık"
        ]
      },
      {
        "type": "text",
        "text": "0000"
      },
      {
        "type": "text",
        "text": "0"
      },
      {
        "type": "text",
        "text": "0111"
      },
      {
        "type": "text",
        "text": "7"
      },
      {
        "type": "text",
        "text": "1000"
      },
      {
        "type": "text",
        "text": "8"
      },
      {
        "type": "row",
        "cells": [
          "1010",
          "A"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1111",
          "F"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1111 1110",
          "FE"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 31,
    "id": "h5-s31",
    "section": "Taban dönüşümleri",
    "topic": "Ondalık, ikili ve onaltılık dönüşümler",
    "title": "Onaltılık Bir Değerin İşaretli Yorumu",
    "blocks": [
      {
        "type": "text",
        "text": "Bit genişliği belirtilmeden işaretli değer kesinleşmez."
      },
      {
        "type": "row",
        "cells": [
          "Örüntü",
          "Bit genişliği",
          "İkinin tümleyeni değeri"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0xFF",
          "8 bit",
          "-1"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0x00FF",
          "16 bit",
          "255"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0xFFFF",
          "16 bit",
          "-1"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0xFFFFFFFF",
          "32 bit",
          "-1"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 32,
    "id": "h5-s32",
    "section": "İkili aritmetik",
    "topic": "Toplama ve elde yayılımı",
    "title": "İkili Toplama",
    "blocks": [
      {
        "type": "text",
        "text": "Toplama, en düşük anlamlı bitten başlayarak eldeyi sola taşır."
      },
      {
        "type": "bullet",
        "text": "6 sayısı 0110, 5 sayısı 0101 olarak yazılır."
      },
      {
        "type": "bullet",
        "text": "Bitler sağdan sola toplanır."
      },
      {
        "type": "bullet",
        "text": "Elde bir sonraki basamağa eklenir."
      },
      {
        "type": "bullet",
        "text": "Dört bitlik sonuç 1011 olur."
      }
    ],
    "note": "6 + 5 işlemi 0110 + 0101 = 1011 verir. En sağdan başla: 0 + 1 = 1; 1 + 0 = 1; 1 + 1 = 0 ve elde 1; 0 + 0 + elde 1 = 1. Sonuç işaretsiz 11’dir. Dört bit işaretli yorumda pozitif 11 aralığa sığmaz.",
    "diagram": []
  },
  {
    "week": 5,
    "page": 33,
    "id": "h5-s33",
    "section": "İkili aritmetik",
    "topic": "Toplama ve elde yayılımı",
    "title": "İkili Toplama Kuralları",
    "blocks": [
      {
        "type": "text",
        "text": "Her basamak iki bit ve varsa önceki elde ile toplanır."
      },
      {
        "type": "row",
        "cells": [
          "İşlem",
          "Toplam biti",
          "Elde"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0+0",
          "0",
          "0"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0+1",
          "1",
          "0"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1+0",
          "1",
          "0"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1+1",
          "0",
          "1"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1+1+1",
          "1",
          "1"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 34,
    "id": "h5-s34",
    "section": "İkili aritmetik",
    "topic": "Toplama ve elde yayılımı",
    "title": "Elde Yayılımı",
    "blocks": [
      {
        "type": "text",
        "text": "Bir basamaktaki elde daha yüksek anlamlı basamakları etkileyebilir."
      },
      {
        "type": "row",
        "cells": [
          "Adım",
          "Örnek: 0111 + 0001"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bit 0",
          "1+1 = 0, elde 1"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bit 1",
          "1+0+1 = 0, elde 1"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bit 2",
          "1+0+1 = 0, elde 1"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bit 3",
          "0+0+1 = 1"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Sonuç",
          "1000"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 35,
    "id": "h5-s35",
    "section": "İkili aritmetik",
    "topic": "Toplama ve elde yayılımı",
    "title": "Sabit Bit Genişliğinde Toplama",
    "blocks": [
      {
        "type": "text",
        "text": "İşlemci sonucu hedef yazmacın genişliğiyle sınırlar."
      },
      {
        "type": "bullet",
        "text": "n bitlik iki operand n bitlik sonuç üretir."
      },
      {
        "type": "bullet",
        "text": "En soldan çıkan ek bit hedefe yazılmaz."
      },
      {
        "type": "bullet",
        "text": "Atılan bit işaretsiz taşıma hakkında bilgi verebilir."
      },
      {
        "type": "bullet",
        "text": "İşaretli geçerlilik ayrıca overflow kuralıyla denetlenir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 36,
    "id": "h5-s36",
    "section": "İkili aritmetik",
    "topic": "Toplama ve elde yayılımı",
    "title": "Örnek: 5 + 3",
    "blocks": [
      {
        "type": "text",
        "text": "Dört bitlik signed toplama üst sınırı aşar."
      },
      {
        "type": "row",
        "cells": [
          "Terim",
          "Bit örüntüsü",
          "Değer"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Birinci operand",
          "0101",
          "5"
        ]
      },
      {
        "type": "row",
        "cells": [
          "İkinci operand",
          "0011",
          "3"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Toplam",
          "1000",
          "-8 olarak görünür"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Matematiksel sonuç",
          "-",
          "8"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 37,
    "id": "h5-s37",
    "section": "İkili aritmetik",
    "topic": "Toplama ve elde yayılımı",
    "title": "Örnek: -5 + 3",
    "blocks": [
      {
        "type": "text",
        "text": "Farklı işaretli iki sayının toplamında işaretli taşma oluşmaz."
      },
      {
        "type": "row",
        "cells": [
          "Terim",
          "Bit örüntüsü"
        ]
      },
      {
        "type": "row",
        "cells": [
          "-5",
          "1011"
        ]
      },
      {
        "type": "row",
        "cells": [
          "+3",
          "0011"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Toplam",
          "1110"
        ]
      },
      {
        "type": "row",
        "cells": [
          "İşaretli sonuç",
          "-2"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 38,
    "id": "h5-s38",
    "section": "İkili aritmetik",
    "topic": "Toplama ve elde yayılımı",
    "title": "Örnek: -3 + -2",
    "blocks": [
      {
        "type": "text",
        "text": "Aynı işaretli iki negatif sayı aralık içindeyse sonuç doğrudur."
      },
      {
        "type": "row",
        "cells": [
          "Terim",
          "Bit örüntüsü"
        ]
      },
      {
        "type": "row",
        "cells": [
          "-3",
          "1101"
        ]
      },
      {
        "type": "row",
        "cells": [
          "-2",
          "1110"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Toplamın düşük 4 biti",
          "1011"
        ]
      },
      {
        "type": "row",
        "cells": [
          "İşaretli sonuç",
          "-5"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 39,
    "id": "h5-s39",
    "section": "İkili aritmetik",
    "topic": "Toplamada taşma, carry ve overflow",
    "title": "İşaretli Taşma",
    "blocks": [
      {
        "type": "text",
        "text": "Overflow, matematiksel sonucun ayrılan işaretli aralığa sığmamasıdır."
      },
      {
        "type": "bullet",
        "text": "Bit işlemi tamamlanabilir, fakat bit örüntüsü yanlış işaretli değeri gösterir."
      },
      {
        "type": "bullet",
        "text": "Pozitif sınırın aşılması sonucu negatif gösterebilir."
      },
      {
        "type": "bullet",
        "text": "Negatif sınırın aşılması sonucu pozitif gösterebilir."
      },
      {
        "type": "bullet",
        "text": "Taşma kararı operand ve sonuç işaretlerinden verilir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 40,
    "id": "h5-s40",
    "section": "İkili aritmetik",
    "topic": "Toplamada taşma, carry ve overflow",
    "title": "Toplamada İşaretli Taşma Kuralı",
    "blocks": [
      {
        "type": "text",
        "text": "Aynı işaretli operandların sonucu farklı işaretliyse overflow vardır."
      },
      {
        "type": "row",
        "cells": [
          "Operand A",
          "Operand B",
          "Sonuç",
          "Overflow"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Pozitif",
          "Pozitif",
          "Negatif",
          "Var"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Negatif",
          "Negatif",
          "Pozitif veya sıfır",
          "Var"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Pozitif",
          "Negatif",
          "Herhangi",
          "Yok"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Negatif",
          "Pozitif",
          "Herhangi",
          "Yok"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 41,
    "id": "h5-s41",
    "section": "İkili aritmetik",
    "topic": "Toplamada taşma, carry ve overflow",
    "title": "Örnek: 7 + 3",
    "blocks": [
      {
        "type": "text",
        "text": "Dört bitlik pozitif sınır aşılır."
      },
      {
        "type": "row",
        "cells": [
          "Terim",
          "Bit örüntüsü",
          "İşaret"
        ]
      },
      {
        "type": "row",
        "cells": [
          "7",
          "0111",
          "Pozitif"
        ]
      },
      {
        "type": "row",
        "cells": [
          "3",
          "0011",
          "Pozitif"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Düşük 4 bit",
          "1010",
          "Negatif"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Gerçek sonuç",
          "10",
          "Aralık dışında"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 42,
    "id": "h5-s42",
    "section": "İkili aritmetik",
    "topic": "Toplamada taşma, carry ve overflow",
    "title": "Örnek: -5 + -4",
    "blocks": [
      {
        "type": "text",
        "text": "Dört bitlik negatif sınır aşılır."
      },
      {
        "type": "row",
        "cells": [
          "Terim",
          "Bit örüntüsü",
          "İşaret"
        ]
      },
      {
        "type": "row",
        "cells": [
          "-5",
          "1011",
          "Negatif"
        ]
      },
      {
        "type": "row",
        "cells": [
          "-4",
          "1100",
          "Negatif"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Düşük 4 bit",
          "0111",
          "Pozitif"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Gerçek sonuç",
          "-9",
          "Aralık dışında"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 43,
    "id": "h5-s43",
    "section": "İkili aritmetik",
    "topic": "Toplamada taşma, carry ve overflow",
    "title": "Carry ve Overflow Farkı",
    "blocks": [
      {
        "type": "text",
        "text": "Taşıma işaretsiz, overflow işaretli yorumla ilgilidir."
      },
      {
        "type": "row",
        "cells": [
          "Özellik",
          "Carry-out",
          "Signed overflow"
        ]
      },
      {
        "type": "row",
        "cells": [
          "İlgili yorum",
          "İşaretsiz",
          "İşaretli ikinin tümleyeni"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Denetlenen sınır",
          "0 … 2ⁿ-1",
          "-2ⁿ⁻¹ … 2ⁿ⁻¹-1"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Belirleme",
          "En soldan çıkan elde",
          "Operand ve sonuç işaretleri"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Birlikte olmak zorunda mı?",
          "Hayır",
          "Hayır"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 44,
    "id": "h5-s44",
    "section": "İkili aritmetik",
    "topic": "Toplamada taşma, carry ve overflow",
    "title": "Carry ve Overflow Örnekleri",
    "blocks": [
      {
        "type": "text",
        "text": "Aynı bit toplamı iki ayrı sınır açısından değerlendirilir."
      },
      {
        "type": "row",
        "cells": [
          "İşlem",
          "Düşük 4 bit",
          "Carry",
          "Overflow"
        ]
      },
      {
        "type": "text",
        "text": "0111 + 0001"
      },
      {
        "type": "text",
        "text": "1111 + 0001"
      },
      {
        "type": "text",
        "text": "1000 + 1000"
      },
      {
        "type": "text",
        "text": "0011 + 0010"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 45,
    "id": "h5-s45",
    "section": "İkili aritmetik",
    "topic": "Toplamada taşma, carry ve overflow",
    "title": "Carry ve Overflow Örnekleri",
    "blocks": [
      {
        "type": "text",
        "text": "Aynı bit toplamı iki ayrı sınır açısından değerlendirilir."
      },
      {
        "type": "row",
        "cells": [
          "İşlem",
          "Düşük 4 bit",
          "Carry",
          "Overflow"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0111 + 0001",
          "1000",
          "0",
          "1"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1111 + 0001",
          "0000",
          "1",
          "0"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1000 + 1000",
          "0000",
          "1",
          "1"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0011 + 0010",
          "0101",
          "0",
          "0"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 46,
    "id": "h5-s46",
    "section": "İkili aritmetik",
    "topic": "Toplamada taşma, carry ve overflow",
    "title": "32 Bitlik Taşma",
    "blocks": [
      {
        "type": "text",
        "text": "En büyük pozitif değerin üzerine çıkmak işaret bitini değiştirir."
      },
      {
        "type": "bullet",
        "text": "0x7FFF FFFF, 32 bitlik en büyük pozitif değerdir."
      },
      {
        "type": "bullet",
        "text": "Bu değere 2 eklenince düşük 32 bit 0x8000"
      },
      {
        "type": "text",
        "text": "0001 olur."
      },
      {
        "type": "bullet",
        "text": "0x8000 0001 işaretli olarak -2.147.483.647 değeridir."
      },
      {
        "type": "bullet",
        "text": "Matematiksel sonuç 2.147.483.649 olduğundan overflow vardır."
      }
    ],
    "note": "0x7FFF FFFF + 0x0000 0002 = 0x8000 0001. 2 147 483 647 + 2 = 2 147 483 649 aralığa sığmaz. 32 bit desenini işaretli okursan −2 147 483 647 görünür.",
    "diagram": []
  },
  {
    "week": 5,
    "page": 47,
    "id": "h5-s47",
    "section": "İkili aritmetik",
    "topic": "Çıkarma ve çıkarmada taşma",
    "title": "Çıkarma İşleminin Toplamaya Dönüştürülmesi",
    "blocks": [
      {
        "type": "text",
        "text": "A - B işlemi, A + (-B) biçiminde yürütülebilir."
      },
      {
        "type": "bullet",
        "text": "Çıkan B sayısının ikinin tümleyeni alınır."
      },
      {
        "type": "bullet",
        "text": "Elde edilen -B değeri A ile toplanır."
      },
      {
        "type": "bullet",
        "text": "Sonuç hedef bit genişliğinde tutulur."
      },
      {
        "type": "bullet",
        "text": "Signed overflow çıkarma kuralıyla değerlendirilir."
      },
      {
        "type": "text",
        "text": "A - B = A + (NOT(B) + 1)"
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 48,
    "id": "h5-s48",
    "section": "İkili aritmetik",
    "topic": "Çıkarma ve çıkarmada taşma",
    "title": "Çıkarma ve Toplama",
    "blocks": [
      {
        "type": "text",
        "text": "15 - 7 işlemi, 15 + (-7) olarak gösterilebilir."
      },
      {
        "type": "bullet",
        "text": "7 sayısının ikinin tümleyeni -7 örüntüsünü verir."
      },
      {
        "type": "bullet",
        "text": "15 ile -7 ikili olarak toplanır."
      },
      {
        "type": "bullet",
        "text": "Hedef genişliğin dışındaki carry-out atılır."
      },
      {
        "type": "bullet",
        "text": "Düşük bitler 8 sonucunu verir."
      }
    ],
    "note": "8 bit üzerinden 15 = 0000 1111 ve 7 = 0000 0111. 7’nin bitlerini tersle ve 1 ekle: 1111 1000 + 1 = 1111 1001. 0000 1111 + 1111 1001 = 1 0000 1000. Genişliğin dışındaki eldeyi atınca 0000 1000 = 8 kalır.",
    "diagram": []
  },
  {
    "week": 5,
    "page": 49,
    "id": "h5-s49",
    "section": "İkili aritmetik",
    "topic": "Çıkarma ve çıkarmada taşma",
    "title": "Örnek: 6 - 3",
    "blocks": [
      {
        "type": "text",
        "text": "Çıkan sayının ikinin tümleyeni toplanır."
      },
      {
        "type": "row",
        "cells": [
          "Adım",
          "4 bit değer"
        ]
      },
      {
        "type": "text",
        "text": "6"
      },
      {
        "type": "text",
        "text": "0110"
      },
      {
        "type": "text",
        "text": "3"
      },
      {
        "type": "text",
        "text": "0011"
      },
      {
        "type": "row",
        "cells": [
          "-3",
          "1101"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0110 + 1101",
          "1 0011"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Düşük 4 bit",
          "0011 = 3"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 50,
    "id": "h5-s50",
    "section": "İkili aritmetik",
    "topic": "Çıkarma ve çıkarmada taşma",
    "title": "Örnek: 3 - 6",
    "blocks": [
      {
        "type": "text",
        "text": "Sonuç negatif olduğunda bit örüntüsü ikinin tümleyeniyle okunur."
      },
      {
        "type": "row",
        "cells": [
          "Adım",
          "4 bit değer"
        ]
      },
      {
        "type": "text",
        "text": "3"
      },
      {
        "type": "text",
        "text": "0011"
      },
      {
        "type": "text",
        "text": "6"
      },
      {
        "type": "text",
        "text": "0110"
      },
      {
        "type": "row",
        "cells": [
          "-6",
          "1010"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0011 + 1010",
          "1101"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Sonuç",
          "1101 = -3"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 51,
    "id": "h5-s51",
    "section": "İkili aritmetik",
    "topic": "Çıkarma ve çıkarmada taşma",
    "title": "Çıkarmada İşaretli Taşma Kuralı",
    "blocks": [
      {
        "type": "text",
        "text": "Operand işaretleri farklı ve sonuç A’nın işaretinden farklıysa overflow vardır."
      },
      {
        "type": "row",
        "cells": [
          "A",
          "B",
          "A-B sonucu",
          "Overflow"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Pozitif",
          "Negatif",
          "Negatif",
          "Var"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Negatif",
          "Pozitif",
          "Pozitif veya sıfır",
          "Var"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Aynı işaret",
          "Aynı işaret",
          "Herhangi",
          "Yok"
        ]
      }
    ],
    "note": "A ve B farklı işaretliyse ve A − B sonucunun işareti A’nın işaretinden farklıysa işaretli taşma vardır. Dört bitte +6 − (−4) = +10 matematiksel olarak doğrudur, ama aralık −8…+7 olduğundan bit sonucu 1010₂ işaretli −6 görünür.",
    "diagram": []
  },
  {
    "week": 5,
    "page": 52,
    "id": "h5-s52",
    "section": "İkili aritmetik",
    "topic": "Çıkarma ve çıkarmada taşma",
    "title": "Örnek: 7 - (-3)",
    "blocks": [
      {
        "type": "text",
        "text": "Dört bitlik pozitif üst sınır aşılır."
      },
      {
        "type": "row",
        "cells": [
          "İfade",
          "7 - (-3)"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Matematiksel sonuç",
          "10"
        ]
      },
      {
        "type": "row",
        "cells": [
          "7 örüntüsü",
          "0111"
        ]
      },
      {
        "type": "row",
        "cells": [
          "-3 örüntüsü",
          "1101"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bit sonucu",
          "1010 = -6"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Karar",
          "Overflow"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 53,
    "id": "h5-s53",
    "section": "İkili aritmetik",
    "topic": "Çıkarma ve çıkarmada taşma",
    "title": "Örnek: -8 - 1",
    "blocks": [
      {
        "type": "text",
        "text": "Dört bitlik negatif alt sınır aşılır."
      },
      {
        "type": "row",
        "cells": [
          "İfade",
          "-8 - 1"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Matematiksel sonuç",
          "-9"
        ]
      },
      {
        "type": "row",
        "cells": [
          "-8 örüntüsü",
          "1000"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1 örüntüsü",
          "0001"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Bit sonucu",
          "0111 = 7"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Karar",
          "Overflow"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 54,
    "id": "h5-s54",
    "section": "İkili aritmetik",
    "topic": "Çıkarma ve çıkarmada taşma",
    "title": "Carry-Out Neden Atılır?",
    "blocks": [
      {
        "type": "text",
        "text": "Hedef yazmacın genişliği n bit olduğunda yalnızca düşük n bit saklanır."
      },
      {
        "type": "bullet",
        "text": "Carry-out n+1’inci bittir."
      },
      {
        "type": "bullet",
        "text": "İkinin tümleyeni aritmetiği mod 2ⁿ davranışı gösterir."
      },
      {
        "type": "bullet",
        "text": "Çıkarmada carry-out sonucun işaretini tek başına belirlemez."
      },
      {
        "type": "bullet",
        "text": "Overflow için işaret kuralları kullanılmalıdır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 55,
    "id": "h5-s55",
    "section": "Bit genişliği",
    "topic": "İşaret genişletme, sıfır genişletme ve daraltma",
    "title": "İşaret Genişletme",
    "blocks": [
      {
        "type": "text",
        "text": "Daha geniş işaretli alana geçerken işaret biti sola kopyalanır."
      },
      {
        "type": "bullet",
        "text": "Pozitif sayıda sola 0 eklenir."
      },
      {
        "type": "bullet",
        "text": "Negatif sayıda sola 1 eklenir."
      },
      {
        "type": "bullet",
        "text": "Sayısal değer değişmez."
      },
      {
        "type": "bullet",
        "text": "İşlem sign extension olarak adlandırılır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 56,
    "id": "h5-s56",
    "section": "Bit genişliği",
    "topic": "İşaret genişletme, sıfır genişletme ve daraltma",
    "title": "İşaret Genişletme Örneği",
    "blocks": [
      {
        "type": "text",
        "text": "8 bitlik -18 değeri 16 bite genişletilecektir."
      },
      {
        "type": "row",
        "cells": [
          "Genişlik",
          "Bit örüntüsü",
          "Değer"
        ]
      },
      {
        "type": "row",
        "cells": [
          "8 bit",
          "1110 1110",
          "-18"
        ]
      },
      {
        "type": "row",
        "cells": [
          "16 bit",
          "1111 1111 1110 1110",
          "-18"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Eklenen bitler",
          "Sekiz adet 1",
          "İşaret korunur"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 57,
    "id": "h5-s57",
    "section": "Bit genişliği",
    "topic": "İşaret genişletme, sıfır genişletme ve daraltma",
    "title": "Sıfır Genişletme",
    "blocks": [
      {
        "type": "text",
        "text": "İşaretsiz değer genişletilirken sola sıfırlar eklenir."
      },
      {
        "type": "row",
        "cells": [
          "8 bit örüntü",
          "Genişletme",
          "16 bit değer"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1110 1110",
          "Zero extension",
          "0000 0000 1110 1110"
        ]
      },
      {
        "type": "row",
        "cells": [
          "İşaretsiz yorum",
          "238",
          "238"
        ]
      },
      {
        "type": "row",
        "cells": [
          "İşaretli -18 için uygun mu?",
          "-",
          "Hayır"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 58,
    "id": "h5-s58",
    "section": "Bit genişliği",
    "topic": "İşaret genişletme, sıfır genişletme ve daraltma",
    "title": "Daraltma ve Bilgi Kaybı",
    "blocks": [
      {
        "type": "text",
        "text": "Daha az bite geçerken üst bitler atılır; değer her zaman korunmaz."
      },
      {
        "type": "row",
        "cells": [
          "16 bit değer",
          "8 bit sonuç",
          "Durum"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0000 0000 0010 1101",
          "0010 1101",
          "45 korunur"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1111 1111 1101 0011",
          "1101 0011",
          "-45 korunur"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0000 0001 0010 1101",
          "0010 1101",
          "301 değeri kaybolur"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1111 1110 1101 0011",
          "1101 0011",
          "Değer değişir"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 59,
    "id": "h5-s59",
    "section": "Bit genişliği",
    "topic": "Kaydırma",
    "title": "Aritmetik Sağa Kaydırma",
    "blocks": [
      {
        "type": "text",
        "text": "Arithmetic shift right negatif sayıda sola işaret biti ekler."
      },
      {
        "type": "row",
        "cells": [
          "Başlangıç",
          "İşlem",
          "Sonuç"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0011 1000 = 56",
          "Aritmetik sağa 1",
          "0001 1100 = 28"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1110 1000 = -24",
          "Aritmetik sağa 1",
          "1111 0100 = -12"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Korunan özellik",
          "-",
          "İşaret ve yaklaşık ikiye bölme"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 60,
    "id": "h5-s60",
    "section": "Bit genişliği",
    "topic": "Kaydırma",
    "title": "Mantıksal Sağa Kaydırma",
    "blocks": [
      {
        "type": "text",
        "text": "Logical shift right üst boşluğa her zaman sıfır ekler."
      },
      {
        "type": "row",
        "cells": [
          "Başlangıç",
          "İşlem",
          "Sonuç"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1110 1000",
          "Mantıksal sağa 1",
          "0111 0100"
        ]
      },
      {
        "type": "row",
        "cells": [
          "İşaretsiz yorum",
          "232",
          "116"
        ]
      },
      {
        "type": "row",
        "cells": [
          "İşaretli yorum",
          "-24",
          "116"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Sonuç",
          "-",
          "İşaretli değer korunmaz"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 61,
    "id": "h5-s61",
    "section": "Bit genişliği",
    "topic": "Kaydırma",
    "title": "Sola Kaydırma ve Aralık",
    "blocks": [
      {
        "type": "text",
        "text": "Sola bir bit kaydırma düşük bite sıfır ekler ve düşük n biti tutar."
      },
      {
        "type": "row",
        "cells": [
          "4 bit başlangıç",
          "Sola 1",
          "İşaretli yorum"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0011 = 3",
          "0110",
          "6"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0100 = 4",
          "1000",
          "-8, overflow"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1101 = -3",
          "1010",
          "-6"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1011 = -5",
          "0110",
          "6, overflow"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 62,
    "id": "h5-s62",
    "section": "Taşma ve mimari",
    "topic": "MIPS32, işlemciler ve programlama dilleri",
    "title": "MIPS32’de İşaretli Tamsayılar",
    "blocks": [
      {
        "type": "text",
        "text": "MIPS32 genel amaçlı yazmaçları 32 bitlik bit örüntüleri saklar."
      },
      {
        "type": "row",
        "cells": [
          "Konu",
          "MIPS32 davranışı"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Yazmaç genişliği",
          "32 bit"
        ]
      },
      {
        "type": "row",
        "cells": [
          "İşaretli gösterim",
          "İkinin tümleyeni"
        ]
      },
      {
        "type": "row",
        "cells": [
          "İşaretli aralık",
          "-2³¹ … 2³¹-1"
        ]
      },
      {
        "type": "row",
        "cells": [
          "İşaretsiz aralık",
          "0 … 2³²-1"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Aynı yazmaç",
          "Komuta göre iki biçimde yorumlanabilir"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 63,
    "id": "h5-s63",
    "section": "Taşma ve mimari",
    "topic": "MIPS32, işlemciler ve programlama dilleri",
    "title": "İşlemcilerde Taşmaya İki Yaklaşım",
    "blocks": [
      {
        "type": "text",
        "text": "Aynı bit toplaması, işlemci mimarisine göre farklı biçimde sonuçlandırılabilir."
      },
      {
        "type": "row",
        "cells": [
          "Yaklaşım",
          "Sonuç",
          "Taşma bildirimi"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Taşma denetimli",
          "Matematiksel sonuç aralık",
          "Aralık aşılırsa istisna veya hata"
        ]
      },
      {
        "type": "row",
        "cells": [
          "açısından kontrol edilir",
          "bildirimi"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Sarılmalı",
          "Sonucun düşük n biti saklanır",
          "Otomatik taşma bildirimi yok"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Ortak nokta",
          "Düşük n bitlik toplama aynıdır",
          "Fark mimari davranıştır"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 64,
    "id": "h5-s64",
    "section": "Taşma ve mimari",
    "topic": "MIPS32, işlemciler ve programlama dilleri",
    "title": "Taşma Denetimli Yaklaşım",
    "blocks": [
      {
        "type": "text",
        "text": "İşlemci matematiksel sonucun signed aralığa sığıp sığmadığını kontrol eder."
      },
      {
        "type": "row",
        "cells": [
          "Aşama",
          "Davranış"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1",
          "Operandlar n bitlik ikinin tümleyeni olarak"
        ]
      },
      {
        "type": "text",
        "text": "yorumlanır"
      },
      {
        "type": "row",
        "cells": [
          "2",
          "Toplama veya çıkarma gerçekleştirilir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "3",
          "Operand ve sonuç işaretleriyle overflow denetlenir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "4",
          "Sonuç sığıyorsa hedefe yazılır"
        ]
      },
      {
        "type": "row",
        "cells": [
          "5",
          "Sonuç sığmıyorsa istisna veya hata bildirimi oluşur"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 65,
    "id": "h5-s65",
    "section": "Taşma ve mimari",
    "topic": "MIPS32, işlemciler ve programlama dilleri",
    "title": "Sarılmalı Aritmetik",
    "blocks": [
      {
        "type": "text",
        "text": "İşlemci sonucun yalnızca düşük n bitini saklar."
      },
      {
        "type": "bullet",
        "text": "Hesaplama mod 2ⁿ aritmetiğine göre sonuçlanır."
      },
      {
        "type": "bullet",
        "text": "n+1’inci bit hedef değerin dışında kalır."
      },
      {
        "type": "bullet",
        "text": "Bit örüntüsü işaretli yorumda beklenmedik işaret gösterebilir."
      },
      {
        "type": "bullet",
        "text": "Taşma gerekiyorsa yazılım ayrıca kontrol eder."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 66,
    "id": "h5-s66",
    "section": "Taşma ve mimari",
    "topic": "MIPS32, işlemciler ve programlama dilleri",
    "title": "Mimari Yaklaşımların Karşılaştırılması",
    "blocks": [
      {
        "type": "text",
        "text": "Taşma davranışı bütün işlemci mimarilerinde aynı değildir."
      },
      {
        "type": "row",
        "cells": [
          "Mimari yaklaşım",
          "Signed gösterim",
          "Taşma davranışı"
        ]
      },
      {
        "type": "row",
        "cells": [
          "MIPS32",
          "İkinin tümleyeni",
          "Taşmayı bildiren ve yalnızca"
        ]
      },
      {
        "type": "text",
        "text": "düşük bitleri bırakan iki davranışı da destekler"
      },
      {
        "type": "row",
        "cells": [
          "Temel RISC-V",
          "İkinin tümleyeni",
          "Düşük yazmaç genişliğini bırakır,"
        ]
      },
      {
        "type": "text",
        "text": "otomatik arithmetic overflow istisnası üretmez"
      },
      {
        "type": "row",
        "cells": [
          "Ders açısından sonuç",
          "Aynı sayı gösterimi",
          "Mimari sözleşme farklı olabilir"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 67,
    "id": "h5-s67",
    "section": "Taşma ve mimari",
    "topic": "MIPS32, işlemciler ve programlama dilleri",
    "title": "Programlama Dillerinde Taşma",
    "blocks": [
      {
        "type": "text",
        "text": "İşlemci sonucu ile programlama dilinin kuralı aynı olmak zorunda değildir."
      },
      {
        "type": "bullet",
        "text": "Donanım düşük bitleri üretebilir veya istisna oluşturabilir."
      },
      {
        "type": "bullet",
        "text": "Dil standardı signed overflow için farklı davranış tanımlayabilir."
      },
      {
        "type": "bullet",
        "text": "C ve C++ signed integer overflow durumunu tanımsız davranış kabul eder."
      },
      {
        "type": "bullet",
        "text": "Güvenli kod, sınırları işlemden önce veya sonra denetlemelidir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 68,
    "id": "h5-s68",
    "section": "Taşma ve mimari",
    "topic": "Toplayıcı ve donanımsal overflow denetimi",
    "title": "Toplama ve Çıkarma Devresinin Ortaklığı",
    "blocks": [
      {
        "type": "text",
        "text": "Çıkarma, B girişini tersleyip başlangıç carry-in değerini 1 yaparak gerçekleştirilebilir."
      },
      {
        "type": "row",
        "cells": [
          "Denetim",
          "B girişi",
          "İlk carry-in",
          "İşlem"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0",
          "B",
          "0",
          "A+B"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1",
          "NOT(B)",
          "1",
          "A + NOT(B) + 1 = A - B"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Ortak birim",
          "n bitlik toplayıcı",
          "-",
          "İki işlem"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 69,
    "id": "h5-s69",
    "section": "Taşma ve mimari",
    "topic": "Toplayıcı ve donanımsal overflow denetimi",
    "title": "Donanımda Overflow Denetimi",
    "blocks": [
      {
        "type": "text",
        "text": "İşaret bitine giren ve işaret bitinden çıkan carry farklıysa signed overflow vardır."
      },
      {
        "type": "row",
        "cells": [
          "Sembol",
          "Anlam"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Cₙ₋₁",
          "En yüksek anlamlı bite giren carry"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Cₙ",
          "En yüksek anlamlı bitten çıkan carry"
        ]
      },
      {
        "type": "row",
        "cells": [
          "V",
          "Overflow göstergesi"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Formül",
          "V = Cₙ₋₁ XOR Cₙ"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 70,
    "id": "h5-s70",
    "section": "Taşma ve mimari",
    "topic": "Toplayıcı ve donanımsal overflow denetimi",
    "title": "Overflow Denetimi Örneği",
    "blocks": [
      {
        "type": "text",
        "text": "0111 + 0001 işleminde işaret bitine giren ve çıkan carry farklıdır."
      },
      {
        "type": "row",
        "cells": [
          "Adım",
          "Değer"
        ]
      },
      {
        "type": "row",
        "cells": [
          "İşlem",
          "0111 + 0001"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Sonuç",
          "1000"
        ]
      },
      {
        "type": "row",
        "cells": [
          "İşaret bitine giren carry",
          "1"
        ]
      },
      {
        "type": "row",
        "cells": [
          "İşaret bitinden çıkan carry",
          "0"
        ]
      },
      {
        "type": "row",
        "cells": [
          "V = 1 XOR 0",
          "1, overflow"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 71,
    "id": "h5-s71",
    "section": "Pekiştirme",
    "topic": "Çözümlü örnekler, özet ve sonraki konu",
    "title": "Örnek 1: Dönüşümler",
    "blocks": [
      {
        "type": "text",
        "text": "Aşağıdaki değerleri sekiz bitlik ikinin tümleyeniyle gösteriniz."
      },
      {
        "type": "row",
        "cells": [
          "Soru",
          "İstenen"
        ]
      },
      {
        "type": "row",
        "cells": [
          "A",
          "+37 değerini ikili yazın"
        ]
      },
      {
        "type": "row",
        "cells": [
          "B",
          "-37 değerini ikili yazın"
        ]
      },
      {
        "type": "row",
        "cells": [
          "C",
          "1101 1010 örüntüsünün değerini bulun"
        ]
      },
      {
        "type": "row",
        "cells": [
          "D",
          "0x92 örüntüsünü signed 8 bit yorumlayın"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 72,
    "id": "h5-s72",
    "section": "Pekiştirme",
    "topic": "Çözümlü örnekler, özet ve sonraki konu",
    "title": "Örnek 1: Beklenen Sonuçlar",
    "blocks": [
      {
        "type": "text",
        "text": "Her sonuç bit genişliği ve yorumla birlikte yazılmalıdır."
      },
      {
        "type": "row",
        "cells": [
          "Soru",
          "Çözüm"
        ]
      },
      {
        "type": "row",
        "cells": [
          "A",
          "+37 = 0010 0101"
        ]
      },
      {
        "type": "row",
        "cells": [
          "B",
          "-37: 0010 0101 → 1101 1010 → 1101 1011"
        ]
      },
      {
        "type": "row",
        "cells": [
          "C",
          "1101 1010 = 218-256 = -38"
        ]
      },
      {
        "type": "row",
        "cells": [
          "D",
          "0x92 = 146-256 = -110"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 73,
    "id": "h5-s73",
    "section": "Pekiştirme",
    "topic": "Çözümlü örnekler, özet ve sonraki konu",
    "title": "Örnek 2: Toplama ve Çıkarma",
    "blocks": [
      {
        "type": "text",
        "text": "İşlemleri 8 bit ile yapın ve overflow durumunu belirleyin."
      },
      {
        "type": "row",
        "cells": [
          "Soru",
          "İşlem"
        ]
      },
      {
        "type": "row",
        "cells": [
          "A",
          "45 + 27"
        ]
      },
      {
        "type": "row",
        "cells": [
          "B",
          "100 + 40"
        ]
      },
      {
        "type": "row",
        "cells": [
          "C",
          "-60 + 25"
        ]
      },
      {
        "type": "row",
        "cells": [
          "D",
          "-90 - 50"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 74,
    "id": "h5-s74",
    "section": "Pekiştirme",
    "topic": "Çözümlü örnekler, özet ve sonraki konu",
    "title": "Örnek 2: Beklenen Sonuçlar",
    "blocks": [
      {
        "type": "text",
        "text": "İki işlem aralık içinde, iki işlem aralık dışındadır."
      },
      {
        "type": "row",
        "cells": [
          "İşlem",
          "Bit sonucu",
          "Karar"
        ]
      },
      {
        "type": "row",
        "cells": [
          "45+27",
          "0100 1000 = 72",
          "Overflow yok"
        ]
      },
      {
        "type": "row",
        "cells": [
          "100+40",
          "1000 1100 = -116",
          "Overflow var, gerçek sonuç 140"
        ]
      },
      {
        "type": "row",
        "cells": [
          "-60+25",
          "1101 1101 = -35",
          "Overflow yok"
        ]
      },
      {
        "type": "row",
        "cells": [
          "-90-50",
          "0111 0100 = 116",
          "Overflow var, gerçek sonuç -140"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 75,
    "id": "h5-s75",
    "section": "Pekiştirme",
    "topic": "Çözümlü örnekler, özet ve sonraki konu",
    "title": "Örnek 3: Carry ve Overflow",
    "blocks": [
      {
        "type": "text",
        "text": "Her işlem için carry-out ve signed overflow ayrı belirlenmelidir."
      },
      {
        "type": "row",
        "cells": [
          "İşlem",
          "Carry-out?",
          "Overflow?"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0110 + 0011",
          "?",
          "?"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1110 + 0011",
          "?",
          "?"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1001 + 1010",
          "?",
          "?"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0101 + 1011",
          "?",
          "?"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 76,
    "id": "h5-s76",
    "section": "Pekiştirme",
    "topic": "Çözümlü örnekler, özet ve sonraki konu",
    "title": "Örnek 3: Beklenen Sonuçlar",
    "blocks": [
      {
        "type": "text",
        "text": "Carry ile overflow her zaman birlikte oluşmaz."
      },
      {
        "type": "row",
        "cells": [
          "İşlem",
          "Sonuç",
          "Carry",
          "Overflow"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0110+0011",
          "1001",
          "0",
          "1"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1110+0011",
          "0001",
          "1",
          "0"
        ]
      },
      {
        "type": "row",
        "cells": [
          "1001+1010",
          "0011",
          "1",
          "1"
        ]
      },
      {
        "type": "row",
        "cells": [
          "0101+1011",
          "0000",
          "1",
          "0"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 77,
    "id": "h5-s77",
    "section": "Pekiştirme",
    "topic": "Çözümlü örnekler, özet ve sonraki konu",
    "title": "Sık Karıştırılan Noktalar",
    "blocks": [
      {
        "type": "text",
        "text": "Hataların çoğu bit genişliği veya yorum belirtilmediğinde ortaya çıkar."
      },
      {
        "type": "row",
        "cells": [
          "Yanlış yaklaşım",
          "Doğru yaklaşım"
        ]
      },
      {
        "type": "row",
        "cells": [
          "En soldaki 1 her zaman eksi işaretidir",
          "Yalnızca signed yorumda işaret bitidir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Carry varsa signed overflow vardır",
          "İki bayrak ayrı değerlendirilir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Negatif için yalnızca bitleri terslemek yeterlidir",
          "İkinin tümleyeninde bir de 1 eklenir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "Sola sıfır eklemek her zaman değeri korur",
          "Negatif signed değerde işaret genişletme gerekir"
        ]
      },
      {
        "type": "row",
        "cells": [
          "ADDU sadece unsigned sayılar içindir",
          "MIPS’te temel fark overflow istisnasıdır"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 78,
    "id": "h5-s78",
    "section": "Pekiştirme",
    "topic": "Çözümlü örnekler, özet ve sonraki konu",
    "title": "Kavramlar ve Açılımlar",
    "blocks": [
      {
        "type": "text",
        "text": "Kısaltmalar ilk kullanımlarındaki anlamlarıyla birlikte hatırlanmalıdır."
      },
      {
        "type": "row",
        "cells": [
          "Kısaltma",
          "Açılım",
          "Türkçe karşılık"
        ]
      },
      {
        "type": "row",
        "cells": [
          "ALU",
          "Arithmetic Logic Unit",
          "Aritmetik Mantık Birimi"
        ]
      },
      {
        "type": "row",
        "cells": [
          "ISA",
          "Instruction Set Architecture",
          "Komut Kümesi Mimarisi"
        ]
      },
      {
        "type": "row",
        "cells": [
          "MSB",
          "Most Significant Bit",
          "En yüksek anlamlı bit"
        ]
      },
      {
        "type": "row",
        "cells": [
          "LSB",
          "Least Significant Bit",
          "En düşük anlamlı bit"
        ]
      },
      {
        "type": "row",
        "cells": [
          "XOR",
          "Exclusive OR",
          "Özel veya"
        ]
      },
      {
        "type": "row",
        "cells": [
          "XLEN",
          "Register width in RISC-V",
          "RISC-V yazmaç genişliği"
        ]
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 79,
    "id": "h5-s79",
    "section": "Pekiştirme",
    "topic": "Çözümlü örnekler, özet ve sonraki konu",
    "title": "Haftanın Özeti",
    "blocks": [
      {
        "type": "text",
        "text": "Bitlerin yalnızca 0 ve 1 olması yetmez; bu bitlerin hangi sayı biçiminde yorumlandığı, nasıl genişletildiği ve aritmetik sırasında taşmanın nasıl ele alındığı işlemcinin doğru çalışması için kritiktir."
      },
      {
        "type": "text",
        "text": "Bu konular sadece ikili sayı dönüşümü için değildir."
      },
      {
        "type": "text",
        "text": "Gerçekte:"
      },
      {
        "type": "bullet",
        "text": "işlemcinin ALU’sunda toplama–çıkarma yapmak,"
      },
      {
        "type": "bullet",
        "text": "signed ve unsigned karşılaştırmaları doğru gerçekleştirmek,"
      },
      {
        "type": "bullet",
        "text": "overflow hatalarını tespit etmek,"
      },
      {
        "type": "bullet",
        "text": "farklı bit genişlikleri arasında veri aktarırken değeri korumak,"
      },
      {
        "type": "bullet",
        "text": "bit kaydırma ile hızlı çarpma/bölme yapmak,"
      },
      {
        "type": "bullet",
        "text": "derleyicinin ve assembly kodunun ürettiği sonuçları anlamak,"
      },
      {
        "type": "bullet",
        "text": "C/C++ gibi dillerde integer overflow sorunlarını yorumlamak için kullanılır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "week": 5,
    "page": 80,
    "id": "h5-s80",
    "section": "Pekiştirme",
    "topic": "Çözümlü örnekler, özet ve sonraki konu",
    "title": "Donanımsal çarpma ve Booth algoritmasına giriş",
    "blocks": [
      {
        "type": "text",
        "text": "İşaretli sayı gösterimi, donanımsal çarpma ve Booth algoritmasının temelidir."
      },
      {
        "type": "bullet",
        "text": "Çarpım sonucu operand genişliğinin iki katına kadar bit gerektirebilir."
      },
      {
        "type": "bullet",
        "text": "Kaydırma ve toplama, temel donanımsal çarpma adımlarını oluşturur."
      },
      {
        "type": "bullet",
        "text": "Negatif çarpanlarda aritmetik kaydırma ve işaret genişletme gerekir."
      },
      {
        "type": "bullet",
        "text": "Booth algoritması ardışık 1 bitlerini toplama ve çıkarma ile işler."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "id": "extra-layers",
    "week": 0,
    "section": "Donanım katmanları",
    "topic": "Donanım katmanları",
    "title": "Fiziksel aygıt katmanı",
    "blocks": [
      {
        "type": "text",
        "text": "Transistör, direnç ve kapasitör gibi elektronik bileşenlerin fiziksel davranışı bu düzeyde ele alınır. Güç, sinyal seviyesi ve çalışma koşulları burada anlam kazanır. Transistörün anahtar gibi davranması, üstteki mantık kapılarının fiziksel temelidir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "id": "extra-logic",
    "week": 0,
    "section": "Donanım katmanları",
    "topic": "Donanım katmanları",
    "title": "Sayısal mantık katmanı",
    "blocks": [
      {
        "type": "text",
        "text": "Bitler mantık kapılarıyla işlenir, iletilir ve uygun devrelerle saklanır. Örneğin XOR toplam bitini, AND elde bitini üreten yarım toplayıcıda iki temel kapıdır. Programın komutları ve soyut veri yapıları daha üst düzeylerde yorumlanır."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "id": "extra-bus",
    "week": 0,
    "section": "Veri yolu ve bellek",
    "topic": "Veri yolu ve bellek",
    "title": "Veri, adres ve kontrol hatları",
    "blocks": [
      {
        "type": "text",
        "text": "Veri hattı taşınan bitleri, adres hattı seçilen konumu, kontrol hattı okuma/yazma gibi işlemi bildirir. Örneğin M[100] okunurken 100 adres hatlarında, okuma isteği kontrol hatlarında, bellekten dönen değer veri hatlarındadır. Bazı fiziksel bağlantılar ayrıca güç pinleri içerir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "id": "extra-mdr",
    "week": 0,
    "section": "Veri yolu ve bellek",
    "topic": "Veri yolu ve bellek",
    "title": "MAR ile MDR/MBR ayrımı",
    "blocks": [
      {
        "type": "text",
        "text": "MAR bellek erişiminin adresini tutar. MDR (Memory Data Register), bellek ile işlemci arasında aktarılan veri veya komut sözcüğünü tutar. Birçok kaynak aynı role MBR (Memory Buffer Register) der. Örneğin M[20] = 7 okumasında MAR’a 20, MDR’ye 7 gelir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "id": "extra-cache",
    "week": 0,
    "section": "Veri yolu ve bellek",
    "topic": "Veri yolu ve bellek",
    "title": "Önbellek düzeyleri ve kaçırma",
    "blocks": [
      {
        "type": "text",
        "text": "İşlemci talebi için önce uygun L1, sonra varsa L2 ve L3 denetlenir. L1 tipik olarak en küçük ve en hızlı, L3 daha büyük ve daha yavaştır. Bir düzey istenen bloğu tutmuyorsa o düzeyde kaçırma vardır. L1’de kaçırıp L2’de isabet etmek mümkündür."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "id": "extra-flynn",
    "week": 0,
    "section": "Paralel sistemler",
    "topic": "Paralel sistemler",
    "title": "Flynn sınıflandırması",
    "blocks": [
      {
        "type": "text",
        "text": "Komut akışı ve veri akışı sayılarını ayrı say. SISD tek komut ve tek veri akışı, SIMD tek komut ve çok veri akışı, MISD çok komut ve tek veri akışı, MIMD çok komut ve çok veri akışıdır. Bir vektör toplamında aynı toplama birden çok eleman çiftine uygulanır, dolayısıyla SIMD örneğidir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "id": "extra-topology",
    "week": 0,
    "section": "Paralel sistemler",
    "topic": "Paralel sistemler",
    "title": "Bağlantı topolojileri",
    "blocks": [
      {
        "type": "text",
        "text": "Doğrusal dizide düğümler komşularına, yıldızda merkez düğüme, mesh yapısında ızgara komşularına bağlanır. Tam bağlantıda her düğüm diğerleriyle doğrudan bağlıdır. Hiperküp ayrıca bilinen bir topolojidir. “Hiperküre” adıyla aynı kavramı varsayma."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "id": "extra-shared",
    "week": 0,
    "section": "Paralel sistemler",
    "topic": "Paralel sistemler",
    "title": "Ortak ve dağıtık bellek",
    "blocks": [
      {
        "type": "text",
        "text": "Ortak bellekli işlemciler ortak adres alanındaki verilere erişebilir. Dağıtık bellekte düğümler kendi yerel belleklerine sahiptir ve genellikle mesajlaşır. Ortak bir listeyi her çekirdeğin okuyup güncelleyebilmesi ortak bellek modelini örnekler."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "id": "extra-stages",
    "week": 0,
    "section": "Komut yürütme hesabı",
    "topic": "Komut yürütme hesabı",
    "title": "Fetch, Decode, Execute ve Writeback",
    "blocks": [
      {
        "type": "text",
        "text": "Fetch komutu getirir, Decode alanlarını çözer, Execute işlemi yapar, Writeback sonucu hedefe yazar. Örneğin ADD getirilir, yazmaçları belirlenir, ALU toplar ve sonuç hedef yazmaca yazılır. Bazı modeller bellek erişimini ayrı aşama olarak tanımlar."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "id": "extra-serial",
    "week": 0,
    "section": "Komut yürütme hesabı",
    "topic": "Komut yürütme hesabı",
    "title": "Ardışık yürütme ve komut başına süre",
    "blocks": [
      {
        "type": "text",
        "text": "Tek komutun süresi aşama sürelerinin toplamıdır. Ardışık düzende N komut toplam N × toplam aşama süresi alır. Sınavın “efektif hız” dediği ns/komut, toplam süre / N’dir. Örneğin aşamalar 3, 5, 7 ve 5 ns ise 4 komut 80 ns, ortalama 20 ns/komut sürer."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "id": "extra-spatial",
    "week": 0,
    "section": "Komut yürütme hesabı",
    "topic": "Komut yürütme hesabı",
    "title": "Bağımsız işlem birimleriyle gruplama",
    "blocks": [
      {
        "type": "text",
        "text": "P bağımsız birim, aynı anda P komutu baştan sona yürütebiliyorsa ⌈N/P⌉ grup gerekir. Eksik son grup da bir grup süresi alır. Örneğin 3 birim ve 7 komut, tek komut 30 ns ise 3 × 30 = 90 ns, ortalama 12,86 ns/komut."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "id": "extra-pipe",
    "week": 0,
    "section": "Komut yürütme hesabı",
    "topic": "Komut yürütme hesabı",
    "title": "Boru hattı ve aşama süresi",
    "blocks": [
      {
        "type": "text",
        "text": "Aşamalar farklı komutlar için örtüşür. Standart senkron modelde çevrim en yavaş aşama kadardır ve toplam (aşama sayısı + N − 1) × çevrim süresidir. Bazı sınav çözümleri ilk komut için aşamaların ham toplamını, sonrakiler için en büyük aşama süresini kullanır. 2, 3, 5, 4 ns ve 3 komutta bu iki model 30 ns ve 24 ns verir."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "id": "extra-superpipe",
    "week": 0,
    "section": "Komut yürütme hesabı",
    "topic": "Komut yürütme hesabı",
    "title": "Süper boru hattı",
    "blocks": [
      {
        "type": "text",
        "text": "Süper boru hattı aşamaları daha kısa alt aşamalara bölerek daha kısa çevrim hedefler. Yeni aşama sayısı, aşama bölünmeleri ve çevrim bilinmeden tek süre çıkmaz. Dört eşit 8 ns aşamanın her biri iki eşit parçaya bölünürse 8 aşama ve 4 ns çevrim oluşur. Üç komut ideal koşulda (8 + 2) × 4 = 40 ns sürer."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "id": "extra-wide",
    "week": 0,
    "section": "Komut yürütme hesabı",
    "topic": "Komut yürütme hesabı",
    "title": "Süperskalar yürütme",
    "blocks": [
      {
        "type": "text",
        "text": "Süperskalar işlemci koşullar uygun olduğunda çevrim başına birden çok komut başlatabilir. Komut bağımlılıkları, çıkarma genişliği, birim türü ve boru hattı zamanlaması toplam süreyi sınırlar. Basit toplu modelde 4 bağımsız yürütme yeri ve 6 komut için iki parti gerekir. Her parti 20 ns alırsa ortalama 40 / 6 = 6,67 ns/komut."
      }
    ],
    "note": "",
    "diagram": []
  },
  {
    "id": "extra-clock",
    "week": 0,
    "section": "Performans problemleri",
    "topic": "Performans problemleri",
    "title": "İki işlemcide frekans ve çevrim oranı",
    "blocks": [
      {
        "type": "text",
        "text": "CPU süresi T = C / f. A için C_A = T_A × f_A. Eğer B aynı işi k kat çevrimle yaparsa f_B ≥ k × C_A / T_B, eşitlik hedef süreyi tam sağlar. Örneğin 3 GHz ve 8 s için C_A = 24 milyar. k = 1,25 ve hedef 5 s ise f_B ≥ 6 GHz."
      }
    ],
    "note": "",
    "diagram": []
  }
];
window.SLAYT_KAPSAMI = [{"week": 1, "page": 1, "status": "kapak"}, {"week": 1, "page": 2, "status": "ders", "lessonId": "h1-s2"}, {"week": 1, "page": 3, "status": "ders", "lessonId": "h1-s3"}, {"week": 1, "page": 4, "status": "ders", "lessonId": "h1-s4"}, {"week": 1, "page": 5, "status": "ders", "lessonId": "h1-s5"}, {"week": 1, "page": 6, "status": "ders", "lessonId": "h1-s6"}, {"week": 1, "page": 7, "status": "ders", "lessonId": "h1-s7"}, {"week": 1, "page": 8, "status": "ders", "lessonId": "h1-s8"}, {"week": 1, "page": 9, "status": "ders", "lessonId": "h1-s9"}, {"week": 1, "page": 10, "status": "ders", "lessonId": "h1-s10"}, {"week": 1, "page": 11, "status": "ders", "lessonId": "h1-s11"}, {"week": 1, "page": 12, "status": "ders", "lessonId": "h1-s12"}, {"week": 1, "page": 13, "status": "ders", "lessonId": "h1-s13"}, {"week": 1, "page": 14, "status": "ders", "lessonId": "h1-s14"}, {"week": 1, "page": 15, "status": "ders", "lessonId": "h1-s15"}, {"week": 1, "page": 16, "status": "ders", "lessonId": "h1-s16"}, {"week": 1, "page": 17, "status": "ders", "lessonId": "h1-s17"}, {"week": 1, "page": 18, "status": "ders", "lessonId": "h1-s18"}, {"week": 1, "page": 19, "status": "ders", "lessonId": "h1-s19"}, {"week": 1, "page": 20, "status": "ders", "lessonId": "h1-s20"}, {"week": 1, "page": 21, "status": "ders", "lessonId": "h1-s21"}, {"week": 1, "page": 22, "status": "ders", "lessonId": "h1-s22"}, {"week": 1, "page": 23, "status": "ders", "lessonId": "h1-s23"}, {"week": 1, "page": 24, "status": "ders", "lessonId": "h1-s24"}, {"week": 1, "page": 25, "status": "ders", "lessonId": "h1-s25"}, {"week": 1, "page": 26, "status": "ders", "lessonId": "h1-s26"}, {"week": 1, "page": 27, "status": "ders", "lessonId": "h1-s27"}, {"week": 1, "page": 28, "status": "ders", "lessonId": "h1-s28"}, {"week": 1, "page": 29, "status": "ders", "lessonId": "h1-s29"}, {"week": 1, "page": 30, "status": "ders", "lessonId": "h1-s30"}, {"week": 1, "page": 31, "status": "ders", "lessonId": "h1-s31"}, {"week": 1, "page": 32, "status": "ders", "lessonId": "h1-s32"}, {"week": 1, "page": 33, "status": "ders", "lessonId": "h1-s33"}, {"week": 1, "page": 34, "status": "ders", "lessonId": "h1-s34"}, {"week": 1, "page": 35, "status": "kapanış"}, {"week": 2, "page": 1, "status": "kapak"}, {"week": 2, "page": 2, "status": "ders", "lessonId": "h2-s2"}, {"week": 2, "page": 3, "status": "ders", "lessonId": "h2-s3"}, {"week": 2, "page": 4, "status": "ders", "lessonId": "h2-s4"}, {"week": 2, "page": 5, "status": "ders", "lessonId": "h2-s5"}, {"week": 2, "page": 6, "status": "ders", "lessonId": "h2-s6"}, {"week": 2, "page": 7, "status": "ders", "lessonId": "h2-s7"}, {"week": 2, "page": 8, "status": "ders", "lessonId": "h2-s8"}, {"week": 2, "page": 9, "status": "ders", "lessonId": "h2-s9"}, {"week": 2, "page": 10, "status": "ders", "lessonId": "h2-s10"}, {"week": 2, "page": 11, "status": "ders", "lessonId": "h2-s11"}, {"week": 2, "page": 12, "status": "ders", "lessonId": "h2-s12"}, {"week": 2, "page": 13, "status": "ders", "lessonId": "h2-s13"}, {"week": 2, "page": 14, "status": "ders", "lessonId": "h2-s14"}, {"week": 2, "page": 15, "status": "ders", "lessonId": "h2-s15"}, {"week": 2, "page": 16, "status": "ders", "lessonId": "h2-s16"}, {"week": 2, "page": 17, "status": "ders", "lessonId": "h2-s17"}, {"week": 2, "page": 18, "status": "ders", "lessonId": "h2-s18"}, {"week": 2, "page": 19, "status": "ders", "lessonId": "h2-s19"}, {"week": 2, "page": 20, "status": "ders", "lessonId": "h2-s20"}, {"week": 2, "page": 21, "status": "ders", "lessonId": "h2-s21"}, {"week": 2, "page": 22, "status": "ders", "lessonId": "h2-s22"}, {"week": 2, "page": 23, "status": "ders", "lessonId": "h2-s23"}, {"week": 2, "page": 24, "status": "ders", "lessonId": "h2-s24"}, {"week": 2, "page": 25, "status": "ders", "lessonId": "h2-s25"}, {"week": 2, "page": 26, "status": "ders", "lessonId": "h2-s26"}, {"week": 2, "page": 27, "status": "ders", "lessonId": "h2-s27"}, {"week": 2, "page": 28, "status": "ders", "lessonId": "h2-s28"}, {"week": 2, "page": 29, "status": "ders", "lessonId": "h2-s29"}, {"week": 2, "page": 30, "status": "ders", "lessonId": "h2-s30"}, {"week": 2, "page": 31, "status": "ders", "lessonId": "h2-s31"}, {"week": 2, "page": 32, "status": "ders", "lessonId": "h2-s32"}, {"week": 2, "page": 33, "status": "ders", "lessonId": "h2-s33"}, {"week": 2, "page": 34, "status": "ders", "lessonId": "h2-s34"}, {"week": 2, "page": 35, "status": "ders", "lessonId": "h2-s35"}, {"week": 2, "page": 36, "status": "ders", "lessonId": "h2-s36"}, {"week": 2, "page": 37, "status": "ders", "lessonId": "h2-s37"}, {"week": 2, "page": 38, "status": "ders", "lessonId": "h2-s38"}, {"week": 2, "page": 39, "status": "ders", "lessonId": "h2-s39"}, {"week": 2, "page": 40, "status": "ders", "lessonId": "h2-s40"}, {"week": 2, "page": 41, "status": "ders", "lessonId": "h2-s41"}, {"week": 2, "page": 42, "status": "ders", "lessonId": "h2-s42"}, {"week": 2, "page": 43, "status": "ders", "lessonId": "h2-s43"}, {"week": 2, "page": 44, "status": "ders", "lessonId": "h2-s44"}, {"week": 2, "page": 45, "status": "ders", "lessonId": "h2-s45"}, {"week": 2, "page": 46, "status": "ders", "lessonId": "h2-s46"}, {"week": 2, "page": 47, "status": "ders", "lessonId": "h2-s47"}, {"week": 2, "page": 48, "status": "ders", "lessonId": "h2-s48"}, {"week": 2, "page": 49, "status": "ders", "lessonId": "h2-s49"}, {"week": 2, "page": 50, "status": "ders", "lessonId": "h2-s50"}, {"week": 2, "page": 51, "status": "ders", "lessonId": "h2-s51"}, {"week": 2, "page": 52, "status": "ders", "lessonId": "h2-s52"}, {"week": 2, "page": 53, "status": "ders", "lessonId": "h2-s53"}, {"week": 2, "page": 54, "status": "ders", "lessonId": "h2-s54"}, {"week": 2, "page": 55, "status": "ders", "lessonId": "h2-s55"}, {"week": 2, "page": 56, "status": "ders", "lessonId": "h2-s56"}, {"week": 2, "page": 57, "status": "ders", "lessonId": "h2-s57"}, {"week": 2, "page": 58, "status": "ders", "lessonId": "h2-s58"}, {"week": 2, "page": 59, "status": "ders", "lessonId": "h2-s59"}, {"week": 2, "page": 60, "status": "ders", "lessonId": "h2-s60"}, {"week": 2, "page": 61, "status": "ders", "lessonId": "h2-s61"}, {"week": 2, "page": 62, "status": "ders", "lessonId": "h2-s62"}, {"week": 2, "page": 63, "status": "ders", "lessonId": "h2-s63"}, {"week": 2, "page": 64, "status": "ders", "lessonId": "h2-s64"}, {"week": 2, "page": 65, "status": "ders", "lessonId": "h2-s65"}, {"week": 2, "page": 66, "status": "ders", "lessonId": "h2-s66"}, {"week": 2, "page": 67, "status": "ders", "lessonId": "h2-s67"}, {"week": 2, "page": 68, "status": "ders", "lessonId": "h2-s68"}, {"week": 2, "page": 69, "status": "ders", "lessonId": "h2-s69"}, {"week": 2, "page": 70, "status": "ders", "lessonId": "h2-s70"}, {"week": 2, "page": 71, "status": "ders", "lessonId": "h2-s71"}, {"week": 2, "page": 72, "status": "kapanış"}, {"week": 3, "page": 1, "status": "kapak"}, {"week": 3, "page": 2, "status": "ders", "lessonId": "h3-s2"}, {"week": 3, "page": 3, "status": "ders", "lessonId": "h3-s3"}, {"week": 3, "page": 4, "status": "ders", "lessonId": "h3-s4"}, {"week": 3, "page": 5, "status": "ders", "lessonId": "h3-s5"}, {"week": 3, "page": 6, "status": "ders", "lessonId": "h3-s6"}, {"week": 3, "page": 7, "status": "ders", "lessonId": "h3-s7"}, {"week": 3, "page": 8, "status": "ders", "lessonId": "h3-s8"}, {"week": 3, "page": 9, "status": "ders", "lessonId": "h3-s9"}, {"week": 3, "page": 10, "status": "ders", "lessonId": "h3-s10"}, {"week": 3, "page": 11, "status": "ders", "lessonId": "h3-s11"}, {"week": 3, "page": 12, "status": "ders", "lessonId": "h3-s12"}, {"week": 3, "page": 13, "status": "ders", "lessonId": "h3-s13"}, {"week": 3, "page": 14, "status": "ders", "lessonId": "h3-s14"}, {"week": 3, "page": 15, "status": "ders", "lessonId": "h3-s15"}, {"week": 3, "page": 16, "status": "ders", "lessonId": "h3-s16"}, {"week": 3, "page": 17, "status": "ders", "lessonId": "h3-s17"}, {"week": 3, "page": 18, "status": "ders", "lessonId": "h3-s18"}, {"week": 3, "page": 19, "status": "ders", "lessonId": "h3-s19"}, {"week": 3, "page": 20, "status": "ders", "lessonId": "h3-s20"}, {"week": 3, "page": 21, "status": "ders", "lessonId": "h3-s21"}, {"week": 3, "page": 22, "status": "ders", "lessonId": "h3-s22"}, {"week": 3, "page": 23, "status": "ders", "lessonId": "h3-s23"}, {"week": 3, "page": 24, "status": "ders", "lessonId": "h3-s24"}, {"week": 3, "page": 25, "status": "ders", "lessonId": "h3-s25"}, {"week": 3, "page": 26, "status": "ders", "lessonId": "h3-s26"}, {"week": 3, "page": 27, "status": "ders", "lessonId": "h3-s27"}, {"week": 3, "page": 28, "status": "ders", "lessonId": "h3-s28"}, {"week": 3, "page": 29, "status": "ders", "lessonId": "h3-s29"}, {"week": 3, "page": 30, "status": "ders", "lessonId": "h3-s30"}, {"week": 3, "page": 31, "status": "ders", "lessonId": "h3-s31"}, {"week": 3, "page": 32, "status": "ders", "lessonId": "h3-s32"}, {"week": 3, "page": 33, "status": "ders", "lessonId": "h3-s33"}, {"week": 3, "page": 34, "status": "ders", "lessonId": "h3-s34"}, {"week": 3, "page": 35, "status": "ders", "lessonId": "h3-s35"}, {"week": 3, "page": 36, "status": "ders", "lessonId": "h3-s36"}, {"week": 3, "page": 37, "status": "ders", "lessonId": "h3-s37"}, {"week": 3, "page": 38, "status": "ders", "lessonId": "h3-s38"}, {"week": 3, "page": 39, "status": "ders", "lessonId": "h3-s39"}, {"week": 3, "page": 40, "status": "ders", "lessonId": "h3-s40"}, {"week": 3, "page": 41, "status": "ders", "lessonId": "h3-s41"}, {"week": 3, "page": 42, "status": "ders", "lessonId": "h3-s42"}, {"week": 3, "page": 43, "status": "ders", "lessonId": "h3-s43"}, {"week": 3, "page": 44, "status": "ders", "lessonId": "h3-s44"}, {"week": 3, "page": 45, "status": "ders", "lessonId": "h3-s45"}, {"week": 3, "page": 46, "status": "ders", "lessonId": "h3-s46"}, {"week": 3, "page": 47, "status": "ders", "lessonId": "h3-s47"}, {"week": 3, "page": 48, "status": "ders", "lessonId": "h3-s48"}, {"week": 3, "page": 49, "status": "ders", "lessonId": "h3-s49"}, {"week": 3, "page": 50, "status": "ders", "lessonId": "h3-s50"}, {"week": 3, "page": 51, "status": "ders", "lessonId": "h3-s51"}, {"week": 3, "page": 52, "status": "ders", "lessonId": "h3-s52"}, {"week": 3, "page": 53, "status": "ders", "lessonId": "h3-s53"}, {"week": 3, "page": 54, "status": "ders", "lessonId": "h3-s54"}, {"week": 3, "page": 55, "status": "kapanış"}, {"week": 4, "page": 1, "status": "kapak"}, {"week": 4, "page": 2, "status": "ders", "lessonId": "h4-s2"}, {"week": 4, "page": 3, "status": "ders", "lessonId": "h4-s3"}, {"week": 4, "page": 4, "status": "ders", "lessonId": "h4-s4"}, {"week": 4, "page": 5, "status": "ders", "lessonId": "h4-s5"}, {"week": 4, "page": 6, "status": "ders", "lessonId": "h4-s6"}, {"week": 4, "page": 7, "status": "ders", "lessonId": "h4-s7"}, {"week": 4, "page": 8, "status": "ders", "lessonId": "h4-s8"}, {"week": 4, "page": 9, "status": "ders", "lessonId": "h4-s9"}, {"week": 4, "page": 10, "status": "ders", "lessonId": "h4-s10"}, {"week": 4, "page": 11, "status": "ders", "lessonId": "h4-s11"}, {"week": 4, "page": 12, "status": "ders", "lessonId": "h4-s12"}, {"week": 4, "page": 13, "status": "ders", "lessonId": "h4-s13"}, {"week": 4, "page": 14, "status": "ders", "lessonId": "h4-s14"}, {"week": 4, "page": 15, "status": "ders", "lessonId": "h4-s15"}, {"week": 4, "page": 16, "status": "ders", "lessonId": "h4-s16"}, {"week": 4, "page": 17, "status": "ders", "lessonId": "h4-s17"}, {"week": 4, "page": 18, "status": "ders", "lessonId": "h4-s18"}, {"week": 4, "page": 19, "status": "ders", "lessonId": "h4-s19"}, {"week": 4, "page": 20, "status": "ders", "lessonId": "h4-s20"}, {"week": 4, "page": 21, "status": "ders", "lessonId": "h4-s21"}, {"week": 4, "page": 22, "status": "ders", "lessonId": "h4-s22"}, {"week": 4, "page": 23, "status": "ders", "lessonId": "h4-s23"}, {"week": 4, "page": 24, "status": "ders", "lessonId": "h4-s24"}, {"week": 4, "page": 25, "status": "ders", "lessonId": "h4-s25"}, {"week": 4, "page": 26, "status": "ders", "lessonId": "h4-s26"}, {"week": 4, "page": 27, "status": "ders", "lessonId": "h4-s27"}, {"week": 4, "page": 28, "status": "ders", "lessonId": "h4-s28"}, {"week": 4, "page": 29, "status": "ders", "lessonId": "h4-s29"}, {"week": 4, "page": 30, "status": "ders", "lessonId": "h4-s30"}, {"week": 4, "page": 31, "status": "ders", "lessonId": "h4-s31"}, {"week": 4, "page": 32, "status": "ders", "lessonId": "h4-s32"}, {"week": 4, "page": 33, "status": "ders", "lessonId": "h4-s33"}, {"week": 4, "page": 34, "status": "ders", "lessonId": "h4-s34"}, {"week": 4, "page": 35, "status": "ders", "lessonId": "h4-s35"}, {"week": 4, "page": 36, "status": "ders", "lessonId": "h4-s36"}, {"week": 4, "page": 37, "status": "ders", "lessonId": "h4-s37"}, {"week": 4, "page": 38, "status": "ders", "lessonId": "h4-s38"}, {"week": 4, "page": 39, "status": "ders", "lessonId": "h4-s39"}, {"week": 4, "page": 40, "status": "ders", "lessonId": "h4-s40"}, {"week": 4, "page": 41, "status": "ders", "lessonId": "h4-s41"}, {"week": 4, "page": 42, "status": "ders", "lessonId": "h4-s42"}, {"week": 4, "page": 43, "status": "ders", "lessonId": "h4-s43"}, {"week": 4, "page": 44, "status": "ders", "lessonId": "h4-s44"}, {"week": 4, "page": 45, "status": "ders", "lessonId": "h4-s45"}, {"week": 4, "page": 46, "status": "ders", "lessonId": "h4-s46"}, {"week": 4, "page": 47, "status": "ders", "lessonId": "h4-s47"}, {"week": 4, "page": 48, "status": "ders", "lessonId": "h4-s48"}, {"week": 4, "page": 49, "status": "ders", "lessonId": "h4-s49"}, {"week": 4, "page": 50, "status": "ders", "lessonId": "h4-s50"}, {"week": 4, "page": 51, "status": "ders", "lessonId": "h4-s51"}, {"week": 4, "page": 52, "status": "ders", "lessonId": "h4-s52"}, {"week": 4, "page": 53, "status": "ders", "lessonId": "h4-s53"}, {"week": 4, "page": 54, "status": "ders", "lessonId": "h4-s54"}, {"week": 4, "page": 55, "status": "ders", "lessonId": "h4-s55"}, {"week": 4, "page": 56, "status": "ders", "lessonId": "h4-s56"}, {"week": 4, "page": 57, "status": "ders", "lessonId": "h4-s57"}, {"week": 4, "page": 58, "status": "ders", "lessonId": "h4-s58"}, {"week": 4, "page": 59, "status": "ders", "lessonId": "h4-s59"}, {"week": 4, "page": 60, "status": "ders", "lessonId": "h4-s60"}, {"week": 4, "page": 61, "status": "ders", "lessonId": "h4-s61"}, {"week": 4, "page": 62, "status": "ders", "lessonId": "h4-s62"}, {"week": 4, "page": 63, "status": "ders", "lessonId": "h4-s63"}, {"week": 4, "page": 64, "status": "ders", "lessonId": "h4-s64"}, {"week": 4, "page": 65, "status": "ders", "lessonId": "h4-s65"}, {"week": 4, "page": 66, "status": "ders", "lessonId": "h4-s66"}, {"week": 4, "page": 67, "status": "ders", "lessonId": "h4-s67"}, {"week": 4, "page": 68, "status": "ders", "lessonId": "h4-s68"}, {"week": 4, "page": 69, "status": "ders", "lessonId": "h4-s69"}, {"week": 4, "page": 70, "status": "ders", "lessonId": "h4-s70"}, {"week": 4, "page": 71, "status": "ders", "lessonId": "h4-s71"}, {"week": 4, "page": 72, "status": "ders", "lessonId": "h4-s72"}, {"week": 4, "page": 73, "status": "ders", "lessonId": "h4-s73"}, {"week": 4, "page": 74, "status": "ders", "lessonId": "h4-s74"}, {"week": 4, "page": 75, "status": "ders", "lessonId": "h4-s75"}, {"week": 4, "page": 76, "status": "ders", "lessonId": "h4-s76"}, {"week": 4, "page": 77, "status": "ders", "lessonId": "h4-s77"}, {"week": 4, "page": 78, "status": "ders", "lessonId": "h4-s78"}, {"week": 4, "page": 79, "status": "ders", "lessonId": "h4-s79"}, {"week": 4, "page": 80, "status": "ders", "lessonId": "h4-s80"}, {"week": 4, "page": 81, "status": "ders", "lessonId": "h4-s81"}, {"week": 4, "page": 82, "status": "ders", "lessonId": "h4-s82"}, {"week": 4, "page": 83, "status": "kapanış"}, {"week": 5, "page": 1, "status": "kapak"}, {"week": 5, "page": 2, "status": "ders", "lessonId": "h5-s2"}, {"week": 5, "page": 3, "status": "ders", "lessonId": "h5-s3"}, {"week": 5, "page": 4, "status": "ders", "lessonId": "h5-s4"}, {"week": 5, "page": 5, "status": "ders", "lessonId": "h5-s5"}, {"week": 5, "page": 6, "status": "ders", "lessonId": "h5-s6"}, {"week": 5, "page": 7, "status": "ders", "lessonId": "h5-s7"}, {"week": 5, "page": 8, "status": "ders", "lessonId": "h5-s8"}, {"week": 5, "page": 9, "status": "ders", "lessonId": "h5-s9"}, {"week": 5, "page": 10, "status": "ders", "lessonId": "h5-s10"}, {"week": 5, "page": 11, "status": "ders", "lessonId": "h5-s11"}, {"week": 5, "page": 12, "status": "ders", "lessonId": "h5-s12"}, {"week": 5, "page": 13, "status": "ders", "lessonId": "h5-s13"}, {"week": 5, "page": 14, "status": "ders", "lessonId": "h5-s14"}, {"week": 5, "page": 15, "status": "ders", "lessonId": "h5-s15"}, {"week": 5, "page": 16, "status": "ders", "lessonId": "h5-s16"}, {"week": 5, "page": 17, "status": "ders", "lessonId": "h5-s17"}, {"week": 5, "page": 18, "status": "ders", "lessonId": "h5-s18"}, {"week": 5, "page": 19, "status": "ders", "lessonId": "h5-s19"}, {"week": 5, "page": 20, "status": "ders", "lessonId": "h5-s20"}, {"week": 5, "page": 21, "status": "ders", "lessonId": "h5-s21"}, {"week": 5, "page": 22, "status": "ders", "lessonId": "h5-s22"}, {"week": 5, "page": 23, "status": "ders", "lessonId": "h5-s23"}, {"week": 5, "page": 24, "status": "ders", "lessonId": "h5-s24"}, {"week": 5, "page": 25, "status": "ders", "lessonId": "h5-s25"}, {"week": 5, "page": 26, "status": "ders", "lessonId": "h5-s26"}, {"week": 5, "page": 27, "status": "ders", "lessonId": "h5-s27"}, {"week": 5, "page": 28, "status": "ders", "lessonId": "h5-s28"}, {"week": 5, "page": 29, "status": "ders", "lessonId": "h5-s29"}, {"week": 5, "page": 30, "status": "ders", "lessonId": "h5-s30"}, {"week": 5, "page": 31, "status": "ders", "lessonId": "h5-s31"}, {"week": 5, "page": 32, "status": "ders", "lessonId": "h5-s32"}, {"week": 5, "page": 33, "status": "ders", "lessonId": "h5-s33"}, {"week": 5, "page": 34, "status": "ders", "lessonId": "h5-s34"}, {"week": 5, "page": 35, "status": "ders", "lessonId": "h5-s35"}, {"week": 5, "page": 36, "status": "ders", "lessonId": "h5-s36"}, {"week": 5, "page": 37, "status": "ders", "lessonId": "h5-s37"}, {"week": 5, "page": 38, "status": "ders", "lessonId": "h5-s38"}, {"week": 5, "page": 39, "status": "ders", "lessonId": "h5-s39"}, {"week": 5, "page": 40, "status": "ders", "lessonId": "h5-s40"}, {"week": 5, "page": 41, "status": "ders", "lessonId": "h5-s41"}, {"week": 5, "page": 42, "status": "ders", "lessonId": "h5-s42"}, {"week": 5, "page": 43, "status": "ders", "lessonId": "h5-s43"}, {"week": 5, "page": 44, "status": "ders", "lessonId": "h5-s44"}, {"week": 5, "page": 45, "status": "ders", "lessonId": "h5-s45"}, {"week": 5, "page": 46, "status": "ders", "lessonId": "h5-s46"}, {"week": 5, "page": 47, "status": "ders", "lessonId": "h5-s47"}, {"week": 5, "page": 48, "status": "ders", "lessonId": "h5-s48"}, {"week": 5, "page": 49, "status": "ders", "lessonId": "h5-s49"}, {"week": 5, "page": 50, "status": "ders", "lessonId": "h5-s50"}, {"week": 5, "page": 51, "status": "ders", "lessonId": "h5-s51"}, {"week": 5, "page": 52, "status": "ders", "lessonId": "h5-s52"}, {"week": 5, "page": 53, "status": "ders", "lessonId": "h5-s53"}, {"week": 5, "page": 54, "status": "ders", "lessonId": "h5-s54"}, {"week": 5, "page": 55, "status": "ders", "lessonId": "h5-s55"}, {"week": 5, "page": 56, "status": "ders", "lessonId": "h5-s56"}, {"week": 5, "page": 57, "status": "ders", "lessonId": "h5-s57"}, {"week": 5, "page": 58, "status": "ders", "lessonId": "h5-s58"}, {"week": 5, "page": 59, "status": "ders", "lessonId": "h5-s59"}, {"week": 5, "page": 60, "status": "ders", "lessonId": "h5-s60"}, {"week": 5, "page": 61, "status": "ders", "lessonId": "h5-s61"}, {"week": 5, "page": 62, "status": "ders", "lessonId": "h5-s62"}, {"week": 5, "page": 63, "status": "ders", "lessonId": "h5-s63"}, {"week": 5, "page": 64, "status": "ders", "lessonId": "h5-s64"}, {"week": 5, "page": 65, "status": "ders", "lessonId": "h5-s65"}, {"week": 5, "page": 66, "status": "ders", "lessonId": "h5-s66"}, {"week": 5, "page": 67, "status": "ders", "lessonId": "h5-s67"}, {"week": 5, "page": 68, "status": "ders", "lessonId": "h5-s68"}, {"week": 5, "page": 69, "status": "ders", "lessonId": "h5-s69"}, {"week": 5, "page": 70, "status": "ders", "lessonId": "h5-s70"}, {"week": 5, "page": 71, "status": "ders", "lessonId": "h5-s71"}, {"week": 5, "page": 72, "status": "ders", "lessonId": "h5-s72"}, {"week": 5, "page": 73, "status": "ders", "lessonId": "h5-s73"}, {"week": 5, "page": 74, "status": "ders", "lessonId": "h5-s74"}, {"week": 5, "page": 75, "status": "ders", "lessonId": "h5-s75"}, {"week": 5, "page": 76, "status": "ders", "lessonId": "h5-s76"}, {"week": 5, "page": 77, "status": "ders", "lessonId": "h5-s77"}, {"week": 5, "page": 78, "status": "ders", "lessonId": "h5-s78"}, {"week": 5, "page": 79, "status": "ders", "lessonId": "h5-s79"}, {"week": 5, "page": 80, "status": "ders", "lessonId": "h5-s80"}, {"week": 5, "page": 81, "status": "kapanış"}];
