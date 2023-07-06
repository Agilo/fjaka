/**
 *
 * @param {import('jquery')} $
 */
export default function ($) {
  $(".js-offcanvas-toggle").on("click", function () {
    $(".c-offcanvas").toggleClass("is-active");
  });
}
