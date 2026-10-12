---
title: Can we get away with not so detailed observations of the galaxies a radio flash passed through?
paper_key: Simha2021
paper_title: Estimating the Contribution of Foreground Halos to the FRB 180924 Dispersion Measure
reference: Simha et al. 2021, The Astrophysical Journal
paper_url: https://scixplorer.org/abs/2021ApJ...921..134S/abstract
arxiv: https://arxiv.org/abs/2108.09881
img: assets/img/publication_preview/simha2021_dmhalos.png
---

**TL;DR:** one burst passed through less gas than expected, and we showed that this is likely because it did not pass close to any galaxy on its long trip to Earth.

## The context

If you've not yet read my [previous post]({% link _outreach/2020-simha-cosmic-web-frb190608.md %}), you might want to do that first. It explains how we can use a burst's "dispersion measure" to count how much gas it passed through, and how we can map the galaxies along its path to see where that gas sits. In this work, I led a study of a different burst, which passed through less gas than expected for its distance. We wanted to know why. However, unlike FRB 190608, we did not have the relevant data from the SDSS survey for galaxies along the path of the burst. This meant we could not precisely measure the distance to each galaxy, making it hard to estimate the gas contribution from each one. So we asked: can we still say something useful about the burst's path, even with only rough distance estimates for the galaxies?

## What did we do?

The best way to answer is to measure the distance to every galaxy near the burst's path, but that takes many nights on large telescopes. For this burst we mostly had only pictures.

So we used galaxy "colors" to roughly estimate distances. Astronomers define color as the ratio of brightnesses of a galaxy when viewed with different light filters. A closer galaxy has more blue light than red on average than a galaxy that is farther away. More precisely, we estimated, what is called "photometric redshifts", i.e., we fit a galaxy light model to the brightnesses observed in 5-8 different filters and back out an estimate of how far away it is. This is less precise than "spectroscopic redshifts", which requires splitting the light into a spectrum. i.e., instead of using 5-8 images of a galaxy, you use a spectrum usually with thousands of data points telling you how bright it is at each wavelength. As you can imagine, this is harder to do for a large number of galaxies.

Then, I build a framework to figure out how much gas the burst would have passed through iterating over all the possible distances each foreground galaxy would be from the photometric redshifts and uncertainties. This gave us a probability distribution of the total gas contribution from all the galaxies along the burst's path.

## What did we find?

- No galaxy sits close enough to the burst's path to account for the majority of the gas it passed through.
- The gas clouds around galaxies added, at most, about a third of what they do for a typical path of this length.
- That is enough to explain why the burst's gas count is low.

## Why does it matter?

This is probably what most paths through the universe look like. Space is mostly empty, and a straight line across it usually misses the galaxies, a bit like walking through a sparse wood without brushing against a tree.
The method is also cheaper. It needs only pictures, so it gives a quick first look at any burst and helps decide which ones deserve precious time on the largest telescopes.

## Words you'll see in the paper

- **Dispersion measure (DM):** the count of how much gas a burst passed through.
- **Halo:** the large, invisible cloud of gas and dark matter that surrounds every galaxy.
- **Photometric redshift:** a galaxy's distance estimated from its colours.
- **Spectroscopic redshift:** a more precise distance, which takes much more telescope time to measure.
