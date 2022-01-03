import me from '../images/me.png';
import utdi from '../images/utdi.png';
import acc from '../images/acc.png';

export default function LandingPage () {
    return (
        <div className='container py-5'>
            <div className="row justify-content-around my-5 py-5">
                <div className="col-lg-3 order-md-1 d-none d-lg-block">
                    <img src={me} className="img-fluid rounded-3 bg-info px-2 pt-2 mb-3" />
                </div>
                <div className="col-lg-8 col-md-12 my-lg-auto">
                    <h1 className='mb-5 display-4 fw-light' style={{ color: "darkturquoise"}}>
                        Halo, saya adalah Web Developer yang berlokasi di Yogyakarta, Indonesia.
                    </h1>
                    <p className="lead mb-3">
                        Saya telah membangun beberapa aplikasi web sejak tahun 2015.
                        Aplikasi yang saya bangun kebanyakan menggunakan <a href="https://www.yiiframework.com/" className="text-light">PHP - Yii Framework</a>, tetapi saya tidak menutup diri
                        untuk menggunakan teknologi lainnya.
                    </p>

                    <a href='#' className='text-decoration-none fw-bold text-warning'>
                        lebih lanjut <i className='bi bi-arrow-right'></i>
                    </a>
                </div>
            </div>

            <div className='row py-5 my-5 justify-content-around'>
                <div className='col-lg-5 my-lg-auto'>
                    <h4 className='text-info'>
                        Universitas Teknologi Digital Indonesia
                    </h4>

                    <h1 className='fw-light my-4'>
                        Digital - Global - Integrity
                    </h1>

                    <p className='lead'>
                        Universitas Teknologi Digital Indonesia (dahulu STMIK AKAKOM)
                        adalah salah satu universitas swasta unggulan di Yogyakarta yang 
                        berfokus pada pengembangan ilmu teknologi informasi
                    </p>

                    <a href='https://utdi.ac.id' target="_blank" className='text-decoration-none text-warning'>
                        Lihat halaman web <i className='bi bi-box-arrow-up-right'></i>
                    </a>
                </div>
                <div className='col-lg-6'>
                    <img src={utdi} className="img-fluid rounded-3" />
                </div>
            </div>

            <div className='row py-5 my-5 justify-content-around'>
                <div className='col-lg-6'>
                    <img src={acc} className="img-fluid rounded-3" />
                </div>
                <div className='col-lg-5 my-lg-auto'>
                    <h4 className='text-info'>
                        Akakom Career Center
                    </h4>

                    <h1 className='fw-light my-4'>
                        Pelayanan karir mahasiswa dan lulusan adalah komitmen kami
                    </h1>

                    <p className='lead'>
                        AKAKOM Career Center (ACC) adalah nama lain dari Bidang Layanan Karir 
                        dan Pengelolaan Data Alumni yang berada di bawah wewenang 
                        Wakil Ketua III STMIK AKAKOM Yogyakarta
                    </p>

                    <a href='https://acc.akakom.ac.id' target="_blank" className='text-decoration-none text-warning'>
                        Lihat halaman web <i className='bi bi-box-arrow-up-right'></i>
                    </a>
                </div>
            </div>
        </div>
    );
}