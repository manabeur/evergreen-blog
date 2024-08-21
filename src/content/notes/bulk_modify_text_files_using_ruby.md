---
title: "Bulk modify text files using Ruby"
category: "Ruby"
pubDate: "Aug 1 2024 18:03"
---

Rules:
1. Replace an empty space (` `) with an underscore character (`_`)
2. Replace `.txt` extension with `.md` markdown extensions
3. Change all characters to lowercases for the file name

```rb
require 'fileutils'

# Set the directory path
directory = './notes'

# Iterate through each file in the directory
Dir.glob(File.join(directory, '*.txt')).each do |file|
  # Get the base name of the file (without the directory path)
  basename = File.basename(file).downcase
  
  # Extract the file name without extension to use as title
  title = File.basename(file, '.*')
  
  # Create the new filename:
  # 1. Replace spaces with underscores
  # 2. Replace .txt extension with .md
  new_name = basename.gsub(' ', '_').sub(/\.txt$/, '.md')
  
  # Create the full path for the new filename
  new_path = File.join(directory, new_name)
  
  # Read the content of the file
  content = File.read(file)
  
  # Create the front matter
  front_matter = "---\ntitle: \"#{title}\"\n---\n\n"
  
  # Write the new content with front matter to the new file
  File.open(new_path, 'w') do |new_file|
    new_file.write(front_matter + content)
  end
  
  # Delete the original file
  File.delete(file)
  
  puts "Processed: #{basename} -> #{new_name}"
end

puts "File processing completed!"
```