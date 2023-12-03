import Profile from '../../assets/img/ProfileMedium.png';
import { NavLink, BrowserRouter, Routes, Route } from 'react-router-dom';

import books from '../../data/Api';
import VoteCard from '../../components/Card/VoteCard';

export default function UserProfile() {
    const profileDatas = {
        name: 'Dedi Afrizal',
        img: Profile,
        university: 'Institut Teknologi Bandung',
        email: 'dediafrizal@gmail.com',
        pass: 'kurakuraninja12',
    };

    return (
        <div className="mx-auto max-w-5xl px-8 mt-20 bg-[#2F2F8A]/60 flex flex-col items-center rounded-xl py-10">
            <Header profile={profileDatas} />
            <section id="book" className="w-3/4">
                <hr className="my-10 border-white/10" />
                <SectionBook />
            </section>
        </div>
    );
}

function Header({ profile }) {
    return (
        <>
            <div className="profile mt-20 w-24 h-24 rounded-full bg-slate-400 object-cover">
                <img src={profile.img} alt={profile.name} />
            </div>
            <h2 className="text-xl font-semibold mt-4 mb-1">{profile.name}</h2>
            <h4 className="text-xl text-white/70 font-semibold">{profile.university}</h4>
            <div className="w-1/2 mt-8">
                <label htmlFor="name">
                    Name
                    <input type="text" id="name" className="block w-full bg-white/10 py-2 px-3 mb-4 mt-2 rounded-sm outline-none ring-1 ring-white/30 hover:ring-blue-200/60" name="name" placeholder={profile.name} />
                </label>
                <label htmlFor="email">
                    Email
                    <input type="email" id="email" className="block w-full bg-white/10 py-2 px-3 mb-4 mt-2 rounded-sm outline-none ring-1 ring-white/30 hover:ring-blue-200/60" name="email" placeholder={profile.email} />
                </label>
                <label htmlFor="university">
                    University
                    <input type="text" id="university" className="block w-full bg-white/10 py-2 px-3 mb-4 mt-2 rounded-sm outline-none ring-1 ring-white/30 hover:ring-blue-200/60" name="university" placeholder={profile.university} />
                </label>
                <button className="bg-indigo-500 hover:bg-indigo-600 block ml-auto px-6 py-2 font-semibold rounded-md">Save</button>
            </div>
        </>
    );
}

function SectionBook() {
    return (
        <>
            <NavSectionBook />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{books.map(<VoteCard books={books} />)}</div>
        </>
    );
}

function NavSectionBook() {
    return (
        <div className="flex gap-x-4">
            <NavLink to="/profile" className="bg-white/10 px-6 py-3 rounded-md profile-menu">
                History Vote
            </NavLink>
            <NavLink to="/profile/request" className="bg-white/10 px-6 py-3 rounded-md profile-menu">
                Request Book
            </NavLink>
        </div>
    );
}
