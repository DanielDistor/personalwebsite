// Highlight the dock item for the section currently in view
const links = document.querySelectorAll(".dock a");
const sections = [...links].map((a) => document.getElementById(a.dataset.section));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.classList.toggle("active", a.dataset.section === entry.target.id));
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((s) => s && observer.observe(s));

// Projects page: Digital / Physical tabs (#physical in the URL opens that tab)
const tabs = [...document.querySelectorAll('[role="tab"]')];

function selectTab(tab, updateHash = true) {
  tabs.forEach((t) => {
    const on = t === tab;
    t.setAttribute("aria-selected", on);
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
  });
  if (updateHash) history.replaceState(null, "", tab.id === "tab-physical" ? "#physical" : location.pathname);
}

tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => selectTab(tab));
  tab.addEventListener("keydown", (e) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!step) return;
    const next = tabs[(i + step + tabs.length) % tabs.length];
    selectTab(next);
    next.focus();
  });
});

if (tabs.length && location.hash === "#physical") selectTab(document.getElementById("tab-physical"), false);
