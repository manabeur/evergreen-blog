#!/bin/bash

ruby extract_category.rb && ruby extract_links.rb
mv backlinks.json src/components/
mv categories.json src/components/