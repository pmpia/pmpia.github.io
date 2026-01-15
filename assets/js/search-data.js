// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-홈",
    title: "홈",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-교육",
          title: "교육",
          description: "실무 과정과 자격대비 과정을 포함합니다.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/classes/";
          },
        },{id: "nav-대표-강사-소개",
          title: "대표 강사 소개",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/instructors/";
          },
        },{id: "nav-회사-소개",
          title: "회사 소개",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about-us/";
          },
        },{id: "projects-1day-kpc-pmp-에센셜-핵심정리",
          title: '[1Day] KPC PMP 에센셜 핵심정리',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_class.html";
            },},{id: "projects-agile-기반의-프로젝트-관리-전문가-pmi-acp",
          title: 'Agile 기반의 프로젝트 관리 전문가 (PMI-ACP)',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_class.html";
            },},{id: "projects-pm-project-manager-양성",
          title: 'PM(Project Manager) 양성',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_class.html";
            },},{id: "projects-성공적인-pmo-구축-및-운영-실무",
          title: '성공적인 PMO 구축 및 운영 실무',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_class.html";
            },},{id: "projects-agile-프로젝트-관리-실무",
          title: 'Agile 프로젝트 관리 실무',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_class.html";
            },},{id: "projects-슬기로운-pm-생활-프로젝트를-성공으로-이끄는-지혜",
          title: '슬기로운 PM 생활 (프로젝트를 성공으로 이끄는 지혜)',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_class.html";
            },},{id: "projects-it-전문가를-위한-프로젝트-매니지먼트",
          title: 'IT 전문가를 위한 프로젝트 매니지먼트',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_class.html";
            },},{id: "projects-프로젝트-관리자-리더십-향상",
          title: '프로젝트 관리자 리더십 향상',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_class.html";
            },},{id: "projects-프로젝트-품질관리-전문가",
          title: '프로젝트 품질관리 전문가',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_class.html";
            },},{id: "projects-pmbok기반의-프로젝트관리전문가-pmp-주중",
          title: 'PMBOK기반의 프로젝트관리전문가(PMP)-주중',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_class.html";
            },},{id: "projects-pmbok기반의-프로젝트관리전문가-pmp-주말",
          title: 'PMBOK기반의 프로젝트관리전문가(PMP)-주말',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_class.html";
            },},{
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
