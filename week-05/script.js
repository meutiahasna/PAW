const formRegistrasi = document.getElementById('form_registrasi');
const pesanFeedback = document.getElementById('feedback');
const daftarMember = document.getElementById('daftar_member');

const tampilDataTersimpan = () => {
    const dataLokal = localStorage.getItem('memberTersimpan');
    const listMember = dataLokal ? JSON.parse(dataLokal) : [];
    daftarMember.innerHTML = listMember.map((member) => `<li>${member.nama} (${member.email})</li>`).join('');
};

formRegistrasi.addEventListener('submit', (event) => {
    event.preventDefault();

    const nama = document.getElementById('nama_lengkap').value.trim();
    const email = document.getElementById('email_member').value.trim();

    if (nama === '' || email === '') {
        pesanFeedback.textContent = 'Gagal! Harus isi kolom.';
        pesanFeedback.style.color = 'red';
        return;
    }

    const memberBaru = {nama: nama, email: email};

    const dataLokal = localStorage.getItem('memberTersimpan');
    const listMember = dataLokal ? JSON.parse(dataLokal) : [];

    listMember.push(memberBaru);

    localStorage.setItem('memberTersimpan', JSON.stringify(listMember));

    pesanFeedback.textContent = 'Berhasil! Data registrasi tersimpan.';
    pesanFeedback.style.color = 'green';

    formRegistrasi.reset();
    tampilDataTersimpan();
});

tampilDataTersimpan();