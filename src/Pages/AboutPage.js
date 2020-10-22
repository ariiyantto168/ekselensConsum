import React, { Component } from "react";
import Layout from "Component/layout";

// Image
import AboutImg1 from "Assets/Images/about1.png";
import AboutImg2 from "Assets/Images/about2.png";
import BenefitImg1 from "Assets/Images/benefit-icon1.png";
import BenefitImg2 from "Assets/Images/benefit-icon2.png";
import BenefitImg3 from "Assets/Images/benefit-icon3.png";

export default class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div class="section">
          <div class="container about-konten">
            <h2 class="title mb-5">Tentang Ekselen.id</h2>
            <div class="row konten">
              <div class="col-6">
                <img src={AboutImg1} alt="" />
              </div>
              <div class="col-6">
                <p>
                  Ekselen.id adalah lembaga penyedia pelatihan dan pembelajaran
                  secara digital yang memiliki fokus untuk mencetak Sumber Daya
                  Manusia Indonesia yang kompeten melalui pelatihan digital
                  berkualitas, yang dapat diakses siapapun, kapanpun, dan
                  dimanapun. Melalui Ekselen.id, kami berharap pelatihan
                  berkualitas dapat diakses seluas-luasnya.
                </p>
                <p>
                  Ekselen.id ditujukan untuk Anda yang ingin mengembangkan karir
                  dan kompetensi Anda saat ini, mengubah haluan karir, atau
                  mendukung karir impian Anda yang lainnya. Kami berkomitmen
                  untuk menyediakan program pelatihan terkini yang sesuai dengan
                  kebutuhan dunia kerja, serta menyediakan Trainer terbaik dan
                  berkualitas. Dengan ini, kami berharap dapat menghasilkan
                  sumber daya manusia yang terampil dan profesional.
                </p>
              </div>
            </div>
            <div class="row konten">
              <div class="col-6">
                <p class="text-right">
                  Metode pelatihan di Ekselen.id dikembangkan menyesuaikan pada
                  kebutuhan dunia kerja dan kondisi terkini, baik dari sisi
                  kurikulum, materi yang diajarkan, serta teknologi yang
                  digunakan. Dengan melalui video berkualitas yang disajikan
                  dalam durasi singkat dan jelas, maupun secara langsung dalam
                  bentuk webinar, sehingga Anda akan dapat belajar secara
                  sistematis dan fokus. Selain video, konten pelatihan juga
                  didukung dengan evaluasi dan games sehingga membuat pengalaman
                  belajar lebih menarik.
                </p>
                <p class="text-right">
                  Ekselen.id dikembangkan oleh PT. Robere Manajemen Indonesia.
                  Kami lahir dari sebuah keyakinan bahwa pelatihan seharusnya
                  dapat diakses seluas-luasnya untuk meningkatkan kompetensi
                  Sumber Daya Manusia Indonesia. Kami juga meyakini bahwa kita
                  semua perlu pendekatan baru dalam belajar untuk meningkatkan
                  kualitas dan daya saing diri kita masing-masing. Di
                  Ekselen.id, pendekatan kami membuat pelatihan dapat dilakukan
                  secara lebih efisien, dapat diakses kapanpun dibutuhkan, dan
                  biaya yang terjangkau.
                </p>
              </div>
              <div class="col-6">
                <img src={AboutImg2} alt="" />
              </div>
            </div>
            <h2 class="title-benefit-about">
              Bangun Karir <span>Bersama Ekselen.id</span>
            </h2>
            <div class="row benefit-about">
              <div class="col-4 konten-benefit">
                <img src={BenefitImg1} alt="" class="benefit-icon" />
                <h4>Pelatihan Bersertifikat</h4>
                <p>
                  Temukan beragam pilihan konten dan topik pelatihan serta
                  pembelajaran terbaik, yang diajarkan oleh berbagai Lembaga
                  serta Trainer yang profesional
                </p>
              </div>
              <div class="col-4 konten-benefit">
                <img src={BenefitImg2} alt="" class="benefit-icon" />
                <h4>Beragam Konten Pilihan</h4>
                <p>
                  Tersedia sertifikat bagi Anda yang telah menyelesaikan
                  pelatihan yang dapat diakses dengan mudah dan dapat digunakan
                  sesuai kebutuhan Anda
                </p>
              </div>
              <div class="col-4 konten-benefit">
                <img src={BenefitImg3} alt="" class="benefit-icon" />
                <h4>Career Ready Program</h4>
                <p>
                  Dapatkan akses materi pelatihan yang sesuai dengan kebutuhan
                  dunia kerja saat ini untuk mendukung karir impian Anda
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
