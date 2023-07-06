/**
 *
 * @param {import('jquery')} $
 */
export default function ($) {
  $(".js-hamburger-icon").on("click", function () {
    $(this).toggleClass("is-active");
  });
}
