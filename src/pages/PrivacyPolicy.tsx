import { Footer } from "@/components/sections/Footer";
import { Navigation } from "@/components/sections/Navigation";

export default function PrivacyPolicy() {
  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <header className="mb-12 border-b border-slate-200 pb-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Kebijakan Privasi
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            Berlaku sejak: 17 Mei 2026
          </p>
        </header>

        <article className="prose prose-slate max-w-none space-y-10 text-slate-700 [&_h2]:mb-3 [&_h2]:mt-0 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_h3]:mb-2 [&_h3]:mt-4 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-slate-900 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
          <section>
            <p>
              Kebijakan Privasi ini menjelaskan bagaimana <strong>Tim TalentHub
              PBL - Politeknik Elektronika Negeri Surabaya</strong> ("kami")
              mengumpulkan, menggunakan, menyimpan, dan melindungi data pribadi
              Anda saat menggunakan aplikasi TalentHub ("Aplikasi"), baik versi
              web maupun aplikasi mobile Android.
            </p>
            <p>
              Dengan mendaftar dan menggunakan Aplikasi, Anda menyatakan telah
              membaca, memahami, dan menyetujui kebijakan ini.
            </p>
          </section>

          <section>
            <h2>1. Definisi Istilah</h2>
            <p>
              Untuk memudahkan pemahaman, berikut adalah definisi istilah yang
              digunakan dalam Kebijakan Privasi ini:
            </p>
            <ul>
              <li>
                <strong>Aplikasi:</strong> TalentHub dalam bentuk aplikasi
                mobile Android maupun aplikasi web yang dapat diakses melalui{" "}
                <code className="rounded bg-slate-100 px-1 py-0.5 text-sm">
                  talenthub.labs.it.pens.ac.id
                </code>
              </li>
              <li>
                <strong>Layanan:</strong> Fitur-fitur yang tersedia di dalam
                Aplikasi, termasuk autentikasi, manajemen lowongan pekerjaan,
                dan pengelolaan profil pengguna
              </li>
              <li>
                <strong>Pengguna / Anda:</strong> Individu yang membuat akun
                dan menggunakan Aplikasi
              </li>
              <li>
                <strong>Pengelola Data / Pengendali Data Pribadi / Kami:</strong>{" "}
                Tim TalentHub PBL - Politeknik Elektronika Negeri Surabaya yang
                bertanggung jawab atas pengelolaan data pribadi Pengguna
              </li>
              <li>
                <strong>Data Pribadi:</strong> Setiap data tentang seseorang
                yang teridentifikasi atau dapat diidentifikasi secara
                tersendiri atau dikombinasi dengan informasi lainnya, sesuai
                Pasal 1 Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan
                Data Pribadi
              </li>
              <li>
                <strong>Akun:</strong> Profil terdaftar yang dibuat Pengguna
                untuk mengakses Layanan, terdiri dari kombinasi email dan kata
                sandi
              </li>
              <li>
                <strong>Lowongan / Job Posting:</strong> Informasi pekerjaan
                yang dipublikasikan oleh pengguna dengan peran HR Recruiter
                atau Hiring Manager
              </li>
              <li>
                <strong>Pelamar:</strong> Pengguna dengan peran yang
                mengirimkan lamaran terhadap Lowongan
              </li>
              <li>
                <strong>Pihak Ketiga:</strong> Pihak selain Pengelola Data dan
                Pengguna
              </li>
            </ul>
          </section>

          <section>
            <h2>2. Identitas Pengelola</h2>
            <ul>
              <li>
                <strong>Pengelola Data:</strong> Tim TalentHub PBL - Politeknik
                Elektronika Negeri Surabaya
              </li>
              <li>
                <strong>Email Kontak:</strong>{" "}
                <a
                  href="mailto:talenthubpdbl@gmail.com"
                  className="text-blue-600 underline"
                >
                  talenthubpdbl@gmail.com
                </a>
              </li>
              <li>
                <strong>Konteks Aplikasi:</strong> Proyek mata kuliah Project
                Based Learning (PBL), Departemen Teknik Informatika dan Komputer
              </li>
            </ul>
          </section>

          <section>
            <h2>3. Data yang Kami Kumpulkan</h2>
            <p>
              Kami hanya mengumpulkan data yang diperlukan untuk fungsi inti
              Aplikasi:
            </p>
            <ul>
              <li>
                <strong>Data Akun:</strong> Nama lengkap, alamat email, kata
                sandi (dienkripsi), peran (HR Recruiter / Hiring Manager /
                Pelamar)
              </li>
              <li>
                <strong>Data Otentikasi:</strong> Access token dan refresh
                token yang digunakan untuk mengelola sesi login Anda
              </li>
              <li>
                <strong>Data Lowongan</strong> (khusus pengguna HR/Hiring
                Manager): Informasi lowongan yang Anda publikasikan seperti
                judul, deskripsi, kualifikasi, lokasi, dan status lowongan
              </li>
            </ul>
            <p>
              Kami <strong>tidak</strong> mengumpulkan: lokasi geografis,
              kontak telepon, foto, file dari perangkat Anda, riwayat
              penjelajahan, atau data perangkat lainnya di luar yang
              disebutkan di atas.
            </p>
          </section>

          <section>
            <h2>4. Tujuan Penggunaan Data</h2>
            <p>Data Anda kami gunakan secara terbatas hanya untuk:</p>
            <ul>
              <li>
                Mengautentikasi dan mengizinkan Anda mengakses Aplikasi sesuai
                peran
              </li>
              <li>
                Menampilkan dan mengelola lowongan pekerjaan sesuai hak akses
                peran Anda
              </li>
              <li>
                Memberikan layanan inti aplikasi seperti membuat, mengubah,
                dan menutup lowongan
              </li>
              <li>Menjaga keamanan dan mencegah penyalahgunaan Aplikasi</li>
            </ul>
            <p>
              Kami <strong>tidak menjual, menyewakan, atau memperdagangkan</strong>{" "}
              data pribadi Anda kepada pihak manapun.
            </p>
          </section>

          <section>
            <h2>5. Dasar Hukum Pengumpulan Data</h2>
            <p>
              Pengumpulan dan pemrosesan data dilakukan berdasarkan{" "}
              <strong>persetujuan eksplisit</strong> yang Anda berikan saat
              membuat akun, sesuai dengan Undang-Undang Nomor 27 Tahun 2022
              tentang Pelindungan Data Pribadi (UU PDP).
            </p>
          </section>

          <section>
            <h2>6. Penyimpanan dan Keamanan Data</h2>
            <ul>
              <li>
                Data Anda disimpan di server backend yang kami kelola, berada
                di lingkungan infrastruktur Politeknik Elektronika Negeri
                Surabaya, dengan lokasi geografis di Indonesia
              </li>
              <li>
                Komunikasi antara aplikasi dan server menggunakan protokol
                HTTPS (TLS 1.2+) untuk mencegah penyadapan
              </li>
              <li>
                Kata sandi disimpan dalam bentuk <em>hash</em> menggunakan
                algoritma kriptografi standar industri — kami tidak pernah
                menyimpan kata sandi dalam bentuk aslinya
              </li>
              <li>
                Token otentikasi pada aplikasi mobile disimpan menggunakan{" "}
                <em>Android EncryptedSharedPreferences</em> dengan enkripsi
                AES-256
              </li>
              <li>
                Akses ke database terbatas pada anggota tim pengembang yang
                berwenang
              </li>
            </ul>
          </section>

          <section>
            <h2>7. Berbagi Data dengan Pihak Ketiga</h2>
            <p>
              <strong>Saat ini kami tidak menggunakan layanan pihak ketiga
              apapun</strong> untuk analitik (mis. Google Analytics), tracking
              perilaku, iklan, ataupun crash reporting (mis. Firebase
              Crashlytics, Sentry).
            </p>
            <p>
              Kami akan memperbarui kebijakan ini dan memberi tahu Anda apabila
              di masa depan kami menambahkan integrasi pihak ketiga.
            </p>
          </section>

          <section>
            <h2>8. Pengungkapan Data dalam Situasi Khusus</h2>
            <p>
              Meskipun kami tidak berbagi data dengan pihak ketiga untuk tujuan
              komersial, kami dapat mengungkapkan Data Pribadi Anda dalam
              situasi terbatas berikut:
            </p>
            <h3>8.1 Kepatuhan terhadap Kewajiban Hukum</h3>
            <p>
              Kami dapat mengungkapkan data Anda apabila diwajibkan oleh
              peraturan perundang-undangan Indonesia, perintah pengadilan, atau
              permintaan resmi dari aparat penegak hukum yang sah.
            </p>
            <h3>8.2 Pencegahan Kejahatan dan Penyalahgunaan</h3>
            <p>
              Kami dapat mengungkapkan data untuk mencegah, mendeteksi, atau
              menyelidiki dugaan penipuan, pelanggaran kebijakan,
              penyalahgunaan Aplikasi, atau aktivitas yang berpotensi merugikan
              Pengguna lain atau pihak ketiga.
            </p>
            <h3>8.3 Perlindungan Hak dan Keselamatan</h3>
            <p>
              Kami dapat mengungkapkan data untuk melindungi hak, properti,
              atau keselamatan Pengelola, Pengguna lain, atau publik secara
              umum, sejauh diperbolehkan oleh hukum.
            </p>
            <h3>8.4 Audit dan Verifikasi Akademik</h3>
            <p>
              Sebagai proyek mata kuliah PBL, data agregat dan non-pribadi dari
              Aplikasi dapat ditinjau oleh dosen pembimbing serta pihak
              akademik PENS dalam rangka penilaian dan audit proyek. Data
              pribadi individu tidak akan diungkapkan dalam konteks ini, dan
              jika diperlukan akan diadakan anonimisasi terlebih dahulu.
            </p>
            <h3>8.5 Transisi Pengelolaan Aplikasi</h3>
            <p>
              Apabila pengelolaan Aplikasi berpindah tangan (mis. dari tim PBL
              ke tim lain di lingkungan PENS), data Pengguna dapat dialihkan
              kepada pengelola baru. Anda akan diberi tahu paling lambat 30
              hari sebelum perpindahan berlaku, dan diberi kesempatan untuk
              menghapus akun apabila tidak menyetujuinya.
            </p>
          </section>

          <section>
            <h2>9. Hak Anda sebagai Pengguna</h2>
            <p>
              Sesuai UU PDP, Anda memiliki hak-hak berikut atas data pribadi
              Anda:
            </p>
            <ul>
              <li>
                <strong>Hak Akses:</strong> Meminta salinan data pribadi yang
                kami simpan tentang Anda
              </li>
              <li>
                <strong>Hak Koreksi:</strong> Memperbaiki data pribadi yang
                tidak akurat atau usang
              </li>
              <li>
                <strong>Hak Penghapusan:</strong> Meminta penghapusan akun dan
                data pribadi Anda
              </li>
              <li>
                <strong>Hak Pembatasan:</strong> Membatasi pemrosesan data
                Anda dalam kondisi tertentu
              </li>
              <li>
                <strong>Hak Penarikan Persetujuan:</strong> Menarik kembali
                persetujuan kapan saja
              </li>
            </ul>
            <p>
              Untuk menggunakan hak-hak ini, hubungi kami melalui email yang
              tercantum pada bagian Kontak. Permintaan akan kami proses dalam
              waktu paling lama 14 hari kerja.
            </p>
          </section>

          <section>
            <h2>10. Penghapusan Akun dan Retensi Data</h2>
            <p>
              Apabila Anda meminta penghapusan akun, data Anda akan ditandai
              untuk dihapus dan <strong>dihapus secara permanen dari database
              kami dalam waktu 30 (tiga puluh) hari</strong>. Periode 30 hari
              ini memberikan jangka waktu kepada Anda apabila terjadi
              penghapusan tidak sengaja.
            </p>
            <p>
              Setelah periode 30 hari berakhir, data Anda tidak dapat
              dipulihkan.
            </p>
          </section>

          <section>
            <h2>11. Privasi Anak-anak</h2>
            <p>
              Aplikasi ini ditujukan untuk pengguna berusia minimal 17 tahun
              (sesuai konteks pencarian kerja dan rekrutmen). Kami tidak secara
              sengaja mengumpulkan data dari pengguna di bawah usia tersebut.
              Jika Anda mengetahui hal ini terjadi, mohon hubungi kami agar
              data tersebut dapat dihapus.
            </p>
          </section>

          <section>
            <h2>12. Perubahan Kebijakan Privasi</h2>
            <p>
              Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu.
              Perubahan signifikan akan diumumkan melalui Aplikasi atau email
              terdaftar Anda minimal 7 hari sebelum berlaku. Tanggal "Berlaku
              sejak" di bagian atas menunjukkan kapan versi terbaru mulai
              berlaku.
            </p>
          </section>

          <section>
            <h2>13. Hubungi Kami</h2>
            <p>
              Untuk pertanyaan, keluhan, atau permintaan terkait privasi dan
              data pribadi, silakan hubungi kami melalui:
            </p>
            <ul>
              <li>
                Email:{" "}
                <a
                  href="mailto:talenthubpdbl@gmail.com"
                  className="text-blue-600 underline"
                >
                  talenthubpdbl@gmail.com
                </a>
              </li>
              <li>
                Pengelola: Tim TalentHub PBL - Politeknik Elektronika Negeri
                Surabaya
              </li>
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
