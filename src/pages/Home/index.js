import React, { useState } from "react";
import {
  Logo,
  IconSearch,
  HeroImage,
  Slide1,
  Slide2,
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  IconInstagram,
  IconFacebook,
  IconTwitter,
  IconYoutube,
  IconLinkedin,
  LogoDark,
} from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  ButtomComponent,
  CardComponent,
  NavbarComponent,
} from "../../components";

// Import Swiper styles
import "swiper/css";

const Home = () => {
  const [loadComp, seLoadComp] = useState([]);
  const [count, setCount] = useState(0);
  const LoadMore = () => {
    for (let i = 1; i < count; i++) {
      loadComp.push(
        <CardComponent
          badge={"Umum"}
          imgCard={Card1}
          titleCard="COBA COBA"
          terkumpul={"523.500"}
          siswaWaktu="36"
        />
      );
    }
    return loadComp;
  };
  console.log(count);
  console.log(loadComp);

  return (
    <>
      <div className="bg-no-repeat bg-cover bg-hero-image ">
        <div className="container w-full px-3 pt-2 mx-auto">
          <nav className="flex justify-between ">
            <img src={Logo} alt="" width={70} />
            <img src={IconSearch} alt="" width={30} />
          </nav>
          <div className="grid grid-cols-2 pt-8 ">
            <div className="">
              <h1 className="text-lg font-bold ">
                Ayo Bantu Kami Mengurangi Sampah di Bumi Ini.
              </h1>
              <div className="mt-4 ">
                <ButtomComponent label={"Selengkapnya"} />
              </div>
            </div>
            <div className="">
              <img src={HeroImage} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 mx-auto mt-3 ">
        <h1 className="text-xl font-bold ">Berkat Bantuan Anda</h1>
        <div className="mt-2 ">
          <Swiper
            spaceBetween={0}
            slidesPerView={"auto"}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Slide1} alt="" width={300} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slide2} alt="" width={300} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="container px-4 mx-auto mt-3">
        <h1 className="text-xl font-bold ">Bantu Sesama Sekarang</h1>
        <div>
          <CardComponent
            badge={"Umum"}
            imgCard={Card1}
            titleCard="Kurangi Sampah dari Planet Bumi"
            terkumpul={"523.500"}
            siswaWaktu="36"
          />
          <CardComponent
            badge={"Ramadhan"}
            imgCard={Card2}
            titleCard="Buka Puasa Sehat untuk Pejuang Jalanan Bandung"
            terkumpul={"523.500"}
            siswaWaktu="36"
          />
          <CardComponent
            badge={"Pembangunan"}
            imgCard={Card3}
            titleCard="Pembangunan Masjid yang Telah Rusak"
            terkumpul={"523.500"}
            siswaWaktu="36"
          />
          <CardComponent
            badge={"Pendidikan"}
            imgCard={Card4}
            titleCard="Bantu Pendidikan Indonesia lebih Cemerlang"
            terkumpul={"523.500"}
            siswaWaktu="36"
          />
          <CardComponent
            badge={"Kesehatan"}
            imgCard={Card5}
            titleCard="Tenda Kesehatan untuk Warga Pedalaman NTT"
            terkumpul={"523.500"}
            siswaWaktu="36"
          />

          <LoadMore />

          <h1 className=" text-center font-bold text-[#FFB600] my-4">
            <button onClick={() => setCount(count + 1)}>
              Muat lebih banyak
            </button>
          </h1>
        </div>
      </div>
      <div className=" bg-[#EFFAFF] container mx-auto pt-2 px-3 pb-6">
        <h1 className="font-bold ">Kenali kami lebih jauh</h1>
        <p className="text-gray-700 ">
          Dapatkan informasi menarik seputar pedalaman langsung dikirim ke inbox
          Anda hari ini.
        </p>
        <div className="">
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="w-full py-2 pl-2 mt-2 rounded-md "
          />
          <input
            type="text"
            placeholder="Email"
            className="w-full py-2 pl-2 mt-2 rounded-md "
          />
          <div className="mt-6 text-center ">
            <ButtomComponent label={"Kirim Newsletter"} />
          </div>
        </div>
      </div>
      <footer className="px-3 py-4 text-sm text-white bg-gray-700">
        <div className="w-2/3 ">
          <img src={LogoDark} alt="" width={70} className="mb-4" />
          <span className="font-bold ">Ada Ide Indonesia</span>
          <p className="mt-2 ">
            Jl. Setra Dago Barat No. 25 Antapani Kulon, Kec. Antapani Kota
            Bandung, Jawa Barat 40291
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-4 ">
          <ul>
            <li className="font-semibold ">Program</li>
            <li>Semua Program</li>
            <li>Berita Terbaru</li>
          </ul>
          <ul>
            <li className="font-semibold ">Hubungi Kami</li>
            <li>Pesan WhatsApp</li>
            <li>Pusat Bantuan</li>
          </ul>
          <ul>
            <li className="font-semibold ">Perusahaan</li>
            <li>Tentang Kami</li>
            <li>Program Kami</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="flex justify-center mt-4 text-center">
          <a href="" className="mr-5">
            <img src={IconInstagram} alt="" />
          </a>
          <a href="" className="mr-5">
            <img src={IconFacebook} alt="" />
          </a>
          <a href="" className="mr-5">
            {" "}
            <img src={IconTwitter} alt="" />
          </a>
          <a href="" className="mr-5">
            <img src={IconYoutube} alt="" />
          </a>
          <a href="" className="mr-5">
            <img src={IconLinkedin} alt="" />
          </a>
        </div>
      </footer>
      <div className="font-bold text-center text-white bg-yellow-500 mb-14">
        © 2021 Ada Ide Indonesia
      </div>
      <NavbarComponent />
    </>
  );
};

export default Home;
