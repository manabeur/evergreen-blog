require 'json'
require 'uri'

Dir.chdir('src/content/notes/')

# Function to extract links in the format [name](link)
def extract_links(content)
    # Regex to capture links, ignoring images and external links
    links = content.scan(/\[(?!\]).*?\]\((?!https?:\/\/).*?\)/).map { |link| link.match(/\[(.*?)\]\((.*?)\)/)[2] }
  
    links.map { |link| link.gsub(%r{^/notes/}, '').split('/').last }
end

# Initialize a hash to store links
links_hash = {}

# Read all files in the current directory
Dir.glob("*.*").each do |current_file_name|
  # Skip if it's the backlinks.json file
  next if current_file_name == 'backlinks.json'

  # Read the content of the current file
  content = File.read(current_file_name)

  # Extract links from the content
  links = extract_links(content)

  # remove the extension
  current_file_name = current_file_name.split('.')[0]
  # Add the links to the hash if any found
  links_hash[current_file_name] = links unless links.empty?
end

# Write the links hash to backlinks.json
File.open('backlinks.json', 'w') do |file|
  file.write(JSON.pretty_generate(links_hash))
end

puts "Links have been extracted and written to backlinks.json"
