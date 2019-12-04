class City < ApplicationRecord
    def self.search_all_city_with_country(city)
        City.where("lower(name) LIKE ?", "#{city.downcase}")
    end

    def weather
        puts "CITY APIIIIIIIIIIIIIIIIIIIIIIII"
        puts ENV['OPEN_WEATHER_API']
        url = "http://api.openweathermap.org/data/2.5/weather?q=3837823&APPID=#{ENV['OPEN_WEATHER_API']}"
    end
end
