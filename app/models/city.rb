class City < ApplicationRecord
    def self.search_all_city_with_country(city, country)
        City.where("lower(name) LIKE ? AND lower(country) LIKE ?", "#{city.downcase}", "#{country.downcase}")
    end

    
end
