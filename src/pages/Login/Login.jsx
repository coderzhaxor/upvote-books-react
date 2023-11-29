import CircleKiri from '../../assets/img/circle_kiri.png';
import CircleKanan from '../../assets/img/circle_kanan.png';

export default function Login() {
    return (
        <main className="relative min-h-screen w-full">
            <img src={CircleKiri} className="absolute top-0 left-0" />
            <img src={CircleKanan} className="absolute top-0 right-0" />
            <img src={CircleKiri} className="absolute bottom-0 right-0 rotate-180" />
            <img src={CircleKanan} className="absolute bottom-0 left-0 rotate-180" />
        </main>
    );
}
