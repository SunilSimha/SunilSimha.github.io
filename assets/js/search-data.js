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
  },{id: "nav-research",
          title: "Research",
          description: "Understanding the origins of FRBs through their host galaxies and using FRBs as probes of foreground baryons.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-outreach",
          title: "Outreach",
          description: "My research without the jargon, in talks and short explainers.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/outreach/";
          },
        },{id: "nav-code",
          title: "Code",
          description: "Open-source software I contribute to.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/code/";
          },
        },{id: "nav-birding",
          title: "Birding",
          description: "Where I have been birding, in photos.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/birding/";
          },
        },{id: "outreach-finding-the-host-galaxy-of-a-flash-that-happened-only-once",
          title: 'Finding the host galaxy of a flash that happened only once',
          description: "",
          section: "Outreach",handler: () => {
              window.location.href = "/outreach/2019-bannister-first-one-off-frb-home/";
            },},{id: "outreach-mapping-everything-a-radio-flash-passed-through-on-its-way-to-earth",
          title: 'Mapping everything a radio flash passed through on its way to Earth',
          description: "",
          section: "Outreach",handler: () => {
              window.location.href = "/outreach/2020-simha-cosmic-web-frb190608/";
            },},{id: "outreach-a-close-look-at-the-neighbourhood-where-one-radio-flash-was-born",
          title: 'A close look at the neighbourhood where one radio flash was born',
          description: "",
          section: "Outreach",handler: () => {
              window.location.href = "/outreach/2021-chittidi-frb190608-neighbourhood/";
            },},{id: "outreach-can-we-get-away-with-not-so-detailed-observations-of-the-galaxies-a-radio-flash-passed-through",
          title: 'Can we get away with not so detailed observations of the galaxies a...',
          description: "",
          section: "Outreach",handler: () => {
              window.location.href = "/outreach/2021-simha-frb180924-clear-path/";
            },},{id: "outreach-too-much-gas-was-it-something-on-the-way-or-something-at-home",
          title: 'Too much gas: was it something on the way, or something at home?...',
          description: "",
          section: "Outreach",handler: () => {
              window.location.href = "/outreach/2023-simha-excess-gas-suspects/";
            },},{id: "outreach-where-does-the-universe-keep-its-ordinary-matter",
          title: 'Where does the universe keep its ordinary matter?',
          description: "",
          section: "Outreach",handler: () => {
              window.location.href = "/outreach/2024-khrykin-where-is-the-ordinary-matter/";
            },},{id: "outreach-pinpointing-one-of-the-brightest-radio-flashes-ever-seen",
          title: 'Pinpointing one of the brightest radio flashes ever seen',
          description: "",
          section: "Outreach",handler: () => {
              window.location.href = "/outreach/2025-chime-brightest-nearby-flash/";
            },},{id: "outreach-chemical-maps-of-the-galaxies-that-radio-flashes-come-from",
          title: 'Chemical maps of the galaxies that radio flashes come from',
          description: "",
          section: "Outreach",handler: () => {
              window.location.href = "/outreach/2026-simha-chemical-maps-of-frb-homes/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%75%6E%69%6C.%73%69%6D%68%61%39%35@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/SunilSimha", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-3801-1496", "_blank");
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
