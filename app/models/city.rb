class City < ApplicationRecord
    def self.search_all_city_with_country(city)
        City.where("lower(name) LIKE ?", "#{city.downcase}")
    end
end
