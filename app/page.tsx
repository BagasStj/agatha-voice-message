import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Pilih bobot yang diinginkan
});

const Header = () => {
  return (
    <header className='fixed bg-transparent backdrop-blur-md w-full h-[10vh]  md:flex md:justify-start items-center md:w-full top-0 z-50 px-4 md:px-8'>
      <div className="container flex items-center justify-start h-full">
        <img src="/svg/agatha-logo-new.svg" alt="Logo Agatha" className="w-32 md:w-[12vw] h-auto" />
      </div>
    </header>
  );
};

const ComparisonTable = () => {
  const features = [
    {
      name: "Kustomisasi",
      agatha: "Tersedia prompt yang dipersonalisasi",
      others: "Opsi kustomisasi terbatas"
    },
    {
      name: "Integrasi",
      agatha: "Integrasi mulus dengan Whatsapp",
      others: "Bervariasi tergantung platform"
    },
    {
      name: "Waktu respons",
      agatha: "Dukungan instan",
      others: "Mungkin ada keterlambatan"
    },
    {
      name: "Antarmuka pengguna",
      agatha: "Sederhana dan ramah pengguna",
      others: "Sering kali kompleks atau kurang intuitif"
    },
    {
      name: "Efisiensi",
      agatha: "Mempermudah proses",
      others: "Varia dalam efisiensi"
    }
  ];
  return (
    <div className="overflow-hidden rounded-lg border-2 border-[#2D1854]">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-[#1E0B34] text-white">
            <th className="py-3 px-4 text-center border-b-2 border-r-2 border-[#2D1854] text-xs">Fitur</th>
            <th className="py-3 px-4 text-center border-b-2 border-r-2 border-[#2D1854] text-xs">AGATHA AI Bot</th>
            <th className="py-3 px-4 text-center border-b-2 border-[#2D1854] text-xs">Aplikasi Chatbot Lainnya</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={feature.name} className={"bg-[#150823]"} style={{ color: "white" }}>
              <td className={`py-3 px-4 border-r-2 border-[#2D1854] ${index !== features.length - 1 ? 'border-b-2' : ''}`}>{feature.name}</td>
              <td className={`py-3 px-4 border-r-2 border-[#2D1854] ${index !== features.length - 1 ? 'border-b-2' : ''}`}>
                <div className="flex items-center text-xs">
                  <div className='w-[3vw]'>
                    <svg className="w-[1.5vw] h-[5vh] mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {feature.agatha}
                </div>
              </td>
              <td className={`py-3 px-4 ${index !== features.length - 1 ? 'border-b-2 border-[#2D1854]' : ''}`}>
                <div className="flex items-center text-xs">
                  <div className='w-[3vw]'>
                    <svg className="w-[1.5vw] h-[5vh] mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>

                  {feature.others}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const VoiceComparisonTable = () => {
  const features = [
    {
      name: "Logat dan Bahasa",
      agatha: "Logat indonesia alami",
      others: "Logat bervariasi, kadang tidak sesuai konteks lokal"
    },
    {
      name: "Respon",
      agatha: "Jawaban cepat dan relevan",
      others: "Terkadang lambat atau kurang akurat"
    },
    {
      name: "Pengalaman Interaksi",
      agatha: "Lebih personal dan nyaman",
      others: "Kurang personal atau formal"
    },
    {
      name: "Kemampuan Layanan",
      agatha: "Fokus pada layanan pelanggan",
      others: "Fokus bervariasi, tidak spesifik"
    },
    {
      name: "Kemudahan Penggunaan",
      agatha: "Mudah digunakan dengan suara",
      others: "Kadang perlu banyak perintah manual"
    }
  ];

  return (
    <div className="overflow-hidden rounded-lg border-2 border-[#2D1854]">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-[#1E0B34] text-white">
            <th className="py-3 px-4 text-center border-b-2 border-r-2 border-[#2D1854] text-xs">Fitur</th>
            <th className="py-3 px-4 text-center border-b-2 border-r-2 border-[#2D1854] text-xs">AGATHA AI Voice</th>
            <th className="py-3 px-4 text-center border-b-2 border-[#2D1854] text-xs">Aplikasi AI Voice Lainnya</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={feature.name} className="bg-[#150823] text-white">
              <td className={`py-3 px-4 border-r-2 border-[#2D1854] ${index !== features.length - 1 ? 'border-b-2' : ''}`}>{feature.name}</td>
              <td className={`py-3 px-4 border-r-2 border-[#2D1854] ${index !== features.length - 1 ? 'border-b-2' : ''}`}>
                <div className="flex items-center text-xs">
                  <div className='w-[3vw]'>
                    <svg className="w-[1.5vw] h-[5vh] mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {feature.agatha}
                </div>
              </td>
              <td className={`py-3 px-4 ${index !== features.length - 1 ? 'border-b-2 border-[#2D1854]' : ''}`}>
                <div className="flex items-center text-xs">
                  <div className='w-[3vw]'>
                    <svg className="w-[1.5vw] h-[5vh] mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {feature.others}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ReminderComparisonTable = () => {
  const features = [
    {
      name: "Notifikasi Otomatis",
      agatha: "Kirim notifikasi instan pada update",
      others: "Notifikasi mungkin tertunda"
    },
    {
      name: "Personalisasi Pengingat",
      agatha: "Dapat disesuaikan sesuai kebutuhan pengguna",
      others: "Fitur personalisasi terbatas"
    },
    {
      name: "Pengalaman Interaksi",
      agatha: "Mudah digunakan, antarmuka sederhana",
      others: "Bisa lebih rumit untuk diatur"
    },
    {
      name: "Akurasi Waktu",
      agatha: "Notifikasi selalu tepat waktu",
      others: "Kadang terjadi keterlambatan"
    },
    {
      name: "Integrasi Data",
      agatha: "Terintegrasi dengan sistem AGATHA lainnya",
      others: "Tidak selalu terintegrasi"
    }
  ];

  return (
    <div className="overflow-hidden rounded-lg border-2 border-[#2D1854]">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-[#1E0B34] text-white">
            <th className="py-3 px-4 text-center border-b-2 border-r-2 border-[#2D1854] text-xs">Fitur</th>
            <th className="py-3 px-4 text-center border-b-2 border-r-2 border-[#2D1854] text-xs">AGATHA AI Reminder</th>
            <th className="py-3 px-4 text-center border-b-2 border-[#2D1854] text-xs">AI Pengingat Lainnya</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={feature.name} className="bg-[#150823] text-white">
              <td className={`py-3 px-4 border-r-2 border-[#2D1854] ${index !== features.length - 1 ? 'border-b-2' : ''}`}>{feature.name}</td>
              <td className={`py-3 px-4 border-r-2 border-[#2D1854] ${index !== features.length - 1 ? 'border-b-2' : ''}`}>
                <div className="flex items-center text-xs">
                <div className='w-[3vw]'>
                    <svg className="w-[1.5vw] h-[5vh] mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {feature.agatha}
                </div>
              </td>
              <td className={`py-3 px-4 ${index !== features.length - 1 ? 'border-b-2 border-[#2D1854]' : ''}`}>
                <div className="flex items-center text-xs">
                <div className='w-[3vw]'>
                    <svg className="w-[1.5vw] h-[5vh] mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {feature.others}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


const Home = () => {
  return (
    <div className={`${poppins.className} min-h-screen flex-col flex pt-8 pb-8 items-center px-4 md:px-0 w-full text-white`} style={{ height: 'max-content' }}>
      <div className='w-full md:w-3/4 h-full justify-center items-center space-y-8'>
        <Header />
        <div className='flex flex-col justify-center items-center space-y-1 md:space-y-10 h-[89vh]'>
          <div className='text-center text-3xl md:text-[3.5vw] font-bold' style={{ fontFamily: 'inter' }}>Agata, solusi cerdas</div>
          <div className='text-center text-3xl md:text-[3.5vw] font-bold' style={{ fontFamily: 'inter' }}>dengan respon yang cepat</div>
          <div className='text-center text-sm md:text-[1vw] w-full md:w-[39vw] text-[#AAA]' style={{ marginTop: '9vh' }}>Ucapkan selamat tinggal pada waktu tunggu yang lama dan sambut kepuasan! Temukan bagaimana AGATHA dapat menyederhanakan layanan pelanggan anda hari ini dan saksikan bisnis anda berkembang pesat.</div>
        </div>
        <div className='relative top-[-40vh] right-[-10vw] hidden md:block'>
          <img src="/svg/elips-ungu-2.svg" alt="Purple Ellipse" className='absolute z-0 opacity-[0.5]' />
        </div>
        {/* AI CHAT  */}
        <div className='flex flex-col justify-start space-y-1 h-[max-content]'>
          <div className='text-center text-2xl md:text-[3.5vw] md:h-[15vh] font-bold mb-11 border-b-2 h-16 items-center flex justify-center border-t-2 border-[#ffffff1e]' style={{ fontFamily: 'inter', background: 'linear-gradient(136.64deg, #5428D2 5.23%, #A000B6 75.72%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            AI CHAT
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 justify-between w-full h-full space-y-10'>
            <div>
              <div className='text-start font-bold text-2xl md:text-[4vh] mb-11' style={{ fontFamily: 'inter' }}>Berbincang lebih cerdas, melayani lebih baik bersama AGATHA !</div>
              <div>
                <ComparisonTable />
              </div>
            </div>
            <div className='flex justify-center md:justify-end w-full h-full items-center mt-8 md:mt-0'>
              <div className="relative w-[250px] md:w-[300px]">
                <div className="relative z-10">
                  <video autoPlay loop muted className='rounded-3xl w-full h-full'>
                    <source src="/IMG_1619.MOV" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-end w-full h-full' >
            <div className='text-center md:text-end text-sm md:text-[1vw] mt-[8vh] w-full md:w-[51vw] text-[#aaa]'>
              Nikmati komunikasi yang mudah dengan Chatbot AI AGATHA! Tingkatkan keterlibatan, tingkatkan kepuasan, dan sederhanakan layanan pelanggan anda seperti seperti yang belum pernah ada sebelumnya. Jangan biarkan pelanggan anda menunggu-ubah pengalaman mereka dengan AGATHA dan lihat bisnis anda berkembang! Mulailah mengobrol lebih cerdas hari ini!
            </div>
          </div>
        </div>

        {/* voice */}
        <div className='flex flex-col justify-start space-y-1 h-[max-content]' style={{ marginTop: '16vh' }}>
          <div className='text-center text-2xl md:text-[3.5vw] md:h-[15vh]   h-16 items-center flex justify-center font-bold mb-11 border-b-2 border-t-2 border-[#ffffff1e]' style={{ fontFamily: 'inter', background: 'linear-gradient(136.64deg, #5428D2 5.23%, #A000B6 75.72%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            AI VOICE
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 justify-between w-full h-full space-y-10'>
            <div className='flex justify-center md:justify-start items-baseline w-full h-full'>
              <div className="relative">
                <div className="relative z-10">
                  <img src="/svg/agatha-voice.svg" className='w-full md:w-[73%] h-full'></img>
                </div>
              </div>
            </div>
            <div>
              <div className='text-center md:text-end font-bold text-2xl md:text-[4vh] mb-11' style={{ fontFamily: 'inter' }}>Tanya apa saja, AGATHA voice siap membantu!</div>
              <div>
                <VoiceComparisonTable />
              </div>
            </div>
          </div>
          <div className='flex justify-start w-full h-full' >
            <div className='text-center md:text-start text-sm md:text-[1vw] mt-[8vh] w-full md:w-[51vw] text-[#aaa]'>
              Dapatkan jawban cepat dan akurat dengan AGATHA AI Voice! Dengan logat indonesia yang alami, AI kami siap membantu anda menjawab pertanyaan seputar layanan pelanggan dengan mudah. Nikmati pengalaman interaksi yang lebih personal dan mendengarkan suara yang akrab, membuat setiap percakapan lebih nyaman. Ucapkan pertanyaan anda, dan biarkan AGATHA memberikan solusi tepat untuk kebutuhan anda! Mulai sekarang, layanan pelanggan jadi lebih dekat dan lebih mudah dengan agatha!
            </div>
          </div>
        </div>
        <div className='relative top-[-40vh] left-[-10vw] hidden md:block'>
          <img src="/svg/elips-ungu-2.svg" alt="Purple Ellipse" className='absolute z-0 opacity-[0.5]' />
        </div>

        {/* AI Reminder  */}
        <div className='flex flex-col justify-start space-y-1 h-[max-content]' style={{ marginTop: '16vh' }}>
          <div className='text-center text-2xl md:text-[3.5vw] md:h-[15vh]  font-bold mb-11 border-b-2 border-t-2  h-16 items-center flex justify-center border-[#ffffff1e]' style={{ fontFamily: 'inter', background: 'linear-gradient(136.64deg, #5428D2 5.23%, #A000B6 75.72%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            AI REMINDER
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 justify-between w-full h-full space-y-10'>
            <div>
              <div className='text-center md:text-start font-bold text-2xl md:text-[4vh] mb-11' style={{ fontFamily: 'inter' }}>Pengingat otomatis, selalu tepat waktu bersama AGATHA reminder!</div>
              <div>
                <ReminderComparisonTable />
              </div>
            </div>
            <div className='flex justify-center  md:justify-end w-full h-full items-center mt-8 md:mt-0'>
              <div className="relative w-[250px] md:w-[300px]">
                <div className="relative z-10">
                  <video autoPlay loop muted className='rounded-3xl w-full h-full'>
                    <source src="/agatha_reminder.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-end w-full h-full' >
            <div className='text-center md:text-end text-sm md:text-[1vw] mt-[8vh] w-full md:w-[51vw] text-[#aaa]'>
              Jangan khawatir lagi tentang pembaruan data dengan AGATHA, notifikasi akan terkirim langsung kepada anda setiap ada update. Tetap terinformasi, efisien, dan tidak pernah melewatkan satu pun momen penting. Bersama AGATHA reminder, kendalikan jadwal anda dengan lebih mudah
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className='flex flex-col justify-start h-[max-content]' style={{ marginTop: '16vh' }}>
          <div className='text-center flex justify-center items-center h-[7vh] text-2xl md:text-[3.5vw] font-bold border-b-2 border-t-2 border-[#ffffff1e]' style={{ fontFamily: 'inter', background: 'linear-gradient(136.64deg, #5428D2 5.23%, #A000B6 75.72%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            <img src='/svg/footer.svg' className='w-[150px] md:w-auto'></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;