Trestle.ready(function() {
  var sidebar = $('.app-sidebar');

  // Toggle mobile navigation using menu button

  sidebar.find('.navbar-toggle').on('click', function(e) {
    e.preventDefault();

    $('.app-wrapper').addClass('animate');
    $('body').toggleClass('mobile-nav-expanded');
  });

  $('.app-wrapper').on('transitionend webkitTransitionEnd', function() {
    $(this).removeClass('animate');
  });


  // Interacting outside of the sidebar closes the navigation

  $('.app-wrapper').on('click touchstart', function(e) {
    var navExpanded = $('body').hasClass('mobile-nav-expanded');

    var clickInHeader = $(e.target).closest('.app-header').length;
    var clickInSidebar = $(e.target).closest('.app-sidebar').length;

    if (navExpanded && !clickInHeader && !clickInSidebar) {
      e.stopPropagation();
      e.preventDefault();

      $('.app-wrapper').addClass('animate');
      $('body').removeClass('mobile-nav-expanded');
    }
  });


  // Toggle sidebar expand/collapse

  sidebar.find('.toggle-sidebar').on('click', function(e) {
    e.preventDefault();

    if (sidebar.hasClass('expanded') || sidebar.hasClass('collapsed')) {
      sidebar.removeClass('expanded').removeClass('collapsed');
      document.cookie = "trestle:sidebar=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    } else if ($(document).width() >= 1200) {
      sidebar.addClass('collapsed');
      document.cookie = "trestle:sidebar=collapsed; path=/";
    } else if ($(document).width() >= 768) {
      sidebar.addClass('expanded');
      document.cookie = "trestle:sidebar=expanded; path=/";
    }
  });
});
