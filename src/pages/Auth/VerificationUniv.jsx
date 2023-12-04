import { useParams } from 'react-router-dom';
import Universities from '../../data/Universities';

export default function VerificationUniv() {
    const param = useParams();
    const university = Universities.find((university) => university.id == param);

    return (
        <main className="max-w-5xl mx-auto">
            <div className="container flex flex-col mt-32">
                <img src="../../assets/img/token-il.png" alt="Token Illustration" />
                <div className="token-input">
                    <label htmlFor="token">
                        Enter Your {university.name} ID
                        <input type="token" id="token" className="block w-full bg-white/10 py-2 px-3 mt-2 rounded-sm outline-none ring-1 ring-white/30 hover:ring-blue-200/60" placeholder="Enter valid token id" />
                    </label>
                </div>
            </div>
        </main>
    );
}
