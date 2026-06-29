class PortfolioNav extends HTMLElement {
    connectedCallback() { 
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        const homeClass = currentPage === 'index.html' ? 'text-brand-accent' : 'text-gray-500';
        const aboutClass = currentPage === 'about.html' ? 'text-brand-accent' : 'text-gray-500';
        const rotoClass = currentPage === 'rotoscoping.html' ? 'text-brand-accent' : 'text-gray-500';
        const solarClass = currentPage === 'solar-system.html' ? 'text-brand-accent' : 'text-gray-500';

        this.innerHTML = `
            <nav class="glass-nav fixed w-full top-0 z-50 transition-all duration-300">
                <div class="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center relative">
                    
                    <a href="index.html" class="text-xl font-bold tracking-widest text-brand-ink flex items-center gap-2">
                        DEAN<span class="text-brand-accent">.</span>
                    </a>
                    
                    <div class="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
                        <a href="index.html" class="${homeClass} transition-colors">Home</a>
                        <a href="about.html" class="${aboutClass} transition-colors">About</a>
                        <a href="rotoscoping.html" class="${rotoClass} transition-colors">Rotoscoping</a>
                        <a href="solar-system.html" class="${solarClass} transition-colors">Solar System</a>
                    </div>

                    <button id="mobile-menu-btn" class="md:hidden text-brand-ink focus:outline-none hover:text-brand-accent transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>

                </div>

                <div id="mobile-menu" class="hidden md:hidden absolute top-full left-0 w-full bg-[#FDFCF8]/95 backdrop-blur-md border-b border-brand-border shadow-lg flex-col py-4 px-6 space-y-4 text-sm font-medium tracking-wide">
                    <a href="index.html" class="block w-full ${homeClass} transition-colors">Home</a>
                    <a href="about.html" class="block w-full ${aboutClass} transition-colors">About</a>
                    <a href="rotoscoping.html" class="block w-full ${rotoClass} transition-colors">Rotoscoping</a>
                    <a href="solar-system.html" class="block w-full ${solarClass} transition-colors">Solar System</a>
                </div>
            </nav>
        `; 

        const btn = this.querySelector('#mobile-menu-btn');
        const menu = this.querySelector('#mobile-menu');

        btn.addEventListener('click', () => { 
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        });
    }
}
 
customElements.define('portfolio-nav', PortfolioNav);