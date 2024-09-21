# Uçuş Rezervasyon Uygulaması

Bu proje, kullanıcıların uçuşları arayıp rezervasyon yapabilmeleri için oluşturulmuş bir uçuş rezervasyon uygulamasıdır. Kullanıcılar, kalkış ve varış noktalarını, tarihleri ve diğer filtreleri seçerek istedikleri uçuşları bulabilir ve rezervasyon yapabilir.

## İçindekiler

1. [Kullanılan Teknolojiler](#kullanılan-teknolojiler)
2. [Kurulum](#kurulum)
3. [Proje Yapısı](#proje-yapısı)
4. [Bileşenler](#bileşenler)
   - [Header](#header)
   - [MainContent](#maincontent)
   - [FlightSearchBar](#flightsearchbar)
   - [FlightList](#flightlist)
   - [FlightFilters](#flightfilters)
   - [Sidebar](#sidebar)
   - [MyFlights](#myflights)
5. [Kullanım](#kullanım)
6. [Katkıda Bulunma](#katkıda-bulunma)
7. [Lisans](#lisans)

## Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzünü oluşturmak için.
- **Next.js**: Proje yapısını ve sayfa yönlendirmelerini yönetmek için.
- **Tailwind CSS**: Arayüz stil ve tasarımını oluşturmak için.
- **React Icons**: İkonları kullanmak için.
- **ApexCharts**: Veri görselleştirmesi yapmak için (Opsiyonel).
- **MUI (Material-UI)**: Bazı arayüz bileşenleri için (Opsiyonel).

## Kurulum

1. Bu projeyi yerel makinenize klonlayın:

   ```bash
   git clone https://github.com/kullanici_adi/ucus-rezervasyon.git
   ```

2. Proje dizinine girin:

   ```bash
   cd ucus-rezervasyon
   ```

3. Gerekli bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

4. Uygulamayı başlatın:

   ```bash
   npm run dev
   ```

5. Tarayıcınızda `http://localhost:3000` adresine gidin.

## Proje Yapısı

/ucus-rezervasyon # Proje ana dizini
├── /components # React bileşenlerini içeren klasör
│ ├── Header.js # Başlık bileşeni
│ ├── MainContent.js # Ana içerik bileşeni
│ ├── FlightSearchBar.js # Uçuş arama çubuğu bileşeni
│ ├── FlightList.js # Uçuş listesini gösteren bileşen
│ ├── FlightFilters.js # Uçuş filtreleme seçenekleri bileşeni
│ ├── Sidebar.js # Yan panel bileşeni
│ └── MyFlights.js # Kullanıcının rezervasyon yaptığı uçuşları gösteren bileşen
├── /pages # Sayfaları içeren klasör
│ ├── index.js # Ana sayfa
│ └── \_app.js # Uygulama bileşeni (sayfa geçişlerini yönetir)
├── /public # Statik dosyaları içeren klasör (görseller, fontlar vb.)
│ └── images # Projeye ait görseller
├── /styles # Stil dosyaları
│ └── globals.css # Global stiller
├── package.json # Proje bağımlılıkları ve komutları
└── README.md # Proje bilgilerini içeren dosya

## Bileşenler

### Header

Uygulamanın üst kısmında bulunan ve kullanıcı adı ile menü seçeneklerinin yer aldığı bileşen. İkonlar ve başlıklar içerir.

### MainContent

Ana içeriği barındıran bileşen. `FlightSearchBar`, `FlightList`, `FlightFilters` ve `Sidebar` bileşenlerini içerir.

### FlightSearchBar

Kullanıcının uçuş araması yapabilmesi için kalkış, varış ve tarih bilgilerini girebileceği arama çubuğunu barındırır.

### FlightList

Arama sonuçlarına göre listelenen uçuş bilgilerini gösterir. Uçuş süresi, kalkış ve varış saatleri ve fiyat bilgilerini içerir.

### FlightFilters

Uçuşları fiyat, kalkış/varış saatleri, durak sayısı ve havayolu gibi filtrelere göre sıralamak için seçenekler sunar.

### Sidebar

Kullanıcıya araba kiralama, oteller ve diğer seyahat seçenekleri hakkında bilgiler sunan bir yan paneldir.

### MyFlights

Kullanıcının yaptığı rezervasyonları ve geçmişteki uçuşlarını görüntülemesine olanak tanır. Uçuş detaylarını ve kullanıcıya özel bilgileri içerir.

## Kullanım

1. Uygulamayı başlattıktan sonra `Book Your Flight` bölümüne kalkış ve varış noktalarını girin.
2. Tarihleri seçin ve `Show flights` butonuna tıklayın.
3. Sonuçlar `Flight List` bölümünde listelenecektir.
4. `Flight Filters` bölümünden uçuşları filtreleyebilirsiniz.
5. Bir uçuşu seçmek için `Book Flight` butonuna tıklayın ve rezervasyon işleminizi tamamlayın.

## Katkıda Bulunma

Bu projeye katkıda bulunmak isterseniz, lütfen bir `pull request` gönderin. Önerileriniz ve geliştirmeleriniz için teşekkür ederiz!

## Lisans

Bu proje [MIT Lisansı](https://opensource.org/licenses/MIT) altında lisanslanmıştır. Detaylar için `LICENSE` dosyasını inceleyin.
