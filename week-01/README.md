**WEB REQUEST INVESTIGATION**

**1. Identifikasi Aplikasi:**

_Nama aplikasi, URL lengkap, dan anatomi URL (breakdown setiap komponen)_
- Nama aplikasi: E-Knows UIN Sunan Gunung Djati Bandung
- URL Lengkap: https://lms.uinsgd.ac.id/my-course/content/15377/14251
- Anatomi URL:

  a. Scheme / Protocol: https

  b. Host: lms.uinsgd.ac.id

    - Subdomain: lms
    - Domain: uinsgd.ac.id

  c. Port: 443 (port default untuk HTTPS, tidak tertulis)

  d. Path: my-course/content/15377/14251

  e. Query String: - (tidak ada)

  f. Fragment: - (tidak ada)

**2. Screenshot Network Tab:**

_Capture tampilan Network tab DevTools saat halaman utama dimuat_
   <img width="1366" height="728" alt="1  Draft Tugas - No 2" src="https://github.com/user-attachments/assets/90ce96d2-2196-41be-a1ca-d58465e66c8f" />

**3. 5 HTTP Request:**

_Catat 5 request: method, status code, Content-Type, URL endpoint_

  1) Request 1

    a. Method: GET

    b. Status Code: 200 OK
     
    c. Content-Type: text/html
     
    d. URL Endpoint: https://lms.uinsgd.ac.id/my-course/content/15377/14251
     
  2) Request 2
     
    a. Method: GET
    
    b. Status Code: 200 OK
    
    c. Content-Type: application/javascript; charset=UTF-8
    
    d. URL Endpoint: https://www.googletagmanager.com/gtag/js?id=G-GNW8NSC6MZ
    
  3)	Request 3

    a. Method: GET
    
    b. Status Code: 200 OK
    
    c. Content-Type: application/javascript
    
    d. URL Endpoint: https://lms.uinsgd.ac.id/assets/index-DJkd2cz-.js
    
  4)	Request 4

    a. Method: GET
    
    b. Status Code: 200 OK
    
    c. Content-Type: application/javascript
    
    d. URL Endpoint: https://lms.uinsgd.ac.id/assets/cookie-Cpj98o6Y.js
  
  5)	Request 5

    a. Method: GET
    
    b. Status Code: 200 OK
    
    c. Content-Type: application/javascript
    
    d. URL Endpoint: https://lms.uinsgd.ac.id/assets/react-C2C5oEF4.js
    
**4.	Analisis Arsitektur:**

_Dugaan komponen fronted, backend, dan database yang digunakan sistem tersebut_

Dilihat dari tab DevTools bagian Network, dugaan komponen-komponen yang digunakan sistem tersebut:
- Fronted: JavaScript (dilihat dari type Script)
- Backend: Socket.io (dilihat dari filter type Websocket)
- Database: Database Relasional / RDBMS (dilihat dari preview filter type Fetch/XHR)

**5.	Diagram Arsitektur:**

_Gambarkan arsitektur sederhana sistem tersebut berdasarkan pengamatan saya_
<img width="2852" height="872" alt="1  Diagram Arsitektur Sistem" src="https://github.com/user-attachments/assets/09af6427-3ee8-4a04-8b45-d464ea085d8c" />
   
Dari sebelah kiri, yaitu Frontend Layer yang berjalan di browser/client menggunakan bahasa pemrograman JavaScript. Frontend mengirimkan request ke Backend yang berjalan di server dan menggunakan library Socket.io. Setelah Backend menerima request dari Frontend, Backend memproses logika sistem dan mengirimkan query request ke Database yang bertipe relasional. Setelah menerima query tersebut, database mencari data dan mengembalikan data berupa query response ke Backend. Kemudian, Backend mengolah data tersebut dan mengirimkan response kembali ke Frontend, dan hasil tersebut ditampilkan di layar pengguna secara otomatis.

