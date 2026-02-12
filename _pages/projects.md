---
layout: page
title: research
permalink: /projects/
description: Research projects and experience
nav: true
nav_order: 3
display_categories: [work, fun]
horizontal: false
---

## Research Experience

I am currently involved in the [FLIMFLAM survey](https://ui.adsabs.harvard.edu/abs/2022ApJ...928....9L/abstract), an effort to map foreground galaxies along FRB sightlines to constrain key parameters describing the distribution of ionized matter in the CGM and IGM to ~20% precision. I lead spectroscopic observational efforts with the Keck and Gemini telescopes for redshift estimation and am involved in imaging, spectroscopy, data reduction, and Bayesian inference for matter density reconstruction.

As a current member of the [$F^4$ team](https://sites.google.com/ucolick.org/f-4/home), I participate in the planning, execution, and data reduction of optical observations of localized FRBs with telescopes such as Keck, Gemini, and SOAR. These observational campaigns aim to identify FRB host galaxies, characterize their properties, and study foreground matter along FRB sightlines.

## Research Highlights

- **FLIMFLAM Survey**: Leading redshift survey of foreground galaxies along FRB sightlines
- **Optical Follow-up**: Member of the $F^4$ team conducting optical observations with Keck and Gemini
- **Instrumentation**: Involved in characterizing and upgrading the Low-Resolution Imaging Spectrograph (LRIS) at Keck Observatory
- **Host Galaxy Studies**: Identifying and characterizing FRB host galaxies and their cosmic environments

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
