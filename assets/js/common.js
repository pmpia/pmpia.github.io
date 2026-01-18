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

  const contactNav = $(".contact-nav");
  if (contactNav.length) {
    const toggleButton = contactNav.find(".contact-nav__button");
    const popover = contactNav.find(".contact-nav__popover");
    const navContainer = $("#navbarNav");

    const closePopover = () => {
      contactNav.removeClass("is-open");
      navContainer.removeClass("contact-open");
      toggleButton.attr("aria-expanded", "false");
      popover.attr("aria-hidden", "true");
    };

    const openPopover = () => {
      contactNav.addClass("is-open");
      navContainer.addClass("contact-open");
      toggleButton.attr("aria-expanded", "true");
      popover.attr("aria-hidden", "false");
    };

    const togglePopover = () => {
      if (contactNav.hasClass("is-open")) {
        closePopover();
      } else {
        openPopover();
      }
    };

    toggleButton.on("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      togglePopover();

      if ($("#navbarNav").hasClass("show")) {
        const panel = document.getElementById("nav-contact-panel");
        if (panel) {
          panel.scrollIntoView({ block: "end", behavior: "smooth" });
        }
      }
    });

    $(".contact-trigger").on("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      openPopover();

      if ($("#navbarNav").hasClass("show")) {
        const panel = document.getElementById("nav-contact-panel");
        if (panel) {
          panel.scrollIntoView({ block: "end", behavior: "smooth" });
        }
      }
    });

    $(document).on("click", function (event) {
      if (!contactNav.is(event.target) && contactNav.has(event.target).length === 0) {
        closePopover();
      }
    });

    $(document).on("keydown", function (event) {
      if (event.key === "Escape") {
        closePopover();
      }
    });
  }

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
