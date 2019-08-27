var $menu = $('.dropdown');

$(document).mouseup(function (e) {
    if (!$menu.is(e.target)
&& $menu.has(e.target).length === 0)
{
    $menu.removeClass('is-open');
}
});

$('.toggle').click(function () {
    $menu.toggleClass('is-open');
});