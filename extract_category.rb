require 'json'

# Define the directories and categories
categories = ["writing", "note"]

# Initialize a hash to store the category for each post
category_hash = {}

# Loop through each category directory
categories.each do |category|
  # Change the working directory to the current category
  Dir.chdir("src/content/#{category}/") do
    # Read all files in the current directory
    Dir.glob("*.*").each do |current_file_name|
      # Remove the file extension to use as the key
      current_file_key = current_file_name.split('.')[0]

      # Assign the category to the post
      category_hash[current_file_key] = category
    end
  end
end

# Write the category hash to categories.json
File.open('categories.json', 'w') do |file|
    file.write(JSON.pretty_generate(category_hash))
  end
  
  puts "Categories have been written to categories.json"