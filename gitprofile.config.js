// gitprofile.config.js

const config = {
  github: {
    username: 'mhkarami97', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 5, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'mhkarami97',
    twitter: 'mhkarami97',
    facebook: 'mhkarami97',
    instagram: 'mhkarami97',
    telegram: 'mhkarami97',
    youtube: 'mhkarami97',
    aparat: 'mhkarami97',
    couchsurfing: 'mhkarami97',
    website: 'itarfand.com',
    email: 'mhkarami97@gmail.com',
  },
  resume: {
    fileUrl:
      'https://linkedin.com/in/mhkarami97', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C#',
    'SQL',
    'Angular',
    'Git',
    'Docker'
  ],
  experiences: [
    {
      company: 'FreeLancer',
      position: 'FullStack',
      from: '2018',
      to: '2020',
      companyLink: 'https://itarfand.com',
    },
    {
      company: 'Asa Co',
      position: 'Backend Developer',
      from: '2020',
      to: 'Present',
      companyLink: 'https://asax.ir',
    },
  ],
   certifications: [
    {
      name: 'C#',
      body: 'LinkedIn Skill Assessment badge',
      year: '2022',
      link: 'https://www.linkedin.com/in/mhkarami97/details/skills/'
    },
  ],
  education: [
    {
      institution: 'Computer Engineer',
      degree: 'Bachelor',
      from: '2016',
      to: '2020',
    },
    {
      institution: 'Software Engineer',
      degree: 'Master',
      from: '2020',
      to: '2022',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'آی ترفند',
      description:
        'ترفندهای کاربردی حوضه تکنولوژی',
      imageUrl: '/icons/09.png',
      link: 'https://itarfand.com',
    },
    {
      title: 'طراحی',
      description:
        'طراحی و برنامه‌نویسی ایده‌های شما',
      imageUrl: '/icons/07.png',
      link: 'https://design.mhkarami97.ir',
    },    
    {
      title: 'کتابخانه',
      description:
        'کتاب‌های خوانده شده',
      imageUrl: '/icons/03.png',
      link: 'https://book.mhkarami97.ir',
    },    
    {
      title: 'فیلم‌خانه',
      description:
        'فیلم‌های دیده شده',
      imageUrl: '/icons/05.png',
      link: 'https://video.mhkarami97.ir',
    },   
    {
      title: 'آهنگ‌خانه',
      description:
        'گلچین آهنگ‌ها',
      imageUrl: '/icons/15.png',
      link: 'https://music.mhkarami97.ir',
    },    
    {
      title: 'سفرنامه',
      description:
        'سفرهای رفته',
      imageUrl: '/icons/06.png',
      link: 'https://travel.mhkarami97.ir',
    },    
    {
      title: 'کلیپ',
      description:
        'کلیپ سفرهای رفته شده',
      imageUrl: '/icons/06.png',
      link: 'https://trip.mhkarami97.ir',
    },  
    {
      title: 'شعر‌خانه',
      description:
        'شعرهای خوانده شده',
      imageUrl: '/icons/11.png',
      link: 'https://poem.mhkarami97.ir',
    },
    {
      title: 'فوت‌و‌فن',
      description:
        'نکات کاربردی',
      imageUrl: '/icons/16.png',
      link: 'https://trick.mhkarami97.ir',
    },
    {
      title: 'جملات انگیزشی',
      description:
        'جملات انگیزشی بزرگان',
      imageUrl: '/icons/13.png',
      link: 'https://sentence.mhkarami97.ir',
    },
    {
      title: 'وبلاگ',
      description:
        'وبلاگ روزمرگی‌های برنامه‌نویسی',
      imageUrl: '/icons/12.png',
      link: 'https://blog.mhkarami97.ir',
    },
    {
      title: 'لینکدونی',
      description:
        'لینک سایت‌های کاربردی',
      imageUrl: '/icons/02.png',
      link: 'https://link.mhkarami97.ir',
    },
    {
      title: 'ایونت',
      description:
        'ایونت‌های طبیعت‌گردی',
      imageUrl: '/icons/14.png',
      link: 'https://event.mhkarami97.ir',
    },
    {
      title: 'طبیعت‌گردی',
      description:
        'رزومه طبیعت‌گردی',
      imageUrl: '/icons/01.png',
      link: 'https://tour.mhkarami97.ir',
    },
    {
      title: 'تجربه',
      description:
        'تجربه',
      imageUrl: '/icons/17.png',
      link: 'https://experience.mhkarami97.ir',
    },
    {
      title: 'آی ترفند',
      description:
        'آی ترفند',
      imageUrl: '/icons/09.png',
      link: 'https://tarfand.mhkarami97.ir',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  /* blog: {
    source: 'forum', // medium | dev
    username: 'mhkarami97', // to hide blog section, keep it empty
    limit: 5, // How many posts to display. Max is 10.
  }, */
  googleAnalytics: {
    id: 'G-DZM25ZLKRP', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'procyon',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'procyon',      
      'dracula',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#6F48FF',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made By <a 
      class="text-secondary" style="color: rgb(147 51 234);" href="https://github.com/mhkarami97"
      target="_blank"
      rel="noreferrer"
    >Mohammad Hossein Karami</a> and 💜`,
};

export default config;
