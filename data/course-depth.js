// Slaytlardaki ek ayrımlar ve uygulamalar, ilgili dersin içinde açılır.
window.DERS_AYRINTILARI = {
  'mimari-ve-organizasyon': [
    ['Veri hareketi, depolama ve işleme arasındaki sınır', 'Bir ağ paketini girişten çıkışa iletmek veri hareketidir. Paketi sonradan işlemek için belleğe almak depolamadır. Bellekteki iki paketin bilgilerini birleştirip sonucu geri yazmak işlemeyi de içerir. Kontrol birimi bu akışların hangi sırada ve ne zaman çalışacağını belirler.'],
  ],
  'cpu-bellek-ve-gc': [
    ['Bir G/Ç birimi hem giriş hem çıkış olabilir', 'Klavye ve sensör veri sağlar, ekran ve yazıcı sonuç alır. Ağ arayüzü ise bir paket alırken giriş, paket gönderirken çıkış görevi görür. Disk de okuma ve yazma yönlerinde iki rolü üstlenir.'],
    ['Kontrol biriminin iç döngüsü', 'Opcode uygun mikroprogramın başlangıç adresini seçer. Kontrol belleğinden gelen mikrokomut, yazmaçları ve veri yollarını etkinleştiren sinyallere çözülür. Sıralama mantığı, işlemci durumunu ve koşulları kullanarak sonraki mikrokomutun adresini belirler.'],
  ],
  'hesaplama-tarihi': [
    ['Mekanik hesap ve soyut hesaplama', 'Abaküs tek bir mucit veya tarihle ilişkilendirilemez. Pascal’ın 1642 tasarımı toplama ve çıkarmaya odaklanır. Leibniz’in 1670’lerdeki basamaklı düzeni çarpma ve bölmeyi de destekler. Babbage 1820’lerde tablolar için Fark Makinesi, 1830’larda daha genel Analitik Makine üzerine çalıştı. Turing’in 1936 modeli ise bir fiziksel makinenin yapımını değil, kurallarla nelerin hesaplanabildiğini tarif eder.'],
    ['Erken makineleri karşılaştır', 'Bu örnekleri kullanılan teknoloji ve amaç üzerinden ayır. 5,33 Hz, Z3’ün saat frekansıdır. Saniyede 5,33 genel hesap yaptığı anlamına gelmez.', [
      ['Makine', 'Dönem', 'Ayırt edici özellik'],
      ['Z3', '1941', 'Program kontrollü, elektromekanik ve ikili sayısal. Yaklaşık 5,33 Hz.'],
      ['Colossus', '1944', 'Tommy Flowers ve ekibinin vakum tüplü, elektronik ve özel amaçlı sistemi. Lorenz şifre analizini hızlandırdı.'],
      ['Harvard Mark I', '1944', 'IBM ve Harvard’ın geliştirdiği elektromekanik hesap makinesi.'],
    ]],
  ],
  'vakum-tupu-ve-sakli-program': [
    ['ENIAC, EDVAC ve UNIVAC arasındaki fark', 'ENIAC, Eckert ve Mauchly’nin liderliğindeki ekibin 1946’da kamuoyuna tanıttığı genel amaçlı elektronik örnektir. Sunumda yaklaşık 30 ton, 167 m², 17.468 tüp ve saniyede 5.000 toplama ile anlatılıyor. 1945 EDVAC raporunun önemi saklı program fikrini yaygınlaştırmasıdır. 1951’de teslim edilen UNIVAC I ise manyetik teypli ticari veri işlemenin erken örneğidir.'],
  ],
  'bilgisayar-kusaklari': [
    ['Kuşaklar değişirken başka neler değişti?', 'Ayrık transistörler baskılı devre kartlarına yerleştiriliyordu. Entegre devrelerle maliyet ve arıza riski azalırken diskler, işletim sistemleri, çoklu programlama ve ürün aileleri arasında uyumluluk önem kazandı. LSI ve ardından VLSI daha büyük bellek, taşınabilir sistemler, ağ bağlantıları, çok çekirdek ve özel hızlandırıcılar için alan açtı. 1971 Bowmar Brain, boyut değişimini gösteren bir cep hesap makinesi örneğidir.'],
    ['Sunumdaki tarih ve işlem hızı tablosu', 'Bu tablo yaklaşık dönemleri ve tipik işlem hızlarını entegrasyon ölçeğine göre özetler. Örneğin tablodaki 5. sıra VLSI’yi anlatırken başka bir sınıflandırmada “beşinci kuşak” 1980’lerin yapay zekâ hedeflerini ifade eder. Hız sütununu farklı dönemlerin aynı benchmark ölçümü gibi okumamak gerekir.', [
      ['Yaklaşık dönem', 'Baskın teknoloji', 'Tipik işlem/s'],
      ['1946–1957', 'Vakum tüpü', '40.000'],
      ['1958–1964', 'Transistör', '200.000'],
      ['1965–1971', 'Küçük ve orta ölçekli entegrasyon', '1.000.000'],
      ['1972–1977', 'Büyük ölçekli entegrasyon', '10.000.000'],
      ['1978–1991', 'Çok büyük ölçekli entegrasyon', '100.000.000'],
      ['1991 ve sonrası', 'Ultra büyük ölçekli entegrasyon', '1.000.000.000'],
    ]],
    ['Grafiği okumak', '4004 binler, 8086 on binler, 486 yaklaşık bir milyon, Pentium IV ise on milyonlar mertebesindedir. Grafiğin dikey ölçeği logaritmiktir: eşit dikey aralık, eşit sayıda transistör yerine aynı kat artışını gösterir.'],
  ],
  'is-yuku-ve-darbogaz': [
    ['Farklı işlerde farklı başarı ölçütü', 'Ofis yazılımında kısa yanıt süresi, video kodlamada sürdürülen iş hacmi, veritabanında eşzamanlı isteklerle birlikte bellek ve depolama, oyunda CPU–GPU dengesi ve gecikme öne çıkar.'],
    ['Sunum örneği · hesaplama iki kat hızlanırsa', 'Veri bekleme 6 s, hesaplama 2 s ve diğer işler 2 s ise toplam 10 s’dir. Hesaplama iki kat hızlanınca yalnızca 2 s, 1 s olur. Yeni toplam 6 + 1 + 2 = 9 s. Bütün işin hızlanması 10/9 ≈ 1,11 kattır.'],
  ],
  'cekirdek-yazmac-ve-frekans': [
    ['İşlemcideki görev dağılımını izle', 'Kontrol birimi komutun ne istediğini belirler. Yürütme birimleri hesap yapar, yazmaçlar küçük geçici değerleri tutar. PC sıradaki komutun konumunu izler, komut yazmacı getirilen komutu tutar. CPU bellek veya G/Ç sonucu gelene kadar bekleyebilir.'],
    ['Bir çekirdekle iki iş parçacığı ile iki çekirdek farklıdır', 'İşlemci paketi birden çok çekirdek içerebilir. Bazı çekirdekler birden fazla donanım iş parçacığını destekler. İş parçacıkları aynı fiziksel çekirdeği ve onun kaynaklarını paylaşabilir. Bir programın bağımlı adımları fazladan çekirdek eklenince kendiliğinden bölünmez.'],
  ],
  'ram-depolama-gpu-ve-gc': [
    ['RAM kapasitesi, kanal ve erişim düzeni', 'Kapasite GB cinsinden ne kadar verinin tutulduğunu söyler. Gecikme tek isteğin yanıt süresini, bant genişliği saniyede taşınan veriyi verir. Birden fazla bellek kanalı uygun erişim düzeninde paralel aktarımı artırabilir.'],
    ['Kesme ile DMA birlikte nasıl çalışır?', 'Bir disk okumasında CPU aktarımı hazırlar. Denetleyici DMA ile veriyi RAM’e taşır, işi tamamlayınca bir kesme ile CPU’yu haberdar edebilir. Tampon, iki taraf aynı hızda hazır olmadığında veriyi geçici olarak tutar. Sistem içinde bu erişimler tek bir ortak yol yerine farklı noktadan noktaya ya da hiyerarşik bağlantılardan geçebilir.'],
  ],
  'fiziksel-sinirlar-ve-onbellek': [
    ['RC gecikmesi nasıl doğar?', 'R, akıma karşı koyan dirençtir. C, bağlantının elektrik yükü depolama özelliğidir. Bir sinyalin alıcıda kararlı seviyeye ulaşması için bu yükün dolup boşalması zaman alır. Telin uzunluğu, kalınlığı, aralığı ve malzemesi sonucu değiştirir. Çipe önbellek koymak veya bazı bağlantıları kısaltmak bazı erişimleri hızlandırır, ama güç ve ısı sınırını ortadan kaldırmaz.'],
    ['128 bayt kaç aktarım eder?', '32 bitlik yol aktarım başına 4 bayt taşır: 128/4 = 32 aktarım. 64 bitlik yol 8 bayt taşır: 128/8 = 16 aktarım. Aktarım sıklığı sabitse ideal bant genişliği ikiye çıkar. Bir isteğin ilk yanıt süresi veya tüm programın süresi için aynı oranı doğrudan kullanamazsın.'],
  ],
  'komut-akisi-ve-dallanma': [
    ['Algoritma veri hareketini nasıl azaltır?', 'Satır sıralı matriste aynı satır boyunca ilerlemek, önbelleğe gelen komşu verileri yeniden kullanır. Ara sonucu saklamak aynı hesabı tekrar yapmayı önler. Büyük bir işi önbelleğe sığan bloklara ayırmak da tekrar veri getirmeyi azaltabilir. Paralellik çekirdek içinde bağımsız komutlarda, çekirdekler arasında görevlerde veya GPU’da benzer veri işlemlerinde ortaya çıkabilir.'],
    ['Sunum örneği · son sonuca bakan tahminci', 'Başlangıçta A (alındı) tahmin ediliyor. Gerçek sonuç A, A, A, A, D (alınmadı) ise tahminler A, A, A, A, A olur. İlk dört tahmin doğru, sonuncu yanlış: %80 doğruluk. Bu yüzde tek başına programın hızlanma oranını vermez.'],
  ],
  'veri-bagimliligi-ve-spekulasyon': [
    ['Sunum örneği · geçici sonuç ne zaman kalıcı olur?', 'Kod x > 0 ise y = 10, değilse y = 20 yazıyor. İşlemci ilk dalı tahmin edip geçici y = 10 üretiyor. x = 5 ise koşul doğru, y = 10 uygun sırada kalıcı olabilir. x = −3 ise geçici değer atılır, doğru yol y = 20 üretir. Aynı örnekte tahmin yol seçer, spekülasyon o yolda iş başlatır. Sıra dışı yürütme ise hazır bağımsız işleri seçer.'],
  ],
  'sistem-karsilastirma': [
    ['Üç sistemde hangi iş öne çıkar?', 'A yüksek tek çekirdek performansı ve az çekirdekle etkileşimli ya da az paralel işlerde güçlü olabilir. B daha çok çekirdekle paralel iş hacmi sağlar, ancak seri kısımlar ve bellek paylaşımı sınırlayabilir. C güçlü GPU ve hızlı depolamadan, yazılım bunlardan yararlanıyorsa kazanç görür. Karar sırası iş ve ölçüt, veri yolu, en büyük bekleme ve önerinin o sınıra etkisidir.'],
    ['Video işi ve sürdürülebilir hız', 'Projeyi açarken dosya erişimi, önizlemede CPU/GPU ve RAM, efektlerde kullanılan algoritma, dışa aktarmada ise kodlayıcı ve veri akışı önem kazanır. Dizüstü kısa testte yüksek frekansta başlayıp ısı nedeniyle yavaşlayabilir. Mobilde pil ömrü, veri merkezinde soğutma ve performans/watt farklı kararları öne çıkarır.'],
  ],
  'olcum-sure-ve-hizlanma': [
    ['Karşılaştırmayı tekrar et', 'Sürümü, algoritmayı, girdi boyutunu, donanım ve güç modunu kaydet. Ölçümü tekrarlayıp değerlerin ne kadar değiştiğine bak. Örneğin 8 s geçen sürenin 5 s’si CPU süresi olabilir. Bu iki sayıyı aynı performans oranında birbirinin yerine kullanma.'],
    ['4 saniye ve 10 saniye', 'A bir işi 4 s’de, B 10 s’de bitirirse performansları 0,25 ve 0,10 iş/s olur. A/B = 2,5. B’den A’ya geçiş sürede (10 − 4)/10 = %60 azalma sağlar.'],
  ],
  'frekans-ve-cevrim-suresi': [
    ['MHz üzerinden tersini almak', '500 MHz = 5 × 10⁸ çevrim/s. 1/(5 × 10⁸) = 2 × 10⁻⁹ s, yani 2 ns. Ters yönde 0,5 ns = 5 × 10⁻¹⁰ s ve frekans 2 GHz’dir. Sonucu yazmadan önce 1 GHz ↔ 1 ns kontrolünü kullan.'],
  ],
  'cpu-denklemi-ve-cpi': [
    ['Sunum örneği · komut sayısı ve frekans', '0,4 s ve 2,5 GHz toplam 1 milyar çevrim eder. CPI 1,25 ise yürütülen komut sayısı 1 milyar / 1,25 = 800 milyondur. Ters yönde 800 milyon komut, CPI 2 ve 0,5 s hedef için 1,6 milyar çevrim / 0,5 s = 3,2 GHz gerekir. İkinci işlemde komut sayısı ve CPI sabit kabul edilmiştir.'],
    ['Ağırlıklı CPI ve iki işlemciyi karşılaştırmak', 'Sınıf payları %50, %30, %20 ve CPI değerleri 1, 2, 4 ise ortalama 0,50 + 0,60 + 0,80 = 1,90. İki işlemcide A 1 milyar komutu CPI 1,2 ve 3 GHz ile 0,40 s’de, B 800 milyon komutu CPI 1,5 ve 2,5 GHz ile 0,48 s’de bitirir. A’nın performansı 0,48/0,40 = 1,2 kat yüksektir.'],
  ],
  'mips-ve-flops': [
    ['CPI’dan MIPS’e hızlı kontrol', '3 GHz ve CPI 1,5 için saniyede 3 × 10⁹ / 1,5 = 2 milyar komut tamamlanır. Milyona bölünce 2.000 MIPS elde edilir. Frekans 2,4 GHz ve CPI 1,2 iken de sonuç 2.000 MIPS’tir. Komut karışımı değişirse aynı işlemcinin CPI ve MIPS değerleri de değişebilir.'],
  ],
  'amdahl-yasasi': [
    ['Hangi bölümü iyileştirmeli?', 'Eski sürenin %30’u CPU hesabı, %50’si bellek beklemesi ve %20’si diğer işler olsun. CPU’yu üç kat hızlandırmak yeni süreyi 0,70 + 0,30/3 = 0,80 yapar ve 1,25 kat kazandırır. Bellek beklemesini yarıya indirmek 0,50 + 0,50/2 = 0,75 süre ve yaklaşık 1,33 kat kazanç verir. Kararı parçanın eski süre payıyla birlikte ver.'],
  ],
  'gibson-grosch-ve-formul-secimi': [
    ['Sunum örneği · Gibson karışımı', '%60 toplama/çıkarma 2 ns, %30 çarpma 5 ns ve %10 bölme 10 ns sürüyor. Ortalamaya katkılar sırasıyla 1,20, 1,50 ve 1,00 ns. Toplam 3,70 ns/komut, bir milyon komutta 3,70 ms. Yüzdeleri çarpmadan önce 0,60 gibi paylara çevir.'],
    ['Çözüm kâğıdında gösterilecekler', '900 milyon komut, CPI 1,4 ve 2,1 GHz için önce toplam 1,26 milyar çevrimi yaz, sonra frekansa bölüp 0,60 s bul. Verilenleri, formülü, birimleri ve sonucu sırasıyla göster. Soruda geçen 0,75 veya 1,25 gibi çarpanlar, ancak soru bunların neyi modellediğini belirtiyorsa kullanılabilir.'],
  ],
  'isa-sozlesmesi': [
    ['Tasarım kararları birbirini etkiler', 'Çok adresleme biçimi kodu kısaltabilir, fakat kodlama ve çözmeyi karmaşıklaştırır. Daha düzenli biçimler donanımı kolaylaştırabilir, fakat ek adres hesaplama komutları gerekebilir. Adres boyutu ve hizalama kuralları belleğe erişimi, ayrıcalık kuralları çekirdeğe geçişi belirler.'],
    ['Ayrıcalıklı işler', 'Sayfa tablolarını değiştirme, kesme durumunu yönetme ve özel durum yazmaçlarına erişim genellikle işletim sistemi çekirdeğine ayrılır. Kullanıcı programı bir sistem çağrısıyla çekirdeğe kontrollü biçimde geçebilir.'],
  ],
  'komut-kodlama-ve-siniflar': [
    ['Sabit ve değişken uzunluk', 'Sabit uzunlukta komut sınırını bulmak ve alanları ayırmak daha düzenli olabilir. Değişken uzunlukta yaygın komutlar kısa kodlanabilir, ama komut sınırını belirlemek daha zorlaşabilir. Daha çok açık operand alanı daha esnek komut verirken kodlama bitlerini tüketir.'],
    ['Komutların yönü ve görevi', 'LOAD bellekten yazmaca, STORE yazmaçtan belleğe taşır. MOV yazmaç veya sabit değerle çalışabilir, PUSH ve POP yığını kullanır. ADD, SUB, MUL ve DIV aritmetiktir. AND, OR, XOR ve NOT bitleri işler. Kaydırma bitleri taşır, CMP veya SLT karşılaştırma sonucu üretir.'],
    ['Kontrol ve sistem işlemleri', 'JUMP doğrudan hedefe, koşullu BRANCH karşılaştırmaya göre hedefe ya da devam komutuna gider. CALL/JAL dönüş konumunu saklar, RETURN oraya döner. Sistem komutları arasında trap, bellek bariyeri, atomik işlem, istisnadan dönüş ve donanım ipuçları bulunabilir.'],
  ],
  'temel-adresleme': [
    ['Etkili adres ve operandı iki ayrı satıra yaz', 'R2 = 240 ve M[240] = 9 ise LOAD R1,[R2] için EA = 240, R1’e yazılan değer 9’dur. STORE [R2],R4 aynı adresi hesaplar, fakat bu defa R4’ün değeri M[240]’a yazılır. [R2] bir işaretçinin gösterdiği konuma erişmeye benzer.'],
  ],
  'ofset-indeks-ve-yigin': [
    ['Sunum örnekleri · dizi ve nesne alanı', 'R2 = 1000, R3 = 4 ve M[1016] = 25 ise [R2+16] ile [R2+R3×4] aynı adrese gider ve 25 döndürür. İkinci gösterim dört baytlık bir dizinin indeksini ölçekler. R4 = 2000 nesne başlangıcını tutuyorsa [R4+12], nesne içindeki 2012 adresli alandır.'],
    ['PC göreli hedef ve yığın adımları', 'Taban 1004 ve ofset −8 bayt verilirse hedef 996’dır. Ofset sözcük birimindeyse önce bayta çevir. Yığında PUSH yeni değeri saklar, POP en üst değeri alır. SP’nin erişimden önce mi sonra mı güncellendiği ISA’nın yığın kuralına bağlıdır.'],
  ],
  'mikro-kod-ve-uyumluluk': [
    ['Tarih ve tasarım dengesi', 'Sunumda 1951’de Maurice Wilkes’in önerisi ve IBM System/360 uyumlu aile yaklaşımı anlatılır. Mikroprogram karmaşık komutu düzenli adımlara böler, fakat kontrol belleği ve ek adımlar gerektirebilir. Sabit mantık doğrudan ve düşük gecikmeli olabilir, değiştirilmesi ve doğrulanması daha zor olabilir. Karma tasarım sık komutlarla karmaşık durumlara farklı yollar ayırır.'],
  ],
  'risc-cisc-ve-load-store': [
    ['RISC ve CISC açılımları ve tasarım tercihleri', 'RISC, Reduced Instruction Set Computer. CISC, Complex Instruction Set Computer. CISC’de kod yoğunluğu, adresleme esnekliği ve eski yazılım uyumu öne çıkabilir. Bunun bedeli daha karmaşık çözme ve doğrulamadır. RISC’de düzenli kodlama boru hattını kolaylaştırabilir. Ayrı LOAD/STORE komutları ve çok sayıda yazmaç kullanmak komut sayısını, kodlama alanını ve derleyicinin görevini etkiler.'],
    ['Aynı çarpmanın iki gösterimi', 'A ve B bellekten okunur, çarpım A’ya yazılır. Soldaki bir makine komutudur ve içeride birden fazla işlem gerektirebilir. Sağdaki dört adım yazılımda açıkça görünür.', [
      ['CISC benzeri ifade', 'Load-store dizisi'],
      ['MULT [A], [B]', 'LOAD R1, [A]'],
      ['İçeride B okunur', 'LOAD R2, [B]'],
      ['İçeride çarpılır', 'MUL R3, R1, R2'],
      ['İçeride sonuç A’ya yazılır', 'STORE [A], R3'],
    ]],
  ],
  'von-neumann-ve-harvard': [
    ['Bellek düzeni ve ISA ailesi', 'Harvard veya Von Neumann ayrımı komut ile verinin erişim yolunu tarif eder. RISC veya CISC ayrımı komut kümesinin tasarım tercihlerini tarif eder. Bir işlemci bir RISC ISA’yı uygularken birleşik ana bellek ve ayrı komut/veri önbelleği kullanabilir.'],
  ],
  'isa-aileleri-ve-komut-okuma': [
    ['RISC-V tabanı ve standart uzantıları', 'RV32I ve RV64I sırasıyla 32 ve 64 bitlik temel tamsayı ISA’larıdır. Uzantı harfleri işlemcinin desteklediği ek davranışı gösterir. Derleme hedefiyle gerçek işlemcinin uzantıları uyuşmalıdır.', [
      ['Uzantı', 'İşlev'],
      ['M', 'Tamsayı çarpma ve bölme'],
      ['A', 'Atomik işlemler'],
      ['F ve D', 'Tek ve çift duyarlıklı kayan nokta'],
      ['C', 'Sıkıştırılmış komut kodlama'],
      ['V', 'Vektör işlemleri'],
    ]],
    ['Sunumdaki komut sınıflandırmasını çöz', 'ADD R1,R2,#5 aritmetiktir, R2 ile komuttaki 5’i kullanır ve R1’e yazar. LOAD R3,[R4+12] taban + ofset ile bellekten okur. STORE [R5],R6 yazmaç dolaylı adresle belleğe yazar. BEQ R1,R2,label eşitlikte PC göreli bir hedefe dallanır. MUL [A],[B] bellek operandlı karmaşık bir komut olarak düşünülebilir.'],
    ['Altı operandı aynı bellek üzerinde oku', 'R2 = 1000, R3 = 5, M[1020] = 40 ve M[40] = 7. #12 sabit 12, R3 değeri 5’tir. [R2] M[1000]’i okur ve içerik verilmediği için sayısal değer bilinmez. [R2+20] ve [R2+R3×4] ikisi de 40 okur. M[M[1020]] önce 40 adresini bulur, sonra 7 okur.'],
    ['ISA ailesi seçerken sorulacaklar', 'ARM geniş lisanslı ekosistemiyle mobil, gömülü ve diğer alanlarda, x86-64 ikili uyum geleneğiyle masaüstü ve sunucuda, RISC-V açık ve modüler yapısıyla eğitim ve gömülü sistemler dahil farklı alanlarda kullanılır. Uygulama için işletim sistemi, komut uzantıları, derleyici, güç, maliyet ve uzun vadeli uyum gereksinimini birlikte kontrol et.'],
  ],
  'ikili-sayilar-ve-bit-agirliklari': [
    ['Genişlik ve işaret nereden gelir?', 'Bit bir 0 veya 1, sekiz bit bir bayttır. Bit dizisi konumuna göre bir tamsayı, adres ya da komut kodu olabilir. Sayaçta yalnızca sıfır ve pozitif değerler gerekebilir, sıcaklık farkında ise negatif değer de gerekir. Aynı bitleri hangi komutun ve türün kullandığını kontrol et.'],
  ],
  'isaretli-gosterimler-ve-aralik': [
    ['4 bit örüntülerin tamamı', 'En yüksek bit 0 iken normal ikili ağırlıkları topla. Yüksek bit 1 ise ağırlığı −8’dir. Örneğin 1001 = −8 + 1 = −7. 8 bitte 0111 1111 = 127, 1000 0000 = −128 ve 1111 1111 = −1.', [
      ['Desen', 'Değer', 'Desen', 'Değer'],
      ['0000', '0', '1000', '−8'],
      ['0001', '1', '1001', '−7'],
      ['0010', '2', '1010', '−6'],
      ['0011', '3', '1011', '−5'],
      ['0100', '4', '1100', '−4'],
      ['0101', '5', '1101', '−3'],
      ['0110', '6', '1110', '−2'],
      ['0111', '7', '1111', '−1'],
    ]],
  ],
  'ikinin-tumleyeni-donusumleri': [
    ['Özel durum · en küçük negatifin tersini almak', '4 bitlik −8’in deseni 1000’dir. Tersleyince 0111, bir ekleyince yine 1000 çıkar. +8 dört bitlik işaretli aralığa sığmadığı için aynı desen geri dönmüştür. +8’i saklamak için daha geniş gösterim gerekir.'],
    ['Sekiz bitlik dönüşüm turu', '+45 = 32 + 8 + 4 + 1, dolayısıyla 0010 1101. +37 = 0010 0101. −37 için tersle: 1101 1010, sonra bir ekle: 1101 1011. 1101 1010 kendi başına 218 − 256 = −38’dir. 0x92, 146 − 256 = −110 olarak okunur.'],
  ],
  'ikili-toplama-ve-tasma': [
    ['Carry ve overflow’un dört birleşimi', 'Carry-out ile işaretli overflow’u her satırda ayrı denetle. Özellikle 1000 + 1000 için işaretsiz 8 + 8 = 16 ve işaretli −8 + (−8) = −16, dört bitlik kendi aralıklarının dışındadır.', [
      ['4 bit işlem', 'Düşük bitler', 'Carry', 'Overflow'],
      ['0111 + 0001', '1000', '0', '1'],
      ['1111 + 0001', '0000', '1', '0'],
      ['1000 + 1000', '0000', '1', '1'],
      ['0011 + 0010', '0101', '0', '0'],
    ]],
    ['Negatif toplamlarda sınırı bul', '4 bitte −5 + 3 = −2 ve −3 + (−2) = −5 aralığa sığar. −5 + (−4) = −9 alt sınırı aşar ve düşük 4 bit 0111 görünür. 8 bitte 45 + 27 = 72 ve −60 + 25 = −35 geçerlidir. 100 + 40 = 140 aralık dışıdır, 1000 1100 deseni −116 olarak okunur.'],
  ],
  'ikili-cikarma-ve-tasma': [
    ['Özel durum · alt sınırdan bir çıkarmak', '4 bitte −8 − 1 hesabı 1000 + 1110 + 1 ile yapılır. Düşük dört bit 0111, yani +7 görünür. Asıl sonuç −9 olduğundan overflow vardır. 8 bitte benzer biçimde −90 − 50 = −140 aralık dışıdır ve düşük 8 bit 0111 0100 (+116) olur.'],
    ['Dış elde niçin atılır?', '6 − 3 için 0110 + 1101 = 1 0011 elde edilir. n bitlik yazmaç yalnız düşük n biti saklar. Sonuç 0011 = 3’tür. n+1’inci bitin atılması mod 2ⁿ aritmetiğidir. Çıkarmada dış elde, işaretli taşma kararını tek başına vermez.'],
  ],
  'genisletme-daraltma-ve-kaydirma': [
    ['Daraltmayı yeniden genişleterek sınamak', '16 bit +45’in düşük 8 biti 0010 1101’dir. Sıfırla veya işaretle yeniden genişletince +45 geri gelir. 301’in düşük 8 biti de 0010 1101’dir, fakat yeniden genişletince 301 geri gelmez. −45 için 1101 0011’i işaretle genişletince özgün negatif değer geri gelir.'],
    ['Sola kaydırmada dört bit sınırı', '0011 (+3) → 0110 (+6) ve 1101 (−3) → 1010 (−6) değeri koruyarak ikiyle çarpar. 0100 (+4) → 1000 (−8) ve 1011 (−5) → 0110 (+6) işlemlerinde matematiksel sonuç 4 bitlik aralığa sığmaz.'],
  ],
  'toplayici-ve-islemci-davranisi': [
    ['İki işlemci yaklaşımının farkı', 'Taşma denetimli işlem, işaretli sonucu sınayıp yalnızca sığıyorsa hedefe yazar. Sarılan işlem düşük n biti saklar ve otomatik taşma bildirimi üretmez. Bir aralık denetimini yazılıma bırakan mimaride overflow gereken yerde ayrıca kontrol edilir.'],
    ['Karma alıştırma · elde ve taşmayı ayrı hesapla', 'Düşük sonucu yaz, dış eldeyi ve işaretli overflow’u ayrı işaretle. Örneğin 1001 + 1010 iki negatifin toplamıdır. Düşük sonuç 0011 pozitif olduğundan işaretli taşma vardır, ayrıca en soldan elde çıkar.', [
      ['İşlem', 'Düşük 4 bit', 'Carry', 'Overflow'],
      ['0110 + 0011', '1001', '0', '1'],
      ['1110 + 0011', '0001', '1', '0'],
      ['1001 + 1010', '0011', '1', '1'],
      ['0101 + 1011', '0000', '1', '0'],
    ]],
  ],
};
