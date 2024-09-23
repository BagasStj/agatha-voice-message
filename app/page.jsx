import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Pilih bobot yang diinginkan
});

const Header = () => {
  return (
    <header className="bg-white p-4 md:p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <img src="/logo.svg" alt="Logo Agatha" className="w-24 md:w-32" />
        </div>
      </div>
    </header>
  );
};

const HeroSection = () => {
  return (
    <section className=" relative  min-h-screen flex items-center justify-center px-4 md:px-8 mb-20 md:mb-32">
      <div className=" mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-1 w-[75vw] md:w-[56vw] text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Agatha, Solusi cerdas dengan respon yang cepat!
          </h1>
          <p className="text-base md:text-lg text-gray-700 mt-4 mb-6">
          Solusi cerdas yang menghadirkan efisiensi tinggi dalam pelayanan customer care, dengan respons cepat dan akurat, memastikan pengalaman pelanggan yang lebih optimal dan hemat waktu.
          </p>
          {/* <button className="mt-6 bg-purple-600 text-white py-2 px-4 rounded-xl text-sm md:text-base">
            Try It For Free
            <img src="/arrow-right.svg" alt="Arrow Right" className="inline-block ml-2 w-4 h-4" />
          </button> */}
        </div>
        <div className="relative flex-1 flex items-center justify-center mt-8 md:mt-0">
          <div className="absolute w-full md:w-[1000px] z-0">
            <img src="/circle.svg" alt="Lingkaran" className="w-full h-full object-contain" />
          </div>
          <div className="relative w-[1189px] md:w-[500px] h-[300px] md:h-[700px] z-10">
            <img src="/phones-2.svg" alt="phones" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

const AIChat = () => {
  return (
    <div className="md:w-[92vw] mx-auto flex flex-col md:flex-row items-center mb-20 md:mb-32 px-4 md:px-8">
      <div className="relative flex-1 flex items-center justify-center mb-8 md:mb-0" data-aos="fade-left" data-aos-duration="1000">
        <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#C00DC8] rounded-full blur-[300px] md:blur-[500px] opacity-80 z-[-1] left-[-50px] md:left-[-100px]"></div>
        <div className="w-[250px] md:w-[300px] z-0">
          <video autoPlay loop muted className='rounded-3xl w-full h-full'>
            <source src="/chat_bot_revisi.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="text-center md:text-right md:ml-8" data-aos="fade-right">
        <p className="text-[#9B03B8] text-4xl md:text-5xl lg:text-7xl font-bold mb-8 md:mb-20">AI Chat</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10">
          Optimalkan layanan rumah sakit <br className="hidden md:inline" /> anda dengan WA Agatha
        </h2>
        <p className="text-base md:text-lg mb-6 md:mb-10">
        Melalui WhatsApp, AGATHA memudahkan pasien rumah sakit <br className="hidden md:inline" /> untuk bertanya seputar administrasi, jadwal kontrol, BPJS, dan layanan kesehatan lainnya <br className="hidden md:inline" /> secara real-time. Dengan integrasi data yang aman dan akses mudah melalui platform WA <br className="hidden md:inline" /> AGATHA menawarkan solusi efisien yang meningkatkan kenyamanan pasien serta <br className="hidden md:inline" /> mengurangi beban customer care manual.
        </p>
        <img src="/table_new.png" alt="Table" className="w-full max-w-[400px] h-auto mb-6 mx-auto md:ml-auto" />
      </div>
    </div>
  );
};

const AIVoice = () => {
  return (
    <div className=" mx-auto flex flex-col-reverse md:flex-row items-center mt-20 mb-20 md:mb-32 px-4 md:px-8 relative">
      <div className="text-center md:text-left mb-8 md:mb-0 md:mr-8">
        <p className="text-[#9B03B8] text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-10">Voice</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10">Jangan Biarkan Pasien Melewatkan<br className="hidden md:inline" /> Jadwal Kontrol Mereka!</h2>
        <p className="text-base md:text-lg mb-6 md:mb-10">Dengan Reminder AI Agatha melalui WhatsApp, Pasien akan <br className="hidden md:inline" /> menerima pengingat otomatis janji temu mereka. Tingkatkan <br className="hidden md:inline" /> efisiensi jadwal anda dengan solusi pengingat cerdas kami!</p>
        <img src="/table_new.png" alt="Table" className="w-full max-w-[400px] h-auto mb-6 mx-auto md:mx-0" />
      </div>
      <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#C00DC8] rounded-full blur-[300px] md:blur-[500px] opacity-80 z-[-1] right-[-50px] md:right-[-100px]"></div>
      <div className="relative flex-1 flex items-center justify-center mb-8 md:mb-0">
        <div className="w-full max-w-[400px] md:max-w-[600px] z-0">
          <a href="https://ai-phone-vapi.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src="/ai-voice.png" alt="Lingkaran" className="w-full h-auto object-contain md:transform md:translate-x-20" />
          </a>
        </div>
      </div>
    </div>
  );
};

const AIReminder = () => {
  return (
    <div className="md:w-[92vw] mx-auto flex flex-col md:flex-row items-center mb-20 md:mb-32 mt-20 px-4 md:px-8">
      <div className="relative flex-1 flex items-center justify-center mb-8 md:mb-0">
        <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#C00DC8] rounded-full blur-[300px] md:blur-[500px] opacity-80 z-[-1] left-[-50px] md:left-[-100px]"></div>
        <div className="w-[250px] md:w-[300px] z-0">
          <video autoPlay loop muted className='rounded-3xl w-full h-full'>
            <source src="/agatha_reminder.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="text-center md:text-right md:ml-8">
        <p className="text-[#9B03B8] text-4xl md:text-5xl lg:text-7xl font-bold mb-8 md:mb-20">AI Reminder</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10">
          Jangan biarkan pasien melewatkan <br className="hidden md:inline" /> jadwal kontrol mereka!
        </h2>
        <p className="text-base md:text-lg mb-6 md:mb-10">
          Dengan Reminder AI Agatha melalui WhatsApp, Pasien akan <br className="hidden md:inline" /> menerima pengingat otomatis janji temu mereka. Tingkatkan <br className="hidden md:inline" /> efisiensi jadwal anda dengan solusi pengingat cerdas kami!
        </p>
        <img src="/table_new.png" alt="Table" className="w-full max-w-[400px] h-auto mb-6 mx-auto md:ml-auto" />
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className={`relative py-20 md:left-10 ${poppins.className}`}>
      <AIChat />
      <AIVoice />
      <AIReminder />
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-6 text-center">
      <p className="text-gray-500">&copy; Agatha 2024</p>
    </footer>
  );
};

const Home = () => {
  return (
    <div className={`${poppins.className}`}>
      <Header />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;