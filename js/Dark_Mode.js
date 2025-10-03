    
  const sidebarToggleBtns = document.querySelectorAll(".sidebar-toggle");
  const sidebarToggleBtnsadd = document.querySelectorAll(".sidebar-toggleadd");

  const sidebar = document.querySelector(".sidebar");
  const searchForm = document.querySelector(".search-form");
  const themeToggleBtn = document.querySelector(".theme-toggle");
  const themeIcon = themeToggleBtn.querySelector(".theme-icon");
  const menuLinks = document.querySelectorAll(".menu-link");

  // Updates the theme icon based on current theme and sidebar state
  // const updateThemeIcon = () => {
  //   const isDark = document.body.classList.contains("dark-theme");
  //   themeIcon.textContent = sidebar.classList.contains("collapsed") ? (isDark ? "light_mode" : "dark_mode") : "dark_mode";
  // };

  // Apply dark theme if saved or system prefers, then update icon
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const shouldUseDarkTheme = savedTheme === "dark" || (!savedTheme && systemPrefersDark);

  document.body.classList.toggle("dark-theme", shouldUseDarkTheme);
  // updateThemeIcon();

  // Toggle between themes on theme button click
  themeToggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    const isDarkl = document.body.classList.toggle("light_mode");
    // localStorage.setItem("theme", isDark ? "dark" : "light");
    // updateThemeIcon();
  });

  // Toggle sidebar collapsed state on buttons click
  sidebarToggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
      // updateThemeIcon();
    });
  });
  // Toggle sidebar collapsed state on buttons click
  sidebarToggleBtnsadd.forEach((btn) => {
    btn.addEventListener("click", () => {
      sidebar.classList.remove('collapsed')
    });
  });

  // Expand the sidebar when the search form is clicked
  searchForm.addEventListener("click", () => {
    if (sidebar.classList.contains("collapsed")) {
      sidebar.classList.add("collapsed");
      searchForm.querySelector("input").focus();
    }
  });

  // Expand sidebar by default on large screens
  if (window.innerWidth > 768) sidebar.classList.remove("collapsed");

