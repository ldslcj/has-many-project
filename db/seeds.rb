# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Library.destroy_all
Book.destroy_all

5.times do
    library = Library.create(name: Faker::University.name, location: Faker::Address.street_name)
    3.times do |i|
        library.books.create(name: Faker::Book.title, author: Faker::Book.author)
    end
end
puts "seeded"