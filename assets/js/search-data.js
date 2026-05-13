// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "A complete list of news and announcements.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Selected publications, grouped by year (newest first). A full list is available on Google Scholar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-one-paper-was-accepted-by-cvpr-2024",
          title: 'One paper was accepted by CVPR 2024.',
          description: "",
          section: "News",},{id: "news-one-paper-was-accepted-by-ieee-t-pami",
          title: 'One paper was accepted by IEEE T-PAMI.',
          description: "",
          section: "News",},{id: "news-one-paper-was-accepted-by-cvpr-2025",
          title: 'One paper was accepted by CVPR 2025.',
          description: "",
          section: "News",},{id: "news-one-paper-was-accepted-by-icml-2025",
          title: 'One paper was accepted by ICML 2025.',
          description: "",
          section: "News",},{id: "news-supported-by-the-cie-tencent-doctoral-research-incentive-project-中国电子学会-腾讯博士生科研激励计划-混元大模型专项",
          title: 'Supported by the CIE-Tencent Doctoral Research Incentive Project (中国电子学会—腾讯博士生科研激励计划，混元大模型专项).',
          description: "",
          section: "News",},{id: "news-one-paper-was-accepted-by-neurips-2025",
          title: 'One paper was accepted by NeurIPS 2025.',
          description: "",
          section: "News",},{id: "news-received-the-national-scholarship-for-ph-d-students",
          title: 'Received the National Scholarship for Ph.D. Students.',
          description: "",
          section: "News",},{id: "news-one-paper-was-accepted-by-iclr-2026",
          title: 'One paper was accepted by ICLR 2026.',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%69.%7A%68%61%6E%67.%34%30%39%36@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=dLXfLzoAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/uyzhang", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
