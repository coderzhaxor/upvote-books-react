const Footer = () => {
    return (
        <footer id="footer" className="w-full bg-[#2F2F8A]/20 py-10 flex flex-col justify-center text-center mt-20">
            <h6 className="text-sky-600 font-bold text-2xl">Follow our socials</h6>
            <span className="gap-8 space-x-6 [&>i]:text-2xl mt-6">
                <i className="bi bi-youtube"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
            </span>
            <hr className="w-[500px] mx-auto mt-10 border-white/60" />
            <p className="mt-4 text-white/70">&copy; Upvote books Inc. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
