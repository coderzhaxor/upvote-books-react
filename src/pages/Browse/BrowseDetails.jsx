import { useParams } from 'react-router-dom';
import books from '../../data/Api';

export default function BrowseDetails() {
    const { bookId } = useParams();
    const book = books.find((book) => book.id == bookId);

    return (
        <>
            <div className="max-w-5xl mx-auto bg-[#2F2F8A]/60 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 p-8">
                    <div className="book-info">
                        <h1 className="font-semibold text-4xl text-white mb-2">{book.title}</h1>
                        <h3 className="font-medium text-xl text-white/70 mb-4">{book.author}</h3>
                        <p className="description text-base text-white/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas saepe voluptate accusantium voluptatum esse minus doloremque hic eum molestiae rerum.</p>
                        <hr />
                        <button className="flex gap-x-8 bg-indigo-600 px-4 oy-3">
                            Upvote
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                                <path d="M6.40192 1.5C7.55662 -0.499999 10.4434 -0.499999 11.5981 1.5L16.7942 10.5C17.9489 12.5 16.5056 15 14.1962 15H3.80385C1.49445 15 0.0510712 12.5 1.20577 10.5L6.40192 1.5Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                    <div className="book-img">
                        <img src={book.img} alt={book.title} />
                    </div>
                </div>
            </div>
        </>
    );
}
