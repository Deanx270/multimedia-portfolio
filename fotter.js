class PortfolioFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="mt-auto border-t border-brand-border bg-[#FDFCF8]">
                <div class="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    
                    <div class="text-lg font-bold tracking-widest text-brand-ink flex items-center gap-2">
                        DEAN<span class="text-brand-accent">.</span>
                    </div>
                    
                    <p class="text-sm text-gray-500 font-light text-center md:text-left">
                        &copy; 2026 Dean. Multimedia and Authoring Portfolio &mdash; Technological University of the Philippines.
                    </p>
                    
                    <div class="flex items-center gap-4 text-sm font-medium text-gray-500">
                        <a href="#" onclick="window.scrollTo({top: 0, behavior: 'smooth'}); return false;" class="hover:text-brand-accent transition-colors flex items-center gap-1 group">
                            Back to Top
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </a>
                    </div>
                    
                </div>
            </footer>
        `;
    }
}

customElements.define('portfolio-footer', PortfolioFooter);