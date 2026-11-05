// Alt grup sırası, ilgili dersin alt başlık sırasını izler.
function concepts(lessonId, groups, flow = null, table = null) {
  return { lessonId, groups, flow, table };
}

window.KAVRAM_OZETLERI = [
  concepts('mimari-ve-organizasyon', [
    [
      ['Mimari', 'Yazılımın kullanabildiği komutları, yazmaçları ve erişim kurallarını belirleyen sözleşme.', 'Ne yapılabilir?'],
      ['Komut kümesi', 'İşlemcinin tanıdığı makine komutlarının bütünü.', 'MUL var mı?'],
      ['Mimari uyumluluk', 'Gerekli komut ve ortam kuralları aynıysa makine programını çalıştırabilme.'],
    ],
    [
      ['Organizasyon', 'Mimarinin hangi donanım ve bağlantılarla gerçekleştirildiği.', 'Nasıl yapılır?'],
      ['Yapı', 'Bilgisayar bileşenlerinin birbirine bağlanma biçimi.'],
      ['İşlev', 'Bir bileşenin sistem içinde yaptığı görev.'],
    ],
    [
      ['Veri hareketi', 'Veriyi bir konumdan veya aygıttan diğerine aktarma.'],
      ['Depolama', 'Veriyi daha sonra kullanmak için tutma.'],
      ['Veri işleme', 'Verilerden hesap veya mantık işlemiyle yeni sonuç üretme.'],
      ['Kontrol', 'Aktarım ve işlemlerin sırasını, seçimini ve zamanını düzenleme.'],
    ],
  ], ['Bir ölçümün izlediği yol', ['Sensörden al','Bellekte sakla','CPU’da işle','Ekrana aktar'], 'Kontrol, bu adımların ne zaman ve hangi sırayla yapılacağını yönetir.']),
  concepts('cpu-bellek-ve-gc', [
    [
      ['CPU · Merkezi işlem birimi', 'Komutları yürütür ve sistemin çalışmasını koordine eder.'],
      ['ALU · Aritmetik mantık birimi', 'Toplama, karşılaştırma ve bit düzeyi işlemleri yapar.'],
      ['Yazmaç · Register', 'İşlemci içindeki küçük ve çok hızlı geçici saklama alanı.'],
      ['PC · Program sayacı', 'Komut akışındaki konumu izleyen adres yazmacı.'],
      ['Komut yazmacı', 'Getirilmiş makine komutunu tutan yazmaç.'],
      ['Kontrol birimi', 'Komutu çözer ve gerekli donanım sinyallerini üretir.'],
    ],
    [
      ['Ana bellek', 'Çalışan programın komutlarını ve verilerini tutar.'],
      ['G/Ç · Giriş/çıkış', 'Bilgisayarın dış dünya ve aygıtlarla veri alışverişi.'],
      ['Veri yolu', 'Bileşenler arasında bilgi taşıyan bağlantı düzeni.'],
      ['Adres sinyali', 'Erişilecek konumu belirtir.'],
      ['Veri sinyali', 'Aktarılan sözcüğün bitlerini taşır.'],
      ['Kontrol sinyali', 'Okuma, yazma ve zamanlama gibi işlemleri belirtir.'],
    ],
    [
      ['Mikrokomut', 'Yazmaç ve ALU seçimi gibi bir iç kontrol adımını tanımlar.'],
      ['Kontrol belleği', 'Mikroprogramlı kontrolde mikrokomutları saklar.'],
      ['Mikroprogram', 'Bir makine komutunu gerçekleştiren mikrokomut dizisi.'],
    ],
  ], ['Bir toplama komutunu düşün', ['Komutu getir','Kontrol birimi çözsün','Operandları seç','ALU toplasın','Sonucu yaz'], 'Yazmaçlar değerleri, veri yolları aktarımı, kontrol birimi seçimleri sağlar.']),
  concepts('hesaplama-tarihi', [
    [
      ['Abaküs', 'Basamakları elle izlemeyi kolaylaştıran eski hesap aracı.'],
      ['Pascal makinesi', '1642’de toplama ve çıkarma için tasarlanan mekanik düzen.'],
      ['Leibniz hesaplayıcısı', 'Basamaklı hareketle çarpma ve bölmeyi de destekleyen mekanik tasarım.'],
    ],
    [
      ['Fark Makinesi', 'Babbage’ın sayısal tablo hesaplamak için düşündüğü mekanik makine.'],
      ['Analitik Makine', 'Depolama, işlem ve programlanabilir kontrolü birleştiren Babbage tasarımı.'],
      ['Turing makinesi', 'Semboller ve kurallarla hesaplanabilirliği açıklayan soyut model.', '1936'],
    ],
    [
      ['Z3', '1941’de çalışan, program kontrollü elektromekanik ikili bilgisayar örneği.'],
      ['Colossus', 'Lorenz şifre analizinde kullanılan özel amaçlı elektronik sistem.', '1944'],
      ['Harvard Mark I', 'IBM ve Harvard’ın elektromekanik hesap makinesi.', '1944'],
    ],
  ]),
  concepts('vakum-tupu-ve-sakli-program', [
    [
      ['Vakum tüpü', 'Erken elektronik bilgisayarlarda anahtarlama sağlayan bileşen.'],
      ['ENIAC', 'Başlangıçta kablo ve anahtarlarla programlanan genel amaçlı elektronik örnek.', '1946'],
    ],
    [
      ['Saklı program', 'Komutları bellekte saklayıp çalıştırırken oradan getirme fikri.'],
      ['EDVAC raporu', 'Saklı program yaklaşımını yaygınlaştıran tarihsel rapor.', '1945'],
    ],
    [
      ['UNIVAC I', 'Erken ticari veri işlemede kullanılan genel bilgisayar.', '1951'],
      ['Manyetik teyp', 'Veriyi manyetik ortamda kalıcı olarak saklayan sıralı erişimli ortam.'],
    ],
  ]),
  concepts('bilgisayar-kusaklari', [
    [
      ['Transistör', 'Vakum tüpüne göre küçük ve düşük enerjili elektronik anahtar.'],
      ['Entegre devre · IC', 'Birden çok devre elemanının aynı yongada birleştirilmesi.'],
      ['Baskılı devre kartı', 'Ayrı elektronik bileşenleri iletken yollarla bağlayan kart.'],
      ['SSI / MSI', 'Küçük / orta ölçekli devre bütünleştirmesi.'],
    ],
    [
      ['Mikroişlemci', 'CPU’nun temel işlevlerini bir yongada toplar.'],
      ['LSI / VLSI', 'Büyük / çok büyük ölçekli devre bütünleştirmesi.'],
      ['ULSI', 'Ultra büyük ölçekli bütünleştirme; yongada daha çok eleman.'],
      ['Çoklu programlama', 'Bellekte birden fazla program tutup işlemciyi uygun işler arasında kullanma.'],
      ['Çok çekirdek', 'Bir işlemci paketinde birden çok yürütme çekirdeği.'],
      ['Hızlandırıcı', 'Belirli iş türlerine özel hesap birimi.'],
    ],
    [
      ['Bilgisayar kuşağı', 'Baskın teknoloji veya tarihsel hedefle yapılan dönem sınıflandırması.'],
      ['Beşinci kuşak', 'Bazı kaynaklarda 1980’lerin yapay zekâ hedefleriyle ilişkilendirilen dönem.'],
      ['Logaritmik ölçek', 'Grafikte eşit aralığın eşit farkı değil aynı kat artışını göstermesi.'],
    ],
  ], ['Baskın donanım teknolojisinin gelişimi', ['Vakum tüpü','Transistör','Entegre devre','Mikroişlemci'], 'Kuşak tarihleri yaklaşık sınırlardır. Bütün makineler aynı anda geçiş yapmaz.']),

  concepts('is-yuku-ve-darbogaz', [
    [
      ['İş yükü · Workload', 'Sistemden beklenen iş, veri ve kullanım koşullarının bütünü.'],
      ['Program', 'İşlemcinin izleyeceği komut dizisi.'],
      ['Veri', 'Komutların üzerinde işlem yaptığı değerler.'],
    ],
    [
      ['Gecikme · Latency', 'Tek bir işin veya isteğin tamamlanması için geçen süre.'],
      ['İş hacmi · Throughput', 'Birim zamanda bitirilen toplam iş sayısı.'],
    ],
    [
      ['Darboğaz', 'Hedef performansı sınırlayan aşama veya kaynak.'],
      ['Bekleme', 'Komut, veri veya kaynak hazır olmadığı için ilerleyememe.'],
    ],
  ], null, ['Hangi ölçüyü okuyorsun?', [
    ['Ölçü','Sorduğu soru','Örnek'],
    ['Gecikme','Bir iş kaç sürede bitti?','40 ms/istek'],
    ['İş hacmi','Bir sürede kaç iş bitti?','500 istek/s'],
    ['Darboğaz','En çok nerede bekliyor?','Disk okuma'],
  ]]),
  concepts('cekirdek-yazmac-ve-frekans', [
    [
      ['Yazmaç', 'Komutun doğrudan kullandığı hızlı ve küçük depolama.'],
      ['Saat çevrimi', 'İşlemci zamanlamasındaki bir temel aralık.'],
      ['Frekans', 'Saniyedeki saat çevrimi sayısı.', 'GHz = milyar çevrim/s'],
    ],
    [
      ['Çekirdek', 'Bir komut akışını yürütebilen fiziksel işlem birimi.'],
      ['İş parçacığı · Thread', 'Programın yürütülebilir bir komut akışı.'],
      ['Donanım iş parçacığı', 'Bir çekirdekte ayrı yürütme durumu, paylaşılan iç kaynaklar.'],
      ['Paralelleşebilir iş', 'Bağımsız parçaları aynı zamanda yürütülebilen iş.'],
    ],
  ]),
  concepts('ram-depolama-gpu-ve-gc', [
    [
      ['Bellek hiyerarşisi', 'Hız, kapasite ve maliyet için kurulan depolama basamakları.'],
      ['Önbellek · Cache', 'Ana bellekteki bazı blokların işlemciye yakın hızlı kopyaları.'],
      ['RAM', 'Çalışan işin komut ve verilerini tutan ana bellek.'],
      ['Çalışma kümesi', 'Programın belirli zamanda etkin kullandığı veri ve kod.'],
    ],
    [
      ['HDD', 'Veriyi dönen manyetik plakalar üzerinde saklayan disk.'],
      ['SSD', 'Mekanik konumlanma olmadan kalıcı veri saklayan aygıt.'],
      ['SATA', 'Depolama aygıtları için kullanılan bağlantı arayüzü.'],
      ['NVMe / PCIe', 'NVMe depolama protokolü, PCIe aktarım bağlantısıdır.'],
    ],
    [
      ['GPU', 'Çok sayıda benzer hesabı paralel yürütmeye uygun işlemci.'],
      ['Bütünleşik GPU', 'Sistem belleğini çoğunlukla diğer birimlerle paylaşan grafik birimi.'],
      ['Ayrık GPU', 'Genellikle kendi belleği olan ayrı grafik işlemcisi.'],
    ],
    [
      ['G/Ç denetleyicisi', 'Aygıt ile işlemci/bellek arasındaki iletişimi yönetir.'],
      ['Tampon · Buffer', 'Farklı hızlarda çalışan taraflar arasında geçici veri tutar.'],
      ['Kesme · Interrupt', 'CPU’ya bir olayın gerçekleştiğini bildirir.'],
      ['DMA', 'CPU’nun her sözcüğü tek tek taşımadan blok aktarımı yapılmasını sağlar.'],
    ],
  ], ['CPU’ya yakınlığa göre depolama', ['Yazmaç','Önbellek','RAM','SSD / HDD'], 'Genel eğilim sağa doğru daha çok kapasite ve daha yüksek gecikmedir.']),
  concepts('fiziksel-sinirlar-ve-onbellek', [
    [
      ['Moore yasası', 'Transistör sayısının yaklaşık iki yılda ikiye katlanmasına ilişkin tarihsel eğilim.'],
      ['Bütünleşme', 'Daha çok devre elemanını aynı yongada toplama.'],
      ['Güç ve ısı sınırı', 'Enerji tüketimi ve soğutmanın sürdürülebilir hızı sınırlaması.'],
      ['RC gecikmesi', 'Direnç ve kapasitans nedeniyle sinyalin yerleşmesinin zaman alması.'],
      ['Direnç (R)', 'Elektrik akımına karşı koyma özelliği.'],
      ['Kapasitans (C)', 'Elektrik yükü depolama özelliği; dolma ve boşalma zaman alır.'],
    ],
    [
      ['Bellek duvarı', 'CPU’nun hızına karşılık bellek erişiminin yetersiz kalması.'],
      ['Bant genişliği', 'Birim zamanda taşınabilen veri miktarı.', 'GB/s'],
      ['Yol genişliği', 'Bir aktarımda taşınabilen bit sayısı.', '64 bit = 8 bayt'],
      ['Kapasite', 'Toplam tutulabilen veri miktarı.', 'GB'],
      ['Aktarım sayısı', 'Veriyi taşımak için gereken yol kullanımı.', '⌈Veri boyutu / aktarım başına bayt⌉'],
    ],
    [
      ['Önbellek bloğu', 'Bellekten birlikte getirilen bitişik veri parçası.'],
      ['Zamansal yerellik', 'Yakın zamanda kullanılan veriyi tekrar kullanma.'],
      ['Mekânsal yerellik', 'Erişilen adresin yakınındaki verilere de erişme.'],
      ['İsabet / kaçırma', 'Aranan bloğun ilgili önbellek düzeyinde bulunması / bulunmaması.'],
    ],
  ]),
  concepts('komut-akisi-ve-dallanma', [
    [
      ['Algoritma', 'İşi çözmek için izlenen işlem yöntemi ve adımlar.'],
      ['Paralellik', 'Uygun bağımsız işlerin aynı zaman aralığında ilerlemesi.'],
      ['Bloklama', 'İşi önbelleğe sığan veri parçalarıyla yaparak yeniden veri getirmeyi azaltma.'],
    ],
    [
      ['Komut akışı', 'Programın yürüttüğü komutların izlediği sıra.'],
      ['Koşullu dallanma', 'Karşılaştırma sonucuna göre komut yolunu değiştirme.'],
      ['Dallanma tahmini', 'Koşul kesinleşmeden izlenecek yolu kestirme.'],
      ['Bir bitlik tahminci', 'Son gerçek sonucun tekrar edeceğini varsayan basit tahminci.'],
    ],
    [
      ['Yanlış tahmin cezası', 'Yanlış yolun iptali ve doğru yola dönmenin zaman maliyeti.'],
      ['Tahmin doğruluğu', 'Doğru tahmin / toplam tahmin.', 'Hızlanma oranından farklı bir ölçü'],
    ],
  ], ['Dallanmanın çözülmesi', ['Yolu tahmin et','Geçici ilerle','Gerçek koşulu öğren','Doğru yolu sürdür'], 'Tahmin yanlışsa yanlış yolun geçici işi iptal edilir.']),
  concepts('veri-bagimliligi-ve-spekulasyon', [
    [
      ['Operand', 'Komutun işlem yapmak için kullandığı değer.'],
      ['Gerçek veri bağımlılığı', 'Bir komutun, öncekinin üreteceği değere ihtiyaç duyması.'],
    ],
    [
      ['Sıra dışı yürütme', 'Hazır bağımsız komutu, önceki bekleyen komuttan erken yürütme.'],
      ['Mimari durum', 'Programın görebildiği yazmaç, bellek ve kontrol durumu.'],
    ],
    [
      ['Spekülatif yürütme', 'Tahmin edilen yolda işi kesinleşmeden başlatma.'],
      ['Geçici sonuç', 'Doğrulanmadan mimari duruma kalıcılaştırılmayan hesap sonucu.'],
    ],
  ], null, ['Üç tekniğin görevi', [
    ['Teknik','Verdiği karar'],
    ['Dallanma tahmini','Hangi yol seçilecek?'],
    ['Sıra dışı yürütme','Hangi bağımsız iş hazır?'],
    ['Spekülasyon','Tahmine güvenip işi erkenden başlatabilir miyim?'],
  ]]),
  concepts('sistem-karsilastirma', [
    [
      ['Adil ölçüm', 'Aynı iş, veri, kalite ve belirtilmiş koşullarla karşılaştırma.'],
      ['Sürdürülebilir performans', 'Uzun çalışmada ısı ve güç sınırları altında korunabilen hız.'],
    ],
    [
      ['Seri bölüm', 'İşin aynı akışta sırayla yürütülmesi gereken kısmı.'],
      ['Dengeli sistem', 'İş yükü için hesap, bellek ve aktarım olanaklarının uyumu.'],
    ],
    [
      ['Doğruluk', 'Üretilen sonucun programın beklediği kuralları karşılaması.'],
      ['Güç', 'Birim zamanda tüketilen enerji.', 'W = J/s'],
      ['Enerji', 'İş boyunca tüketilen toplam.', 'Sabit güçte E = P × t'],
      ['Performans/watt', 'Belirli güç bütçesiyle sağlanan yararlı iş hızı.'],
    ],
  ]),
  concepts('olcum-sure-ve-hizlanma', [
    [
      ['Geçen süre', 'Başlangıçtan bitişe duvar saati süresi; beklemeleri de içerir.'],
      ['CPU süresi', 'İşlemcinin ilgili program için çalıştığı süre.'],
    ],
    [
      ['Performans', 'Aynı işi ne kadar çabuk bitirdiğin.', 'Performans ∝ 1 / süre'],
      ['Hızlanma', 'Eski sürenin yeni süreye oranı.', 'S = T_eski / T_yeni'],
      ['Süre azalması', 'Eski sürenin ne kadarından tasarruf edildiği.', '% azalma = 100 × (T_eski − T_yeni) / T_eski'],
    ],
  ], null, ['Aynı değişimi iki ölçüyle okumak', [
    ['Süre değişimi','Hızlanma','Süre azalması'],
    ['12 s → 6 s','2 kat','%50'],
    ['12 s → 3 s','4 kat','%75'],
  ]]),
  concepts('frekans-ve-cevrim-suresi', [
    [
      ['Frekans (f)', 'Saniyedeki saat çevrimi sayısı.', '1 Hz = 1 çevrim/s'],
      ['Çevrim süresi', 'Tek saat çevriminin uzunluğu.', 'T_çevrim = 1 / f'],
      ['Frekans önekleri', 'kHz bin, MHz milyon, GHz milyar çevrim/s demektir.'],
      ['Zaman önekleri', 'ms = 10⁻³ s; µs = 10⁻⁶ s; ns = 10⁻⁹ s.'],
    ],
    [
      ['Ters orantı', 'Frekans artarken tek çevrimin süresi azalır.', '2 GHz → 0,5 ns/çevrim'],
      ['Çevrim–komut ayrımı', 'Bir komut birden fazla çevrim alabilir; GHz doğrudan komut/s değildir.'],
    ],
  ]),
  concepts('cpu-denklemi-ve-cpi', [
    [
      ['Komut sayısı (IC)', 'Çalışırken gerçekten yürütülen komutların toplamı; döngü tekrarları dahil.'],
      ['CPI', 'Komut başına ortalama saat çevrimi.'],
      ['Toplam çevrim (C)', 'Bütün komutların çevrim maliyetleri toplamı.', 'C = IC × CPI'],
      ['CPU denklemi', 'Programın işlemci süresini üç etkene bağlar.', 'T_CPU = IC × CPI / f'],
    ],
    [
      ['Komut karışımı', 'Programdaki farklı komut sınıflarının sayıları veya oranları.'],
      ['Ağırlıklı CPI', 'Her sınıfın CPI değerinin, kullanım payıyla ağırlıklandırılmış toplamı.', 'CPI_ort = Σ(pᵢ × CPIᵢ); Σpᵢ = 1'],
    ],
    [
      ['Bilinmeyeni bulma', 'CPU denklemini istenen değişken yalnız kalacak şekilde düzenleme.', 'IC = T × f / CPI; f = IC × CPI / T; CPI = T × f / IC'],
      ['Birim denetimi', 'Komut × çevrim/komut ÷ çevrim/s = saniye.'],
    ],
    [
      ['Tasarım karşılaştırması', 'Her tasarımın kendi IC, CPI ve frekansıyla süresini hesaplama.'],
      ['Derleyici etkisi', 'Üretilen komut sayısı ve komut karışımının değişmesi.'],
    ],
  ], ['Süre hesabının yolu', ['Komut sınıflarını say','Ağırlıklı CPI bul','IC × CPI ile çevrimi bul','Hz cinsinden frekansa böl']]),
  concepts('mips-ve-flops', [
    [
      ['MIPS', 'Saniyede yürütülen milyon makine komutu.', 'MIPS = IC / (T_CPU × 10⁶) = f / (CPI × 10⁶)'],
    ],
    [
      ['FLOPS', 'Saniyedeki kayan nokta aritmetik işlemi sayısı.'],
      ['MFLOPS', 'Saniyedeki milyon kayan nokta işlemi.', 'MFLOPS = FP işlem sayısı / (T × 10⁶)'],
    ],
    [
      ['İşlem hızı', 'Birim zamanda sayılan işlem veya komut miktarı.'],
      ['İşin bitiş süresi', 'Toplam iş miktarının hıza bölümü; aynı işi kıyaslamada belirleyici ölçü.'],
    ],
  ], null, ['Neyi sayıyoruz?', [
    ['Ölçü','Sayılan şey','Dikkat'],
    ['MIPS','Makine komutu','Farklı programlar aynı iş için farklı sayıda komut kullanabilir.'],
    ['FLOPS','Kayan nokta işlemi','Bir komut birden çok aritmetik işlem yapabilir.'],
    ['Süre','İşin bitmesi','Aynı iş ve doğrulukla karşılaştır.'],
  ]]),
  concepts('amdahl-yasasi', [
    [
      ['İyileşen pay (p)', 'Eski toplam sürenin hızlandırılan bölümü; yüzdeyi 0–1 aralığına çevir.'],
      ['Bölüm hızlanması (k)', 'Yalnızca iyileştirilen kısmın kaç kat hızlandığı.'],
      ['Amdahl yasası', 'İyileşmeyen ve hızlanan süreleri birleştiren toplam hızlanma.', 'S = 1 / [(1 − p) + p/k]'],
    ],
    [
      ['Hızlanma üst sınırı', 'İyileşen kısmı sıfır süreye indirseydin ulaşacağın sınır.', 'p < 1 için S_max = 1 / (1 − p)'],
      ['Seri darboğaz', 'Dokunulmayan sürenin tüm kazancı sınırlaması.'],
    ],
  ], ['Kısmi iyileştirme', ['Eski süreyi ayır','İyileşen kısmı k’ya böl','Diğer kısımla topla','Eski süreyi yeniye böl'], 'p, yeni sürenin değil eski sürenin payıdır.']),
  concepts('gibson-grosch-ve-formul-secimi', [
    [
      ['Gibson karışımı', 'Komut sınıflarının oranlarıyla ortalama yürütme maliyeti hesabı.', 't_ort = Σ(pᵢ × tᵢ); T = IC × t_ort'],
    ],
    [
      ['Grosch kanunu', 'Hız ile maliyeti ilişkilendiren tarihsel model; evrensel güncel kural değildir.', 'V = K × Cᵐ; burada C maliyet'],
    ],
    [
      ['Formül seçimi', 'Önce verilenin çevrim, süre, işlem sayısı veya maliyet olduğunu ayırt et.'],
      ['Yüzde–kat ayrımı', 'Hızlanma bir oran; süre azalması eski sürenin kaybedilen payıdır.'],
    ],
  ], null, ['Sorudaki ipucundan formüle', [
    ['Verilen / istenen','Kullanılacak ilişki'],
    ['Komut + CPI + frekans → süre','T = IC × CPI / f'],
    ['Sınıf oranı + sınıf süresi → ortalama','t_ort = Σ(pᵢ × tᵢ)'],
    ['Yalnız bir kısım hızlanıyor','Amdahl'],
    ['Eski / yeni süre → hızlanma','S = T_eski / T_yeni'],
  ]]),
  concepts('isa-sozlesmesi', [
    [
      ['ISA', 'Makine komutlarının kodlamasını ve yazılıma görünen davranışını tanımlayan sözleşme.'],
      ['Makine kodu', 'Komutun işlemcinin okuyacağı bit biçimi.'],
      ['Assembly', 'Makine komutlarını ADD gibi okunabilir adlarla yazma biçimi.'],
      ['Mikromimari', 'ISA’yı gerçekleştiren önbellek, boru hattı ve yürütme birimleri gibi iç tasarım.'],
    ],
    [
      ['Mimari durum', 'Programın görebildiği yazmaçlar, PC ve diğer tanımlı durum.'],
      ['Genel amaçlı yazmaç', 'Operand, ara sonuç veya adres tutabilen hızlı işlemci alanı.'],
      ['SP', 'Yığının ISA’nın tanımladığı konumunu izleyen yığın işaretçisi.'],
      ['Veri türü', 'Bitlerin tamsayı, adres, kayan nokta veya vektör olarak yorumlanma kuralı.'],
    ],
    [
      ['Z bayrağı', 'İşlem sonucunun sıfır olup olmadığını bildirir.'],
      ['N/S bayrağı', 'Sonucun işaret bitini bildirir.'],
      ['C bayrağı', 'Elde veya çıkarmada ISA’ya göre ödünç bilgisini bildirir.'],
      ['V/O bayrağı', 'İşaretli sonucun aralığı aşıp aşmadığını bildirir.'],
    ],
    [
      ['Ayrıcalıklı komut', 'Bellek yönetimi gibi özel yetki gerektiren işlemci işini yapan komut.'],
      ['Kodlama dengesi', 'Komut uzunluğu, alanların kapasitesi ve çözümleme kolaylığı arasındaki tercih.'],
      ['Hizalama', 'Bir verinin adresinin belirli bayt katlarına uygun olması kuralı.'],
      ['Sistem çağrısı', 'Kullanıcı programının işletim sistemi çekirdeğinden kontrollü hizmet istemesi.'],
    ],
  ]),
  concepts('komut-kodlama-ve-siniflar', [
    [
      ['Opcode', 'Komutun hangi işlemi yapacağını seçen bit alanı.'],
      ['Operand', 'İşlemin kullandığı değer veya onu belirten alan.'],
      ['Kaynak / hedef', 'Kaynak okunur; sonucun yazıldığı yer hedeftir.'],
      ['Alan kapasitesi', 'b bitlik bir alanın en çok 2ᵇ farklı desen seçebilmesi.'],
      ['Sabit / değişken uzunluk', 'Bütün komutların aynı / farklı sayıda bit veya baytla kodlanması.'],
    ],
    [
      ['Üç adresli', 'İki kaynak ve ayrı hedef açık yazılır.', 'ADD R1,R2,R3 → R1 = R2 + R3'],
      ['İki adresli', 'Bir operand hem kaynak hem hedef olabilir.', 'ADD R1,R2 → R1 = R1 + R2'],
      ['Bir adresli', 'Diğer operand/sonuç için akümülatör gibi örtük konum kullanılır.'],
      ['Sıfır adresli', 'Operandlar yığının üstünden örtük olarak alınır.'],
    ],
    [
      ['Veri aktarımı', 'LOAD, STORE ve MOVE ile değerleri taşıma.'],
      ['Aritmetik / mantık', 'ADD, SUB, AND gibi değer veya bit hesapları.'],
      ['Kontrol aktarımı', 'Dallanma, çağrı ve dönüşle komut akışını değiştirme.'],
      ['Sistem komutu', 'Özel işlemci durumu veya yetkili sistem işini yönetme.'],
      ['Atomik işlem', 'Diğer yürütücülere bölünmez bir adım gibi görünen işlem.'],
      ['Bellek bariyeri', 'Bellek erişimlerinin sıralanmasına ilişkin kısıt getiren komut.'],
      ['Trap / istisna', 'Yürütmenin tanımlı bir olay nedeniyle işleyici koduna aktarılması.'],
    ],
  ]),
  concepts('temel-adresleme', [
    [
      ['Immediate (sabit)', 'Operand komutta yazılı değerin kendisidir.', '#12 → değer 12'],
      ['Yazmaç adresleme', 'Operand belirtilen yazmacın içeriğidir.', 'R2 → R2’deki değer'],
    ],
    [
      ['Etkili adres (EA)', 'Bellek operandının gerçekten okunacağı veya yazılacağı adres.'],
      ['Doğrudan adresleme', 'Komuttaki adres alanı doğrudan EA’dır.'],
      ['Bellek dolaylı', 'Komutun gösterdiği bellek konumundan önce EA okunur.'],
      ['Yazmaç dolaylı', 'EA bir yazmacın tuttuğu adrestir.'],
    ],
  ], null, ['Aynı A alanı farklı yorumlanır', [
    ['Yöntem','Etkili adres','Operand'],
    ['Sabit','Veri adresi yok','A'],
    ['Yazmaç','Veri adresi yok','R'],
    ['Doğrudan','A','M[A]'],
    ['Bellek dolaylı','M[A]','M[M[A]]'],
    ['Yazmaç dolaylı','R','M[R]'],
  ]]),
  concepts('ofset-indeks-ve-yigin', [
    [
      ['Taban', 'Bir bölgenin başlangıç adresi.'],
      ['Ofset', 'Başlangıca eklenecek işaretli veya işaretsiz fark; birimini kontrol et.'],
      ['İndeks', 'Dizideki elemanın sıra değeri; bayt ofsetine çevirmek gerekebilir.', 'EA = taban + indeks × eleman boyutu'],
    ],
    [
      ['PC göreli', 'Hedefi ISA’nın belirlediği PC tabanına göre bulma.', 'EA = PC_tabanı + işaretli ofset'],
      ['Ofset ölçeği', 'Ofsetin bayt mı, komut adedi mi ifade ettiğini belirleyen çarpan.'],
    ],
    [
      ['Yığın', 'Son giren öğenin ilk çıktığı LIFO düzeni.'],
      ['PUSH / POP', 'Yığına değer koyma / yığından değer alma.'],
      ['Dönüş adresi', 'Prosedür bittiğinde komut akışının devam edeceği yer.'],
      ['Örtük operand', 'Komutta yazılmadan komutun kuralından belirlenen operand.'],
    ],
  ], ['Dizi elemanını bul', ['Sıra numarasını indekse çevir','İndeks × eleman boyutu','Tabana ekle','O adresteki veriyi oku'], 'Sıfırdan başlayan dizide dördüncü elemanın indeksi 3’tür.']),
  concepts('mikro-kod-ve-uyumluluk', [
    [
      ['Mikro kod', 'Makine komutunu gerçekleştiren iç kontrol adımlarının tanımı.'],
      ['Kontrol belleği', 'Mikrokomutların saklandığı işlemci içi bellek.'],
      ['Sabit mantık', 'Kontrol sinyallerini doğrudan mantık devreleriyle üretme yaklaşımı.'],
    ],
    [
      ['İkili uyumluluk', 'Aynı komut bitlerinin gerekli ortamda aynı mimari davranışı vermesi.'],
      ['ISA uzantısı', 'Taban komut kümesine eklenen yetenekler.'],
      ['ABI', 'Çağrı düzeni ve veri yerleşimi gibi ikili yazılım kuralları; uyumluluğun ortam ayağı.'],
    ],
  ]),
  concepts('risc-cisc-ve-load-store', [
    [
      ['RISC', 'Düzenli komut biçimleri ve çoğunlukla yazmaç aritmetiğiyle tanınan yaklaşım.'],
      ['CISC', 'Zengin işlemleri ve bellek operandlarını komutla doğrudan ifade edebilen yaklaşım.'],
      ['Load-store', 'Aritmetiği yazmaçlarda; bellek erişimini LOAD/STORE ile yapma düzeni.'],
    ],
    [
      ['LOAD', 'Bellekteki değeri yazmaca yükler.'],
      ['STORE', 'Yazmaçtaki değeri belleğe saklar.'],
      ['MUL', 'Çarpma komutu; içeride kaç adım kullandığını tek başına söylemez.'],
    ],
    [
      ['Mikro işlem', 'Bir makine komutunun içeride ayrılabildiği daha küçük yürütme işi.'],
      ['Performans dengesi', 'Az komut, düşük CPI ve yüksek frekansın birlikte değerlendirilmesi.', 'T = IC × CPI / f'],
    ],
  ], ['Bellekteki iki değeri çarpma: load-store', ['LOAD birinci değer','LOAD ikinci değer','Yazmaçlarda MUL','Gerekliyse STORE'], 'Daha çok mimari komut, tek başına daha uzun süre demek değildir.']),
  concepts('von-neumann-ve-harvard', [
    [
      ['Von Neumann', 'Klasik modelde komut ile verinin ortak bellek ve erişim kaynağını paylaşması.'],
      ['Harvard', 'Komut ve veri belleğinin ayrı tutulduğu, ayrı erişim yolları kullanan düzen.'],
    ],
    [
      ['Von Neumann darboğazı', 'Komut ve veri aktarımının sınırlı ortak kaynağı beklemesi.'],
      ['Karma düzen', 'Ortak ana bellek yanında ayrı komut/veri önbellekleri gibi birleştirilmiş tasarım.'],
    ],
  ], null, ['Bellek yollarını hatırla', [
    ['Düzen','Komut erişimi','Veri erişimi'],
    ['Klasik ortak yol','CPU ↔ ortak bellek','Aynı kaynağı paylaşır'],
    ['Harvard','CPU ↔ komut belleği','CPU ↔ veri belleği; ayrı yol'],
    ['Yaygın karma örnek','Ayrı komut L1','Ayrı veri L1; aşağıda ortak bellek olabilir'],
  ]]),
  concepts('isa-aileleri-ve-komut-okuma', [
    [
      ['RISC-V', 'Açık ve modüler bir komut kümesi standardı.'],
      ['Taban ISA', 'Ailenin temel komut ve davranışlarını tanımlayan çekirdek.'],
      ['RV32I / RV64I', '32 / 64 bit temel RISC-V tamsayı komut kümeleri.'],
      ['Modülerlik', 'Çarpma veya atomik işlemler gibi uzantıları gereksinime göre ekleyebilme.'],
      ['M / A uzantıları', 'Sırasıyla tamsayı çarpma-bölme / atomik işlemler.'],
      ['F / D uzantıları', 'Tek / çift duyarlıklı kayan nokta işlemleri.'],
      ['C / V uzantıları', 'Sıkıştırılmış komut kodlama / vektör işlemleri.'],
    ],
    [
      ['ARM', 'Load-store yaklaşımıyla tanınan ISA ailesi.'],
      ['x86-64', '64 bit yazmaçlar ve zengin, değişken uzunluklu kodlamalar içeren ISA ailesi.'],
      ['Çalıştırılabilir uyumluluğu', 'ISA, gereken uzantılar, işletim sistemi ve ABI’nin birlikte uygun olması.'],
    ],
    [
      ['Komut çözümleme', 'İşlem, kaynak, hedef ve adresleme yöntemini belirleme.'],
      ['Sonuç izleme', 'Komutun hangi yazmaç, bellek konumu veya PC değerini değiştirdiğini takip etme.'],
    ],
  ], ['Komutu okuma sırası', ['Opcode: hangi iş?','Kaynaklar: hangi değerler?','Bellek varsa EA','Hedef: sonuç nereye?']]),
  concepts('ikili-sayilar-ve-bit-agirliklari', [
    [
      ['Bit', '0 veya 1 değerini alan ikili basamak.'],
      ['Bayt', 'Sekiz bitten oluşan veri birimi.'],
      ['Bit ağırlığı', 'Sağdan i. bitin işaretsiz değere katkısı.', 'bᵢ × 2ⁱ; sağdaki i = 0'],
      ['Bit genişliği (n)', 'Gösterim için ayrılan toplam bit sayısı.'],
    ],
    [
      ['Desen sayısı', 'n bit ile yazılabilen farklı bit dizilerinin sayısı.', '2ⁿ'],
      ['İşaretsiz aralık', 'Bütün bit ağırlıkları pozitif olduğunda temsil edilebilen değerler.', '0 … 2ⁿ − 1'],
    ],
    [
      ['Yorum kuralı', 'Aynı bit deseninden hangi değerin çıkarılacağını belirleyen gösterim.'],
      ['İşaretli / işaretsiz', 'Negatif değerleri de kodlayan / yalnız sıfır ve pozitif değerleri kodlayan yorum.', '4 bit 1001 → işaretsiz 9; ikinin tümleyeni −7'],
    ],
  ]),
  concepts('isaretli-gosterimler-ve-aralik', [
    [
      ['İşaret-büyüklük', 'En sol bit işaret, kalan bitler mutlak değerdir.'],
      ['Bire tümleyen', 'Negatif değeri pozitif karşılığın tüm bitlerini tersleyerek kodlar.'],
      ['Çift sıfır', 'İşaret-büyüklük ve bire tümleyende +0 ve −0 için ayrı desen bulunması.'],
    ],
    [
      ['İkinin tümleyeni', 'En sol bitin ağırlığı negatif olan, tek sıfırlı işaretli gösterim.', 'En sol bit: −2ⁿ⁻¹'],
      ['Negatifini alma', 'Sabit genişlikte bitleri tersleyip bir ekleme; en küçük negatifin pozitifi aynı genişliğe sığmaz.'],
    ],
    [
      ['Asimetrik aralık', 'Negatif uçta pozitif uçtan bir fazla değer bulunması.', '−2ⁿ⁻¹ … 2ⁿ⁻¹ − 1'],
      ['En küçük negatif', 'Yalnız en sol biti 1 olan desen.', '8 bitte 1000 0000 = −128'],
    ],
  ], null, ['4 bitte −3 nasıl görünür?', [
    ['Gösterim','Desen','Aralık'],
    ['İşaret-büyüklük','1011','−7 … +7'],
    ['Bire tümleyen','1100','−7 … +7'],
    ['İkinin tümleyeni','1101','−8 … +7'],
  ]]),
  concepts('ikinin-tumleyeni-donusumleri', [
    [
      ['Ardışık bölme', 'Pozitif sayıyı 2’ye bölüp kalanları sondan başa okuyarak ikiliye çevirme.'],
      ['Negatif kodlama', 'Mutlak değeri n bitte yazıp tersleme ve bir ekleme.', '−6, 4 bitte: 0110 → 1001 → 1010'],
    ],
    [
      ['İşaretli çözümleme', 'İkinin tümleyeninde en sol bit 1 ise işaretsiz toplamdan 2ⁿ çıkarma.', '1010₂ → 10 − 16 = −6'],
      ['Negatif bit ağırlığı', 'En sol biti −2ⁿ⁻¹ ile, kalan bitleri pozitif ağırlıklarla toplama.'],
    ],
    [
      ['Onaltılık (hex)', 'Her rakamla dört biti gösteren 16 tabanlı kısa yazım.', '0xA = 1010₂'],
      ['Genişliğe bağlı yorum', 'Hex yazım tek başına işareti belirlemez; bit sayısı ve veri türü gerekir.', '0xFF: 8 bit işaretli −1; 16 bitte 0x00FF +255'],
    ],
  ], ['Negatif ondalıktan n bite', ['Aralığa sığıyor mu?','Mutlak değeri n bitte yaz','Tüm bitleri tersle','1 ekle; düşük n biti tut']]),
  concepts('ikili-toplama-ve-tasma', [
    [
      ['Elde', 'Bir basamağın toplamından sonraki basamağa aktarılan bit.', '1 + 1 = 10₂'],
      ['Sabit genişlik', 'Sonuçta yalnız düşük n bitin tutulması; dış bitin ayrı değerlendirilmesi.'],
    ],
    [
      ['Carry-out', 'En üst basamaktan dışarı çıkan elde; işaretsiz toplamın aralığı aşmasını gösterir.'],
      ['İşaretli overflow', 'Matematiksel sonucun işaretli aralığa sığmaması.'],
      ['Toplamada taşma kuralı', 'Operandlar aynı işaretli, sonuç ters işaretliyse taşma vardır.'],
    ],
    [
      ['32 bit pozitif sınır', 'İkinin tümleyeninde en büyük pozitif tamsayı.', '0x7FFFFFFF = 2³¹ − 1'],
      ['Sarılan bit sonucu', 'Aralık dışı hesapta düşük bitlerin tutulmasıyla oluşan desen.'],
    ],
  ], null, ['4 bit toplamada carry ile overflow bağımsızdır', [
    ['Bit hesabı','Carry','Overflow','İşaretli yorum'],
    ['0010 + 0001 = 0011','0','0','2 + 1 = 3'],
    ['0111 + 0001 = 1000','0','1','7 + 1 aralık dışı'],
    ['1111 + 0001 = 0000','1','0','−1 + 1 = 0'],
    ['1000 + 1000 = 0000','1','1','−8 + (−8) aralık dışı'],
  ]]),
  concepts('ikili-cikarma-ve-tasma', [
    [
      ['Çıkarmayı toplama', 'B’nin bitlerini tersle, giriş eldesi 1 ile A’ya ekle.', 'A − B = A + ~B + 1; düşük n bit'],
      ['~B', 'Seçilen genişlik içindeki her B bitinin terslenmiş hali.'],
    ],
    [
      ['Çıkarmada işaretli taşma', 'A ve özgün B farklı işaretliyken sonucun işaretinin A’dan farklı olması.'],
      ['Ödünç', 'İşaretsiz çıkarmanın basamak ihtiyacı; işaretli taşma ile aynı ölçü değildir.'],
      ['Mod 2ⁿ aritmetiği', 'Hesabın yalnız düşük n bitini koruma; dış bitler sonuca katılmaz.'],
    ],
  ], ['Çıkarmada denetim', ['A + ~B + 1 hesapla','Düşük n biti tut','A ve özgün B’nin işaretini karşılaştır','Farklıysa: sonuç A’dan farklı mı?'], 'Son adımda cevap evetse işaretli taşma vardır. Aynı işaretli A ve B’de yoktur.']),
  concepts('genisletme-daraltma-ve-kaydirma', [
    [
      ['İşaret genişletme', 'İkinin tümleyeni değerini korumak için en sol biti yeni üst bitlere kopyalama.'],
      ['Sıfır genişletme', 'İşaretsiz değeri korumak için sola sıfır ekleme.'],
      ['Daraltma', 'Üst bitleri atma; değer ancak yeni aralığa sığıyorsa korunur.'],
    ],
    [
      ['Mantıksal sağa kaydırma', 'Bitleri sağa taşır, soldan sıfır doldurur.'],
      ['Aritmetik sağa kaydırma', 'Bitleri sağa taşır, soldan işaret bitini doldurur.'],
      ['Negatifte yuvarlama', 'Aritmetik sağa kaydırma sonucu aşağı yuvarlar.', '−3 >> 1 → −2; sıfıra doğru bölme ile aynı olmayabilir'],
    ],
    [
      ['Sola kaydırma', 'Bitleri sola taşır, sağdan sıfır doldurur; dışarı çıkan bitler kaybolur.'],
      ['Kaydırarak çarpma', 'k bit sola kaydırmak, değer aralığa sığıyorsa 2ᵏ ile çarpmaya karşılık gelir.'],
    ],
  ], null, ['1101 desenini yorumuna göre işle', [
    ['İşlem','Sonuç','Değer'],
    ['8 bite işaret genişlet','1111 1101','−3 korunur'],
    ['8 bite sıfır genişlet','0000 1101','İşaretsiz 13 korunur'],
    ['4 bitte aritmetik sağa 1','1110','−2'],
    ['4 bitte mantıksal sağa 1','0110','6'],
  ]]),
  concepts('toplayici-ve-islemci-davranisi', [
    [
      ['Toplayıcı/çıkarıcı', 'B’yi tersleme seçimi ve giriş eldesiyle aynı devrede iki işlem yapma.'],
      ['XOR ile taşma', 'İşaret bitine giren ve çıkan eldeler farklıysa işaretli taşma vardır.', 'V = C_giren XOR C_çıkan'],
    ],
    [
      ['MIPS32 ADD/SUB', 'İşaretli taşma oluştuğunda aritmetik istisna üreten komutlar.'],
      ['MIPS32 ADDU/SUBU', 'Taşma istisnası üretmeden düşük 32 bitlik sonucu bırakan komutlar.'],
      ['Temel RISC-V ADD/SUB', 'Düşük yazmaç genişliğini tutar; otomatik aritmetik taşma istisnası üretmez.'],
    ],
    [
      ['Tanımsız davranış', 'Dil standardının sonuca kural koymadığı durum; C/C++ işaretli tamsayı taşması buna dahildir.'],
      ['Denetimli aritmetik', 'Sonucu kullanmadan önce aralık ihlalini saptayıp yönetme.'],
    ],
    [
      ['Tam çarpım genişliği', 'İki n bit operandın tüm sonucunu tutmak için 2n bit gerekebilmesi.'],
      ['Kaydır-topla', 'Çarpımı bitlerin ağırlıklarına göre kaydırılmış toplamlarla kurma.'],
      ['Booth yaklaşımı', 'İşaretli çarpmada bit geçişlerinden toplama/çıkarma ve aritmetik kaydırma adımları üretme.'],
    ],
  ], ['Bit sonucu ile program davranışını ayır', ['Düşük bitleri hesapla','Taşmayı saptayabilirsin','ISA’nın tepkisini kontrol et','Programlama dilinin kuralını uygula']]),
  concepts('ek-donanim-katmanlari', [
    [
      ['Fiziksel aygıt katmanı', 'Elektriksel davranış, transistör, direnç ve kapasitör düzeyi.'],
      ['Transistör', 'Mantık devresinde denetimli anahtar gibi kullanılabilen yarı iletken aygıt.'],
    ],
    [
      ['Sayısal mantık', '0/1 değerlerini kapılarla işleyen soyutlama düzeyi.'],
      ['AND / OR / NOT', 'Sırasıyla ve, veya, tersleme bit işlemleri.'],
      ['XOR', 'Girişler farklıysa 1 üreten özel veya işlemi.'],
      ['Yarım toplayıcı', 'İki bit için toplamı XOR, eldeyi AND ile üretir.'],
      ['Kontrol katmanı', 'Devrelerin hangi sırada ve ne zaman etkinleşeceğini belirler.'],
    ],
  ], ['Donanımın soyutlama basamakları', ['Transistör ve sinyal','Mantık kapıları','Toplayıcı ve yazmaç','Kontrollü işlemci adımları']]),
  concepts('ek-veri-yolu-ve-onbellek', [
    [
      ['MAR', 'Belleğe erişilecek adresi tutan bellek adres yazmacı.'],
      ['MDR / MBR', 'Bellekten gelen veya belleğe gidecek veriyi tutan yazmaç.'],
      ['Adres yolu', 'Erişilecek konumu taşır.'],
      ['Veri yolu', 'Aktarılan bitleri taşır.'],
      ['Kontrol yolu', 'Okuma/yazma gibi işlem ve zamanlama sinyallerini taşır.'],
    ],
    [
      ['L1', 'Tipik olarak çekirdeğe en yakın, en küçük ve en hızlı önbellek düzeyi.'],
      ['L2 / L3', 'Genellikle daha büyük ve erişimi daha uzun alt önbellek düzeyleri.'],
      ['Düzeye göre hit/miss', 'Bir blok L1’de yokken L2’de bulunabilir; hangi düzey olduğu belirtilmelidir.'],
    ],
  ], ['Bellek okuma özeti', ['Adresi MAR’a koy','Okuma isteği gönder','Veriyi MDR’a al','Hedef yazmaca aktar']]),
  concepts('ek-flynn-ve-topolojiler', [
    [
      ['SISD', 'Tek komut akışı, tek veri akışı.'],
      ['SIMD', 'Tek komut akışıyla çok veri üzerinde aynı işlemi yapma.'],
      ['MISD', 'Çok komut akışı, tek veri akışı; sınıflandırmanın seyrek rastlanan durumu.'],
      ['MIMD', 'Çok komut ve çok veri akışıyla bağımsız yürütme.'],
    ],
    [
      ['Ortak bellek', 'İşlemcilerin paylaşılan adres alanından veri alışverişi yapması.'],
      ['Dağıtık bellek', 'Düğümlerin kendi yerel belleklerinin bulunması; iletişim mesajlaşmayla kurulabilir.'],
    ],
    [
      ['Topoloji', 'Düğümlerin fiziksel veya mantıksal bağlantı biçimi.'],
      ['Doğrusal / yıldız', 'Sıralı komşu bağlantıları / merkezi düğüme bağlantılar.'],
      ['Mesh', 'Düğümlerin ızgara komşularına bağlanması.'],
      ['Tam bağlantı', 'Her düğüm çiftinin doğrudan bağlı olması.', 'n düğüm için n(n − 1)/2 yönsüz bağlantı'],
      ['Hiperküp', '2ᵈ düğümlü; her düğümün d komşuya bağlandığı d boyutlu düzen.'],
    ],
  ], null, ['Flynn: komut × veri akışı', [
    ['','Tek veri','Çok veri'],
    ['Tek komut','SISD','SIMD'],
    ['Çok komut','MISD','MIMD'],
  ]]),
  concepts('ek-boru-hatti-hesaplari', [
    [
      ['Fetch / Decode', 'Komutu getir / komutu çözümle.'],
      ['Execute / Writeback', 'İşi yürüt / sonucu hedefe yaz.'],
      ['Ardışık yürütme', 'Bir komut tüm aşamaları bitirince diğerini başlatma.', 'T = N × Σtᵢ'],
      ['Bağımsız paralel birimler', 'Her biri tam komut yürüten P birimle parti halinde çalışma.', 'T = ⌈N/P⌉ × Σtᵢ; eş komut süreleri varsayımı'],
    ],
    [
      ['Boru hattı', 'Farklı komutların farklı aşamalarda aynı anda ilerlemesi.'],
      ['İdeal senkron süre', 'K aşama ve N komutta en uzun aşamanın belirlediği çevrimle hesap.', 'T = (K + N − 1) × max(tᵢ); duraklama ve ek yük yok'],
      ['Sınavın alternatif modeli', 'İlk komuta ham aşama toplamı, sonrakilere en uzun aşama süresi verme.', 'T = Σtᵢ + (N − 1) × max(tᵢ); model açıkça belirtilmeli'],
      ['Ortalama komut süresi', 'Toplam süreyi tamamlanan komut sayısına bölme.', 'T / N; birim ns/komut ise bu bir hız birimi değildir'],
    ],
    [
      ['Süper boru hattı', 'Aşamaları daha kısa alt aşamalara bölme.'],
      ['Süperskalar', 'Bir çevrimde birden çok komut başlatabilen tasarım.'],
      ['Duraklama', 'Bağımlılık veya kaynak bekleme yüzünden ilerleyemeyen çevrim.'],
    ],
  ]),
  concepts('ek-frekans-karsilastirma', [
    [
      ['Mevcut çevrim sayısı', 'Ölçülen süre ile frekanstan geri hesaplanan toplam çevrim.', 'C_A = T_A × f_A'],
      ['Çevrim katsayısı (k)', 'Yeni işlemcinin aynı işte kullandığı çevrimin eskiye oranı.', 'C_B = k × C_A'],
    ],
    [
      ['Hedef frekans', 'Belirli çevrim sayısını hedef süre içinde tamamlayacak en düşük frekans.', 'f_B ≥ C_B / T_hedef'],
      ['Varsayım', 'k sabit mi, frekans değişimi çevrim sayısını etkiliyor mu? Sorunun modelini belirt.'],
    ],
  ], ['Hedef süreye ulaş', ['C_A = T_A × f_A','C_B = k × C_A','f_B ≥ C_B / T_hedef','Hz → GHz dönüşümünü yap']]),
];
