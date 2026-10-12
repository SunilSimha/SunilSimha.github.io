---
layout: page
title: Code
permalink: /code/
description: Open-source software I contribute to.
nav: true
nav_order: 5
---

Most of my research runs on open-source code, and I contribute to the packages I use. These are the main ones.

## FRB

[FRB](https://github.com/FRBs/FRB) is a community Python package for fast radio burst science: dispersion measure calculations, host galaxy analysis, FRB-galaxy association, and queries of public sky surveys. I have made substantial contributions across the package, most recently a rewrite of the module that retrieves catalogs and images from public surveys.

<p>
  <a class="filled-button" href="https://github.com/FRBs/FRB">
    <i class="fa-brands fa-github"></i>
    FRBs/FRB
  </a>
</p>

## LLAMAS-pyjamas

[LLAMAS-pyjamas](https://github.com/mit-kavli-institute/llamas-pyjamas) is the data reduction pipeline for LLAMAS, the integral-field spectrograph on the Magellan telescopes. My fork adds dark subtraction and a set of post-reduction steps: flux calibration, astrometric correction, combining data cubes, and fitting emission lines in every spaxel.

This is the code behind my paper on [spatially resolved metallicities of FRB host galaxies](https://scixplorer.org/abs/2026arXiv261007325S/abstract), which I explain in plain language [here]({% link _outreach/2026-simha-chemical-maps-of-frb-homes.md %}).

<p>
  <a class="filled-button" href="https://github.com/SunilSimha/llamas-pyjamas">
    <i class="fa-brands fa-github"></i>
    SunilSimha/llamas-pyjamas
  </a>
</p>

## Other contributions

I have also contributed to two packages used to reduce slitmask data from the LRIS spectrograph at Keck Observatory:

- [PypeIt](https://github.com/pypeit/PypeIt), the Python spectroscopic data reduction pipeline.
- [tilsotua](https://github.com/KeckObservatory/tilsotua), which reconstructs the sky positions of the slits in LRIS slitmasks.
