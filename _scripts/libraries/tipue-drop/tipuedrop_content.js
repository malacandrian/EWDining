---
---
var tipuedrop = {"pages" : [

  {% for party in site.parties %}
    {% if party.inSearch %}
      {
        "title" : "{{party.title}}",
        "thumb" : "{{party.icon-root}}{{party.icon-path}}",
        "text" : `{{party.content | strip_html}}`,
        "url" : "{{party.url}}"
      },
    {% endif %}
  {% endfor %}
  
  {% for author in site.authors %}
    {% if author.inSearch %}
      {
        "title" : "{{author.name}}",
        "thumb" : "{{author.picture-root}}{{author.picture}}",
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
