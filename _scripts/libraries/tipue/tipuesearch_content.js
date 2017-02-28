---
---

var tipuesearch = {"pages": [
  {% for author in site.authors %}
    {% if author.inSearch %}
      {
        "title" : "{{author.name}}",
        "text" : `{{author.content | strip_html | strip_new_lines}}`,
        "url" : "{{author.url}}",
        "tags" : "author"
      },
    {% endif %}
  {% endfor %}
  {% for party in site.parties %}
    {% if party.inSearch %}
      {
        "title" : "{{party.title}}",
        "text" : `{{party.content | strip_html | strip_new_lines}}`,
        "url" : "{{party.url}}",
        "tags" : "party"
      },
    {% endif %}
  {% endfor %}
  {% for page in site.pages %}
    {% if page.inSearch %}
      {
        "title" : "{{page.title}}",
        "text" : `{{ page.content | strip_html | strip_new_lines }}`,
        "url" : "{{page.url}}",
        "tags" : ""
      },
    {% endif %}
  {% endfor %}
  {% for post in site.posts %}
    {% if post.inSearch %}
      {
        "title" : "{{post.title}}",
        "text" : `{{post.content | strip_html | strip_new_lines}}`,
        "url" : "{{post.url}}",

        {% assign tags = post.tags %}
        {% comment %}
          Build a list of the dietry requirements the recipe follows
        {% endcomment %}
        {% if post.recipe %}
          {% assign requirements = site.data.Dietry-Requirements.dietry-requirements %}
          {% assign tags = tags | push: "recipe" %}

          {% assign restrictions = "" | split: "" %}
          {% for ingredient in page.recipe.ingredients %}
            {% assign ingredient-detail = site.data.Ingredients[ingredient.item] %}
            {% if ingredient-detail.dietry-requirements %}
              {% for restriction in ingredient-detail.dietry-requirements %}
                {% assign restrictions = restrictions | push: restriction %}
              {% endfor %}
            {% endif %}
          {% endfor %}

          {% assign restrictions = restrictions | uniq %}

          {% for requirement in requirements %}
          {% assign isSafe = true %}
          {% for restriction in restrictions %}
            {% if requirement[0] == restriction %}
              {% assign isSafe = false %}
              {% break %}
            {% endif %}
          {% endfor %}

          {% if isSafe %}
            {% assign tags = tags | push: requirement[1].safe %}
          {% endif %}
          {% endfor%}
        {% endif %}
        "tags" : "{{ tags | join: ','}}"
      },
    {% endif %}
  {% endfor %}
  {
    "title" : "",
    "text" : "",
    "url" : "",
    "tags" : ""
  }
]};
