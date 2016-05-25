$(document).ready(function (){
  var panels = $('.-subscription-panel-main');
  var curPanel = $(panels[0]);

  var secondaryItems = $('.subscription-panel-secondary-item')

  panels.hide();
  curPanel.show();
  $('.-subscription-panel-secondary').css('display','flex')
  $(secondaryItems[0]).addClass("active")

  secondaryItems.on('mouseover click', function(){
    curPanel.hide();
    secondaryItems.removeClass('active')

    var source = $(event.target)
    if(source.prop('nodeName')==='IMG'){
      source = source.parent()
    }
    source.addClass('active')

    var id = source.attr('id').split('-').pop()
    id = '#-subscription-panel-main-'.concat(id)

    curPanel = $(id)
    curPanel.show()
  })
})
