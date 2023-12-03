import BookCard from '../../components/Card/BookCard';
import books from '../../data/Api';

export default function Home() {
    return (
        <>
            <HeroSection />
            <RecomendationSection books={books} />
            <AnimationSection />
            <PopularSection books={books} />
        </>
    );
}

function HeroSection() {
    return (
        <section id="hero-section" className="flex flex-col-reverse md:flex-row max-w-5xl mx-auto mt-32 md:mt-10 items-center gap-10 md:gap-0">
            <div className="hero-description max-w-xl px-8">
                <h1 className="text-4xl font-bold mb-4">Request Book Here !</h1>
                <p className="text-lg mb-6">You are welcome to request the books you want! Every request is a new opportunity to explore infinite literacy adventures together. Ask us what you want, and we'll try to make it happen for you.</p>
                <button className="px-4 py-3 bg-indigo-500 hover:bg-indigo-600 font-bold rounded-lg">Request Now</button>
            </div>
            <div className="hero-img relative">
                <img src="/src/assets/svg/gradient-hero.svg" alt="gradient hero" className="absolute top-[30%] -right-0" />
                <img src="/src/assets/svg/hero-img.svg" alt="hero-img" id="hero-illustration" />
            </div>
        </section>
    );
}

function RecomendationSection({ books }) {
    const recomendationBooks = books.filter((book) => book.id <= 3);
    return (
        <section id="recomendations" className="mx-auto max-w-5xl px-8 mt-32">
            <h1 className="text-center font-semibold text-3xl mb-10">Recomendation</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <BookCard books={recomendationBooks} />
            </div>
        </section>
    );
}

function AnimationSection() {
    return (
        <section id="animation" className="w-full h-[500px] bg-[#2F2F8A] mt-20 flex items-center justify-center">
            <div className="animation-left">
                <img src="/src/assets/svg/logo-animation.svg" alt="logo animation left" />
                <h4 className="text-center font-bold text-3xl">Upvote Books</h4>
            </div>

            <div className="animation-right"></div>
        </section>
    );
}

function PopularSection({ books }) {
    // Sorting book terpopuler
    let sortedBooks = books.sort((a, b) => b.countVote - a.countVote);

    // Ambil 6 teratas
    const popularBooks = sortedBooks.filter((_, index) => index < 6);

    return (
        <section id="popular" className="mx-auto max-w-5xl px-8 mt-32">
            <h1 className="text-center font-semibold text-3xl mb-10">Most Popular</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <BookCard books={popularBooks} />
            </div>
        </section>
    );
}
