Corrected genus-2 MRNC special-fibre pictures
================================================

This package contains one standalone TikZ file and one SVG for each row of
script.js.  The generic parameters in Tim Dokchitser's MRNC pictures have been
rewritten in terms of the Namikawa--Ueno family parameters used in Tables
7.1--7.7 of the paper.

The exceptional parameter value -1 is deliberately not treated separately.
No cluster pictures are included.

Contents
--------

images/special-fibres/<id>.svg   corrected SVGs for the website
tikz/<id>.tex                    standalone corrected TikZ sources
script.js                        dataset with paths changed to the corrected SVGs
script.txt                       same content, convenient for copying
mapping.txt / mapping.json       source-to-target substitutions and audit trail

Installation
------------

Replace the existing genus2-special-fibres folder with this folder, and replace
your current script.js with the script.js supplied here.  app.js does not need
to change.

Notes on two combined rows
--------------------------

The current dataset combines two symmetric labels in each of the following rows:

* II_{m-l} / II_{l-m} (p182): the picture is drawn as I^*_{l,m-1}; swapping l
  and m gives the other convention.
* I^*_l-I_m-t / I_l-I^*_m-t: the picture is drawn as I_l-I^*_m-t; swapping l
  and m gives the other convention.

These are recorded explicitly in mapping.txt.
