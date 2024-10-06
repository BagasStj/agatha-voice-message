'use client'
import { Poppins } from 'next/font/google';
import { useEffect, useRef } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .fade-in {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 1s ease-out, transform 1s ease-out;
  }

  .fade-in.is-visible {
    opacity: 1;
    transform: translateY(0);
  }


`;

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
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
    <div className="overflow-hidden h-[max-content] rounded-lg md:rounded-2xl  border-2 border-[#2d203e] md:h-max">
      <table className="w-full text-sm border-collapse md:h-[65vh]">
        <thead>
          <tr className="bg-[#1E0B34] text-white">
            <th className="py-2 px-3 text-center border-b-2 border-r-2 border-[#241932] md:h-[10vh] text-xs md:text-[2vh]">Fitur</th>
            <th className="py-2 px-3 text-center border-b-2 border-r-2 border-[#241932] md:h-[10vh] text-xs md:text-[2vh]">AGATHA AI Bot</th>
            <th className="py-2 px-3 text-center border-b-2 border-[#241932] md:h-[10vh] text-xs md:text-[2vh]">Aplikasi Chatbot Lainnya</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={feature.name} className="bg-[#170d23] text-white">
              <td className={`py-2 px-3 text-xs md:text-[1.8vh] border-r-2 md:leading-relaxed border-[#2d203e] ${index !== features.length - 1 ? 'border-b-2' : ''}`}>{feature.name}</td>
              <td className={`py-2 px-3 text-xs md:text-[1.8vh] border-r-2 md:leading-relaxed border-[#2d203e] ${index !== features.length - 1 ? 'border-b-2' : ''}`}>
                <div className="flex items-center">
                  <div className="w-4 md:w-[2.4vw] flex-shrink-0">
                    <svg className="w-4 h-4 md:w-[1.8vw] md:h-[1.8vw] text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-xs md:text-[1.8vh] leading-relaxed">{feature.agatha}</span>
                </div>
              </td>
              <td className={`py-2 px-3 ${index !== features.length - 1 ? 'border-b-2 border-[#2d203e]' : ''}`}>
                <div className="flex items-center">
                  <div className="w-4 md:w-[2.4vw] flex-shrink-0">
                    <svg className="w-4 h-4 md:w-[1.8vw] md:h-[1.8vw] text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-xs md:text-[1.8vh] md:leading-relaxed">{feature.others}</span>
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
    <div className="overflow-hidden h-[max-content] rounded-lg md:rounded-2xl  border-2 border-[#2d203e] md:h-max md:mt-[1vh]">
      <table className="w-full text-sm border-collapse md:h-[62vh]">
        <thead>
          <tr className="bg-[#1E0B34] text-white">
            <th className="py-2 px-3 text-center border-b-2 border-r-2 border-[#241932] md:h-[10vh] text-xs md:text-[2vh]">Fitur</th>
            <th className="py-2 px-3 text-center border-b-2 border-r-2 border-[#241932] md:h-[10vh] text-xs md:text-[2vh]">AGATHA AI Bot</th>
            <th className="py-2 px-3 text-center border-b-2 border-[#241932] md:h-[10vh] text-xs md:text-[2vh]">Aplikasi Chatbot Lainnya</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={feature.name} className="bg-[#170d23] text-white">
              <td className={`py-2 px-3 text-xs md:text-[1.8vh] border-r-2 md:leading-relaxed border-[#2d203e] ${index !== features.length - 1 ? 'border-b-2' : ''}`}>{feature.name}</td>
              <td className={`py-2 px-3 text-xs md:text-[1.8vh] border-r-2 md:leading-relaxed border-[#2d203e] ${index !== features.length - 1 ? 'border-b-2' : ''}`}>
                <div className="flex items-center">
                  <div className="w-4 md:w-[2.4vw] flex-shrink-0">
                    <svg className="w-4 h-4 md:w-[1.8vw] md:h-[1.8vw] text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-xs md:text-[1.8vh] leading-relaxed">{feature.agatha}</span>
                </div>
              </td>
              <td className={`py-2 px-3 ${index !== features.length - 1 ? 'border-b-2 border-[#2d203e]' : ''}`}>
                <div className="flex items-center">
                  <div className="w-4 md:w-[2.4vw] flex-shrink-0">
                    <svg className="w-4 h-4 md:w-[1.8vw] md:h-[1.8vw] text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-xs md:text-[1.8vh] md:leading-relaxed">{feature.others}</span>
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
    <div className="overflow-hidden h-[max-content] rounded-lg md:rounded-2xl  border-2 border-[#2d203e] md:h-max">
      <table className="w-full text-sm border-collapse md:h-[67vh]">
        <thead>
          <tr className="bg-[#1E0B34] text-white">
            <th className="py-2 px-3 text-center border-b-2 border-r-2 border-[#241932] md:h-[10vh] text-xs md:text-[2vh]">Fitur</th>
            <th className="py-2 px-3 text-center border-b-2 border-r-2 border-[#241932] md:h-[10vh] text-xs md:text-[2vh]">AGATHA AI Bot</th>
            <th className="py-2 px-3 text-center border-b-2 border-[#241932] md:h-[10vh] text-xs md:text-[2vh]">Aplikasi Chatbot Lainnya</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={feature.name} className="bg-[#170d23] text-white">
              <td className={`py-2 px-3 text-xs md:text-[1.8vh] border-r-2 md:leading-relaxed border-[#2d203e] ${index !== features.length - 1 ? 'border-b-2' : ''}`}>{feature.name}</td>
              <td className={`py-2 px-3 text-xs md:text-[1.8vh] border-r-2 md:leading-relaxed border-[#2d203e] ${index !== features.length - 1 ? 'border-b-2' : ''}`}>
                <div className="flex items-center">
                  <div className="w-4 md:w-[2.4vw] flex-shrink-0">
                    <svg className="w-4 h-4 md:w-[1.8vw] md:h-[1.8vw] text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-xs md:text-[1.8vh] leading-relaxed">{feature.agatha}</span>
                </div>
              </td>
              <td className={`py-2 px-3 ${index !== features.length - 1 ? 'border-b-2 border-[#2d203e]' : ''}`}>
                <div className="flex items-center">
                  <div className="w-4 md:w-[2.4vw] flex-shrink-0">
                    <svg className="w-4 h-4 md:w-[1.8vw] md:h-[1.8vw] text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-xs md:text-[1.8vh] md:leading-relaxed">{feature.others}</span>
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
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  return (
    <>
      <GlobalStyle />
      <div className={`${poppins.className} min-h-screen flex-col flex pt-8 pb-8 items-center px-4 md:px-0 w-full text-white`} style={{ height: 'max-content' }}>
        <div className='w-full md:w-3/4 h-full justify-center items-center space-y-8'>
          <Header />
          {/* Hero Section */}
          <div ref={el => { if (el) sectionRefs.current[0] = el }} className='fade-in flex flex-col justify-center items-center space-y-1 md:space-y-10 h-[89vh]'>
            <div className='text-center text-3xl md:text-[3.5vw] font-bold' style={{ fontFamily: 'inter' }}>Agata, solusi cerdas</div>
            <div className='text-center text-3xl md:text-[3.5vw] font-bold' style={{ fontFamily: 'inter' }}>dengan respon yang cepat</div>
            <div className='text-center text-sm md:text-[1vw] w-full md:w-[39vw] text-[#AAA] leading-loose ' style={{ marginTop: '9vh' }}>Ucapkan selamat tinggal pada waktu tunggu yang lama dan sambut kepuasan! Temukan bagaimana AGATHA dapat menyederhanakan layanan pelanggan anda hari ini dan saksikan bisnis anda berkembang pesat.</div>
          </div>
          <div className='relative top-[-40vh] right-[-10vw] hidden md:block'>
            <img src="/svg/elips-ungu-2.svg" alt="Purple Ellipse" className='absolute z-0 opacity-[0.5]' />
          </div>
          {/* AI CHAT  */}
          <div ref={el => { if (el) sectionRefs.current[1] = el }} className='fade-in flex flex-col justify-start space-y-1 h-[max-content]' style={{ marginTop: '16vh' }}>
            <div className='text-center text-2xl md:w-full md:text-[3.5vw] md:h-[15vh] font-bold mb-11 border-b-2 h-16 items-center flex justify-center border-t-2 border-[#ffffff1e]' style={{ fontFamily: 'inter', background: 'linear-gradient(136.64deg, #5428D2 5.23%, #A000B6 75.72%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              AI CHAT
            </div>
            <div className='flex justify-center w-full h-full' >
              <div className='text-center font-bold text-2xl md:text-[4vh] md:h-[15vh] md:w-1/2 mb-11 leading-normal' style={{ fontFamily: 'inter' }}>Berbincang lebih cerdas, melayani lebih baik bersama AGATHA !</div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-between w-full h-full md:space-y-0 md:space-x-8'>
              <div className="h-[500px] md:h-[400px]">
                <ComparisonTable />
              </div>
              <div className='flex justify-center md:justify-end w-full h-full items-center mt-8 md:mt-0'>
                <div className="relative w-[225px] md:h-[65vh] md:w-[15vw] md:mr-[5vw]">
                  <div className="relative z-10 h-full md:scale-[1]">
                    <video autoPlay loop muted className='rounded-3xl w-full h-full object-cover'>
                      <source src="/IMG_1619.MOV" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-center w-full h-full' >
              <div className='text-center md:text-center leading-loose md:w-3/4 text-sm md:text-[1vw] mt-[8vh] w-full  text-[#aaa]'>
                Nikmati komunikasi yang mudah dengan Chatbot AI AGATHA! Tingkatkan keterlibatan, tingkatkan kepuasan, dan sederhanakan layanan pelanggan anda seperti seperti yang belum pernah ada sebelumnya. Jangan biarkan pelanggan anda menunggu-ubah pengalaman mereka dengan AGATHA dan lihat bisnis anda berkembang! Mulailah mengobrol lebih cerdas hari ini!
              </div>
            </div>
          </div>

          {/* voice */}
          <div ref={el => { if (el) sectionRefs.current[2] = el }} className='fade-in flex flex-col justify-start space-y-1 h-[max-content]' style={{ marginTop: '16vh' }}>
            <div className='text-center text-2xl md:text-[3.5vw] md:h-[15vh]   h-16 items-center flex justify-center font-bold mb-11 border-b-2 border-t-2 border-[#ffffff1e]' style={{ fontFamily: 'inter', background: 'linear-gradient(136.64deg, #5428D2 5.23%, #A000B6 75.72%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              AI VOICE
            </div>
            <div className='flex justify-center w-full h-full' >
              <div className='text-center font-bold text-2xl md:text-[4vh] md:h-[15vh] md:w-1/3 mb-11 leading-normal' style={{ fontFamily: 'inter' }}>Tanya apa saja, AGATHA voice  siap membantu!</div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-between w-full h-full md:space-y-0 md:space-x-8'>
          
              <div className='flex justify-center md:justify-end w-full h-full items-center mt-8 md:mt-0'>
                <div className="relative md:h-[65vh] mb-[14%]">
                  <div className="relative z-10 h-full md:scale-[1]">
                    <img src="/svg/agatha-voice.svg" alt="Agatha Voice" className='w-full h-full object-contain' />
                  </div>
                </div>
              </div>
              <div className="h-[500px] md:h-[400px]">
                <VoiceComparisonTable />
              </div>
            </div>
            <div className='flex justify-center w-full h-full' >
              <div className='text-center md:text-center leading-loose md:w-3/4 text-sm md:text-[1vw] mt-[8vh] w-full  text-[#aaa]'>
                Dapatkan jawban cepat dan akurat dengan AGATHA AI Voice! Dengan logat indonesia yang alami, AI kami siap membantu anda menjawab pertanyaan seputar layanan pelanggan dengan mudah. Nikmati pengalaman interaksi yang lebih personal dan mendengarkan suara yang akrab, membuat setiap percakapan lebih nyaman. Ucapkan pertanyaan anda, dan biarkan AGATHA memberikan solusi tepat untuk kebutuhan anda! Mulai sekarang, layanan pelanggan jadi lebih dekat dan lebih mudah dengan agatha!
              </div>
            </div>
          </div>
          <div className='relative top-[-40vh] left-[-10vw] hidden md:block'>
            <img src="/svg/elips-ungu-2.svg" alt="Purple Ellipse" className='absolute z-0 opacity-[0.5]' />
          </div>

          {/* AI Reminder  */}
          <div ref={el => { if (el) sectionRefs.current[3] = el }} className='fade-in flex flex-col justify-start space-y-1 h-[max-content]' style={{ marginTop: '16vh' }}>
            <div className='text-center text-2xl md:text-[3.5vw] md:h-[15vh]  font-bold mb-11 border-b-2 border-t-2  h-16 items-center flex justify-center border-[#ffffff1e]' style={{ fontFamily: 'inter', background: 'linear-gradient(136.64deg, #5428D2 5.23%, #A000B6 75.72%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              AI REMINDER
            </div>
            <div className='flex justify-center w-full h-full' >
              <div className='text-center font-bold text-2xl md:text-[4vh] md:h-[15vh] md:w-1/2 mb-11 leading-normal' style={{ fontFamily: 'inter' }}>Pengingat otomatis, selalu tepat waktu bersama AGATHA reminder!</div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-between w-full h-full md:space-y-0 md:space-x-8'>
              <div className="h-[500px] md:h-[400px] mb-[14%]">
                <ReminderComparisonTable />
              </div>
              <div className='flex justify-center md:justify-end w-full h-full items-center mt-8 md:mt-0'>
                <div className="relative w-[225px] md:h-[68vh] md:w-[15vw] md:mr-[5vw]">
                  <div className="relative z-10 h-full md:scale-[0.97]">
                    <video autoPlay loop muted className='rounded-3xl w-full h-full object-cover'>
                      <source src="/agatha_reminder.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
           
            <div className='flex justify-center w-full h-full' >
              <div className='text-center md:text-center leading-loose md:w-3/4 text-sm md:text-[1vw] mt-[8vh] w-full  text-[#aaa]'>
                Jangan khawatir lagi tentang pembaruan data dengan AGATHA, notifikasi akan terkirim langsung kepada anda setiap ada update. Tetap terinformasi, efisien, dan tidak pernah melewatkan satu pun momen penting. Bersama AGATHA reminder, kendalikan jadwal anda dengan lebih mudah
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div ref={el => { if (el) sectionRefs.current[4] = el }} className='fade-in flex flex-col justify-start h-[max-content]' style={{ marginTop: '16vh' }}>
            <div className='text-center flex justify-center items-center h-[7vh] text-2xl md:text-[3.5vw] font-bold border-b-2 border-t-2 border-[#ffffff1e]' style={{ fontFamily: 'inter', background: 'linear-gradient(136.64deg, #5428D2 5.23%, #A000B6 75.72%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              <img src='/svg/footer.svg' className='w-[150px] md:w-auto'></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;