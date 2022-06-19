//memanggil komponen
import Footer from './Footer'
import Navbar from './Navbar'
//memanggil gambar
import mlbbdalem from './assets/mlbbdalem.jpg'
import koinnya from './assets/koinnya.jpg'  

export default function Example() {
    return(
        <>
        <Navbar/>
        <div className="border-4 border-solid border-white rounded-lg h-auto text-justify p-20" >
            {/* Artikel */}
            <p className="text-center mb-3 -mt-10 font-bold text-2xl">
            Mobile Legend
            </p>
        <img src={mlbbdalem} className="grid grid-cols-3 gap-4 gap-x-10 sm:grid-cols-4 lg:grid-cols-5 xl:gap-x-8 p-5"
        />
        <br />
        <span className="p-20">
        PERHATIAN: Metode pembayaran ShopeePay hanya tersedia untuk Pengguna Handphone (HP/Mobile). Harap pastikan bahwa aplikasi Shopee Anda telah diperbarui dan tengah memiliki saldo ShopeePay yang mencukupi sebelum melakukan top up.

Beli Diamond Free Fire (FF) hanya dalam hitungan detik! Cukup masukkan Player ID Free Fire Kamu, pilih jumlah Diamond yang Kamu inginkan, selesaikan pembayaran, dan Diamond tersebut akan langsung masuk ke akun Free Fire Kamu.

Tanpa registrasi atau login, Kamu bisa langsung top up Diamond Free Fire hari ini dengan mudah di Codashop!

Perhatian! Harga sudah termasuk PPN

Download dan mainkan Free Fire sekarang!
        </span>
        </div>
        
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-10 lg:max-w-none">
                <h2 className="text-2xl font-extrabold text-black">Pilih Nominal</h2>

<div class="grid grid-cols-3 gap-4 gap-x-10 sm:grid-cols-4 lg:grid-cols-5 xl:gap-x-8 p-5">

    <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-gray-700 max-w-sm">
        <a href='../Loginml'>
        <img class="rounded-t-lg" src={koinnya} alt=""/>
        </a>
            <div class="p-6">
            <h5 class="text-white text-xl font-medium mb-2 flex justify-center">10</h5>
            </div>
        </div>
    </div>
    <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-gray-700 max-w-sm">
        <a href='../Loginml'>
        <img class="rounded-t-lg" src={koinnya} alt=""/>
        </a>
            <div class="p-6">
            <h5 class="text-white text-xl font-medium mb-2 flex justify-center">50</h5>
            </div>
        </div>
    </div>
    <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-gray-700 max-w-sm">
        <a href='../Loginml'>
        <img class="rounded-t-lg" src={koinnya} alt=""/>
        </a>
            <div class="p-6">
            <h5 class="text-white text-xl font-medium mb-2 flex justify-center">100</h5>
            </div>
        </div>
    </div>
    <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-gray-700 max-w-sm">
        <a href='../Loginml'>
        <img class="rounded-t-lg" src={koinnya} alt=""/>
        </a>
            <div class="p-6">
            <h5 class="text-white text-xl font-medium mb-2 flex justify-center">180</h5>
            </div>
        </div>
    </div>
    <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-gray-700 max-w-sm">
        <a href='../Loginml'>
        <img class="rounded-t-lg" src={koinnya} alt=""/>
        </a>
            <div class="p-6">
            <h5 class="text-white text-xl font-medium mb-2 flex justify-center">250</h5>
            </div>
        </div>
    </div>
    <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-gray-700 max-w-sm">
        <a href='../Loginml'>
        <img class="rounded-t-lg" src={koinnya} alt=""/>
        </a>
            <div class="p-6">
            <h5 class="text-white text-xl font-medium mb-2 flex justify-center">390</h5>
            </div>
        </div>
    </div>
    <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-gray-700 max-w-sm">
        <a href='../Loginml'>
        <img class="rounded-t-lg" src={koinnya} alt=""/>
        </a>
            <div class="p-6">
            <h5 class="text-white text-xl font-medium mb-2 flex justify-center">450</h5>
            </div>
        </div>
    </div>
    <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-gray-700 max-w-sm">
        <a href='../Loginml'>
        <img class="rounded-t-lg" src={koinnya} alt=""/>
        </a>
            <div class="p-6">
            <h5 class="text-white text-xl font-medium mb-2 flex justify-center">580</h5>
            </div>
        </div>
    </div>
    <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-gray-700 max-w-sm">
        <a href='../Loginml'>
        <img class="rounded-t-lg" src={koinnya} alt=""/>
        </a>
            <div class="p-6">
            <h5 class="text-white text-xl font-medium mb-2 flex justify-center">700</h5>
            </div>
        </div>
    </div>
    <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-gray-700 max-w-sm">
        <a href='../Loginml'>
        <img class="rounded-t-lg" src={koinnya} alt=""/>
        </a>
            <div class="p-6">
            <h5 class="text-white text-xl font-medium mb-2 flex justify-center">840</h5>
            </div>
        </div>
    </div>
</div>

                </div>
            </div>

        </div>
        <Footer/>
        </>
    )
}       