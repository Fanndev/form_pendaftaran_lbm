// src/components/Form.jsx
'use client';

import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    tempatTanggalLahir: '',
    jenisKelamin: '',
    nomorTelepon: '',
    alamatLengkap: '',
    pendidikanTerakhir: '',
    asalSekolah: '',
    namaOrangTua: '',
    pekerjaan: '',
    program: '',
  });

  const [tandaTangan, setTandaTangan] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSignatureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTandaTangan(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const signatureText = tandaTangan ? "Tanda tangan telah diunggah." : "Tanda tangan tidak diunggah.";

    const formContent = `
    *Formulir Pendaftaran Program*
    
    *--- Data Pribadi Calon Peserta ---*
    *Nama Lengkap:* ${formData.namaLengkap}
    *Tempat dan Tanggal Lahir:* ${formData.tempatTanggalLahir}
    *Jenis Kelamin:* ${formData.jenisKelamin}
    *Nomor Telepon:* ${formData.nomorTelepon}
    *Alamat Lengkap:* ${formData.alamatLengkap}
    *Pendidikan Terakhir:* ${formData.pendidikanTerakhir}
    *Asal Sekolah/Universitas:* ${formData.asalSekolah}

    *--- Data Orang Tua/Wali ---*
    *Nama Orang Tua/Wali:* ${formData.namaOrangTua}
    *Pekerjaan:* ${formData.pekerjaan}

    *--- Pilihan Program ---*
    *Program yang Diminati:* ${formData.program}

    *--- Tanda Tangan ---*
    Saya menyatakan bahwa data yang diisi adalah benar.

    *Tanda Tangan Calon Peserta:* ${signatureText}

    (________________________)
    *Perwakilan Lembaga*
    
    (________________________)
    *Calon Peserta*
    `;

    // Ganti YOUR_PHONE_NUMBER_HERE dengan nomor WhatsApp Anda
    const encodedContent = encodeURIComponent(formContent);
    const whatsappUrl = `https://wa.me/6282339543018?text=${encodedContent}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl max-w-4xl mx-auto border-t-8 border-blue-500">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-2">Formulir Pendaftaran Program</h1>
      <p className="text-center text-gray-500 mb-8">Silakan isi data diri Anda untuk mendaftar.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Data Pribadi */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-700 border-b pb-2">Data Pribadi Calon Peserta</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="namaLengkap" className="block text-sm font-medium text-gray-600">Nama Lengkap</label>
              <input type="text" id="namaLengkap" name="namaLengkap" value={formData.namaLengkap} onChange={handleChange} required className="mt-1 block text-gray-700 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            <div>
              <label htmlFor="tempatTanggalLahir" className="block text-sm font-medium text-gray-600">Tempat dan Tanggal Lahir</label>
              <input type="text" id="tempatTanggalLahir" name="tempatTanggalLahir" value={formData.tempatTanggalLahir} onChange={handleChange} required className="mt-1 block text-gray-700 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            <div>
              <label htmlFor="jenisKelamin" className="block text-sm font-medium text-gray-600">Jenis Kelamin</label>
              <select id="jenisKelamin" name="jenisKelamin" value={formData.jenisKelamin} onChange={handleChange} required className="mt-1 block text-gray-700 text-gray-700 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                <option value="">-- Pilih Jenis Kelamin --</option>
                <option value="Pria">Pria</option>
                <option value="Wanita">Wanita</option>
              </select>
            </div>
            <div>
              <label htmlFor="nomorTelepon" className="block text-sm font-medium text-gray-600">Nomor Telepon</label>
              <input type="tel" id="nomorTelepon" name="nomorTelepon" value={formData.nomorTelepon} onChange={handleChange} required className="mt-1 block text-gray-700 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"/>
            </div>
          </div>
          <div>
            <label htmlFor="alamatLengkap" className="block text-sm font-medium text-gray-600">Alamat Lengkap</label>
            <textarea id="alamatLengkap" name="alamatLengkap" value={formData.alamatLengkap} onChange={handleChange} required className="mt-1 block text-gray-700 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="pendidikanTerakhir" className="block text-sm font-medium text-gray-600">Pendidikan Terakhir</label>
              <input type="text" id="pendidikanTerakhir" name="pendidikanTerakhir" value={formData.pendidikanTerakhir} onChange={handleChange} required className="mt-1 block text-gray-700 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            <div>
              <label htmlFor="asalSekolah" className="block text-sm font-medium text-gray-600">Asal Sekolah/Universitas</label>
              <input type="text" id="asalSekolah" name="asalSekolah" value={formData.asalSekolah} onChange={handleChange} required className="mt-1 block text-gray-700 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"/>
            </div>
          </div>
        </div>

        {/* Data Orang Tua */}
        <div className="space-y-4 pt-6">
          <h2 className="text-xl font-bold text-gray-700 border-b pb-2">Data Orang Tua/Wali</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="namaOrangTua" className="block text-sm font-medium text-gray-600">Nama Orang Tua/Wali</label>
              <input type="text" id="namaOrangTua" name="namaOrangTua" value={formData.namaOrangTua} onChange={handleChange} required className="mt-1 block text-gray-700 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            <div>
              <label htmlFor="pekerjaan" className="block text-sm font-medium text-gray-600">Pekerjaan</label>
              <input type="text" id="pekerjaan" name="pekerjaan" value={formData.pekerjaan} onChange={handleChange} required className="mt-1 block text-gray-700 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"/>
            </div>
          </div>
        </div>
        
        {/* Pilihan Program */}
        <div className="space-y-4 pt-6">
          <h2 className="text-xl font-bold text-gray-700 border-b pb-2">Pilihan Program</h2>
          <div>
            <label htmlFor="program" className="block text-sm font-medium text-gray-600">Program yang Diminati</label>
            <select id="program" name="program" value={formData.program} onChange={handleChange} required className="mt-1 block text-gray-700 text-gray-600 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
              <option value="">-- Pilih Program --</option>
              <option value="English for Kids (Usia Dini)">English for Kids (Usia Dini)</option>
              <option value="English for Children">English for Children</option>
              <option value="English for Basic/Teenagers">English for Basic/Teenagers</option>
              <option value="Indonesian and CCU">Indonesian and CCU</option>
              <option value="Test Preparation (TOEFL, TOEIC, IELTS & UKBI)">Test Preparation (TOEFL, TOEIC, IELTS & UKBI)</option>
              <option value="ESP (English for Specific Purposes)">ESP (English for Specific Purposes)</option>
              <option value="Bimbel Matematika">Bimbel Matematika</option>
              <option value="Bimbel CALISTUNG (Baca, Tulis, dan Hitung)">Bimbel CALISTUNG (Baca, Tulis, dan Hitung)</option>
              <option value="Bimbel Al-Qur'an">Bimbel Al-Qur'an</option>
            </select>
          </div>
        </div>

        {/* Tanda Tangan */}
        <div className="pt-6">
          <h2 className="text-xl font-bold text-gray-700 border-b pb-2">Tanda Tangan</h2>
          <p className="text-gray-600 text-sm mt-4 italic">Silakan unggah file gambar tanda tangan Anda. Catatan: Tanda tangan akan dikirim sebagai teks biasa ke WhatsApp.</p>
          
          <div className="mt-4">
            <label htmlFor="tandaTanganFile" className="block text-sm font-medium text-gray-600">Unggah Tanda Tangan</label>
            <input type="file" id="tandaTanganFile" onChange={handleSignatureUpload} accept="image/*" className="mt-1 block text-gray-700 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
            {tandaTangan && (
              <div className="mt-4">
                <p className="text-xs text-green-600">Pratinjau tanda tangan:</p>
                <img src={tandaTangan} alt="Pratinjau Tanda Tangan" className="mt-2 max-w-xs border border-gray-300 rounded-lg"/>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 mt-8 text-center text-gray-500">
            <div>
              <p className="border-b border-dashed inline-block px-12 pb-1"></p>
              <p className="mt-2 text-sm">Perwakilan Lembaga</p>
            </div>
            <div className="mt-8 md:mt-0">
              <p className="border-b border-dashed inline-block px-12 pb-1"></p>
              <p className="mt-2 text-sm">Calon Peserta</p>
            </div>
          </div>
        </div>

        <button type="submit" className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300 shadow-lg">
          Kirim via WhatsApp
        </button>
      </form>
    </div>
  );
}