// get all styles from element
function css(a){
    var o = {};
    var rules = window.getMatchedCSSRules(a.get(0));
    for(var r in rules) {
        o = $.extend(o, css2json(rules[r].style), css2json(a.attr('style')));
    }
    return o;
}

function css2json(css){
    var s = {};
    if(!css) return s;
    if(css instanceof CSSStyleDeclaration) {
        for(var i in css) {
            if((css[i]).toLowerCase) {
                s[(css[i]).toLowerCase()] = (css[css[i]]);
            }
        }
    }
    else if(typeof css == "string") {
        css = css.split("; ");
        for (var i in css) {
            var l = css[i].split(": ");
            s[l[0].toLowerCase()] = (l[1]);
        };
    }
    return s;
}

$(document).ready(function(){

  $(".text > a").click(function(event){
    event.preventDefault();

    // var $textarea = $("<textarea></textarea>");
    // var style = css($("h2.asd"));
    // $textarea.css(style);
    // $textarea.css({
    //   'background-color':'transparent'
    //   ,'height':'250px'
    //   ,'padding':'10px'
    //   ,'width':'100%'
    // });
    // $textarea.html($("h2.asd").html());
    // $("h2.asd").replaceWith($textarea);

    $(event.currentTarget).parent().siblings('.preview').addClass('open');

  });

  $("textarea").keypress(function(event){
    var text = $(event.target).text();
    alert(text);
    $(".preview-text").each(function(i,obj){
      console.log(obj,i);
      $(obj).html($(event.target).html());
    });
  });

});