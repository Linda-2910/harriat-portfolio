export const scrollToSection = (id: string, offset = 100) => {
    const target = document.getElementById(id);
    if (target) {
        const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
};
