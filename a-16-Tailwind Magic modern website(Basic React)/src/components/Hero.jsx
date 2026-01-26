function Hero() {
  return (
    <div class="bg-yellow-300 px-6 py-12 w-[1520px] -ml-38">
      <div class="max-w-6xl max-md:max-w-md mx-auto">
        <div class="grid md:grid-cols-2 items-center gap-12">
          <div className="text-left">
            <h2 class="text-slate-900 lg:text-5xl md:text-4xl text-3xl font-bold leading-tight!">Craft Seamless Web Experiences with Tailwind Magic</h2>
            <p class="text-slate-900 mt-6 text-base leading-relaxed">Explore a curated collection of ready-to-use components and design blocks, empowering you to create stunning, responsive interfaces with ease. Streamline your workflow, amplify your creativity, and discover the future of web development, all at your fingertips.</p>
            <div class="flex flex-wrap items-center gap-6 mt-8">
              <button type='button'
                class="bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold text-[15px] rounded-md px-5 py-3 cursor-pointer">Start a free trial</button>
              <a href="javascript:void(0)" class="text-slate-900 text-[15px] font-semibold underline whitespace-nowrap">API Documentation</a>
            </div>
          </div>

          <div class="space-y-4 md:max-w-md">
            <div class="flex max-sm:flex-col sm:gap-6 gap-2 bg-white p-4 rounded-md">
              <img src='https://readymadeui.com/profile_2.webp' class="shrink-0 w-12 h-12 rounded-full max-sm:mb-2 shadow-[7px_-3px_0px_rgba(253,224,71,1)]" />
              <div>
                <h4 class="text-slate-900 text-base font-semibold">John Doe</h4>
                <p class="text-slate-600 text-sm mt-2">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit.</p>
              </div>
            </div>
            <div class="flex max-sm:flex-col sm:gap-6 gap-2 p-4 bg-white rounded-md">
              <img src='https://readymadeui.com/profile_3.webp' class="shrink-0 w-12 h-12 rounded-full max-sm:mb-2 shadow-[7px_-3px_0px_rgba(253,224,71,1)]" />
              <div>
                <h4 class="text-slate-900 text-base font-semibold">Mark Adair</h4>
                <p class="text-slate-600 text-sm mt-2">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute excepteur et ex consectetur velit ullamco veniam minim aute sit.</p>
              </div>
            </div>
            <div class="flex max-sm:flex-col sm:gap-6 gap-2 bg-white p-4 rounded-md">
              <img src='https://readymadeui.com/profile_4.webp' class="shrink-0 w-12 h-12 rounded-full max-sm:mb-2 shadow-[7px_-3px_0px_rgba(253,224,71,1)]" />
              <div>
                <h4 class="text-slate-900 text-base font-semibold">Simon Konecki</h4>
                <p class="text-slate-600 text-sm mt-2">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco excepteur et ex consectetur velit ullamco veniam minim aute sit.</p>
              </div>
            </div>
            <div class="flex max-sm:flex-col sm:gap-6 gap-2 bg-white p-4 rounded-md">
              <img src='https://readymadeui.com/team-4.webp' class="shrink-0 w-12 h-12 rounded-full max-sm:mb-2 shadow-[7px_-3px_0px_rgba(253,224,71,1)]" />
              <div>
                <h4 class="text-slate-900 text-base font-semibold">Sophia</h4>
                <p class="text-slate-600 text-sm mt-2">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Hero;
