### Tugas Pertemuan 7

#### Link website pribadi:

* Utama: https://meutiahasna.my.id/
* Aplikasi React: https://meutiahasna.my.id/katalog-produk/

#### Link repository GitHub: 
https://github.com/meutiahasna/katalog-preloved-reezqeena

#### Penjelasan singkat:
Aplikasi ini dibuat berbasis komponen menggunakan React dan TypeScript. Di dalam folder src/components, ada 5 komponen react yang dibuat:
-	Header: komponen yang menampilkan judul dan identitas saya (nama dan NIM)
-	SearchBar: komponen input untuk pencarian produk
-	AddProductForm: formulit input untuk menambah produk baru (ada nama produk, harga, dan upload foto)
-	ProductCard: komponen reusable (yang bisa digunakan berulang kali)  untuk menampilkan detail 1 produk (ada foto, nama, harga, status, dan tombol)
-	ProductList: komponen pembungkus yang bertugas merender semua ProductCard
Untuk penggunaan props, state, dan event handling:
-	Props: data yang dikirim mengalir satu arah dari Parent Component (App.tsx) ke Child Components dan bersifat read-only
-	State: data di dalam komponen yang bisa berubah dan membuat tampilan ikut berubah. Ada array untuk daftar produk, dan teks untuk pencarian produk
-	Event handling (aksi pengguna): ada fitur untuk menambah, mencari, mengubah status, dan menghapus produk, dengan menggunakan event bawaan onSubmit, onChange, dan onClick

