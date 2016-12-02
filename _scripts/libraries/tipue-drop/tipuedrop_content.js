---
---
var tipuedrop = {"pages": [
     {"title": "Tipue Search", "thumb": "img/search.png", "text": "a site search engine jQuery plugin", "url": "http://www.tipue.com/search"},
     {"title": "Tipue drop", "thumb": "img/drop.png", "text": "a search suggestion box jQuery plugin", "url": "http://www.tipue.com/drop"},
     {"title": "Tipr", "thumb": "img/tipr.png", "text": "a small and simple tooltip jQuery plugin", "url": "http://www.tipue.com/tipr"}
]};

var tipuedrop = {"pages" : [
  {% for author in site.authors %}
    {% if author.inSearch %}
      {
        "title" : "{{author.name}}",
        "thumb" : "{{author.picture-root}}{{include.author.picture}}",
        "text" : `{{author.content | strip_html }}`,
        "url" : "{{author.url}}"
      },
    {% endif %}
  {% endfor %}
  {
    "title" : "",
    "thumb" : "",
    "text" : "",
    "url" : ""
  }
]};
