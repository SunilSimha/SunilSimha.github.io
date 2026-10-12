---
layout: page
title: Outreach
permalink: /outreach/
description: My research without the jargon, in talks and short explainers.
nav: true
nav_order: 4
---

I study fast radio bursts: flashes of radio waves from distant galaxies that last about a thousandth of a second. This page explains what they are and what we learn from them, for readers with no astronomy background.

## Watch

<div class="outreach-videos">
{% for video in site.data.outreach_videos %}
  {% include outreach_video.liquid video=video %}
{% endfor %}
</div>

## Read

Each of these is a plain-language summary of one of my papers, with a link to the paper itself.

<div class="projects outreach-cards">
  <div class="row row-cols-1 row-cols-md-3">
    {% assign explainers = site.outreach | reverse %}
    {% for explainer in explainers %}
      {% include outreach_card.liquid %}
    {% endfor %}
  </div>
</div>
