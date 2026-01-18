$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
      offset: 100,
    });
    const contactHeading = document.querySelector(".nav-contact-panel h2");
    if (contactHeading && contactHeading.id) {
      const tocContactLink = $myNav.find(`a[href="#${contactHeading.id}"]`);
      if (tocContactLink.length) {
        tocContactLink.addClass("contact-trigger");
      }
    }
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  const navContainer = $("#navbarNav");
  const navPopovers = [
    {
      root: $(".contact-nav"),
      button: ".contact-nav__button",
      popover: ".contact-nav__popover",
      openClass: "contact-open",
      panelId: "nav-contact-panel",
    },
    {
      root: $(".community-nav"),
      button: ".community-nav__button",
      popover: ".community-nav__popover",
      openClass: "community-open",
      panelId: "nav-community-panel",
    },
  ];

  const activeNavPopovers = navPopovers.filter((item) => item.root.length);

  const closePopover = (item) => {
    item.root.removeClass("is-open");
    navContainer.removeClass(item.openClass);
    item.buttonEl.attr("aria-expanded", "false");
    item.popoverEl.attr("aria-hidden", "true");
  };

  const closeAllPopovers = () => {
    activeNavPopovers.forEach((item) => {
      closePopover(item);
    });
  };

  const openPopover = (item) => {
    closeAllPopovers();
    item.root.addClass("is-open");
    navContainer.addClass(item.openClass);
    item.buttonEl.attr("aria-expanded", "true");
    item.popoverEl.attr("aria-hidden", "false");
  };

  activeNavPopovers.forEach((item) => {
    item.buttonEl = item.root.find(item.button);
    item.popoverEl = item.root.find(item.popover);

    item.buttonEl.on("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      if (item.root.hasClass("is-open")) {
        closePopover(item);
      } else {
        openPopover(item);
      }

      if ($("#navbarNav").hasClass("show")) {
        const panel = document.getElementById(item.panelId);
        if (panel) {
          panel.scrollIntoView({ block: "end", behavior: "smooth" });
        }
      }
    });
  });

  const contactItem = activeNavPopovers.find((item) => item.openClass === "contact-open");
  if (contactItem) {
    $(".contact-trigger").on("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      openPopover(contactItem);

      if ($("#navbarNav").hasClass("show")) {
        const panel = document.getElementById(contactItem.panelId);
        if (panel) {
          panel.scrollIntoView({ block: "end", behavior: "smooth" });
        }
      }
    });
  }

  if (activeNavPopovers.length) {
    $(document).on("click", function (event) {
      const clickedInside = activeNavPopovers.some(
        (item) => item.root.is(event.target) || item.root.has(event.target).length > 0
      );
      if (!clickedInside) {
        closeAllPopovers();
      }
    });

    $(document).on("keydown", function (event) {
      if (event.key === "Escape") {
        closeAllPopovers();
      }
    });
  }

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
