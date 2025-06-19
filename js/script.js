(function ($, Drupal) {
  Drupal.behaviors.iitbPopup = {
    attach: function (context, settings) {
      console.log("Popup behavior attached");

      // ✅ Popup open
      $('.open-popup', context).once('open-popup').on('click', function (e) {
        e.preventDefault();
        $('#registration-popup', context)
          .css('display', 'flex')
          .hide()
          .fadeIn();
      });

      // ✅ Popup close (X)
      $('.close-btn', context).once('close-popup').on('click', function () {
        $('#registration-popup', context).fadeOut(function () {
          $(this).css('display', 'none');
        });
      });

      // ✅ Close popup when clicking outside
      $(window).once('popup-outside').on('click', function (e) {
        const popup = $('#registration-popup .popup-content');
        if (!popup.is(e.target) && popup.has(e.target).length === 0) {
          $('#registration-popup', context).fadeOut(function () {
            $(this).css('display', 'none');
          });
        }
      });

      // ✅ Tabs for Mapathon Themes
      $('.theme-tabs .tab', context).once('theme-tabs').on('click', function () {
        const $tab = $(this);
        const selectedTab = $tab.data('tab');

        // Toggle tab active class
        $tab.addClass('active').siblings().removeClass('active');

        // Toggle content visibility
        $('.theme-tabs .tab-content', context)
          .removeClass('visible')
          .filter('#' + selectedTab)
          .addClass('visible');
      });

      // ✅ Sticky Menu on Scroll
      if (!context.querySelector('.menu-bar').classList.contains('menu-sticky-initialized')) {
        const menu = context.querySelector('.menu-bar');
        if (menu) {
          const menuOffset = menu.offsetTop;
          window.addEventListener('scroll', function () {
            if (window.pageYOffset > menuOffset) {
              menu.classList.add('menu-fixed');
            } else {
              menu.classList.remove('menu-fixed');
            }
          });
          menu.classList.add('menu-sticky-initialized'); // Prevents multiple bindings
        }
      }
    }
  };
})(jQuery, Drupal);
